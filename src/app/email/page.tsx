import Guide from '@/components/docs/Guide';
import { List, Note, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/email');

/**
 * Email (backend docs/messaging M-02, M-14): a project's email accounts and
 * its default, the organization's own email server as the fallback (SMTP,
 * sent with nodemailer), testing, the log, and what MINT itself sends.
 * Section ids are targets of the tenant panel's GuideLink (email,
 * email-accounts, connect-email, default-account, email-server, email-test,
 * email-log, email-designs, design-look, design-header, design-colours,
 * design-footer, automation-email-design) — keep them.
 */

const SECTIONS = [
	{ id: 'email', title: 'Who sends what' },
	{ id: 'email-accounts', title: 'A project’s email accounts' },
	{ id: 'connect-email', title: 'Connecting an account' },
	{ id: 'default-account', title: 'The default account' },
	{ id: 'email-designs', title: 'How your emails look' },
	{ id: 'design-look', title: 'Plain or designed' },
	{ id: 'design-header', title: 'The header' },
	{ id: 'design-colours', title: 'Colours and shape' },
	{ id: 'design-footer', title: 'Footer and signature' },
	{ id: 'automation-email-design', title: 'A design for one automation' },
	{ id: 'email-server', title: 'Your organization’s email server' },
	{ id: 'providers', title: 'Common providers' },
	{ id: 'email-test', title: 'Testing it' },
	{ id: 'email-log', title: 'What was sent' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const Email = () => (
	<Guide
		href='/email'
		sections={SECTIONS}
		open={{ href: '/projects', label: 'Open your projects' }}>
		<Section
			id='email'
			title='Who sends what'
			lead='Emails to your customers come from you, through your own email server. Emails to you and your team come from MINT.'>
			<Terms
				head={['Email', 'Sent by']}
				rows={[
					['A welcome to each customer who signs up on your sites', 'You — through the project’s default email account, from your address'],
					['Order receipts, automation emails', 'You — the same way'],
					['Your welcome to MINT, invitations to your organization', 'MINT'],
					['Password resets, sign-in and verification codes', 'MINT'],
				]}
			/>
			<P>
				Until a project has an email account (or your organization has a server), its customers get no emails from you —
				signing up on your sites still works. MINT doesn’t send anything to your customers in its own name.
			</P>
		</Section>

		<Section
			id='email-accounts'
			title='A project’s email accounts'
			lead='Inside a project: Project → Email. Connect the accounts the project sends from — Sales, Support, as many as you like.'>
			<P>
				Each row shows the account’s name, the sender name and address, the server, and whether it works:{' '}
				<em>Working</em> (green) after a check or an email that went out, <em>Not working</em> (red) with the reason
				after one that didn’t. The <em>⋯</em> menu on a row has Make default, Edit, Send a test email and Remove.
			</P>
			<Note>
				A project with no account uses your organization’s email server (Organization → Email, below), if it has one —
				the Email page says so.
			</Note>
		</Section>

		<Section
			id='connect-email'
			title='Connecting an account'
			lead='Connect an account opens a window. Fill it in, press Test connection, then Connect.'>
			<Terms
				head={['Field', 'What to put']}
				rows={[
					['Account name', 'For your team, to tell accounts apart — e.g. Sales. Empty: the address.'],
					['Sender name', 'The name people see the email is from — e.g. your shop’s name.'],
					['Email provider', 'Optional: pick yours to fill in the server and port.'],
					['SMTP server', <>Your host’s outgoing server, e.g. <code>smtp.gmail.com</code>.</>],
					['Port', '587 (secured after connecting) or 465 (secured from the start). The security follows the port.'],
					['Email', 'The address emails come from. It’s also the sign-in.'],
					['Password', 'The account’s password — or an app password for Gmail and Outlook.'],
				]}
			/>
			<P>
				<strong>Test connection</strong> signs in to the server without sending anything. Green means it connected and
				the password was accepted; red says what went wrong in plain words. Changing any field clears the answer, so test
				again. Saving checks once more and shows the result on the row; an account that fails is still saved, so you can
				fix it later with Edit.
			</P>
			<Note>
				The password is stored encrypted and never shown again. When editing, leave it empty to keep the saved one — Test
				connection then uses the saved one too.
			</Note>
		</Section>

		<Section
			id='default-account'
			title='The default account'
			lead='Send from, at the top of the list, picks the default. Every email the project sends goes through it.'>
			<List
				items={[
					'The first account you connect becomes the default.',
					'Removing the default makes the oldest account left the default; removing the last one sends the project’s emails back to your organization’s server, or stops them if it has none.',
					'Send a test email (in a row’s ⋯ menu) goes through that account, whether it’s the default or not — to you, or any address.',
				]}
			/>
		</Section>

		<Section
			id='email-designs'
			title='How your emails look'
			lead='Project → Email → How your emails look. Design the frame every email from the project goes out in — receipts, welcomes, automation emails and tests.'>
			<P>
				<strong>New design</strong> opens a window: the settings on the left, a sample email on the right that changes as
				you do — at desktop or phone width. What you see is exactly what your customers get. A project can have several
				designs (Receipts, Newsletter…); the <em>Default</em> one is used unless an automation picks another. The{' '}
				<em>⋯</em> menu on a row has Make default, Send a test email and Remove.
			</P>
			<Note>
				With no design, emails use MINT’s classic look: your name on a dark band above a white card. Removing the last
				design goes back to it.
			</Note>
		</Section>

		<Section
			id='design-look'
			title='Plain or designed'
			lead='Two looks to start from.'>
			<Terms
				head={['Look', 'What your customer sees']}
				rows={[
					['Plain', 'Just your words, a link and your signature — like an email you wrote yourself. Good for a personal tone, and it rarely lands in spam.'],
					['Designed', 'Your logo or name in a coloured header, the message on a card, a button, and a small footer with your details.'],
				]}
			/>
			<P>
				<strong>Font</strong> offers the fonts every email app has (Helvetica, Georgia, Trebuchet…), so it looks the same in
				Gmail, Outlook and on phones. <strong>Start from colours</strong> sets the header, buttons and background in one
				click — change any of them after.
			</P>
		</Section>

		<Section
			id='design-header'
			title='The header'
			lead='Designed only. Turn it off for no band at the top.'>
			<List
				items={[
					'Logo — upload one or pick it from the media library. Use PNG or JPG: Gmail and Outlook don’t show SVG in emails. It starts as your business logo.',
					<>Title — text beside the logo, or on its own. <code>{'{{business.name}}'}</code> fills in your business name; leave it empty for the logo alone.</>,
					'Logo height, line up (left or centre), background and title colour.',
				]}
			/>
		</Section>

		<Section
			id='design-colours'
			title='Colours and shape'
			lead='Click a swatch to pick a colour, or type it like #1f2937.'>
			<Terms
				head={['Setting', 'What it colours']}
				rows={[
					['Text', 'The message.'],
					['Buttons (Links on a plain email)', 'The button — “View your order” — or the link on a plain email.'],
					['Heading, Button text', 'The large line at the top of the card, and the words on the button.'],
					['Card, Around the card', 'The white box the message is in, and the background around it.'],
					['Corners', 'Square, soft, round or rounder — the card and its button.'],
					['Width', '560 px is usual; 480 is narrower, 640 wider. Phones always show it full width.'],
				]}
			/>
		</Section>

		<Section
			id='design-footer'
			title='Footer and signature'
			lead='Lines under the email: a small footer on a designed one, your signature on a plain one.'>
			<P>
				<strong>Insert a detail</strong> adds your business name, address, phone, email, website, the project’s name or
				this year — taken from Project → Settings → Business details, so they stay right when they change. A line whose
				detail is empty is left out.
			</P>
		</Section>

		<Section
			id='automation-email-design'
			title='A design for one automation'
			lead='In an automation’s Send an email, Design picks how that email looks.'>
			<P>
				<em>The default</em> follows whichever design is the project’s default. Pick another — a plain one for a personal
				follow-up, say — and only that email uses it. If that design is removed, the email goes out in the default.
			</P>
		</Section>

		<Section
			id='email-server'
			title='Your organization’s email server'
			lead='Organization → Email. One server for the whole organization — used by every project that hasn’t connected its own account.'>
			<P>Your email host gives you these details (often under “SMTP”, “outgoing mail” or “email clients”):</P>
			<Terms
				head={['Setting', 'What to put']}
				rows={[
					['Server', <>The outgoing (SMTP) server, e.g. <code>smtp.gmail.com</code>. Pick your provider to fill it in.</>],
					['Port and SSL', 'Usually 587 with SSL off (the connection is secured after it starts), or 465 with SSL on.'],
					['Username and password', 'Usually your full email address and its password — or an app password, see below.'],
					['From name', 'What customers see as the sender. Empty: your organization’s name.'],
					['From address', 'The address emails come from. Most servers only send as the account you sign in with.'],
					['Replies go to', 'Where customers’ replies land, if not the from address — e.g. a shared inbox.'],
					['Welcome customers', 'On: a short welcome to everyone who creates an account on your sites.'],
				]}
			/>
			<Note>
				The password is stored encrypted and never shown again, to anyone. To change it, type a new one; leave the box
				empty to keep the stored one.
			</Note>
		</Section>

		<Section
			id='providers'
			title='Common providers'>
			<Terms
				head={['Provider', 'Server · port · SSL']}
				rows={[
					['Gmail / Google Workspace', 'smtp.gmail.com · 587 · off. Turn on 2-step verification, then make an app password (Google Account → Security → App passwords) and use that.'],
					['Outlook / Microsoft 365', 'smtp.office365.com · 587 · off. Your Microsoft 365 admin may have to allow “Authenticated SMTP” for the mailbox.'],
					['Zoho Mail', 'smtp.zoho.com · 465 · on (smtp.zoho.eu or smtp.zoho.in for accounts in Europe or India).'],
					['Namecheap Private Email', 'mail.privateemail.com · 465 · on'],
					['Hostinger', 'smtp.hostinger.com · 465 · on'],
				]}
			/>
			<P>
				Sending a lot? Gmail and Outlook limit how many emails a mailbox sends a day (a few hundred to two thousand). For
				newsletters, a sending service with SMTP (Brevo, Mailgun, Postmark, SendGrid, Amazon SES) works the same way:
				put in its SMTP server and the username and password it gives you.
			</P>
		</Section>

		<Section
			id='email-test'
			title='Testing it'
			lead='After saving, send a test — to yourself, or to any address.'>
			<P>
				The test goes out exactly like your customers’ emails. If it works, the page says <em>Working</em>; if not, it
				says why in plain words — a wrong password, a wrong port, a server that can’t be reached — and the same reason
				is kept until the next email goes out.
			</P>
		</Section>

		<Section
			id='email-log'
			title='What was sent'
			lead='Each Email page lists the last 50 emails: when, what kind, to whom, the subject, and whether it went.'>
			<P>
				A project’s page shows that project’s emails and which account each went through; the organization’s page shows
				them all. Only the subject is kept, never the message itself. Entries go after 180 days.
			</P>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['It says', 'What to do']}
				rows={[
					['refused the username or password', 'Check both. Gmail and Outlook usually need an app password, not your normal password.'],
					['didn’t answer on port …', 'Try 587 with SSL off, or 465 with SSL on.'],
					['The secure connection failed', 'Switch SSL: on for 465, off for 587.'],
					['wouldn’t take this address', 'The address may not exist, or the server won’t send to it. Check the spelling.'],
					['The test arrived in spam', <>Your domain needs SPF and DKIM records for the server you use — your email host’s help pages show what to add.</>],
				]}
			/>
			<List
				items={[
					'Changing the server, port, SSL, username or password marks it as not tested — send a test again.',
					'Removing the server stops your emails at once; the log stays.',
				]}
			/>
		</Section>
	</Guide>
);

export default Email;
