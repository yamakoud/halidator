// src/dom-interface.ts

export interface DOMInterface {
  parseHTML(html: string): Document;
  querySelector(selector: string, element: Element | Document): Element | null;
  querySelectorAll(selector: string, element: Element | Document): Element[];
  getChildren(element: Element): Element[];
  isBlockElement(element: Element): boolean;
  getNodeType(node: Node): number;
  getOuterHTML(element: Element): string;
}
