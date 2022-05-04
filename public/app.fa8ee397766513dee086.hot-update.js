"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(306);
/* harmony import */ var _alpinejs_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(764);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/swiper/swiper-bundle.esm.js");




/**
 * app.main
 */

const main = async err => {
  if (err) {
    // handle hmr errors
    console.error(err);
  } // application code


  window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_1__["default"];
  alpinejs__WEBPACK_IMPORTED_MODULE_1__["default"].plugin(_alpinejs_collapse__WEBPACK_IMPORTED_MODULE_2__["default"]);
  alpinejs__WEBPACK_IMPORTED_MODULE_1__["default"].start();
  window.Swiper = swiper_bundle__WEBPACK_IMPORTED_MODULE_3__["default"];
  let fotos = document.getElementsByClassName('featured');

  for (let i = 0; i < fotos.length; i++) {
    positionRandom(fotos[i]);
    dragElement(fotos[i]);
  }

  function positionRandom(foto) {
    var executed = false;
    var lastAncho;
    var lastAlto;

    if (!executed) {
      executed = true;
      const ancho = Math.floor(Math.random() * window.innerWidth / 2);
      const alto = Math.floor(Math.random() * window.innerHeight / 2);

      if (ancho === lastAncho || alto === lastAlto) {
        return positionRandom(foto);
      }

      lastAncho = ancho;
      lastAlto = alto;
      foto.style.left = `${ancho}` + 'px';
      foto.style.top = `${alto}` + 'px';
    }
  }

  if (document.body.classList.contains('home')) {
    document.body.classList.add('cursor-pointer');
    window.addEventListener('click', hideFeat, {
      once: true
    });
  }

  if (document.body.classList.contains('category-ceramics')) {
    // comento la funcion para altura dinámica, de momento será con el diseño
    // disparo la funcion cuando carga la pagina
    // let galeria = document.getElementById('galery-ceramics');
    // getAltura(galeria);
    // window.addEventListener('resize', getAltura);
    var mySwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_3__["default"]('.swiper', {
      // configure Swiper to use modules
      // Optional parameters
      slidesPerView: 1.9,
      centeredSlides: true,
      speed: 400,
      spaceBetween: 100,
      loop: true,
      autoHeight: true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletActiveClass: 'nav-number-active',
        bulletClass: 'nav-number cursor-pointer px-1 hover:text-rojo transition-colors duration-300 ease-in-out',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }); //tooltips de las featured images que llevan al single post, atencion a la resta de pixeles, posiblemente
    //se tengan que ajustar dependiendo de las pantallas

    var tooltips = document.querySelectorAll('.tooltip span');

    window.onmousemove = function (e) {
      var x = e.clientX - 500 + 'px',
          y = e.clientY - 100 + 'px';

      for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
      }
    }; //clases dinámicas para el submenu de ceramicas, depende si son 2 o 3 items


    var items = document.querySelectorAll('.nav-ceramics li');

    if (items.length == 2) {
      console.log('son 2');
    }
  }

  function hideFeat(e) {
    for (let i = 0; i < fotos.length; i++) {
      fotos[i].classList.add('hidden');
    }

    document.body.classList.remove('cursor-pointer');
  }

  function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault(); // get the mouse cursor position at startup:

      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault(); // calculate the new cursor position:

      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY; // set the element's new position:

      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  function getAltura(galeria) {
    //la altura del header banner
    let elemento = document.getElementsByClassName('banner');
    let alt = elemento[0].offsetHeight;
    let footer = document.getElementById('footer'); //caculamos la altura y le restamos el header, el page-header y el footer le damos la altura al main

    alt = window.innerHeight - alt - footer.offsetHeight; //let div = document.getElementById('main')
    //le damos la altura de la galería de forma dinamica

    galeria.style.height = `${alt}` + 'px'; //div.style.paddingTop = pageHeader[0].offsetHeight + 'px';
  }
};
/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */


(0,_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__.domReady)(main);
module.hot.accept(main);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "59fd9e562e21e954882f"; }
/******/ }();
/******/ 
/******/ }
);