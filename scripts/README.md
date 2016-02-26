Combined Javascript File Contents
=================================

full.min.js Contents
--------------------

1. jquery-2.2.1.min.js
2. bigfoot.anchor.min.js
3. anchor.min.js

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
{% endhighlight %}

full-sans-anchors.min.js Contents
---------------------------------

It's essential that my javascript be served with the `async` tag, but regrettably that means the anchor javascript (which is necessary to dynamically turn on or off anchors per page as necessary) cannot work since it's added to the combined file. Because of this, there are now two combined files identical in every way except missing `anchor.min.js` and it's initialization.

1. jquery-2.2.1.min.js
2. bigfoot.anchor.min.js

{% highlight javascript %}
$.bigfoot({
	// Uncomment to hide inline footnotes from home view
	// 
	actionOriginalFN: "ignore",
	numberResetSelector: "article"
});
{% endhighlight %}

fuckInternetExplorer.min.js Contents
------------------------------------

1. css3-mediaqueries.min.js
2. html5shiv.min.js