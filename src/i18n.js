const LANG_KEY = 'mughayir_lang'

export const getLang = () => {
  try { return localStorage.getItem(LANG_KEY) || 'en' } catch { return 'en' }
}

export const isRTL = () => getLang() === 'ar'

export const applyDir = () => {
  document.documentElement.lang = getLang()
  document.documentElement.dir = isRTL() ? 'rtl' : 'ltr'
}

export const setLang = (lang) => {
  try { localStorage.setItem(LANG_KEY, lang) } catch { /* storage unavailable */ }
  applyDir()
}

// Pick the Arabic string when in Arabic mode, falling back to English if none was given.
export const L = (en, ar) => (isRTL() && ar ? ar : en)

// Generic UI-chrome dictionary, keyed by the English source string.
const dict = {
  // Header / nav
  'New in': 'وصل حديثاً',
  'Shop all': 'تسوقي الكل',
  'Our story': 'قصتنا',

  // Announcement
  'Complimentary shipping across the UAE on orders over': 'شحن مجاني داخل الإمارات للطلبات فوق',

  // Footer
  'Modest, by design. Clothing made with intention, for the way you actually live — from Dubai to the world.':
    'التواضع بتصميم مدروس. ملابس صُنعت بنيّة، لتناسب أسلوب حياتكِ الفعلي — من دبي إلى العالم.',
  'Shop': 'تسوقي',
  'Information': 'معلومات',
  'Shipping & returns': 'الشحن والإرجاع',
  'Size guide': 'دليل المقاسات',
  'Contact': 'تواصلي معنا',
  'The Mughayir letter': 'نشرة مغاير',
  'New collections and considered stories, delivered occasionally.': 'مجموعات جديدة وقصص مختارة، تصلكِ بين الحين والآخر.',
  'Your email address': 'بريدكِ الإلكتروني',
  'Privacy': 'الخصوصية',
  'Terms': 'الشروط',

  // Cart drawer
  'Your bag': 'حقيبتكِ',
  'Subtotal': 'المجموع الفرعي',
  'Shipping and taxes calculated at checkout.': 'يتم احتساب الشحن والضرائب عند الدفع.',
  'Checkout': 'إتمام الشراء',
  'Added': 'تمت إضافة',
  'to your bag': 'إلى حقيبتكِ',
  'Your bag is waiting.': 'حقيبتكِ بانتظاركِ.',
  'Explore the collection': 'استكشفي المجموعة',
  'This is a demo storefront — checkout is not connected.': 'هذا متجر تجريبي — الدفع غير مفعّل حالياً.',
  'Welcome to Mughayir. Thank you for joining us.': 'أهلاً بكِ في مغاير. شكراً لانضمامكِ إلينا.',
  'Size': 'المقاس',
  'Custom': 'مقاس مخصص',

  // Home page
  'The late summer edit': 'مجموعة أواخر الصيف',
  'Modest,': 'التواضع،',
  'by design.': 'بتصميم مدروس.',
  "Fluid silhouettes and natural fabric, cut with quiet intention — for the way you actually move through your day, in Dubai and beyond.":
    'خطوط انسيابية وأقمشة طبيعية، مصممة بنيّة هادئة — لتناسب أسلوب يومكِ الفعلي، في دبي وخارجها.',
  'Explore the collection ': 'استكشفي المجموعة',
  'FLUID SILHOUETTES': 'خطوط انسيابية',
  'NATURAL FABRICS': 'أقمشة طبيعية',
  'BUILT TO LAST': 'مصنوعة لتدوم',
  'FULL COVERAGE, NEVER A COMPROMISE': 'تغطية كاملة، لا مساومة فيها',
  'Just arrived': 'وصل حديثاً',
  'New arrivals': 'وصلنا الجديد',
  'Shop all pieces': 'تسوقي كل القطع',
  'Explore': 'استكشفي',
  'Shop by collection': 'تسوقي حسب المجموعة',
  'Shop now': 'تسوقي الآن',
  'Collection 04 · Autumn campaign': 'المجموعة 04 · حملة الخريف',
  'Dressed with': 'ترتدين',
  'intention.': 'بوعي.',
  "Shot across Dubai's most considered interiors, this season is about fabric that moves the way you do: fluid tailoring, natural texture, and coverage that never once feels like settling.":
    'صُوّرت هذه المجموعة بين أرقى ديكورات دبي المدروسة، وهذا الموسم يتمحور حول أقمشة تتحرك معكِ: خياطة انسيابية وملمس طبيعي وتغطية لا تشعركِ يوماً بالتنازل.',
  'View the campaign': 'شاهدي الحملة',
  'Loved by our community': 'محبوبة من مجتمعنا',
  'Best sellers': 'الأكثر مبيعاً',
  'Shop ': 'تسوقي ',
  'Abayas': 'عبايات',
  'abayas': 'العبايات',
  'Our philosophy': 'فلسفتنا',
  'Clothing should': 'الملابس يجب أن',
  'feel like you.': 'تشبهكِ.',
  "We design with intention — balancing coverage, movement, and ease that doesn't try too hard. Each piece is made to outlast a season and become part of how you actually get dressed.":
    'نصمم بنيّة — نوازن بين التغطية والحركة وراحة لا تحاول إثبات نفسها. كل قطعة صُنعت لتدوم أكثر من موسم وتصبح جزءاً من طريقتكِ الفعلية في ارتداء ملابسكِ.',
  'Thoughtful coverage': 'تغطية مدروسة',
  'Enduring quality': 'جودة تدوم',
  'Conscious choices': 'خيارات واعية',
  'In her words': 'بكلماتها',
  'Worn, loved, lived in': 'ارتُديت، أُحبت، عِيشت',
  'An inbox worth opening.': 'بريد إلكتروني يستحق الفتح.',
  "New collections, a few honest stories, and nothing you didn't ask for — sent occasionally.":
    'مجموعات جديدة وبضع قصص صادقة، ولا شيء لم تطلبيه — تصل بين الحين والآخر.',
  'Join us': 'انضمي إلينا',
  'By subscribing, you agree to our privacy policy.': 'بالاشتراك، أنتِ توافقين على سياسة الخصوصية الخاصة بنا.',

  // Collections
  'The full edit': 'المجموعة الكاملة',
  'All collections': 'كل المجموعات',
  'piece': 'قطعة',
  'pieces': 'قطع',
  'Featured': 'مُختارة',
  'Price: Low to high': 'السعر: من الأقل إلى الأعلى',
  'Price: High to low': 'السعر: من الأعلى إلى الأقل',

  // Product page
  'Colour': 'اللون',
  'Know your size': 'اعرفي مقاسك',
  'Ready sizes': 'المقاسات الجاهزة',
  'Custom to my measurements': 'مفصّلة على مقاسي',
  'Length (cm)': 'الطول (سم)',
  'Bust (cm)': 'الصدر (سم)',
  'Shoulder (cm)': 'الكتف (سم)',
  'Sleeve (cm)': 'الكم (سم)',
  'Notes for our tailor (optional)': 'ملاحظة للخياط (اختياري)',
  "e.g. I'd like the length a little longer": 'مثال: أرغب أن يكون الطول أطول قليلاً',
  'Made to your measurements — please allow 2–3 extra days to prepare this piece.':
    'مفصّلة على مقاساتكِ — يُرجى احتساب 2-3 أيام إضافية لتحضير القطعة.',
  'Add to bag': 'أضيفي إلى الحقيبة',
  'Buy now': 'اشتري الآن',
  'In stock — ships within 24 hours': 'متوفر — يُشحن خلال 24 ساعة',
  'Description': 'الوصف',
  'Fabric & fit': 'القماش والمقاس',
  'Fabric:': 'القماش:',
  'Fit:': 'المقاس:',
  'Care instructions': 'تعليمات العناية',
  'Delivery & returns': 'التوصيل والإرجاع',
  'Free shipping across the UAE on orders over': 'شحن مجاني داخل الإمارات للطلبات فوق',
  'Delivered within 2–4 business days in the UAE, 4–7 business days across the GCC.':
    'يتم التوصيل خلال 2-4 أيام عمل داخل الإمارات، و4-7 أيام عمل في دول الخليج.',
  'Unworn items may be returned within 14 days for a full refund. See our': 'يمكن إرجاع القطع غير المستخدمة خلال 14 يوماً لاسترداد كامل المبلغ. راجعي',
  'shipping & returns policy': 'سياسة الشحن والإرجاع',
  'Complete the look': 'أكملي الإطلالة',
  'You may also like': 'قد يعجبكِ أيضاً',

  // Reviews
  'Customer reviews': 'آراء العميلات',
  'Reviews': 'التقييمات',
  'review': 'تقييم',
  'reviews': 'تقييمات',
  'Based on': 'استناداً إلى',
  'out of 5': 'من 5',
  'No reviews yet — be the first to write one.': 'لا توجد تقييمات بعد — كوني أول من يكتب تقييماً.',
  'Write a review': 'اكتبي تقييماً',
  'Your name': 'اسمكِ',
  'Rating': 'التقييم',
  'stars': 'نجوم',
  'Your review': 'تقييمكِ',
  'Tell us what you think of this piece': 'أخبرينا برأيكِ في هذه القطعة',
  'Submit review': 'إرسال التقييم',
  'Thank you for your review!': 'شكراً لتقييمكِ!',
  'Verified purchase': 'عملية شراء موثقة',

  // Know-your-size modal
  "Enter your height and we'll suggest the best fit from our size guide.": 'أدخلي طولكِ وسنقترح عليكِ المقاس الأنسب من دليل مقاساتنا.',
  'Height (cm)': 'الطول (سم)',
  'Show my size': 'اعرضي مقاسي',
  'Your suggested size': 'المقاس المقترح لكِ',
  'Choose this size': 'اختاري هذا المقاس',

  // Size-guide modal
  "All measurements in centimetres. For an easier drape, we recommend sizing up if you're between sizes.":
    'جميع المقاسات بالسنتيمتر. لسقطة أسهل، ننصح باختيار المقاس الأكبر إذا كنتِ بين مقاسين.',
  'Bust': 'الصدر',
  'Waist': 'الخصر',
  'Hip': 'الورك',

  // Static: size guide page
  'Fit & measurements': 'المقاس والقياسات',
  'All Mughayir pieces are cut for a relaxed, considered fit. Measurements below are in centimetres — taken against the body, not the garment. If you fall between two sizes, we recommend sizing up for an easier drape.':
    'جميع قطع مغاير مصممة بقصة مريحة ومدروسة. المقاسات أدناه بالسنتيمتر — مأخوذة على الجسم وليس القطعة. إذا كنتِ بين مقاسين، ننصح باختيار المقاس الأكبر لسقطة أسهل.',
  'Still unsure? Reach out to our styling team at': 'ما زلتِ غير متأكدة؟ تواصلي مع فريق التنسيق لدينا عبر',
  'for a personal fit recommendation.': 'للحصول على توصية مقاس شخصية.',

  // Static: shipping & returns
  'Delivery & returns ': 'التوصيل والإرجاع',
  'Shipping': 'الشحن',
  'Complimentary shipping across the UAE on all orders over': 'شحن مجاني داخل الإمارات على جميع الطلبات فوق',
  'Orders below this threshold ship for a flat rate of': 'الطلبات الأقل من هذا الحد تُشحن برسوم ثابتة قدرها',
  'UAE — 2–4 business days': 'الإمارات — 2-4 أيام عمل',
  'GCC (Saudi Arabia, Qatar, Kuwait, Bahrain, Oman) — 4–7 business days': 'دول الخليج (السعودية، قطر، الكويت، البحرين، عُمان) — 4-7 أيام عمل',
  'International — 7–12 business days': 'دولياً — 7-12 يوم عمل',
  'Returns': 'الإرجاع',
  'Unworn, unwashed items with tags attached may be returned within 14 days of delivery for a full refund. Occasion and made-to-order pieces are final sale unless faulty.':
    'يمكن إرجاع القطع غير المستخدمة وغير المغسولة مع بقاء البطاقات خلال 14 يوماً من الاستلام لاسترداد كامل المبلغ. قطع المناسبات والقطع المفصلة حسب الطلب نهائية البيع ما لم يكن بها عيب.',
  'To start a return, email': 'لبدء عملية الإرجاع، راسلينا عبر البريد الإلكتروني',
  'with your order number.': 'مع ذكر رقم طلبكِ.',

  // Static: contact
  "We're here to help": 'نحن هنا لمساعدتكِ',
  'Contact us': 'تواصلي معنا',
  'For styling advice, order questions, or anything else — our team typically responds within one business day.':
    'لنصائح التنسيق أو استفسارات الطلبات أو أي شيء آخر — يرد فريقنا عادةً خلال يوم عمل واحد.',
  'Email': 'البريد الإلكتروني',
  'Studio': 'الاستوديو',
  'Al Quoz, Dubai, United Arab Emirates': 'القوز، دبي، الإمارات العربية المتحدة',

  // 404 / breadcrumbs
  'Home': 'الرئيسية',
  "We couldn't find that page": 'لم نتمكن من العثور على هذه الصفحة',
  'Return home': 'العودة للرئيسية',

  // Home page feature sections
  'Printed Mokhawar, built for your every day.': 'مخاور مطبوعة، مصممة ليومكِ.',
  'Bold prints on fluid, fully opaque fabric with hand-finished beading — made for warm days, easy movement, and a little extra attention.':
    'طبعات جريئة على قماش مرن غير شفاف بالكامل مع تطريز يدوي بالخرز — مصممة للأيام الدافئة وسهولة الحركة ولمسة تلفت الأنظار.',
  'Fluid silhouettes, drape with intention.': 'خطوط انسيابية، سقطة واعية.',
  'Opaque crepe with quiet detailing and a fall that actually moves — our abaya edit is built to be lived in, not just worn.':
    'كريب غير شفاف بتفاصيل هادئة وسقطة تتحرك فعلاً — تشكيلة العبايات لدينا مصممة لتُعاش لا لتُرتدى فقط.',

  // Home page image alt text
  'Close-up of beaded cuff embroidery on a printed Mokhawar piece': 'لقطة مقربة لتطريز الخرز على كم قطعة مخاور مطبوعة',
  'Woman in an elegant modest abaya': 'امرأة ترتدي عباية أنيقة ومحتشمة',

  // Colours
  'Teal': 'فيروزي',
  'Green': 'أخضر',
  'Sunset': 'غروب',
  'Turquoise': 'تركواز',
  'Sky Blue': 'أزرق سماوي',
  'Navy': 'كحلي',
  'Chocolate': 'بني شوكولاتة',
  'Espresso': 'بني غامق',
  'Black': 'أسود',
  'Ivory': 'عاجي',
  'Olive': 'زيتوني',

  // Badges
  'New': 'جديد',
  'Bestseller': 'الأكثر مبيعاً',

  // Product card
  'Add to cart': 'أضيفي إلى السلة',
  'Save': 'حفظ',

  // Gallery view labels
  'Front': 'أمامي',
  'Side': 'جانبي',
  'Detail': 'تفاصيل',
  'Styled': 'مُنسّق',
  'Cuff Detail': 'تفاصيل الكم',
  'Neckline Detail': 'تفاصيل الرقبة',
  'View': 'عرض',
  'e.g.': 'مثال:',
}

export const t = (s) => (isRTL() ? (dict[s] ?? s) : s)
