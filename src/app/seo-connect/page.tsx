import Guide from '@/components/docs/Guide';
import { A, C, List, Note, P, Section } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/seo-connect');

/**
 * Mint SEO: connecting a site you already have (backend docs/seo-panel). The ids are the #anchors the mint-seo app's
 * "How this works ↗" links use (guide('address' | 'choose-a-way' | 'ownership' | 'test')) — keep them in step.
 */

const SECTIONS = [
	{ id: 'seo-connect', title: 'What Mint SEO does' },
	{ id: 'address', title: 'Your site’s address' },
	{ id: 'choose-a-way', title: 'Choose a way to connect' },
	{ id: 'ownership', title: 'Prove the site is yours' },
	{ id: 'test', title: 'Test the connection' },
	{ id: 'after', title: 'After you start' },
	{ id: 'disconnect', title: 'Pausing and disconnecting' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const SeoConnect = () => (
	<Guide
		href='/seo-connect'
		sections={SECTIONS}>
		<Section
			id='seo-connect'
			title='What Mint SEO does'
			lead='Set each page’s title, description and share image in one place, and see who visits — on the site you already have.'>
			<P>
				You don’t rebuild anything. Mint adds your SEO to your pages as they are served and counts visits. Your site keeps running as it
				is the whole time; if Mint is ever slow or down, your pages load untouched.
			</P>
		</Section>

		<Section
			id='address'
			title='Your site’s address'>
			<P>
				Type your site’s address (for example <C>https://www.acme.com</C>). Mint looks at the page and tells you what it found: the
				platform (WordPress, Shopify, Webflow, Next.js…), whether it sits behind Cloudflare, the SEO it has now, and whether Mint’s
				snippet or Worker is already there. It then suggests the easiest way to connect.
			</P>
		</Section>

		<Section
			id='choose-a-way'
			title='Choose a way to connect'>
			<List
				items={[
					<>
						<strong>Snippet</strong> — paste one line in your site’s <C>&lt;head&gt;</C>. Works anywhere you can edit the head. Google
						reads the result; link previews on WhatsApp, Facebook and LinkedIn read the page’s own HTML.
					</>,
					<>
						<strong>Cloudflare Worker</strong> — if your domain is on Cloudflare, paste Mint’s Worker once. It puts your SEO in the HTML
						itself, so link previews show it too, and it can serve robots.txt and sitemap.xml from Mint.
					</>,
				]}
			/>
			<Note>Only pages you add under Pages &amp; SEO are Mint’s. Every other page keeps the SEO it has.</Note>
		</Section>

		<Section
			id='ownership'
			title='Prove the site is yours'>
			<P>Any one of these is enough:</P>
			<List
				items={[
					'a visit from your site reaches Mint (open your site in a browser after adding the snippet);',
					'the Worker answers on your site;',
					<>
						a DNS TXT record <C>_mint.your-domain.com</C> with the value shown on the setup page (<C>mint-verify=…</C>).
					</>,
				]}
			/>
			<P>
				Press <strong>Check</strong> to look again, then <strong>Start using Mint SEO</strong>.
			</P>
		</Section>

		<Section
			id='test'
			title='Test the connection'>
			<P>
				Enter a page of your site and Mint checks, step by step, that the snippet or Worker is there, that the page is added to Mint,
				and that the SEO shows in the HTML. Each line says what to fix. You can run it again any time from Connection.
			</P>
		</Section>

		<Section
			id='after'
			title='After you start'>
			<P>
				Home shows the connection and your visits. Use <strong>Pages &amp; SEO</strong> for each page, <strong>Defaults</strong> for what
				every page starts from, <strong>Link previews</strong>, <strong>Redirects</strong>, <strong>Tracking</strong> and{' '}
				<A href='/analytics'>Analytics</A>.
			</P>
		</Section>

		<Section
			id='disconnect'
			title='Pausing and disconnecting'>
			<P>
				On Connection, <strong>Pause Mint on my site</strong> (Cloudflare way) makes the Worker pass every page through untouched — handy
				to compare before and after. <strong>Disconnect this site</strong> does the same and closes the screens until you set the site
				up again. Everything you wrote stays saved. If you used the snippet, remove it from your head to stop it loading.
			</P>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<List
				items={[
					'“Not yet” on ownership — open your site in a browser first; DNS records can take a while to appear.',
					'A page keeps its old title — it isn’t added under Pages & SEO, or it isn’t Published.',
					'Link previews don’t change — Facebook, LinkedIn and WhatsApp keep what they saw; use their re-scrape tools, and use the Worker so the HTML itself carries the SEO.',
				]}
			/>
		</Section>
	</Guide>
);

export default SeoConnect;
