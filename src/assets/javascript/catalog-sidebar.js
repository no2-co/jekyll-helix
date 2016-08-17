;(function($){
  var filtersToggle = $('.catalog-top-mobile__filters-toggle')
  var sidebar = $('.catalog-sidebar')

  filtersToggle.on('click', function() {
    sidebar.toggleClass('is-active')
  })
})(jQuery);
