"use strict";

(function () {
  function modal() {
    //Модальное окно
    var more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.getElementsByClassName('description-btn'); //обработчик на открытие модального окна

    more.addEventListener('click', function () {
      this.classList.add('more-splash');
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
    }); //обработчик на закрытие модального окна

    close.addEventListener('click', function () {
      overlay.style.display = "none";
      more.classList.remove('more-splash');
      document.body.style.overflow = "";
    }); //получаем родительский элемент для установки обработчиков на кнопки в табах

    var info = document.querySelector('.info'); //обработчиков на кнопки в табах

    info.addEventListener('click', function (e) {
      var target = event.target; //проверяем событие на элементе

      if (target.className === 'description-btn') {
        var _loop = function _loop(i) {
          if (target === descriptionBtn[i]) {
            //добавляем анимацию на кнопку
            descriptionBtn[i].classList.add('more-splash'); //показываем модальное окно

            overlay.style.display = "block";
            document.body.style.overflow = "hidden"; //удаляем анимацию с кнопки

            setTimeout(function () {
              return descriptionBtn[i].classList.remove('more-splash');
            }, 1800);
          }
        }; //ищем на каком элементе произошло событие


        for (var i = 0; i < descriptionBtn.length; i++) {
          _loop(i);
        }
      }
    });
  }

  ;
  module.exports = modal;
})();