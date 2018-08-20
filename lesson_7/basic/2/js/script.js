//получаем элементы на странице
let start = document.getElementById('start'),
		stop = document.getElementById('stop'),
		hour = document.getElementsByClassName('hour')[0],
		min = document.getElementsByClassName('min')[0],
		sec = document.getElementsByClassName('sec')[0];

let count = 0,
		timerID;


//инициализация страницы
initTimer();
clearInterval(timerID);
//запуск таймера
start.addEventListener('click', ()=> {
	timerID = setInterval(timer, 1000);

});
//сброс и остановка таймера
stop.addEventListener('click', ()=> {
	clearInterval(timerID);
	initTimer();
});


function initTimer() {
		hour.textContent = "00",
		min.textContent = "00",
		sec.textContent = "00"

}

//функция таймера
function timer() {
	let date = new Date();
	let h = date.getHours(),
		m = date.getMinutes(),
		s = date.getSeconds();
//проверка на разрядность
	if (h < 10) {
		h = '0' + h;
	}
	if (m < 10) {
		m = '0' + m;
	}
	if (s < 10) {
		s = '0' + s;
	}
//запись в поле
	hour.textContent = h;
	min.textContent = m;
	sec.textContent = s;

}