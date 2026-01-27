---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* B.S. in Structural Engineering (Aerospace Structures Focus)
    * University of California, San Diego, 2019
* M.S. in Computer Science
    * Georgia Institute of Technology, 2023

Work experience
======

* Lawrence Livermore National Laboratories
  * Nov 2021 - Present
    * Refactored and modularized a Python image-analysis codebase (NumPy/SciPy), reducing technical debt and improving extensibility for downstream feature development.
    * Built reproducible analysis + visualization workflows (Matplotlib) and automated figure generation for reports and reviews; adopted by 5 research teams, reducing maintenance budgets by 20%.
    * Developed documentation and example-driven notebooks/scripts to accelerate onboarding and enable reliable handoffs to future developers.
  Mechanical Focus
    * Led design reviews and execution for reliability-focused upgrades; delivered $600k+ procurements and enabled estimated $200k/year in savings via improved system reliability and reduced maintenance burden.
    * Drove requirements, feasibility studies, and final designs for system upgrades and expansions, partnering with stakeholders through review cycles.
  

* Boeing
  * Aug 2019 - Oct 2021
    * Analyzed damages to provide efficient blanket repair schemes driving down team response time by 20%.
    * Individually developed 3 design procedures accepted as company-wide standard for future repairs.

Projects
======
  <ul>{% for post in site.projects %}
  {% include archive-single-cv.html %}
  {% endfor %}</ul>

Skills
======
* Languages
  * Python, Java, C, C++, SQL, MATLAB, protocol buffers
* Libraries
  * TensorFlow, Scikit-learn, Pandas, NumPy, Apache Derby
* Technologies
  * Docker, Git, Docker, Linux, RPC, Wireshark, SQL, LLVM