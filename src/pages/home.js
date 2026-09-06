import { collections, products, testimonials, heroImage, campaignImage, galleryInteriorImage, img } from '../data.js'
import { icon, formatPrice } from '../utils.js'
import { productCard } from './product-card.js'

const byBadge = (badge, n) => products.filter((p) => p.badge === badge).slice(0, n)

const featureSection = (opts) => `
  <section class="feature-split ${opts.reverse ? 'reverse' : ''}" style="--feature-image:url('${opts.image}')">
    <div class="feature-image" role="img" aria-label="${opts.alt}"></div>
    <div class="feature-copy">
      <p class="eyebrow">${opts.eyebrow}</p>
      <h2>${opts.title}</h2>
      <p>${opts.body}</p>
      <a class="cta dark" href="#/collections/${opts.slug}">تسوّقي ${opts.name} ${icon('arrow')}</a>
    </div>
  </section>`

export const homePage = () => `
  <section class="hero" id="hero" style="--hero-image:url('${heroImage}')">
    <div class="hero-copy">
      <p class="eyebrow">مختارات أواخر الصيف &middot; ٢٠٢٦</p>
      <h1>أناقةٌ،<br><em>باحتشام.</em></h1>
      <p>قصّات مدروسة، خامات طبيعية، وثقة هادئة — صُممت لترافق إيقاعكِ في دبي وما بعدها.</p>
      <a class="cta light" href="#/collections">اكتشفي المجموعة ${icon('arrow')}</a>
    </div>
    <span class="vertical-note">سيرين / المجموعة ٠٤</span>
  </section>

  <section class="marquee" aria-label="Brand values">
    <div>قَصّات مدروسة <i>&#10022;</i> خامات طبيعية <i>&#10022;</i> صُنعت لتدوم <i>&#10022;</i> احتشام بلا تنازل <i>&#10022;</i> قَصّات مدروسة <i>&#10022;</i> خامات طبيعية <i>&#10022;</i> صُنعت لتدوم <i>&#10022;</i> احتشام بلا تنازل</div>
  </section>

  <section class="product-section" id="new">
    <div class="section-head">
      <div><p class="eyebrow">وصل حديثاً</p><h2>أحدث الإطلالات</h2></div>
      <a href="#/collections">تسوّقي كل القطع ${icon('arrow')}</a>
    </div>
    <div class="product-grid">${byBadge('جديد', 4).map(productCard).join('')}</div>
  </section>

  <section class="collection-grid-section">
    <div class="section-head center">
      <p class="eyebrow">اكتشفي</p>
      <h2>تسوّقي حسب المجموعة</h2>
    </div>
    <div class="collection-grid">
      ${collections.map((c) => `
        <a class="collection-tile" href="#/collections/${c.slug}" style="--tile-image:url('${img(c.cover, { w: 900, h: 1150 })}')">
          <span class="collection-tile-inner">
            <em>${c.name}</em>
            <small>تسوّقي الآن ${icon('arrow')}</small>
          </span>
        </a>`).join('')}
    </div>
  </section>

  <section class="campaign" style="--campaign-image:url('${campaignImage}')">
    <div class="campaign-copy">
      <p class="eyebrow">المجموعة ٠٤ &middot; حكاية الخريف</p>
      <h2>ثقةٌ هادئة<br>تُشبهكِ.</h2>
      <p>من قلب دبي المعاصرة، نقدّم موسماً تنساب فيه الخامات مع حركتكِ — تفصيل متقن، ملمس طبيعي، واحتشام لا يساوم على الأناقة.</p>
      <a class="cta light" href="#/collections">شاهدي الحكاية ${icon('arrow')}</a>
    </div>
  </section>

  <section class="product-section" id="bestsellers">
    <div class="section-head">
      <div><p class="eyebrow">اختيارات مجتمع سيرين</p><h2>الأكثر محبة</h2></div>
      <a href="#/collections">تسوّقي كل القطع ${icon('arrow')}</a>
    </div>
    <div class="product-grid">${byBadge('الأكثر طلباً', 4).map(productCard).join('')}</div>
  </section>

  ${featureSection({
    eyebrow: 'أناقة العمل',
    title: 'حضورٌ يسبق خطاكِ.',
    body: 'سترات محددة القَصّة، سراويل واسعة وانسيابية، وتفاصيل محتشمة تمنحكِ حضوراً واثقاً من أول اجتماع إلى آخر اليوم.',
    image: img('nW4MXHvqut8', { w: 1100, h: 1350 }),
    alt: 'Woman in tailored modest workwear',
    slug: 'workwear', name: 'workwear',
  })}

  ${featureSection({
    eyebrow: 'عبايات',
    title: 'انسيابٌ محسوب في كل خطوة.',
    body: 'كريب معتم، تفاصيل هادئة، وانسيابية تتحرك معكِ — عبايات صُممت لتعيشي بها، لا لترتديها فحسب.',
    image: img('J8HhIB6tKRA', { w: 1100, h: 1350 }),
    alt: 'Woman in an elegant black abaya', reverse: true,
    slug: 'abayas', name: 'abayas',
  })}

  ${featureSection({
    eyebrow: 'ملابس رياضية',
    title: 'احتشامٌ يتحرّك بطاقتكِ.',
    body: 'ملابس رياضية بتغطية كاملة ونسيج يتنفس ويتمدد في كل اتجاه — للتمرين، للمشي، ولكل ما يحمله يومكِ.',
    image: img('4MJPRwG2OYY', { w: 1100, h: 1350 }),
    alt: 'Woman in modest activewear stretching outdoors',
    slug: 'sportswear', name: 'sportswear',
  })}

  ${featureSection({
    eyebrow: 'المناسبات والقفاطين',
    title: 'تفاصيل راقية للحظات التي تبقى.',
    body: 'من احتفالات الحدائق إلى أمسيات الغروب — قطع مناسبات مشغولة بعناية وقفاطين تستلهم إرثنا بأناقة تلائم الأجواء الدافئة.',
    image: img('BGQDXS73ktE', { w: 1100, h: 1350 }),
    alt: 'Woman in an elegant kaftan', reverse: true,
    slug: 'occasion', name: 'occasion',
  })}

  <section class="manifesto" id="story" style="--manifesto-image:url('${galleryInteriorImage}')">
    <div class="manifesto-inner">
      <p class="eyebrow">فلسفتنا</p>
      <h2>ما ترتدينه يجب<br><em>أن يُشبهكِ.</em></h2>
      <p>نصمّم بوعي لنوازن بين الاحتشام، حرية الحركة، والأناقة السهلة. كل قطعة خُلقت لتتجاوز موسماً واحداً وتصبح جزءاً من حكايتكِ.</p>
      <div class="values">
        <span>01 <b>احتشام مدروس</b></span>
        <span>02 <b>جودة تدوم</b></span>
        <span>03 <b>خيارات واعية</b></span>
      </div>
    </div>
  </section>

  <section class="testimonials">
    <div class="section-head center"><p class="eyebrow">كما روتها هي</p><h2>قطع تُرتدى، تُحب، وتُعاش</h2></div>
    <div class="testimonial-grid">
      ${testimonials.map((t) => `
        <figure class="testimonial-card">
          <blockquote>&ldquo;${t.quote}&rdquo;</blockquote>
          <figcaption><img src="${t.avatar}" alt="" loading="lazy"><span><b>${t.name}</b>${t.location}</span></figcaption>
        </figure>`).join('')}
    </div>
  </section>

  <section class="newsletter">
    <p class="eyebrow">رسائل سيرين</p>
    <h2>رسائل قليلة، وإلهامٌ أكثر.</h2>
    <p>مجموعات جديدة، حكايات هادفة، ولمسة إلهام — تصل إلى بريدكِ من حين لآخر.</p>
    <form data-newsletter>
      <input type="email" required placeholder="بريدكِ الإلكتروني" aria-label="البريد الإلكتروني">
      <button type="submit">انضمّي إلينا ${icon('arrow')}</button>
    </form>
    <small>بانضمامكِ، أنتِ توافقين على سياسة الخصوصية.</small>
  </section>
`
