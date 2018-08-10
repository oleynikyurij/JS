let str = 'урок-3-был слишком легким';

str = str[0].toUpperCase() + str.slice(1);

console.log(str);

str = str.split('-').join(' ');
console.log(str);



str = str.substr(str.indexOf('легким'), 'легким'.length - 2) + 'о';
console.log(str);



let arr = [20, 33, 1, 'Человек', 2, 3];

let sum = 0;
for (let i = 0; i < arr.length; i++) {

	if (typeof (arr[i]) === 'number') {
		sum += arr[i] ** 3;
	}
}

console.log(Math.sqrt(sum));


function editString(params) {
	if (typeof (params) !== 'string') {
		console.log(' Аргумент функции не строка! ');
		return;
	}

	let str = params.trim();
	str = str.length > 50 ? str.slice(0, 50) + '...' : str;

	console.log(str);
}

editString('1111111111111111111111111111111111111111111111111L Аргумент фунуции длинная строка');
editString(' Аргумент функции короткая строка! ');
editString(12);