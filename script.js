$(document).ready(function() {
  $('.tab').click(function() {
    $('.tab').removeClass('highlight');
    $(this).addClass('highlight');
    switch( true ){
     case $(this).is('.about'):
       $('.block').load('about.html');
       break;
     case $(this).is('.instagram'):
        $('.block').load('instagram.html');
        break;
      case $(this).is('.orders'):
        $('.block').load('orders.html');
        break;
     case $(this).is('.twitter'):
        $('.block').load('twitter.html');
        break;
      }
  });

  $('#title').click(function() {
    $('.block').load('about.html'),
    $('.tab').removeClass('highlight');
    $('.about').addClass('highlight')
  });

  $('.pic').mouseenter(function() {
    $('.pic').removeClass('emphasize');
    $('.pic').addClass('emphasize')
  });

  $('.moar').click(function() {

    feed.next();
    if(!feed.hasNext()){
      $('.moar').hide();
    }
    });
});
