import localFont from 'next/font/local';

// The site's type, shipped with the app: next/font/google fetches Google's CSS
// at build time, and when Google answers with its newer font addresses
// (fonts.gstatic.com/l/font?kit=…&skey=…) Next 16's Turbopack can't read them
// and the build fails. Latin only, as before; both are one variable file each.
export const sans = localFont({
	src: './outfit-latin.woff2',
	weight: '100 900',
	variable: '--font-body',
	display: 'swap',
});

export const mono = localFont({
	src: './jetbrains-mono-latin.woff2',
	weight: '100 800',
	variable: '--font-jetbrains',
	display: 'swap',
});
