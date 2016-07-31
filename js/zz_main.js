$('#container').imagesLoaded(function(){
    var windowHeight = $(window).height(),
        windowWidth  = $(window).width(),
        windowRadio  = windowWidth/windowHeight;
    $('.index-img').css("height","100%");
    
    
    if((windowHeight<780)&&(windowWidth>760)&&( windowRadio < 1.891)) {
        $('.intro-img').css({
            "height":"80%",
            "width":"auto"
        })
      
    }    

    if((windowHeight<780)&&(windowWidth>760)){

        $('.intro-img').css({
            "height":"80%",
            "width":"auto"
        })
      
    }
    
    if(windowWidth>776){
        var imgHeight = $('img.hidden-xs').height(),
            comfortH = (windowHeight - imgHeight) /2*1.05+"px";
        $('.intro-img').css("margin-top",comfortH);
    }

    
    if(windowWidth<776){
        $('img.visible-xs').imagesLoaded(function(){
            var imgHeight = $('img.visible-xs').height(),
                comfortH = (windowHeight - imgHeight) /2*1.05+"px";
            $('.intro-img').css("margin-top",comfortH);
        })
    }
    
    if( windowRadio > 1.891){
        $('.index-img').css('background-size',"100%")
    }
    
})


$(document).ready(function(){
    
    // next-btn hieght //
    
    $(window).on('load',function(){
        var height = 0;
        $('.next-btn').each(function(){
            height = Math.max( height, $(this).outerHeight() )
        });
        $('.next-btn').outerHeight(height);
    })
    
    // scrollbar var  //
    
    clicking=false;
    
    // index img  click
    
    $(window).one("click", function(){
        $('.index-img').animate({
            top:"-1000px"
        },400)
    });

    // scroll function 

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
        })
    })
    
    
    // scroll bar


    $(".start-btn").bind('mousedown touchstart',function(e){
        nowM = e.originalEvent.touches ?  e.originalEvent.touches[0].pageX : e.pageX;
        clicking=true;
    });
    $(".start-btn").bind('mouseup touchend',function(e){
        
        var  bLeft = $('.start-btn').css("left"),
            parse_bLeft = parseInt(bLeft);
            
        if (parse_bLeft==220){
            clicking=false;
//            $('.left-mask').fadeOut(400);
//            $('.right-mask').fadeOut(400);
            return;
        }
        else{
        clicking=false;
        $('.left-mask').css({
            "transform":"rotate(0deg)"
        })
        $('.right-mask').css({
            "transform":"rotate(0deg)"
        })
        $('.start-btn').animate({
            left:"2px"
        },420)
        return;
        }
    });

    
    $(window).bind('mousemove touchmove',function(e){
        
        if( clicking == false ) return; 
    
        var 
        trueM = e.originalEvent.touches ?  e.originalEvent.touches[0].pageX : e.pageX,
            bLeft = $('.start-btn').css("left"),
            parse_bLeft = parseInt(bLeft), 
            conW = 220 / 120,
            percentM = ( trueM - nowM )/conW,
            rotateM = "rotate("+(percentM * -1 )+"deg)",
            rotateRM = "rotate("+(percentM * 1 )+"deg)",
            MM = trueM-nowM,
            pxM = ( trueM - nowM )+"px";
        if (trueM < nowM) {
            return
        }

        if ((parse_bLeft <= 220) && (parse_bLeft >= 0)){
            $('.start-btn').css("left",pxM);
            $('.left-mask').css("transform", rotateM);
            $('.right-mask').css("transform", rotateRM);

        };

        if (parse_bLeft >= 220) {
            $('.start-btn').css("left","220px");
            $('.start-btn-container').fadeOut(500);
            $('.start-guide').fadeOut(500);
            $('.left-mask').stop().css("transform", "rotate(-130deg)");
            $('.right-mask').stop().css("transform", "rotate(130deg)");
            clicking = false;
            return
        };
        if (parse_bLeft < 1) {
            $('.start-btn').css("left","0px");
            return

        };
    });

    
    // menu function //
    var theToggle = document.getElementById('toggle');

    $('#toggle').click(function(){
        
        $('.menu-content-index').slideToggle(360);
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
    

        var element = $('.follow-scroll'),
            originalY = element.offset().top;

        // Space between element and top of screen (when scrolling)
        var topMargin = 75;

        // Should probably be set in CSS; but here just for emphasis
        element.css('position', 'relative');

        $(window).on('scroll', function(event) {
            var scrollTop = $(window).scrollTop();

            element.stop(false, false).animate({
                top: scrollTop < originalY
                ? 135
                : scrollTop - originalY + topMargin + 75
            }, 300);
        });

    
})




