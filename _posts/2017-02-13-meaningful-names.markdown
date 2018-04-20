---
layout: post
title:  "Meaningful Names"
date:   2017-02-13 22:04:00
categories:
  - Programming
  - Technology
image: "/images/assets/meaningful-names/share-image.jpg"
excerpt: "What does \"magic()\" mean? How about \"foo()\"? Or \"arg1\"? Nobody knows, and that's the problem."

---

<figure markdown="1" class="edge-to-edge small">
![A "Hello, My Name Is" sticker with the name "FOOBAR" on it]({{ site.baseurl }}/images/assets/meaningful-names/namecard.png)
</figure>

Do you know what `magic()` means? How about `foo()`, what does that do? What about `arg1`, what's that supposed to be? To be frank, I have no idea what any of these represent since the names themselves carry little to no intrinsic meaning. They're just meaningless fluff.

<a id="resume-from-break"></a>
Oftentimes, this is what it feels like as a developer when [reading code from the community](http://www.c2.com/cgi/wiki?BadVariableNames). Not all developers write code in this style, of course, but some do and it makes understanding the story they're trying to tell nigh impossible. Even the general public can sympathize with these feelings; you've no doubt seen "hackers" in shows or movies clacking away [alphabet vomit](http://www.hackertyper.com) and wondered to yourselves, "Who the blazes can actually read that?".

<!--break-->

<figure markdown="1" class="inline captioned shadow">
[![An image of a computer screen filled with poorly written and formatted code from the NBC TV series XIII, click this image to go to moviecode's source post at tumblr.com]({{ site.baseurl }}/images/assets/meaningful-names/for-developers-that-hate-things-that-make-sense.jpg)](http://moviecode.tumblr.com/post/93941117101/this-screen-shot-is-from-the-first-episode-of-the)
<figcaption>
Nobody can, because it's horrible.
</figcaption>
</figure>


Where It All Started
--------------------

Having tiny, arbitrary names like [`ox`](https://bitbucket.org/inferno-os/inferno-os/src/185709ebf9fcb65846add6abe88c9d3db3e60406/appl/acme/xfid.b?at=default#xfid.b-113), [`tid`](https://bitbucket.org/inferno-os/inferno-os/src/185709ebf9fcb65846add6abe88c9d3db3e60406/appl/acme/xfid.b?at=default#xfid.b-112), or [`pctl`](https://bitbucket.org/inferno-os/inferno-os/src/185709ebf9fcb65846add6abe88c9d3db3e60406/appl/acme/xfid.b?at=default#xfid.b-105) back in the 1980's was a pragmatic choice compared to using lengthier, meaningful names. Developers wrote in lightweight plain text editors such as [vi](https://en.wikipedia.org/wiki/Vi), and at the time no contextual help like [autocomplete](https://en.wikipedia.org/wiki/Autocomplete) or [IntelliSense](https://en.wikipedia.org/wiki/Intelligent_code_completion) existed. This meant that every single variable name had to be retyped in full or copy/pasted whenever needed. Even copy/pasting, while helpful, was a pain since nearly all development in the early 80's was done without a mouse. That's right, actions such as moving the cursor, selecting text, copy/pasting, etc. were done exclusively on the keyboard. While developers adapted to these constraints fairly well, long variable names remained unwieldy and were generally avoided. Shrinking names down to their smallest possible form simply made editing that much easier.

<figure markdown="1" class="inline captioned shadow">
[![Another image of what appears to be a TV monitor displaying utter gibberish, click this image to go to moviecode's source post at tumblr.com]({{ site.baseurl }}/images/assets/meaningful-names/back-in-my-day.jpg)](http://moviecode.tumblr.com/post/74145306311/from-classic-doctor-who-episode-the-twin-dilemma)
<figcaption>
40 whole characters on a single line? Truly this is the future.
</figcaption>
</figure>

Not only that, but computer monitors at the time were extremely small compared to today's offerings, so developers only had a sparse number of characters that could be displayed at any given time on the screen. In general, the more logic a developer can see at any given time the easier it will be for them to maintain their sense of "place".  Given how valuable screen real estate was in the day, shorter names exposed more of the program's underlying logic while still allowing the code itself to fit snuggly on screen. For example, `m=s/60` embeds the same *logic* as `minutes=seconds/SECONDS_IN_MINUTE`, though it's not clear in the first example what that logic actually *represents*. With barely any screen to work with, however, the first option becomes far more appealing.

While editors at the time certainly supported "scrolling" to the right to see more code that didn't not fit on screen, it was at the expense of no longer seeing the surrounding code, therefore making it difficult for developers to maintain context while horizontally "scrolling". As an alternative, editors could wrap the text instead, but this has issues as well. Spaces and tabs are used to convey information about where a given chunk of code "lives" (also known as the code's [scope](https://en.wikipedia.org/wiki/Scope_(computer_science))). The ability to determine where a code block lives contextually with just a glance at the text's layout saves time that otherwise would have been spent parsing around to reach the same understanding. Text wrapping, however, breaks this layout schema by littering code with visual "speed bumps" that at first seem to be deliberate lines breaks with intentional indentation, instead of just wrapped lines.

Developers at the time understood that text wrapping and horizontal "scrolling" were subpart solutions compared to writing code that did not require such flawed solutions in the first place. Thus, a culture and style of writing extremely concise code at the expense of clarity was born. In this sense, the community's awful naming convention came out of necessity; it was a rational solution at the time, given their constraints. Short, meaningless names were a weapon developers could use to combat the inherit constraints of their tools, both [hard](https://en.wikipedia.org/wiki/Computer_hardware) and [soft](https://en.wikipedia.org/wiki/Software).

It's Time To Move On
--------------------

Things have changed. A lot. All computer screens manufactured nowadays are *at least* three times larger and are oftentimes even larger than that[^so-much-larger]. We now have more screen real estate than we know what to do with, so the character length constraint old monitors posed no longer exists. Software has improved in leaps and bounds as well; plain text editors like [Sublime Text](http://www.sublimetext.com), [Notepad++](https://notepad-plus-plus.org), [BBEdit](http://www.barebones.com/products/bbedit/), and many others have intelligent auto-complete functionality (among other things) that grant developers the ability to instantly "tab to complete this name" while typing. This is an evolution far beyond what the terminal, plain text editors and monitors of old could provide.

Sadly, not all developers have changed with the times; some continue to code in the "old style" to this day. Both popular culture and industry veterans continue to poison the new generation of developers with a style that encourages naming conventions that only made sense over 20 years ago. What they fail to realize, however, is that the old solution is no longer the *optimal* solution. The ability to type long names quickly in modern text editors negates the editing benefits short names used to offer, and larger screens allow developers to display all this new information at once. Using short names at the expense of clarity just to fit each line of text on displays that haven't been used for decades is strictly worse today than simply utilizing to the new displays. The proper solution now is to use names that are the most expressive (and thus usually longer) since they can be typed just as quickly (if not quicker, thanks to autocomplete) while still fitting on the screen without wrapping or scrolling.

Now let's take the example names shown at the beginning of the article and fix them, given what we learned. Do you have an idea what `getSize()` will do? How about `sort()`? What about `startTime`, what is that supposed to be? The new names are much easier to understand, right? You have an idea what the names represent simply by *reading them*. No comments, scouring documentation, or hours banging your head against the wall required. There are no mysteries, no trickety-tricks, and no "cleverness". Just clear storytelling.

I believe this is one of the contributing factors behind why developers have such a difficult time reading each other's code. Readers attempt to follow the story the previous developer was trying to tell, but there are simply too many red herrings, funny names[^foo-bar], and lost details for readers to follow the story with any degree of speed or accuracy. Sure, proper names would not fix all these issues, but it certainly helps others understand the program quicker, regardless of whether or not the code's design was poor. After all, if what we wrote is bad, the *very least* we can do is ensure others understand the disaster as quickly as possible so they can refactor it sooner instead of having to waste time continuously pausing to recall what [`do_magic()`](https://bitbucket.org/inferno-os/inferno-os/src/185709ebf9fcb65846add6abe88c9d3db3e60406/appl/svc/httpd/httpd.b?at=default#httpd.b-333) does or what [`xfidtid`](https://bitbucket.org/inferno-os/inferno-os/src/185709ebf9fcb65846add6abe88c9d3db3e60406/appl/acme/xfid.b?at=default#xfid.b-114) stands for again.

As developers, we are not being clever or efficient when we use cryptic acronyms, declarations stripped of all vowels so "r cd rds lk ths", or vague names that only seem to communicate to the reader "I'm a thing" like [`o`](https://bitbucket.org/inferno-os/inferno-os/src/185709ebf9fcb65846add6abe88c9d3db3e60406/appl/alphabet/fs/query.b?at=default#query.b-44), [`foo`](https://bitbucket.org/inferno-os/inferno-os/src/185709ebf9fcb65846add6abe88c9d3db3e60406/appl/lib/pslib.b?at=default#pslib.b-690), or [`magic`](https://bitbucket.org/inferno-os/inferno-os/src/185709ebf9fcb65846add6abe88c9d3db3e60406/appl/cmd/mdb.b?at=default#mdb.b-372). Writing with such a harmful style complicates our jobs when we return months later to fix a bug only to discover we have no idea how our own program works, cripples future developers' ability to continue project maintenance, and further alienates developers from other professions. If we simply gave our names proper attention and care, we would not only make future enhancements on our old work more pleasant, but in the process we'd break down the harmful front that our profession consists of wizards slamming [green-colored gibberish into black terminals](http://hackertyper.net). It is time we upgrade our coding style to match the power of the technology we use, not only to make our profession more enjoyable but also to help foster newfound interest in the hearts of others to pursue the discipline.

Any fool can create confusion, it takes professionals to produce clarity.

----------  

[^so-much-larger]: Fun fact, you could fit about 115 displays powered by the IBM 1981 Color Graphics Adapter (which supported a [max resolution of 640x200](https://en.wikipedia.org/wiki/Color_Graphics_Adapter)) in today's 5K iMac (which has a resolution of [5120x2880](https://www.apple.com/imac-with-retina/specs/)). That's a lot of pixels!
[^foo-bar]: I mean "funny names" genuinely. One of the longstanding traditions in computer science is for developers to use the nonsense names `foo` or `foobar` when they don't want to take the time to properly come up with one.