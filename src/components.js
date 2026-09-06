import { collections } from './data.js'
import { icon, formatPrice, cartStore } from './utils.js'

export const announcementBar = () => `
  <div class="announcement">
    <p>توصيل مجاني داخل الإمارات للطلبات فوق ${formatPrice(300)}</p>
    <button class="announcement-close" aria-label="إغلاق الإعلان">${icon('close')}</button>
  </div>`

export const header = () => `
  <header class="site-header" data-header>
    <button class="menu-toggle" aria-label="فتح القائمة" aria-expanded="false"><span></span><span></span></button>
    <a class="logo" href="#/">SEREIN<span>&reg;</span></a>
    <nav class="main-nav" data-nav>
      <div class="nav-drop">
        <a href="#/">وصل حديثاً</a>
        <a href="#/collections">تسوّقي الكل</a>
        ${collections.map((c) => `<a href="#/collections/${c.slug}">${c.name}</a>`).join('')}
        <a href="#/story">حكايتنا</a>
      </div>
    </nav>
    <div class="actions">
      <button class="search-btn" aria-label="البحث">${icon('search')}</button>
      <button class="wishlist-btn" aria-label="المفضّلة">${icon('heart')}</button>
      <button class="bag-btn" aria-label="حقيبة التسوّق">${icon('bag')}<b data-cart-count>${cartStore.count()}</b></button>
    </div>
  </header>`

export const footer = () => `
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="logo" href="#/">SEREIN<span>&reg;</span></a>
        <p>أناقةٌ مصمّمة باحتشام. قطع مدروسة للمرأة التي تختار حضورها — من دبي إلى العالم.</p>
      </div>
      <div class="footer-col">
        <h4>تسوّقي</h4>
        ${collections.map((c) => `<a href="#/collections/${c.slug}">${c.name}</a>`).join('')}
      </div>
      <div class="footer-col">
        <h4>المعلومات</h4>
        <a href="#/story">حكايتنا</a>
        <a href="#/shipping-returns">الشحن والاسترجاع</a>
        <a href="#/size-guide">دليل المقاسات</a>
        <a href="#/contact">تواصلي معنا</a>
      </div>
      <div class="footer-col newsletter-col">
        <h4>رسائل سيرين</h4>
        <p>مجموعات جديدة وحكايات ملهمة، تصل إلى بريدكِ من حين لآخر.</p>
        <form class="footer-newsletter" data-newsletter>
          <input type="email" required placeholder="بريدكِ الإلكتروني" aria-label="البريد الإلكتروني">
          <button type="submit" aria-label="اشتراك">${icon('arrow')}</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright">&copy; 2026 Serein Studio</p>
      <div class="social"><a href="#">إنستغرام</a><a href="#">بنترست</a><a href="#">تيك توك</a></div>
      <p class="legal">الخصوصية &nbsp; الشروط</p>
    </div>
  </footer>`

export const cartDrawer = () => `
  <div class="cart" data-cart aria-hidden="true">
    <div class="cart-top">
      <h2>حقيبتكِ <span data-cart-count>${cartStore.count()}</span></h2>
      <button class="cart-close" aria-label="إغلاق الحقيبة">${icon('close')}</button>
    </div>
    <div class="cart-items" data-cart-items></div>
    <div class="cart-total" data-cart-total>
      <span>المجموع الفرعي</span><strong data-cart-subtotal>${formatPrice(cartStore.subtotal())}</strong>
      <p class="cart-note">يُحتسب الشحن والضرائب عند إتمام الطلب.</p>
      <button class="checkout-btn">إتمام الطلب</button>
    </div>
  </div>
  <div class="overlay" data-overlay></div>
  <div class="toast" role="status" data-toast>تمت الإضافة إلى حقيبتكِ</div>`

export const cartItemsMarkup = (items) => items.length
  ? items.map((p, i) => `
    <div class="cart-item">
      <img src="${p.image}" alt="${p.name}">
      <div class="cart-item-info">
        <h3><a href="#/product/${p.slug}">${p.name}</a></h3>
        <p>${p.color} &middot; مقاس ${p.size}</p>
        <div class="qty-stepper" data-qty-index="${i}">
          <button class="qty-minus" aria-label="تقليل الكمية">${icon('minus')}</button>
          <span>${p.qty}</span>
          <button class="qty-plus" aria-label="زيادة الكمية">${icon('plus')}</button>
        </div>
      </div>
      <div class="cart-item-end">
        <strong>${formatPrice(p.price * p.qty)}</strong>
        <button class="remove-btn" data-remove="${i}" aria-label="إزالة ${p.name}">${icon('close')}</button>
      </div>
    </div>`).join('')
  : `<p class="empty">حقيبتكِ بانتظار اختياراتكِ.<br><a href="#/collections">اكتشفي المجموعة</a></p>`

export const breadcrumbs = (parts) => `
  <nav class="breadcrumbs" aria-label="مسار التصفّح">
    ${parts.map((p, i) => i === parts.length - 1 ? `<span aria-current="page">${p.label}</span>` : `<a href="${p.href}">${p.label}</a><span class="sep">/</span>`).join('')}
  </nav>`
