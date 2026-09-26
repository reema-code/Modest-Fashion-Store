import { collections, products, testimonials, heroImage, campaignImage, galleryInteriorImage, img } from '../data.js'
import { icon, formatPrice } from '../utils.js'
import { productCard } from './product-card.js'
import { t, L } from '../i18n.js'

const byBadge = (badge, n) => products.filter((p) => p.badge === badge).slice(0, n)
// Avoids picking a product already shown elsewhere on the homepage (e.g. the Bestseller).
const byCollection = (slug, n) => products.filter((p) => p.collection === slug && p.badge !== 'Bestseller').slice(0, n)
const newArrivals = [...byCollection('workwear', 2), ...byCollection('abayas', 2)]
// Best sellers: the actual Bestseller item first, then more pieces not already shown above.
const bestSellers = () => {
  const shownIds = new Set(newArrivals.map((p) => p.id))
  const rest = (slug) => products.filter((p) => p.collection === slug && !shownIds.has(p.id))
  return [...byBadge('Bestseller', 4), ...rest('workwear'), ...rest('abayas')]
    .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i)
    .slice(0, 4)
}

const featureSection = (opts) => `
  <section class="feature-split ${opts.reverse ? 'reverse' : ''}" style="--feature-image:url('${opts.image}')">
    <div class="feature-image" role="img" aria-label="${opts.alt}"></div>
    <div class="feature-copy">
      <p class="eyebrow">${opts.eyebrow}</p>
      <h2>${opts.title}</h2>
      <p>${opts.body}</p>
      <a class="cta dark" href="#/collections/${opts.slug}">${t('Shop ')}${opts.name} ${icon('arrow')}</a>
    </div>
  </section>`

