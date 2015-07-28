TODO
=================

Create Sublime snippets for:

3. Right side images (\rightimage to ![]({{ site.baseurl }}/Images/Assets/{0}){: .ios-screen-right-wrap}\n{: .ios-screen-right-wrap}\n{1})
4. Left side images (\leftimage to ![]({{ site.baseurl }}/Images/Assets/{0}){: .ios-screen-left-wrap}\n{: .ios-screen-left-wrap}\n{1})

Find out how to properly have multiple iOS screens side by side in a single view.

codepen.io/znak/pen/ntsdy
http://jsfiddle.net/wf3qj2nk
Should I use Google analytics?

http://www.jqueryscript.net/other/jQuery-Plugin-To-Add-Unique-Anchor-Links-To-Headlines-anchor-js.html
http://mediaelementjs.com

{% highlight <language> linenos %}
    <code>
{% endhighlight %}

You're doing it wrong common html tag mistakes

TODO
Separate Background Image suggestion into completely separate post ("Home Sweet Home", some clever name involving backgrounds/foregrounds, etc.)
THEN have app suggestion post ("App Suggestions", "App Suggestions for Power Users", etc.)

http://cssminifier.com Used for all CSS Minification

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

#### In the newsletter subscription page

It's terrible