import { sizeGuide } from '../data.js'
import { breadcrumbs } from '../components.js'
import { formatPrice } from '../utils.js'
import { t } from '../i18n.js'

export const sizeGuidePage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: t('Home'), href: '#/' }, { label: t('Size guide') }])}
    <p class="eyebrow">${t('Fit & measurements')}</p>
    <h1>${t('Size guide')}</h1>
  </section>
  <section class="static-content">
    <p>${t('All Bariz pieces are cut for a relaxed, considered fit. Measurements below are in centimetres — taken against the body, not the garment. If you fall between two sizes, we recommend sizing up for an easier drape.')}</p>
    <table class="size-table">
      <thead><tr><th>${t('Size')}</th><th>${t('Bust')}</th><th>${t('Waist')}</th><th>${t('Hip')}</th></tr></thead>
      <tbody>${sizeGuide.map((r) => `<tr><td>${r.size}</td><td>${r.bust}</td><td>${r.waist}</td><td>${r.hip}</td></tr>`).join('')}</tbody>
    </table>
    <p>${t('Still unsure? Reach out to our styling team at')} <a href="mailto:hello@bariz.com">hello@bariz.com</a> ${t('for a personal fit recommendation.')}</p>
  </section>`

export const shippingReturnsPage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: t('Home'), href: '#/' }, { label: t('Shipping & returns') }])}
    <p class="eyebrow">${t('Delivery & returns')}</p>
    <h1>${t('Shipping & returns')}</h1>
  </section>
  <section class="static-content">
    <h3>${t('Shipping')}</h3>
    <p>${t('Complimentary shipping across the UAE on all orders over')} ${formatPrice(300)}. ${t('Orders below this threshold ship for a flat rate of')} ${formatPrice(25)}.</p>
    <ul>
      <li>${t('UAE — 2–4 business days')}</li>
      <li>${t('GCC (Saudi Arabia, Qatar, Kuwait, Bahrain, Oman) — 4–7 business days')}</li>
      <li>${t('International — 7–12 business days')}</li>
    </ul>
    <h3>${t('Returns')}</h3>
    <p>${t('Unworn, unwashed items with tags attached may be returned within 14 days of delivery for a full refund. Occasion and made-to-order pieces are final sale unless faulty.')}</p>
    <p>${t('To start a return, email')} <a href="mailto:returns@bariz.com">returns@bariz.com</a> ${t('with your order number.')}</p>
  </section>`

export const contactPage = () => `
  <section class="page-header">
    ${breadcrumbs([{ label: t('Home'), href: '#/' }, { label: t('Contact') }])}
    <p class="eyebrow">${t("We're here to help")}</p>
    <h1>${t('Contact us')}</h1>
  </section>
  <section class="static-content">
    <p>${t('For styling advice, order questions, or anything else — our team typically responds within one business day.')}</p>
    <p><b>${t('Email')}</b><br><a href="mailto:hello@bariz.com">hello@bariz.com</a></p>
    <p><b>${t('Studio')}</b><br>${t('Al Quoz, Dubai, United Arab Emirates')}</p>
  </section>`
