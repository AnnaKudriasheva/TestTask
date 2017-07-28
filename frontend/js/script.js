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
    centerPadding: '40px',
    variableWidth: true,
    slidesToShow: 4,
    nextArrow: '<span class="slider-catalog-arrow-right"><span></span></span>',
    prevArrow: '<span class="slider-catalog-arrow-left"><span></span></span>'
  });
});
