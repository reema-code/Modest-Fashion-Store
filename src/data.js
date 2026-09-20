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
    tagline: 'Printed kaftans for everyday ease',
    description: 'Vivid printed kaftans in fluid, opaque fabric — considered pieces for the way you actually live.',
    cover: '/public/images/workwear/workwear-1.webp',
    fabric: 'Satin-finish viscose, fully opaque',
    fit: 'Relaxed, floor-length silhouette with a full sleeve',
    care: 'Dry clean recommended. Steam between wears.',
  },
  {
    slug: 'abayas',
    name: 'Abaya Dress',
    tagline: 'Fluid silhouettes, engineered drape',
    description: 'Considered abayas cut from fluid, opaque crepe — built for movement, finished with quiet detail.',
    cover: '/public/images/abayas/abaya-1.webp',
    fabric: 'Nida crepe or brushed crepe, fully opaque',
    fit: 'Relaxed, floor-length silhouette with a clean drape',
    care: 'Dry clean only. Steam to release travel creases.',
  },
]

export const SIZES = ['XS', 'S', 'M', 'L', 'XL']

export const sizeGuide = [
  { size: 'XS', bust: '80–84', waist: '62–66', hip: '88–92' },
  { size: 'S', bust: '85–89', waist: '67–71', hip: '93–97' },
  { size: 'M', bust: '90–94', waist: '72–76', hip: '98–102' },
  { size: 'L', bust: '95–100', waist: '77–82', hip: '103–108' },
  { size: 'XL', bust: '101–107', waist: '83–89', hip: '109–115' },
]

const A = (n) => `/public/images/abayas/abaya-${n}.webp`
const W = (n) => `/public/images/workwear/workwear-${n}.webp`

// Each entry is one real, distinct garment — `photos` lists every angle we
// actually have of that same piece, so nothing is duplicated across products.
const raw = [
  // Mokhawar / Workwear
  { name: 'Zahra Palm Print Kaftan', collection: 'workwear', price: 480, colors: ['Teal'], photos: [W(1)], badge: 'New',
    description: 'A vivid teal kaftan in a palm and archway print, finished with hand-beaded embroidery at the neckline and lace-trimmed cuffs.' },

  // Abayas
  { name: 'Elara Navy Jacquard Abaya', collection: 'abayas', price: 720, colors: ['Navy'], photos: [A(1)], badge: 'New',
    description: 'An open-front abaya in a subtle navy floral jacquard, finished with a self-tie belt and a soft, floor-skimming fall.' },
  { name: 'Noor Floral Abaya', collection: 'abayas', price: 780, colors: ['Chocolate'], photos: [A(2), A(3), A(5), A(7)], badge: 'Bestseller',
    description: 'A tonal floral-print abaya in fluid chiffon over an opaque lining, with a self-tie waist and a matching floor-length scarf.' },
  { name: 'Amara Polka-Dot Lace Abaya', collection: 'abayas', price: 750, colors: ['Espresso'], photos: [A(4), A(6), A(8), A(9)], badge: 'New',
    description: 'A polka-dot abaya finished with delicate lace trim at the cuffs and scarf edge, cut for a clean, considered silhouette.' },
  { name: 'Elif Pinstripe Lace-Band Abaya', collection: 'abayas', price: 790, colors: ['Espresso'], photos: [A(10)], badge: '',
    description: 'A pinstriped abaya banded with hand-finished lace at the chest, tailored for a considered silhouette with a fluid, floor-length fall.' },
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
