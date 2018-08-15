let menu = document.querySelector('.menu');

//коллекция элементов LI
let item = document.querySelectorAll('.menu-item');
//Сохранили "Третий пункт" Поставили на место "второй пункт"
let tmp = menu.replaceChild(item[2], item[1]);;

//Поставили на место "второй пункт"
// menu.replaceChild(item[2], item[1]);
//вставили "третий пункт"
menu.insertBefore(tmp, item[3]);

//Создаём и вставляем "пятый пункт"
let newItem = document.querySelector('.menu-item').cloneNode(false);newItem.textContent = 'Пятый пункт';
menu.appendChild(newItem);

//замена фонового изображение в body 
document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

//замена заголовка
title.textContent ='Мы продаём только подлинную технику Apple';

//удаление рекламы
let adv = document.getElementsByClassName('adv');
let column = document.body.getElementsByClassName('column');
column[1].removeChild(adv[0]);

//вопрос и запись ответа
let text = prompt("Ваше отношение к технике Apple?", "");
document.getElementById('prompt').textContent = text;








