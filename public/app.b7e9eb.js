"use strict";(self.webpackChunksage=self.webpackChunksage||[]).push([[143],{683:function(e,t,n){var o=n(194),s=n(306),l=n(764),i=n(250);(0,o.domReady)((async e=>{e&&console.error(e),window.Alpine=s.Z,s.Z.plugin(l.Z),s.Z.start(),window.Swiper=i.Z;let t=document.getElementsByClassName("featured");for(let e=0;e<t.length;e++)n(t[e]),p(t[e]);function n(e){var t,o,s=!1;if(!s){s=!0;const l=Math.floor(Math.random()*window.innerWidth/2),i=Math.floor(Math.random()*window.innerHeight/2);if(l===t||i===o)return n(e);t=l,o=i,e.style.left=`${l}px`,e.style.top=`${i}px`}}if(document.body.classList.contains("home")&&(document.body.classList.add("cursor-pointer"),window.addEventListener("click",(function(e){for(let e=0;e<t.length;e++)t[e].classList.add("hidden");document.body.classList.remove("cursor-pointer")}),{once:!0})),document.body.classList.contains("category-ceramics")){new i.Z(".swiper",{slidesPerView:1.9,centeredSlides:!0,speed:400,spaceBetween:100,loop:!0,autoHeight:!0,pagination:{el:".swiper-pagination",clickable:!0,bulletActiveClass:"nav-number-active",bulletClass:"nav-number cursor-pointer px-1 hover:text-rojo transition-colors duration-300 ease-in-out",renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var o=document.querySelectorAll(".tooltip span");window.onmousemove=function(e){for(var t=e.clientX-500+"px",n=e.clientY-100+"px",s=0;s<o.length;s++)o[s].style.top=n,o[s].style.left=t}}var r;if(document.body.classList.contains("page-template-template-classes")&&(r=d())){var a=document.getElementById("sub-container"),c=document.getElementById("foto");2==r.length&&(a.classList.add("lg:w-1/2","lg:border-r-2","border-black"),c.classList.add("lg:w-1/2")),3==r.length&&(console.log("3"),a.classList.add("lg:w-2/3","lg:border-r-2","border-black"),c.classList.add("lg:w-1/3"))}function d(){return document.querySelectorAll(".nav-ceramics li")}if(document.body.classList.contains("page-template-template-verkauf")&&(r=d())&&(a=document.getElementById("sub-container"),c=document.getElementById("foto"),2==r.length&&(a.classList.add("lg:w-1/2","lg:border-l-2","border-black"),c.classList.add("lg:w-1/2")),3==r.length&&(console.log("3"),a.classList.add("lg:w-2/3","lg:border-l-2","border-black"),c.classList.add("lg:w-1/3"))),document.body.classList.contains("single")&&(m(),new i.Z(".swiper",{slidesPerView:1,centeredSlides:!0,speed:400,spaceBetween:100,loop:!0,autoHeight:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})),r=d())if(2==r.length)for(var u=0;u<r.length;u++)0==u&&r[u].classList.add("border-r-2","border-black"),r[u].classList.add("w-1/2");else for(u=0;u<r.length;u++)1==u&&r[u].classList.add("border-l-2","border-r-2","border-black"),r[u].classList.add("w-1/3");function p(e){var t=0,n=0,o=0,s=0;function l(l){(l=l||window.event).preventDefault(),t=o-l.clientX,n=s-l.clientY,o=l.clientX,s=l.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function i(){document.onmouseup=null,document.onmousemove=null}e.onmousedown=function(e){(e=e||window.event).preventDefault(),o=e.clientX,s=e.clientY,document.onmouseup=i,document.onmousemove=l}}function m(){var e=document.getElementById("galeria");let t=document.getElementsByClassName("banner")[0].offsetHeight;t=window.innerHeight-2*t,e.style.height=`${t}px`;let n=document.querySelectorAll(".swiper-slide img");for(let e=0;e<n.length;e++)n[e].style.height=`${t}px`}window.addEventListener("resize",m)}))},190:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[329],(function(){return t(683),t(190)})),e.O()}]);