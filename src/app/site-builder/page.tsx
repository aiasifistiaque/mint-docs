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
				The site builder is being rolled out in steps. Opening a page, changing its blocks and publishing come first;
				adding new blocks, styling them and choosing themes follow. This guide grows with it. Until it reaches your
				workspace, the way to build a site is your own code reading the <A href='/websites'>site API</A>.
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
				Open <em>Site → Site builder</em> in your website project (or <em>Edit site</em> on the website’s home). The
				left column has two tabs: <em>Pages</em> and <em>Outline</em>. Pick a page in Pages, or in the list at the top
				left, to open it.
			</P>
			<Shot
				src='/guides/site-builder/pages.jpg'
				alt='The Pages tab: Home, About and Contact, each with its address and a status'
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
					<><strong>Header</strong> and <strong>Footer</strong> are shared by every page and listed above and below the page’s own blocks. You see them here; you’ll change them from the site’s design, which comes next.</>,
				]}
			/>
		</Section>

		<Section
			id='props'
			title='A block’s settings'
			lead='The right column shows what the selected block can do, and changes show on the page as you type.'>
			<Terms
				head={['Setting', 'How it works']}
				rows={[
					['Text', 'Type straight in. Rich text has a small toolbar: headings, bold, italics, links, lists, quotes and code.'],
					['Choices', 'Pick from the list — heading level, button style, size, how many columns.'],
					['Colours', 'Your theme’s colours, so a change of theme still looks right.'],
					['Images and videos', <>Pick from your <A href='/media'>media library</A>, upload one, or paste an address. Videos also take YouTube and Vimeo links.</>],
					['Icons', 'Search the built-in set and click one.'],
					['When clicked', 'For buttons, links, icons and images: go to one of your pages, open a link (optionally in a new tab), scroll to a block on the page, or open a widget like the cart.'],
				]}
			/>
			<P>
				<em>Remove block</em> at the bottom deletes the selected block (undo brings it back). Locked blocks can’t be
				removed until you unlock them in the outline.
			</P>
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
				alt='The Publish dialog listing a new page and a changed page, with a note field'
				caption='Publish lists what goes live; a note says what this version is.'
			/>
			<P>When everything is in order, it puts live together:</P>
			<List
				items={[
					'Every page you added or changed since the last publish.',
					'The look: theme, colours and fonts, the header and the footer.',
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
