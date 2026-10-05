import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRight } from '@/components/icons';
import { isGuidePath } from '@/content/guides';
import { APP_URL } from '@/lib/config';
import { cx } from '@/lib/cx';

export { default as CodeBlock } from './CodeBlock';

/**
 * The building blocks of a guide's text — sections, paragraphs, lists, notes,
 * term tables and code. Same names and props as the app's own copies (admin
 * src/app/docs/_components/prose.tsx), so a guide moves between the two
 * unchanged.
 */

/** A guide section: an anchored heading (an "On this page" target), a lead line, the body. */
export const Section = ({ id, title, lead, children }: { id: string; title: string; lead?: ReactNode; children: ReactNode }) => (
	<section
		id={id}
		className='border-t border-line pb-2 pt-10 first:border-t-0 first:pt-0'>
		<h2 className={cx('text-[22px] !leading-tight md:text-[24px]', lead ? 'mb-2' : 'mb-4')}>
			<a
				href={`#${id}`}
				className='plain group inline-flex items-baseline gap-2 hover:text-muted'>
				{title}
				<span
					aria-hidden
					className='font-mono text-[14px] text-faint opacity-0 transition-opacity group-hover:opacity-100'>
					#
				</span>
			</a>
		</h2>
		{lead && <p className='mb-5 text-[15px] leading-relaxed text-muted'>{lead}</p>}
		<div className='flex flex-col gap-4'>{children}</div>
	</section>
);

/** A sub-heading inside a section; with `id` it's a link target of its own. */
export const H3 = ({ id, children }: { id?: string; children: ReactNode }) => (
	<h3
		id={id}
		className='mt-4 text-[13px] !font-normal text-fg'>
		{children}
	</h3>
);

export const P = ({ children }: { children: ReactNode }) => <p>{children}</p>;

/** Inline code. */
export const C = ({ children }: { children: ReactNode }) => <code>{children}</code>;

/**
 * A link inside the text. A guide's own address stays on this site; any other
 * address in the app (`/projects`, `/org/members`…) opens that screen in MINT,
 * and other sites open in a new tab.
 */
export const A = ({ href, children }: { href: string; children: ReactNode }) => {
	if (href.startsWith('#') || isGuidePath(href)) return <Link href={href}>{children}</Link>;
	const url = /^https?:/.test(href) ? href : `${APP_URL}${href}`;
	return (
		<a
			href={url}
			target='_blank'
			rel='noreferrer'
			className='inline-flex items-baseline gap-0.5'>
			{children}
			<ArrowUpRight className='size-[11px] self-center opacity-50' />
		</a>
	);
};

export const List = ({ items, ordered }: { items: ReactNode[]; ordered?: boolean }) => {
	const Tag = ordered ? 'ol' : 'ul';
	return (
		<Tag className={cx('flex flex-col gap-1.5 pl-5 marker:text-faint', ordered ? 'list-decimal' : 'list-disc')}>
			{items.map((item, i) => (
				<li
					key={i}
					className='pl-1'>
					{item}
				</li>
			))}
		</Tag>
	);
};

export const Note = ({ children, tone }: { children: ReactNode; tone?: 'warn' }) => (
	<div
		className={cx(
			'rounded-r-xl border-l-2 px-4 py-3',
			tone === 'warn' ? 'border-amber-500 bg-amber-50 dark:bg-amber-400/10' : 'border-emerald-500 bg-subtle'
		)}>
		{children}
	</div>
);

/** A two-column table: a term and what it means. */
export const Terms = ({ head = ['Field', 'What it does'], rows }: { head?: [string, string]; rows: [ReactNode, ReactNode][] }) => (
	<div className='overflow-x-auto rounded-xl border border-line bg-panel'>
		<table className='w-full border-collapse text-left text-[14px]'>
			<thead>
				<tr className='bg-subtle'>
					{head.map(h => (
						<th
							key={h}
							className='caps border-b border-line px-4 py-2.5 !text-[10.5px] !font-normal text-muted'>
							{h}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map(([term, def], i) => (
					<tr
						key={i}
						className='border-b border-line last:border-b-0'>
						<td className='w-[34%] min-w-[150px] px-4 py-3 align-top font-normal leading-relaxed'>{term}</td>
						<td className='px-4 py-3 align-top leading-relaxed text-muted'>{def}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
