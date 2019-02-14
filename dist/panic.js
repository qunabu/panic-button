'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Panic = {

  settings: {
    sound: 'https://freesound.org/data/previews/348/348310_6165769-lq.mp3',
    img: 'https://i.imgur.com/rwNqqt7.gif'
  },

  sound: null,

  aaaa: function aaaa(settings) {

    this.sound = new Audio(this.settings.sound);
    this.sound.play();

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
};

exports.default = Grid;

module.exports = Grid;

//# sourceMappingURL=panic.js.map