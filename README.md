はい、READMEファイルの作成は重要です。以下のような構成でREADME.mdを作成することをお勧めします：

```markdown
# Halidator

Halidatorは、HTML文書を検証するためのJavaScriptライブラリです。ブラウザ環境とNode.js環境の両方で使用できます。

現在はベータ版です。

現在のプロジェクト進捗
- ブラウザサポート
  - bookmarklet での配布（./docs/bookmarklet に存在）
  - CDN 公開中(https://yamakoud.github.io/halidator/halidator.browser.js)


## 使用方法

### ブックマークレット

Halidatorをブックマークレットとして使用することもできます。以下のコードをブックマークのURLとして保存してください：
./docs/bookmarklet/validateBody.js

このブックマークレットを読み込むとコンソールのログに検証結果が表示されます
開発者ツールで確認してください。
（info を表示するように設定してください）


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

バグ報告や機能リクエストは[GitHub Issues](https://github.com/yamakoud/halidator/issues)にて受け付けています。プルリクエストも歓迎します。
