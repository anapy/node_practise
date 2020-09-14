// const http = require('http');

// const colors = require('colors');

// const handleServer = function(req, resp) {
//   resp.writeHead(200, {'Content-type': 'text/html'});
//   resp.write('<h1>Hola Mundo</h1>');
//   resp.end();
// }

// const server = http.createServer(handleServer);

// server.listen(3000, function() {
//   console.log('Server on port 3000'.yellow);
// });

const express = require('express');

const colors = require('colors');

const server = express();

server.get('/', (req, res) =>{
  res.send('<h1>Hola Mundo con Express y Nodejs</h1>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server on port 3000'.red);
});