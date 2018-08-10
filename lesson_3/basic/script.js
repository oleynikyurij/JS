let yourBudget;
let nameShop;
let timeWork;
let price = 100;

start();

let mainList = {
	budget: yourBudget,
	name: nameShop,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
};


choseGoods();
workTime(timeWork);
getDayBudget();
setDiscountShop(55);
employers();

console.log(mainList);
console.log(price);





function start() {

	do {
		yourBudget = prompt("Ваш бюджет на месяц", "");
	} while (isNaN(yourBudget) || yourBudget === '' || yourBudget === null);

	nameShop = prompt("Название вашего магазина?", "Имя").toUpperCase();
	timeWork = +prompt("Время работы магазина?", "10");

};


function choseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?", "");

		if ((a != null) && (a != '') && (a.length < 50)) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
		} else {
			console.log('Не верно!');
			i = i - 1;
		}
	}
};


function workTime(timeWork) {
	if ((timeWork < 0) || (timeWork > 24) ) {
		console.log("такого не может быть");
	} else if ((timeWork > 8) && (timeWork < 20)) {
		console.log("время работать");
	} else  {
		console.log(" Магазин закрыт");
	}
};


function getDayBudget() {

	alert("Бюджет на 1 день равен" + (mainList.budget / 30).toFixed(2));
};


function setDiscountShop(pr) {

	price = mainList.discount ? +(pr * 0.8).toFixed(2) : pr;
};


function employers() {

	for (let i = 1; i < 5; i++) {
		let a = prompt("Введите имя сотрудника", "");

		if ( (a != null) && (a != '') ) {
			mainList.employers[i] = a;
		} else {
			i--;
		}
	}
}