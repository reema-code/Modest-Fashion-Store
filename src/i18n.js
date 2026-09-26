const LANG_KEY = 'serein_lang'

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
  'Modest, by design. Considered clothing for women who dress with intention — from Dubai to the world.':
    'التواضع بتصميم مدروس. ملابس لامرأة ترتدي بوعي ونية — من دبي إلى العالم.',
  'Shop': 'تسوقي',
  'Information': 'معلومات',
  'Shipping & returns': 'الشحن والإرجاع',
  'Size guide': 'دليل المقاسات',
  'Contact': 'تواصلي معنا',
  'The Serein letter': 'نشرة سيرين',
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
  'Welcome to Serein. Thank you for joining us.': 'أهلاً بكِ في سيرين. شكراً لانضمامكِ إلينا.',
  'Size': 'المقاس',
  'Custom': 'مقاس مخصص',

  // Home page
  'The late summer edit': 'مجموعة أواخر الصيف',
  'Modest,': 'التواضع،',
  'by design.': 'بتصميم مدروس.',
  'Considered silhouettes, natural textures, and quiet confidence — made for the way you move through Dubai and beyond.':
    'خطوط مدروسة وأقمشة طبيعية وثقة هادئة — مصممة لأسلوب حياتكِ في دبي وخارجها.',
  'Explore the collection ': 'استكشفي المجموعة',
  'CONSIDERED SILHOUETTES': 'خطوط مدروسة',
  'NATURAL FABRICS': 'أقمشة طبيعية',
  'MADE TO LAST': 'مصنوعة لتدوم',
  'FULL COVERAGE, NO COMPROMISE': 'تغطية كاملة دون مساومة',
  'Just arrived': 'وصل حديثاً',
  'New arrivals': 'وصلنا الجديد',
  'Shop all pieces': 'تسوقي كل القطع',
  'Explore': 'استكشفي',
  'Shop by collection': 'تسوقي حسب المجموعة',
  'Shop now': 'تسوقي الآن',
  'Collection 04 · Autumn campaign': 'المجموعة 04 · حملة الخريف',
  'A quieter kind': 'نوع أهدأ',
  'of confidence.': 'من الثقة.',
  "Photographed between Dubai's contemporary interiors, this season is about fabric that moves the way you do — considered tailoring, natural texture, and coverage that never feels like a compromise.":
    'صُوّرت بين ديكورات دبي العصرية، هذا الموسم يدور حول أقمشة تتحرك معكِ — خياطة مدروسة وملمس طبيعي وتغطية لا تشعركِ يوماً بالمساومة.',
  'View the campaign': 'شاهدي الحملة',
  'Loved by our community': 'محبوبة من مجتمعنا',
  'Best sellers': 'الأكثر مبيعاً',
  'Shop ': 'تسوقي ',
  'Abayas': 'عبايات',
  'abayas': 'العبايات',
  'Our philosophy': 'فلسفتنا',
  'Clothing should': 'الملابس يجب أن',
  'feel like you.': 'تشبهكِ.',
  'We design with intention — balancing coverage, movement, and a refined ease. Each piece is created to live beyond a season and become part of your story.':
    'نصمم بوعي — نوازن بين التغطية والحركة والراحة الأنيقة. كل قطعة صُممت لتدوم أكثر من موسم وتصبح جزءاً من حكايتكِ.',
  'Thoughtful coverage': 'تغطية مدروسة',
  'Enduring quality': 'جودة تدوم',
  'Conscious choices': 'خيارات واعية',
  'In her words': 'بكلماتها',
  'Worn, loved, lived in': 'ارتُديت، أُحبت، عِيشت',
  'A quieter kind of inbox.': 'بريد إلكتروني أكثر هدوءاً.',
  'New collections, thoughtful stories, and a little inspiration — delivered occasionally.':
    'مجموعات جديدة وقصص هادفة وقليل من الإلهام — تصل بين الحين والآخر.',
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
  'All Serein pieces are cut for a relaxed, considered fit. Measurements below are in centimetres — taken against the body, not the garment. If you fall between two sizes, we recommend sizing up for an easier drape.':
    'جميع قطع سيرين مصممة بقصة مريحة ومدروسة. المقاسات أدناه بالسنتيمتر — مأخوذة على الجسم وليس القطعة. إذا كنتِ بين مقاسين، ننصح باختيار المقاس الأكبر لسقطة أسهل.',
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
