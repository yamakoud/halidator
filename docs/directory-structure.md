.
├── docs/                  # ドキュメンテーション関連ファイル
│   ├── bookmarklet/       # ブックマークレット関連
│   │   └── validateBody.js
│   └── directory-structure.md
├── examples/              # 使用例のサンプルコード
├── index.ts               # メインのエントリーポイント
├── jest.config.js         # Jestの設定ファイル
├── lib/                   # ビルド後のライブラリファイル（自動生成）
├── package.json           # npm パッケージ定義
├── package-lock.json      # 依存関係のロックファイル
├── README.md              # プロジェクトの概要説明
├── src/                   # ソースコード
│   ├── browser/           # ブラウザ環境用の実装
│   │   ├── dom.ts
│   │   └── index.ts
│   ├── browser-dom.ts
│   ├── core/              # コア機能の実装
│   │   ├── types.ts
│   │   └── validator.ts
│   ├── dom-factory.ts
│   ├── index.ts
│   ├── interfaces/        # インターフェース定義
│   │   └── dom-interface.ts
│   ├── node/              # Node.js環境用の実装
│   │   ├── dom.ts
│   │   └── index.ts
│   └── node-dom.ts
├── test/                  # テストファイル
│   ├── browser/
│   │   └── dom.test.ts
│   ├── core/
│   │   └── validator.test.ts
│   ├── node/
│   │   └── dom.test.ts
│   ├── sample.test.js
│   └── setup.js
├── test.html              # テスト用HTMLファイル
├── test.js                # テスト用JavaScriptファイル
├── tsconfig.json          # TypeScript設定ファイル
├── webpack.config.browser.js  # ブラウザ用Webpack設定
├── webpack.config.js          # 共通Webpack設定
└── webpack.config.node.js     # Node.js用Webpack設定
```

## 主要ディレクトリの説明

- `docs/`: プロジェクトのドキュメンテーション関連ファイルを格納します。
- `examples/`: Halidatorの使用例を示すサンプルコードを格納します。
- `src/`: プロジェクトのソースコードが含まれます。
  - `browser/`: ブラウザ環境特有の実装を格納します。
  - `core/`: Halidatorのコア機能を実装するファイルを格納します。
  - `interfaces/`: TypeScriptのインターフェース定義を格納します。
  - `node/`: Node.js環境特有の実装を格納します。
- `test/`: テストファイルを格納します。環境ごとにサブディレクトリを持ちます。

## 主要ファイルの説明

- `index.ts`: プロジェクトのメインエントリーポイントです。
- `package.json`: npm パッケージの定義と依存関係を記述します。
- `README.md`: プロジェクトの概要、使用方法、貢献方法などを記述します。
- `tsconfig.json`: TypeScriptのコンパイル設定を定義します。
- `webpack.config.*.js`: 異なる環境向けのWebpackビルド設定を定義します。

このディレクトリ構造は、ブラウザとNode.js環境の両方をサポートするクロスプラットフォームライブラリの開発に適しています。ソースコード、テスト、ドキュメンテーションが明確に分離されており、保守性と拡張性の高いプロジェクト構成となっています。
