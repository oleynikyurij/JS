export default slider;

function slider() {

	let slideIndex = 1,
		slides = document.getElementsByClassName('a-slide'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');
	//функция показа слайдов
	let showSlides = (n) => {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		//скрываем все слайды
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		//удаляем классы с точек
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot__active');
		}
		//отображаем нужный слайд
		slides[slideIndex - 1].style.display = 'block';
		//добавляем анимацию на слайд
		slides[slideIndex - 1].classList.add('animated', 'fadeIn');
		//делаем соответствующую точку активной
		dots[slideIndex - 1].classList.add('dot__active');
	};
	//функция отображения заданного слайда
	let currentSlide = (n) => {
		showSlides(slideIndex = n);
	};
	//первоначальный запуск слайдера
	showSlides(1);
	slideIndex = 2;
	//отображение слайдов с интервалом в 3 секунды
	setInterval(() => {
		showSlides(slideIndex);
		slideIndex++;
	}, 3000);

	//переключение на выбранный слайд
	dotsWrap.addEventListener('click', function (e) {
		for (let i = 0; i <= dots.length; i++) {
			if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});
}