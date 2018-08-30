$(document).ready(function () {
	//один обработчик для нескольких элементов по общему классу
	$(' .modal-open').bind('click', function () {

		$('.overlay').fadeIn('slow');
		$('.modal').removeAttr("style").show().animate({
			opacity: 1,
			width: "40%",

		}, 2000);

	});


	//закрытие модального окна
	$('.close').on('click', function () {

		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');

	});


	//отправка формы
	$('button[type="submit"]').on('click', function () {
		//собираем данные из формы
		let dataForm = $('.modal').serialize();
//ajax запрос
		$.ajax({
			type: 'POST',
			url: 'server.php',
			data: dataForm,
			//отображение сообщения при успешном завершении 
			success: function () {
				$('.thanks').show();
				$('.back').on('click', function () {
					$('.thanks').hide();
				});
			},
			error: function () {
				$('.thanks').html('Ошибка. Данные не отправлены.').show();
				$('.back').on('click', function () {
					$('.thanks').hide();
				});
			}
		});
	});

});

