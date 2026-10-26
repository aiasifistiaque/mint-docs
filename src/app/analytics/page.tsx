import Guide from '@/components/docs/Guide';
import { A, C, CodeBlock, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { API_ORIGIN, APP_URL } from '@/lib/config';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/analytics');

/**
 * Website analytics: the tracker (backend routes-public/track.ts), what it
 * records, and the Analytics page — Overview, Visitors with each one's
 * journey, Live (docs/multi-tenancy WO-19, WO-56). `analytics`, `visitors`,
 * `journey`, `live-visitors` and `traffic-sources` are GuideLink targets.
 */

const SECTIONS = [
	{ id: 'analytics', title: 'What it is' },
	{ id: 'install', title: 'Adding the tracker' },
	{ id: 'domains', title: 'Your domains' },
	{ id: 'reports', title: 'The Analytics page' },
	{ id: 'numbers', title: 'What the numbers mean' },
	{ id: 'traffic-sources', title: 'Where visits come from' },
	{ id: 'visitors', title: 'Visitors' },
	{ id: 'journey', title: 'A visitor’s journey' },
	{ id: 'live-visitors', title: 'Live' },
	{ id: 'events', title: 'Clicks and events' },
	{ id: 'identify', title: 'Knowing who a visitor is' },
	{ id: 'privacy', title: 'Privacy' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const SNIPPET = `<script src="${API_ORIGIN}/public/track.js" data-key="<project key>" defer></script>`;

const Analytics = () => (
	<Guide
		href='/analytics'
		sections={SECTIONS}
		open={{ href: '/analytics', label: 'Open Analytics' }}>
		<Section
			id='analytics'
			title='What it is'
			lead='Visits to your website, counted without cookies.'>
			<P>
				Page views, visitors and visits, where they came from (Google, an ad, Facebook, a newsletter…), where they are and
				on what network, what they use, how long they read each page, which links they click, and events you send yourself
				— for website projects, in <strong>Site → Analytics</strong>. Each visitor has their own page with every visit, page
				by page. One line of HTML on your site starts it.
			</P>
		</Section>

		<Section
			id='install'
			title='Adding the tracker'
			lead='Put this on every page of your site, in the head or before the end of the body.'>
			<CodeBlock
				label='tracker snippet'
				code={SNIPPET}
			/>
			<List
				items={[
					<>
						Replace <C>&lt;project&gt;</C> with your project’s public name — or copy the snippet, filled in, from the{' '}
						<A href={`${APP_URL}/public-api`}>Public API</A> page.
					</>,
					'Single-page sites (React, Next.js, Vue…) are handled: a page view is counted on every route change, not only on load.',
					'Events are sent in small batches in the background, so they don’t slow your pages.',
				]}
			/>
		</Section>

		<Section
			id='domains'
			title='Your domains'>
			<P>
				List your site’s domains on the project (Projects → ⋯ → Edit). Then only visits from them — and their subdomains —
				count, so nobody can fill your reports by copying the snippet elsewhere. <C>example.com</C> covers{' '}
				<C>www.example.com</C> and <C>shop.example.com</C>. With no domains listed, visits from any site count.
			</P>
		</Section>

		<Section
			id='reports'
			title='The Analytics page'
			lead='Three tabs — Overview, Visitors and Live. Choose today, the last 7, 30 or 90 days, or 12 months.'>
			<List
				items={[
					'Overview: six numbers, each against the same length of time just before — page views, visitors, visits, pages per visit, average visit and bounce rate — and page views per day.',
					'Where visits come from: channels, sources, campaigns and referring sites.',
					'Pages: top pages with the average time on each, landing pages (where visits start), clicks and events.',
					'Where visitors are: countries, cities, internet providers and languages.',
					'What they use: devices, device models, browsers, operating systems and screen sizes.',
					'Visitors: everyone seen in the period — see below.',
					'Live: who is on the site right now.',
				]}
			/>
			<P>
				Seeing it needs <em>Records: View</em> in your role (owners and admins always can). It counts only this project’s
				site.
			</P>
		</Section>

		<Section
			id='numbers'
			title='What the numbers mean'>
			<Terms
				head={['Number', 'Is']}
				rows={[
					['Page views', 'Every page shown — a visitor reading three pages is three.'],
					['Visitors', 'Different browsers. One person on a phone and a laptop counts twice.'],
					['Visits', 'Browsing sessions; a visit ends when its tab is closed.'],
					['Pages per visit', 'Page views ÷ visits.'],
					['Average visit', 'How long a visit lasts, from the time each page was on screen. Visits from before this was measured are left out.'],
					['Bounce rate', 'Visits that saw one page and left.'],
					['Time on page', 'How long the page was on screen (a tab in the background doesn’t count), and how far down it was scrolled.'],
				]}
			/>
		</Section>

		<Section
			id='traffic-sources'
			title='Where visits come from'
			lead='Each visit is sorted by its first page: the address it arrived at and the site it came from.'>
			<Terms
				head={['Channel', 'When']}
				rows={[
					['Paid search', 'A Google Ads or Microsoft Ads click (gclid, msclkid in the address), or utm_medium=cpc from a search engine.'],
					['Paid social', 'A TikTok, LinkedIn, X, Snapchat or Pinterest ad click, or a Facebook/Instagram link with a paid utm_medium.'],
					['Organic search', 'From Google, Bing, DuckDuckGo, Yahoo, Yandex, Baidu, Ecosia, Brave, Naver — or ChatGPT and Perplexity.'],
					['Social', 'From Facebook, Instagram, X, LinkedIn, YouTube, TikTok, WhatsApp, Telegram, Reddit…'],
					['Email', 'utm_medium=email, or a newsletter tool as utm_source.'],
					['Referral', 'Any other site that linked to yours.'],
					['Direct', 'Typed, bookmarked, or from an app that doesn’t say where it came from.'],
				]}
			/>
			<P>
				Facebook adds <C>fbclid</C> to every link people click there, ads or not — so a Facebook visit only counts as{' '}
				<em>Paid social</em> when its link also says so, e.g. <C>?utm_medium=paid</C>. Add <C>utm_campaign</C> (and{' '}
				<C>utm_source</C>, <C>utm_medium</C>) to the links in your ads and emails to see each campaign.
			</P>
		</Section>

		<Section
			id='visitors'
			title='Visitors'
			lead='Analytics → Visitors lists everyone seen in the period, newest first.'>
			<List
				items={[
					'Who: their name and email when the site knows them (a signed-in customer, or named by your code — see “Knowing who a visitor is”); otherwise “Visitor” and a short id.',
					'Location and timezone, internet provider and IP address, device and browser, and how they first arrived.',
					'Search by name, email, IP, city or internet provider; filter by channel or to known people; sort by last seen, newest, most visits or most pages.',
				]}
			/>
			<P>Click a row to open their journey.</P>
			<Note>
				The place comes from the IP address — about the city, not the street — and a VPN or company network shows its own.
				One person on a phone and a laptop is two visitors until they sign in on both.
			</Note>
		</Section>

		<Section
			id='journey'
			title='A visitor’s journey'
			lead='One visitor’s page: everything known about them, and every visit page by page.'>
			<List
				items={[
					'Who — name, email, whether they’re signed in, first and last seen, visits and pages.',
					'Where — IP address, internet provider and network, place (with a map), timezone.',
					'On what — device and model, browser and system, screen size, language.',
					'How they first arrived — channel and source, the page that sent them, the landing page, the campaign and any ad click.',
					'Journey — every visit, newest first: its source, length and pages, then each step in order with its time — a page with how long it was read and how far down, a click, an event and its details.',
				]}
			/>
		</Section>

		<Section
			id='live-visitors'
			title='Live'>
			<P>
				Analytics → Live shows anyone who did something on the site in the last five minutes, the page they’re on, where
				they are and where they came from. It updates every 15 seconds; click someone to open their journey.
			</P>
		</Section>

		<Section
			id='events'
			title='Clicks and events'>
			<P>Links to other sites are counted as clicks automatically. To count a click on anything else, name it:</P>
			<CodeBlock
				label='tracked button'
				code={`<button data-track="book-now">Book now</button>`}
			/>
			<P>For things that aren’t clicks — a form sent, a video finished — send an event from your code:</P>
			<CodeBlock
				label='custom event'
				code={`MintAnalytics.track('signup', { plan: 'pro', yearly: true });
// a page view by hand, for routers the tracker doesn’t see:
MintAnalytics.pageview();`}
			/>
			<P>
				Event properties are a flat object of up to 20 short text, number or yes/no values. Visits arriving with{' '}
				<C>utm_source</C>, <C>utm_medium</C> and <C>utm_campaign</C> in the address are recorded with them.
			</P>
		</Section>

		<Section
			id='identify'
			title='Knowing who a visitor is'
			lead='Visitors show by name when your site knows them.'>
			<List
				items={[
					'Customers who sign in through MINT’s site widgets (mint.js) are recognised on their own — the tracker sends their sign-in, which is checked on the server.',
					'With your own sign-in, tell the tracker after someone signs in, and forget them when they sign out:',
				]}
			/>
			<CodeBlock
				label='identify'
				code={`MintAnalytics.identify('user-123', { name: 'Nadia Rahman', email: 'nadia@example.com' });
// when they sign out:
MintAnalytics.reset();`}
			/>
			<P>Their earlier visits on that browser join up with the name, so you see what they did before signing in too.</P>
		</Section>

		<Section
			id='privacy'
			title='Privacy'>
			<List
				items={[
					'No cookies. A random visitor id is kept in the browser’s local storage, and a visit id that ends with the tab.',
					<>
						Each visitor’s IP address is kept and shown on Visitors. In <strong>Site setup → Tracking → Visitor IP
						addresses</strong> you can keep only its first part (<C>203.0.113.0</C>) or not keep it at all — the place and
						internet provider are still found either way.
					</>,
					'Names and emails are only those your site gives: a signed-in customer, or MintAnalytics.identify.',
					'Visitors with “Do Not Track” on aren’t counted, and search-engine bots are left out.',
					<>
						Add <C>data-no-track</C> to the script tag to switch it off — on a staging site, say.
					</>,
				]}
			/>
			<Note>
				An IP address and a signed-in person’s browsing are personal data in many places (the EU’s GDPR among them). Your
				site’s privacy policy should say you record visits and what you keep; whether you need a consent banner depends on
				where you and your visitors are.
			</Note>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['Symptom', 'Why, and what to do']}
				rows={[
					['“No visits recorded yet”', 'Check the snippet is on the pages and its data-key is the project key from API → Keys.'],
					['My own visits don’t show', 'Your domain isn’t in the project’s list, or your browser sends Do Not Track.'],
					['There’s no Analytics in the sidebar', 'The project is an app (analytics is for websites), or your role can’t read records.'],
					['Testing on localhost doesn’t count', 'localhost isn’t one of your domains. Test on the live site, or clear the domains while you test.'],
					['Numbers differ from another tool', 'Each tool counts its own way (bots, Do Not Track, ad blockers). Compare trends, not totals.'],
				]}
			/>
		</Section>
	</Guide>
);

export default Analytics;
