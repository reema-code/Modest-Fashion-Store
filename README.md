# Serein — Modest Fashion Store

A premium, editorial storefront for a contemporary modest-fashion label. Built as a dependency-free vanilla JS single-page app with hash-based routing.

## What's included

- **Home** — editorial hero, new arrivals, shop-by-collection, campaign section, best sellers, category features (workwear, abayas, sportswear, occasion/kaftans), brand manifesto, testimonials, newsletter.
- **Collections** — `#/collections` (all six: Abayas, Workwear, Modest Everyday, Sportswear, Occasion, Kaftans) and `#/collections/:slug` with a collection hero, sort controls, and a product grid.
- **Product detail** — `#/product/:slug` with a multi-view gallery, colour and size selection, a size-guide modal, add-to-bag / buy-now, a description/fabric/care/delivery accordion, and related products.
- **Cart** — persistent (localStorage) shopping bag drawer with quantity controls, plus a wishlist heart on every product card.
- Static pages for size guide, shipping & returns, and contact.

## Project structure

```
src/
  data.js          product & collection catalogue
  utils.js         cart/wishlist storage, formatting, icons
  components.js    header, footer, cart drawer (shared shell)
  router.js        hash-based router
  pages/           home, collection, product, static pages
  style.css        design system + responsive styles
```

## Preview locally

```bash
npm run dev
```

Open `http://localhost:5173`. The project has no runtime dependencies. For a production check, run `npm run build && npm run preview`.

> Photography is loaded from Unsplash, so an internet connection is required for images and web fonts.

## Deploy to Vercel

The included `vercel.json` configures the production build and output directory. With the Vercel CLI authenticated, deploy from the project root:

```bash
vercel --prod
```
