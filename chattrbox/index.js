var http = require('http');
var fs = require('fs');
var extract = require('./extract');

var server = http.createServer(function(request, response) {
  console.log('Responding to a request');
  var url = request.url;

  var filePath = extract(request.url);
  fs.readFile(filePath, function(error, data) {
    response.end(data);
  });
});

server.listen(3000);
