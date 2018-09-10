window.addEventListener('DOMContentLoaded', function(){

	require('babel-polyfill');
	let fon = require('../parts/fon.js');
	let videoVidget = require('../parts/video_vidget.js');
	let guestSlider = require('../parts/guest_slider.js');
	let activeNav = require('../parts/active_nav.js');
	let inviteGuest = require('../parts/invate_guest.js');
	

	fon();
	videoVidget();
	// guestSlider();
	activeNav();
	inviteGuest();
	
});