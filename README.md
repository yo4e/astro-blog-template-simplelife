# Simple Life Log – Astro Blog Template

シンプルなAstro製ブログテンプレートです。Markdownを直接編集するCMSなし運用に加え、任意でSveltia CMSから記事を編集できます。

デモ: https://simplelife-log.pages.dev/

![Preview](public/preview.png)

## 特徴
- Astro + Tailwind CSS
- 画像付きヒーローとシンプルな目次トップ
- 記事ページにJSON-LD（BlogPosting）とOG/Twitterメタ
- Sitemap/robots.txt 対応

## 使い方

### 1) 依存関係のインストール
```bash
npm install
```

### 2) 開発サーバー起動
```bash
npm run dev
```

### 3) ビルド
```bash
npm run build
```

### 4) プレビュー
```bash
npm run preview
```

## 記事の追加
`src/content/posts/` に Markdown を追加します。Frontmatter は以下の通りです。

CMSを使わない場合は、このフォルダにMarkdownを追加してビルドすれば自動で記事が増えます。

```yaml
---
title: "記事タイトル"
description: "記事の概要"
pubDate: "2025-01-01"
updatedDate: "2025-01-10" # 任意
heroImage: "/images/hero.png" # 任意
order: 1
---
```

- `order` は目次での並び順に使われます。
- `heroImage` はOG画像にも使用されます。

## Sveltia CMS（任意）

ブラウザから記事を編集したい場合は、Sveltia CMS を利用できます。サイトをデプロイすると `/admin/` に管理画面が公開されます。

- CMS本体は CDN から読み込むため、追加の npm 依存関係はありません。
- GitHub の Personal Access Token（PAT）でログインします。
- CMSは `src/content/posts/` の Markdown と `public/images/` の画像を直接編集します。
- 記事保存時は GitHub の `main` ブランチへコミットされます。Cloudflare Pages などで Git 連携している場合は、そのコミットを契機に再デプロイされます。
- PAT はブラウザの local storage に保存されます。共有端末では利用せず、不要になったトークンは GitHub 側で失効してください。

### 使い方

1. デプロイ済みサイトの `/admin/` を開きます。
2. 「Sign In with Token」から GitHub PAT を入力します。
3. 「記事」から既存記事の編集、または新規記事の作成を行います。
4. 必要に応じてアイキャッチ画像を選択・アップロードします。

CMSを使わず、従来どおり `src/content/posts/` の Markdown を直接編集する運用もそのまま利用できます。

## カスタマイズポイント

### サイト名 / 説明文
- `src/consts.ts` を編集してください。
  ```typescript
  export const SITE_TITLE = 'Simple Life Log';
  export const SITE_DESCRIPTION = '...';
  ```
- サイト全体（タイトル、メタタグ、ヘッダー、フッターなど）に反映されます。

### サイトURL
- `astro.config.mjs` の `site` を本番URLに変更してください。
  - 例: `https://your-site.pages.dev` など
  - これを設定しないと、OG画像（SNSでシェアした時の画像）が正しく表示されません。

### 画像サイズ（CLS対策）
- `src/pages/index.astro` のヒーロー画像に `width` / `height` を設定しています。
- 画像を差し替える場合は実サイズに合わせて更新してください。

## デプロイ
- Cloudflare Pages などの静的ホスティングにそのままデプロイできます。

## ライセンス
MIT License
