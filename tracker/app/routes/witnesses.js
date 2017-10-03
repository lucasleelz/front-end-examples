import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let witnessRecord = this.store.createRecord('witness', {
      firstName: 'lucas',
      lastName: 'lee',
      email: 'llzqingdao2012@gmail.com'
    });
    return [witnessRecord];
  }
});
