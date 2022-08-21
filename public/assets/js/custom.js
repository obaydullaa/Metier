(function($) {

		/*========== Active Hover ( Home-2)  ==========*/
	// $(".features__area-two-item").hover(function() {
	// 	$(".features__area-two-item").removeClass("features__area-two-item-hover");
	// 	$(this).addClass("features__area-two-item-hover");
	// });

	
	
	/*==========  counterUp  ==========*/
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
	// /*========== FAQ  ==========*/
	// $(".faq-item-card-header").click(function() {
	// 	if($(this).next(".faq-item-card-header-content").hasClass("active")) {
	// 		$(this).next(".faq-item-card-header-content").removeClass("active").slideUp()
	// 		$(this).children("i").removeClass("fal fa-angle-up").addClass("fal fa-angle-down")
	// 	} else {
	// 		$(".faq-item-card-header-content").removeClass("active").slideUp()
	// 		$(".faq-item-card .faq-item-card-header i").removeClass("fal fa-angle-up").addClass("fal fa-angle-down");
	// 		$(this).next(".faq-item-card-header-content").addClass("active").slideDown()
	// 		$(this).children("i").removeClass("fal fa-angle-down").addClass("fal fa-angle-up")
	// 	}
	// });

	/*==========  theme loader  ==========*/
	// $(window).on("load", function() {
	// 	$(".theme-loader").fadeOut(500);
	// });
	
	/*==========  Brand  ==========*/
	var swiper = new Swiper(".sponsors-slider", {
		slidesPerView: 3,
		loop: true,
		speed: 1500,
		spaceBetween: 120,
		breakpoints: {
			0: {
				spaceBetween: 50,
				slidesPerView: 2
			},
			575: {
				spaceBetween: 80,
				slidesPerView: 3
			},
			992: {
				slidesPerView: 4
			},
			1200: {
				slidesPerView: 3
			},
		}
	});
	/*==========  Skill Bar  ==========*/
	if($('.skill__area-right-skill-item-bar').length) {
		$('.skill__area-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	/*==========  Skill Bar Two  ==========*/
	if($('.skill__area-two-right-skill-item-bar').length) {
		$('.skill__area-two-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	// /*==========  testimonial  ==========*/
	var swiper = new Swiper(".reviews", {
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		pagination: {
			el: ".reviews-pagination",
			clickable: true,
		},
	});
	/*==========  isotope  ==========*/
	$(window).on('load', function() {
		/*========== Project Grid  ==========*/
		var $grid = $('.portfolio__area-two-active').isotope({});
		/*========== Project Filter  ==========*/
		$('.portfolio__area-two-btn').on('click', 'li', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		/*========== Project Active  ==========*/
		$('.portfolio__area-two-btn').on('click', 'li', function() {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
		});
	});
	/*========== Active Hover  ==========*/
	$(".portfolio__area-item").hover(function() {
		$(".portfolio__area-item").removeClass("portfolio__area-item-hover");
		$(this).addClass("portfolio__area-item-hover");
	});
	/*========== Active Hover  ==========*/
	$(".features__area-item").hover(function() {
		$(".features__area-item").removeClass("features__area-item-hover");
		$(this).addClass("features__area-item-hover");
	});


})(jQuery);