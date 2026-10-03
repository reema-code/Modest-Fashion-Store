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
      <p>${t("Fluid silhouettes and natural fabric, cut with quiet intention — for the way you actually move through your day, in Dubai and beyond.")}</p>
      <a class="cta light" href="#/collections">${t('Explore the collection')} ${icon('arrow')}</a>
    </div>
    <span class="vertical-note">${L('MUGHAYIR', 'مغاير')} / COLLECTION 04</span>
  </section>

  <section class="marquee" aria-label="Brand values">
    <div>${t('FLUID SILHOUETTES')} <i>&#10022;</i> ${t('NATURAL FABRICS')} <i>&#10022;</i> ${t('BUILT TO LAST')} <i>&#10022;</i> ${t('FULL COVERAGE, NEVER A COMPROMISE')} <i>&#10022;</i> ${t('FLUID SILHOUETTES')} <i>&#10022;</i> ${t('NATURAL FABRICS')} <i>&#10022;</i> ${t('BUILT TO LAST')} <i>&#10022;</i> ${t('FULL COVERAGE, NEVER A COMPROMISE')}</div>
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
      <h2>${t('Dressed with')}<br>${t('intention.')}</h2>
      <p>${t("Shot across Dubai's most considered interiors, this season is about fabric that moves the way you do: fluid tailoring, natural texture, and coverage that never once feels like settling.")}</p>
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
    eyebrow: L('Mokhawar', 'مخاور'),
    title: t('Printed Mokhawar, built for your every day.'),
    body: t('Bold prints on fluid, fully opaque fabric with hand-finished beading — made for warm days, easy movement, and a little extra attention.'),
    image: img('/public/images/workwear/workwear-3-cuff.webp'),
    alt: t('Close-up of beaded cuff embroidery on a printed Mokhawar piece'),
    slug: 'workwear', name: L('Mokhawar', 'مخاور'),
  })}

  ${featureSection({
    eyebrow: t('Abayas'),
    title: t('Fluid silhouettes, drape with intention.'),
    body: t('Opaque crepe with quiet detailing and a fall that actually moves — our abaya edit is built to be lived in, not just worn.'),
    image: img('/public/images/abayas/abaya-5.webp'),
    alt: t('Woman in an elegant modest abaya'), reverse: true,
    slug: 'abayas', name: t('abayas'),
  })}

  <section class="manifesto" id="story" style="--manifesto-image:url('${galleryInteriorImage}')">
    <div class="manifesto-inner">
      <p class="eyebrow">${t('Our philosophy')}</p>
      <h2>${t('Clothing should')}<br><em>${t('feel like you.')}</em></h2>
      <p>${t("We design with intention — balancing coverage, movement, and ease that doesn't try too hard. Each piece is made to outlast a season and become part of how you actually get dressed.")}</p>
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
    <p class="eyebrow">${t('The Mughayir letter')}</p>
    <h2>${t('An inbox worth opening.')}</h2>
    <p>${t("New collections, a few honest stories, and nothing you didn't ask for — sent occasionally.")}</p>
    <form data-newsletter>
      <input type="email" required placeholder="${t('Your email address')}" aria-label="${t('Your email address')}">
      <button type="submit">${t('Join us')} ${icon('arrow')}</button>
    </form>
    <small>${t('By subscribing, you agree to our privacy policy.')}</small>
  </section>
`
