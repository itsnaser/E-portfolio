$(document).ready(function () {
  function checkVisibility() {
    $('section').each(function () {
      var top = $(window).scrollTop();
      var windowHeight = $(window).height();
      var offset = $(this).offset().top;
      if (top + windowHeight - 100 > offset) {
        $(this).addClass('visible');
      }
    });
  }
  checkVisibility();
  $(window).on('scroll', checkVisibility);

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  });
});