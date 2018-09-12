function mailGuest() {
		let main = document.getElementsByClassName('form-album form-signature')[0];

		if (window.location.pathname != '/letter-guests.php') {
			return false;
		};


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

					// formBlock.style.display = 'none';
					// document.querySelector('.form-group-alert').style.display = 'block';
					console.log('ok');
					//добавляем контент на страницу
				} else {
					console.log('not ok');
					// formBlock.style.display = 'none';
					// document.querySelector('.form-group-error').style.display = 'block';

				}
			}
		};

		//очистка полей формы
		// for (let i = 0; i < inpt.length; i++) {
		// 	inpt[i].value = '';
		// };
	});
};

module.exports = mailGuest;






// function encodeImageFileAsURL(element) {
//   var file = element.files[0];
//   var reader = new FileReader();
//   reader.onloadend = function() {
//     console.log('RESULT', reader.result)
//   }
//   reader.readAsDataURL(file);
// }

// <input type="file" onchange="encodeImageFileAsURL(this)" />