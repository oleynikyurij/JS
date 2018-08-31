
export default calc;
function calc() {
	//Калькулятор

	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	let reg = /\D/g;
	//обработчмк на ввод 
	persons.addEventListener('input', function () {
		//получаем значение и приводим к числу
		personSum = +this.value;
		//проверка на "не число"
		if (this.value.match(reg)) {
			//сброс формы в начальное состояние
			this.value = '';
			totalValue.innerHTML = 0;
			//проверка на пустые поля в обоих формах
		} else if (persons.value == '' || restDays.value == '') {
			totalValue.innerHTML = 0;
		} else {
			//сброс select в начальное значение перед вычислением
			place.selectedIndex = 0;
			//вычисление результата
			total = (daysSum + personSum) * 4000;
			//запись результата в поле
				// totalValue.innerHTML = total;
				printNumber(total);
		}
	});

	restDays.addEventListener('input', function () {
		daysSum = +this.value;

		if (this.value.match(reg)) {
			this.value = '';
			totalValue.innerHTML = 0;
		} else if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			place.selectedIndex = 0;
			total = (daysSum + personSum) * 4000;
			// totalValue.innerHTML = total;
			printNumber(total);
		}
	});
	//проверка select
	place.addEventListener('change', function () {
		if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			//вычисление с учётом коэффициента select
			printNumber( a * this.options[this.selectedIndex].value);
		}
	});

	//вывод перебором цифр
	function printNumber(t) {
		let current = 0;

		 setTimeout(function print() {
			totalValue.innerHTML = current;
			if ( current < t ) setTimeout(print, 1);
			current+=100;
		}, 1);
	};
	
};




