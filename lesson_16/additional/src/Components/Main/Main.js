import React, { Component } from 'react';
import '../../App.css';
import Button from '../Button/Button';

class Main extends React.Component {
	

	render() {
		return (
			<div className = "main">
				<div className = "main__wrapper">
					<h1>быстрая Доставка</h1>
					<p>бетона, щебня, песка  и других нерудных материалов  по Москве и 	Московской области</p>
					<Button text = "Подробнее о доставке" class = "main__btn"/>
					<span>или</span>
					<Button text = "перейти в каталог" class = "main__btn_transparent"/>
				</div>
			</div>
		)
	}
}



export default Main;