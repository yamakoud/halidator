// src/browser-dom.ts

import { DOMInterface } from './dom-interface';

export class BrowserDOM implements DOMInterface {
  parseHTML(html: string): Document {
    const parser = new DOMParser();
    return parser.parseFromString(html, 'text/html');
  }

  querySelector(selector: string, element: Element | Document): Element | null {
    return element.querySelector(selector);
  }

  querySelectorAll(selector: string, element: Element | Document): Element[] {
    return Array.from(element.querySelectorAll(selector));
  }

  getChildren(element: Element): Element[] {
    return Array.from(element.children);
  }

  isBlockElement(element: Element): boolean {
    return window.getComputedStyle(element).display === 'block';
  }

  getNodeType(node: Node): number {
    return node.nodeType;
  }

  getOuterHTML(element: Element): string {
    return element.outerHTML;
  }
}
