import { homePage } from './pages/home.js'
import { collectionsIndexPage, collectionPage } from './pages/collection.js'
import { productPage } from './pages/product.js'
import { sizeGuidePage, shippingReturnsPage, contactPage } from './pages/static.js'

const notFound = () => `
  <section class="page-header center">
    <p class="eyebrow">404</p>
    <h1>We couldn't find that page</h1>
    <p><a class="cta dark" href="#/">Return home</a></p>
  </section>`

export function resolveRoute(hash) {
  const path = (hash || '#/').slice(1) || '/'
  const [pathname] = path.split('?')
  const parts = pathname.split('/').filter(Boolean)

  if (parts.length === 0) return { html: homePage(), scrollTo: null }
  if (parts[0] === 'story') return { html: homePage(), scrollTo: 'story' }
  if (parts[0] === 'collections' && parts.length === 1) return { html: collectionsIndexPage(), scrollTo: null }
  if (parts[0] === 'collections' && parts.length === 2) {
    const html = collectionPage(parts[1])
    return html ? { html, scrollTo: null } : { html: notFound(), scrollTo: null }
  }
  if (parts[0] === 'product' && parts.length === 2) {
    const html = productPage(parts[1])
    return html ? { html, scrollTo: null } : { html: notFound(), scrollTo: null }
  }
  if (parts[0] === 'size-guide') return { html: sizeGuidePage(), scrollTo: null }
  if (parts[0] === 'shipping-returns') return { html: shippingReturnsPage(), scrollTo: null }
  if (parts[0] === 'contact') return { html: contactPage(), scrollTo: null }
  return { html: notFound(), scrollTo: null }
}
