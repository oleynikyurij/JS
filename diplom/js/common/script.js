'use strict';

window.addEventListener('DOMContentLoaded', () => {
	
	//импортируем модули
	let  slider = require('../parts/slider.js');
	let   modalOpen = require('../parts/modal_open.js');
	let  tarif = require('../parts/tarif.js');
	let  transitionPage = require('../parts/transition_page.js');
	let  smoothScrolling = require('../parts/smooth_scrolling.js');
	let  authorizationForm = require('../parts/authorization_form.js');
	let  formModal = require('../parts/form_modal.js');
	let  mainForm = require('../parts/main_form.js');
	let  videoPlayer = require('../parts/video.js');
	let  fon = require('../parts/fon.js');
	let  videoVidget = require('../parts/video_vidget.js');

	//вызываем модули
	slider();
	modalOpen();
	tarif();
	transitionPage();
	smoothScrolling();
	authorizationForm();
	formModal();
	mainForm();
	videoPlayer();
	fon();
	videoVidget();
	
	




});