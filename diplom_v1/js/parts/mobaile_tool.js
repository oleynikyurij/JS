function mobaileTool() {
	let btnTool = document.querySelector('.navigation__link'),
	panel = document.querySelector('.navigation'),
	overlay = document.querySelector('.overlay-nav'),
	mobaileBtn = document.getElementsByClassName('header-main__link')[0],
			menu = document.getElementsByClassName('header-main-menu')[0];
	if(document.body.clientWidth > 768) { return false;}

	btnTool.addEventListener('touchstart', ()=> {
		
		btnTool.classList.toggle('navigation__link_active');
		panel.classList.toggle('navigation_active');
		
		if(btnTool.classList.contains('navigation__link_active')){
			mobaileBtn.classList.remove('header-nav__link_active');
			menu.classList.remove('header-nav-menu_active');
			overlay.classList.add('overlay-nav-active');
		}
	});
	overlay.addEventListener( 'touchstart', ()=> {
		btnTool.classList.remove('navigation__link_active');
		panel.classList.remove('navigation_active');
		overlay.classList.remove('overlay-nav-active');
	});

	
}

module.exports = mobaileTool;

