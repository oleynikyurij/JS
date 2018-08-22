window.addEventListener('DOMContentLoaded', function () {

	let go = document.getElementById('go'),
		modal = document.getElementById('modal');
	close = document.getElementById('close');
	overlay = document.getElementById('overlay');
//определяем тип браузера и в зависимости от этого применяем разные виды анимаций

//Edge и ИЕ
	if (document.documentMode || /Edge/.test(navigator.userAgent)) {

		//анимации через CSS 
		var animate = () => {
				modal.classList.add('mod');
				overlay.classList.add('overlay');
			},
			animateClose = () => {
				modal.classList.remove('mod');
				overlay.classList.remove('overlay');
			};
			//мобильные браузеры
	} else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		var animate = () => {
				overlay.style.display = 'block';
				modal.style.opacity = 1;
				modal.style.top = "50%";
				modal.style.display = 'block';
			},
			animateClose = () => {
				overlay.style.display = 'none';
				modal.style.opacity = 0;
				modal.style.top = "35%";
				modal.style.display = 'none';
			};
//все остальные браузеры
	} else {
		//анимация на открытие
		var animate = () => {
				overlay.style.display = 'block';
				modal.style.display = 'block';
				var top = 35;
				var opas = 0;
				requestAnimationFrame(function animateModal() {
					if (top <= 45) {
						modal.style.top = top + '%';
						top += 1;
					}

					if (opas <= 1) {
						modal.style.opacity = opas;
						overlay.style.opacity = opas;
						opas += 0.01;
					}

					if (opas <= 1) {
						requestAnimationFrame(animateModal);
					}
				});

			},
			//анимация на закрытие
			animateClose = () => {
				var top = 45;
				var opas = 1;
				requestAnimationFrame(function antiModal() {
					if (top >= 35) {
						modal.style.top = top + '%';
						top -= 1;
					}

					if (opas >= 0) {
						modal.style.opacity = opas;
						overlay.style.opacity = opas;
						opas -= 0.01;
					}

					if (opas >= 0) {
						requestAnimationFrame(antiModal);
					} else {
						overlay.style.display = 'none';
						modal.style.display = 'none';

					}
				});
			};
	};

//обработчик открытия модального окна
	go.addEventListener('click', () => {
		animate();
	});
//обработчик закрытия модального окна
	close.addEventListener('click', () => {
		animateClose();
	});
});