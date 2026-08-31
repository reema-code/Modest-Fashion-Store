import { access, mkdir, rm, cp, readFile, writeFile } from 'node:fs/promises'

for (const file of ['index.html', 'src/main.js', 'src/style.css']) await access(file)
await rm('dist', { recursive: true, force: true })
await mkdir('dist')

let html = await readFile('index.html', 'utf8')
html = html
  .replace('/src/style.css', './style.css')
  .replace('/src/main.js', './main.js')

await writeFile('dist/index.html', html)
await cp('src/main.js', 'dist/main.js')
await cp('src/style.css', 'dist/style.css')
await cp('public', 'dist/public', { recursive: true })
console.log('Production build created in dist/')
