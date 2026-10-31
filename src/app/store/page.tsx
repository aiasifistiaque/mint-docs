import Guide from '@/components/docs/Guide';
import { A, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/store');

/**
 * Your store (backend docs/ecommerce): an e-commerce project — the setup
 * wizard's steps, Store settings, what's built and what the store keeps to
 * itself. Section ids are targets of the tenant panel's GuideLink (store-setup,
 * store-basics, store-outlets, store-products, store-payments, store-returns,
 * store-delivery, store-pos, store-review, store-settings, store-selling, store-orders,
 * store-order, store-returns-page, store-categories, and the couriers' store-couriers, store-courier-steadfast,
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
				]}
			/>
			<P>
				The website rule lives on the Categories list endpoint (API → Endpoints): a filter that leaves out what’s inactive on the
				website, sorted by Order on website. Change either there if your site needs something else. Like the rest of the store’s
				fields, these can be relabelled or hidden but not removed; add your own beside them.
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
