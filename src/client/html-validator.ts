interface ValidatorOptions {
  apiEndpoint?: string;
}

interface ValidationIssue {
  element: string;
  message: string;
}

class HTMLValidator {
  private apiEndpoint: string | null;

  constructor(options: ValidatorOptions = {}) {
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
    return [{ element: '', message: 'API validation not implemented yet' }];
  }

  private validateLocally(htmlContent: string): ValidationIssue[] {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const issues: ValidationIssue[] = [];

    this.checkBlockElementMisuse(doc, issues);
    this.checkInlineElementMisuse(doc, issues);

    return issues;
  }

  private checkBlockElementMisuse(doc: Document, issues: ValidationIssue[]): void {
    const inlineElements = ['a', 'span', 'strong', 'em', 'b', 'i', 'u', 'sub', 'sup'];
    inlineElements.forEach(inlineTag => {
      doc.querySelectorAll(inlineTag).forEach((element: Element) => {
        const hasBlockChild = Array.from(element.children).some(child => 
          window.getComputedStyle(child).display === 'block');
        if (hasBlockChild) {
          issues.push({
            element: element.outerHTML,
            message: `Inline element <${inlineTag}> contains a block-level element.`
          });
        }
      });
    });
  }

  private checkInlineElementMisuse(doc: Document, issues: ValidationIssue[]): void {
    const blockElements = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'p'];
    blockElements.forEach(blockTag => {
      doc.querySelectorAll(blockTag).forEach((element: Element) => {
        if (element.childNodes.length === 1 && element.firstChild?.nodeType === Node.TEXT_NODE) {
          // pタグは例外として扱う
          if (blockTag !== 'p') {
            issues.push({
              element: element.outerHTML,
              message: `Block element <${blockTag}> contains only text. Consider using a <p> element instead.`
            });
          }
        }
      });
    });
  }
}

export default HTMLValidator;