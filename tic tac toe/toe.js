var clicks = 0


$(".box").one("click",function() {
        var color;
        if (clicks%2==1) { 
            color="darkblue";
        }
        else{
            color="darkred";
        }
        $(this).css("background-color",color);
        clicks++;

        var didWin = isWinner(this);

        if( didWin == 1){
            TweenMax.to(".resultBox", 1,{opacity:1});
            $('#resultMessage').text("You Win!");
            clicks : "off"
        }
        else if(didWin == -1){
            TweenMax.to(".resultBox", 1,{opacity:1});
            $('#resultMessage').text("Its A Tie");
        }
    
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
        return 1;
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
        return 1;
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
    return 1;
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
    return 1;
}
   if(clicks == 9){
       return -1;
   }

     return 0;

}
$(".restart").click (function(){
        location.reload();
});
/* change returnsssss -1, 0, 1
TweenMax.to(".winner", 1,{opacity:1 ,delay:3});
TweenMax.to(".winner",1,{opacity:0, delay:17});
*/