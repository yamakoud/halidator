import HTMLValidator from '../../src/client/html-validator';

describe('HTMLValidator', () => {
  let validator: HTMLValidator;

  beforeEach(() => {
    validator = new HTMLValidator();
  });

  test('validates .col without .row', () => {
    const html = '<div class="col">Test</div>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(1);
    expect(issues[0].message).toContain('Column without parent row detected');
  });

  test('validates .btn without .btn-group', () => {
    const html = '<button class="btn">Test</button>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(1);
    expect(issues[0].message).toContain('Button without parent btn-group detected');
  });

  test('validates correct structure', () => {
    const html = '<div class="row"><div class="col">Test</div></div><div class="btn-group"><button class="btn">Test</button></div>';
    const issues = validator['validateLocally'](html);
    expect(issues).toHaveLength(0);
  });
});