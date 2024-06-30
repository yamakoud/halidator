"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    function Validator(dom, options) {
        if (options === void 0) { options = {}; }
        this.dom = dom;
        this.apiEndpoint = options.apiEndpoint || null;
    }
    Validator.prototype.validate = function (htmlContent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.apiEndpoint) {
                    return [2 /*return*/, this.validateViaAPI(htmlContent)];
                }
                else {
                    return [2 /*return*/, this.validateLocally(htmlContent)];
                }
                return [2 /*return*/];
            });
        });
    };
    Validator.prototype.validateViaAPI = function (htmlContent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // APIを使用したバリデーションのロジックをここに実装
                // 現時点では仮の実装を返す
                return [2 /*return*/, [{ element: '', message: 'API validation not implemented yet' }]];
            });
        });
    };
    Validator.prototype.validateLocally = function (htmlContent) {
        var doc = this.dom.parseHTML(htmlContent);
        var issues = [];
        this.checkBlockElementMisuse(doc, issues);
        this.checkInlineElementMisuse(doc, issues);
        return issues;
    };
    Validator.prototype.checkBlockElementMisuse = function (doc, issues) {
        var _this = this;
        var inlineElements = ['a', 'span', 'strong', 'em', 'b', 'i', 'u', 'sub', 'sup'];
        inlineElements.forEach(function (inlineTag) {
            _this.dom.querySelectorAll(inlineTag, doc).forEach(function (element) {
                var hasBlockChild = _this.dom.getChildren(element).some(function (child) {
                    return _this.dom.isBlockElement(child);
                });
                if (hasBlockChild) {
                    issues.push({
                        element: _this.dom.getOuterHTML(element),
                        message: "Inline element <".concat(inlineTag, "> contains a block-level element.")
                    });
                }
            });
        });
    };
    Validator.prototype.checkInlineElementMisuse = function (doc, issues) {
        var _this = this;
        var blockElements = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'];
        blockElements.forEach(function (blockTag) {
            _this.dom.querySelectorAll(blockTag, doc).forEach(function (element) {
                var children = _this.dom.getChildren(element);
                if (children.length === 0 && _this.dom.getNodeType(element.firstChild) === Node.TEXT_NODE) {
                    issues.push({
                        element: _this.dom.getOuterHTML(element),
                        message: "Block element <".concat(blockTag, "> contains only text. Consider using a <p> element instead.")
                    });
                }
            });
        });
    };
    return Validator;
}());
exports.Validator = Validator;
