$(document).ready(function(){
  $('.tab').click(function(){
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

  $('#title').click(function(){
    $('.block').load('about.html'),
    $('.tab').removeClass('highlight');
    $('.about').addClass('highlight')
  });

  $('.moar').hover(function(){
    $(this).toggleClass('emphasize');
  })

  $('.option').hover(function(){
    $(this).toggleClass('emphasize');
  })

  $('#instafeed').on('mouseenter', '.pic', function(){
    $('.pic').not(this).fadeTo(100, .7);
    $(this).fadeTo(0, 1);
    current = this;
  });

  $('.seperator').on('mouseleave', this, function(){
    $('.pic').fadeTo(100, 1);
  });

  $('.menu').on('mouseleave', this, function(){
    $('.pic').fadeTo(100, 1);
  });

  $('.block').on('click', '.moar', function(){
    feed.next();
    $(this).fadeOut(250);
    $('#instafeed').after(this);
    $(this).fadeIn(10);
    if(!feed.hasNext()){
      $(this).fadeOut(250);
      $(this).hide();
    }
  });

  $('.most-liked').click(function(){
    $('#instafeed').replaceWith('<div id="instafeed">')
    var feed = new Instafeed({
     get: 'user',
      limit: 10,
      resolution: 'standard_resolution',
      sortBy: 'most-liked',
      userId: '2174415839',
      clientId: '5ecff2e1873b4d519763b8f3adf4bc70',
     template: '<a href="{{link}}"><img class="pic" src="{{image}}"style="width: 280px; height: 280px; border-radius: 50px; padding-top: 10px; padding-left: 10px;"/></a>'
    });
  feed.run();
  })

  $('.most-recent').click(function(){
    $('#instafeed').replaceWith('<div id="instafeed">')
    var feed = new Instafeed({
     get: 'user',
      limit: 10,
      resolution: 'standard_resolution',
      userId: '2174415839',
      clientId: '5ecff2e1873b4d519763b8f3adf4bc70',
     template: '<a href="{{link}}"><img class="pic" src="{{image}}"style="width: 280px; height: 280px; border-radius: 50px; padding-top: 10px; padding-left: 10px;"/></a>'
    });
  feed.run();
  })
});
