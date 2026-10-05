'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Search as SearchIcon, X } from '@/components/icons';
import { GUIDES } from '@/content/guides';
import { cx } from '@/lib/cx';

/**
 * Search the guides: by a guide's name, its line, and its topics. Opens from
 * the header button, `/` or ⌘K / Ctrl K; arrows pick, Enter goes.
 */

type Hit = { href: string; title: string; under: string };

const ENTRIES: (Hit & { text: string })[] = GUIDES.flatMap(g => [
	{ href: g.href, title: g.name, under: g.group, text: `${g.name} ${g.title} ${g.description}`.toLowerCase() },
	...g.topics.map(t => ({ href: `${g.href}#${t.id}`, title: t.title, under: g.name, text: `${t.title} ${g.name}`.toLowerCase() })),
]);

const find = (query: string): Hit[] => {
	const words = query.toLowerCase().split(/\s+/).filter(Boolean);
	if (!words.length) return ENTRIES.filter(e => !e.href.includes('#')).slice(0, 8);
	return ENTRIES.map(e => ({ e, score: words.every(w => e.text.includes(w)) ? (e.title.toLowerCase().startsWith(words[0]) ? 2 : 1) : 0 }))
		.filter(x => x.score)
		.sort((a, b) => b.score - a.score)
		.slice(0, 12)
		.map(x => x.e);
};

const Search = ({ className }: { className?: string }) => {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const [at, setAt] = useState(0);
	const input = useRef<HTMLInputElement>(null);
	const router = useRouter();
	const hits = useMemo(() => find(query), [query]);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			const typing = e.target instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
			if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
				e.preventDefault();
				setOpen(true);
			}
		};
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, []);

	useEffect(() => {
		if (!open) return;
		setQuery('');
		setAt(0);
		requestAnimationFrame(() => input.current?.focus());
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	const go = (hit?: Hit) => {
		if (!hit) return;
		setOpen(false);
		router.push(hit.href);
	};

	return (
		<>
			<button
				type='button'
				onClick={() => setOpen(true)}
				aria-label='Search the guides'
				className={cx(
					'inline-flex h-9 items-center gap-2 rounded-full border border-line px-3 text-[13px] text-muted transition-colors hover:border-line-strong hover:text-fg',
					className
				)}>
				<SearchIcon className='size-4' />
				<span className='hidden xl:inline'>Search</span>
				<kbd className='hidden rounded border border-line px-1.5 font-mono text-[10.5px] text-faint xl:inline'>/</kbd>
			</button>

			{open && (
				<div
					role='dialog'
					aria-modal='true'
					aria-label='Search the guides'
					className='fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-[12vh] dark:bg-black/60'
					onMouseDown={e => e.target === e.currentTarget && setOpen(false)}>
					<div className='fade-in w-full max-w-[560px] overflow-hidden rounded-2xl border border-line bg-panel shadow-float'>
						<div className='flex items-center gap-3 border-b border-line px-4'>
							<SearchIcon className='size-[18px] shrink-0 text-faint' />
							<input
								ref={input}
								value={query}
								onChange={e => {
									setQuery(e.target.value);
									setAt(0);
								}}
								onKeyDown={e => {
									if (e.key === 'Escape') setOpen(false);
									if (e.key === 'ArrowDown') {
										e.preventDefault();
										setAt(i => Math.min(i + 1, hits.length - 1));
									}
									if (e.key === 'ArrowUp') {
										e.preventDefault();
										setAt(i => Math.max(i - 1, 0));
									}
									if (e.key === 'Enter') go(hits[at]);
								}}
								placeholder='Search the guides — models, invitations, filters…'
								aria-label='Search'
								className='search-input h-14 min-w-0 flex-1 bg-transparent text-[16px] font-light outline-none placeholder:text-faint'
							/>
							<button
								type='button'
								onClick={() => setOpen(false)}
								aria-label='Close search'
								className='inline-flex size-8 items-center justify-center rounded-full text-muted hover:text-fg'>
								<X className='size-4' />
							</button>
						</div>
						<ul className='max-h-[55vh] overflow-y-auto p-2'>
							{hits.map((h, i) => (
								<li key={h.href}>
									<button
										type='button'
										onMouseEnter={() => setAt(i)}
										onClick={() => go(h)}
										className={cx('flex w-full flex-col items-start rounded-xl px-3 py-2.5 text-left', i === at && 'bg-subtle')}>
										<span className='text-[14.5px]'>{h.title}</span>
										<span className='caps mt-0.5 !text-[10px] text-faint'>{h.under}</span>
									</button>
								</li>
							))}
							{!hits.length && <li className='px-3 py-6 text-center text-[14px] text-muted'>Nothing matches “{query}”.</li>}
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default Search;
