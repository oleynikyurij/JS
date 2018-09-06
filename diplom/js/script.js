'use strict';
//импортируем модули
import slider from './parts/slider';
import modalOpen from './parts/modal_open';
import tarif from './parts/tarif';

window.addEventListener('DOMContentLoaded', () => {
	
	
	//вызываем модули
	slider();
	modalOpen();
	tarif();
 let elem = document.getElementsByClassName('header-button__main button button__big')[0];
 console.log(elem);
	elem.onclick = ()=> {
		document.location.href = "site-builder.php";
};

	


});