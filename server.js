// Tiny local server: serves the website and saves your edits to data.json
const http = require('http'), fs = require('fs'), path = require('path');
const PORT = process.env.PORT || 3000;
const DB = path.join(__dirname, 'data.json');
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ico': 'image/x-icon' };

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);

  if (url === '/api/data') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', c => { body += c; if (body.length > 60e6) req.destroy(); });
      req.on('end', () => {
        try { JSON.parse(body); fs.writeFileSync(DB, body); res.writeHead(200); res.end('ok'); }
        catch (e) { res.writeHead(400); res.end('bad data'); }
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(fs.existsSync(DB) ? fs.readFileSync(DB) : '{}');
    }
    return;
  }

  const file = path.join(__dirname, url === '/' ? 'index.html' : url);
  if (!file.startsWith(__dirname) || path.basename(file) === 'data.json' || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); return res.end('Not found');
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`Tree Plantation site running at http://localhost:${PORT}`));
