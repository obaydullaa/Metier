(function($) {

	/*==========  counterUp (About) ==========*/
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});
	$('.toggle-menu ul').hide();
	$(".toggle-menu a").click(function() {
		$(this).parent(".toggle-menu").children("ul").slideToggle("100");
		$(this).find(".change").toggleClass("fal fa-angle-up fal fa-angle-down");
	});



	/*==========  theme loader  ==========*/
	// $(window).on("load", function() {
	// 	$(".theme-loader").fadeOut(500);
	// });

})(jQuery);