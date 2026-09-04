import { announcementBar, header, footer, cartDrawer, cartItemsMarkup } from './components.js'
import { resolveRoute } from './router.js'
import { products, findProduct } from './data.js'
import { formatPrice, cartStore, wishlistStore, qs, qsa } from './utils.js'

const app = document.querySelector('#app')
app.innerHTML = `
  ${announcementBar()}
  ${header()}
  <main id="view"></main>
  ${footer()}
  ${cartDrawer()}
`

const view = qs('#view')
const cartPanel = qs('[data-cart]')
const overlay = qs('[data-overlay]')

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
  const modalOverlay = qs('[data-size-guide-overlay]')
  if (!modal) return
  const open = () => { modal.classList.add('open'); modalOverlay.classList.add('open'); modal.setAttribute('aria-hidden', 'false') }
  const close = () => { modal.classList.remove('open'); modalOverlay.classList.remove('open'); modal.setAttribute('aria-hidden', 'true') }
  qs('[data-open-size-guide]')?.addEventListener('click', open)
  qs('[data-close-size-guide]')?.addEventListener('click', close)
  modalOverlay?.addEventListener('click', close)
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
    if (product) { cartStore.add(product); updateCartUI(); showToast(`Added ${product.name} to your bag`) }
    return
  }

  const colorSwatch = e.target.closest('[data-color]')
  if (colorSwatch) {
    const group = colorSwatch.closest('[data-colors]')
    qsa('.swatch', group).forEach((s) => s.classList.remove('active'))
    colorSwatch.classList.add('active')
    const label = qs('[data-color-label]')
    if (label) label.textContent = colorSwatch.dataset.color
    return
  }

  const sizeBtn = e.target.closest('[data-size]')
  if (sizeBtn) {
    const group = sizeBtn.closest('[data-sizes]')
    qsa('.size-btn', group).forEach((s) => s.classList.remove('active'))
    sizeBtn.classList.add('active')
    return
  }

  const addToBag = e.target.closest('[data-add-to-bag]')
  if (addToBag) {
    const product = productFromPanel(addToBag)
    if (product) { cartStore.add(product, selectedOptions()); updateCartUI(); showToast(`Added ${product.name} to your bag`); toggleCart(true) }
    return
  }

  const buyNow = e.target.closest('[data-buy-now]')
  if (buyNow) {
    const product = productFromPanel(buyNow)
    if (product) { cartStore.add(product, selectedOptions()); updateCartUI(); toggleCart(true) }
    return
  }

  if (e.target.closest('.checkout-btn')) {
    showToast('This is a demo storefront — checkout is not connected.')
    return
  }
})

document.addEventListener('submit', (e) => {
  if (e.target.matches('[data-newsletter]')) {
    e.preventDefault()
    e.target.innerHTML = '<p class="thanks">Welcome to Serein. Thank you for joining us.</p>'
  }
})

function productFromPanel(el) {
  const slug = el.closest('[data-product-slug]')?.dataset.productSlug
  return slug ? findProduct(slug) : null
}

function selectedOptions() {
  const color = qs('[data-color-label]')?.textContent
  const sizeBtn = qs('.size-btn.active')
  return { color, size: sizeBtn?.dataset.size }
}

window.addEventListener('hashchange', render)
render()
