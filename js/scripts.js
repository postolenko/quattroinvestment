$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;

    $("body").css({"padding-top": $(".header-bg").height() + "px"});

         if ( $(window).scrollTop() >= $(".header-bg").height() ) {

            $(".header-bg").css({"background": "rgba(255, 255, 255, .9)",
                                 "border-bottom": "1px solid #dde0e1"
                             });
            $(".head-top").css({"padding": "10px 0"});
            $(".nav-link").css({padding: "5px 23px"});
            
        } else {

            $(".header-bg").css({"background": "rgba(255, 255, 255, .9)",
                                 "border-bottom": "1px solid transparent"
                             });
            $(".head-top").css({"padding": "35px 0"});
            $(".nav-link").css({padding: "18px 23px"});

        }

    getScrollToTopBtn();


    $(document).scroll(function() {

        if ( $(window).scrollTop() >= $(".header-bg").height() ) {

            $(".header-bg").css({"background": "rgba(255, 255, 255, .9)",
                                 "border-bottom": "1px solid #dde0e1"
                             });
            $(".head-top").css({"padding": "10px 0"});
            $(".nav-link").css({padding: "5px 23px"});
            
        } else {

            $(".header-bg").css({"background": "rgba(255, 255, 255, .9)",
                                 "border-bottom": "1px solid transparent"
                             });
            $(".head-top").css({"padding": "35px 0"});
            $(".nav-link").css({padding: "18px 23px"});

        }

        getScrollToTopBtn();

    });


    // -----

        $("#down-arrow").click(function() {

            $('body,html').animate({

                scrollTop: $(".map-box").offset().top

            }, 300);

            return false;

        });

    // ------

    // Navigation scroll

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top - 25
                    }, 900);
                    return false;
                }
            }
        });
    });


    // Show or hide ".scroll-to-top" button


    $(".scroll-to-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


    function getScrollToTopBtn() {

        if ($(window).scrollTop() > $(".header-bg").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }

    


});