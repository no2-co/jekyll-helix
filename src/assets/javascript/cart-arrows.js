;!function($){
  var up = $('.cart-item__adjustments--plus')
  var down = $('.cart-item__adjustments--minus')

  function addOne() {
    var that = $(this)
    var daddy = that.parent()
    var input = daddy.children('.cart-item__adjustments--input')
    var oldValue = parseFloat(input.val())
    if (oldValue >=0 ) {
      var newValue = oldValue + 1
      input.val(newValue)
    }
  }

  function removeOne() {
    var that = $(this)
    var daddy = that.parent()
    var input = daddy.children('.cart-item__adjustments--input')
    var oldValue = parseFloat(input.val())
    if (oldValue > 0) {
      var newValue = oldValue - 1
      input.val(newValue)
    }
  }

  up.on('click', addOne)
  down.on('click', removeOne)

}(jQuery);
