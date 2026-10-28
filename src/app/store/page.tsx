import Guide from '@/components/docs/Guide';
import { A, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/store');

/**
 * Your store (backend docs/ecommerce): an e-commerce project — the setup
 * wizard's steps, Store settings, what's built and what the store keeps to
 * itself. Section ids are targets of the tenant panel's GuideLink (store-setup,
 * store-basics, store-outlets, store-products, store-payments, store-returns,
 * store-delivery, store-pos, store-review, store-settings, store-selling) — keep them.
 */

const SECTIONS = [
	{ id: 'store-setup', title: 'Setting up your store' },
	{ id: 'store-basics', title: 'Currency and order numbers' },
	{ id: 'store-outlets', title: 'Outlets' },
	{ id: 'store-products', title: 'Products and variations' },
	{ id: 'store-payments', title: 'How customers pay' },
	{ id: 'store-returns', title: 'Returns and refunds' },
	{ id: 'store-delivery', title: 'Delivery and couriers' },
	{ id: 'store-pos', title: 'The POS' },
	{ id: 'store-review', title: 'Review and set up' },
	{ id: 'store-built', title: 'What you get' },
	{ id: 'store-variants', title: 'Variants, SKUs and barcodes' },
	{ id: 'store-stock', title: 'Stock: counts, adjustments, transfers' },
	{ id: 'store-selling', title: 'Selling at the POS' },
	{ id: 'store-kept', title: 'What the store keeps to itself' },
	{ id: 'store-settings', title: 'Store settings' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const Store = () => (
	<Guide
		href='/store'
		sections={SECTIONS}
		open={{ href: '/store/settings', label: 'Open Store settings' }}>
		<Section
			id='store-setup'
			title='Setting up your store'
			lead='New project → E-commerce. The project opens on a short wizard; answer it and the whole store is built for you.'>
			<P>
				Eight steps — your store, outlets, products, payments, returns, delivery, the POS, and a review. Each step is saved
				when you go on, so you can leave and come back where you were. Nothing is built until you press{' '}
				<strong>Set up my store</strong> on the review; then it takes about a minute, and you can leave the page while it runs.
			</P>
			<P>
				A store is still a normal project: you can build your own models next to it, link them to products, orders or
				customers, and use automations, PDF templates and the public API as in any app.
			</P>
		</Section>

		<Section
			id='store-basics'
			title='Currency and order numbers'>
			<Terms
				head={['Answer', 'What it does']}
				rows={[
					['Currency', 'The money the store sells in — your organization’s country’s by default.'],
					['Order number prefix', 'Orders are numbered with it: ORD00001, ORD00002… Changing it later numbers new orders only.'],
					['Sell items the outlet has none of', 'Off (the default): the POS refuses a sale bigger than the outlet’s stock. On: stock may go below zero, to be counted later.'],
				]}
			/>
		</Section>

		<Section
			id='store-outlets'
			title='Outlets'
			lead='Every shop, stall or warehouse — each keeps its own stock.'>
			<List
				items={[
					'A store sells: the POS opens at a store, and a register (till) is made at each one.',
					'A warehouse keeps stock and sends it on to stores with a stock transfer.',
					'Each needs a short code (MAIN, DHK-1) — it’s printed on receipts.',
				]}
			/>
			<P>After setup, outlets are records of their own on the Outlets page: add, rename or close them there.</P>
		</Section>

		<Section
			id='store-products'
			title='Products and variations'>
			<Terms
				head={['Answer', 'What it does']}
				rows={[
					['Products come in variations', 'Sizes, colours, flavours. Each variation (a variant) has its own price, SKU, barcode and stock, and the POS asks which one. Off: each product is one item — MINT keeps one hidden variant for it.'],
					['What products vary by', 'Up to three option names (Size, Colour). Each product picks its own values.'],
					['Scan barcodes', 'The POS adds an item when its barcode or SKU is scanned or typed.'],
					['Track stock', 'The default for new products; off for services or made-to-order items.'],
					['Brands', 'Shows a Brands page and a brand on each product.'],
				]}
			/>
		</Section>

		<Section
			id='store-payments'
			title='How customers pay'>
			<Terms
				head={['Kind', 'How it works']}
				rows={[
					['In the store', 'Cash, card on your own terminal, bank transfer, and — in Bangladesh — bKash, Nagad and Rocket by reference. The POS records the amount and the slip or transaction id; it doesn’t charge cards itself.'],
					['Your own ways', 'A gift voucher, a cheque: named once, picked at the till like the others.'],
					['Online', <>Your own Stripe, SSLCommerz or bKash merchant account (by your country), for payment links on orders and refunds back to the card or wallet. Add the keys on <A href='/payments'>Payments</A> after setup.</>],
				]}
			/>
			<P>A sale can be paid several ways at once (part cash, part card); cash shows the change to give.</P>
		</Section>

		<Section
			id='store-returns'
			title='Returns and refunds'>
			<Terms
				head={['Answer', 'What it does']}
				rows={[
					['Take returns', 'Off: orders can’t be returned.'],
					['Returns accepted for', 'Days after the sale; 0 for no limit.'],
					['Part of an order', 'Some lines, or some of a line’s quantity. The refund is worked out from what was paid for those items — their share of discounts and coupons included, tax as charged.'],
					['Back to stock', 'The default for each returned item; damaged ones can be kept out of stock.'],
					['Store credit', 'A refund can go to the customer’s credit, spent later at the POS like money.'],
					['Refund by', 'Which ways money goes back: the way they paid (online payments through the gateway), cash, store credit, or another way noted by hand.'],
				]}
			/>
		</Section>

		<Section
			id='store-delivery'
			title='Delivery and couriers'>
			<P>
				Switch on <strong>Deliver orders</strong> for orders taken by phone or by hand that go to the customer: they get a
				delivery address and a shipping charge from the list you set. Pick the couriers you use (in Bangladesh: Steadfast,
				Pathao, RedX) — an order’s page then has <strong>Send to courier</strong>, which books the parcel with your courier
				account and follows its tracking. You connect the courier account after setup.
			</P>
		</Section>

		<Section
			id='store-pos'
			title='The POS'>
			<Terms
				head={['Answer', 'What it does']}
				rows={[
					['Receipts', '80 mm receipt printer or A4, with your own lines at the top and bottom. Each receipt carries the order number, used to find the sale for a return.'],
					['Registers and shifts', 'A cashier opens a shift with the cash in the drawer, and closes it with a count; the POS shows what should be there and the difference.'],
					['Hold a sale', 'Park a basket and serve the next customer; pick it up later.'],
					['Discounts', 'Money or a percentage off an item or the whole sale.'],
					['Coupon codes', 'Codes from the Coupons page, checked at the till.'],
					['Every sale needs a customer', 'Off: walk-in sales are fine.'],
					['Tax', 'No tax, tax in the price (receipts show how much was tax), or tax added at the till — with one or more rates; a product can carry its own.'],
				]}
			/>
		</Section>

		<Section
			id='store-review'
			title='Review and set up'>
			<P>
				The review shows each step in one line; <em>Needs a look</em> marks a step with something missing. Press{' '}
				<strong>Set up my store</strong>. If the setup can’t finish, nothing of it is kept and the wizard says why — fix it and
				set up again.
			</P>
		</Section>

		<Section
			id='store-built'
			title='What you get'
			lead='A Store section (POS, Orders, Returns, Store settings) and an E-commerce section with the store’s pages.'>
			<Terms
				head={['Page', 'Holds']}
				rows={[
					['Products, Variants, Categories, Brands', 'Your catalogue. Every sale is of a variant.'],
					['Outlets, Stock, Stock movements', 'Stock per variant per outlet, and every change with its reason.'],
					['Stock adjustments, Stock transfers', 'Counted, damaged or found stock; stock moved between outlets.'],
					['Customers, Store credit', 'Who buys, their orders and spending, and their credit.'],
					['Orders, Payments, Returns', 'Sales, money in and out (payments and refunds in one list), and items brought back.'],
					['Coupons, Tax rates, Registers, Shifts', 'As you switched them on.'],
				]}
			/>
			<P>Pages for things you switched off stay hidden until you switch them on in Store settings.</P>
		</Section>

		<Section
			id='store-variants'
			title='Variants, SKUs and barcodes'
			lead='Every sale is of a variant — one size and colour of a product, or the product itself.'>
			<List
				items={[
					'Give a product its options (Size: S, M, L · Colour: White, Navy) and save: its variants are made from every combination. Add a value later and the new combinations appear; take one away and those variants stop selling — they’re never deleted, since orders and stock name them.',
					'A product without options has one variant of its own, hidden, that follows the product’s SKU, barcode and status.',
					'A variant can have its own SKU, barcode and price; an empty price is the product’s.',
					'SKUs and barcodes are one item’s each — saving one that another item has is refused, naming who has it.',
				]}
			/>
		</Section>

		<Section
			id='store-stock'
			title='Stock: counts, adjustments, transfers'
			lead='Stock is kept per variant per outlet, and every change is a stock movement saying why.'>
			<Terms
				head={['To…', 'Do this']}
				rows={[
					['Put in opening stock or a count', 'Open the product → In stock, click the figure for the outlet, and type what’s there (or how many to add or take away).'],
					['Write off damaged or lost items, or count many at once', 'Stock adjustments → New: pick the outlet and reason, find the items, type what was counted (or the change, − to take away), then Apply. It applies once.'],
					['Move stock between outlets', 'Stock transfers → New: from, to, the items and quantities, then Send — it leaves the first outlet. Receive when it arrives and it’s added to the second. A sent transfer can be cancelled, which puts it back.'],
					['See what happened', 'Stock movements: every change with the item, outlet, how much, the figure after it, why and its reference (the order, adjustment or transfer).'],
				]}
			/>
			<Note>A transfer can’t send more than the outlet has — unless you allowed selling below zero in Store settings.</Note>
		</Section>

		<Section
			id='store-selling'
			title='Selling at the POS'
			lead='Store → POS: the till, full screen. Prices, discounts, tax and totals are worked out by the store; the POS shows them.'>
			<Terms
				head={['To…', 'Do this']}
				rows={[
					['Start', 'Pick the register you’re at (it’s remembered on this device). With shifts on, open a shift with the cash in the drawer first.'],
					['Add items', 'Scan a barcode or type a SKU and press Enter, or tap a product. A product with variants asks which one — with how many the outlet has. Tap a category to narrow the grid.'],
					['Change a line', 'Use − and + or type the quantity; the % button gives that item a discount; the bin removes it.'],
					['Add the customer', 'Add a customer: find them by name, phone or email, or add them as new. Their store credit shows under their name.'],
					['Coupon or discount', 'Type the coupon code and Apply, or Discount for money or a percentage off the whole sale. A coupon that can’t be used says why.'],
					['Take the money', 'Pay: the first way to pay is filled with the total. Add another way (+ Card, + bKash…) to split it — it takes what’s left. Cash can be more than what’s due; the change is shown before you finish.'],
					['Print the receipt', 'After the sale: Print (80 mm or A4, as Store settings say), then New sale.'],
					['Hold a sale', 'Hold parks the basket — nothing is taken from stock or paid. Held sales lists them at this register: Resume to carry on, Discard to drop it.'],
					['Cash in, cash out, close', 'Shift since … in the top bar: what the shift has taken by way of paying and the cash that should be in the drawer. Cash in / out records money put in or taken out; Close shift asks for the count and shows if it’s over or short.'],
				]}
			/>
			<Note>A sale that can’t go through — not enough stock, not fully paid, a coupon just used up — changes nothing: no stock moves and no payment is kept.</Note>
		</Section>

		<Section
			id='store-kept'
			title='What the store keeps to itself'
			lead='Money and stock only move through the store — the POS, order pages, returns, adjustments and transfers — so they always add up.'>
			<List
				items={[
					'Orders, payments, returns, stock levels, stock movements, shifts and store credit are made by the store, not with an Add button. Their own fields you added can still be edited.',
					'Fields the store works out — stock on hand, an order’s totals, paid and refunded amounts, a customer’s credit — show greyed out in forms and can’t be imported or changed in bulk.',
					'In Models, the store’s own fields can’t be removed or turned into another kind, and its models can’t be deleted. Rename their labels, add your own fields and links, change the layout — that’s all fine.',
				]}
			/>
		</Section>

		<Section
			id='store-settings'
			title='Store settings'
			lead='Store → Store settings: the wizard’s answers, a card each, saved on its own.'>
			<P>
				Switching something on shows its pages at once (coupons, brands, shifts…). Switching it off hides them — but not
				while it still holds what it made: variations stay on while a product has several variants, store credit while a
				customer has credit, shifts while one is open.
			</P>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['Symptom', 'What to do']}
				rows={[
					['“The last setup didn’t finish”', 'The reason is shown above the wizard; nothing from it was kept. Check the step it names and set up again.'],
					['“… is kept by the store and can’t be changed here”', 'That field moves with sales, returns or counts. Use the POS, the order’s page or a stock adjustment instead.'],
					['“… is part of your store — some of its fields can’t change”', 'The field is one the store relies on. Rename its label or hide it from the page instead.'],
					['“Open a shift on this register first”', 'Shifts are on for your store: open one from the POS with the cash in the drawer, or switch shifts off in Store settings.'],
					['“Only 2 of … left here”', 'The outlet hasn’t got enough. Sell fewer, move stock in with a transfer, or count it in if the figure is wrong.'],
					['“Only cash can be more than what’s due”', 'A card, wallet or store credit can only cover what’s left to pay. Lower it, or take the extra in cash.'],
				]}
			/>
		</Section>
	</Guide>
);

export default Store;
