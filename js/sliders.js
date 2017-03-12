	
	/*
	* slider 3
	*/

(function($){

	var carousel;

	var sliderText;

	var heightCarousel;

	var windowHeight;

	var buttons;

	var background;
	var total;
	var count;
	
	var setSliderDimensionForSmaller = function(){
		heightCarousel = $(window).height() -280;
		carousel.css({
			height: heightCarousel + 'px',
			width : "100%"
		});	
	}
	var setSliderDimensionForLarge = function(){
		heightCarousel = $(window).height() -280;
		carousel.css({
			height: heightCarousel + 'px',
			width : "100%"
		});
	}
	var initialize = function(){
		

		$(document).ready(function(){
			carousel = $('.carousel-3 , .slider-background-fade, .slider-back');

			buttons = $("#right, #left");

			background = $( ".slider-back" );

			total = background.length;
			count = 0;

			if(!carousel.length) {
				return;
			}
			$("#slideshow-3").cycle({
				fx: 'scrollDown',
				delay: 1000,
				timeout: 8000, 

		    	prev:   '#left', 
    			next:   '#right'
			}).css({
				overflow: "visible",
				maxWidth: "90%",
				height: "155px"
			}).children().css({
				height: "",
				maxHeight: "300px"
			})
			$(".slider-background-fade").cycle({
				fx:'scrollHorz',
				timeout: 8000, 

				prev:   '#left', 
    			next:   '#right'
			}).css({
				overflow: "visible"
			})			
			if($(window).width() < 767) {
				setSliderDimensionForSmaller();
			}
			else {
				setSliderDimensionForLarge();
			}

		});

		$(window).resize(function(){
			if($(this).width() < 767) {
				setSliderDimensionForSmaller();
			}
			else {
				setSliderDimensionForLarge();
			}
		})	
	}
	initialize();

})(jQuery);

(function($){

	/*
	* slider 2
	*/

	var carousel;


	var heightCarousel;

	var windowHeight;


	var setSliderDimensionForSmaller = function(){
		heightCarousel = $(window).height() -280;
		carousel.css({
			height: heightCarousel + 'px',
			width : "100%"
		});	
	}
	var setSliderDimensionForLarge = function(){
		heightCarousel = $(window).height() -280;
		carousel.css({
			height: heightCarousel + 'px',
			width : "100%"
		});	
	}
	var initialize = function(){
		

		$(document).ready(function(){
			carousel = $('.carousel-video');
			if(!carousel.length) {
				return;
			}
			if($(window).width() < 767) {
				setSliderDimensionForSmaller();
			}
			else {
				setSliderDimensionForLarge();
			}
			$("#slideshow-2").cycle({

				fx: 'scrollDown', 
			    speedIn:  2000, 
			    speedOut: 500, 	   
			    delay:   -1000
			}).css({
				overflow: "visible",
				maxWidth: "90%",
				height: "155px"
			}).children().css({
				height: "",
				height: "155px!important"
			})

		});

		$(window).resize(function(){
			if($(this).width() < 767) {
				setSliderDimensionForSmaller();
			}
			else {
				setSliderDimensionForLarge();
			}

		})
		

	}
	initialize();

})(jQuery);

(function($){
	/*
	* slider1 
	*/
	var carousel;

	var sliderText;

	var heightCarousel;

	var windowHeight;

	var buttons;

	var setSliderDimensionForSmaller = function(){
		heightCarousel = $(window).height() -280;
		carousel.css({
			height: heightCarousel + 'px',
			width : "100%"
		});	
	}
	var setSliderDimensionForLarge = function(){
		heightCarousel = $(window).height() -280;
		carousel.css({
			height: heightCarousel + 'px',
			width : "100%"
		});	
	}
	var initialize = function(){
		
		carousel = $('#carousel-example-generic, #carousel-example-generic .carousel-inner, #carousel-example-generic .item');

		buttons = $("a.right, a.left, .carousel-indicators");

		$(document).ready(function(){
			if(!carousel.length) {
				return;
			}
			if($(window).width() < 767) {
				setSliderDimensionForSmaller();
			}
			else {
				setSliderDimensionForLarge();
			}

		});

		$(window).resize(function(){
			if($(this).width() < 767) {
				setSliderDimensionForSmaller();
			}
			else {
				setSliderDimensionForLarge();
			}

		})
	}
	initialize();

})(jQuery);

(function($){
	/*
	* slider words
	*/

	/*
	* this is the holder
	* for slides
	* later we change height
	* type: object
	*/
	var wordsContainer;

	/*
	* this is the slide
	* later we animate him
	* and set height
	* type: object
	*/
	var slides;

	/*
	* single slide
	* we used for calculate
	* height of slider
	* type: object
	* return: intiger
	*/
	var singleWord;

	/*
	* height of the one slide
	* we used them for
	* calculate how to animate
	* and later we set height slider container
	* type: intiger
	*/
	var count;

	/*
	* this we used to calculate interval
	* and slides length
	* type: intiger
	*/
	var numWords;

	/*
	* loop
	* type: intiger
	*/
	var i;

	/*
	* get slides height
	*/
	var getSlidesHeight = function(){
		var height = 0;
		singleWord.each(function(index, word){
			height += $(word).height();
		})
		return height;
	}

	/*
	* initialize slides and
	* slide container height 
	*/
	var initializeSlidesHeight = function(){
		var height = getSlidesHeight();

		slides.height( height );
		wordsContainer.height( count );
	}

	/*
	* move slide up
	*/
	var slideUp = function(){

		i++;
		slides.animate({
			top: "-="+count
		},1000,"easeInOutBack", function(){

			if(i >= numWords) {
				slides.css("top", "0px");
				i = 0;
			}
		});
	}


	var initialize = function(){

		wordsContainer = $(".word-holder");

		slides = $(".words-slides");

		if(!slides.length) {
			return;
		}
		
		singleWord = $(".word-slide");

		count = singleWord.height();

		numWords = singleWord.length - 1;

		i = 0;
		
		initializeSlidesHeight();

		/*
		* just call again
		* to calculate new dimension
		*/
		$(window).resize(function(){
			count = singleWord.height();
			initializeSlidesHeight();
		});

		setInterval(slideUp,4000);

	}
	initialize();


})(jQuery)