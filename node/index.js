"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Halidator = void 0;
var validator_1 = require("../core/validator");
var dom_1 = require("./dom");
var Halidator = /** @class */ (function (_super) {
    __extends(Halidator, _super);
    function Halidator(options) {
        if (options === void 0) { options = {}; }
        return _super.call(this, new dom_1.NodeDOM(), options) || this;
    }
    return Halidator;
}(validator_1.Validator));
exports.Halidator = Halidator;
module.exports = Halidator;
exports.default = Halidator;
