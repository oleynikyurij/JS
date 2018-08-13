function getFriendlyNumbers(start, end) {

	let arrResult = [];
	//Проверка аргументов 
	if (( typeof(start) === 'number' && typeof(end) === 'number' ) && (start < end) && ( start > 0 && end > 0) && (start % 1 === 0) && (end % 1 === 0) ) {
		
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

			arrResult.push(arr);
		}
	}
	  console.log(arrResult);
		return arrResult;	

	} else {
		return false;
	}
}


 getFriendlyNumbers(1, 1);
 getFriendlyNumbers(1, 500);
 getFriendlyNumbers(1, 1200);