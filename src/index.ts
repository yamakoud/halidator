import { Validator } from './core/validator';
import { DOMInterface } from './interfaces/dom-interface';

let dom: DOMInterface;

if (typeof window !== 'undefined') {
  const { BrowserDOM } = require('./browser/dom');
  dom = new BrowserDOM();
} else {
  const { NodeDOM } = require('./node/dom');
  dom = new NodeDOM();
}

const halidator = new Validator(dom);
export default halidator;
