!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=function(){var e=document.getElementsByClassName("info-header")[0],t=document.getElementsByClassName("info-header-tab"),n=document.getElementsByClassName("info-tabcontent"),a=function(e){for(var t=e;t<n.length;t++)n[t].classList.remove("show"),n[t].classList.add("hide")};a(1);var o=function(e){n[e].classList.contains("hide")&&(a(0),n[e].classList.remove("hide"),n[e].classList.add("show"))};e.addEventListener("click",function(e){var n=e.target;if("info-header-tab"===n.className)for(var a=0;a<t.length;a++)if(n===t[a]){o(a);break}})};var o=function(){!function(e,t){var n=document.getElementById(e),a=n.querySelector(".hours"),o=n.querySelector(".minutes"),r=n.querySelector(".seconds");!function e(){var t=function(e){var t=Date.parse("2018-09-03")-Date.parse(new Date),n=Math.floor(t/1e3%60),a=Math.floor(t/1e3/60%60),o=Math.floor(t/36e5);t<=0&&(t=0,n=a=o=0);return n=n<10?"0".concat(n):n,a=a<10?"0".concat(a):a,o=o<10?"0".concat(o):o,{total:t,hours:o,minutes:a,seconds:n}}();a.innerHTML=t.hours,o.innerHTML=t.minutes,r.innerHTML=t.seconds;var n=setTimeout(e,1e3);t.total<=0&&clearTimeout(n)}()}("timer")};var r=function(){var e=document.querySelector(".more"),t=document.querySelector(".overlay"),n=document.querySelector(".popup-close"),a=document.getElementsByClassName("description-btn");e.addEventListener("click",function(){this.classList.add("more-splash"),t.style.display="block",document.body.style.overflow="hidden"}),n.addEventListener("click",function(){t.style.display="none",e.classList.remove("more-splash"),document.body.style.overflow=""}),document.querySelector(".info").addEventListener("click",function(e){var n=event.target;if("description-btn"===n.className)for(var o=function(e){n===a[e]&&(a[e].classList.add("more-splash"),t.style.display="block",document.body.style.overflow="hidden",setTimeout(function(){return a[e].classList.remove("more-splash")},1800))},r=0;r<a.length;r++)o(r)})};var i=function(){var e=new Object;e.loading="Загрузка...",e.success="Спасибо! Скоро мы с Вами свяжемся",e.failure="Что-то пошло не так...";var t=document.getElementsByClassName("main-form")[0],n=t.getElementsByTagName("input"),a=document.getElementById("form"),o=a.getElementsByTagName("input"),r=document.createElement("div");r.classList.add("status");var i=document.createElement("img");t.addEventListener("submit",function(e){e.preventDefault(),t.appendChild(r);var a=new XMLHttpRequest;a.open("POST","server.php"),a.setRequestHeader("Content-Type","application/x-www-form-urlencode");var o=new FormData(t);a.send(o),a.onreadystatechange=function(){a.readyState<4?(i.src="img/ajax-loader.gif",r.appendChild(i)):4===a.readyState&&(200===a.status&&a.status,r.appendChild(i))};for(var s=0;s<n.length;s++)n[s].value="";setTimeout(function(){t.removeChild(r)},3e3)}),a.addEventListener("submit",function(e){e.preventDefault(),a.appendChild(r);var n=new XMLHttpRequest;n.open("POST","server.php"),n.setRequestHeader("Content-Type","application/x-www-form-urlencode");var s=new FormData(a);n.send(s),n.onreadystatechange=function(){n.readyState<4?(i.src="img/ajax-loader.gif",r.appendChild(i)):4===n.readyState&&(200===n.status&&n.status,r.appendChild(i))};for(var c=0;c<o.length;c++)o[c].value="";setTimeout(function(){t.removeChild(r)},3e3)})};var s=function(){var e=1,t=document.getElementsByClassName("slider-item"),n=document.querySelector(".prev"),a=document.querySelector(".next"),o=document.querySelector(".slider-dots"),r=document.getElementsByClassName("dot"),i=function(n){n>t.length&&(e=1),n<1&&(e=t.length);for(var a=0;a<t.length;a++)t[a].style.display="none";for(var o=0;o<r.length;o++)r[o].classList.remove("dot-active");t[e-1].style.display="block",t[e-1].classList.add("animated","flip"),r[e-1].classList.add("dot-active")};i(e);var s=function(t){i(e+=t)},c=function(t){i(e=t)};n.addEventListener("click",function(){s(-1)}),a.addEventListener("click",function(){s(1)}),o.addEventListener("click",function(e){for(var t=0;t<=r.length;t++)e.target.classList.contains("dot")&&e.target==r[t-1]&&c(t)})};var c=function(){var e=document.getElementsByClassName("counter-block-input")[0],t=document.getElementsByClassName("counter-block-input")[1],n=document.getElementById("select"),a=document.getElementById("total"),o=0,r=0,i=0;a.innerHTML=0;var s=/\D/g;function c(e){var t=0;setTimeout(function n(){a.innerHTML=t,t<e&&setTimeout(n,1),t+=100},1)}e.addEventListener("input",function(){o=+this.value,this.value.match(s)?(this.value="",a.innerHTML=0):""==e.value||""==t.value?a.innerHTML=0:(n.selectedIndex=0,c(i=4e3*(r+o)))}),t.addEventListener("input",function(){r=+this.value,this.value.match(s)?(this.value="",a.innerHTML=0):""==e.value||""==t.value||0==e.value||0==t.value?a.innerHTML=0:(n.selectedIndex=0,c(i=4e3*(r+o)))}),n.addEventListener("change",function(){if(""==e.value||""==t.value||0==e.value||0==t.value)a.innerHTML=0;else{var n=i;c(n*this.options[this.selectedIndex].value)}})};var l=function(){document.querySelector("nav").addEventListener("click",function(e){e.preventDefault(),function(e,t){var n=performance.now();requestAnimationFrame(function a(o){var r=o-n;r>t&&(r=t),e(r),r<t&&requestAnimationFrame(a)})}(function(t){var n=e.target,a=document.getElementById(n.getAttribute("href").slice(1));window.scrollBy(0,a.getBoundingClientRect().top/20)},1500)})};window.addEventListener("DOMContentLoaded",function(){a(),o(),r(),i(),s(),c(),l()})}]);
//# sourceMappingURL=bundle.js.map