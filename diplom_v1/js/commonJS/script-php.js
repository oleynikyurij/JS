"use strict";

window.addEventListener('DOMContentLoaded', function () {
  require('babel-polyfill');

  var fon = require('../parts/fon.js');

  var videoVidget = require('../parts/video_vidget.js');

  var activeNav = require('../parts/active_nav.js');

  var inviteGuest = require('../parts/invate_guest.js');

  var wishEdit = require('../parts/wish_edit.js');

  var guestList = require('../parts/guest_list.js');

  var maps = require('../parts/map.js');

  var mobailMenu = require('../parts/mobail_menu.js');

  var mobaileTool = require('../parts/mobaile_tool.js');

  var mailGuest = require('../parts/mail_guest.js');

  var fotoGuest = require('../parts/foto_guest.js');

  fon();
  videoVidget();
  activeNav();
  inviteGuest();
  wishEdit();
  guestList();
  maps();
  mobailMenu();
  mobaileTool();
  mailGuest();
  fotoGuest();
});