$(document).ready(function () {

    //аккордеон
    (function () {

        var flag = true;

        $('.channel-acco__trigger-link').on('click', function (e) {
            e.preventDefault();

            var
                $this = $(this),
                container = $this.closest('.channels__list'),
                item = $this.closest('.channel__item'),
                currentContent = item.find('.channel-acco__descr'),
                duration = 500;

            if (flag) {
                flag = false;


                if (!item.hasClass('active')) {
                    item.addClass('active')
                        .siblings()
                        .removeClass('active')
                        .find('.channel-acco__descr')
                        .slideUp(duration);

                    currentContent.slideDown(duration, function () {
                        flag = true
                    });
                }
                else {
                    item.removeClass('active');
                    currentContent.slideUp(function () {
                        flag = true
                    });
                }

            }
        })
    })();


});

$(document).ready(function() {

    var flag = true;

    $('.numbers__tab-link').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            item = $this.closest('.numbers__tab'),
            container = $this.closest('.tabs'),
            content = container.find('.numbers__content-item'),
            ndx = item.index(),
            reqItem = content.eq(ndx),
            activeItem = content.filter('.numbers__content-item-active');

        if (flag) {
            flag = false;


            item.addClass('numbers__tab-active')
                .siblings()
                .removeClass('numbers__tab-active');

            activeItem.fadeOut(500, function () {
                reqItem.fadeIn(500, function () {
                    $(this).addClass('numbers__content-item-active')
                        .siblings()
                        .removeClass('numbers__content-item-active');
                    flag = true
                });
            });

        }


    })

});