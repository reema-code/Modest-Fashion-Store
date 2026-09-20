// Image helper — builds an Unsplash delivery URL with consistent crop/quality.
// A local path (starting with '/') or a full URL is returned as-is.
export const img = (id, { w = 1200, h, crop, q = 80 } = {}) =>
  id.startsWith('/') || id.startsWith('http')
    ? id
    : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}${crop ? `&crop=${crop}` : ''}&q=${q}`

export const CURRENCY = 'AED'

export const collections = [
  {
    slug: 'workwear',
    name: 'Mokhawar',
    tagline: 'Printed Mokhawar pieces for everyday ease',
    description: 'Vivid printed Mokhawar pieces in fluid, opaque fabric — considered pieces for the way you actually live.',
    cover: '/public/images/workwear/workwear-4-front.webp',
    fabric: 'Satin-finish viscose, fully opaque',
    fit: 'Relaxed, floor-length silhouette with a full sleeve',
    care: 'Dry clean recommended. Steam between wears.',
  },
  {
    slug: 'abayas',
    name: 'Abaya Dress',
    tagline: 'Fluid silhouettes, engineered drape',
    description: 'Considered abayas cut from fluid, opaque crepe — built for movement, finished with quiet detail.',
    cover: '/public/images/abayas/abaya-10.webp',
    fabric: 'Nida crepe or brushed crepe, fully opaque',
    fit: 'Relaxed, floor-length silhouette with a clean drape',
    care: 'Dry clean only. Steam to release travel creases.',
  },
  {
    slug: 'underdress',
    name: 'Abaya Underdress',
    tagline: 'The slip dress worn beneath',
    description: 'Simple, opaque slip dresses made to wear under an abaya or Mokhawar piece — quiet layers that finish the look.',
    cover: '/public/images/underdress/underdress-1-front.webp',
    fabric: 'Brushed satin or jersey, fully opaque',
    fit: 'Relaxed column silhouette, floor length',
    care: 'Machine wash cold, gentle cycle. Hang to dry.',
  },
]

export const SIZES = ['52', '54', '56', '58', '60']

export const sizeGuide = [
  { size: '52', bust: '88–92', waist: '70–74', hip: '96–100' },
  { size: '54', bust: '93–97', waist: '75–79', hip: '101–105' },
  { size: '56', bust: '98–102', waist: '80–84', hip: '106–110' },
  { size: '58', bust: '103–107', waist: '85–89', hip: '111–115' },
  { size: '60', bust: '108–112', waist: '90–94', hip: '116–120' },
]

const A = (n) => `/public/images/abayas/abaya-${n}.webp`
const W = (n) => `/public/images/workwear/workwear-${n}.webp`

// Each entry is one real, distinct garment — `photos` lists every angle we
// actually have of that same piece, so nothing is duplicated across products.
const raw = [
  // Mokhawar / Workwear
  { name: 'Zahra Palm Print Mokhawar', collection: 'workwear', price: 480, colors: ['Teal'], photos: [W(1)], badge: 'New',
    description: 'A vivid teal Mokhawar piece in a palm and archway print, finished with hand-beaded embroidery at the neckline and lace-trimmed cuffs.' },
  { name: 'Layan Paisley Beaded Mokhawar', collection: 'workwear', price: 520, colors: ['Green'], photos: ['/public/images/workwear/workwear-2-front.webp', '/public/images/workwear/workwear-2-cuff.webp', W(2)], views: ['Front', 'Cuff Detail', 'Neckline Detail'], badge: 'New',
    description: 'A green swirl-print Mokhawar piece with a hand-beaded paisley yoke in green and silver, finished with a fringed beadwork trim at the neckline and cuffs.' },
  { name: 'Samar Tie-Dye Beaded Mokhawar', collection: 'workwear', price: 540, colors: ['Sunset'], photos: ['/public/images/workwear/workwear-3-front.webp', '/public/images/workwear/workwear-3-cuff.webp', W(3), '/public/images/workwear/workwear-3-detail2.webp', '/public/images/workwear/workwear-3-detail3.webp'], views: ['Front', 'Cuff Detail', 'Neckline Detail', 'Detail', 'Detail'], badge: '',
    description: 'A sunset tie-dye Mokhawar piece in fluid satin, with a hand-beaded scalloped neckline and matching cuffs finished in crystal trim.' },
  { name: 'Marina Seahorse Beaded Mokhawar', collection: 'workwear', price: 550, colors: ['Turquoise'], photos: ['/public/images/workwear/workwear-4-front.webp', '/public/images/workwear/workwear-4-cuff.webp', W(4)], views: ['Front', 'Cuff Detail', 'Neckline Detail'], badge: 'New',
    description: 'A turquoise Mokhawar piece in a seahorse and starfish print, with a fully hand-beaded yoke embroidered to match the underwater motif.' },
  { name: 'Nadia Wave Beaded Mokhawar', collection: 'workwear', price: 560, colors: ['Sky Blue'], photos: ['/public/images/workwear/workwear-5-front.webp', '/public/images/workwear/workwear-5-cuff.webp', W(5)], views: ['Front', 'Cuff Detail', 'Neckline Detail'], badge: '',
    description: 'A sky-blue swirl-print Mokhawar piece with a hand-beaded wave-pattern yoke in silver and pale blue, finished with a fringed hem trim.' },

  // Abayas
  { name: 'Elara Navy Jacquard Abaya', collection: 'abayas', price: 720, colors: ['Navy'], photos: [A(1)], badge: 'New',
    description: 'An open-front abaya in a subtle navy floral jacquard, finished with a self-tie belt and a soft, floor-skimming fall.' },
  { name: 'Noor Floral Abaya', collection: 'abayas', price: 780, colors: ['Chocolate'], photos: [A(2), A(3), A(5), A(7)], badge: 'Bestseller',
    description: 'A tonal floral-print abaya in fluid chiffon over an opaque lining, with a self-tie waist and a matching floor-length scarf.' },
  { name: 'Amara Polka-Dot Lace Abaya', collection: 'abayas', price: 750, colors: ['Espresso'], photos: [A(4), A(6), A(8), A(9)], badge: 'New',
    description: 'A polka-dot abaya finished with delicate lace trim at the cuffs and scarf edge, cut for a clean, considered silhouette.' },
  { name: 'Elif Pinstripe Lace-Band Abaya', collection: 'abayas', price: 790, colors: ['Espresso'], photos: [A(10), '/public/images/abayas/pinstripe-brown-2.webp'], badge: '',
    description: 'A pinstriped abaya banded with hand-finished lace at the chest, tailored for a considered silhouette with a fluid, floor-length fall.' },
  { name: 'Sara Black Pinstripe Lace-Band Abaya', collection: 'abayas', price: 790, colors: ['Black'], photos: ['/public/images/abayas/pinstripe-black-1.webp', '/public/images/abayas/pinstripe-black-2.webp', '/public/images/abayas/pinstripe-black-3.webp'], views: ['Front', 'Detail', 'Side'], badge: 'New',
    description: 'A black pinstriped abaya banded with hand-finished lace at the chest, tailored for a considered silhouette with a fluid, floor-length fall.' },
  { name: 'Yara Black Polka-Dot Lace Abaya', collection: 'abayas', price: 750, colors: ['Black'], photos: ['/public/images/abayas/abaya-black-1.webp', '/public/images/abayas/abaya-black-2.webp'], views: ['Front', 'Side'], badge: 'New',
    description: 'A black polka-dot abaya finished with delicate lace trim at the cuffs and scarf edge, cut for a clean, considered silhouette.' },

  // Abaya Underdress
  { name: 'Elle Sleeveless Underdress', collection: 'underdress', price: 260, colors: ['Ivory'], photos: ['/public/images/underdress/underdress-1-front.webp', '/public/images/underdress/underdress-1-detail.webp'], views: ['Front', 'Detail'], badge: 'New',
    description: 'A simple, opaque A-line slip dress with a round neckline and cap sleeve, cut to layer cleanly under an abaya or Mokhawar piece.' },
]

export const VIEWS = ['Front', 'Side', 'Detail', 'Styled']

export const products = raw.map((p, i) => {
  const col = collections.find((c) => c.slug === p.collection)
  return {
    id: i + 1,
    slug: p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    ...p,
    fabric: col.fabric,
    fit: col.fit,
    care: col.care,
    sizes: SIZES,
    images: p.photos.map((src) => img(src, { w: 1100, h: 1400 })),
    thumb: img(p.photos[0], { w: 900, h: 1150 }),
  }
})

export const findProduct = (slug) => products.find((p) => p.slug === slug)
export const productsIn = (slug) => products.filter((p) => p.collection === slug)
export const relatedTo = (product, n = 4) =>
  products.filter((p) => p.collection === product.collection && p.id !== product.id).slice(0, n)

export const testimonials = [
  { quote: 'The abaya fabric is genuinely beautiful in person — it drapes so much better than anything I’ve bought before.', name: 'Sara M.', location: 'Doha, Qatar' },
  { quote: 'Every abaya I’ve ordered fits like it was made for me. The embroidery detail is stunning up close.', name: 'Fatima R.', location: 'Dubai, UAE' },
  { quote: 'Considered, opaque, and beautifully finished — this is the only place I shop for abayas now.', name: 'Aaliyah K.', location: 'Abu Dhabi, UAE' },
]

export const heroImage = '/public/images/abayas/abaya-9.webp'
export const campaignImage = '/public/images/abayas/abaya-7.webp'
export const galleryInteriorImage = '/public/images/abayas/abaya-10.webp'
