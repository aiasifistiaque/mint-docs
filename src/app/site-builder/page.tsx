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
	{ id: 'publish', title: 'Publishing' },
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
				The editor is being built now and arrives in steps. This guide grows with it: each part is written here when you can
				use it. Until then, the way to build a site is your own code reading the <A href='/websites'>site API</A>.
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
			id='publish'
			title='Publishing'
			lead='One button puts every change live at once, and each publish is kept as a version you can go back to.'>
			<P>
				<strong>What Publish does.</strong> It first checks the whole site. If something would break a page — a button that
				opens a pop-up you’ve since deleted, a link to a page that’s gone — Publish stops, nothing changes on the live site,
				and you see each problem with the block it’s on. Fix them and publish again.
			</P>
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
