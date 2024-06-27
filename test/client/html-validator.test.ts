import Halidator from '../../src/client/halidator';

describe('halidator', () => {
  let validator: Halidator;

  beforeEach(() => {
    validator = new Halidator();
  });

  test('detects block element in inline element and suggests p for div with only text', () => {
    const html = '<span><div>Test</div></span>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(2);
    expect(issues[0].message).toContain('Inline element <span> contains a block-level element');
    expect(issues[1].message).toContain('Block element <div> contains only text. Consider using a <p> element instead');
  });

  test('suggests p element for div with only text', () => {
    const html = '<div>Just some text</div>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(1);
    expect(issues[0].message).toContain('Block element <div> contains only text. Consider using a <p> element instead');
  });

  test('allows p element with only text', () => {
    const html = '<p>Just some text</p>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(0);
  });

  test('allows appropriate nesting of p in div', () => {
    const html = '<div><p>Test</p></div>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(0);
  });

  test('allows multiple paragraphs in div', () => {
    const html = '<div><p>Paragraph 1</p><p>Paragraph 2</p></div>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(0);
  });

  test('detects multiple issues', () => {
    const html = '<span><div>Block in inline</div></span><div>Just text</div>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(3);
    expect(issues[0].message).toContain('Inline element <span> contains a block-level element');
    expect(issues[1].message).toContain('Block element <div> contains only text. Consider using a <p> element instead');
    expect(issues[2].message).toContain('Block element <div> contains only text. Consider using a <p> element instead');
  });
});