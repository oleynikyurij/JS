let nav = document.querySelector('.nav'),
	link = document.getElementsByTagName('a');

	let up = document.querySelector('.top');
		
			up.onclick = ()=> window.scrollTo(0, 0);
			


nav.addEventListener('click', (e) => {
	e.preventDefault();
	for (let i = 0; i < link.length; i++) {
		if (e.target === link[i]) {
			// console.log(link[i]);
			// console.log(e.target.hash);

			let divId = document.getElementById((e.target.hash).slice(1));
			// console.log(divId);

			let h = divId.offsetTop,
			curH = window.pageYOffset;
			console.log(h, curH);

			scrollDiv();

			function scrollDiv() {

				let scroll = setInterval(function () {
					window.scrollTo(0, curH);
					curH += 50;
					if (curH >= h) {
						clearInterval(scroll)
						window.scrollTo(0, h);
					};
				}, 50);

			}

			// divId.scrollIntoView();
			// console.log(e);
		}
	}
});