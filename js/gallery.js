(function($){

    $(document).on("ready", function(){

        var holderImage = $('.recent-work-gallery-holder');
        var hoverImage = $('.recent-work-image-hover');
        var link = hoverImage.children("a");

        var close = $(".close-slided-image");
        
        var slidedGallery = $(".slide-down-gallery");
       
       var galleryVideoPlayer = $(".gallery-video-player");


        var onMobile = false;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { 
            onMobile = true; 
        }
        galleryVideoPlayer.mb_YTPlayer();

        holderImage.hover(function(){
            $(this).find(hoverImage).stop().animate({top: "0"}, 400)

        },function(){

            $(this).find(hoverImage).stop().animate({top: "100%"},400)

        });
       
        $('#choose-portfolio a').click(function(e){
            e.preventDefault();
             if (onMobile === false) {
                    galleryVideoPlayer.pauseYTP();
                }
            var isotope = $(this).attr('href').substring(1);
            $("#choose-portfolio a").removeClass("active");
            $(this).addClass("active");
            if( isotope !== 'all' ) {

                holderImage.css('opacity', '0.1');
                hoverImage.css('display', 'block');
                $('.recent-work-image-hover:not('+'.'+isotope+' .recent-work-image-hover)').css('display', 'none');


                $('.'+isotope).css({
                    'position': 'relative',
                  'opacity': '1'
                });
                slidedGallery.removeClass('active-gallery-item');
                $('.' + isotope).addClass('active-gallery-item');
            }
            else {
                hoverImage.css('display', 'block');
                holderImage.css({
                    'position': 'relative',
                  'opacity': '1'
                });

                slidedGallery.addClass("active-gallery-item");
            }
        })
        

        slidedGallery.fadeIn();

        var hideGalleryItem = function(){
            slidedGallery.removeClass("active-gallery-item");

        }

        link.on("click", function( event ){
            event.preventDefault();

            var id = $(this).attr("href");

           
            $("body, html").animate({
                scrollTop: slidedGallery.offset().top - 40
            },1000, function(){
                hideGalleryItem();

                $(id).addClass("active-gallery-item");
                // $(id + ".active-gallery-item" ).fadeIn();
                if (onMobile === false) {
                    galleryVideoPlayer.pauseYTP();
                }
                
            })

        })
    })

})(jQuery);
    
   