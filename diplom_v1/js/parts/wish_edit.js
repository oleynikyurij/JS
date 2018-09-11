function wishEdit() {

	let tab = document.getElementsByClassName('location-button__map'),
		item = document.querySelectorAll('.book-block__item'),
		inputWish = document.getElementsByClassName('text-wish'),
		inputGreet = document.getElementsByClassName('text-greet'),
		textWish = document.querySelectorAll('#second .book-block__text'),
		textGreet = document.querySelectorAll('#first .book-block__text'),
		resetBtn = document.getElementsByClassName('choice__btn choice__btn-4')[0],
		sendWish = document.getElementsByClassName('form-box-button__main button button__big')[0],
		sendGreet = document.getElementsByClassName('form-box-button__main button button__big')[1],
		slideIndex = 1,
		slidesWish = document.getElementsByClassName('a-slide-book'),
		dotsWrap = document.querySelector('.slick-book-dots'),
		prev = document.querySelector('.prev-slide'),
		next = document.querySelector('.next-slide'),
		dots = document.getElementsByClassName('slick-book-dot'),
		wishDefault = ['Пожелание', 'Любите крепко, мечтайте красиво, живите роскошно и всегда поддерживайте друг друга!', `Свои судьбы вы соединили <br>Крепкою любовью, молодые, <br>Счастьем своим солнышко затмили <br>И просторы ярко-голубые! <br>Поздравляем вас с днем обручения, <br>Будьте вы друг другу вдохновением! <br>`],
		greetsDefault = ['Поздравление', 'Поздравляю, дорогие. Хочу вам пожелать долгой и счастливой совместной жизни', 'Как важно, чтобы люди находили друг друга, находили свою любовь и половинку! Вы нашли! Я вас поздравляю со свадьбой, с любовью, с новой жизнью! Желаю много очень крепкой, верной, всепобеждающей любви, но и не меньше терпения и смирения! Понимайте друг друга, прощайте друг другу, учитесь быть вместе с радостью в сердце! Приятных вам долгих дней и жарких ночей! Не серых, а цветных будней, ярких выходных и праздников! Детишек вам полный дом и благополучия!'];

	if (window.location.pathname != '/book-wishes.php') {
		return false;
	};
	//переключение табов
	for (let i = 0; i < tab.length; i++) {
		// console.log(tab);
		tab[i].addEventListener('click', function () {
			for (let i = 0; i < tab.length; i++) {
				tab[i].classList.remove('book-active-tab');
			};
			this.classList.toggle('book-active-tab');
			//активный таб в соответствии с кнопкой
			for (let j = 0; j < item.length; j++) {
				item[j].classList.toggle('wish-active');
			}
		});
	};


	//функция показа слайдов
	let showSlides = (n) => {
		if (n > slidesWish.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slidesWish.length;
		}
		for (let i = 0; i < slidesWish.length; i++) {
			slidesWish[i].style.display = 'none';
		}
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('slick-active');
		}
		slidesWish[slideIndex - 1].style.display = 'block';
		slidesWish[slideIndex - 1].classList.add('animated', 'fadeIn');
		dots[slideIndex - 1].classList.add('slick-active');
	};
	let currentSlide = (n) => {
		showSlides(slideIndex = n);
	};
	let plusSlides = (n) => {
		showSlides(slideIndex += n);
	};
	showSlides(1);
	slideIndex = 2;
	setInterval(() => {
		showSlides(slideIndex);
		slideIndex++;
	}, 3000);
	prev.addEventListener('click', () => {
		plusSlides(-1);
	});
	next.addEventListener('click', () => {
		plusSlides(1);
	});
	dotsWrap.addEventListener('click', function (e) {
		for (let i = 0; i <= dots.length; i++) {
			if (e.target.classList.contains('slick-book-dot') && e.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});

	sendWish.addEventListener('click', function (e) {
		e.preventDefault();
		// console.log(inputWish);
		setText(inputWish, textWish);
		resetText(inputWish);
	});

	sendGreet.addEventListener('click', function (e) {
		e.preventDefault();
		setText(inputGreet, textGreet);
		resetText(inputGreet);
	});

	resetBtn.addEventListener('click', function () {
		for (let i = 0; i < wishDefault.length; i++) {
			textWish[i].innerHTML = wishDefault[i];
		}
		for (let i = 0; i < greetsDefault.length; i++) {
			textGreet[i].innerHTML = greetsDefault[i];
		}
	});

	function setText(input, text) {
		for (let i = 0; i < input.length; i++) {
			text[i].innerHTML = input[i].value;
		}
	}

	function resetText(input) {
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	}

};

module.exports = wishEdit;