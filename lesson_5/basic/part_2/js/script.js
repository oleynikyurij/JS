//Получить кнопку "Открыть магазин" через id
let btnOpenShop = document.getElementById('open-btn');

//Получить все поля в левом меню через классы
let nameValue = document.getElementsByClassName('name-value')[0];
let budgetValue = document.getElementsByClassName('budget-value')[0];
let goodsValue = document.getElementsByClassName('goods-value')[0];
let itemsValue = document.getElementsByClassName('items-value')[0];
let employersValue = document.getElementsByClassName('employers-value')[0];
let discountValue = document.getElementsByClassName('discount-value')[0];
let isopenValue = document.getElementsByClassName('isopen-value')[0];

//Получить поля категории товаров через класс
let goods1 = document.getElementsByClassName('goods-item')[0];
let goods2 = document.getElementsByClassName('goods-item')[1];
let goods3 = document.getElementsByClassName('goods-item')[2];
let goods4 = document.getElementsByClassName('goods-item')[3];

//Получить все 3 кнопки через Tag
let btnGoodsItem = document.getElementsByTagName('button')[1];
let btnCountBudget = document.getElementsByTagName('button')[2];
let btnHireEmployers = document.getElementsByTagName('button')[3];

//Получить поля ввода товаров, времени и расчета бюджета через querySelector
let choseItem = document.querySelector('.choose-item');
let timeValue = document.querySelector('.time-value');
let countBudgetValue = document.querySelector('.count-budget-value');

//Получить поля имен сотрудников через querySelectorAll
let hireEmployers1 = document.querySelectorAll('.hire-employers-item')[0];
let hireEmployers2 = document.querySelectorAll('.hire-employers-item')[1];
let hireEmployers3 = document.querySelectorAll('.hire-employers-item')[2];
