(function ($) {
    "use strict";
    jQuery(document).on("ready", function () {
        // var wind = $(window);
        // Header Sticky
        $(".inspire-fixed-nav").scrollToFixed();

        // Mean Menu
        jQuery(".mean-menu").meanmenu({
            meanScreenWidth: "991",
        });

        // //  Star Counter
        $(".counter-number").counterUp({
            delay: 15,
            time: 2000,
        });

        // // Popup Video
        // $(".popup-youtube").magnificPopup({
        //     disableOn: 320,
        //     type: "iframe",
        //     mainClass: "mfp-fade",
        //     removalDelay: 160,
        //     preloader: false,
        //     fixedContentPos: false,
        // });

        // Testimonials-1 owl
        $("#testimonial-slide").owlCarousel({
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            smartSpeed: 800,
            dots: true,
            autoplayHoverPause: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1000: {
                    items: 2,
                },
            },
        });

        // // Testimonials-2 owl
        $("#testimonial-slide2").owlCarousel({
            margin: 0,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            smartSpeed: 800,
            dots: true,
            autoplayHoverPause: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
					center: false,
                },
                768: {
                    items: 1,
                },
                1000: {
                    items: 3,
                },
            },
        });
		
        // Partner Logo
        $("#partner-carousel").owlCarousel({
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
            },
        });
		
        // // Tabs
        // (function ($) {
        //     $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        //     $('.tab ul.tabs li a').on('click', function (g) {
        //         var tab = $(this).closest('.tab'), 
        //         index = $(this).closest('li').index();
        //         tab.find('ul.tabs > li').removeClass('current');
        //         $(this).closest('li').addClass('current');
        //         tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        //         tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        //         g.preventDefault();
        //     });
        // })(jQuery);
		
        // // Input Plus & Minus Number JS
        // $(".input-counter").each(function () {
        //     var spinner = jQuery(this),
        //         input = spinner.find('input[type="text"]'),
        //         btnUp = spinner.find(".plus-btn"),
        //         btnDown = spinner.find(".minus-btn"),
        //         min = input.attr("min"),
        //         max = input.attr("max");

        //     btnUp.on("click", function () {
        //         var oldValue = parseFloat(input.val());
        //         if (oldValue >= max) {
        //             var newVal = oldValue;
        //         } else {
        //             var newVal = oldValue + 1;
        //         }
        //         spinner.find("input").val(newVal);
        //         spinner.find("input").trigger("change");
        //     });
        //     btnDown.on("click", function () {
        //         var oldValue = parseFloat(input.val());
        //         if (oldValue <= min) {
        //             var newVal = oldValue;
        //         } else {
        //             var newVal = oldValue - 1;
        //         }
        //         spinner.find("input").val(newVal);
        //         spinner.find("input").trigger("change");
        //     });
        // });

        // // FAQ Accordion
        $(function () {
            $(".accordion")
                .find(".accordion-title")
                .on("click", function () {
                    // Adds Active Class
                    $(this).toggleClass("active");
                    // Expand or Collapse This Panel
                    $(this).next().slideToggle("slow");
                    // Hide The Other Panels
                    $(".accordion-content").not($(this).next()).slideUp("slow");
                    // Removes Active Class From Other Titles
                    $(".accordion-title").not($(this)).removeClass("active");
                });
        });

        // // Go to Top
        $(function () {
            // Scroll Event
            $(window).on("scroll", function () {
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $(".go-top").addClass("active");
                if (scrolled < 600) $(".go-top").removeClass("active");
            });
            // Click Event
            $(".go-top").on("click", function () {
                $("html, body").animate({ scrollTop: "0" }, 500);
            });
        });
       
    });

    // // MagnificPopup
    // $(".project-container-3").magnificPopup({
    //     delegate: ".popimg",
    //     type: "image",
    //     gallery: {
    //         enabled: true,
    //     },
    // });

    // // Project isotope and filter
    // $(window).on("load", function () {
    //     var projectIsotope = $(".project-flip-container, .project-container-3").isotope({
    //         itemSelector: ".project-flip-grid, .project-grid-box",
    //     });
    //     $("#project-flip-flters li, #project-flters-3 li").on("click", function () {
    //         $("#project-flip-flters li, #project-flters-3 li").removeClass("filter-active");
    //         $(this).addClass("filter-active");
    //         projectIsotope.isotope({
    //             filter: $(this).data("filter"),
    //         });
    //     });
    // });

    // // Search Popup JS
    // $(".close-btn").on("click", function () {
    //     $(".search-overlay").fadeOut();
    //     $(".search-btn").show();
    //     $(".close-btn").removeClass("active");
    // });
    // $(".search-btn").on("click", function () {
    //     $(this).hide();
    //     $(".search-overlay").fadeIn();
    //     $(".close-btn").addClass("active");
    // });

	// // Progress bar
	// $(window).on('scroll', function () {
	// 	$(".skill-progress .progres").each(function () {
	// 		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	// 		var bottom_of_window = $(window).scrollTop() + $(window).height();
	// 		var myVal = $(this).attr('data-value');
	// 		if (bottom_of_window > bottom_of_object) {
	// 			$(this).css({
	// 				width: myVal
	// 			});
	// 		}
	// 	});
	// });
	
    // // WOW JS
    // $(window).on("load", function () {
    //     if ($(".wow").length) {
    //         var wow = new WOW({
    //             boxClass: "wow", // Animated element css class (default is wow)
    //             animateClass: "animated", // Animation css class (default is animated)
    //             offset: 20, // Distance to the element when triggering the animation (default is 0)
    //             mobile: true, // Trigger animations on mobile devices (default is true)
    //             live: true, // Act on asynchronously loaded content (default is true)
    //         });
    //         wow.init();
    //     }
    // });
	
    // // Preloader Js
	// $(window).on('load', function () {
	// 	$('.preloader').fadeOut();
	// 	$('.preloader').delay(350).fadeOut('slow');
	// });
	
})(jQuery);
