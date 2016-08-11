// Image treatment for the thumbnails on the collections page
// Allows for image scaling without distorsion
(function($){
  var singleCollection = $('.single-collection')
  var images = $('.single-collection__image')


  images.each(function(){
    var that = $(this)
    var jsPoster = that.children('.js-pretty-image')
    var img = that.children('img')
    var background = img.attr('src')
    var backImg = 'url("' + background + '")'

    jsPoster.css('background-image', backImg)
  })

  var matchHeight = $('.js-match-height')
  matchHeight.matchHeight()


})(jQuery);
