// ==UserScript==
// @name         Google Slides Extensions
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extensions for Google Slides (blocking of slide changes by mouse wheel scrolling, better shortcut keys, etc.)
// @author       Michael Eckert
// @match        https://docs.google.com/presentation/*
// @icon         https://ssl.gstatic.com/docs/presentations/images/favicon5.ico
// @grant        unsafeWindow
// @sandbox      JavaScript
// @run-at       document-idle
// @unwrap       true
// ==/UserScript==

(function() {
    'use strict';

    console.log("gslides> href = " + window.location.href);
    console.log("gslides> pathname = " + window.location.pathname);

    // Stop Wheel scrolling
    window.addEventListener("wheel", function(e) {
        console.log("Stopping wheel event");
        e.stopPropagation();
    }, true);

    // Better keyboard shortcuts
    function keyHandler(e) {
        console.log("gslides> keypress (e.metaKey = " + e.metaKey + ", e.altKey = " + e.altKey + ", e.key = " + e.key + ", e.which = " + e.which +" )");
        console.log(e);

        // ALT+CMDE+0
        if (e.metaKey && e.altKey && (e.code == "Digit0" || e.code == "Numpad0")) {
            console.log("gslides> ALT+CMD+0 pressed!");
            sendZoomFit(this);
        }
        // CTRL+CMD+l
        else if (e.ctrlKey && e.metaKey && e.code == "KeyL") {
            sendResizeLargerHorizontally(this);
        }
        // CTRL+CMD+h
        else if (e.ctrlKey && e.metaKey && e.code == "KeyH") {
            sendResizeSmallerHorizontally(this);
        }
        // CTRL+CMD+m
        else if (e.ctrlKey && e.metaKey && e.code == "KeyM") {
            sendResizeSmallerVertically(this);
        }
    }

    function sendZoomFit(dest) {
        // Send CMD + ALT + [
        let ev1 = new KeyboardEvent("keydown", {
            key: '[',
            code: 'BracketLeft',
            keyCode: 219,
            which: 219,
            altKey: true,
            metaKey: true,
            bubbles: true,
        });
        dest.dispatchEvent(ev1);
    }

    function sendResizeLargerHorizontally(dest) {
        // Send CTRL + CMD + b
        let ev1 = new KeyboardEvent("keydown", {
            key: 'b',
            code: 'KeyB',
            keyCode: 66,
            which: 66,
            ctrlKey: true,
            metaKey: true,
            bubbles: true,
        });
        dest.dispatchEvent(ev1);
    }

    function sendResizeSmallerHorizontally(dest) {
        // Send CTRL + CMD + w
        let ev1 = new KeyboardEvent("keydown", {
            key: 'w',
            code: 'KeyW',
            keyCode: 87,
            which: 87,
            ctrlKey: true,
            metaKey: true,
            bubbles: true,
        });
        dest.dispatchEvent(ev1);
    }

    function sendResizeSmallerVertically(dest) {
        // Send CTRL + CMD + q
        let ev1 = new KeyboardEvent("keydown", {
            key: 'q',
            code: 'KeyQ',
            keyCode: 81,
            which: 81,
            ctrlKey: true,
            metaKey: true,
            bubbles: true,
        });
        dest.dispatchEvent(ev1);
    }

    function registerKeydownHandlerViaTimeoutAndIframe() {
        let iframes = document.querySelectorAll("iframe.docs-texteventtarget-iframe");

        if(iframes.length == 0) {
            console.log("gslides> not found, trying again");
            window.setTimeout(registerKeydownHandlerViaTimeoutAndIframe, 500);
            return;
        }

        for(let iframe of iframes) {
            console.log("gslides> Registering event handler on " + iframe);
            iframe.contentDocument.addEventListener("keydown", keyHandler, false);
        }
    }

    if(window.location.pathname.endsWith("/edit")) {
        registerKeydownHandlerViaTimeoutAndIframe();
        //registerKeydownHandlerDirectly();
    }

    console.log("gslides> Tampermonkey script loaded");
})();