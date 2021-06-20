$(document).ready(function () {

  // Mobile Menu
  $('.burger').on("click", function () {
    $('.menu.mob').slideToggle(150);
    $('.menu.mob').toggleClass('opened');
    $('body').toggleClass('fix');
    $('.burger').toggleClass('opened');

    $('.header .logo img').toggleClass('active');
    $('.header').toggleClass('active');
  })

  // Cart
  $('.toCart').on("click", function () {
    $('.popupCart').fadeIn(250);
    $('.popupCart').addClass('opened');
    $('body').toggleClass('fix');
  })
  $('.back').on("click", function () {
    $('.popupCart').fadeOut(250);
    $('body').toggleClass('fix');
    setTimeout(function () {
      $('.popupCart').removeClass('opened');
    }, 250);
  })
})