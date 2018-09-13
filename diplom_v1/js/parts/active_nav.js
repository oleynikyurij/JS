function activNav() {
	let tabs = document.querySelectorAll('.navigation li');

	for (let i = 0; i < tabs.length; i++) {
		if (tabs[i].querySelector('a').href == window.location.href) {
			tabs[i].classList.add('active');
		}
	}
}

module.exports = activNav;