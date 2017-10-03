import DS from 'ember-data';

// 目击记录
export default DS.Model.extend({
  location: DS.attr('string'),
  createdAt: DS.attr('date'),
  sightedAt: DS.attr('date'),
  crypied: DS.belongsTo('crypied'),
  witnesses: DS.hasMany('witness')
});
