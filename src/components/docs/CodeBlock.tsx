'use client';

import { useState } from 'react';
import { Check, Copy } from '@/components/icons';

/** A block of code with a copy button. */
const CodeBlock = ({ code, label = 'code' }: { code: string; label?: string }) => {
	const [copied, setCopied] = useState(false);
	const copy = () => {
		navigator.clipboard?.writeText(code).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		});
	};
	return (
		<div className='relative rounded-xl border border-line bg-subtle'>
			<pre
				aria-label={label}
				className='m-0 overflow-x-auto whitespace-pre-wrap break-words p-4 pr-14 font-mono text-[12.5px] font-normal leading-relaxed'>
				<code>{code}</code>
			</pre>
			<button
				type='button'
				onClick={copy}
				aria-label={`Copy ${label}`}
				className='absolute right-2 top-2 inline-flex h-8 items-center gap-1 rounded-lg border border-line bg-panel px-2 text-[12px] text-muted transition-colors hover:text-fg'>
				{copied ? (
					<>
						<Check className='size-3.5 text-emerald-500' />
						Copied
					</>
				) : (
					<Copy className='size-4' />
				)}
			</button>
		</div>
	);
};

export default CodeBlock;
