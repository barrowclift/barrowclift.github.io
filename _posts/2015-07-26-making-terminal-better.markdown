---
layout: post
title: "Making Terminal Better"
date: 2015-07-26 23:38:18
excerpt: "Most developers can agree Terminal is great for productivity. Usability? Not so much. Here's some quick tips to help humanize the grandfather of the GUI on OS X."
image: "{{ site.dropbox }}/making-terminal-better/banner-image.png"
categories:
  - Technology
  - Programming
  - Unix
  - macOS
  - Guides
---

<style>
	.terminal-image-1 img {
		max-width: 570px;
	}
	.terminal-image-2 img {
		max-width: 730px;
	}
}
</style>

For the past few articles I've focused on topics that were for everyone, but for now I want to take a brief break and give my developer friends some attention.

Developers, I'm going to take a wild guess and assume that the vast majority of you reading this use some form of Unix-based machine (like Linux or OS X) for the bulk of your development. But let's face it; as powerful as Unix is we can't deny how big a pain in the neck it is to use, even at the most rudimentary level[^quiz]. To master it takes *years* of dedicated exercise which isn't made any easier by how cryptic and ludicrous some commands are (I'm looking at you, `sed`).

<a id="resume-from-break"></a>
So while it's an essential, incredibly useful pain in the neck for us we thankfully don't have to put up with the "out of box" experience. We can make Terminal just the tiniest bit more human by means of the `.bashrc` file. Now I'm sure most of you out there know all about this file, but for those of you that don't this is essentially a preferences file for the bash shell, the default shell used in OS X and most Linux systems. Since we set our "preferences" directly in the file instead of through a <span class="small-caps">GUI</span> we have incredible flexibility and nearly endless customization possibilities available to us. To help get you started or spark new ideas I'll share some snippets from my own `.bashrc` for you to use or build off of. Please note that I'm going to be focusing primarily on OS X's Terminal, though by nature of OS X's Unix base some of the snippets below are platform agnostic and are applicable for practically any Unix machine.

<!--break-->

Look and Feel
-------------

In my opinion if there's anything you take your time to consider it should be your Terminal's look and feel (your prompt, colors, and font). This aspect of Terminal is practically inescapable and remains a core piece of the experience from the moment you open the window to the moment you exit. Developers deserve good UI just as much as the public do, let's not deprive ourselves of it.

To begin, let's look at OS X's default Terminal.

<figure markdown="1" class="terminal-image-1 inline macos-window-screenshot">
![Terminal window, all output is in plain, black text against a blaring white background]({{ site.dropbox }}/making-terminal-better/default-terminal.png "This look and feel is *great* for people that don't like understanding what's going on.")
</figure>

Yikes, this won't do at all. I've seen far too many friends and colleagues sticking with this or one of the other dreadful default themes available on OS X and I'm here to tell you there's a better way. By just taking a few moments to consider the points below we can transform your Terminal into something actually enjoyable to use (and sometimes even beautiful).

1. __Colors__: The primary issue I have with the default prompt is the lack of color. Terminal becomes significantly more powerful when any given block of text conveys meaning without requiring the user to actually read it or enter a command to learn more. For example, in the Terminal window above could you tell what was a file or directory without having to enter another command to find out? No, you literally have to take a guess or rely on memory for every single file on your machine to operate efficiently. Thankfully with colors you can easily pick one to represent a certain kind of file (like directories) and literally never have to guess or spend time entering another command to find out again.
2. __The Prompt__: I take issue with the the minimal spacial context the default prompt provides. Only displaying the parent directory's name at any given time makes keeping the path's full state in your head incredibly taxing and untenable for deep file systems. While seeing the full path is always a `pwd` away I personally prefer to have my current location's full context always a quick glance away and I think you'd appreciate it too.
3. __Font__: I cannot emphasize how important making good font choices for development related applications like Terminal are. A good font for coding should almost disappear and help direct your focus towards the text's meaning as quickly and seamlessly as possible. The very last thing you want in your Terminal is having to squint and wonder "Is that an 'l' or a '1'?" or "Is that a '0', or an 'O'?". To help give your own monospace font search a head start I highly recommend this [Top 10 Programming Fonts](http://hivelogic.com/articles/top-10-programming-fonts/) list compiled by Dan Benjamin as it was instrumental in building my own collection.

Now, here's my current setup for inspiration:

<figure markdown="1" class="terminal-image-2 inline macos-window-screenshot">
![Customized Terminal window, all output is stylized with multiple colors depending on file type against a soothing, deep black color]({{ site.dropbox }}/making-terminal-better/customized-terminal.png)
</figure>

How to actually get your Terminal to behave and look like this can be slightly confusing. The font and colors codes used for "red", "blue", etc. are not actually set in the `.bashrc` but rather Terminal's Preferences window instead since those settings are managed by Terminal itself and not the bash shell. You can begin customizing them by creating your own themes or customize existing ones by going to `Terminal > Preferences > Profiles`. You can also [download mine]({{ site.dropbox }}/downloads/making-terminal-better/duokai.terminal) to play around with though you'll want to install the [Inconsolata](http://levien.com/type/myfonts/inconsolata.html) font I use first.

The `.bashrc` will be used to actually "turn on" colors, assign the colors to the kinds of files you think they should represent, and customize your prompt since they're all directly handled by the shell. Below are the lines necessary to turn on colors and some of my current settings to help get you started on your prompt and color assignments.

<div markdown="1" class="edge-to-edge infinite">
{% highlight bash %}
# COLORS
# ----------------------------------------------
# Customizing the colors for particular files
# See http://www.linux-sxs.org/housekeeping/lscolors.html for color code guide
# Music (Yellow)
export LS_COLORS="*.m4a=00;33:*.mp3=00;33:*.flac=00;33:*.aac=00;33:*.aiff=00;33"
# Movie (Yellow)
export LS_COLORS="*.m4v=00;33:*.mov=00;33:*.mpg=00;33:*.mp4=00;33:${LS_COLORS}"
# Pictures (Magenta)
export LS_COLORS="*.jpg=00;35:*.png=00;35:*.tiff=00;35:*.tif=00;35:*.gif=00;35:*.pdf=00;35:${LS_COLORS}"
# Archives (Red)
export LS_COLORS="*.tar=00;31:*.tgz=00;31:*.zip=00;31:*.gz=00;31:*.jar=00;31:*.rar=00;31:*.7z=00;31:${LS_COLORS}"

# Add color in Terminal, required to "turn on" colors for OS X and FreeBSD
# Other systems might require making alias for commands like "ls" to
# "ls --color=auto" instead
export CLICOLOR=1

# PROMPT
# ----------------------------------------------
export RED='\[\033[0;31m\]'
export CYAN='\[\033[0;36m\]'
export BLUE='\[\033[0;34m\]'
export NORMAL='\[\033[00m\]'
export PS1="Shteve:${CYAN}\w${RED}\n\$ ${NORMAL}"
{% endhighlight %}
</div>

Functions
---------

Now you've got your Terminal look and feel set just the way you like, what next? Well, I'd say the next most important change you could make is adding functions to your `.bashrc`	to encapsulate those often lengthy, horrid Unix commands into a much nicer function.

Let's take compression, for example. The proper command to compress a tar of a given file in Unix is `tar czf ${YOUR_FILE}`. Decompressing and extracting the file back out is just as cryptic with `tar xjf ${YOUR_FILE}`. I have never once been able to remember those infuriating arbitrary series of characters that tells the tar command to actually do what should be the default action. Thankfully with functions I don't need to, and now you don't have to either!

<div markdown="1" class="edge-to-edge infinite">
{% highlight bash %}
# Extract practically anything
# Usage: $ extract {YOUR_ARCHIVE}
extract () {
	# Many thanks to Daniel Baldwin (danielcbaldwin on GitHub) for providing
	# the foundation used for the command.
	#
	# Must use "$@" if we want all arguments (with white space) to be treated
	# As one file argument. This, however, restricts the command to one file
	# or directory argument at a time, so while that's never an issue for me
	# personally do take note of this.
	if [ -f "$@" ] ; then
		case "$@" in
			*.tar.bz2)  tar xjf "$@"    ;;
			*.tar.gz)   tar xzf "$@"    ;;
			*.bz2)      bunzip2 "$@"    ;;
			*.rar)      rar x "$@"      ;;
			*.gz)       gunzip "$@"     ;;
			*.tar)      tar xf "$@"     ;;
			*.tbz2)     tar xjf "$@"    ;;
			*.tgz)      tar xzf "$@"    ;;
			*.zip)      unzip "$@"      ;;
			*.Z)        uncompress "$@" ;;
			*)          echo "'$@' cannot be extracted via extract()" ;;
		esac
	else
		echo "'$@' is not a valid file"
	fi
}

