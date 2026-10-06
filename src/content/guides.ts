import type { IconType } from '@/components/icons';
import {
	Building,
	Chart,
	CreditCard,
	Cube,
	Envelope,
	Folder,
	Globe,
	Images,
	Layout,
	Lifebuoy,
	PaintBrush,
	Plug,
	Puzzle,
	Rocket,
	Shield,
	SidebarIcon,
	Squares,
	Stack,
	Table,
	User,
	Webhooks,
} from '@/components/icons';
import type { Tone } from '@/lib/tones';

/**
 * Every guide: everything someone using MINT needs — their account,
 * organization, projects, the builders, records, and taking a project live
 * (public API, customers, websites, analytics).
 *
 * The same guides were first written inside the app (admin
 * src/app/user-docs); the app's "How this works" links point here with the
 * same paths and #anchors, so keep both in step. Add a guide here when you
 * add its page, or it can't be found. Topic ids must match the guide's own
 * SECTIONS.
 */

export type Guide = {
	href: string;
	/** Short name, for the header. */
	title: string;
	/** Full name, for its page and the home page. */
	name: string;
	description: string;
	icon: IconType;
	/** The heading it's listed under on the home page. */
	group: string;
	/** A few of the guide's sections — ids must match the guide's own SECTIONS. */
	topics: { id: string; title: string }[];
};

