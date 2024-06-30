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
        const display = window.getComputedStyle(element).display;
        return display === 'block' || display === 'flex' || display === 'grid';
    }
    getNodeType(node) {
        return node.nodeType;
    }
    getOuterHTML(element) {
        return element.outerHTML;
    }
}