# An easer zip command
# Usage: $ zipper ${THE_FILE}
zipper () {
	if [ $(echo $@ | tail -c 2) == "/" ] ; then
		file="${@%?}"
	else
		file="$@"
	fi

	zip -r -q "$file.zip" "$file"
}

# tartar: For When You *really* want to tar something
#
# An easier tar compression command
# Usage: $ tartar ${THE_FILE}
tartar () {
	if [ $(echo $@ | tail -c 2) == "/" ] ; then
		file="${@%?}"
	else
		file="$@"
	fi

	tar czf "$file.tar.gz" "$file"
}
{% endhighlight %}
</div>

As a special treat to OS X developers, here's some essential functions that both help clean up after OS X's messes and also bring the power of OS X's <span class="small-caps">GUI</span> to the Terminal.

<div markdown="1" class="edge-to-edge infinite">
{% highlight bash %}
# .DS_Store files are the herpes of the OS X file system.
#
# Removes all .DS_Store and ._.DS_Store files recursively from the
# current directory
# Usage: $ dsdel
dsdel () {
	find . -name ".DS_Store" -delete
}

# If you're like me you've made one or two slip-ups while rm'ing files.
# Now, there's a safer, more integrated option!
#
# Move deleted files to OS X's trash (safer)
# Usage: $ trash ${YOUR_FILE}
trash () {
	command mv "$@" ~/.Trash ;
}

