

let age = document.getElementById('age');


function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
};
showUser.call(age,'ivan', "Ivanov");

let showUser1 = showUser.bind(age, "Ivan", "Ivanov");

showUser1();

