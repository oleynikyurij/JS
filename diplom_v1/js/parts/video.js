

function videoPlayer() {
	let yuotube = document.querySelector('.youtube'),
			//создаём элементы картинок
			preview = document.createElement('img'),
			playBtn = document.createElement('img');
			//устанавливаем необходимые стили css
			yuotube.style.cssText += `position: relative; cursor: pointer;`;
			playBtn.style.cssText = `position: absolute;
															 top: 45%;
															 left: 45%;`;												
			preview.src = '../../img/video/video-bg.jpg';
			preview.setAttribute('alt', 'video');
			playBtn.src = '../../img/video/button-play.png';
			preview.setAttribute('alt', 'play');
			//добавляем картинки в заданный блок
			yuotube.appendChild(preview);
			yuotube.appendChild(playBtn);

			let addVideo = () => {
				let iframe =`
				<iframe width="655" height="403" src="https://www.youtube.com/embed/q_th_D4VHC0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`;
				//изменяем стили элемента для корректного отображения видео
				yuotube.classList.add('not-before');
				//добавляем yuotube на страницу
				yuotube.innerHTML = iframe;
			};
			//устанавливаем обработчик для запуска yuotube
			yuotube.addEventListener('click', addVideo);
}

module.exports = videoPlayer;