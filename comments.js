// Create web server
// When a request is received, the server will respond with the content of the comments.json file.
// Use the fs module to read the file.
// If the file does not exist, the server should respond with a 404 status code.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});

server.listen(3000);