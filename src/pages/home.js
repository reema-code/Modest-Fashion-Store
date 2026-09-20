import { collections, products, testimonials, heroImage, campaignImage, galleryInteriorImage, img } from '../data.js'
import { icon, formatPrice } from '../utils.js'
import { productCard } from './product-card.js'

const byBadge = (badge, n) => products.filter((p) => p.badge === badge).slice(0, n)
// Avoids picking a product already shown elsewhere on the homepage (e.g. the Bestseller).
const byCollection = (slug, n) => products.filter((p) => p.collection === slug && p.badge !== 'Bestseller').slice(0, n)

const featureSection = (opts) => `
  <section class="feature-split ${opts.reverse ? 'reverse' : ''}" style="--feature-image:url('${opts.image}')">
    <div class="feature-image" role="img" aria-label="${opts.alt}"></div>
    <div class="feature-copy">
      <p class="eyebrow">${opts.eyebrow}</p>
      <h2>${opts.title}</h2>
      <p>${opts.body}</p>
      <a class="cta dark" href="#/collections/${opts.slug}">Shop ${opts.name} ${icon('arrow')}</a>
    </div>
  </section>`

export const homePage = () => `
  <section class="hero" id="hero" style="--hero-image:url('${heroImage}')">
    <div class="hero-copy">
      <p class="eyebrow">The late summer edit &middot; 2026</p>
      <h1>Modest,<br><em>by design.</em></h1>
      <p>Considered silhouettes, natural textures, and quiet confidence — made for the way you move through Dubai and beyond.</p>
      <a class="cta light" href="#/collections">Explore the collection ${icon('arrow')}</a>
    </div>
    <span class="vertical-note">SEREIN / COLLECTION 04</span>
  </section>

  <section class="marquee" aria-label="Brand values">
    <div>CONSIDERED SILHOUETTES <i>&#10022;</i> NATURAL FABRICS <i>&#10022;</i> MADE TO LAST <i>&#10022;</i> FULL COVERAGE, NO COMPROMISE <i>&#10022;</i> CONSIDERED SILHOUETTES <i>&#10022;</i> NATURAL FABRICS <i>&#10022;</i> MADE TO LAST <i>&#10022;</i> FULL COVERAGE, NO COMPROMISE</div>
  </section>

  <section class="product-section" id="new">
    <div class="section-head">
      <div><p class="eyebrow">Just arrived</p><h2>New arrivals</h2></div>
      <a href="#/collections">Shop all pieces ${icon('arrow')}</a>
    </div>
    <div class="product-grid">${[...byCollection('workwear', 2), ...byCollection('abayas', 2)].map(productCard).join('')}</div>
  </section>

  <section class="collection-grid-section">
    <div class="section-head center">
      <p class="eyebrow">Explore</p>
      <h2>Shop by collection</h2>
    </div>
    <div class="collection-grid">
      ${collections.map((c) => `
        <a class="collection-tile" href="#/collections/${c.slug}" style="--tile-image:url('${img(c.cover, { w: 900, h: 1150 })}')">
          <span class="collection-tile-inner">
            <em>${c.name}</em>
            <small>Shop now ${icon('arrow')}</small>
          </span>
        </a>`).join('')}
    </div>
  </section>

  <section class="campaign" style="--campaign-image:url('${campaignImage}')">
    <div class="campaign-copy">
      <p class="eyebrow">Collection 04 &middot; Autumn campaign</p>
      <h2>A quieter kind<br>of confidence.</h2>
      <p>Photographed between Dubai's contemporary interiors, this season is about fabric that moves the way you do — considered tailoring, natural texture, and coverage that never feels like a compromise.</p>
      <a class="cta light" href="#/collections">View the campaign ${icon('arrow')}</a>
    </div>
  </section>

  <section class="product-section" id="bestsellers">
    <div class="section-head">
      <div><p class="eyebrow">Loved by our community</p><h2>Best sellers</h2></div>
      <a href="#/collections">Shop all pieces ${icon('arrow')}</a>
    </div>
    <div class="product-grid">${byBadge('Bestseller', 4).map(productCard).join('')}</div>
  </section>

  ${featureSection({
    eyebrow: 'Mokhawar',
    title: 'Printed kaftans, made for everyday.',
    body: 'Vivid prints in fluid, opaque fabric with hand-finished detail — our Mokhawar edit is built for warm days and easy movement.',
    image: img('/public/images/workwear/workwear-3-cuff.webp'),
    alt: 'Close-up of beaded cuff embroidery on a printed kaftan',
    slug: 'workwear', name: 'Mokhawar',
  })}

  ${featureSection({
    eyebrow: 'Abayas',
    title: 'Fluid silhouettes, engineered drape.',
    body: 'Opaque crepe, considered detail, and a fall that moves with intention — our abaya edit is built to be lived in, not just worn.',
    image: img('/public/images/abayas/abaya-5.webp'),
    alt: 'Woman in an elegant modest abaya', reverse: true,
    slug: 'abayas', name: 'abayas',
  })}

  <section class="manifesto" id="story" style="--manifesto-image:url('${galleryInteriorImage}')">
    <div class="manifesto-inner">
      <p class="eyebrow">Our philosophy</p>
      <h2>Clothing should<br><em>feel like you.</em></h2>
      <p>We design with intention — balancing coverage, movement, and a refined ease. Each piece is created to live beyond a season and become part of your story.</p>
      <div class="values">
        <span>01 <b>Thoughtful coverage</b></span>
        <span>02 <b>Enduring quality</b></span>
        <span>03 <b>Conscious choices</b></span>
      </div>
    </div>
  </section>

  <section class="testimonials">
    <div class="section-head center"><p class="eyebrow">In her words</p><h2>Worn, loved, lived in</h2></div>
    <div class="testimonial-grid">
      ${testimonials.map((t) => `
        <figure class="testimonial-card">
          <blockquote>&ldquo;${t.quote}&rdquo;</blockquote>
          <figcaption><span class="avatar-initial">${t.name.charAt(0)}</span><span><b>${t.name}</b>${t.location}</span></figcaption>
        </figure>`).join('')}
    </div>
  </section>

  <section class="newsletter">
    <p class="eyebrow">The Serein letter</p>
    <h2>A quieter kind of inbox.</h2>
    <p>New collections, thoughtful stories, and a little inspiration — delivered occasionally.</p>
    <form data-newsletter>
      <input type="email" required placeholder="Your email address" aria-label="Email address">
      <button type="submit">Join us ${icon('arrow')}</button>
    </form>
    <small>By subscribing, you agree to our privacy policy.</small>
  </section>
`
