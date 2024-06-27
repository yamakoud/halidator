// src/node-dom.ts

import { JSDOM } from 'jsdom';
import { DOMInterface } from './interfaces/dom-interface';

export class NodeDOM implements DOMInterface {
  private jsdom: JSDOM;

  constructor() {
    this.jsdom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  }

  parseHTML(html: string): Document {
    const dom = new JSDOM(html);
    return dom.window.document;
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
    const blockElements = ['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'];
    return blockElements.includes(element.tagName.toLowerCase());
  }

  getNodeType(node: Node): number {
    return node.nodeType;
  }

  getOuterHTML(element: Element): string {
    return element.outerHTML;
  }
}
