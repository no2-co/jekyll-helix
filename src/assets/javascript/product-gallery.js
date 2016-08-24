;!function($) {
  var thumbs = $('.gallery-thumbnails__single')
  var slider = $('.slider-main')

  slider.slick({
    arrows : true,
    dots : true,
    mobileFirst : true,
    fade : true,
    responsive : [
      {
        breakpoint: 1024,
        settings : {
          arrows : false,
          dots : false
        }
      }
    ]
  })

  thumbs.on('click', function() {
    var that = $(this)
    var slide = that.attr('data-slide')
    slider.slick('slickGoTo', slide)
  })

}(jQuery);
