
$(document).ready(function(){
    
    // 時間軸跟隨script  
    
    var element = $('.timeline-dot'),
        originalY = element.offset().top,
        cut1 = $('.timeline-01').offset().top,
        cut2 = $('.timeline-02').offset().top,
        cut3 = $('.timeline-03').offset().top,
        cut4 = $('.timeline-04').offset().top,
        cut5 = $('.timeline-05').offset().top,
        cut6 = $('.lesson-2-list').offset().top;

    // Space between element and top of screen (when scrolling)
    var topMargin = 15;

    // Should probably be set in CSS; but here just for emphasis
    element.css('position', 'absolute');

    
    $('.timeline>li').click(function(){
        var thisIndex = String($(this).index()+1),
            whichCut = ".timeline-0"+thisIndex,
            cutIndex = $(whichCut).offset().top;
        jQuery("html,body").animate({
            scrollTop: cutIndex
        }, 300);
    })
    
    $('.timeline-next-btn').click(function(){
        var x = $(this).attr("state");
        if( x == 1){
            jQuery("html,body").animate({
                scrollTop:cut2
            }, 300);
        }
        if( x == 2){
            jQuery("html,body").animate({
                scrollTop:cut3
            }, 300);
        }
        if( x == 3){
            jQuery("html,body").animate({
                scrollTop:cut4
            }, 300);
        }
        if( x == 4){
            jQuery("html,body").animate({
                scrollTop:cut5
            }, 300);
        }
        
        if( x == 5){
            jQuery("html,body").animate({
                scrollTop:cut6
            }, 300);
        }

    })
    
    $(window).on('scroll', function(event) {
        var scrollTop = $(window).scrollTop();
        
         
        if (scrollTop<(cut1+20)){

            element.stop().animate({
                top: 15
            }, 300);
            
            $('.timeline>li').removeClass('complete');
            $('.timeline>li').eq(0).addClass('complete');
            
        }
        
        if (scrollTop>(cut1+150)){
        
            element.stop().animate({
                  top:cut2-originalY+35
            }, 300);

            $('.timeline>li').removeClass('complete');
            $('.timeline > li:eq(0) , .timeline > li:eq(1)').addClass('complete');
        }
        
        if (scrollTop>(cut2+150)){

            element.stop().animate({
                top: cut3-originalY+35
            }, 300);

            $('.timeline>li').removeClass('complete');
            $('.timeline > li:eq(0) , .timeline > li:eq(1), .timeline > li:eq(2)').addClass('complete');
        }
        
        if (scrollTop>(cut3+150)){

            element.stop().animate({
                top: cut4-originalY+35
            }, 300);
            $('.timeline>li').removeClass('complete');
            $('.timeline > li:eq(0) , .timeline > li:eq(1), .timeline > li:eq(2) , .timeline > li:eq(3)').addClass('complete');
        }
        if (scrollTop>(cut4+150)){

            element.stop().animate({
                top: cut5-originalY+35
            }, 300);
            $('.timeline>li').removeClass('complete');
            $('.timeline > li:eq(0) , .timeline > li:eq(1), .timeline > li:eq(2) , .timeline > li:eq(3), .timeline > li:eq(4)').addClass('complete');
        }
    });  
    
})


