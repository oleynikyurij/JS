function fotoGuest() {

	if (window.location.pathname != '/photo-guests.php') {
		return false;
	};

	let prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		slider = document.getElementById('slide-guest'),
		itemSlide = slider.getElementsByTagName('DIV');


	prev.addEventListener('click', () => {
		move(-1);
	});
	next.addEventListener('click', () => {
		move(1);
	});


	function move(x) {

		let obj = itemSlide[((x < 0) ? 0 : (itemSlide.length - 1))],
			clone = obj.cloneNode(1);
		console.log(obj, clone, x);
		if (x < 0) {
			slider.appendChild(clone);
		} else {
			slider.insertBefore(clone, itemSlide[0]);
		}
		slider.removeChild(obj);
	}
}



module.exports = fotoGuest;