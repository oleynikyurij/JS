
(function () { 
	function modal() { 

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
};
module.exports = modal;
 }());

