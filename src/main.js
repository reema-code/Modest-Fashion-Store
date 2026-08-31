import './style.css'

const products = [
  { id: 1, name: 'The Aya Abaya', type: 'Abayas', price: 148, color: 'Sandstone', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85' },
  { id: 2, name: 'Lina Pleated Dress', type: 'Dresses', price: 126, color: 'Oat', image: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&w=900&q=85' },
  { id: 3, name: 'Mira Wide-Leg Set', type: 'Sets', price: 164, color: 'Olive', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85' },
  { id: 4, name: 'Noor Satin Scarf', type: 'Hijabs', price: 34, color: 'Cocoa', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85' },
]

const icon = (name) => ({
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  bag: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>'
})[name]

document.querySelector('#app').innerHTML = `
  <div class="announcement">Complimentary shipping on orders over $150 <button aria-label="Close announcement">×</button></div>
  <header>
    <button class="menu" aria-label="Open menu"><span></span><span></span></button>
    <a class="logo" href="#">SEREIN<span>®</span></a>
    <nav><a href="#new">New in</a><a href="#shop">Shop</a><a href="#story">Our story</a></nav>
    <div class="actions"><button aria-label="Search">${icon('search')}</button><button class="bag-btn" aria-label="Shopping bag">${icon('bag')}<b>0</b></button></div>
  </header>
  <main>
    <section class="hero" id="new">
      <div class="hero-copy"><p class="eyebrow">The late summer edit · 2026</p><h1>Modest,<br><em>by design.</em></h1><p>Considered silhouettes, natural textures, and quiet confidence — made for the way you move through the world.</p><a class="cta light" href="#shop">Explore the collection ${icon('arrow')}</a></div>
      <div class="hero-image" role="img" aria-label="Woman in a flowing neutral dress"></div>
      <span class="vertical-note">SEREIN / COLLECTION 04</span>
    </section>

    <section class="marquee" aria-label="Brand values"><div>CONSIDERED SILHOUETTES <i>✦</i> NATURAL FABRICS <i>✦</i> MADE TO LAST <i>✦</i> CONSIDERED SILHOUETTES <i>✦</i> NATURAL FABRICS</div></section>

    <section class="featured" id="shop">
      <div class="section-head"><div><p class="eyebrow">Just arrived</p><h2>New essentials</h2></div><a href="#shop">Shop all pieces ${icon('arrow')}</a></div>
      <div class="filters"><button class="active">All</button><button>Abayas</button><button>Dresses</button><button>Sets</button><button>Hijabs</button></div>
      <div class="product-grid">${products.map((p, i) => `
        <article class="product" data-type="${p.type}">
          <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="${i ? 'lazy' : 'eager'}"><span>${i < 2 ? 'New' : 'Bestseller'}</span><button class="heart" aria-label="Save ${p.name}">${icon('heart')}</button><button class="quick" data-id="${p.id}">Quick add</button></div>
          <div class="product-info"><div><h3>${p.name}</h3><p>${p.color}</p></div><strong>$${p.price}</strong></div>
        </article>`).join('')}</div>
    </section>

    <section class="manifesto" id="story"><div class="story-image"></div><div class="story-copy"><p class="eyebrow">Our philosophy</p><h2>Clothing should<br><em>feel like you.</em></h2><p>We design with intention — balancing coverage, movement, and a refined ease. Each piece is created to live beyond a season and become part of your story.</p><a class="cta dark" href="#">Discover our story ${icon('arrow')}</a><div class="values"><span>01 <b>Thoughtful coverage</b></span><span>02 <b>Enduring quality</b></span><span>03 <b>Conscious choices</b></span></div></div></section>

    <section class="newsletter"><p class="eyebrow">The Serein letter</p><h2>A quieter kind of inbox.</h2><p>New collections, thoughtful stories, and a little inspiration — delivered occasionally.</p><form><input type="email" required placeholder="Your email address" aria-label="Email address"><button type="submit">Join us ${icon('arrow')}</button></form><small>By subscribing, you agree to our privacy policy.</small></section>
  </main>
  <footer><a class="logo" href="#">SEREIN<span>®</span></a><div><h4>Explore</h4><a href="#shop">New arrivals</a><a href="#shop">Abayas</a><a href="#shop">Dresses</a><a href="#shop">Hijabs</a></div><div><h4>Information</h4><a href="#story">Our story</a><a href="#">Shipping & returns</a><a href="#">Size guide</a><a href="#">Contact</a></div><div class="social"><h4>Follow along</h4><a href="#">Instagram ↗</a><a href="#">Pinterest ↗</a></div><p class="copyright">© 2026 Serein Studio &nbsp; Privacy &nbsp; Terms</p></footer>
  <div class="cart" aria-hidden="true"><div class="cart-top"><h2>Your bag <span>0</span></h2><button class="cart-close" aria-label="Close bag">${icon('close')}</button></div><div class="cart-items"><p class="empty">Your bag is waiting.<br><a href="#shop">Explore the collection</a></p></div><div class="cart-total"><span>Subtotal</span><strong>$0</strong><button>Checkout</button></div></div><div class="overlay"></div>
  <div class="toast" role="status">Added to your bag</div>
`

let cart = []
const cartPanel = document.querySelector('.cart'), overlay = document.querySelector('.overlay')
const updateCart = () => {
  document.querySelector('.bag-btn b').textContent = cart.length
  document.querySelector('.cart-top span').textContent = cart.length
  document.querySelector('.cart-items').innerHTML = cart.length ? cart.map((p, i) => `<div class="cart-item"><img src="${p.image}" alt=""><div><h3>${p.name}</h3><p>${p.color}</p><strong>$${p.price}</strong></div><button data-remove="${i}" aria-label="Remove ${p.name}">×</button></div>`).join('') : '<p class="empty">Your bag is waiting.<br><a href="#shop">Explore the collection</a></p>'
  document.querySelector('.cart-total strong').textContent = `$${cart.reduce((s,p) => s+p.price, 0)}`
}
const toggleCart = (show) => { cartPanel.classList.toggle('open', show); overlay.classList.toggle('open', show); cartPanel.setAttribute('aria-hidden', !show) }
document.querySelector('.bag-btn').onclick = () => toggleCart(true)
document.querySelector('.cart-close').onclick = () => toggleCart(false)
overlay.onclick = () => toggleCart(false)
document.querySelectorAll('.quick').forEach(btn => btn.onclick = () => { cart.push(products.find(p => p.id === +btn.dataset.id)); updateCart(); const t=document.querySelector('.toast'); t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1800) })
document.querySelector('.cart-items').onclick = e => { if (e.target.dataset.remove) { cart.splice(+e.target.dataset.remove,1); updateCart() } }
document.querySelectorAll('.heart').forEach(btn => btn.onclick = () => btn.classList.toggle('saved'))
document.querySelectorAll('.filters button').forEach(btn => btn.onclick = () => { document.querySelector('.filters .active').classList.remove('active'); btn.classList.add('active'); document.querySelectorAll('.product').forEach(p => p.hidden = btn.textContent !== 'All' && p.dataset.type !== btn.textContent) })
document.querySelector('.announcement button').onclick = e => e.target.parentElement.remove()
document.querySelector('.menu').onclick = () => document.querySelector('header nav').classList.toggle('show')
document.querySelector('.newsletter form').onsubmit = e => { e.preventDefault(); e.target.innerHTML='<p class="thanks">Welcome to Serein. Thank you for joining us.</p>' }
