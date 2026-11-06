# The Paper Affair

A pre-launch storefront for our small gifting business, built with React, Vite, and Tailwind CSS. The first collection intentionally features only two planned products: Blind Date With a Book and a Glass Tumbler.

## Run locally

1. Install Node.js (LTS) and Git if needed.
2. In PowerShell, navigate to the project folder (the folder containing `package.json`).
3. Run `npm install`.
4. Run `npm run dev` and open the local address Vite prints, usually `http://localhost:5173`.

## Current pre-launch status

- The two products are shown as **Coming soon**; cart ordering is disabled until inventory is received and verified.
- Product images are sample inspiration images, not photographs of the actual products.
- Displayed prices are estimates and must be confirmed before orders open.
- Product specs, stock levels, shipping promises, and checkout/payment are not connected to a live backend.
- The demo checkout must not be used to claim or accept real orders/payments.

## Brand settings

Edit `src/config/siteConfig.js` to update the brand name, logo text, tagline, Instagram handle, contact details, shipping charge, free-shipping threshold, and currency.

## Product setup

Edit `src/data/products.js`. Before launch, replace the sample images and descriptions with verified product information. When actual inventory is ready, update each product's `launchStatus` to `available` and set its real stock quantity. Confirm prices, shipping, policies, and payment/order handling before enabling sales.

## Payment and account limitations

This is currently a frontend-only prototype. It does not have Razorpay, a secure backend, database, or real authentication. To accept payments, add a backend that creates Razorpay orders and verifies payment signatures server-side; keep secret keys on the server and never in frontend code. Do not mark an order paid until the backend verifies the payment.
