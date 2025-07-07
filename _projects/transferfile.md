---
title: "Transferfile"
excerpt: "Singlethreaded and Multithreaded file transfer"
collection: projects
permalink: /projects/transferfile/
---

# Transferfile README
By Krishna Mehta

## Echo

The echo portion of the project introduces the concept of socket creation and sending of messages from a client to a server and recieving the message back from the server to the client.

### Project Design and Flow Control
The project design is quite simple. The following image illustrates the flow control for creation of a client and server and sending of messages between the client and server.

![echo](/images/transferfile-images/echo.png)

### Implementation and trade offs
There were no trade offs that were necessary due to the simplicity of the programs. A possible consideration was creating handling to specifically address each of IPv4 and IPv6; however, this was not necessary as the approach taken was able to cover both of these. The implementation used follows the guide that Beej lays out in Beej's Guide to Network Programming included in the References section. The only point to note is as it is not certain if the server will be sending back a null terminated character array, the client appends a null terminator to the message sent back by the server.  

### Testing
Due to the simplicity in nature of the code, the testing required was not complex either. My testing included ensuring that messages were being delivered and echoed back as well as ensuring there were no memory leaks in the code.


## Transferfile

The transferfile portion of the project builds upon the first section and when a client connects to a server, the server will read and send a file to the client. The client will then write the file to complete downloading it.

### Project Design and Flow Control
The project design follows that of the previous section; however, there are a few key differences due to the nature of sending a file of undetermined length as opposed to the fixed length messages sent in the previous section.

![transferclient](/images/transferfile-images/transferclient.png)

The flow control shows the similarities in socket creation and usage. Some of the code for this section was used from the previous section. There are three main loops of importance in this section. The loop in client ensures that the client will continue to `recv()` and `fwrite()` while the server is still sending data. The server will initiate closing the socket which will let the client know when there is no more data to be received. The server has two loops. The first loop is to ensure the server will stay open and handle proper `close()` and `flcose()` to clean up a client's socket file descriptor and close the file to send respectively. The server should be able to handle multiple requests so the server stays open while closing the connection with the client. The second loop makes the server continue to `fread()` and `send()` the data read from the file until the end of file. As the server is sending the file, only the server knows when the file is being sent and will have to ensure it closes the socket to signal to the client the data transfer is over.

### Implementation and trade offs
The implementation of this section greatly follows the previous section. Some of the main differences in the client code is how the message is recieved. As the server is sending a file, the client does not print out the message buffer, but writes the data to a file. I used a buffer to save the data that was being recieved by the client and would write that do the file. The algorithm used was simple as I would run a minimum of 1 `recv()` by running out of the loop and ensuring that my exit condition was properly bringing me out of the loop. For the server side the algorithm was slightly more complicated, but still simple. Until the end of file was reached the code will continue to `fread()` and `send()` data in chunks, while ensuring that all bytes that have been read have been successfully sent prior to reading a new chunk. This is done by counting bytes and continuing attempts to send the remaining bytes until all bytes have been sent. While not a treadeoff as the approach was unsuccessful, an initial attempt tried to send the full buffer size minus the bytes sent; however, as remaining attempts to send a chunk work with data smaller than the buffer size, this was leading to extra bytes being trasnferred and coprrupting the data being trasnferred.

### Testing
The testing for this section included using files of varying lengths to ensure proper data transfer. The algorithm described in the previous section required multiple tests to ensure proper file transfer at file lengths greater than the buffersize. Having a working client/sever from the previous section of the project ensured that a mock client or server could be created and to test against the current section server/client for basic connection and proper loop entering/exiting.


## Single Threaded Get File Client

The single threaded get file client (gfclient) carries on the lessons learned from transfer file and attempts to create a realistic client interaction with a server. The client sends a request in the format `GETFILE GET /path/` with a tail marker of `\r\n\r\n` following. The server sends a response back to the client which the client will parse to determine the next steps. If the file is not found, the server reports an error, or the server reports an invalid path to file the client will stop accordingly. Otherwise on an OK response, the client will parse the file length from the server and write the file to complete download of the file. The client will exit once it has written the size of the parsed file length.

### Project Design and Flow Control
The design of this section is quite different from the previous section. The code created makes use of a provided library which is also included in design and flow control for completeness.

The client runs on a driver program in `gfclient_download.c`. The driver function is responsible for receiving any command line arguments as well as opening the file to write to. The driver program calls the methods in `gfclient.c` which is the library responsible for passing a request to the server, parsing the response, and then using callbacks to perform the writing if necessary.

The diagram below shows the interactions between the driver, library, and call back function.

![gfclient_high](/images/transferfile-images/gfclient_high.png)

