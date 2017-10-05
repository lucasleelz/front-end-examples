import Ember from 'ember';

export default Ember.Controller.extend({
  sighting: Ember.computed.alias('model.sighting'),
  actions: {
    create() {
      this.get('sighting').save().then(() => {
        this.transitionToRoute('sightings')
      });
    },
    cancel() {
      this.get('sighting').deleteRecord();
      this.transitionToRoute('sightings');
    },
    selectedWitnesses(witnesses) {
      this.get('sighting').set('witnesses', witnesses);
    },
    selectedCryptid(cryptid) {
      this.get('sighting').set('cryptid', cryptid);
    }
  }
});
