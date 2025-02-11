# Ionic フレームワーク ハンズオン

このプロジェクトは Ionic フレームワークを使用したモバイルアプリケーションです。

## 必要条件

- Node.js (v14.0.0 以上)
- npm (v6.0.0 以上)
- Ionic CLI
- Angular CLI

## セットアップ

1. リポジトリをクローンします：
```bash
git clone [リポジトリURL]
cd handson-ionic-framework
```

2. 依存関係をインストールします：
```bash
npm install
```

3. アプリケーションを起動します：
```bash
ionic serve
```

## 開発コマンド

- `ionic serve` - 開発サーバーを起動
- `ionic build` - プロジェクトをビルド
- `ionic generate` - コンポーネントなどの生成
- `ng test` - ユニットテストの実行
- `ng e2e` - E2Eテストの実行

## プロジェクト構造

```
src/
├── app/                    # アプリケーションのメインコード
│   ├── home/              # ホームページコンポーネント
│   └── app.module.ts      # アプリケーションのルートモジュール
├── assets/                # 画像などの静的ファイル
├── environments/          # 環境設定ファイル
├── theme/                 # グローバルスタイル設定
└── index.html            # メインのHTMLファイル
```

## 主な機能

- Ionic コンポーネントの使用
- Angular ルーティング
- レスポンシブデザイン
- テーマのカスタマイズ

## ビルドとデプロイ

プロダクションビルドを作成するには：

```bash
ionic build --prod
```

## テスト

ユニットテストの実行：

```bash
ng test
```

## 貢献

1. フォークを作成
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 作者

[あなたの名前]

## 謝辞

- Ionic Team
- Angular Team
- すべてのコントリビューター