The diagram below shows the design and flow control of the library's main function `gfc_perform()` which is responsible for creating a request from the path given by the driver function, parsing the response from the server, and utilizing the call back in order to write the file if needed.

![gfc_perform](/images/transferfile-images/gfc_perform.png)

The perform function is responsible for a majority of the library operations. The other library functions include creating a struct to encaspulate the data needed for the client to perform and setting values in the struct so arguments sent by the Driver are used. The design is very linear as `gfc_perform()` goes through its steps in order with not many loops or extra functions necessary.

### Implementation and trade offs
The implementation of this section required some thought as parsing the data from the server proved to be more difficult than anticipated. The first major implementation is the socket creation. This follows the previous sections as boilerplate socket code from Beej (see References). The request is assembled as a string as the path passed by the Driver is sent as a string. The request is then sent to the server and the response is parsed. This is the next major implementation. The source code includes parsing the responses that come in 1 byte at a time for simplicity. The trade off here is on time as the operations are run many times; however, this removes the need for detaching file content which may be sent with the header. The header is automatically separated as when the tail is found, the function operates on the header prior to receiving the remainder of the file. The file is then received and written in chunks for speed. An alternative would be to read in chunks for the header as well; however, due to the complexity of parsing the header and detaching the file, I went with the method explained. The next major implmentation is receiving the file. The file is received until bytes sent equals the file length parsed from the header and the server has not closed the socket. If the server closes early, the status is updated to reflect this; otherwise, a successful file download is completed.

### Testing
The testing for this section included creating a mock server which would send fragments of a header to the client to see if the response was properly parsed. Combinations of headers were used such that the conditions for error and file not found were also tested in single messages as well as chunks. There were binaries provided to simulate a completed single threaded server and this was the main testing used for the program. The binary provided allowed for checking if the files were correctly requested and downloaded by the client.

## Single Threaded Get File Server

The single threaded get file server forms the complement to the single threaded get file client in the previous section. The role of the server is to receive a request for a file from the client, and then notify the client if the request was invalid or if the file was not found. If the file is found, the server uses a handler function which is responsible for the call back to each request. The handler function will utilize send functions in the library to send the file to the client.

### Project Design and Flow Control
The high level design of this section is similar to the previous section. The driver function (`gfserver_main.c`) calls methods from the library (`gfserver.c`) which then makes use of a call back to the handler (`handler.o`). The handler calls send methods which are located in the library to complete the sending of the header response and file if necessary.

![gfserver_high](/images/transferfile-images/gfserver_high.png)

The diagram below shows the flow control for `gfserver_serve()` which is the main function in the library. This function handles parsing the request by the client, validating the request, and registering a call back to send the header and file.

![gfserver_serve](/images/transferfile-images/gfserver_serve.png)

The handler call back registered by `gfserver_serve()` is responsible for sending the header response, fiding and opening the file, as well as sending the file contents to the client. The handler capability is handled in a provided binary, `handler.o`, but `gfs_sendheader()` and `gfs_send()` are methods called by the handler which are in the `gfserver.c` library. The flow control for each of these functions is shown in the diagram below.

![gfserver_sendheader](/images/transferfile-images/gfserver_sendheader.png)

![gfserver_send](/images/transferfile-images/gfserver_send.png)

### Implementation and trade offs
The implementation of the server was simpler than the previous section of the client due to the simplicity in request parsing. The server only needs to parse the request from the client and send data read from file; however, the bulk of opening a file and reading is taken care of by `handler.o` leaving only implementing the send functions. The first major implementation is the request parsing carried out by `gfserver_serve()`. The method continues to receive bytes from the client until the tail is found or the client closes the connection early. Once the tail is found, the request is parsed to ensure proper formatting. The data passed in is converted to a string for this comparison; however, this is a trade-off that can be chosen to be avoided as C strings are harder to work with, and the data can be compared as bytes without string conversion. The path is then sent to the handler which calls `gfs_sendheader()` to send the header to the client. A switch is used for building the header using the status passed by the handler. The `send()` method is in a loop similar to what has been seen in previous sections where it is continuously sent until the full message has been sent. The `gfs_send()` method is called by the handler in the same loop to send the data content to the client. 

### Testing
Testing for this section was similar to the client section where a mock client was created to test the request parsing and ensure valid and invalid requests were flagged as such. The testing for the send methods consisted of using the client from the previous section to make sure the files were being downloaded. The code was also tested against the binaries similar to the previous section to ensure robustness against multiple client versions.

## Multithreaded Get File Client

The multithreaded get file client builds upon the single threaded get file client by introducing pthreads to handle multiple requests at the same time. The scope of this section did not include repeating the work carried out in the previous section; however, as the driver function `gfclient_download.c` would contain the handling of threads and multiple request processing, the changes in code were carried out there.

