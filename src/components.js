import { collections } from './data.js'
import { icon, formatPrice, cartStore } from './utils.js'
import { t, L, isRTL } from './i18n.js'

export const announcementBar = () => `
  <div class="announcement">
    <p>${t('Complimentary shipping across the UAE on orders over')} ${formatPrice(300)}</p>
    <button class="announcement-close" aria-label="Close announcement">${icon('close')}</button>
  </div>`

export const header = () => `
  <header class="site-header" data-header>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
    <a class="logo" href="#/">BARIZ<span>&reg;</span></a>
    <nav class="main-nav" data-nav>
      <div class="nav-drop">
        <a href="#/">${t('New in')}</a>
        <a href="#/collections">${t('Shop all')}</a>
        ${collections.map((c) => `<a href="#/collections/${c.slug}">${L(c.name, c.nameAr)}</a>`).join('')}
        <a href="#/story">${t('Our story')}</a>
      </div>
    </nav>
    <div class="actions">
      <div class="lang-switch" data-lang-switch>
        <button data-lang="en" class="${!isRTL() ? 'active' : ''}">EN</button>
        <button data-lang="ar" class="${isRTL() ? 'active' : ''}">AR</button>
      </div>
      <button class="search-btn" aria-label="Search">${icon('search')}</button>
      <button class="wishlist-btn" aria-label="Wishlist">${icon('heart')}</button>
      <button class="bag-btn" aria-label="Shopping bag">${icon('bag')}<b data-cart-count>${cartStore.count()}</b></button>
    </div>
  </header>`

export const footer = () => `
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="logo" href="#/">BARIZ<span>&reg;</span></a>
        <p>${t('Modest, by design. Considered clothing for women who dress with intention — from Dubai to the world.')}</p>
      </div>
      <div class="footer-col">
        <h4>${t('Shop')}</h4>
        ${collections.map((c) => `<a href="#/collections/${c.slug}">${L(c.name, c.nameAr)}</a>`).join('')}
      </div>
      <div class="footer-col">
        <h4>${t('Information')}</h4>
        <a href="#/story">${t('Our story')}</a>
        <a href="#/shipping-returns">${t('Shipping & returns')}</a>
        <a href="#/size-guide">${t('Size guide')}</a>
        <a href="#/contact">${t('Contact')}</a>
      </div>
      <div class="footer-col newsletter-col">
        <h4>${t('The Bariz letter')}</h4>
        <p>${t('New collections and considered stories, delivered occasionally.')}</p>
        <form class="footer-newsletter" data-newsletter>
          <input type="email" required placeholder="${t('Your email address')}" aria-label="${t('Your email address')}">
          <button type="submit" aria-label="Subscribe">${icon('arrow')}</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright">&copy; 2026 Bariz Studio</p>
      <div class="social"><a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">TikTok</a></div>
      <p class="legal">${t('Privacy')} &nbsp; ${t('Terms')}</p>
    </div>
  </footer>`

export const cartDrawer = () => `
  <div class="cart" data-cart aria-hidden="true">
    <div class="cart-top">
      <h2>${t('Your bag')} <span data-cart-count>${cartStore.count()}</span></h2>
      <button class="cart-close" aria-label="Close bag">${icon('close')}</button>
    </div>
    <div class="cart-items" data-cart-items></div>
    <div class="cart-total" data-cart-total>
      <span>${t('Subtotal')}</span><strong data-cart-subtotal>${formatPrice(cartStore.subtotal())}</strong>
      <p class="cart-note">${t('Shipping and taxes calculated at checkout.')}</p>
      <button class="checkout-btn">${t('Checkout')}</button>
    </div>
  </div>
  <div class="overlay" data-overlay></div>
  <div class="toast" role="status" data-toast>${t('Added')} ${t('to your bag')}</div>`

export const cartItemsMarkup = (items) => items.length
  ? items.map((p, i) => `
    <div class="cart-item">
      <img src="${p.image}" alt="${p.name}">
      <div class="cart-item-info">
        <h3><a href="#/product/${p.slug}">${L(p.name, p.nameAr)}</a></h3>
        <p>${t(p.color)} &middot; ${p.isCustom ? p.size : `${t('Size')} ${p.size}`}</p>
        ${p.notes ? `<p class="cart-item-notes">“${p.notes}”</p>` : ''}
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
  : `<p class="empty">${t('Your bag is waiting.')}<br><a href="#/collections">${t('Explore the collection')}</a></p>`

export const breadcrumbs = (parts) => `
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    ${parts.map((p, i) => i === parts.length - 1 ? `<span aria-current="page">${p.label}</span>` : `<a href="${p.href}">${p.label}</a><span class="sep">/</span>`).join('')}
  </nav>`
