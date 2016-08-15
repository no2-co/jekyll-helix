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

  // Make the search appear on hover
  var searchToggle = $('.desktop-menu__right-side')
  var searchDropdown = $('.desktop-search')

  var searchInput = $('.desktop-search__search-input')

  searchToggle.on('mouseover', function() {
    searchDropdown.addClass('is-active')
    searchInput.focus()
  })

  searchDropdown.on('mouseleave', function() {
    searchDropdown.removeClass('is-active')
    searchInput.blur()
  })



})(jQuery);
