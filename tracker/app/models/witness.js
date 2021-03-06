import Ember from 'ember';
import DS from 'ember-data';

// 目击者
export default DS.Model.extend({
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  fullName: Ember.computed('fName', 'lName', function() { // 计算属性.
    return this.get('fName') + ' ' + this.get('lName');
  })
});
