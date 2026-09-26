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
    descriptionAr: 'قطعة مخاور فيروزية زاهية بطبعة نخيل وأقواس، مزينة بتطريز يدوي مرصع بالخرز عند خط الرقبة وحواف مزينة بالدانتيل.',
    reviews: [
      { rating: 5, name: 'Huda A.', location: 'Sharjah, UAE', locationAr: 'الشارقة، الإمارات', date: '2025-06-14',
        text: 'The teal is even richer in person, and the embroidery around the neckline is so delicately done. True to size and beautifully opaque.',
        textAr: 'لون الفيروزي أغمق وأجمل عند الاستلام، والتطريز حول الرقبة منجز بعناية فائقة. المقاس مطابق تماماً والقماش غير شفاف كما وعدوا.' },
      { rating: 5, name: 'Mona T.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-07-02',
        text: 'Fits like it was made for me and the palm print is so elegant without being loud. My new everyday piece.',
        textAr: 'القصة مثالية وكأنها فُصّلت لي، وطبعة النخيل أنيقة دون مبالغة. أصبحت قطعتي اليومية المفضلة.' },
      { rating: 4, name: 'Aisha K.', location: 'Al Ain, UAE', locationAr: 'العين، الإمارات', date: '2025-05-20',
        text: 'Lovely fabric and drape — I sized up slightly since I prefer a looser fit, and it worked out perfectly.',
        textAr: 'القماش والسقطة رائعان — اخترت مقاساً أكبر قليلاً لأنني أفضل القصة الواسعة، وكانت النتيجة مثالية.' },
    ] },
  { name: 'Layan Paisley Beaded Mokhawar', nameAr: 'ليان - مخاور بيزلي مرصع بالخرز', collection: 'workwear', price: 520, colors: ['Green'], photos: ['/public/images/workwear/workwear-2-front.webp', '/public/images/workwear/workwear-2-cuff.webp', W(2)], views: ['Front', 'Cuff Detail', 'Neckline Detail'], badge: 'New',
    description: 'A green swirl-print Mokhawar piece with a hand-beaded paisley yoke in green and silver, finished with a fringed beadwork trim at the neckline and cuffs.',
    descriptionAr: 'قطعة مخاور خضراء بطبعة دوامات، مع ياقة بيزلي مطرزة يدوياً بالخرز الأخضر والفضي، وتنتهي بحاشية من الخرز المتدلي عند خط الرقبة والأكمام.',
    reviews: [
      { rating: 5, name: 'Rania S.', location: 'Abu Dhabi, UAE', locationAr: 'أبوظبي، الإمارات', date: '2025-04-11',
        text: "The beaded yoke is stunning up close — you can tell it's genuinely hand-done. Worth every dirham.",
        textAr: 'الياقة المطرزة بالخرز مذهلة عن قرب — يظهر بوضوح أنها مصنوعة يدوياً بعناية. تستحق كل درهم.' },
      { rating: 5, name: 'Farah N.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-03-29',
        text: 'The green swirl print is beautiful and the fabric moves so well. Received so many compliments the first time I wore it.',
        textAr: 'طبعة الدوامات الخضراء جميلة والقماش يتحرك بسلاسة. تلقيت الكثير من الإطراءات في أول مرة ارتديته.' },
      { rating: 4, name: 'Salma H.', location: 'Doha, Qatar', locationAr: 'الدوحة، قطر', date: '2025-08-09',
        text: 'Beautifully made, though the cuffs run a touch snug — worth noting if you have a fuller wrist.',
        textAr: 'مصنوعة بجودة عالية، لكن الأكمام ضيقة قليلاً عند المعصم — يستحق الانتباه إذا كان معصمكِ ممتلئاً.' },
    ] },
  { name: 'Samar Tie-Dye Beaded Mokhawar', nameAr: 'سمر - مخاور مصبوغ بالربط ومرصع بالخرز', collection: 'workwear', price: 540, colors: ['Sunset'], photos: ['/public/images/workwear/workwear-3-front.webp', '/public/images/workwear/workwear-3-cuff.webp', W(3), '/public/images/workwear/workwear-3-detail2.webp', '/public/images/workwear/workwear-3-detail3.webp'], views: ['Front', 'Cuff Detail', 'Neckline Detail', 'Detail', 'Detail'], badge: '',
    description: 'A sunset tie-dye Mokhawar piece in fluid satin, with a hand-beaded scalloped neckline and matching cuffs finished in crystal trim.',
    descriptionAr: 'قطعة مخاور بألوان الغروب وتقنية الصبغ بالربط من الساتان المرن، بخط رقبة مقوس مطرز يدوياً بالخرز وأكمام مطابقة منتهية بحواف كريستالية.',
    reviews: [
      { rating: 5, name: 'Layla M.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-09-01',
        text: 'The sunset tones are gorgeous and the crystal trim at the neckline catches the light beautifully.',
        textAr: 'ألوان الغروب رائعة وحواف الكريستال عند الرقبة تعكس الضوء بشكل جميل جداً.' },
      { rating: 5, name: 'Nour A.', location: 'Sharjah, UAE', locationAr: 'الشارقة، الإمارات', date: '2025-07-18',
        text: 'Ordered this for Eid and it did not disappoint — the satin has such a beautiful fluid drape.',
        textAr: 'طلبتها للعيد ولم تخيب ظني إطلاقاً — قماش الساتان له سقطة انسيابية جميلة جداً.' },
      { rating: 5, name: 'Reem D.', location: 'Muscat, Oman', locationAr: 'مسقط، عُمان', date: '2025-06-05',
        text: 'Beadwork is flawless and the fit is exactly as described. My favourite piece from Serein so far.',
        textAr: 'تطريز الخرز متقن تماماً والقصة مطابقة للوصف تماماً. قطعتي المفضلة من سيرين حتى الآن.' },
    ] },
  { name: 'Marina Seahorse Beaded Mokhawar', nameAr: 'مارينا - مخاور بطبعة حصان البحر ومرصع بالخرز', collection: 'workwear', price: 550, colors: ['Turquoise'], photos: ['/public/images/workwear/workwear-4-front.webp', '/public/images/workwear/workwear-4-cuff.webp', W(4)], views: ['Front', 'Cuff Detail', 'Neckline Detail'], badge: 'New',
    description: 'A turquoise Mokhawar piece in a seahorse and starfish print, with a fully hand-beaded yoke embroidered to match the underwater motif.',
    descriptionAr: 'قطعة مخاور فيروزية بطبعة حصان البحر والنجم البحري، بياقة مطرزة بالكامل يدوياً بالخرز لتتناسق مع طابع الحياة تحت الماء.',
    reviews: [
      { rating: 5, name: 'Dana F.', location: 'Abu Dhabi, UAE', locationAr: 'أبوظبي، الإمارات', date: '2025-05-27',
        text: 'Such a playful yet elegant print — the hand-beading on the yoke is genuinely impressive craftsmanship.',
        textAr: 'طبعة مرحة وأنيقة في آن واحد — التطريز اليدوي على الياقة يظهر حرفية مذهلة.' },
      { rating: 4, name: 'Alia R.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-08-22',
        text: 'Beautiful colour and quality. Arrived a day later than expected but well worth the wait.',
        textAr: 'لون وجودة رائعان. وصلت متأخرة يوماً واحداً عن الموعد لكنها تستحق الانتظار.' },
      { rating: 5, name: 'Yasmin O.', location: 'Kuwait City, Kuwait', locationAr: 'مدينة الكويت، الكويت', date: '2025-04-30',
        text: 'The turquoise is so vivid and the fabric is fully opaque, exactly what I look for in a Mokhawar piece.',
        textAr: 'لون الفيروزي زاهٍ جداً والقماش غير شفاف بالكامل، تماماً ما أبحث عنه في قطعة مخاور.' },
    ] },
  { name: 'Nadia Wave Beaded Mokhawar', nameAr: 'نادية - مخاور بطبعة الأمواج ومرصع بالخرز', collection: 'workwear', price: 560, colors: ['Sky Blue'], photos: ['/public/images/workwear/workwear-5-front.webp', '/public/images/workwear/workwear-5-cuff.webp', W(5)], views: ['Front', 'Cuff Detail', 'Neckline Detail'], badge: '',
    description: 'A sky-blue swirl-print Mokhawar piece with a hand-beaded wave-pattern yoke in silver and pale blue, finished with a fringed hem trim.',
    descriptionAr: 'قطعة مخاور زرقاء سماوية بطبعة دوامات، بياقة مطرزة يدوياً بنقش الأمواج بالخرز الفضي والأزرق الفاتح، وتنتهي بحاشية مزينة بالخرز عند الأسفل.',
    reviews: [
      { rating: 5, name: 'Hessa J.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-09-10',
        text: 'The wave pattern beading is so delicate and the sky blue is a beautiful, wearable shade.',
        textAr: 'تطريز نقش الأمواج رقيق جداً واللون الأزرق السماوي مريح للعين وسهل التنسيق.' },
      { rating: 5, name: 'Maitha S.', location: 'Ras Al Khaimah, UAE', locationAr: 'رأس الخيمة، الإمارات', date: '2025-07-25',
        text: "Received so many compliments on the cuff detail. Fits true to size and the fabric doesn't crease easily.",
        textAr: 'تلقيت الكثير من الإطراءات على تفاصيل الكم. المقاس مطابق والقماش لا يتجعد بسهولة.' },
      { rating: 4, name: 'Iman B.', location: 'Doha, Qatar', locationAr: 'الدوحة، قطر', date: '2025-06-17',
        text: 'Gorgeous piece overall, just wish the fringed hem trim was slightly more secure.',
        textAr: 'قطعة رائعة بشكل عام، أتمنى فقط لو كانت حاشية الخرز المتدلية أكثر ثباتاً.' },
    ] },

  // Abayas
  { name: 'Elara Navy Jacquard Abaya', nameAr: 'إيلارا - عباية جاكار كحلية', collection: 'abayas', price: 720, colors: ['Navy'], photos: [A(1)], badge: 'New',
    description: 'An open-front abaya in a subtle navy floral jacquard, finished with a self-tie belt and a soft, floor-skimming fall.',
    descriptionAr: 'عباية مفتوحة من الأمام بطبعة جاكار كحلية بزهور خفيفة، منتهية بحزام ذاتي الربط وسقطة ناعمة تلامس الأرض.',
    reviews: [
      { rating: 5, name: 'Sara M.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-03-14',
        text: 'The jacquard pattern is subtle and elegant, and the self-tie belt gives it such a flattering shape.',
        textAr: 'نقش الجاكار خفيف وأنيق، وحزام الربط الذاتي يمنحها شكلاً جذاباً جداً.' },
      { rating: 5, name: 'Fatima R.', location: 'Abu Dhabi, UAE', locationAr: 'أبوظبي، الإمارات', date: '2025-05-02',
        text: 'Fits like it was made for me and drapes beautifully to the floor. My go-to abaya now.',
        textAr: 'القصة كأنها صُنعت لي وتسقط بشكل جميل حتى الأرض. أصبحت عبايتي الأساسية الآن.' },
      { rating: 4, name: 'Noura K.', location: 'Al Ain, UAE', locationAr: 'العين، الإمارات', date: '2025-08-19',
        text: "Lovely quality fabric, though I'd recommend sizing up if you like a roomier fit through the shoulders.",
        textAr: 'قماش عالي الجودة، لكن أنصح باختيار مقاس أكبر إذا كنتِ تفضلين مساحة أوسع عند الكتفين.' },
    ] },
  { name: 'Noor Floral Abaya', nameAr: 'نور - عباية بطبعة زهور', collection: 'abayas', price: 780, colors: ['Chocolate'], photos: [A(2), A(3), A(5), A(7)], badge: 'Bestseller',
    description: 'A tonal floral-print abaya in fluid chiffon over an opaque lining, with a self-tie waist and a matching floor-length scarf.',
    descriptionAr: 'عباية بطبعة زهور بلونين من الشيفون المرن فوق بطانة غير شفافة، بحزام ذاتي الربط ووشاح مطابق يصل حتى الأرض.',
    reviews: [
      { rating: 5, name: 'Aaliyah K.', location: 'Abu Dhabi, UAE', locationAr: 'أبوظبي، الإمارات', date: '2025-02-20',
        text: 'This is genuinely the most beautiful abaya I own. The tonal floral print is gorgeous and the matching scarf is a lovely touch.',
        textAr: 'هذه حقاً أجمل عباية أملكها. الطبعة الزهرية بلونين رائعة والوشاح المطابق لمسة جميلة إضافية.' },
      { rating: 5, name: 'Latifa E.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-04-08',
        text: 'Ordered a second one after the first — the chiffon over opaque lining is exactly the right amount of coverage and movement.',
        textAr: 'طلبت واحدة ثانية بعد الأولى — الشيفون فوق البطانة غير الشفافة يمنح التغطية والحركة المثاليتين تماماً.' },
      { rating: 5, name: 'Mariam Z.', location: 'Sharjah, UAE', locationAr: 'الشارقة، الإمارات', date: '2025-06-30',
        text: "Understand now why it's the bestseller. The chocolate tone is rich and flattering on every skin tone I've seen it on.",
        textAr: 'فهمت الآن سبب كونها الأكثر مبيعاً. لون الشوكولاتة غني وجذاب على جميع درجات البشرة التي رأيتها عليها.' },
      { rating: 4, name: 'Hind Y.', location: 'Doha, Qatar', locationAr: 'الدوحة، قطر', date: '2025-09-05',
        text: 'Beautiful piece, arrived well packaged. The scarf is slightly sheerer than I expected but still lovely.',
        textAr: 'قطعة جميلة ووصلت بتغليف عناية. الوشاح أخف شفافية قليلاً مما توقعت لكنه جميل رغم ذلك.' },
    ] },
  { name: 'Amara Polka-Dot Lace Abaya', nameAr: 'أمارة - عباية بنقاط ودانتيل', collection: 'abayas', price: 750, colors: ['Espresso'], photos: [A(4), A(6), A(8), A(9)], badge: 'New',
    description: 'A polka-dot abaya finished with delicate lace trim at the cuffs and scarf edge, cut for a clean, considered silhouette.',
    descriptionAr: 'عباية بطبعة نقاط، منتهية بحواف دانتيل رقيقة عند الأكمام وحافة الوشاح، مصممة بخطوط نظيفة وأنيقة.',
    reviews: [
      { rating: 5, name: 'Shaikha A.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-03-22',
        text: 'The lace trim at the cuffs is such a refined detail — this abaya feels much more expensive than its price.',
        textAr: 'حواف الدانتيل عند الأكمام لمسة أنيقة جداً — تبدو العباية أغلى بكثير من سعرها الفعلي.' },
      { rating: 4, name: 'Ghalia P.', location: 'Manama, Bahrain', locationAr: 'المنامة، البحرين', date: '2025-07-11',
        text: 'Really pretty polka-dot print and a clean silhouette. Runs slightly long, easy fix for a tailor.',
        textAr: 'طبعة النقاط جميلة جداً والقصة نظيفة الخطوط. الطول أطول قليلاً، ويمكن تعديله بسهولة عند الخياط.' },
      { rating: 3, name: 'Wafa I.', location: 'Kuwait City, Kuwait', locationAr: 'مدينة الكويت، الكويت', date: '2025-08-27',
        text: 'Fabric quality is nice but the lace at the scarf edge started fraying slightly after a few wears.',
        textAr: 'جودة القماش جيدة لكن دانتيل حافة الوشاح بدأ يتآكل قليلاً بعد عدة مرات ارتداء.' },
    ] },
  { name: 'Elif Pinstripe Lace-Band Abaya', nameAr: 'إيليف - عباية مقلمة بشريط دانتيل', collection: 'abayas', price: 790, colors: ['Espresso'], photos: [A(10), '/public/images/abayas/pinstripe-brown-2.webp'], badge: '',
    description: 'A pinstriped abaya banded with hand-finished lace at the chest, tailored for a considered silhouette with a fluid, floor-length fall.',
    descriptionAr: 'عباية مقلمة بشريط دانتيل مصنوع يدوياً عند الصدر، مصممة بخطوط مدروسة وسقطة انسيابية تصل حتى الأرض.',
    reviews: [
      { rating: 5, name: 'Deema Q.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-05-16',
        text: 'The pinstripe is subtle and sophisticated, and the hand-finished lace band at the chest is beautifully done.',
        textAr: 'الخطوط الرفيعة أنيقة وهادئة، وشريط الدانتيل المصنوع يدوياً عند الصدر منجز بعناية جميلة.' },
      { rating: 5, name: 'Amal V.', location: 'Al Khobar, Saudi Arabia', locationAr: 'الخبر، السعودية', date: '2025-06-24',
        text: "Such a considered, tailored silhouette. The crepe fabric moves beautifully and doesn't cling.",
        textAr: 'قصة مدروسة وأنيقة جداً. قماش الكريب يتحرك بشكل جميل ولا يلتصق بالجسم.' },
      { rating: 4, name: 'Reema W.', location: 'Abu Dhabi, UAE', locationAr: 'أبوظبي، الإمارات', date: '2025-09-13',
        text: "Gorgeous fabric and finish — true to size, though I'd love to see more colour options.",
        textAr: 'قماش وتشطيب رائعان — المقاس مطابق، لكن أتمنى توفر خيارات ألوان أكثر.' },
    ] },
  { name: 'Sara Black Pinstripe Lace-Band Abaya', nameAr: 'سارة - عباية سوداء مقلمة بشريط دانتيل', collection: 'abayas', price: 790, colors: ['Black'], photos: ['/public/images/abayas/pinstripe-black-1.webp', '/public/images/abayas/pinstripe-black-2.webp', '/public/images/abayas/pinstripe-black-3.webp'], views: ['Front', 'Detail', 'Side'], badge: 'New',
    description: 'A black pinstriped abaya banded with hand-finished lace at the chest, tailored for a considered silhouette with a fluid, floor-length fall.',
    descriptionAr: 'عباية سوداء مقلمة بشريط دانتيل مصنوع يدوياً عند الصدر، مصممة بخطوط مدروسة وسقطة انسيابية تصل حتى الأرض.',
    reviews: [
      { rating: 5, name: 'Noof X.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-08-02',
        text: 'Loved the brown version so much I got this in black — same beautiful lace band and drape, works for every occasion.',
        textAr: 'أحببت النسخة البنية كثيراً فاقتنيت هذه باللون الأسود — نفس شريط الدانتيل الجميل ونفس السقطة الأنيقة، تناسب كل المناسبات.' },
      { rating: 5, name: 'Bushra L.', location: 'Riyadh, Saudi Arabia', locationAr: 'الرياض، السعودية', date: '2025-09-20',
        text: 'Elegant and understated — the pinstripe reads as almost solid black from a distance with a lovely subtle texture up close.',
        textAr: 'أنيقة وهادئة — الخطوط الرفيعة تبدو أشبه بالأسود الصلب من بعيد مع ملمس خفيف جميل عن قرب.' },
      { rating: 4, name: 'Haya G.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-09-24',
        text: 'Beautifully tailored piece, just arrived a little later than the estimated delivery window.',
        textAr: 'قطعة مصممة بعناية، وصلت فقط متأخرة قليلاً عن موعد التسليم المتوقع.' },
    ] },
  { name: 'Yara Black Polka-Dot Lace Abaya', nameAr: 'يارا - عباية سوداء بنقاط ودانتيل', collection: 'abayas', price: 750, colors: ['Black'], photos: ['/public/images/abayas/abaya-black-1.webp', '/public/images/abayas/abaya-black-2.webp'], views: ['Front', 'Side'], badge: 'New',
    description: 'A black polka-dot abaya finished with delicate lace trim at the cuffs and scarf edge, cut for a clean, considered silhouette.',
    descriptionAr: 'عباية سوداء بطبعة نقاط، منتهية بحواف دانتيل رقيقة عند الأكمام وحافة الوشاح، مصممة بخطوط نظيفة وأنيقة.',
    reviews: [
      { rating: 5, name: 'Ohoud C.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-08-15',
        text: 'Same lovely lace detailing as the espresso version, just as beautiful in black. Perfect for everyday wear.',
        textAr: 'نفس تفاصيل الدانتيل الجميلة في النسخة البنية، جميلة تماماً باللون الأسود أيضاً. مثالية للارتداء اليومي.' },
      { rating: 5, name: 'Sumaya J.', location: 'Jeddah, Saudi Arabia', locationAr: 'جدة، السعودية', date: '2025-09-08',
        text: 'Clean, considered silhouette and the polka dots are subtle rather than loud. Exactly what I was looking for.',
        textAr: 'قصة نظيفة ومدروسة والنقاط خفيفة وليست مبالغاً فيها. بالضبط ما كنت أبحث عنه.' },
      { rating: 4, name: 'Ranim K.', location: 'Amman, Jordan', locationAr: 'عمّان، الأردن', date: '2025-09-18',
        text: 'Beautiful abaya, true to size. Would love to see it in a lighter-weight fabric for summer too.',
        textAr: 'عباية جميلة والمقاس مطابق. أتمنى توفرها بقماش أخف وزناً لموسم الصيف أيضاً.' },
    ] },

  // Abaya Underdress
  { name: 'Elle Sleeveless Underdress', nameAr: 'إيل - ثوب داخلي بلا أكمام', collection: 'underdress', price: 260, colors: ['Ivory'], photos: ['/public/images/underdress/underdress-1-front.webp', '/public/images/underdress/underdress-1-detail.webp'], views: ['Front', 'Detail'], badge: 'New',
    description: 'A simple, opaque A-line slip dress with a round neckline and cap sleeve, cut to layer cleanly under an abaya or Mokhawar piece.',
    descriptionAr: 'ثوب داخلي بسيط وغير شفاف بقصة A-line، بخط رقبة دائري وأكمام قصيرة، مصمم ليُرتدى بسلاسة تحت العباية أو قطعة المخاور.',
    reviews: [
      { rating: 5, name: 'Jawaher M.', location: 'Dubai, UAE', locationAr: 'دبي، الإمارات', date: '2025-04-19',
        text: "Perfect under any abaya — opaque, breathable, and the fabric doesn't ride up during the day.",
        textAr: 'مثالية لترتديها تحت أي عباية — غير شفافة ومريحة والقماش لا يتحرك أو يرتفع خلال اليوم.' },
      { rating: 5, name: 'Buthaina N.', location: 'Sharjah, UAE', locationAr: 'الشارقة، الإمارات', date: '2025-06-03',
        text: 'Simple, well-made, and exactly the layer I needed. Ordered a second one in a different size for my daughter.',
        textAr: 'بسيطة ومصنوعة بجودة عالية وبالضبط الطبقة التي احتجتها. طلبت واحدة أخرى بمقاس مختلف لابنتي.' },
      { rating: 4, name: 'Sheikha F.', location: 'Al Ain, UAE', locationAr: 'العين، الإمارات', date: '2025-07-27',
        text: 'Great everyday basic. The cap sleeve is a nice touch, just wish it came in more colours.',
        textAr: 'قطعة أساسية رائعة للارتداء اليومي. الكم القصير لمسة جميلة، أتمنى فقط توفرها بألوان أكثر.' },
    ] },
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
