"use strict";

require("core-js/modules/es6.promise");

(function () {
  function form() {
    //Отправка формы
    //Создаём объект с ответами
    var message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Спасибо! Скоро мы с Вами свяжемся';
    message.failure = 'Что-то пошло не так...'; //получаем элементы формы и создаём блок для размещения ответов

    var form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        formId = document.getElementById('form'),
        inputId = formId.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status'); //создаём элемент img

    var pict = document.createElement("img"); //обработчик на отправку формы модального окна
    // form.addEventListener('submit', submitForm(form, input));

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.appendChild(statusMessage); //AJAX
      //создаём новый запрос

      var request = new XMLHttpRequest(); //настраиваем запрос

      request.open("POST", "server.php"); //устанавливаем кодировку

      request.setRequestHeader("Content-Type", "application/x-www-form-urlencode"); //подготавливаем данные для отправки через FormData

      var formData = new FormData(form); //отправляем форму

      request.send(formData); //проверка ответа сервера и соответствующие действия

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          pict.src = "img/ajax-loader.gif";
          statusMessage.appendChild(pict);
        } else if (request.readyState === 4) {
          if (request.status === 200 && request.status < 300) {
            statusMessage.appendChild(pict); //добавляем контент на страницу
          } else {
            statusMessage.appendChild(pict);
          }
        }
      }; //очистка полей формы


      for (var i = 0; i < input.length; i++) {
        input[i].value = '';
      }

      setTimeout(function () {
        form.removeChild(statusMessage);
      }, 3000);
    }); //обработчик на отправку формы контактов

    formId.addEventListener('submit', function (event) {
      event.preventDefault();
      formId.appendChild(statusMessage); //подготавливаем данные для отправки через FormData

      var formData = new FormData(formId); //AJAX Promise
      //создаём функцию с "обещанием"

      function postData(data) {
        //возвращаем новый Promise
        return new Promise(function (resolve, reject) {
          //создаём новый запрос
          var request = new XMLHttpRequest(); //настраиваем запрос

          request.open("POST", "server.php"); //устанавливаем кодировку

          request.setRequestHeader("Content-Type", "application/x-www-form-urlencode"); //проверка ответа сервера и соответствующие действия

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              //в случае "успеха" вызываем функцию выполняющее первое действие 
              resolve();
            } else if (request.readyState === 4) {
              if (request.status === 200 && request.status < 300) {
                //в случае "успеха" вызываем функцию выполняющее второе действие 
                resolve();
              } else {
                //вызов функции в результате ошибки
                reject();
              }
            }
          }; //отправляем форму


          request.send(formData); //end Promise
        }); // end postData	
      } //вызываем Promise


      postData(formData) //в then помещаем первую функцию resolve
      .then(function () {
        pict.src = "img/ajax-loader.gif";
        statusMessage.appendChild(pict);
      }) //в then помещаем вторую функцию resolve
      .then(function () {
        return statusMessage.appendChild(pict);
      }) //вызов reject 
      .catch(function () {
        return statusMessage.appendChild(pict);
      }) //выполнится даже после ошибки
      .then(clearInput); //очистка полей формы

      function clearInput() {
        for (var i = 0; i < inputId.length; i++) {
          inputId[i].value = '';
        }

        setTimeout(function () {
          form.removeChild(statusMessage);
        }, 3000);
      }
    });
  }

  ;
  module.exports = form;
})();