function mobailMenu(){
	let mobaileBtn = document.getElementsByClassName('header-main__link')[0],
			menu = document.getElementsByClassName('header-main-menu')[0];
	
			mobaileBtn.addEventListener('touchstart', ()=> {
			
			mobaileBtn.classList.toggle('header-nav__link_active');
			menu.classList.toggle('header-nav-menu_active');
	});
	}
	
	module.exports = mobailMenu;