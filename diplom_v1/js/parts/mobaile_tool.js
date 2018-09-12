function mobaileTool(params) {
	let btnTool = document.querySelector('.navigation__link'),
	panel = document.querySelector('.navigation'),
	mobaileBtn = document.getElementsByClassName('header-main__link')[0],
			menu = document.getElementsByClassName('header-main-menu')[0];

	btnTool.addEventListener('touchstart', ()=> {

		btnTool.classList.toggle('navigation__link_active');
		panel.classList.toggle('navigation_active');
		
		if(btnTool.classList.contains('navigation__link_active')){
			mobaileBtn.classList.remove('header-nav__link_active');
			menu.classList.remove('header-nav-menu_active');
		}
	});

	
}

module.exports = mobaileTool;

