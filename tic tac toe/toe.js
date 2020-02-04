/*$(".box").click(function() {
    $(this).css("background-color", "red");
});*/

/* Good progress knowing you need an if statement. Just make sure that your if
is evealuation the right condition.*/
  var clicks = 0


$(".box").one("click",function() {
    var color;
    if (clicks%2==1) { 
        color="white";
    }
    else{
        color="red";
    }
    $(this).css("background-color",color);
    clicks++;
    checkWinner(this);

}

);

function checkWinner(clickedBox){
    var color = $(clickedBox).css("background-color");
    console.log(color);

    var colClicked = $(clickedBox).attr('col');
    console.log(colClicked);
    var colElements = $("[col=" + colClicked + "]");
    
    var total = 0;
    colElements.each(
        function(){
            var colorOfChosen = $(this).css("background-color");
            if (clickedBox=this){
                total = 1;
            }
            else{
                total++;
            }
                
            
            console.log(colorOfChosen);
            
        }
    )

    console.log(total);


    /*total = 0;
    var rowClicked = $(clickedBox).attr('row');
    console.log(rowClicked);
    var rowElements = $("[row=" + rowClicked + "]");
    $(rowElements).css('border','2px dotted #dad');
    
    rowElements.each(
        function(){
            var colorOfChosen = $(this).css("background-color",color);
            console.log(colorOfChosen);
        }
    )*/

    
   
        

}

   /*function calculateDiagonals(matrix){
    var n = matrix.length;
    for(var i=0; i<n; i++){
    for(var j=0; j<n; j++);
    console.log(diagonal);
        }
    }

i = 0 and j = 0;
i = 0 and j = 1;
i = 0 and j = 2;
i = 1 and j = 0;
i = 1 and j = 1;
i = 1 and j = 2;
i = 2 and j = 0;
i = 2 and j = 1;
i = 2 and j = 2;


*/