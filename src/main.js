const products = [
  { id: 1, name: 'Ayla Everyday Abaya', type: 'Abayas', price: 148, color: 'Sand', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=88' },
  { id: 2, name: 'Noor Embroidered Abaya', type: 'Abayas', price: 198, color: 'Black', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=88' },
  { id: 3, name: 'Marrakech Silk Mokhawar', type: 'Mokhawar', price: 229, color: 'Emerald', image: 'https://images.unsplash.com/photo-1583391733981-8498408fbc3f?auto=format&fit=crop&w=900&q=88' },
  { id: 4, name: 'Layali Embroidered Mokhawar', type: 'Mokhawar', price: 249, color: 'Burgundy', image: 'https://images.unsplash.com/photo-1583391733975-0e8c7dd14d6b?auto=format&fit=crop&w=900&q=88' },
  { id: 5, name: 'Atlas Evening Kaftan', type: 'Kaftan', price: 295, color: 'Ivory Gold', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=88' },
  { id: 6, name: 'Zahra Celebration Kaftan', type: 'Kaftan', price: 325, color: 'Deep Green', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=88' },
  { id: 7, name: 'Safa Tailored Modest Set', type: 'Workwear', price: 178, color: 'Stone', image: 'https://images.unsplash.com/photo-1583391733981-8498408fbc3f?auto=format&fit=crop&w=900&q=88' },
  { id: 8, name: 'Amal Office Abaya', type: 'Workwear', price: 189, color: 'Espresso', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=88' },
  { id: 9, name: 'Nahla Modest Active Set', type: 'Sportswear', price: 116, color: 'Olive', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=88' },
  { id: 10, name: 'Eid Pearl Abaya', type: 'Occasion', price: 268, color: 'Pearl', image: 'https://images.unsplash.com/photo-1583391733975-0e8c7dd14d6b?auto=format&fit=crop&w=900&q=88' },
  { id: 11, name: 'Layla Modal Hijab', type: 'Hijabs', price: 34, color: 'Fig', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=88' },
  { id: 12, name: 'Rima Chiffon Hijab', type: 'Hijabs', price: 29, color: 'Oat', image: 'https://images.unsplash.com/photo-1583391733981-8498408fbc3f?auto=format&fit=crop&w=900&q=88' },
]

const icon = (name) => ({
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  bag: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>'
})[name]

const categories = [
  ['Mokhawar','Signature Gulf elegance','category-mokhawar'],
  ['Kaftan','Moroccan occasion dressing','category-kaftan'],
  ['Abayas','Everyday to elevated','category-abaya'],
  ['Workwear','Refined office modesty','category-workwear'],
  ['Sportswear','Move with confidence','category-sport'],
  ['Occasion','Eid, weddings & evenings','category-occasion'],
]

document.querySelector('#app').innerHTML = `
  <div class="announcement">Complimentary UAE delivery on orders over AED 500 <button aria-label="Close announcement">×</button></div>
  <header>
    <button class="menu" aria-label="Open menu"><span></span><span></span></button>
    <a class="logo" href="#">MOKHAWAR<span>®</span></a>
    <nav><a href="#new">New In</a><a href="#collections">Collections</a><a href="#shop">Shop</a><a href="#occasion">Occasion</a><a href="#story">Our Story</a></nav>
    <div class="actions"><button class="search-btn" aria-label="Search">${icon('search')}</button><button class="bag-btn" aria-label="Shopping bag">${icon('bag')}<b>0</b></button></div>
  </header>

  <main>
    <section class="hero" id="new">
      <div class="hero-copy">
        <p class="eyebrow">The Modest Wardrobe · Dubai 2026</p>
        <h1>Elegance,<br><em>with coverage.</em></h1>
        <p>Abayas, Mokhawar, Moroccan kaftans and refined modest essentials — curated for work, movement, Eid and every celebration in between.</p>
        <a class="cta light" href="#collections">Explore collections ${icon('arrow')}</a>
      </div>
      <div class="hero-image" role="img" aria-label="Modest fashion model wearing a flowing abaya"></div>
      <span class="vertical-note">MOKHAWAR / MODEST HOUSE</span>
    </section>

    <section class="marquee"><div>MOKHAWAR <i>✦</i> ABAYAS <i>✦</i> MOROCCAN KAFTAN <i>✦</i> MODEST WORKWEAR <i>✦</i> OCCASION <i>✦</i> MOKHAWAR <i>✦</i> ABAYAS</div></section>

    <section class="shop-intro" id="collections">
      <p class="eyebrow">Shop by collection</p>
      <h2>A wardrobe for every<br><em>part of your life.</em></h2>
      <div class="category-grid">
        ${categories.map((c,i)=>`<a href="#shop" data-filter="${c[0]}" class="category ${c[2]}"><span>0${i+1} / ${c[1]}</span><h3>${c[0]}</h3><b>Shop collection ${icon('arrow')}</b></a>`).join('')}
      </div>
      <div class="secondary-collections">
        <a href="#shop" data-filter="Hijabs"><span>Hijabs & Accessories</span>${icon('arrow')}</a>
        <a href="#shop"><span>New In</span>${icon('arrow')}</a>
        <a href="#shop"><span>Best Sellers</span>${icon('arrow')}</a>
      </div>
    </section>

    <section class="featured" id="shop">
      <div class="section-head"><div><p class="eyebrow">Curated now</p><h2>Signature pieces</h2></div><a href="#shop">View all ${icon('arrow')}</a></div>
      <div class="filters"><button class="active">All</button><button>Mokhawar</button><button>Kaftan</button><button>Abayas</button><button>Workwear</button><button>Sportswear</button><button>Occasion</button><button>Hijabs</button></div>
      <div class="product-grid">${products.map((p, i) => `
        <article class="product" data-type="${p.type}">
          <div class="product-image"><img src="${p.image}" alt="${p.name} modest fashion" loading="${i < 4 ? 'eager' : 'lazy'}"><span>${i < 4 ? 'New' : i < 8 ? 'Signature' : 'Bestseller'}</span><button class="heart" aria-label="Save ${p.name}">${icon('heart')}</button><button class="quick" data-id="${p.id}">Quick add</button></div>
          <div class="product-info"><div><h3>${p.name}</h3><p>${p.type} · ${p.color}</p></div><strong>AED ${p.price}</strong></div>
        </article>`).join('')}</div>
    </section>

    <section class="collection-feature" id="occasion">
      <div class="feature-image feature-mokhawar"></div>
      <div class="feature-copy"><p class="eyebrow">The Mokhawar Collection</p><h2>Heritage,<br><em>made modern.</em></h2><p>Fluid silhouettes, rich embroidery and luminous fabrics inspired by Gulf celebration dressing — elevated for today.</p><a href="#shop" data-filter="Mokhawar" class="cta dark">Shop Mokhawar ${icon('arrow')}</a></div>
    </section>

    <section class="collection-feature reverse">
      <div class="feature-image feature-kaftan"></div>
      <div class="feature-copy"><p class="eyebrow">The Kaftan Collection</p><h2>Moroccan craft,<br><em>occasion ready.</em></h2><p>Statement kaftans with refined trims, elegant drape and a modern Moroccan point of view for weddings, Eid and evening celebrations.</p><a href="#shop" data-filter="Kaftan" class="cta dark">Shop Kaftan ${icon('arrow')}</a></div>
    </section>

    <section class="atelier"><div class="atelier-copy"><p class="eyebrow">Mokhawar House</p><h2>Modesty should<br><em>never feel ordinary.</em></h2><p>Every collection is built around graceful coverage, movement and polish. The result is a wardrobe that works from a weekday morning to a family celebration.</p><a class="text-link" href="#story">Our design philosophy ${icon('arrow')}</a></div><div class="atelier-image"><span>Covered beautifully<br>Styled confidently</span></div></section>

    <section class="manifesto" id="story"><div class="story-image"></div><div class="story-copy"><p class="eyebrow">Our philosophy</p><h2>Dress for the life<br><em>you actually live.</em></h2><p>Office. Gym. Friday lunch. Eid. Weddings. Travel. We design modest fashion around real wardrobes, with pieces that feel premium without losing comfort or coverage.</p><a class="cta dark" href="#collections">Discover collections ${icon('arrow')}</a><div class="values"><span>01 <b>Thoughtful coverage</b></span><span>02 <b>Premium finish</b></span><span>03 <b>Modern heritage</b></span></div></div></section>

    <section class="services"><div><span>01</span><h3>UAE delivery</h3><p>Fast delivery across the Emirates.</p></div><div><span>02</span><h3>Easy returns</h3><p>Simple returns within 30 days.</p></div><div><span>03</span><h3>Personal styling</h3><p>Help choosing the right look and size.</p></div></section>

    <section class="newsletter"><p class="eyebrow">The Mokhawar Edit</p><h2>New drops, thoughtfully chosen.</h2><p>Be first to discover new Mokhawar, abaya and kaftan collections.</p><form><input type="email" required placeholder="Your email address" aria-label="Email address"><button type="submit">Join us ${icon('arrow')}</button></form><small>By subscribing, you agree to our privacy policy.</small></section>
  </main>

  <footer><a class="logo" href="#">MOKHAWAR<span>®</span></a><div><h4>Collections</h4><a href="#shop" data-footer-filter="Mokhawar">Mokhawar</a><a href="#shop" data-footer-filter="Kaftan">Kaftan</a><a href="#shop" data-footer-filter="Abayas">Abayas</a><a href="#shop" data-footer-filter="Workwear">Workwear</a><a href="#shop" data-footer-filter="Sportswear">Sportswear</a></div><div><h4>Occasion</h4><a href="#shop" data-footer-filter="Occasion">Eid & Weddings</a><a href="#shop" data-footer-filter="Hijabs">Hijabs & Accessories</a><a href="#shop">New In</a><a href="#shop">Best Sellers</a></div><div class="social"><h4>Follow along</h4><a href="#">Instagram ↗</a><a href="#">TikTok ↗</a><a href="#">Pinterest ↗</a></div><p class="copyright">© 2026 Mokhawar &nbsp; Privacy &nbsp; Terms</p></footer>

  <div class="cart" aria-hidden="true"><div class="cart-top"><h2>Your bag <span>0</span></h2><button class="cart-close" aria-label="Close bag">${icon('close')}</button></div><div class="cart-items"><p class="empty">Your bag is waiting.<br><a href="#shop">Explore the collection</a></p></div><div class="cart-total"><span>Subtotal</span><strong>AED 0</strong><button>Checkout</button></div></div><div class="overlay"></div>
  <div class="toast" role="status">Added to your bag</div>
  <div class="search-panel" aria-hidden="true"><button class="search-close" aria-label="Close search">${icon('close')}</button><p class="eyebrow">Search Mokhawar</p><form><input type="search" placeholder="Search abaya, Mokhawar, kaftan..." aria-label="Search products" autocomplete="off">${icon('search')}</form><div class="search-results"><p>Try “Mokhawar”, “abaya” or “kaftan”.</p></div></div>
`

let cart = []
const cartPanel = document.querySelector('.cart'), overlay = document.querySelector('.overlay')
const updateCart = () => {
  document.querySelector('.bag-btn b').textContent = cart.length
  document.querySelector('.cart-top span').textContent = cart.length
  document.querySelector('.cart-items').innerHTML = cart.length ? cart.map((p, i) => `<div class="cart-item"><img src="${p.image}" alt=""><div><h3>${p.name}</h3><p>${p.type} · ${p.color}</p><strong>AED ${p.price}</strong></div><button data-remove="${i}" aria-label="Remove ${p.name}">×</button></div>`).join('') : '<p class="empty">Your bag is waiting.<br><a href="#shop">Explore the collection</a></p>'
  document.querySelector('.cart-total strong').textContent = `AED ${cart.reduce((s,p) => s+p.price, 0)}`
}
const toggleCart = show => { cartPanel.classList.toggle('open', show); overlay.classList.toggle('open', show); cartPanel.setAttribute('aria-hidden', String(!show)) }
const applyFilter = name => {
  const button = [...document.querySelectorAll('.filters button')].find(b => b.textContent === name) || document.querySelector('.filters button')
  document.querySelector('.filters .active')?.classList.remove('active'); button.classList.add('active')
  document.querySelectorAll('.product').forEach(p => p.hidden = name !== 'All' && p.dataset.type !== name)
}
document.querySelector('.bag-btn').onclick = () => toggleCart(true)
document.querySelector('.cart-close').onclick = () => toggleCart(false)
overlay.onclick = () => toggleCart(false)
document.querySelectorAll('.quick').forEach(btn => btn.onclick = () => { cart.push(products.find(p => p.id === +btn.dataset.id)); updateCart(); const t=document.querySelector('.toast'); t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1800) })
document.querySelector('.cart-items').onclick = e => { if (e.target.matches('[data-remove]')) { cart.splice(+e.target.dataset.remove,1); updateCart() } }
document.querySelectorAll('.heart').forEach(btn => btn.onclick = () => btn.classList.toggle('saved'))
document.querySelectorAll('.filters button').forEach(btn => btn.onclick = () => applyFilter(btn.textContent))
document.querySelectorAll('[data-filter]').forEach(link => link.onclick = () => setTimeout(() => applyFilter(link.dataset.filter), 0))
document.querySelectorAll('[data-footer-filter]').forEach(link => link.onclick = () => setTimeout(() => applyFilter(link.dataset.footerFilter), 0))
document.querySelector('.announcement button').onclick = e => e.target.parentElement.remove()
document.querySelector('.menu').onclick = () => document.querySelector('header nav').classList.toggle('show')
document.querySelectorAll('header nav a').forEach(a => a.onclick = () => document.querySelector('header nav').classList.remove('show'))
document.querySelector('.newsletter form').onsubmit = e => { e.preventDefault(); e.target.innerHTML='<p class="thanks">Welcome to Mokhawar. Thank you for joining us.</p>' }
const searchPanel = document.querySelector('.search-panel')
const toggleSearch = show => { searchPanel.classList.toggle('open', show); searchPanel.setAttribute('aria-hidden', String(!show)); if (show) setTimeout(() => searchPanel.querySelector('input').focus(), 250) }
document.querySelector('.search-btn').onclick = () => toggleSearch(true)
document.querySelector('.search-close').onclick = () => toggleSearch(false)
searchPanel.querySelector('form').onsubmit = e => e.preventDefault()
searchPanel.querySelector('input').oninput = e => {
  const query = e.target.value.trim().toLowerCase()
  const matches = products.filter(p => `${p.name} ${p.type} ${p.color}`.toLowerCase().includes(query))
  document.querySelector('.search-results').innerHTML = query ? (matches.length ? matches.map(p => `<a href="#shop" class="search-result" data-result-filter="${p.type}"><img src="${p.image}" alt=""><span><b>${p.name}</b><small>${p.type} · ${p.color} · AED ${p.price}</small></span></a>`).join('') : '<p>No pieces found. Try another search.</p>') : '<p>Try “Mokhawar”, “abaya” or “kaftan”.</p>'
}
document.querySelector('.search-results').onclick = e => { const result=e.target.closest('[data-result-filter]'); if(result){ applyFilter(result.dataset.resultFilter); toggleSearch(false) } }
document.onkeydown = e => { if (e.key === 'Escape') { toggleCart(false); toggleSearch(false) } }
