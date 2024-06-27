import { BrowserDOM } from '../../src/browser/dom';

describe('BrowserDOM', () => {
  let dom: BrowserDOM;

  beforeEach(() => {
    dom = new BrowserDOM();
  });

  test('parseHTML returns a Document', () => {
    const result = dom.parseHTML('<div>Test</div>');
    expect(result).toBeInstanceOf(Document);
  });

  test('querySelector returns an element', () => {
    const doc = dom.parseHTML('<div><span>Test</span></div>');
    const result = dom.querySelector('span', doc);
    expect(result).toBeInstanceOf(Element);
    expect(result?.textContent).toBe('Test');
  });

  test('querySelectorAll returns an array of elements', () => {
    const doc = dom.parseHTML('<div><span>Test1</span><span>Test2</span></div>');
    const result = dom.querySelectorAll('span', doc);
    expect(result.length).toBe(2);
    expect(result[0].textContent).toBe('Test1');
    expect(result[1].textContent).toBe('Test2');
  });

  // 他のテストケースを追加...
});