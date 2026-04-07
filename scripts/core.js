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
    let forceDarkMode = document.getElementsByTagName("html")[0].classList.contains("force-dark-mode");
    if ("dark" == appearance || forceDarkMode || ("auto" == appearance && inSystemDarkMode)) {
        document.getElementById("logo-speech-bubble").textContent = "Stay cool, dude.";
        html.setAttribute("id", "dark");
    } else {
        document.getElementById("logo-speech-bubble").textContent = "Hi there! Hope you're having a good day.";
        html.removeAttribute("id");
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
    if (accent === "purple") {
        darkThemeColor = "#1F1A22";
        lightThemeColor = "#FDFBFE";
    } else if (accent === "pink") {
        darkThemeColor = "#221A1E";
        lightThemeColor = "#FEFBFD";
    } else if (accent === "red") {
        darkThemeColor = "#221A1A";
        lightThemeColor = "#FEFBFB";
    } else if (accent === "orange") {
        darkThemeColor = "#22201B";
        lightThemeColor = "#FEFCFB";
    } else if (accent === "yellow") {
        darkThemeColor = "#23221B";
        lightThemeColor = "#FEFDFB";
    } else if (accent === "green") {
        darkThemeColor = "#1C231D";
        lightThemeColor = "#FCFEFC";
    } else {
        darkThemeColor = "#1B1F23";
        lightThemeColor = "#FBFCFE";
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