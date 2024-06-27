// src/dom-factory.ts

import { DOMInterface } from './interfaces/dom-interface';
import { BrowserDOM } from './browser-dom';
import { NodeDOM } from './node-dom';

export function createDOM(): DOMInterface {
  if (typeof window !== 'undefined' && window.document) {
    return new BrowserDOM();
  } else {
    return new NodeDOM();
  }
}