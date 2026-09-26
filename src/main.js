import { announcementBar, header, footer, cartDrawer, cartItemsMarkup } from './components.js'
import { resolveRoute } from './router.js'
import { products, findProduct, sizeForHeight } from './data.js'
import { formatPrice, cartStore, wishlistStore, reviewStore, qs, qsa } from './utils.js'
import { t, L, applyDir, setLang, getLang } from './i18n.js'

const app = document.querySelector('#app')
let view, cartPanel, overlay

function boot() {
  applyDir()
  app.innerHTML = `
    ${announcementBar()}
    ${header()}
    <main id="view"></main>
    ${footer()}
    ${cartDrawer()}
  `
  view = qs('#view')
  cartPanel = qs('[data-cart]')
  overlay = qs('[data-overlay]')
  render()
}

function updateCartUI() {
  const items = cartStore.get()
  qsa('[data-cart-count]').forEach((el) => (el.textContent = cartStore.count()))
  const itemsEl = qs('[data-cart-items]')
  if (itemsEl) itemsEl.innerHTML = cartItemsMarkup(items)
  const subtotalEl = qs('[data-cart-subtotal]')
  if (subtotalEl) subtotalEl.textContent = formatPrice(cartStore.subtotal())
}

function toggleCart(show) {
  cartPanel.classList.toggle('open', show)
  overlay.classList.toggle('open', show)
  cartPanel.setAttribute('aria-hidden', String(!show))
}

function showToast(message) {
  const toast = qs('[data-toast]')
  if (!toast) return
  toast.textContent = message
  toast.classList.add('show')
  clearTimeout(showToast._t)
  showToast._t = setTimeout(() => toast.classList.remove('show'), 2200)
}

function render() {
  const { html, scrollTo } = resolveRoute(location.hash)
  view.innerHTML = html
  qs('[data-nav]')?.classList.remove('show')
  initGallery()
  initSizeGuide()
  initSort()
  if (scrollTo) {
    const target = document.getElementById(scrollTo)
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  } else {
    window.scrollTo(0, 0)
  }
  updateCartUI()
}

function initGallery() {
  const gallery = qs('[data-gallery]')
  if (!gallery) return
  const show = (index) => {
    qsa('[data-gallery-image]', gallery).forEach((img) => img.classList.toggle('active', img.dataset.index === String(index)))
    qsa('[data-gallery-thumb]', gallery).forEach((btn) => btn.classList.toggle('active', btn.dataset.galleryThumb === String(index)))
  }
  qsa('[data-gallery-thumb]', gallery).forEach((btn) => btn.addEventListener('click', () => show(btn.dataset.galleryThumb)))
}

function initSizeGuide() {
  const modal = qs('[data-size-guide-modal]')
  const finderModal = qs('[data-size-finder-modal]')
  const modalOverlay = qs('[data-size-guide-overlay]')
  if (!modal && !finderModal) return
  const openModal = (m) => { m.classList.add('open'); modalOverlay.classList.add('open'); m.setAttribute('aria-hidden', 'false') }
  const closeAll = () => {
    [modal, finderModal].forEach((m) => { m?.classList.remove('open'); m?.setAttribute('aria-hidden', 'true') })
    modalOverlay.classList.remove('open')
  }
  qs('[data-open-size-guide]')?.addEventListener('click', () => openModal(modal))
  qs('[data-close-size-guide]')?.addEventListener('click', closeAll)
  modalOverlay?.addEventListener('click', closeAll)

  if (!finderModal) return
  qs('[data-open-size-finder]')?.addEventListener('click', () => openModal(finderModal))
  qs('[data-close-size-finder]')?.addEventListener('click', closeAll)
  qs('[data-find-size]', finderModal).addEventListener('click', () => {
    const height = Number(qs('[data-finder-height]', finderModal).value)
    if (!height) return
    const size = sizeForHeight(height)
    qs('[data-size-finder-value]', finderModal).textContent = size
    qs('[data-apply-size]', finderModal).dataset.suggestedSize = size
    qs('[data-size-finder-result]', finderModal).hidden = false
  })
  qs('[data-apply-size]', finderModal).addEventListener('click', () => {
    const size = qs('[data-apply-size]', finderModal).dataset.suggestedSize
    qs('[data-size-tab="ready"]')?.click()
    const btn = qs(`.size-btn[data-size="${size}"]`)
    if (btn) {
      qsa('.size-btn').forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')
    }
    closeAll()
  })
}

