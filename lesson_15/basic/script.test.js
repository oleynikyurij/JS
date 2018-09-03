// Функция sum должна возвращать тип данных true. Проверить её на это.
function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr1 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}

test('Функция sum должна возвращать тип данных true', () => {
  expect(typeof sum(2, 2)).toBe('boolean');
});
test('Переменная num должна быть равна 5', () => {
  expect(num).toEqual(5);
});
test('Свойство length равно 5', () => {
  expect(each(arr1, myFunc)).toHaveLength(5);
});
test('Соответствие ожидаемому результату [8,7,6,5,4]', () => {
  expect(each(arr1, myFunc)).toEqual([8,7,6,5,4]);
});
test('Функция each возвращает массив', () => {
	expect(each(arr1, myFunc)).toBeInstanceOf(Array);
	
});