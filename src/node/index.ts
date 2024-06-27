import { Validator } from '../core/validator';
import { NodeDOM } from './dom';
import { ValidatorOptions } from '../core/types';

export class Halidator extends Validator {
  constructor(options: ValidatorOptions = {}) {
    super(new NodeDOM(), options);
  }
}

module.exports = Halidator;
export default Halidator;
