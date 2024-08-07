# Halidator

Halidatorは、HTML文書のブロック要素とインライン要素のバッドプラクティスを検出するJavaScriptライブラリです。
chrome 拡張のみサポートしています。

現在はベータ版です。

現在のプロジェクト進捗
- ローカルビルドでの chrome 拡張のサポート
  - store での配布はまだです


## 環境

node v22.3.0

## 使用方法

### chrome 拡張

下記手順で chrome 拡張を入れます

https://github.com/yamakoud/halidator/blob/main/docs/install-extension-locally.md

インストールできたら

・拡張機能をピン止めする

・拡張機能をクリック

・ボタンをクリック

すると今開いているページを検査した結果が出てきます


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
