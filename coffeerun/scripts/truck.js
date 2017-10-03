(function(window) {
  'use strict';
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  };

  Truck.prototype.createOrder = function(order) {
    console.log('Adding order for ' + order.emailAddress);
    return this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliverOrder = function(customerId) {
    console.log('Deliver order for ' + customerId);
    return this.db.remove(customerId);
  };

  Truck.prototype.printOrders = function(printFn) {
    return this.db.findAll().then(function(orders) {
      var customerIds = Object.keys(orders);
      console.log('Truck # ' + this.truckId + ' has pending orders:');
      customerIds.forEach(function(id) {
        console.log(orders[id]);
        if (printFn) {
          printFn(orders[id]);
        }
      });
    }.bind(this));
  }

  App.Truck = Truck;
  window.App = App;
})(window);
