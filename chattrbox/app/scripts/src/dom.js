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
