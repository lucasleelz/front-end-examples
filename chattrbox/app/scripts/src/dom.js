import $ from 'jquery';

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
    let $message = $('<p>');
    $message.append($('<span>', {
      'class': 'message-username',
      text: user
    }));
    $message.append($('<span>', {
      'class': 'message-message',
      text: message
    }));
    $messageRow.append($message);
    this.$list.append($messageRow);
    $messageRow.get(0).scrollIntoView();
  }

}
