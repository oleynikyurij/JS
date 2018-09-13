function fon() {

	let siteBuilder = document.getElementById('site-builder'),
		minimized = document.querySelectorAll('.minimized');
		//адhtc увеличенного изображения
		// urlMaxImage = '../../img/image-max5.jpg';
	//создаём и размещаем блок для увеличенного фона
	if(!siteBuilder){ return false;}
	let divImage = document.createElement('div');
	divImage.classList.add('close-popup-maxImage');
	document.body.appendChild(divImage);
	let closeMaxImage = document.querySelector('.close-popup-maxImage');
	
	siteBuilder.addEventListener('click', function (e) {
		
		let target = e.target;

		if (target.className === 'minimized') {
			for (let i = 0; i < minimized.length; i++) {
				if (target === minimized[i]) {
					
					//отображаем увеличенную картинку
					// minimized[i].classList.add('minimaze-max');
					divImage.innerHTML = `<div class="overlay-img"></div><div class="position-image" ><img class="minimaze-max" src='${target.src}'/><div id="close-popup">X</div></div>`;
					document.querySelector('.overlay-img').style.display = 'block';

					break;
				}
			}
		}
	});

	closeMaxImage.addEventListener('click', (e) => {
		let close = document.getElementById('close-popup');
		let over = document.querySelector('.overlay-img');
		if (e.target === over || e.target === close) {
			over.style.display = 'none';
			divImage.innerHTML = '';
		}
	});
}

module.exports = fon;