// Image helper — placeholder photography until real product photos are ready.
// TODO: replace with real client photos, same as every other slot on this site.
export const img = (id, { w = 1200, h = w, crop } = {}) =>
  `https://picsum.photos/seed/${encodeURIComponent(`${id}-${crop || ''}-${h}`)}/${w}/${h}`

export const CURRENCY = 'AED'

export const collections = [
  {
    slug: 'abayas',
    name: 'العبايات',
    tagline: 'انسيابية محسوبة في كل تفصيل',
    description: 'عبايات من الكريب المعتم بانسيابية مدروسة، تمنحكِ حرية الحركة وتكتمل بتفاصيل هادئة.',
    cover: 'J8HhIB6tKRA',
    fabric: 'Nida crepe or brushed crepe, fully opaque',
    fit: 'Relaxed, floor-length silhouette with a clean drape',
    care: 'Dry clean only. Steam to release travel creases.',
  },
  {
    slug: 'workwear',
    name: 'أناقة العمل',
    tagline: 'تفصيل يليق بحضوركِ',
    description: 'قطع محددة بقصّات وألوان حيادية مدروسة، لخزانة تعمل بذكاء وأناقة مثلكِ.',
    cover: 'nW4MXHvqut8',
    fabric: 'Suiting twill and wool-blend gabardine',
    fit: 'Tailored through the shoulder, wide-leg through the trouser',
    care: 'Dry clean recommended. Steam between wears.',
  },
  {
    slug: 'modest-everyday',
    name: 'أناقة يومية',
    tagline: 'أساسيات مدروسة ليوم أكثر راحة',
    description: 'فساتين مريحة بأكمام طويلة وخامات طبيعية، قطعكِ المفضلة لكل يوم.',
    cover: 'E7OcA57VTy4',
    fabric: 'Viscose-linen blend, brushed jersey',
    fit: 'Relaxed midi and maxi lengths with full coverage sleeves',
    care: 'Machine wash cold, gentle cycle. Hang to dry.',
  },
  {
    slug: 'sportswear',
    name: 'ملابس رياضية',
    tagline: 'أداء محتشم صُمّم ليتحرك',
    description: 'ملابس رياضية بتغطية كاملة وخامات تتنفس، للتمرين والجري وكل تفاصيل يومكِ.',
    cover: '4MJPRwG2OYY',
    fabric: 'Recycled performance jersey with four-way stretch',
    fit: 'Second-skin stretch through the body, full-length coverage',
    care: 'Machine wash cold. No fabric softener. Line dry.',
  },
  {
    slug: 'occasion',
    name: 'المناسبات',
    tagline: 'أناقة للحظات التي تبقى',
    description: 'قطع للمساء والاحتفال بتفاصيل يدوية، واحتشام لا يتنازل عن الرقي.',
    cover: 'dOB0YdxqmW8',
    fabric: 'Silk-blend crepe and hand-embellished tulle underlay',
    fit: 'Fitted through the bodice, fluid through the skirt',
    care: 'Dry clean only. Store on a padded hanger.',
  },
  {
    slug: 'kaftans',
    name: 'القفاطين',
    tagline: 'إرثٌ منسوج بروح عصرية',
    description: 'قفاطين فضفاضة بخامات تتنفس، تستلهم إرثنا وتناسب إيقاع حياتكِ.',
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
  { name: 'عباية الصحراء', collection: 'abayas', price: 640, colors: ['أسود', 'إسبريسو'], image: '56fPjVSHM3o', styled: 'MzImhIYa3-I', badge: 'الأكثر طلباً',
    description: 'A closed-front abaya cut from fluid nida crepe with a fitted shoulder and a soft, floor-skimming fall. Finished with a self-tie belt to define the waist.' },
  { name: 'عباية نور المطرّزة', collection: 'abayas', price: 780, colors: ['أسود'], image: 'MzImhIYa3-I', styled: '65v_6djIAFs', badge: 'جديد',
    description: 'Hand-finished floral embroidery traces the cuffs and front placket of this closed abaya, cut for a clean, considered silhouette.' },
  { name: 'عباية ليلى المفتوحة', collection: 'abayas', price: 690, colors: ['رملي', 'أسود'], image: '65v_6djIAFs', styled: 'vrQAE65t7Hg', badge: '',
    description: 'An open-front abaya designed to layer over your own pieces, with a matching under-scarf and clean topstitched seams.' },
  { name: 'عباية أمارا', collection: 'abayas', price: 710, colors: ['تاوب', 'فحمي'], image: 'vrQAE65t7Hg', styled: '2eC_-0yRrGU', badge: '',
    description: 'A considered wardrobe staple — brushed crepe with a fitted yoke and gently flared hem for effortless movement.' },

  // Workwear
  { name: 'طقم السترة المفصّلة', collection: 'workwear', price: 890, colors: ['إسبريسو', 'أسود'], image: '0NtHjtlwgvs', styled: 'WjHOXP6xIY4', badge: 'الأكثر طلباً',
    description: 'A single-breasted blazer and matching wide-leg trouser, cut from wool-blend gabardine for a considered, boardroom-ready silhouette.' },
  { name: 'بدلة فحمية واسعة', collection: 'workwear', price: 860, colors: ['فحمي'], image: 'WjHOXP6xIY4', styled: '9E7s5oyDmxg', badge: '',
    description: 'Structured shoulders, a nipped waist, and a fluid wide-leg trouser — this suit carries a room without saying too much.' },
  { name: 'طقم القميص والسروال الواسع', collection: 'workwear', price: 620, colors: ['عاجي', 'أسود'], image: '9E7s5oyDmxg', styled: '0NtHjtlwgvs', badge: 'جديد',
    description: 'A relaxed long-sleeve shirt paired with a high-waisted wide-leg trouser — modest coverage with real movement.' },
  { name: 'معطف جملي صوفي', collection: 'workwear', price: 950, colors: ['جملي'], image: '0AKg9Pv7LkI', styled: 'FHGpPsI_ozo', badge: '',
    description: 'A longline wool-blend trench with a self-belt and covered placket — the layer that finishes every workwear look.' },

  // Modest Everyday
  { name: 'فستان يومي ميدي', collection: 'modest-everyday', price: 460, colors: ['حجري'], image: 'utqfDiyaTA0', styled: 'bCnM5P0gcpY', badge: 'الأكثر طلباً',
    description: 'A long-sleeve midi dress in soft viscose-linen, with a relaxed A-line body built for full-day comfort.' },
  { name: 'فستان عمودي بأكمام طويلة', collection: 'modest-everyday', price: 480, colors: ['أسود', 'عاجي'], image: 'bCnM5P0gcpY', styled: 'bjJu-s5m-Ug', badge: '',
    description: 'A fluid column dress with a high neckline and full-length sleeve — quietly polished, endlessly wearable.' },
  { name: 'فستان المدينة الطويل', collection: 'modest-everyday', price: 510, colors: ['جملي'], image: 'bjJu-s5m-Ug', styled: 'utqfDiyaTA0', badge: '',
    description: 'A maxi-length dress with a gently gathered waist and covered button placket, made for city days on the move.' },
  { name: 'فستان الساحل الكتاني', collection: 'modest-everyday', price: 430, colors: ['رملي'], image: 'gY8hncTY3m0', styled: 'utqfDiyaTA0', badge: 'جديد',
    description: 'Breathable linen-blend with long sleeves and a loose, breezy fall — built for warm-weather modest dressing.' },

  // Sportswear
  { name: 'طقم الأداء بأكمام طويلة', collection: 'sportswear', price: 380, colors: ['فحمي', 'مريمي'], image: 'wERO8HDpEGw', styled: 'sxYPiec2tLE', badge: 'الأكثر طلباً',
    description: 'A full-coverage long-sleeve top and legging set in breathable four-way stretch, built for studio to street.' },
  { name: 'طقم الاستوديو الرياضي', collection: 'sportswear', price: 340, colors: ['أسود'], image: 'sxYPiec2tLE', styled: 'IZy6FqnEE2o', badge: '',
    description: 'High-waisted performance leggings and a relaxed long-sleeve top with thumbholes for coverage that moves with you.' },
  { name: 'حجاب رياضي وبلوزة', collection: 'sportswear', price: 210, colors: ['حجري', 'أسود'], image: 'IZy6FqnEE2o', styled: 'Y64mkDZwIt8', badge: 'جديد',
    description: 'A quick-dry sport hijab paired with a breathable long-sleeve performance top, cut for genuine range of motion.' },
  { name: 'طقم الحركة الملفوف', collection: 'sportswear', price: 360, colors: ['إسبريسو'], image: 'Y64mkDZwIt8', styled: 'wERO8HDpEGw', badge: '',
    description: 'A wrap-front top and full-length legging in soft-touch performance fabric — modest coverage that keeps pace.' },

  // Occasion
  { name: 'فستان باقة العروس', collection: 'occasion', price: 1450, colors: ['عاجي'], image: 'dOB0YdxqmW8', styled: 'er4c7HGx4Hs', badge: 'جديد',
    description: 'A hand-finished ivory gown in silk-blend crepe with a fitted bodice and softly gathered skirt, built for your most considered day.' },
  { name: 'فستان احتفال الحديقة', collection: 'occasion', price: 720, colors: ['رملي'], image: 'er4c7HGx4Hs', styled: 'r3u-_plEvWw', badge: '',
    description: 'Long sleeves, a covered neckline, and a fluid floor-length skirt — dressed up without a single compromise.' },
  { name: 'فستان المساء الانسيابي', collection: 'occasion', price: 980, colors: ['أسود'], image: 'r3u-_plEvWw', styled: 'dOB0YdxqmW8', badge: '',
    description: 'A structured evening gown with a modest boat neckline and full-length sleeve, finished with a fluid column skirt.' },

  // Kaftans
  { name: 'قفطان سيرين المميز', collection: 'kaftans', price: 690, colors: ['أسود'], image: 'BGQDXS73ktE', styled: '9kbeSfpdjYs', badge: 'الأكثر طلباً',
    description: 'Our signature silhouette in silk-cotton voile — dropped shoulder, wide sleeve, and a relaxed floor-length fall.' },
  { name: 'قفطان المنتجع', collection: 'kaftans', price: 640, colors: ['عاجي'], image: '9kbeSfpdjYs', styled: 'eexbQLqWKZk', badge: '',
    description: 'A lightweight resort kaftan with hand-finished trim at the neckline, made for warm-weather ease.' },
  { name: 'قفطان الكثبان', collection: 'kaftans', price: 660, colors: ['عاجي', 'رملي'], image: 'eexbQLqWKZk', styled: 'BGQDXS73ktE', badge: 'جديد',
    description: 'Soft, sun-washed tones and a breezy, unstructured cut — the kaftan you live in from beach to balcony.' },
]

export const products = raw.map((p, i) => {
  const col = collections.find((c) => c.slug === p.collection)
  return {
    id: i + 1,
    slug: `${p.collection}-${i + 1}`,
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
  { quote: 'التفصيل مختلف عن كل ما جرّبته في أزياء العمل المحتشمة — كأن القطعة صُنعت خصيصاً لي.', name: 'Fatima R.', location: 'دبي، الإمارات', avatar: img('5WtbRAqAvOM', { w: 160, h: 160, crop: 'faces' }) },
  { quote: 'سيرين أول ملابس رياضية تمنحني تغطية كاملة من دون أن تقيّد تمريني.', name: 'Aaliyah K.', location: 'أبوظبي، الإمارات', avatar: img('u7vnK5n7yLA', { w: 160, h: 160, crop: 'faces' }) },
  { quote: 'قماش العباية أجمل على الطبيعة، وانسيابيته لا تشبه أي قطعة اقتنيتها من قبل.', name: 'Sara M.', location: 'الدوحة، قطر', avatar: img('fbUvVn1_ViQ', { w: 160, h: 160, crop: 'faces' }) },
]

export const heroImage = img('Jbw7IxgA87k', { w: 1900, h: 1500 })
export const campaignImage = img('D_jlzKg2kDc', { w: 1400, h: 1750 })
export const galleryInteriorImage = img('_42kwMUmZw0', { w: 1900, h: 1100 })
