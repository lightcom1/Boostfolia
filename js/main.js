//Main text slider
$(document).ready(function() {
	$('.text-slider').slick({
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		draggable: false,
		swipe: true,
		variableWidth: true,
		centerMode: true

	});
});
//slider-logo
let logoSlider = $('.slider-logo');
$(document).ready(function() {
	logoSlider.slick({
		speed: 1000,
		slidesToShow: 3,
		draggable: false,
		swipe: true,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnFocus: true,
		centerMode: true,
		variableWidth: true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});
});
//Scroll progress
const progress = document.querySelector('.scroll-bar');
window.addEventListener('scroll', progressBar);
function progressBar (e) {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let per = windowScroll / windowHeight * 100;
	progress.style.width = per + '%';
};
//Burger menu
const menuToggle = document.querySelector('.menu-icon');
const mobileNavContainer = document.querySelector('.mobile-nav');
menuToggle.onclick = function() {
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}
//hide the menu when clicking on the link
$(document).ready(function() {
	$('.mobile-nav__link').click(function(event) {
		mobileNavContainer.classList.remove('mobile-nav--active');
		menuToggle.classList.remove('menu-icon-active')
	});
});
//hide the menu when clicking on the body
$(document).mouseup(function(e) {
	if (!$('.menu-icon').is(e.target) && $('.menu-icon').has(e.target).length === 0 &&
		!$('.mobile-nav').is(e.target) && $('.mobile-nav').has(e.target).length === 0) {
		mobileNavContainer.classList.remove('mobile-nav--active');
		menuToggle.classList.remove('menu-icon-active');
	}
});
//smaller nav when scrolling
$(window).scroll(() => {
	var windowTop = $(window).scrollTop();
	windowTop > 20 ? $('nav').addClass('navbar') : $('nav').removeClass('navbar');
});

document.querySelector('.play').addEventListener('click', function(event) {
	event.preventDefault();
});

const buttonItems = document.querySelectorAll('.purchase');
for (let buttonItem of buttonItems) {
  buttonItem.addEventListener('click', (event) => event.preventDefault() )
}
//play video when click on the button
$(document).on('click', '.play', function() {
	var video = $('#playvid'),
		src = video.attr('src');
	video.attr('src', src + '&autoplay=1');
});
//Smooth animation when clicking on the logo
$('.anim_scroll').on('click', () => {
	$('html,body').animate({
		scrollTop: 0
	}, 600);
});
//Smooth animation when clicking on the link
$('a[href*="#"]').on('click', function(e) {
	$('html,body').animate({
		scrollTop: $($(this).attr('href')).offset().top - 65
	}, 600);
	e.preventDefault();
});
//open map
const map = $('.map');
$('.map__text').click(function(event){
	$('.map__line').toggleClass('active');
	map.slideToggle(300);
});

$(function() {
	$(window).scroll(function() {
		$('.Advantages__text').each(function() {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("animate__fadeInLeftBig");
			}
		});
	});
})