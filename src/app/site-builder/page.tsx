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
				The site builder is being rolled out in steps. Opening a page, changing, adding and moving its blocks and publishing
				come first; styling blocks and choosing themes follow. This guide grows with it. Until it reaches your
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
					<>Pop-ups, drawers and popovers are listed under <strong>Overlays</strong> — see <A href='#overlays'>below</A>.</>,
					<>Drag a row to move its block: drop it on the top or bottom edge of another row to put it before or after, or on the middle of a block that holds others to put it inside. A red line means it can’t go there, with the reason underneath.</>,
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
					['Layout', 'Section (a full-width band), Container, Stack (a row or a column), Grid, Spacer, Divider'],
					['Text and buttons', 'Heading, Text, Button, Link, Icon'],
					['Pictures and video', 'Image, Video, Embed (a map or video from an allowed site)'],
					['Pop-ups and drawers', <>Pop-up, Drawer, Popover — see <A href='#overlays'>below</A></>],
				]}
			/>
			<P>
				<strong>Click</strong> a block to add it next to what’s selected: into it, if it’s a block that holds others (a section,
				a stack, a grid), otherwise just after it. With nothing selected it goes at the end of the page. Whole sections always go
				between the page’s sections, never inside one.
			</P>
			<P>
				<strong>Drag</strong> a block onto the page to put it exactly where you want: a blue line shows where it will land, and
				an empty box turns blue when it will go inside. If a block can’t go somewhere, a red note says why and nothing is added.
				The search box at the top finds blocks and sections by name.
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
				A ready-made section — a header, a hero with a title and two buttons, a footer — is a set of blocks arranged for you.
				Add it like a block (click, or drag it onto the page). Once it’s on the page it’s just blocks: change any text, picture
				or button, add or remove parts, move them around.
			</P>
			<List
				items={[
					<><strong>Headers</strong> — your name, menu links and a button.</>,
					<><strong>Heroes</strong> — a centred title, a line of text and two buttons.</>,
					<><strong>Footers</strong> — your name, links and the copyright line.</>,
				]}
			/>
			<Note>More sections and themes are on the way — features, prices, testimonials, questions, team, contact and more.</Note>
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
				alt='The outline lists a Drawer under Overlays; the selected button’s “When clicked” is set to open that drawer'
				caption='A drawer under Overlays, and a button set to open it.'
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
