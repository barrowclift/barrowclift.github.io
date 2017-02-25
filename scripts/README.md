Combined Javascript File Contents
=================================

full.min.js Contents
--------------------

1. jquery-2.2.1.min.js
2. bigfoot.min.js (Unknown version, modified to have rounded, inline numbered buttons)
3. anchor.min.js (No version provided)
4. jquery.cookie-1.4.1.min.js

{% highlight javascript %}
$.bigfoot({
	// Uncomment to hide inline footnotes from home view
	// 
	actionOriginalFN: "ignore",
	numberResetSelector: "article"
});
$(document).ready(function() {
	$('h3').anchor({
		symbol: '#'
	});
});

if ($.cookie("dark-mode")) {
	var cssId = 'dark-mode';
	var head = document.getElementsByTagName('head')[0];
	var link = document.createElement('link');
	link.id = cssId;
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = '/css/min/dark.min.css';
	link.media = 'all';
	head.appendChild(link);

	$("input[value='dark-mode']").prop("checked", true);
}
{% endhighlight %}

fuckInternetExplorer.min.js Contents
------------------------------------

1. css3-mediaqueries.min.js (Unknown version)
2. html5shiv-3.7.3.min.js