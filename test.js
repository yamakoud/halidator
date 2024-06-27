const { Halidator } = require('./dist/client/halidator');
const { JSDOM } = require('jsdom');

// グローバルにJSDOMの環境を設定
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;

const validator = new Halidator();

// テストケース
const testCases = [
  {
    name: 'ブロック要素内のインライン要素',
    html: '<div><span><div>Test</div></span></div>',
    expectedIssues: 1
  },
  {
    name: 'テキストのみを含むブロック要素',
    html: '<div>Just some text</div>',
    expectedIssues: 1
  },
  {
    name: '適切な構造',
    html: '<div><p>Paragraph</p><span>Inline text</span></div>',
    expectedIssues: 0
  },
  {
    name: '複数の問題',
    html: '<span><div>Block in inline</div></span><div>Just text</div>',
    expectedIssues: 2
  }
];

// テストの実行
async function runTests() {
  for (const testCase of testCases) {
    console.log(`テストケース: ${testCase.name}`);
    const issues = await validator.validate(testCase.html);
    console.log(`検出された問題: ${issues.length}`);
    console.log(`期待される問題: ${testCase.expectedIssues}`);
    if (issues.length === testCase.expectedIssues) {
      console.log('テスト成功');
    } else {
      console.log('テスト失敗');
      console.log('検出された問題:', issues);
    }
    console.log('---');
  }
}

runTests();
