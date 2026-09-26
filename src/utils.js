import { CURRENCY } from './data.js'
import { isRTL, t } from './i18n.js'

export const formatPrice = (n) => isRTL() ? `${n.toLocaleString('en-AE')} د.إ` : `${CURRENCY} ${n.toLocaleString('en-AE')}`

export const icon = (name) => ({
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  bag: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  arrow: '<svg class="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  chevron: '<svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>',
  truck: '<svg viewBox="0 0 24 24"><path d="M3 7h11v9H3z"/><path d="M14 11h4l3 3v2h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 4v4h-4M6 20v-4h4"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m5 13 4 4 10-10"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7Z"/></svg>',
}[name] || '')

export const escapeHtml = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export const avgRating = (reviews = []) =>
  reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0

export const stars = (rating = 0) => {
  const pct = Math.max(0, Math.min(5, rating)) / 5 * 100
  return `<span class="stars" style="--rating:${pct}%" role="img" aria-label="${rating.toFixed(1)} ${t('out of 5')}"><span class="stars-bg">★★★★★</span><span class="stars-fg">★★★★★</span></span>`
}

const CART_KEY = 'serein_cart_v1'
const WISHLIST_KEY = 'serein_wishlist_v1'
const REVIEWS_KEY = 'serein_reviews_v1'

const read = (key) => {
  try { return JSON.parse(localStorage.getItem(key)) || [] } catch { return [] }
}
const write = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* storage unavailable */ }
}

export const cartStore = {
  get: () => read(CART_KEY),
  set: (items) => write(CART_KEY, items),
  add(product, { size, color, notes, isCustom, qty = 1 } = {}) {
    const items = read(CART_KEY)
    const chosenSize = size || product.sizes[2]
    const chosenColor = color || product.colors[0]
    const existing = items.find((i) => i.id === product.id && i.size === chosenSize && i.color === chosenColor)
    if (existing) existing.qty += qty
    else items.push({ id: product.id, name: product.name, nameAr: product.nameAr, price: product.price, image: product.thumb, slug: product.slug, size: chosenSize, color: chosenColor, notes: notes || '', isCustom: !!isCustom, qty })
    write(CART_KEY, items)
    return items
  },
  removeAt(index) {
    const items = read(CART_KEY)
    items.splice(index, 1)
    write(CART_KEY, items)
    return items
  },
  setQty(index, qty) {
    const items = read(CART_KEY)
    if (items[index]) items[index].qty = Math.max(1, qty)
    write(CART_KEY, items)
    return items
  },
  count: () => read(CART_KEY).reduce((s, i) => s + i.qty, 0),
  subtotal: () => read(CART_KEY).reduce((s, i) => s + i.qty * i.price, 0),
}

export const reviewStore = {
  all() {
    try { return JSON.parse(localStorage.getItem(REVIEWS_KEY)) || {} } catch { return {} }
  },
  forProduct(slug) {
    return this.all()[slug] || []
  },
  add(slug, review) {
    const all = this.all()
    all[slug] = [review, ...(all[slug] || [])]
    write(REVIEWS_KEY, all)
    return all[slug]
  },
}

export const wishlistStore = {
  get: () => read(WISHLIST_KEY),
  toggle(id) {
    let items = read(WISHLIST_KEY)
    items = items.includes(id) ? items.filter((i) => i !== id) : [...items, id]
    write(WISHLIST_KEY, items)
    return items
  },
  has: (id) => read(WISHLIST_KEY).includes(id),
}

export const qs = (sel, root = document) => root.querySelector(sel)
export const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel))
