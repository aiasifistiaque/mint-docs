'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from '@/components/icons';
import { cx } from '@/lib/cx';

/**
 * Light / dark. The site follows the system until someone picks one; the
 * choice is kept in localStorage. THEME_SCRIPT runs in <head> before paint so
 * the page never flashes the wrong theme.
 */

const KEY = 'mint-theme';

export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('${KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','light')}})();`;

type Theme = 'light' | 'dark';

const ThemeToggle = ({ className }: { className?: string }) => {
	const [theme, setTheme] = useState<Theme | null>(null);

	useEffect(() => {
		setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
		// Follow the system while nothing was picked.
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const onChange = (e: MediaQueryListEvent) => {
			let saved: string | null = null;
			try {
				saved = localStorage.getItem(KEY);
			} catch {}
			if (saved === 'light' || saved === 'dark') return;
			const next: Theme = e.matches ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', next);
			setTheme(next);
		};
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, []);

	const toggle = () => {
		const next: Theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', next);
		try {
			localStorage.setItem(KEY, next);
		} catch {}
		setTheme(next);
	};

	const dark = theme === 'dark';
	return (
		<button
			type='button'
			onClick={toggle}
			aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
			title={dark ? 'Light mode' : 'Dark mode'}
			className={cx(
				'inline-flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg',
				className
			)}>
			{/* Before mount the icon is hidden, so it never shows the wrong one. */}
			<span className={cx('transition-opacity', theme ? 'opacity-100' : 'opacity-0')}>
				{dark ? <Sun className='size-[17px]' /> : <Moon className='size-[17px]' />}
			</span>
		</button>
	);
};

export default ThemeToggle;
