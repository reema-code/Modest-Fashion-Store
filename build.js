import { access, mkdir, rm, cp } from 'node:fs/promises'

for (const file of ['index.html', 'src/main.js', 'src/style.css', 'src/data.js']) await access(file)
await rm('dist', { recursive: true, force: true })
await mkdir('dist')

await cp('index.html', 'dist/index.html')
await cp('src', 'dist/src', { recursive: true })
await cp('public', 'dist/public', { recursive: true })
console.log('Production build created in dist/')
