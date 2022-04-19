// webp test
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }else{
      document.querySelector('body').classList.add('no-webp');
   }
});
// burger
function burgerMenu(){
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.nav__menu')
   const contact = document.querySelector('.nav__contact')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if(!menu.classList.contains('active')){
			menu.classList.add('active')
         contact.classList.add('active')
			burger.classList.add('active-burger')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
         contact.classList.remove('active')
		}
	})
	window.addEventListener('resize', () => {
		if (window.innerWidth > 767.98){
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
         contact.classList.remove('active')
		}
	})
}
burgerMenu();
function fixedNav(){
	const nav = document.querySelector('nav')
	const breakpoint = 1
	if (window.scrollY > breakpoint){
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)
// swiper
if (document.querySelector('.home')){
   new Swiper('.review__swiper > .swiper-container', {
      direction: 'horizontal',
      loop: !1,
      initialSlide: 0,
      speed: 1500,
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
         enabled: !0,
         onlyInViewport: !1
      },
      pagination: {
         el: ".swiper-pagination",
         type: "fraction",
       },
       navigation: {
         nextEl: ".swiper-next",
         prevEl: ".swiper-prev",
       },
   });
}