let socket;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = () => {
    console.log('open');
    handlerFunction();
  }
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = ({
    data
  }) => {
    console.log('message', data);
    handlerFunction(JSON.parse(data));
  }
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

export default {
  init,
  registerOpenHandler,
  registerMessageHandler,
  sendMessage,
};
