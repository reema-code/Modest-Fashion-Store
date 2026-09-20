import { icon, formatPrice, wishlistStore } from '../utils.js'

export const productCard = p => `
  <article class="product" data-collection="${p.collection}" data-product-id="${p.id}">
    <div class="product-image"><a href="#/product/${p.slug}" aria-label="View ${p.name}"><img src="${p.thumb}" alt="${p.name}" loading="lazy" width="900" height="1150"></a><button class="heart ${wishlistStore.has(p.id) ? 'saved' : ''}" data-wish="${p.id}" aria-label="Save ${p.name}" aria-pressed="${wishlistStore.has(p.id)}">${icon('heart')}</button><a class="quick" href="#/product/${p.slug}">Choose your size</a></div>
    <div class="product-info"><div><h3><a href="#/product/${p.slug}">${p.name}</a></h3><p>${p.colors.join(' / ')}</p></div><strong>${formatPrice(p.price)}</strong></div>
  </article>`
