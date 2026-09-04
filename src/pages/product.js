import { findProduct, relatedTo, sizeGuide, collections } from '../data.js'
import { icon, formatPrice } from '../utils.js'
import { productCard } from './product-card.js'
import { breadcrumbs } from '../components.js'

export const productPage = (slug) => {
  const product = findProduct(slug)
  if (!product) return null
  const collection = collections.find((c) => c.slug === product.collection)
  const related = relatedTo(product)
  const views = ['Front', 'Styled', 'Detail']

  return `
    <section class="product-detail">
      ${breadcrumbs([{ label: 'Home', href: '#/' }, { label: collection.name, href: `#/collections/${collection.slug}` }, { label: product.name }])}
      <div class="product-detail-grid">
        <div class="gallery" data-gallery>
          <div class="gallery-main">
            ${product.images.map((src, i) => `<img src="${src}" alt="${product.name} — ${views[i]} view" class="gallery-image ${i === 0 ? 'active' : ''}" data-gallery-image data-index="${i}">`).join('')}
          </div>
          <div class="gallery-thumbs">
            ${product.images.map((src, i) => `<button class="gallery-thumb ${i === 0 ? 'active' : ''}" data-gallery-thumb="${i}"><img src="${src}" alt="${views[i]} view">${views[i]}</button>`).join('')}
          </div>
        </div>

        <div class="product-panel">
          <p class="eyebrow">${collection.name}</p>
          <h1>${product.name}</h1>
          <p class="price">${formatPrice(product.price)}</p>

          <div class="option-group">
            <label>Colour — <span data-color-label>${product.colors[0]}</span></label>
            <div class="swatches" data-colors>
              ${product.colors.map((c, i) => `<button class="swatch ${i === 0 ? 'active' : ''}" data-color="${c}" style="--swatch:${swatchColor(c)}" aria-label="${c}"></button>`).join('')}
            </div>
          </div>

          <div class="option-group">
            <div class="option-group-head">
              <label>Size</label>
              <button class="size-guide-link" data-open-size-guide>Size guide</button>
            </div>
            <div class="size-grid" data-sizes>
              ${product.sizes.map((s, i) => `<button class="size-btn ${i === 2 ? 'active' : ''}" data-size="${s}">${s}</button>`).join('')}
            </div>
          </div>

          <div class="buy-actions" data-product-slug="${product.slug}">
            <button class="cta dark add-to-bag" data-add-to-bag>Add to bag</button>
            <button class="cta outline buy-now" data-buy-now>Buy now</button>
          </div>
          <p class="stock-note">${icon('check')} In stock — ships within 24 hours</p>

          <div class="accordion" data-accordion>
            <details open>
              <summary>Description</summary>
              <div class="accordion-body"><p>${product.description}</p></div>
            </details>
            <details>
              <summary>Fabric &amp; fit</summary>
              <div class="accordion-body">
                <p><b>Fabric:</b> ${product.fabric}</p>
                <p><b>Fit:</b> ${product.fit}</p>
              </div>
            </details>
            <details>
              <summary>Care instructions</summary>
              <div class="accordion-body"><p>${product.care}</p></div>
            </details>
            <details>
              <summary>Delivery &amp; returns</summary>
              <div class="accordion-body">
                <p>Free shipping across the UAE on orders over ${formatPrice(300)}. Delivered within 2–4 business days in the UAE, 4–7 business days across the GCC.</p>
                <p>Unworn items may be returned within 14 days for a full refund. See our <a href="#/shipping-returns">shipping &amp; returns policy</a>.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>

    ${related.length ? `
    <section class="product-section">
      <div class="section-head"><div><p class="eyebrow">Complete the look</p><h2>You may also like</h2></div></div>
      <div class="product-grid">${related.map(productCard).join('')}</div>
    </section>` : ''}

    <div class="modal" data-size-guide-modal aria-hidden="true">
      <div class="modal-card">
        <button class="modal-close" data-close-size-guide aria-label="Close size guide">${icon('close')}</button>
        <h3>Size guide</h3>
        <p>All measurements in centimetres. For an easier drape, we recommend sizing up if you're between sizes.</p>
        <table class="size-table">
          <thead><tr><th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th></tr></thead>
          <tbody>${sizeGuide.map((r) => `<tr><td>${r.size}</td><td>${r.bust}</td><td>${r.waist}</td><td>${r.hip}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
    <div class="overlay" data-size-guide-overlay></div>
  `
}

function swatchColor(name) {
  const map = {
    Black: '#211f1c', Espresso: '#4a3a2f', Sand: '#dcccae', Taupe: '#a9967f', Charcoal: '#3a3a38',
    Ivory: '#f3ede0', Camel: '#b48a5a', Stone: '#c9c0ac', Sage: '#8f9b87',
  }
  return map[name] || '#c9c0ac'
}
