'use strict';
//импортируем модули
import slider from './parts/slider';
import modalOpen from './parts/modal_open';
import tarif from './parts/tarif';
import transitionPage from './parts/transition_page';
import smoothScrolling from './parts/smooth_scrolling';
import authorizationForm from './parts/authorization_form';
import formModal from './parts/form_modal';
import mainForm from './parts/main_form';
import videoPlayer from './parts/video';

window.addEventListener('DOMContentLoaded', () => {


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
	
	




});