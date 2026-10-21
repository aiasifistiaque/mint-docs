import Guide from '@/components/docs/Guide';
import { A, C, H3, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/models');

/**
 * The model builder for projects. Section ids mirror the platform's builder
 * guide (models, models-*, features) — the model builder's "How it works"
 * links land here through panel.ts docsPath. Keep them.
 */

const SECTIONS = [
	{ id: 'models', title: 'What a model is' },
	{ id: 'models-wizard', title: 'Creating a model' },
	{ id: 'models-names', title: 'Names and addresses' },
	{ id: 'models-single', title: 'Single types' },
	{ id: 'models-code', title: 'Record numbers' },
	{ id: 'models-fields', title: 'Fields' },
	{ id: 'models-uid', title: 'Address (slug) fields' },
	{ id: 'models-password', title: 'Password fields' },
	{ id: 'models-sections', title: 'Sections and lists' },
	{ id: 'models-components', title: 'Components' },
	{ id: 'models-blocks', title: 'Content blocks' },
	{ id: 'formulas', title: 'Calculated fields' },
	{ id: 'date-formulas', title: 'Formula (date)' },
	{ id: 'models-links', title: 'Linking models' },
	{ id: 'models-access', title: 'Who sees the records' },
	{ id: 'models-signin', title: 'Sign-in' },
	{ id: 'models-drafts', title: 'Drafts and publishing' },
	{ id: 'models-schedule', title: 'Scheduling' },
	{ id: 'changing', title: 'Changing a model' },
	{ id: 'features', title: 'Features built by AI' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const Models = () => (
	<Guide
		href='/models'
		sections={SECTIONS}
		open={{ href: '/model-builder', label: 'Open Models' }}>
		<Section
			id='models'
			title='What a model is'
			lead='A kind of thing your project keeps — customers, products, bookings, invoices.'>
			<P>
				A model is a list of fields. Creating one gives your project everything around it at once: a page in the sidebar with
				a table, search and filters, an add and edit form, a page for each record, a place on the dashboard builder, a
				permission for roles, and — if you want it — a <A href='/public-api'>public API</A>. Nothing to deploy;
				it’s live as soon as it’s created.
			</P>
			<P>
				Models live under <strong>Build → Models</strong> and need the <em>Build</em> permission. They belong to the open
				project only.
			</P>
		</Section>

		<Section
			id='models-wizard'
			title='Creating a model'
			lead='New model opens three short steps. Nothing is created until you press Create on the last one.'>
			<List
				ordered
				items={[
					<>
						<strong>What it stores</strong> — a title (like “Customers”) and the fields every record holds. The form
						people will fill in is drawn beside them as you type. <em>More options</em> holds the rest, which most
						models never need: the model name and address, record numbers, and who sees each record.
					</>,
					<>
						<strong>Check the pages</strong> — the pages made from your fields, one part at a time: an overview, then
						the table page, form, record page, filters, fields &amp; rules and — optional —{' '}
						<A href='/pages#linked-relationships'>Linked Relationships</A> (rules that change the records this one picks,
						like a transfer taking money from one account and giving it to another). <strong>Next</strong> takes you
						through each in turn (the bar shows “part 2 of 7”), and <strong>Preview</strong> shows how they’ll look.
						They’re ready as they are; change anything on the way, with the same tools as{' '}
						<A href='/pages'>Pages</A>. <strong>Finish</strong> opens once you’ve seen every part.
					</>,
					<>
						<strong>Finish</strong> — where it goes in the sidebar, a summary in plain words, and{' '}
						<strong>Create</strong>. Pick a sidebar section, or <strong>+ New section…</strong> at the end of the list
						to name a new one — it’s added to the sidebar and picked. Then add the first record straight away, or open
						the table.
					</>,
				]}
			/>
			<P>
				Going back and adding a field adds it to the pages too; your other changes stay. Progress is kept in your
				browser, so a reload carries on where you were — <em>Start over</em> clears it.
			</P>
			<Note>
				Rather describe it? <A href='/connect-ai'>Connect your own AI</A> — Claude, ChatGPT and others can plan and
				build models in your project from a conversation.
			</Note>
		</Section>

		<Section
			id='models-names'
			title='Names and addresses'>
			<P>
				From a title like “Invoices” the builder makes the name <C>Invoice</C> and the address <C>invoices</C> — the page’s
				address in the panel and the model’s in the public API. Names belong to your project alone: other projects, and the
				platform itself, can have a <C>Client</C> or an <C>Invoice</C> without touching yours. Only if this project already
				has a model by that name is a number added (<C>Invoice2</C>), shown before you save. A few addresses are the
				project’s own — <C>customers</C> is your site’s signed-in customers — so a <C>Customer</C> model keeps its name and
				gets the address <C>customers2</C>.
			</P>
			<P>The name and address are fixed once the model exists. The title can change any time.</P>
		</Section>

		<Section
			id='models-single'
			title='Single types'
			lead='For something there is exactly one of — the site’s settings, an About page, a footer.'>
			<P>
				Under a model’s <strong>Settings → How many records</strong>, pick <strong>Just one</strong>. Its page then opens
				that one record instead of a table — or, before it’s filled in, a <strong>Fill it in</strong> button. A second
				record can’t be added, from the form, a bulk upload or the API.
			</P>
			<P>
				Its API answers with the record itself — <C>GET /site-settings</C> returns <C>{'{ "siteName": … }'}</C>, not a list.
				A model with records can become a single type only while it has one at most.
			</P>
		</Section>

		<Section
			id='models-code'
			title='Record numbers'>
			<P>
				<strong>Give every record a number (code)</strong>, under the model’s <strong>Settings → Record numbers</strong>,
				numbers records as they’re created: a prefix, a dash and a padded number, like <C>INV-0001</C>. Two records created
				at the same moment never share one. Turning numbers on for a model that has records gives them numbers, oldest
				first; a new prefix applies from then on.
			</P>
			<P>
				Switching it on fills in a prefix from the title (Invoices → <C>INV</C>); change it, or clear it for plain numbers (
				<C>0001</C>). <strong>Next record gets</strong> beside it shows exactly what the next record gets.
			</P>
		</Section>

		<Section
			id='models-fields'
			title='Fields'
			lead='Each field has a name, a type, and whether it’s required.'>
			<P>
				<strong>Add a field</strong> first asks what it will hold — text, a number, a date, a choice from a list, an upload,
				a link to another record — each with a line on what it’s for. Type in the search box at the top to narrow the list (Enter picks the best match); then you name it. The type can be changed later in
				the field’s row, and its picture at the start of the row shows the type at a glance.
			</P>
			<P>
				Each field is one line: its name, its type and whether it’s required. Under the name, in small grey letters, is
				its <strong>API name</strong> (the key): how your API, imports and formulas refer to the field. It’s made from the
				name until you change it. Beside it is what the type needs — the model a link points to, a formula, a section’s
				fields — and a short summary of the rest, like <em>default: draft</em> or <em>no duplicates</em>.
			</P>
			<P>
				<strong>Click a field</strong> to open the rest of its settings. The open field is raised and edged in blue so
				it’s easy to tell apart; <strong>Done</strong> or Esc puts it away. Its settings come in groups:{' '}
				<em>In the form</em> (what it starts with — the default — and help text), <em>Limits</em> or <em>Length</em>{' '}
				(lowest/highest, fewest/most characters), the options with their labels, <em>Table and search</em> (a column in the
				table, found by the search box, no duplicates, faster sorting and filtering) and the API name.
			</P>
			<P>
				The <strong>⋯</strong> at the end of a field duplicates it, adds a new field right below it, moves it up or down,
				or removes it. You can also drag it by ⋮⋮.
			</P>
			<P>
				Beside the list, <strong>Form preview</strong> draws the add form from your fields as you edit them — before you
				save. The open field is marked there too, and clicking a field in the preview opens it in the list.
			</P>
			<Terms
				head={['Kind', 'Holds · shows as']}
				rows={[
					['Text', 'A line of text · searchable, sortable'],
					['Long text / Rich text', 'Paragraphs / formatted text with headings, lists and links'],
					['Email', 'An email address, checked and lower-cased'],
					['Link', 'A web address, checked · opens in a new tab'],
					['Number', 'A number, with optional min/max'],
					['Formula (number)', 'A number worked out from other fields (see below)'],
					['Formula (date)', 'A date worked out from other fields — a due date 30 days on, a renewal’s new expiry (see below)'],
					['Yes / No', 'A switch · a Yes/No filter. Left unticked it saves as No — a real answer, so Required never stops the save'],
					['Date', 'A date; the default can be “when created”'],
					['Color', 'A colour, with a picker'],
					['Options', 'One of the values you list (a dropdown) — or several, with “Allow several”'],
					['Tags', 'A list of words, free or from allowed values'],
					['Image / Images', 'One uploaded picture / a gallery · from your Media'],
					['File / Files', 'Uploaded documents · shown on the record page in a section of their own, as icon tiles that open in a new tab'],
					['Video', 'An uploaded video'],
					['Link to a record / records', 'One or more records of another model — a booking’s guest, a post’s tags'],
					['Section / Section list', 'A group of fields, or rows of them (see below)'],
					['Password', 'A login or key you keep for someone — shown as dots until you click the eye (see below)'],
					['SEO', <>A record’s search and share details in one editor — Google and share previews, meta title and description, Open Graph and X cards, indexing, structured data, sitemap. For pages, posts, products · see <A href='/site-builder#page-seo'>A page’s SEO</A></>],
				]}
			/>
			<List
				items={[
					<>
						<strong>Allowed values</strong>: the only values the field takes; the form offers them as a list. Anything else is
						refused.
					</>,
					<>
						<strong>Starts with (default)</strong>: what a new record starts with — prefilled in the form, and used when your
						API call leaves it out.
					</>,
					<>
						Some keys are reserved: <C>_id</C>, <C>code</C>, <C>createdAt</C>, <C>updatedAt</C>, <C>customer</C>, and
						secret-looking names like <C>password</C> or <C>token</C>. Every model gets <C>createdAt</C> and <C>updatedAt</C>{' '}
						on its own.
					</>,
				]}
			/>
		</Section>

		<Section
			id='models-uid'
			title='Address (slug) fields'
			lead='A record’s address on your site, made from its title: “My first post” → my-first-post.'>
			<P>
				Add a field of the kind <strong>Address (slug)</strong> and pick what it’s <strong>made from</strong> — usually the
				title. While you add a record, the address follows the title as you type; type your own to change it. Saved
				addresses don’t move when the title changes later, so links to them keep working.
			</P>
			<Terms
				head={['', '']}
				rows={[
					['Always unique', 'Two records can’t share an address. One made from a title that’s taken gets -2, -3…; one you type that’s taken is refused.'],
					['Tidied', 'Lower case, words joined by dashes, accents dropped (Café → cafe). Bangla and other scripts are kept.'],
					['On the API', <>Filter by it to find a record by its address: <C>?slug=my-first-post</C>.</>],
				]}
			/>
		</Section>

		<Section
			id='models-password'
			title='Password fields'
			lead='For a credential you keep on a record — a client’s portal login, a Wi-Fi key, a supplier account.'>
			<P>
				A field of the kind <strong>Password</strong> shows as dots in tables, on record pages and in the form. Click the eye
				to see it; the copy button copies it without showing it.
			</P>
			<List
				items={[
					<>
						It’s hidden on screen only: anyone who can see the record — in the panel, an export or the API — can read it. Keep
						such models to the people who need them (roles and record access).
					</>,
					<>History says the password changed, never what it was or is.</>,
					<>
						It can’t be unique, searched, sorted or filtered, and has no default. A key that says what it holds (
						<C>password</C>, <C>pin</C>, <C>token</C>) needs this kind — any other kind refuses it.
					</>,
					<>Not for your app’s own sign-in passwords: your site’s customers sign in through the public API’s customer accounts.</>,
				]}
			/>
		</Section>

		<Section
			id='models-sections'
			title='Sections and lists'>
			<P>
				A <strong>Section</strong> groups fields under one key — an address with street, city and postcode. A{' '}
				<strong>Section list</strong> is rows of the same fields, as many as needed — an invoice’s lines, each with an item,
				quantity, rate and total. Choosing either opens its own field editor, starting from an example you can change; the
				row’s “5 fields: …” button opens it again. Inside, fields can be text, long text, email, link, colour, number,
				formula, yes/no, date, options, image or file.
			</P>
		</Section>

		<Section
			id='models-components'
			title='Components'
			lead='A group of fields made once and used by any model — a button, an SEO block, a card.'>
			<P>
				<strong>Build → Components → New component</strong>: give it a title and its fields. Its address —{' '}
				<C>shared.button</C>, <C>seo.meta</C> — is made from a category and a name and stays fixed. A component’s fields can be
				text, rich text, pictures, files, choices, numbers, dates and the rest, a group or list of rows, links to records, and
				other components (see below).
			</P>
			<P>
				To use one, add a field of the kind <strong>Component</strong> to a model and pick it — <strong>One</strong> (a
				page’s main button) or <strong>A list</strong> (its row of buttons, with at least / at most under More). The form
				shows its fields together under the field’s name; the API sends it as an object, or a list of them.
			</P>
			<Terms
				head={['', '']}
				rows={[
					['Change it once', 'Every model using it follows: its form, its record page and its API.'],
					['Left blank', 'A component nobody filled in is simply empty — its own required fields only count once something is typed in it.'],
					['Deleting', 'Not while a model or another component uses it — the message names where. Take it off those fields first.'],
				]}
			/>
			<H3 id='models-components-nesting'>Links and components inside a component</H3>
			<P>
				A component can link to records — a <strong>Featured product</strong> with a <strong>Product</strong> field
				(Link to a record) and <strong>Also try</strong> (Link to records). The form gets the same record picker as
				anywhere else; the record page and the API give the linked records’ names.
			</P>
			<P>
				A component can also hold another one — a <strong>Call to action</strong> inside the Featured product, once or as
				a list. Only one level deep: the inner component’s fields must all be plain (no groups or components of their
				own), and a component that sits inside another stays that way. Changing the inner one reaches every model using
				the outer one.
			</P>
			<H3 id='models-image-details'>Image fields with details</H3>
			<P>
				An <strong>Image</strong> or <strong>Images</strong> field stores the picture’s address. Turn on{' '}
				<strong>Send each picture with its details</strong> (in the field’s options, under On the API) and the API answers
				with the media library’s details instead: <C>{'{ "url": "…", "alt": "…", "caption": "…", "width": 1600, "height": 900, "focal": { "x": 0.33, "y": 0.7 } }'}</C>.
				It works inside sections, components and content blocks too. A picture that isn’t in the library comes with empty
				details. Set the details in <A href='/media#image-details'>Media</A>.
			</P>

			<H3 id='models-components-reusable'>Make a section reusable</H3>
			<P>
				Made a <strong>Section</strong> or <strong>Section list</strong> in one model and want it in another? On the
				model’s Fields tab, <strong>Make reusable</strong> under it turns it into a component — give it a title and an
				address. The field then uses that component (once, or as a list, as before), its records stay exactly as they
				were, and any other model can pick it. Save other changes to the model first — it’s made from the model as saved.
			</P>
		</Section>

		<Section
			id='models-blocks'
			title='Content blocks'
			lead='A field of components in any order — a page’s hero, text, questions, a button.'>
			<P>
				Add a field of the kind <strong>Content blocks</strong> and pick the components it takes (they’re made under{' '}
				<A href='#models-components'>Components</A>). Whoever fills in a record then builds it from those: <strong>Add</strong>{' '}
				offers each one, every block opens to its own fields, and the arrows move it up or down; copy and remove are beside
				them. Under More, <strong>How many</strong> sets at least / at most.
			</P>
			<P>
				Each block is checked as its component — its required fields, its options — and keeps a <C>_key</C> however it moves.
				The API sends them in order: <C>{'[{ "__component": "content.hero", "_key": "4uh57zhf", "heading": "…" }, …]'}</C>.
				Changing a component changes its blocks in every model that takes it.
			</P>
		</Section>

		<Section
			id='formulas'
			title='Calculated fields'
			lead='A Formula (number) field works itself out from other number fields.'>
			<P>
				The formula sits at the bottom of the dialog, locked — it’s built by clicking, not typed. The line on top says what
				to pick next, and whatever you pick goes into the highlighted box: a field from <em>Fields</em>, a number or text
				from <em>Values</em>, + − × ÷ or <em>Round</em> from <em>Calculate</em>, or <em>If</em> from <em>Decide</em>. Pick{' '}
				<em>If</em> and it asks for the condition — pick <em>Discount type</em> and choose <em>Percentage</em> from its
				values — then the value, then the value otherwise; <em>Otherwise if</em> checks another condition first. Right
				after a field or number, + − × ÷ keep calculating with it. Click any part of the formula to change it (click the
				sign between two parts to work on both); <em>Remove</em> or Backspace empties it, and <em>Undo</em> takes a step
				back. It can’t be saved while a box is empty. <em>Type it yourself</em> unlocks it to type by hand — the buttons
				then go in at the cursor — and <em>Back to buttons</em> locks it again.
			</P>
			<P>
				Build it from the field list, the operators (+ − × ÷ %, brackets) and functions (<C>round</C>, <C>floor</C>,{' '}
				<C>ceil</C>, <C>abs</C>, <C>min</C>, <C>max</C>), or type it: <C>total - paid</C>,{' '}
				<C>round(price * qty * 1.05, 2)</C>. Over a section list, <C>sum(items.total)</C>, <C>avg(items.total)</C> and{' '}
				<C>count(items)</C>; a formula inside a row uses that row’s values (<C>quantity * rate</C>). <em>Try it</em> works it
				out on sample numbers. Use a field as many times as you need — <C>price * qty + price</C>.
			</P>
			<P>
				<strong>Conditions</strong> pick between two calculations with <C>if(condition, then, otherwise)</C>. A discount that
				is either flat or a percentage, with a <em>Discount type</em> choice field:{' '}
				<C>subtotal - if(discountType = &quot;percentage&quot;, subtotal * discount / 100, flatDiscount)</C>. Compare with{' '}
				<C>=</C> <C>!=</C> <C>&lt;</C> <C>&lt;=</C> <C>&gt;</C> <C>&gt;=</C>, join conditions with <C>and</C> / <C>or</C>,
				turn one round with <C>not(…)</C>, and put text in quotes. Text is compared ignoring capitals and spaces at the
				ends. A choice, text or yes / no field can be compared, or used as the condition itself —{' '}
				<C>if(isVip, 5, 0)</C> holds when it’s ticked. Put an <C>if</C> inside another for more than two cases:{' '}
				<C>if(tier = &quot;gold&quot;, 20, if(tier = &quot;silver&quot;, 10, 0))</C>. Only the part the condition picks is
				worked out, so <C>if(qty &gt; 0, total / qty, 0)</C> never divides by 0.
			</P>
			<P>
				Through a <A href='#models-links'>link to a record</A>, a formula reads that record’s numbers: with a <em>Tax</em> link,{' '}
				<C>price * qty + tax.amount</C> adds the amount of the Tax picked. The field list offers them as{' '}
				<em>Tax › Amount</em> — in the model builder, and in a page’s <em>Fields &amp; rules</em> tab too. No Tax picked counts as 0. When someone changes the Tax’s amount, every record that picks
				it is recalculated straight away; if the Tax is deleted, it counts as 0 for them.
			</P>
			<P>
				A formula field can’t be typed into: forms show the result as you type, and the server calculates it on every save —
				from the panel and from your API alike. Changing a formula recalculates existing records. Empty counts as 0; dividing
				by 0 leaves it empty.
			</P>
			<P>
				A number formula can count days between two dates: <C>daysBetween(today(), expiresAt)</C> gives the days left
				on a membership. For a date itself, use a Formula (date) — a type of its own.
			</P>
		</Section>

		<Section
			id='date-formulas'
			title='Formula (date)'
			lead='A Formula (date) field works out a date: a due date, an expiry, a renewal. It’s a type of its own, beside Formula (number).'>
			<P>
				It’s built the same way as a formula, with a <em>Dates</em> row of buttons: <em>Today</em>, <em>Add days</em>,{' '}
				<em>Add weeks</em>, <em>Add months</em>, <em>Add years</em>, <em>Add…</em> (the unit from a field),{' '}
				<em>Latest of</em> and <em>Earliest of</em>. Some examples:
			</P>
			<List
				items={[
					<>
						<C>addDays(invoiceDate, 30)</C> — due 30 days after the invoice date. A number below 0 goes back in time.
					</>,
					<>
						<C>addMonths(joinedAt, plan.months)</C> — a month count read from the plan the record links to. 31 January plus
						one month is the end of February.
					</>,
					<>
						<C>add(startDate, plan.length, plan.unit)</C> — when the plan says how long in a field (<em>30</em>) and in what
						(<em>days</em>, <em>weeks</em>, <em>months</em> or <em>years</em>) in another.
					</>,
					<>
						<C>latest(member.expiresAt, today())</C> — the later of the two; an empty date is left out.
					</>,
					<>
						<C>if(status = &quot;paid&quot;, addYears(paidOn, 1), addDays(today(), 7))</C> — one date or another, by a
						condition. Dates can be compared too: <C>expiresAt &lt; today()</C>.
					</>,
				]}
			/>
			<P>
				<strong>Work it out</strong>, under the formula, says when:
			</P>
			<Terms
				head={['Choice', 'What it does']}
				rows={[
					['Every time the record is saved', 'Like a formula: it follows the fields it reads, and moves when they change.'],
					[
						'Once, when the record is added',
						'Worked out when the record is added, then kept. Records that were there before the field get theirs when you save the model. Use it with today() or a linked record’s date, which keep changing.',
					],
				]}
			/>
			<P>
				A date it needs that’s empty leaves the Formula (date) empty. Dates are worked out in UTC.
			</P>
			<H3 id='date-formulas-renewal'>A membership renewal</H3>
			<P>
				A gym wants a renewal to add the plan’s length after the current expiry, or after today if the membership has
				already run out:
			</P>
			<List
				items={[
					<>
						<strong>Plans</strong>: Name, Price, Length (a number) and Unit (options: days, months).
					</>,
					<>
						<strong>Members</strong>: Name, Plan (a link), Fee and Expires at (a date).
					</>,
					<>
						<strong>Renewals</strong>: Member and Plan (links), and <em>Renewed until</em>, a Formula (date) worked out{' '}
						<em>once</em>: <C>add(latest(member.expiresAt, today()), plan.length, plan.unit)</C>.
					</>,
					<>
						On the Renewals page, a <A href='/pages#linked-relationships'>Linked Relationship</A> when a renewal is added:
						change the Member — Expires at <em>Copy from</em> Renewed until, Fee <em>Copy from</em> Plan › Price.
					</>,
				]}
			/>
			<P>
				A member who expires on 30 November and renews on 19 October for a month runs to 30 December; one who expired in
				September runs to a month from today. Deleting the renewal puts the old expiry back.
			</P>
		</Section>

		<Section
			id='models-links'
			title='Linking models'
			lead='A “Link to a record” field connects two models.'>
			<P>
				A booking links to its guest; an order to its customer; a page to its parent page. The form shows a picker, the table
				shows the linked record by its <strong>display field</strong> (the first text field unless you choose), and the linked
				record’s page can list everything pointing at it as a tab — a guest’s bookings. A model others link to can’t be
				deleted until those fields are removed.
			</P>
		</Section>

		<Section
			id='models-access'
			title='Who sees the records'
			lead='Your role and your projects decide — and, where a model needs it, each record.'>
			<P>
				In your organization, a model’s records are open to everyone who can open the project and whose role has{' '}
				<em>Records: View</em> (Add, Edit and Delete likewise). To keep people to some work, give them only the projects it’s
				in — see <A href='/organization#project-access'>Which projects people open</A>.
			</P>
			<P>
				For confidential records — salaries, contracts, personal notes — switch on{' '}
				<strong>Let each record choose who can see it</strong>, under the model’s{' '}
				<strong>Settings → Who sees each record</strong>. Every record then has an owner (whoever
				created it) and a privacy, chosen in the form’s <em>Manage access</em> section:
			</P>
			<Terms
				head={['Privacy', 'Who sees the record']}
				rows={[
					['Only me', 'Its owner alone.'],
					['Private', 'Its owner and the people they add — anyone in the organization who can open this project.'],
					['Public', 'Everyone who can view the model’s records.'],
				]}
			/>
			<P>
				Only the owner can change who has access, or delete the record. The table gains Privacy and Owner columns and filters.
				Records that existed before you switched it on become Public, so nobody loses sight of them. Your{' '}
				<A href='/public-api'>public API</A> only ever reaches records marked Public, and anything your site sends in
				is Public.
			</P>
			<P>
				For the people using your site or app it’s different: a public model can be set to{' '}
				<A href='/public-api#who'>customers’ own records only</A>, so each customer sees just what they created.
			</P>
		</Section>

		<Section
			id='models-signin'
			title='Sign-in'
			lead='Let people sign up and sign in to your site or app as one of a model’s records.'>
			<P>
				On a model’s <strong>Advanced</strong> tab, switch on <strong>People can sign up and sign in</strong>. The model can then
				hold the customers of your <A href='/widgets#login-customers'>Login widget</A>: pick it in the widget’s setup. Models
				with the switch off aren’t offered there.
			</P>
			<List
				items={[
					<>A project has one sign-in model. To tell kinds of customers apart (customer, seller, picker), give it an Options field such as Customer role — see <A href='/widgets#login-roles'>Customer roles</A>.</>,
					<>The model needs an Email (or Text) field, because people sign in with it.</>,
					<>It must be a list. A single type holds one record, so it can’t hold accounts.</>,
					<>Passwords are never stored in the records. MINT keeps them safely, apart from your data.</>,
					<>While the Login widget uses the model, the switch can’t be turned off. Choose another model, or MINT’s Customers, in the widget first.</>,
				]}
			/>
		</Section>

		<Section
			id='models-drafts'
			title='Drafts and publishing'
			lead='Edit as much as you like; your site and API change when you press Publish.'>
			<P>
				Turn on <strong>Records are drafts until published</strong> in a model’s Settings (Drafts and publishing). Its records
				are then drafts: saving changes what you see in the panel, but your site, the <A href='/public-api'>public API</A> and
				its filters, sorting and search keep using what was last published. Turning it on publishes the records already
				there, so nothing leaves your site.
			</P>
			<P>Each record’s page says where it stands, beside its title, with the buttons that move it:</P>
			<Terms
				head={['It says', 'What it means']}
				rows={[
					['Draft', 'Never published — not on the site or API. Publish puts it there.'],
					['Published', 'Live, and the same as what you see.'],
					[
						'Changes not published',
						'Live, but edited since. Publish puts the changes live; Discard changes brings the record back to what’s published.',
					],
				]}
			/>
			<P>
				<strong>Take off</strong> removes a record from the site and API and keeps it as a draft. Links to other records,
				numbers and History stay as they are whatever you do.
			</P>
			<P>
				<strong>All content</strong>, straight after the Dashboard in the sidebar, gathers it: the website’s Contents, your
				single types, and every model with drafts — how many records each has, how many aren’t live, what changed last. In a
				model’s table, the <strong>Status</strong> column says where each record stands and its filter shows just the drafts or
				the changed ones; tick rows and <strong>Menu → Publish</strong> puts them live together. A record’s page says when it was
				last published and by whom. In any form, <strong>⌘S</strong> (Ctrl+S) saves.
			</P>
			<P>
				Publishing is a right of its own: <strong>Publish</strong> on a role (the standard roles have it), or ticked per model on
				a <A href='/organization#project-roles'>project’s own role</A>. Someone who can edit but not publish writes drafts, and
				the record page tells them someone who can publish puts it live. Turning drafts on for a model gives Publish to the
				project roles that could edit it, so nobody loses what they could do.
			</P>
		</Section>

		<Section
			id='models-schedule'
			title='Scheduling'
			lead='Set a record to go live at a time, to come off at a time, or both.'>
			<P>
				On a record’s page, <strong>Schedule</strong> (beside Publish) asks for two times, in your own time zone:
			</P>
			<Terms
				head={['Time', 'What happens then']}
				rows={[
					['Publish at', 'The draft as it is at that time goes live — edits you make before then go with it.'],
					['Take off at', 'It leaves your site and API. The draft stays in the panel. It has to be after Publish at, and needs the record live or a publish before it.'],
				]}
			/>
			<P>
				Either one can be left empty; the × beside a time clears it. Once set, the button says what’s next (“Publishes 20 Oct,
				09:00”) and the record’s page says it under the title. <strong>All content</strong> lists what’s coming up across the
				project, soonest first. Times can be up to two years ahead.
			</P>
			<P>
				It happens within a minute of the time, as the person who set it: History shows “published … as scheduled”, the
				project’s <A href='/public-api#webhooks'>publish and unpublish webhooks</A> go out (their <code>source</code> is{' '}
				<code>schedule</code>), the site refreshes, and the person who set it gets a notification. If it can’t happen — drafts
				were turned off on the model, say — they’re told why instead. A record deleted before its time simply isn’t published.
			</P>
			<Note>
				Scheduling needs the <strong>Publish</strong> right, like Publish itself. Your <A href='/connect-ai'>connected AI</A>{' '}
				can schedule too — “publish it on Monday at 9” — when its key can publish.
			</Note>
		</Section>

		<Section
			id='changing'
			title='Changing a model'
			lead='Open it from Build → Models. Changes apply as soon as you save.'>
			<P>A model’s page has four tabs:</P>
			<Terms
				head={['Tab', 'What’s there']}
				rows={[
					['Fields', 'The fields, in order, and the form preview beside them. Page layout opens the table, form and record page designer.'],
					['Settings', 'Basics (title, record name, sidebar, description), Record numbers and Who sees each record.'],
					['Connections', 'What this model links to, and which models link to it.'],
					['Advanced', 'The fixed names (model name, address, collection, version), and Turn off or delete.'],
				]}
			/>
			<P>
				Edits are kept until you click <strong>Save changes</strong> — in the header, in the bar that appears at the bottom
				while something is unsaved, or with ⌘S / Ctrl+S. <strong>Undo all</strong> goes back to the saved model. A tab
				with a red number has fields that need attention.
			</P>
			<List
				items={[
					'Adding a field is always safe; it appears in the table, form, detail page and filters straight away.',
					'Removing a field hides it: the values stay in the records but aren’t shown or returned. Add it back to see them.',
					'Changing a field’s kind is flagged: old values stay as they were and may not read correctly as the new kind.',
					'Making a field unique fails if records already share a value — you’re told which.',
					'Every change is kept as a version before it’s applied.',
				]}
			/>
			<H3>Turning off and deleting</H3>
			<P>
				Both are on the <strong>Advanced</strong> tab. <strong>Turn off</strong> takes the page away but keeps the model
				and its records. <strong>Delete</strong> removes the
				model, its page and its sidebar entry; its records stay unless you tick “Also delete its records” and type the model’s
				name.
			</P>
		</Section>

		<Section
			id='features'
			title='Features built by AI'
			lead='Several linked models at once — a whole feature from one description.'>
			<P>
				When your <A href='/connect-ai'>connected AI</A> builds a feature — say “bookings with guests, rooms and
				payments” — it makes the models, the links between them and the tabs on their pages in one go, all or nothing.{' '}
				<strong>Models → Features</strong> lists every feature built, with links to what it made. Everything it made can be
				changed afterwards like any other model.
			</P>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['Symptom', 'Why, and what to do']}
				rows={[
					['There’s no Build section', 'Your role lacks the Build permission.'],
					['The name got a 2 on the end', 'The project already has a model by that name. Change the title, or keep it.'],
					['“Isn’t a number field” in a formula', 'Formulas only use number (and formula) fields.'],
					['“Works out a date” in a Formula (number)', 'A Formula (number) holds a number. Make the field a Formula (date), or use daysBetween(…) for a number of days.'],
					['“Not with + − × ÷” in a Formula (date)', 'Dates move with Add days, Add months… — addDays(start, 30), not start + 30.'],
					['Making a field unique failed', 'Some records share a value. Fix them, then try again.'],
					['I can’t delete a model', 'Another model links to it. Remove that link field first.'],
					['A teammate doesn’t see the new page', 'Their role needs Records: View, and the project must be one of theirs.'],
				]}
			/>
		</Section>
	</Guide>
);

export default Models;
