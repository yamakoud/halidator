# Halidator

Halidatorは、HTML validation libraryです。ブラウザとNode.js環境の両方で動作します。

## 特徴

- ブラウザとNode.js環境の両方をサポート
- 柔軟なバリデーションルール
- 高速で効率的な処理

## インストール

npm を使用してインストールします：

```bash
npm install halidator
```

## 使用方法

### ブラウザ環境

```html
<script src="path/to/halidator.browser.js"></script>
<script>
  const htmlToValidate = '<div><p>Test</p></div>';
  Halidator.validate(htmlToValidate)
    .then(issues => console.log(issues))
    .catch(error => console.error(error));
</script>
```

### Node.js環境

```javascript
const Halidator = require('halidator');

const htmlToValidate = '<div><p>Test</p></div>';
Halidator.validate(htmlToValidate)
  .then(issues => console.log(issues))
  .catch(error => console.error(error));
```

## 開発

### 依存関係のインストール

```bash
npm install
```

### ビルド

```bash
npm run build
```

これにより、`dist`ディレクトリにブラウザ用（`halidator.browser.js`）とNode.js用（`halidator.node.js`）のファイルが生成されます。

### 開発モード

ファイルの変更を監視し、自動的に再ビルドします：

```bash
npm run dev:browser  # ブラウザ版の開発
npm run dev:node     # Node.js版の開発
```

## テスト

### 単体テストの実行

```bash
npm test              # すべてのテストを実行
npm run test:browser  # ブラウザ環境のテストを実行
npm run test:node     # Node.js環境のテストを実行
npm run test:core     # コア機能のテストを実行
```

### カバレッジレポート

```bash
npm run test:coverage
```

### ブラウザでのテスト

1. ビルドを実行: `npm run build`
2. ローカルサーバーを起動: `npm run serve`
3. ブラウザで `http://localhost:8080/test.html` にアクセス

## ライセンス

[MIT License](LICENSE)

## コントリビューション

バグ報告、機能リクエスト、プルリクエストを歓迎します。大きな変更を行う前に、まずissueを開いて変更内容を議論してください。

## サポート

問題や質問がある場合は、GitHubのissueを開いてください。
