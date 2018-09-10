export default smoothScrolling;

function smoothScrolling() {
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

	let navigation = document.querySelector('.header-nav-menu');

	navigation.addEventListener('click', (e) => {
		e.preventDefault();

		//описываем анимацию
		animate(() => {
			let target = e.target;


			let section = document.getElementById(target.getAttribute('href').slice(1));

			window.scrollBy(0, section.getBoundingClientRect().top / 17 + 1.5 );
			
			
		}, 1500);
		
	});
}