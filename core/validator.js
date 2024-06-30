var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Validator {
    constructor(dom, options = {}) {
        this.dom = dom;
        this.apiEndpoint = options.apiEndpoint || null;
    }
    validate(htmlContent) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.apiEndpoint) {
                return this.validateViaAPI(htmlContent);
            }
            else {
                return this.validateLocally(htmlContent);
            }
        });
    }
    validateViaAPI(htmlContent) {
        return __awaiter(this, void 0, void 0, function* () {
            // APIを使用したバリデーションのロジックをここに実装
            // 現時点では仮の実装を返す
            return [{ element: '', message: 'API validation not implemented yet' }];
        });
    }
    validateLocally(htmlContent) {
        const doc = this.dom.parseHTML(htmlContent);
        const issues = [];
        this.checkBlockElementMisuse(doc, issues);
        this.checkInlineElementMisuse(doc, issues);
        return issues;
    }
    checkBlockElementMisuse(doc, issues) {
        const inlineElements = ['a', 'span', 'strong', 'em', 'b', 'i', 'u', 'sub', 'sup'];
        inlineElements.forEach(inlineTag => {
            this.dom.querySelectorAll(inlineTag, doc).forEach((element) => {
                const hasBlockChild = this.dom.getChildren(element).some(child => this.dom.isBlockElement(child));
                if (hasBlockChild) {
                    issues.push({
                        element: this.dom.getOuterHTML(element),
                        message: `Inline element <${inlineTag}> contains a block-level element.`
                    });
                }
            });
        });
    }
    checkInlineElementMisuse(doc, issues) {
        const blockElements = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'];
        blockElements.forEach(blockTag => {
            this.dom.querySelectorAll(blockTag, doc).forEach((element) => {
                const children = this.dom.getChildren(element);
                if (children.length === 0 && element.firstChild) {
                    const nodeType = this.dom.getNodeType(element.firstChild);
                    if (nodeType === Node.TEXT_NODE) {
                        issues.push({
                            element: this.dom.getOuterHTML(element),
                            message: `Block element <${blockTag}> contains only text. Consider using a <p> element instead.`
                        });
                    }
                }
            });
        });
    }
}
