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

	$(function () {
		//  Accordion Panels
		$(".bot-inf-mob .title").click(function () {
			$(this).next(".accord-for-mobile").slideToggle("slow").siblings(".accord-for-mobile:visible").slideUp("slow");
			$(this).toggleClass("current");
			$(this).siblings(".title").removeClass("current");
		});
	});

	$(function () {
		//  Accordion Panels
		$(".mobile-comment").click(function () {
			$(this).next(".mobile-comment-wrap").slideToggle("slow");
			$(this).toggleClass("current");
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
	});

	$('.topic-click li').on('click', function () {
		$('.mobile-wrap').addClass('topic-clicked');
		var data = $(this).data('click');
		$('.tabs-menu li').removeClass('current');
		$('.'+data).addClass('current');
		var tab = $('.current a').attr("href");
		$(".tab-content").not(tab).css("display", "none");
		$(tab).css("display", "block");
		$(window).scrollTop(0);
	});

	$('.mob-arrow').on('click', function () {
		$('.mobile-wrap').removeClass('topic-clicked');
	});

	$('.popular-link li a').on('click', function () {
		if(!$('.mobile-wrap').hasClass('topic-clicked')){
			$('.mobile-wrap').addClass('topic-clicked');
		}
		var currentTab = $(this).data('current-tab');
		$('.tabs-menu li').removeClass('current');
		$('.'+currentTab).addClass('current');
		var tab = $('.current a').attr("href");
		$(".tab-content").not(tab).css("display", "none");
		$(tab).css("display", "block");
		var currentLink = $(this).attr('href');
		$('.section').removeClass('current').next('.pane').css('display','none');
		$(currentLink).addClass('current').next('.pane').css('display','block');
		if($( window ).width()<660){
			var height = $('.section.current').offset().top-97;
		} else{
			var height = $('.section.current').offset().top-120;
		}
		$('html, body').animate({scrollTop:height}, '100');
	});
	$('.tabs-menu li a').on('click', function () {
		$('.accordion .section').removeClass('current');
		$('.accordion .pane').css('display','none');
	});
	$(".section").on('click',function () {
		if (!$(this).hasClass('current')) {
			console.log('current');
			$(".keep-calm-ban").hide();
			setTimeout (function(){
				$(".keep-calm-ban").show();
			}, 700);
		};
	})
	$('.head-close').on('click', function () {
		$(this).parent().css('display','none');
	});
	$('.not-close').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.wrap-close').css('display','none');
	});
	/*more product*/
	$('#more-product').on('click',function (e) {
		e.preventDefault();
		$(".product-layer").toggleClass('all-product');
		if($(".product-layer").hasClass('all-product')){
			$(this).text("See less products");
		} else{
			$(this).text("See more products");
		}
	});

	/*share-copy-wrap*/
	$('.menu-button').on('click',function () {
		$(this).toggleClass('active').next().toggleClass('dblock');
	});
	$('#more-copy').on('click',function () {
		$(this).toggleClass('active').next().toggleClass('dblock');
		$('#share-conn').removeClass('active').next().removeClass('dblock');
	});
	$('#share-conn').on('click',function () {
		$(this).toggleClass('active').next().toggleClass('dblock');
		$('#more-copy').removeClass('active').next().removeClass('dblock');
	});
		$('.notif').on('mouseenter',function () {
			$(this).find('.count').addClass('count-hover');
			$('#notif-list-wrap').show();
		});
		$('.notif').on('mouseleave',function () {
			$(this).find('.count').removeClass('count-hover');
			$('#notif-list-wrap').hide();
		});
		$('.menu-button').on('mouseenter',function () {
			if($( window ).width()>1000){
				$(this).addClass('active').find('.menu-list').addClass('dblock');
			}
		});
		$('.menu-button').on('mouseleave',function () {
			if($( window ).width()>1000){
				$(this).removeClass('active').find('.menu-list').removeClass('dblock');
			}
		});
	/*report-comment*/
	$('.report-comment').on('mouseenter',function () {
		$(this).append("<div class='rep-com-block'><p>Report Comment</p></div>");
	});
	$('.not-read').on('mouseenter',function () {
		$(this).append("<div class='head-com-block'><p>Mark as read</p></div>");
	});
	$('.not-close').on('mouseenter',function () {
		$(this).append("<div class='head-com-block'><p>Hide</p></div>");
	});
	$('.report-comment').on('mouseleave',function () {
		$(this).find('.rep-com-block').remove();
	});
	$('.not-read').on('mouseleave',function () {
		$(this).find('.head-com-block').remove();
	});
	$('.not-close').on('mouseleave',function () {
		$(this).find('.head-com-block').remove();
	});

	/*search form*/
		$('#search-poster').on('focus',function () {
			if($( window ).width()>1000){
				$('#poster-sf').addClass('focused');
				$('#top-hit').addClass('dblock');
			}
		});
		$('#search-poster').on('blur',function () {
			if($( window ).width()>1000){
				$('#poster-sf').removeClass('focused');
				$('#top-hit').removeClass('dblock');
			}
		});

	$('#tab-search-but').on('click',function () {
		$(this).toggleClass('clicked');
		$('.search-wrap').toggleClass('dblock');
		$('#top-hit').toggleClass('dblock');
		$('#poster-sf').toggleClass('focused').find('input').focus();
	});
	$('#mob-search-but').on('click',function () {
		$(this).toggleClass('clicked');
		$('.mob-search-form').slideToggle('slow').find('#mob-search').focus();
	});

	/*popup*/
	$('#open-popup').on('click',function (e) {
		e.preventDefault();
		$('#popup-wrap').show();
	/*scroll*/
		$('.scroll-wrapper').jScrollPane({
			verticalGutter:5,
			mouseWheelSpeed:15,
			'showArrows': false
		});
		$('.jspDrag').hide();
		$('.jspScrollable').mouseenter(function(){
			$(this).find('.jspDrag').stop(true, true).fadeIn('slow');
		});
		$('.jspScrollable').mouseleave(function(){
			$(this).find('.jspDrag').stop(true, true).fadeOut('slow');
		});
	});
	$('#close-pop').on('click',function () {
		$('#popup-wrap').hide();
	});


	$('.notif').hover(function () {
		$('.scroll-wrapper').jScrollPane({
			verticalGutter:5,
			mouseWheelSpeed:15,
			'showArrows': false
		});
		$('.jspDrag').hide();
		$('.jspScrollable').mouseenter(function(){
			$(this).find('.jspDrag').stop(true, true).fadeIn('slow');
		});
		$('.jspScrollable').mouseleave(function(){
			$(this).find('.jspDrag').stop(true, true).fadeOut('slow');
		});
	});

	/*MOBILE*/
	$('#profile-mob img').on('click',function () {
		if($( window ).width()<1000){
			$('.profile-list').toggleClass('visible');
		}
	})
	$('#notif-button').on('click',function () {
		if($( window ).width()<1000){
			$('#notif-list-wrap').toggleClass('visible');
		}
	})

	if($( window ).width()<660){
		var accord = $(".bottom-info-layer >*").clone();
		$(".bot-inf-mob").append(accord);
	} else{
		$(".bot-inf-mob").remove();
	}

	setInterval( function() {
		// if($( window ).width()>660){
			var headHeight = $("header").height();
			$(".mobile-wrap").css('padding-top',headHeight);
		// }
	} , 100);

	$('.poster-action .lk, .poster-action .st').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('pa-active');
	})

});
