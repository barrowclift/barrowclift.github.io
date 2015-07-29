TODO
=================

#### Article Banners

For articles that open with an image I really should have a nicer style for that

#### In the Browse section

Have a Star or Medal icon for "Best of"
Have a tag icon for "Tags"

#### In the Archive page

There needs to be a better way to separate or divide up these posts (by year categories?)

<!-- {% for post in site.posts %}
  {% unless post.next %}
  <ul id="archive-list">
  {% else %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% if year != nyear %}
  </ul>
  <h2>{{ post.date | date: '%Y' }}</h2>
  <ul id="archive-list">
  {% endif %}
  {% endunless %}
    <li style="margin-bottom:1rem;">
                <a class="text-link" href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}"><span>{{ post.title }}<span></a><span class="weak">- {{ post.date | date: "%B %-d, %Y" }}</span>
            </li>
{% endfor %} -->

<!-- <h2 class="medium-bottom-pad">{{ page.title }}</h2>

{% assign currentYear=nil %}
{% for post in page.posts %}
    {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
    {% if currentYear == nil %}
        {% assign currentYear=year %}
        <h3>1024</h3>
        <ul id="archive-list">
    {% endif %}
    {% if year != currentYear %}
        {% assign currentYear=year %}
        </ul>
        <h3>20134</h3>
        <ul id="archive-list">
    {% endif %}
    <li>
        <a class="text-link" href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}"><span>{{ post.title }}<span></a><span class="weak">- {{ post.date | date: "%B %-d, %Y" }}</span>
    </li>
{% endfor %}
</ul> -->

#### In the Music page

Bare, probably should get started on that website

#### In the Code page

~~My God this is really bad responsive design, fix it~~
Well, it's *kinda* fixed I guess.

#### In the newsletter subscription page

It's terrible