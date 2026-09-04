import { collections, productsIn, img } from '../data.js'
import { icon } from '../utils.js'
import { productCard } from './product-card.js'
import { breadcrumbs } from '../components.js'

export const collectionsIndexPage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: 'Home', href: '#/' }, { label: 'All collections' }])}
    <p class="eyebrow">The full edit</p>
    <h1>All collections</h1>
  </section>
  <section class="collection-grid-section">
    <div class="collection-grid">
      ${collections.map((c) => `
        <a class="collection-tile" href="#/collections/${c.slug}" style="--tile-image:url('${img(c.cover, { w: 900, h: 1150 })}')">
          <span class="collection-tile-inner"><em>${c.name}</em><small>Shop now ${icon('arrow')}</small></span>
        </a>`).join('')}
    </div>
  </section>`

export const collectionPage = (slug) => {
  const collection = collections.find((c) => c.slug === slug)
  if (!collection) return null
  const items = productsIn(slug)
  return `
    <section class="collection-hero" style="--collection-image:url('${img(collection.cover, { w: 1900, h: 1000 })}')">
      <div class="collection-hero-copy">
        ${breadcrumbs([{ label: 'Home', href: '#/' }, { label: 'Collections', href: '#/collections' }, { label: collection.name }])}
        <p class="eyebrow">${collection.tagline}</p>
        <h1>${collection.name}</h1>
        <p>${collection.description}</p>
      </div>
    </section>
    <section class="product-section">
      <div class="section-head">
        <div><p class="eyebrow">${items.length} piece${items.length === 1 ? '' : 's'}</p><h2>Shop ${collection.name}</h2></div>
      </div>
      <div class="filters" data-sort>
        <button class="active" data-sort-value="default">Featured</button>
        <button data-sort-value="price-asc">Price: Low to high</button>
        <button data-sort-value="price-desc">Price: High to low</button>
      </div>
      <div class="product-grid" data-collection-grid>${items.map(productCard).join('')}</div>
    </section>`
}
