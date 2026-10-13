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
	{ id: 'designer', title: 'The designer' },
	{ id: 'blocks', title: 'Blocks' },
	{ id: 'tokens', title: 'Fields in text' },
	{ id: 'filters', title: 'Formats' },
	{ id: 'lists', title: 'Lists from other pages' },
	{ id: 'conditions', title: 'Show only when' },
	{ id: 'page', title: 'Paper and look' },
	{ id: 'download', title: 'Downloading' },
	{ id: 'ai', title: 'Build with your AI' },
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
			lead='Typed once for the project, used by every template.'>
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
			<P>The logo is an image address (PNG, JPG, WebP or SVG) — copy it from the Media library.</P>
		</Section>

		<Section
			id='designer'
			title='The designer'
			lead='Blocks on the left, the page in the middle, the selected block on the right.'>
			<List
				items={[
					'Click a block on the page or in the list to change it. Drag blocks in the list to move them — into columns and boxes too.',
					'The page shows one of your records (pick it above the page), or sample data. Show fields switches to which field goes where.',
					'Real PDF shows the actual file, with your unsaved changes — page breaks and page numbers are exact only there.',
					'Undo and redo (⌘Z, ⇧⌘Z), Delete removes the selected block, ⌘S saves. Nothing changes for anyone until you save.',
					'Change with your AI has your own AI change the template from a sentence (“make the totals bigger”) — then load its changes.',
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
					['Table', 'One row per line item or payment. Columns have a heading, a value ({{item.…}}), a width share and alignment. Long tables carry on over pages, repeating their heading.'],
					['Columns', 'Blocks side by side; widths are shares (2 and 1 = two thirds and one third).'],
					['Box', 'A shaded or framed group, with padding and round corners.'],
					['Image', 'A logo, a signature, an image field.'],
					['Line, Space, Page break', 'A rule, blank room, and “start a new page here”.'],
				]}
			/>
			<P>
				The <strong>header</strong> and <strong>footer</strong> repeat on every page — put “Page {'{{page}}'} of {'{{pages}}'}” in
				the footer. The <strong>body</strong> flows over as many pages as it needs.
			</P>
		</Section>

		<Section
			id='tokens'
			title='Fields in text'
			lead='Any text can hold fields: “Bill to {{bill.client.name}}”.'>
			<P>
				The <strong>Field</strong> button beside a text box inserts a field where the cursor is, with a format guessed from it.
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
			<List
				items={[
					'A record’s page: Download PDF beside Edit (a menu when the page has several templates).',
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
			id='gallery'
			title='The gallery'
			lead='Designs to start from: invoices, a bill, receipts — more are added over time.'>
			<P>
				Using a gallery design copies it into your project; change it as much as you like — later changes to the gallery don’t
				reach your copy.
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
