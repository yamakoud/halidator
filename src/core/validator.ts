import { DOMInterface } from '../interfaces/dom-interface';
import { ValidatorOptions, ValidationIssue } from './types';

export class Validator {
  private apiEndpoint: string | null;

  constructor(private dom: DOMInterface, options: ValidatorOptions = {}) {
    this.apiEndpoint = options.apiEndpoint || null;
  }

  async validate(htmlContent: string): Promise<ValidationIssue[]> {
    if (this.apiEndpoint) {
      return this.validateViaAPI(htmlContent);
    } else {
      return this.validateLocally(htmlContent);
    }
  }

  private async validateViaAPI(htmlContent: string): Promise<ValidationIssue[]> {
    // APIを使用したバリデーションのロジックをここに実装
    // 現時点では仮の実装を返す
    return [{ element: '', message: 'API validation not implemented yet' }];
  }

  private validateLocally(htmlContent: string): ValidationIssue[] {
    const doc = this.dom.parseHTML(htmlContent);
    const issues: ValidationIssue[] = [];

    this.checkBlockElementMisuse(doc, issues);
    this.checkInlineElementMisuse(doc, issues);

    return issues;
  }

  private checkBlockElementMisuse(doc: Document, issues: ValidationIssue[]): void {
    const inlineElements = ['a', 'span', 'strong', 'em', 'b', 'i', 'u', 'sub', 'sup'];
    inlineElements.forEach(inlineTag => {
      this.dom.querySelectorAll(inlineTag, doc).forEach((element: Element) => {
        const hasBlockChild = this.dom.getChildren(element).some(child => 
          this.dom.isBlockElement(child)
        );
        if (hasBlockChild) {
          issues.push({
            element: this.dom.getOuterHTML(element),
            message: `Inline element <${inlineTag}> contains a block-level element.`
          });
        }
      });
    });
  }

  private checkInlineElementMisuse(doc: Document, issues: ValidationIssue[]): void {
    const blockElements = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'];
    blockElements.forEach(blockTag => {
      this.dom.querySelectorAll(blockTag, doc).forEach((element: Element) => {
        const children = this.dom.getChildren(element);
        if (children.length === 0 && element.firstChild) {
          const nodeType = this.dom.getNodeType(element.firstChild);
          if (nodeType === Node.TEXT_NODE) {
            issues.push({
              element: this.dom.getOuterHTML(element),
              message: `Block element <${blockTag}> contains only text. Consider using a <p> element instead.`
            });
          }
        }
      });
    });
  }
}