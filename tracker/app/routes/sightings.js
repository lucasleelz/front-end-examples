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
    return [{
      id: 1,
      location: '广州',
      sightedAt: new Date('2017-10-3')
    }, {
      id: 2,
      location: '深圳',
      sightedAt: new Date('2016-10-3')
    }, {
      id: 3,
      location: '东莞',
      sightedAt: new Date('2012-10-3')
    }, {
      id: 4,
      location: '佛山',
      sightedAt: new Date('2014-10-3')
    }, {
      id: 5,
      location: '惠州',
      sightedAt: new Date('2015-10-3')
    }, {
      id: 6,
      location: '中山',
      sightedAt: new Date('2013-10-3')
    }];
  }
});
