window.addEventListener('DOMContentLoaded', function(){

	require('babel-polyfill');
	let  transitionPage = require('../parts/transition_page.js');
	let  authorizationForm = require('../parts/authorization_form.js');
	let  formModal = require('../parts/form_modal.js');
	let  mainForm = require('../parts/main_form.js');
	let  modalOpen = require('../parts/modal_open.js');
	let  slider = require('../parts/slider.js');
	let  smoothScrolling = require('../parts/smooth_scrolling.js');
	let  tarif = require('../parts/tarif.js');
	let  videoPlayer = require('../parts/video.js');
	
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