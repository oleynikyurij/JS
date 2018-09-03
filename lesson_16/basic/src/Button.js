import React, { Component } from 'react';
import './App.css';

class Button extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			colorActive: true,
			color: "#f9f6a6"
		}
		//привязываем обработчик к нашему контексту
		this.myClick = this.myClick.bind(this);
	}
	//функция срабатывающая при клике на кнопку
	myClick() {
		
		if ( this.state.colorActive) {
			document.getElementsByClassName('wrapper')[0].style.backgroundColor = this.state.color;
				this.setState({
					colorActive: false,
					color: "#fff"
				});
			} else {
				document.getElementsByClassName('wrapper')[0].style.backgroundColor = this.state.color;
					this.setState({
						colorActive: true,
						color: "#f9f6a6"
					});
		}
	}


	render(){
		return (
			<button onClick = {this.myClick} className = "clicker"> Изменить дизайн </button>
		)
	}
}

export default Button;