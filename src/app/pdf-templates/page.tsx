import Guide from '@/components/docs/Guide';
import { A, C, List, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/pdf-templates');

/**
 * PDF templates for projects. Section ids mirror the platform's guide
 * (/docs/pdf-templates) — the panel's links land here through panel.ts
 * docsPath.
 */

const SECTIONS = [
	{ id: 'what', title: 'What it is' },
	{ id: 'start', title: 'Making a template' },
	{ id: 'match', title: 'Matching your fields' },
	{ id: 'business', title: 'Business details' },
	{ id: 'texts', title: 'Saved texts' },
	{ id: 'designer', title: 'The designer' },
	{ id: 'blocks', title: 'Blocks' },
	{ id: 'layout', title: 'Rows and filling space' },
	{ id: 'moving', title: 'Moving, copy and paste' },
	{ id: 'free', title: 'Placed freely' },
	{ id: 'tokens', title: 'Fields in text' },
	{ id: 'filters', title: 'Formats' },
	{ id: 'lists', title: 'Lists from other pages' },
	{ id: 'conditions', title: 'Show only when' },
	{ id: 'page', title: 'Paper and look' },
	{ id: 'download', title: 'Downloading' },
	{ id: 'ai', title: 'Build with your AI' },
	{ id: 'preview', title: 'Preview' },
	{ id: 'gallery', title: 'The gallery' },
	{ id: 'access', title: 'Who can do what' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const PdfTemplates = () => (
	<Guide
		href='/pdf-templates'
		sections={SECTIONS}
		open={{ href: '/pdf-templates', label: 'Open PDF templates' }}>
		<Section
			id='what'
			title='What it is'
			lead='Build → PDF templates: designed documents for your records — an invoice for a bill, a receipt for a payment.'>
			<P>
				A template lays out a page of paper: your logo and details, the record’s number and dates, a table of its line items,
				the totals. Each piece of data is one of the record’s fields, written as <C>{'{{bill.total | money}}'}</C>. Anyone who
				can open a record presses <strong>Download PDF</strong> and gets the file, filled in with that record.
			</P>
			<P>
				Start from a design in the gallery, build one from nothing, or describe it to AI. A page can have several templates — an
				invoice and a delivery note — and one is its default.
			</P>
		</Section>

		<Section
			id='start'
			title='Making a template'
			lead='PDF templates → New template.'>
			<List
				ordered
				items={[
					'Pick a starting point: a design from the gallery, Blank, or Build with your AI.',
					'Pick the page it prints (Bills, Invoices, Payments…) and name it.',
					'For a gallery design, match what it shows to your fields — next section.',
					'It opens in the designer. The first template of a page becomes its default.',
				]}
			/>
		</Section>

		<Section
			id='match'
			title='Matching your fields'
			lead='A design prints “Total” and “Customer name”; your page calls them something else.'>
			<P>
				Each row is one thing the design shows, with our guess at your field beside it — from the names and the kind of field (a
				date for “Due date”, a number for “Total”). Change any guess, or leave it blank: a blank one prints nothing until you
				put a field there in the designer.
			</P>
			<P>
				<strong>Line items</strong> come from rows inside the record (a list of items on the bill itself) or from another page
				whose records point at this one (Invoice items whose Invoice is this one). Pick which, then match the columns.
			</P>
		</Section>

		<Section
			id='business'
			title='Business details'
			lead='The project’s logo, address and contacts, a bank note, money and dates — set once, used by every template.'>
			<Terms
				head={['Setting', 'What it does']}
				rows={[
					['Name, logo, address, phone, email, website, tax number', <>Printed with <C>{'{{business.name}}'}</C>, <C>{'{{business.logo}}'}</C>…</>],
					['Note', <>Bank details or payment terms — <C>{'{{business.note}}'}</C>.</>],
					['Currency', 'The symbol money shows, the word amounts in words end with (Taka, Dollars), decimals, and 1,234,567 or 12,34,567 grouping.'],
					['Date format', '13 Oct 2026, 13/10/2026… wherever a date is printed.'],
					['Time zone', 'Empty: each reader’s own. Set one so every copy shows the same day.'],
				]}
			/>
			<P>
				<strong>Business details</strong> on the PDF Templates page, or <strong>Upload logo</strong> / <strong>Add address</strong> on the designer’s page, opens it. <strong>Upload logo</strong> picks from the media library, uploads a new one or takes a link. They’re the project’s own business details — <A href='/projects#project-settings'>Project settings</A> shows the same ones; the bank note, money and dates belong to PDF templates.
			</P>
		</Section>

		<Section
			id='texts'
			title='Saved texts'
			lead='Terms and conditions, a return policy — written once, printed by any template.'>
			<P>
				Business details → <strong>Saved texts</strong>. Name a text (Terms &amp; conditions), write it, and every template prints it
				with its field — <C>{'{{texts.terms_conditions}}'}</C>; the copy button next to each gives it. Change the words
				once and every template printing them changes. <strong>**bold**</strong> and new lines work, and fields too: “Pay within 7 days
				of <C>{'{{bill.issueDate | date}}'}</C>” prints each record’s date. One click adds a ready one — Terms &amp;
				conditions, Computer generated (“no signature is required”), Payment instructions, Return policy, Thank you.
			</P>
			<P>
				Words that belong to one template only — a heading, “This invoice is computer generated” on just this design — are
				plain text blocks instead (see the designer).
			</P>
		</Section>

		<Section
			id='designer'
			title='The designer'
			lead='A full-page tool: what to add on the left, the page in the middle, the selected block on the right.'>
			<List
				items={[
					'It fills the window: the sidebar folds away behind the menu button. One toolbar on top — undo / redo, what the page shows (a record or Sample data), Fields, zoom, Business details, Your AI, Preview, Real PDF and Save.',
					'Left, three tabs: “Blocks” — text, rows, table, columns, box, row, image, line, space, page break; “Ready-made” — pieces (Logo & business, Signature, Push to bottom, Computer note “…no signature is required”, Terms, Bank details, PAID stamp, Thank you) and your saved texts; a click puts it after the selected block. “Layers” — the blocks as a tree; drag to move them, into columns and boxes too. Tiles can also be dragged straight onto the page.',
					'Middle: the page. Click a block to select it; its bar on the page moves it up or down (left or right in a row), duplicates, copies or deletes it, and ↖ selects the block around it (the whole signature, not just its words). Drag blocks on the page to move them. A selected image or logo has a handle on each corner: drag one to make it bigger or smaller — it keeps its shape; hold ⇧ to change the shape too. Empty business details show as “+ Add phone”, “+ Upload logo” — click one to fill it in.',
					'Right: the selected block’s settings — or, with nothing selected, the document: its name, page, paper, look and lists.',
					'Sample data fills every field, like Preview; your business details and saved texts show as they are. Fields switches to which field goes where.',
					'Undo / redo (⌘Z, ⇧⌘Z), Delete removes the selected block, Esc unselects, ⌘S saves. Nothing changes for anyone until you save.',
				]}
			/>
		</Section>

		<Section
			id='blocks'
			title='Blocks'>
			<Terms
				head={['Block', 'Use it for']}
				rows={[
					['Text', 'Headings and paragraphs. **bold** inside; a new line is a new line.'],
					['Label + value rows', 'Invoice no. / Date / Due, and the totals: rows can be bold, big, a filled band or have a line above. “Hide rows with no value” drops empty ones.'],
					['Table', 'One row per line item or payment. Columns have a heading, a value ({{item.…}}), a width share and alignment. It can have its own font, like any text. Pick the heading’s fill and text colour, lines between rows or a grid, and the lines’ colour. Long tables carry on over pages, repeating their heading.'],
					['Columns', 'Blocks side by side; widths are shares (2 and 1 = two thirds and one third).'],
					['Box', 'A shaded or framed group, with padding and round corners. Its blocks sit one under another (a stack) or side by side (a row) — see Rows and filling space.'],
					['Row', 'A box with nothing drawn and its blocks side by side, each as wide as it needs — a logo and a title on one line, a signature on the right.'],
					['Image', 'A logo, a signature, an image field.'],
					['Line, Space, Page break', 'A rule, blank room (which can fill the free space), and “start a new page here”.'],
				]}
			/>
			<P>
				The <strong>header</strong> and <strong>footer</strong> repeat on every page — put “Page {'{{page}}'} of {'{{pages}}'}” in
				the footer. The <strong>body</strong> flows over as many pages as it needs.
			</P>
		</Section>

		<Section
			id='layout'
			title='Rows and filling space'
			lead='Boxes work like flexbox: a stack or a row, and blocks that take the room left.'>
			<P>
				Select a box and set <b>Layout → Blocks</b> to <b>Row</b> (or add a <b>Row</b> from Add). In a row every block is as wide
				as its content — text its longest line, an image its size — unless you change its <b>Width in the row</b>: <b>Fill the
				free space</b> or a <b>Fixed width</b> in pt. Label + value rows, tables, lines and columns have no width of their own, so
				they share the free width.
			</P>
			<Terms
				head={['Setting', 'What it does']}
				rows={[
					['Gap', 'The room between the blocks (pt).'],
					['Align', 'Top, middle or bottom of the row — or Stretch, so boxes in it are all as tall as the tallest. Each is an icon, like Figma’s; hover one to see what it does.'],
					['Spread', 'Where the blocks go when nothing fills: from the left, centred, to the right, or space between them.'],
					['Min height', 'The box is at least this tall; a block set to fill takes the height the others leave.'],
				]}
			/>
			<P>
				A <b>Space</b> set to <b>Fill the free space</b> takes the room left: in a row it pushes what follows to the right (logo ·
				space · INVOICE); in a box with a min height it pushes what follows down; in the body it takes the room left on the page,
				so what follows — a signature, the terms — sits at the bottom of the page. <b>Push to the bottom</b> in Add is exactly
				that. The header and footer have no spare room, so a Space there keeps its own size. In the designer a filling Space is
				hatched.
			</P>
			<P>
				More for boxes: <b>Top & bottom</b> and <b>Left & right</b> padding (over the all-round padding), <b>Lines on</b> — a
				border on some sides only (a rule above and below, a bar on the left) — and, for a box sitting straight in the header,
				body or footer, <b>Full-width background</b>: its colour runs to the page’s edges (the header’s first block up to the
				top edge, the footer’s last down to the bottom edge) while what’s inside stays within the margins. Set the page’s top
				and bottom margins to 0 for bands that touch the edges — Invoice — Banner and Quotation — Modern in the gallery do.
			</P>
			<P>
				In a <b>Columns</b> block each column has its own Top / Middle / Bottom and <b>One under another</b> or <b>Side by
				side</b> for the blocks in it.
			</P>
		</Section>

		<Section
			id='moving'
			title='Moving, copy and paste'
			lead='Drag blocks on the page; copy one and paste it inside a box.'>
			<List
				items={[
					'Drag a block on the page: a line shows where it lands — above or below another block, left or right of one in a row, or inside a box or a column (an empty one lights up). The Add panel’s tiles drag onto the page too.',
					'Near a box’s edge the drop goes beside the box; further in, it goes inside.',
					'⌘C copies the selected block, ⌘X cuts it, ⌘V pastes: inside the selected box (at its end) or columns block (its first empty column), otherwise after the selected block. The block bar has Copy and, on a box with something copied, Paste inside.',
					'What you copy is on your clipboard, so it pastes into another template too.',
					'Several at once, like Figma: ⇧ or ⌘ click more blocks (on the page or in Layers). Drag any of them and they all move — into a box or a column too. ⌘G puts them in a box, ⇧⌘G in a row side by side; ⌘C / Delete act on all of them.',
					'In Layers, drop a block on a box or columns row and it goes inside.',
				]}
			/>
		</Section>

		<Section
			id='free'
			title='Placed freely'
			lead='Like Canva: put a stamp, a signature or a watermark exactly where you want it.'>
			<List
				items={[
					'Select a block and press Place freely (under its name on the right) — it leaves the flow and stays where it was on the page. Or switch Add to Place freely and drop a tile anywhere on the page.',
					'Drag it anywhere. It snaps to the page’s edges, margins and middle, and to other placed blocks — pink lines show what it snapped to; hold ⌥ not to snap. Drag the small handle on its right to change its width; arrow keys nudge it 1pt, ⇧ 10pt.',
					'On the right: from the left, from the top, width, turn (degrees — a tilted PAID stamp), opacity, which page (first, every or last), and Behind the content for a watermark.',
					'Back into the flow puts it at the end of the body again.',
					'Tables, totals and anything that grows with the record belong in the flow: only the flow moves on to the next page when it runs out of room.',
				]}
			/>
		</Section>

		<Section
			id='tokens'
			title='Fields in text'
			lead='Any text can hold fields: “Bill to {{bill.client.name}}”.'>
			<P>
				The <strong>Field</strong> button beside a text box inserts the field where the cursor is, with a format guessed from it. Its menu goes in layers — this record, this row, a list, the business, a saved text, the page and date — and a linked record (Client) opens into its own fields; search looks through all of them. In the box a field shows as a chip in words (“Saved text · Invoice terms”); click a chip to change it. Turn on <strong>Keys</strong> to see and type the raw keys instead.
				The record is named after its page (<C>bill</C> for Bills — see Page → Record as); linked records open up:{' '}
				<C>{'{{bill.client.address}}'}</C>. In a table’s columns, <C>{'{{item.…}}'}</C> is the row and <C>{'{{index}}'}</C> its
				number; <C>{'{{business.…}}'}</C> are your details and <C>{'{{today}}'}</C> today’s date.
			</P>
		</Section>

		<Section
			id='filters'
			title='Formats'
			lead='After the field, a | and a format: {{bill.total | money}}.'>
			<Terms
				head={['Format', 'Prints']}
				rows={[
					['money', '৳86,250.00 — with your currency. money:$ for another symbol.'],
					['number, number:2', '1,234 · 1,234.50'],
					['date, datetime', 'In your date format; date:\'DD/MM/YYYY\' for another.'],
					['words', '“Eighty Six Thousand Two Hundred Fifty Taka Only”'],
					['upper, lower, title', 'UPPER, lower, Title Case'],
					['default:\'—\'', 'What to print when the field is empty.'],
					['count, sum:amount, join', 'How many in a list, a list added up, a list joined with commas.'],
					['plus:, minus:, times:, divide:', 'Arithmetic with a number or another field: {{bill.total | minus:bill.paid | money}}.'],
				]}
			/>
		</Section>

		<Section
			id='lists'
			title='Lists from other pages'
			lead='An invoice’s payments, a client’s orders — records of another page that point at this one.'>
			<P>
				In Page → Lists from other pages, add one: the page and the field there that points back, a short name (
				<C>payments</C>), an order and a limit. Show it in a table (One row per → payments) or in text:{' '}
				<C>{'{{payments | count}}'}</C>, <C>{'{{payments | sum:amount | money}}'}</C>. It’s only filled for people who can see
				that page.
			</P>
		</Section>

		<Section
			id='conditions'
			title='Show only when'
			lead='Print a block only for some records.'>
			<P>
				Every block has <strong>Show only when</strong>: a PAID band when the status is paid, a “Due date” row only when there
				is one. In the designer such a block is drawn faded when the record on screen doesn’t meet it.
			</P>
		</Section>

		<Section
			id='page'
			title='Paper and look'>
			<P>
				Page → Paper: A4, Letter, Legal or A5, portrait or landscape, and the margins (72 points = 1 inch). Look: the font
				(Geist, Geist Mono, Helvetica, Times, Courier), text size and line height, and the colours blocks start from. Bangla
				text and the ৳ sign always print — characters a font doesn’t have use Noto Sans Bengali.
			</P>
		</Section>

		<Section
			id='download'
			title='Downloading'>
			<P>
				A template is a <strong>Draft</strong> or <strong>Published</strong> (the badge beside its name). New ones — blank, from the gallery, or a copy — start as
				drafts: you can design, preview and print a Real PDF in the designer, but the page doesn’t offer it. Press <strong>Publish</strong> in the designer to put
				it on the page’s Download PDF; <strong>Unpublish</strong> takes it back to a draft. Only published templates show anywhere a page downloads, the page’s
				default is the default among them, and a row menu’s Download PDF links one published template (a draft’s item is hidden until it’s published again).
			</P>
			<List
				items={[
					'A record’s page: Download PDF beside Edit (a menu when the page has several published templates).',
					<>
						A row’s menu: Pages → Table → Row menu → <strong>Download PDF</strong> — see the{' '}
						<A href='/pages#row-menu'>row menu</A>.
					</>,
					'Several records at once: tick them, Print / PDF — each template is an option, one file with each record from a new page.',
				]}
			/>
		</Section>

		<Section
			id='ai'
			title='Build with your AI'>
			<P>
				Your own AI — Claude, ChatGPT, Cursor or any MCP client — builds templates for you once it’s connected (see{' '}
				<A href='/connect-ai'>Connect AI</A>). <strong>Build with your AI</strong> writes the prompt to paste into it: pick the
				page, say what it should look like, copy. It reads the page’s fields, shows you its plan and saves the template; press{' '}
				<strong>Show what it made</strong> to see it in the list.
			</P>
			<P>
				In the designer, <strong>Change with your AI</strong> does the same for the open template. Save your own edits first —
				your AI changes the saved copy — then press <strong>Load its changes</strong>.
			</P>
		</Section>

		<Section
			id='preview'
			title='Preview'>
			<P>
				The eye on a template’s card (yours or the gallery’s), or <strong>Preview</strong> in the designer, opens the PDF itself in a new
				tab with every field filled with sample data: a customer, three line items whose amounts add up to the total, paid and
				due, dates. Your business details and saved texts print where you have them; the empty ones get a stand-in (a “YOUR
				LOGO” badge), so you see the whole layout. From the designer it shows your unsaved changes. <strong>Download</strong> keeps
				the file. To see one of your own records instead, pick it above the designer’s page and press <strong>Real PDF</strong>.
			</P>
		</Section>

		<Section
			id='gallery'
			title='The gallery'
			lead='Designs to start from — invoices, receipts and quotations, with more added over time.'>
			<P>
				The gallery is browsed by category: <b>Invoices</b> (Classic, Modern, Minimal, Banner, Bill), <b>Receipts</b>
				(Receipt, Compact, Money receipt) and <b>Quotations</b> (Quotation, Quotation — Modern). Using a gallery design copies
				it into your project; change it as much as you like — later changes to the gallery don’t reach your copy. To print
				quotations, your project needs a page for them (a Quotations model with its items) — the template prints that page’s
				records.
			</P>
		</Section>

		<Section
			id='access'
			title='Who can do what'>
			<Terms
				head={['Who', 'Can']}
				rows={[
					['Anyone who can see a page', 'Download its records as PDFs, and see its templates.'],
					['People with Build', 'Make, change and delete templates, set the default, edit the business details.'],
				]}
			/>
			<P>A template only prints what the reader could open anyway: passwords never print, and a list from a page they can’t see stays empty.</P>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['Symptom', 'Why, and what to do']}
				rows={[
					['A field prints blank', 'Show fields: is it one of this page’s fields? Fix it with the Field button. Or the record has no value.'],
					['The logo doesn’t show', 'Use an https address of a PNG, JPG, WebP or SVG under 5 MB.'],
					['Dates are a day off', 'Set the time zone in Business details.'],
					['“This page has no PDF template yet”', 'Make one for that page.'],
					['The PDF looks a little different from the designer', 'The designer is a close drawing; Real PDF is exact.'],
				]}
			/>
		</Section>
	</Guide>
);

export default PdfTemplates;
