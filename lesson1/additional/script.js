var num = "33721";

var composition = +num[0] * +num[1] * +num[2] * +num[3] * +num[4];


// var stepen = Math.pow(composition, 3);

var stepen = composition ** 3;

var resultTwo = (""+stepen).slice(0, 2);

alert(resultTwo);

console.log(composition, stepen, resultTwo);