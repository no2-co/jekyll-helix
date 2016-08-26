;!function($){
  var input = $('.product-details__input')
  var up = $('.product-details__qty--plus')
  var down = $('.product-details__qty--minus')

  function addOne() {
    var oldValue = parseFloat(input.val())
    if (oldValue >=0 ) {
      var newValue = oldValue + 1
      input.val(newValue)
    }
  }

  function removeOne() {
    var oldValue = parseFloat(input.val())
    if (oldValue > 0) {
      var newValue = oldValue - 1
      input.val(newValue)
    }
  }

  up.on('click', addOne)
  down.on('click', removeOne)

}(jQuery);
