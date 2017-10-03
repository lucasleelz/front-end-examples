var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port: port
});

console.log('WebSockets server started');

var messages = [];

ws.on('connection', function(socket) {
  console.log('client connection established');
  messages.forEach(function(message) {
    socket.send(message);
  });
  socket.on('message', function(message) {
    console.log('message received: ' + message);
    messages.push(message);
    // 对所有连接上的终端都发送最新的消息。
    ws.clients.forEach(function(clientSocket) {
      clientSocket.send(message);
    })
  });
});
