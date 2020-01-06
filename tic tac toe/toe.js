/*$(".box").click(function() {
    $(this).css("background-color", "red");
});*/

/* Good progress knowing you need an if statement. Just make sure that your if
is evealuation the right condition.*/
  var clicks = 0


$(".box").one("click",function() {
    var color;
    if (clicks%2==1) { // clicks should be a number that can be determined odd or even, the line above does not assign a number to clicks
        color="red";
    }
    else{
        color="white";
    }
    $(this).css("background-color",color);
    clicks++;
    checkWinner(this);

}

);

function checkWinner(clickedBox){
    var rowClicked = $(clickedBox).attr('row');
    console.log(rowClicked);
    var rowElements = $("[row=" + rowClicked + "]");
    $(rowElements).css('border','2px dotted #dad');

    var colClicked = $(clickedBox).attr('col');
    console.log(colClicked);
    var colElements = $("[col=" + colClicked + "]");
    $(colElements).css('border','2px dotted #dad');
}


