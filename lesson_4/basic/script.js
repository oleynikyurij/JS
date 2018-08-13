let yourBudget;
let nameShop;
let timeWork;
let price = 100;

// start();

let mainList = {
	budget: yourBudget,
	name: nameShop,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	choseGoods: function choseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товаров будем продавать?", "");

			if ((typeof (a) === 'string') && (a != null) && (a != '') && (a.length < 50)) {
				console.log('Всё верно!');
				mainList.shopGoods[i] = a;
			} else {
				console.log('Не верно!');
				i = i - 1;
			}
		}
	},
	workTime: function workTime(timeWork) {
		if ((timeWork < 0) || (timeWork > 24)) {
			console.log("такого не может быть");
		} else if ((timeWork > 8) && (timeWork < 20)) {
			console.log("время работать");
			mainList.open = true;
		} else {
			mainList.open = false;
			console.log(" Магазин закрыт");
		}
	},
	getDayBudget: function getDayBudget() {

		alert("Бюджет на 1 день равен" + (mainList.budget / 30).toFixed(2));
	},
	hireEmployers: function hireEmployers() {

		for (let i = 1; i < 5; i++) {
			let a = prompt("Введите имя сотрудника", "");

			if ((a != null) && (a != '')) {
				mainList.employers[i] = a;
			} else {
				i--;
			}
		}
	},
	makeDiscountShop: function makeDiscountShop() {

		price = mainList.discount ? +(price * 0.8).toFixed(2) : price;
	},
	chooseShopItems: function chooseShopItems() {
		let items;
    // Функция проверки введённой строки
		function checkString(text) {
		
			function inputText(text) {
				do {
					items = prompt(text, "");
				} while (items === null || items === '');
			};
			// Проверка на число
			function isNumeric(n) {
				return !isNaN(parseFloat(n)) && isFinite(n);
			};

			top:
				while (true) {
					inputText(text);
					let arr = [];
					let count = 0;
					arr = items.split(',');
					
					for (let i = 0; i < arr.length; i++) {
						if (isNumeric(arr[i])) {
							count++;
						} 
					}

					if ( count === 0) {
						break top;
					}
					
				};
				return items;
		}

		

		checkString("Перечислите, через запятую, Ваши товары");

		mainList.shopItems = items.split(",");
		mainList.shopItems.push(checkString("Подождите, есть ещё"));
		mainList.shopItems.sort();



		console.log("У нас вы можете купить: ");
		mainList.shopItems.forEach(function (item, i, arr) {
			i = i + 1;
			console.log(i + ' : ' + item);
		});

	}
};

function start() {

	do {
		yourBudget = prompt("Ваш бюджет на месяц", "");
	} while (isNaN(yourBudget) || yourBudget === '' || yourBudget === null);

	nameShop = prompt("Название вашего магазина?", "Имя").toUpperCase();
	timeWork = +prompt("Время работы магазина?", "10");

};

console.log("наш магазин включает в себя:");
for (let key in mainList) {
	console.log(key + ' : ' + mainList[key]);
}