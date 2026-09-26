import { findProduct, relatedTo, sizeGuide, collections, VIEWS } from '../data.js'
import { icon, formatPrice } from '../utils.js'
import { productCard } from './product-card.js'
import { breadcrumbs } from '../components.js'
import { t, L } from '../i18n.js'

export const productPage = (slug) => {
  const product = findProduct(slug)
  if (!product) return null
  const collection = collections.find((c) => c.slug === product.collection)
  const related = relatedTo(product)
  const views = (product.views || product.images.map((_, i) => VIEWS[i] || `View ${i + 1}`)).map((v) => t(v))
  const eg = (n) => `${t('e.g.')} ${n}`

  return `
    <section class="product-detail">
      ${breadcrumbs([{ label: t('Home'), href: '#/' }, { label: L(collection.name, collection.nameAr), href: `#/collections/${collection.slug}` }, { label: L(product.name, product.nameAr) }])}
      <div class="product-detail-grid">
        <div class="gallery" data-gallery>
          <div class="gallery-main">
            ${product.images.map((src, i) => `<img src="${src}" alt="${L(product.name, product.nameAr)} — ${views[i]}" class="gallery-image ${i === 0 ? 'active' : ''}" data-gallery-image data-index="${i}">`).join('')}
          </div>
          <div class="gallery-thumbs">
            ${product.images.map((src, i) => `<button class="gallery-thumb ${i === 0 ? 'active' : ''}" data-gallery-thumb="${i}"><img src="${src}" alt="${views[i]}">${views[i]}</button>`).join('')}
          </div>
        </div>

        <div class="product-panel">
          <p class="eyebrow">${L(collection.name, collection.nameAr)}</p>
          <h1>${L(product.name, product.nameAr)}</h1>
          <p class="price">${formatPrice(product.price)}</p>

          <div class="option-group">
            <label>${t('Colour')} — <span data-color-label data-color-value="${product.colors[0]}">${t(product.colors[0])}</span></label>
            <div class="swatches" data-colors>
              ${product.colors.map((c, i) => `<button class="swatch ${i === 0 ? 'active' : ''}" data-color="${c}" style="--swatch:${swatchColor(c)}" aria-label="${t(c)}"></button>`).join('')}
            </div>
          </div>

          <div class="option-group">
            <div class="option-group-head">
              <label>${t('Size')}</label>
              <div class="size-links">
                <button class="size-guide-link" data-open-size-guide>${t('Size guide')}</button>
                <button class="size-guide-link" data-open-size-finder>${t('Know your size')}</button>
              </div>
            </div>
            <div class="size-tabs" data-size-tabs>
              <button class="size-tab active" data-size-tab="ready" type="button">${t('Ready sizes')}</button>
              <button class="size-tab" data-size-tab="custom" type="button">${t('Custom to my measurements')}</button>
            </div>
            <div class="size-grid" data-sizes data-size-panel="ready">
              ${product.sizes.map((s, i) => `<button class="size-btn ${i === 2 ? 'active' : ''}" data-size="${s}">${s}</button>`).join('')}
            </div>
            <div class="custom-size" data-size-panel="custom" hidden>
              <div class="custom-size-grid">
                <label>${t('Length (cm)')}<input type="number" inputmode="decimal" data-measure="length" placeholder="${eg(142)}"></label>
                <label>${t('Bust (cm)')}<input type="number" inputmode="decimal" data-measure="bust" placeholder="${eg(92)}"></label>
                <label>${t('Shoulder (cm)')}<input type="number" inputmode="decimal" data-measure="shoulder" placeholder="${eg(39)}"></label>
                <label>${t('Sleeve (cm)')}<input type="number" inputmode="decimal" data-measure="sleeve" placeholder="${eg(58)}"></label>
              </div>
              <label class="custom-size-note">${t('Notes for our tailor (optional)')}<textarea data-measure="notes" rows="2" placeholder="${t("e.g. I'd like the length a little longer")}"></textarea></label>
              <p class="custom-size-hint">${icon('check')} ${t('Made to your measurements — please allow 2–3 extra days to prepare this piece.')}</p>
            </div>
          </div>

          <div class="buy-actions" data-product-slug="${product.slug}">
            <button class="cta dark add-to-bag" data-add-to-bag>${t('Add to bag')}</button>
            <button class="cta outline buy-now" data-buy-now>${t('Buy now')}</button>
          </div>
          <p class="stock-note">${icon('check')} ${t('In stock — ships within 24 hours')}</p>

          <div class="accordion" data-accordion>
            <details open>
              <summary>${t('Description')}</summary>
              <div class="accordion-body"><p>${L(product.description, product.descriptionAr)}</p></div>
            </details>
            <details>
              <summary>${t('Fabric & fit')}</summary>
              <div class="accordion-body">
                <p><b>${t('Fabric:')}</b> ${L(product.fabric, product.fabricAr)}</p>
                <p><b>${t('Fit:')}</b> ${L(product.fit, product.fitAr)}</p>
              </div>
            </details>
            <details>
              <summary>${t('Care instructions')}</summary>
              <div class="accordion-body"><p>${L(product.care, product.careAr)}</p></div>
            </details>
            <details>
              <summary>${t('Delivery & returns')}</summary>
              <div class="accordion-body">
                <p>${t('Free shipping across the UAE on orders over')} ${formatPrice(300)}. ${t('Delivered within 2–4 business days in the UAE, 4–7 business days across the GCC.')}</p>
                <p>${t('Unworn items may be returned within 14 days for a full refund. See our')} <a href="#/shipping-returns">${t('shipping & returns policy')}</a>.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>

    ${related.length ? `
    <section class="product-section">
      <div class="section-head"><div><p class="eyebrow">${t('Complete the look')}</p><h2>${t('You may also like')}</h2></div></div>
      <div class="product-grid">${related.map(productCard).join('')}</div>
    </section>` : ''}

    <div class="modal" data-size-guide-modal aria-hidden="true">
      <div class="modal-card">
        <button class="modal-close" data-close-size-guide aria-label="${t('Size guide')}">${icon('close')}</button>
        <h3>${t('Size guide')}</h3>
        <p>${t("All measurements in centimetres. For an easier drape, we recommend sizing up if you're between sizes.")}</p>
        <table class="size-table">
          <thead><tr><th>${t('Size')}</th><th>${t('Bust')}</th><th>${t('Waist')}</th><th>${t('Hip')}</th></tr></thead>
          <tbody>${sizeGuide.map((r) => `<tr><td>${r.size}</td><td>${r.bust}</td><td>${r.waist}</td><td>${r.hip}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>

    <div class="modal" data-size-finder-modal aria-hidden="true">
      <div class="modal-card">
        <button class="modal-close" data-close-size-finder aria-label="${t('Know your size')}">${icon('close')}</button>
        <h3>${t('Know your size')}</h3>
        <p>${t("Enter your height and we'll suggest the best fit from our size guide.")}</p>
        <label class="size-finder-label">${t('Height (cm)')}<input type="number" inputmode="decimal" data-finder-height placeholder="${eg(170)}"></label>
        <button class="cta dark size-finder-btn" data-find-size type="button">${t('Show my size')}</button>
        <div class="size-finder-result" data-size-finder-result hidden>
          <p>${t('Your suggested size')}</p>
          <strong data-size-finder-value></strong>
          <button class="cta outline" data-apply-size type="button">${t('Choose this size')}</button>
        </div>
      </div>
    </div>
    <div class="overlay" data-size-guide-overlay></div>
  `
}

function swatchColor(name) {
  const map = {
    Black: '#211f1c', Espresso: '#4a3a2f', Sand: '#dcccae', Taupe: '#a9967f', Charcoal: '#3a3a38',
    Ivory: '#f3ede0', Camel: '#b48a5a', Stone: '#c9c0ac', Sage: '#8f9b87', Navy: '#2a3348', Chocolate: '#4a352a', Teal: '#1f6b6b',
    Emerald: '#1f6b45', Sunset: '#c65a3a', Turquoise: '#1a8fa3', 'Sky Blue': '#5f9fd1', Green: '#1f7a52',
  }
  return map[name] || '#c9c0ac'
}
