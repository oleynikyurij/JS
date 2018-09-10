function fon() {

	let siteBuilder = document.getElementById('site-builder'),
		minimized = document.querySelectorAll('.minimized'),
		//адhtc увеличенного изображения
		urlMaxImage = '../../img/image-max5.jpg';
	//создаём и размещаем блок для увеличенного фона
	let divImage = document.createElement('div');
	divImage.classList.add('close-popup-maxImage');
	document.body.appendChild(divImage);
	let closeMaxImage = document.querySelector('.close-popup-maxImage');

	console.log(siteBuilder);

	siteBuilder.addEventListener('click', function (e) {
		
		let target = e.target;
		console.log(target);

		if (target.className === 'minimized') {
			for (let i = 0; i < minimized.length; i++) {
				if (target === minimized[i]) {
					//отображаем увеличенную картинку
					divImage.innerHTML = `<div class="overlay-img"></div><div class="position-image" style="top: ${window.scrollY + 100}px"><img src='${urlMaxImage}'/><div id="close-popup-max">X</div></div>`;
					document.querySelector('.overlay-img').style.display = 'block';


					break;
				}
			}
		}
	});

	closeMaxImage.addEventListener('click', (e) => {
		let close = document.getElementById('close-popup-max');
		let over = document.querySelector('.overlay-img');
		if (e.target === over || e.target === close) {
			over.style.display = 'none';
			divImage.innerHTML = '';
		}
	});
};

module.exports = fon;