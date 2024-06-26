import HTMLValidator from '../../src/client/html-validator';

describe('HTMLValidator', () => {
  let validator: HTMLValidator;

  beforeEach(() => {
    validator = new HTMLValidator();
  });

  test('detects block element in inline element', () => {
    const html = '<span><div>Test</div></span>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(2);
    expect(issues[0].element).toContain('<span><div>Test</div></span>');
    expect(issues[0].message).toContain('Inline element <span> contains a block-level element');
    expect(issues[1].element).toContain('<div>Test</div>');
    expect(issues[1].message).toContain('Block element <div> contains only text. Consider using an inline element instead.');
  });

  test('suggests inline element for block element with only text', () => {
    const html = '<div>Just some text</div>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(1);
    expect(issues[0].element).toContain('<div>Just some text</div>');
    expect(issues[0].message).toContain('Block element <div> contains only text');
  });

  test('detects inappropriate nesting of p in div', () => {
    const html = '<div><p>Test</p></div>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(2);
    // おかしい気がする？
    // p in div のこれは正しいパターンだよね？
    // expect(issues[0].message).toContain('Block element <p> contains only text. Consider using an inline element instead.');
    // expect(issues[0].element).toContain('<p>Test</p>');
    // expect(issues[1].message).toContain('A <div> element contains a <p> element. Consider restructuring your HTML.')
    // expect(issues[1].element).toContain('<div><p>Test</p></div>');
  });

  test('validates correct structure', () => {
    const html = '<div><span>Inline text</span> and <em>emphasized text</em></div>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(0);
  });

  test('detects multiple issues', () => {
    const html = '<span><div>Block in inline</div></span><div>Just text</div><div><p>Nested p</p></div>';
    const issues = validator['validateLocally'](html);
    // まだテスト追加したほうが良い
    // expect(issues).toHaveLength(5);
  });
});