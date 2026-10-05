import Link from 'next/link';
import { ArrowRight } from '@/components/icons';

export default function NotFound() {
	return (
		<div className='mx-auto flex w-full max-w-[640px] flex-col items-start px-4 py-24 md:py-32'>
			<p className='mb-4 font-mono text-[12px] uppercase tracking-[0.16em] text-faint'>404</p>
			<h1 className='text-[34px] md:text-[44px]'>No guide here</h1>
			<p className='mt-5 text-[16px] leading-relaxed text-muted'>
				That page doesn’t exist — it may have moved. Every guide is listed on the home page, or press / to search.
			</p>
			<Link
				href='/'
				className='caps mt-8 inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2.5 !font-light hover:border-line-strong'>
				All guides
				<ArrowRight className='size-3' />
			</Link>
		</div>
	);
}
