function guestList() {

	let list1 = [],
		list2 = [],
		list3 = [],
		
		input = document.getElementsByClassName('form-addguest-box__text'),
		deleteBtn = document.getElementsByClassName('choice__btn choice__btn-4')[0],		
		btnSend = document.getElementsByClassName('form-button__add button button__big')[0],
		builder1 = document.querySelector('.builder1-block'),
		builder2 = document.querySelector('.builder2-block'),
		builder3 = document.querySelector('.builder3-block'),
		builderPerson1 = document.getElementsByClassName('builder1-block__text'),
		builderPerson2 = document.getElementsByClassName('builder1-block__text'),
		builderPerson3 = document.getElementsByClassName('builder1-block__text'),
		column = 1;
    if (window.location.pathname != '/guest-list.php') {
			return false;
		}
	function init(arr, l) {
		for (let i = 0; i < arr.length; i++) {
			l[i] = arr[i].textContent;
		}
	}
	//запоминаем начальный список
	init(builderPerson1, list1);
	init(builderPerson2, list2);
	init(builderPerson3, list3);
  //обработчик на поле ввода запрет отправки
	for (let i = 0; i < input.length; i++) {
		input[i].addEventListener('keyup', checkGuest);
		}
  //запись гостя
	btnSend.addEventListener('click', (e) => {
		e.preventDefault();
		let p = document.createElement('p');
		p.innerHTML = `${input[0].value} ${input[1].value}`;
		p.classList.add(`builder${column}-block__text`);
		p.innerHTML = `${input[0].value} ${input[1].value}`;
		//помещаем гостей поочерёдно в разные колонки
		switch (column) {
			case 1:
			builder1.appendChild(p);
			column++;
			break;
			case 2:
			builder2.appendChild(p);
			column++;
			break;
			case 3:
			builder3.appendChild(p);
			column++;
			break;
		}
		//проверка номера колонки
		column = column > 3 ? 1 : column;
		//очистка полей ввода
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});
  //сброс к первоначальному состоянию
	deleteBtn.addEventListener('click', (e)=> {
	 e.preventDefault();
	 //очищаем колонки
	 builder1.innerHTML = '';
	 builder2.innerHTML = '';
	 builder3.innerHTML = '';
	 //записываем сохранённые данные по колонкам (надо сделать функцию.... потом:))))
	 for (let i = 0; i < list1.length; i++) {
		let p = document.createElement('p');
		p.innerHTML = list1[i];
		p.classList.add('builder1-block__text');
		builder1.appendChild(p);		 
	 }
	 for (let i = 0; i < list2.length; i++) {
		let p = document.createElement('p');
		p.innerHTML = list2[i];
		p.classList.add('builder2-block__text');
		builder2.appendChild(p);		 		 
	 }
	 for (let i = 0; i < list3.length; i++) {
		 let p = document.createElement('p');
		p.innerHTML = list3[i];
		p.classList.add('builder3-block__text');
		builder3.appendChild(p);		 		 
	 }
	 //инициализируем счётчик
	 column = 1;
	});
  //проверка на заполнение полей и блокирование кнопки "добавить"
	function checkGuest() {
		if (input[0].value === '' || input[1].value === '') {
			btnSend.disabled = true;
		} else {
			btnSend.disabled = false;
		}
	}
	
}

module.exports = guestList;