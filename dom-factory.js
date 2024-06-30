"use strict";
// src/dom-factory.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDOM = createDOM;
var browser_dom_1 = require("./browser-dom");
var node_dom_1 = require("./node-dom");
function createDOM() {
    if (typeof window !== 'undefined' && window.document) {
        return new browser_dom_1.BrowserDOM();
    }
    else {
        return new node_dom_1.NodeDOM();
    }
}
