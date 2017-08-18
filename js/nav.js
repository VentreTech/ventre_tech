$(document).ready(function(){
  $(window).scroll(function() { // check if scroll event happened
    if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
      $("nav").css("background-color", "rgba(238,238,238,0.5)");
      $(".nav-text").css("color", "rgb(3, 24, 58)"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
      $("nav").css({
        "background-color": "transparent",
      });
      $ (".nav-text").css({
        "color": "white",
      })
       // if not, change it back to transparent
    }
  });
});

$(function() {
    $('.card').hover(
        function() {
            $(this).find('> .card-image > img.activator').click();
        }, function() {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );
});
