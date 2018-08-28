'use strict';
window.addEventListener('DOMContentLoaded', () => {

	let infoHeader = document.getElementsByClassName('info-header')[0],
		infoHeaderTab = document.getElementsByClassName('info-header-tab'),
		infoTabcontent = document.getElementsByClassName('info-tabcontent');

	//скрываем  табы
	let hideTabs = (a) => {
		for (let i = a; i < infoTabcontent.length; i++) {
			infoTabcontent[i].classList.remove('show');
			infoTabcontent[i].classList.add('hide');
		}
	};

	//отображаем первый таб
	hideTabs(1);

	//отобразить таб
	let showTab = (b) => {
		if (infoTabcontent[b].classList.contains('hide')) {
			hideTabs(0);
			infoTabcontent[b].classList.remove('hide');
			infoTabcontent[b].classList.add('show');
		}
	}

	//обработчик на родительский класс
	infoHeader.addEventListener('click', (event) => {
		let target = event.target;
		//проверяем событие на элементе
		if (target.className === 'info-header-tab') {
			//ищем на каком элементе произошло событие
			for (let i = 0; i < infoHeaderTab.length; i++) {
				if (target === infoHeaderTab[i]) {
					showTab(i);
					break;
				}
			}
		}
	});


	// Таймер обратного отсчёта

	//время до окончания
	//  let deadLine = '2017-09-22';
	let deadLine = '2018-09-03';


	//вычисление оставшегося времени
	let getTimeRemaining = (endtime) => {
		let t = Date.parse(deadLine) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));

		//проверка на "прошедшую дату"
		if (t <= 0) {
			t = 0;
			seconds = minutes = hours = 0;
		}

		seconds = seconds < 10 ? `0${seconds}` : seconds;
		minutes = minutes < 10 ? `0${minutes}` : minutes;
		hours = hours < 10 ? `0${hours}` : hours;

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	let setClock = (id, endtime) => {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');
		//обновление таймера
		let updateClock = () => {
			let t = getTimeRemaining(endtime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
			// используем setTimeout вместо  setInterval, снизилась нагрузка на процессор с 30% до 1.5%
			let timeInterval = setTimeout(updateClock, 1000);

			//проверка на окончание таймера и его остановка
			if (t.total <= 0) {
				clearTimeout(timeInterval);
			}
		};
		updateClock();
	}
	//Запуск таймера
	setClock('timer', deadLine);

	//Модальное окно
	let more = document.querySelector('.more'),
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
	close.addEventListener('click', () => {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = "";
	});
	//получаем родительский элемент для установки обработчиков на кнопки в табах
	let info = document.querySelector('.info');
	//обработчиков на кнопки в табах
	info.addEventListener('click', (e) => {
		let target = event.target;
		//проверяем событие на элементе
		if (target.className === 'description-btn') {
			//ищем на каком элементе произошло событие
			for (let i = 0; i < descriptionBtn.length; i++) {
				if (target === descriptionBtn[i]) {
					//добавляем анимацию на кнопку
					descriptionBtn[i].classList.add('more-splash');
					//показываем модальное окно
					overlay.style.display = "block";
					document.body.style.overflow = "hidden";
					//удаляем анимацию с кнопки
					setTimeout(() => descriptionBtn[i].classList.remove('more-splash'), 1800);
				}
			}
		}
	});

	//Отправка формы
	//Создаём объект с ответами
	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Скоро мы с Вами свяжемся';
	message.failure = 'Что-то пошло не так...';

	//получаем элементы формы и создаём блок для размещения ответов
	let form = document.getElementsByClassName('main-form')[0],
			input = form.getElementsByTagName('input'),
			formId = document.getElementById('form'),
			inputId = formId.getElementsByTagName('input'),
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');

//функционал отправки формы
	let submitForm = (elemForm, inpt)=> {
		e.preventDefault();
		elemForm.appendChild(statusMessage);


		//AJAX
		//создаём новый запрос
		let request = new XMLHttpRequest();
		//настраиваем запрос
		request.open("POST", "server.php");
		//устанавливаем кодировку
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
		//подготавливаем данные для отправки через FormData
		let formData = new FormData(elemForm);
		//отправляем форму
		request.send(formData);

		//проверка ответа сервера и соответствующие действия
		request.onreadystatechange = () => {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					//добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}

		//очистка полей формы
		for (let i = 0; i < inpt.length; i++) {
			inpt[i].value = '';
			
		}
	
	};


	//обработчик на отправку формы модального окна
	form.addEventListener('submit', submitForm(form, input));

	//обработчик на отправку формы контактов
	formId.addEventListener('submit', submitForm(formId, inputId));



});