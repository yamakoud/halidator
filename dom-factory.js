import { BrowserDOM } from './browser-dom';
import { NodeDOM } from './node-dom';
export function createDOM() {
    if (typeof window !== 'undefined' && window.document) {
        return new BrowserDOM();
    }
    else {
        return new NodeDOM();
    }
}
