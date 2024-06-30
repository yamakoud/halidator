import { JSDOM } from 'jsdom';
export class NodeDOM {
    parseHTML(html) {
        const dom = new JSDOM(html);
        return dom.window.document;
    }
    querySelector(selector, element) {
        return element.querySelector(selector);
    }
    querySelectorAll(selector, element) {
        return Array.from(element.querySelectorAll(selector));
    }
    getChildren(element) {
        return Array.from(element.children);
    }
    isBlockElement(element) {
        const blockElements = ['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'];
        return blockElements.includes(element.tagName.toLowerCase());
    }
    getNodeType(node) {
        return node.nodeType;
    }
    getOuterHTML(element) {
        return element.outerHTML;
    }
}
