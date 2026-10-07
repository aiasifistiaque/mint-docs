import type { ReactNode } from 'react';
import Guide from '@/components/docs/Guide';
import { A, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/site-builder');

/**
 * The site builder (backend docs/site-builder). Each work order adds its own
 * sections here, at the anchors the panel's "?" links use
 * (docsPath('/site-builder#…')); sections not written yet are left out, never
 * shown empty. The full outline is in backend docs/site-builder/WORK_ORDERS.md
 * ("Docs and marketing").
 */

const SECTIONS = [
	{ id: 'start', title: 'What the site builder is' },
	{ id: 'live-site', title: 'Your live site' },
	{ id: 'pages', title: 'Pages' },
	{ id: 'canvas', title: 'The canvas' },
	{ id: 'outline', title: 'The outline' },
	{ id: 'props', title: 'A block’s settings' },
	{ id: 'add', title: 'Adding blocks' },
	{ id: 'presets', title: 'Ready-made sections' },
	{ id: 'move', title: 'Moving, copying and wrapping' },
	{ id: 'inline-text', title: 'Typing on the page' },
	{ id: 'shortcuts', title: 'Keyboard shortcuts' },
	{ id: 'overlays', title: 'Pop-ups, drawers and popovers' },
	{ id: 'style', title: 'Styling a block' },
	{ id: 'breakpoints', title: 'Phone, tablet and desktop' },
	{ id: 'design', title: 'Theme, colours and fonts' },
	{ id: 'themes', title: 'The themes' },
	{ id: 'layouts', title: 'Header and footer' },
	{ id: 'sections', title: 'Saved sections' },
	{ id: 'blocks', title: 'Every block' },
	{ id: 'data', title: 'Your data on the page' },
	{ id: 'ai', title: 'Build with your own AI' },
	{ id: 'publish', title: 'Publishing' },
];

/** A real screenshot of the editor (public/guides/site-builder). */
const Shot = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
	<figure className='my-6'>
		{/* eslint-disable-next-line @next/next/no-img-element */}
		<img
			src={src}
			alt={alt}
			width={1280}
			height={800}
			loading='lazy'
			className='h-auto w-full rounded-xl border border-line'
		/>
		<figcaption className='mt-2 text-[13px] text-muted'>{caption}</figcaption>
	</figure>
);

/** The preset catalogue (mint-sites src/presets), grouped as on the Add tab. Thumbnails are real renders. */
const PRESET_GROUPS: { title: string; note: string; items: [string, string][] }[] = [
	{
		title: 'Headers',
		note: 'Your logo or name and a menu of your pages; on phones the menu folds into a ☰ button.',
		items: [
			['header-bar.png', 'Logo, menu from your pages, button'],
			['header-centered.png', 'Menu in the middle, two buttons'],
			['header-simple.png', 'Name, links and a button'],
			['header-stacked.png', 'Logo above a centred menu'],
		],
	},
	{
		title: 'Heroes',
		note: 'The big first section of a page.',
		items: [
			['hero-centered.png', 'Centred title, text and two buttons'],
			['hero-split.png', 'Text beside a picture'],
			['hero-image.jpg', 'Big photo behind the title (add your photo under Style → Background)'],
			['hero-minimal.png', 'Big type, nothing else'],
			['hero-stats.png', 'Title, buttons and three numbers'],
			['hero-signup.png', 'Title with an email sign-up'],
		],
	},
	{
		title: 'Features and services',
		note: 'What you offer and why people choose you.',
		items: [
			['features-grid.png', 'Six points with icons'],
			['features-cards.png', 'Three cards with pictures'],
			['features-split.png', 'Picture beside a checklist'],
			['steps.png', 'How it works in three steps'],
			['services-tabs.png', 'Services in tabs'],
		],
	},
	{
		title: 'Proof',
		note: 'Logos, numbers and what customers say.',
		items: [
			['logos.png', 'A moving strip of customers'],
			['stats.png', 'Four figures in a row'],
			['testimonials-grid.png', 'Three reviews'],
			['testimonial-single.png', 'One big quote'],
			['testimonials-carousel.png', 'A carousel of reviews'],
		],
	},
	{
		title: 'Calls to action and events',
		note: 'Ask for the next step.',
		items: [
			['cta-banner.png', 'Coloured band'],
			['cta-card.png', 'Card with two buttons'],
			['countdown-banner.png', 'Countdown to a date'],
		],
	},
	{
		title: 'Prices and questions',
		note: 'Plans side by side, and answers that open on a click.',
		items: [
			['pricing-three.png', 'Three plans'],
			['pricing-two.png', 'Two options side by side'],
			['faq.png', 'Questions — an accordion of answers'],
		],
	},
	{
		title: 'People, pictures and contact',
		note: 'Your team, a gallery, how to reach you.',
		items: [
			['team.png', 'People with photos'],
			['gallery.png', 'A grid of photos that open big'],
			['contact.png', 'Details, map and a form'],
			['newsletter.png', 'Email sign-up band'],
		],
	},
	{
		title: 'Blog and products',
		note: 'Sample posts and products for now — they’ll show your own soon.',
		items: [
			['blog-list.png', 'Three latest posts'],
			['product-grid.png', 'Four items in a grid'],
		],
	},
	{
		title: 'Footers and whole pages',
		note: 'The bottom of every page, a page title, and a “page not found” page.',
		items: [
			['footer-columns.png', 'Logo, link columns and socials'],
			['footer-centered.png', 'Centred menu and socials'],
			['footer-simple.png', 'Name, links and copyright'],
			['page-title.png', 'Breadcrumbs, title and intro'],
			['not-found.png', 'Page not found (404) — put it on a page at /404'],
		],
	},
];

