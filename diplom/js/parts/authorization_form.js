export default authorizationForm;

function authorizationForm() {

	//форма авторизации
	let formAutorization = document.querySelectorAll('popup-form_form')[0],
		//поле имени
		nameForm = document.getElementsByClassName('popup-form-box-text__name')[0],
		//поле телефона
		phoneForm = document.getElementsByClassName('popup-form-box-text__phone')[0],
		//кнопка отправки формы
		sendForm = document.getElementsByClassName('button button__big popup-form__btn')[0],
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
	nameForm.addEventListener('keyup', () => {
		nameFormValue = nameForm.value;
		//проверка на пустую строку
		if ((nameFormValue != null) && (nameFormValue != '')) {
			//проверка на русские буквы
			if (/^([а-я]{0,22})?$/.test(nameFormValue)) {
				//если русская бкува записываем				
				nameForm.value = nameFormValue;
			} else {
				//если нет удаляем введённый символ
				nameForm.value = nameFormValue.substr(0, nameFormValue.length - 1);
			}
		}
	});

// обработчик на отправку формы авторизации
sendForm.addEventListener('submit', function (event) {
	event.preventDefault();
	

	//AJAX
	//создаём новый запрос
	let request = new XMLHttpRequest();
	//настраиваем запрос
	request.open("POST", "server.php");
	//устанавливаем кодировку
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
	//подготавливаем данные для отправки через FormData
	let formData = new FormData(formAutorization);
	//отправляем форму
	request.send(formData);

	//проверка ответа сервера и соответствующие действия
	request.onreadystatechange = () => {
		if (request.readyState < 4) {
			let pict = document.createElement("img");
			pict.src = "img/ajax-loader.gif";
			formAutorization.appendChild(pict);

		} else if (request.readyState === 4) {
			if (request.status === 200 && request.status < 300) {

				formAutorization.style.display = 'none';
				document.querySelector('.popup-form-alert').style.display = 'block';
				//добавляем контент на страницу
			} else {
				formAutorization.style.display = 'none';
				document.querySelector('.popup-form-error').style.display = 'block';
			}
		}
	};

	//очистка полей формы
	for (let i = 0; i < formAutorization.length; i++) {
		formAutorization.value = '';

	}
	setTimeout(() => {
		document.querySelector('.popup-form-alert').style.display = 'none';
		document.querySelector('.popup-form-error').style.display = 'none';
	}, 3000);
});



}




//очищаем поля ввода
// for (let i = 0; i < hireEmployers.length; i++) {
// 	hireEmployers[i].value = '';
// }




// 