# Did you know that you could QuickLook a file from Terminal? Now you do.
#
# Preview file in OS X's QuickLook
# Usage: $ ql ${YOUR_FILE}
ql () {
	qlmanage -p "$*" >& /dev/null;
}
{% endhighlight %}
</div>

Aliases
-------

Last but not least there's aliases which &mdash; if you aren't aware &mdash; are similar to shell functions but have the distinct difference of only being available from the interactive shell (so they won't work in scripts like functions do). They also don't have the argument flexibility that functions do so it's best to view aliases as a way to save commonly-used options for particular commands that don't require command line arguments. Here are some of my aliases to help you get started.

<div markdown="1" class="edge-to-edge infinite">
{% highlight bash %}
# Print out every path that constitutes the current $PATH
alias path='echo -e ${PATH//:/\\n}'

# Reload .bash_profile
alias source='source ~/.bash_profile'

# Always ask before replacing, we're not savages
alias cp='cp -i'
alias move='mv -i'

# Quicker reboots and shutdowns
alias shutdown="sudo shutdown -h now"
alias reboot="sudo reboot"
alias restart="sudo reboot"

# Shows the individual partition sizes without the temporary memory values
alias partitionsize='df -hT --exclude-type=tmpfs --exclude-type=devtmpfs'
# Gets the total disk usage on your machine
alias disksize='df -h --total | grep total'

# Display every instance of the given command found in the path
alias which='type -all'
{% endhighlight %}
</div>

And for OS X developers this particular command helps bridge the sometimes aggravating separation between the <span class="small-caps">GUI</span> and command line interfaces by letting you to quickly open a Finder window of your current directory when it's the preferred tool for a particular job.

{% highlight bash %}
# Open a new Finder window at your current directory
alias f='open -a Finder ./'
{% endhighlight %}

Download
--------

If you want the full `.bashrc` and `.bash_aliases` files used in the examples above you can download them below:

* __With Comments__: [bashrc]({{ site.dropbox }}/downloads/making-terminal-better/bashrc.txt), [bash_aliases]({{ site.dropbox }}/downloads/making-terminal-better/bash-aliases.txt)
* __Without Comments__: [bashrc]({{ site.dropbox }}/downloads/making-terminal-better/bashrc-sans-comments.txt), [bash_aliases](bash-aliases-sans-comments.txt)

In case you missed it you can also download my Terminal's theme [here]({{ site.dropbox }}/downloads/making-terminal-better/duokai.terminal). Happy customizing, everyone.

----------

[^quiz]: Pop quiz, do you know how to get the total space used (in <span class="small-caps">GB</span>) of your main drive *without* having to dig through a man page or reference a Unix bible? Probably not.