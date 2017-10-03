(function(window) {
  'use strict';
  var App = window.App || {};
  var Promise = window.Promise;

  function DataStore() {
    this.data = {};
  };

  function promiseResolvedWith(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  }

  DataStore.prototype.add = function(key, value) {
    this.data[key] = value;
    return promiseResolvedWith(value);
  };

  DataStore.prototype.get = function(key) {
    return promiseResolvedWith(this.data[key]);
  };

  DataStore.prototype.findAll = function(key) {
    return promiseResolvedWith(this.data);
  };

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
    return promiseResolvedWith(null);
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
