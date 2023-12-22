// ==UserScript==
// @name         Remove instagram ads
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  try to take over the world!
// @author       dxloc
// @supportURL   https://github.com/dxloc/remove-instagram-ads/issues
// @match        https://*.instagram.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/dxloc/remove-instagram-ads/main/remove-insta-ads.js
// @downloadURL  https://raw.githubusercontent.com/dxloc/remove-instagram-ads/main/remove-insta-ads.js
// @connect      *
// @connect      api.github.com
// ==/UserScript==

var count = 0;

function scanArticle() {
    'use strict';
    var list = document.getElementsByTagName('article');
    for (var i = 0; i < list.length; i++) {
        var article = list[i];
        if (article.innerHTML.indexOf('sunihalinh') !== -1) {
            continue;
        }
        if ((article.innerHTML.indexOf('Sponsored') !== -1) ||
            (article.innerHTML.indexOf('Được tài trợ') !== -1) ||
            (article.innerHTML.indexOf('#Svg') !== -1)) {
            var clone = article.cloneNode(true);
            console.log(clone);
            article.innerHTML = '';
            count = count + 1;
            console.log("Block", count ,"ads.");
        }
    }
}

window.addEventListener("wheel", (event) => {
    scanArticle();
});
