$(".responsivebutton").on('click', function() {
    $(".header-menu--ul").toggle(function(){});
    $(".header-menu").addClass("all-body");
});

$(".responsivebtn").on('click', function() {
    $(".header-menu--ul").toggle(function(){});
    $(".header-menu").removeClass("all-body");
    $(".responsivebutton").show();
});

$(function() {
    $('.comofazemos-feature').matchHeight();
});

var mySwiper = new Swiper('#oquefazemos', {
    speed: 400,
    spaceBetween: 100,
    centeredSlides: true,
    nextButton: '.svg-right',
    prevButton: '.svg-left',
    onSlideChangeStart: function (swiper) {       
            switch(swiper.activeIndex) {
                case 0: {
                    $('.swiper-pagination-switch').addClass('circle-active')
                    $('.swiper-pagination-switch-2').removeClass('circle-active');
                    $('.swiper-pagination-switch-3').removeClass('circle-active');
                    $('.feature-1').addClass('feature-active');
                    $('.feature-2').removeClass('feature-active');
                    $('.feature-3').removeClass('feature-active');
                    break;
                }

                case 1: {
                    $('.swiper-pagination-switch-2').addClass('circle-active')
                    $('.swiper-pagination-switch').removeClass('circle-active');
                    $('.swiper-pagination-switch-3').removeClass('circle-active');
                    $('.feature-2').addClass('feature-active');
                    $('.feature-1').removeClass('feature-active');
                    $('.feature-3').removeClass('feature-active');
                    break;
                }

                case 2: {
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
    $('.swiper-pagination-switch').click(function(){
        mySwiper.slideTo(0);
        $(this).addClass('circle-active')
        $('.swiper-pagination-switch-2').removeClass('circle-active');
        $('.swiper-pagination-switch-3').removeClass('circle-active');
    })

    $('.swiper-pagination-switch-2').click(function(){
        mySwiper.slideTo(1);
        $(this).addClass('circle-active')
        $('.swiper-pagination-switch').removeClass('circle-active');
        $('.swiper-pagination-switch-3').removeClass('circle-active');
    })

    $('.swiper-pagination-switch-3').click(function(){
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
    centeredSlides: true });
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
  
  if(width > 1360) {
      $('body section.paplocalizacao .paplocalizacao-title').css('padding-left', $('.positionfeature').offset().left - 50);

      $('body section.paplocalizacao .bg-mapa-2.smbg').css('padding-right', $('.positionfeature2').offset().left)
  }