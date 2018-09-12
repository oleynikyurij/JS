function mailGuest() {
		let main = document.getElementsByClassName('form-album form-signature')[0],
		box = document.querySelector('.form-album-box');

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

					box.style.display = 'none';
					document.querySelector('.popup-form-alert').style.display = 'block';
					console.log('ok');
					//добавляем контент на страницу
				} else {
					console.log('not ok');
					box.style.display = 'none';
					document.querySelector('.popup-form-error').style.display = 'block';

				}
			}
		};

		main.getElementsByTagName('textarea')[0].value = '';
		main.getElementsByTagName('textarea')[1].value = '';
		setTimeout(() => {
			document.querySelector('.popup-form-alert').style.display = 'none';
			document.querySelector('.popup-form-error').style.display = 'none';
			box.style.display = 'block';
		}, 4000);
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