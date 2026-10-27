import Guide from '@/components/docs/Guide';
import { A, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/payments');

/**
 * Payments (backend docs/widgets W-06/W-07/W-07b): how checkout and payments
 * work, connecting Stripe and its webhook, SSLCommerz and bKash (Bangladesh),
 * return pages, the payments list, what's coming. Section ids are targets of
 * the tenant panel's GuideLink (payments, stripe, sslcommerz, bkash,
 * return-pages, payments-list, coming) — keep them.
 */

const SECTIONS = [
	{ id: 'payments', title: 'How payments work' },
	{ id: 'stripe', title: 'Connecting Stripe' },
	{ id: 'sslcommerz', title: 'Connecting SSLCommerz' },
	{ id: 'bkash', title: 'Connecting bKash' },
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
					'The buyer picks a way to pay (if you’ve switched on more than one) and is sent to that provider’s page — Stripe Checkout, SSLCommerz or bKash — for the total, and pays there.',
					'MINT hears back from the provider — Stripe’s webhook, SSLCommerz’s return and IPN, bKash’s return. Whatever arrives, MINT’s server asks the provider itself, with your own keys, whether the payment really went through and for how much, and only then marks the order Paid.',
					'Then stock goes down, the buyer’s cart empties, your order webhook fires, your team gets a notification and the buyer gets a receipt from your own email address (if you’ve set up Email).',
				]}
			/>
			<Note>
				Nobody can mark their own order paid: an order’s status and payment reference are read-only on your public API once
				the Shop’s orders are set up, and nothing a browser sends back — a return address, a reference — is believed until the
				provider confirms it to MINT’s server.
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
					['4. Switch on', 'Turn on “Offer card payments through Stripe at checkout”, save, and press “Check the details with Stripe”.'],
				]}
			/>
			<P>
				Keys are stored encrypted and never shown again. Test keys work only in test mode and live keys only in live mode;
				switching mode needs that mode’s keys (and a webhook endpoint made in that mode). Going live asks you to confirm.
			</P>
		</Section>

		<Section
			id='sslcommerz'
			title='Connecting SSLCommerz'
			lead='For organizations in Bangladesh. One SSLCommerz store takes cards, bKash, Nagad, Rocket and internet banking on SSLCommerz’s own page.'>
			<Terms
				head={['Step', 'What to do']}
				rows={[
					['1. A store', <>Start with a free sandbox store from <A href='https://developer.sslcommerz.com/registration/'>developer.sslcommerz.com</A>. SSLCommerz emails a <em>store id</em> and a <em>store password</em> (the API password — not the one you log in to their panel with). A live store comes from SSLCommerz once your business is approved.</>],
					['2. Details', 'Project → Payments → SSLCommerz: pick Sandbox (or Live), paste the store id and store password.'],
					['3. Switch on', 'Turn on “Offer SSLCommerz at checkout”, save, and press “Check the details with SSLCommerz”.'],
				]}
			/>
			<P>
				There’s no webhook to set up: MINT sends SSLCommerz the addresses to send buyers back to, and the IPN address shown in
				Payments, with every payment. You can also put that IPN address in SSLCommerz’s merchant panel → My Stores → IPN
				Settings. Each time, MINT asks SSLCommerz’s validation service before an order turns Paid.
			</P>
			<P>
				SSLCommerz takes BDT and a few other currencies (USD, EUR, GBP, SGD, INR, MYR, AUD, CAD); if your Shop’s prices are in
				another one, checkout doesn’t offer it. A payment SSLCommerz marks as risky stays <em>Waiting</em>, with a note —
				check it in your SSLCommerz panel before you ship.
			</P>
		</Section>

		<Section
			id='bkash'
			title='Connecting bKash'
			lead='For organizations in Bangladesh. Buyers approve the payment in bKash with their wallet number, a code and their PIN.'>
			<Terms
				head={['Step', 'What to do']}
				rows={[
					['1. A merchant account', 'bKash opens a merchant account for Tokenized Checkout and sends four details: a username, a password, an app key and an app secret — for its sandbox first, then for live.'],
					['2. Details', 'Project → Payments → bKash: pick Sandbox (or Live) and paste all four.'],
					['3. Switch on', 'Turn on “Offer bKash at checkout”, save, and press “Check the details with bKash”.'],
				]}
			/>
			<P>
				bKash sends the buyer back to MINT, which then completes (executes) the payment with bKash itself — or looks it up
				if that answer was lost — and only a completed payment for the right amount makes the order Paid. bKash takes BDT
				only: with prices in another currency, checkout doesn’t offer it.
			</P>
			<Note>
				Passwords and secrets are stored encrypted and never shown again; leave a field empty to keep what’s stored.
				Switching between Sandbox and Live needs that mode’s details.
			</Note>
		</Section>

		<Section
			id='return-pages'
			title='After paying'
			lead='Where buyers land after paying, whichever provider they used.'>
			<Terms
				head={['Page', 'What it is']}
				rows={[
					['Thank-you page', <>Put the <A href='/widgets#thanks'>Thank-you widget</A> on it. <code>{'{ref}'}</code> in the address becomes the payment’s reference, which the widget reads. Empty: your site’s <code>/thank-you?ref={'{ref}'}</code>.</>],
					['If they go back', 'Usually your cart page. Empty: your site’s /cart.'],
				]}
			/>
			<P>Without a domain in Site setup, fill both in — providers need full addresses (https://…).</P>
		</Section>

		<Section
			id='test-payment'
			title='A test payment'>
			<List
				items={[
					'In test mode, add something to the cart on your site and check out.',
					'On Stripe’s page pay with the card 4242 4242 4242 4242, any future date and any CVC. In SSLCommerz’s sandbox pick any method — its test page has Success and Failed buttons. In bKash’s sandbox use the test wallet bKash gives you with the sandbox details.',
					'You come back to the thank-you page, which shows “Confirming your payment…” and then the order — usually within a second or two.',
					'The order is Paid in your orders table, and the payment is in Payments.',
				]}
			/>
		</Section>

		<Section
			id='payments-list'
			title='The payments list'
			lead='Every checkout, newest first, with its order, the buyer’s email, how they paid, the amount and how it went.'>
			<Terms
				head={['Status', 'Means']}
				rows={[
					['Waiting', 'The buyer is on the provider’s page, or left it without paying (yet) — or SSLCommerz flagged it as risky (the note says so).'],
					['Paid', 'The provider confirmed it, for the right amount.'],
					['Failed', 'The page couldn’t be opened, the payment failed, or the amount paid didn’t match — the reason is shown.'],
					['Cancelled', 'The buyer went back from SSLCommerz’s or bKash’s page.'],
					['Abandoned', 'The provider’s page expired unpaid (after 24 hours on Stripe).'],
				]}
			/>
		</Section>

		<Section
			id='coming'
			title='Coming next'>
			<P>
				Cash on delivery and bank transfer everywhere, and refunds from the order page. The providers you can use follow your
				organization’s country: Stripe; in Bangladesh also SSLCommerz and bKash.
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
					['The checkout says no way to pay is switched on', 'Turn a provider on in Payments and save. SSLCommerz and bKash also need a currency they take (bKash: BDT).'],
					['Paid on SSLCommerz or bKash, but the order is still waiting', 'Open the payment in the list: its note says what the provider answered. For SSLCommerz, check the store id and password are for the mode you chose (Sandbox / Live); a risky payment waits for you on purpose.'],
					['“SSLCommerz refused the store id or password” / “bKash refused the merchant details”', 'Paste them again for the mode you chose — sandbox details don’t work live and the other way round.'],
					['A payment is Failed with “expected …”', 'What was paid didn’t match the order. The order stays unpaid — check it in Stripe before doing anything.'],
				]}
			/>
		</Section>
	</Guide>
);

export default Payments;
