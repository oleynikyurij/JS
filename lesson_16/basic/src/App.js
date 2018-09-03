import React, { Component } from 'react';
import './App.css';

//
function ShowBanner(props) {
	if ( props.time > 45 ) {
		return (
			<div className = "rest_block">
				Отдых
			</div>
		)
	} else {
		return (
			<div className = "work_block">
				Время работать над собой!
			</div>
		)
	}
}




//создаём класс Clock
class Clock extends React.Component {
	constructor(props){
		super(props);
		//задаём state
		this.state = {
			date: new Date()
		}
	}
	//при рендере компонента запускаем выполнение функции tick каждую секунду
	componentDidMount() {
		this.timerId = setInterval(
			() => this.tick(),
			1000
		)
	}
	//при удалении компонента сбрасываем таймер
	componentWillUnmount() {
		clearInterval(this.timerId);
	}
 //функция вызывающая обновление state
	tick() {
		//при изменении state render запускается снова
		this.setState({
			date: new Date()
		})
	}





	render() {
		//выводим статичный заголовок с меняющимся временем
		return(
			<div>
				<ShowBanner time= { this.state.date.getSeconds() }/>
				<h1>Текущее время { this.state.date.toLocaleTimeString() }</h1>
			</div>
		)
	}
}

export default Clock;
