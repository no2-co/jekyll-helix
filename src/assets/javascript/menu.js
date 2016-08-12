(function($){
  var burger = $('.main-nav__burger')
  var menu = $('.site-header')
  var body = $('body')

  view = $(window)

  burger.on('click', function() {
    body.toggleClass('js-mobile-menu-active')
  })

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

  // Trigger search when clicking the loupe

  var searchTrigger = $('.mobile-menu__search img')
  var mobileMenu = $('.mobile-menu')
  var searchInput = $('.mobile-menu__search-box input')

  searchTrigger.on('click', function() {
    mobileMenu.toggleClass('js-search-mode')
    if (mobileMenu.hasClass('js-search-mode')) {
      searchInput.focus()
    }
  })

})(jQuery);
