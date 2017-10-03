var http = require('http');
var fs = require('fs');
var extract = require('./extract');
var wss = require('./websockets-server');

var handlerError = function(error, response) {
  response.writeHead(404);
  response.end();
}

var server = http.createServer(function(request, response) {
  console.log('Responding to a request');
  var url = request.url;

  var filePath = extract(request.url);
  fs.readFile(filePath, function(error, data) {
    if (error) {
      handlerError(error, response);
      return;
    }
    response.end(data);
  });
});

server.listen(3000);
