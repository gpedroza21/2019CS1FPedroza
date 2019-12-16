$(".box").click(function() {
    $(".box").css("background-color", "white"); //If you do this with every click, any box that has changed color will reset to white
    $(this).css("background-color", "red");  //You only need this one. 
});