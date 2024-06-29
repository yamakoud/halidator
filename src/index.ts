import { Validator } from './core/validator';
import { BrowserDOM } from './browser/dom';
import { NodeDOM } from './node/dom';

let dom;
if (typeof window !== 'undefined') {
  dom = new BrowserDOM();
} else {
  dom = new NodeDOM();
}

const halidator = new Validator(dom);

export default halidator;
