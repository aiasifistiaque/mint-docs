import Link from 'next/link';
import { cx } from '@/lib/cx';

/**
 * The mark: an "M" drawn in one stroke on the brand gradient, with the AI's
 * spark resting between its peaks. app/icon.svg is the same drawing.
 */
export const Mark = ({ size = 22, className }: { size?: number; className?: string }) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 32 32'
		aria-hidden
		className={className}>
		<defs>
			<linearGradient
				id='mint-mark'
				x1='2'
				y1='2'
				x2='30'
				y2='30'
				gradientUnits='userSpaceOnUse'>
				<stop stopColor='#10b981' />
				<stop
					offset='0.45'
					stopColor='#06b6d4'
				/>
				<stop
					offset='1'
					stopColor='#7c3aed'
				/>
			</linearGradient>
			<linearGradient
				id='mint-mark-sheen'
				x1='16'
				y1='0'
				x2='16'
				y2='18'
				gradientUnits='userSpaceOnUse'>
				<stop
					stopColor='#fff'
					stopOpacity='0.28'
				/>
				<stop
					offset='1'
					stopColor='#fff'
					stopOpacity='0'
				/>
			</linearGradient>
		</defs>
		<rect
			width='32'
			height='32'
			rx='9.5'
			fill='url(#mint-mark)'
		/>
		<rect
			width='32'
			height='32'
			rx='9.5'
			fill='url(#mint-mark-sheen)'
		/>
		<path
			d='M9.5 22.5V10.5L16 17L22.5 10.5V22.5'
			fill='none'
			stroke='#fff'
			strokeWidth='2.6'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16 6.6Q16.45 9.05 18.9 9.5Q16.45 9.95 16 12.4Q15.55 9.95 13.1 9.5Q15.55 9.05 16 6.6Z'
			fill='#fff'
		/>
	</svg>
);

const Logo = ({ className }: { className?: string }) => (
	<Link
		href='/'
		aria-label='MINT Guides home'
		className={cx('inline-flex items-center gap-2.5', className)}>
		<Mark size={28} />
		<span className='text-[15px] font-light uppercase tracking-[0.34em]'>Mint</span>
		<span className='caps !text-[10.5px] text-faint'>Guides</span>
	</Link>
);

export default Logo;
