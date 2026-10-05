'use client';

import { useEffect, useState } from 'react';
import { cx } from '@/lib/cx';

type Item = { id: string; title: string };

/**
 * A guide's "On this page" list. It stays in place while the page scrolls
 * (sticky, under the header), scrolls on its own when it's taller than the
 * screen, and marks the section being read.
 */
const GuideNav = ({ sections }: { sections: Item[] }) => {
	const [active, setActive] = useState(sections[0]?.id || '');

	// Arriving with a #section (a link from the app, or the app's old
	// /user-docs address redirecting here): the browser's own jump can happen
	// before the page has settled, or be undone while it hydrates — jump again.
	useEffect(() => {
		const id = decodeURIComponent(window.location.hash.slice(1));
		if (id) document.getElementById(id)?.scrollIntoView();
	}, []);

	// The section being read: the last one whose heading has passed a line a
	// little below the header. At the very bottom, the last section.
	useEffect(() => {
		const ids = sections.map(s => s.id);
		let frame = 0;
		const update = () => {
			frame = 0;
			let current = ids[0] || '';
			for (const id of ids) {
				const el = document.getElementById(id);
				if (el && el.getBoundingClientRect().top <= 140) current = id;
			}
			const doc = document.scrollingElement || document.documentElement;
			if (doc.scrollTop + window.innerHeight >= doc.scrollHeight - 4) current = ids[ids.length - 1] || current;
			setActive(current);
		};
		const onScroll = () => {
			// A hidden tab runs no animation frames; update at once there.
			if (document.visibilityState === 'hidden') return update();
			if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('hashchange', update);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('hashchange', update);
			if (frame) cancelAnimationFrame(frame);
		};
	}, [sections]);

	return (
		<nav
			aria-label='On this page'
			className='sticky top-[88px] hidden max-h-[calc(100dvh-112px)] self-start overflow-y-auto pr-2 [scrollbar-width:thin] lg:block'>
			<p className='caps mb-3 !text-[10.5px] text-faint'>On this page</p>
			<div className='flex flex-col border-l border-line'>
				{sections.map(s => {
					const on = s.id === active;
					return (
						<a
							key={s.id}
							href={`#${s.id}`}
							aria-current={on ? 'location' : undefined}
							className={cx(
								'-ml-px border-l-2 py-1.5 pl-3 text-[13.5px] leading-snug transition-colors',
								on ? 'border-emerald-500 text-fg' : 'border-transparent text-muted hover:text-fg'
							)}>
							{s.title}
						</a>
					);
				})}
			</div>
		</nav>
	);
};

export default GuideNav;
