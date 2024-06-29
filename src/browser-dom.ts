import { DOMInterface } from './interfaces/dom-interface';

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
    const display = window.getComputedStyle(element).display;
    return display === 'block' || display === 'flex' || display === 'grid';
  }

  getNodeType(node: Node): number {
    return node.nodeType;
  }

  getOuterHTML(element: Element): string {
    return element.outerHTML;
  }
}
