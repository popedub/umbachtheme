"use strict";(self.webpackChunksage=self.webpackChunksage||[]).push([[143],{683:function(e,t,n){var s=n(194),l=n(306),o=n(764),i=n(250);(0,s.domReady)((async e=>{e&&console.error(e),window.Alpine=l.Z,l.Z.plugin(o.Z),l.Z.start(),window.Swiper=i.Z;let t=document.getElementsByClassName("featured");var n=document.getElementById("btn-menu-phone"),s=document.getElementById("close-menu"),a=document.getElementById("menu-phone"),c=document.getElementById("header");n&&(n.addEventListener("click",(function(e){var t=c.offsetHeight;a.classList.remove("-translate-x-full"),a.style.top=`${t}px`,this.classList.add("hidden"),s.classList.remove("hidden")})),s.addEventListener("click",(function(){a.classList.add("-translate-x-full"),n.classList.remove("hidden"),this.classList.add("hidden")})));const d=document.querySelectorAll("#menu-ceramics-1 li"),r=document.querySelectorAll("#menu-ceramics-en-1 li");function u(e){b.forEach((e=>{e.classList.contains("current-menu-item")?e.classList.add("flex"):e.classList.add("hidden","lg:flex")})),e.forEach((e=>{e.classList.contains("current-menu-item")?e.classList.add("hidden"):(e.classList.remove("hidden","lg:flex"),e.classList.add("flex"))}))}if(document.body.classList.contains("home")&&(document.body.classList.add("cursor-pointer"),window.addEventListener("click",(function(e){console.log(t);for(let e=0;e<t.length;e++)t[e].classList.remove("lg:block");document.body.classList.remove("cursor-pointer")}),{once:!0})),document.body.classList.contains("category-ceramics")||document.body.classList.contains("category-ceramics-en")){var g=new i.Z(".swiper",{slidesPerView:1,centeredSlides:!0,speed:400,loop:!0,autoHeight:!1,breakpoints:{768:{autoHeight:!0,slidesPerView:1.9,spaceBetween:150}},pagination:{el:".swiper-pagination",clickable:!0,bulletActiveClass:"nav-number-active",bulletClass:"nav-number cursor-pointer px-1 hover:text-rojo transition-colors duration-300 ease-in-out",renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),m=document.querySelectorAll(".tooltip span");window.onmousemove=function(e){for(var t=e.clientX-500+"px",n=e.clientY-100+"px",s=0;s<m.length;s++)m[s].style.top=n,m[s].style.left=t}}if(document.body.classList.contains("category")){let e=document.querySelectorAll(".galeria");for(let t=0;t<e.length;t++)e[t].classList.add(`gal-${t}`),new i.Z(".gal-"+t,{slidesPerView:1,centeredSlides:!0,speed:400,loop:!0,pagination:{el:".swiper-pagination",type:"fraction"},effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"}})}if(document.body.classList.contains("page-template-template-classes")){if(b=h()){var p=document.getElementById("sub-container"),f=document.getElementById("foto");b.length%2==0&&(p.classList.add("lg:w-1/2","lg:border-r-2","border-black"),f.classList.add("lg:w-1/2")),b.length%3==0&&(console.log("3"),p.classList.add("lg:w-2/3","lg:border-r-2","border-black"),f.classList.add("lg:w-1/3"))}d.length>0?u(d):u(r)}if(document.body.classList.contains("page-template-template-verkauf")&&((b=h())&&(p=document.getElementById("sub-container"),f=document.getElementById("foto"),b.length%2==0&&(p.classList.add("lg:w-1/2","lg:border-l-2","border-black"),f.classList.add("lg:w-1/2")),b.length%3==0&&(console.log("3"),p.classList.add("lg:w-2/3","lg:border-l-2","border-black"),f.classList.add("lg:w-1/3"))),d.length>0?u(d):u(r)),document.body.classList.contains("single")){w(),g=new i.Z(".swiper",{slidesPerView:1,centeredSlides:!0,speed:400,spaceBetween:100,loop:!0,autoHeight:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:function(){var e=document.getElementById("caption0");e&&e.classList.remove("hidden")}}});let e=document.querySelectorAll(".captions");g.on("slideChange",(function(){var t=g.realIndex;e.forEach((e=>{e.classList.contains("cap"+t)?(e.classList.remove("hidden"),e.classList.add("block")):e.classList.add("hidden")}))}))}function h(){return document.querySelectorAll(".nav-ceramics li")}var b;if(b=h())if(2==b.length||4==b.length)for(var L=0;L<b.length;L++)0==L&&b[L].classList.add("lg:border-r-2","lg:border-black"),b[L].classList.add("w-full","lg:w-1/2");else for(L=0;L<b.length;L++)1==L&&b[L].classList.add("lg:border-l-2","lg:border-r-2","lg:border-black"),b[L].classList.add("w-full","lg:w-1/3");function w(){var e=document.getElementById("galeria");let t=document.getElementsByClassName("banner")[0].offsetHeight;if(t=window.innerHeight-2*t,e&&(e.style.height=`${t}px`),document.body.classList.contains("single")){let e=document.querySelectorAll(".swiper-slide img");for(let n=0;n<e.length;n++)e[n].style.height=`${t}px`;let n=document.getElementById("header").offsetHeight;document.getElementById("footer-single").style.height=`${n}px`}}window.addEventListener("resize",w,u)}))},190:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[329],(function(){return t(683),t(190)})),e.O()}]);