import socket from './ws-client';
import {
  ChatForm
} from './dom';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';

export default class ChatApp {
  constructor() {
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      this.chatForm.init((message) => {
        let chatMessage = new ChatMessage({
          message
        });
        socket.sendMessage(chatMessage.serialize());
      });
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
