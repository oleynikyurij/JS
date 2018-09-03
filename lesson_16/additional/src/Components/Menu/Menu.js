import React from 'react';
import Button from '../Button/Button';
import '../../App.css';

let menu = ['Главная','Каталог','Услуги','Доставка','О компании','Контакты'];

export default function Menu(props) {
	return (
		<nav className = "nav">
			
				{ menu.map( (item)=> { return	(<Button text= { item } key = { item } class = "menu__btn" />)
				}) }
		</nav>
	)
}