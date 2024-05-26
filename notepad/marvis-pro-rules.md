---
layout: plain
---

<style>
mark {
    -moz-font-feature-settings: "c2sc", "smcp";
    -ms-font-feature-settings: "c2sc", "smcp";
    -webkit-font-feature-settings: "c2sc", "smcp";
    font-feature-settings: "c2sc", "smcp";
    font-variant-caps: all-small-caps;
}
.tiny img {
    max-width: 25%;
}
</style>

# Marvis Pro Rules

There are the settings I use in my Marvis Pro home screen. Please feel free to use these as a starting point for your own!

<figure style="text-align:center" class="inline tiny shadow">
    <a href="{{ site.dropbox }}/second-annual-ios-music-player-competition/marvis-pro-home.jpg">
        <img src="{{ site.dropbox }}/second-annual-ios-music-player-competition/marvis-pro-home.jpg" />
    </a>
</figure>

## Library

1. Add a "New Home" section.
2. Within that "New Home" section, ensure "Songs" and "Albums" are added.
3. Rename the subtitles for "Songs" and "Albums" to a space (to hide the <span class="small-caps">LIBRARY</span> text).
3. Rename "New Home" to "Library".

## Pick of the Day

1. Add a new "Library" section for "Albums".
2. Rename the title for "Albums" to <span class="small-caps">PICK OF THE DAY</span> and set the subtitle to a space (to hide the <span class="small-caps">LIBRARY</span> text).

<ul class="tight">
    <li><strong>Layout:</strong> <mark class="tag orange">Grid</mark></li>
    <li><strong>Grid Style:</strong> <mark class="tag orange">Cover Flow</mark></li>
    <li><strong>Columns:</strong> <code>1</code></li>
    <li><strong>Rows:</strong> <code>1</code></li>
    <li>
        <strong>Smart Rules:</strong> (must match all)
        <ul>
            <li>
                <strong>Rule Groups:</strong> (may match any)
                <ul>
                    <li>
                        <strong>Rule Group 1:</strong> (must match all)
                        <ul>
                            <li><mark class="tag blue">Like Status</mark> <mark class="tag gray">Is</mark> <mark class="tag red">Loved</mark></li>
                            <li><mark class="tag blue">Last Played</mark> <mark class="tag gray">Not In Last</mark> <code>2</code> <mark class="tag red">Months</mark></li>
                            <li><mark class="tag green">Maximum Items</mark> <code>2</code></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Rule Group 2:</strong> (must match all)
                        <ul>
                            <li><mark class="tag blue">Play Count</mark> <mark class="tag gray">Less Than</mark> <code>10</code></li>
                            <li><mark class="tag blue">Last Played</mark> <mark class="tag gray">Not In Last</mark> <code>2</code> <mark class="tag red">Months</mark></li>
                            <li><mark class="tag blue">Like Status</mark> <mark class="tag gray">Is</mark> <mark class="tag red">None</mark></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Rule Group 3:</strong> (must match all)
                        <ul>
                            <li><mark class="tag blue">Last Played</mark> <mark class="tag gray">In Last</mark> <code>2</code> <mark class="tag red">Months</mark></li>
                            <li><mark class="tag blue">Skip Count</mark> <mark class="tag gray">Less Than</mark> <code>5</code></li>
                            <li><mark class="tag blue">Last Played</mark> <mark class="tag gray">Not In Last</mark> <code>1</code> <mark class="tag red">Weeks</mark></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><mark class="tag blue">Like Status</mark> <mark class="tag gray">Is Not</mark> <mark class="tag red">Disliked</mark></li>
            <li><mark class="tag green">Shuffled</mark></li>
            <li><mark class="tag green">Maximum Items</mark> <code>1</code></li>
        </ul>
    </li>
</ul>

## Albums

1. Add a new "Library" section for "Albums".
2. Rename the subtitle for "Albums" to <span class="small-caps">PAST YEAR</span>.

<ul class="tight">
    <li><strong>Sorting:</strong> <mark class="tag orange">Shuffled</mark></li>
    <li><strong>Sort Order:</strong> <mark class="tag orange">Ascending</mark></li>
    <li><strong>Layout:</strong> <mark class="tag orange">Grid</mark></li>
    <li><strong>Grid Style:</strong> <mark class="tag orange">Standard</mark></li>
    <li><strong>Columns:</strong> <code>2</code></li>
    <li><strong>Rows:</strong> <code>1</code></li>
</ul>

## Recently Added (Past Year)

1. Add a new "Library" section for "Albums".
2. Rename the title for "Albums" to "Recently Added".
3. Rename the subtitle for "Albums" to <span class="small-caps">PAST YEAR</span>.

<ul class="tight">
    <li><strong>Sorting:</strong> <mark class="tag orange">Shuffled</mark></li>
    <li><strong>Sort Order:</strong> <mark class="tag orange">Descending</mark></li>
    <li><strong>Layout:</strong> <mark class="tag orange">Grid</mark></li>
    <li><strong>Grid Style:</strong> <mark class="tag orange">Cover Flow</mark></li>
    <li><strong>Columns:</strong> <code>2</code></li>
    <li><strong>Rows:</strong> <code>1</code></li>
    <li>
        <strong>Smart Rules:</strong> (must match all)
        <ul>
            <li><mark class="tag blue">Date Added</mark> <mark class="tag gray">In Last</mark> <code>1</code> <mark class="tag red">Years</mark></li>
        </ul>
    </li>
</ul>

## Just Added (Past Year)

Same as ["Recently Added" (Past Year)](#recently-added-past-year), but with the title as "Just Added" and the sorting set to <mark class="tag orange">Date Added</mark>.

## Time Machine

1. Add a "New Home" section.
    * **Columns:** `2`
    * **Rows:** `4`
2. For each year you want to add to your Time Machine:
    1. Add a new "Library" section for "Albums".
    2. Rename the title for "Albums" to the year you're adding and set the subtitle to a space (to hide the <span class="small-caps">LIBRARY</span> text).

Rules for each year:

<ul class="tight">
    <li><strong>Sorting:</strong> <mark class="tag orange">Default</mark></li>
    <li><strong>Sort Order:</strong> <mark class="tag orange">Ascending</mark></li>
    <li><strong>Layout:</strong> <mark class="tag orange">Grid</mark></li>
    <li><strong>Grid Style:</strong> <mark class="tag orange">Standard</mark></li>
    <li><strong>Columns:</strong> <code>3</code></li>
    <li><strong>Rows:</strong> <code>1</code></li>
    <li>
        <strong>Smart Rules:</strong> (must match all)
        <ul>
            <li><mark class="tag blue">Date Added</mark> <mark class="tag gray">In Last</mark> <code>1</code> <mark class="tag red">Years</mark></li>
            <li><mark class="tag green">Shuffled</mark></li>
        </ul>
    </li>
</ul>