export const homePage = () => `
  <section class="hero" id="hero" style="--hero-image:url('${heroImage}')">
    <div class="hero-copy">
      <p class="eyebrow">${t('The late summer edit')} &middot; 2026</p>
      <h1>${t('Modest,')}<br><em>${t('by design.')}</em></h1>
      <p>${t('Considered silhouettes, natural textures, and quiet confidence — made for the way you move through Dubai and beyond.')}</p>
      <a class="cta light" href="#/collections">${t('Explore the collection')} ${icon('arrow')}</a>
    </div>
    <span class="vertical-note">SEREIN / COLLECTION 04</span>
  </section>

  <section class="marquee" aria-label="Brand values">
    <div>${t('CONSIDERED SILHOUETTES')} <i>&#10022;</i> ${t('NATURAL FABRICS')} <i>&#10022;</i> ${t('MADE TO LAST')} <i>&#10022;</i> ${t('FULL COVERAGE, NO COMPROMISE')} <i>&#10022;</i> ${t('CONSIDERED SILHOUETTES')} <i>&#10022;</i> ${t('NATURAL FABRICS')} <i>&#10022;</i> ${t('MADE TO LAST')} <i>&#10022;</i> ${t('FULL COVERAGE, NO COMPROMISE')}</div>
  </section>

  <section class="product-section" id="new">
    <div class="section-head">
      <div><p class="eyebrow">${t('Just arrived')}</p><h2>${t('New arrivals')}</h2></div>
      <a href="#/collections">${t('Shop all pieces')} ${icon('arrow')}</a>
    </div>
    <div class="product-grid">${newArrivals.map(productCard).join('')}</div>
  </section>

  <section class="collection-grid-section">
    <div class="section-head center">
      <p class="eyebrow">${t('Explore')}</p>
      <h2>${t('Shop by collection')}</h2>
    </div>
    <div class="collection-grid">
      ${collections.map((c) => `
        <a class="collection-tile" href="#/collections/${c.slug}" style="--tile-image:url('${img(c.cover, { w: 900, h: 1150 })}')">
          <span class="collection-tile-inner">
            <em>${L(c.name, c.nameAr)}</em>
            <small>${t('Shop now')} ${icon('arrow')}</small>
          </span>
        </a>`).join('')}
    </div>
  </section>

  <section class="campaign" style="--campaign-image:url('${campaignImage}')">
    <div class="campaign-copy">
      <p class="eyebrow">${t('Collection 04 · Autumn campaign')}</p>
      <h2>${t('A quieter kind')}<br>${t('of confidence.')}</h2>
      <p>${t("Photographed between Dubai's contemporary interiors, this season is about fabric that moves the way you do — considered tailoring, natural texture, and coverage that never feels like a compromise.")}</p>
      <a class="cta light" href="#/collections">${t('View the campaign')} ${icon('arrow')}</a>
    </div>
  </section>

  <section class="product-section" id="bestsellers">
    <div class="section-head">
      <div><p class="eyebrow">${t('Loved by our community')}</p><h2>${t('Best sellers')}</h2></div>
      <a href="#/collections">${t('Shop all pieces')} ${icon('arrow')}</a>
    </div>
    <div class="product-grid">${bestSellers().map(productCard).join('')}</div>
  </section>

  ${featureSection({
    eyebrow: 'Mokhawar',
    title: t('Printed Mokhawar, made for everyday.'),
    body: t('Vivid prints in fluid, opaque fabric with hand-finished detail — our Mokhawar edit is built for warm days and easy movement.'),
    image: img('/public/images/workwear/workwear-3-cuff.webp'),
    alt: 'Close-up of beaded cuff embroidery on a printed Mokhawar piece',
    slug: 'workwear', name: 'Mokhawar',
  })}

  ${featureSection({
    eyebrow: t('Abayas'),
    title: t('Fluid silhouettes, engineered drape.'),
    body: t('Opaque crepe, considered detail, and a fall that moves with intention — our abaya edit is built to be lived in, not just worn.'),
    image: img('/public/images/abayas/abaya-5.webp'),
    alt: 'Woman in an elegant modest abaya', reverse: true,
    slug: 'abayas', name: t('abayas'),
  })}

  <section class="manifesto" id="story" style="--manifesto-image:url('${galleryInteriorImage}')">
    <div class="manifesto-inner">
      <p class="eyebrow">${t('Our philosophy')}</p>
      <h2>${t('Clothing should')}<br><em>${t('feel like you.')}</em></h2>
      <p>${t('We design with intention — balancing coverage, movement, and a refined ease. Each piece is created to live beyond a season and become part of your story.')}</p>
      <div class="values">
        <span>01 <b>${t('Thoughtful coverage')}</b></span>
        <span>02 <b>${t('Enduring quality')}</b></span>
        <span>03 <b>${t('Conscious choices')}</b></span>
      </div>
    </div>
  </section>

  <section class="testimonials">
    <div class="section-head center"><p class="eyebrow">${t('In her words')}</p><h2>${t('Worn, loved, lived in')}</h2></div>
    <div class="testimonial-grid">
      ${testimonials.map((item) => `
        <figure class="testimonial-card">
          <blockquote>&ldquo;${L(item.quote, item.quoteAr)}&rdquo;</blockquote>
          <figcaption><span class="avatar-initial">${item.name.charAt(0)}</span><span><b>${item.name}</b>${L(item.location, item.locationAr)}</span></figcaption>
        </figure>`).join('')}
    </div>
  </section>

  <section class="newsletter">
    <p class="eyebrow">${t('The Serein letter')}</p>
    <h2>${t('A quieter kind of inbox.')}</h2>
    <p>${t('New collections, thoughtful stories, and a little inspiration — delivered occasionally.')}</p>
    <form data-newsletter>
      <input type="email" required placeholder="${t('Your email address')}" aria-label="${t('Your email address')}">
      <button type="submit">${t('Join us')} ${icon('arrow')}</button>
    </form>
    <small>${t('By subscribing, you agree to our privacy policy.')}</small>
  </section>
`
