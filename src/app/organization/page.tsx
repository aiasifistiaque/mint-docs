import Guide from '@/components/docs/Guide';
import { A, List, P, Section, Terms } from '@/components/docs/prose';
import { APP_URL } from '@/lib/config';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/organization');

/**
 * Organizations, members, project access, invitations (by email and in the
 * app), the standard roles, ownership. Section ids are targets of the tenant
 * panel's GuideLink (organizations, switching, members, invitations, roles,
 * ownership) — keep them.
 */

const SECTIONS = [
	{ id: 'organizations', title: 'Organizations' },
	{ id: 'switching', title: 'Several organizations' },
	{ id: 'members', title: 'Members' },
	{ id: 'project-access', title: 'Which projects people open' },
	{ id: 'invitations', title: 'Inviting people' },
	{ id: 'project-roles', title: 'A project’s own roles' },
	{ id: 'invited', title: 'When you’re invited' },
	{ id: 'roles', title: 'Roles and permissions' },
	{ id: 'ownership', title: 'The owner' },
	{ id: 'leaving', title: 'Leaving and removing' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const Organization = () => (
	<Guide
		href='/organization'
		sections={SECTIONS}
		open={{ href: '/org/members', label: 'Open Members' }}>
		<Section
			id='organizations'
			title='Organizations'
			lead='Your company or team. Its members, roles and projects belong to it.'>
			<P>
				Signing up makes an organization with you as its owner. Everything you build lives in one of its projects, and
				everyone you invite joins the organization — not a single project. Nothing in one organization can be seen from
				another.
			</P>
			<P>
				<A href={`${APP_URL}/org/settings`}>Organization → Settings</A> holds its name, its <strong>country</strong> and the business
				details you gave at sign-up: business name, industry, team size, website, how you heard about us, and what you’re
				building. Changing them needs the <em>Edit the organization</em> permission.
			</P>
			<P>
				<strong>Business details</strong> on the same page — your logo, business name, address, phone, email, website and tax
				number — are what each new project starts with. A project then keeps its own copy, changed in its{' '}
				<A href='/projects#project-settings'>Project settings</A>; the organization’s are changed only here, outside a
				project.
			</P>
			<P>
				The country decides which payment providers the organization’s sites can take payments with — in Bangladesh,
				SSLCommerz and bKash as well as Stripe; elsewhere, Stripe. The settings show the ones on offer under the country.
			</P>
		</Section>

		<Section
			id='switching'
			title='Several organizations'
			lead='One account can belong to any number of organizations.'>
			<P>
				Your own organization and every one you’ve been invited to are listed under <strong>Your organizations</strong> on{' '}
				<A href={`${APP_URL}/projects`}>Projects</A>, with your role in each, and in the switcher at the top right under{' '}
				<strong>Organization</strong>. Pick one to work in it — the panel reloads with its projects.{' '}
				<strong>New organization</strong> (in the switcher) starts another, with you as its owner — give it a name and its
				country.
			</P>
			<P>
				Your account, password and two-step sign-in are the same in all of them; your role, and the projects you can open,
				can differ in each.
			</P>
		</Section>

		<Section
			id='members'
			title='Members'
			lead='Organization → Members lists everyone in the organization and their role.'>
			<P>
				Each member shows their name, email, role, the projects they can open, and whether they use two-factor sign-in. With
				the <em>Manage members</em> permission you can change someone’s role and projects from the list — it takes effect on
				their next click — or remove them.
			</P>
		</Section>

		<Section
			id='project-access'
			title='Which projects people open'
			lead='Each member opens every project, or only the ones you choose.'>
			<Terms
				head={['Choice', 'Means']}
				rows={[
					['All projects', 'Every project of the organization, including ones made later. The default.'],
					['Only these', 'Just the projects ticked. Others don’t appear for them anywhere — not in the switcher, not by address.'],
				]}
			/>
			<P>
				Change it from the member’s row on <A href={`${APP_URL}/org/members`}>Members</A> (the line with the folder icon). Their role still
				decides what they can do <em>inside</em> those projects. Owner and Admin always open every project.
			</P>
			<List
				items={[
					'Someone limited to some projects who creates a project gets access to it automatically.',
					'Deleting a project removes it from everyone’s list.',
					'An AI key stops working for a project its maker can no longer open.',
				]}
			/>
		</Section>

		<Section
			id='invitations'
			title='Inviting people'
			lead='Invite by email; they join with the role you choose.'>
			<List
				ordered
				items={[
					<>
						On <A href={`${APP_URL}/org/members`}>Members</A>, press <strong>Invite</strong>.
					</>,
					<>
						Enter their email, pick a role, and choose their projects — all of them, or only some. They get an email with a link
						that works for 7 days.
					</>,
					<>
						Someone new chooses a name and password from the link. Someone with an account joins in one click if they’re signed
						in, or signs in with their password. Either way, they land in your organization with that role and those projects.
					</>,
				]}
			/>
			<P>
				Waiting invitations are listed under <strong>Pending invitations</strong>. <strong>Resend</strong> sends a fresh link
				(the old one stops working) and gives it another 7 days; <strong>Cancel</strong> withdraws it.
			</P>
		</Section>

		<Section
			id='project-people'
			title='Inviting people into one project'
			lead='Bring someone into a single project — a freelancer, a client, a developer — without opening the rest of your organization to them.'>
			<List
				ordered
				items={[
					<>
						Open the project and go to <strong>Project → Members</strong> in the sidebar, then press <strong>Invite</strong>.
					</>,
					<>
						Enter their email and choose a role: <strong>Full access</strong> (everything in the project, its settings and
						members too), <strong>Member</strong> (works with the records), <strong>Developer</strong> (works with the records and
						builds the project: models, pages, AI keys) — or one of the <A href='#project-roles'>project’s own roles</A>. They get
						an email with a link that works for 7 days.
					</>,
					<>
						Once they accept, the project shows on their dashboard and in their project menu under <em>your</em> organization’s
						name, next to their own projects.
					</>,
				]}
			/>
			<Terms
				head={['Who', 'What happens']}
				rows={[
					['Someone new to your organization', 'Joins as a project guest: they open only the projects they were invited to, can’t start projects, and don’t see your members.'],
					['Someone already in your organization', 'Gets the project straight away — no email — with the role you chose for it.'],
					['The owner, admins, members with all projects', 'Already open it. Change them on Organization → Members instead.'],
				]}
			/>
			<P>
				The owner and admins can invite to any project. Give anyone else the <strong>Invite to projects</strong> permission on a
				role (<A href={`${APP_URL}/org/roles`}>Roles</A>) and they can invite to the projects they open. On Project → Members you can change
				someone’s role in that project or remove them; a guest removed from their last project leaves the organization. Giving a
				guest a role or every project on <A href={`${APP_URL}/org/members`}>Members</A> makes them a full member.
			</P>
			<P>
				<strong>Project → Members</strong> shows only to the people who can invite to the project — the owner, admins, Full
				access and roles with Invite to projects; <strong>Project → Settings</strong> only to those who can manage it.
			</P>
		</Section>

		<Section
			id='project-roles'
			title='A project’s own roles'
			lead='Project → Members → Roles: say, model by model, what someone may do.'>
			<P>
				Full access, Member and Developer are the standard roles. For anything in between, press <strong>New role</strong>,
				name it — <em>Sales rep</em> — and tick what it may do with each model’s records: <strong>View</strong>,{' '}
				<strong>Add</strong>, <strong>Edit</strong>, <strong>Delete</strong>. The media library and History are on the list
				too. Adding, editing or deleting includes viewing, so View ticks itself; a column’s heading ticks the whole column.
			</P>
			<P>
				Give the role when you invite someone, or change someone’s role on the list above. A role belongs to its project — the
				same name can mean different things in two projects — and doesn’t show on the organization’s Roles. Change it and
				everyone who has it changes with it. A role someone still has can’t be deleted: give them another one first.
			</P>
		</Section>

		<Section
			id='invited'
			title='When you’re invited'
			lead='Invited to someone else’s organization? It joins the ones you already have.'>
			<P>
				Open the link in the email — signed in to the invited account, <strong>Join</strong> is all it takes. Or find it in the
				app: <strong>Invitations for you</strong> on <A href={`${APP_URL}/projects`}>Projects</A> lists every invitation sent to your
				email, with who sent it, your role and your projects — <strong>Join</strong> or <strong>Decline</strong>. If you already
				have an account, the invitation also arrives as a notification. It opens the invitation’s own page — who invited you,
				to which project or organization, your role and what it allows — with <strong>Accept invitation</strong> and{' '}
				<strong>Decline</strong>. Whoever sent it hears if you decline. An invitation that was already answered, withdrawn or has
				expired says so on that page.
			</P>
			<P>
				Invitations show in the app once your email is verified, so nobody can sign up with your address and see them. Press{' '}
				<strong>Send a code</strong> there and type the 6-digit code we email you. Joining from an emailed link, or resetting
				your password by email, verifies it too.
			</P>
		</Section>

		<Section
			id='roles'
			title='Roles and permissions'
			lead='A role is a set of permissions. Every organization starts with these.'>
			<Terms
				head={['Role', 'Can']}
				rows={[
					['Owner', 'Everything. There is exactly one owner — you, if you signed up.'],
					['Admin', 'Everything except handing the organization over or deleting a project that holds data.'],
					['Member', 'View, add, edit and delete records in their projects, and start new projects. You can change what Member allows.'],
					['Developer', 'Works with the records and builds the projects they open: models, pages, AI keys.'],
					['Full access', 'Everything inside the projects they’re given — records, building, the project’s settings and members.'],
				]}
			/>
			<P>
				Make your own on <A href={`${APP_URL}/org/roles`}>Organization → Roles</A> — a “Viewer” that only reads, an “Editor” that changes
				records and builds. A role is a name, a description and the standard permissions, records first:
			</P>
			<Terms
				head={['Permission', 'Allows']}
				rows={[
					['Records: View', 'Seeing every model’s records, the media, the customers and the analytics'],
					['Records: Add', 'Adding records, importing them from a file, uploading files'],
					['Records: Edit', 'Changing records, archiving them, moving their status'],
					['Records: Delete', 'Deleting and merging records, deleting files'],
					['Build', 'Models, pages, the sidebar, the dashboard, media and the public API'],
					['AI keys', 'Making and revoking the keys AI assistants connect with'],
					['Create projects', 'Starting new apps and websites'],
					['Manage projects', 'Renaming, archiving and deleting the projects they can open'],
					['Manage members', 'Inviting people, changing their roles and projects, removing them'],
					['Manage roles', 'Creating, editing and deleting roles'],
					['Edit the organization', 'Its name and business details'],
				]}
			/>
			<P>
				Record permissions apply to every model alike, in the projects the member can open — to keep someone to some work,
				give them only the projects it’s in. Owner and Admin always have every permission; Member’s can be changed. A role
				can’t be deleted while members have it or a pending invitation uses it — move them to another role first.
			</P>
		</Section>

		<Section
			id='ownership'
			title='The owner'
			lead='One person owns the organization.'>
			<P>
				Only the owner can delete a project that still has models and records in it, and hand the organization to someone
				else: <A href={`${APP_URL}/org/settings`}>Settings → Ownership</A>, choose a member, confirm. They become the owner and you become
				an Admin.
			</P>
		</Section>

		<Section
			id='leaving'
			title='Leaving and removing'>
			<List
				items={[
					<>
						<strong>Leave</strong> is on your own row in Members. The owner can’t leave — hand ownership over first.
					</>,
					'Removing someone signs them out of the organization at once. What they added stays.',
					'Their account itself stays: they keep any other organizations they belong to.',
				]}
			/>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['Symptom', 'Why, and what to do']}
				rows={[
					['The invitation link says it has expired', 'Links last 7 days. Ask for it to be resent.'],
					['The invitation email never came', 'Check spam, then ask for it to be resent — or check the address on Pending invitations.'],
					['A teammate can’t see a project', 'It isn’t among their projects. Change it on their row in Members.'],
					['A teammate can’t see any records', 'Their role lacks Records: View. Edit the role.'],
					['I don’t see an invitation in the app', 'Verify your email on Projects, or open the link in the email.'],
					['A teammate has no Build section', 'Their role lacks the Build permission.'],
					['I was signed out suddenly', 'You were removed from the organization, or it was switched off. Sign in again.'],
					['I can’t delete a role', 'Members or a pending invitation still use it. Give them another role first.'],
				]}
			/>
		</Section>
	</Guide>
);

export default Organization;
