;!function($) {
  var sidebar = $('.blog-featured-posts')
  var view = $(window)
  var offset = 150 // hacky measure
  var desktop = 1024

  function getWidth() {
    return view.outerWidth(true)
  }

  function makeSticky() {
    sidebar.stick_in_parent({
      offset_top : offset,
      recalc_every : 1
    })
  }

  function makeNotSticky() {
    sidebar.trigger("sticky_kit:detach")
  }

  // Make sticky at the beginning only is its desktop
  var startingWidth = getWidth()
  if (startingWidth >= desktop) makeSticky()

  // Now let's watch for window changes to either stick or unstick
  view.on('resize', function() {
    var currentWidth = getWidth()
    if (currentWidth >= desktop) {
      makeSticky()
    } else {
      makeNotSticky()
    }

  })


}(jQuery);
