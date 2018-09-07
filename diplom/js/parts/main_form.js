export default mainForm;

function mainForm() {

	let main = document.querySelector('.form-group'),
			sendBtn = document.getElementsByClassName('form-box-button__main button button__big')[0],
			formBlock = document.querySelectorAll('form-group')[0],
			name = document.getElementById('image-name');
		
	
	let nameValue;
	//кирилица в поле ввода имени
	name.addEventListener('keyup', () => {
		nameValue = name.value;
		//проверка на пустую строку
		if ((nameValue != null) && (nameValue != '')) {
			//проверка на русские буквы
			if (/^([а-я]{0,22})?$/.test(nameValue)) {
				//если русская бкува записываем				
				name.value = nameValue;
			} else {
				//если нет удаляем введённый символ
				name.value = nameValue.substr(0, nameValue.length - 1);
			}
		}
	});

// обработчик на отправку формы авторизации
sendBtn.addEventListener('submit', function (event) {
	event.preventDefault();
	

	//AJAX
	//создаём новый запрос
	let request = new XMLHttpRequest();
	//настраиваем запрос
	request.open("POST", "server.php");
	//устанавливаем кодировку
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
	//подготавливаем данные для отправки через FormData
	let formData = new FormData(main);
	//отправляем форму
	request.send(formData);

	//проверка ответа сервера и соответствующие действия
	request.onreadystatechange = () => {
		if (request.readyState < 4) {
			let pict = document.createElement("img");
			pict.src = "img/ajax-loader.gif";
			formBlock.appendChild(pict);

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
	for (let i = 0; i < main.length; i++) {
		main.value = '';

	}
	setTimeout(() => {
		document.querySelector('.form-group-alert').style.display = 'none';
		document.querySelector('.form-group-error').style.display = 'none';
		
	}, 3000);
});
}