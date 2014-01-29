/*
 *        bvslide version 1.2.0
 *        http://blogvisa.com/webdevelopment/plugins/jquery/bvslide/
 *        
 *        Copyright 2014 Blogvisa Web Development
 *        Released under the MIT license
 */
        
;(function( $ ) {
    $.fn.bvslide = function( options ) {
        var settings = $.extend( {}, $.fn.bvslide.defaults,options );
        return this.each(function() {
            // our 'globals'; numR is a variable we'll use to iterate through all the images
            var numR = 0, images = $(this), max = $(this).find('img').length, clicked = 0, pause = false,
            oleft = parseInt($(this).css("left")) || 0,
            otop = parseInt($(this).css("top")) || 0,
            iwidth = $(this).find("img").eq(0).width(),
            iheight = $(this).find("img").eq(0).height(),
            arg1 = iwidth / 3,
            arg2 = arg1 * 2,
            imgSrc0, imgSrc, currentImg,
            randomNum = Math.floor(Math.random() * 8 + 1),
            iheight3 = iheight / 3,
            iwidth6 = iwidth / 6; 
            images.append("<div id='bvdiv237'></div>");
            //the following avoids overflowing and varying image sizes
            images.css({'position': 'relative', 'width': iwidth + 'px', 'height': iheight * 1.2 + 'px',"overflow":"hidden"}); 
            images.find("img").css({"display": "none", "width": iwidth, "height": iheight, "border":0});
        
            function bvslide(){
            
            switch(settings.effect) {
                case "blinds":
                    //Animating images
                    $("#bvdiv237").append("<div id='bvslide1'></div>");
                    $("#bvdiv237").append("<div id='bvslide2'></div>");
                    $("#bvdiv237").append("<div id='bvslide3'></div>");
                    images.find("img").eq(numR).clone().appendTo($("#bvslide1"));
                    images.find("img").eq(numR).clone().appendTo($("#bvslide2"));
                    images.find("img").eq(numR).clone().appendTo($("#bvslide3"));
                    $("#bvslide1, #bvslide2, #bvslide3").css({
                        'width': arg1 + 'px', 'overflow': 'hidden', 'float': 'left'
                    });
                    $("#bvdiv237").css({
                    'width': iwidth + 'px', 'height': iheight + 'px', 'overflow': 'hidden'
                    }).find("img").css("border","0px");
                    $("#bvslide1, #bvslide2, #bvslide3").find("img").css({"display": "block", "position": "relative", "left": -iwidth + "px", 'width': iwidth, 'height': iheight });
    
                    $("#bvslide1").find("img").animate({
                        marginLeft: iwidth + "px"
                    },2000);
                    $("#bvslide2").find("img").animate({
                        marginLeft: arg2 + "px"
                    },2000);
                    $("#bvslide3").find("img").animate({
                        marginLeft: arg1 + "px"
                    },2000);
                break;
                case "jigsaw":
                    imgSrc0 = encodeURI(images.find("img").eq(clicked === 0 ? numR - 1 : currentImg).attr("src"));
                    numR === max ? imgSrc = encodeURI(images.find("img").eq(0).attr("src")) : imgSrc = encodeURI(images.find("img").eq(numR).attr("src"));
        
                    $("#bvdiv237").css({"width":iwidth + 'px', 'height': iheight + 'px',"backgroundImage": "url(" + imgSrc + ")", "backgroundRepeat": "no-repeat", "backgroundSize": "100% 100%" });
                    //o.find("img").eq(numR).css("display","none").end().eq(numR + 1).css("display","block");
                    for(var i = 0; i < 18; i++) {
                        $("#bvdiv237").append("<div class='jigsaw237' />");
                    }
                    for(var i = 0; i < 18; i++) {
                        if(i < 6) {
                            $(".jigsaw237").eq(i).css({"backgroundImage":"url(" + imgSrc0 + ")","backgroundPosition":i * 20 + "% 0%", "backgroundSize": iwidth + "px " + iheight + "px"});
                        }
                        else if(i < 12) {
                            var i2 = i - 6;
                            $(".jigsaw237").eq(i).css({"backgroundImage":"url(" + imgSrc0 + ")","backgroundPosition":i2 * 20 + "% 50%", "backgroundSize": iwidth + "px " + iheight + "px"});
                        }
                        else if(i < 18) {
                            var i3 = i - 12;
                            $(".jigsaw237").eq(i).css({"backgroundImage":"url(" + imgSrc0 + ")","backgroundPosition":i3 * 20 + "% 100%", "backgroundSize": iwidth + "px " + iheight + "px"});
                        }
                    }
                    $(".jigsaw237").css({"float":"left","width":iwidth6 + "px","height":iheight3 + "px",});       
                    function jigsaw(a,b,c) {
                        $(".jigsaw237").eq(a)
                            .css("background","transparent")
                        .end().eq(b)
                            .css("background","transparent")
                        .end().eq(c)
                            .css("background","transparent");
                        randomNum++;
                        switch (randomNum) {
                            case 1: setTimeout(function() {
                                jigsaw(0,6);
                            },200);
                        break;
                        case 2: setTimeout(function() {
                            jigsaw(2,9);
                        },200);
                        break;
                        case 3: setTimeout(function() {
                            jigsaw(10,5,17);
                        },200);
                        break;
                        case 4: setTimeout(function() {
                            jigsaw(12,13);
                        },200);
                        break;
                        case 5: setTimeout(function() {
                            jigsaw(11,16);
                        },200);
                        break;
                        case 6: setTimeout(function() {
                            jigsaw(3,4);
                        },200);
                        break;
                        case 7: setTimeout(function() {
                            jigsaw(6,14);
                        },200);
                        break;
                        case 8: setTimeout(function() {
                            jigsaw(1,8,15);
                        },200);
                        break;
                        case 9: setTimeout(function() {
                            jigsaw(0,6);
                        },200);
                        break;
                        case 10: setTimeout(function() {
                            jigsaw(2,9);
                        },200);
                        break;
                        case 11: setTimeout(function() {
                            jigsaw(10,5,17);
                        },200);
                        break;
                        case 12: setTimeout(function() {
                            jigsaw(12,13);
                        },200);
                        break;
                        case 13: setTimeout(function() {
                            jigsaw(11,16);
                        },200);
                        break;
                        case 14: setTimeout(function() {
                            jigsaw(3,4);
                        },200);
                        break;
                        case 15: setTimeout(function() {
                            jigsaw(6,14);
                        },200);
                        break;
                        case 16: setTimeout(function() {
                            jigsaw(1,8,15);
                        },200);
                        break;
                        case 17: setTimeout(function() {
                        },200);
                        break;
                    }
                }
                jigsaw(7,14);
                
                break;
                case "simple":
                    if(!$("#bvdiv237").has("img").length) {
                        $("#bvdiv237").css({
                            "width":iwidth * max + 50 + "px","height":iheight + "px","poistion":"relative",
                        });
                        images.find("img").clone().appendTo($("#bvdiv237")).css({"position":"relative","display":"block","float":"left","width":iwidth + "px", "height":iheight + "px"});
                    }
                    if(numR === max) {
                        $("#bvdiv237").find("img").animate({
                            left: 0
                        });
                    }
                    else {
                            $("#bvdiv237").find("img").animate({
                                left: -iwidth * (numR)
                            },500);
                    }
                break;
                case "stack":
                    if(!$("#bvdiv237").has("img").length) {
                        $("#bvdiv237").css({
                            "width":iwidth + "px","height":iheight + "px","poistion":"relative",
                        });
                        images.find("img").clone().appendTo($("#bvdiv237"));
                        $("#bvdiv237").find("img").eq(0).css("display","block");
                    }
                    $("#bvdiv237").css({
                       "backgroundImage": "url(" + imgSrc + ")", "backgroundRepeat": "no-repeat", "backgroundSize": "100% 100%" 
                    });
                    $("#bvdiv237").find("img").eq(numR - 1).css("display","none").end().eq(numR).css({"display":"block","position":"relative","top":-iheight + "px"});
                    $("#bvdiv237").find("img").eq(numR).animate({
                        top: 0
                    },1000);
                break;
                case "horizontal stack":
                    if(!$("#bvdiv237").has("img").length) {
                        $("#bvdiv237").css({
                            "width":iwidth + "px","height":iheight + "px","poistion":"relative",
                        });
                        images.find("img").clone().appendTo($("#bvdiv237"));
                        $("#bvdiv237").find("img").eq(0).css("display","block");
                    }
                    $("#bvdiv237").css({
                       "backgroundImage": "url(" + imgSrc + ")", "backgroundRepeat": "no-repeat", "backgroundSize": "100% 100%" 
                    });
                    $("#bvdiv237").find("img").eq(numR - 1).css("display","none").end().eq(numR).css({"display":"block","position":"relative","left":-iwidth + "px"});
                    $("#bvdiv237").find("img").eq(numR).animate({
                        left: 0
                    },1000);
                break;
                case "fade":
                    if(!$("#bvdiv237").has("img").length) {
                        $("#bvdiv237").css({
                            "width":iwidth + "px","height":iheight + "px","poistion":"relative",
                        });
                        images.find("img").clone().appendTo($("#bvdiv237"));
                        $("#bvdiv237").find("img").eq(0).css("display","block");
                    }
                    $("#bvdiv237").css({
                       "backgroundImage": "url(" + imgSrc + ")", "backgroundRepeat": "no-repeat", "backgroundSize": "100% 100%" 
                    });
                    $("#bvdiv237").find("img").eq(numR - 1).css("display","none");
                    $("#bvdiv237").find("img").eq(numR).animate({
                        opacity: "show"
                    },1000);
                break;
            }
                
            //auto-animate filmstrip
            if(numR > 5 && parseInt($("#bvnav237").css("left")) > iwidth - $("#bvnav237").width()) {
                $("#bvnav237").animate({
                    left: "-=" + $(this).width() / max
                });
            }
            if(numR == 0) {
                $("#bvnav237").animate({
                    left: 0
                });
            }
            //navigation buttons: filmstrip, numbers or dots
            if (settings.navigation === "filmstrip") {
                $("#bvdiv237").after("<div id='bvnav237'><div>");
                for (var i = 0; i < max; ++i) {
                    images.find("img").eq(i).clone().appendTo($("#bvnav237"));
                }
                $("#bvnav237").css({
                    "position": "relative", "top": otop + 10 + "px", "left": oleft + 10 + "px","width":(iwidth / 6.5) * max + "px","height": iheight / 6 + "px"
                });
                settings.navigation = false;
            }
            else if (settings.navigation === "numbers") {
                $("#bvdiv237").after("<div id='bv_dot_237'></div>");
                for (var i = 1; i <= max; i++) {
                    $("#bv_dot_237").append("<span class='bvdots_237' id ='bv_dots_237" + i + "'>" + i + "</span>");
                }
                $("div #bv_dot_237").css({
                    "position": "relative", "top": otop - 50 + "px", "left": oleft + 10 + "px","height":"50px"
                });
                settings.navigation = false;
            }
            else if (settings.navigation === "dots") {
                $("#bvdiv237").after("<div id='bv_dot_237'></div>");
                for (var i = 1; i <= max; i++) {
                    $("#bv_dot_237").append("<span class='bvdots_237' id ='bv_dots_237" + i + "'></span>");
                }
                $("div #bv_dot_237").css({
                    "position": "relative", "top": otop - 50 + "px", "left": oleft + 10 + "px",
                });
                settings.navigation = false;
            }
            
            //CSS for dots & numbers
            $(".bvdots_237").css({
                "width": "15px", "border":"2px solid #FFFFFF","text-align": "center", "cursor":"pointer","fontSize":"12px","font-weight":"bold","padding":"5px", "margin":"5px","float": "left","background":"rgba(0,0,0,.4)", "borderRadius": "100px","color":"#FFFFFF"
            });
            $("#bv_dots_237" + (numR + 1)).css({
                "background":"#FFFFFF","color":"#000"
            });
            //CSS for filmstrip
            $("#bvnav237").find("img").css({
                "width": iwidth / 8 + "px", "height": iheight / 8 + "px", "float": "left","cursor":"pointer","display":"block","margin":"7px","border":"5px solid #eee","transform":"scale(1)","box-shadow":"-3px 3px rgba(0,0,0,0)"
            });
            $("#bvnav237").find("img").eq(numR).css({
                "transform":"scale(1.2)","box-shadow":"-3px 3px rgba(0,0,0,.3)","border":"5px solid #8e8e8e"
            });
        }
        
        //In case an image has a parent "<a>" element
        if(images.has("a").length) {
            var href = images.find("img").eq(numR).parent("a").attr('href');
            href == undefined ?  $("#bvdiv237").unwrap() : $("#bvdiv237").wrap("<a href = '" + href + "' />");
        }
        
        //Animate all images recursively: 'automatic animation'.
        $.fn.bvslide.dobvslide = function() {
            bvslide();
            if(numR < max && settings.autoplay === true) {
                setTimeout(function() {
                    if(clicked === 0 && pause === false) { //If a navigation or pause button has NOT been clicked
                        var src = encodeURI(images.find("img").eq(numR).attr("src"));
                        switch(settings.effect) {
                            case "blinds":
                                $("#bvslide1, #bvslide2, #bvslide3").remove();
                                var src = encodeURI(images.find("img").eq(numR).attr("src"));
                                $("#bvdiv237").css({
                                    "backgroundImage": "url(" + src + ")", "backgroundRepeat": "no-repeat", "backgroundSize": "100% 100%" 
                                });
                            break;
                            case "jigsaw":
                                $(".jigsaw237").remove();
                                randomNum = Math.floor(Math.random() * 8 + 1);
                            break;
                            case "simple":
                            break;
                            case "stack":
                                imgSrc = encodeURI(images.find("img").eq(numR).attr("src"));
                            break;
                            case "horizontal stack":
                                imgSrc = encodeURI(images.find("img").eq(numR).attr("src"));
                            break;
                            case "fade":
                                imgSrc = encodeURI(images.find("img").eq(numR).attr("src"));
                            break;
                                
                                
                        } 
                        numR++;
                        $.fn.bvslide.dobvslide();
                    }
                    else { //If a navigation or pause button has been clicked, hold on with animation, and resume only when clicked === 0 && pause === false
                        setTimeout(arguments.callee, settings.delay);
                    }
                }, settings.delay);
            }
            else if (numR === max){
                $(".jigsaw237").remove();
                numR = 0;
                $.fn.bvslide.dobvslide();
            }
        };
        $.fn.bvslide.dobvslide();
        
        //Click event-bound animation (bound on one of the navigation buttons)
        $(document).click(function(event) {
            var target = $(event.target);
            event.preventDefault();
            for (var i = 1; i <= max; i++) {
                if(target.is("#bv_dots_237" + i) || target.is($("#bvnav237").find("img").eq(i - 1)) || target.is(settings.previous) || target.is(settings.next)) {
                    clicked++; //prevent simultaneous automatic and event-bound animation
                    switch (settings.effect) {
                        case "blinds":
                            $("#bvslide1, #bvslide2, #bvslide3").remove();
                            var src = encodeURI(images.find("img").eq(numR).attr("src"));
                            $("#bvdiv237").css({
                                "backgroundImage": "url(" + src + ")", "backgroundRepeat": "no-repeat", "backgroundSize": "100% 100%" 
                            });
                        break;
                        case "jigsaw":
                            $(".jigsaw237").remove();
                            randomNum = Math.floor(Math.random() * 8 + 1);
                            currentImg = numR;
                        break;
                        case "simple":
                        break;
                        case "stack":
                            $("#bvdiv237").find("img").eq(numR).css("display","none");
                            imgSrc = encodeURI(images.find("img").eq(numR).attr("src"));
                        break;
                        case "horizontal stack":
                            $("#bvdiv237").find("img").eq(numR).css("display","none");
                            imgSrc = encodeURI(images.find("img").eq(numR).attr("src"));
                        break;
                        case "fade":
                            $("#bvdiv237").find("img").eq(numR).css("display","none");
                            imgSrc = encodeURI(images.find("img").eq(numR).attr("src"));
                        break;
                            
                    
                    }
                    if(target.is(settings.previous)) {
                        if(numR === 0) {
                            numR = max -1;
                            i = max;
                        } else {
                            numR = numR - 1;
                            i = max;
                        }
                    }
                    else if(target.is(settings.next)) {
                        if(numR === max - 1) {
                            numR = 0;
                            i = max;
                        }
                        else {
                            numR = numR + 1;
                            i = max;
                        }
                    }
                    else {
                        numR = i - 1;
                    }
                    bvslide();
                }
                if(target.is(settings.play)) {
                    clicked++;
                    i = max;
                    pause === false ? pause = true : pause = false;
                }
            }
            setTimeout(function() {
                clicked--;//resume automatic animation
                if(clicked < 0) {
                    clicked = 0
                }
                console.log(clicked);
            },settings.delay - 2000);
        });
        //Showing overflowed images on the filmstrip
        $("#bvnav237").mouseover(function(event) {
            var target = $(event.target),
            offSet = images.offset(),
            navRight = $("#bvnav237").width() - iwidth,
            divPageX = event.pageX - offSet.left;
            if(divPageX > (iwidth - 100)) {
                $("#bvnav237").animate({
                    left: -navRight
                }, navRight * 2);
            }
            else if(divPageX < 100) {
                $("#bvnav237").animate({
                    left: 0
                }, navRight * 2);
            }
            else {
                $("#bvnav237").stop();
            }
            $("#bvnav237").mouseout(function() {
                $("#bvnav237").stop();
            });
        });
    });
    };
    $.fn.bvslide.defaults = {
        navigation: "filmstrip",
        delay: 5000,
        effect: "stack",
        previous: "",
        next: "",
        play: "",
        autoplay: true
    };
})(jQuery);