$(document).ready(function() {
  $(".thumbnail").click(function() {
    $(".thumbnail").removeClass("selected");
    $(this).addClass("selected");
    const largeImageUrl = $(this).data("large");
    $("#mainImage").attr("src", largeImageUrl);
  });
});
