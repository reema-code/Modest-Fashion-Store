import { collections, productsIn, img } from '../data.js'
import { icon } from '../utils.js'
import { productCard } from './product-card.js'
import { breadcrumbs } from '../components.js'
import { t, L } from '../i18n.js'

export const collectionsIndexPage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: t('Home'), href: '#/' }, { label: t('All collections') }])}
    <p class="eyebrow">${t('The full edit')}</p>
    <h1>${t('All collections')}</h1>
  </section>
  <section class="collection-grid-section">
    <div class="collection-grid">
      ${collections.map((c) => `
        <a class="collection-tile" href="#/collections/${c.slug}" style="--tile-image:url('${img(c.cover, { w: 900, h: 1150 })}')">
          <span class="collection-tile-inner"><em>${L(c.name, c.nameAr)}</em><small>${t('Shop now')} ${icon('arrow')}</small></span>
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
        ${breadcrumbs([{ label: t('Home'), href: '#/' }, { label: t('All collections'), href: '#/collections' }, { label: L(collection.name, collection.nameAr) }])}
        <p class="eyebrow">${L(collection.tagline, collection.taglineAr)}</p>
        <h1>${L(collection.name, collection.nameAr)}</h1>
        <p>${L(collection.description, collection.descriptionAr)}</p>
      </div>
    </section>
    <section class="product-section">
      <div class="section-head">
        <div><p class="eyebrow">${items.length} ${t(items.length === 1 ? 'piece' : 'pieces')}</p><h2>${t('Shop ')}${L(collection.name, collection.nameAr)}</h2></div>
      </div>
      <div class="filters" data-sort>
        <button class="active" data-sort-value="default">${t('Featured')}</button>
        <button data-sort-value="price-asc">${t('Price: Low to high')}</button>
        <button data-sort-value="price-desc">${t('Price: High to low')}</button>
      </div>
      <div class="product-grid" data-collection-grid>${items.map(productCard).join('')}</div>
    </section>`
}
