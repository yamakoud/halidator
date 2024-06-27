import { Validator } from '../../src/core/validator';
import { DOMInterface } from '../../src/interfaces/dom-interface';

// モックDOMインターフェース
class MockDOM implements DOMInterface {
  parseHTML(html: string): Document {
    return document.implementation.createHTMLDocument();
  }
  querySelector(selector: string, element: Element | Document): Element | null {
    return null;
  }
  querySelectorAll(selector: string, element: Element | Document): Element[] {
    return [];
  }
  getChildren(element: Element): Element[] {
    return [];
  }
  isBlockElement(element: Element): boolean {
    return false;
  }
  getNodeType(node: Node): number {
    return Node.ELEMENT_NODE;
  }
  getOuterHTML(element: Element): string {
    return '<div></div>';
  }
}

describe('Validator', () => {
  let validator: Validator;
  let mockDOM: DOMInterface;

  beforeEach(() => {
    mockDOM = new MockDOM();
    validator = new Validator(mockDOM);
  });

  test('validate method exists', () => {
    expect(validator.validate).toBeDefined();
  });

  test('validate returns an array', async () => {
    const result = await validator.validate('<div>Test</div>');
    expect(Array.isArray(result)).toBe(true);
  });

  // 他のテストケースを追加...
});