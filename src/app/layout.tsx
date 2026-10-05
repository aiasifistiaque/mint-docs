import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { THEME_SCRIPT } from '@/components/site/ThemeToggle';
import { SITE_URL } from '@/lib/config';
import './globals.css';

// Headings and text: Outfit — slim and geometric (light weights). Labels and code: JetBrains Mono.
const sans = Outfit({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

const TITLE = 'MINT Guides';
const DESCRIPTION =
	'How to build and run your projects on MINT: your organization, models, pages, records, the public API, customer sign-in, websites, widgets and analytics.';

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: { default: TITLE, template: '%s · MINT Guides' },
	description: DESCRIPTION,
	applicationName: TITLE,
	openGraph: { type: 'website', siteName: TITLE, locale: 'en_US', title: TITLE, description: DESCRIPTION, url: SITE_URL },
	robots: { index: true, follow: true },
	twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
	alternates: { canonical: '/' },
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#fbfbfd' },
		{ media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`${sans.variable} ${mono.variable}`}>
			<head>
				<script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
			</head>
			<body className='flex min-h-dvh flex-col'>
				<a
					href='#main'
					className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white'>
					Skip to content
				</a>
				<Header />
				<main
					id='main'
					className='flex-1'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
