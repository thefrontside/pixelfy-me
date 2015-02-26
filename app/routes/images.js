import Ember from 'ember';
import imageData from 'ember-cli-sample-image-data';

export default Ember.Route.extend({
  model: function() {
    return imageData();
  }
});
