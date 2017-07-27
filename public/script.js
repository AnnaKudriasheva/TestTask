$(document).ready(function () {
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        nextArrow: '<span class="slider-arrow-right"><span></span></span>',
        prevArrow: '<span class="slider-arrow-left"><span></span></span>'
    });

    $('#catalog-slider').slick({
    centerMode: true,
    centerPadding: '5px',
    variableWidth: true,
    slidesToShow: 4
  });
});
