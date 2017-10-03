import $ from 'jquery';
import md5 from 'crypto-js/md5';
import moment from 'moment';

const API_GRAVATOR = 'https://www.gravatar.com/avatar';

function createGravatorUrl(username) {
  let userhash = md5(username);
  return `${API_GRAVATOR}/${userhash.toString()}`;
}

export function promptForUsername() {
  return prompt('Enter a username').toLowerCase();
}

export class ChatForm {
  constructor(formSel, inputSel) {
    this.$form = $(formSel);
    this.$input = $(inputSel);
  }

  init(submitCallback) {
    this.$form.submit((event) => {
      event.preventDefault();
      let value = this.$input.val();
      submitCallback(value);
      this.$input.val('');
    });
    this.$form.find('button').on('click', () => this.$form.submit());
  }
}

export class ChatList {
  constructor(listSel, username) {
    this.$list = $(listSel);
    this.username = username;
  }

  drawMessage({
    user,
    timestamp,
    message
  }) {
    let $messageRow = $('<li>', {
      'class': 'message-row'
    });

    if (this.username === user) {
      $messageRow.addClass('me');
    }

    let $img = $('<img>', {
      src: createGravatorUrl(user),
      title: user
    });

    let $message = $('<p>');
    $message.append($('<span>', {
      'class': 'message-username',
      text: user
    }));
    $message.append($('<span>', {
      'class': 'timestamp',
      'data-time': timestamp,
      text: moment(timestamp).fromNow()
    }));
    $message.append($('<span>', {
      'class': 'message-message',
      text: message
    }));

    $messageRow.append($img);
    $messageRow.append($message);
    this.$list.append($messageRow);
    $messageRow.get(0).scrollIntoView();
  }

  init() {
    this.timer = setInterval(() => {
      $('[data-time]').each((index, element) => {
        let $element = $(element);
        let timestamp = new Date().setTime($element.attr('data-time'));
        let ago = moment(timestamp).fromNow();
        $element.html(ago);
      });
    }, 1000);
  }
}
