import Ember from 'ember';
import imageData from 'ember-cli-sample-image-data';

export default Ember.Route.extend({
  model: function(params) {
    return imageData(params.id);
  },
  actions: {
    downloadImage: function() {
      var link = document.createElement("a");
      var uri = Ember.$("img.pixelated-image").attr("src");
      link.download = "pixelfy.png";
      link.href = uri;
      link.click();
    }
  }
});