export const GUIDES: Guide[] = [
	{
		href: '/getting-started',
		title: 'Get started',
		name: 'Getting started',
		description: 'Sign up, find your way around, and go from an empty project to your first page of records.',
		icon: Rocket,
		group: 'Start here',
		topics: [
			{ id: 'sign-up', title: 'Signing up' },
			{ id: 'tour', title: 'Finding your way around' },
			{ id: 'first-project', title: 'Your first project' },
			{ id: 'first-model', title: 'Your first model' },
		],
	},
	{
		href: '/account',
		title: 'Account',
		name: 'Your account & security',
		description: 'Your profile and password, two-step sign-in with passkeys and codes, your signed-in devices, and how the panel looks.',
		icon: Shield,
		group: 'Start here',
		topics: [
			{ id: 'profile', title: 'Profile' },
			{ id: 'password', title: 'Password' },
			{ id: 'overview', title: 'Two-factor sign-in' },
			{ id: 'devices', title: 'Signed-in devices' },
		],
	},
	{
		href: '/organization',
		title: 'Organization',
		name: 'Your organization',
		description: 'Your company or team: inviting people, which projects they open, what each role may do, and several organizations.',
		icon: Building,
		group: 'Organization & projects',
		topics: [
			{ id: 'organizations', title: 'Organizations' },
			{ id: 'invitations', title: 'Inviting people' },
			{ id: 'project-access', title: 'Which projects people open' },
			{ id: 'roles', title: 'Roles and permissions' },
		],
	},
	{
		href: '/email',
		title: 'Email',
		name: 'Email',
		description: 'Send your emails to customers from your own address: add your email server once, test it, and see everything that went out.',
		icon: Envelope,
		group: 'Organization & projects',
		topics: [
			{ id: 'email', title: 'Who sends what' },
			{ id: 'email-server', title: 'Your email server' },
			{ id: 'providers', title: 'Common providers' },
			{ id: 'email-test', title: 'Testing it' },
			{ id: 'email-log', title: 'What was sent' },
		],
	},
	{
		href: '/projects',
		title: 'Projects',
		name: 'Projects',
		description: 'Apps and websites — each a workspace of its own, with its own models, pages, sidebar, dashboard and API.',
		icon: Folder,
		group: 'Organization & projects',
		topics: [
			{ id: 'kinds', title: 'Apps and websites' },
			{ id: 'create', title: 'Creating a project' },
			{ id: 'media-library', title: 'Media library' },
			{ id: 'archive', title: 'Archiving and deleting' },
		],
	},
	{
		href: '/templates',
		title: 'Templates',
		name: 'Starting from a template',
		description: 'A ready-made app, API or website built into a new project: choosing one, its questions, the build, and what you get.',
		icon: Stack,
		group: 'Organization & projects',
		topics: [
			{ id: 'templates', title: 'What a template is' },
			{ id: 'start-from', title: 'Choosing one' },
			{ id: 'template-questions', title: 'The questions' },
			{ id: 'template-build', title: 'While it builds' },
			{ id: 'after-template', title: 'After it’s built' },
			{ id: 'template-list', title: 'The templates' },
		],
	},
	{
		href: '/models',
		title: 'Models',
		name: 'Models',
		description: 'Describe the things your project keeps — customers, orders, bookings — and get a table, form, filters and detail page for each.',
		icon: Cube,
		group: 'Build',
		topics: [
			{ id: 'models-wizard', title: 'Creating a model' },
			{ id: 'models-fields', title: 'Fields' },
			{ id: 'models-links', title: 'Linking models' },
			{ id: 'models-access', title: 'Private records' },
		],
	},
	{
		href: '/pages',
		title: 'Pages',
		name: 'Pages: tables, forms & detail pages',
		description: 'Fine-tune how each model looks and works — its table, filters, form and detail page — with drafts you publish.',
		icon: Layout,
		group: 'Build',
		topics: [
			{ id: 'workflow', title: 'Drafts and publishing' },
			{ id: 'table', title: 'Table' },
			{ id: 'form', title: 'Form' },
			{ id: 'view', title: 'Detail page and tabs' },
		],
	},
	{
		href: '/sidebar',
		title: 'Sidebar',
		name: 'Sidebar',
		description: 'Arrange your project’s sidebar: its sections, its pages, their icons, and who sees each one.',
		icon: SidebarIcon,
		group: 'Build',
		topics: [
			{ id: 'arrange', title: 'Arranging' },
			{ id: 'icons', title: 'Icons' },
			{ id: 'access', title: 'Who sees a page' },
		],
	},
	{
		href: '/dashboard',
		title: 'Dashboard',
		name: 'Dashboard',
		description: 'Choose the numbers, charts and recent lists on your project’s home page.',
		icon: Squares,
		group: 'Build',
		topics: [
			{ id: 'widgets', title: 'Widgets' },
			{ id: 'charts', title: 'Charts' },
			{ id: 'access', title: 'Who sees what' },
		],
	},
	{
		href: '/media',
		title: 'Media',
		name: 'Media',
		description: 'Your project’s images, videos and files — folders, uploads, links and the trash.',
		icon: Images,
		group: 'Build',
		topics: [
			{ id: 'folders', title: 'Folders' },
			{ id: 'upload', title: 'Uploading' },
			{ id: 'trash', title: 'Trash' },
		],
	},
	{
		href: '/connect-ai',
		title: 'Connect AI',
		name: 'Build with your own AI',
		description: 'Connect Claude, ChatGPT or another AI assistant to a project and build models by describing them.',
		icon: Plug,
		group: 'Build',
		topics: [
			{ id: 'mcp-keys', title: 'Project keys' },
			{ id: 'mcp-connect', title: 'Connecting your assistant' },
			{ id: 'conversation', title: 'What to ask' },
		],
	},
	{
		href: '/records',
		title: 'Records',
		name: 'Working with records',
		description: 'The everyday work: adding, finding, editing, exporting and importing the records in your project.',
		icon: Table,
		group: 'Everyday work',
		topics: [
			{ id: 'tables', title: 'Tables' },
			{ id: 'find', title: 'Search and filters' },
			{ id: 'bulk', title: 'Working on many rows' },
			{ id: 'history', title: 'History and undo' },
		],
	},
	{
		href: '/public-api',
		title: 'Public API',
		name: 'Public API',
		description: 'Let your own website or app read and write your models — paging, sorting, filters and search included; you choose the actions and who may call them.',
		icon: Webhooks,
		group: 'Go live',
		topics: [
			{ id: 'turn-on', title: 'Making a model public' },
			{ id: 'read-only', title: 'Read-only fields' },
			{ id: 'list', title: 'Listing and paging' },
			{ id: 'filters', title: 'Filters' },
			{ id: 'search', title: 'Search' },
			{ id: 'errors', title: 'Errors and limits' },
		],
	},
	{
		href: '/customers',
		title: 'Customers',
		name: 'Customers & sign-in',
		description: 'Let the people who use your site or app create an account and sign in — with a ready-made widget or your own form.',
		icon: User,
		group: 'Go live',
		topics: [
			{ id: 'widget', title: 'The sign-in widget' },
			{ id: 'mint-auth', title: 'MintAuth in your code' },
			{ id: 'own-form', title: 'Your own sign-in form' },
			{ id: 'manage', title: 'Managing customers' },
		],
	},
	{
		href: '/widgets',
		title: 'Widgets',
		name: 'Site widgets',
		description: 'Ready-made pieces for your own site — sign-in, a cart, checkout and order history — added with one script and styled to match.',
		icon: Puzzle,
		group: 'Go live',
		topics: [
			{ id: 'add-mint', title: 'Add MINT to your site' },
			{ id: 'look', title: 'The look' },
			{ id: 'login', title: 'Login & account' },
			{ id: 'shop', title: 'Shop' },
			{ id: 'cart', title: 'Cart' },
			{ id: 'checkout', title: 'Checkout' },
			{ id: 'thanks', title: 'Thank-you page' },
			{ id: 'orders', title: 'My orders' },
			{ id: 'mint-js', title: 'Mint in your own code' },
		],
	},
	{
		href: '/payments',
		title: 'Payments',
		name: 'Payments',
		description: 'Take payments on your own site with your own Stripe account: checkout priced by the server, orders paid only when the provider confirms.',
		icon: CreditCard,
		group: 'Go live',
		topics: [
			{ id: 'payments', title: 'How payments work' },
			{ id: 'stripe', title: 'Connecting Stripe' },
			{ id: 'return-pages', title: 'After paying' },
			{ id: 'test-payment', title: 'A test payment' },
			{ id: 'payments-list', title: 'The payments list' },
		],
	},
	{
		href: '/websites',
		title: 'Websites',
		name: 'Website projects',
		description: 'Site setup, pages, per-page SEO and content blocks — and rendering them on your site in two calls.',
		icon: Globe,
		group: 'Go live',
		topics: [
			{ id: 'kit', title: 'The website kit' },
			{ id: 'build-a-page', title: 'Building a page' },
			{ id: 'site-api', title: 'The site API' },
			{ id: 'render', title: 'Rendering your site' },
		],
	},
	{
		href: '/site-builder',
		title: 'Site builder',
		name: 'The site builder',
		description: 'Build your website visually from ready-made blocks, then publish every change in one go — and go back to any earlier version.',
		icon: PaintBrush,
		group: 'Go live',
		topics: [
			{ id: 'start', title: 'What the site builder is' },
			{ id: 'live-site', title: 'Your live site' },
			{ id: 'publish', title: 'Publishing' },
		],
	},
	{
		href: '/analytics',
		title: 'Analytics',
		name: 'Analytics',
		description: 'Count visits to your website without cookies: page views, visitors, where they came from, clicks and your own events.',
		icon: Chart,
		group: 'Go live',
		topics: [
			{ id: 'install', title: 'Adding the tracker' },
			{ id: 'reports', title: 'The Analytics page' },
			{ id: 'events', title: 'Clicks and events' },
			{ id: 'privacy', title: 'Privacy' },
		],
	},
	{
		href: '/faq',
		title: 'FAQ',
		name: 'Questions & troubleshooting',
		description: 'Quick answers to what people ask most, and what to do when something doesn’t work.',
		icon: Lifebuoy,
		group: 'Help',
		topics: [
			{ id: 'account', title: 'Signing in' },
			{ id: 'team', title: 'Teammates and access' },
			{ id: 'building', title: 'Building' },
			{ id: 'live', title: 'Your site and API' },
		],
	},
];

/** The home page's groups, in order, each with its colour. */
export const GROUPS: { name: string; tone: Tone }[] = [
	{ name: 'Start here', tone: 'emerald' },
	{ name: 'Organization & projects', tone: 'sky' },
	{ name: 'Build', tone: 'violet' },
	{ name: 'Everyday work', tone: 'amber' },
	{ name: 'Go live', tone: 'cyan' },
	{ name: 'Help', tone: 'rose' },
];

export const groupTone = (group: string): Tone => GROUPS.find(g => g.name === group)?.tone || 'emerald';

/** The guides linked from the header — the rest are a click away on the home page and in search. */
const IN_HEADER = ['/getting-started', '/projects', '/models', '/records', '/public-api', '/websites'];
export const HEADER_GUIDES = GUIDES.filter(g => IN_HEADER.includes(g.href));

/** The guide at `href`. */
export const guide = (href: string) => GUIDES.find(g => g.href === href);

/** Whether `href` is a page of this site (a guide or the home page) rather than a screen in the app. */
export const isGuidePath = (href: string) => {
	const path = href.split('#')[0].split('?')[0];
	return path === '/' || GUIDES.some(g => g.href === path);
};
