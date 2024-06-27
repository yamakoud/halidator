import { Validator } from '../core/validator';
import { BrowserDOM } from './dom';
import { ValidatorOptions } from '../core/types';

export class Halidator extends Validator {
  constructor(options: ValidatorOptions = {}) {
    super(new BrowserDOM(), options);
  }
}

if (typeof window !== 'undefined') {
  (window as any).Halidator = Halidator;
}

export default Halidator;