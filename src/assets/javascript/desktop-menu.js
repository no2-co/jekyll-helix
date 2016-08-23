(function($) {
  // Make the dropdown appear on hover
  var blackBarItems = $('.desktop-menu__left-side a')
  var desktopDropdown = $('.desktop-dropdown')
  // Make the search appear on hover
  var searchToggle = $('.desktop-menu__right-side')
  var searchDropdown = $('.desktop-search')

  var searchInput = $('.desktop-search__search-input')


  blackBarItems.on('mouseover', function() {
    desktopDropdown.addClass('is-active')
    searchDropdown.removeClass('is-active')
  })

  desktopDropdown.on('mouseleave', function() {
    desktopDropdown.removeClass('is-active')
  })

  // Make the search appear on hover
  searchToggle.on('mouseover', function() {
    desktopDropdown.removeClass('is-active')
    searchDropdown.addClass('is-active')
    searchInput.focus()
  })

  searchDropdown.on('mouseleave', function() {
    searchDropdown.removeClass('is-active')
    searchInput.blur()
  })



})(jQuery);
