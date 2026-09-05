const PHOTO_BY_SEED = {
  // Homepage / editorial
  Jbw7IxgA87k: 'https://images.unsplash.com/photo-1770367358711-b42cf1a6c2b1',
  D_jlzKg2kDc: 'https://images.unsplash.com/photo-1767647986631-efdd7b1e6e18',
  _42kwMUmZw0: 'https://images.unsplash.com/photo-1561442748-c50715dc32f6',

  // Abayas
  J8HhIB6tKRA: 'https://images.unsplash.com/photo-1770367358711-b42cf1a6c2b1',
  '56fPjVSHM3o': 'https://images.unsplash.com/photo-1561442748-c50715dc32f6',
  'MzImhIYa3-I': 'https://images.unsplash.com/photo-1613005798967-632017e477c8',
  '65v_6djIAFs': 'https://images.unsplash.com/photo-1561442748-c50715dc32f6',
  vrQAE65t7Hg: 'https://images.unsplash.com/photo-1767647986631-efdd7b1e6e18',
  '2eC_-0yRrGU': 'https://images.unsplash.com/photo-1613005798967-632017e477c8',

  // Workwear
  nW4MXHvqut8: 'https://images.unsplash.com/photo-1690166444476-8cc4c0f24032',
  '0NtHjtlwgvs': 'https://images.unsplash.com/photo-1764179690401-b7032ffaf7b1',
  WjHOXP6xIY4: 'https://images.unsplash.com/photo-1759725608337-7a5fa88ef04b',
  '9E7s5oyDmxg': 'https://images.unsplash.com/photo-1690166444476-8cc4c0f24032',
  '0AKg9Pv7LkI': 'https://images.unsplash.com/photo-1764179690401-b7032ffaf7b1',
  FHGpPsI_ozo: 'https://images.unsplash.com/photo-1759725608337-7a5fa88ef04b',

  // Modest everyday
  E7OcA57VTy4: 'https://images.unsplash.com/photo-1757899524730-53bb45919299',
  utqfDiyaTA0: 'https://images.unsplash.com/photo-1610283303856-2edfb53c1abd',
  bCnM5P0gcpY: 'https://images.unsplash.com/photo-1603659703645-9ce85f32dabe',
  'bjJu-s5m-Ug': 'https://images.unsplash.com/photo-1591089079607-73a2d0343394',
  gY8hncTY3m0: 'https://images.unsplash.com/photo-1757899524730-53bb45919299',

  // Sportswear
  '4MJPRwG2OYY': 'https://images.unsplash.com/photo-1750698544894-1f012e37e5e6',
  wERO8HDpEGw: 'https://images.unsplash.com/photo-1750698544894-1f012e37e5e6',
  sxYPiec2tLE: 'https://images.unsplash.com/photo-1750698544894-1f012e37e5e6',
  IZy6FqnEE2o: 'https://images.unsplash.com/photo-1750698544894-1f012e37e5e6',
  Y64mkDZwIt8: 'https://images.unsplash.com/photo-1750698544894-1f012e37e5e6',

  // Occasion
  dOB0YdxqmW8: 'https://images.unsplash.com/photo-1779505977982-10714de89278',
  er4c7HGx4Hs: 'https://images.unsplash.com/photo-1597165879835-3bfb297bd3ac',
  'r3u-_plEvWw': 'https://images.unsplash.com/photo-1610283303856-2edfb53c1abd',

  // Kaftans
  BGQDXS73ktE: 'https://images.unsplash.com/photo-1561442748-c50715dc32f6',
  '9kbeSfpdjYs': 'https://images.unsplash.com/photo-1770367358711-b42cf1a6c2b1',
  eexbQLqWKZk: 'https://images.unsplash.com/photo-1767647986631-efdd7b1e6e18',

  // Testimonials
  '5WtbRAqAvOM': 'https://images.unsplash.com/photo-1757899524730-53bb45919299',
  u7vnK5n7yLA: 'https://images.unsplash.com/photo-1597578843067-5d33f44383db',
  fbUvVn1_ViQ: 'https://images.unsplash.com/photo-1604238473801-fc7e04c7d38d',
}

const extractSeed = (url) => {
  try {
    const parsed = new URL(url, window.location.href)
    if (parsed.hostname !== 'picsum.photos') return null
    const parts = parsed.pathname.split('/').filter(Boolean)
    if (parts[0] !== 'seed' || !parts[1]) return null
    return decodeURIComponent(parts[1])
  } catch {
    return null
  }
}

const curatedUrl = (value) => {
  const seed = extractSeed(value)
  if (!seed) return value
  const key = Object.keys(PHOTO_BY_SEED).find((candidate) => seed === candidate || seed.startsWith(`${candidate}-`))
  if (!key) return value

  const match = value.match(/\/(\d+)\/(\d+)(?:\?|$)/)
  const width = match?.[1] || '1200'
  const height = match?.[2] || width
  return `${PHOTO_BY_SEED[key]}?auto=format&fit=crop&w=${width}&h=${height}&q=86`
}

const curateInlineStyle = (node) => {
  if (!(node instanceof HTMLElement) || !node.hasAttribute('style')) return
  const style = node.getAttribute('style')
  if (!style?.includes('picsum.photos')) return
  node.setAttribute('style', style.replace(/https:\/\/picsum\.photos\/seed\/[^'\")\s]+\/\d+\/\d+/g, (url) => curatedUrl(url)))
}

const curateImage = (img) => {
  if (!(img instanceof HTMLImageElement)) return
  const next = curatedUrl(img.getAttribute('src') || img.src)
  if (next && next !== img.src && next !== img.getAttribute('src')) img.src = next
}

const curateTree = (root = document) => {
  if (root instanceof HTMLElement) {
    curateInlineStyle(root)
    if (root instanceof HTMLImageElement) curateImage(root)
  }
  root.querySelectorAll?.('img').forEach(curateImage)
  root.querySelectorAll?.('[style*="picsum.photos"]').forEach(curateInlineStyle)
}

curateTree()

new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'attributes') {
      if (mutation.attributeName === 'src') curateImage(mutation.target)
      if (mutation.attributeName === 'style') curateInlineStyle(mutation.target)
    }
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) curateTree(node)
    })
  }
}).observe(document.documentElement, {
  subtree: true,
  childList: true,
  attributes: true,
  attributeFilter: ['src', 'style'],
})
