(function ($) {

    // mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child')
		$firstAnimatingElements.addClass('slick-on');
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]');
		$animatingElements.addClass('slick-on');
		$animatingElements.siblings().removeClass('slick-on');
	});
	BasicSlider.slick({
		autoplay: true,
		//autoplaySpeed: 3000,
		autoplaySpeed: 4000,
		dots:false ,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-chevron-right"></i></button>',
		responsive: [
			{ breakpoint: 1200, settings: { dots: false, arrows: false } }
		]
	});

}
mainSlider();


})(jQuery);