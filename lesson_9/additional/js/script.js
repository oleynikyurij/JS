
window.addEventListener('DOMContentLoaded', function () {

let go = document.getElementById('go'),
		modal = document.getElementById('modal');
		close = document.getElementById('close');
		overlay = document.getElementById('overlay');

	go.addEventListener('click', ()=> {
		overlay.style.display = 'block';
		modal.style.opacity = 1;
		modal.style.top = "50%";
		modal.style.display = 'block'; 
	});

	close.addEventListener('click', ()=> {
		overlay.style.display = 'none';
		modal.style.opacity = 0;
		modal.style.top = "35%"; 
		modal.style.display = 'none'; 
	});









});







// if (document.documentMode || /Edge/.test(navigator.userAgent)) {
// 	alert('Hello Microsoft User!');
// } else {
// 	alert('Hello  User!');
// }