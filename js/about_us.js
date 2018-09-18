$(function() {
    var d = $("#slider-btn li");
    var j = $("#slider-back li");
    var a = $(".banner-text");
    var h = $(".slider-text");
    var e = $(".banner-txt a");
    var i = 0;
    d.each(function(l) {
        $(this).mouseover(function() {
            f(l)
        });
        $(this).data("index")
    });
    function f(l) {
        i = l;
        d.eq(l).addClass("active").siblings().removeClass();
        var m = a.eq(l);
        var n = m.children();
        m.siblings(".banner-text").stop(true).fadeOut(100);
        m.show();
        n.each(function() {
            var o = $(this);
            o.css({
                display: "block",
                opacity: 0,
                top: o.data("start_top") || 0,
                left: o.data("start_left") || 0
            });
            o.stop(true).delay(400).animate({
                display: "none",
                opacity: 1,
                top: o.data("to_top"),
                left: o.data("to_left")
            },
            1200);
            if (o.data("class") !== undefined) {
                o.removeClass(o.data("class"));
                setTimeout(function() {
                    o.addClass(o.data("class"))
                },
                0)
            }
        });
        j.eq(l).siblings().stop().animate({
            opacity: 0
        },
        600);
        j.eq(l).stop().animate({
            opacity: 1
        },
        600)
    }
    function g() {
        i++;
        if (i == d.length) {
            i = 0
        }
        f(i)
    }
    var c = null;
    var b = $("#slider-btn");
    var k = function() {
        var l = b.find(".active");
        c = setTimeout(function() {
            g();
            k()
        },
        l.data("delay") || 8000)
    };
    k();
    d.hover(function() {
        clearInterval(c)
    },
    function() {
        k()
    });
    f(0)
});