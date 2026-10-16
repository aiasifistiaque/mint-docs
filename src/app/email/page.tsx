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
 * email-log) — keep them.
 */

const SECTIONS = [
	{ id: 'email', title: 'Who sends what' },
	{ id: 'email-accounts', title: 'A project’s email accounts' },
	{ id: 'connect-email', title: 'Connecting an account' },
	{ id: 'default-account', title: 'The default account' },
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
