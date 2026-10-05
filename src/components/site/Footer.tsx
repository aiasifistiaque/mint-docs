import Link from 'next/link';
import { GROUPS, GUIDES } from '@/content/guides';
import { APP_HOME, WEBSITE_URL } from '@/lib/config';
import Logo from './Logo';

/** Every guide by group, and the way back to MINT and its website. */
const Footer = () => (
	<footer className='border-t border-line bg-panel dark:bg-ink'>
		<div className='mx-auto w-full max-w-[1200px] px-4 pb-8 pt-14 md:px-8'>
			<div className='grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-12'>
				<div className='col-span-2 max-w-[300px] md:col-span-1'>
					<Logo />
					<p className='mt-5 text-[14px] leading-relaxed text-muted'>
						How to build and run your projects on MINT — from your first model to a live site.
					</p>
					<div className='mt-6 flex flex-col gap-2.5'>
						<a
							href={APP_HOME}
							className='caps !font-light text-muted transition-colors hover:text-fg'>
							Open MINT
						</a>
						<a
							href={WEBSITE_URL}
							className='caps !font-light text-muted transition-colors hover:text-fg'>
							mintapp.shop
						</a>
					</div>
				</div>
				{[GROUPS.slice(0, 2), GROUPS.slice(2, 4), GROUPS.slice(4)].map((col, i) => (
					<div
						key={i}
						className='flex flex-col gap-8'>
						{col.map(group => (
							<div key={group.name}>
								<p className='caps mb-4 !text-[10.5px] text-faint'>{group.name}</p>
								<ul className='flex flex-col gap-2'>
									{GUIDES.filter(g => g.group === group.name).map(g => (
										<li key={g.href}>
											<Link
												href={g.href}
												className='text-[13.5px] text-muted transition-colors hover:text-fg'>
												{g.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				))}
			</div>
			<div className='caps mt-12 flex flex-col justify-between gap-2 border-t border-line pt-6 !text-[10.5px] !font-light text-faint sm:flex-row'>
				<p>© {new Date().getFullYear()} MINT. All rights reserved.</p>
				<p>MINT Guides</p>
			</div>
		</div>
	</footer>
);

export default Footer;
