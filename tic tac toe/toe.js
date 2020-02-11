/*$(".box").click(function() {
    $(this).css("background-color", "red");
});*/

/* Good progress knowing you need an if statement. Just make sure that your if
is evealuation the right condition.*/
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
        alert("You win");

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

    return false;
}

function calculateDiagonals(matrix){
    var matrix = (0, 0) (0, 1) (0, 2);
                (1, 0) (1, 1) (1, 2);
                (2, 0) (2, 1) (2, 2)
    var n = matrix.length;
    var diag1 = 0;
    var diag2 = 0;
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            // an element from the main diagonal
            if(i === j) { 
                diag1 += matrix[i][j];
            }
            // an element from the counterdiagonal
            if(i + j === n - 1){
                diag2 += matrix[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
    
}
