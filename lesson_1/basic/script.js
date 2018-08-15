var yourBudget,
	nameShop; 

yourBudget = +prompt("Ваш бюджет на месяц", "0");
nameShop = prompt("Название вашего магазина?", "");

var mainList = {
	budget: yourBudget,
	name: nameShop, 
	shopGoods: [], 
	employers: {},
	open : false
};

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?", "тип товара");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?", "тип товара");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?", "тип товара");


alert("Бюджет на 1 день равен" + mainList.budget / 30);