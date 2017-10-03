var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(request, response) {
  console.log('Responding to a request');
  var url = request.url;

  var fileName = 'index.html';
  if (url.length > 1) {
    fileName = url.substring(1);
  }
  console.log(fileName);
  var filePath = path.resolve(__dirname, 'app', fileName);
  fs.readFile(fileName, function(error, data) {
    response.end(data);
  });
});

server.listen(3000);
