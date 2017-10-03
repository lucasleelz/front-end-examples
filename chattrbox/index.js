var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log('Responding to a request');
  fs.readFile('app/index.html', function(error, data) {
      response.end(data);
  });
});

server.listen(3000);
