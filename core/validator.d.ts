import { DOMInterface } from '../interfaces/dom-interface';
import { ValidatorOptions, ValidationIssue } from './types';
export declare class Validator {
    private dom;
    private apiEndpoint;
    constructor(dom: DOMInterface, options?: ValidatorOptions);
    validate(htmlContent: string): Promise<ValidationIssue[]>;
    private validateViaAPI;
    private validateLocally;
    private checkBlockElementMisuse;
    private checkInlineElementMisuse;
}
