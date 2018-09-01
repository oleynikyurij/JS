"use strict";

(function () {
  function timer() {
    // Таймер обратного отсчёта
    //время до окончания
    //  let deadLine = '2017-09-22';
    var deadLine = '2018-09-03'; //вычисление оставшегося времени

    var getTimeRemaining = function getTimeRemaining(endtime) {
      var t = Date.parse(deadLine) - Date.parse(new Date()),
          seconds = Math.floor(t / 1000 % 60),
          minutes = Math.floor(t / 1000 / 60 % 60),
          hours = Math.floor(t / (1000 * 60 * 60)); //проверка на "прошедшую дату"

      if (t <= 0) {
        t = 0;
        seconds = minutes = hours = 0;
      }

      seconds = seconds < 10 ? "0".concat(seconds) : seconds;
      minutes = minutes < 10 ? "0".concat(minutes) : minutes;
      hours = hours < 10 ? "0".concat(hours) : hours;
      return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    };

    var setClock = function setClock(id, endtime) {
      var timer = document.getElementById(id),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.minutes'),
          seconds = timer.querySelector('.seconds'); //обновление таймера

      var updateClock = function updateClock() {
        var t = getTimeRemaining(endtime);
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds; // используем setTimeout вместо  setInterval, снизилась нагрузка на процессор с 30% до 1.5%

        var timeInterval = setTimeout(updateClock, 1000); //проверка на окончание таймера и его остановка

        if (t.total <= 0) {
          clearTimeout(timeInterval);
        }
      };

      updateClock();
    }; //Запуск таймера


    setClock('timer', deadLine);
  }

  ;
  module.exports = timer;
})();