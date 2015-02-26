import Ember from 'ember';
import gravatarUrlFromEmail from '../utils/gravatar-url-from-email';

var GravatarController = Ember.Controller.extend({
  gravatarEmail: "",
  gravatarUrl: Ember.computed("gravatarEmail", function() {
    return gravatarUrlFromEmail(this.get("gravatarEmail"), 400);
  }),

  createBlobUrl: function() {
    var imageUrl = this.get("gravatarUrl");
    var controller = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imageUrl, true);

    xhr.responseType = 'arraybuffer';

    xhr.onload = function() {
      if (this.status === 200) {
        var uInt8Array = new Uint8Array(this.response);
        var i = uInt8Array.length;
        var biStr = new Array(i);
        while (i--)
        { biStr[i] = String.fromCharCode(uInt8Array[i]);
        }
        var data = biStr.join('');
        var base64 = window.btoa(data);
        console.log("base64!!!");
        controller.set("base64Url", "data:image/png;base64," + base64);
      }
    };

    xhr.send();
  }.on("init"),

  actions: {
    pixelfyImage: function() {
      this.createBlobUrl();
    }
  }

});

export default GravatarController;
