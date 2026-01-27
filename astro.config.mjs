import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeFigure from 'rehype-figure';

// 日本語コメント:
// Astroの設定ファイルです。
// Cloudflare Pagesでのホスティングを想定した静的サイト生成(SSG)設定を行います。
export default defineConfig({
    // サイトのURL（本番環境に合わせて変更してください）
    // 構造化データ(JSON-LD)の生成などで使用されます。
    // まだドメインが決まっていないため、一時的なプレースホルダーにしています
    site: 'https://simplelife-log.pages.dev',

    // インテグレーションの設定
    integrations: [
        // Tailwind CSSを有効化
        tailwind({
            // ベースのスタイルを適用
            applyBaseStyles: false,
        }),
        // サイトマップ(sitemap-index.xml)を自動生成
        sitemap(),
    ],
    markdown: {
        rehypePlugins: [
            [
                'rehype-external-links',
                {
                    target: '_blank',
                    rel: ['noopener', 'noreferrer']
                }
            ],
            [
                rehypeFigure,
                {
                    className: 'my-8',
                }
            ],
        ],
    },

    // ビルド設定
    build: {
        // 生成されるHTMLファイルの形式（'file' は /about/index.html のようなディレクトリ形式）
        format: 'directory',
    }
});
