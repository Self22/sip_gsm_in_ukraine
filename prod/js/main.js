$(document).ready(function () {
    !function () {
        var e = !0;
        $(".channel-acco__trigger-link").on("click", function (n) {
            n.preventDefault();
            var t = $(this), s = (t.closest(".channels__list"), t.closest(".channel__item")), i = s.find(".channel-acco__descr"), c = 500;
            e && (e = !1, s.hasClass("active") ? (s.removeClass("active"), i.slideUp(function () {
                e = !0
            })) : (s.addClass("active").siblings().removeClass("active").find(".channel-acco__descr").slideUp(c), i.slideDown(c, function () {
                e = !0
            })))
        })
    }()
}), $(document).ready(function () {
    var e = !0;
    $(".numbers__tab-link").on("click", function (n) {
        n.preventDefault();
        var t = $(this), s = t.closest(".numbers__tab"), i = t.closest(".tabs"), c = i.find(".numbers__content-item"), a = s.index(), l = c.eq(a), o = c.filter(".numbers__content-item-active");
        e && (e = !1, s.addClass("numbers__tab-active").siblings().removeClass("numbers__tab-active"), o.fadeOut(500, function () {
            l.fadeIn(500, function () {
                $(this).addClass("numbers__content-item-active").siblings().removeClass("numbers__content-item-active"), e = !0
            })
        }))
    })
});
//# sourceMappingURL=main.js.map