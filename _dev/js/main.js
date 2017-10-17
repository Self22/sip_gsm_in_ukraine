/////////////// mask
$(document).ready(function () {
    $('.order__tel-input').mask('+38 (000) 000-00-00');
});

//// accordeon channels

$(document).ready(function () {

    //���������
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

    $(document).ready(function () {
        $('.bxslider').bxSlider();
    });

});

////////////////// validation order__form

(function () {

    var app = {

        initialize: function () {
            this.setUpListeners();
        },

        setUpListeners: function () {
            $('#popupform-order').on('submit', app.submitForm);
        },

        submitForm: function (e) {
            e.preventDefault();

            var form = $(this),
                submitBtn = form.find('button[type="submit"]');

            if (app.validateForm(form) === false) return false;

            submitBtn.attr('disabled', 'disabled');

            console.log('Form__post!');
            var str = form.serialize();

            $.ajax({
                url: '../contact-form/contact_process.php',
                type: 'POST',
                data: str
            })
                .done(function (msg) {
                    if (msg === "OK") {
                        var result = "<div = 'bg-success'>Спасибо за заявку! Мы вам перезвоним!</div>"
                        form.html(result);
                    } else {
                        form.html(msg);
                    }
                })
                .always(function () {
                    submitBtn.removeAttr('disabled');
                });

        },

        validateForm: function (form) {
            var inputs = form.find('input'),
                valid = true;


            $.each(inputs, function (index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input.parents('.form-group');


                if (val.length === 0) {
                    formGroup.addClass('has-warning').removeClass('has-success');
                    input.addClass('form-control-warning').removeClass('form-control-success');
                    valid = false;
                } else {
                    formGroup.addClass('has-success').removeClass('has-warning');
                    input.addClass('form-control-success').removeClass('form-control-warning');
                }
            });

            return valid;
        },


    }

    app.initialize();

}());

/////////////////////// slow popup


$('.channels__order').on('click', function (e) {
    e.preventDefault();
    $('.overlay').fadeIn(800);
    $('.popup__form-order').fadeIn(800);
});

$('.order__l').on('click', function (e) {
    e.preventDefault();
    $('.overlay').fadeIn(800);
    $('.popup__form-order').fadeIn(800);
});


$('.overlay').on('click', function (e) {
    $('.overlay').fadeOut(800);
    $('.popup__form-order').fadeOut(800);

})

$('.close__popup').on('click', function (e) {
    $('.overlay').fadeOut(800);
    $('.popup__form-order').fadeOut(800);


})

////////////////// validation order__form

(function () {

    var app = {

        initialize: function () {
            this.setUpListeners();
        },

        setUpListeners: function () {
            $('#popupform-order').on('submit', app.submitForm);
        },

        submitForm: function (e) {
            e.preventDefault();

            var form = $(this),
                submitBtn = form.find('button[type="submit"]');

            if (app.validateForm(form) === false) return false;

            submitBtn.attr('disabled', 'disabled');

            console.log('Form__post!');
            var str = form.serialize();

            $.ajax({
                url: '../contact-form/contact_process.php',
                type: 'POST',
                data: str
            })
                .done(function (msg) {
                    if (msg === "OK") {
                        var result = "<div = 'bg-success'>Спасибо за заявку! Мы вам перезвоним!</div>"
                        form.html(result);
                    } else {
                        form.html(msg);
                    }
                })
                .always(function () {
                    submitBtn.removeAttr('disabled');
                });

        },

        validateForm: function (form) {
            var inputs = form.find('input'),
                valid = true;


            $.each(inputs, function (index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input.parents('.form-group');


                if (val.length === 0) {
                    formGroup.addClass('has-warning').removeClass('has-success');
                    input.addClass('form-control-warning').removeClass('form-control-success');
                    valid = false;
                } else {
                    formGroup.addClass('has-success').removeClass('has-warning');
                    input.addClass('form-control-success').removeClass('form-control-warning');
                }
            });

            return valid;
        },


    }

    app.initialize();

}());

