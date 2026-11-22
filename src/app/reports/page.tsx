import Guide from '@/components/docs/Guide';
import { C, List, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/reports');

/**
 * Reports, panel users and panel roles (backend docs/panel-users). Section ids
 * are targets of the tenant panel's GuideLink (reports, run-report,
 * build-report, panel-app, panel-users, demo-login, panel-roles, super-admin, panel-ai) —
 * keep them in step with mint-tenant GuideLink.tsx GUIDE_OF.
 */

const SECTIONS = [
	{ id: 'reports', title: 'Reports' },
	{ id: 'run-report', title: 'Running and downloading' },
	{ id: 'build-report', title: 'Making a report' },
	{ id: 'report-kinds', title: 'List, Summary, Over time' },
	{ id: 'panel-app', title: 'The panel app' },
	{ id: 'panel-users', title: 'Panel users' },
	{ id: 'demo-login', title: 'Demo login' },
	{ id: 'panel-roles', title: 'Panel roles' },
	{ id: 'super-admin', title: 'Super admins' },
	{ id: 'panel-ai', title: 'Panel users’ own AI' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const Reports = () => (
	<Guide
		href='/reports'
		sections={SECTIONS}
		open={{ href: '/reports', label: 'Open Reports' }}>
		<Section
			id='reports'
			title='Reports'
			lead='Reports → Reports lists the reports your project has, grouped by category.'>
			<P>
				A report is a saved way of looking at one model’s records — every animal with its shed and cost, milk collected per
				day, expenses by category. Your developers make them once; anyone allowed opens one, picks the dates and reads or
				downloads it. A report never shows anyone more than they could see in that model’s table: fields hidden from them,
				archived records and records outside their access stay out.
			</P>
		</Section>

		<Section
			id='run-report'
			title='Running and downloading'
			lead='Open a report, pick the dates, read the rows, download.'>
			<List
				items={[
					<>
						<strong>Dates</strong>: it opens on its own range (this month, the last 30 days…). Pick another — Today, Last 7, 30
						or 90 days, This month, This year, All time — or set <strong>From</strong> and <strong>To</strong>.
					</>,
					<>
						<strong>Rows and totals</strong>: numbers are right-aligned and the <em>Total</em> row is in bold.
					</>,
					<>
						<strong>Download</strong>: the CSV, Excel and PDF buttons the report allows — the same rows and totals as on
						screen, for the dates you picked.
					</>,
				]}
			/>
		</Section>

		<Section
			id='build-report'
			title='Making a report'
			lead='New report on the Reports page — for people with the Build permission.'>
			<Terms
				rows={[
					['Name, description, category', 'How it’s listed; reports with the same category sit together.'],
					['Model', 'Whose records it reads.'],
					['Kind', 'List, Summary or Over time — below.'],
					['Which records', <>Conditions that always apply — status <C>is</C> sold, due <C>is more than</C> 0, next due <C>has a value</C>.</>],
					['Dated by', 'The date the From / To range uses — when the record was made, or a date field like Date or Purchase date — and the range it opens on.'],
					['Download', <>Turn <strong>Can be downloaded</strong> on and pick CSV, Excel and/or PDF; off, it can only be read on screen.</>],
					['Preview', 'The report with real records as you set it up.'],
				]}
			/>
		</Section>

		<Section
			id='report-kinds'
			title='List, Summary, Over time'
			lead='Three kinds of report.'>
			<Terms
				rows={[
					['List', 'The records as rows, with the columns you pick, sorted how you like, and a Total row for the number columns you choose.'],
					['Summary', 'One row per value of a field — per shed, per breed, per category — with how many records and the totals you choose.'],
					['Over time', 'One row per day, week, month or year of the date field, with how many records and the totals you choose.'],
				]}
			/>
		</Section>

		<Section
			id='panel-app'
			title='The panel app'
			lead='Panel users work in their own app: panel.tcrypt.site.'>
			<P>
				It shows one project — its tables, dashboard and reports — without any of the building tools. People sign in there
				with the username and password you give them on the Panel users page (an email you gave them signs in too). A
				store’s people sign in to the commerce panel instead; each panel sends the other’s logins to the right place.
			</P>
		</Section>

		<Section
			id='panel-users'
			title='Panel users'
			lead='Team → Panel users: the people who use your project but never build it.'>
			<List
				items={[
					<>
						<strong>Add a login</strong>: name, username, password, and optionally email and phone, and what they may do —
						a panel role, or <em>Super admin</em>.
					</>,
					<>
						<strong>Username</strong>: what they sign in with — letters, numbers and . _ - @ +. The email, if you give one,
						signs in too. A username (or email) is a login to one project only. Logins made before usernames use their email
						as their username.
					</>,
					<>
						From a row’s menu: <em>See permissions</em> (what their role lets them do, table by table), <em>Change role</em>, <em>Change username or email</em>, change the password, turn the login off, or remove it.
					</>,
					<>Panel users never get developer (Build) access, whatever their role.</>,
				]}
			/>
		</Section>

		<Section
			id='demo-login'
			title='Demo login'
			lead='One link that opens your panel signed in, with no password: for showing your work on your website.'>
			<P>
				On the Panel users page (Store logins for a store), <em>Make a demo login</em> and pick what visitors may see: a
				panel role, <em>Everything</em> (every table and report), or for a store, the store admin set. You get a link. Put
				it behind a button on your website. Anyone who opens it lands in the panel app (the commerce panel for a store) a
				moment later, after a short “Signing you in” screen.
			</P>
			<List
				items={[
					<>
						<strong>One hour</strong>: each visit lasts an hour. Then the panel shows <em>Your demo has ended</em> with a{' '}
						<em>Start the demo again</em> button, which opens the link for another hour.
					</>,
					<>
						<strong>Signs out first</strong>: whoever was signed in on that browser is signed out before the demo starts.
					</>,
					<>
						<strong>What visitors can change</strong>: whatever the access you picked allows. To keep your data as it is,
						pick a role that only views. A demo can never manage panel users, change a password, or make AI keys, even
						with Everything.
					</>,
					<>
						From the card: <em>Copy</em> or <em>Open</em> the link; from its menu, <em>Change what visitors see</em>,{' '}
						<em>Make a new link</em> (the old link stops and open demos are signed out), <em>Switch off</em> /{' '}
						<em>Switch on</em>, or <em>Remove</em>.
					</>,
					<>One demo login per project. Only you and your project’s managers see it; panel super admins don’t.</>,
				]}
			/>
		</Section>

		<Section
			id='panel-roles'
			title='Panel roles'
			lead='Team → Panel roles: what a panel user may do.'>
			<P>
				Give a role a name and description, then tick per model what it may do with the records — view, add, edit, delete,
				publish — and with reports: <strong>view reports</strong>, and <strong>download reports</strong>. Adding, editing,
				deleting and downloading include viewing. A panel user sees only the models, pages and reports their role allows.
			</P>
			<List
				items={[
					<>
						<strong>Select all</strong> ticks everything at once; a row’s <strong>All</strong> box ticks every action
						on that model (say all four on Leads), and a column heading ticks that action on every model. A dash means
						some are ticked.
					</>,
					<>
						<strong>Analytics</strong>: in a website or store project, tick View on the Analytics row to let the role
						open the site’s visitor analytics — they also see the last 30 days of Traffic on their dashboard.
					</>,
				]}
			/>
		</Section>

		<Section
			id='super-admin'
			title='Super admins'
			lead='A panel user who manages the others.'>
			<P>
				A super admin sees and works on every table and report of the project, and also makes panel roles and other panel
				users from their own panel (Team → Panel users / Panel roles) — so the farm owner or office manager can run their
				team without you. They still can’t build.
			</P>
		</Section>

		<Section
			id='panel-ai'
			title='Panel users’ own AI'
			lead='Connect AI in the panel app.'>
			<P>
				A panel user can connect their own AI (Claude, ChatGPT…) from <em>Connect AI</em> in the panel app. It works with
				exactly their role’s permissions: read and change the records they may, list and run reports, and — for a super
				admin — manage panel roles and users. It can’t build models or pages.
			</P>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['Symptom', 'Why, and what to do']}
				rows={[
					['A panel user doesn’t see Reports', 'Their role needs “view reports”, and view on the report’s model.'],
					['No download buttons', 'The report can’t be downloaded, or their role lacks “download reports”.'],
					['“That username is taken”', 'Usernames and emails are unique across every project — pick another.'],
					['“Taking you there…” at sign-in', 'The login belongs to the other app — the commerce panel for a store, the panel app otherwise; it sends you on.'],
					['“This demo didn’t open”', 'The demo link was switched off, removed or replaced by a new link — copy the current link from the Demo login card.'],
					['A demo ends in the middle of a visit', 'Each visit lasts an hour. Start the demo again, or open the link again, for another hour.'],
					['A report is missing rows', 'Check its conditions and dates; archived records and records outside the reader’s access never show.'],
				]}
			/>
		</Section>
	</Guide>
);

export default Reports;
