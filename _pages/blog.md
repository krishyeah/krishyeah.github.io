---
layout: archive
permalink: /blog/
title: "Blog posts"
author_profile: true
---

{% include base_path %}

This is still a work in progress. I haven't written many blogs yet, but my thoughts are to write about sports, science, math, and the intersection of the three as I have the time and inspiration to do so.

{% capture written_year %}None{% endcapture %}
{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
