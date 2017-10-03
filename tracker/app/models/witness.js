import Ember from 'ember';
import DS from 'ember-data';

// 目击者
export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  fullName: Ember.computed('firstName', 'lastName', function() { // 计算属性.
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
