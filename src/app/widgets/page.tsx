import Guide from '@/components/docs/Guide';
import { A, C, CodeBlock, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { API_ORIGIN } from '@/lib/config';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/widgets');

/**
 * Site widgets (backend docs/widgets): the mint.js script, the shared look,
 * the login widget, the shop, cart, checkout, thank-you page and My orders
 * (W-05/W-07), window.Mint and what's coming. The panel's Widgets page
 * (src/app/widgets) links each panel here — the section ids are GuideLink
 * targets (GuideLink.tsx GUIDE_OF).
 */

const SECTIONS = [
	{ id: 'add-mint', title: 'Add MINT to your site' },
	{ id: 'look', title: 'The look' },
	{ id: 'login', title: 'Login & account' },
	{ id: 'shop', title: 'Shop' },
	{ id: 'cart', title: 'Cart' },
	{ id: 'shop-orders', title: 'The Shop’s orders' },
	{ id: 'checkout', title: 'Checkout' },
	{ id: 'thanks', title: 'Thank-you page' },
	{ id: 'orders', title: 'My orders' },
	{ id: 'mint-js', title: 'Mint in your own code' },
	{ id: 'coming-next', title: 'Coming next' },
	{ id: 'faq', title: 'Troubleshooting' },
];

const SCRIPT = `<script src="${API_ORIGIN}/public/mint.js" data-project="<project>" async></script>`;

const Widgets = () => (
	<Guide
		href='/widgets'
		sections={SECTIONS}
		open={{ href: '/widgets', label: 'Open Widgets' }}>
		<Section
			id='add-mint'
			title='Add MINT to your site'
			lead='One script tag per page, then put each widget where it should appear.'>
			<P>
				Widgets are ready-made pieces for a website or app you host yourself: sign-in, a cart, checkout and order history today,
				with forms and more on the way. They talk to your project’s <A href='/public-api'>public API</A>, so any project with
				one can use them, websites and APIs alike. Find them in the panel under <em>Site → Widgets</em> (websites) or next to
				the Public API (other projects).
			</P>
			<CodeBlock
				label='add once per page'
				code={SCRIPT}
			/>
			<P>
				The Widgets page has this tag ready with your project filled in. Put it in <C>&lt;head&gt;</C> or just before{' '}
				<C>&lt;/body&gt;</C>. Then place a widget with its snippet, such as <C>&lt;div data-mint="login"&gt;&lt;/div&gt;</C>,
				or as a tag: <C>&lt;mint-login&gt;&lt;/mint-login&gt;</C>.
			</P>
			<List
				items={[
					'A widget shows only once you switch it on and save. Switch it off and it disappears from your site within a minute.',
					'Each widget’s code loads only on pages that use it.',
					'Widgets draw in their own sealed area: your CSS can’t break them and theirs can’t touch your page.',
					'Widgets added to the page later (single-page apps, pop-ups) are picked up too.',
				]}
			/>
		</Section>

		<Section
			id='look'
			title='The look'
			lead='Colour, font, corners and light or dark, shared by every widget.'>
			<Terms
				head={['Setting', 'What it does']}
				rows={[
					['Colour', 'Buttons and links. Leave it empty on a website to use the colour from Site setup.'],
					['Font', 'A font your site already loads, e.g. Inter. Empty: whatever the page around the widget uses.'],
					['Corners', 'How round cards, buttons and fields are, 0–24 pixels.'],
					['Light or dark', <>
						<em>Match the page</em> looks at the background behind each widget: light on light pages, dark on dark ones.
						Or pick <em>Always light</em> / <em>Always dark</em>.
					</>],
				]}
			/>
			<P>
				Each widget has a live preview beside its settings, on a light or dark page. It shows your unsaved changes; nothing
				goes live until you press <em>Save</em>.
			</P>
		</Section>

		<Section
			id='login'
			title='Login & account'
			lead='Sign in and sign up for your project’s customers; once signed in, their name and a sign-out link.'>
			<P>
				It uses the same customer accounts as the public API’s signed-in endpoints. See{' '}
				<A href='/customers'>Customers</A> for how those accounts work.
			</P>
			<Terms
				head={['Option', 'Choices']}
				rows={[
					['Layout', 'A card on the page (suits an account page), or a button that opens the card (suits a header).'],
					['Opens on', 'Sign in or Create an account: which form shows first.'],
					['Let visitors create accounts', 'Off: only people who already have an account can sign in.'],
				]}
			/>
			<P>
				Under <em>Texts</em> you can reword every title, button and link, for example into your own language. In the
				signed-in text, <C>{'{name}'}</C> becomes the customer’s name.
			</P>
			<P>To change an option on one page only, add it to the element as a <C>data-</C> attribute:</P>
			<CodeBlock
				label='one page, different options'
				code={`<div data-mint="login" data-layout="button"></div>
<mint-login data-start-with="signup"></mint-login>`}
			/>
			<Note>
				Pages written for the older widget (<C>widget.js</C> with <C>data-mint-login</C>) keep working. Switching to{' '}
				<C>mint.js</C> gets you the panel’s options, texts and look.
			</Note>
		</Section>

		<Section
			id='shop'
			title='Shop'
			lead='Tell the widgets which model is your catalogue. The cart, and later checkout, read prices and stock from it.'>
			<P>
				Widgets don’t assume what your models are called. On the Widgets page, under <em>Shop</em>, pick the model that
				holds your products and say what its fields mean. If your project came from the E-commerce or Products & orders
				template, this is filled in for you: check it and save.
			</P>
			<Terms
				head={['Part', 'What it is']}
				rows={[
					['Name, Price', 'Required. A text field and a number (or formula) field.'],
					['Compare-at price', 'The old price, shown crossed out when it’s higher than the price.'],
					['Image', 'An image or images field; the first image shows in the cart.'],
					['Stock', 'A number field. Leave it as none if you never run out. A cart can’t hold more than is in stock.'],
					['Status', <>Which values mean <em>for sale</em>, e.g. Active. Drafts and archived products can’t be added to a cart.</>],
					['Variants', 'A list field (sizes, colours) with a name, then either the product’s price plus or minus, or a price of its own, and optionally its own stock.'],
					['Carts kept in', <>MINT (nothing to set up), or a model of yours with a link to the products model and a quantity field. Your own model shows every cart line as a record your team sees; its public API must be on, owner-only.</>],
					['Currency', 'The three-letter code your prices are in, e.g. BDT or USD.'],
				]}
			/>
			<Note>
				Prices are always read from your catalogue on our server. A page can’t change what something costs, however its
				code is edited. Change a price in the panel and every cart shows the new one.
			</Note>
		</Section>

		<Section
			id='cart'
			title='Cart'
			lead='Add-to-cart buttons on any product, a cart button with a count, and a cart drawer.'>
			<P>
				Set up the <A href='#shop'>Shop</A> first, then switch the Cart on. Put the cart where it should show, and{' '}
				<C>data-mint-add</C> on any button with the product’s ID (the ID on its record page):
			</P>
			<CodeBlock
				label='cart and add-to-cart buttons'
				code={`<div data-mint="cart"></div>

<button data-mint-add="PRODUCT_ID">Add to cart</button>
<button data-mint-add="PRODUCT_ID" data-mint-variant="Large" data-mint-quantity="2">Add two, large</button>`}
			/>
			<P>
				A product with variants opens a picker that shows each variant’s price and which ones are sold out. Name the
				variant with <C>data-mint-variant</C> to skip it.
			</P>
			<Terms
				head={['Option', 'Choices']}
				rows={[
					['Layout', <>A cart button that opens a drawer (suits a header), or the cart itself on the page (suits a <C>/cart</C> page).</>],
					['Checkout page', <>Where the Checkout button goes, e.g. <C>/checkout</C>. Empty: no Checkout button. The checkout widget is coming next.</>],
					['Open the cart when something’s added', 'Off: a short “Added to your cart” message instead.'],
				]}
			/>
			<P>
				<strong>Guests and accounts.</strong> A guest’s cart is kept in their browser. When they sign in or create an
				account, it joins their account’s cart, and from then on it follows them between phone and laptop. Signing out
				leaves an empty cart on that browser.
			</P>
			<P>
				<strong>Stock and prices.</strong> If someone asks for more than you have, the quantity is cut to what’s in stock
				and the cart says so. Sold-out products stay in the cart, marked, and aren’t counted in the subtotal. Products
				you stop selling disappear from carts.
			</P>
		</Section>

		<Section
			id='shop-orders'
			title='The Shop’s orders'
			lead='For checkout: which model orders are written to, and what its fields mean.'>
			<Terms
				head={['Part', 'What it is']}
				rows={[
					['Orders model, items list', 'A model with a list of items (a repeating group) — each item a product name, quantity and unit price, and optionally variant, SKU and a link to the product.'],
					['Status', 'Which value means waiting for payment (new orders), which means paid (set only when the provider confirms) and, optionally, cancelled.'],
					['The buyer and the money', 'Email, name, phone, delivery address (a group of fields or one text box), note, total, delivery cost, payment reference — whichever your model has.'],
				]}
			/>
			<Note>
				Saving makes the order’s status and payment reference read-only on your public API, so a page can’t mark an order
				paid. The E-commerce and Products & orders templates are filled in for you.
			</Note>
		</Section>

		<Section
			id='checkout'
			title='Checkout'
			lead='The buyer’s details, the order summary at your prices, and Pay.'>
			<P>
				Put it on your checkout page and set the Cart’s <em>Checkout page</em> to that address. It needs the Shop’s orders
				and a way to pay switched on in <A href='/payments'>Payments</A>.
			</P>
			<CodeBlock
				label='checkout page'
				code={'<div data-mint="checkout"></div>'}
			/>
			<Terms
				head={['Option', 'Choices']}
				rows={[
					['Ask for a phone number', 'On by default — couriers often need one.'],
					['Ask for a delivery address', 'Off for things that aren’t delivered.'],
					['Let buyers add a note', 'Delivery instructions, a gift message.'],
					['Buyers must have an account', 'Off: guests pay with just an email.'],
				]}
			/>
			<P>
				Pay writes the order as waiting for payment and sends the buyer to the provider’s page. If something in the cart
				changed meanwhile (a price, sold out), the widget says so and shows the cart as it is now.
			</P>
		</Section>

		<Section
			id='thanks'
			title='Thank-you page'
			lead='Where buyers come back to after paying.'>
			<CodeBlock
				label='thank-you page'
				code={'<div data-mint="thanks"></div>'}
			/>
			<P>
				It reads the payment’s reference from the page’s address (<C>?ref=…</C>), waits for the provider’s confirmation —
				usually a second or two — and shows the order number and what was bought. A guest’s cart is emptied then.
			</P>
		</Section>

		<Section
			id='orders'
			title='My orders'
			lead='A signed-in customer’s own orders, for an account page.'>
			<CodeBlock
				label='account page'
				code={'<div data-mint="login"></div>\n<div data-mint="orders"></div>'}
			/>
			<P>Each order shows its number, date, status (as your team sets it — Paid, Packed, Shipped…), total and items.</P>
		</Section>

		<Section
			id='mint-js'
			title='Mint in your own code'
			lead='mint.js gives your page’s scripts window.Mint.'>
			<Terms
				head={['Use', 'Does']}
				rows={[
					[<C key='r'>await Mint.auth.ready</C>, 'Waits until the stored sign-in has been checked; gives the customer or null.'],
					[<C key='u'>Mint.auth.user</C>, 'The signed-in customer, or null.'],
					[<C key='i'>Mint.auth.signIn(email, password)</C>, 'Signs in from your own form.'],
					[<C key='s'>Mint.auth.signUp({'{ name, email, password }'})</C>, 'Creates the account and signs in.'],
					[<C key='o'>Mint.auth.signOut()</C>, 'Signs out on this browser.'],
					[<C key='c'>Mint.auth.onChange(cb)</C>, 'Calls cb with the customer (or null) on every sign-in and sign-out.'],
					[<C key='a'>Mint.api(path, init)</C>, <>Calls your public API, as the customer when one is signed in. Gives a <C>fetch</C> Response.</>],
					[<C key='e'>Mint.on(event, cb)</C>, <>Listens for widget events, e.g. <C>auth</C> or <C>cart</C>. They also fire on <C>document</C> as <C>mint:auth</C>, <C>mint:cart</C>.</>],
					[<C key='cr'>await Mint.cart.ready</C>, 'Waits until the cart is loaded. Then Mint.cart.lines, .count, .subtotal and .currency are set.'],
					[<C key='ca'>Mint.cart.add(id, {'{ variant, quantity }'})</C>, 'Adds a product. Gives the updated cart.'],
					[<C key='cs'>Mint.cart.set(id, quantity, variant)</C>, <>Sets a line’s quantity; 0 removes it. Also <C>remove(id, variant)</C> and <C>clear()</C>.</>],
					[<C key='cp'>Mint.cart.product(id)</C>, 'A product as the cart sees it: name, price, variants with their price and stock.'],
					[<C key='cf'>Mint.cart.format(amount)</C>, 'An amount in your currency, written the visitor’s way.'],
				]}
			/>
			<CodeBlock
				label='Mint example'
				code={`<script>
  document.addEventListener('mint:auth', e => {
    document.body.classList.toggle('signed-in', !!e.detail);
  });
  async function myOrders() {
    await Mint.auth.ready;
    if (!Mint.auth.user) return [];
    const res = await Mint.api('orders?sort=-createdAt');
    return (await res.json()).doc;
  }
</script>`}
			/>
			<P>
				<C>window.MintAuth</C> still works and is the same object as <C>Mint.auth</C>.
			</P>
		</Section>

		<Section
			id='coming-next'
			title='Coming next'
			lead='Being built now, roughly in this order.'>
			<List
				items={[
					<>
						<strong>More ways to pay</strong>: SSLCommerz and bKash for organizations in Bangladesh, cash on delivery and bank
						transfer everywhere, and refunds. Which providers you can use depends on your organization’s country, set in{' '}
						<A href='/organization'>organization settings</A>. Card payments with Stripe work now — see{' '}
						<A href='/payments'>Payments</A>.
					</>,
					<>
						<strong>Forms</strong>: contact and newsletter forms built from your models, with spam protection.
					</>,
					<>
						<strong>Booking</strong>: free slots worked out on the server, so there are no double bookings.
					</>,
					<>
						<strong>WhatsApp button, cookie consent and search</strong>.
					</>,
				]}
			/>
		</Section>

		<Section
			id='faq'
			title='Troubleshooting'>
			<Terms
				head={['Symptom', 'Why, and what to do']}
				rows={[
					['Nothing shows', <>Is the widget switched on and saved? Is the script’s <C>data-project</C> right? The browser console says which.</>],
					['A change doesn’t show', 'Sites pick up saved changes within a minute. Reload the page.'],
					['The colours clash with my page', <>Set <em>Light or dark</em> to Always light or Always dark, or pick a colour under <em>Look</em>.</>],
					['Signed in, but my API calls get 401', <>Use <C>Mint.api</C>: plain <C>fetch</C> doesn’t send the customer’s token.</>],
					['The cart won’t switch on', <>Set up the <A href='#shop'>Shop</A> first and save it.</>],
					['An add-to-cart button does nothing', <>Check the product ID (a wrong one, or a product that isn’t for sale, shows “Not found”) and that it isn’t sold out.</>],
				]}
			/>
		</Section>
	</Guide>
);

export default Widgets;
