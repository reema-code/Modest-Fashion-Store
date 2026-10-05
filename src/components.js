import { collections } from './data.js'
import { icon, formatPrice, cartStore } from './utils.js'
import { t, L, isRTL } from './i18n.js'

const LOGO_AR_DATA_URI = 'data:image/png;base64,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'

const logoMark = () => `
  <a class="logo-mark" href="#/" aria-label="${L('Mughayir', 'مغاير')}">
    ${isRTL()
      ? `<img class="logo-img" src="${LOGO_AR_DATA_URI}" alt="مغاير">`
      : `<span class="logo-text-en">Mughayir</span>`}
  </a>`

export const announcementBar = () => `
  <div class="announcement">
    <p>${t('Complimentary shipping across the UAE on orders over')} ${formatPrice(300)}</p>
    <button class="announcement-close" aria-label="Close announcement">${icon('close')}</button>
  </div>`

export const header = () => `
  <header class="site-header" data-header>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
    ${logoMark()}
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
        ${logoMark()}
        <p>${t('Modest, by design. Clothing made with intention, for the way you actually live — from Dubai to the world.')}</p>
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
        <h4>${t('The Mughayir letter')}</h4>
        <p>${t('New collections and considered stories, delivered occasionally.')}</p>
        <form class="footer-newsletter" data-newsletter>
          <input type="email" required placeholder="${t('Your email address')}" aria-label="${t('Your email address')}">
          <button type="submit" aria-label="Subscribe">${icon('arrow')}</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright">&copy; 2026 Mughayir Studio</p>
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
