export default slider;

function slider() {

	//Слайдер 
	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');


	let showSlides = (n) => {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		//добавляем анимацию на слайд
		slides[slideIndex - 1].classList.add('animated', 'flip');
		// slides[slideIndex - 1].style.cssText = 'display:block; '
		dots[slideIndex - 1].classList.add('dot-active');

	}
	showSlides(slideIndex);

	let plusSlides = (n) => {
		showSlides(slideIndex += n);
	};

	let currentSlide = (n) => {
		showSlides(slideIndex = n);
	};

	prev.addEventListener('click', () => {
		plusSlides(-1);
	});
	next.addEventListener('click', () => {
		plusSlides(1);
	});


	dotsWrap.addEventListener('click', function (e) {
		for (let i = 0; i <= dots.length; i++) {
			if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});
};