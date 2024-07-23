---
layout: archive
permalink: /blog/
title: "Blog posts"
author_profile: true
---

{% include base_path %}

This is still a work in progress. I haven't written many blogs yet, but my thoughts are to write about sports, science, math, and the intersection of the three as I have the time and inspiration to do so.

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
