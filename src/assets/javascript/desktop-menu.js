(function($) {
  // Make the dropdown appear on hover
  var blackBarItems = $('.desktop-menu__left-side a')
  var desktopDropdown = $('.desktop-dropdown')

  blackBarItems.on('mouseover', function() {
    desktopDropdown.addClass('is-active')
  })

  desktopDropdown.on('mouseleave', function() {
    desktopDropdown.removeClass('is-active')
  })

})(jQuery);
