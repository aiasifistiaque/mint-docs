import Guide from '@/components/docs/Guide';
import { A, C, H3, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/pages');

/**
 * The page builder (Build → Pages, /builder) for projects. Section ids mirror
 * the platform's builder guide (workflow, settings, settings-linked, guidelines, value-display, table,
 * table-status, table-totals, table-upload, filters, form, view) — the
 * builder's "How it works" links land here through panel.ts docsPath.
 */

const SECTIONS = [
	{ id: 'what', title: 'What it is' },
	{ id: 'workflow', title: 'Drafts and publishing' },
	{ id: 'preview', title: 'Preview' },
	{ id: 'settings', title: 'Fields & rules' },
	{ id: 'settings-linked', title: 'Linked-record pickers' },
	{ id: 'guidelines', title: 'User guidelines' },
	{ id: 'value-display', title: 'Around a value' },
	{ id: 'table', title: 'Table page' },
	{ id: 'table-status', title: 'Status moves' },
	{ id: 'table-totals', title: 'Totals' },
	{ id: 'table-upload', title: 'Bulk upload' },
	{ id: 'filters', title: 'Filters' },
	{ id: 'form', title: 'Form' },
	{ id: 'view', title: 'Record page and tabs' },
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
				<strong>More</strong> opens a field’s settings in groups: <em>Rules</em> (each with what it does), <em>How it
				looks</em> (its label, how the table shows it, whether its column shows from the start), <em>Limits</em> or{' '}
				<em>Length</em> for numbers and text, <em>Picking a linked record</em> for record pickers, and — folded away —{' '}
				<em>Advanced</em>: how it’s stored, which details of a linked record are loaded, and the raw settings. Fields marked{' '}
				<em>automatic</em>, like <C>createdAt</C>, are filled in by the system and can’t be changed.
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
				<strong>Colours</strong>, under <em>How it looks</em> for a field with choices — a status, active / inactive, a
				yes / no — turns on <em>Show as coloured tags</em>: the table and the record page show the value as a coloured
				tag. Each option starts with a colour from what it means (paid and active green, void and cancelled red, due and
				pending orange, draft gray); click another swatch to change it, <em>Default</em> to go back.
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
				of one field, and more. Drag to reorder.
			</P>
			<H3>Actions on selected rows</H3>
			<P>
				<strong>Select rows</strong> adds checkboxes and a menu for what’s ticked: export, delete (with undo), duplicate,
				archive, change status, compare, merge duplicates, print, set a field, and totals. Each needs the matching permission —
				see <A href='/records#bulk'>Working on many rows</A>.
			</P>
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
