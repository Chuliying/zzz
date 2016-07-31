$('#container').imagesLoaded(function(){
    var windowHeight = $(window).height(),
        windowWidth  = $(window).width(),
        windowRadio  = windowWidth/windowHeight;
    $('.index-img').css("height","100%");
    
    
    if((windowHeight<780)&&(windowWidth>760)&&( windowRadio < 1.891)) {
        $('.intro-img').css({
            "height":"80%",
            "width":"auto"
        });
      
    };    

    if((windowHeight<780)&&(windowWidth>760)){

        $('.intro-img').css({
            "height":"80%",
            "width":"auto"
        });
      
    };
    
    if(windowWidth>776){
        var imgHeight = $('img.hidden-xs').height(),
            comfortH = (windowHeight - imgHeight) /2*1.05,
            comfortHM = String(comfortH)+"px",
            windowPadding = (windowWidth - $('#container').width())/2+10,
            windowPaddingString = String(windowPadding)+"px";

        $('.intro-img').css("margin-top",comfortHM);
        $('.gotop').css("right",windowPaddingString);
        $('.menu-container').css("right",windowPaddingString);
    };

    if(windowWidth<776){
        
        $('img.visible-xs').imagesLoaded(function(){
            var imgHeight = $('img.visible-xs').height(),
                comfortH = (windowHeight - imgHeight) /2*1.05,
                comfortHM = String(comfortH)+"px";
            $('.intro-img').css("margin-top",comfortHM);
        });
    };
    
    if( windowRadio > 1.891){
        $('.index-img').css('background-size',"100%");
    };
    
});



