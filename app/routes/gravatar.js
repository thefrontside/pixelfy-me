import Ember from 'ember';

var GravatarRoute = Ember.Route.extend({
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

export default GravatarRoute;
