import { collections } from './data.js'
import { icon, formatPrice, cartStore } from './utils.js'

export const announcementBar = () => `
  <div class="announcement">
    <p>Complimentary shipping across the UAE on orders over ${formatPrice(300)}</p>
    <button class="announcement-close" aria-label="Close announcement">${icon('close')}</button>
  </div>`

export const header = () => `
  <header class="site-header" data-header>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
    <a class="logo" href="#/">SEREIN<span>&reg;</span></a>
    <nav class="main-nav" data-nav>
      <div class="nav-drop">
        <a href="#/">New in</a>
        <a href="#/collections">Shop all</a>
        ${collections.map((c) => `<a href="#/collections/${c.slug}">${c.name}</a>`).join('')}
        <a href="#/story">Our story</a>
      </div>
    </nav>
    <div class="actions">
      <button class="search-btn" aria-label="Search">${icon('search')}</button>
      <button class="wishlist-btn" aria-label="Wishlist">${icon('heart')}</button>
      <button class="bag-btn" aria-label="Shopping bag">${icon('bag')}<b data-cart-count>${cartStore.count()}</b></button>
    </div>
  </header>`

export const footer = () => `
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="logo" href="#/">SEREIN<span>&reg;</span></a>
        <p>Modest, by design. Considered clothing for women who dress with intention — from Dubai to the world.</p>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        ${collections.map((c) => `<a href="#/collections/${c.slug}">${c.name}</a>`).join('')}
      </div>
      <div class="footer-col">
        <h4>Information</h4>
        <a href="#/story">Our story</a>
        <a href="#/shipping-returns">Shipping &amp; returns</a>
        <a href="#/size-guide">Size guide</a>
        <a href="#/contact">Contact</a>
      </div>
      <div class="footer-col newsletter-col">
        <h4>The Serein letter</h4>
        <p>New collections and considered stories, delivered occasionally.</p>
        <form class="footer-newsletter" data-newsletter>
          <input type="email" required placeholder="Your email address" aria-label="Email address">
          <button type="submit" aria-label="Subscribe">${icon('arrow')}</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright">&copy; 2026 Serein Studio</p>
      <div class="social"><a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">TikTok</a></div>
      <p class="legal">Privacy &nbsp; Terms</p>
    </div>
  </footer>`

export const cartDrawer = () => `
  <div class="cart" data-cart aria-hidden="true">
    <div class="cart-top">
      <h2>Your bag <span data-cart-count>${cartStore.count()}</span></h2>
      <button class="cart-close" aria-label="Close bag">${icon('close')}</button>
    </div>
    <div class="cart-items" data-cart-items></div>
    <div class="cart-total" data-cart-total>
      <span>Subtotal</span><strong data-cart-subtotal>${formatPrice(cartStore.subtotal())}</strong>
      <p class="cart-note">Shipping and taxes calculated at checkout.</p>
      <button class="checkout-btn">Checkout</button>
    </div>
  </div>
  <div class="overlay" data-overlay></div>
  <div class="toast" role="status" data-toast>Added to your bag</div>`

export const cartItemsMarkup = (items) => items.length
  ? items.map((p, i) => `
    <div class="cart-item">
      <img src="${p.image}" alt="${p.name}">
      <div class="cart-item-info">
        <h3><a href="#/product/${p.slug}">${p.name}</a></h3>
        <p>${p.color} &middot; Size ${p.size}</p>
        <div class="qty-stepper" data-qty-index="${i}">
          <button class="qty-minus" aria-label="Decrease quantity">${icon('minus')}</button>
          <span>${p.qty}</span>
          <button class="qty-plus" aria-label="Increase quantity">${icon('plus')}</button>
        </div>
      </div>
      <div class="cart-item-end">
        <strong>${formatPrice(p.price * p.qty)}</strong>
        <button class="remove-btn" data-remove="${i}" aria-label="Remove ${p.name}">${icon('close')}</button>
      </div>
    </div>`).join('')
  : `<p class="empty">Your bag is waiting.<br><a href="#/collections">Explore the collection</a></p>`

export const breadcrumbs = (parts) => `
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    ${parts.map((p, i) => i === parts.length - 1 ? `<span aria-current="page">${p.label}</span>` : `<a href="${p.href}">${p.label}</a><span class="sep">/</span>`).join('')}
  </nav>`
