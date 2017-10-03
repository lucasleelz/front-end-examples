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
    let record1 = this.store.createRecord('sighting', {
      location: '广州',
      sightedAt: new Date('2017-10-3')
    });
    let record2 = this.store.createRecord('sighting', {
      location: '深圳',
      sightedAt: new Date('2016-10-3')
    });
    let record3 = this.store.createRecord('sighting', {
      location: '东莞',
      sightedAt: new Date('2012-10-3')
    });
    let record4 = this.store.createRecord('sighting', {
      location: '佛山',
      sightedAt: new Date('2014-10-3')
    });
    let record5 = this.store.createRecord('sighting', {
      location: '惠州',
      sightedAt: new Date('2015-10-3')
    });
    let record6 = this.store.createRecord('sighting', {
      location: '中山',
      sightedAt: new Date('2013-10-3')
    });
    console.log('Record 1 location: ' + record1.get('location'));
    return [record1, record2, record3, record4, record5, record6];
  }
});
