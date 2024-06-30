"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserDOM = void 0;
var BrowserDOM = /** @class */ (function () {
    function BrowserDOM() {
    }
    BrowserDOM.prototype.parseHTML = function (html) {
        var parser = new DOMParser();
        return parser.parseFromString(html, 'text/html');
    };
    BrowserDOM.prototype.querySelector = function (selector, element) {
        return element.querySelector(selector);
    };
    BrowserDOM.prototype.querySelectorAll = function (selector, element) {
        return Array.from(element.querySelectorAll(selector));
    };
    BrowserDOM.prototype.getChildren = function (element) {
        return Array.from(element.children);
    };
    BrowserDOM.prototype.isBlockElement = function (element) {
        var display = window.getComputedStyle(element).display;
        return display === 'block' || display === 'flex' || display === 'grid';
    };
    BrowserDOM.prototype.getNodeType = function (node) {
        return node.nodeType;
    };
    BrowserDOM.prototype.getOuterHTML = function (element) {
        return element.outerHTML;
    };
    return BrowserDOM;
}());
exports.BrowserDOM = BrowserDOM;
