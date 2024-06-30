import { Validator } from '../core/validator';
import { BrowserDOM } from './dom';
export class Halidator extends Validator {
    constructor(options = {}) {
        super(new BrowserDOM(), options);
    }
    static validateBody() {
        const validator = new Halidator();
        const bodyHTML = document.body.outerHTML;
        return validator.validate(bodyHTML);
    }
}
if (typeof window !== 'undefined') {
    window.Halidator = Halidator;
}
export default Halidator;
