'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from '@/components/icons';
import { GROUPS, GUIDES, HEADER_GUIDES } from '@/content/guides';
import { APP_HOME } from '@/lib/config';
import { cx } from '@/lib/cx';
import { tone } from '@/lib/tones';
import Logo from './Logo';
import Search from './Search';
import ThemeToggle from './ThemeToggle';

/**
 * Sticky header: the guides' name (home), the main guides, search, light /
 * dark, and Open MINT. On phones the menu lists every guide by group.
 */

const LINK = 'caps shrink-0 rounded-full px-3 py-2 !text-[11px] !font-light whitespace-nowrap transition-colors';

const Header = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	useEffect(() => setOpen(false), [pathname]);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header className='sticky top-0 z-40 border-b border-line bg-bg'>
			<div className='mx-auto flex h-16 w-full max-w-[1200px] items-center gap-4 px-4 md:px-8'>
				<Logo className='shrink-0' />
				<nav
					aria-label='Guides'
					className='hidden min-w-0 flex-1 items-center gap-0.5 overflow-x-auto [scrollbar-width:none] xl:flex'>
					{HEADER_GUIDES.map(g => (
						<Link
							key={g.href}
							href={g.href}
							aria-current={pathname === g.href ? 'page' : undefined}
							className={cx(LINK, pathname === g.href ? 'bg-soft text-fg' : 'text-muted hover:text-fg')}>
							{g.title}
						</Link>
					))}
				</nav>
				<div className='ml-auto flex shrink-0 items-center gap-1.5'>
					<Search />
					<ThemeToggle />
					<a
						href={APP_HOME}
						className='caps ml-1 hidden h-9 items-center gap-1.5 rounded-full bg-ink px-4 !text-[11px] !font-normal text-white transition-opacity hover:opacity-85 dark:bg-fg dark:text-bg sm:inline-flex'>
						Open MINT
						<ArrowUpRight className='size-3' />
					</a>
					<button
						type='button'
						aria-label={open ? 'Close menu' : 'Open menu'}
						aria-expanded={open}
						onClick={() => setOpen(o => !o)}
						className='inline-flex size-9 items-center justify-center rounded-full border border-line xl:hidden'>
						{open ? <X className='size-4' /> : <Menu className='size-4' />}
					</button>
				</div>
			</div>

			{open && (
				<div className='fade-in h-[calc(100dvh-64px)] overflow-y-auto border-t border-line bg-bg px-4 pb-10 pt-2 xl:hidden'>
					<nav
						aria-label='All guides'
						className='flex flex-col'>
						{GROUPS.map(group => (
							<div
								key={group.name}
								className='border-b border-line py-4'>
								<p className='caps flex items-center gap-2 !text-[10.5px] text-faint'>
									<span className={cx('size-1.5 rounded-full', tone(group.tone).bg)} />
									{group.name}
								</p>
								<div className='mt-2 flex flex-col'>
									{GUIDES.filter(g => g.group === group.name).map(g => (
										<Link
											key={g.href}
											href={g.href}
											className={cx('py-2 text-[15px] font-light', pathname === g.href ? 'text-fg' : 'text-muted')}>
											{g.name}
										</Link>
									))}
								</div>
							</div>
						))}
					</nav>
					<a
						href={APP_HOME}
						className='caps mt-8 flex h-12 items-center justify-center gap-1.5 rounded-full bg-ink !text-[11.5px] !font-normal text-white dark:bg-fg dark:text-bg'>
						Open MINT
						<ArrowUpRight className='size-3' />
					</a>
				</div>
			)}
		</header>
	);
};

export default Header;
