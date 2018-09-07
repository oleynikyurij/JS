'use strict';
//импортируем модули
import slider from './parts/slider';
import modalOpen from './parts/modal_open';
import tarif from './parts/tarif';
import transitionPage from './parts/transition_page';
import smoothScrolling from './parts/smooth_scrolling';

window.addEventListener('DOMContentLoaded', () => {


	//вызываем модули
	slider();
	modalOpen();
	tarif();
	transitionPage();
	smoothScrolling();
	
	




});