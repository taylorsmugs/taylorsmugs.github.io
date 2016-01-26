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

  $('#instafeed').on('mouseenter', '.pic', function() {
    $('.pic').fadeTo(0, .7);
    $(this).fadeTo(0, 1);
  });

  $('#instafeed').on('mouseleave', '.pic', function() {
    $('.pic').fadeTo(0, 1);
  });

  $('.block').on('click', '.moar', function() {
    $(this).fadeOut('medium');
    $(this).hide();
    if(feed.hasNext()){
      feed.next();
      $('#instafeed').after('<div class="moar">More</div>');
    }
    });
});
