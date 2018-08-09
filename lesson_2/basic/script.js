var yourBudget,
	nameShop, timeWork;

yourBudget = +prompt("Ваш бюджет на месяц", "0");
nameShop = prompt("Название вашего магазина?", "");

var mainList = {
	budget: yourBudget,
	name: nameShop,
	shopGoods: [],
	employers: {},
	open: false
};

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


/* Цикл while */

// var i = 0;
// while (mainList.shopGoods.length < 5) {
// 	let a = prompt("Какой тип товаров будем продавать?", "");

// 	if ( (a !== null) && (a != '') && (a.length < 50) ){
// 		console.log('Всё верно!');
// 		mainList.shopGoods[i] = a;
// 		i++;
// 	} 
// }


/* Цикл do-while */

//  var i = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?", "");

// 	if ( (a !== null) && (a != '') && (a.length < 50) ){
// 		console.log('Всё верно!');
// 		mainList.shopGoods[i] = a;
// 		i++;
// 	} else if ( i !== 0) {
// 		i -= 1;
// 	} 
// } while ( i < 5 );


timeWork = +prompt("Время работы магазина?", "");

if ((timeWork < 0) || (timeWork > 24)) {
	console.log("такого не может быть");
} else if ((timeWork > 8) && (timeWork < 20)) {

	console.log("время работать");

} else if ((timeWork < 8) || (timeWork > 20)) {
	console.log(" Магазин закрыт");
}

alert("Бюджет на 1 день равен" + mainList.budget / 30);