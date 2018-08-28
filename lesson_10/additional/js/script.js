let inpt = document.getElementById('number'),
	mask = "+38(";

//запись маски в поле при фокусе	
inpt.addEventListener('focus', () => {
	inpt.value = mask;
});

inpt.addEventListener('input', function () {

	//получаем значение из поля ввода без учёта маски
	let val = this.value.substring(4);

	//проверка введённого символа
	if (!checkValue(val)) {
		this.value = '';
	} else {
		//запись в поле маски и отформатированного номера
		this.value = mask + maskPhone(checkValue(val));
	};
	//запрет на удаление маски номера из поля ввода
	if (this.value.length == 0) {
		this.value = mask;
	}
	console.log(val, this.value.length, this.value);

	//проверка на символ и удаление не цифровых символов
	function checkValue(val) {
		//замена всех "не цифр" на пустое поле
		let currentVal = val.replace(/[^\d]+/g, '');
		if (currentVal === '') {
			return false;
		} else {
			//ограничение длинны номера 10 символами
			return currentVal.substring(0, 10);
		}
	}

	//наложение маски на  номер
	function maskPhone(phone) {
		let number = '';
		for (let i = 0; i < phone.length; i++) {
			if (i === 3) {
				number += ') ';
				number += phone.charAt(i);
			} else if (i === 6 || i === 8) {
				number += '-';
				number += phone.charAt(i);
			} else {
				number += phone.charAt(i);
			}
		}
		return number;
	}
});