function initSort() {
  const bar = qs('[data-sort]')
  const grid = qs('[data-collection-grid]')
  if (!bar || !grid) return
  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-sort-value]')
    if (!btn) return
    qsa('button', bar).forEach((b) => b.classList.remove('active'))
    btn.classList.add('active')
    const cards = qsa('.product', grid)
    const priceOf = (card) => Number(card.querySelector('strong').textContent.replace(/[^\d]/g, ''))
    const sorted = cards.slice().sort((a, b) => {
      if (btn.dataset.sortValue === 'price-asc') return priceOf(a) - priceOf(b)
      if (btn.dataset.sortValue === 'price-desc') return priceOf(b) - priceOf(a)
      return 0
    })
    if (btn.dataset.sortValue === 'default') return
    sorted.forEach((card) => grid.appendChild(card))
  })
}

// Global event delegation — survives every re-render since it's bound once on document/app shell.
document.addEventListener('click', (e) => {
  const langBtn = e.target.closest('[data-lang]')
  if (langBtn) {
    if (langBtn.dataset.lang !== getLang()) { setLang(langBtn.dataset.lang); boot() }
    return
  }

  const announcementClose = e.target.closest('.announcement-close')
  if (announcementClose) { announcementClose.closest('.announcement').remove(); return }

  const menuToggle = e.target.closest('.menu-toggle')
  if (menuToggle) {
    const nav = qs('[data-nav]')
    const open = nav.classList.toggle('show')
    menuToggle.setAttribute('aria-expanded', String(open))
    return
  }

  if (e.target.closest('.bag-btn')) { toggleCart(true); return }
  if (e.target.closest('.cart-close') || e.target === overlay) { toggleCart(false); return }

  const removeBtn = e.target.closest('[data-remove]')
  if (removeBtn) { cartStore.removeAt(Number(removeBtn.dataset.remove)); updateCartUI(); return }

  const qtyBtn = e.target.closest('.qty-minus, .qty-plus')
  if (qtyBtn) {
    const stepper = qtyBtn.closest('[data-qty-index]')
    const index = Number(stepper.dataset.qtyIndex)
    const items = cartStore.get()
    const current = items[index]?.qty || 1
    cartStore.setQty(index, qtyBtn.classList.contains('qty-plus') ? current + 1 : current - 1)
    updateCartUI()
    return
  }

  const heart = e.target.closest('[data-wish]')
  if (heart) {
    wishlistStore.toggle(Number(heart.dataset.wish))
    heart.classList.toggle('saved')
    return
  }

  const quick = e.target.closest('[data-quick]')
  if (quick) {
    const product = products.find((p) => p.id === Number(quick.dataset.quick))
    if (product) { cartStore.add(product); updateCartUI(); showToast(addedMessage(product)) }
    return
  }

  const colorSwatch = e.target.closest('[data-color]')
  if (colorSwatch) {
    const group = colorSwatch.closest('[data-colors]')
    qsa('.swatch', group).forEach((s) => s.classList.remove('active'))
    colorSwatch.classList.add('active')
    const label = qs('[data-color-label]')
    if (label) { label.textContent = t(colorSwatch.dataset.color); label.dataset.colorValue = colorSwatch.dataset.color }
    return
  }

  const sizeBtn = e.target.closest('[data-size]')
  if (sizeBtn) {
    const group = sizeBtn.closest('[data-sizes]')
    qsa('.size-btn', group).forEach((s) => s.classList.remove('active'))
    sizeBtn.classList.add('active')
    return
  }

  const sizeTab = e.target.closest('[data-size-tab]')
  if (sizeTab) {
    const tabs = sizeTab.closest('[data-size-tabs]')
    const panel = sizeTab.closest('.option-group')
    qsa('.size-tab', tabs).forEach((t) => t.classList.remove('active'))
    sizeTab.classList.add('active')
    qsa('[data-size-panel]', panel).forEach((p) => { p.hidden = p.dataset.sizePanel !== sizeTab.dataset.sizeTab })
    return
  }

  const addToBag = e.target.closest('[data-add-to-bag]')
  if (addToBag) {
    const product = productFromPanel(addToBag)
    if (product) { cartStore.add(product, selectedOptions()); updateCartUI(); showToast(addedMessage(product)); toggleCart(true) }
    return
  }

  const buyNow = e.target.closest('[data-buy-now]')
  if (buyNow) {
    const product = productFromPanel(buyNow)
    if (product) { cartStore.add(product, selectedOptions()); updateCartUI(); toggleCart(true) }
    return
  }

  if (e.target.closest('.checkout-btn')) {
    showToast(t('This is a demo storefront — checkout is not connected.'))
    return
  }

  const scrollToReviews = e.target.closest('[data-scroll-reviews]')
  if (scrollToReviews) {
    e.preventDefault()
    qs('#product-reviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  const toggleReviewForm = e.target.closest('[data-toggle-review-form]')
  if (toggleReviewForm) {
    const form = qs('[data-review-form]')
    if (form) {
      form.hidden = !form.hidden
      if (!form.hidden) form.querySelector('[name="name"]')?.focus()
    }
    return
  }

  const starPick = e.target.closest('[data-star]')
  if (starPick) {
    const picker = starPick.closest('[data-star-picker]')
    const val = Number(starPick.dataset.star)
    qs('[data-star-value]', picker).value = val
    qsa('.star-pick', picker).forEach((b) => b.classList.toggle('filled', Number(b.dataset.star) <= val))
    return
  }
})

document.addEventListener('submit', (e) => {
  if (e.target.matches('[data-newsletter]')) {
    e.preventDefault()
    e.target.innerHTML = `<p class="thanks">${t('Welcome to Serein. Thank you for joining us.')}</p>`
    return
  }

  if (e.target.matches('[data-review-form]')) {
    e.preventDefault()
    const form = e.target
    const slug = form.closest('[data-reviews]')?.dataset.reviews
    const name = form.querySelector('[name="name"]').value.trim()
    const text = form.querySelector('[name="text"]').value.trim()
    const rating = Number(form.querySelector('[data-star-value]').value) || 5
    if (!slug || !name || !text) return
    reviewStore.add(slug, { rating, name, text, date: new Date().toISOString().slice(0, 10), verified: false })
    render()
    showToast(t('Thank you for your review!'))
    requestAnimationFrame(() => qs('#product-reviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
})

function productFromPanel(el) {
  const slug = el.closest('[data-product-slug]')?.dataset.productSlug
  return slug ? findProduct(slug) : null
}

function addedMessage(product) {
  return `${t('Added')} ${L(product.name, product.nameAr)} ${t('to your bag')}`
}

const MEASURE_LABEL = {
  en: { length: 'L', bust: 'B', shoulder: 'Sh', sleeve: 'Sl' },
  ar: { length: 'ط', bust: 'ص', shoulder: 'ك', sleeve: 'كم' },
}

function selectedOptions() {
  const colorLabel = qs('[data-color-label]')
  const color = colorLabel?.dataset.colorValue || colorLabel?.textContent
  const customTab = qs('.size-tab.active[data-size-tab="custom"]')
  if (customTab) {
    const panel = qs('[data-size-panel="custom"]')
    const val = (key) => qs(`[data-measure="${key}"]`, panel)?.value.trim()
    const labels = MEASURE_LABEL[getLang()] || MEASURE_LABEL.en
    const parts = ['length', 'bust', 'shoulder', 'sleeve']
      .map((key) => ({ key, val: val(key) }))
      .filter((m) => m.val)
      .map((m) => `${labels[m.key]}${m.val}`)
    const notes = val('notes')
    return { color, size: parts.length ? `${t('Custom')} (${parts.join(' ')})` : t('Custom'), notes, isCustom: true }
  }
  const sizeBtn = qs('.size-btn.active')
  return { color, size: sizeBtn?.dataset.size }
}

window.addEventListener('hashchange', render)
boot()
