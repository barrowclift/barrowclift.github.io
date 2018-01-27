---
layout: post
title:  "Tags Explained"
date:   2017-09-17 09:45:00
categories:
  - Technology
  - Organization
  - macOS
excerpt: "I couldn't help but wonder just what problem tags were even intended to solve. After all, what could colorful tags do that folders couldn't?"
image: "/images/assets/tags-explained/share-image.jpg"
---

<figure markdown="1">
![An array of seven colored dots, the visual metaphor used by macOS to represent tags]({{ site.baseurl }}/images/assets/tags-explained/hero.svg){: .inline }
</figure>

Over the past five years, you may have noticed a colorful array of dots appeared to decorate the otherwise reserved Finder sidebar. Those dots are part of a relatively new feature in macOS called [Tags](https://support.apple.com/en-us/HT202754). As the name suggests, this lets you tag files and folders in Finder with colored labels for organizational purposes.

I had nothing but apathy for the feature. With macOS's benign default tags like "Red" and "Blue", I was left wondering what problem tags were even intended to solve. After all, what could colorful tags do that folders couldn't?

<!--break-->

------

Let's walk through a scenario: You're an independent web developer and human interface designer. As a part of your continued education, you've made a habit of locally saving web pages you were inspired by to later use as references. To help organize the growing reference folder, the archived pages were sorted into folders based loosely on the page type: blog, product, or portfolio. Then&mdash;when you wanted to reference something&mdash;you'd drill down into one of those folders based on the kind of page you wanted references for. So far, so good.

Now fast forward a year. What began as a small collection of inspiration materials has ballooned into a bin filled to the brim with hundreds of archived web pages, all with their own design strengths and weaknesses. So, when you want to reference blog pages with a colorful, casual feel, you are forced to sift through hundreds of unrelated blog pages to find those that match your criteria.

<figure markdown="1">
![A screenshot of a macOS Finder window of a folder filled with archived web pages. These pages are not organized at all.]({{ site.baseurl }}/images/assets/tags-explained/before-tags.jpg){: .edge-to-edge .medium .macos-screenshot }
<figcaption>
You'd have to check each page manually to see if it matches the criteria, thus this system is woefully inadequate.
</figcaption>
</figure>

You may have anticipated this and added another set of folders earlier on under the blog, product, and portfolio "page type" folders. These subfolders were named to reflect a particular design strength, like "Colorful" or "Typography". All archived pages could then be dropped into their respective type folder and organized into the appropriate design strength folder. Problem solved, right?

This approach has one fatal flaw: *The reference materials can easily have more than one design strength*. What if you want to archive a product page that is professional, but also colorful? In this system, you'd either have to make duplicates of that page for each of the strength folders, make an alias to the page for each folder, or simply give up and only sort into one folder. This method of organization is incredibly wasteful in the case of duplications and extremely brittle in the case of file aliases, and is thus not sustainable.

<figure markdown="1">
![A screenshot of a macOS Finder window demonstrating that an example web page could belong to both a "Colorful" folder as well as a "Typography" folder]({{ site.baseurl }}/images/assets/tags-explained/only-one-place-at-a-time.jpg){: .edge-to-edge .medium .macos-screenshot }
<figcaption>
This particular page has lovely colors and tight typography, but it can't be in two folders at once!
</figcaption>
</figure>

As demonstrated in the scenario above, while folder hierarchies certainly have their place, they aren't the best solution in all cases (and certainly not this one).

However, if we use tags instead, our situation quickly improves. There's no need for a whole new directory level and duplicate files, you can simply add as many tags as you want to describe all the strengths any particular page has. This lets you easily search for *any* tag combination. From the earlier example, you'd only have to search `Tag:Professional, Tag:Colorful, Tag:Typography` and all archived pages that contain the subset of those three tags will be displayed.

<figure markdown="1">
<p>
<video controls preload="metadata" poster="/videos/assets/tags-explained/tag-searching-poster.jpg" alt="A video of a macOS Finder window containing a folder filled with tagged web pages. The video depicts a user searching for web pages by the tags 'Professional', 'Colorful' and 'Typography'" class="edge-to-edge medium macos-screenshot">
	<source src="/videos/assets/tags-explained/tag-searching.mp4" type="video/mp4">
	<source src="/videos/assets/tags-explained/tag-searching.webm" type="video/webm">
	<source src="/videos/assets/tags-explained/tag-searching.ogv" type="video/ogg">
	[HTML5 video tag not supported by your browser]
</video>
</p>
</figure>

The scenario we've walked through exposes the core truth that folders are specifically designed to organize files with clearly defined, inherit hierarchies. When that hierarchy isn't clear or doesn't exist&mdash;like in the scenario above&mdash;the system falls apart.

In contrast, tags are built for the explicit purpose of being able to handle situations where there is no obvious hierarchy. Since the design strengths in the scenario are "flat" properties, tags are the perfect system to represent them. In fact, some apps already utilize their own tagging systems over folders for this very reason, like [Photos](#TODO) and the [Bear Writer](http://www.bear-writer.com) notes app[^photo-organization].

<figure markdown="1">
![A sketch showing the file duplicates required to get the same organizational result with Folders, compared to Tags where no duplicates are necessary]({{ site.baseurl }}/images/assets/tags-explained/folders-vs-tags-sketch.png){: .edge-to-edge .medium }
</figure>

That's all well and good, but how do you know when to use tags instead of folders in your day-to-day life? After all, whether or not your information is hierarchical in nature isn't exactly obvious. To help with this task, there's a fantastic little trick you can use to quickly determine whether or not tags should be used instead of folders: __If you find yourself duplicating folders or files during organization, use tags instead__. Take the scenario from above; if using folders, there would have been duplicate "design strength" folders like "Colorful" within each "page type" folder, as well as page duplicates in each appropriate "design strength" folder. We have found ourselves making many duplicates, so tags should be considered instead.

With that little trick in mind, you're now equipped to take full advantage of the latest macOS file system features. When used in the right situations, tags can help make your file organization as clean and efficient as the Mac they're on, so don't be afraid to take a little bit of time to play around with it. Happy organizing!

-----------------

[^photo-organization]: Photos are a fantastic example. Take a handful of photos from a given event; they have plenty of "flat" properties associated with them that don't fit into hierarchies, like names, event locations, and more.