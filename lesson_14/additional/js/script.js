'use strict';
import tab from	'./parts/tab';
import timer from './parts/timer';
import modal from './parts/modal';
import form from './parts/form';
import slider from './parts/slider';
import calc from './parts/calc';
import scroll from './parts/scroll';
window.addEventListener('DOMContentLoaded', () => {
	//подключаем модули
	
	//вызываем модули
	tab();
	timer();
	modal();
	form();
	slider();
	calc();
	scroll();


});