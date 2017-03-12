$(document).ready(function(){
	
(function($){
	/*
	* body
	*/
	var body;
	/*
	* animate body to top
	* we used to get top position
	* type: object
	*/
	var top;


	$('.navbar-nav a, #start-here a, .logo').click(function(event) {
		
		event.preventDefault();
		var id = $(this).attr("href");
		var target = $(id).offset().top;
		body.stop().animate({scrollTop:target -70 }, 1200);
	});

	var initialize = function(){
		body = $("html, body");	
	}
	initialize();
})(jQuery);

/*
* Change Easing
*/

jQuery.easing.def = "easeInOutExpo";

/*
* nav collapse
*/
function collapse(){
	if ($('.navbar-toggle:visible').length) {
		$('.navbar a').click(function () { 
			$(".navbar-collapse").collapse("hide");
		});
	}
}collapse();
	
$(window).resize(function(){
	collapse();
});


/*
* animation mobile from right
*/
(function($){

	var animateMob;
	/*
	* when animation start
	* type: intiger
	*/
	var positionStart;
	/*
	* this is the section
	*/
	var elemenatTiger;
	/*
	* where animate end
	* type: intiger
	*/
	var positionEnd;

	/*
	* this we used to move
	* slider to right
	*/
	var windowWidth;

	/*
	* this hide slider
	* move to right
	*/
	var setMobBeforeAnimate = function(){
		animateMob.css({
			marginLeft: windowWidth
		});
	}

	/*
	* set end position
	*/
	var setAnimateEnd = function(position){
		positionEnd = animateMob.position().left;
		return positionEnd;
	}


	/*
	* when animate slider
	*/
	var doAnimation = function(){
		positionStart = elemenatTiger.position().top;
		if ($(this).scrollTop() > positionStart - 400) {
			animateMob.animate({
				marginLeft: positionEnd
			}, 1000);
		};
	}
	var initialize = function(){

		elemenatTiger = $("#about-us");
		if( !elemenatTiger.length) {
			return;
		}
		animateMob = elemenatTiger.find(".slides-about-devices-holder");

		windowWidth = $(window).width();

		positionEnd = setAnimateEnd();

		setMobBeforeAnimate();


		$(window).on("scroll", function(){
			doAnimation();

		})
	}
	initialize();
})(jQuery);

/*
* ousr skills circle
*/

(function($){
	var elemenatTriger = $(".our-skils");
	if(!elemenatTriger.length) {
		return;
	}
	var windowHeight = $(window).height();
	$(window).on("scroll", function(){
		if($(this).scrollTop() > elemenatTriger.offset().top - windowHeight) {

	        $('.circle-skills').easyPieChart({
	            easing: '',
	            barColor: '#fdb913',
				trackColor: '#1b1f24',
				scaleColor: '',
				scaleLength: 5,
				lineCap: 'square',
				lineWidth: 15,
				size: 170,
				rotate: 0,
				animate: {
					duration: 3000,
					enabled: true
			},
	            onStep: function(from, to, percent) {
	                $(this.el).find('.percent').text(Math.round(percent));
	            }
	        });
			
		}
	});
})(jQuery);

/*
* testimonials
*/

(function($){

	var link;

	/*
	* one slider
	*/
	var testimonialTab;

	/*
	* testimonials container
	*/

	var testimonialsContainer;

	/*
	* clicked image
	* used to take active slider
	*/
	var clickedImage;

	/*
	* where animation end
	* type: intiger
	*/
	var animatePositionEnd;

	/*
	* move slider left
	* type: intiger
	*/
	var animateToLeft;

	/*
	* this we used to calculate
	* center position
	*/
	var testimonialsContent;

	/*
	* hover image
	* used to add active class
	*/

	var hoverImage;

	var getLeftSide = function(){
		animatePositionEnd = (testimonialsContent.width() - testimonialTab.width())/2;
		return animatePositionEnd;
	}
		$(window).resize(function(){
			testimonialTab.css({margin: "0 auto"});
			animateToLeft = $(window).width();
		})
	var initialize = function(){

		$(document).ready(function(){
			animateToLeft = $(window).width();
			
			testimonialsContainer = $("#testimonials");
			
			testimonialsContent = testimonialsContainer.find(".testimonials-content");
			
			testimonialTab = testimonialsContainer.find(".testimonial-tab");
			
			link = testimonialsContainer.find(".testimonial-image");

			hoverImage = $(".testimonial-image-hover");
			var animateStop = false;
			link.on("click", function(event){
				event.preventDefault();
				if(animateStop !== true) {
					animateStop = true;
					hoverImage.removeClass("testimonial-image-hover-active");
					$(this).find(hoverImage).addClass("testimonial-image-hover-active");

					clickedImage = $(this).attr("href");
					testimonialTab.css({
						marginLeft: getLeftSide()
					});
					testimonialTab.stop().animate({
						marginLeft: -animateToLeft
					},1000, 
					function(){
						$(this).removeClass("testimonial-active-tab");
						$(clickedImage).addClass("testimonial-active-tab").stop().animate({
							marginLeft: getLeftSide()
						},1000);
						animateStop = false;			
					});
				}
			})
		})
	}
	initialize();

})(jQuery);

/*
* this is the about me
* animation on scroll
* same as slider mob on line 55
*/

(function($){

	var animateAboutMeInfo;

	var positionStart;

	var elemenatTiger;

	var positionEnd;

	var windowWidth;

	var windowHeight;

	var rightArticle;

	var setAboutMeInfoBeforeAnimate = function(){
		animateAboutMeInfo.css({
			marginLeft: -windowWidth
		});
	}

	var setAnimateStart = function(position){
		positionEnd = animateAboutMeInfo.position().left;
		return positionEnd;
	}

	
	var initialize = function(){

		elemenatTiger = $("#about-me");
		if( !elemenatTiger.length) {
			return;
		}
		animateAboutMeInfo = $(".about-me-info-holder, .about-me-image-holder");
		

		windowWidth = $(window).width();
		windowHeight = $(window).height();

		positionEnd = setAnimateStart();

		setAboutMeInfoBeforeAnimate();
		var doAnimation = function(){
			$(window).unbind("scroll", calculateWhenAnimate);
			animateAboutMeInfo.stop().animate({
				marginLeft: 0
			}, 2000);		
		}
		var calculateWhenAnimate = function(){	
			positionStart = elemenatTiger.position().top;
			if ($(this).scrollTop() > positionStart - windowHeight + 50 ) {
				doAnimation();
			};
		}
		$(window).on("scroll", calculateWhenAnimate);

	}
	initialize();
})(jQuery);

/*
* slider tab about me
*/

(function($){
	/*
	* this is the info
	* and about me image
	* object
	*/
	var leftSide;
	/*
	* this is the left side
	* which apear from left
	* object
	*/
	var newLeftSide;

	/*
	* this is the description
	* object
	*/
	var rightSide;

	/*
	* this is the parent of all tabs
	* object
	*/
	var section;

	/*
	* this is the position top
	* of the active tab
	* type: intiger
	*/
	var scroll;

	/*
	* this is the position
	* where to animate
	* left side
	* type: intiger
	*/
	var windowWidth;

	/*
	* this is the link
	*/
	var link;

	/*
	* this remove old tab with new
	* and fade in new right side
	*/
	var switchTab = function(){
		section.removeClass("active-tab");
		$(id).addClass("active-tab");
		rightSide.fadeIn();
	}
	/*
	* this slide out left side
	* and call switchTab to fade in right side 
	*/
	var movePrevTab = function(){
		leftSide.stop().animate({left: "-"+windowWidth},1000, function(){
			switchTab();
		});
	}
	/*
	* this slide in new left side
	*/
	var animateNext = function(){
		newLeftSide.delay().stop().animate({left: "0px"},1000, function(){
		});

	}
	var initialize = function(){
		$(document).ready(function(){
			section = $(".section-about-me");

			if( !section.length) {
				return;
			}
			leftSide = $(".about-me-info-holder, .about-me-image-holder");

			link = $(".read-more-about-me");
			rightSide = $(".about-me-article");
			windowWidth = $(window).width();

			link.on("click", function(){
				if($(this).hasClass("read-more-about-me-active")) {
					return;
				}
				link.removeClass("read-more-about-me-active");
				$(this).addClass("read-more-about-me-active");
				id = $(this).attr("href");
				rightSide.css("display", "none");

				scroll = $(".active-tab").offset().top;

				$("body, html").animate({scrollTop: scroll - 100},300, function(){
					movePrevTab();
					newLeftSide = $(id).find(leftSide);
					animateNext();
				});
			});
		});
	};
	initialize();
	
})(jQuery);


/*
* Single-News
*/

(function($){

	var linkNews;

	var otherNews;

	var id;

	var scroll;

	var newNews;

	var newsPlayer;

	var customDescription;

	var showNews = function(){
		otherNews.removeClass("active-news-tab");
		$(id).addClass('active-news-tab');
	};

	

	var initialize = function(){
		$(document).ready(function(){
			var onMobile = false;
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { 
				onMobile = true; 
			}

			newsPlayer = $("#news-player");


			newsPlayer.mb_YTPlayer();
			
		
			linkNews = $(".news-article-readmore");
			otherNews = $(".section-single-news");


			linkNews.on("click", function( event ){
				event.preventDefault();
				customDescription = $(".active-news-tab .single-news-article-description");
				if($(this).hasClass("active-news-tab")) {
					return;
				}

				scroll = $(".active-news-tab").offset().top;
				newNews = $(".active-news-tab");


	
				id = $(this).attr("href");
				$("body, html").animate({scrollTop: scroll - 100}, 1500, function(){
					showNews();
					if (onMobile === false) {
						newsPlayer.pauseYTP();
					}

				});

			});

		});

	};
	initialize();


})(jQuery);

/*
* animate number
* in a price tables
*/

(function($){

	/*
	* section price tables
	* we used later this to find 
	* when call animation
	* type: object
	*/
	var priceSection = $("#pricing-tables");
	if(!priceSection.length) {
		return;
	}
	
	/*
	* position when animation started
	* type: intiger
	*/
	var startPosition = priceSection.offset().top;
	/*
	* this calculate numbers
	*/
	function animateValue (id, duration, from){
		$(window).unbind("scroll", animateGo);

		/*
		* each element
		* we used to get numbers
		* and return to it
		* type: oject
		*/
		var priceElement;

		/*
		* this is the numbers value
		* type: intiger
		*/
		var to;
		priceElement = document.getElementById(id);
		to = priceElement.getAttribute("data-price");

		setInterval(function(){
			if( from > to) {
				from--
				priceElement.innerHTML = "";
				priceElement.innerHTML += "$"+from;
			}
		},duration);

	};
	/*
	* this call animate values
	* when scroll came to
	* price section
	*/
	var animateGo = function(){
		if ($(this).scrollTop() > startPosition  ) {
			animateValue("first-table", 5, 300);
			animateValue("second-table", 5, 300);
			animateValue("third-table", 5, 300);
		};		
	};
	$(window).on("scroll", animateGo);

})(jQuery);
});
$(window).load(function() {
	$("#loader").fadeOut();
	$(".mask").delay(500).fadeOut("slow");
});
