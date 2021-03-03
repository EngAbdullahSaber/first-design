/*global $  SmoothScroll  duration y x getNiceScroll*/
$(function () {
    "use strict";
     //  calculate carsouel height
 
     

     $("body").niceScroll({cursorborder:"",autohidemode:false,cursorcolor:"#ed1d24",boxzoom:true});
    
     
        
// when click on li in featured-work
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
       
        if ($(this).data('class') === 'all') {
            $('.shuffle-image .col-md').css('opacity', '1');
            
        } else {
            $('.shuffle-image .col-md').css('opacity', '.6');
            $($(this).data('class')).parent().css("opacity", "1");
        
        }
    });
    
   
    
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});
   $(window).on('load', function() {
  
    $('.loading').fadeOut(2000);
        $('html').css("overflow", "visible");
})
