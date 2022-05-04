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
  let fotos = document.getElementsByClassName('featured'); // for (let i = 0; i < fotos.length; i++) {
  //   positionRandom(fotos[i])
  //   // dragElement(fotos[i]);
  // }

  var btnMenu = document.getElementById('btn-menu-phone');
  var closeMenu = document.getElementById('close-menu');
  var menu = document.getElementById('menu-phone');
  var header = document.getElementById('header');

  if (btnMenu) {
    btnMenu.addEventListener('click', function (e) {
      var alturaHeader = header.offsetHeight;
      menu.classList.remove('-translate-x-full');
      menu.style.top = `${alturaHeader}` + 'px';
      this.classList.add('hidden');
      closeMenu.classList.remove('hidden'); //document.body.classList.add('overflow-hidden')
    });
    closeMenu.addEventListener('click', function () {
      menu.classList.add('-translate-x-full');
      btnMenu.classList.remove('hidden');
      this.classList.add('hidden'); //document.body.classList.remove('overflow-hidden')
    });
  }

  function positionRandom(foto) {
    var executed = false;
    var lastAncho;
    var lastAlto;

    if (!executed) {
      executed = true;
      const ancho = Math.floor(Math.random() * window.innerWidth / 2);
      const alto = Math.floor(Math.random() * window.innerHeight / 2);

      if (ancho === lastAncho && alto === lastAlto) {
        return positionRandom(foto);
      }

      lastAncho = ancho;
      lastAlto = alto;
      foto.style.left = `${ancho}` + 'px';
      foto.style.top = `${alto}` + 'px';
    }
  }

  const menuDesplazado = document.querySelectorAll('#menu-ceramics-1 li');
  const menuDesplazadoEn = document.querySelectorAll('#menu-ceramics-en-1 li');

  function moverMenu(menuDesp) {
    //let menuClone = [...items];
    items.forEach(itemMenu => {
      if (!itemMenu.classList.contains('current-menu-item')) {
        itemMenu.classList.add('hidden', 'lg:flex');
      } else {
        itemMenu.classList.add('flex');
      }
    });
    menuDesp.forEach(itemMenu => {
      if (!itemMenu.classList.contains('current-menu-item')) {
        itemMenu.classList.remove('hidden', 'lg:flex');
        itemMenu.classList.add('flex');
      } else {
        itemMenu.classList.add('hidden');
      }
    }); // menuDesplazado.prepend(...menuFake);
    // console.log(menuDesplazado)
  }

  if (document.body.classList.contains('home')) {
    document.body.classList.add('cursor-pointer');
    window.addEventListener('click', hideFeat, {
      once: true
    });
  }

  if (document.body.classList.contains('category-ceramics') || document.body.classList.contains('category-ceramics-en')) {
    // comento la funcion para altura dinámica, de momento será con el diseño
    // disparo la funcion cuando carga la pagina
    // let galeria = document.getElementById('galery-ceramics');
    // getAltura(galeria);
    // window.addEventListener('resize', getAltura);
    var mySwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_3__["default"]('.swiper', {
      // configure Swiper to use modules
      // Optional parameters
      slidesPerView: 1,
      centeredSlides: true,
      speed: 400,
      spaceBetween: 100,
      loop: true,
      autoHeight: false,
      breakpoints: {
        // when window width is >= 768px
        768: {
          autoHeight: true,
          slidesPerView: 1.9
        }
      },
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

      if (items.length % 2 === 0) {
        container.classList.add('lg:w-1/2', 'lg:border-r-2', 'border-black');
        foto.classList.add('lg:w-1/2');
      }

      if (items.length % 3 === 0) {
        console.log('3');
        container.classList.add('lg:w-2/3', 'lg:border-r-2', 'border-black');
        foto.classList.add('lg:w-1/3');
      }
    }

    if (menuDesplazado.length > 0) {
      moverMenu(menuDesplazado);
    } else {
      moverMenu(menuDesplazadoEn);
    }
  }

  if (document.body.classList.contains('page-template-template-verkauf')) {
    var items = getMenuItems();

    if (items) {
      var container = document.getElementById('sub-container');
      var foto = document.getElementById('foto');

      if (items.length % 2 === 0) {
        container.classList.add('lg:w-1/2', 'lg:border-l-2', 'border-black');
        foto.classList.add('lg:w-1/2');
      }

      if (items.length % 3 === 0) {
        console.log('3');
        container.classList.add('lg:w-2/3', 'lg:border-l-2', 'border-black');
        foto.classList.add('lg:w-1/3');
      }
    }

    if (menuDesplazado.length > 0) {
      moverMenu(menuDesplazado);
    } else {
      moverMenu(menuDesplazadoEn);
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
      },
      on: {
        init: function () {
          var capt = document.getElementById('caption1');

          if (capt) {
            capt.classList.toggle('hidden');
          }
        }
      }
    });
    let captions = document.querySelectorAll('.captions');
    var index = 1;
    mySwiper.on('slideChange', function () {
      console.log(index);
      captions.forEach(caption => {
        if (caption.classList.contains('cap' + index)) {
          caption.classList.toggle('hidden');
        }
      });

      if (index === captions.length + 1) {
        index = 0;
      } else {
        index = index + 1;
      }
    });
  } //como manipulamos ese menu en varias url, hice una funcion


  function getMenuItems() {
    return document.querySelectorAll('.nav-ceramics li');
  } //si está el sub menu de creamics, le añadimos clases para los borders, depende si dos o tres


  var items = getMenuItems();

  if (items) {
    if (items.length == 2) {
      for (var i = 0; i < items.length; i++) {
        if (i == 0) {
          items[i].classList.add('lg:border-r-2', 'lg:border-black');
        }

        items[i].classList.add('w-full', 'lg:w-1/2');
      }
    } else {
      for (var i = 0; i < items.length; i++) {
        if (i == 1) {
          items[i].classList.add('lg:border-l-2', 'lg:border-r-2', 'lg:border-black');
        }

        items[i].classList.add('w-full', 'lg:w-1/3');
      }
    }
  }

  function hideFeat(e) {
    console.log(fotos);

    for (let i = 0; i < fotos.length; i++) {
      fotos[i].classList.remove('lg:block');
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
    } //para las galerias de ceramica


    if (document.body.classList.contains('single')) {
      let itemsGaleria = document.querySelectorAll('.swiper-slide img');

      for (let i = 0; i < itemsGaleria.length; i++) {
        itemsGaleria[i].style.height = `${alt}` + 'px';
      }
    }
  }

  window.addEventListener('resize', getAltura, moverMenu);
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
/******/ 	__webpack_require__.h = function() { return "0d0e360de6b176fe7c47"; }
/******/ }();
/******/ 
/******/ }
);