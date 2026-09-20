import { collections, productsIn } from '../data.js'
import { productCard } from './product-card.js'
import { breadcrumbs } from '../components.js'
import { collectionPanels } from './home.js'

export const collectionsIndexPage = () => `
  <section class="page-header">${breadcrumbs([{label:'Home',href:'#/'},{label:'Collections'}])}<p class="eyebrow">The Serein wardrobe</p><h1>Two expressions of elegance.</h1></section>
  <section class="launch-collections">${collectionPanels()}</section>`

export const collectionPage = (slug) => {
  const c = collections.find(c => c.slug === slug)
  if (!c) return null
  const items = productsIn(slug)
  if (c.comingSoon) return `
    <section class="coming-soon"><p class="eyebrow">Serein / A new chapter</p><span class="arabic-label" lang="ar" dir="rtl">مخاوير</span><h1>Mkhawar</h1><p>Our Mkhawar collection is coming soon.</p><p>A new expression of modest dressing.<br>Discover the collection here when it arrives.</p><a class="cta light" href="#/collections/abayas">Explore Abaya</a></section>`
  return `<section class="page-header collection-heading">${breadcrumbs([{label:'Home',href:'#/'},{label:'Collections',href:'#/collections'},{label:c.name}])}<p class="eyebrow">${c.tagline}</p><h1>Abaya</h1><p>${c.description}</p></section>
  <section class="product-section collection-products"><div class="section-head"><p>${items.length} pieces</p><div class="filters" data-sort><button class="active" data-sort-value="default">Featured</button><button data-sort-value="price-asc">Price: Low to high</button><button data-sort-value="price-desc">Price: High to low</button></div></div><div class="product-grid" data-collection-grid>${items.map(productCard).join('')}</div></section>`
}
