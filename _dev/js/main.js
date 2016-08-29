$(document).ready(function() {
    //аккордеон
    (function(){

        var flag = true;

        $('.channel-acco__trigger-link').on('click', function (e){
            e.preventDefault();

            var
                $this = $(this),
                container = $this.closest('.channels__list'),
                item = $this.closest('.channel__item'),
                currentContent =item.find('.channel-acco__descr'),
                duration = 500;

            if (flag) {
                flag = false;


            if(!item.hasClass('active')) {
                item.addClass('active')
                    .siblings()
                    .removeClass('active')
                    .find('.channel-acco__descr')
                    .slideUp(duration);

                    currentContent.slideDown(duration, function () {
                        flag = true
                    });
            }
            else{
                item.removeClass('active');
                currentContent.slideUp(function() {
                    flag = true
                });
            }

        }
        })
    })();
});