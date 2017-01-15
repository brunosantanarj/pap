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