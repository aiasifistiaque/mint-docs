import Guide from '@/components/docs/Guide';
import { A, C, H3, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/pages');

/**
 * The page builder (Build → Pages, /builder) for projects. Section ids mirror
 * the platform's builder guide (workflow, settings, settings-linked, guidelines, navbar-search, value-display, table,
 * table-status, table-totals, table-upload, filters, form, view, linked-relationships,
 * linked-tab, linked-rule, linked-transfer, linked-form, linked-where) — the
 * builder's "How it works" links land here through panel.ts docsPath.
 */

const SECTIONS = [
	{ id: 'what', title: 'What it is' },
	{ id: 'workflow', title: 'Drafts and publishing' },
	{ id: 'preview', title: 'Preview' },
	{ id: 'settings', title: 'Fields & rules' },
	{ id: 'settings-linked', title: 'Linked-record pickers' },
	{ id: 'guidelines', title: 'User guidelines' },
	{ id: 'navbar-search', title: 'Navbar search' },
	{ id: 'value-display', title: 'Around a value' },
	{ id: 'table', title: 'Table page' },
	{ id: 'table-status', title: 'Status moves' },
	{ id: 'table-totals', title: 'Totals' },
	{ id: 'table-upload', title: 'Bulk upload' },
	{ id: 'filters', title: 'Filters' },
	{ id: 'form', title: 'Form' },
	{ id: 'view', title: 'Record page and tabs' },
	{ id: 'linked-relationships', title: 'Linked Relationships' },
	{ id: 'source', title: 'Versions' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const Pages = () => (
	<Guide
		href='/pages'
		sections={SECTIONS}
		open={{ href: '/builder', label: 'Open Pages' }}>
		<Section
			id='what'
			title='What it is'
			lead='Build → Pages: every model’s page, and how it looks and behaves.'>
			<P>
				Creating a <A href='/models'>model</A> gives it a page. Pages lets you refine that page without touching the
				model: which columns the table shows, the filter buttons, the form’s layout and rules, the record’s own page and its
				tabs, the ⋯ menu on each row, actions on ticked rows. Click a page in the list to open its editor.
			</P>
			<P>
				The editor’s tabs each have a colour, used on the tab, its card on the Overview and the banner at its top:
			</P>
			<Terms
				head={['Tab', 'What it changes']}
				rows={[
					['Table page (teal)', 'The list of records: title, buttons, columns, the ⋯ row menu, actions on ticked rows.'],
					['Form (orange)', 'The add and edit form: sections, fields side by side, fields that show only when needed.'],
					['Record page (pink)', 'A record’s own page: sections, linked records, tabs of related lists.'],
					['Filters (purple)', 'The filter buttons above the table.'],
					['Linked Relationships (green)', 'What saving a record does to the records it picks — a payment marking its invoice paid.'],
					['Fields & rules (blue)', 'Required, editable, sortable, searchable — and the input each field uses.'],
					['Versions (cyan)', 'Every published version, to bring an older one back.'],
				]}
			/>
			<Note>
				A model’s <em>fields</em> are changed in Models. Pages changes how those fields are shown and used.
			</Note>
		</Section>

		<Section
			id='workflow'
			title='Drafts and publishing'
			lead='Nothing changes for your team until you publish.'>
			<List
				ordered
				items={[
					<>
						<strong>Edit</strong> in any tab. While something is unsaved a bar stays at the bottom of the page with{' '}
						<em>Undo all</em>, <em>Preview</em>, <em>Save draft</em> and <em>Publish</em>.
					</>,
					<>
						<strong>Save draft</strong> keeps them on the server — they survive a reload and a teammate can carry on. Saving is
						refused while a tab shows an error (a menu item without a title, a filter without a field…).
					</>,
					<>
						<strong>Publish</strong>, with an optional note, makes the draft live. Each publish is a new version you can go
						back to.
					</>,
					<>
						<strong>Discard draft</strong> throws the draft away; the live page is untouched.
					</>,
				]}
			/>
			<P>
				The <strong>Overview</strong> tab sums the page up — its columns, form, record page, filters and fields, and whether a
				draft is waiting — with each card opening its tab (<em>Change it</em>) or its preview. The header shows whether the
				page is <em>Live</em> or has a <em>Draft not published yet</em>.
			</P>
		</Section>

		<Section
			id='preview'
			title='Preview'
			lead='See the page before anyone else does.'>
			<P>
				<strong>Preview</strong> — in the header, the bottom bar, each tab’s banner and the Overview cards — opens a window
				with three pictures: the <strong>Table page</strong>, the <strong>Form</strong> and a <strong>Record page</strong>.
				They’re drawn from your changes as they are, saved or not, and filled in with your five latest records (placeholders
				when there are none). Nothing in the preview can be clicked; <em>Back to editing</em> closes it.
			</P>
		</Section>

		<Section
			id='settings'
			title='Fields & rules'
			lead='How each field is stored, checked and typed in.'>
			<P>
				Each row is one field: its picture and name (with the API name in small grey letters), <strong>Asked as</strong> —
				the input people fill in (text, long text, a date, a dropdown, tags, an image, a record picker…) — and its rules.{' '}
				<strong>Required</strong> and <strong>Can be changed later</strong> are switches right in the row; any other rule
				that’s on shows as a coloured chip. <em>Find a field</em> narrows a long list.
			</P>
			<Terms
				head={['Rule', 'Once published']}
				rows={[
					['Required', 'Must be filled in when a record is added.'],
					['Can be changed later', 'People can edit it after the record is created.'],
					['No duplicates', 'A second record with the same value is refused.'],
					['Searchable', 'The table’s search box finds records by it.'],
					['Sortable', 'The table can be sorted by it.'],
					['Trim spaces', 'Spaces before and after the value are removed.'],
					['Hidden everywhere', 'Never shown or sent anywhere — not even to you.'],
				]}
			/>
			<P>
				<strong>Click a field</strong> to open its settings — the open field is raised and edged in blue so it’s easy to
				tell apart, and <strong>Done</strong> or Esc puts it away. They come in groups: <em>Rules</em> (each with what it
				does), <em>How it looks</em> (its label, how the table shows it, whether its column shows from the start),{' '}
				<em>Limits</em> or <em>Length</em> for numbers and text, <em>Picking a linked record</em> for record pickers, and —
				folded away — <em>Advanced</em>: how it’s stored, which details of a linked record are loaded, and the raw settings.
				Fields marked <em>automatic</em>, like <C>createdAt</C>, are filled in by the system and can’t be changed.
			</P>
			<P>
				The <strong>⋯</strong> at the end of a field moves it up or down, puts it back as it started (once you’ve changed
				it), copies its API name, or removes it from the page. A field from linked records can also be duplicated there.
				You can still drag a field by ⋮⋮.
			</P>
			<P>
				<em>Locked when</em> makes a field changeable only until the record reaches a state. A bill’s status can move
				between draft and due, but once it is void or paid it stays: add the condition <em>status · is one of · void,
				paid</em>. Conditions are a field, a test and a value, and all of them must hold. They’re checked against the
				record as it’s saved, so the change that marks a bill paid goes through and every change after it is refused —
				in the edit form (the field shows muted, with the reason; a section list loses its add, edit and delete buttons), in bulk edits, and through the public API. Other
				fields can be locked the same way: lock <em>amount</em> when status is paid.
			</P>
			<P>
				Two or more conditions show a <em>Match</em> switch: <em>All of these</em> (each must hold) or <em>Any of
				these</em> (one is enough) — “status is void” or “status is paid”. For a choice field, <em>is one of</em> lets you
				tick several values in one condition. The same switch is on tab conditions and on fields from linked records.
			</P>
			<P>
				<strong>Filled in from a linked record</strong>, in a field’s settings, fills it in when a record is
				picked on the same form — a payment’s amount from the bill it pays. Turn on <em>Fill this from a linked record</em>,
				choose the picker (<em>Bill</em>), then{' '}
				<em>Its Total</em>, or <em>A formula over its fields…</em> such as <C>total - paid</C> (the bill’s number fields,
				with + − × ÷, round, min and max). The value stays editable; opening a saved payment never changes it, picking
				another bill fills it again, and a payment added without the form (through the API) gets it too when it was left
				empty.
			</P>
			<P>
				<strong>Colours</strong>, under <em>How it looks</em> for a field with choices — a status, active / inactive, a
				yes / no — turns on <em>Show as coloured tags</em>: the table and the record page show the value as a coloured
				tag. Each option starts with a colour from what it means (paid and active green, void and cancelled red, due and
				pending orange, draft gray); click another swatch to change it, <em>Default</em> to go back.
			</P>
			<P>
				<strong>Linked record in the table</strong>, under <em>How it looks</em> for a field that picks a record (a
				bill’s <em>Client</em>), shows it in the table as a chip, as the record page does: hovering shows a card of the
				client, with <em>View</em> to open its page and <em>Quick view</em> to open it in the side drawer without
				leaving the table. Quick view only shows for people whose role can view that model. Off, the column shows the
				client’s name as plain text.
			</P>
			<P>
				<strong>Add a field from linked records</strong> makes a field worked out from the records linking to this one — a
				client’s <em>Due payment</em>: from <em>bills whose client is this record</em>, <em>Add up a field</em> of{' '}
				<em>amount</em>, only where <em>status is due</em>. It can also count them, or take their average, smallest or
				largest value. Give it a name, then add it to the table, the record page or the form in the page builder like any
				other field. It’s worked out whenever records are read, so it’s always current; it can’t be typed, sorted or
				searched, and it only counts linked records the person looking may see.
			</P>
		</Section>

		<Section
			id='settings-linked'
			title='Linked-record pickers'
			lead='For a field that picks records of another model.'>
			<P>
				<strong>Name shown in the picker</strong> is the field each record is listed by, and what the input shows once one
				is picked. It’s <em>Name</em> unless you pick another — an invoice’s number, a person’s email.
			</P>
			<P>
				<strong>Shown under the name in the list</strong> adds up to four of the linked record’s fields in small type
				under each name in the picker — an invoice’s total and due date — so two alike can be told apart before picking.
				Only the values show, not the field names. With two or more, <strong>Show them</strong> puts them side by side on
				one line, separated by dots (<em>1,200 · 12 Oct 2026</em>), or each on its own line.
			</P>
			<P>
				<strong>Add new from the form</strong> puts a <strong>+</strong> beside the picker: adding a booking for a guest who
				isn’t in the list yet, press +, fill in the guest, and they’re picked.
			</P>
			<P>
				<strong>Which records are offered</strong> narrows the list with conditions — <em>is</em>, <em>is not</em>,{' '}
				<em>is one of</em> — against a fixed value or another field of the same form. On an invoice: offer only the projects
				whose <C>client</C> is this form’s <C>client</C>; pick another client and a project that no longer fits is cleared.
			</P>
		</Section>

		<Section
			id='guidelines'
			title='User guidelines'
			lead='Rules in plain words for the people using the page.'>
			<P>
				Not everyone knows that a void invoice can’t be reversed, or that a paid bill locks. <strong>User guidelines</strong>,
				under the fields on the <em>Fields &amp; rules</em> tab, is where you tell them: <em>Add a guideline</em>, give it a
				title — <em>A void invoice can’t be reversed</em> — and, if it helps, a few words under it on why and what to do
				instead. The arrows reorder them. <em>Title</em> names the list (<em>User guidelines</em> unless you change it), and
				the menu reads after it: <em>Billing rules</em> becomes <em>View billing rules</em>.
			</P>
			<P>
				Once published, people find them in the table’s <strong>⋯</strong> menu beside the add button (Export and Bulk
				upload move in there too), and as a link above the add and edit forms. They open as a window, or a sheet from the
				bottom on a phone. Guidelines are words only — what the server actually refuses is set by the field rules
				(<em>Can be changed later</em>, <em>Locked when</em>), so write the guideline beside the rule that enforces it.
			</P>
		</Section>

		<Section
			id='navbar-search'
			title='Navbar search'
			lead='Find a record from any page — by its name, email or any field you choose.'>
			<P>
				The magnifier at the top of every page (or <C>⌘K</C>, <C>Alt+K</C> on Windows) finds pages by name. Turn on{' '}
				<strong>Show in search</strong> in <strong>Navbar search</strong>, on a page’s <em>Fields &amp; rules</em> tab, and
				it finds that page’s records too. Type two letters or more: matching records are listed after the pages, each by
				its name (its <em>Record name</em> field, or its record number when it has none), with its record number and the
				page it comes from underneath — <em>INV-0001 · Invoices</em>. When the match was in another field, a line under
				that says which: <em>Email: jane@acme.com</em>. Click one, or pick it with the arrow keys and Enter, to open its
				page.
			</P>
			<P>
				<strong>Search by</strong> lists the page’s <em>Searchable</em> fields — the ones its table’s search box uses,
				ticked in the fields list above. All of them count until you click one to leave it out; to search by another
				field, make it Searchable first. It’s off on every page until you turn it on, and like everything here it takes
				effect once published.
			</P>
			<List
				items={[
					<>
						<strong>Only what they could see anyway.</strong> Each page answers with its own table’s rules: a person whose
						role can’t view the page never sees its records, records shared with someone else or kept <em>Only me</em> stay
						hidden, and archived rows stay out.
					</>,
					<>
						<strong>Best matches first.</strong> A name that is the search, then names starting with it, then the rest —
						five per page, thirty in all. <em>More in Clients</em> means there were more: type a little more to narrow it
						down, or search the table itself.
					</>,
				]}
			/>
			<Note>
				Inside a project the search covers that project’s pages; on the organization’s own pages it finds pages only.
			</Note>
		</Section>

		<Section
			id='value-display'
			title='Around a value'
			lead='Words before or after a value, and a second field under it.'>
			<P>
				<strong>Advanced: around a value</strong> sits at the bottom of the <em>Fields &amp; rules</em> and{' '}
				<em>Table</em> tabs (both show the same settings). Pick a field and press <em>Add</em>, then choose what goes{' '}
				<strong>before</strong> and <strong>after</strong> its value: <em>Words I type</em> — an amount shown as{' '}
				<em>BDT 1,200</em> — or <em>Another field’s value</em>, so a bill’s amount reads with its own currency field
				(<em>USD 40</em> on one row, <em>BDT 1,200</em> on the next).
			</P>
			<P>
				<strong>Under it, in the table</strong> puts a second field in small type below the value — a customer’s email
				under their name — so the table needs one column for both. The words show on every row of the table and on the
				record page, in grey beside the value; an empty value shows on its own. The stored value doesn’t change: search,
				sorting, filters and exports still use the number or text itself.
			</P>
		</Section>

		<Section
			id='table'
			title='Table page'
			lead='The page’s list: its header and buttons, columns, row menu and actions on selected rows.'>
			<Terms
				head={['Setting', 'What it does']}
				rows={[
					['Title / Subtitle', 'The page heading and the line under it.'],
					['Add button', 'Its label, and whether it opens the form in a pop-up over the table or on a page of its own (/your-page/create — the same form, with more room).'],
					['Export button', 'Download the table as Excel, CSV or PDF.'],
					['Search / Filter row', 'The search box (matching Searchable fields) and the filter chips.'],
					['Clickable rows', 'Clicking a row opens the record.'],
					['Rows per page', 'The default page size.'],
					['Columns', 'Which columns the table can show, in order — drag to reorder. Each person can still hide columns for themselves.'],
				]}
			/>
			<H3>Row menu</H3>
			<P>
				The ⋯ on every row: quick view, the detail page, edit in a dialog or on a page, duplicate, delete, a link, quick-edit
				of one field, add a linked record, and more. Drag to reorder — see <A href='#row-menu'>Row menu</A>.
			</P>
			<H3>Actions on selected rows</H3>
			<P>
				<strong>Select rows</strong> adds checkboxes and a menu for what’s ticked: export, delete (with undo), duplicate,
				archive, change status, compare, merge duplicates, print, set a field, and totals. Each needs the matching permission —
				see <A href='/records#bulk'>Working on many rows</A>.
			</P>
		</Section>

		<Section
			id='row-menu'
			title='Row menu'
			lead='What the ⋯ on every row offers — and on which rows.'>
			<P>
				Add items with <strong>Add menu item</strong>, name them, pick what each does, and drag them into order. Open an
				item (›) for its settings.
			</P>
			<P>
				<strong>Show only when</strong> — on every item. The item shows only on rows that match: <em>Status is not Paid</em>.
				Other rows simply don’t offer it. It doesn’t stop a save made some other way; for that, add a{' '}
				<em>Refuse the save</em> rule on the other page (<A href='#linked-relationships'>Linked Relationships</A>).
			</P>
			<P>
				<strong>Set a field</strong> changes one field to a value you pick — <em>Mark as void</em>: Status → Void. It asks
				first (“Mark as void? Status becomes Void.”, or your own words), isn’t offered on rows that already have that value,
				and is checked like any edit: locked fields and permissions still apply. Pair it with <em>Show only when</em>{' '}
				<em>Status is one of Unpaid, Due</em> so paid bills can’t be voided from the menu.
			</P>
			<P>
				<strong>Download PDF</strong> downloads the row printed with one of the page’s{' '}
				<A href='/pdf-templates'>PDF templates</A> — pick one, or leave it on the page’s default. Pair it with{' '}
				<em>Show only when</em> to offer “Receipt” only on paid rows.
			</P>
			<P>
				<strong>Download document</strong> downloads one rich-text field of the row — a blog post’s <em>Body</em> — as a
				Word file (.docx), a PDF, Markdown (.md) or plain text (.txt). Pick the field (only the page’s rich-text fields are
				offered) and a format, or leave the format on <em>Ask each time</em> so people choose when they download. The file
				keeps the headings, bold and italics, links, bullet and numbered lists, quotes, code and pictures. Rows where that
				field is empty don’t offer it.
			</P>
			<P>
				<strong>Open in editor</strong> opens one rich-text field of the row on a page of its own, like a document: the full
				toolbar over a sheet of paper, with no sidebar in the way. <strong>Save</strong> (or ⌘S / Ctrl+S) changes only that
				field; <strong>Export</strong> downloads it as Word, PDF, Markdown or text, saving first. Leaving with unsaved words
				asks before anything is lost. On the record page, every rich-text field’s panel has the same two at its top right:{' '}
				<strong>Open editor</strong> and <strong>Download</strong>.
			</P>
			<P>
				<strong>Add a linked record</strong> opens another page’s add form with fields already filled in from the row —{' '}
				<em>Add payment</em> on a bill:
			</P>
			<List
				items={[
					<>
						<strong>Page</strong> — where the new record goes (Payments). Its field that picks this page is filled in for
						you: <em>Bill ← This bill</em>, locked.
					</>,
					<>
						<strong>Filled in</strong> — more fields, each from the row (<em>Amount ← Bill’s Due amount</em>) or a fixed
						value (<em>Method ← Cash</em>).
					</>,
					<>
						<strong>The lock</strong> shows the field read-only, with where its value came from. Unlocked ones can be
						changed before saving.
					</>,
				]}
			/>
			<Note>
				The form is the other page’s own add form — its required fields, its rules and its “Will also update…” line all
				apply — and saving refreshes the list you’re on, so a bill that a payment marks paid shows Paid straight away.
				People need permission to add records on that page.
			</Note>
		</Section>

		<Section
			id='table-status'
			title='Status moves'
			lead='Which moves “Change status” allows.'>
			<P>
				Under Bulk actions, <strong>Status</strong> picks the model’s status field (any options field). Every move is allowed
				until you switch one off — from <em>Paid</em>, switch off the rest so a paid invoice can’t go back.{' '}
				<strong>Ask for a reason</strong> makes each move need one; it’s kept in the record’s history.
			</P>
		</Section>

		<Section
			id='table-totals'
			title='Totals'
			lead='“View total” for the ticked rows.'>
			<P>
				With rows selectable, the selection bar can add up the ticked rows: <em>Total amount</em>, <em>Average amount</em>,
				lowest, highest or count — across pages, counting only rows the person may see. Preset the calculations here, and
				choose whether people may calculate other number fields themselves.
			</P>
		</Section>

		<Section
			id='table-upload'
			title='Bulk upload'
			lead='Many records from a file.'>
			<P>
				Switch on <strong>Bulk upload</strong> and the table’s ⋯ menu offers it. Upload Excel (its first sheet), CSV or JSON,
				then <strong>Check file</strong>. The first row names the columns — a field’s key or its label, any case — and the
				dialog downloads a template.
			</P>
			<List
				items={[
					'Every row is checked like the add form would: required fields, allowed values, formulas, unique fields — against the table and within the file.',
					'Problems come back row by row, with the file’s row numbers, and nothing is saved until every row passes.',
					'Import then saves them all, or none: if one still fails, the ones saved are removed again.',
					'A linked record is found by its id, or by its name, code, title or email.',
					'Up to 2,000 rows or 10 MB at a time; it needs the Add permission on the model.',
				]}
			/>
		</Section>

		<Section
			id='filters'
			title='Filters'
			lead='The chips above the table.'>
			<P>
				Each card is one chip; drag to order them. The first four show, the rest go under “Show more filters”. Picking a field
				fills in a sensible type and options.
			</P>
			<Terms
				head={['Type', 'Lets people']}
				rows={[
					['Multi select', 'Pick any number of values'],
					['Select', 'Pick one value'],
					['Text', 'Match typed text'],
					['Yes / No', 'True or false'],
					['Number range', 'Equal, above, below, between'],
					['Date', 'On, before, after, between, in the last…'],
				]}
			/>
			<P>
				A select’s options can be typed on the card, be every record of another model, or every value the field currently
				holds.
			</P>
		</Section>

		<Section
			id='form'
			title='Form'
			lead='The add and edit form, in titled sections.'>
			<P>
				A section has a title, an optional description and rows; a row holds one field or several side by side. Drag sections
				and rows to reorder. Fields not placed anywhere are listed, so none are forgotten.
			</P>
			<H3>Fields that show only when needed</H3>
			<P>
				<em>Make a field conditional…</em> shows it only when others hold certain values — “Company name when Type is Business”.
				Tests include is, is not, is one of, more/less than, is filled in, is empty, is on and is off; several conditions can
				all have to hold, or any one. Rules chain: a hidden field counts as empty to the rules that depend on it.
			</P>
			<P>
				The server applies the same rules: a hidden field’s value isn’t saved, and a required field is only required while
				it’s shown.
			</P>
			<P>
				For a field that links to records — a payment method, a client — you don’t need its id: type part of its name and
				pick it from the list. The same search is used in <em>Locked when</em> and in record-page tab conditions.
			</P>
			<H3 id='form-pickers'>Pickers that depend on other fields</H3>
			<P>
				On a bill with a Client and a Project, Project should offer only that client’s projects. Under{' '}
				<em>Pickers that depend on other fields</em>, each record picker in the form is listed with what it offers. When
				the linked model points at what another picker picks — a project has a client — a suggestion appears:{' '}
				<em>Only where Client is this form’s Client</em>. One press adds it; <em>Add condition</em> builds others (a
				field of the linked model, is / is not / is one of, and a fixed value or another field of the form). Choose{' '}
				<em>While empty: offer none</em> to show no projects until a client is picked. Picking another client clears a
				project that no longer fits. It’s the same setting as the field’s <em>Which records are offered</em>.
			</P>
			<H3 id='form-sections'>Sections that show only when needed</H3>
			<P>
				<em>Make a section conditional…</em> hides a whole section until it applies — <em>Bank details</em> only when{' '}
				<em>Method</em> is <em>Bank transfer</em>. Its conditions test fields in other sections. While it’s hidden its
				fields count as empty: their values aren’t saved and they aren’t required, and the section’s heading goes too.
			</P>
		</Section>

		<Section
			id='view'
			title='Record page and tabs'
			lead='The record’s own page and its quick-view dialog.'>
			<P>
				A list of sections, each with a title and 1–3 columns. Start from the form’s layout or from all fields. A section can
				hold the record’s own fields, chosen fields of a linked record (“Guest · Email”), or a list of related records (a
				guest’s bookings, newest first).
			</P>
			<P>
				A section’s <em>Copy button</em> switch adds <strong>Copy details</strong> at its top right: one press copies its
				fields as text, one per line — <em>Bank Name: City Bank</em>, <em>Routing Number: 225261187</em> — ready to paste
				into a message. Fields with no value are left out.
			</P>
			<H3 id='view-visibility'>Shown only when needed</H3>
			<P>
				Under the sections, <em>Sections shown only when needed</em> lets each section appear only when the record holds
				certain values — <em>Bank details</em> only when Method is Bank transfer — and <em>Hide fields with no value</em>{' '}
				leaves out the section’s empty fields (and linked lists with no records). <em>Fields shown only when needed</em>{' '}
				does the same for single fields: <em>IBAN</em> only when Bank name is filled in. A section with nothing left to
				show is left out. This applies to the record page and the quick view; it only hides things from view — nothing
				is changed or removed from the record.
			</P>
			<H3>Tabs</H3>
			<P>
				After <em>Overview</em>, add tabs that list records of another model linked to this one — a client’s invoices, an
				author’s posts. Choose the columns, rows per page, and table or cards. Each tab has its own search, and an{' '}
				<em>Add</em> button that opens the other model’s form with this record already filled in.
			</P>
			<P>
				A tab can also reach one step further, through a model in between: a client’s documents, when each document
				belongs to a project and each project to a client. Under <em>Linked by</em>, pick the option under{' '}
				<em>Through another route</em> (“Documents of this record’s Projects”); the line beneath it spells out the path.
				The tab then lists every document of every project of that client. Its <em>Add</em> button is shown muted,
				because a new document needs a project picked — add documents from the project’s page instead.
			</P>
			<P>
				<em>Show only</em> narrows a tab to the records that meet your conditions, so a client page can have{' '}
				<em>All bills</em> and, beside it, <em>Due bills</em> (status is due). Each condition is a field, a test (is, is
				not, is one of, more or less than, before or after, contains, is empty) and a value; a record must meet every
				one. Adding from a tab fills in its “is” conditions — <em>Add bill</em> on Due bills starts as due.
			</P>
			<P>
				Every detail page also has a <strong>History</strong> tab: who changed what, and when.
			</P>
		</Section>

		<Section
			id='linked-relationships'
			title='Linked Relationships'
			lead='Saving one record changes the records it picks — record a payment, and its invoice turns Paid.'>
			<P>
				A rule on a page, read as a sentence: <em>When a payment is added, if Mark as paid is ticked, update the invoice
				picked in Invoice: set Status to Paid, and set Payment date to this payment’s Payment date.</em> Rules are part of the
				page, so they’re saved as a draft and go live when you publish.
			</P>
			<H3 id='linked-tab'>Making a rule</H3>
			<List
				ordered
				items={[
					<>
						Open the page (Build → Pages) and its green <strong>Linked Relationships</strong> tab — or, for a new model,
						the last part of the wizard’s <em>Check the pages</em> step.{' '}
						<strong>This page changes…</strong> lists its rules; <strong>Changed by…</strong> lists rules on other pages
						that change this page’s records.
					</>,
					<>
						<strong>Add a rule</strong>, name it, and fill in the sentence from the top: when the record is added, edited
						or deleted; if (conditions on it); the field that picks the record to change; only if (conditions on that
						record); then change it — or refuse the save with your message.
					</>,
					<>
						Each change is a field of the linked page (only fields that can be edited there are offered) and how:{' '}
						<em>Set to</em> a value, <em>Copy from this record</em>, <em>Add</em> a number, <em>Take off</em> a number,{' '}
						<em>Work out</em> a formula, or <em>Empty it</em>. Add and Take off can have a <em>Never below</em> number and
						the message people see when a save would go under it.
					</>,
					<>
						Choose what happens when the rule stops holding, then <strong>Save rule</strong> and publish the page.
					</>,
				]}
			/>
			<H3 id='linked-rule'>The parts of a rule</H3>
			<Terms
				head={['Part', 'What it does']}
				rows={[
					['When', 'Added, edited, deleted. Most rules run on added and edited.'],
					['If', 'Conditions on this record — Mark as paid is Yes. All must hold, or any one.'],
					['Update the record picked in', 'The field that picks the record to change — Invoice. A field that picks several changes each.'],
					['Only if', 'Conditions on the picked record — Status is not Cancelled.'],
					[
						'Compare with this record',
						'A condition can compare with a value, or with one of this record’s fields — Balance is less than this Transfer’s Amount; To account is this Transfer’s From account.',
					],
					['Then: change', 'Set a value, copy one of this record’s fields, add or take off a number, work out a formula, or empty a field.'],
					['Never below', 'With Add or Take off: the field never goes under this number — the save is refused with your message instead.'],
					['Then: refuse the save', 'Nothing is saved while the conditions hold; your message says why.'],
					[
						'When it stops holding',
						'The record is deleted, the box is unticked, or another invoice is picked: put the fields back (unless someone changed them since), leave them, or don’t allow it.',
					],
					['Allow even if they can’t edit', 'Without it, only people who may edit the linked page can save a record this rule changes.'],
					['Also for website and API saves', 'Off by default: records your website or app saves through the public API don’t run the rule.'],
				]}
			/>
			<H3 id='linked-transfer'>Example: a transfer between two accounts</H3>
			<P>
				A Transfers page picks a <em>From account</em> and a <em>To account</em> and has an <em>Amount</em>. Two rules move
				the money:
			</P>
			<List
				items={[
					<>
						<strong>Take from the sending account</strong> — update the record picked in From account: Balance,{' '}
						<em>Take off</em> this record’s Amount, <em>Never below</em> 0, message <em>Not enough money in the sending
						account.</em>
					</>,
					<>
						<strong>Give to the receiving account</strong> — update the record picked in To account: Balance,{' '}
						<em>Add</em> this record’s Amount.
					</>,
				]}
			/>
			<P>
				A transfer bigger than the balance is refused with your message under Amount, and nothing moves. Editing a transfer
				from 30 to 60 only needs the 30 more; deleting it gives the money back. Two transfers at the same moment can’t both
				spend the same balance. To stop a transfer to the same account, add a rule that refuses the save when the To
				account is this Transfer’s From account.
			</P>
			<H3 id='linked-form'>What people see in the form</H3>
			<P>
				The form follows the rules while it’s filled in: tick Mark as paid and Payment date gets its asterisk. Under the
				fields a line says what saving will also change — <em>Will also update Invoice A: Status → paid, Payment date → 20 Oct
				2026</em> — or why it would be refused. After saving, the message lists what else changed, and the invoice’s history
				says which rule and which payment changed it.
			</P>
			<H3 id='linked-where'>Where rules run</H3>
			<P>
				Everywhere records are saved: the form, Copy and Duplicate, bulk edit and status changes, bulk delete (and its undo,
				which runs the rules again), and bulk upload — checked for every row first, so nothing is saved unless all pass. A
				rule only ever reaches records in the same project.
			</P>
			<Note>
				Totals that must always be right — amount paid, balance — are better as a rollup or formula in{' '}
				<A href='/models'>Models</A>: worked out when read, they can’t drift. Use a rule for a change that happens once: a
				status, a date, stock taken off.
			</Note>
		</Section>

		<Section
			id='source'
			title='Versions'
			lead='Every publish is kept.'>
			<P>
				The <strong>Versions</strong> tab lists each published version with its note, who published it and when.{' '}
				<strong>Load as draft</strong> puts an older one in the draft; publish it to roll back.
			</P>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['Symptom', 'Why, and what to do']}
				rows={[
					['My change doesn’t show', 'It’s still a draft. Publish it.'],
					['I can’t save the draft', 'A tab shows an error — look for the red marks.'],
					['A field can’t be added to the form', 'It isn’t Editable in Settings, or it’s a formula (worked out, not typed).'],
					['A new field isn’t in the table', 'Add it under Table → Columns, or turn on “In the table by default”.'],
					['Bulk upload says a linked record wasn’t found', 'Use the record’s id, or a name, code, title or email that matches one record.'],
				]}
			/>
		</Section>
	</Guide>
);

export default Pages;
