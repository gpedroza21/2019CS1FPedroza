var clicks = 0


$(".box").one("click",function() {
    var color;
    if (clicks%2==1) { 
        color="darkblue";
    }
    else{
        color="white";
    }
    $(this).css("background-color",color);
    clicks++;
    if(isWinner(this))
        alert("You win")
    
}

);

function isWinner(clickedBox){
    var color = $(clickedBox).css("background-color");
    console.log(color);

    var colClicked = $(clickedBox).attr('col');
    var colElements = $("[col=" + colClicked + "]");
    
   
    var total = 0;
    colElements.each(
        function(){
            colorOfChosen = $(this).css("background-color")
            if(colorOfChosen == color){
                total++;
            }
        }
    )
    console.log(total);

    if(total == 3){
        return true;
    }

    var rowClicked = $(clickedBox).attr('row');
    var rowElements = $("[row=" + rowClicked + "]");

    total = 0;
    rowElements.each(
        function(){
            var colorOfChosen = $(this).css("background-color");
            if (colorOfChosen == color){
                total++
            }
            
        }
    )
    console.log(total);
    
    if(total == 3){
        return true;
    }
    var d1Clicked = $(clickedBox).attr('d1');
    var d1Elements = $("[d1" + d1Clicked + "]" )

    total = 0
    d1Elements.each(
    function(){
        var colorOfChosen = $(this).css("background-color");
        if(colorOfChosen == color){
            total++
        }
    }
)
console.log(total);
if(total == 3){
    return true;
}
var d2Clicked = $(clickedBox).attr('d2');
var d2Elements = $("[d2" + d2Clicked + "]")

total = 0
d2Elements.each(
    function(){
        var colorOfChosen =$(this).css("background-color");
        if(colorOfChosen == color){
            total++
        }
    }
)
console.log(total);
if(total == 3){
    return true;
}
   
    return false;
    
    if(total === 10){
    alert("It's a tie");
     

}
}

