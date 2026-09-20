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
    name: 'Workwear',
    tagline: 'Tailored for the room you walk into',
    description: 'Structured separates in considered neutrals — for the woman building a wardrobe that works as hard as she does.',
    cover: 'nW4MXHvqut8',
    fabric: 'Suiting twill and wool-blend gabardine',
    fit: 'Tailored through the shoulder, wide-leg through the trouser',
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

const raw = [
  // Abayas
  { name: 'The Sahara Abaya', collection: 'abayas', price: 640, colors: ['Navy'], image: '/public/images/abayas/abaya-1.webp', styled: '/public/images/abayas/abaya-2.webp', badge: 'Bestseller',
    description: 'A closed-front abaya cut from fluid nida crepe with a fitted shoulder and a soft, floor-skimming fall. Finished with a self-tie belt to define the waist.' },
  { name: 'Noor Embroidered Abaya', collection: 'abayas', price: 780, colors: ['Espresso'], image: '/public/images/abayas/abaya-2.webp', styled: '/public/images/abayas/abaya-3.webp', badge: 'New',
    description: 'Hand-finished floral embroidery traces the cuffs and front placket of this closed abaya, cut for a clean, considered silhouette.' },
  { name: 'Layla Open Abaya', collection: 'abayas', price: 690, colors: ['Espresso'], image: '/public/images/abayas/abaya-3.webp', styled: '/public/images/abayas/abaya-4.webp', badge: '',
    description: 'An open-front abaya designed to layer over your own pieces, with a matching under-scarf and clean topstitched seams.' },
  { name: 'Amara Closed Abaya', collection: 'abayas', price: 710, colors: ['Espresso'], image: '/public/images/abayas/abaya-4.webp', styled: '/public/images/abayas/abaya-5.webp', badge: '',
    description: 'A considered wardrobe staple — brushed crepe with a fitted yoke and gently flared hem for effortless movement.' },
  { name: 'Rania Lace-Trim Abaya', collection: 'abayas', price: 750, colors: ['Espresso'], image: '/public/images/abayas/abaya-6.webp', styled: '/public/images/abayas/abaya-7.webp', badge: 'New',
    description: 'A softly printed abaya finished with delicate lace trim at the cuffs and hem, paired with a matching lace-edged scarf for an elevated everyday look.' },
  { name: 'Yasmin Floral Abaya', collection: 'abayas', price: 820, colors: ['Chocolate'], image: '/public/images/abayas/abaya-7.webp', styled: '/public/images/abayas/abaya-8.webp', badge: '',
    description: 'An open-front abaya in a subtle tonal floral print, cut from fluid crepe that layers beautifully over our column dresses.' },
  { name: 'Sofia Pearl-Trim Abaya', collection: 'abayas', price: 730, colors: ['Espresso'], image: '/public/images/abayas/abaya-8.webp', styled: '/public/images/abayas/abaya-9.webp', badge: '',
    description: 'A closed abaya in a soft dot print, finished with a delicate pearl-trimmed scarf edge for a considered, polished finish.' },
  { name: 'Elif Pinstripe Abaya', collection: 'abayas', price: 790, colors: ['Espresso'], image: '/public/images/abayas/abaya-9.webp', styled: '/public/images/abayas/abaya-10.webp', badge: '',
    description: 'A pinstriped abaya banded with hand-finished lace at the waist, tailored for a considered silhouette with a fluid, floor-length fall.' },

  // Workwear
  { name: 'Tailored Blazer Set', collection: 'workwear', price: 890, colors: ['Espresso', 'Black'], image: '0NtHjtlwgvs', styled: 'WjHOXP6xIY4', badge: 'Bestseller',
    description: 'A single-breasted blazer and matching wide-leg trouser, cut from wool-blend gabardine for a considered, boardroom-ready silhouette.' },
  { name: 'Charcoal Wide-Leg Suit', collection: 'workwear', price: 860, colors: ['Charcoal'], image: 'WjHOXP6xIY4', styled: '9E7s5oyDmxg', badge: '',
    description: 'Structured shoulders, a nipped waist, and a fluid wide-leg trouser — this suit carries a room without saying too much.' },
  { name: 'Wide-Leg Trouser & Shirt Set', collection: 'workwear', price: 620, colors: ['Ivory', 'Black'], image: '9E7s5oyDmxg', styled: '0NtHjtlwgvs', badge: 'New',
    description: 'A relaxed long-sleeve shirt paired with a high-waisted wide-leg trouser — modest coverage with real movement.' },
  { name: 'Camel Wool Trench', collection: 'workwear', price: 950, colors: ['Camel'], image: '0AKg9Pv7LkI', styled: 'FHGpPsI_ozo', badge: '',
    description: 'A longline wool-blend trench with a self-belt and covered placket — the layer that finishes every workwear look.' },

]

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
    images: [
      img(p.image, { w: 1100, h: 1400 }),
      img(p.styled, { w: 1100, h: 1400 }),
      img(p.image, { w: 1100, h: 1400, crop: 'entropy' }),
    ],
    thumb: img(p.image, { w: 900, h: 1150 }),
  }
})

export const findProduct = (slug) => products.find((p) => p.slug === slug)
export const productsIn = (slug) => products.filter((p) => p.collection === slug)
export const relatedTo = (product, n = 4) =>
  products.filter((p) => p.collection === product.collection && p.id !== product.id).slice(0, n)

export const testimonials = [
  { quote: 'The tailoring is unlike anything else I’ve found for modest workwear — it actually fits like it was made for me.', name: 'Fatima R.', location: 'Dubai, UAE', avatar: img('5WtbRAqAvOM', { w: 160, h: 160, crop: 'faces' }) },
  { quote: 'Serein is the first activewear I’ve worn that gives me full coverage and still lets me train properly.', name: 'Aaliyah K.', location: 'Abu Dhabi, UAE', avatar: img('u7vnK5n7yLA', { w: 160, h: 160, crop: 'faces' }) },
  { quote: 'The abaya fabric is genuinely beautiful in person — it drapes so much better than anything I’ve bought before.', name: 'Sara M.', location: 'Doha, Qatar', avatar: img('fbUvVn1_ViQ', { w: 160, h: 160, crop: 'faces' }) },
]

export const heroImage = img('Jbw7IxgA87k', { w: 1900, h: 1500 })
export const campaignImage = img('D_jlzKg2kDc', { w: 1400, h: 1750 })
export const galleryInteriorImage = img('_42kwMUmZw0', { w: 1900, h: 1100 })
