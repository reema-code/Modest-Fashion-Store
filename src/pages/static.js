import { sizeGuide } from '../data.js'
import { breadcrumbs } from '../components.js'
import { formatPrice } from '../utils.js'

export const sizeGuidePage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: 'الرئيسية', href: '#/' }, { label: 'دليل المقاسات' }])}
    <p class="eyebrow">القَصّة والقياسات</p>
    <h1>دليل المقاسات</h1>
  </section>
  <section class="static-content">
    <p>صُممت قطع سيرين بقَصّة مريحة ومدروسة. القياسات أدناه بالسنتيمتر ومأخوذة على الجسم. إن كنتِ بين مقاسين، ننصح بالمقاس الأكبر لانسيابية أريح.</p>
    <table class="size-table">
      <thead><tr><th>المقاس</th><th>الصدر</th><th>الخصر</th><th>الورك</th></tr></thead>
      <tbody>${sizeGuide.map((r) => `<tr><td>${r.size}</td><td>${r.bust}</td><td>${r.waist}</td><td>${r.hip}</td></tr>`).join('')}</tbody>
    </table>
    <p>ما زلتِ مترددة؟ تواصلي مع فريق التنسيق عبر <a href="mailto:hello@serein.com">hello@serein.com</a> لنساعدكِ في اختيار المقاس.</p>
  </section>`

export const shippingReturnsPage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: 'الرئيسية', href: '#/' }, { label: 'الشحن والاسترجاع' }])}
    <p class="eyebrow">التوصيل والاسترجاع</p>
    <h1>الشحن والاسترجاع</h1>
  </section>
  <section class="static-content">
    <h3>الشحن</h3>
    <p>توصيل مجاني داخل الإمارات للطلبات فوق ${formatPrice(300)}، ورسوم ثابتة بقيمة ${formatPrice(25)} لما دون ذلك.</p>
    <ul>
      <li>الإمارات — من يومين إلى ٤ أيام عمل</li>
      <li>دول الخليج — من ٤ إلى ٧ أيام عمل</li>
      <li>دولياً — من ٧ إلى ١٢ يوم عمل</li>
    </ul>
    <h3>الاسترجاع</h3>
    <p>يمكن استرجاع القطع غير المستخدمة وغير المغسولة مع بطاقاتها خلال ١٤ يوماً من الاستلام. قطع المناسبات والطلبات الخاصة نهائية إلا في حال وجود عيب.</p>
    <p>لبدء الاسترجاع، أرسلي رقم طلبكِ إلى <a href="mailto:returns@serein.com">returns@serein.com</a>.</p>
  </section>`

export const contactPage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: 'الرئيسية', href: '#/' }, { label: 'تواصلي معنا' }])}
    <p class="eyebrow">نحن هنا لمساعدتكِ</p>
    <h1>تواصلي معنا</h1>
  </section>
  <section class="static-content">
    <p>لنصائح التنسيق أو الاستفسار عن طلبكِ، يجيبكِ فريقنا عادةً خلال يوم عمل واحد.</p>
    <p><b>البريد الإلكتروني</b><br><a href="mailto:hello@serein.com">hello@serein.com</a></p>
    <p><b>الاستوديو</b><br>القوز، دبي، الإمارات العربية المتحدة</p>
  </section>`
