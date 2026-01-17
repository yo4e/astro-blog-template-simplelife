import { defineCollection, z } from 'astro:content';

// 日本語コメント:
// 記事のメタデータ（Frontmatter）の型定義を行います。
// これにより、必須項目の欠けや型ミスをビルド時に検出できます。

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // 日付文字列をDateオブジェクトとして認識させる
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        // 記事の表示順序（小さいほど先頭またはChapter順）
        order: z.number(),
    }),
});

export const collections = {
    'posts': postsCollection,
};
