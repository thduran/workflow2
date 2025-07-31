const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Olá do Argo CD!");
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

