export default form;

function form() {
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
	//создаём элемент img
	let pict = document.createElement("img");

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
		let request = new XMLHttpRequest();
		//настраиваем запрос
		request.open("POST", "server.php");
		//устанавливаем кодировку
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
		//подготавливаем данные для отправки через FormData
		let formData = new FormData(form);
		//отправляем форму
		request.send(formData);

		//проверка ответа сервера и соответствующие действия
		request.onreadystatechange = () => {
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
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';

		}
		setTimeout(() => {
			form.removeChild(statusMessage);
		}, 3000);

	});

	//обработчик на отправку формы контактов
	formId.addEventListener('submit', function (event) {
		event.preventDefault();
		formId.appendChild(statusMessage);


		//AJAX
		//создаём новый запрос
		let request = new XMLHttpRequest();
		//настраиваем запрос
		request.open("POST", "server.php");
		//устанавливаем кодировку
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
		//подготавливаем данные для отправки через FormData
		let formData = new FormData(formId);
		//отправляем форму
		request.send(formData);

		//проверка ответа сервера и соответствующие действия
		request.onreadystatechange = () => {
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
		for (let i = 0; i < inputId.length; i++) {
			inputId[i].value = '';

		}
		setTimeout(() => {
			form.removeChild(statusMessage);
		}, 3000);
	});

};