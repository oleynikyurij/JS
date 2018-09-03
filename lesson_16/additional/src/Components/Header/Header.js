import React, { Component } from 'react';
import logo from '../../img/logo.png';
import Buutton from '../Button/Button';
import Menu from '../Menu/Menu'
import '../../App.css';


class Header extends React.Component {
	render(){
		return (
			<header>
				<div>
					<img src={ logo } alt="logo" />
				</div>
				<div className = "header__tel">
					<a href="tel:8 800 342-13-33">8 800 342-13-33</a>
					<p>Бесплатный звонок по России</p>
				</div>
				<Buutton text = "Обратный звонок" class = "header__btn"/>
				<Menu /> 

			
			</header>
		)
	}
}



export default Header;