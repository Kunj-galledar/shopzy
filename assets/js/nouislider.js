/*! nouislider - 14.6.0 - 6/27/2020 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === "object") {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        window.noUiSlider = factory();
    }
})(function () {
        "use strict";

        var VERSION = "14.6.0";

        //region Helper Methods

        function isValidFormatter(entry) {
            return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
        }

        function removeElement(el) {
            el.parentElement.removeChild(el);
        }

        function isSet(value) {
            return value !== null && value !== undefined;
        }

        // Bindable version
        function preventDefault(e) {
            e.preventDefault();
        }

        // Removes duplicates from an array.
        function unique(array) {
            return array.filter(function (a) {
                return !this[a] ? (this[a] = true) : false;
            }, {});
        }

        // Round a value to the closest 'to'.
        function closest(value, to) {
            return Math.round(value / to) * to;
        }

        // Current position of an element relative to the document.
        function offset(elem, orientation) {
            var rect = elem.getBoundingClientRect();
            var doc = elem.ownerDocument;
            var docElem = doc.documentElement;
            var pageOffset = getPageOffset(doc);

            // getBoundingClientRect contains left scroll in Chrome on Android.
            // I haven't found a feature detection that proves this. Worst case
            // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
            if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
                pageOffset.x = 0;
            }

            return orientation ?
                rect.top + pageOffset.y - docElem.clientTop :
                rect.left + pageOffset.x - docElem.clientLeft;
        }

        // Checks whether a value is numerical.
        function isNumeric(a) {
            return typeof a === "number" && !isNaN(a) && isFinite(a);
        }

        // Sets a class and removes it after [duration] ms.
        function addClassFor(element, className, duration) {
            if (duration > 0) {
                addClass(element, className);
                setTimeout(function () {
                    removeClass(element, className);
                }, duration);
            }
        }

        // Limits a value to 0 - 100
        function limit(a) {
            return Math.max(Math.min(a, 100), 0);
        }

        // Wraps a variable as an array, if it isn't one yet.
        // Note that an input array is returned by reference!
        function asArray(a) {
            return Array.isArray(a) ? a : [a];
        }

        // Counts decimals
        function countDecimals(numStr) {
            numStr = String(numStr);
            var pieces = numStr.split(".");
            return pieces.length > 1 ? pieces[1].length : 0;
        }

        // http://youmightnotneedjquery.com/#add_class
        function addClass(el, className) {
            if (el.classList && !/\s/.test(className)) {
                el.classList.add(className);
            } else {
                el.className += " " + className;
            }
        }

        // http://youmightnotneedjquery.com/#remove_class
        function removeClass(el, className) {
            if (el.classList && !/\s/.test(className)) {
                el.classList.remove(className);
            } else {
                el.className = el.className.replace(
                        new RegExp