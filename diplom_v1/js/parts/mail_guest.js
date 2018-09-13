function mailGuest() {
	let main = document.getElementsByClassName('form-album form-signature')[0],
		box = document.querySelector('.form-album-box'),
		img = document.createElement('img');

	if (window.location.pathname != '/letter-guests.php') {
		return false;
	};


	let dropArea = document.getElementById('signature-photo');

	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
		dropArea.addEventListener(eventName, preventDefaults, false)
	});

	function preventDefaults(e) {
		e.preventDefault()
		e.stopPropagation()
	};

	['dragenter', 'dragover'].forEach(eventName => {
		dropArea.addEventListener(eventName, highlight, false)
	});
	['dragleave', 'drop'].forEach(eventName => {
		dropArea.addEventListener(eventName, unhighlight, false)
	});

	function highlight() {
		dropArea.classList.add('highlight');
	}

	function unhighlight() {
		dropArea.classList.remove('highlight');
	};

	dropArea.addEventListener('drop', handleDrop, false);

	function handleDrop(e) {
		let dt = e.dataTransfer;
		let files = dt.files;
		dropArea.classList.add('highlight-gr');
		dropArea.value = 'файл загружен';
		previewFile(files);
	};
	// function handleFiles(files) {
	// 	([...files]).forEach(previewFile);

	// };
	// function uploadFile(file) {
	// 	let url = 'ВАШ URL ДЛЯ ЗАГРУЗКИ ФАЙЛОВ'
	// 	let formData = new FormData()
	// 	formData.append('file', file)
	// 	fetch(url, {
	// 		method: 'POST',
	// 		body: formData
	// 	})
	// 	.then() // <- Добавим вызов `progressDone` здесь
	// 	.catch(() => { /* Ошибка. Сообщаем пользователю */ })
	// };
	// function previewFile(file) {
	// 	let reader = new FileReader();
	// 	reader.readAsDataURL(file);
	// 	reader.onloadend = function() {

	// 		img.src = reader.result;

	// 	}
	// };


	function previewFile(f) {


		var fileToLoad = f[0];

		var fileReader = new FileReader();

		fileReader.onload = function (fileLoadedEvent) {
			var srcData = fileLoadedEvent.target.result; // <--- data: base64

			img.src = srcData;

		}
		fileReader.readAsDataURL(fileToLoad);



	};
	//загрузка через кнопку
	function previewFileBtn() {
		//получаем файл 
		let  filesSelected = document.getElementById("inputFileToLoad").files;
		if (filesSelected.length > 0) {
			let fileToLoad = filesSelected[0];
			
			let fileReader = new FileReader();
			
			fileReader.onload = function (fileLoadedEvent) {
				var srcData = fileLoadedEvent.target.result; // <--- data: base64
				
				document.querySelector('.text-file').textContent = "загружено";
				document.querySelector('.text-file').style.color = "green";
				// var newImage = document.createElement('img');
				img.src = srcData;
				
				// document.getElementById("imgTest").innerHTML = newImage.outerHTML;
				// alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
				
			}
			fileReader.readAsDataURL(fileToLoad);
		}
	};
	
	document.getElementById("inputFileToLoad").addEventListener('change', ()=> {previewFileBtn()} );
	
	// обработчик на отправку формы авторизации
	main.addEventListener('submit', function (event) {
		event.preventDefault();
		// previewFileBtn();
		
		//AJAX
		//создаём новый запрос
		let request = new XMLHttpRequest();
		//настраиваем запрос
		request.open("POST", "../../server.php");
		//устанавливаем кодировку
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
		//подготавливаем данные для отправки через FormData
		let formData = new FormData(main);
		formData.append('file', img);
		console.log(img);
		request.send(formData);
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
			dropArea.classList.remove('highlight-gr');
			document.querySelector('.text-file').textContent = "ОБЗОР";
			document.querySelector('.text-file').style.color = "palevioletred";
			dropArea.value = '';
			box.style.display = 'flex';
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