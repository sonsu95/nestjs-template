# NestJS テンプレート（ESLintとPrettier付き）

コード品質ツールと最新のTypeScript設定を備えた、綿密に作られたNestJSテンプレートです。

## 特徴

- 🚀 [NestJS](https://nestjs.com/) - プログレッシブなNode.jsフレームワーク
- 📝 [TypeScript](https://www.typescriptlang.org/) - 型安全性と最新のJavaScript機能
- ✨ [ESLint](https://eslint.org/) - 一貫したコード品質のための厳格なリンティングルール
  - Flat configを使用した型認識リンティング
  - 強制的な型インポート
  - 厳格な命名規則
  - クラスメンバーの順序管理
  - 関数の戻り値型の強制
- 💅 [Prettier](https://prettier.io/) - 一貫したコードフォーマット
- 🧪 Jestテスト環境

## はじめに

### 前提条件

- Node.js (v18以上推奨)
- pnpm (v8以上)

### インストール

```bash
# リポジトリのクローン
git clone [your-repository-url]

# 依存関係のインストール
pnpm install
```

### 開発

```bash
# 開発サーバーの起動
pnpm run start:dev

# ユニットテストの実行
pnpm run test

# E2Eテストの実行
pnpm run test:e2e
```

## プロジェクト構造

```
.
├── src/                      # ソースコード
│   ├── app.controller.ts     # メインアプリケーションコントローラー
│   ├── app.service.ts        # メインアプリケーションサービス
│   ├── app.module.ts         # ルートアプリケーションモジュール
│   └── main.ts              # アプリケーションエントリーポイント
├── test/                     # テストファイル
│   ├── app.e2e-spec.ts      # E2Eテスト
│   └── jest-e2e.json        # Jest E2E設定
├── eslint.config.mjs        # ESLint flat設定
├── .prettierrc     # Prettier設定
├── nest-cli.json           # NestJS CLI設定
├── tsconfig.json           # TypeScript設定
├── tsconfig.build.json     # TypeScriptビルド設定
└── package.json            # プロジェクトの依存関係とスクリプト
```

## コードスタイルガイド

このテンプレートは、ESLintとPrettierを通じて厳格なコーディング規約を適用します：

### TypeScriptガイドライン
- 関数の戻り値型の明示が必須
- クラスメンバーのアクセス修飾子の明示が必須
- インターフェース名は'I'で始まり、PascalCaseを使用
- 列挙型名はPascalCaseを使用
- 一貫した型インポートの強制
- 関数の長さを50行に制限

### インポートガイドライン
- 型インポートは値インポートと分離
  ```typescript
  // ✅ 良い例
  import type { INestApplication } from '@nestjs/common';
  import { Test } from '@nestjs/testing';
  
  // ❌ 悪い例
  import { INestApplication, Test } from '@nestjs/testing';
  ```
- インポート文の自動ソート
- クラスメンバーの一貫した順序維持

## 利用可能なスクリプト

- `start`: 開発モードでアプリケーションを起動
- `start:dev`: ホットリロードでアプリケーションを起動
- `start:debug`: デバッグモードでアプリケーションを起動
- `start:prod`: プロダクションモードでアプリケーションを起動
- `build`: アプリケーションのビルド
- `test`: ユニットテストの実行
- `test:watch`: ウォッチモードでユニットテストを実行
- `test:cov`: テストカバレッジレポートの生成
- `test:debug`: デバッグモードでテストを実行
- `test:e2e`: E2Eテストの実行

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下で提供されています。