### Project Design and Flow Control
The project design for the multithreaded client follows the high level design of the single threaaded client. The differences come in how the Driver function, `gfclient_download.c`, creates multiple threads to handle requesting and downloading multiple files at the same time. The following diagram shows how the Driver function creates threads as well as the usage of threads to request and download files.

![mtgf_driver](/images/transferfile-images/mtgf_driver.png)

The flow of the threads is based on the number of requests to be served. Threads will repeat dequeueing from the steque the Driver has set up, until all requests have been served. Threads exit when they see no more requests to be served.

### Implementation and trade offs
The first major implementation is the creation of the threads. The worker loops creating threads which are passed in a struct containing the information they will need in order to handle their requests. The struct passed to each thread includes the server, port, steque, and a unique id. The id is not necessary; however, it is included to assist with debugging and testing of the program. The typical implementation of thread creation includes locks whenever the critical section is to be performed. The critical section in this program is any altering of the steque which all workers and the Driver must use. The threads use broadcast as suggested by Dr. Ada Gavrilovska in Lecture Section P2L3; however, Dr. Gavrilovska notes this is for a general case when the intended effect is not clear, but it is more precise to use signal. This program includes a broadcast as I was unsure of how to use conditional variable signalling when starting the project. I also unlock the mutex prior to broadcasting; however this can lead to unintended behavior as someone may lock the mutex prior to the broadcast being sent. In hindsight the broadcast is also not efficent as it leads to spurious wakeups as only one thread can access the mutex at a time. In order to keep the program efficient and fast, the Driver is only responsible for enqueuing to the steque and the workers do the majority of a work in their own thread.

The last major implementation which was the hardest to figure out was including some approach for having the workers know when to exit their loop. The threads continue working until all work has been done and this is implemented using the poison pill approach. The poison pill approach involves the boss including a "pill" in the steque after all proper requests have been added. The pill is a string which the workers will look for when popping all requests. If a pill is picked up by a worker, it knows to put the pill back in the steque and begin exiting. This way the boss does not need to do any extra work for clearing workers and the workers do not need to communicate with each other. 

## Multithreaded Get File Server

The multithreaded get file server is the complement to the previous section's client. The server also makes use of the pthread library in order to process multiple requests at the same time from a single or many clients and sends the files in parallel for speed. Similar to the client, the server code completed in the single threaded implementation is not redone here, but the changes are made in the `handler.c` file which was used earlier for processing the opening and reading of each file and `gfserver_main.c` which is the Driver function responsible for thread creation.

### Project Design and Flow Control
The project design for the multithreaded server follows the high level design of the single threaded server with the difference being that the handler adds to a steque which is accessed by the threads in the Driver function for performing the reading and sending of headers and files. The diagram below shows the design and flow control of `gfserver_main.c` which is the Driver function that preforms thread creation.

![gfserver_main](/images/transferfile-images/gfserver_main.png)

The threads always stay alive as the server will continue to run and be ready to handle new client requests as they come in.

The handler design and flow control is shown below to illustrate how the handler fits into the overall design relative to the Driver and Library.

![handler](/images/transferfile-images/handler.png)

The handler operates when called and only performs the function of putting a struct in to the steque which the workers will operate on in order to process the request.

### Implementation and trade offs
One of the lessons learnt from the multithreaded client were implemented in this section. The handler and the workers only signal as opposed to broadcasting which avoids spurious wake ups. The workers do not exit out of their loop as the thread pool stays active forever as does the server for any incoming client so the poison pill approach is not necessary here. The workers simply have to make the determination of if the file is found or not and then invoke Library functions for sending the header and the file. pread and fstat are used as they are thread safe methods of reading from the same file library without unintended manipulation of data from a single source.

## References
The references listed were used for the source code in implementation of each of the previous sections.

[Beej's Guide to Network Programming](https://beej.us/guide/bgnet/html/)

[Tutorial's Point](https://www.tutorialspoint.com/c_standard_library/index.htm)
- This resource was used for multiple functions including:
  - strstr()
  - read()
  - recv()
  - send()
  - fwrite()
  - fopen()
  - fclose()
  - malloc()
  - memset()
  - strtok()
  - strlen()
  - memcpy()

The TA's were utilized for help implementing many ideas such as:
- The poison pill approach
- Header parsing for tail end
- Thread pool creation
- Global variable utilization
- Memory ownership and pointers

My own source code was copied between sections as the later sections built upon lessons learnt from the previous section and socket creation and thread pool creation became boiler plate code to use.

# Source Code
If you're a recruiter, I can make the code available as part of the application process; however, as the code relies on boilerplate and some setup created by GATech and is part of an active course, I am unable to share the entirety of the code to the public.