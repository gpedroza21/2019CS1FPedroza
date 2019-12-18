/*$(".box").click(function() {
    $(this).css("background-color", "red");
});*/

/* Good progress knowing you need an if statement. Just make sure that your if
is evealuation the right condition.*/

$('.box').click(function() {
  var clicks = $(this).css("background-color", "red"); // what does clicks equal after this line?
  if (clicks) { // clicks should be a number that can be determined odd or even, the line above does not assign a number to clicks
     // odd clicks
  } else {
     // even clicks
  }
  $(this).css("background-color","white", !clicks);
});