/** The themes (mint-sites src/themes): primary, accent and background swatches. */
const THEMES = [
	{ name: 'Studio', colors: ['#4f46e5', '#e0e7ff', '#ffffff'], look: 'Clean and modern — neutral greys and an indigo accent. Fits most business sites.', fonts: 'Inter' },
	{ name: 'Editorial', colors: ['#b4532a', '#f1eadf', '#faf6ef'], look: 'Warm and literary — paper tones and a terracotta accent. Writers, studios, restaurants.', fonts: 'Fraunces, Source Serif 4' },
	{ name: 'Bright', colors: ['#7c3aed', '#ff7a59', '#fdfcff'], look: 'Friendly and colourful — violet and coral, round corners, pill buttons. Apps, shops, classes.', fonts: 'Outfit, DM Sans' },
	{ name: 'Market', colors: ['#166534', '#fde68a', '#fbfaf7'], look: 'Fresh and trustworthy — deep green and warm amber. Made for shops and products.', fonts: 'Manrope' },
	{ name: 'Calm', colors: ['#4d6b5a', '#ead9c6', '#f7f5f0'], look: 'Soft and unhurried — sage and sand, generous space, round corners. Bookings, wellness, care.', fonts: 'Lora, Nunito' },
	{ name: 'Mono', colors: ['#0a0a0a', '#ff4d00', '#ffffff'], look: 'Stark and precise — black and white, square corners, capital buttons. Portfolios.', fonts: 'Space Grotesk, IBM Plex Sans' },
	{ name: 'Bistro', colors: ['#8c1c2c', '#b8893a', '#fbf6ee'], look: 'Warm and inviting — wine red, brass and cream. Restaurants and bars.', fonts: 'Playfair Display, Lato' },
];

/** Every block (mint-sites src/blocks), as grouped on the Add tab. */
const BLOCK_GROUPS: { title: string; rows: [ReactNode, ReactNode][] }[] = [
	{
		title: 'Layout',
		rows: [
			['Section', 'A full-width band of the page with its content kept to a readable width. Pages are made of these.'],
			['Container', 'Keeps what’s inside to a maximum width, centred.'],
			['Stack', 'Lines blocks up in a row or a column with even gaps. Rows turn into columns on phones.'],
			['Grid', 'Equal columns — fewer on tablets and phones.'],
			['Card', 'A box for a picture, text and buttons. The whole card can be a link (then leave buttons out).'],
			['Tabs', 'Content in tabs: visitors pick a title to see its part. Each tab is a block inside it.'],
			['Accordion', 'Questions that open to show their answers. Can keep just one open at a time.'],
			['Spacer, Divider', 'Empty space of a set height; a thin line.'],
			['Saved section', <>A section you saved to use on several pages — see <A href='#sections'>Saved sections</A>.</>],
		],
	},
	{
		title: 'Text and buttons',
		rows: [
			['Heading', 'A title. One main title (level 1) per page, then levels 2–4 in order.'],
			['Text', 'Paragraphs with bold, italics, links and lists.'],
			['Button', 'Goes to a page or a link, scrolls to a block, or opens a pop-up, drawer or widget.'],
			['Link', 'A text link to a page, another site, an email address or a phone number.'],
			['Icon', 'One of about 200 icons, in the text colour.'],
			['Number', 'A big figure with a label — “12 years”, “4.9 ★”, “2,000 customers”.'],
			['Badge', 'A small label — “New”, “Popular”, “Sold out”.'],
			['Quote', 'What a customer said, with their name, role, photo and stars.'],
			['Countdown', 'Days, hours, minutes and seconds to a date; shows your own message once it has passed.'],
		],
	},
	{
		title: 'Pictures and video',
		rows: [
			['Image', 'A picture from your media library, cropped to a shape if you like.'],
			['Gallery', 'A grid of pictures; a click opens them big, with next and previous.'],
			['Carousel', 'Slides people swipe or step through with arrows — pictures, cards, quotes.'],
			['Moving strip', 'Logos or words that slowly scroll sideways; it stands still for people who prefer less motion.'],
			['Video', 'A YouTube or Vimeo video, or a video file — can play silently on a loop.'],
			['Map', 'A Google map of your address from Site setup, or one you type in.'],
			['Embed', 'A map or player from an allowed site by its embed link.'],
		],
	},
	{
		title: 'Navigation',
		rows: [
			['Header', 'Logo, menu and buttons at the top of every page; on phones the menu opens from a ☰ button.'],
			['Logo', 'Your logo and/or site name, linking to the home page.'],
			['Menu', 'A row or column of links: your menu pages, or links you choose.'],
			['Social links', 'Icons for your social profiles from Site setup, plus your email.'],
			['Breadcrumbs', 'Home › Section › This page — from the page’s address.'],
		],
	},
	{
		title: 'Pop-ups, drawers and forms',
		rows: [
			['Pop-up, Drawer, Popover', <>Panels that open from a button — see <A href='#overlays'>Pop-ups, drawers and popovers</A>.</>],
			['Contact form', 'Name, email and message. Until built-in forms arrive, sending opens the visitor’s email app, addressed to the email in Site setup.'],
		],
	},
];

