function inviteGuest() {
	let editBtn = document.getElementsByClassName('choice__btn choice__btn-1')[0],
		deleteBtn = document.getElementsByClassName('choice__btn choice__btn-4')[0],
		modal = document.getElementById('invate-modal'),
		saveBtn = document.querySelector('.invate-modal-input-save');
	let input = document.querySelectorAll('.invate-modal-input input'),
		starValue = ['Приглашаем Вас на торжество по случаю нашего бракосочетания', 'Андрей и Марина', '23 сентября в 13:00', 'г. Москва, ул. Комсомольская, 37. Ресторан “Прага'];
	if (!modal) {
		return false
	};

	editBtn.addEventListener('click', (e) => {
		console.log('object');
		e.preventDefault();
		modal.style.display = "block";
	});

	saveBtn.addEventListener('click', function (e) {
		e.preventDefault();

		let invateBlock = document.querySelectorAll('.invitation-block__item div');

		for (let i = 0; i < invateBlock.length; i++) {
			if (input[i].value) {
				// console.log(input[i].value);
				invateBlock[i].innerHTML = input[i].value;
				input[i].value = '';
			} else {
				for (let j = 0; j < invateBlock.length; j++) {
					invateBlock[j].innerHTML = starValue[j];
					input[j].value = '';
				};
				modal.style.display = "none";
			}

		};
		setTimeout(() => {
			modal.style.display = "none"
		}, 1000);
	})

	deleteBtn.addEventListener('click', () => {
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		};

		setTimeout(() => {
			modal.style.display = "none"
		}, 1000);
	});
};

module.exports = inviteGuest;