function getFriendlyNumbers(start, end) {
	let arrResult = [];
	//Проверка аргументов 
	if (( typeof(start) === 'number' && typeof(end) === 'number' ) && (start < end) && ( start > 0 && end > 0) && (start % 1 === 0) && (end % 1 === 0)    ) {
		
			//сумма делителей числа
			function getDelitelSum(num) {
				let sum = 0;

				for (let i = 1; i < num; i++) {
					if (num % i === 0) {
						sum = sum + i;
					}
				}
				return sum;
			};

	//Проверка на дружественные числа		
	let tempSum;

	for (let i = start; i <= end; i++) {

		tempSum = getDelitelSum(i);
		let arr = [];
		if (getDelitelSum(tempSum) === i && tempSum > i) {

			arr.push(i);
			arr.push(tempSum);

			arrResult.concat(arr);
		}
	}
	  
		return arrResult;	

	} else {
		return [];
	}
}

module.exports = {
    firstName: 'Yurij',
    secondName: 'Oleynik',
    task: getFriendlyNumbers
}