;!function($) {

  var body = $('body')
  var overlay = $('.product-overlay')
  var background = $('.page-content__overlay')
  var select = $('.product-overlay__select')
  var deskOptions = $('.product-overlay__desk-options h2')
  var section = $('.product-overlay__section')
  var measureImage = $('.product-overlay__image img')
  var sizesRadios = $('.product-overlay__sizes .option-radio')
  var measureRadios = $('.product-overlay__sizes--measures .option-radio')
  var triggerButton = $('.product-details__section .cta')
  var closeButton = $('.product-overlay .close-button')

  triggerButton.on('click', function() {
    body.addClass('js-product-overlay-active')
    overlay.addClass('is-active')
    $("html, body").animate({ scrollTop: 0 }, "slow")
  })

  function removeOverlay() {
    body.removeClass('js-product-overlay-active')
    overlay.removeClass('is-active')
  }

  background.on('click', removeOverlay)

  closeButton.on('click', removeOverlay)



}(jQuery);
