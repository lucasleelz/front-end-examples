import Ember from 'ember';

/*
路由生命周期
beforeModel
model,
afterModel,
setController
*/
export default Ember.Route.extend({
  model() {
    return this.store.findAll('sighting', {reload: true});
  }
});
