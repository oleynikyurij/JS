let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let date = new Date(); // Текущая дата
let todayDay = date.getDay(); // Номер дня недели

// let todayDay = 0;

for (let i = 0; i < week.length; i++) {

	if ((week[i] === "Воскресенье") && (i === todayDay)) {
		document.write(week[i].bold().italics() + "<br>");
	} else if (week[i] === "Воскресенье") {
		document.write(week[i].bold() + "<br>");
	} else if (i === todayDay) {
		document.write(week[i].italics() + "<br>");
	} else {
		document.write(week[i] + "<br>");
	}

}


// Часть два
let arr = ["232444", "3454566", "454656565", "74565", "35667", "454565", "708764"];

for (let i = 0; i < arr.length; i++) {
	
	if (arr[i][0] === "3" || arr[i][0] === "7" ) {
		console.log(arr[i]);
	}
	
}
