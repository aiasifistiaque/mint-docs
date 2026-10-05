/**
 * The site's five colour tones. Workflow steps, feature groups, personas and
 * charts each carry one. Class names are written out in full so Tailwind
 * keeps them.
 */

export type Tone = 'emerald' | 'sky' | 'violet' | 'amber' | 'rose' | 'cyan';

export const TONES: Record<
	Tone,
	{ text: string; bg: string; soft: string; border: string; ring: string; grad: string; hex: string; dot: string }
> = {
	emerald: {
		text: 'text-emerald-600 dark:text-emerald-400',
		bg: 'bg-emerald-500',
		soft: 'bg-emerald-50 dark:bg-emerald-400/10',
		border: 'border-emerald-200 dark:border-emerald-400/25',
		ring: 'ring-emerald-500/20',
		grad: 'from-emerald-400 to-teal-500',
		hex: '#10b981',
		dot: 'bg-emerald-400',
	},
	sky: {
		text: 'text-sky-600 dark:text-sky-400',
		bg: 'bg-sky-500',
		soft: 'bg-sky-50 dark:bg-sky-400/10',
		border: 'border-sky-200 dark:border-sky-400/25',
		ring: 'ring-sky-500/20',
		grad: 'from-sky-400 to-blue-500',
		hex: '#0ea5e9',
		dot: 'bg-sky-400',
	},
	violet: {
		text: 'text-violet-600 dark:text-violet-400',
		bg: 'bg-violet-500',
		soft: 'bg-violet-50 dark:bg-violet-400/10',
		border: 'border-violet-200 dark:border-violet-400/25',
		ring: 'ring-violet-500/20',
		grad: 'from-violet-400 to-purple-500',
		hex: '#8b5cf6',
		dot: 'bg-violet-400',
	},
	amber: {
		text: 'text-amber-600 dark:text-amber-400',
		bg: 'bg-amber-500',
		soft: 'bg-amber-50 dark:bg-amber-400/10',
		border: 'border-amber-200 dark:border-amber-400/25',
		ring: 'ring-amber-500/20',
		grad: 'from-amber-400 to-orange-500',
		hex: '#f59e0b',
		dot: 'bg-amber-400',
	},
	rose: {
		text: 'text-rose-600 dark:text-rose-400',
		bg: 'bg-rose-500',
		soft: 'bg-rose-50 dark:bg-rose-400/10',
		border: 'border-rose-200 dark:border-rose-400/25',
		ring: 'ring-rose-500/20',
		grad: 'from-rose-400 to-pink-500',
		hex: '#f43f5e',
		dot: 'bg-rose-400',
	},
	cyan: {
		text: 'text-cyan-600 dark:text-cyan-400',
		bg: 'bg-cyan-500',
		soft: 'bg-cyan-50 dark:bg-cyan-400/10',
		border: 'border-cyan-200 dark:border-cyan-400/25',
		ring: 'ring-cyan-500/20',
		grad: 'from-cyan-400 to-sky-500',
		hex: '#06b6d4',
		dot: 'bg-cyan-400',
	},
};

export const tone = (t: Tone = 'emerald') => TONES[t];
