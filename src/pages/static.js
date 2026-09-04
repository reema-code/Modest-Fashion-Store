import { sizeGuide } from '../data.js'
import { breadcrumbs } from '../components.js'
import { formatPrice } from '../utils.js'

export const sizeGuidePage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: 'Home', href: '#/' }, { label: 'Size guide' }])}
    <p class="eyebrow">Fit &amp; measurements</p>
    <h1>Size guide</h1>
  </section>
  <section class="static-content">
    <p>All Serein pieces are cut for a relaxed, considered fit. Measurements below are in centimetres — taken against the body, not the garment. If you fall between two sizes, we recommend sizing up for an easier drape.</p>
    <table class="size-table">
      <thead><tr><th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th></tr></thead>
      <tbody>${sizeGuide.map((r) => `<tr><td>${r.size}</td><td>${r.bust}</td><td>${r.waist}</td><td>${r.hip}</td></tr>`).join('')}</tbody>
    </table>
    <p>Still unsure? Reach out to our styling team at <a href="mailto:hello@serein.com">hello@serein.com</a> for a personal fit recommendation.</p>
  </section>`

export const shippingReturnsPage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: 'Home', href: '#/' }, { label: 'Shipping & returns' }])}
    <p class="eyebrow">Delivery &amp; returns</p>
    <h1>Shipping &amp; returns</h1>
  </section>
  <section class="static-content">
    <h3>Shipping</h3>
    <p>Complimentary shipping across the UAE on all orders over ${formatPrice(300)}. Orders below this threshold ship for a flat rate of ${formatPrice(25)}.</p>
    <ul>
      <li>UAE — 2–4 business days</li>
      <li>GCC (Saudi Arabia, Qatar, Kuwait, Bahrain, Oman) — 4–7 business days</li>
      <li>International — 7–12 business days</li>
    </ul>
    <h3>Returns</h3>
    <p>Unworn, unwashed items with tags attached may be returned within 14 days of delivery for a full refund. Occasion and made-to-order pieces are final sale unless faulty.</p>
    <p>To start a return, email <a href="mailto:returns@serein.com">returns@serein.com</a> with your order number.</p>
  </section>`

export const contactPage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: 'Home', href: '#/' }, { label: 'Contact' }])}
    <p class="eyebrow">We're here to help</p>
    <h1>Contact us</h1>
  </section>
  <section class="static-content">
    <p>For styling advice, order questions, or anything else — our team typically responds within one business day.</p>
    <p><b>Email</b><br><a href="mailto:hello@serein.com">hello@serein.com</a></p>
    <p><b>Studio</b><br>Al Quoz, Dubai, United Arab Emirates</p>
  </section>`
