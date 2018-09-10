 export default videoVidget;

 function videoVidget() {

	let yuotube = document.querySelector('.youtube'),
			adressVideo = document.getElementById('adress-video'),
			addVideoBtn = document.getElementsByClassName('form-button__add button button__big')[0],
			
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

	let urlVideo = 'https://www.youtube.com/embed/q_th_D4VHC0?rel=0';

			let addVideo = (url) => {
				let iframe =`
				<iframe width="655" height="403" src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`;
				//изменяем стили элемента для корректного отображения видео
				yuotube.classList.add('not-before');
				//добавляем yuotube на страницу
				yuotube.innerHTML = iframe;
			};
			//устанавливаем обработчик для запуска yuotube
			yuotube.addEventListener('click', ()=> {
				addVideo(urlVideo);
			});

			addVideoBtn.addEventListener('click', (e)=> {
				e.preventDefault();
				let url = adressVideo.value;
				//замена в строке адреса для корректного отображения
				url =	url.replace(/watch\?v=/, 'embed/');
				addVideo(url);
				adressVideo.value = '';
			});

}