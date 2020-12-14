// ==UserScript==
// @name		MunpiaMaterialDarkTheme
// @version		1.0.3
// @author		green1052
// @description	문피아 글 배경을 어둡게 만들어 줍니다.
// @homepageURL	https://github.com/green1052/MunpiaMaterialDarkTheme
// @downloadURL	https://raw.githubusercontent.com/green1052/MunpiaMaterialDarkTheme/main/MunpiaMaterialDarkTheme.user.js
// @include		*.munpia.com/*
// @run-at		document-end
// ==/UserScript==

(function () {
    "use strict";

    const css = document.createElement("style");

    if (location.hostname === "mm.munpia.com")
        css.innerHTML = ".article_white { color: #FFFFFF !important; background-color: #212121 !important; }";
    else
        css.innerHTML = `#board .entry-view .content-box .subinfo h3 { color: #FFFFFF !important; } #board.light .entry-view .content { background-color: #212121 !important; color: #FFFFFF !important; }`;

    document.head.appendChild(css);
})();
