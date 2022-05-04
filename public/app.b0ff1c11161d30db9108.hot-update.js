"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./resources/scripts/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@roots/sage/lib/cjs/client/index.js");
/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var _alpinejs_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@alpinejs/collapse/dist/module.esm.js");
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
  let fotos = document.getElementsByClassName('drag');

  for (let i = 0; i < fotos.length; i++) {
    positionRandom(fotos[i]);
    dragElement(fotos[i]);
  }

  function positionRandom(foto) {
    var executed = false;

    if (!executed) {
      executed = true;
      const ancho = Math.floor(Math.random() * window.innerWidth / 2);
      const alto = Math.floor(Math.random() * window.innerHeight / 2);
      foto.style.left = `${ancho}` + 'px';
      foto.style.top = `${alto}` + 'px';
    }
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

  function getAltura() {
    //la altura del elemento
    let elemento = document.getElementsByClassName('banner');
    let alt = elemento[0].offsetHeight;
    let pageHeader = document.getElementsByClassName('page-header');
    console.log(pageHeader[0].offsetHeight); //caculamos la altura y le restamos el header y el page-header le damos la altura al main

    alt = window.innerHeight - alt - pageHeader[0].offsetHeight;
    let div = document.getElementById('main');
    div.style.height = `${alt}` + 'px';
  }

  getAltura();
  window.addEventListener('resize', getAltura);
  var mySwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_3__["default"]('.swiper', {
    // configure Swiper to use modules
    // Optional parameters
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 100,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
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
/******/ 	__webpack_require__.h = function() { return "8747747567634164a513"; }
/******/ }();
/******/ 
/******/ }
);