export default modalOpen;

function modalOpen() {


	let headerLoginBtn = document.querySelector('.header-login__button'),
			footerLoginBtn = document.querySelector('.footer-login__button'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup .popup-close');

			//обработчики на кнопки "Войти"
			headerLoginBtn.addEventListener('click', (e)=> {
				overlay.style.display = "block";
			});

			footerLoginBtn.addEventListener('click', ()=> {
				overlay.style.display = "block";
			});

			// close.addEventListener('click', ()=> {
			// 	overlay.style.display = "none";
			// });
			//закрытие формы при клике по подложке или кнопке "закрыть"
			overlay.addEventListener('click', (event)=> {
				//определяем "подложку"
				if ( event.target === overlay || event.target === close ) {
					overlay.style.display = "none";
				}
			});

};