$(function() {
  $(".input-range").on("input", function() {
    $(this)
      .next(".range-value")
      .html(this.value);
  });
});




