import Guide from '@/components/docs/Guide';
import { A, C, CodeBlock, H3, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { PROJECT_KEY, PUBLIC_API } from '@/lib/config';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/websites');

/**
 * Website projects: the website kit (backend library/functions/websiteKit),
 * building pages, and the site API (/site, /pages/by-path). `websites` is a
 * GuideLink target.
 */

const SECTIONS = [
	{ id: 'websites', title: 'What you get' },
	{ id: 'site-overview', title: 'The website’s home' },
	{ id: 'site-setup', title: 'Site setup' },
	{ id: 'site-general', title: 'Name, logo and favicon' },
	{ id: 'site-contact', title: 'Contact and social links' },
	{ id: 'site-seo', title: 'Default SEO' },
	{ id: 'tracking', title: 'Tracking tags and pixels' },
	{ id: 'server-side', title: 'Server-side tracking' },
	{ id: 'site-code', title: 'Add script' },
	{ id: 'indexing', title: 'Indexing, robots.txt and sitemap' },
	{ id: 'redirects', title: 'Redirects and headers' },
	{ id: 'site-domains', title: 'Domains' },
	{ id: 'site-check', title: 'Check the site' },
	{ id: 'connect-a-website', title: 'Connect a website you already have' },
	{ id: 'website-setup', title: 'Website setup: connect your code' },
	{ id: 'website-setup-keys', title: 'Keys, and where each setting goes' },
	{ id: 'ai-site', title: 'Build your site with AI' },
	{ id: 'kit', title: 'The website kit' },
	{ id: 'build-a-page', title: 'Building a page' },
	{ id: 'site-contents', title: 'Contents, page by page' },
	{ id: 'site-contents-more', title: 'More in one piece' },
	{ id: 'site-contents-slug', title: 'Slugs: how a site finds a piece' },
	{ id: 'site-contents-list', title: 'Lists of your records' },
	{ id: 'contents', title: 'Older content blocks' },
	{ id: 'seo', title: 'SEO' },
	{ id: 'menu', title: 'The menu' },
	{ id: 'site-api', title: 'The site API' },
	{ id: 'render', title: 'Rendering your site' },
	{ id: 'starter-code', title: 'Starter code from a template' },
	{ id: 'more', title: 'Blogs, products and more' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const NEXT_EXAMPLE = `// app/[[...slug]]/page.tsx — Next.js, one route for every page
const API = '${PUBLIC_API}';
const KEY = '${PROJECT_KEY}'; // the project key — API → Keys

const load = async (slug: string[] = []) => {
  const path = '/' + slug.join('/');
  const res = await fetch(\`\${API}/pages/by-path?apiKey=\${KEY}&path=\${encodeURIComponent(path)}\`, { next: { revalidate: 60 } });
  return res.ok ? res.json() : null;
};

export async function generateMetadata({ params }) {
  const data = await load((await params).slug);
  return data?.seo
    ? { title: data.seo.title, description: data.seo.description,
        openGraph: { images: data.seo.image ? [data.seo.image] : [] },
        robots: data.seo.noIndex ? { index: false } : undefined }
    : {};
}

export default async function Page({ params }) {
  const data = await load((await params).slug);
  if (!data) return notFound();
  return (
    <main>
      <h1>{data.page.name}</h1>
      {data.contents.map(block => <Block key={block._id} block={block} />)}
    </main>
  );
}`;

const BLOCK_EXAMPLE = `function Block({ block }) {
  switch (block.category) {
    case 'rich-content': return <section dangerouslySetInnerHTML={{ __html: block.richContent }} />;
    case 'image':        return <img src={block.image} alt={block.name} />;
    case 'gallery':      return <div className="gallery">{block.gallery.map(src => <img key={src} src={src} alt="" />)}</div>;
    case 'list':         return <ul>{block.list.map(item => <li key={item}>{item}</li>)}</ul>;
    case 'card':         return <div className="cards">{block.card.map((c, i) => <article key={i}><h3>{c.title}</h3><p>{c.description}</p></article>)}</div>;
    case 'video':        return <video src={block.videoUrl} controls />;
    default:             return <section><h2>{block.content}</h2><p>{block.subContent}</p>
                           {block.btnText && <a href={block.url}>{block.btnText}</a>}</section>;
  }
}`;

const Websites = () => (
	<Guide
		href='/websites'
		sections={SECTIONS}
		open={{ href: '/projects', label: 'Open Projects' }}>
		<Section
			id='websites'
			title='What you get'
			lead='A website project runs your site’s content; your site shows it.'>
			<P>
				MINT is where your team edits the website — its pages, their text and images, their SEO. Your site (Next.js, Astro, a
				static site, anything that can call an API) reads it with two calls. Make one by choosing <strong>Website</strong> when
				creating a project; list the site’s domains on the project for <A href='/analytics'>analytics</A>.
			</P>
		</Section>

		<Section
			id='kit'
			title='The website kit'
			lead='Three ordinary models, in a “Website” sidebar section. Change them like any model.'>
			<Terms
				head={['Model (address)', 'Holds']}
				rows={[
					[<>Pages (<C>pages</C>)</>, 'Every page: its name, path, status, template, parent and place in the menu.'],
					[<>SEO (<C>seo</C>)</>, 'Per page: title, description, share image, keywords, canonical URL, hide from search engines.'],
					[<>Contents (<C>web-contents</C>)</>, <>What each page says, one typed piece at a time — a hero, cards, questions, a list (<A href='#site-contents'>Contents, page by page</A>).</>],
				]}
			/>
			<P>
				They start with a read-only <A href='/public-api'>public API</A> (List and Read one, open to anyone), which
				is what the site API uses. Add fields freely; keep the models’ addresses and that public API, or the site API can’t
				find them.
			</P>
			<P>
				The site’s own settings — name, logo, favicon, contact details, default SEO, tags — aren’t a model: they’re on{' '}
				<A href='#site-setup'>Site setup</A>, one set per website. (Websites made before this had a <em>Site settings</em>{' '}
				table; its record was copied to Site setup, and the table can be deleted in the model builder.)
			</P>
		</Section>

		<Section
			id='build-a-page'
			title='Building a page'
			lead='A page, its SEO and its content blocks.'>
			<List
				ordered
				items={[
					<>
						Under <strong>Pages</strong>, add a page: name “About”, path <C>/about</C> (the home page is <C>/</C>), template,
						and status <strong>Draft</strong> while you work.
					</>,
					<>
						Open it. Its <strong>Contents</strong> tab lists its blocks — <strong>Add</strong> there creates one already
						linked to the page. Add a heading block, a rich-text block, a gallery…
					</>,
					<>
						Its <strong>SEO</strong> tab: add the title and description search engines and link previews show.
					</>,
					<>
						Set the page to <strong>Published</strong>. Your site shows it from then on.
					</>,
				]}
			/>
			<Note>Only published pages are served. Set a page back to Draft or Archived to take it down without deleting it.</Note>
		</Section>

		<Section
			id='site-contents'
			title='Contents, page by page'
			lead='Pick a page, then add what’s on it. Each piece has a type, and asks only for its own words.'>
			<P>
				<strong>Contents</strong> opens with a <strong>Page</strong> dropdown: choose Home, About… to see that page’s contents in
				the order they show, or <strong>Whole site</strong> for what’s on every page — the header and the footer. The arrows move a
				piece up or down; the pencil opens it.
			</P>
			<P>
				<strong>New content</strong> asks first what it is, then shows only that type’s fields. Type in the search box to
				find a type by name or by what it’s for; above the rest, <em>Suggested</em> offers what usually comes next — an
				opening for an empty page, the header and footer for the whole site, and after a hero: text, cards, numbers…
			</P>
			<Terms
				head={['Type', 'What it holds']}
				rows={[
					['Hero', 'A small line above, a heading, text, a picture, two buttons and a few numbers under it'],
					['Hero carousel', 'Slides that move on, each with its own heading, subheading, two buttons and background picture — and how many seconds each shows'],
					['Text / Rich text', 'A heading and a few paragraphs — or a longer piece with headings, lists and pictures'],
					['Cards', 'A heading and a row of cards, each with a title, small text, description, picture and link — features, services, team, plans'],
					['Questions', 'Questions and their answers'],
					['Numbers', 'A few figures with a label each'],
					['Reviews', 'Quotes with a name, role and photo'],
					['Gallery / Logos / Picture / Video', 'Photos, logos, one picture with a caption, or a video'],
					['Call to action', 'A heading, a line and the buttons'],
					['List', <>Records of one of your models — see <A href='#site-contents-list'>Lists of your records</A></>],
					['Section', 'Anything else: headings, text, a picture, buttons and rows'],
					['Header / Footer', 'The words and links at the top and bottom of every page'],
				]}
			/>
			<P>
				The types are components, under <A href='/models#models-components'>Build → Components</A> (category <C>content</C>):
				add a field to one and every piece of that type gets it; make your own component in the <C>content</C> category and it’s
				offered as a type too. Each piece is checked as its type. <strong>Table</strong> opens the same records as a table;
				pieces from before types (one word each, as the site builder made them) are listed under the page and open there.
			</P>
			<P>
				Every text field is plain words — a box where each new line is a new line on the site — in every type, your own
				types included. Only <strong>Rich text</strong> has the editor with headings, lists and links. Words written in the
				editor before are shown as plain text the next time the piece is opened.
			</P>
			<P>
				<strong>Drafts until you publish.</strong> A change — made here, in the table or in the site builder — is a draft: each
				piece says <em>Draft</em>, <em>Published</em> or <em>Changes not published</em>. <strong>Publish</strong> on a piece, or{' '}
				<strong>Publish the page</strong>, puts it on your site and API; the site builder’s Publish puts the words it shows live
				with the layout. Publishing needs the <A href='/organization#roles'>Publish permission</A>. The site builder writes each
				section’s words into one piece of the section’s type, so what you add there shows here, in the page’s order.
			</P>
		</Section>

		<Section
			id='site-contents-more'
			title='More in one piece'
			lead='A Text with a Gallery under it, a Hero with a Section after it: blocks that belong together stay in one piece.'>
			<P>
				Under a piece’s own fields, <strong>More in this block</strong> adds more blocks to it. While it’s empty it suggests
				what goes well with the piece — under a Text: a Picture, a Gallery, a Video; under a Section: Cards, a Gallery, a
				Picture — one click adds one. <strong>Add</strong> opens every type with a search box, the suggested ones first
				(Enter adds the first match) — any type but List, which is a piece of its own — and shows that type’s fields. Each block moves up and down, folds away, is
				copied or removed; one piece holds up to 20. The list says <em>+2 blocks</em> beside a piece that has them.
			</P>
			<P>
				They go live with the piece when it’s published, in the order you put them. The site builder only changes the piece’s
				own words; the blocks you added here stay.
			</P>
		</Section>

		<Section
			id='site-contents-slug'
			title='Slugs: how a site finds a piece'
			lead='Every piece has a slug — a short name like home-intro. That’s what connects it to your site.'>
			<P>
				A slug is made for each new piece from its page and type (<C>home-hero-3f9a2c</C>), or you type your own when you add
				or edit it: lowercase letters, numbers and dashes, one piece per slug. The list shows each piece’s slug with a copy
				button, and the piece’s form shows the addresses to read it.
			</P>
			<Terms
				head={['Your site', 'How it reads the piece']}
				rows={[
					['Made with the site builder', 'Each text on the page is tied to a piece’s slug and field — you don’t need the address. Change a slug, and places that use the old one stop showing it until they’re tied again.'],
					[
						'Your own site or app — one piece',
						<>
							<C>GET /public/api/web-contents/by-slug/home-intro?apiKey=mint_pk_…</C> — its type, its words, and the blocks
							added under it (<C>block</C>: the piece’s own first, then the others in order, each with its type in{' '}
							<C>__component</C>).
						</>,
					],
					[
						'Your own site or app — a whole page',
						<>
							<C>GET /public/api/pages/by-path?path=/about&apiKey=mint_pk_…</C> — the page, its SEO, and its pieces in the
							order they show. Draw each by its <C>type</C>, or pick one out by its <C>slug</C>.
						</>,
					],
				]}
			/>
			<Note>
				Both answer with what’s published only — a draft, a hidden piece or a removed one isn’t there. The key is your
				project key, from <A href='/public-api#api-project-key'>API → Keys</A>; more in <A href='#site-api'>The site API</A>.
			</Note>
		</Section>

		<Section
			id='site-contents-list'
			title='Lists of your records'
			lead='Show your projects, posts or products on a page: which ones, how many, in what order.'>
			<List
				items={[
					<>
						<strong>Model</strong> — whose records it shows. The site reads them as any visitor would, so the model needs its{' '}
						<A href='/public-api'>public API</A> on for listing; one without is offered with the reason.
					</>,
					<>
						<strong>How many</strong> and <strong>Order by</strong> — newest first, the cheapest first, by name.
					</>,
					<>
						<strong>Which records</strong> — conditions on its fields (<em>Featured is Yes</em>, <em>Year is more than 2020</em>),
						all of them or any one. With none, every record its public API shows.
					</>,
					<>
						<strong>Card title, text and picture</strong> — which of its fields each card shows, and <strong>Each card links to</strong>:{' '}
						<C>/projects/{'{slug}'}</C> fills in each record’s own values.
					</>,
				]}
			/>
			<P>
				<em>It shows now</em> lists what it would show at this moment, or why it shows nothing.
			</P>
		</Section>

		<Section
			id='contents'
			title='Older content blocks'
			lead='Websites made before content types kept one word per record. Category says what kind.'>
			<Note>
				The first time the site builder opens such a site, each section’s words move into one piece of its type — the page
				looks the same. The old records stay until the next Publish, then go to the table’s Archived view.
			</Note>
			<Terms
				head={['Category', 'Uses the fields']}
				rows={[
					['Content', 'Content (heading or main text), Sub content, Button text and Url'],
					['Rich content', 'Rich content — formatted text with headings, lists, links and images'],
					['List / List of links', 'List — one entry per item'],
					['Card', 'Cards — rows of image, title, subtitle and description'],
					['Image / Gallery', 'Image / Gallery'],
					['Video', 'Video URL'],
					['Section / Other', 'Whatever your site’s design needs'],
				]}
			/>
			<List
				items={[
					<>
						<strong>Priority</strong> orders blocks on the page — higher first. <strong>Section</strong> and{' '}
						<strong>Slug</strong> let your site group or find a particular block (“hero”, “faq”).
					</>,
					<>
						<strong>Is visible</strong> off, or status Draft, hides a block without deleting it.
					</>,
					<>
						Background colour, font colour and font sizes are there for blocks that need their own style; <em>Note</em> and{' '}
						<em>Ref image</em> are for your team only.
					</>,
				]}
			/>
		</Section>

		<Section
			id='seo'
			title='SEO'>
			<P>
				One SEO record per page: <strong>Title</strong> (up to 120 characters) and <strong>Description</strong> (up to 320) for
				search results, a <strong>Share image</strong> for link previews, keywords and tags, a <strong>Canonical URL</strong>{' '}
				if the page lives at another address too, and <strong>Hide from search engines</strong>. Your site puts them in the
				page’s head (see the example below); pages without one fall back to the site settings’ defaults.
			</P>
		</Section>

		<Section
			id='menu'
			title='The menu'>
			<P>
				Published pages with <strong>In the menu</strong> on make up the site’s menu, highest <strong>Priority</strong> first.
				Give a page a <strong>Parent page</strong> to put it under another — your site builds the dropdowns from that.
			</P>
		</Section>

		<Section
			id='site-api'
			title='The site API'
			lead='Three read-only calls, with the project key (API → Keys).'>
			<Terms
				head={['Call', 'Answers']}
				rows={[
					[
						<C key='s'>GET /site</C>,
						<>
							<C>{'{ settings, menu }'}</C> — the site settings, and the menu: <C>{'[{ _id, name, path, parent }]'}</C>.
						</>,
					],
					[
						<C key='p'>GET /pages/by-path?path=/about</C>,
						<>
							<C>{'{ page, seo, contents }'}</C> — the published page at that path, its SEO (or null), and its visible,
							published blocks in order. 404 if there’s no published page there.
						</>,
					],
					[
						<C key='c'>GET /web-contents/by-slug/home-intro</C>,
						<>
							One published piece by its <A href='#site-contents-slug'>slug</A>: its <C>type</C> and <C>block</C> — its
							own words first, then any <A href='#site-contents-more'>blocks added under it</A>. 404 if there’s none.
						</>,
					],
				]}
			/>
			<CodeBlock
				label='Site API'
				code={`const site = await fetch('${PUBLIC_API}/site?apiKey=${PROJECT_KEY}').then(r => r.json());
const about = await fetch('${PUBLIC_API}/pages/by-path?apiKey=${PROJECT_KEY}&path=/about').then(r => r.json());
const intro = await fetch('${PUBLIC_API}/web-contents/by-slug/home-intro?apiKey=${PROJECT_KEY}').then(r => r.json());`}
			/>
			<P>
				Need something else — every block with section “faq”, say? The models’ own public API is there too:{' '}
				<C>GET /web-contents?section=faq</C>.
			</P>
		</Section>

		<Section
			id='render'
			title='Rendering your site'
			lead='One route that renders whatever path is asked for.'>
			<P>
				An example with Next.js — fetch the page by its path, put its SEO in the head, and draw each block by its category.
				Any framework works the same way.
			</P>
			<CodeBlock
				label='Next.js page'
				code={NEXT_EXAMPLE}
			/>
			<CodeBlock
				label='Drawing a block'
				code={BLOCK_EXAMPLE}
			/>
			<H3>Images</H3>
			<P>
				Image fields hold the file’s public address from your project’s <A href='/media'>Media</A>, ready for an{' '}
				<C>img</C> tag.
			</P>
			<Note tone='warn'>
				Rich content is HTML written by your team. Render it only from your own project, as here — never pass HTML from
				visitors through the same path.
			</Note>
		</Section>

		<Section
			id='site-overview'
			title='The website’s home'
			lead='Open a website project and its dashboard is about the site.'>
			<List
				items={[
					<>
						<strong>Traffic</strong> — page views, visitors, visits and bounce rate for the last 30 days, against the 30 before,
						and views per day. The full reports are on <A href='/analytics'>Analytics</A>.
					</>,
					<>
						<strong>Set up</strong> — what’s still missing: name, logo, favicon, default SEO, a published page, SEO on every
						page, a domain, tracking. Each has a link to where it’s set; the list goes once everything is done.
					</>,
					<>
						<strong>Pages</strong> — each page’s path, status, whether it has SEO, and how many content blocks it has.
					</>,
				]}
			/>
			<P>
				Numbers, charts and lists you add in the <A href='/dashboard'>dashboard builder</A> show below.
			</P>
		</Section>

		<Section
			id='site-setup'
			title='Site setup'
			lead='Site → Site setup: everything a website needs besides its pages, on one page — not a table.'>
			<P>
				Its tabs are <strong>General</strong>, <strong>Contact & social</strong>, <strong>SEO</strong>,{' '}
				<strong>Tracking</strong>, <strong>Server-side</strong>, <strong>Code</strong>, <strong>Redirects & headers</strong>,{' '}
				<strong>Domains</strong> and <strong>Check the site</strong>. Each setting is a card with its own Save, enabled once
				you change something. Your site reads it all from the <A href='#site-api'>site API</A>, so a change is live within a
				minute with no code change. Changing it needs the Build permission; domains need Manage projects.
			</P>
		</Section>

		<Section
			id='site-general'
			title='Name, logo and favicon'>
			<P>
				<strong>General</strong> has the site’s name, tagline, logo, favicon and footer text, and its theme: primary and
				secondary colour and font. Images come from your <A href='/media'>Media library</A>. The analytics script
				adds the favicon to pages that don’t have one.
			</P>
		</Section>

		<Section
			id='site-contact'
			title='Contact and social links'>
			<P>
				<strong>Contact & social</strong>: email, phone, WhatsApp, opening hours, address and a map embed, and the full
				addresses of your Facebook, Instagram, X, LinkedIn, YouTube, TikTok and Pinterest pages. Your site shows the ones you
				fill in.
			</P>
		</Section>

		<Section
			id='site-seo'
			title='Default SEO'>
			<P>
				On the <strong>SEO</strong> tab, Default SEO is the same SEO editor as each page’s: a <strong>Google preview</strong>{' '}
				on your site’s domain, then <em>Basics</em>, <em>Social</em> (with a share preview), <em>Indexing</em>,{' '}
				<em>Structured data</em> and <em>Sitemap</em>, with counters and SEO checks. Above it, the <strong>title template</strong>{' '}
				— <C>%s · Acme</C> makes a page called “About us” show as “About us · Acme”.
			</P>
			<P>
				What it covers depends on the kind of field. The meta title, description, share image and keywords are the home
				page’s, and the fallback for any page without its own. Settings — the Open Graph type, the X card and image,
				indexing switches, max snippet and image preview, sitemap priority and change frequency — apply to every page that
				doesn’t set its own. Share titles and descriptions, the schema type, custom JSON-LD and the canonical URL are the
				home page’s only, so pages don’t all share one.
			</P>
			<P>
				Each page’s own SEO is under <em>Website → SEO</em>, or a page’s <em>⋯ → Name, address & SEO</em> in the site
				builder: <A href='/site-builder#page-seo'>A page’s SEO</A>.
			</P>
		</Section>

		<Section
			id='tracking'
			title='Tracking tags and pixels'
			lead='Paste an ID, save its card, and the tag is on every page — the analytics script adds it.'>
			<Terms
				head={['Tag', 'The ID looks like']}
				rows={[
					['Google Analytics 4', <C key='a'>G-XXXXXXXXXX</C>],
					['Google Tag Manager', <C key='b'>GTM-XXXXXXX</C>],
					['Google Ads', <C key='c'>AW-123456789</C>],
					['Meta Pixel', 'A long number'],
					['TikTok Pixel', 'Capital letters and digits'],
					['LinkedIn Insight', 'The partner ID, a number'],
					['Pinterest Tag', 'A long number'],
					['X (Twitter) Pixel', <C key='x'>o1a2b</C>],
					['Snap Pixel', 'A 36-character ID with dashes'],
					['Microsoft Clarity', 'The project ID'],
					['Hotjar', 'The site ID, a number'],
				]}
			/>
			<P>
				This works on any site with the <A href='/analytics'>analytics script</A> on its pages. Page views on sites
				that change pages without reloading are counted by the pixels too. <strong>MINT analytics</strong> turns the
				panel’s own visit counting on or off. A site that renders its tags itself adds <C>data-no-tags</C> to the script.
			</P>
		</Section>

		<Section
			id='server-side'
			title='Server-side tracking'
			lead='Browsers block a good share of tracking; this server can send the events too.'>
			<Terms
				head={['Provider', 'What the server sends — and what it needs']}
				rows={[
					[
						'Meta Conversions API',
						<>
							Page views, Lead (a record your site sends in, e.g. a contact form) and CompleteRegistration (a customer signs up).
							Needs the Meta Pixel ID and an access token from the pixel’s Conversions API settings.
						</>,
					],
					[
						'Google Analytics (Measurement Protocol)',
						<>generate_lead and sign_up. Needs the Google Analytics ID and an API secret from your web data stream.</>,
					],
				]}
			/>
			<P>
				Turn each on in <strong>Site setup → Server-side</strong>. Keys are kept on the server: once saved, the panel only
				shows that one is set, with Replace and Remove. Meta gets each page view from the pixel and the server with the same
				event id, so it counts it once; Google can’t do that, so page views go to Google from the browser only. Visitors are
				matched by IP address, browser and the platform’s cookie; an email or phone in a form is hashed before it’s sent.
			</P>
			<P>
				So a lead is matched to the visitor who sent it, the site adds <C>window.MintAnalytics?.headers()</C> to the headers
				of its own calls to the site API. Use Meta’s <strong>test event code</strong> while you check it in Events Manager →
				Test events, then clear it.
			</P>
		</Section>

		<Section
			id='site-code'
			title='Add script'
			lead='Paste any script a provider gives you and it’s on every page of your website.'>
			<List
				items={[
					<>
						Open <strong>Site setup → Add script</strong> and press <strong>Add script</strong>.
					</>,
					<>
						Give it a <strong>name</strong> (so you know it later), choose <strong>where</strong> it goes — in{' '}
						<C>&lt;head&gt;</C> (tags that must load first, verification metas), at the start of <C>&lt;body&gt;</C> (a{' '}
						<C>&lt;noscript&gt;</C> fallback) or at its end (chat widgets) — and paste the script exactly as given, with its
						own <C>&lt;script&gt;</C> or <C>&lt;meta&gt;</C> tags.
					</>,
					<>
						<strong>Add</strong>. It’s saved at once and live within a minute. Switch it off to pause it without losing it;{' '}
						<strong>Edit</strong> or <strong>Remove</strong> it any time.
					</>,
				]}
			/>
			<P>
				Good for Google Tag Manager, Microsoft Clarity, Hotjar, a chat widget (Tawk.to, Crisp, Intercom), a Facebook
				domain-verification tag — anything a provider gives you as HTML. On a site made in the{' '}
				<A href='/site-builder'>site builder</A> the scripts are written into each page’s HTML, so they run on the first
				load and verification checkers find them; a site with its own code gets them from the analytics script. Only add
				scripts you trust: they run with full access to your pages and visitors.
			</P>
		</Section>

		<Section
			id='indexing'
			title='Indexing, robots.txt and sitemap'>
			<List
				items={[
					<>
						<strong>Let search engines index the site</strong> — off while you build; robots.txt then asks them all to stay
						away.
					</>,
					<>
						<strong>Sitemap</strong> — a sitemap.xml of your published pages, without those marked <em>Hide from search
						engines</em>, named in robots.txt.
					</>,
					<>
						<strong>Main domain</strong> — the address used in the sitemap and robots.txt.
					</>,
					<>
						<strong>Google Search Console</strong> and <strong>Bing</strong> — the verification codes, added as meta tags.
					</>,
				]}
			/>
			<P>
				Your site serves them from the site API: <C>/site/robots.txt</C> and <C>/site/sitemap.xml</C> — the tab shows the
				full addresses. A site built with <A href='#ai-site'>AI</A> wires them up for you.
			</P>
		</Section>

		<Section
			id='redirects'
			title='Redirects and headers'>
			<P>
				<strong>Redirects</strong> send an old address to a new page or another site — <em>301 permanent</em> when a page
				moved for good, <em>302 temporary</em> otherwise. <strong>Response headers</strong> are sent with your pages, for
				security (<C>X-Frame-Options</C>, <C>Content-Security-Policy</C>) or caching. Both come to your site in{' '}
				<C>GET /site</C> under <C>config</C>; its code applies them (a site built with AI does).
			</P>
		</Section>

		<Section
			id='site-domains'
			title='Domains'>
			<P>
				Where your site is live, e.g. <C>example.com</C> and <C>www.example.com</C>. Analytics only counts visits from these
				(and from localhost while you build), so others can’t send visits in your name. With none, visits from anywhere
				count.
			</P>
		</Section>

		<Section
			id='site-check'
			title='Check the site'
			lead='Is every tag really on the live site?'>
			<P>
				<strong>Check the site</strong> opens your live home page (the main domain, or the first domain) and shows each tag
				set here as <em>On the site</em>, <em>Check this</em> or <em>Not on the site</em>. It also finds tags the page adds
				by itself: the same ID twice means every visit is counted twice; another ID means the page has its own. Google Tag
				Manager confirms your container exists, and Meta confirms the Conversions API token is valid and made for your
				pixel. Each Tracking card shows its result from the last check.
			</P>
		</Section>

		<Section
			id='connect-a-website'
			title='Connect a website you already have'
			lead='Site → Website setup → Existing website: one line on your site, then pick which pages take their SEO from here.'>
			<P>
				A site that’s already built — WordPress, Webflow, Wix, Squarespace, Shopify, or one made by an agency — connects
				without rebuilding it. You get this project’s <A href='/analytics'>Analytics</A> on it, and you edit the SEO of the pages
				you choose here instead of in the site.
			</P>
			<List
				ordered
				items={[
					<>
						<strong>Paste the snippet</strong> into the <C>{'<head>'}</C> of every page, as high as you can. Website setup shows
						it with your project key filled in, and where it goes on each platform (a header-code box or your theme’s header).
					</>,
					<>
						<strong>Add the pages</strong> Mint should handle: on Website → Pages, a page with its address as it shows in the
						browser (<C>/about</C>), set to <em>Published</em>; then its SEO on <A href='#seo'>Website → SEO</A>.
					</>,
					<>
						<strong>Test the connection</strong>: open your site once in a browser, then type a page’s address in Website setup and
						press <em>Test connection</em>.
					</>,
				]}
			/>
			<H3>What Test connection checks</H3>
			<Terms
				head={['Check', 'What it tells you']}
				rows={[
					['Domain', 'The address is one of your domains (Site setup → Domains). Visits from other addresses aren’t counted.'],
					[
						'Snippet',
						'The page’s HTML has the snippet with this project’s key and data-seo. Added by a tag manager or a plugin that loads it later? It may not be in the HTML; Visits then shows whether it runs.',
					],
					['Visits', 'Page views are arriving, with the last page and when. This shows the snippet runs in visitors’ browsers.'],
					[
						'SEO',
						'Whether the page takes its SEO from here or keeps its own, and whether the HTML your server sends already has it (then link previews see it too).',
					],
				]}
			/>
			<P>
				<em>Connected</em> means nothing is missing and the snippet is on the page or visits are arriving. For the raw answer a page
				gets, open <C>/site/head</C> with its path (below): <C>&quot;found&quot;: false</C> means the page isn’t added.
			</P>
			<H3>Which SEO a page gets</H3>
			<List
				items={[
					<>
						<strong>A page you added to SEO:</strong> what you fill in here replaces the page’s own title, description, share
						image and the rest. A field you leave empty keeps the page’s own, and <A href='#site-seo'>Default SEO</A> only fills
						in tags the page doesn’t have.
					</>,
					<>
						<strong>Any other page:</strong> keeps its own SEO. The snippet leaves it alone, even with Default SEO set.
					</>,
					<>
						<C>/about</C>, <C>/about/</C> and <C>/about.html</C> are the same page. Changes reach the site within a minute, without
						a deploy.
					</>,
				]}
			/>
			<H3>Link previews and other crawlers</H3>
			<P>
				Google runs the snippet, so it reads the SEO. WhatsApp, Facebook, LinkedIn and X previews, and most other crawlers,
				only read the HTML your server sends. If you can edit your site’s server, Website setup has short code for PHP,
				Node / Express and Next.js that prints the same tags into the page there. It prints nothing for pages you haven’t
				added, so your own tags stay. Keep the snippet in the page too: it counts the visits.
			</P>
			<CodeBlock
				label='One page’s SEO, by its address'
				code={`GET ${PUBLIC_API}/site/head?apiKey=${PROJECT_KEY}&path=/about
GET ${PUBLIC_API}/site/head?apiKey=${PROJECT_KEY}&path=/about&format=html`}
			/>
			<Note>
				No access to the site’s code at all? Connecting through your own Cloudflare account is coming next, so the SEO is in the
				HTML for every crawler without touching the code.
			</Note>
		</Section>

		<Section
			id='website-setup'
			title='Website setup: connect your code'
			lead='Site → Website setup: how a site you build yourself reads this project — step by step, for your framework.'>
			<P>
				Pick what your site is built with — <strong>Plain HTML</strong>, <strong>React (Vite)</strong> or{' '}
				<strong>Next.js</strong> — and the page shows the code for each step, already filled in with your project’s API address,
				project key and domain. Copy it into your site:
			</P>
			<List
				ordered
				items={[
					<>
						<strong>Keys</strong> — where they go: a small <C>site.js</C> for plain HTML (there’s no build step), <C>.env</C> for
						Vite, <C>.env.local</C> for Next.js — and the same names on your host.
					</>,
					<>
						<strong>Connect</strong> — a few lines that call the <A href='#site-api'>site API</A>: the site and its menu, a page by
						its path, a piece by its <A href='#site-contents-slug'>slug</A>, a list of records.
					</>,
					<>
						<strong>Show a page</strong> — one route that draws whatever page is asked for.
					</>,
					<>
						<strong>Analytics</strong> — the <A href='/analytics'>analytics script</A> in every page’s head (Next.js: the root
						layout). It counts route changes in React apps by itself, and brings in every tag from{' '}
						<A href='#tracking'>Tracking</A> and <A href='#site-code'>Add script</A>.
					</>,
					<>
						<strong>SEO</strong> — each page’s title, description and share image from Website → SEO, and{' '}
						<C>robots.txt</C> and <C>sitemap.xml</C> passed on from this project (a rewrite on Netlify or Vercel, two route
						handlers in Next.js).
					</>,
				]}
			/>
			<Note>
				Plain HTML and Vite apps are drawn in the browser. Google reads them, but link previews (WhatsApp, Facebook, LinkedIn)
				only see the HTML file — write the title, description and share image there too. Pages that must rank or share well
				are best on Next.js, which renders them on the server.
			</Note>
		</Section>

		<Section
			id='website-setup-keys'
			title='Keys, and where each setting goes'
			lead='Two values go in your code; everything else is set here and reaches the site without a deploy.'>
			<Terms
				head={['Setting', 'Where it goes']}
				rows={[
					[
						'Site API address',
						<>
							Your settings: <C>MINT_API</C> (server), <C>VITE_MINT_API</C> (Vite), <C>NEXT_PUBLIC_MINT_API</C> (Next.js client
							code).
						</>,
					],
					[
						<>Project key (<C>mint_pk_…</C>)</>,
						<>
							<C>MINT_API_KEY</C>, <C>VITE_MINT_API_KEY</C> or <C>NEXT_PUBLIC_MINT_API_KEY</C>. It’s publishable: it reads only
							what’s published and what your endpoints allow, so it can be in a page.
						</>,
					],
					[
						<>Server key (<C>mint_sk_…</C>)</>,
						<>
							Only your server’s settings, as <C>MINT_SERVER_KEY</C> — never with <C>VITE_</C> or <C>NEXT_PUBLIC_</C>, never in a
							page. Make one on <A href='/public-api'>API → Keys</A>, only if your server calls endpoints that need it.
						</>,
					],
					['Google Analytics, Tag Manager, pixels', <A key='t' href='#tracking'>Site setup → Tracking</A>],
					['Chat, verification and other scripts', <A key='c' href='#site-code'>Site setup → Add script</A>],
					['Default title, description, share image', <A key='s' href='#site-seo'>Site setup → SEO</A>],
					['Each page’s SEO', <A key='p' href='#seo'>Website → SEO</A>],
					['Your domain', <A key='d' href='#site-domains'>Site setup → Domains</A>],
				]}
			/>
			<P>
				After the first deploy, add the site’s domain (analytics counts visits only from your domains) and run{' '}
				<A href='#site-check'>Check the site</A>. On Vercel or Netlify, environment variables go in the project’s settings; Vite
				writes them into the build, so redeploy after changing one.
			</P>
		</Section>

		<Section
			id='ai-site'
			title='Build your site with AI'
			lead='Build the site with Claude Code (or any AI editor) and it’s managed from here the moment it’s deployed.'>
			<P>
				<A href='/connect-ai'>Connect your AI</A> to this website project, then ask it to build your site — “a
				two-page site for my bakery: a home page and an about page, and a menu of our products”. While it writes the code, it
				puts everything the site shows into this project instead of into the code:
			</P>
			<List
				items={[
					<>
						<strong>Site setup</strong> — name, logo, favicon, colours, font, contact details, social links, default SEO, tags, and
						the domains it’s deployed on.
					</>,
					<>
						<strong>Pages</strong> — each with its SEO and its <strong>content blocks</strong> in order: headings, text,
						buttons, lists, cards, images.
					</>,
					<>
						<strong>Images</strong> — uploaded to your <A href='/media'>Media library</A>.
					</>,
					<>
						<strong>Lists</strong> — products, services, team, testimonials — become models of their own, linked where they
						belong, with their <A href='/public-api'>public API</A> on.
					</>,
					<>
						<strong>Analytics</strong> — the <A href='/analytics'>tracker</A> on every page.
					</>,
				]}
			/>
			<P>
				The site’s code reads all of it from the <A href='#site-api'>site API</A>. Once deployed, change a heading in{' '}
				<strong>Contents</strong>, a price in <strong>Products</strong> or the favicon in <strong>Site setup</strong>, and
				the live site shows it within a minute — no code change, no redeploy.
			</P>
			<H3>Building again</H3>
			<P>
				Asking the AI to rebuild or change the site updates the same pages, blocks and records rather than adding copies:
				pages are matched by path, blocks by their slug on the page, list records by a field such as their slug. A block the
				AI drops is archived — hidden from the site, still in the panel. Note that a rebuild writes the AI’s text over edits
				you made in the panel to the same blocks.
			</P>
			<Note>
				The AI shows you the pages and lists it plans before writing them, and nothing is saved if any part is invalid. Its
				key needs <em>Can build</em>, and your role needs Build and Records: Add and Edit.
			</Note>
		</Section>

		<Section
			id='more'
			title='Blogs, products and more'>
			<P>
				A website project is a full project: build a <em>Posts</em> or <em>Products</em> model, make it public (List and Read
				one, open to anyone), and your site lists them through the <A href='/public-api'>public API</A>. Add the{' '}
				<A href='/customers'>sign-in widget</A> for members’ areas, and the{' '}
				<A href='/analytics'>tracker</A> to count visits.
			</P>
		</Section>

		<Section
			id='starter-code'
			title='Starter code from a template'
			lead='A website made from a template can come with the code its site starts from.'>
			<P>
				When the template has starter code, the website’s home shows a <strong>Starter code</strong> card: a link to the
				repository, a <strong>Deploy it</strong> button for its host, and the settings (environment variables) the code needs —
				your project’s API address and public name already filled in. Copy the repository (or press Deploy it), paste the settings
				where the host asks for them, and the site shows your pages and content straight away. Change the code as you like; it
				reads everything through the <A href='#site-api'>site API</A>.
			</P>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['Symptom', 'Why, and what to do']}
				rows={[
					['“No published page at that path”', <>The page is still a draft, or its path differs — <C>/about</C>, not <C>about</C>.</>],
					['A block doesn’t show', 'It’s on another page, Draft, or Is visible is off.'],
					['/site returns 404', 'The project is an app — the site API is for website projects.'],
					['A tag isn’t on the site', 'Run Site setup → Check the site: it says whether the analytics script is on the page and which tags it found.'],
					['The menu is missing a page', 'It isn’t published, or In the menu is off.'],
					['Changes take a minute to appear', 'Your site caches the answers (revalidate: 60 above). That’s on your side.'],
				]}
			/>
		</Section>
	</Guide>
);

export default Websites;
