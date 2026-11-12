import Guide from '@/components/docs/Guide';
import { A, C, CodeBlock, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { PROJECT_KEY, PUBLIC_API } from '@/lib/config';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/store');

/**
 * Your store (backend docs/ecommerce): an e-commerce project — the setup
 * wizard's steps, Store settings, what's built and what the store keeps to
 * itself. Section ids are targets of the tenant panel's GuideLink (store-setup,
 * store-basics, store-outlets, store-products, store-payments, store-returns,
 * store-delivery, store-pos, store-review, store-settings, store-selling, store-orders,
 * store-order, store-returns-page, store-categories, store-collections, store-discounts, and the couriers' store-couriers, store-courier-steadfast,
 * store-courier-pathao, store-courier-redx, store-courier-manual, store-send-to-courier, store-delivery-card,
 * store-deliveries, store-delivery-risk) — keep them.
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
	{ id: 'store-categories', title: 'Categories' },
	{ id: 'store-collections', title: 'Collections' },
	{ id: 'store-discounts', title: 'Discounts' },
	{ id: 'store-variants', title: 'Variants, SKUs and barcodes' },
	{ id: 'store-stock', title: 'Stock: counts, adjustments, transfers' },
	{ id: 'store-selling', title: 'Selling at the POS' },
	{ id: 'store-orders', title: 'Orders' },
	{ id: 'store-order', title: 'An order’s page' },
	{ id: 'store-returns-page', title: 'Returns' },
	{ id: 'store-couriers', title: 'Your courier accounts' },
	{ id: 'store-courier-steadfast', title: 'Connecting Steadfast' },
	{ id: 'store-courier-pathao', title: 'Connecting Pathao' },
	{ id: 'store-courier-redx', title: 'Connecting RedX' },
	{ id: 'store-courier-manual', title: 'Couriers without an API' },
	{ id: 'store-send-to-courier', title: 'Sending an order to a courier' },
	{ id: 'store-delivery-card', title: 'An order’s parcel' },
	{ id: 'store-deliveries', title: 'Deliveries' },
	{ id: 'store-delivery-risk', title: 'Checking a buyer' },
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
					['Guest checkout on your website', 'On (the default): buyers can order on your website without an account. Off: they sign in or sign up first. Your website reads this setting from your project’s public API (GET /store).'],
					['Time zone', 'Where your store’s days start and end — your organization’s country’s by default (Bangladesh: Asia/Dhaka). A discount that ends on 5 Nov runs until midnight there.'],
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
					['Collections', 'On (the default): shows the Collections page — groups of products for your website.'],
					['Discounts', 'On (the default): shows the Discounts page — a percentage off products, categories or collections.'],
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
				Pathao, RedX — or a courier without an API, typed by hand) — an order’s page then has <strong>Send to courier</strong>,
				which books the parcel with your own courier account and follows it. You connect each account after setup, on Delivery
				settings: see <A href='#store-couriers'>Your courier accounts</A>.
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
					['Coupons apply to', 'On an item with a discount: the discounted price (the default) or the original price. 10% off a 100 item that’s 20% off takes 8 (10% of 80) or 10 (10% of 100) — either way off the 80.'],
					['Every sale needs a customer', 'Off: walk-in sales are fine.'],
					['Tax', 'No tax, tax in the price (receipts show how much was tax), or tax added at the till — with one or more rates; a product can carry its own, and one without is charged the default rate.'],
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
			id='store-categories'
			title='Categories'
			lead='How products are grouped — each category shown on the POS and your website as you choose, in its own order on each.'>
			<Terms
				head={['Field', 'What it does']}
				rows={[
					['Web address', 'Its address on your website. Left empty, it’s made from the name: Local Chicken → local-chicken. One that’s taken gets -2, -3…, even when you type it.'],
					['Status on POS', 'Inactive: the category isn’t on the POS’s category bar. Its products still sell and can be searched.'],
					['Status on website', 'Inactive: your website’s category list leaves it out.'],
					['Order on POS · Order on website', 'The higher the number, the earlier it shows. Equal numbers go by name.'],
					['Image · More images', 'Its main picture, and more if your website uses several — a banner, a gallery.'],
					['Tax / VAT', 'The tax its products carry. Set or change it and every product in the category takes it, and their Price after tax follows (see Tax and prices).'],
				]}
			/>
			<P>
				The website rule lives on the Categories list endpoint (API → Endpoints): a filter that leaves out what’s inactive on the
				website, sorted by Order on website. Change either there if your site needs something else. Like the rest of the store’s
				fields, these can be relabelled or hidden but not removed; add your own beside them.
			</P>
		</Section>

		<Section
			id='store-collections'
			title='Collections'
			lead='Groups of products for your website — Sale, Featured, New in. Unlike its one category, a product can be in as many collections as you like.'>
			<Terms
				head={['Field', 'What it does']}
				rows={[
					['Web address', 'Its address on your website, made from the name when left empty (Summer Sale → summer-sale); a taken one gets -2.'],
					['Status on website', 'Inactive: your website’s collection list leaves it out.'],
					['Order on website', 'The higher the number, the earlier it shows. Equal numbers go by name.'],
					['Description · Image · SEO', 'What your website shows on the collection’s page, and how that page looks in search results and shared links.'],
				]}
			/>
			<List
				items={[
					'Put a product in collections from its form: Collections, under Category and Brand.',
					'Or from the collection’s page: its Products tab lists what’s in it. Add existing picks products already there (they keep their other collections); Remove on a row takes that product out — the product itself stays. Add product makes a new one already in it.',
					'Collections are for your website only — the POS keeps to its categories.',
				]}
			/>
			<P>
				On your website, the Collections list endpoint leaves out the inactive ones, sorted by Order on website, and a
				collection’s products are the Products list with <C>?collections=&lt;its id&gt;</C> (API → Endpoints). See also{' '}
				<A href='/pages#view-tab-link'>tabs that add existing records</A>.
			</P>
		</Section>

		<Section
			id='store-discounts'
			title='Discounts'
			lead='A percentage off — on products you name, every product in a category, or every product in a collection. A product reached by several gets the biggest one; two are never added up.'>
			<Terms
				head={['Field', 'What it does']}
				rows={[
					['Percentage off', 'More than 0, up to 100. 20 takes 20% off the price.'],
					['Status', 'Inactive: its products go back to their price — or to a smaller discount that also reaches them. Active again: they get it back.'],
					['Starts · Ends', 'Both optional days, in your store’s time zone. It reaches its products from the start of its Starts day, and switches itself off at the end of its Ends day.'],
					['Products · Categories · Collections', 'Any mix — pick at least one. A category includes the categories under it while Include sub-categories is on.'],
					['Products reached · Ended', 'Kept by the store: how many products sell at this discount now, and the day its end date switched it off.'],
				]}
			/>
			<List
				items={[
					'A product’s Price never changes. It shows its Discount, Discount % and Sale price — the price less the discount — and Price after tax is worked out from the Sale price. Its variants follow it.',
					'Change a price during a sale and the Sale price follows; switch the sale off and the product is back at exactly its (new) price.',
					'While you fill in the form, a note says what saving does: “Saving gives 20% off to 48 products — 3 of them keep a bigger discount.” The discount’s page has a Products tab with every product selling at it.',
					'A discount whose end date has passed can’t be switched on — move the end date first.',
					'The POS, website orders and quotes charge the Sale price. The order line keeps the discount it sold at (Eid sale −20%) and the price before it; receipts and the order page show both. An order placed during a sale keeps its price after the sale ends.',
					'Coupons are taken off after the discount — from the discounted price, or from the original price if you choose so in Store settings → POS.',
					'Your website reads price, salePrice, discountPercent and the discount (its name and end date) from the Products API, to strike the price out and show when the sale ends.',
				]}
			/>
			<P>
				The store does this with six automations you can see on the Automations page — a discount saved, deleted, started or
				ended, a product moved, a category moved — each switchable on or off, with its Runs. Switch “Discount ends” off and
				discounts stay on past their end date until you switch them off yourself. See <A href='/automations#automation-date'>when a date is reached</A>.
			</P>
		</Section>

		<Section
			id='store-tax'
			title='Tax and prices'
			lead='One tax rule, from the category to the till — the price on the page is the price charged.'>
			<List
				items={[
					'Tax rates holds your taxes (VAT 15%…) with a Status and one Default. A product with no tax of its own is charged the default rate.',
					'A category’s Tax / VAT goes to every product in it, and a product moved to a category with a tax takes it. A new product with no tax takes its category’s.',
					'A variant always has its product’s tax — it can’t be set on its own.',
					'Price after tax is worked out for you from the price and the tax the till would charge, by your store’s tax mode: tax added on top, tax already in the price (it equals the price), or no tax. Edit a rate, the default or the tax mode and every price follows.',
					'Switch a tax to Inactive and it comes off every category, product and variant that had it (their price goes back to the bare price). Switch it back to Active and exactly those get it back.',
					'A tax in use can’t be deleted: you’re told how many products, categories and variants have it, and Replace with… moves them all to another active tax first.',
				]}
			/>
			<P>
				These rules run as System automations (<A href='/automations#store-automations'>Automations</A>): you can switch each on or off
				and read what it did in Runs, but not edit or delete it.
			</P>
		</Section>

		<Section
			id='store-variants'
			title='Variants, SKUs and barcodes'
			lead='Every sale is of a variant — one size and colour of a product, or the product itself.'>
			<List
				items={[
					'Give a product its options (Size: S, M, L · Colour: White, Navy) and save: its variants are made from every combination. Add a value later and the new combinations appear; take one away and those variants stop selling — they’re never deleted, since orders and stock name them.',
					'A product without options has one variant of its own, hidden, that follows the product’s SKU, barcode and status.',
					'A variant can have its own SKU, barcode and price; an empty price is the product’s. Its tax is always the product’s.',
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
			id='store-orders'
			title='Orders'
			lead='Store → Orders: every sale at the POS and every order taken by phone or by hand, newest first. Held sales stay in the POS.'>
			<Terms
				head={['To…', 'Do this']}
				rows={[
					['See one kind', 'The tabs along the top: All, Today, Unpaid (nothing or only part paid), To fulfil (open orders not yet delivered), With returns and Cancelled. Each shows how many orders it has.'],
					['Find an order', 'Type its number, the customer’s name, phone or email, or the delivery phone. The tabs’ counts follow what you typed.'],
					['Narrow it down', 'All channels → POS or Phone / by hand; All outlets → one outlet (when you have more than one).'],
					['Open it', 'Click the row.'],
				]}
			/>
		</Section>

		<Section
			id='store-order'
			title='An order’s page'
			lead='Everything about one order in one place, with what you can do next across the top.'>
			<Terms
				head={['Part', 'What it shows']}
				rows={[
					['Items', 'Each line with its SKU, price, quantity, discount and total — and how many came back. Under it: subtotal, discounts and coupon, tax, shipping, total, paid, refunded and the balance due.'],
					['Payments and refunds', 'Every payment and refund with how it was paid, its reference, when and by whom; cash shows the change given.'],
					['Returns', 'Returns made from this order and where each is; click one to open it.'],
					['Stock movements', 'What the order took out of the outlet’s stock (and put back if it was cancelled).'],
					['Timeline', 'Taken, paid, returned, completed or cancelled, in order.'],
					['Customer, Delivery, Details', 'Who it’s for, where it goes and the shipping rate, the channel, outlet, who sold it and the note.'],
					['More details', 'Any fields you added to Orders in Models, with this order’s values.'],
				]}
			/>
			<Terms
				head={['Action', 'What it does']}
				rows={[
					['Take payment', 'Shown while something is owed: pay all or part of the balance, split over several ways to pay.'],
					['Fulfil', 'Mark packed, shipped or delivered. Delivered completes the order.'],
					['Cancel', 'Before it ships: the stock goes back to the outlet and what was paid is refunded the way it came (store credit back to the customer). Add why — it’s kept in the note.'],
					['Print receipt', 'The receipt in the size Store settings say (80 mm or A4).'],
					['Return items', 'Taking items back and refunding them comes with the returns update; the button is there but not working yet.'],
				]}
			/>
			<Note>An order that has gone out (shipped or delivered) or has items back can’t be cancelled — take it back as a return instead.</Note>
		</Section>

		<Section
			id='store-returns-page'
			title='Returns'
			lead='Store → Returns: items brought back, with the tabs All, Open (requested, approved or received), Refunded and Rejected. Search by return, order or customer.'>
			<List
				ordered
				items={[
					'Requested — a return was asked for. Approve it, or Reject it.',
					'Approved — you agreed to take it back. Mark received when the items arrive (or Reject).',
					'Received — the items are back. The refund is paid from here, which marks it Refunded.',
					'Refunded or Rejected — Close it when it’s all done.',
				]}
			/>
			<Note>Each step can carry a note, kept on the return with who did it. A return’s page shows its items with why and in what condition, the refund due and paid, the refunds, and the stock it put back. Returns only show when they’re switched on in Store settings → Returns.</Note>
		</Section>

		<Section
			id='store-couriers'
			title='Your courier accounts'
			lead='Store settings → Delivery settings, under Delivery: a card for each courier you turned on.'>
			<P>
				Each courier is <strong>your own merchant account</strong> with them: you open it, you paste its keys into Mint, the
				courier bills its delivery charges to you and pays the cash it collects straight to you. Mint never holds that money.
				Keys are kept locked away — Mint only shows whether each one is saved — and never go to your website or to an AI.
			</P>
			<List
				ordered
				items={[
					'Open a merchant account with the courier, if you haven’t one (each card links to its sign-up).',
					'Paste the keys from the courier’s own panel into the card, then Save & test. Mint asks the courier with them and says what came back — “Connected — balance ৳1,240”, or what’s wrong.',
					'Pick the courier’s settings: the pickup store (from your account), delivery type, the weight to use when an order doesn’t say.',
					'Copy the webhook address (and secret) from the card into the courier’s webhook page, so it tells Mint where each parcel is. Mint also asks about quiet parcels every 15 minutes, so nothing is missed if a call gets lost.',
				]}
			/>
			<Note>
				One courier account sends its updates to one address. If the same account is connected in two Mint stores, both cards say
				so — the second store gets its updates from the regular check instead. Disconnect forgets the keys; it’s refused while
				parcels are still on their way.
			</Note>
		</Section>

		<Section
			id='store-courier-steadfast'
			title='Connecting Steadfast'>
			<List
				ordered
				items={[
					'In Steadfast’s dashboard, open API and add a key named “Mint”. Paste its API key and secret key into the Steadfast card and press Save & test.',
					'Open Steadfast’s Webhook page. Paste the Callback URL and Auth token from the card and press Save webhook. Steadfast keeps one address per account, so this replaces any address that’s there now. If you’d rather use Steadfast’s Generate button, paste the token it makes into the card’s “Or paste the token Steadfast generated” box.',
				]}
			/>
			<Note>
				Steadfast has no test mode — every parcel sent is real. If Steadfast refuses the keys, Mint stops using them until you test
				again: ten wrong tries lock a Steadfast key for an hour. Cancel on a Steadfast parcel asks Steadfast to bring it back (a
				return request).
			</Note>
		</Section>

		<Section
			id='store-courier-pathao'
			title='Connecting Pathao'>
			<List
				ordered
				items={[
					'In Pathao’s merchant panel, open Developer API → Merchant API Credentials (press Generate Credentials if it’s empty). Paste the client id and client secret, and the email and password you sign in to Pathao with — Mint uses them only to sign in to Pathao, and keeps them locked away.',
					'Pick the pickup store, delivery type (normal or on demand) and what you send (parcel or document).',
					'In Developer API → Webhook Integration, paste the Callback URL and secret from the card, choose All events, press Add Webhook and use Pathao’s test button.',
				]}
			/>
			<Note>
				<strong>Try Pathao’s sandbox</strong> fills in Pathao’s public test account, so you can try sending before connecting your
				own. Switch Mode to Live with your own keys when you’re ready. Pathao parcels can’t be cancelled from Mint — cancel in
				Pathao’s panel and press Refresh.
			</Note>
		</Section>

		<Section
			id='store-courier-redx'
			title='Connecting RedX'>
			<List
				ordered
				items={[
					'In RedX’s merchant panel, open Developer APIs → Configuration and request a token (the sandbox token is on the same page — use it with Mode: Test). Paste it and press Save & test, then pick your pickup store.',
					'In Developer APIs → Webhook, paste the address from the card and press Enable. RedX signs nothing, so the secret is inside the address — keep it private; New secret makes another one.',
				]}
			/>
			<Note>RedX needs a delivery area for each parcel: pick it in Send to courier (search by district or post code). Mint remembers it for the next order from the same place.</Note>
		</Section>

		<Section
			id='store-courier-manual'
			title='Couriers without an API'
			lead='For Sundarban, a local rider or your own van — any country.'>
			<P>
				Turn on <strong>Manual courier</strong> and list the couriers you use, one per line: a name, then <code>|</code> and its
				tracking link with <code>{'{tracking}'}</code> where the code goes, if it has one —{' '}
				<code>Sundarban | https://…/track/{'{tracking}'}</code>. When you send an order, pick the courier and type the tracking code
				from their slip. Move the parcel on with <strong>Update status</strong> on the order; marking it delivered records the cash
				collected, just as with the other couriers.
			</P>
		</Section>

		<Section
			id='store-send-to-courier'
			title='Sending an order to a courier'
			lead='An order’s page → Send to courier. Or several at once: tick them on Orders or Website orders → Send to courier.'>
			<Terms
				head={['In the dialog', 'What it does']}
				rows={[
					['Courier', 'Only couriers that are connected and tested.'],
					['Recipient, phone, address', 'From the order — change them for this parcel only. Bangladeshi couriers need a mobile number (01…).'],
					['Areas', 'Pathao: city, zone and area (optional — Pathao reads the address when they’re empty). RedX: a delivery area (needed). They’re matched from the address, or filled in as you picked them before for the same place.'],
					['Cash to collect', 'What the order still owes, in whole taka — lower it, or 0 when it’s paid. Never more than it owes.'],
					['Weight, items, note', 'The courier’s default weight when the order doesn’t say; the note goes to the rider.'],
				]}
			/>
			<Note>
				One parcel per order at a time. If the courier doesn’t answer, Mint looks the parcel up before saying it failed, so it’s
				never booked twice; where a courier can’t be asked (Pathao, RedX) the order says “may have been booked” until the courier
				confirms or you check its panel. Sending several at once uses each address’s earlier area picks — orders from a new
				place for Pathao or RedX are sent from their own page once.
			</Note>
		</Section>

		<Section
			id='store-delivery-card'
			title='An order’s parcel'
			lead='The Courier card on an order’s page.'>
			<Terms
				head={['Shows / button', 'What it means']}
				rows={[
					['Status', 'Booked → Waiting for pickup → Picked up → On the way → Out for delivery → Delivered; or On hold, Delivery attempt failed, Coming back, Returned, Cancelled, Lost. The order follows: picked up marks it shipped, delivered completes it.'],
					['Tracking', 'The courier’s code (copy it) and its tracking page, when the courier has one. Your website’s order page shows the same.'],
					['Cash', 'What the courier collects. When it’s delivered, a “Cash on delivery” payment is added to the order for what the courier says it collected.'],
					['Refresh', 'Asks the courier now. The page also asks when you open it, and Mint asks about quiet parcels every 15 minutes.'],
					['Label', 'A label for the parcel: courier, tracking barcode, recipient, cash to collect, order number.'],
					['Cancel', 'Before it’s delivered. Steadfast and RedX are asked to stop it and the status changes when they confirm.'],
					['Receive returned parcel', 'When it comes back: tick what arrived and whether it’s damaged. Sellable items go back into stock. A cash-on-delivery order is not refunded (it was never paid) — and if all of it came back, the order closes and owes nothing.'],
					['Mark paid out', 'For RedX and manual couriers, once they’ve paid you the cash. Pathao and Steadfast tell Mint themselves.'],
				]}
			/>
		</Section>

		<Section
			id='store-deliveries'
			title='Deliveries'
			lead='Store → Deliveries: every parcel, by where it is — Not sent, Waiting for pickup, On the way, Delivered, Coming back, Returned, Cancelled.'>
			<P>
				<strong>Cash with couriers</strong> is what couriers have collected for you and not paid out yet, in all and by courier.
				Search by delivery, invoice, tracking code or phone; tick delivered parcels to mark them paid out. Two emails come with
				the store, switched off — “Tell the customer it’s on the way” and “…it’s delivered” — turn them on in Automations.
			</P>
		</Section>

		<Section
			id='store-delivery-risk'
			title='Checking a buyer'>
			<P>
				With Steadfast connected, <strong>Check the buyer</strong> in Send to courier shows how parcels to that phone number have
				gone across Steadfast: usually takes them, takes some and refuses some, or often refuses — then consider asking for
				payment first. “Not known” means too few parcels to tell. The answer is kept for a day; Steadfast limits checks by how many
				parcels you book.
			</P>
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
			id='store-search'
			title='Search on your website'
			lead='Your store answers searches itself: best matches first, typos forgiven, Bangla and Banglish understood, with filters and their counts. Your website asks; it never has to rank anything.'>
			<List
				items={[
					'Typos: “jaket” finds jackets, “emrald” the emerald ring. Short words (under 4 letters) are matched as typed.',
					'Word forms: “shirts” finds “Oxford shirt”, “t shirt” and “T-Shirt” are the same, “500 ml” is “500ml”.',
					'Bangla and Banglish: “শাড়ি”, “saree”, “sari” and “shari” find each other.',
					'What counts most: a match in the name, then the brand, the category (and the ones above it), Search words and sizes or colours; the description least. Products with every word come first, the words side by side in the name before that.',
					'SKUs and barcodes go straight to their product.',
					'It reads what a search asks for besides its words: a price (“under 2000”, “1k–2k”, “৫০০ টাকার নিচে”), an order (“cheapest”, “newest”, “best selling”, “সস্তা”), “in stock” and “on sale”, a brand you sell (“aarong saree”), and a size or colour you sell — named (“size M”, “colour red”) it filters, said as a plain word (“red”) it only lifts the products that have it. Filler words (“for”, “the”, “চাই”) are dropped.',
					'No dead ends: when no product has every word, search tries again, looser, and says what it showed (see When nothing matches).',
					'Out of stock: listed after the products in stock, or left out — your choice. Best sellers, new products and products on sale get a small lift, never enough to beat a better match.',
					'Search words: a product field for the other words people type for it (“eid”, “party wear”, “kurta”). Only search reads them.',
				]}
			/>
			<P>
				Your website calls two addresses with its project key (see <A href='/websites#website-setup'>Website setup</A>, which has the
				code filled in for your store):
			</P>
			<Terms
				head={['Address', 'What it gives']}
				rows={[
					[
						<C key='s'>GET /public/api/store/search</C>,
						'Ranked products as cards (name, picture, price, sale price, category, in stock), the total and pages, what was read and which spellings were tried, understood (the price, order, brand, sizes it took from the words — show them as chips to remove; product when the words are one product’s SKU or barcode) — and with facets=1 every filter with its counts, named.',
					],
					[<C key='g'>GET /public/api/store/search/suggest?q=</C>, 'As the shopper types: finished searches (your store’s popular searches first), up to 4 products, the categories and brands among them.'],
					[<C key='p'>GET /public/api/store/search/popular</C>, 'Your store’s top searches this week that found something, for an empty search page (see What shoppers did).'],
					[<C key='e'>POST /public/api/store/search/events</C>, 'Clicks and adds to the bag from a search, for your sales from search (see What shoppers did).'],
				]}
			/>
			<Terms
				head={['Ask with', 'What it does']}
				rows={[
					['q', 'The words, up to 100 characters. Leave it out for a category page: the products listed, sorted and filtered the same way.'],
					['page · limit', 'Up to 60 a page.'],
					['sort', 'relevance (the default), popular, price, -price (dearest first), newest, name.'],
					['category · collection', 'A web address or id, several with commas. A category includes the ones under it.'],
					['brand', 'A name (any case) or id.'],
					['price[gte] · price[lte]', 'The price shoppers pay now, discount off.'],
					['option.Size=M', 'A size, colour or any option, as you wrote it (any case). Several values with commas.'],
					['inStock=1 · onSale=1', 'Only those.'],
					['facets=1', 'Every filter’s counts. Each group’s counts ignore its own choice, so a shopper who picked M still sees how many come in S and L.'],
				]}
			/>
			<List
				items={[
					'Answers can be cached for 30 seconds, by the shopper’s own browser (a search has its own searchId; category pages by anyone). A change to a product reaches search within seconds.',
					'A Products list asked with only search= (no sort or other filters) is ranked the same way once your store has search on — so a site built on it gets better results without a change.',
					'A store set up from now on has search on. A store set up before is switched on once we’ve checked its results.',
					'explain=1 with a server key adds each result’s score, broken down — for checking why something ranks where it does.',
				]}
			/>
			<P>
				In Next.js — a search page that asks the store, and keeps working (with your own simple search) if the store ever
				can’t answer:
			</P>
			<CodeBlock
				label='app/search/page.js'
				code={`// app/search/page.js — a server component
const API = '${PUBLIC_API}';
const KEY = '${PROJECT_KEY}';

async function storeSearch(params) {
  const qs = new URLSearchParams({ apiKey: KEY, limit: '24', facets: '1', ...params });
  const res = await fetch(\`\${API}/store/search?\${qs}\`, { next: { revalidate: 30 } });
  return res.ok ? res.json() : null; // null: search off — fall back below
}

export default async function SearchPage({ searchParams }) {
  const { q = '', category = '', sort = 'relevance' } = await searchParams;
  const found = await storeSearch({ q, ...(category && { category }), sort });
  if (!found) {
    const res = await fetch(\`\${API}/products?apiKey=\${KEY}&search=\${encodeURIComponent(q)}\`);
    return <Results products={(await res.json()).doc} />;
  }
  // "jaket" → the store tried "jacket": show it the way shops do.
  const fixed = found.query.typos.length && found.total
    ? found.query.words.map(w => found.query.typos.find(t => t.word === w)?.tried[0] ?? w).join(' ')
    : null;
  // No product had every word: say what was shown instead (see “When nothing matches”).
  const instead = found.showing?.reason === 'some words'
    ? \`No product has all of “\${q}” — showing the ones with some of the words.\`
    : found.showing && \`No exact results for “\${q}”. Showing results for “\${found.showing.q}”.\`;
  return (
    <>
      {instead ? <p>{instead}</p> : fixed && <p>Showing results for “{fixed}”</p>}
      {found.didYouMean && <p>Did you mean <a href={\`?q=\${found.didYouMean}\`}>{found.didYouMean}</a>?</p>}
      {found.fallback && <Results products={found.fallback.doc} title='Popular right now' />}
      <Filters facets={found.facets} />      {/* categories, brands, price.buckets, options, with counts */}
      <Results products={found.doc} total={found.total} pages={found.totalPages} />
    </>
  );
}`}
			/>
			<P>
				For suggestions, call <C>/store/search/suggest?q=</C> from the browser about 120 ms after the last key, and show its{' '}
				<C>queries</C>, <C>products</C> and <C>categories</C> under the box.
			</P>
		</Section>

		<Section
			id='store-search-settings'
			title='Search settings'
			lead='Store → Search settings: how your website’s search matches and orders products. Saved together; Back to the defaults undoes your choices.'>
			<Terms
				head={['Setting', 'What it does']}
				rows={[
					['Search on', 'On: your website’s search address answers, and a Products list searched by words is ranked the same way. Off: the search address answers “search is switched off” and the Products list searches the old way, matching the letters exactly. A store set up before search came shows “Not switched on yet” until you switch it on.'],
					['Typos', 'Normal (the default): one slip in a word of 4–7 letters, two in longer words. Forgiving: one more, even in short words. Off: words as typed.'],
					['Bangla and Banglish', 'Bangla script, Banglish and English spellings of the same word find each other.'],
					['Out of stock', 'Show them last (the default), marked out of stock — or hide them from search, suggestions and category pages until they’re back.'],
					['Popular products · New products · On sale · What shoppers pick', 'How much each lifts a product: off, low, normal or high. Popular = sold, viewed and wished-for; new = added in the last 14 days. A lift never puts a product ahead of one that matches the search better.'],
					['Learn from shoppers', 'Clicks and orders after a search teach it what people mean, once search learning is built. Nothing is applied until enough different shoppers agree.'],
				]}
			/>
		</Section>

		<Section
			id='store-search-words'
			title='Words and redirects'
			lead='Teach search your shoppers’ words: synonyms for things called differently, and searches that should open a page.'>
			<Terms
				head={['Where', 'What it does']}
				rows={[
					['Search synonyms', 'Same thing: each word finds the others (sneakers, trainers, keds). One way: the words also find others, not back (jutta → shoes). One word per entry. Switch one off with On. Saved, it works on the next search.'],
					['Starter packs', 'On Search settings: Clothes and fashion, Electronics, Grocery, Bangla and English. Switching one on adds its groups as your own synonyms (From: starter pack) — edit or switch off any of them; switching the pack off removes what it added.'],
					['Search redirects', 'Searches that open a page instead (return, refund → /returns; eid → your Eid collection). Exactly one of these, or contains one of these. Optional start and end days. Used counts how often it answered.'],
					['Try a search', 'On Search settings: the results shoppers get, each with why it’s there (“name synonym “sneakers” 8”), and what the search understood — a price, a brand, a size, the synonyms and spellings it used, a redirect.'],
				]}
			/>
			<List
				items={[
					'A synonym match counts a little less than the word itself, so a product named with the shopper’s own word comes first.',
					'Your website gets a redirect with the results (redirect.url); it decides whether to open the page.',
					'A store set up before synonyms gets both tables with the next store upgrade.',
				]}
			/>
		</Section>

		<Section
			id='store-search-recover'
			title='When nothing matches'
			lead='A search never ends on an empty page: when no product has every word, it tries again, looser, and tells the shopper what it did.'>
			<Terms
				head={['In this order', 'What happens']}
				rows={[
					['A price, brand or size', '“candle under 10” with nothing under 10: every price, and it says so. Filters the shopper picked are never set aside. In the answer: understood.relaxed.'],
					['Further spellings', 'Two typos in a word of six letters or more (“walrett” → wallet). Short words never get two (“kicks” is not “kit”). Not when typos are off. In the answer: showing, reason typos.'],
					['Fewer words', '“blue linen shirt” with no blue shirt: “linen shirt”, with “blue” left out. The most words some products have together; the rarer, more telling words stay; at least half the words. In the answer: showing, reason fewer words, dropped.'],
					['Some of the words', 'No smaller set works (“jacket candle watch”): the products with any of the words, those with more of them first. In the answer: showing, reason some words.'],
					['Nothing at all', '“Did you mean” with the nearest word your store has (“ackets” → jacket), and popular products — from the category the search named, or your best sellers. In the answer: didYouMean, fallback.'],
				]}
			/>
			<P>
				Try a search on Search settings shows each of these. Your website decides how to show them; the example above has the
				words shops use.
			</P>
		</Section>

		<Section
			id='store-search-events'
			title='What shoppers did'
			lead='Each search your website makes is kept for 90 days: what was searched, what it found, what shoppers opened, and the orders that came from it.'>
			<Terms
				head={['What', 'How']}
				rows={[
					['A search', 'Logged when it has words (category pages aren’t), with the results it showed. The answer has a searchId. Send visitor and session (MintAnalytics.visitorId and sessionId from track.js) with the search, so the rest ties back to it.'],
					['Opened, added to the bag', 'Send { type: click or cart, searchId, product } to /store/search/events — with navigator.sendBeacon, as text/plain, up to 20 at a time. The product must be one that search showed; its place on the page is worked out for you.'],
					['A suggestion picked', '{ type: suggest, q } (and product, when it was a product).'],
					['The order', 'Send the searches with it: search: { ids: […] } on POST /store/orders. A line counts as from search when its product was opened or added from a search in the 24 hours before — this browser’s searches, or the same visitor’s. The last search wins, and only that line’s total counts, never the whole order.'],
					['Popular searches', '/store/search/popular: the top searches this week that found something, shown as people typed them most. Suggestions show the ones that start with what’s typed first.'],
				]}
			/>
			<List
				items={[
					'Nothing personal is kept: emails, phone numbers and card numbers typed into search are stored as [email], [phone] and [number]. No IP address.',
					'A search shows up in popular searches and suggestions only once 3 different visitors have made it, so one shopper’s typing is never shown to others.',
					'Every order adds its units to the products’ sales, so best sellers rise in search that day.',
					'Crawlers’ searches aren’t logged.',
				]}
			/>
			<P>
				Every hour the searches are added up by day — your store’s own day, in its time zone — and kept for 13 months: each
				search, how many shoppers made it, how many found nothing, what was opened, added and ordered from it. “Shirts” and
				“shirt” are one search. Today’s numbers fill in through the day.
			</P>
			<Terms
				head={['On each product', 'What it counts']}
				rows={[
					['Sold, 30 days', 'Units sold in the last 30 days, from every order (website and POS), returns taken off; cancelled orders don’t count. Recounted each night.'],
					['Opened from search, 30 days', 'How many times shoppers opened it from your website’s search results in the last 30 days.'],
				]}
			/>
			<P>
				Both are filled in by the store and can’t be typed. Search ranks best sellers, and products viewed and wished for in
				the last 30 days, a little higher (the Popularity dial in Search settings).
			</P>
			<CodeBlock
				label='search events in the browser'
				code={`// After each search: keep its id for this visit.
