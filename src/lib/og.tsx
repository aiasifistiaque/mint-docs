import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

/**
 * Share images (Open Graph / Twitter), drawn at build time: the dark brand
 * card — the mark, an eyebrow, the page's headline in light capitals with its
 * accent in the brand gradient. Each route's opengraph-image.tsx calls og().
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_TYPE = 'image/png';

type OgFont = { name: string; data: Buffer; weight: 200 | 400; style: 'normal' };

/** A font file read from disk (relative to the project root, where the build runs), or null if it's missing. */
const fromDisk = (path: string, name: string, weight: 200 | 400) =>
	readFile(join(process.cwd(), path))
		.then((data): OgFont => ({ name, data, weight, style: 'normal' }))
		.catch(() => null);

/**
 * Outfit, kept in the repo (src/assets/fonts, SIL OFL — see OFL.txt there) so
 * the build never fetches a font: every deploy draws the same images, with no
 * network to fail. Read once per build; every page's image shares them.
 */
let outfit: Promise<OgFont[]> | null = null;
const outfitFonts = () =>
	(outfit ??= Promise.all([
		fromDisk('src/assets/fonts/Outfit-ExtraLight.ttf', 'Outfit', 200),
		fromDisk('src/assets/fonts/Outfit-Regular.ttf', 'Outfit', 400),
	]).then(fonts => fonts.filter((f): f is OgFont => !!f)));

/**
 * If those files ever go missing: Geist, the font Next ships with its image
 * renderer. The renderer's own default doesn't load during a static build,
 * and with no font at all it fails ('split' of undefined).
 */
const geist = () => fromDisk('node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf', 'Geist', 400);

const Mark = () => (
	<svg
		width='64'
		height='64'
		viewBox='0 0 32 32'>
		<defs>
			<linearGradient
				id='g'
				x1='2'
				y1='2'
				x2='30'
				y2='30'
				gradientUnits='userSpaceOnUse'>
				<stop stopColor='#10b981' />
				<stop
					offset='0.45'
					stopColor='#06b6d4'
				/>
				<stop
					offset='1'
					stopColor='#7c3aed'
				/>
			</linearGradient>
		</defs>
		<rect
			width='32'
			height='32'
			rx='9.5'
			fill='url(#g)'
		/>
		<path
			d='M9.5 22.5V10.5L16 17L22.5 10.5V22.5'
			fill='none'
			stroke='#fff'
			strokeWidth='2.6'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16 6.6Q16.45 9.05 18.9 9.5Q16.45 9.95 16 12.4Q15.55 9.95 13.1 9.5Q15.55 9.05 16 6.6Z'
			fill='#fff'
		/>
	</svg>
);

export const og = async ({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: string }) => {
	let fonts = await outfitFonts();
	if (!fonts.length) fonts = [await geist()].filter((f): f is OgFont => !!f);
	const long = (title + accent).length;
	const size = long > 70 ? 58 : long > 52 ? 68 : 78;

	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '64px 72px',
					background: '#0d0d0d',
					backgroundImage:
						'radial-gradient(circle at 8% 0%, rgba(16,185,129,0.30), transparent 45%), radial-gradient(circle at 100% 10%, rgba(168,85,247,0.32), transparent 45%), radial-gradient(circle at 70% 120%, rgba(6,182,212,0.25), transparent 50%)',
					color: '#faf8f1',
					fontFamily: fonts[0]?.name,
				}}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
					<Mark />
					<span style={{ fontSize: 30, fontWeight: 400, letterSpacing: 12 }}>MINT</span>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<span style={{ fontSize: 22, letterSpacing: 6, color: '#34d399', textTransform: 'uppercase', marginBottom: 26 }}>{eyebrow}</span>
					<span style={{ fontSize: size, fontWeight: 200, lineHeight: 1.04, textTransform: 'uppercase' }}>{title}</span>
					<span
						style={{
							fontSize: size,
							fontWeight: 200,
							lineHeight: 1.04,
							textTransform: 'uppercase',
							backgroundImage: 'linear-gradient(100deg, #10b981 0%, #06b6d4 35%, #6366f1 70%, #a855f7 100%)',
							backgroundClip: 'text',
							color: 'transparent',
						}}>
						{accent}
					</span>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, letterSpacing: 4, color: 'rgba(250,248,241,0.55)', textTransform: 'uppercase' }}>
					<span>Guides · Models · API · Websites</span>
					<span>docs.mintapp.shop</span>
				</div>
			</div>
		),
		{ ...OG_SIZE, fonts }
	);
};
