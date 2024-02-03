---
title: "Multitasking Misconceptions"
date: 2015-10-27 1:23:04
categories:
  - Technology
  - iOS
  - macOS
  - Multitasking
timelocked: true
excerpt: |
  Does force quitting apps in iOS really help speed up your iPhone and save battery?
image: "multitasking-misconceptions/share-image.jpg"
---

It's inevitable, you'll be enjoying a friend's company and they decide to take out their iPhone to show you some new pictures.  You both share a good laugh or two over them and as they begin to put their iPhone away you notice something strange; just before putting it away they [force quit](https://support.apple.com/en-us/HT201330) the app they just used with the familiar upward swipe, leaving their [multitasking list](https://support.apple.com/en-us/HT202070) barren. When questioned about their reason for doing so they brush it off saying something about wanting to save battery or not slow down their iPhone.

Perhaps you're the friend in this scenario force quitting iOS apps as an act of instinctual habit and haven't though much about it until now. What's so wrong about it though? You're done using the app after all, why *wouldn't* you quit the app? Isn't that what you're supposed to do? It only makes sense, having more apps in the multitasking list must mean your iPhone is doing a lot of extra work and quitting all those apps would free your iPhone from doing it and maybe even save battery.

<a id="resume-from-break"></a>
In reality this results in the exact opposite of the intended effect and not only slows down app launching in the future but also drains battery that would have otherwise been preserved had the apps been left alone. Now this most likely sounds preposterous and it's entirely because iOS's multitasking model flies in the face of everything people have been taught for decades to be true about how computers work. In many ways the "quit apps when you're done" workflow was and __still remains__ the correct action to do on computers. iPhones, however, are a different story.

<!--break-->

OS X Multitasking
-----------------

