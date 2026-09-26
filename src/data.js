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
    nameAr: 'مخاور',
    tagline: 'Printed Mokhawar pieces for everyday ease',
    taglineAr: 'قطع مخاور مطبوعة للارتداء اليومي',
    description: 'Vivid printed Mokhawar pieces in fluid, opaque fabric — considered pieces for the way you actually live.',
    descriptionAr: 'قطع مخاور نابضة بالألوان من قماش مرن غير شفاف — تصاميم مدروسة تناسب أسلوب حياتكِ.',
    cover: '/public/images/workwear/workwear-4-front.webp',
    fabric: 'Satin-finish viscose, fully opaque',
    fabricAr: 'فسكوز بلمسة ساتان، غير شفاف بالكامل',
    fit: 'Relaxed, floor-length silhouette with a full sleeve',
    fitAr: 'قصة مريحة تصل حتى الأرض بكم كامل',
    care: 'Dry clean recommended. Steam between wears.',
    careAr: 'يُنصح بالتنظيف الجاف. يُكوى بالبخار بين الارتداءات.',
  },
  {
    slug: 'abayas',
    name: 'Abaya Dress',
    nameAr: 'عباية',
    tagline: 'Fluid silhouettes, engineered drape',
    taglineAr: 'خطوط انسيابية بسقطة مصممة بعناية',
    description: 'Considered abayas cut from fluid, opaque crepe — built for movement, finished with quiet detail.',
    descriptionAr: 'عبايات مدروسة مصنوعة من الكريب المرن غير الشفاف — مصممة للحركة، بلمسات أنيقة.',
    cover: '/public/images/abayas/abaya-10.webp',
    fabric: 'Nida crepe or brushed crepe, fully opaque',
    fabricAr: 'كريب نيدة أو كريب مصقول، غير شفاف بالكامل',
    fit: 'Relaxed, floor-length silhouette with a clean drape',
    fitAr: 'قصة مريحة تصل حتى الأرض بسقطة نظيفة',
    care: 'Dry clean only. Steam to release travel creases.',
    careAr: 'التنظيف الجاف فقط. يُكوى بالبخار لإزالة تجاعيد السفر.',
  },
  {
    slug: 'underdress',
    name: 'Abaya Underdress',
    nameAr: 'ثوب تحت العباية',
    tagline: 'The slip dress worn beneath',
    taglineAr: 'الثوب الداخلي الذي يُرتدى تحتها',
    description: 'Simple, opaque slip dresses made to wear under an abaya or Mokhawar piece — quiet layers that finish the look.',
    descriptionAr: 'أثواب داخلية بسيطة وغير شفافة تُرتدى تحت العباية أو قطعة المخاور — طبقة هادئة تكمل الإطلالة.',
    cover: '/public/images/underdress/underdress-1-front.webp',
    fabric: 'Brushed satin or jersey, fully opaque',
    fabricAr: 'ساتان مصقول أو جيرسيه، غير شفاف بالكامل',
    fit: 'Relaxed column silhouette, floor length',
    fitAr: 'قصة عمودية مريحة تصل حتى الأرض',
    care: 'Machine wash cold, gentle cycle. Hang to dry.',
    careAr: 'يُغسل بماء بارد في دورة لطيفة. يُعلّق حتى يجف.',
  },
]

export const SIZES = ['52', '54', '56', '58', '60']

