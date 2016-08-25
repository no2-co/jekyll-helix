;!function($) {

  var body = $('body')
  var overlay = $('.product-overlay')
  var background = $('.page-content__overlay')
  var select = $('.product-overlay__select')
  var options = $('.product-overlay__select option')
  var deskOptions = $('.product-overlay__desk-options h2')
  var sections = $('.product-overlay__section')
  var measureImage = $('.product-overlay__image img')
  var sizesRadios = $('.product-overlay__sizes .option-radio')
  var measureRadios = $('.product-measurements__sizes--measures .option-radio')
  var measureTables = $('.product-measurements__more-info--sizes')
  var triggerButton = $('.product-details__section .cta')
  var closeButton = $('.product-overlay .close-button')

  // Function to get the items we need to trigger so we can do JS stuff to them
  function getTarget(selector, target, dataTarget) {
    var dataTarget = dataTarget || 'data-targets'

    return selector.filter(function() {
      return $(this).attr(dataTarget) === target
    })
  }

  // Toggle the modal
  triggerButton.on('click', function() {
    body.addClass('js-product-overlay-active')
    $("html, body").animate({ scrollTop: 0 }, "slow")

    sections.removeClass('is-active')
    getTarget(sections, 'sizes').addClass('is-active')

    deskOptions.removeClass('is-active')
    getTarget(deskOptions, 'sizes').addClass('is-active')

    options.removeAttr('selected')
    getTarget(options, 'sizes').attr('selected', 'true')
  })

  // Close the modal
  function removeOverlay() {
    body.removeClass('js-product-overlay-active')
  }
  background.on('click', removeOverlay)
  closeButton.on('click', removeOverlay)

  // Change the current active modal when clicking the desk options
  deskOptions.on('click', function() {
    var that = $(this)
    var attribute = that.attr('data-targets')

    deskOptions.removeClass('is-active')
    getTarget(deskOptions, attribute ).addClass('is-active')

    options.removeAttr('selected')
    getTarget(options, attribute).attr('selected', 'true')

    sections.removeClass('is-active')
    getTarget(sections, attribute).addClass('is-active')

  })

  //Same thing but now on mobile 😭
  select.on('change', function() {
    var attribute = $('.product-overlay__select option:selected').attr('data-targets')

    deskOptions.removeClass('is-active')
    getTarget(deskOptions, attribute ).addClass('is-active')

    options.removeAttr('selected')
    getTarget(options, attribute).attr('selected', 'true')

    sections.removeClass('is-active')
    getTarget(sections, attribute).addClass('is-active')

  })

  // Change the table from inches to cm on click

  measureRadios.on('click', function() {
    var that = $(this)
    var attribute = that.attr('data-unit-to')

    measureRadios.removeClass('is-active')
    that.addClass('is-active')
    measureTables.removeClass('is-active')
    getTarget(measureTables, attribute, 'data-unit-to').addClass('is-active')

  })





}(jQuery);
