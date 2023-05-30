'use strict';

/* loading image */
$(window).on('load', function(){
  $('.loading-image').fadeOut(300);
}); 

var wowJS = new WOW().init(); 

//wowrap
var wowrap = $('.wowrap');
$(wowrap).each(function () {
  $(this)
    .find('.wow')
    .each(function (index) {
      var eq = index / 8 + 's';
      $(this).attr('data-wow-delay', eq);
    });
  $(this)
    .find('.animated')
    .each(function (index) {
      var eq = index * 250;
      $(this).attr('data-id', 'delay-' + eq);
    });
});

//aos
AOS.init({
  duration: 1200,
  once: true,
});    