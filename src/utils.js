import { CURRENCY } from './data.js'

export const formatPrice = (n) => `${CURRENCY} ${n.toLocaleString('en-AE')}`

export const icon = (name) => ({
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  bag: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  chevron: '<svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>',
  truck: '<svg viewBox="0 0 24 24"><path d="M3 7h11v9H3z"/><path d="M14 11h4l3 3v2h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 4v4h-4M6 20v-4h4"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m5 13 4 4 10-10"/></svg>',
}[name] || '')

const CART_KEY = 'serein_cart_v1'
const WISHLIST_KEY = 'serein_wishlist_v1'

const read = (key) => {
  try { return JSON.parse(localStorage.getItem(key)) || [] } catch { return [] }
}
const write = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* storage unavailable */ }
}

export const cartStore = {
  get: () => read(CART_KEY),
  set: (items) => write(CART_KEY, items),
  add(product, { size, color, qty = 1 } = {}) {
    const items = read(CART_KEY)
    const chosenSize = size || product.sizes[2]
    const chosenColor = color || product.colors[0]
    const existing = items.find((i) => i.id === product.id && i.size === chosenSize && i.color === chosenColor)
    if (existing) existing.qty += qty
    else items.push({ id: product.id, name: product.name, price: product.price, image: product.thumb, slug: product.slug, size: chosenSize, color: chosenColor, qty })
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
