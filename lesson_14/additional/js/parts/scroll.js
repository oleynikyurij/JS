export default scroll;

function scroll() {
	//Плавная прокрутка
	function animate(draw, duration) {

		let start = performance.now();

		requestAnimationFrame(function animate(time) {

			let timePassed = time - start;

			if (timePassed > duration) {
				timePassed = duration;
			}

			draw(timePassed);

			if (timePassed < duration) {
				requestAnimationFrame(animate);
			}

		});
	};

	let navigation = document.querySelector('nav');

	navigation.addEventListener('click', (e) => {
		e.preventDefault();

		//описываем анимацию
		animate((timePassed) => {
			let target = e.target;

			let section = document.getElementById(target.getAttribute('href').slice(1));

			window.scrollBy(0, section.getBoundingClientRect().top / 20);
		}, 1500);

	});
};