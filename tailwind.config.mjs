/** @type {import('tailwindcss').Config} */
// 日本語コメント: Tailwind CSSの設定ファイル
export default {
    // コンテンツファイルのパスを指定
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            // フォント設定: 日本語の美しさを優先
            fontFamily: {
                sans: [
                    '"Helvetica Neue"',
                    'Arial',
                    '"Hiragino Kaku Gothic ProN"',
                    '"Hiragino Sans"',
                    'Meiryo',
                    'sans-serif'
                ],
                serif: [
                    '"Times New Roman"',
                    '"Yu Mincho"',
                    '"Hiragino Mincho ProN"',
                    'serif'
                ],
            },
            // カラーパレット: モノリス（白と黒）テーマ
            colors: {
                monolith: {
                    black: '#1a1a1a', // 漆黒
                    dark: '#333333',  // 濃いグレー
                    light: '#f4f4f5', // 薄いグレー（背景用）
                    white: '#ffffff', // 純白
                }
            },
        },
    },
    // プラグイン: 記事の文章を自動整形するTypographyプラグイン
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
