let inpt = document.getElementById('number'),
	mask = "+38(";

inpt.addEventListener('focus', () => {
	inpt.value = mask;
});

inpt.addEventListener('keypress', function () {

	let val;
	val = this.value.substring(3).replace(/[^\d]+/g, '');
	console.log(val);

	if (val.length < 3) {
		this.value = `${mask}${val}`;
	} else if (val.length === 3) {
		var temp = this.value;
		this.value = `${temp})`;

	} else if (val.length == 6 || val.length == 8) {
		temp = this.value;
		this.value = `${temp}-`;
		temp = temp;
	} else if (val.length > 8) {
		temp = this.value.substring(0, 16);

		this.value = `${temp}`;
	}

});


// if (!(/^(?!a\-z$)(?!A\-Z$)(?!а\-я$)(?!А\-Я$)([+]{1}[0-9]{2} [(]{1}[0-9]{3}[)]{1} [0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2})$/.test(inpt.value))) {
// 	inpt.value = ;
// }
// inpt.value = "+38 (___) ___-__-__"; 

//  /^(?!a\-z$)(?!A\-Z$)(?!а\-я$)(?!А\-Я$)([+]{1}[0-9]{2} [(]{1}[0-9]{3}[)]{1} [0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2})$/