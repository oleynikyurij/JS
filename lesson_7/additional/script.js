let rocket = document.querySelector('.rocket'),
	start = document.querySelector('.start');

//стартовые значения из CSS
let countUP = parseInt(getComputedStyle(rocket).bottom),
		countLF = parseInt(getComputedStyle(rocket).left);
//запуск анимации по клику на кнопку
start.addEventListener('click', () => {

	//отключение кнопки на время анимации
	start.disabled = true;

	//анимация
	requestAnimationFrame(function flyRocket() {
		if (countUP <= 380) {
			rocket.style.bottom = countUP + 'px';
			countUP += 1;
		}
		if (countUP === 115) {
			rocket.classList.add('turn');
		}
		if (countUP > 115) {
			rocket.style.left = countLF + 'px';
			countLF += 1;
		}
		if (countUP === 380) {

			rocket.classList.add('turn45');
		}

		//проверка условия на запуск анимации
		if (countLF < 900) {
			requestAnimationFrame(flyRocket);
		} else {
			//сброс в исходное состояние
			rocket.style.left = 0 + 'px';
			rocket.style.bottom = 13 + 'px';
			rocket.classList.remove('turn45');
			rocket.classList.remove('turn');
			countUP = 13,
				countLF = 0;
			start.disabled = false;
		}


	});

});