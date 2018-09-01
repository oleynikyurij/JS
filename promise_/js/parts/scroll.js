"use strict";

(function () {
  function scroll() {
    //Плавная прокрутка
    function animate(draw, duration) {
      var start = performance.now();
      requestAnimationFrame(function animate(time) {
        var timePassed = time - start;

        if (timePassed > duration) {
          timePassed = duration;
        }

        draw(timePassed);

        if (timePassed < duration) {
          requestAnimationFrame(animate);
        }
      });
    }

    ;
    var navigation = document.querySelector('nav');
    navigation.addEventListener('click', function (e) {
      e.preventDefault(); //описываем анимацию

      animate(function (timePassed) {
        var target = e.target;
        var section = document.getElementById(target.getAttribute('href').slice(1));
        window.scrollBy(0, section.getBoundingClientRect().top / 20);
      }, 1500);
    });
  }

  ;
  module.exports = scroll;
})();