// Height-based size finder — matches the reference site's "Know your size" tool.
export const sizeForHeight = (heightCm) => {
  if (heightCm < 159) return '52'
  if (heightCm < 164) return '54'
  if (heightCm < 169) return '56'
  if (heightCm < 174) return '58'
  return '60'
}

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
  { name: 'Zahra Palm Print Mokhawar', nameAr: 'زهرة - مخاور بطبعة نخيل', collection: 'workwear', price: 480, colors: ['Teal'], photos: [W(1)], badge: 'New',
    description: 'A vivid teal Mokhawar piece in a palm and archway print, finished with hand-beaded embroidery at the neckline and lace-trimmed cuffs.',
    descriptionAr: 'قطعة مخاور فيروزية زاهية بطبعة نخيل وأقواس، مزينة بتطريز يدوي مرصع بالخرز عند خط الرقبة وحواف مزينة بالدانتيل.' },
  { name: 'Layan Paisley Beaded Mokhawar', nameAr: 'ليان - مخاور بيزلي مرصع بالخرز', collection: 'workwear', price: 520, colors: ['Green'], photos: ['/public/images/workwear/workwear-2-front.webp', '/public/images/workwear/workwear-2-cuff.webp', W(2)], views: ['Front', 'Cuff Detail', 'Neckline Detail'], badge: 'New',
    description: 'A green swirl-print Mokhawar piece with a hand-beaded paisley yoke in green and silver, finished with a fringed beadwork trim at the neckline and cuffs.',
    descriptionAr: 'قطعة مخاور خضراء بطبعة دوامات، مع ياقة بيزلي مطرزة يدوياً بالخرز الأخضر والفضي، وتنتهي بحاشية من الخرز المتدلي عند خط الرقبة والأكمام.' },
  { name: 'Samar Tie-Dye Beaded Mokhawar', nameAr: 'سمر - مخاور مصبوغ بالربط ومرصع بالخرز', collection: 'workwear', price: 540, colors: ['Sunset'], photos: ['/public/images/workwear/workwear-3-front.webp', '/public/images/workwear/workwear-3-cuff.webp', W(3), '/public/images/workwear/workwear-3-detail2.webp', '/public/images/workwear/workwear-3-detail3.webp'], views: ['Front', 'Cuff Detail', 'Neckline Detail', 'Detail', 'Detail'], badge: '',
    description: 'A sunset tie-dye Mokhawar piece in fluid satin, with a hand-beaded scalloped neckline and matching cuffs finished in crystal trim.',
    descriptionAr: 'قطعة مخاور بألوان الغروب وتقنية الصبغ بالربط من الساتان المرن، بخط رقبة مقوس مطرز يدوياً بالخرز وأكمام مطابقة منتهية بحواف كريستالية.' },
  { name: 'Marina Seahorse Beaded Mokhawar', nameAr: 'مارينا - مخاور بطبعة حصان البحر ومرصع بالخرز', collection: 'workwear', price: 550, colors: ['Turquoise'], photos: ['/public/images/workwear/workwear-4-front.webp', '/public/images/workwear/workwear-4-cuff.webp', W(4)], views: ['Front', 'Cuff Detail', 'Neckline Detail'], badge: 'New',
    description: 'A turquoise Mokhawar piece in a seahorse and starfish print, with a fully hand-beaded yoke embroidered to match the underwater motif.',
    descriptionAr: 'قطعة مخاور فيروزية بطبعة حصان البحر والنجم البحري، بياقة مطرزة بالكامل يدوياً بالخرز لتتناسق مع طابع الحياة تحت الماء.' },
  { name: 'Nadia Wave Beaded Mokhawar', nameAr: 'نادية - مخاور بطبعة الأمواج ومرصع بالخرز', collection: 'workwear', price: 560, colors: ['Sky Blue'], photos: ['/public/images/workwear/workwear-5-front.webp', '/public/images/workwear/workwear-5-cuff.webp', W(5)], views: ['Front', 'Cuff Detail', 'Neckline Detail'], badge: '',
    description: 'A sky-blue swirl-print Mokhawar piece with a hand-beaded wave-pattern yoke in silver and pale blue, finished with a fringed hem trim.',
    descriptionAr: 'قطعة مخاور زرقاء سماوية بطبعة دوامات، بياقة مطرزة يدوياً بنقش الأمواج بالخرز الفضي والأزرق الفاتح، وتنتهي بحاشية مزينة بالخرز عند الأسفل.' },

  // Abayas
  { name: 'Elara Navy Jacquard Abaya', nameAr: 'إيلارا - عباية جاكار كحلية', collection: 'abayas', price: 720, colors: ['Navy'], photos: [A(1)], badge: 'New',
    description: 'An open-front abaya in a subtle navy floral jacquard, finished with a self-tie belt and a soft, floor-skimming fall.',
    descriptionAr: 'عباية مفتوحة من الأمام بطبعة جاكار كحلية بزهور خفيفة، منتهية بحزام ذاتي الربط وسقطة ناعمة تلامس الأرض.' },
  { name: 'Noor Floral Abaya', nameAr: 'نور - عباية بطبعة زهور', collection: 'abayas', price: 780, colors: ['Chocolate'], photos: [A(2), A(3), A(5), A(7)], badge: 'Bestseller',
    description: 'A tonal floral-print abaya in fluid chiffon over an opaque lining, with a self-tie waist and a matching floor-length scarf.',
    descriptionAr: 'عباية بطبعة زهور بلونين من الشيفون المرن فوق بطانة غير شفافة، بحزام ذاتي الربط ووشاح مطابق يصل حتى الأرض.' },
  { name: 'Amara Polka-Dot Lace Abaya', nameAr: 'أمارة - عباية بنقاط ودانتيل', collection: 'abayas', price: 750, colors: ['Espresso'], photos: [A(4), A(6), A(8), A(9)], badge: 'New',
    description: 'A polka-dot abaya finished with delicate lace trim at the cuffs and scarf edge, cut for a clean, considered silhouette.',
    descriptionAr: 'عباية بطبعة نقاط، منتهية بحواف دانتيل رقيقة عند الأكمام وحافة الوشاح، مصممة بخطوط نظيفة وأنيقة.' },
  { name: 'Elif Pinstripe Lace-Band Abaya', nameAr: 'إيليف - عباية مقلمة بشريط دانتيل', collection: 'abayas', price: 790, colors: ['Espresso'], photos: [A(10), '/public/images/abayas/pinstripe-brown-2.webp'], badge: '',
    description: 'A pinstriped abaya banded with hand-finished lace at the chest, tailored for a considered silhouette with a fluid, floor-length fall.',
    descriptionAr: 'عباية مقلمة بشريط دانتيل مصنوع يدوياً عند الصدر، مصممة بخطوط مدروسة وسقطة انسيابية تصل حتى الأرض.' },
  { name: 'Sara Black Pinstripe Lace-Band Abaya', nameAr: 'سارة - عباية سوداء مقلمة بشريط دانتيل', collection: 'abayas', price: 790, colors: ['Black'], photos: ['/public/images/abayas/pinstripe-black-1.webp', '/public/images/abayas/pinstripe-black-2.webp', '/public/images/abayas/pinstripe-black-3.webp'], views: ['Front', 'Detail', 'Side'], badge: 'New',
    description: 'A black pinstriped abaya banded with hand-finished lace at the chest, tailored for a considered silhouette with a fluid, floor-length fall.',
    descriptionAr: 'عباية سوداء مقلمة بشريط دانتيل مصنوع يدوياً عند الصدر، مصممة بخطوط مدروسة وسقطة انسيابية تصل حتى الأرض.' },
  { name: 'Yara Black Polka-Dot Lace Abaya', nameAr: 'يارا - عباية سوداء بنقاط ودانتيل', collection: 'abayas', price: 750, colors: ['Black'], photos: ['/public/images/abayas/abaya-black-1.webp', '/public/images/abayas/abaya-black-2.webp'], views: ['Front', 'Side'], badge: 'New',
    description: 'A black polka-dot abaya finished with delicate lace trim at the cuffs and scarf edge, cut for a clean, considered silhouette.',
    descriptionAr: 'عباية سوداء بطبعة نقاط، منتهية بحواف دانتيل رقيقة عند الأكمام وحافة الوشاح، مصممة بخطوط نظيفة وأنيقة.' },

  // Abaya Underdress
  { name: 'Elle Sleeveless Underdress', nameAr: 'إيل - ثوب داخلي بلا أكمام', collection: 'underdress', price: 260, colors: ['Ivory'], photos: ['/public/images/underdress/underdress-1-front.webp', '/public/images/underdress/underdress-1-detail.webp'], views: ['Front', 'Detail'], badge: 'New',
    description: 'A simple, opaque A-line slip dress with a round neckline and cap sleeve, cut to layer cleanly under an abaya or Mokhawar piece.',
    descriptionAr: 'ثوب داخلي بسيط وغير شفاف بقصة A-line، بخط رقبة دائري وأكمام قصيرة، مصمم ليُرتدى بسلاسة تحت العباية أو قطعة المخاور.' },
]

