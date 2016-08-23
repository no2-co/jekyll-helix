;!function($) {
  var thumbs = $('.product-gallery .gallery-thumbnails__single')
  var slider = $('.product-gallery .slider-main')

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
  });

}(jQuery);
