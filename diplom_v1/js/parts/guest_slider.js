function guestSlider() {

	//Слайдер 
	let slideIndex = 1,
		slides = document.getElementsByClassName('image-box-guest')[0],
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next');
		if(!slides){return false};
		// dotsWrap = document.querySelector('.slider-dots'),
		// dots = document.getElementsByClassName('dot');


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

		slides[n-1].style.display = 'flex';

		

		slides[slideIndex - 1].style.display = 'flex';
		//добавляем анимацию на слайд
		slides[slideIndex - 1].classList.add('animated', 'flip');
		// slides[slideIndex - 1].style.cssText = 'display:block; '
		

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


	
};

module.exports = guestSlider;