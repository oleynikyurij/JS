(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../parts/authorization_form.js":2,"../parts/fon.js":3,"../parts/form_modal.js":4,"../parts/main_form.js":5,"../parts/modal_open.js":6,"../parts/slider.js":7,"../parts/smooth_scrolling.js":8,"../parts/tarif.js":9,"../parts/transition_page.js":10,"../parts/video.js":11,"../parts/video_vidget.js":12}],2:[function(require,module,exports){
(function () {  

function authorizationForm() {

	//форма авторизации
	let formAutorization = document.querySelectorAll('.popup-form_form')[0];
	let inpt = formAutorization.getElementsByTagName('input'),
		//поле имени
		nameForm = document.getElementsByClassName('popup-form-box-text__name')[0],
		//поле телефона
		phoneForm = document.getElementsByClassName('popup-form-box-text__phone')[0],
		mask = "+38(";


	//маска на телефонный номер

	//запись маски в поле при фокусе	
	phoneForm.addEventListener('focus', () => {
		phoneForm.value = mask;
	});

	phoneForm.addEventListener('input', function () {

		//получаем значение из поля ввода без учёта маски
		let val = this.value.substring(4);

		//проверка введённого символа
		if (!checkValue(val)) {
			this.value = '';
		} else {
			//запись в поле маски и отформатированного номера
			this.value = mask + maskPhone(checkValue(val));
		};
		//запрет на удаление маски номера из поля ввода
		if (this.value.length == 0) {
			this.value = mask;
		}

		//проверка на символ и удаление не цифровых символов
		function checkValue(val) {
			//замена всех "не цифр" на пустое поле
			let currentVal = val.replace(/[^\d]+/g, '');
			if (currentVal === '') {
				return false;
			} else {
				//ограничение длинны номера 10 символами
				return currentVal.substring(0, 10);
			}
		}

		//наложение маски на  номер
		function maskPhone(phone) {
			let number = '';
			for (let i = 0; i < phone.length; i++) {
				if (i === 3) {
					number += ') ';
					number += phone.charAt(i);
				} else if (i === 6 || i === 8) {
					number += '-';
					number += phone.charAt(i);
				} else {
					number += phone.charAt(i);
				}
			}
			return number;
		}
	});
	// end маска телефона

	let nameFormValue;
	//кирилица в поле ввода имени
	nameForm.addEventListener('keypress', () => {
		nameFormValue = nameForm.value;
		//проверка на пустую строку
		if ((nameFormValue != null) && (nameFormValue != '')) {
			//проверка на русские буквы
			if (/(^[А-Я]{1}([а-я]{0,14})?( )?$)|(^[А-Я]{1}([а-я]{0,13})? [А-Я]{1}([а-я]{0,12})?$)/.test(nameFormValue)) {
				//если русская бкува записываем				
				nameForm.value = nameFormValue;
			} else {
				//если нет удаляем введённый символ
				nameForm.value = nameFormValue.substr(0, nameFormValue.length - 1);
			}
		}
	});

	// обработчик на отправку формы авторизации
	formAutorization.addEventListener('submit', function (event) {
		event.preventDefault();


		//AJAX
		//создаём новый запрос
		let request = new XMLHttpRequest();
		//настраиваем запрос
		request.open("POST", "../../server.php");
		//устанавливаем кодировку
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
		//подготавливаем данные для отправки через FormData
		let formData = new FormData(formAutorization);
		//отправляем форму
		request.send(formData);

		//проверка ответа сервера и соответствующие действия
		request.onreadystatechange = () => {
			if (request.readyState < 4) {

			} else if (request.readyState === 4) {

				if (request.status === 200 && request.status < 300) {
					console.log(request.readyState);
					console.log(request.status);
					formAutorization.style.display = 'none';
					document.querySelector('.popup-form-alert').style.display = 'block';
					//добавляем контент на страницу
				} else {
					formAutorization.style.display = 'none';
					document.querySelector('.popup-form-error').style.display = 'block';
				}
			}
		};

		for (let i = 0; i < inpt.length; i++) {
			inpt[i].value = '';

		}
		setTimeout(() => {
			document.querySelector('.popup-form-alert').style.display = 'none';
			document.querySelector('.popup-form-error').style.display = 'none';
			formAutorization.style.display = 'block';
		}, 4000);
	});

}

module.exports = authorizationForm;

}());
},{}],3:[function(require,module,exports){
(function(){
	function fon() {
		
	
	let siteBuilder = document.getElementById('site-builder'),
		minimized = document.querySelectorAll('.minimized'),
		//адhtc увеличенного изображения
		urlMaxImage = '../../img/image-max5.jpg';
	//создаём и размещаем блок для увеличенного фона
	let divImage = document.createElement('div');
	divImage.classList.add('close-popup-maxImage');
	document.body.appendChild(divImage);
	let closeMaxImage = document.querySelector('.close-popup-maxImage');

	siteBuilder.addEventListener('click', function (e) {
		let target = e.target;

		if (target.className === 'minimized') {
			for (let i = 0; i < minimized.length; i++) {
				if (target === minimized[i]) {
					//отображаем увеличенную картинку
					divImage.innerHTML = `<div class="overlay-img"></div><div class="position-image" style="top: ${window.scrollY + 100}px"><img src='${urlMaxImage}'/><div id="close-popup-max">X</div></div>`;
					document.querySelector('.overlay-img').style.display = 'block';
					

					break;
				}
			}
		}
	});

	closeMaxImage.addEventListener('click', (e) => {
		let close = document.getElementById('close-popup-max');
		let over = document.querySelector('.overlay-img');
		if (e.target === over || e.target === close) {
			over.style.display = 'none';
			divImage.innerHTML = '';
		}
	});
}
module.exports = fon;
}());


},{}],4:[function(require,module,exports){
(function(){
function formModal() {

	let form = document.querySelectorAll('.popup-form_form')[1],
		inpt = form.getElementsByTagName('input'),
		nameModal = document.getElementById('js-overlay-image-name'),
		phoneModal = document.getElementById('js-overlay-phone'),
		mask = "+38(";

	//маска на телефонный номер

	//запись маски в поле при фокусе	
	phoneModal.addEventListener('focus', () => {
		phoneModal.value = mask;
	});

	phoneModal.addEventListener('input', function () {

		//получаем значение из поля ввода без учёта маски
		let val = this.value.substring(4);

		//проверка введённого символа
		if (!checkValue(val)) {
			this.value = '';
		} else {
			//запись в поле маски и отформатированного номера
			this.value = mask + maskPhone(checkValue(val));
		};
		//запрет на удаление маски номера из поля ввода
		if (this.value.length == 0) {
			this.value = mask;
		}

		//проверка на символ и удаление не цифровых символов
		function checkValue(val) {
			//замена всех "не цифр" на пустое поле
			let currentVal = val.replace(/[^\d]+/g, '');
			if (currentVal === '') {
				return false;
			} else {
				//ограничение длинны номера 10 символами
				return currentVal.substring(0, 10);
			}
		}

		//наложение маски на  номер
		function maskPhone(phone) {
			let number = '';
			for (let i = 0; i < phone.length; i++) {
				if (i === 3) {
					number += ') ';
					number += phone.charAt(i);
				} else if (i === 6 || i === 8) {
					number += '-';
					number += phone.charAt(i);
				} else {
					number += phone.charAt(i);
				}
			}
			return number;
		}
	});
	// end маска телефона

	let nameValue;
	//кирилица в поле ввода имени
	nameModal.addEventListener('keypress', () => {
		nameValue = nameModal.value;
		//проверка на пустую строку
		
			//проверка на русские буквы и формат "Имя / Фамилия" 
			if (/(^[А-Я]{1}([а-я]{0,14})?( )?$)|(^[А-Я]{1}([а-я]{0,13})? [А-Я]{1}([а-я]{0,12})?$)/.test(nameValue)) {
				//если русская бкува записываем		 
				nameModal.value = nameValue;
			} else {
				//если нет удаляем введённый символ
				nameModal.value = nameValue.substr(0, nameValue.length - 1);
			}
		
	});

	// обработчик на отправку формы авторизации
	form.addEventListener('submit', function (event) {
		event.preventDefault();


		//AJAX
		//создаём новый запрос
		let request = new XMLHttpRequest();
		//настраиваем запрос
		request.open("POST", "../../server.php");
		//устанавливаем кодировку
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
		//подготавливаем данные для отправки через FormData
		let formData = new FormData(form);
		//отправляем форму
		request.send(formData);

		//проверка ответа сервера и соответствующие действия
		request.onreadystatechange = () => {
			if (request.readyState < 4) {

			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {

					form.style.display = 'none';
					document.querySelector('.js-overlay-order').style.display = 'block';
					//добавляем контент на страницу
				} else {
					form.style.display = 'none';
					document.querySelector('.js-overlay-order').style.display = 'block';
				}
			}
		};

		setTimeout(() => {
			document.querySelector('.js-overlay-order').style.display = 'none';
			form.style.display = 'block';
		}, 4000);
		//очистка полей формы
		console.log(inpt);
		for (let i = 0; i < inpt.length; i++) {
			inpt[i].value = '';
		}
	});
};

module.exports = formModal;
}());

},{}],5:[function(require,module,exports){
(function () {  

function mainForm() {

	let main = document.querySelector('.form-group'),
		inpt = main.getElementsByTagName('input'),
		formBlock = document.querySelectorAll('.form-group')[0],
		name = document.getElementById('image-name');


	let nameValue;
	//кирилица в поле ввода имени
	name.addEventListener('keypress', () => {
		nameValue = name.value;
		//проверка на пустую строку
		if ((nameValue != null) && (nameValue != '')) {
			//проверка на русские буквы
			if (/(^[А-Я]{1}([а-я]{0,14})?( )?$)|(^[А-Я]{1}([а-я]{0,13})? [А-Я]{1}([а-я]{0,12})?$)/.test(nameValue)) {
				//если русская бкува записываем				
				name.value = nameValue;
			} else {
				//если нет удаляем введённый символ
				name.value = nameValue.substr(0, nameValue.length - 1);
			}
		}
	});

	// обработчик на отправку формы авторизации
	main.addEventListener('submit', function (event) {
		event.preventDefault();


		//AJAX
		//создаём новый запрос
		let request = new XMLHttpRequest();
		//настраиваем запрос
		request.open("POST", "../../server.php");
		//устанавливаем кодировку
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
		//подготавливаем данные для отправки через FormData
		let formData = new FormData(main);
		//отправляем форму
		request.send(formData);

		//проверка ответа сервера и соответствующие действия
		request.onreadystatechange = () => {
			if (request.readyState < 4) {

			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {

					formBlock.style.display = 'none';
					document.querySelector('.form-group-alert').style.display = 'block';
					//добавляем контент на страницу
				} else {
					formBlock.style.display = 'none';
					document.querySelector('.form-group-error').style.display = 'block';
				}
			}
		};

		//очистка полей формы
		for (let i = 0; i < inpt.length; i++) {
			inpt[i].value = '';
		};
		main.getElementsByTagName('textarea')[0].value = '';
		setTimeout(() => {
			document.querySelector('.form-group-alert').style.display = 'none';
			document.querySelector('.form-group-error').style.display = 'none';
			formBlock.style.display = 'block';
		}, 4000);
	});
}
 module.exports = mainForm;
	 
 
}());
},{}],6:[function(require,module,exports){
(function () {  

function modalOpen() {


	let headerLoginBtn = document.querySelector('.header-login__button'),
			footerLoginBtn = document.querySelector('.footer-login__button'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup .popup-close');

			//обработчики на кнопки "Войти"
			headerLoginBtn.addEventListener('click', (e)=> {
				overlay.style.display = "block";
			});

			footerLoginBtn.addEventListener('click', ()=> {
				overlay.style.display = "block";
			});

			// close.addEventListener('click', ()=> {
			// 	overlay.style.display = "none";
			// });
			//закрытие формы при клике по подложке или кнопке "закрыть"
			overlay.addEventListener('click', (event)=> {
				//определяем "подложку"
				if ( event.target === overlay || event.target === close ) {
					overlay.style.display = "none";
				}
			});

};
module.exports = modalOpen;
}());
},{}],7:[function(require,module,exports){

(function () { 
function slider() {

	let slideIndex = 1,
		slides = document.getElementsByClassName('a-slide'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');
	//функция показа слайдов
	let showSlides = (n) => {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		//скрываем все слайды
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		//удаляем классы с точек
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot__active');
		}
		//отображаем нужный слайд
		slides[slideIndex - 1].style.display = 'block';
		//добавляем анимацию на слайд
		slides[slideIndex - 1].classList.add('animated', 'fadeIn');
		//делаем соответствующую точку активной
		dots[slideIndex - 1].classList.add('dot__active');
	};
	//функция отображения заданного слайда
	let currentSlide = (n) => {
		showSlides(slideIndex = n);
	};
	//первоначальный запуск слайдера
	showSlides(1);
	slideIndex = 2;
	//отображение слайдов с интервалом в 3 секунды
	setInterval(() => {
		showSlides(slideIndex);
		slideIndex++;
	}, 3000);

	//переключение на выбранный слайд
	dotsWrap.addEventListener('click', function (e) {
		for (let i = 0; i <= dots.length; i++) {
			if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});
}; 
module.exports = slider;
}());
},{}],8:[function(require,module,exports){
(function(){
function smoothScrolling() {
	function animate(draw, duration) {

		let start = performance.now();

		requestAnimationFrame(function animate(time) {

			let timePassed = time - start;
			
			if (timePassed > duration) {
				timePassed = duration;
			}

			draw(timePassed);

			if (timePassed < duration) {
				requestAnimationFrame(animate);
			} 

		});
	};

	let navigation = document.querySelector('.header-nav-menu');

	navigation.addEventListener('click', (e) => {
		e.preventDefault();

		//описываем анимацию
		animate(() => {
			let target = e.target;


			let section = document.getElementById(target.getAttribute('href').slice(1));

			window.scrollBy(0, section.getBoundingClientRect().top / 17 + 1.5 );
			
			
		}, 1500);
		
	});
};

module.exports = smoothScrolling;
}());
},{}],9:[function(require,module,exports){
(function () { 

function tarif() {
	let jsOverlayForm = document.querySelector('.js-overlay-thank-you'),
		close = document.querySelector('.js-overlay-popup .popup-close'),
		pricing = document.querySelector('.pricing'),
		canselBtn = document.getElementsByClassName('button popup-form__btn_2 popup-form__btn-js')[0],
		gold = document.getElementById('gold'),
		silver = document.getElementById('silver'),
		basic = document.getElementById('basic');

		

	//создаём обработчик на родительский блок
	pricing.addEventListener('click', function (e) {
		//если событие произошло на кнопке отображаем модальное окно
		if (e.target.classList.contains('pricing-block__button')) {
			jsOverlayForm.style.display = 'block';
			// проверяем на какой из кнопок произошло событие и устанавливаем соответствующую радио-кнопку в отмеченное состояние
		}
		if (e.target.classList.contains('pricing-block__button_basic')) {
			basic.checked = true;
		}
		if (e.target.classList.contains('pricing-block__button_silver')) {
			silver.checked = true;
		}
		if (e.target.classList.contains('pricing-block__button_gold')) {
			gold.checked = gold;
		}
	});

	//обработчик на элементы для закрытия окна
	jsOverlayForm.addEventListener('click', (event)=> {
		if (event.target === jsOverlayForm || event.target === canselBtn || event.target === close) {
			jsOverlayForm.style.display = "none";
		}
	});


	// close.addEventListener('click', () => {
	// 	jsOverlayForm.style.display = "none";
	// });
	// cansel.addEventListener('click', () => {
	// 	console.log(cansel);
	// 	jsOverlayForm.style.display = "none";
	// });
	// //закрытие формы при клике по подложке
	// jsOverlayForm.addEventListener('click', () => {
	// 	//определяем "подложку"
	// 	if (event.target === jsOverlayForm) {
	// 		jsOverlayForm.style.display = "none";
	// 	}
	// });


}

module.exports = tarif;
 }());
},{}],10:[function(require,module,exports){
(function () { 

function transitionPage() {
	let elemBtn = document.getElementsByClassName('header-button__main button button__big')[0];

	elemBtn.onclick = () => {
		window.location.pathname = "site-builder.php";
	};
};
module.exports = transitionPage;
 }());
},{}],11:[function(require,module,exports){
(function () {  

function videoPlayer() {
	let yuotube = document.querySelector('.youtube'),
			//создаём элементы картинок
			preview = document.createElement('img'),
			playBtn = document.createElement('img');
			//устанавливаем необходимые стили css
			yuotube.style.cssText += `position: relative; cursor: pointer;`;
			playBtn.style.cssText = `position: absolute;
															 top: 45%;
															 left: 45%;`;												
			preview.src = 'img/video/video-bg.jpg';
			preview.setAttribute('alt', 'video');
			playBtn.src = 'img/video/button-play.png';
			preview.setAttribute('alt', 'play');
			//добавляем картинки в заданный блок
			yuotube.appendChild(preview);
			yuotube.appendChild(playBtn);

			let addVideo = () => {
				let iframe =`
				<iframe width="655" height="403" src="https://www.youtube.com/embed/q_th_D4VHC0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`;
				//изменяем стили элемента для корректного отображения видео
				yuotube.classList.add('not-before');
				//добавляем yuotube на страницу
				yuotube.innerHTML = iframe;
			};
			//устанавливаем обработчик для запуска yuotube
			yuotube.addEventListener('click', addVideo);
}
module.exports = videoPlayer;
}());
},{}],12:[function(require,module,exports){
 (function() {
 
 function videoVidget() {

	let yuotube = document.querySelector('.youtube'),
			adressVideo = document.getElementById('adress-video'),
			addVideoBtn = document.getElementsByClassName('form-button__add button button__big')[0],
			
			//создаём элементы картинок
			preview = document.createElement('img'),
			playBtn = document.createElement('img');
			//устанавливаем необходимые стили css
			yuotube.style.cssText += `position: relative; cursor: pointer;`;
			playBtn.style.cssText = `position: absolute;
															 top: 45%;
															 left: 45%;`;												
			preview.src = '../../img/video/video-bg.jpg';
			preview.setAttribute('alt', 'video');
			playBtn.src = '../../img/video/button-play.png';
			preview.setAttribute('alt', 'play');
			//добавляем картинки в заданный блок
			yuotube.appendChild(preview);
			yuotube.appendChild(playBtn);

	let urlVideo = 'https://www.youtube.com/embed/q_th_D4VHC0?rel=0';

			let addVideo = (url) => {
				let iframe =`
				<iframe width="655" height="403" src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`;
				//изменяем стили элемента для корректного отображения видео
				yuotube.classList.add('not-before');
				//добавляем yuotube на страницу
				yuotube.innerHTML = iframe;
			};
			//устанавливаем обработчик для запуска yuotube
			yuotube.addEventListener('click', ()=> {
				addVideo(urlVideo);
			});

			addVideoBtn.addEventListener('click', (e)=> {
				e.preventDefault();
				let url = adressVideo.value;
				//замена в строке адреса для корректного отображения
				url =	url.replace(/watch\?v=/, 'embed/');
				addVideo(url);
				adressVideo.value = '';
			});

};
module.exports = videoVidget;
}());
},{}]},{},[1]);
