const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from k3s and tekton - take 10!\n');
}).listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});
