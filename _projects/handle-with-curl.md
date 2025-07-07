---
title: "Handle with Curl"
excerpt: "Multithreaded file upload/download with asynchronous file server updating"
collection: projects
permalink: /projects/handle-with-curl/
---

# Handle with Curl README
By Krishna Mehta

## Handle with Curl

The handle with curl server portion of the project creates a multi-threaded server which responds to client requests and fetches files from a server using libcurl's "easy" C interface.  

### Project Design and Flow Control

The project design is shown in the diagram below. The client makes a request to the proxy server. The proxy server implements threads to serve requests from clients. The threads will serve requests using a handler. The handler uses libcurl to request the file from the server. Libcurl allows the handler to create write callbacks for writing the data read from the server into memory. After the file is written to local memory, the handler will send the file back to the client and exit.

![curldesign](/images/handle-with-curl-images/curldesign.png)

The callback function writing into a local data structure containing the data and size of file is created by [hackthissite.org](https://www.hackthissite.org/articles/read/1078).

The handler contains a majority of the logic necessary for file transer so the flow control is shown below.

![curlflow](/images/handle-with-curl-images/curlflow.png)

### Implementation and Trade Offs

There were many different ways of accomplishing the file transfer to the client. One method is to use the webpage info to find if the file exists and what the size of the file is prior to sending the file in chunks. This is more memory efficient as the handler does not need to write the file locally to memory which may present problems if multiple large files are requested at the same time. The other method is to write the file to memory and find the size of the local file prior to sending the file.

The first method is more memory efficient, but more complicated in implementation as processing the header data from the webpage requires difficult string processing. The second method is less memory efficient, but far simpler to implement as the webpage header does not need to be processed and files can instantly be downloaded upon being found. The second method was chosen for its simplicity.

### Testing

Testing for this project included making multiple requests using the client for files that existed as well as did not exist to ensure the proper responses were being sent and the client was not left hanging. The proxy and client threads were also manipulated to ensure the multithreaded components did not cause any corruption or unthread-safe actions.

## Handle with Cache

The handle with cache portion of the project creates a multi-threaded proxy which responds to client requests by requesting files from a cache. The multi-threaded cache processes the requests and returns files if found using IPC mechanisms which will be discussed below.

### Project Design and Flow Control

The design of the project was complicated due to the nature of setting up IPC mechanisms including a message queue and shared memory segments. The diagram below showcases the relationships between the Proxy, Handler, and Cache.

![cachedesign](/images/handle-with-curl-images/cachedesign.png)

The proxy creates shared segments of memory and creates threads which are invoked when the client sends a request. The proxy opens a POSIX message queue which is created by the cache. The proxy also creates shared memory segments with the POSIX API. The proxy will then map a data structure to the shared segment which contains metadata used by the handler and cache to perform synchronous data writing. The proxy achieves the synchronization for data writing to shared memory via POSIX semaphores. The proxy pushes the data structure onto a steque for use by handler threads.

![handlercachesync](/images/handle-with-curl-images/handlercachesync.png)

The handler threads which are created by the proxy put a request together using the file requested by the client as well as shared memory information contained in the metadata section of the data structure which the proxy has mapped into the shared memory segment. The handler will pop a shared memory segment from the steque loaded by the proxy and will put a message together consisting of the segment size, segment name, and file requested. The handler will then send the message via the message queue to the cache. 
The handler waits on a semaphore before checking a flag for whether the cache has found the file. On an unsuccessful find, the handler will perform basic cleanup. On successful find, the handler will send the data contained in the shared memory segment and use semaphores to coordinate synchronous data writing/reading with the cache. After the entire file has been sent to the client, the handler will perform the basic cleanup.
The basic cleanup consists of resetting some of the metadata prior to pushing the shared memory structure back into the steque for another thread to use.

The cache creates a POSIX message queue for communication with the proxy server. The cache is responsible for this as multiple proxies may connect with the same cache which needs to process all requests in an orderly fashion without missing a request. When a request is received in the queue, the cache will push the request into a steque for a worker to pick up.
The cache worker will take a request from the request queue and process the request for information about which shared segment to attach to as well as which file is being requested. The cache worker attaches to the POSIX shared memory segment and will update the flag to notify the handler if the file is found or not. If the file is found, the cache worker also writes a chunk of the file to the buffer in the shared memory segment for the handler to read and then waits on a POSIX semaphore. The POSIX semaphores will provide the synchronization mechanisms needed to prevent corruption and facilitate a successful file transfer.
Because the cache does not own the shared memory segments it does not complete any cleanup related to the shared memory segment and simply releases the request before waiting on new requests to come in.

### Implementation and Trade Offs

The major design choice which drove the project design was choosing the IPC mechanism for synchronous data transfer between the Proxy's Handler threads and the Cache worker threads. 
I chose to use a POSIX message queue for sending the request between the Proxy Handler and the Cache as POSIX message queues are easier to implement than SysV message queues. Message queues were chosen over the alternative of using a UNIX socket as UNIX sockets required more code for set up and using message queues would give me exposure to a different IPC mechanism.
Another alternative for communication between the Proxy Handler and Cache is just using the shared memory segments with semaphores and creating a string within the shared memory structure for the request; however, this would require extra semaphore coordination which would require more complicated logic than using the message queue.

The second major design choice is for the shared memory segments and synchronization for reading/writing to the shared memory. The shared memory segments and semaphores used for the project are from the POSIX API. The POSIX shared memory allows for reading/writing by multiple processes even though they have different virtual memory spaces. Using shared memory was a requirement of the project and the POSIX API is simpler to use than the SysV API. POSIX semaphores are used for the synchronization allowing the reader and writer to operate on the shared memory segment while not attempting to access data at the same time.

The Proxy owns the data channel (shared memory segments) as the proxy is creating the requests to the Cache and therefore is responsible for creating the mechanisms by which the Cache will respond. This allows the Proxy to also clean up the shared memory on exit without interrupting the processes of the Cache. The Cache owns the command channel (message queue) and is therefore responsible for creating and cleaning up the message queue. This allows the Cache to connect to multiple Proxies at the same time.

The Proxy threads cycle the shared memory segments by use of a mutex protected steque. This ensures that all segments are only picked up by one thread and are replaced into the steque when the thread is finished allowing another thread to pick up the segment. This approach also enables efficient use of the segments and prevents threads from being starved or competing for resources. A drawback of this design is that the maximum number of Client requests which can be served at a time is the minimum between number of segments and number of threads. Because the Proxy is responsible for creating shared memory segments as well as the threads which will use the segments, ideally the number of threads and segments should be the same; however due to hardware constraints or constraints of a customer using the software, this may not always be an option so for robustness the threads should be able to share the resources.

### Testing

Testing was performed using different request sizes, number of threads in Proxy and Cache, and variable number of segments. Files which did not exist were tested as well as text files and images. The program was also tested for memory leaks and proper cleanup of the resources to ensure information did not persist which would cause error on consecutive uses of the program.

## References
The following references were used:

[man7](https://man7.org/index.html):
- [mq_open](https://man7.org/linux/man-pages/man3/mq_open.3.html)
- [mq_receive](https://man7.org/linux/man-pages/man2/mq_timedreceive.2.html)
- [mq_send](https://man7.org/linux/man-pages/man3/mq_send.3.html)
- [mq_unlink](https://man7.org/linux/man-pages/man3/mq_unlink.3.html)
- [mq_close](https://man7.org/linux/man-pages/man3/mq_close.3.html)
- [shm_open/shm_unlink](https://man7.org/linux/man-pages/man3/shm_open.3.html)
- [mmap](https://man7.org/linux/man-pages/man2/mmap.2.html)
- [sem_init](https://man7.org/linux/man-pages/man3/sem_init.3.html)
- [sem_post](https://man7.org/linux/man-pages/man3/sem_post.3.html)
- [sem_wait](https://man7.org/linux/man-pages/man3/sem_wait.3.html)
- [An Introduction to Linux IPC](https://man7.org/conf/lca2013/IPC_Overview-LCA-2013-printable.pdf)

Polish-Japanese Academy of Information Technology
- [POSIX.4 Message Queues](https://users.pja.edu.pl/~jms/qnx/help/watcom/clibref/mq_overview.html)

LinuxHint
- [POSIX Message Queues with C Programming](https://linuxhint.com/posix-message-queues-c-programming/)

HackThisSite
- [A Beginner’s Guide to LibCurl](https://www.hackthissite.org/articles/read/1078)

# Source Code
If you're a recruiter, I can make the code available as part of the application process; however, as the code relies on boilerplate and some setup created by GATech and is part of an active course, I am unable to share the entirety of the code to the public.