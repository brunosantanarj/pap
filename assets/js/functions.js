$(".responsivebutton").on('click', function() {
    $(".header-menu--ul").toggle(function() {});
    $(".header-menu").addClass("all-body");
});

$(".responsivebtn").on('click', function() {
    $(".header-menu--ul").toggle(function() {});
    $(".header-menu").removeClass("all-body");
    $(".responsivebutton").show();
});

$(function() {
    $('.comofazemos-feature').matchHeight();
});

var mailgunURL;

mailgunURL = window.location.protocol + "//" + window.location.hostname + '/ajax/mailgun.php';

$('#mailgun').on('submit', function(e) {
    e.preventDefault();

    $.ajax({
        type: 'POST',
        cache: false,
        url: mailgunURL,
        data: $(this).serialize(),
        success: function(data) {
            var res = JSON.parse(data);
            if (res.status == 'success') {
                $('.btn-submit').parent().append('<div class="alert alert-success" id="ajaxSuccess" style="margin-top: 80px;">' + res.message + '</div>');
            } else if (res.status == 'warning') {
                $('.btn-submit').parent().append('<div class="alert alert-warning" id="ajaxWarning" style="margin-top: 80px;">' + res.message + '</div>');
            } else if (res.status == 'error') {
                $('.btn-submit').parent().append('<div class="alert alert-danger" id="ajaxError" style="margin-top: 80px;">' + res.message + '</div>');
            }
        },
        beforeSend: function() {
            $('.btn-submit').html('Enviando...');
            if ($('#ajaxSuccess').length > 0) {
                $('#ajaxSuccess').remove();
            } else if ($('#ajaxWarning').length > 0) {
                $('#ajaxWarning').remove();
            } else if ($('#ajaxError').length > 0) {
                $('#ajaxError').remove();
            }
        },
        complete: function() {
            $('.btn-submit').html('Enviar');
        }
    });
});

var mySwiper = new Swiper('#oquefazemos', {
    speed: 400,
    spaceBetween: 100,
    centeredSlides: true,
    nextButton: '.svg-right',
    prevButton: '.svg-left',
    onSlideChangeStart: function(swiper) {
        switch (swiper.activeIndex) {
            case 0:
                {
                    $('.swiper-pagination-switch').addClass('circle-active')
                    $('.swiper-pagination-switch-2').removeClass('circle-active');
                    $('.swiper-pagination-switch-3').removeClass('circle-active');
                    $('.feature-1').addClass('feature-active');
                    $('.feature-2').removeClass('feature-active');
                    $('.feature-3').removeClass('feature-active');
                    break;
                }

            case 1:
                {
                    $('.swiper-pagination-switch-2').addClass('circle-active')
                    $('.swiper-pagination-switch').removeClass('circle-active');
                    $('.swiper-pagination-switch-3').removeClass('circle-active');
                    $('.feature-2').addClass('feature-active');
                    $('.feature-1').removeClass('feature-active');
                    $('.feature-3').removeClass('feature-active');
                    break;
                }

            case 2:
                {
                    $('.swiper-pagination-switch-3').addClass('circle-active')
                    $('.swiper-pagination-switch').removeClass('circle-active');
                    $('.swiper-pagination-switch-2').removeClass('circle-active');
                    $('.feature-3').addClass('feature-active');
                    $('.feature-1').removeClass('feature-active');
                    $('.feature-2').removeClass('feature-active');
                    break;
                }
        }
    }
});

//navigation
$('.swiper-pagination-switch').click(function() {
    mySwiper.slideTo(0);
    $(this).addClass('circle-active')
    $('.swiper-pagination-switch-2').removeClass('circle-active');
    $('.swiper-pagination-switch-3').removeClass('circle-active');
})

$('.swiper-pagination-switch-2').click(function() {
    mySwiper.slideTo(1);
    $(this).addClass('circle-active')
    $('.swiper-pagination-switch').removeClass('circle-active');
    $('.swiper-pagination-switch-3').removeClass('circle-active');
})

$('.swiper-pagination-switch-3').click(function() {
    mySwiper.slideTo(2);
    $(this).addClass('circle-active')
    $('.swiper-pagination-switch-1').removeClass('circle-active');
    $('.swiper-pagination-switch-2').removeClass('circle-active');
})


