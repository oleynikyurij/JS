"use strict";

(function () {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
				}var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
					var n = e[i][1][r];return o(n || r);
				}, p, p.exports, r, e, n, t);
			}return n[i].exports;
		}for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
			o(t[i]);
		}return o;
	}return r;
})()({ 1: [function (require, module, exports) {
		'use strict';

		window.addEventListener('DOMContentLoaded', function () {
			//подключаем модули
			var tab = require('../parts/tab.js');
			var timer = require('../parts/timer.js');
			var modal = require('../parts/modal.js');
			var form = require('../parts/form.js');
			var slider = require('../parts/slider.js');
			var calc = require('../parts/calc.js');
			var scroll = require('../parts/scroll.js');

			//вызываем модули
			tab();
			timer();
			modal();
			form();
			slider();
			calc();
			scroll();
		});
	}, { "../parts/calc.js": 2, "../parts/form.js": 3, "../parts/modal.js": 4, "../parts/scroll.js": 5, "../parts/slider.js": 6, "../parts/tab.js": 7, "../parts/timer.js": 8 }], 2: [function (require, module, exports) {

		(function () {
			function calc() {
				//Калькулятор

				var persons = document.getElementsByClassName('counter-block-input')[0],
				    restDays = document.getElementsByClassName('counter-block-input')[1],
				    place = document.getElementById('select'),
				    totalValue = document.getElementById('total'),
				    personSum = 0,
				    daysSum = 0,
				    total = 0;

				totalValue.innerHTML = 0;

				var reg = /\D/g;
				//обработчмк на ввод 
				persons.addEventListener('input', function () {
					//получаем значение и приводим к числу
					personSum = +this.value;
					//проверка на "не число"
					if (this.value.match(reg)) {
						//сброс формы в начальное состояние
						this.value = '';
						totalValue.innerHTML = 0;
						//проверка на пустые поля в обоих формах
					} else if (persons.value == '' || restDays.value == '') {
						totalValue.innerHTML = 0;
					} else {
						//сброс select в начальное значение перед вычислением
						place.selectedIndex = 0;
						//вычисление результата
						total = (daysSum + personSum) * 4000;
						//запись результата в поле
						// totalValue.innerHTML = total;
						printNumber(total);
					}
				});

				restDays.addEventListener('input', function () {
					daysSum = +this.value;

					if (this.value.match(reg)) {
						this.value = '';
						totalValue.innerHTML = 0;
					} else if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
						totalValue.innerHTML = 0;
					} else {
						place.selectedIndex = 0;
						total = (daysSum + personSum) * 4000;
						// totalValue.innerHTML = total;
						printNumber(total);
					}
				});
				//проверка select
				place.addEventListener('change', function () {
					if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
						totalValue.innerHTML = 0;
					} else {
						var a = total;
						//вычисление с учётом коэффициента select
						printNumber(a * this.options[this.selectedIndex].value);
					}
				});

				//вывод перебором цифр
				function printNumber(t) {
					var current = 0;

					setTimeout(function print() {
						totalValue.innerHTML = current;
						if (current < t) setTimeout(print, 1);
						current += 100;
					}, 1);
				};
			};
			module.exports = calc;
		})();
	}, {}], 3: [function (require, module, exports) {

		(function () {
			function form() {
				//Отправка формы
				//Создаём объект с ответами
				var message = new Object();
				message.loading = 'Загрузка...';
				message.success = 'Спасибо! Скоро мы с Вами свяжемся';
				message.failure = 'Что-то пошло не так...';

				//получаем элементы формы и создаём блок для размещения ответов
				var form = document.getElementsByClassName('main-form')[0],
				    input = form.getElementsByTagName('input'),
				    formId = document.getElementById('form'),
				    inputId = formId.getElementsByTagName('input'),
				    statusMessage = document.createElement('div');
				statusMessage.classList.add('status');
				//создаём элемент img
				var pict = document.createElement("img");

				//функционал отправки формы
				// let submitForm = (elemForm, inpt)=> {
				// 	e.preventDefault();
				// 	elemForm.appendChild(statusMessage);


				// 	//AJAX
				// 	//создаём новый запрос
				// 	let request = new XMLHttpRequest();
				// 	//настраиваем запрос
				// 	request.open("POST", "server.php");
				// 	//устанавливаем кодировку
				// 	request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
				// 	//подготавливаем данные для отправки через FormData
				// 	let formData = new FormData(elemForm);
				// 	//отправляем форму
				// 	request.send(formData);

				// 	//проверка ответа сервера и соответствующие действия
				// 	request.onreadystatechange = () => {
				// 		if (request.readyState < 4) {

				// 			pict.src = "img/ajax-loader.gif";
				// 			statusMessage.appendChild(pict);

				// 		} else if (request.readyState === 4) {
				// 			if (request.status === 200 && request.status < 300) {
				// 				statusMessage.appendChild(pict);
				// 				//добавляем контент на страницу
				// 			} else {
				// 				//можно взять другую картинку
				// 				statusMessage.appendChild(pict);
				// 			}
				// 		}
				// 	}

				// 	//очистка полей формы
				// 	for (let i = 0; i < inpt.length; i++) {
				// 		inpt[i].value = '';

				// 	}
				// 	statusMessage.removeChild(pict);
				// };


				//обработчик на отправку формы модального окна
				// form.addEventListener('submit', submitForm(form, input));
				form.addEventListener('submit', function (event) {
					event.preventDefault();
					form.appendChild(statusMessage);

					//AJAX
					//создаём новый запрос
					var request = new XMLHttpRequest();
					//настраиваем запрос
					request.open("POST", "server.php");
					//устанавливаем кодировку
					request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
					//подготавливаем данные для отправки через FormData
					var formData = new FormData(form);
					//отправляем форму
					request.send(formData);

					//проверка ответа сервера и соответствующие действия
					request.onreadystatechange = function () {
						if (request.readyState < 4) {

							pict.src = "img/ajax-loader.gif";
							statusMessage.appendChild(pict);
						} else if (request.readyState === 4) {
							if (request.status === 200 && request.status < 300) {
								statusMessage.appendChild(pict);
								//добавляем контент на страницу
							} else {
								statusMessage.appendChild(pict);
							}
						}
					};

					//очистка полей формы
					for (var i = 0; i < input.length; i++) {
						input[i].value = '';
					}
					setTimeout(function () {
						form.removeChild(statusMessage);
					}, 3000);
				});

				//обработчик на отправку формы контактов
				formId.addEventListener('submit', function (event) {
					event.preventDefault();
					formId.appendChild(statusMessage);

					//AJAX
					//создаём новый запрос
					var request = new XMLHttpRequest();
					//настраиваем запрос
					request.open("POST", "server.php");
					//устанавливаем кодировку
					request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
					//подготавливаем данные для отправки через FormData
					var formData = new FormData(formId);
					//отправляем форму
					request.send(formData);

					//проверка ответа сервера и соответствующие действия
					request.onreadystatechange = function () {
						if (request.readyState < 4) {

							pict.src = "img/ajax-loader.gif";
							statusMessage.appendChild(pict);
						} else if (request.readyState === 4) {
							if (request.status === 200 && request.status < 300) {

								statusMessage.appendChild(pict);
								//добавляем контент на страницу
							} else {
								statusMessage.appendChild(pict);
							}
						}
					};

					//очистка полей формы
					for (var i = 0; i < inputId.length; i++) {
						inputId[i].value = '';
					}
					setTimeout(function () {
						form.removeChild(statusMessage);
					}, 3000);
				});
			};
			module.exports = form;
		})();
	}, {}], 4: [function (require, module, exports) {

		(function () {
			function modal() {

				//Модальное окно
				var more = document.querySelector('.more'),
				    overlay = document.querySelector('.overlay'),
				    close = document.querySelector('.popup-close'),
				    descriptionBtn = document.getElementsByClassName('description-btn');
				//обработчик на открытие модального окна
				more.addEventListener('click', function () {
					this.classList.add('more-splash');
					overlay.style.display = "block";
					document.body.style.overflow = "hidden";
				});
				//обработчик на закрытие модального окна
				close.addEventListener('click', function () {
					overlay.style.display = "none";
					more.classList.remove('more-splash');
					document.body.style.overflow = "";
				});
				//получаем родительский элемент для установки обработчиков на кнопки в табах
				var info = document.querySelector('.info');
				//обработчиков на кнопки в табах
				info.addEventListener('click', function (e) {
					var target = event.target;
					//проверяем событие на элементе
					if (target.className === 'description-btn') {
						var _loop = function _loop(i) {
							if (target === descriptionBtn[i]) {
								//добавляем анимацию на кнопку
								descriptionBtn[i].classList.add('more-splash');
								//показываем модальное окно
								overlay.style.display = "block";
								document.body.style.overflow = "hidden";
								//удаляем анимацию с кнопки
								setTimeout(function () {
									return descriptionBtn[i].classList.remove('more-splash');
								}, 1800);
							}
						};

						//ищем на каком элементе произошло событие
						for (var i = 0; i < descriptionBtn.length; i++) {
							_loop(i);
						}
					}
				});
			};
			module.exports = modal;
		})();
	}, {}], 5: [function (require, module, exports) {

		(function () {
			function scroll() {
				//Плавная прокрутка
				function animate(draw, duration) {

					var start = performance.now();

					requestAnimationFrame(function animate(time) {

						var timePassed = time - start;

						if (timePassed > duration) {
							timePassed = duration;
						}

						draw(timePassed);

						if (timePassed < duration) {
							requestAnimationFrame(animate);
						}
					});
				};

				var navigation = document.querySelector('nav');

				navigation.addEventListener('click', function (e) {
					e.preventDefault();

					//описываем анимацию
					animate(function (timePassed) {
						var target = e.target;

						var section = document.getElementById(target.getAttribute('href').slice(1));

						window.scrollBy(0, section.getBoundingClientRect().top / 20);
					}, 1500);
				});
			};
			module.exports = scroll;
		})();
	}, {}], 6: [function (require, module, exports) {

		(function () {
			function slider() {

				//Слайдер 
				var slideIndex = 1,
				    slides = document.getElementsByClassName('slider-item'),
				    prev = document.querySelector('.prev'),
				    next = document.querySelector('.next'),
				    dotsWrap = document.querySelector('.slider-dots'),
				    dots = document.getElementsByClassName('dot');

				var showSlides = function showSlides(n) {
					if (n > slides.length) {
						slideIndex = 1;
					}
					if (n < 1) {
						slideIndex = slides.length;
					}

					for (var i = 0; i < slides.length; i++) {
						slides[i].style.display = 'none';
					}

					for (var _i = 0; _i < dots.length; _i++) {
						dots[_i].classList.remove('dot-active');
					}

					slides[slideIndex - 1].style.display = 'block';
					//добавляем анимацию на слайд
					slides[slideIndex - 1].classList.add('animated', 'flip');
					// slides[slideIndex - 1].style.cssText = 'display:block; '
					dots[slideIndex - 1].classList.add('dot-active');
				};
				showSlides(slideIndex);

				var plusSlides = function plusSlides(n) {
					showSlides(slideIndex += n);
				};

				var currentSlide = function currentSlide(n) {
					showSlides(slideIndex = n);
				};

				prev.addEventListener('click', function () {
					plusSlides(-1);
				});
				next.addEventListener('click', function () {
					plusSlides(1);
				});

				dotsWrap.addEventListener('click', function (e) {
					for (var i = 0; i <= dots.length; i++) {
						if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
							currentSlide(i);
						}
					}
				});
			};
			module.exports = slider;
		})();
	}, {}], 7: [function (require, module, exports) {

		(function () {

			function tab() {
				var infoHeader = document.getElementsByClassName('info-header')[0],
				    infoHeaderTab = document.getElementsByClassName('info-header-tab'),
				    infoTabcontent = document.getElementsByClassName('info-tabcontent');

				//скрываем  табы
				var hideTabs = function hideTabs(a) {
					for (var i = a; i < infoTabcontent.length; i++) {
						infoTabcontent[i].classList.remove('show');
						infoTabcontent[i].classList.add('hide');
					}
				};

				//отображаем первый таб
				hideTabs(1);

				//отобразить таб
				var showTab = function showTab(b) {
					if (infoTabcontent[b].classList.contains('hide')) {
						hideTabs(0);
						infoTabcontent[b].classList.remove('hide');
						infoTabcontent[b].classList.add('show');
					}
				};

				//обработчик на родительский класс
				infoHeader.addEventListener('click', function (event) {
					var target = event.target;
					//проверяем событие на элементе
					if (target.className === 'info-header-tab') {
						//ищем на каком элементе произошло событие
						for (var i = 0; i < infoHeaderTab.length; i++) {
							if (target === infoHeaderTab[i]) {
								showTab(i);
								break;
							}
						}
					}
				});
			};
			module.exports = tab;
		})();
	}, {}], 8: [function (require, module, exports) {
		(function () {
			function timer() {
				// Таймер обратного отсчёта

				//время до окончания
				//  let deadLine = '2017-09-22';
				var deadLine = '2018-09-03';

				//вычисление оставшегося времени
				var getTimeRemaining = function getTimeRemaining(endtime) {
					var t = Date.parse(deadLine) - Date.parse(new Date()),
					    seconds = Math.floor(t / 1000 % 60),
					    minutes = Math.floor(t / 1000 / 60 % 60),
					    hours = Math.floor(t / (1000 * 60 * 60));

					//проверка на "прошедшую дату"
					if (t <= 0) {
						t = 0;
						seconds = minutes = hours = 0;
					}

					seconds = seconds < 10 ? "0" + seconds : seconds;
					minutes = minutes < 10 ? "0" + minutes : minutes;
					hours = hours < 10 ? "0" + hours : hours;

					return {
						'total': t,
						'hours': hours,
						'minutes': minutes,
						'seconds': seconds
					};
				};

				var setClock = function setClock(id, endtime) {

					var timer = document.getElementById(id),
					    hours = timer.querySelector('.hours'),
					    minutes = timer.querySelector('.minutes'),
					    seconds = timer.querySelector('.seconds');
					//обновление таймера
					var updateClock = function updateClock() {
						var t = getTimeRemaining(endtime);
						hours.innerHTML = t.hours;
						minutes.innerHTML = t.minutes;
						seconds.innerHTML = t.seconds;
						// используем setTimeout вместо  setInterval, снизилась нагрузка на процессор с 30% до 1.5%
						var timeInterval = setTimeout(updateClock, 1000);

						//проверка на окончание таймера и его остановка
						if (t.total <= 0) {
							clearTimeout(timeInterval);
						}
					};
					updateClock();
				};
				//Запуск таймера
				setClock('timer', deadLine);
			};
			module.exports = timer;
		})();
	}, {}] }, {}, [1]);