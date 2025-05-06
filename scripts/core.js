let html = document.getElementsByTagName("html")[0];

/**
 * What follows is a nice solution for cookie management from Fakhruddin Ujjainwala
 * (getCookie() is already defined inline in head.html)
 * https://stackoverflow.com/a/24103596
 */
function setCookie(name, value, days) {
    let expires = "";
    if (!days) {
        days = 365;
    }
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/**
 * This is rnarian's JQuery plugin Anchor link generator *lightly* refactored
 * by myself to instead be a vanilla Javascript function to avoid the JQuery
 * dependency.
 *
 * See rnarian's original plugin here:
 *   https://www.jqueryscript.net/other/jQuery-Plugin-To-Add-Unique-Anchor-Links-To-Headlines-anchor-js.html
 * And browse his other jqueryscript contributions here:
 *   https://www.jqueryscript.net/plus/search.php?keyword=rnarian
 */
function insertAnchors(options) {
    var defaults = {
        headingClass: "anchored",
        anchorClass:  "anchor",
        symbol:       "¶",
        maxLength:    100
    };
    var opt = Object.assign({}, defaults, options),
        usedNames = [];
    if (!opt.anchorsEnabled) {
        return;
    }

    var cleanName = function (name) {
        var cleaned = name.replace(/[^a-z0-9\s]/gi, "")
                          .replace(/[_\s]/g, "-")
                          .replace(/ /g, "-").toLowerCase();
        return cleaned;
    };

    document.querySelectorAll(opt.query).forEach(function(header) {
        var name = header.textContent,
            count = 1,
            id;

        // Sanitize unwanted characters so the ID is clean
        if (name.length > opt.maxLength) {
            name = name.substring(0, opt.maxLength);
        }
        name = cleanName(name);

        // Make sure the anchor isn't already in use
        if (usedNames[name] >= 1) {
            count = usedNames[name] + 1;
            id = name + "-" + count;
        } else {
            id = name;
        }

        header.classList.add(opt.headingClass);
        header.id = id;

        var a = document.createElement("a");
        a.classList.add(opt.anchorClass);
        a.href = "#" + id;
        a.textContent = opt.symbol;
        header.appendChild(a);

        usedNames[name] = count;
    });
};

function changeAppearance(appearance) {
    if (!appearance) {
        return;
    }

    setCookie("appearance", appearance);

    document.querySelector(".well.light")?.classList.remove("active");
    document.querySelector(".well.dark")?.classList.remove("active");
    document.querySelector(".well.auto")?.classList.remove("active");

    document.querySelector(".well." + appearance)?.classList.add("active");
    
    let inSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ("light" == appearance || ("auto" == appearance && !inSystemDarkMode)) {
        document.getElementById("logo-speech-bubble").textContent = "Hi there! Hope you're having a good day.";
        html.removeAttribute("id");
    } else if ("dark" == appearance || ("auto" == appearance && inSystemDarkMode)) {
        document.getElementById("logo-speech-bubble").textContent = "Stay cool, dude.";
        html.setAttribute("id", "dark");
    }

    refreshBrowserThemeColor();
}
function changeAccent(accent) {
    // If the page instructed us to ignore/override the accent color, entirely skip
    if (html.classList.contains("ignore-accent-color")) {
        return;
    }
    if (!accent) {
        return;
    }
    setCookie("accent", accent);

    if (!html.classList.contains("ignore-accent-color")
     || !html.classList.contains(accent)) {
        html.classList.remove("blue");
        html.classList.remove("red");
        html.classList.remove("orange");
        html.classList.remove("yellow");
        html.classList.remove("green");
        html.classList.remove("purple");
        html.classList.remove("pink");
        document.querySelector(".well.blue")?.classList.remove("active");
        document.querySelector(".well.red")?.classList.remove("active");
        document.querySelector(".well.orange")?.classList.remove("active");
        document.querySelector(".well.yellow")?.classList.remove("active");
        document.querySelector(".well.green")?.classList.remove("active");
        document.querySelector(".well.purple")?.classList.remove("active");
        document.querySelector(".well.pink")?.classList.remove("active");

        document.querySelector(".well." + accent)?.classList.add("active");
        html.classList.add(accent);
    }

    refreshBrowserThemeColor();
}
function refreshBrowserThemeColor() {
    let darkThemeColor;
    let lightThemeColor;
    let accent = getCookie("accent");
    if (accent == "purple") {
        darkThemeColor = "#29242D";
        lightThemeColor = "#F1EDF1";
    } else if (accent == "pink") {
        darkThemeColor = "#2C2328";
        lightThemeColor = "#F2EDF0";
    } else if (accent == "red") {
        darkThemeColor = "#2C2424";
        lightThemeColor = "#F2EEED";
    } else if (accent == "orange") {
        darkThemeColor = "#2B2923";
        lightThemeColor = "#F1F0ED";
    } else if (accent == "yellow") {
        darkThemeColor = "#2B2A22";
        lightThemeColor = "#F1F1ED";
    } else if (accent == "green") {
        darkThemeColor = "#242B26";
        lightThemeColor = "#EDF1EF";
    } else {
        darkThemeColor = "#23282C";
        lightThemeColor = "#ECF0F1";
    }
    let darkThemeColorOverride = document.querySelector("meta[name='dark-theme-color-override']")?.content;
    let lightThemeColorOverride = document.querySelector("meta[name='light-theme-color-override']")?.content;

    let appearance = getCookie("appearance");
    let inSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (appearance == "light" || (appearance == "auto" && !inSystemDarkMode)) {
        document.querySelector("meta#theme-color")?.setAttribute("content", lightThemeColorOverride ? lightThemeColorOverride : lightThemeColor);
    } else if (appearance == "dark" || (appearance == "auto" && inSystemDarkMode)) {
        document.querySelector("meta#theme-color")?.setAttribute("content", darkThemeColorOverride ? darkThemeColorOverride : darkThemeColor);
    }
}

function toggleSettingsPopup() {
    let popup = document.getElementById("settings-popup");
    popup.classList.toggle("show");
    document.getElementById("settings-button").classList.toggle("active");
}

/**
 * Depending on the provided argument and current DOM state, will either:
 *
 * - Do nothing (the menu remains whatever state it's in)
 * - Adjust the relatively positioned menu to become a floating menu
 * - Hide a currently floating menu
 * - Show a hidden floating menu
 * - Adjust a floating menu to become relatively positioned
 */
let previousScrollTop = -1;
let menubar = document.getElementById("menubar");
let settingsPopup = document.getElementById("settings-popup");
let cumulativeScrollDown = 0;
let cumulativeScrollUp = 0;
let isFirstScrollEvent = true;
function updateMagicMenu() {
    let newScrollTop = html.scrollTop;
    /**
     * We need to know how much cumulative scroll has been made in one
     * direction or another to not have the hiding & showing of floating menus
     * be IMMEDIATE (doesn't feel good from a user perspective, needs a little
     * buffer).
     *
     * The logic is intentionally skipped / NOT counted as a cumulative scroll
     * in either direction if previousScrollTop == -1 (i.e. if this is our
     * very first scroll event, which may very well be the browser "snapping"
     * a reloaded page to the previous scroll position. When that happens, we
     * don't want the menu hidden on immediate page load!)
     *
     * This is "safe" to do even if the page load is "fresh" (no browser
     * scroll event), since the first scroll event is largerly ignored ANYWAYS
     * (we only consider doing "magic menu" stuff if the scroll position is at
     * least 100 pixels down, we have plenty of buffer that can be safely
     * ignored).
     */
    if (newScrollTop - previousScrollTop > 0 && previousScrollTop != -1 && newScrollTop > 125) {
        cumulativeScrollDown += newScrollTop - previousScrollTop;
    } else {
        cumulativeScrollDown = 0;
    }
    if (previousScrollTop - newScrollTop > 0 && previousScrollTop != -1) {
        cumulativeScrollUp += previousScrollTop - newScrollTop
    } else {
        cumulativeScrollUp = 0;
    }

    if (newScrollTop > 125) {
        if ((newScrollTop - previousScrollTop < 0 && cumulativeScrollUp > 150) || previousScrollTop == -1) {
            menubar.classList.remove("hide-when-scrolling-on-small-screens");
            settingsPopup.classList.remove("hide-when-scrolling-on-small-screens");
        } else if (cumulativeScrollDown > 300) {
            menubar.classList.add("hide-when-scrolling-on-small-screens");
            settingsPopup.classList.add("hide-when-scrolling-on-small-screens");
        }
        menubar.classList.add("float");
        settingsPopup.classList.add("float");
    } else {
        if (cumulativeScrollUp > 150) {
            menubar.classList.remove("hide-when-scrolling-on-small-screens");
            settingsPopup.classList.remove("hide-when-scrolling-on-small-screens");
        }
        if (newScrollTop > 104) {
            menubar.classList.add("float");
            settingsPopup.classList.add("float");
        } else {
            menubar.classList.remove("float");
            settingsPopup.classList.remove("float");
        }
        if (newScrollTop > 50) {
            if (newScrollTop - previousScrollTop < 0 && cumulativeScrollUp > 150) {
                menubar.classList.remove("hide-when-scrolling-on-larger-screens");
                settingsPopup.classList.remove("hide-when-scrolling-on-larger-screens");
            } else if (cumulativeScrollDown > 300) {
                menubar.classList.add("hide-when-scrolling-on-larger-screens");
                settingsPopup.classList.add("hide-when-scrolling-on-larger-screens");
            }
        }
    }
    
    previousScrollTop = newScrollTop;
}

/**
 * Shoutout to Timo Huovinen for his working alternative to
 * JQuery's $(document).ready method.
 * https://stackoverflow.com/a/7053197
 */
function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
        return;
    }
    document.addEventListener('DOMContentLoaded', fn);
}
ready(function() {
    // Updating the site look-and-feel for either the last set options (or the defaults if not set)
    changeAppearance(getCookie("appearance") || "auto");
    changeAccent(getCookie("accent") || "blue");
    refreshBrowserThemeColor();

    // Generate hoverable anchor links (when applicable)
    insertAnchors({
        anchorsEnabled,
        symbol: "¶",
        query: "h2,h3"
    });

    // Dynamic hiding based on scroll position and page type
    addEventListener("scroll", (event) => {
        updateMagicMenu();
    });

    // Ensure we react to changes in the browser's reported "preferred color scheme" when in "auto" mode
    window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
        let pageForcesDarkMode = html.classList.contains("force-dark-mode");
        let userPrefersAutoTheme = getCookie("appearance") == "auto";
        if (!pageForcesDarkMode && userPrefersAutoTheme) {
            changeAppearance("auto");
        }
    });

    // Allow clicking anywhere on the page to dismiss the settings popup
    addEventListener("click", (event) => {
        if (document.getElementById("settings-popup").classList.contains("show")) {
            if (!event.target.closest("#settings-button") && !event.target.closest("#settings-popup")) {
                toggleSettingsPopup()
            }
        }
    });

    /**
     * Only set background color transition animations on the root elements
     * AFTER we've fully processed any appearance & theme changes (otherwise,
     * we run the risk of causing a "flashes" of an undesired theme on page
     * load).
     */
    html.style.setProperty("transition", "background-color var(--cubic-bezier-transition)");
    document.getElementsByTagName("main")[0].style.setProperty("transition", "background-color var(--cubic-bezier-transition)");
});