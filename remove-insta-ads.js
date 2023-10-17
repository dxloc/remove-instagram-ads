// ==UserScript==
// @name         Remove instagram ads
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       dxloc
// @match        https://*.instagram.com/*
// @grant        none
// ==/UserScript==

var count = 0;

function scanArticle() {
    'use strict';
    var list = document.getElementsByTagName('article');
    for (var i = 0; i < list.length; i++) {
        var article = list[i];
        if (article.innerHTML.indexOf('Sponsored') !== -1) {
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
