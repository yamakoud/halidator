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
    // 現時点では仮の実装を返す
    return [{ element: '', message: 'API validation not implemented yet' }];
  }

  private validateLocally(htmlContent: string): ValidationIssue[] {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const issues: ValidationIssue[] = [];

    this.checkColWithoutRow(doc, issues);
    this.checkBtnWithoutBtnGroup(doc, issues);

    return issues;
  }

  private checkColWithoutRow(doc: Document, issues: ValidationIssue[]): void {
    doc.querySelectorAll('.col').forEach((col: Element) => {
      if (!col.closest('.row')) {
        issues.push({
          element: col.outerHTML,
          message: 'Column without parent row detected.'
        });
      }
    });
  }

  private checkBtnWithoutBtnGroup(doc: Document, issues: ValidationIssue[]): void {
    doc.querySelectorAll('.btn').forEach((btn: Element) => {
      if (!btn.closest('.btn-group')) {
        issues.push({
          element: btn.outerHTML,
          message: 'Button without parent btn-group detected.'
        });
      }
    });
  }
}

export default HTMLValidator;