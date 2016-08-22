!function($) {
  var figures = $('.sandbox-figure, .sandbox-figure--white')


  figures.each(function() {
    var that = $(this)
    // Append a div with a class for the hover thing and nice image
    that.append("<div class='sandbox-figure__js-poster'></div>")

    // Adds a pretty background image that can be controlled with CSS
    var image = that.children('img').attr('src')
    var poster = that.children('.sandbox-figure__js-poster')

    var url = 'url("' + image + '")'

    poster.css('background-image', url)
  })
}(jQuery);
