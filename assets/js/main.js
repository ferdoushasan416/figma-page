(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

 // Accordion Scripts
    
        $('.accordion-title').eq(0).addClass('active');
        $('.accordion-content').eq(0).slideDown();

        $(".accordion-title").on('click', function (){
            
            var trigger = $(this);
            var hasClass = trigger.hasClass('active');

            $('.accordion-title').removeClass('active');
            $('.accordion-title').next().slideUp();
            
            if(hasClass) {
                trigger.removeClass('active');
                trigger.next().slideUp();
            }

            else {
                trigger.addClass('active');
                trigger.next().slideToggle();          
            }

        });

// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// owlCarousel //
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    nav:true,
	dots:false,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp',
	topDistance: '300', 
	topSpeed: 300, // 
	animation: 'fade', 
	animationInSpeed: 200, 
	animationOutSpeed: 200,
	scrollText: '<i class="fa-solid fa-angle-up"></i>',
	activeOverlay: false,
});

// WOW active
new WOW().init();


})(jQuery);