let nav = document.querySelector('.nav'),
	link = document.getElementsByTagName('a');

	//кнопка на верх
	let up = document.querySelector('.top');
			up.onclick = ()=> window.scrollTo(0, 0);
			

//обработчик клика меню
nav.addEventListener('click', (e) => {
	e.preventDefault();
	for (let i = 0; i < link.length; i++) {
		if (e.target === link[i]) {
			// console.log(link[i]);
			// console.log(e.target.hash);
//получаем div соответствующий пункту меню
			let divId = document.getElementById((e.target.hash).slice(1));
			// console.log(divId);

			//положение div
			let h = divId.offsetTop,
			curH = window.pageYOffset;
			console.log(h, curH);

			scrollDiv();

			//функция плавного скролла к заданному div 
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