In order to fully understand why force quitting all your apps on iOS results in overall negative effects on speed and battery life we must first understand where our prior assumptions come from in the first place. Enter Windows (PC) and OS X (MacBooks, iMacs, and Mac Pros). These operating systems which we encounter every day are responsible for the following general rules most people have [intuitively figured out](http://apple.stackexchange.com/a/40686):

1. The more apps you have open doing things the slower your computer will get (so likewise, the less apps open doing things at any given time the faster the computer will be).
2. The more apps I have open doing things the more battery I will use on my laptop (so the less apps I have open doing things the longer my laptop can stay on without having to find an outlet to charge).

The reason these rules still apply to OS X and Windows is due to the liberal way they manage apps. When you first launch an app like Safari from the Dock your computer loads a bunch of data from storage (which is *extremely* slow) into memory (which is *extremely* fast) so the app can then be used quickly and normally. The amount of memory your computer has dictates how much other apps and "stuff" your computer can quickly access at any given time.

<div markdown="1" class="edge-to-edge medium">
![A cartoon of a Storage disk throwing data to a nervous, almost overflowing Memory card]({{ site.dropbox }}/multitasking-misconceptions/panel-1-colored.png "Watch how much stuff you're making Memory remember, Storage!")
</div>

As you'd imagine, the less memory your computer has the less apps and "stuff" read from slow storage can be kept in the fast memory at any given time. Computers become extremely slow when it's memory is completely full and has nowhere else to put new things for fast recollection, meaning it has to "pretend" it has more memory than it actually does by using the *extremely* slow storage as make-believe extra memory.

<div markdown="1" class="edge-to-edge medium">
![The second panel of the cartoon where the Memory card says "I'm full, this is your problem now, slow poke storage!" to the sheepish looking Storage disk]({{ site.dropbox }}/multitasking-misconceptions/panel-2-colored.png "What did I tell you, Storage?")
</div>

This is where quitting apps when you have too many open comes into play. If you act as the janitor and help the computer "clean up" itself by quitting apps you no longer need the portions of memory that those apps were sitting in then gets cleared for your computer to then use again as open memory for new things. Thankfully having full memory doesn't *necessarily* mean you're using more battery, but having your memory filled to the brim with open apps and other things will certainly slow down other memory-intensive tasks like opening new apps in the future.

While all those open apps hanging around in memory aren't using more battery just by being there it's the things they're still possibly doing that will. All open apps retain free reign on your computer's <span class="small-caps">CPU</span> (which you can think of as your computer's "attention"). Any app you have open (which you can identify by the little dot under the icon in your Dock in OS X) can take up as much or as little of your computer's "attention" as it wishes, and this "attention" takes battery. It's entirely possible for your open apps to hog all your computer's attention doing something they think is important but that you don't think is important at all (assuming you even know about it! [I'm looking at you, Google Chrome](https://productforums.google.com/forum/#!topic/chrome/LfBqIlfFoSo)).

<div markdown="1" class="edge-to-edge medium">
![The third panel of the cartoon has a bunch of apps fighting for the panicked CPU's attention with a battery fuel gauge nearing empty]({{ site.dropbox }}/multitasking-misconceptions/panel-3-colored.png "Apps can be annoying little buggers sometimes.")
</div>

This is by no means meant to be a complete nor academically accurate representation of what's going on in your Mac. There were *plenty* of [details](https://en.wikipedia.org/wiki/Scheduling_(computing)) and [special cases](http://appleinsider.com/articles/13/06/18/os-x-mavericks-new-app-nap-timer-coalescing-features-target-battery-efficiency) intentionally left out or glossed over to boil down the essence of how OS X and Windows manage your apps. The key takeaways are:

1. Computers generally do not quit apps for you, you are expected to do it yourself if you have too many open.
2. Any open app has the possibility to demand as much computer attention (<span class="small-caps">CPU</span> time) as it wants, which can drain your battery.

iOS Multitasking
----------------

This is where things get completely turned on their head. The two key rules about how OS X and Windows multitask open apps does not apply __at all__ to iOS. The two new general rules for iOS multitasking are:

1. Having more "open" apps in the multitasking list has absolutely no noticeable, negative effect on the general speed of your iPhone *or* the speed of the app you're currently using.
2. Having more "open" apps in the multitasking list does not drain your iPhone's battery.

How on earth is this even possible given how we know our Macs or PCs manage open apps? What's going on?

## Suspension and the "One Truly Open" App

In reality, all but one of the apps you see in the multitasking list are actually in what Apple calls a "suspended state". While OS X and Windows allow you to keep as many apps as you want open and running at any given time iOS actually only allows __one__ open app at any given time &mdash; the one you're currently looking at and using[^exceptions]. All others are effectively "frozen" in time and memory.

This means all you see in the multitasking list is images of your apps frozen in time as if you took photos of them. In this state it's no longer using any battery and also has no effect on the speed of the app you're currently running. Again, these apps are not running or using battery, so there's no need to force quit them from the multitasking list.

<div markdown="1" class="edge-to-edge medium">
![The fourth panel of the cartoon has the CPU easily managing one app's requests with a full reserve of battery to power him)]({{ site.dropbox }}/multitasking-misconceptions/panel-4-colored.png "And with ample battery to spare")
</div>

What about iOS's memory though? Surely, frozen in memory or not, these apps in the multitasking list are still hogging your iPhone's memory which could have been used on the app you're currently using, right? Well, not exactly. Remember how we discussed that OS X and Windows almost never quit your apps for you and they make it the user's responsibility to monitor whether or not they're using too much memory? iOS instead takes this mental burden away from the user by intelligently and automatically clearing as many of the oldest suspended apps from the phone's memory as needed to make room for the app currently in use. This *guarantees* that the app currently running will never have to worry about running out of memory due to other apps in the multitasking view hogging memory because iOS will automatically remove these apps for you if necessary.

<div markdown="1" class="edge-to-edge medium">
![The fifth panel of the cartoon has the Memory card taking control with the power of iOS and demanding the eldest and least used app has got to go)]({{ site.dropbox }}/multitasking-misconceptions/panel-5-colored.png "Out with the old, in with the new.")
</div>

You can actually see this in the wild yourself, double-press your home button and look at a few of the most recently used apps immediately to the left of your home screen. Notice how they have a nice little picture of what you were doing right before you switched to a different app. That's because they’re still sitting in memory ready to pick up right where you left off (but remember, they're not actually running!). Now start scrolling farther and farther back to the left. You'll start seeing apps you haven't opened in a long time and eventually you'll notice they start looking like they don't seem to have a picture of what you were last doing in them anymore, in fact they look blank. These are apps that iOS has already cleared from memory to make room for more recently suspended apps back to the right close to the Home Screen. If you were to tap on any of these apps they would launch as if you had force quit them instead of "resuming" from suspension because the entire app has to be read back from slow storage into memory (and in the process shoving the new "oldest suspended app" off memory to make room). This super slow process is what happens *every single time* if you force quit all your apps after using them.

<figure markdown="1" class="edge-to-edge large two-images ios-screenshot">
![The app switcher view, showing images for each of their last known states]({{ site.dropbox }}/multitasking-misconceptions/multitasking-new.jpg)
![The app switcher view, this time showing the oldest apps, which are now displayed as just blank rectangles]({{ site.dropbox }}/multitasking-misconceptions/multitasking-old.jpg)
<figcaption>
Note how the app preview images change from most recently used to oldest.
</figcaption>
</figure>

## Background App Refresh <time>The Primary Exception to the Rule</time>

Starting with iOS 7 Apple added a feature that complicates things slightly. Background App Refresh is an option that developers can opt into where suspended apps can be "woken up" periodically by iOS to refresh data. For example, with Background App Refresh enabled for my podcast app of choice, [Overcast](https://overcast.fm), the app can periodically check if there's any new podcasts available and refresh the UI to add any new episodes to the queue. This feature is incredibly useful for our most commonly used apps since the apps can ensure they don't waste time when resumed updating to reflect changes that *could* have been made in the background.

This of course poses a potential problem since there's bound to be some apps you barely use that have this feature enabled by default that you'd rather have turned off. I'd recommend keeping it on for apps you use at least semi-regularly and disable it for the rest. Simply open up the "Settings" app and navigate to `General > Background App Refresh` and flip the switch for apps you don't use often off.

<div markdown="1" class="edge-to-edge large three-images ios-screenshot">
![iOS Settings Screen, General list item highlighted]({{ site.dropbox }}/multitasking-misconceptions/settings.jpg)
![iOS General Settings Screen, Usage list item highlighted]({{ site.dropbox }}/multitasking-misconceptions/general.jpg)
![iOS Usage Settings Screen, both Manage Storage list items highlighted]({{ site.dropbox }}/multitasking-misconceptions/background-app-refresh.jpg)
</div>

Another thing to consider when you're deciding which apps to turn Background App Refresh off for &mdash; if any at all &mdash; is how many apps are currently enabled for background refresh in the list. If you have more than twenty or so with Background App Refresh turned on you might want to consider trimming that number down. While any individual app only takes a tiny, negligible amount of battery to background refresh ([usually](https://www.macstories.net/linked/the-background-data-and-battery-usage-of-facebooks-ios-app/)) this number *can* add up if there's a lot of them.

## Quit Quitting Apps on iOS

At the end of the day, force quitting apps on iOS not only makes opening them later slower but wastes battery that could have otherwise been saved reinitializing all the app's data objects.

As with everything in life there are exceptions to the rule; at times apps can get "stuck" and stop working properly. It's for situations like this that we have the power to force quit apps on iOS since it can oftentimes fix the problem (kind of like how restarting your computer can sometimes help). But this should be used very sparingly and more often than not you shouldn't be bothering with it. In almost every other case it's better to just let iOS do what it was designed from day one to do. It's time to experience iOS the way it was meant to be experienced; quit quitting your apps.

----------

[^exceptions]: With iOS 9 it is now possible to have more than one app active at any time with [Slide Over or Split View](http://www.apple.com/ios/whats-new/) so in these cases both apps are indeed running at the same time.