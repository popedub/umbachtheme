"use strict";(self.webpackChunksage=self.webpackChunksage||[]).push([[143],{683:function(e,t,n){var o=n(194),l=n(306),s=n(764),i=n(250);(0,o.domReady)((async e=>{e&&console.error(e),window.Alpine=l.Z,l.Z.plugin(s.Z),l.Z.start(),window.Swiper=i.Z;let t=document.getElementsByClassName("featured");for(let e=0;e<t.length;e++)n(t[e]),p(t[e]);function n(e){var t,o,l=!1;if(!l){l=!0;const s=Math.floor(Math.random()*window.innerWidth/2),i=Math.floor(Math.random()*window.innerHeight/2);if(s===t||i===o)return n(e);t=s,o=i,e.style.left=`${s}px`,e.style.top=`${i}px`}}if(document.body.classList.contains("home")&&(document.body.classList.add("cursor-pointer"),window.addEventListener("click",(function(e){for(let e=0;e<t.length;e++)t[e].classList.add("hidden");document.body.classList.remove("cursor-pointer")}),{once:!0})),document.body.classList.contains("category-ceramics")){new i.Z(".swiper",{slidesPerView:1.9,centeredSlides:!0,speed:400,spaceBetween:100,loop:!0,autoHeight:!0,pagination:{el:".swiper-pagination",clickable:!0,bulletActiveClass:"nav-number-active",bulletClass:"nav-number cursor-pointer px-1 hover:text-rojo transition-colors duration-300 ease-in-out",renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var o=document.querySelectorAll(".tooltip span");window.onmousemove=function(e){for(var t=e.clientX-500+"px",n=e.clientY-100+"px",l=0;l<o.length;l++)o[l].style.top=n,o[l].style.left=t}}if(document.body.classList.contains("category")){let e=document.querySelectorAll(".galeria");for(let t=0;t<e.length;t++)e[t].classList.add(`gal-${t}`),new i.Z(".gal-"+t,{slidesPerView:1,centeredSlides:!0,speed:400,loop:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".button-next",prevEl:".button-prev"}})}var a;if(document.body.classList.contains("page-template-template-classes")&&(a=d())){var r=document.getElementById("sub-container"),c=document.getElementById("foto");2==a.length&&(r.classList.add("lg:w-1/2","lg:border-r-2","border-black"),c.classList.add("lg:w-1/2")),3==a.length&&(console.log("3"),r.classList.add("lg:w-2/3","lg:border-r-2","border-black"),c.classList.add("lg:w-1/3"))}function d(){return document.querySelectorAll(".nav-ceramics li")}if(document.body.classList.contains("page-template-template-verkauf")&&(a=d())&&(r=document.getElementById("sub-container"),c=document.getElementById("foto"),2==a.length&&(r.classList.add("lg:w-1/2","lg:border-l-2","border-black"),c.classList.add("lg:w-1/2")),3==a.length&&(console.log("3"),r.classList.add("lg:w-2/3","lg:border-l-2","border-black"),c.classList.add("lg:w-1/3"))),document.body.classList.contains("single")&&(g(),new i.Z(".swiper",{slidesPerView:1,centeredSlides:!0,speed:400,spaceBetween:100,loop:!0,autoHeight:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})),a=d())if(2==a.length)for(var u=0;u<a.length;u++)0==u&&a[u].classList.add("border-r-2","border-black"),a[u].classList.add("w-1/2");else for(u=0;u<a.length;u++)1==u&&a[u].classList.add("border-l-2","border-r-2","border-black"),a[u].classList.add("w-1/3");function p(e){var t=0,n=0,o=0,l=0;function s(s){(s=s||window.event).preventDefault(),t=o-s.clientX,n=l-s.clientY,o=s.clientX,l=s.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function i(){document.onmouseup=null,document.onmousemove=null}e.onmousedown=function(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=i,document.onmousemove=s}}function g(){var e=document.getElementById("galeria");let t=document.getElementsByClassName("banner")[0].offsetHeight;t=window.innerHeight-2*t,e.style.height=`${t}px`;let n=document.querySelectorAll(".swiper-slide img");for(let e=0;e<n.length;e++)n[e].style.height=`${t}px`}window.addEventListener("resize",g)}))},190:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[329],(function(){return t(683),t(190)})),e.O()}]);