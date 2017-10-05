import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sightings', function() {
    this.route('addition');
  });
  this.route('sighting', function() {
    this.route('edit', {path: 'sightings/:sighting_id/edit'});
  });
  this.route('cryptids');
  this.route('cryptid', {path: 'cryptids/:cryptid_id'});
  this.route('witnesses');
  this.route('witness');
});

export default Router;
