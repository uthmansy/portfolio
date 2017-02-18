$(document).ready(function() {
	$('.preloader').addClass('loaded');
	$('.nav-toggler').on('click', function() {
		$(this).toggleClass('open');
		$('.main-navigation').toggleClass('main-navigation-open');
		$('.nav-overlay').toggleClass('nav-overlay-open');
	});
	
	$('.nav-overlay').click(function() {
		$(this).toggleClass('nav-overlay-open');
		$('.main-navigation').removeClass('main-navigation-open');
		$('.nav-toggler').removeClass('open');
	});
	
	/* Anime */
	
	var hex = anime({
      targets: '.nav-toggler-third',
      rotate: '-45deg',
      duration: 5000,
      loop: true,
      direction: 'alternate',
      easing: 'easeOutQuad'
    });
	
	hex.play();
	
	/* slick carousels */
	
	$('.testimonials').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false
	});
	
	/* Counter up */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});