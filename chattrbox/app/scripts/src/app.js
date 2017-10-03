import socket from './ws-client';

export default class ChatApp {
  constructor() {
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      let message = new ChatMessage({message: 'pow!'});
      socket.sendMessage(message.serialize());
    })
    socket.registerMessageHandler((data) => {
      console.log(data);
    })
  }
}

class ChatMessage {

  constructor({
    message,
    user = 'batman',
    timestap = (new Date()).getTime()
  }) {
    this.message = message;
    this.user = user;
    this.timestamp = timestap;
  }

  serialize() {
    return {
      user: this.user,
      message: this.message,
      timestamp: this.timestamp
    };
  }
}
