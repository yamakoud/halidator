"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("./core/validator");
var dom;
if (typeof window !== 'undefined') {
    var BrowserDOM = require('./browser/dom').BrowserDOM;
    dom = new BrowserDOM();
}
else {
    var NodeDOM = require('./node/dom').NodeDOM;
    dom = new NodeDOM();
}
var halidator = new validator_1.Validator(dom);
exports.default = halidator;
