"use strict";
// src/node-dom.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeDOM = void 0;
var jsdom_1 = require("jsdom");
var NodeDOM = /** @class */ (function () {
    function NodeDOM() {
        this.jsdom = new jsdom_1.JSDOM('<!DOCTYPE html><html><body></body></html>');
    }
    NodeDOM.prototype.parseHTML = function (html) {
        var dom = new jsdom_1.JSDOM(html);
        return dom.window.document;
    };
    NodeDOM.prototype.querySelector = function (selector, element) {
        return element.querySelector(selector);
    };
    NodeDOM.prototype.querySelectorAll = function (selector, element) {
        return Array.from(element.querySelectorAll(selector));
    };
    NodeDOM.prototype.getChildren = function (element) {
        return Array.from(element.children);
    };
    NodeDOM.prototype.isBlockElement = function (element) {
        var blockElements = ['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'];
        return blockElements.includes(element.tagName.toLowerCase());
    };
    NodeDOM.prototype.getNodeType = function (node) {
        return node.nodeType;
    };
    NodeDOM.prototype.getOuterHTML = function (element) {
        return element.outerHTML;
    };
    return NodeDOM;
}());
exports.NodeDOM = NodeDOM;
