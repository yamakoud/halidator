# halidate

了解しました。完璧でスマートかつシンプルなプロジェクトのREADMEを提供します。このREADMEには、プロジェクトの解決したい課題、方法、および使用方法が明確に記載されています。

```markdown
# Custom CSS and HTML Validator

This project aims to provide a simple and efficient tool for validating rendered HTML against custom CSS rules. It uses Puppeteer to render web pages and checks for specific violations of best practices or framework-specific rules in the HTML and CSS structure.

## Problem Statement

Modern web development often involves complex CSS frameworks like Bootstrap. However, developers may unintentionally misuse these frameworks, leading to issues such as:

- Using `.col` without a parent `.row`
- Using `.btn` without a parent `.btn-group`

These issues can lead to inconsistent styling and layout problems. This project aims to automate the detection of such issues in rendered HTML to ensure adherence to best practices.

## Solution

This tool uses Puppeteer to render web pages and evaluate the DOM to detect specific CSS and HTML rule violations. It allows developers to easily identify and fix structural issues in their web pages.

## How It Works

1. **Puppeteer** is used to open a webpage and render the HTML.
2. The rendered HTML is then evaluated for specific rule violations.
3. Violations are logged for the developer to review and fix.

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/your-username/custom-css-validator.git
cd custom-css-validator
npm install
```

## Usage

To run the validation script, use the following command:

```bash
node check-rules.js
```

The script will navigate to the specified URL, render the HTML, and check for the defined rule violations. Detected issues will be logged to the console.

## Custom Rules

You can customize the rules by editing the `check-rules.js` file. Here is an example of adding a new rule:

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://example.com'); // Replace with your target URL

  const issues = await page.evaluate(() => {
    const issues = [];

    // Rule: .col without .row
    const colElements = document.querySelectorAll('.col');
    colElements.forEach(col => {
      if (!col.closest('.row')) {
        issues.push({
          element: col.outerHTML,
          message: 'Column without parent row detected.'
        });
      }
    });

    // Rule: .btn without .btn-group
    const btnElements = document.querySelectorAll('.btn');
    btnElements.forEach(btn => {
      if (!btn.closest('.btn-group')) {
        issues.push({
          element: btn.outerHTML,
          message: 'Button without parent btn-group detected.'
        });
      }
    });

    return issues;
  });

  console.log('Issues found:', issues);

  await browser.close();
})();
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue to suggest improvements or report bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

このREADMEは、プロジェクトの目的、解決する課題、使用方法、カスタムルールの追加方法、および貢献方法について明確に説明しています。これにより、開発者がこのツールを効果的に利用し、プロジェクトに貢献するためのガイドラインを提供します。
