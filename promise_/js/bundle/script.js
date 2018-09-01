'use strict';

window.addEventListener('DOMContentLoaded', function () {
  //подключаем модули
  var tab = require('../parts/tab.js');

  var timer = require('../parts/timer.js');

  var modal = require('../parts/modal.js');

  var form = require('../parts/form.js');

  var slider = require('../parts/slider.js');

  var calc = require('../parts/calc.js');

  var scroll = require('../parts/scroll.js'); //вызываем модули


  tab();
  timer();
  modal();
  form();
  slider();
  calc();
  scroll();
});