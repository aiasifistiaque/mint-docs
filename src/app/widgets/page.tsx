import Guide from '@/components/docs/Guide';
import { A, C, CodeBlock, List, Note, P, Section, Terms } from '@/components/docs/prose';
import { API_ORIGIN } from '@/lib/config';
import { guideMeta } from '@/lib/seo';

export const metadata = guideMeta('/widgets');

/**
 * Site widgets (backend docs/widgets): adding a widget with the setup wizard
 * (W-24), the mint.js script, the shared look,
 * the login widget, its customer model and forgot password (W-25), the shop, cart, checkout, thank-you page and My orders
 * (W-05/W-07), window.Mint and what's coming. The panel's Widgets page
 * (src/app/widgets) links each panel here — the section ids are GuideLink
 * targets (GuideLink.tsx GUIDE_OF).
 */

const SECTIONS = [
	{ id: 'add-widget', title: 'Add a widget' },
	{ id: 'add-mint', title: 'Add MINT to your site' },
	{ id: 'look', title: 'The look' },
	{ id: 'login', title: 'Login & account' },
	{ id: 'login-customers', title: 'Your customer model' },
	{ id: 'login-reset', title: 'Forgot password' },
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

const SCRIPT = `<script src="${API_ORIGIN}/public/mint.js" data-key="<project key>" async></script>`;

const Widgets = () => (
	<Guide
		href='/widgets'
		sections={SECTIONS}
		open={{ href: '/widgets', label: 'Open Widgets' }}>
		<Section
			id='add-widget'
			title='Add a widget'
			lead='The Widgets page starts empty. Add the widgets you want one at a time; a short setup walks you through each.'>
			<P>
				Open <em>Widgets</em> and press <em>Add a widget</em>. The setup takes a few steps:
			</P>
			<Terms
				head={['Step', 'What you do']}
				rows={[
					['Widget', 'Pick one: Login & account, Cart, Checkout, Thank-you page or My orders. Widgets that are coming soon show greyed out.'],
					['Customers', <>Login & account only: MINT’s Customers (the default) or a model of your own. See <A href='#login-customers'>Your customer model</A>.</>],
					['Shop', <>Cart, Checkout, Thank-you page and My orders: which model holds your products (and, for all but the cart, where orders go). The <A href='#shop'>Shop</A> settings are right there to fill in and save.</>],
					['Set up', 'The widget’s options, such as a card or a button, and what it asks for.'],
					['Texts', 'Every word it shows, in your words or your visitors’ language. Leave one as it is to keep the default.'],
					['Review', <>A preview, the code to put on your page, and <em>Switch it on now</em>. Press <em>Add widget</em>.</>],
				]}
			/>
			<P>
				Added widgets are listed on the Widgets page. Each one has a switch to turn it on or off straight away,{' '}
				<em>Edit</em> (the same steps again, without picking the widget) and <em>Remove</em>. Removing takes it off your site
				at once and puts its settings back to the defaults; you can add it again any time.
			</P>
			<Note>
				A selling widget can be added before the Shop is set up. It’s added switched off, with a note saying what’s missing;
				switch it on once the Shop is saved.
			</Note>
		</Section>

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
					'A widget shows only once it’s added and switched on. Switch it off (or remove it) and it disappears from your site within a minute.',
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
				The Look panel appears once you’ve added a widget, and has its own <em>Save</em>. Each widget’s setup ends with a
				live preview on a light or dark page, showing your settings before anything goes live.
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
					['Ask for a phone number on sign-up', 'Adds an optional phone field. It’s kept with the account and copied to your customer model’s phone field.'],
					['Show “Forgot your password?”', <>On by default. Emails a link to choose a new password — see <A href='#login-reset'>Forgot password</A>.</>],
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
			id='login-customers'
			title='Your customer model'
			lead='Accounts are kept in MINT’s Customers by default. You can keep them with a model of your own instead.'>
			<P>
				Out of the box, everyone who signs up is on your <A href='/customers'>Customers</A> page. If you have a model of your
				own for customers, for example <em>Members</em> or <em>Customers</em>, first open it to sign-in: switch on{' '}
				<strong>People can sign up and sign in</strong> on the model’s <A href='/models#models-signin'>Advanced tab</A>. Only
				models switched on there are offered. Then pick it in the widget setup’s <em>Customers</em> step,
				choose which fields hold the email, name and phone, then choose how:
			</P>
			<Terms
				head={['How', 'What happens']}
				rows={[
					['Keep accounts in MINT’s Customers, with a copy here', <>
						Accounts stay on your Customers page, and each one also gets a record in your model (or is linked to the record with
						the same email, in any capitals). Accounts made earlier get their record the next time they sign in. Your team can
						edit or remove those records; the accounts carry on.
					</>],
					['This model holds the accounts', <>
						Every sign-up is a record in your model and isn’t on the Customers page. The record’s email is what signs in, so if
						your team changes it, the customer signs in with the new one. Removing (or archiving) the record ends that account
						and signs it out. Records your team adds have no password, so they can’t sign in, and nobody can take one over by
						signing up with its email. Accounts made before you switched keep signing in as MINT customers.
					</>],
				]}
			/>
			<P>
				Either way, passwords never go into your model: MINT keeps them safely (scrambled, never shown to anyone), along with
				staying signed in and signing out everywhere. When a customer changes their name or phone on your site, their record
				changes too.
			</P>
			<Terms
				head={['Field', 'Needs']}
				rows={[
					['Email', 'Required. An Email or Text field.'],
					['Name', 'Optional. A Text field, filled from the sign-up form.'],
					['Phone', <>Optional. A Text field. Turn on <em>Ask for a phone number on sign-up</em> to collect one.</>],
				]}
			/>
			<P>
				The model must be a list (not a single record), and any other required field needs a default value, because the
				record is made from the sign-up form alone. The panel says so if it doesn’t fit. If you later remove a field you
				picked, sign-up keeps working; the setup then tells you to pick the fields again.
			</P>
			<P>
				Your own code sees the record’s ID as <C>Mint.auth.user.record</C>. With your model’s{' '}
				<A href='/public-api'>public API</A> on, signed-in and owner-only, a customer can read and update the record their
				sign-up made, and nobody else’s. A record your team made earlier is linked but not handed over, because an email
				address alone doesn’t prove who someone is.
			</P>
		</Section>

		<Section
			id='login-reset'
			title='Forgot password'
			lead='Customers who forget their password get an email with a link to choose a new one.'>
			<P>
				Under the sign-in form there’s a <em>Forgot your password?</em> link. The customer types their email and is told a link
				is on its way. They see the same message whether or not that email has an account, so nobody can use it to find out who
				your customers are. It works the same for accounts in MINT’s Customers and accounts your own model holds.
			</P>
			<List
				items={[
					<>The email comes from your project’s own email account (<em>Project → Email</em>, or your organization’s). Until one is set up, visitors are told the email can’t be sent.</>,
					<>The link leads back to the page they asked from, as long as it’s on one of your project’s domains. Anywhere else, it opens a <em>Choose a new password</em> page hosted by MINT, so a link never goes to a site that isn’t yours.</>,
					<>The link works once, for an hour. Setting the new password signs them in there and signs them out on every other device.</>,
				]}
			/>
			<P>
				The email shows in your email log as <em>Password reset</em>, using your email design. To hide the link, switch off{' '}
				<em>Show “Forgot your password?”</em> in the widget’s options. Building your own form? Use{' '}
				<A href='#mint-js'>Mint.auth.forgotPassword and resetPassword</A>.
			</P>
		</Section>

		<Section
			id='shop'
			title='Shop'
			lead='Tell the widgets which model is your catalogue. The cart, and later checkout, read prices and stock from it.'>
			<P>
				Widgets don’t assume what your models are called. In a selling widget’s setup (its <em>Shop</em> step), or under <em>Shop</em> on the Widgets page once one is added, pick the model that
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
					[<C key='u'>Mint.auth.user</C>, <>The signed-in customer, or null. <C>.record</C> is their record in <A href='#login-customers'>your customer model</A>, when you picked one.</>],
					[<C key='i'>Mint.auth.signIn(email, password)</C>, 'Signs in from your own form.'],
					[<C key='s'>Mint.auth.signUp({'{ name, email, password, phone }'})</C>, 'Creates the account and signs in. The phone is optional.'],
					[<C key='o'>Mint.auth.signOut()</C>, 'Signs out on this browser.'],
					[<C key='f'>Mint.auth.forgotPassword(email)</C>, 'Emails a link back to this page to choose a new password.'],
					[<C key='r'>Mint.auth.resetPassword(token, password)</C>, <>Sets the new password and signs in. When the page is opened from the link, the token is <C>Mint.auth.resetToken</C> (taken out of the address bar).</>],
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
					['Nothing shows', <>Is the widget added and switched on? Is the script’s <C>data-key</C> the project key from API → Keys? The browser console says which.</>],
					['A change doesn’t show', 'Sites pick up saved changes within a minute. Reload the page.'],
					['The colours clash with my page', <>Set <em>Light or dark</em> to Always light or Always dark, or pick a colour under <em>Look</em>.</>],
					['Signed in, but my API calls get 401', <>Use <C>Mint.api</C>: plain <C>fetch</C> doesn’t send the customer’s token.</>],
					['The cart won’t switch on', <>Set up the <A href='#shop'>Shop</A> first and save it.</>],
					['Sign-ups don’t show in my model', <>Check the <A href='#login-customers'>customer model</A> in the widget’s setup (Edit → Customers). If a field you picked was removed or renamed, pick it again.</>],
					['An add-to-cart button does nothing', <>Check the product ID (a wrong one, or a product that isn’t for sale, shows “Not found”) and that it isn’t sold out.</>],
				]}
			/>
		</Section>
	</Guide>
);

export default Widgets;
