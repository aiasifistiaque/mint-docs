import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Book } from '@/components/icons';
import { GUIDES, groupTone, guide as findGuide } from '@/content/guides';
import { APP_URL } from '@/lib/config';
import { cx } from '@/lib/cx';
import { tone } from '@/lib/tones';
import GuideNav from './GuideNav';

/**
 * The frame of every guide: its header (name, icon and description from
 * content/guides.ts, and a link to the screen it covers in MINT), "On this
 * page", the text, and the guides before and after it.
 *
 * Same props as the app's UserGuide, so a guide's page moves across as is;
 * `open.href` is an address in the app.
 */
const Guide = ({
	href,
	sections,
	open,
	children,
}: {
	href: string;
	sections: { id: string; title: string }[];
	open?: { href: string; label: string };
	children: ReactNode;
}) => {
	const guide = findGuide(href);
	const at = GUIDES.findIndex(g => g.href === href);
	const prev = GUIDES[at - 1];
	const next = GUIDES[at + 1];
	const t = tone(groupTone(guide?.group || ''));
	const Icon = guide?.icon || Book;

	return (
		<div className='mx-auto w-full max-w-[1200px] px-4 pb-20 pt-8 md:px-8 md:pt-12'>
			<header className='mb-10 max-w-[760px] md:mb-14'>
				<p className={cx('mb-4 inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.16em]', t.text)}>
					<span className={cx('size-1.5 rounded-full', t.bg)} />
					{guide?.group}
				</p>
				<div className='flex items-start gap-4'>
					<span className={cx('glyph mt-1 size-11 rounded-xl', t.text)}>
						<Icon className='size-[22px]' />
					</span>
					<h1 className='text-[30px] md:text-[42px]'>{guide?.name}</h1>
				</div>
				<p className='mt-5 text-[16px] leading-relaxed text-muted md:text-[17px]'>{guide?.description}</p>
				{open && (
					<a
						href={`${APP_URL}${open.href}`}
						target='_blank'
						rel='noreferrer'
						className='caps mt-5 inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 !font-light text-muted transition-colors hover:border-line-strong hover:text-fg'>
						{open.label}
						<ArrowUpRight className='size-3' />
					</a>
				)}
			</header>

			<div className='grid grid-cols-1 items-start gap-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14'>
				<GuideNav sections={sections} />

				<div className='min-w-0 max-w-[760px]'>
					{/* Phones and tablets: the same list, folded, above the text. */}
					<details className='group mb-8 rounded-xl border border-line bg-panel lg:hidden'>
						<summary className='caps flex cursor-pointer list-none items-center justify-between px-4 py-3 !text-[10.5px] text-muted'>
							On this page
							<ArrowRight className='size-3 transition-transform group-open:rotate-90' />
						</summary>
						<div className='flex flex-col border-t border-line px-4 py-2'>
							{sections.map(s => (
								<a
									key={s.id}
									href={`#${s.id}`}
									className='py-1.5 text-[14px] text-muted hover:text-fg'>
									{s.title}
								</a>
							))}
						</div>
					</details>

					<article className='prose-guide'>{children}</article>

					<nav
						aria-label='More guides'
						className='mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2'>
						{prev ? (
							<Turn
								href={prev.href}
								label='Previous'
								title={prev.name}
								back
							/>
						) : (
							<span />
						)}
						{next && (
							<Turn
								href={next.href}
								label='Next'
								title={next.name}
							/>
						)}
					</nav>
				</div>
			</div>
		</div>
	);
};

const Turn = ({ href, label, title, back }: { href: string; label: string; title: string; back?: boolean }) => (
	<Link
		href={href}
		className={cx(
			'group flex flex-col gap-1.5 rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-line-strong',
			back ? 'items-start' : 'items-end text-right'
		)}>
		<span className='caps inline-flex items-center gap-1.5 !text-[10.5px] text-faint'>
			{back && <ArrowLeft className='size-3 transition-transform group-hover:-translate-x-0.5' />}
			{label}
			{!back && <ArrowRight className='size-3 transition-transform group-hover:translate-x-0.5' />}
		</span>
		<span className='text-[15px]'>{title}</span>
	</Link>
);

export default Guide;
