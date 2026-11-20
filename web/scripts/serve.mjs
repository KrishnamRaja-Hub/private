// Tiny static server for the built preview, with SPA fallback to index.html.
// Usage: node scripts/serve.mjs [port]   (serves dist/web/browser)
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/web/browser/', import.meta.url));
const port = Number(process.argv[2] ?? 4300);
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.json': 'application/json',
};

createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  let file = join(root, path);
  try {
    if (!(await stat(file)).isFile()) throw 0;
  } catch {
    file = join(root, 'index.html');
  }
  try {
    let body = await readFile(file);
    const headers = { 'content-type': types[extname(file)] ?? 'application/octet-stream' };
    if (/\bgzip\b/.test(req.headers['accept-encoding'] ?? '') && /^(text|image\/svg|application\/json)|javascript/.test(headers['content-type'])) {
      body = gzipSync(body);
      headers['content-encoding'] = 'gzip';
    }
    res.writeHead(200, headers);
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(port, '127.0.0.1', () => console.log(`http://127.0.0.1:${port}/`));
