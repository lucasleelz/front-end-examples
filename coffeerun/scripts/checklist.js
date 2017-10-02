(function(window) {
  'use strict';

var CHECKBOX_SELECTOR = '[data-coffee-order="checkbox"]';

  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provied');
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  };

  CheckList.prototype.addRow = function(coffeeOrder) {
    // 移除已有的订单。
    this.removeRow(coffeeOrder.emailAddress);

    var rowElement = new Row(coffeeOrder);
    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.removeRow = function(email) {
    this.$element
      .find('[value="' + email + '"]')
      .closest(CHECKBOX_SELECTOR)
      .remove();
  };

  CheckList.prototype.addClickHandler = function(fn) {
    this.$element.on('click', 'input', function(event) {
      var email = event.target.value;
      this.removeRow(email);
      fn(email);
    }.bind(this));
  };

  function Row(coffeeOrder) {
    var $div = $('<div></div>', {
      'data-coffee-order': 'checkbox',
      'class': 'form-check'
    });

    var $label = $('<label></label>', {
      'class': 'form-check-label'
    });

    var $checkbox = $('<input></input>', {
      type: 'checkbox',
      value: coffeeOrder.emailAddress,
      'class': 'form-check-input mr-2'
    });

    var description = coffeeOrder.size + ' ';
    if (coffeeOrder.flavor) {
      description += coffeeOrder.flavor + ' ';
    }
    description += coffeeOrder.coffee + ', ';
    description += ' (' + coffeeOrder.emailAddress + ')';
    description += ' [' + coffeeOrder.strength + 'x]';

    $label.append($checkbox, description);
    $div.append($label);

    this.$element = $div;
  };

  App.CheckList = CheckList;
  window.App = App;
})(window);
