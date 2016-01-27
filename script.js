var current = null;

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
    $('.pic').not(this).fadeTo(100, .7);
    $(this).fadeTo(0, 1);
    current = this;
  });

  $('.seperator').on('mouseleave', this, function() {
    $('.pic').fadeTo(100, 1);
  });

  $('.block').on('click', '.moar', function() {
    $(this).fadeOut(250);
    feed.next();
    $('#instafeed').after(this);
    if(!feed.hasNext()){
      $(this).hide();
    }
    $(this).fadeIn('fast');
    $('.pic').not(current).fadeTo(0, .7);
    });
});
