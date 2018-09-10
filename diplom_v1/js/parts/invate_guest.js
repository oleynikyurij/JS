function inviteGuest() {
	let editBtn = document.getElementsByClassName('choice__btn choice__btn-1')[0],
			title = document.querySelector('.invitation-block__pretitle'),
			name = document.querySelector('.invitation-block__title'),
			date = document.querySelector('.invitation-block__subtitle'),
			adress = document.querySelector('.invitation-block__adress'),
			deleteBtn = document.getElementsByClassName('choice__btn choice__btn-4')[0],
			modal = document.getElementById('invate-modal');

			

			editBtn.addEventListener('click', (e)=> {
				console.log('object');
				e.preventDefault();
				modal.style.display = "block";
			});

			deleteBtn.addEventListener('click', ()=> {
					let input = document.querySelectorAll('.invate-modal-input input');

					for (let i = 0; i < input.length; i++) {
						input[i].value = '';
					};
					
					setTimeout(()=> {
						modal.style.display = "none"}, 2000);
				
			});


};

module.exports = inviteGuest;