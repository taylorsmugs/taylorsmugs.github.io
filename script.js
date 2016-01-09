$.fx.speeds.slow = 1500; //slow is 1.5 seconds

$(document).ready(function() {
  $('.tab').click(function() {
    $('.tab').removeClass('highlight');
    $(this).addClass('highlight');
    switch( true ){
     case $(this).is('.about'):
       $('.block').load('about.html');
       break;
     case $(this).is('#title'):
       $('.block').load('about.html');
       break;
     case $(this).is('.instagram'):
        $('.block').load('instagram.html');
        break;
      case $(this).is('.orders'):
        $('.block').load('orders.html');
        break;
     case $(this).is('about'):
        $('.block').load('about.html');
        break;
      }
  });
});