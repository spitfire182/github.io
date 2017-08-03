

$("[href^='#']").on('click', function(event) {
  var target;
  target = this.hash;

  event.preventDefault();

  var navOffset;
  navOffset = $('#navbar').height() + 50;

  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top - navOffset
  }, 700, function() {
    return window.history.pushState(null, null, target);
  });
});

$("nav li").on("click", function() {
      $("nav li").removeClass("active");
      $(this).addClass("active");
    });