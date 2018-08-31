'use strict';
window.addEventListener('DOMContentLoaded', () => {
	//подключаем модули
	let tab = require('../parts/tab.js');
	let timer = require('../parts/timer.js');
	let modal = require('../parts/modal.js');
	let form = require('../parts/form.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/calc.js');
	let scroll = require('../parts/scroll.js');
	
	//вызываем модули
	tab();
	timer();
	modal();
	form();
	slider();
	calc();
	scroll();


});