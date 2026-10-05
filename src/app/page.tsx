import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '@/components/icons';
import { GROUPS, GUIDES, type Guide } from '@/content/guides';
import { APP_HOME } from '@/lib/config';
import { cx } from '@/lib/cx';
import { tone, type Tone } from '@/lib/tones';

/**
 * The guides' home: what MINT is in a paragraph, the first five things to do,
 * and every guide as a card by group.
 */

const STEPS: { title: string; body: string; href: string; tone: Tone }[] = [
	{ title: 'Make a project', body: 'An app for your data, or a website with pages, SEO and content.', href: '/projects#create', tone: 'emerald' },
	{ title: 'Build a model', body: 'Customers, orders, bookings — each gets a table, form and detail page.', href: '/models#models-wizard', tone: 'sky' },
	{ title: 'Invite your team', body: 'Add people by email and choose what each of them may do.', href: '/organization#invitations', tone: 'violet' },
	{ title: 'Shape the panel', body: 'Arrange the sidebar and choose what the dashboard shows.', href: '/sidebar', tone: 'amber' },
	{ title: 'Go live', body: 'Open models to your own site or app, with sign-in for your customers.', href: '/public-api', tone: 'cyan' },
];

export default function Home() {
	return (
		<>
			<section className='relative overflow-hidden border-b border-line'>
				<div
					aria-hidden
					className='mesh pointer-events-none absolute inset-0'
				/>
				<div className='relative mx-auto w-full max-w-[1200px] px-4 pb-14 pt-14 md:px-8 md:pb-20 md:pt-24'>
					<p className='mb-5 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400'>
						<span className='size-1.5 rounded-full bg-emerald-500' />
						MINT Guides
					</p>
					<h1 className='max-w-[820px] text-[38px] md:text-[64px]'>
						Build apps and websites <span className='text-gradient'>for your business</span>
					</h1>
					<p className='mt-6 max-w-[680px] text-[16px] leading-relaxed text-muted md:text-[18px]'>
						MINT gives your organization projects — apps and websites — where you describe the things you keep track of and get a
						ready admin for them: tables, forms, filters, a dashboard. Then open them to your own site or app, with sign-in for your
						customers and analytics for your visitors. These guides cover all of it.
					</p>
					<div className='mt-8 flex flex-wrap gap-2.5'>
						<Link
							href='/getting-started'
							className='caps inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 !text-[11.5px] !font-normal text-white transition-opacity hover:opacity-85 dark:bg-fg dark:text-bg'>
							Get started
							<ArrowRight className='size-3.5' />
						</Link>
						<a
							href={APP_HOME}
							className='caps inline-flex h-11 items-center gap-2 rounded-full border border-line bg-panel px-5 !text-[11.5px] !font-light transition-colors hover:border-line-strong'>
							Open MINT
							<ArrowUpRight className='size-3.5' />
						</a>
					</div>
				</div>
			</section>

			<section
				id='first-steps'
				className='mx-auto w-full max-w-[1200px] px-4 pt-14 md:px-8 md:pt-20'>
				<h2 className='text-[26px] md:text-[32px]'>First steps</h2>
				<p className='mt-3 text-[15px] text-muted'>From signing up to a live project, in order.</p>
				<ol className='mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5'>
					{STEPS.map((step, i) => {
						const t = tone(step.tone);
						return (
							<li key={step.href}>
								<Link
									href={step.href}
									className='group flex h-full flex-col gap-3 rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-line-strong'>
									<span className={cx('glyph size-8 rounded-lg font-mono text-[13px]', t.text)}>{i + 1}</span>
									<span className='caps !text-[11.5px] !font-normal'>{step.title}</span>
									<span className='text-[14px] leading-snug text-muted'>{step.body}</span>
								</Link>
							</li>
						);
					})}
				</ol>
			</section>

			<div className='mx-auto flex w-full max-w-[1200px] flex-col gap-14 px-4 pb-24 pt-16 md:px-8 md:pt-20'>
				{GROUPS.map(group => {
					const guides = GUIDES.filter(g => g.group === group.name);
					if (!guides.length) return null;
					const t = tone(group.tone);
					return (
						<section
							key={group.name}
							aria-label={group.name}>
							<h2 className='flex items-center gap-3 text-[22px] md:text-[26px]'>
								<span className={cx('size-2 rounded-full', t.bg)} />
								{group.name}
							</h2>
							<div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
								{guides.map(g => (
									<GuideCard
										key={g.href}
										guide={g}
										tone={group.tone}
									/>
								))}
							</div>
						</section>
					);
				})}
			</div>
		</>
	);
}

/** A guide on the home page: its icon, name, line, and a few of its topics. */
const GuideCard = ({ guide, tone: color }: { guide: Guide; tone: Tone }) => {
	const t = tone(color);
	const Icon = guide.icon;
	return (
		<div className='group relative flex flex-col rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-line-strong'>
			<span className={cx('glyph size-10 rounded-xl', t.text)}>
				<Icon className='size-5' />
			</span>
			<h3 className='mt-5 text-[14px] !font-normal'>
				<Link
					href={guide.href}
					className='after:absolute after:inset-0 after:rounded-2xl'>
					{guide.name}
				</Link>
			</h3>
			<p className='mt-2 text-[14px] leading-relaxed text-muted'>{guide.description}</p>
			<ul className='relative mt-5 flex flex-wrap gap-1.5'>
				{guide.topics.map(topic => (
					<li key={topic.id}>
						<Link
							href={`${guide.href}#${topic.id}`}
							className='inline-flex rounded-full border border-line px-2.5 py-1 text-[12px] text-muted transition-colors hover:border-line-strong hover:text-fg'>
							{topic.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
