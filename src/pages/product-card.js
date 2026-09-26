import { icon, formatPrice, wishlistStore, stars, avgRating } from '../utils.js'
import { t, L } from '../i18n.js'

export const productCard = (p) => {
  const rating = avgRating(p.reviews)
  const reviewCount = p.reviews?.length || 0
  return `
  <article class="product" data-collection="${p.collection}">
    <a class="product-image" href="#/product/${p.slug}">
      <img src="${p.thumb}" alt="${L(p.name, p.nameAr)}" loading="lazy">
    </a>
    <div class="product-info">
      <div class="product-info-top">
        <div>
          <h3><a href="#/product/${p.slug}">${L(p.name, p.nameAr)}</a></h3>
          <p>${t(p.colors[0])}</p>
          ${reviewCount ? `<p class="card-rating">${stars(rating)}<span>(${reviewCount})</span></p>` : ''}
        </div>
        <button class="heart ${wishlistStore.has(p.id) ? 'saved' : ''}" data-wish="${p.id}" aria-label="${t('Save')} ${L(p.name, p.nameAr)}">${icon('heart')}</button>
      </div>
      <div class="product-info-bottom">
        <strong>${formatPrice(p.price)}</strong>
        ${p.badge ? `<span class="badge">${t(p.badge)}</span>` : ''}
      </div>
      <button class="add-cart-btn" data-quick="${p.id}">${icon('bag')}${t('Add to cart')}</button>
    </div>
  </article>`
}