export const VIEWS = ['Front', 'Side', 'Detail', 'Styled']

export const products = raw.map((p, i) => {
  const col = collections.find((c) => c.slug === p.collection)
  return {
    id: i + 1,
    slug: p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    ...p,
    fabric: col.fabric,
    fabricAr: col.fabricAr,
    fit: col.fit,
    fitAr: col.fitAr,
    care: col.care,
    careAr: col.careAr,
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
  { quote: 'The abaya fabric is genuinely beautiful in person — it drapes so much better than anything I’ve bought before.',
    quoteAr: 'قماش العباية جميل حقاً عند رؤيته عن قرب — سقطته أفضل بكثير من أي شيء اشتريته من قبل.',
    name: 'Sara M.', location: 'Doha, Qatar', locationAr: 'الدوحة، قطر' },
  { quote: 'Every abaya I’ve ordered fits like it was made for me. The embroidery detail is stunning up close.',
    quoteAr: 'كل عباية طلبتها تناسبني وكأنها صُنعت خصيصاً لي. تفاصيل التطريز مذهلة عن قرب.',
    name: 'Fatima R.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات' },
  { quote: 'Considered, opaque, and beautifully finished — this is the only place I shop for abayas now.',
    quoteAr: 'مدروسة وغير شفافة ومُنجزة بعناية — أصبح هذا المكان الوحيد الذي أتسوق منه العبايات الآن.',
    name: 'Aaliyah K.', location: 'Abu Dhabi, UAE', locationAr: 'أبوظبي، الإمارات' },
]

export const heroImage = '/public/images/abayas/abaya-9.webp'
export const campaignImage = '/public/images/abayas/abaya-7.webp'
export const galleryInteriorImage = '/public/images/abayas/abaya-10.webp'
