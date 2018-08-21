//  Необходимо реализовать автодополнение. При введении в инпут первых букв страны - появляется список стран, которые начинаются на те буквы, которые вы ввели. Чем больше букв вы вводите - тем меньше стран в списке. Страну можно выбрать, кликнув по ней мышкой - в этом случае ее название появится в инпуте.



let countries = ["Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола", "Андорра", "Антигуа и Барбуда", "Антильские острова", "Аргентина", "Армения", "Афганистан", "Багамские острова", "Бангладеш", "Барбадос", "Бахрейн", "Белиз", "Белоруссия", "Бельгия", "Бенин", "Болгария", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Буркина-Фасо", "Бурунди", "Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Голландия", "Гондурас", "Гонконг", "Гренада", "Гренландия", "Греция", "Грузия", "Гуам", "Дания", "Демократическая Республика Конго", "Джибути", "Доминиканская республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Киргизия", "Кирибати", "Китай", "КНДР", "Колумбия", "Коморские острова", "Коста-Рика", "Кот-д'Ивуар", "Куба", "Кувейт", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Македония", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта", "Марокко", "Мартиника", "Мексика", "Микронезия", "Мозамбик", "Молдавия", "Монако", "Монголия", "Мьянма", "Намибия", "Непал", "Нигер", "Нигерия", "Никарагуа", "Новая Зеландия", "Новая Каледония", "Норвегия", "ОАЭ", "Оман", "Пакистан", "Палестина", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Польша", "Португалия", "Пуэрто-Рико", "Республика Конго", "Республика Корея", "Россия", "Руанда", "Румыния", "Сальвадор", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Свазиленд", "Сенегал", "Сент-Китс и Невис", "Сент-Люсия", "Сербия", "Сингапур", "Сирия", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Судан", "Суринам", "США", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания", "Того", "Тонга", "Тринидад и Тобаго", "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина", "Уругвай", "Фиджи", "Филиппины", "Финляндия", "Франция", "Французская Гвиана", "Хорватия", "Центральноафриканская Республика", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "ЮАР", "Ямайка", "Япония"];

let inpt = document.getElementById('country');
let list = document.getElementById('list');

//обработчик на поле "инпут"
inpt.addEventListener('input', () => {
	//меняем регистр
	let inptVal = inpt.value.toUpperCase();
	clearList(list);

	let tempArr = [];
	
	for (let i = 0; i < inptVal.length; i++) {
		//результаты промежуточного поиска
		tempArr = searchArr();
		//очистка старого списка
		clearList(list);
		//записываем новый список
		writeList(tempArr);

	}
	// console.log(tempArr);

	//поиск совпадений в основном массиве
	function searchArr() {
		let arr = [];
		for (let i = 0; i < countries.length; i++) {
			if (countries[i].substr(0, inptVal.length).toUpperCase() == inptVal) {
				arr.push(countries[i]);
			}
		}
		return arr;
	}

	//вывод списка стран
	function writeList(arr) {

		//создание списка из отсортировванных стран
		arr.forEach((elem) => {
			//создаём элемент div
			let div = document.createElement('div');
			div.textContent = elem;
			div.classList.add('div');
			// console.log(elem);
			//добавляем в список
			list.appendChild(div);
		});
	}

	//очистка спискаа
	function clearList(el) {
		el.innerHTML = '';
	}

	//обработчик на созданный список
	list.addEventListener('click', (e) => {
		// console.log(e);
		let listDiv = document.querySelectorAll('.div');
		if (e.target.className === 'div') {
			for (let i = 0; i < listDiv.length; i++) {
				if (e.target === listDiv[i]) {
					// console.log(listDiv[i].innerHTML);
					inpt.value = listDiv[i].innerHTML;
					clearList(list);
					break;
				}
			}
		}
	});

});