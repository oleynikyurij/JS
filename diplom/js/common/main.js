!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="js/common/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=1,t=document.getElementsByClassName("a-slide"),n=document.querySelector(".slider-dots"),o=document.getElementsByClassName("dot"),r=function(n){n>t.length&&(e=1),n<1&&(e=t.length);for(var r=0;r<t.length;r++)t[r].style.display="none";for(var a=0;a<o.length;a++)o[a].classList.remove("dot__active");t[e-1].style.display="block",t[e-1].classList.add("animated","fadeIn"),o[e-1].classList.add("dot__active")},a=function(t){r(e=t)};r(1),e=2,setInterval(function(){r(e),e++},3e3),n.addEventListener("click",function(e){for(var t=0;t<=o.length;t++)e.target.classList.contains("dot")&&e.target==o[t-1]&&a(t)})};var r=function(){var e=document.querySelector(".header-login__button"),t=document.querySelector(".footer-login__button"),n=document.querySelector(".overlay"),o=document.querySelector(".popup .popup-close");e.addEventListener("click",function(e){n.style.display="block"}),t.addEventListener("click",function(){n.style.display="block"}),n.addEventListener("click",function(e){e.target!==n&&e.target!==o||(n.style.display="none")})};var a=function(){var e=document.querySelector(".js-overlay-thank-you"),t=document.querySelector(".js-overlay-popup .popup-close"),n=document.querySelector(".pricing"),o=document.getElementsByClassName("button popup-form__btn_2 popup-form__btn-js")[0],r=document.getElementById("gold"),a=document.getElementById("silver"),u=document.getElementById("basic");n.addEventListener("click",function(t){t.target.classList.contains("pricing-block__button")&&(e.style.display="block"),t.target.classList.contains("pricing-block__button_basic")&&(u.checked=!0),t.target.classList.contains("pricing-block__button_silver")&&(a.checked=!0),t.target.classList.contains("pricing-block__button_gold")&&(r.checked=r)}),e.addEventListener("click",function(n){n.target!==e&&n.target!==o&&n.target!==t||(e.style.display="none")})};var u=function(){document.getElementsByClassName("header-button__main button button__big")[0].onclick=function(){window.location.pathname="site-builder.php"}};var c=function(){document.querySelector(".header-nav-menu").addEventListener("click",function(e){e.preventDefault(),function(e,t){var n=performance.now();requestAnimationFrame(function o(r){var a=r-n;a>t&&(a=t),e(a),a<t&&requestAnimationFrame(o)})}(function(t){var n=e.target,o=document.getElementById(n.getAttribute("href").slice(1));window.scrollBy(0,o.getBoundingClientRect().top/20)},1500)})};var l=function(){var e,t=document.querySelectorAll("popup-form_form")[0],n=document.getElementsByClassName("popup-form-box-text__name")[0],o=document.getElementsByClassName("popup-form-box-text__phone")[0],r=document.getElementsByClassName("button button__big popup-form__btn")[0];o.addEventListener("focus",function(){o.value="+38("}),o.addEventListener("input",function(){var e=this.value.substring(4);function t(e){var t=e.replace(/[^\d]+/g,"");return""!==t&&t.substring(0,10)}t(e)?this.value="+38("+function(e){for(var t="",n=0;n<e.length;n++)3===n?(t+=") ",t+=e.charAt(n)):6===n||8===n?(t+="-",t+=e.charAt(n)):t+=e.charAt(n);return t}(t(e)):this.value="",0==this.value.length&&(this.value="+38(")}),n.addEventListener("keyup",function(){null!=(e=n.value)&&""!=e&&(/^([а-я]{0,22})?$/.test(e)?n.value=e:n.value=e.substr(0,e.length-1))}),r.addEventListener("submit",function(e){e.preventDefault();var n=new XMLHttpRequest;n.open("POST","server.php"),n.setRequestHeader("Content-Type","application/x-www-form-urlencode");var o=new FormData(t);n.send(o),n.onreadystatechange=function(){if(n.readyState<4){var e=document.createElement("img");e.src="img/ajax-loader.gif",t.appendChild(e)}else 4===n.readyState&&(200===n.status&&n.status<300?(t.style.display="none",document.querySelector(".popup-form-alert").style.display="block"):(t.style.display="none",document.querySelector(".popup-form-error").style.display="block"))};for(var r=0;r<t.length;r++)t.value="";setTimeout(function(){document.querySelector(".popup-form-alert").style.display="none",document.querySelector(".popup-form-error").style.display="none"},3e3)})};window.addEventListener("DOMContentLoaded",function(){o(),r(),a(),u(),c(),l()})}]);
//# sourceMappingURL=main.js.map