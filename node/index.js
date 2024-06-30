import { Validator } from '../core/validator';
import { NodeDOM } from './dom';
export class Halidator extends Validator {
    constructor(options = {}) {
        super(new NodeDOM(), options);
    }
}
module.exports = Halidator;
export default Halidator;
