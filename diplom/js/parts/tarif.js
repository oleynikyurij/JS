(function () { 

function tarif() {
	let jsOverlayForm = document.querySelector('.js-overlay-thank-you'),
		close = document.querySelector('.js-overlay-popup .popup-close'),
		pricing = document.querySelector('.pricing'),
		canselBtn = document.getElementsByClassName('button popup-form__btn_2 popup-form__btn-js')[0],
		gold = document.getElementById('gold'),
		silver = document.getElementById('silver'),
		basic = document.getElementById('basic');

		

	//создаём обработчик на родительский блок
	pricing.addEventListener('click', function (e) {
		//если событие произошло на кнопке отображаем модальное окно
		if (e.target.classList.contains('pricing-block__button')) {
			jsOverlayForm.style.display = 'block';
			// проверяем на какой из кнопок произошло событие и устанавливаем соответствующую радио-кнопку в отмеченное состояние
		}
		if (e.target.classList.contains('pricing-block__button_basic')) {
			basic.checked = true;
		}
		if (e.target.classList.contains('pricing-block__button_silver')) {
			silver.checked = true;
		}
		if (e.target.classList.contains('pricing-block__button_gold')) {
			gold.checked = gold;
		}
	});

	//обработчик на элементы для закрытия окна
	jsOverlayForm.addEventListener('click', (event)=> {
		if (event.target === jsOverlayForm || event.target === canselBtn || event.target === close) {
			jsOverlayForm.style.display = "none";
		}
	});


	// close.addEventListener('click', () => {
	// 	jsOverlayForm.style.display = "none";
	// });
	// cansel.addEventListener('click', () => {
	// 	console.log(cansel);
	// 	jsOverlayForm.style.display = "none";
	// });
	// //закрытие формы при клике по подложке
	// jsOverlayForm.addEventListener('click', () => {
	// 	//определяем "подложку"
	// 	if (event.target === jsOverlayForm) {
	// 		jsOverlayForm.style.display = "none";
	// 	}
	// });


}

module.exports = tarif;
 }());