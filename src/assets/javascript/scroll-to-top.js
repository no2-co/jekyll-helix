;(function($) {
  var topAnchor = $("a[href='#top']")
  topAnchor.click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
})(jQuery);
