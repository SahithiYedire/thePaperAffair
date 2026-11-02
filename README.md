# The Paper Affair

A Pinterest-inspired gifting brand storefront built with React, Vite, and Tailwind CSS.

## Features

- Responsive boutique homepage
- Shop by category and product detail pages
- Functional cart with quantity controls, coupon support, and local storage persistence
- Guest checkout and account/order history flow
- Contact page and admin dashboard starter
- Centralized brand configuration file

## Tech stack

- React + Vite
- Tailwind CSS
- React Router
- Lucide React

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the app
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal, usually http://localhost:5173

## Brand settings

Edit `src/config/siteConfig.js` to update:

- brand name
- tagline
- Instagram handle
- WhatsApp number
- email
- address
- shipping fee
- free shipping threshold

## Notes

This is a frontend demo in development/test mode. Real Razorpay integration and database-backed auth/order storage require a backend and live API credentials.
