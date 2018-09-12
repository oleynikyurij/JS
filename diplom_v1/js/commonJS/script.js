"use strict";

window.addEventListener('DOMContentLoaded', function () {
  require('babel-polyfill');

  var transitionPage = require('../parts/transition_page.js');

  var authorizationForm = require('../parts/authorization_form.js');

  var formModal = require('../parts/form_modal.js');

  var mainForm = require('../parts/main_form.js');

  var modalOpen = require('../parts/modal_open.js');

  var slider = require('../parts/slider.js');

  var smoothScrolling = require('../parts/smooth_scrolling.js');

  var tarif = require('../parts/tarif.js');

  var videoPlayer = require('../parts/video.js');

  transitionPage();
  authorizationForm();
  formModal();
  mainForm();
  modalOpen();
  slider();
  smoothScrolling();
  tarif();
  videoPlayer();
});