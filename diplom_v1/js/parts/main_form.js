

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