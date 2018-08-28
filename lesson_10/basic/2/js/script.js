'use strict';
//класс создающий div с заданными параметрами
class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	};
	//метод создания div
	createDiv(text) {
		//создали div 
		let div = document.createElement('div');
		//устанавливаем css свойства 
		div.style.cssText = `height: ${this.height}; width:${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
		//запись содержимого 
		div.textContent = text;
		//размещение на странице
		document.body.insertBefore(div, null);
	}

};
//класс наследующий от options 
class secondOptions extends options {
	constructor(mt, height, width, bg, fontSize, textAlign) {
		//параметры для родительского класса
		super(height, width, bg, fontSize, textAlign);
		this.mt = mt;
	};

	//метод добавляющий отступ к выбранному div 
	setMargin(i) {
		//добавляем css свойство к уже установленным
		document.getElementsByTagName('div')[i].style.cssText += `margin-top: ${this.mt}`;
	}
};
//инициализация нового элемента
let elem = new options('100px', '300px', '#1fd9f1', '24px', 'center');
//создание и размещение на странице
elem.createDiv('class with options');

let elem1 = new secondOptions('30px', '100px', '200px', '#1fd901', '20px', 'left');
elem1.createDiv('class extends ');
console.log(elem1);
elem1.setMargin(1);