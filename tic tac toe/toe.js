/*$(".box").click(function() {
    $(this).css("background-color", "red");
});*/

$('.box').click(function() {
  var clicks = $(this).css("background-color", "red");
  if (clicks) { 
     // odd clicks
  } else {
     // even clicks
  }
  $(this).css("background-color","white", !clicks);
});