var width = $(window).width();
if (width < 767) {
    var swiper2 = new Swiper('#quematendemos', {
        speed: 400,
        spaceBetween: 0,
        centeredSlides: true
    });

    $('.header-menu ul li').on('click', function() {
        $(".header-menu--ul").toggle(function() {});
        $(".header-menu").removeClass("all-body");
    })
} else {
    $('#quematendemos').removeClass('swiper-container');
    $('#quematendemos').removeClass('swiper-container-horizontal');
    $('#quematendemos .swiper-wrapper').removeClass('swiper-wrapper');
    $('#quematendemos .swiper-slide').removeClass('swiper-slide');
}

if (width > 992) {
    $('.bg-mapa-2, .bg-mapa').matchHeight();
    $('body section.paplocalizacao .paplocalizacao-title').css('padding-left', $('.positionfeature').offset().left - $('body section.paplocalizacao .paplocalizacao-title'));
}

if (width > 1360) {
    $('body section.paplocalizacao .paplocalizacao-title').css('padding-left', $('.positionfeature').offset().left - 50);
}

var estadosswiper = new Swiper('#estados', {
    speed: 400,
    centeredSlides: true,
    onSlideChangeStart: function(swiper) {
        switch (swiper.activeIndex) {
            case 0:
                {
                    $('.estado-mg').removeClass('active')
                    $('.estado-pr').removeClass('active');
                    $('.estado-rj').addClass('active');
                    $('.estado-sp').removeClass('active');
                    break;
                }

            case 1:
                {
                    $('.estado-mg').removeClass('active')
                    $('.estado-pr').removeClass('active');
                    $('.estado-rj').removeClass('active');
                    $('.estado-sp').addClass('active');
                    break;
                }

            case 2:
                {
                    $('.estado-mg').addClass('active')
                    $('.estado-pr').removeClass('active');
                    $('.estado-rj').removeClass('active');
                    $('.estado-sp').removeClass('active');
                    break;
                }

            case 3:
                {
                    $('.estado-mg').removeClass('active')
                    $('.estado-pr').addClass('active');
                    $('.estado-rj').removeClass('active');
                    $('.estado-sp').removeClass('active');
                    break;
                }
        }
    }
});

$('.estado-rj').click(function() {
    estadosswiper.slideTo(0);
    $(this).addClass('circle-active')
    $('.estado-mg').removeClass('active')
    $('.estado-pr').removeClass('active');
    $('.estado-sp').removeClass('active');
})

$('.estado-sp').click(function() {
    estadosswiper.slideTo(1);
    $(this).addClass('circle-active')
    $('.estado-mg').removeClass('active')
    $('.estado-pr').removeClass('active');
    $('.estado-rj').removeClass('active');
})

$('.estado-mg').click(function() {
    estadosswiper.slideTo(2);
    $(this).addClass('circle-active')
    $('.estado-sp').removeClass('active')
    $('.estado-pr').removeClass('active');
    $('.estado-rj').removeClass('active');
})

$('.estado-pr').click(function() {
    estadosswiper.slideTo(3);
    $(this).addClass('circle-active')
    $('.estado-mg').removeClass('active')
    $('.estado-rj').removeClass('active');
    $('.estado-sp').removeClass('active');
})

var clientesswiper = new Swiper('#clientes', {
    speed: 400,
    pagination: '.clientes-pagination'
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("header-fixed");
    } else {
        $('header').removeClass("header-fixed");
    }
});

$(document).ready(function() {
    var hash = window.location.hash;

    if (hash != '') {
        $('.header-menu--ul li').each(function(key, value) {
            var $element = $(value);
            var $aAttr = $element.find('a');

            if ($aAttr.hasClass('active')) {
                $aAttr.removeClass('active');
            }

            if ($aAttr.attr('href') == hash) {
                $aAttr.addClass('active');
            }
        });
    }

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('.header-menu--ul li').each(function(key, value) {
            var $element = $(value);
            var $aAttr = $element.find('a');

            if ($aAttr.hasClass('active')) {
                $aAttr.removeClass('active');
            }
        });

        if (target != '#home') {
            $(this).addClass('active');
        }

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('.seta').position().top && $(this).scrollTop() <= $('.oquefazemos').position().top) {
        $('.elements-to-show').each(function(index) {
            $(this).delay(400 * index).animate({
                'opacity': '1'
            }, 600);
        });
    }
});