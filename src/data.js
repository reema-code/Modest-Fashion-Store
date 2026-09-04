// Image helper — placeholder photography until real product photos are ready.
// TODO: replace with real client photos, same as every other slot on this site.
export const img = (id, { w = 1200, h = w, crop } = {}) =>
  `https://picsum.photos/seed/${encodeURIComponent(`${id}-${crop || ''}-${h}`)}/${w}/${h}`

export const CURRENCY = 'AED'

export const collections = [
  {
    slug: 'abayas',
    name: 'Abayas',
    tagline: 'Fluid silhouettes, engineered drape',
    description: 'Considered abayas cut from fluid, opaque crepe — built for movement, finished with quiet detail.',
    cover: 'J8HhIB6tKRA',
    fabric: 'Nida crepe or brushed crepe, fully opaque',
    fit: 'Relaxed, floor-length silhouette with a clean drape',
    care: 'Dry clean only. Steam to release travel creases.',
  },
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
    slug: 'modest-everyday',
    name: 'Modest Everyday',
    tagline: 'Considered basics for daily ease',
    description: 'Easy, long-sleeve dresses in natural fibres — the pieces you reach for without thinking twice.',
    cover: 'E7OcA57VTy4',
    fabric: 'Viscose-linen blend, brushed jersey',
    fit: 'Relaxed midi and maxi lengths with full coverage sleeves',
    care: 'Machine wash cold, gentle cycle. Hang to dry.',
  },
  {
    slug: 'sportswear',
    name: 'Sportswear',
    tagline: 'Modest performance, engineered to move',
    description: 'Full-coverage activewear built from breathable performance fabric — designed for the studio, the run, the everyday.',
    cover: '4MJPRwG2OYY',
    fabric: 'Recycled performance jersey with four-way stretch',
    fit: 'Second-skin stretch through the body, full-length coverage',
    care: 'Machine wash cold. No fabric softener. Line dry.',
  },
  {
    slug: 'occasion',
    name: 'Occasion',
    tagline: 'Refined pieces for the moments that matter',
    description: 'Evening and celebration wear with hand-finished detail — modest coverage, without compromising on refinement.',
    cover: 'dOB0YdxqmW8',
    fabric: 'Silk-blend crepe and hand-embellished tulle underlay',
    fit: 'Fitted through the bodice, fluid through the skirt',
    care: 'Dry clean only. Store on a padded hanger.',
  },
  {
    slug: 'kaftans',
    name: 'Kaftans',
    tagline: 'Resortwear with heritage in its seams',
    description: 'Loose, breathable kaftans for warm-weather ease — rooted in heritage silhouettes, made for the way you actually live.',
    cover: 'BGQDXS73ktE',
    fabric: 'Silk-cotton voile with hand-finished trim',
    fit: 'Relaxed, oversized silhouette with dropped shoulder',
    care: 'Hand wash cold or dry clean. Line dry in shade.',
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
  { name: 'The Sahara Abaya', collection: 'abayas', price: 640, colors: ['Black', 'Espresso'], image: '56fPjVSHM3o', styled: 'MzImhIYa3-I', badge: 'Bestseller',
    description: 'A closed-front abaya cut from fluid nida crepe with a fitted shoulder and a soft, floor-skimming fall. Finished with a self-tie belt to define the waist.' },
  { name: 'Noor Embroidered Abaya', collection: 'abayas', price: 780, colors: ['Black'], image: 'MzImhIYa3-I', styled: '65v_6djIAFs', badge: 'New',
    description: 'Hand-finished floral embroidery traces the cuffs and front placket of this closed abaya, cut for a clean, considered silhouette.' },
  { name: 'Layla Open Abaya', collection: 'abayas', price: 690, colors: ['Sand', 'Black'], image: '65v_6djIAFs', styled: 'vrQAE65t7Hg', badge: '',
    description: 'An open-front abaya designed to layer over your own pieces, with a matching under-scarf and clean topstitched seams.' },
  { name: 'Amara Closed Abaya', collection: 'abayas', price: 710, colors: ['Taupe', 'Charcoal'], image: 'vrQAE65t7Hg', styled: '2eC_-0yRrGU', badge: '',
    description: 'A considered wardrobe staple — brushed crepe with a fitted yoke and gently flared hem for effortless movement.' },

  // Workwear
  { name: 'Tailored Blazer Set', collection: 'workwear', price: 890, colors: ['Espresso', 'Black'], image: '0NtHjtlwgvs', styled: 'WjHOXP6xIY4', badge: 'Bestseller',
    description: 'A single-breasted blazer and matching wide-leg trouser, cut from wool-blend gabardine for a considered, boardroom-ready silhouette.' },
  { name: 'Charcoal Wide-Leg Suit', collection: 'workwear', price: 860, colors: ['Charcoal'], image: 'WjHOXP6xIY4', styled: '9E7s5oyDmxg', badge: '',
    description: 'Structured shoulders, a nipped waist, and a fluid wide-leg trouser — this suit carries a room without saying too much.' },
  { name: 'Wide-Leg Trouser & Shirt Set', collection: 'workwear', price: 620, colors: ['Ivory', 'Black'], image: '9E7s5oyDmxg', styled: '0NtHjtlwgvs', badge: 'New',
    description: 'A relaxed long-sleeve shirt paired with a high-waisted wide-leg trouser — modest coverage with real movement.' },
  { name: 'Camel Wool Trench', collection: 'workwear', price: 950, colors: ['Camel'], image: '0AKg9Pv7LkI', styled: 'FHGpPsI_ozo', badge: '',
    description: 'A longline wool-blend trench with a self-belt and covered placket — the layer that finishes every workwear look.' },

  // Modest Everyday
  { name: 'Everyday Midi Dress', collection: 'modest-everyday', price: 460, colors: ['Stone'], image: 'utqfDiyaTA0', styled: 'bCnM5P0gcpY', badge: 'Bestseller',
    description: 'A long-sleeve midi dress in soft viscose-linen, with a relaxed A-line body built for full-day comfort.' },
  { name: 'Column Long-Sleeve Dress', collection: 'modest-everyday', price: 480, colors: ['Black', 'Ivory'], image: 'bCnM5P0gcpY', styled: 'bjJu-s5m-Ug', badge: '',
    description: 'A fluid column dress with a high neckline and full-length sleeve — quietly polished, endlessly wearable.' },
  { name: 'Street Maxi Dress', collection: 'modest-everyday', price: 510, colors: ['Camel'], image: 'bjJu-s5m-Ug', styled: 'utqfDiyaTA0', badge: '',
    description: 'A maxi-length dress with a gently gathered waist and covered button placket, made for city days on the move.' },
  { name: 'Coastal Linen Dress', collection: 'modest-everyday', price: 430, colors: ['Sand'], image: 'gY8hncTY3m0', styled: 'utqfDiyaTA0', badge: 'New',
    description: 'Breathable linen-blend with long sleeves and a loose, breezy fall — built for warm-weather modest dressing.' },

  // Sportswear
  { name: 'Performance Long-Sleeve Set', collection: 'sportswear', price: 380, colors: ['Charcoal', 'Sage'], image: 'wERO8HDpEGw', styled: 'sxYPiec2tLE', badge: 'Bestseller',
    description: 'A full-coverage long-sleeve top and legging set in breathable four-way stretch, built for studio to street.' },
  { name: 'Studio Legging Set', collection: 'sportswear', price: 340, colors: ['Black'], image: 'sxYPiec2tLE', styled: 'IZy6FqnEE2o', badge: '',
    description: 'High-waisted performance leggings and a relaxed long-sleeve top with thumbholes for coverage that moves with you.' },
  { name: 'Sport Hijab & Top', collection: 'sportswear', price: 210, colors: ['Stone', 'Black'], image: 'IZy6FqnEE2o', styled: 'Y64mkDZwIt8', badge: 'New',
    description: 'A quick-dry sport hijab paired with a breathable long-sleeve performance top, cut for genuine range of motion.' },
  { name: 'Active Wrap Set', collection: 'sportswear', price: 360, colors: ['Espresso'], image: 'Y64mkDZwIt8', styled: 'wERO8HDpEGw', badge: '',
    description: 'A wrap-front top and full-length legging in soft-touch performance fabric — modest coverage that keeps pace.' },

  // Occasion
  { name: 'Bridal Bouquet Gown', collection: 'occasion', price: 1450, colors: ['Ivory'], image: 'dOB0YdxqmW8', styled: 'er4c7HGx4Hs', badge: 'New',
    description: 'A hand-finished ivory gown in silk-blend crepe with a fitted bodice and softly gathered skirt, built for your most considered day.' },
  { name: 'Garden Party Dress', collection: 'occasion', price: 720, colors: ['Sand'], image: 'er4c7HGx4Hs', styled: 'r3u-_plEvWw', badge: '',
    description: 'Long sleeves, a covered neckline, and a fluid floor-length skirt — dressed up without a single compromise.' },
  { name: 'Evening Portrait Gown', collection: 'occasion', price: 980, colors: ['Black'], image: 'r3u-_plEvWw', styled: 'dOB0YdxqmW8', badge: '',
    description: 'A structured evening gown with a modest boat neckline and full-length sleeve, finished with a fluid column skirt.' },

  // Kaftans
  { name: 'Signature Kaftan', collection: 'kaftans', price: 690, colors: ['Black'], image: 'BGQDXS73ktE', styled: '9kbeSfpdjYs', badge: 'Bestseller',
    description: 'Our signature silhouette in silk-cotton voile — dropped shoulder, wide sleeve, and a relaxed floor-length fall.' },
  { name: 'Resort Kaftan', collection: 'kaftans', price: 640, colors: ['Ivory'], image: '9kbeSfpdjYs', styled: 'eexbQLqWKZk', badge: '',
    description: 'A lightweight resort kaftan with hand-finished trim at the neckline, made for warm-weather ease.' },
  { name: 'Dune Kaftan', collection: 'kaftans', price: 660, colors: ['Ivory', 'Sand'], image: 'eexbQLqWKZk', styled: 'BGQDXS73ktE', badge: 'New',
    description: 'Soft, sun-washed tones and a breezy, unstructured cut — the kaftan you live in from beach to balcony.' },
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
