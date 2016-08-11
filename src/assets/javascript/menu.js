(function($){
  var burger = $('.main-nav__burger')
  var menu = $('.main-nav')
  var body = $('body')

  view = $(window)

  view.scroll(function(){
    var menuHeight = menu.outerHeight()
    var scroll = view.scrollTop() - menuHeight
    if (scroll > 0) {
      menu.addClass('js-fixed')
      body.css('padding-top', menuHeight)
    } else {
      menu.removeClass('js-fixed')
      body.css('padding-top', '0')
    }
  })


})(jQuery);
