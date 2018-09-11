window.addEventListener('DOMContentLoaded', function(){

	require('babel-polyfill');
	let fon = require('../parts/fon.js');
	let videoVidget = require('../parts/video_vidget.js');
	let activeNav = require('../parts/active_nav.js');
	let inviteGuest = require('../parts/invate_guest.js');
	let wishEdit = require('../parts/wish_edit.js');
	let guestList = require('../parts/guest_list.js');
	

	fon();
	videoVidget();
	activeNav();
	inviteGuest();
	wishEdit();
	guestList();
	
});