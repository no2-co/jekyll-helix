// Make the footer accordion situation
(function($) {
  var toggle = $('.footer-column__title')

  toggle.on('click', function(){
    var that = $(this)
    var daddy = that.parents('.footer-column')
    var info = daddy.children('.footer-column__info')

    if ( daddy.hasClass('js-is-active') ){
      info.slideUp()
      daddy.removeClass('js-is-active')
    } else {
      info.slideDown()
      daddy.addClass('js-is-active')
    }

  })


})(jQuery);
