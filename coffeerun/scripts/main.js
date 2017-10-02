(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var myTruck = new Truck('ncc-1701', new DataStore());
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(myTruck, data); // call 会立即执行 bind。不会立即执行。
    checkList.addRow.call(checkList,data);
  });
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  window.myTruck = myTruck;
})(window);
