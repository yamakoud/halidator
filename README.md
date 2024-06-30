はい、READMEファイルの作成は重要です。以下のような構成でREADME.mdを作成することをお勧めします：

```markdown
# Halidator

Halidatorは、HTML文書を検証するためのJavaScriptライブラリです。ブラウザ環境とNode.js環境の両方で使用できます。

現在はベータ版です。

現在のプロジェクト進捗
- ブラウザサポート
  - bookmarklet での配布（./docs/bookmarklet に存在）
  - CDN 公開中(https://yamakoud.github.io/halidator/halidator.browser.js)

## 特徴

- クロスプラットフォーム：ブラウザとNode.jsの両環境で動作
- 軽量で高速なHTML検証
- カスタマイズ可能な検証ルール
- TypeScriptで記述され、型安全性を確保

## インストール

npm を使用してインストールできます：

```bash
npm install halidator
```

## 使用方法

### ブラウザ環境

```javascript
import { validateHTML } from 'halidator';

const html = document.body.innerHTML;
const result = validateHTML(html);
console.log(result);
```

### Node.js環境

```javascript
const { validateHTML } = require('halidator');

const html = '<div>Some HTML content</div>';
const result = validateHTML(html);
console.log(result);
```

### ブックマークレット

Halidatorをブックマークレットとして使用することもできます。以下のコードをブックマークのURLとして保存してください：

```javascript
javascript:(function(){var script=document.createElement('script');script.src='https://your-cdn-url/halidator.js';script.onload=function(){var result=Halidator.validateHTML(document.body.innerHTML);console.log(result);};document.head.appendChild(script);})();
```

## API

### validateHTML(html: string): ValidationResult

HTML文字列を受け取り、検証結果を返します。

```typescript
interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

interface ValidationError {
  message: string;
  line: number;
  column: number;
}
```

## 開発

### セットアップ

1. リポジトリをクローンします：
   ```
   git clone https://github.com/yourusername/halidator.git
   ```
2. 依存関係をインストールします：
   ```
   npm install
   ```

### ビルド

```
npm run build
```

### テスト

```
npm test
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## コントリビューション

バグ報告や機能リクエストは[GitHub Issues](https://github.com/yourusername/halidator/issues)にて受け付けています。プルリクエストも歓迎します。

## 作者

Your Name - [@yourusername](https://github.com/yourusername)

```

このREADMEは以下の重要な情報を含んでいます：

1. プロジェクトの簡単な説明
2. 主な特徴
3. インストール方法
4. 基本的な使用方法（ブラウザ、Node.js、ブックマークレット）
5. APIの概要
6. 開発者向けの情報（セットアップ、ビルド、テスト）
7. ライセンス情報
8. コントリビューション方法
9. 作者情報

必要に応じて、このテンプレートを拡張したり、プロジェクトの特性に合わせて調整したりすることができます。例えば、より詳細な使用例、パフォーマンスベンチマーク、よくある質問（FAQ）セクションなどを追加することもできます。
