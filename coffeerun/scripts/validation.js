(function(window) {
  'use strict';
  var App = window.App || {};
  var Validation = {
    isCompanyEmail: function(email) {
      return /.+@gmail\.com$/.test(email);
    }
  }
  App.Valication = Validation;
  window.App = App;
})(window);
