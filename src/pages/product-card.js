import { icon, formatPrice, wishlistStore } from '../utils.js'

export const productCard = (p) => `
  <article class="product" data-collection="${p.collection}">
    <a class="product-image" href="#/product/${p.slug}">
      <img src="${p.thumb}" alt="${p.name}" loading="lazy">
    </a>
    <div class="product-info">
      <div class="product-info-top">
        <div><h3><a href="#/product/${p.slug}">${p.name}</a></h3><p>${p.colors[0]}</p></div>
        <button class="heart ${wishlistStore.has(p.id) ? 'saved' : ''}" data-wish="${p.id}" aria-label="Save ${p.name}">${icon('heart')}</button>
      </div>
      <div class="product-info-bottom">
        <strong>${formatPrice(p.price)}</strong>
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      </div>
      <button class="add-cart-btn" data-quick="${p.id}">${icon('bag')}Add to cart</button>
    </div>
  </article>`
