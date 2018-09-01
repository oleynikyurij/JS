"use strict";

(function () {
  function tab() {
    var infoHeader = document.getElementsByClassName('info-header')[0],
        infoHeaderTab = document.getElementsByClassName('info-header-tab'),
        infoTabcontent = document.getElementsByClassName('info-tabcontent'); //скрываем  табы

    var hideTabs = function hideTabs(a) {
      for (var i = a; i < infoTabcontent.length; i++) {
        infoTabcontent[i].classList.remove('show');
        infoTabcontent[i].classList.add('hide');
      }
    }; //отображаем первый таб


    hideTabs(1); //отобразить таб

    var showTab = function showTab(b) {
      if (infoTabcontent[b].classList.contains('hide')) {
        hideTabs(0);
        infoTabcontent[b].classList.remove('hide');
        infoTabcontent[b].classList.add('show');
      }
    }; //обработчик на родительский класс


    infoHeader.addEventListener('click', function (event) {
      var target = event.target; //проверяем событие на элементе

      if (target.className === 'info-header-tab') {
        //ищем на каком элементе произошло событие
        for (var i = 0; i < infoHeaderTab.length; i++) {
          if (target === infoHeaderTab[i]) {
            showTab(i);
            break;
          }
        }
      }
    });
  }

  ;
  module.exports = tab;
})();