const SiteBuilder = () => (
	<Guide
		href='/site-builder'
		sections={SECTIONS}>
		<Section
			id='start'
			title='What the site builder is'
			lead='Your website, built from blocks on a page you can see — no code, no separate hosting.'>
			<P>
				Every website project can have its site built right in MINT. A page is made of blocks — sections, headings, text,
				pictures, buttons, videos, maps — arranged in rows, columns and grids. Each block has its own settings and style, and
				the site’s theme decides the colours, fonts and corners for all of them at once. We host the finished site for you.
			</P>
			<Note>
				The site builder grows in steps. Building pages from blocks and ready-made sections, styling them, themes and
				publishing are here now; showing your own data (products, posts), the AI and your own domain come next, and this
				guide grows with them. You can still build a site in your own code from the <A href='/websites'>site API</A>.
			</Note>
			<P>
				<strong>Drafts and the live site.</strong> Your site always exists twice:
			</P>
			<Terms
				head={['', 'What it is']}
				rows={[
					['The draft', 'What you’re working on. Every change is saved as you go. Visitors never see it.'],
					['The live site', 'What visitors see: the version you last published. It doesn’t change until you publish again.'],
				]}
			/>
			<P>
				So you can rework a page over several days, try a new theme or rearrange the menu without anyone seeing a
				half-finished site. When it’s ready, you publish once and everything goes live together.
			</P>
			<P>
				A new website project starts with a home page (a large title, a line of text and two buttons), a header with your
				site’s name and a few links, and a footer — ready to change. Nothing is live until the first time you publish.
			</P>
			<P>
				<strong>Where it opens.</strong> Open <em>Site → Site builder</em> in your website project and press{' '}
				<em>Open the site builder</em> — or <em>Edit site</em> on the website’s home. The builder opens full screen in its own
				tab, already signed in as you, so there’s nothing to log in to. <em>Exit</em> (top right) saves and takes you back to
				the panel. If your browser blocks the new tab, allow pop-ups for the panel and press the button again. If you stay
				away long enough for the builder’s session to end, it says so — open it again from the panel.
			</P>
		</Section>

		<Section
			id='live-site'
			title='Your live site'
			lead='We host it: fast pages, search-engine basics and your Site setup, with nothing to deploy.'>
			<P>
				Your published site is served by MINT on its own web address, separate from the panel, so visitors never see
				anything of your workspace. Connecting your own domain is on the way.
			</P>
			<P>
				<strong>How changes reach it.</strong> Pages are kept ready to send, so they open quickly. When you publish, your
				site is refreshed at once: the next visitor gets the new version.
			</P>
			<Terms
				head={['', 'Where it comes from']}
				rows={[
					['Page title and description', 'Each page’s SEO settings. A page without its own description uses the site’s default from Site setup → SEO, and every page but the home page follows the title template there (for example “%s · Acme”).'],
					['Share picture', 'The page’s share image, or the site’s default — shown when someone posts a link to the page.'],
					['Hide from search engines', 'Per page, or for the whole site in Site setup → SEO.'],
					['Sitemap and robots.txt', <>Made for you at <em>/sitemap.xml</em> and <em>/robots.txt</em>, listing the published pages that aren’t hidden from search.</>],
					['Favicon, tracking, pixels, your code tags', 'From Site setup — the same settings a code-built site uses. Search-console verification is in the page itself, so Google and Bing can check it.'],
					['Widgets', <>The <A href='/widgets'>widgets</A> you switch on load on every page.</>],
				]}
			/>
			<P>
				<strong>Redirects.</strong> Redirects you set in Site setup work here too: someone opening the old address is sent
				to the new one (permanently, unless you untick it).
			</P>
			<P>
				<strong>Page not found.</strong> An address with no page shows a short “Page not found” message in your site’s
				look, with your header and footer and a button back to the home page. To design your own, add a page at the
				address <em>/404</em> and publish it.
			</P>
			<P>
				<strong>Light and dark.</strong> Your site shows in light colours, dark colours, or follows each visitor’s
				device setting — your choice in the site’s design.
			</P>
		</Section>

		<Section
			id='pages'
			title='Pages'
			lead='Every page of your site, where it stands, and everything you can do to it.'>
			<P>
				Open the builder (<em>Site → Site builder</em> in your website project, or <em>Edit site</em> on the website’s
				home). The left column has four tabs: <em>Pages</em>, <em>Outline</em>, <em>Add</em> and <em>Design</em>. Pick a
				page in Pages to open it.
			</P>
			<Shot
				src='/guides/site-builder/pages.jpg'
				alt='The Pages tab: Home, About, About copy and Contact, each with its address and a status; the header, footer and saved sections below'
				caption='Pages, with their address and where each one stands.'
			/>
			<Terms
				head={['Chip', 'Means']}
				rows={[
					['Draft', 'Never published — visitors can’t see it yet.'],
					['Live', 'On the site, exactly as you see it.'],
					['Changed', 'On the site, and you’ve changed it since. Visitors see the old version until you publish.'],
					['Off the site', 'You took it off. It stays off until you put it back.'],
				]}
			/>
			<P>
				<strong>Add a page:</strong> <em>Add</em>, give it a name — the address fills in from the name (/about-us), and
				you can change it. Each page’s <em>⋯</em> menu has:
			</P>
			<List
				items={[
					<><strong>Name, address & SEO</strong> — the page’s name, its address, whether it’s in the menu (and its label and order), whether it has the site’s header and footer, and what search engines and link previews show.</>,
					<><strong>Make it the home page</strong> — it moves to /, and the old home page gets an address from its name.</>,
					<><strong>Duplicate</strong> — a copy as a new draft, at the same address with “-copy”.</>,
					<><strong>Take off the site</strong> — after you confirm, gone from the live site at once; <strong>Put back on the site</strong> returns it with the next publish.</>,
					<><strong>Delete</strong> — a published page stays live until you publish, then it’s gone. The home page can’t be deleted.</>,
				]}
			/>
		</Section>

		<Section
			id='canvas'
			title='The canvas'
			lead='The page in the middle is drawn exactly as visitors will see it — same blocks, same theme.'>
			<Shot
				src='/guides/site-builder/editor.jpg'
				alt='The editor: the outline on the left, the page in the middle with its heading selected, the heading’s settings on the right'
				caption='Click a block on the page to select it; its settings open on the right.'
			/>
			<List
				items={[
					'Point at a block to see its outline; click it to select it. Its name shows on the page, and the path to it (Hero / Stack / Heading) above the page — click any part of the path to select that instead.',
					'Links and buttons don’t go anywhere on the canvas: a click always selects.',
					<>The buttons at the top show the page on a <strong>phone</strong> (390 px), <strong>tablet</strong> (768 px) or <strong>desktop</strong> (1280 px), or as wide as your window. Wider pages are shrunk to fit.</>,
					<>The moon / sun button previews the page in <strong>dark</strong> or light colours.</>,
					<><strong>Undo</strong> and <strong>redo</strong> (⌘Z and ⇧⌘Z, Ctrl on Windows) go back and forward through your changes; typing in one box counts as one step.</>,
					<><strong>View site</strong> opens the live page in a new tab.</>,
				]}
			/>
			<P>
				Everything saves by itself a moment after you stop — the top bar says <em>Saving…</em>, then <em>Saved</em>. If you
				leave with something unsaved, the browser asks first.
			</P>
			<Note>
				If someone else (or you, in another tab) saved the same page while you were working, the editor asks: load their
				version, or keep yours and save it over theirs. Nothing is overwritten without you choosing.
			</Note>
		</Section>

		<Section
			id='outline'
			title='The outline'
			lead='The page as a tree of blocks — handy when blocks sit inside each other.'>
			<List
				items={[
					'Click a row to select that block; the arrow folds and unfolds what’s inside it.',
					'Double-click a row to give the block a name of your own (“Hero”, “Prices”) — just for you, visitors never see it.',
					<>The eye hides a block on the site without deleting it; the lock stops it from being moved or deleted by accident.</>,
					<><strong>Header</strong> and <strong>Footer</strong> are shared by every page and listed above and below the page’s own blocks. You see them here, and change them in the header or footer itself — see <A href='#layouts'>Header and footer</A>.</>,
					<>Pop-ups, drawers and popovers are listed under <strong>Overlays</strong> — see <A href='#overlays'>below</A>.</>,
					<>Drag a row to move its block: drop it on the top or bottom edge of another row to put it before or after, or on the middle of a block that holds others to put it inside. A red line means it can’t go there, with the reason underneath.</>,
				]}
			/>
		</Section>

		<Section
			id='props'
			title='A block’s settings'
			lead='The right column shows what the selected block can do, and changes show on the page as you type. Its Style tab is how it looks — see Styling a block.'>
			<Terms
				head={['Setting', 'How it works']}
				rows={[
					['Text', 'Type straight in. Rich text has a small toolbar: headings, bold, italics, links, lists, quotes and code.'],
					['Choices', 'Pick from the list — heading level, button style, size, how many columns.'],
					['Colours', 'Your theme’s colours, so a change of theme still looks right.'],
					['Images and videos', <>Pick from your <A href='/media'>media library</A>, upload one, or paste an address. Videos also take YouTube and Vimeo links.</>],
					['Icons', 'Search the built-in set and click one.'],
					['When clicked', <>For buttons, links, icons and images: go to one of your pages, open a link (optionally in a new tab), scroll to a block on the page, open or close a <A href='#overlays'>pop-up or drawer</A>, or open a widget like the cart.</>],
				]}
			/>
			<P>
				The row of small buttons under the block’s name duplicates, copies, cuts, pastes, moves and wraps it (see{' '}
				<A href='#move'>Moving, copying and wrapping</A>). <em>Remove block</em> at the bottom — or the bin in that row —
				deletes it (undo brings it back). Locked blocks can’t be moved or removed until you unlock them in the outline.
			</P>
		</Section>

		<Section
			id='add'
			title='Adding blocks'
			lead='The Add tab lists every block and ready-made section. Click one to add it, or drag it onto the page.'>
			<Shot
				src='/guides/site-builder/add.jpg'
				alt='The Add tab listing blocks by group; a drawer just added is open on the page and its settings are on the right'
				caption='The Add tab. A drawer was just added: it opens on the canvas so you can fill it in.'
			/>
			<P>Open <strong>Add</strong> at the top of the left column. Blocks come in groups:</P>
			<Terms
				head={['Group', 'Blocks']}
				rows={[
					['Layout', 'Section (a full-width band), Container, Stack (a row or a column), Grid, Card, Tabs, Accordion, Spacer, Divider'],
					['Text and buttons', 'Heading, Text, Button, Link, Icon, Number, Badge, Quote, Countdown'],
					['Pictures and video', 'Image, Gallery, Carousel, Moving strip, Video, Map, Embed (a map or video from an allowed site)'],
					['Navigation', 'Header, Logo, Menu, Social links, Breadcrumbs'],
					['Pop-ups and drawers', <>Pop-up, Drawer, Popover — see <A href='#overlays'>below</A></>],
					['Forms', 'Contact form'],
				]}
			/>
			<P>
				<strong>Click</strong> a block to add it next to what’s selected: into it, if it’s a block that holds others (a section,
				a stack, a grid), otherwise just after it. With nothing selected it goes at the end of the page. A whole section — a
				ready-made one, a saved one or an empty section — asks first: you see it and choose where it goes (after the selected
				section, at the top or at the end of the page), and the page scrolls to it once it’s added.
			</P>
			<P>
				<strong>Drag</strong> a block onto the page to put it exactly where you want: a blue line shows where it will land, and
				an empty box turns blue when it will go inside. If a block can’t go somewhere, a red note says why and nothing is added.
				The search box at the top finds blocks and sections by name. What each block does is in{' '}
				<A href='#blocks'>Every block</A>.
			</P>
			<Note>
				The new block is selected straight away, with its settings on the right. Every add is one step of undo.
			</Note>
		</Section>

		<Section
			id='presets'
			title='Ready-made sections'
			lead='Sections at the top of the Add tab are whole parts of a page, built from ordinary blocks.'>
			<P>
				A ready-made section — a header, a hero, prices, questions, a footer — is a set of blocks arranged for you. Add it like a
				block (click, or drag it onto the page): it goes between the page’s sections. Once it’s on the page it’s just blocks:
				change any text, picture or button, add or remove parts, move them around. Each one takes your theme’s colours, fonts
				and corners, so it fits the rest of the site straight away.
			</P>
			<P>
				The Add tab shows a small picture of each. They are grouped like this (the pictures below are the sections as they
				come, in the Studio theme):
			</P>
			{PRESET_GROUPS.map(g => (
				<div
					key={g.title}
					className='mt-6'>
					<h3 className='text-[15px] font-medium'>{g.title}</h3>
					<p className='mt-1 text-[14px] text-muted'>{g.note}</p>
					<div className='mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2'>
						{g.items.map(([file, label]) => (
							<figure key={file}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={`/guides/site-builder/presets/${file}`}
									alt={`The ${label} section`}
									loading='lazy'
									className='h-auto w-full rounded-lg border border-line bg-white'
								/>
								<figcaption className='mt-1.5 text-[13px] text-muted'>{label}</figcaption>
							</figure>
						))}
					</div>
				</div>
			))}
			<Note>
				Pictures in a new section are grey placeholders with a label (“Your best photo”) until you choose your own — click
				one and pick a picture from your media library. Blog and product sections show sample posts and products for now;
				filling them from your own data is the next step of the builder.
			</Note>
		</Section>

		<Section
			id='move'
			title='Moving, copying and wrapping'
			lead='Move blocks by dragging them, or with the buttons and shortcuts; copy them to any page.'>
			<List
				items={[
					<><strong>Drag on the page</strong>: select a block, then drag its blue name tag. The blue line shows where it will go; let go to drop it. Press Esc to cancel.</>,
					<><strong>Drag in the outline</strong>: see <A href='#outline'>The outline</A>.</>,
					<><strong>Move up / down</strong> (⌥↑ / ⌥↓) swaps it with the block before or after it.</>,
					<><strong>Duplicate</strong> (⌘D) puts a copy just after it.</>,
					<><strong>Copy</strong> (⌘C) and <strong>Cut</strong> (⌘X) keep it to paste; <strong>Paste</strong> (⌘V) adds it next to the selection — on this page or any other page of any of your sites, in this browser.</>,
					<><strong>Wrap</strong> puts the block inside a new stack or section, so you can lay it out with others or give it a background.</>,
					<><strong>Select the block it’s in</strong> (Esc) walks up from a block to the one holding it.</>,
				]}
			/>
			<P>
				Copies get new ids, so they never clash with what’s already on the page. If a copied button opens a pop-up that you
				didn’t copy with it, the editor warns you before publishing.
			</P>
		</Section>

		<Section
			id='inline-text'
			title='Typing on the page'
			lead='Double-click a heading, text, button or link on the page to type straight into it.'>
			<List
				items={[
					'Double-click the words. They become editable right where they are.',
					<>For a heading, button or link, press <strong>Enter</strong> to finish. For text with several paragraphs, Enter starts a new line — finish with <strong>⌘Enter</strong> or by clicking somewhere else.</>,
					<><strong>Esc</strong> stops without keeping the change.</>,
					<>In text blocks, ⌘B and ⌘I make words bold or italic. Anything else pasted in is tidied to the formatting the site allows.</>,
				]}
			/>
			<P>The same text is in the block’s settings on the right — change it in either place.</P>
		</Section>

		<Section
			id='shortcuts'
			title='Keyboard shortcuts'
			lead='They work whether the page or the outline has the focus — not while you’re typing in a box.'>
			<Terms
				head={['Keys (Ctrl on Windows)', 'What it does']}
				rows={[
					['⌘Z / ⇧⌘Z', 'Undo / redo'],
					['⌘C · ⌘X · ⌘V', 'Copy · cut · paste'],
					['⌘D', 'Duplicate'],
					['Delete or ⌫', 'Delete the selected block'],
					['↑ / ↓', 'Select the block before / after'],
					['⌥↑ / ⌥↓', 'Move the selected block up / down'],
					['Esc', 'Select the block it’s in'],
					['Double-click', 'Type on the page'],
				]}
			/>
		</Section>

		<Section
			id='overlays'
			title='Pop-ups, drawers and popovers'
			lead='Things that open over the page when a button is clicked: a sign-up pop-up, a side menu, a small note.'>
			<Shot
				src='/guides/site-builder/overlays.jpg'
				alt='A button is selected; in its settings, “When clicked” is set to open the page’s drawer'
				caption='A button set to open the page’s drawer.'
			/>
			<Terms
				head={['Block', 'What it is']}
				rows={[
					['Pop-up', 'A window in the middle of the screen. Good for a sign-up form, a video, more details.'],
					['Drawer', 'A panel that slides in from the left or right. Good for menus, filters, a cart.'],
					['Popover', 'A small panel that opens just under the button that opens it. Good for short notes and mini menus.'],
				]}
			/>
			<List
				ordered
				items={[
					<>Add one from <strong>Add → Pop-ups and drawers</strong>. It goes at the top level of the page and is listed in the outline under <strong>Overlays</strong>.</>,
					'Put anything inside it — text, pictures, buttons — like any other part of the page. While it (or something in it) is selected, it shows open on the canvas.',
					<>Select the button or link that should open it, and set <strong>When clicked</strong> to <em>Open a pop-up or drawer</em> and pick it under <em>Which one</em>. <em>Toggle</em> opens it or, if it’s open, closes it; <em>Close</em> is for a button inside it.</>,
					'Publish.',
				]}
			/>
			<P>
				On your site they stay hidden until opened. A pop-up or drawer dims the page behind it and closes with its × button,
				with Esc, or with a click on the dimmed page; the keyboard stays inside it while it’s open, and screen readers announce
				it by the name you give it in its settings. A popover closes with Esc or a click anywhere else.
			</P>
		</Section>

		<Section
			id='style'
			title='Styling a block'
			lead='Select a block and open Style in the right column: spacing, size, background, border, text and more — all from your theme.'>
			<Terms
				head={['Group', 'What it changes']}
				rows={[
					['Layout', 'For blocks that hold others: side by side or stacked, wrapping, how items line up and spread out, the gap between them, grid columns.'],
					['Spacing', 'Padding (space inside the block) and margin (space around it), side by side, in the steps of your theme’s spacing scale.'],
					['Size', 'Width, maximum width (reading width, page width …), minimum height, height and shape (square, 16:9 …).'],
					['Background', 'A theme colour, a gradient between two theme colours, or an image — with a colour laid over it to keep text readable.'],
					['Border', 'Line width and colour, rounded corners and shadow, from your theme.'],
					['Text', 'Size, weight, alignment, colour, line height, letter spacing and capitals.'],
					['Effects', 'Opacity, sticking to the top while scrolling, which block sits on top, and which screen sizes the block shows on.'],
				]}
			/>
			<P>
				Only what applies is shown: line-up and gap settings appear for blocks that hold others, image settings once there’s an
				image. Groups with something set have a dot. Colours are always your theme’s colours, never a fixed one — so when you
				change the theme or a colour in it, every block follows.
			</P>
		</Section>

		<Section
			id='breakpoints'
			title='Phone, tablet and desktop'
			lead='A style can be different on a phone, a tablet and a computer. Phone comes first; bigger screens only change what you set for them.'>
			<List
				items={[
					<>The <strong>Phone</strong>, <strong>Tablet</strong> and <strong>Desktop</strong> buttons at the top of the Style tab are the same as the ones above the page: picking one shows the page at that size and edits the styles for it.</>,
					<><strong>Phone</strong> styles apply on every screen. <strong>Tablet</strong> styles apply from 768 px wide and up, <strong>Desktop</strong> from 1024 px — each only for what you set there. A setting you leave alone shows what it gets from the smaller size, like “As on phone (large)”.</>,
					<>A <strong>blue dot</strong> next to a setting means it’s set for the size you’re editing; click it to clear it there. An <strong>orange ring</strong> means a bigger size changes it; click it to drop those changes.</>,
					<>The circling arrow beside the sizes clears every style set for the size you’re on. The number on each size button says how many it has.</>,
					<>To hide a block on some screens only, use <strong>Effects → Shown on</strong> and click the sizes it should be hidden on.</>,
				]}
			/>
			<Note>
				A common pattern: a smaller heading and less padding on phones, larger from tablet up. Set the phone size first, then switch
				to Tablet and set only what changes.
			</Note>
		</Section>

		<Section
			id='design'
			title='Theme, colours and fonts'
			lead='The Design tab sets the look of the whole site at once. Your pages and their words never change.'>
			<List
				items={[
					<><strong>Theme.</strong> Pick one of the themes — each has its own colours, fonts, corners and buttons. Every page restyles straight away; nothing on them is lost or moved.</>,
					<><strong>Light and dark.</strong> Show visitors the light colours, the dark ones, or follow their device. The moon button above the page only changes your preview.</>,
					<><strong>Colours.</strong> Change any of the theme’s colours, for light and for dark — the primary colour, text, backgrounds, lines. The arrow next to a changed colour puts the theme’s back.</>,
					<><strong>Fonts.</strong> Pick the font for headings, for text and for code from about 50 Google Fonts, each shown in its own face, or use the device’s own font.</>,
					<><strong>Shape.</strong> Corners (sharp to round), shadows (flat to deep) and how wide the page’s content gets.</>,
					<><strong>Buttons.</strong> Their corners, how bold their text is, and whether it’s in capitals.</>,
				]}
			/>
			<P>
				Your changes are kept on top of the theme: pick another theme and they stay. <em>Reset to the theme</em> drops them all.
				The design saves by itself like a page, and goes live with the next <A href='#publish'>publish</A>. While you’re in the
				Design tab, undo (⌘Z) steps back through design changes; on a page, through that page’s.
			</P>
		</Section>

		<Section
			id='themes'
			title='The themes'
			lead='Seven themes, each a different mood. Every one works in light and dark, and you can change any colour or font.'>
			<Terms
				head={['Theme', 'Look and fonts']}
				rows={THEMES.map(t => [
					<span
						key={t.name}
						className='inline-flex items-center gap-2'>
						<span
							aria-hidden
							className='inline-flex overflow-hidden rounded-full border border-line'>
							{t.colors.map(c => (
								<span
									key={c}
									className='size-3.5'
									style={{ background: c }}
								/>
							))}
						</span>
						{t.name}
					</span>,
					<>
						{t.look} <span className='text-muted'>Fonts: {t.fonts}.</span>
					</>,
				])}
			/>
			<P>
				Pick one in <em>Design → Theme</em> and the builder asks what you want:
			</P>
			<Terms
				head={['Choice', 'What happens']}
				rows={[
					[
						'Load the demo site',
						<>
							A whole site in that theme to start from: a home page and three or four more, a list that suits the theme (a menu for
							Bistro, services for Studio, products for Market, classes for Calm, posts for Editorial, work for Mono, features for
							Bright) with sample records, and every text saved in your <em>Contents</em> so you can rewrite it here or in the panel.
							See <A href='#data'>Your data on the page</A>.
						</>,
					],
					['Replace with the demo', 'The same, on a site that already has pages: they’re replaced (the home page keeps its place). Nothing changes on the live site until you publish.'],
					['Only change the look', 'Every page is restyled at once; your words, pictures and layout stay as they are.'],
				]}
			/>
			<P>
				Colours and fonts you changed stay on top of whichever theme you pick (see <A href='#design'>Theme, colours and fonts</A>).
				The theme and its colours are also kept in your project’s <em>Site design</em> record, so they can be changed from the panel
				too — the builder picks the change up the next time it opens.
			</P>
			<Note>
				Every theme is checked for contrast: text on its backgrounds, on buttons and on cards reaches at least 4.5 to 1 in
				both light and dark, the level that keeps text readable for most people. If you change colours yourself, keep text
				and its background clearly apart.
			</Note>
		</Section>

		<Section
			id='layouts'
			title='Header and footer'
			lead='The header and footer are shared: change them once and every page shows the change.'>
			<List
				ordered
				items={[
					<>Open <strong>Pages</strong> and click <strong>Header</strong> or <strong>Footer</strong> under the list of pages — or select a block of the header on a page and press <em>Edit the header</em>. <em>Delete it</em> there removes that block from the header on every page (it asks first, then opens the header so undo brings it back).</>,
					'The header (or footer) shows on its own on the canvas. Add, move, style and type in it exactly like on a page. The bar above the page says how many pages show it.',
					<>Go back to a page with the arrow in that bar, or by picking the page.</>,
				]}
			/>
			<P>
				<strong>Another layout.</strong> A page uses the site’s header and footer, or none (in the page’s settings, under{' '}
				<em>Header and footer</em>). For a page that needs a different header — a landing page, say — press{' '}
				<em>Another layout</em> under the header and footer, name it, change its header and footer, and pick it in that page’s
				settings. A layout pages still use can’t be deleted.
			</P>
		</Section>

		<Section
			id='sections'
			title='Saved sections'
			lead='Save a part of a page as a section and use it on as many pages as you like. Change it once and every page follows.'>
			<List
				ordered
				items={[
					<>Select the block to save — usually a whole section, like a sign-up band or opening hours — and press the puzzle piece in the row of buttons under its name: <strong>Save as section</strong>. Give it a name. It takes that block’s place on the page.</>,
					<>To use it on another page, open <strong>Add</strong>: your saved sections are at the top. Click one or drag it onto the page.</>,
					<>To change it, select it on any page and press <strong>Edit the section</strong> (or click it under <strong>Pages → Saved sections</strong>). The bar above the page says how many places use it — the change shows in all of them when you publish.</>,
					<>To change it on one page only, press <strong>Detach a copy</strong>: that page gets its own copy of the blocks, no longer linked.</>,
				]}
			/>
			<P>
				Under <strong>Pages → Saved sections</strong> you can rename one, or delete one no page uses. A saved section can’t hold
				another saved section, or a pop-up or drawer.
			</P>
		</Section>

		<Section
			id='blocks'
			title='Every block'
			lead='What each block on the Add tab is for, in one line.'>
			{BLOCK_GROUPS.map(g => (
				<div
					key={g.title}
					className='mt-5'>
					<h3 className='text-[15px] font-medium'>{g.title}</h3>
					<Terms
						head={['Block', 'What it’s for']}
						rows={g.rows}
					/>
				</div>
			))}
			<P>
				<strong>Blocks that use your Website settings.</strong> The header, logo, social links, map and contact form show
				your site name, logo, social profiles, address and email from <em>Site setup</em> — change them there and every
				page follows. The header’s and menu’s links are the pages you marked <em>Show in the menu</em> (or links you type in,
				if you choose “These links”).
			</P>
			<P>
				<strong>Hints, not errors.</strong> Some things are flagged with a hint but never stop you publishing: a picture
				without alt text (a short description for people who can’t see it), a second main title on a page, or a heading that
				skips a level. Fixing them helps visitors who use screen readers, and search engines.
			</P>
			<Note>
				Every block is made to be quick: pages carry no extra code for blocks they don’t use. Tabs, carousels, galleries and
				countdowns add a few lines only on pages that have them, and the moving strip stands still for visitors who ask their
				device for less motion.
			</Note>
		</Section>

		<Section
			id='data'
			title='Your data on the page'
			lead='Your site’s words, lists and details live in your project, where the team can change them without opening the builder.'>
			<Terms
				head={['What', 'Where it lives']}
				rows={[
					['Texts, headings, buttons, pictures', <><strong>Contents</strong> — one record per piece, with a short name (its slug) such as <code>home-hero-1</code>, made for you. Edit them on the page or in the panel’s Contents table; a change made in the panel shows on the live site straight away, no publish needed.</>],
					['Cards — features, team, reviews, numbers', <><strong>Contents</strong> — one record per section, its cards in a list.</>],
					['Each page’s title and description for search engines', <><strong>SEO</strong> — one record per page. Changing it in the panel shows on the page in the builder and goes live with the next publish.</>],
					['The theme, colours and fonts', <><strong>Site design</strong> — one record. See <A href='#themes'>The themes</A>.</>],
					['Lists — services, team, products, posts…', <>A <strong>model of its own</strong> with a <em>public API</em> (list and get) switched on, so visitors’ pages can read it.</>],
				]}
			/>
			<P>
				<strong>Every word is in Contents, from the start.</strong> A new site opens as its theme’s demo — every page, its SEO
				record and a list such as Services — named after your site. Each heading, text, button and picture on it is already a
				Contents record, and so is everything you add later: a section or block from the Add tab arrives with demo words (rich
				text as lorem ipsum) saved in its own record, and a pasted or duplicated copy gets records of its own. Change the words
				right on the page or in the panel; a setting kept in Contents shows <em>In Contents · Open</em> beside it.
			</P>
			<P>
				<strong>Lists of cards.</strong> Sections made of look-alike cards — features, team, reviews, numbers, steps — are
				lists: their cards are kept in one Contents record. Select the list (click a card, then <em>List of records</em> in the
				path at the top) and change, add, remove or reorder the cards under <em>Records</em>, or in the panel’s Contents.
			</P>
			<P>
				<strong>Use data.</strong> Text, pictures and buttons that can come from data show a small <em>Use data</em> button
				beside their setting. Pick a Contents record, the site’s name, email, phone or address, or — inside a list — a field of
				each record. The setting then shows where its value comes from; <em>stop using data</em> to type it here again.
			</P>
			<P>
				<strong>Lists of records.</strong> Any list can show one of your models instead of its own cards: under{' '}
				<em>Records</em> pick the model (Services, Team, Products…), the order, how many, and — if you want only some — a filter
				(featured is yes, price at most 100…). The card follows: its title shows the record’s name or title, its text the
				description, its picture the image. Pick <em>Cards kept in Contents</em> to go back to cards of its own. The blocks
				inside the list are drawn once per record: bind them with Use data, or type <code>{'{{item.title}}'}</code> in a text.
				Turn on <em>Show pages</em> for Previous / Next links when there are more records.
			</P>
			<P>
				<strong>A page for each record.</strong> A page whose address has a part in brackets, like <code>/services/[slug]</code>,
				shows one record: <code>/services/web-design</code> shows the service whose slug is web-design, and its title and
				description can use the record too (<code>{'{{record.title}} — Acme'}</code>). An address with no such record is a
				“page not found”.
			</P>
			<P>
				Text can format what it shows: <code>{'{{item.price | money}}'}</code>, <code>{'{{record.createdAt | date}}'}</code>,{' '}
				<code>{'{{item.summary | truncate:120}}'}</code>, <code>{'{{item.subtitle | default:\'Coming soon\'}}'}</code>; also
				number, upper and lower.
			</P>
			<Note>
				A list can only show a model whose public API is on with list and get — otherwise visitors would see nothing. The
				builder says so in the list itself, and Publish won’t go ahead until it’s fixed. Turn it on in the panel (Models → the
				model → Public API). Contents never need it.
			</Note>
		</Section>

		<Section
			id='ai'
			title='Build with your own AI'
			lead='Connect Claude, ChatGPT, Cursor or any MCP client, and let it build the site here — with the same pages, themes and checks as the builder.'>
			<P>
				Open <em>AI</em> in the builder’s top bar (or <em>Settings → Connect your AI</em>):
			</P>
			<List
				items={[
					<><strong>Connect</strong> — make a key (it acts as you, never beyond your role; tick <em>It may publish</em> only if you want your AI to put changes live), then follow the steps for your AI with the key already filled in.</>,
					<><strong>Build with AI</strong> — a ready request with your theme in it. Copy it into your AI; in Claude and Claude Code it’s also in the prompt menu as “Build my site”.</>,
					<><strong>Keys</strong> — every key, when it was last used, and Revoke.</>,
				]}
			/>
			<P>
				Your AI starts from the theme’s demo site when the site is blank, writes your words into Contents, makes a model for each
				list (with its public API on) and fills it, and saves every page with its SEO. Everything it makes is a draft you see and
				change in the builder; nothing goes live until you publish (or it does, if its key may publish and you ask it to).
				More about keys and clients in <A href='/connect-ai'>Connect your AI</A>.
			</P>
			<Note>Your role needs the “Manage API keys” permission to make a key. Without it you still see the steps.</Note>
		</Section>

		<Section
			id='publish'
			title='Publishing'
			lead='One button puts every change live at once, and each publish is kept as a version you can go back to.'>
			<P>
				Press <em>Publish</em> at the top right of the editor. <strong>What Publish does.</strong> It first checks the whole site. If something would break a page — a button that
				opens a pop-up you’ve since deleted, a link to a page that’s gone — Publish stops, nothing changes on the live site,
				and you see each problem; click one to jump to its page and block. Fix them and publish again.
			</P>
			<Shot
				src='/guides/site-builder/publish.jpg'
				alt='The Publish dialog listing a changed page and the design, with a note field'
				caption='Publish lists what goes live; a note says what this version is.'
			/>
			<P>When everything is in order, it puts live together:</P>
			<List
				items={[
					'Every page you added or changed since the last publish.',
					'The look: theme, colours and fonts, the header and the footer, and your saved sections.',
					'Pages you deleted disappear from the live site.',
				]}
			/>
			<P>
				Visitors see the new version within moments. You can add a short note (“New prices”, “Summer menu”) so you know later
				what each version was.
			</P>
			<Terms
				head={['Doing this', 'Happens on the live site']}
				rows={[
					['Editing a page', 'Nothing, until you publish.'],
					['Deleting a page', 'It stays live until you publish, then it’s gone. The home page can’t be deleted — make another page the home page first.'],
					['Taking a page off the site', 'It goes off the live site at once, without publishing, and stays off when you publish other changes until you put it back.'],
					['Renaming a page or changing its address', 'The live page keeps its old name and address until you publish.'],
				]}
			/>
			<P>
				<strong>History.</strong> Each publish is a numbered version: who published it, when, and its note. Going back to an
				earlier version makes it live again straight away and puts your drafts back to it too — it’s saved as a new version,
				so you can always come forward again. Pages you made after that version are kept as drafts, off the live site. The
				last 50 versions are kept.
			</P>
			<Note>
				Two people can work on the same site. If you both change the same page, the one who saves second is told and can
				load the other’s version, so nobody’s work is silently overwritten.
			</Note>
		</Section>
	</Guide>
);

export default SiteBuilder;
