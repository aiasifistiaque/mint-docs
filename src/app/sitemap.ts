import type { MetadataRoute } from 'next';
import { GUIDES } from '@/content/guides';
import { SITE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
		...GUIDES.map(g => ({ url: `${SITE_URL}${g.href}`, changeFrequency: 'weekly' as const, priority: 0.8 })),
	];
}
