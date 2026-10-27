import Guide from '@/components/docs/Guide';
import { A, C, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/automations');

/** Automations (backend docs/automations): triggers, conditions, actions, emails (AU-03c), trying one, runs. Sections are GuideLink targets. */

const SECTIONS = [
	{ id: 'automations', title: 'What an automation is' },
	{ id: 'automation-trigger', title: 'When it runs' },
	{ id: 'automation-conditions', title: 'Only if' },
	{ id: 'automation-actions', title: 'What it does' },
	{ id: 'automation-placeholders', title: 'Filling in the record' },
	{ id: 'automation-emails', title: 'Writing, seeing and resending emails' },
	{ id: 'automation-try', title: 'Trying one on a record' },
	{ id: 'automation-runs', title: 'Runs' },
	{ id: 'automation-limits', title: 'Limits and loops' },
];

const Automations = () => (
	<Guide
		href='/automations'
		sections={SECTIONS}
		open={{ href: '/automations', label: 'Open Automations' }}>
		<Section
			id='automations'
			title='What an automation is'
			lead='Build → Automations, inside a project. For roles with Build.'>
			<P>
				An automation reads like a sentence: <em>when a Deal is changed and its Status is Won, notify Gus, update its Client and
				add a Task.</em> It runs on its own every time a record of that page is saved — in the panel, through your public API or
				your site’s checkout — so nobody has to remember to do it.
			</P>
			<P>
				It runs <strong>after</strong> the record is saved, in the background. The save never waits for it and never fails
				because of it; if an action can’t be done, the run is marked failed and Runs says why. If the record mustn’t save
				without the other change — taking stock off a product, marking an invoice paid — use a{' '}
				<A href='/pages#linked-relationships'>Linked Relationship</A> instead.
			</P>
			<P>Each automation has its own on/off switch on the list, and shows how its last run went.</P>
		</Section>

		<Section
			id='automation-trigger'
			title='When it runs'
			lead='A page, and whether its records are created, changed or deleted.'>
			<List
				items={[
					<>
						<strong>Created</strong> — a new record, from the form, an import, the API or another automation.
					</>,
					<>
						<strong>Changed</strong> — tick fields under it to run only when one of them changes (Status), not on every
						edit.
					</>,
					<>
						<strong>Deleted</strong> — the record is gone, but its last values can still be used (an email saying which order
						was cancelled).
					</>,
				]}
			/>
		</Section>

		<Section
			id='automation-conditions'
			title='Only if'
			lead='Conditions on the record, as it was saved.'>
			<P>
				Add conditions to run only sometimes — Status is Won, Amount is more than 1000. All of them must hold, or switch to
				any one. Without conditions it runs every time.
			</P>
		</Section>

		<Section
			id='automation-actions'
			title='What it does'
			lead='Up to ten actions, in order. If one fails, the rest don’t run.'>
			<Terms
				head={['Action', 'What it does']}
				rows={[
					['Notify people', 'A notification in the panel for the people you pick in the project, or whoever made the change. It opens the record.'],
					[
						'Send an email',
						'Through your organization’s own email server (Organization → Email). To people in the project, the address in a field — the record’s own Email, or one of a record it links to (a bill’s Customer → Email) — or up to 10 addresses you type. It goes out in the project’s email design, or one you pick (Email → How your emails look). Attach PDFs adds up to 3 of the page’s published PDF templates, printed for the record — a bill’s invoice to its customer. (A template that’s removed or back to draft stops the email, and Runs says why.)',
					],
					[
						'Call a webhook',
						'POSTs the record as JSON to your server, signed with the automation’s secret in x-mint-signature — checked the same way as project webhooks.',
					],
					['Update a record', 'Sets fields on this record, or on the record it links to (a Deal’s Client) — to a value, a copy of one of its fields, or empty.'],
					['Create a record', 'Adds a record to another page — a Task for every won Deal. “This Deal itself” links the new record back.'],
				]}
			/>
			<Note>
				Changes made by an automation show in History as “Automation “Won deal” updated …”, and can start other automations
				in turn.
			</Note>
		</Section>

		<Section
			id='automation-placeholders'
			title='Filling in the record'
			lead='Any text — a title, a subject, a value to set — can carry the record’s fields.'>
			<P>
				Write a field’s key in double braces, or pick it from <strong>Insert a field</strong>: <C>{'{{title}} was won'}</C>{' '}
				becomes “Big order was won”. A linked record shows by its name, a date by its day.
			</P>
			<P>
				A linked record’s other details work too: <C>{'{{member.email}}'}</C> or <C>{'{{member.phone}}'}</C> on a Task that
				picks a Member gives that member’s email or phone. Insert a field lists them right under the link, as{' '}
				<strong>Member › Name</strong>, <strong>Member › Email</strong> and so on (the click menu in an email has a search box). If a field picks several records, their details are joined with commas. One
				level only — a member’s company’s address can’t be reached this way.
			</P>
			<Terms
				head={['Also', 'Becomes']}
				rows={[
					[<C key='l'>{'{{link}}'}</C>, 'The record’s address in the panel'],
					[<C key='p'>{'{{page}}'}</C>, 'The page’s name — Deal'],
					[<C key='pr'>{'{{project}}'}</C>, 'The project’s name'],
					[<C key='a'>{'{{actor}}'}</C>, 'Who saved the record'],
					[<C key='e'>{'{{event}}'}</C>, 'created, changed or deleted'],
					[<C key='t'>{'{{today}}'}</C>, 'Today’s date'],
				]}
			/>
			<P>A name that isn’t a field is refused when you save, under the box it’s in.</P>
		</Section>

		<Section
			id='automation-emails'
			title='Writing, seeing and resending emails'
			lead='The email’s message is plain text with a little formatting, and every email an automation sends is kept so you can see it.'>
			<P>
				<strong>Writing.</strong> Click anywhere in the message: the cursor goes where you clicked and a small menu opens
				there — <strong>Insert a field</strong> puts one in at the cursor (or over the words you selected), and{' '}
				<strong>B</strong>, <strong>I</strong> and the list button make the selected words bold, italic or a bulleted list.
				Right-click opens the same menu; ⌘B / Ctrl+B and ⌘I / Ctrl+I work without it, and typing closes it. The subject’s
				Insert a field also puts the field where the cursor is. The AI connected to your project can write and change automations for you too — see{' '}
				<A href='/connect-ai#tools'>Connect AI</A>.
			</P>
			<Terms
				head={['You write', 'The email shows']}
				rows={[
					[<C key='b'>{'**thank you**'}</C>, <strong key='b2'>thank you</strong>],
					[<C key='i'>{'*really*'}</C>, <em key='i2'>really</em>],
					[<C key='l'>{'- One cake'}</C>, 'A bulleted line — lines starting with “- ” in a row make one list'],
					[<C key='a'>{'[Unsubscribe](https://example.com/unsubscribe?code={{code}})'}</C>, 'A link: the words in square brackets, going to the address in round ones — the address may hold fields'],
					['A blank line', 'A new paragraph'],
				]}
			/>
			<P>
				<strong>Preview</strong>, under the message, shows how it reads, with each field as a grey chip. A value from the
				record is never treated as formatting — a name with a * in it stays as it is.
			</P>
			<P>
				<strong>Seeing them.</strong> Open a run in <A href='#automation-runs'>Runs</A>: the emails it sent are listed under
				it, each with whether it went. The eye opens the email as it went out — to whom, the subject, the files it carried,
				the message in your email design (or as plain text), and why it failed if it did. Project → Email’s{' '}
				<A href='/email#email-log'>What was sent</A> has the same eye.
			</P>
			<P>
				<strong>Resending.</strong> A failed email has <strong>Resend</strong>, there and in the eye’s window. It sends the
				same subject, message and files again through the project’s email account as it is now — fix the address’s mailbox
				or connect an account first, then resend. The new attempt is listed as “A resend”; the failed one shows Resent (or
				Resend failed, and you can try again). An email that went can’t be resent, and resends count toward the 300 a day.
			</P>
			<Note>
				When one of several addresses fails, the others still get theirs; the run is marked failed and the next actions don’t
				run. An email with no account to go through is listed as failed too, so it can be resent once one is connected.
			</Note>
		</Section>

		<Section
			id='automation-try'
			title='Trying one on a record'
			lead='The flask button on the list.'>
			<P>
				Pick a record and see what each action would do: who’d be notified or emailed, what would be updated or added — and
				whether the conditions hold for it. Nothing is sent, changed or added.
			</P>
		</Section>

		<Section
			id='automation-runs'
			title='Runs'
			lead='The Runs tab: every run in the last 30 days.'>
			<P>
				Each run says which automation ran on which record, who saved it, and each action’s result. A failed run shows why —
				“Set up your email first”, “your server answered 500”. Filter by automation or result. A run that sent emails lists
				them, with the eye and Resend (see <A href='#automation-emails'>emails</A>).
			</P>
		</Section>

		<Section
			id='automation-limits'
			title='Limits and loops'
			lead='So one mistake can’t run away.'>
			<List
				items={[
					'An automation’s change can start another automation — three deep at most. The fourth is skipped, and Runs says so.',
					'The same automation never runs twice on the same record in one chain.',
					'A project runs up to 500 automations an hour and sends up to 300 automation emails a day.',
					'Webhooks can’t call addresses inside private networks.',
				]}
			/>
		</Section>
	</Guide>
);

export default Automations;
