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