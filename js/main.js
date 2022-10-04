$(function () {
  $(".bicycle__slider, .slider__items").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$('a[href^="#"').on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(href).offset().top,
  });
  return false;
});