$(document).ready(function(){
    
    //fb plugin 
    
    var fbWidth = $('.inner-article').innerWidth();
    
    if ( fbWidth < 670 ){
    
        $('.fb-comments').attr("data-width",fbWidth);
    }
    
    //go top
    $('.gotop').click(function(){
            jQuery("html,body").animate({
            scrollTop:0
        }, 470);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('.gotop').fadeIn("fast");
        } else {
            $('.gotop').stop().fadeOut("fast");
        }
    });
    
    // next-btn hieght //
    
    $(window).on('load',function(){
        var height = 0;
        $('.next-btn').each(function(){
            height = Math.max( height, $(this).outerHeight() )
        });
        $('.next-btn').outerHeight(height);
    });
    
    // scrollbar var  //
    
    clicking=false;
    
    // which btn
    
    $('.start-btn').click(function(){
        
    })
    
    
    // index img  click
    
    $(window).one("click", function(){
        $('.index-img').animate({
            top:"-1000px"
        },400,function(){
            $('.index-img').hide();
        });
        $('body').css('overflow','auto');
    });

    // scroll function lock

    $('.index-img').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    })

    //goTo each div

    $(document).ready(function(){
        $('.gogo-Link').bind('click',function(){
            var wheretoGo =( "#"+ $(this).attr('rel')),
                $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
            $body.animate({
                scrollTop: $(wheretoGo).offset().top
            }, 470);
           
        });
    });
    
    
    // scroll bar
    var whichBtnContainer = $('.start-btn-container'),
        whichBtn = $('.start-btn'),
        whichMaskRight = $('.right-mask'),
        whichMaskLeft = $('.left-mask'),
        whichGuide = $('.start-guide'),
        whichBtnContainer = $('.start-btn-container'),
        whichContainer = $('.huge-container');
    
    
    $(".start-btn").bind('mousedown touchstart',function(e){
        nowM = e.originalEvent.touches ?  e.originalEvent.touches[0].pageX : e.pageX,
        which = $(this).attr('which'),
            whichBtn = $('.start-btn').eq(which),
            whichMaskRight = $('.right-mask').eq(which),
            whichMaskLeft = $('.left-mask').eq(which),
            whichGuide = $('.start-guide').eq(which),
            whichBtnContainer = $('.start-btn-container').eq(which),
            whichContainer = $('.huge-container').eq(which);
        clicking=true;
        
    });
    
    $(whichBtnContainer).bind('mouseleave touchend',function(e){
        clicking=false;
        var  bLeft = $(whichBtn).css("left"),
            parse_bLeft = parseInt(bLeft);

        if (parse_bLeft==205){
            clicking=false;
            //            $('.left-mask').fadeOut(400);
            //            $('.right-mask').fadeOut(400);
            return;
        }
        else{
            clicking=false;
            $(whichMaskLeft).css({
                "transform":"rotate(0deg)"
            });
            $(whichMaskRight).css({
                "transform":"rotate(0deg)"
            });
            $(whichBtn).animate({
                left:"2px"
            },420)
            return;
        }
    });
    
    $(whichBtn).bind('mouseup touchend',function(e){
        
        var  bLeft = $(whichBtn).css("left"),
            parse_bLeft = parseInt(bLeft);
            
        if (parse_bLeft==205){
            clicking=false;
//            $('.left-mask').fadeOut(400);
//            $('.right-mask').fadeOut(400);
            return;
        }
        else{
        clicking=false;
        $(whichMaskLeft).css({
            "transform":"rotate(0deg)"
        });
        $(whichMaskRight).css({
            "transform":"rotate(0deg)"
        });
        $(whichBtn).animate({
            left:"2px"
        },420)
        return;
        }
    });

    
    $(window).bind('mousemove touchmove',function(e){
        
        if( clicking == false ) return; 
    
        var 
        trueM = e.originalEvent.touches ?  e.originalEvent.touches[0].pageX : e.pageX,
            bLeft = $(whichBtn).css("left"),
            parse_bLeft = parseInt(bLeft), 
            conW = 205 / 120,
            percentM = ( trueM - nowM )/conW,
            rotateM = "rotate("+(percentM * -1 )+"deg)",
            rotateRM = "rotate("+(percentM * 1 )+"deg)",
            MM = trueM-nowM,
            pxM = ( trueM - nowM )+"px";
        if (trueM < nowM) {
            return;
        }

        if ((parse_bLeft <= 205) && (parse_bLeft >= 0)){
            $(whichBtn).css("left",pxM);
            $(whichMaskLeft).css("transform", rotateM);
            $(whichMaskRight).css("transform", rotateRM);

        }

        if (parse_bLeft >= 205) {
            $(whichBtn).css("left","205px");
            $(whichBtnContainer).fadeOut(500);
            $(whichGuide).fadeOut(500);
            $(whichMaskLeft).stop().css("transform", "rotate(-130deg)");
            $(whichMaskLeft).stop().css("opacity", "0");
            $(whichMaskRight).stop().css("transform", "rotate(130deg)");
            $(whichMaskRight).stop().css("opacity", "0");
            clicking = false;
            return;
        }
        if (parse_bLeft < 1) {
            $(whichBtn).css("left","0px");
            return;
        }
    });

    
    // menu function //
    var theToggle = document.getElementById('toggle');

    $('#toggle').click(function(){
        
        $('.menu-content-index').slideToggle(360);
    });
    
    $(window).on('load scroll',function(){
        var windowWidth = $(window).width(),
            windowScroll = $(window).scrollTop(),
            wideLeft = (windowWidth-$('#container').width())/2+25,
            wideWidth = windowWidth - (wideLeft*2),
            artScroll = $('.inner-article').scrollTop()+80,
            artWidth = $('.inner-article').outerWidth();
        
        if ((windowWidth > 776) && (windowScroll > artScroll)){
            $('.top-nav').css("display","block");
            $('.top-nav').css("z-index","1000");
            $('.top-nav').css('left',wideLeft)
            $('.top-nav').css('width',wideWidth)
            $('.menu-container').addClass('top-menu');
            $('.menu-container').css('right',wideLeft);
        }
        
        if ( (windowWidth < 776) && (windowScroll > artScroll)){
            $('.top-nav').css('display',"block")
            $('.top-nav').css('width',"100%")
            $('.top-nav').css("z-index","1000");
            $('.menu-container').addClass('top-menu');
        }
        if (windowScroll < artScroll){
            $('.top-nav').css("z-index","-100");
            $('.menu-container').removeClass('top-menu');
        }
    })
    
    // based on Todd Motto functions
    // http://toddmotto.com/labs/reusable-js/

    // hasClass
    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    // addClass
    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }
    // removeClass
    function removeClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }
    // toggleClass
    function toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0 ) {
                newClass = newClass.replace( " " + className + " " , " " );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }

    theToggle.onclick = function() {
        toggleClass(this, 'on');
        return false;
    }
    
//
//        var originalY = 0,
//            element = $('.follow-scroll'),
//            originalY = element.offset().top;
//
//        // Space between element and top of screen (when scrolling)
//        var topMargin = 72;
//
//        // Should probably be set in CSS; but here just for emphasis
//        element.css('position', 'relative');
//
//        $(window).on('scroll', function(event) {
//            var scrollTop = $(window).scrollTop();
//
//            element.stop(false, false).animate({
//                top: scrollTop < originalY
//                ? 135
//                : scrollTop - originalY + topMargin + 72
//            }, 300);
//        });
//
//    
    jQuery('.ga-event-save').click(function() {
        var ga_cat = jQuery(this).data('cat');
        var ga_act = jQuery(this).data('act');
        var ga_lab = jQuery(this).data('pot'); // 第幾則
        ga('send', 'event', ga_cat, ga_act, ga_lab);
    });
});



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-41537444-1', 'thenewslens.com');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');

 _atrk_opts = { atrk_acct:"mZ38i1aoZM00G8", domain:"thenewslens.com",dynamic: true};
(function() { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://d31qbv1cthcecs.cloudfront.net/atrk.js"; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();




window.fbAsyncInit = function() {
    FB.init({
      appId      : '444539738978688',
      xfbml      : true,
      version    : 'v2.3'
    });
  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/zh_TW/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



   
