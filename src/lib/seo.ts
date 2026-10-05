import type { Metadata } from 'next';
import { guide } from '@/content/guides';

/**
 * A page's metadata: title, description, canonical URL, and the Open Graph and
 * Twitter cards that link previews use. The share image is the site's
 * (app/opengraph-image.tsx).
 */
export const pageMeta = ({ title, description, path }: { title: string; description: string; path: string }): Metadata => ({
	title,
	description,
	alternates: { canonical: path },
	openGraph: {
		type: 'article',
		siteName: 'MINT Guides',
		locale: 'en_US',
		title: `${title} · MINT Guides`,
		description,
		url: path,
	},
	twitter: { card: 'summary_large_image', title: `${title} · MINT Guides`, description },
});

/** A guide's metadata, from its entry in content/guides.ts. */
export const guideMeta = (href: string): Metadata => {
	const g = guide(href);
	return pageMeta({ title: g?.name || 'Guide', description: g?.description || '', path: href });
};
