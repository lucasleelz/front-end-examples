var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log('Responding to a request');
  var url = request.url;

  var fileName = 'index.html';
  if (url.length > 1) {
    fileName = url.substring(1);
  }
  console.log(fileName);
  fs.readFile('app/index.html', function(error, data) {
      response.end(data);
  });
});

server.listen(3000);
