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

  var btnMenu = document.getElementById('btn-menu-phone');
  var closeMenu = document.getElementById('close-menu');
  var menu = document.getElementById('menu-phone');
  var header = document.getElementById('header');
  btnMenu.addEventListener('click', function (e) {
    var alturaHeader = header.offsetHeight;
    menu.classList.remove('-translate-x-full');
    menu.style.top = `${alturaHeader}` + 'px';
    this.classList.add('hidden');
    closeMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  });
  closeMenu.addEventListener('click', function () {
    menu.classList.add('-translate-x-full');
    btnMenu.classList.remove('hidden');
    this.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  });

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

  }

  if (document.body.classList.contains('category')) {
    let galerias = document.querySelectorAll('.galeria');

    for (let i = 0; i < galerias.length; i++) {
      galerias[i].classList.add(`gal-${i}`);
      new swiper_bundle__WEBPACK_IMPORTED_MODULE_3__["default"]('.gal-' + i, {
        slidesPerView: 1,
        centeredSlides: true,
        speed: 400,
        loop: true,
        // autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        // Navigation arrows
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev'
        }
      });
    }
  }

  if (document.body.classList.contains('page-template-template-classes')) {
    var items = getMenuItems();

    if (items) {
      var container = document.getElementById('sub-container');
      var foto = document.getElementById('foto');

      if (items.length == 2) {
        container.classList.add('lg:w-1/2', 'lg:border-r-2', 'border-black');
        foto.classList.add('lg:w-1/2');
      }

      if (items.length == 3) {
        console.log('3');
        container.classList.add('lg:w-2/3', 'lg:border-r-2', 'border-black');
        foto.classList.add('lg:w-1/3');
      }
    }
  }

  if (document.body.classList.contains('page-template-template-verkauf')) {
    var items = getMenuItems();

    if (items) {
      var container = document.getElementById('sub-container');
      var foto = document.getElementById('foto');

      if (items.length == 2) {
        container.classList.add('lg:w-1/2', 'lg:border-l-2', 'border-black');
        foto.classList.add('lg:w-1/2');
      }

      if (items.length == 3) {
        console.log('3');
        container.classList.add('lg:w-2/3', 'lg:border-l-2', 'border-black');
        foto.classList.add('lg:w-1/3');
      }
    }
  }

  if (document.body.classList.contains('single')) {
    getAltura();
    var mySwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_3__["default"]('.swiper', {
      // configure Swiper to use modules
      // Optional parameters
      slidesPerView: 1,
      centeredSlides: true,
      speed: 400,
      spaceBetween: 100,
      loop: true,
      autoHeight: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  } //como manipulamos ese menu en varias url, hice una funcion


  function getMenuItems() {
    return document.querySelectorAll('.nav-ceramics li');
  } //si está el sub menu de creamics, le añadimos clases


  var items = getMenuItems();

  if (items) {
    if (items.length == 2) {
      for (var i = 0; i < items.length; i++) {
        if (i == 0) {
          items[i].classList.add('border-r-2', 'border-black');
        }

        items[i].classList.add('w-1/2');
      }
    } else {
      for (var i = 0; i < items.length; i++) {
        if (i == 1) {
          items[i].classList.add('border-l-2', 'border-r-2', 'border-black');
        }

        items[i].classList.add('w-1/3');
      }
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

  function getAltura() {
    var galeria = document.getElementById('galeria'); //la altura del header banner

    let elemento = document.getElementsByClassName('banner');
    let alt = elemento[0].offsetHeight; //caculamos la altura y le restamos el header, el page-header y el footer le damos la altura al main

    alt = window.innerHeight - alt * 2; //let div = document.getElementById('main')
    //le damos la altura de la galería de forma dinamica

    if (galeria) {
      galeria.style.height = `${alt}` + 'px';
    }

    let itemsGaleria = document.querySelectorAll('.swiper-slide img');

    for (let i = 0; i < itemsGaleria.length; i++) {
      itemsGaleria[i].style.height = `${alt}` + 'px';
    }
  }

  window.addEventListener('resize', getAltura);
};
/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */


(0,_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__.domReady)(main);
module.hot.accept(main);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[13].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[4]!./resources/styles/app.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/KeroinePRO-DouxExtreme.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/KeroinePRO-IntenseLegere.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__("./resources/images/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * Swiper 8.1.0\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2022 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: April 8, 2022\n */\n@font-face {\n  font-family: 'swiper-icons';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d,\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper,\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n[dir=\"ltr\"] .swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child{\n  margin-left: var(--swiper-centered-offset-before);\n}\n[dir=\"rtl\"] .swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child{\n  margin-right: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-top: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n.swiper-virtual .swiper-slide {\n  -webkit-backface-visibility: hidden;\n  transform: translateZ(0);\n}\n.swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n  height: 1px;\n  width: var(--swiper-virtual-size);\n}\n.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n  width: 1px;\n  height: var(--swiper-virtual-size);\n}\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  letter-spacing: 0;\n  text-transform: none;\n  font-feature-settings: ;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n.swiper-button-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: 50%;\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n}\n/* Preloader */\n:root {\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  */\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* a11y */\n.swiper .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-grid > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-grid-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-fade .swiper-slide-active,\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube {\n  overflow: visible;\n}\n.swiper-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-cube.swiper-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-next,\n.swiper-cube .swiper-slide-prev,\n.swiper-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-cube .swiper-slide-shadow-top,\n.swiper-cube .swiper-slide-shadow-bottom,\n.swiper-cube .swiper-slide-shadow-left,\n.swiper-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.swiper-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-cube .swiper-cube-shadow:before {\n  content: '';\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-flip {\n  overflow: visible;\n}\n.swiper-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-flip .swiper-slide-shadow-top,\n.swiper-flip .swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.swiper-creative .swiper-slide {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  transition-property: transform, opacity, height;\n}\n.swiper-cards {\n  overflow: visible;\n}\n.swiper-cards .swiper-slide {\n  transform-origin: center bottom;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n}\n/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n */\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n[hidden] {\n  display: none;\n}\nh2, h3, h4, h5, h6, .extra-ti{\n  font-size: 26px;\n  line-height: 36px;\n}\n@media (min-width: 768px){\n  h2, h3, h4, h5, h6, .extra-ti{\n    font-size: 28px;\n    line-height: 34px;\n  }\n}\n@media (min-width: 1024px){\n  h2, h3, h4, h5, h6, .extra-ti{\n    margin-bottom: 1rem;\n  }\n}\n@media (min-width: 1280px){\n  h2, h3, h4, h5, h6, .extra-ti{\n    font-size: 32px;\n    line-height: 38px;\n  }\n}\n@media (min-width: 1440px){\n  h2, h3, h4, h5, h6, .extra-ti{\n    font-size: 36px;\n    line-height: 42px;\n  }\n}\n@media (min-width: 1920px){\n  h2, h3, h4, h5, h6, .extra-ti{\n    font-size: 42px;\n    line-height: 54px;\n  }\n}\n@media (min-width: 1024px){\n  h1{\n    font-size: 36px;\n    line-height: 42px;\n  }\n}\n*, ::before, ::after{\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container{\n  width: 100%;\n}\n@media (min-width: 640px){\n  .container{\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px){\n  .container{\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px){\n  .container{\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px){\n  .container{\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1440px){\n  .container{\n    max-width: 1440px;\n  }\n}\n@media (min-width: 1920px){\n  .container{\n    max-width: 1920px;\n  }\n}\n.nav{\n  width: 100%;\n}\n.nav li{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 26px;\n  line-height: 36px;\n}\n@media (min-width: 768px){\n  .nav li{\n    padding-top: 14px;\n    padding-bottom: 14px;\n  }\n  .nav li{\n    font-size: 28px;\n    line-height: 34px;\n  }\n}\n@media (min-width: 1280px){\n  .nav li{\n    font-size: 32px;\n    line-height: 38px;\n  }\n}\n@media (min-width: 1440px){\n  .nav li{\n    font-size: 36px;\n    line-height: 42px;\n  }\n}\n@media (min-width: 1920px){\n  .nav li{\n    font-size: 42px;\n    line-height: 54px;\n  }\n}\n@media (min-width: 1024px){\n  .nav li:first-child{\n    border-top-width: 2px;\n  }\n  .nav li.current-menu-item{\n    display: none;\n  }\n}\n.nav a{\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.nav a:hover{\n  --tw-text-opacity: 1;\n  color: rgb(254 94 53 / var(--tw-text-opacity));\n}\n.sr-only{\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.static{\n  position: static;\n}\n.fixed{\n  position: fixed;\n}\n.absolute{\n  position: absolute;\n}\n.relative{\n  position: relative;\n}\n.bottom-0{\n  bottom: 0px;\n}\n.left-9{\n  left: 2.25rem;\n}\n.right-3{\n  right: 0.75rem;\n}\n.top-3{\n  top: 0.75rem;\n}\n.float-right{\n  float: right;\n}\n.float-left{\n  float: left;\n}\n.mb-0{\n  margin-bottom: 0px;\n}\n.mb-2{\n  margin-bottom: 0.5rem;\n}\n.mr-5{\n  margin-right: 1.25rem;\n}\n.-mr-5{\n  margin-right: -1.25rem;\n}\n.block{\n  display: block;\n}\n.flex{\n  display: flex;\n}\n.contents{\n  display: contents;\n}\n.hidden{\n  display: none;\n}\n.h-10{\n  height: 2.5rem;\n}\n.h-auto{\n  height: auto;\n}\n.h-screen{\n  height: 100vh;\n}\n.h-7{\n  height: 1.75rem;\n}\n.h-8{\n  height: 2rem;\n}\n.h-full{\n  height: 100%;\n}\n.min-h-full{\n  min-height: 100%;\n}\n.min-h-screen{\n  min-height: 100vh;\n}\n.w-1\\/2{\n  width: 50%;\n}\n.w-1\\/3{\n  width: 33.333333%;\n}\n.w-full{\n  width: 100%;\n}\n.w-screen{\n  width: 100vw;\n}\n.w-7{\n  width: 1.75rem;\n}\n.w-11{\n  width: 2.75rem;\n}\n.w-8{\n  width: 2rem;\n}\n.w-10{\n  width: 2.5rem;\n}\n.grow{\n  flex-grow: 1;\n}\n.-translate-x-full{\n  --tw-translate-x: -100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-90{\n  --tw-rotate: 90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-rotate-90{\n  --tw-rotate: -90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer{\n  cursor: pointer;\n}\n.resize{\n  resize: both;\n}\n.items-center{\n  align-items: center;\n}\n.justify-center{\n  justify-content: center;\n}\n.justify-between{\n  justify-content: space-between;\n}\n.overflow-hidden{\n  overflow: hidden;\n}\n.overflow-x-auto{\n  overflow-x: auto;\n}\n.overflow-x-scroll{\n  overflow-x: scroll;\n}\n.border-r-2{\n  border-right-width: 2px;\n}\n.border-l-2{\n  border-left-width: 2px;\n}\n.border-t-2{\n  border-top-width: 2px;\n}\n.border-b-2{\n  border-bottom-width: 2px;\n}\n.border-black{\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n.bg-indigo-400{\n  --tw-bg-opacity: 1;\n  background-color: rgb(129 140 248 / var(--tw-bg-opacity));\n}\n.bg-green-400{\n  --tw-bg-opacity: 1;\n  background-color: rgb(74 222 128 / var(--tw-bg-opacity));\n}\n.bg-yellow-400{\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 204 21 / var(--tw-bg-opacity));\n}\n.bg-red-400{\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}\n.bg-white{\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.object-cover{\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.object-scale-down{\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n.px-1{\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.px-5{\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-5{\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n.py-6{\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.pt-5{\n  padding-top: 1.25rem;\n}\n.pt-2{\n  padding-top: 0.5rem;\n}\n.pl-5{\n  padding-left: 1.25rem;\n}\n.pl-3{\n  padding-left: 0.75rem;\n}\n.pt-40{\n  padding-top: 10rem;\n}\n.pb-2{\n  padding-bottom: 0.5rem;\n}\n.pt-4{\n  padding-top: 1rem;\n}\n.text-center{\n  text-align: center;\n}\n.text-right{\n  text-align: right;\n}\n.text-indigo-50{\n  --tw-text-opacity: 1;\n  color: rgb(238 242 255 / var(--tw-text-opacity));\n}\n.text-green-50{\n  --tw-text-opacity: 1;\n  color: rgb(240 253 244 / var(--tw-text-opacity));\n}\n.text-yellow-50{\n  --tw-text-opacity: 1;\n  color: rgb(254 252 232 / var(--tw-text-opacity));\n}\n.text-red-50{\n  --tw-text-opacity: 1;\n  color: rgb(254 242 242 / var(--tw-text-opacity));\n}\n.text-rojo{\n  --tw-text-opacity: 1;\n  color: rgb(254 94 53 / var(--tw-text-opacity));\n}\n.outline{\n  outline-style: solid;\n}\n.transition-colors{\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-300{\n  transition-duration: 300ms;\n}\n.ease-in-out{\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n@font-face {\n  font-family: \"KeroinePRO-DouxExtreme\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"KeroinePRO-IntenseLegere\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\nhtml, body{\n  position: relative;\n  height: 100%;\n  font-size: 16px;\n  line-height: 22px;\n}\n@media (min-width: 768px){\n  html, body{\n    font-size: 18px;\n    line-height: 25px;\n  }\n}\n@media (min-width: 1280px){\n  html, body{\n    font-size: 20px;\n    line-height: 28px;\n  }\n}\n@media (min-width: 1440px){\n  html, body{\n    font-size: 24px;\n    line-height: 32px;\n  }\n}\n@media (min-width: 1920px){\n  html, body{\n    font-size: 28px;\n    line-height: 38px;\n  }\n}\nhtml,\nbody {\n  font-family: \"KeroinePRO-DouxExtreme\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n#app{\n  position: relative;\n  min-height: 100%;\n}\nbody.home .page-header{\n  display: none;\n}\n.swiper {\n  width: 100%;\n  height: 100%;\n}\n.swiper-button-next {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center;\n  width: 50px;\n  height: 35px;\n}\n.swiper-button-prev {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center;\n  width: 50px;\n  height: 35px;\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.swiper-button-next::after,\n.swiper-button-prev::after {\n  display: none;\n}\n.nav-phone{\n  position: relative;\n  height: 100%;\n  width: 100%;\n  padding-top: 2.5rem;\n}\n.nav-phone li{\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  text-align: center;\n}\n.nav-phone .sub-menu{\n  padding-bottom: 2.5rem;\n  font-size: 16px;\n  line-height: 22px;\n}\n@media (min-width: 640px){\n  .nav-phone .sub-menu{\n    font-size: 18px;\n    line-height: 25px;\n  }\n}\n.nav-phone .sub-menu li{\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n#footer .menu{\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n#footer .menu li{\n  padding: 1rem;\n}\n#footer .menu a{\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n#footer .menu a:hover{\n  --tw-text-opacity: 1;\n  color: rgb(254 94 53 / var(--tw-text-opacity));\n}\n#footer .sub-menu{\n  display: none;\n}\n@media (min-width: 1024px){\n  body.category-ceramics .nav-primary > div > .nav > li:nth-child(2){\n    border-top-width: 2px;\n  }\n}\n@media (min-width: 768px){\n  .sub-menu{\n    display: none;\n  }\n}\n.nav-ceramics{\n  display: flex;\n  justify-content: space-between;\n  border-top-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n.nav-ceramics li{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  line-height: 36px;\n}\n@media (min-width: 768px){\n  .nav-ceramics li{\n    font-size: 28px;\n    line-height: 34px;\n  }\n}\n@media (min-width: 1024px){\n  .nav-ceramics li{\n    padding-top: 14px;\n    padding-bottom: 14px;\n  }\n}\n@media (min-width: 1280px){\n  .nav-ceramics li{\n    font-size: 32px;\n    line-height: 38px;\n  }\n}\n@media (min-width: 1440px){\n  .nav-ceramics li{\n    font-size: 36px;\n    line-height: 42px;\n  }\n}\n@media (min-width: 1920px){\n  .nav-ceramics li{\n    font-size: 42px;\n    line-height: 54px;\n  }\n}\n.nav-ceramics a{\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.nav-ceramics a:hover{\n  --tw-text-opacity: 1;\n  color: rgb(254 94 53 / var(--tw-text-opacity));\n}\n.nav-ceramics .current-menu-item{\n  --tw-text-opacity: 1;\n  color: rgb(254 94 53 / var(--tw-text-opacity));\n}\n@media (min-width: 1024px){\n  body.page-template-template-classes .nav-primary > div > .nav > li:nth-child(1), body.page-template-template-verkauf .nav-primary > div > .nav > li:nth-child(1){\n    display: none;\n  }\n  body.page-template-template-classes .nav-primary > div > .nav > li:nth-child(2), body.page-template-template-verkauf .nav-primary > div > .nav > li:nth-child(2){\n    border-top-width: 2px;\n  }\n}\n.nav-number-active{\n  --tw-text-opacity: 1;\n  color: rgb(254 94 53 / var(--tw-text-opacity));\n}\n.nav-number-active:hover{\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n@media (min-width: 1024px){\n  .swiper-pagination-fraction{\n    bottom: 0px;\n  }\n  .swiper-pagination-fraction{\n    left: 0.75rem;\n  }\n  .swiper-pagination-fraction{\n    text-align: left;\n  }\n  .swiper-pagination-fraction{\n    font-size: 15px;\n    line-height: 18px;\n  }\n}\n.button-next, .button-prev{\n  position: absolute;\n  z-index: 10;\n  height: 100%;\n  width: 50%;\n  cursor: pointer;\n}\n.button-next{\n  top: -50%;\n  right: 0px;\n  --tw-translate-y: 50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.button-prev{\n  top: -50%;\n  left: 0px;\n  --tw-translate-y: 50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.tooltip{\n  font-size: 26px;\n  line-height: 36px;\n}\n@media (min-width: 768px){\n  .tooltip{\n    font-size: 28px;\n    line-height: 34px;\n  }\n}\n@media (min-width: 1280px){\n  .tooltip{\n    font-size: 32px;\n    line-height: 38px;\n  }\n}\n@media (min-width: 1440px){\n  .tooltip{\n    font-size: 36px;\n    line-height: 42px;\n  }\n}\n@media (min-width: 1920px){\n  .tooltip{\n    font-size: 42px;\n    line-height: 54px;\n  }\n}\n.tooltip {\n  text-decoration: none;\n  position: relative;\n}\n.tooltip span {\n  display: none;\n}\n.tooltip:hover span {\n  display: block;\n  position: fixed;\n  overflow: hidden;\n}\n.fake-clases .uno{\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n@media (min-width: 1024px){\n  .fake-clases .uno{\n    width: 50%;\n  }\n  .fake-clases .uno{\n    border-right-width: 2px;\n  }\n  .fake-clases .dos{\n    width: 66.666667%;\n  }\n  .fake-clases .tres{\n    width: 33.333333%;\n  }\n}\n.content p{\n  margin-bottom: 1rem;\n}\n.content a{\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.content a:hover{\n  --tw-text-opacity: 1;\n  color: rgb(254 94 53 / var(--tw-text-opacity));\n}\n.content ul {\n  list-style-type: \"— \";\n  list-style-position: inside;\n}\n.content h6{\n  font-size: 16px;\n  line-height: 22px;\n  --tw-text-opacity: 1;\n  color: rgb(254 94 53 / var(--tw-text-opacity));\n}\n@media (min-width: 768px){\n  .content h6{\n    font-size: 18px;\n    line-height: 25px;\n  }\n}\n@media (min-width: 1280px){\n  .content h6{\n    font-size: 20px;\n    line-height: 28px;\n  }\n}\n@media (min-width: 1440px){\n  .content h6{\n    font-size: 24px;\n    line-height: 32px;\n  }\n}\n@media (min-width: 1920px){\n  .content h6{\n    font-size: 28px;\n    line-height: 38px;\n  }\n}\n.subtitle {\n  font-family: \"KeroinePRO-IntenseLegere\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-style: italic;\n}\n@media (min-width: 1024px){\n  .galeria{\n    height: 440px;\n  }\n}\n.hover\\:text-rojo:hover{\n  --tw-text-opacity: 1;\n  color: rgb(254 94 53 / var(--tw-text-opacity));\n}\n.focus\\:not-sr-only:focus{\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n@media (min-width: 768px){\n  .md\\:block{\n    display: block;\n  }\n  .md\\:grid{\n    display: grid;\n  }\n  .md\\:hidden{\n    display: none;\n  }\n  .md\\:grid-cols-3{\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-2{\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .md\\:border-b-0{\n    border-bottom-width: 0px;\n  }\n  .md\\:pb-0{\n    padding-bottom: 0px;\n  }\n  .md\\:pl-0{\n    padding-left: 0px;\n  }\n  .md\\:pt-0{\n    padding-top: 0px;\n  }\n}\n@media (min-width: 1024px){\n  .lg\\:flex{\n    display: flex;\n  }\n  .lg\\:h-\\[728px\\]{\n    height: 728px;\n  }\n  .lg\\:h-\\[410px\\]{\n    height: 410px;\n  }\n  .lg\\:min-h-screen{\n    min-height: 100vh;\n  }\n  .lg\\:w-1\\/2{\n    width: 50%;\n  }\n  .lg\\:w-2\\/3{\n    width: 66.666667%;\n  }\n  .lg\\:w-1\\/3{\n    width: 33.333333%;\n  }\n  .lg\\:w-full{\n    width: 100%;\n  }\n  .lg\\:w-3\\/5{\n    width: 60%;\n  }\n  .lg\\:overflow-auto{\n    overflow: auto;\n  }\n  .lg\\:border-r-2{\n    border-right-width: 2px;\n  }\n  .lg\\:border-l-2{\n    border-left-width: 2px;\n  }\n  .lg\\:border-t-2{\n    border-top-width: 2px;\n  }\n  .lg\\:border-black{\n    --tw-border-opacity: 1;\n    border-color: rgb(0 0 0 / var(--tw-border-opacity));\n  }\n  .lg\\:py-\\[14px\\]{\n    padding-top: 14px;\n    padding-bottom: 14px;\n  }\n  .lg\\:px-5{\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n  .lg\\:pl-5{\n    padding-left: 1.25rem;\n  }\n  .lg\\:pr-20{\n    padding-right: 5rem;\n  }\n  .lg\\:pt-5{\n    padding-top: 1.25rem;\n  }\n  .lg\\:pr-9{\n    padding-right: 2.25rem;\n  }\n  .lg\\:pb-5{\n    padding-bottom: 1.25rem;\n  }\n  .lg\\:text-texto{\n    font-size: 24px;\n    line-height: 32px;\n  }\n  .lg\\:text-pie{\n    font-size: 15px;\n    line-height: 18px;\n  }\n}\n@media (min-width: 1280px){\n  .xl\\:h-\\[728px\\]{\n    height: 728px;\n  }\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bbc9c53c03f554cc0676"; }
/******/ }();
/******/ 
/******/ }
);