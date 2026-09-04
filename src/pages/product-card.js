import { icon, formatPrice, wishlistStore } from '../utils.js'

export const productCard = (p) => `
  <article class="product" data-collection="${p.collection}">
    <a class="product-image" href="#/product/${p.slug}">
      <img src="${p.thumb}" alt="${p.name}" loading="lazy">
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      <button class="heart ${wishlistStore.has(p.id) ? 'saved' : ''}" data-wish="${p.id}" aria-label="Save ${p.name}">${icon('heart')}</button>
      <span class="quick" data-quick="${p.id}">Quick add</span>
    </a>
    <div class="product-info">
      <div><h3><a href="#/product/${p.slug}">${p.name}</a></h3><p>${p.colors[0]}</p></div>
      <strong>${formatPrice(p.price)}</strong>
    </div>
  </article>`
