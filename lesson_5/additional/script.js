let date = new Date();
var options = {
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	year: 'numeric',
	month: 'numeric',
	day: 'numeric'
};
console.log(date.toLocaleString("ru", options));

let formatDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + date.getDate() + ':' + (date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + ':' + date.getFullYear();
console.log(formatDate);

//Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые //состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
function formatingDate(date) {

	let day = date.getDate();
	day = (day < 10) ? '0' + day : day;

	let month = date.getMonth() + 1;
	month = (month < 10) ? '0' + month : month;

	let year = date.getFullYear();

	return day + ':' + month + ':' + year;
}

console.log(formatingDate(date));
let str1 = formatingDate(date);
document.getElementById('dat').textContent = str1;

//Напишите функцию, которая выводит на страницу текущий день недели на русском //языке
function russianDay(date) {
	// let day;
	// switch (date.getDay()) {
	// 	case 0:
	// 		day = "Воскресение"; 
	// 		break;
	// 	case 1:
	// 		day = "Понедельник";
	// 		break;
	// 	case 2:
	// 		day = "Вторник";
	// 		break;
	// 	case 3:
	// 		day = "Среда";
	// 		break;
	// 	case 4:
	// 		day = "Четверг";
	// 		break;
	// 	case 5:
	// 		day = "Пятница";
	// 		break;
	// 	case 6:
	// 		day = "Суббота";
	// 		break;

	// 	default:
	// 	day = "Вы не в нашем измерении";
	// 		break;
	// }

	// return day;

	let arrDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	return arrDay[date.getDay()];
}
console.log(russianDay(date));

let todayDay = document.querySelector('.day-today');

todayDay.textContent = russianDay(date);

// Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней
function quantDay() {
	let date1 = Date.parse(document.getElementById('date1').value) ||  Date.now();
	let date2 = Date.parse(document.getElementById('date2').value) ||  Date.now();

	let quant = (Math.abs(date2 - date1) / (24 * 60 * 60 *1000)).toFixed();

	document.getElementById('quantity-day').value ='прошло дней ' + quant;
	
}
