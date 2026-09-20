import { productsIn, heroImage } from '../data.js'
import { icon } from '../utils.js'
import { productCard } from './product-card.js'

export const collectionPanels = () => `
  <div class="launch-panels">
    <a class="launch-panel abaya-panel" href="#/collections/abayas">
      <span class="eyebrow">01 / The collection</span>
      <div><span class="arabic-label" lang="ar" dir="rtl">عبايات</span><h2>Abaya</h2><p>Ease in every silhouette.</p></div>
      <span class="text-link">Explore Abaya ${icon('arrow')}</span>
    </a>
    <a class="launch-panel mkhawar-panel" href="#/collections/mkhawar">
      <span class="eyebrow">02 / Coming soon</span>
      <div><span class="arabic-label" lang="ar" dir="rtl">مخاوير</span><h2>Mkhawar</h2><p>A new chapter in modest dressing.</p></div>
      <span class="text-link">Discover Mkhawar ${icon('arrow')}</span>
    </a>
  </div>`

export const homePage = () => `
  <section class="brand-hero" aria-labelledby="hero-title">
    <div class="brand-hero-copy">
      <p class="eyebrow">Serein / Abaya &amp; Mkhawar</p>
      <h1 id="hero-title">A quiet <br>expression <br>of <em>elegance.</em></h1>
      <p>Modest dressing. Personal expression.<br>A wardrobe that feels like you.</p>
      <div class="hero-links"><a class="cta dark" href="#/collections/abayas">Explore Abaya ${icon('arrow')}</a><a class="text-link" href="#/collections/mkhawar">Mkhawar · Coming soon</a></div>
      <span class="hero-signature">THE SEREIN EDIT</span>
    </div>
    <div class="brand-hero-photo"><img src="${heroImage}" alt="Serein editorial: an embroidered black silhouette" fetchpriority="high" width="950" height="1150"><span>Modest, by design.</span></div>
  </section>
  <section class="brand-intro"><p class="eyebrow">Two expressions. One point of view.</p><p>The everyday ease of an abaya.<br>The personal beauty of Mkhawar.</p></section>
  <section class="launch-collections" aria-label="Our collections">${collectionPanels()}</section>
  <section class="product-section" id="the-edit">
    <div class="section-head"><div><p class="eyebrow">The Abaya edit</p><h2>Find your silhouette.</h2></div><a href="#/collections/abayas">Explore all Abaya ${icon('arrow')}</a></div>
    <div class="product-grid featured-grid">${productsIn('abayas').filter(p => p.slug !== 'layla-open-abaya').map(productCard).join('')}</div>
  </section>
  <section class="brand-story" id="story">
    <p class="eyebrow">The Serein point of view</p>
    <div><h2>Elegance is<br><em>personal.</em></h2><p>Serein begins with a simple idea: modest dressing should leave room for your own expression. Our focus is Abaya and Mkhawar — two ways to make a wardrobe your own.</p><a class="text-link" href="#/collections">Discover the collections ${icon('arrow')}</a></div>
  </section>
`
