;(function($){
  var filtersToggle = $('.catalog-top-mobile__filters-toggle')
  var sidebar = $('.catalog-sidebar')
  var body = $('body')

  filtersToggle.on('click', function() {
    sidebar.toggleClass('is-active')
    body.toggleClass('js-catalog-sidebar-active')
  })

  // Make accordion stuff
  var toggle = $('.catalog-sidebar-filter__title')
  toggle.on('click', function() {
    var that = $(this)
    var daddy = that.parents('.catalog-sidebar-filter')
    var info = daddy.children('.catalog-sidebar-filter__options')

    if ( daddy.hasClass('is-active') ){
      info.slideUp()
      daddy.removeClass('is-active')
      $(document.body).trigger("sticky_kit:recalc")
    } else {
      info.slideDown()
      daddy.addClass('is-active')
      $(document.body).trigger("sticky_kit:recalc")
    }


  })
})(jQuery);
