export class BrowserDOM {
    parseHTML(html) {
        const parser = new DOMParser();
        return parser.parseFromString(html, 'text/html');
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
        return window.getComputedStyle(element).display === 'block';
    }
    getNodeType(node) {
        return node.nodeType;
    }
    getOuterHTML(element) {
        return element.outerHTML;
    }
}
