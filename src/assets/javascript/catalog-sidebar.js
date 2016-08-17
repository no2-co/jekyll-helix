;(function($){
  var filtersToggle = $('.catalog-top-mobile__filters-toggle')
  var sidebar = $('.catalog-sidebar')
  var body = $('body')

  filtersToggle.on('click', function() {
    sidebar.toggleClass('is-active')
    body.toggleClass('js-catalog-sidebar-active')
  })
})(jQuery);
