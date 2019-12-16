$('#Box1').click(
        function(){
            alert("Mustangs are better than Camaros");
            var color = $(this).css("background-color");
            console.log(color);
            $('body').css("background-color",color);
        }
);
$('#Box2').click(
        function(){
            alert("Color will change");
            var color = $(this).css("background-color");
            console.log(color);
            $('body').css("background-color",color);
        }
);
$('#Box3').click(
        function(){
            alert("will change again");
            var color = $(this).css("background-color");
            console.log(color);
            $('body').css("background-color",color);
        }
);