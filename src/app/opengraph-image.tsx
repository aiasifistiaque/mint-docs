import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT Guides — build and run your projects on MINT.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'MINT Guides', title: 'Build and run your projects', accent: 'on MINT.' });
}
