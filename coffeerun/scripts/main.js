(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var Validation = App.Valication;
  var remoteDataStore = new RemoteDataStore(SERVER_URL);
  var dataStore = new DataStore();
  var myTruck = new Truck('ncc-1701', dataStore);
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  var formHandler = new FormHandler(FORM_SELECTOR);
  // call 会立即执行 bind。不会立即执行。
  formHandler.addSubmitHandler(function(data) {
    return myTruck.createOrder.call(myTruck, data)
      .then(function() {
        checkList.addRow.call(checkList, data);
      });
  });
  formHandler.addInputHandler(Validation.isCompanyEmail);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  myTruck.printOrders(checkList.addRow.bind(checkList));

  window.myTruck = myTruck;
})(window);
