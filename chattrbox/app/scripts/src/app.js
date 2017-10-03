import socket from './ws-client';
import {
  ChatForm,
  ChatList,
  promptForUsername
} from './dom';
import {
  UserStore
} from './storage';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

let userStore = new UserStore('x-chattrbox/u');
let username = userStore.get();
if (!username) {
  username = promptForUsername();
  userStore.set(username);
}

export default class ChatApp {
  constructor() {
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.chatList = new ChatList(LIST_SELECTOR, username);

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
      let message = new ChatMessage(data);
      this.chatList.drawMessage(message.serialize());
    })
    this.chatList.init();
  }
}

class ChatMessage {
  constructor({
    message,
    user = username,
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
