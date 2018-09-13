

function transitionPage() {
	let elemBtn = document.getElementsByClassName('header-button__main button button__big')[0];

	elemBtn.onclick = () => {
		window.location.pathname = "site-builder.php";
	};
}

module.exports = transitionPage;