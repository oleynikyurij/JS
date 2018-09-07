export default formModal;

function formModal() {
	
	let form = document.querySelectorAll('.popup-form_form')[1],
			btnSend = document.getElementsByClassName('button button__big popup-form__btn popup-form__btn-js')[0],
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
	nameModal.addEventListener('keyup', () => {
		nameValue = nameModal.value;
		//проверка на пустую строку
		if ((nameValue != null) && (nameValue != '')) {
			//проверка на русские буквы
			if (/^([а-я]{0,22})?$/.test(nameValue)) {
				//если русская бкува записываем				
				nameModal.value = nameValue;
			} else {
				//если нет удаляем введённый символ
				nameModal.value = nameValue.substr(0, nameValue.length - 1);
			}
		}
	});

// обработчик на отправку формы авторизации
btnSend.addEventListener('submit', function (event) {
	event.preventDefault();
	

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
			let pict = document.createElement("img");
			pict.src = "img/ajax-loader.gif";
			form.appendChild(pict);

		} else if (request.readyState === 4) {
			if (request.status === 200 && request.status < 300) {

				form.style.display = 'none';
				document.querySelector('.js-overlay-order').style.display = 'block';
				//добавляем контент на страницу
			} else {
				form.style.display = 'none';
				document.querySelector('. js-overlay-order').style.display = 'block';
			}
		}
	};

	//очистка полей формы
	for (let i = 0; i < form.length; i++) {
		form.value = '';

	}
	setTimeout(() => {
		document.querySelector('. js-overlay-order').style.display = 'none';
		
	}, 3000);
});

}