const who = { visitor: window.MintAnalytics?.visitorId, session: window.MintAnalytics?.sessionId };
const found = await (await fetch(\`\${API}/store/search?\${new URLSearchParams({ apiKey: KEY, q, ...who })}\`)).json();
const ids = JSON.parse(sessionStorage.getItem('searches') || '[]');
sessionStorage.setItem('searches', JSON.stringify([found.searchId, ...ids].slice(0, 30)));

// A result opened (or added to the bag: type 'cart').
navigator.sendBeacon(\`\${API}/store/search/events?apiKey=\${KEY}\`,
  new Blob([JSON.stringify({ ...who, events: [{ type: 'click', searchId: found.searchId, product: card._id }] })], { type: 'text/plain' }));

// The order: the searches that led to it.
await fetch(\`\${API}/store/orders?apiKey=\${KEY}\`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ lines, customerName, phone, address, search: { ids: JSON.parse(sessionStorage.getItem('searches') || '[]'), ...who } }),
});`}
			/>
		</Section>

		<Section
			id='store-search-insights'
			title='Search insights'
			lead='Store → Search insights: what shoppers search for on your website, what they find, and what it earns — with a fix one tap away.'>
			<Terms
				head={['Number', 'What it means']}
				rows={[
					['Searches', 'Searches with words in them (the next page of the same search doesn’t count again).'],
					['Visitors who searched', 'Different shoppers who searched at least once.'],
					['Visits with a search', 'The share of visits to your website with a search in them. Needs your website’s analytics (track.js); — without it.'],
					['Revenue from search', 'The lines of orders that came from a search, as worked out in What shoppers did above.'],
					['No results', 'The share of searches that found nothing.'],
					['Click rate', 'Of the searches that found something, the share where a result was opened.'],
					['Conversion from search', 'Orders from search for every 100 searches.'],
				]}
			/>
			<P>
				Pick 7, 30 or 90 days; each number shows how it moved against the same length of time before. The numbers are your
				store’s own days, updated every hour.
			</P>
			<Terms
				head={['Table', 'What to do with it']}
				rows={[
					['Top searches', 'What shoppers want most, with clicks, orders and revenue.'],
					['No results', 'The worst first. Add a synonym when you sell it under another word, a redirect when a page answers it (returns, delivery), or create the product when you should sell it — each opens a new one with the search filled in.'],
					['Low click rate', 'Searched 3 times or more, results shown, but fewer than 15 in 100 opened. Try search shows you what they saw.'],
					['Trending', 'The last 7 days against the 7 before, up the most first; New when it wasn’t searched before.'],
				]}
			/>
			<List
				items={[
					'Open a search to see it by day, its results now (the same for every shopper), which result shoppers opened (most on the first few is a good sign), and what they searched next in the same visit — often what they meant.',
					'The dashboard has a “Website search this week” card: revenue and searches against last week, and the top search with no results. Add it in the dashboard builder if yours doesn’t have it.',
					'Low click rate searches, and the search you opened, have Pin products and Boost: each starts a search rule for that search (below). The drawer lists the rules a search already sets off.',
					'Coming next: suggested fixes.',
				]}
			/>
		</Section>

		<Section
			id='store-product-search'
			title='A product’s Search tab'
			lead='On each product page: how shoppers found it by searching your website in the last 30 days.'>
			<List
				items={[
					'Shown in searches: how many searches had it on their first page. Opened, Added to the bag and Sold from search follow it down to the order.',
					'Searches that led here: what shoppers typed before opening it. Click one to try it.',
					'Its search words: the extra words search knows it by, from its Search words field. Add the ones shoppers use that aren’t in its name or description.',
					'Search rules: the rules that name it, its brand, category or collections — Add a rule starts one for it.',
				]}
			/>
		</Section>

		<Section
			id='store-search-rules'
			title='Search rules'
			lead='Store → Search rules: decide what a search, or a category page, shows first, lower down or not at all.'>
			<Terms
				head={['When', 'It fires on']}
				rows={[
					['A search is exactly', 'One of the searches you list, separated by commas. Word forms count: “dress” is “dresses” too.'],
					['A search contains', 'Any search with these words, in this order (“eid” fires on “eid dress”).'],
					['A category page is', 'That category’s page on your website, when the shopper hasn’t typed any words.'],
					['Anyone searches or opens a category', 'Every search and every category page.'],
				]}
			/>
			<Terms
				head={['Do', 'What shoppers see']}
				rows={[
					['Pin', 'The products you pick, at the top, in the order you picked them — even one the search wouldn’t have found, as long as it fits the shopper’s filters.'],
					['Boost', 'Products, brands, categories, collections or products on sale shown higher: a little (×1.5), clearly (×2) or a lot (×3).'],
					['Bury', 'The same, shown lower: clearly (×0.5) or a lot (×0.2).'],
					['Hide', 'Those products left out of the results.'],
					['Show only', 'Only those products. If none of the results are, the rule steps aside — shoppers never get an empty page.'],
				]}
			/>
			<List
				items={[
					'Rules apply in this order: hide, show only, pin, then boost and bury. A sort the shopper picks (price, newest) comes before pins and boosts; hide and show only still apply.',
					'As you write a rule, the editor shows your real results without it and with it: ▲ moved up, ▼ down, new, pinned. Type in Try it to see another search.',
					'Dates are optional: a rule with an end date stops at the end of that day. The switch turns a rule off without deleting it; Used counts the searches it changed.',
					'Leave the name empty and the rule is named by what it does, e.g. “Searches for “dress”: pin 2 products”.',
					'Stores built before search rules get them with the next store upgrade.',
				]}
			/>
		</Section>

		<Section
			id='store-search-index'
			title='The search index'
			lead='What search reads: an entry per product shoppers can find (active, not archived), kept up to date by itself.'>
			<List
				items={[
					'Searchable shows the entries against your active products; Waiting, the changes still to go in (seconds).',
					'A change to a product, its variants, category (and the ones under it), brand, collection, stock or discount reaches search in seconds. Changes made through the API or an import are caught within 2 minutes.',
					'Once a day the numbers are compared; if they differ, the index is rebuilt by itself.',
					'Rebuild builds every entry again — only needed if something looks wrong. You can keep working while it runs.',
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
					['“Steadfast refused these keys”', 'Copy both keys again from Steadfast’s API page and Save & test. Wait an hour if Steadfast says the key is blocked.'],
					['“Already with Steadfast — DLV-…”', 'The order has a parcel on its way. Cancel that delivery first to send it again.'],
					['“… may have been booked”', 'The courier didn’t answer in time. Look for the order number in the courier’s panel; if it isn’t there, tick “I checked” and send again.'],
					['A parcel’s status doesn’t move', 'Press Refresh. If the courier card says it hasn’t sent an update for 2 days, check the webhook address in the courier’s panel.'],
				]}
			/>
		</Section>
	</Guide>
);

export default Store;
