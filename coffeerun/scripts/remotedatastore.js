(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied');
    }
    this.serverUrl = url;
  };

  RemoteDataStore.prototype.add = function(key, value) {
    $.post(this.serverUrl, value, function(response) {
      console.log(response);
    });
  };

  RemoteDataStore.prototype.findAll = function(cb) {
    $.get(this.serverUrl, function(response) {
      cb(response);
    });
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + '/' + key, function(response) {
        cb(response);
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    $.ajax(this.serverUrl + '/' + key, {
      type: 'DELETE'
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);
