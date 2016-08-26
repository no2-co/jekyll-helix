(function($){
  var burger = $('.main-nav__burger')
  var menu = $('.site-header')
  var body = $('body')
  var overlay = $('.page-content__overlay')

  burger.on('click', function() {
    body.toggleClass('js-mobile-menu-active')
    body.removeClass('js-product-overlay-active')
  })

  overlay.on('click', function() {
    body.removeClass('js-mobile-menu-active')
    body.removeClass('js-product-overlay-active')
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

  // Toggle which category is opened
  var topCategories = $('.mobile-menu__top-categories a')

  topCategories.on('click', function() {
    var that = $(this)
    topCategories.removeClass('is-selected')
    that.addClass('is-selected')
  })

  // Let's try to work that second level navigation stuff
  var secondaryLevelFrom = $('.mobile-menu__second-level a')
  var secondaryLevelTarget = $('.mobile-menu__third-level')
  var secondaryReturn = $('.mobile-menu__secondary-return')

  secondaryLevelFrom.on('click', function() {
    var that = $(this)
    var targetString = that.attr('data-target')
    var targetDiv = $('.mobile-menu__third-level[data-from="' + targetString + '"]')

    secondaryLevelTarget.removeClass('is-active')
    targetDiv.addClass('is-active')
    mobileMenu.addClass('js-second-level-active')
  })

  secondaryReturn.on('click', function() {
    mobileMenu.removeClass('js-second-level-active')
  })

})(jQuery);
