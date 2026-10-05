import Guide from '@/components/docs/Guide';
import { A, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/payments');

/**
 * Payments (backend docs/widgets W-06/W-07): how checkout and payments work,
 * connecting Stripe and its webhook, return pages, the payments list, what's
 * coming. Section ids are targets of the tenant panel's GuideLink (payments,
 * stripe, return-pages, payments-list, coming) — keep them.
 */

const SECTIONS = [
	{ id: 'payments', title: 'How payments work' },
	{ id: 'stripe', title: 'Connecting Stripe' },
	{ id: 'return-pages', title: 'After paying' },
	{ id: 'test-payment', title: 'A test payment' },
	{ id: 'payments-list', title: 'The payments list' },
	{ id: 'coming', title: 'Coming next' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const Payments = () => (
	<Guide
		href='/payments'
		sections={SECTIONS}
		open={{ href: '/site-payments', label: 'Open Payments' }}>
		<Section
			id='payments'
			title='How payments work'
			lead='Buyers pay on your payment provider’s own secure page; the money goes straight to your account. MINT never holds it.'>
			<List
				items={[
					<>
						The <A href='/widgets#checkout'>Checkout widget</A> sends what’s in the cart — products and quantities, never
						prices. MINT prices it from your catalogue and writes the order in your orders model as <em>waiting for payment</em>.
					</>,
					'The buyer is sent to the provider’s page (Stripe Checkout) for the total, and pays there.',
					'The provider tells MINT the payment went through (its webhook). MINT checks the message is really from your provider, asks the provider again for the amount, and only then marks the order Paid.',
					'Then stock goes down, the buyer’s cart empties, your order webhook fires, your team gets a notification and the buyer gets a receipt from your own email address (if you’ve set up Email).',
				]}
			/>
			<Note>
				Nobody can mark their own order paid: an order’s status and payment reference are read-only on your public API once
				the Shop’s orders are set up, and the webhook is checked against your provider’s secret.
			</Note>
			<P>
				Before you start: set up the Shop and its Orders on the <A href='/widgets#shop'>Widgets page</A>.
			</P>
		</Section>

		<Section
			id='stripe'
			title='Connecting Stripe'
			lead='Project → Payments. You need a Stripe account; start in test mode.'>
			<Terms
				head={['Step', 'What to do']}
				rows={[
					['1. Keys', 'In Stripe → Developers → API keys, copy the publishable key (pk_test_…) and the secret key (sk_test_…) into Payments.'],
					['2. Webhook', <>In Stripe → Developers → Webhooks, add an endpoint with the address Payments shows, and the events <code>checkout.session.completed</code>, <code>checkout.session.expired</code>, <code>checkout.session.async_payment_succeeded</code> and <code>checkout.session.async_payment_failed</code>.</>],
					['3. Signing secret', 'Open the endpoint in Stripe, reveal its signing secret (whsec_…) and paste it into Payments.'],
					['4. Switch on', 'Turn on “Offer card payments at checkout”, save, and press “Check the key with Stripe”.'],
				]}
			/>
			<P>
				Keys are stored encrypted and never shown again. Test keys work only in test mode and live keys only in live mode;
				switching mode needs that mode’s keys (and a webhook endpoint made in that mode). Going live asks you to confirm.
			</P>
		</Section>

		<Section
			id='return-pages'
			title='After paying'
			lead='Where Stripe sends buyers back to.'>
			<Terms
				head={['Page', 'What it is']}
				rows={[
					['Thank-you page', <>Put the <A href='/widgets#thanks'>Thank-you widget</A> on it. <code>{'{ref}'}</code> in the address becomes the payment’s reference, which the widget reads. Empty: your site’s <code>/thank-you?ref={'{ref}'}</code>.</>],
					['If they go back', 'Usually your cart page. Empty: your site’s /cart.'],
				]}
			/>
			<P>Without a domain in Site setup, fill both in — Stripe needs full addresses (https://…).</P>
		</Section>

		<Section
			id='test-payment'
			title='A test payment'>
			<List
				items={[
					'In test mode, add something to the cart on your site and check out.',
					'On Stripe’s page pay with the card 4242 4242 4242 4242, any future date and any CVC.',
					'You come back to the thank-you page, which shows “Confirming your payment…” and then the order — usually within a second or two.',
					'The order is Paid in your orders table, and the payment is in Payments.',
				]}
			/>
		</Section>

		<Section
			id='payments-list'
			title='The payments list'
			lead='Every checkout, newest first, with its order, the buyer’s email, the amount and how it went.'>
			<Terms
				head={['Status', 'Means']}
				rows={[
					['Waiting', 'The buyer is on the provider’s page, or left it without paying (yet).'],
					['Paid', 'The provider confirmed it, for the right amount.'],
					['Failed', 'The page couldn’t be opened, the payment failed, or the amount paid didn’t match — the reason is shown.'],
					['Abandoned', 'The provider’s page expired unpaid (after 24 hours on Stripe).'],
				]}
			/>
		</Section>

		<Section
			id='coming'
			title='Coming next'>
			<P>
				SSLCommerz and bKash for organizations in Bangladesh, cash on delivery and bank transfer everywhere, and refunds from
				the order page. The providers you can use follow your organization’s country.
			</P>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['Symptom', 'What to do']}
				rows={[
					['Paid on Stripe, but the order is still waiting', 'Check the webhook in Stripe: the address must be the one Payments shows, with the four events, and its signing secret pasted in Payments. Stripe’s webhook page shows each attempt and its answer.'],
					['“Stripe refused the secret key”', 'Copy the secret key again — and check it’s for the mode you chose (sk_test_ for test).'],
					['The checkout says no way to pay is switched on', 'Turn on “Offer card payments at checkout” and save.'],
					['A payment is Failed with “expected …”', 'What was paid didn’t match the order. The order stays unpaid — check it in Stripe before doing anything.'],
				]}
			/>
		</Section>
	</Guide>
);

export default Payments;
