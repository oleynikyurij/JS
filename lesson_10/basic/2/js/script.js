'use strict';

class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	};

	createDiv(text) {
		let div = document.createElement('div');
		div.style.cssText = `height: ${this.height}px; width:${this.width}px; background: #${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;

		div.textContent = text;
		document.body.insertBefore(div, null);

	}

};

class secondOptions extends options {
	constructor(mt, height, width, bg, fontSize, textAlign) {
		super(height, width, bg, fontSize, textAlign);
		this.mt = mt;
	};

	setMargin(i) {
		document.getElementsByTagName('div')[i].style.cssText += `margin-top: ${this.mt}px`;
	}
};

let elem = new options(100, 300, '1fd9f1', 24, 'center');
elem.createDiv('class with options');

let elem1 = new secondOptions(30, 100, 200, '1fd901', 20, 'left');
elem1.createDiv('class extends ');
console.log(elem1);
elem1.setMargin(1);