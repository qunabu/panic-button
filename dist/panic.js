'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Panic = {

  settings: {
    sound: 'https://freesound.org/data/previews/348/348310_6165769-lq.mp3',
    img: 'https://i.imgur.com/rwNqqt7.gif',
    timeout: 2000,
    giphyApiKey: '',
    giphyQuery: 'panic'
  },

  sound: null,

  getGif: function getGif(callback) {

    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=' + this.settings.giphyApiKey + '&tag=' + this.settings.giphyQuery, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        var img = JSON.parse(request.responseText).data.image_url;
        callback(img);
      } else {
        console.log('reached giphy, but API returned an error');
      }
    };

    request.onerror = function () {
      console.log('connection error');
    };

    request.send();
  },

  show: function show() {
    var _this = this;

    document.body.appendChild(this.el);
    this.sound.play();
    return setTimeout(function () {
      document.body.removeChild(_this.el);
    }, this.settings.timeout);
  },

  aaaa: function aaaa() {
    var _this2 = this;

    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    this.settings = Object.assign(this.settings, settings);

    if (this.el == undefined) {
      this.sound = new Audio(this.settings.sound);

      this.el = document.createElement('div');
      this.el.style.position = 'fixed';
      this.el.style.zIndex = '9999999';
      this.el.style.top = '0';
      this.el.style.left = '0';
      this.el.style.width = '100%';
      this.el.style.height = '100%';
      this.el.style.background = "url('" + this.settings.img + "') no-repeat center";
      this.el.style.backgroundSize = 'cover';
    }

    if (this.settings.giphyApiKey) {
      this.getGif(function (img) {
        _this2.settings.img = img;
        _this2.el.style.background = "url('" + _this2.settings.img + "') no-repeat center";
        _this2.el.style.backgroundSize = 'cover';
        _this2.show();
      });
    } else {
      this.show();
    }
  }
};

exports.default = Panic;

module.exports = Panic;

window.Panic = Panic;

//# sourceMappingURL=panic.js.map