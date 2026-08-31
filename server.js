import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'

const root = process.cwd()
const mime = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.png':'image/png' }
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
    const safePath = normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, '')
    let path = join(root, safePath === '/' ? 'index.html' : safePath)
    if ((await stat(path)).isDirectory()) path = join(path, 'index.html')
    const body = await readFile(path)
    res.writeHead(200, { 'Content-Type': `${mime[extname(path)] || 'application/octet-stream'}; charset=utf-8` })
    res.end(body)
  } catch { res.writeHead(404); res.end('Not found') }
})
const port = Number(process.env.PORT || 5173)
server.listen(port, '0.0.0.0', () => console.log(`Serein is ready at http://localhost:${port}`))
