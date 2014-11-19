/* Main scripts */

$(document).ready(function() {
	$(".tabs-menu a").click(function(event) {
		event.preventDefault();
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		var tab = $(this).attr("href");
		$(".tab-content").not(tab).css("display", "none");
		$(tab).fadeIn();
	});

	$(function () {
		//  Accordion Panels
		$(".accordion div").show();
		setTimeout("$('.accordion div').slideToggle('slow');", 1000);
		$(".accordion h3").click(function () {
			$(this).next(".pane").slideToggle("slow").siblings(".pane:visible").slideUp("slow");
			$(this).toggleClass("current");
			$(this).siblings("h3").removeClass("current");
		});
	});


	// hide #back-top first
	$("#back-top").hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	//search
	$('.search-button-down').on('click', function () {
		$('.search-form').toggle();
	})

	$('.topic-click li').on('click', function () {
		$('.mobile-wrap').addClass('topic-clicked');
		var data = $(this).data('click');
		$('.tabs-menu li').removeClass('current');
		$('.'+data).addClass('current');
		var tab = $('.current a').attr("href");
		$(".tab-content").not(tab).css("display", "none");
		$(tab).css("display", "block");
		$(window).scrollTop(0);
		console.log(tab);
	})
	$('.mob-arrow').on('click', function () {
		$('.mobile-wrap').removeClass('topic-clicked');
	})
});
