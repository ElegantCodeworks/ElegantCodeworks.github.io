(function ($) {
  $(document).ready(function() {
    
    $.backstretch(Drupal.settings.elegant_bootstrap.logoSrc);
    
    // Alex accordion
    var dd = $('dl#accordion-alex dd');
    var dt = $('dl#accordion-alex dt');
    
    dd.filter(':nth-child(n+4)').hide();
    dt.first().css('background', 'rgb(130, 87, 255)').css('color', 'white');
    
    $('dl#accordion-alex').on('mouseenter', 'dt', function () {
      $(this)
        .css('background', 'rgb(130, 87, 255)').css('color', 'white')
        .siblings('dt').css('background', 'white').css('color', 'black')
        $(this).next()
          .slideDown(200)
          .siblings('dd')
            .slideUp(200);
    });
    
    // Joseph accordion
    var dd = $('dl#accordion-joseph dd');
    var dt = $('dl#accordion-joseph dt');
    
    dd.filter(':nth-child(n+4)').hide();
    dt.first().css('background', 'rgb(130, 87, 255)').css('color', 'white');
    
    $('dl#accordion-joseph').on('mouseenter', 'dt', function () {
      $(this)
        .css('background', 'rgb(130, 87, 255)').css('color', 'white')
        .siblings('dt').css('background', 'white').css('color', 'black')
        $(this).next()
          .slideDown(200)
          .siblings('dd')
            .slideUp(200);
    });
    
  });
  
})(jQuery);