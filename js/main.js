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
	});
	$('.tabs-menu li a').on('click', function () {
		$('.accordion .section').removeClass('current');
		$('.accordion .pane').css('display','none');
	});
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
			// $(".product-layer").animate({height:"100%"}, 1500);
			$(this).text("See less products");
		} else{
			// $(".product-layer").animate({height:"738px"}, 500);
			$(this).text("See more products");
		}
	});

	/*share-copy-wrap*/
	$('#share-conn, #more-copy, #menu-button').on('click',function () {
		$(this).toggleClass('active').next().toggleClass('dblock');
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
		$('#poster-sf').addClass('focused');
		$('#top-hit').addClass('dblock');
	});
	$('#search-poster').on('blur',function () {
		$('#poster-sf').removeClass('focused');
		$('#top-hit').removeClass('dblock');
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
