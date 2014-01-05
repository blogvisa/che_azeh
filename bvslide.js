/************** bvslide version 1.0.0 *****************/
(function( $ ) {
    $.fn.bvslide = (function( options ) {
        var settings = $.extend({
            dots: true,
            dot_color: "#ffff66",
            number_color: "000000",
            delay: 3000
        },options );
        // our 'globals'; numR is a variable we'll use to iterate through all the images
        var numR = 0, images = this, max = this.find('img').length; 
        
        dobvslide();
        function bvslide(o,num) {
            //get image dimensions
            var iwidth = parseInt(o.find("img").eq(num).width()),
            iheight = parseInt(o.find("img").eq(num).height()),
            oleft = o.css("left") || 0,
            otop = parseInt(o.css("top")) || 0,
            iwidth1 = o.find("img").eq(0).width(), 
            iheight1 = o.find("img").eq(0).height(),
            arg1 = iwidth / 3,
            arg2 = arg1 * 2;
            $("#bv_237").remove();
            
            //the following avoids overflowing and varying image sizes
            o.css({'position': 'relative', 'width': iwidth + 'px', 'height': iheight + 'px', 'overflow': 'hidden'}); 
            o.find("img").css({"display": "none", "width": iwidth1, "height": iheight1});
            
            //animation effects
            o.append("<div id='bvslide1'></div>");
            o.append("<div id='bvslide2'></div>");
            o.append("<div id='bvslide3'></div>");
            o.find("img").eq(num).clone().appendTo($("#bvslide1"));
            o.find("img").eq(num).clone().appendTo($("#bvslide2"));
            o.find("img").eq(num).clone().appendTo($("#bvslide3"));
            $("#bvslide1, #bvslide2, #bvslide3").css({
                'width': arg1 + 'px', 'overflow': 'hidden', 'float': 'left'
            });
            $("#bvslide1, #bvslide2, #bvslide3").find("img").css({"display": "block", "position": "relative", "left": -iwidth + "px", 'width': iwidth1, 'height': iheight1 });
    
    
            $("#bvslide1").find("img").animate({
                marginLeft: iwidth + "px"
            },2000);
            $("#bvslide2").find("img").animate({
                marginLeft: arg2 + "px"
            },2500);
            $("#bvslide3").find("img").animate({
                marginLeft: arg1 + "px"
            },3000);
            
            //set dots. To style dots, 
            if (settings.dots === true) {
                o.after("<div id='bv_dot_237'></div>");
                for (var i = 1; i <= max; i++) {
                    $("#bv_dot_237").append("<span class='bvdots_237' id ='bv_dots_237" + i + "'>" + i + "</span>");
                }
                $("div #bv_dot_237").css({
                    "position": "relative", "top": otop - 50 + "px", "left": oleft,"height":"50px"
                });
                $(".bvdots_237").css({
                "width": "15px", "text-align": "center", "cursor":"pointer","fontSize":"12px","padding":"5px", "margin":"5px","float": "left", "color": "#000", "background": "#fff", "borderRadius": "100px"
                });
                settings.dots = false;
            }
            $("#bv_dots_237" + (num + 1)).css({
                "background": settings.dot_color, "padding": "10px","marginTop": "-2px","color":settings.number_color
            });
            $(".bvdots_237").not("#bv_dots_237" + (num + 1)).css({
                "width": "15px", "text-align": "center", "cursor":"pointer","fontSize":"12px","padding":"5px", "margin":"5px","float": "left", "color": "#000", "background": "#fff", "borderRadius": "100px"
            });
            
            //to be executed when sliding of an image is complete
            setTimeout(function() {
        
                    $("#bvslide1, #bvslide2, #bvslide3").remove();
                var src = encodeURI(o.find("img").eq(num).attr("src"));
                if(o.find("a")) {
                    attrb = o.find("a").eq(num).attr("href");
                    o.append("<a href=" + attrb + "><div id='bv_237'></div></a>");
                    $("#bv_237").css({
                        "width": "100%","height":"100%"
                    });
                }
                    o.css({"backgroundImage": "url(" + src + ")", "backgroundRepeat": "no-repeat", "backgroundSize": "100% 100%" });
                },3000);
        }
        
        //create the iteration
        function dobvslide() {
            bvslide(images,numR);
            numR++;
            if(numR < max) {
                setTimeout(arguments.callee, settings.delay + 3000);
            }
            else {
                numR = 0;
                setTimeout(arguments.callee, settings.delay + 3000);
            }
        };
        //navigating through images when dot is clicked
        $("div #bv_dot_237").click(function(event) {
            var target = $(event.target);
            for (var i = 1; i <= max; i++) {
                if(target.is("#bv_dots_237" + i)) {
                    target.css({
                        "background": settings.dot_color, "padding": "10px","marginTop": "-2px", "color": settings.number_color
                    });
            
                    numR = i - 1;
                    break;
                }
            }
        });
        return this;
    });
}(jQuery));