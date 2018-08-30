$(document).ready(function () {
	//один обработчик для нескольких элементов по общему классу
	// $(' .modal-open').bind('click', function () {

	// 	$('.overlay').fadeIn('slow');
	// 	$('.modal').slideDown('slow');

	// });

	// обработчики на каждый элемент
	$('.main_btn').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});
	$('.main_btna').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});
	$('a[href="#sheldure"]').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});


//закрытие модального окна
	$('.close').on('click', function () { 
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	 });





});

// '.main_btn', 'a[href="#sheldure"]' .main_btna