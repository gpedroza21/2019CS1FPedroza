init();

function init(){
    for(var r=0; r<9; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace();
}

function startRace()
{
    //Demon
    TweenMax.to("#car1",1.6,{x:550,ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:550, y:-320,delay:1.7, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-50, y:-300,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-50, y:20,delay:4.8, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:200,y:170,delay:6.5,ease:Sine.easeOut});
    TweenMax.to("#car1",2,{rotation:450,delay:6.5,ease:Sine.easeOut});
    //Shelby
    TweenMax.to("#car2",1.8,{x:530,y:-5,ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:500, y:-320,delay:1.5, ease:Sine.easeOut});
    TweenMax.to("#car2",2,{x:-70, y:-300,delay:2.7, ease:Sine.easeOut});
    TweenMax.to("#car2",2.3,{x:-50, y:40,delay:4.3, ease:Sine.easeOut});
    TweenMax.to("#car2",2.9,{x:200,y:-15,delay:5.4,ease:Sine.easeOut});
    //Camaro
    TweenMax.to("#car3",2.3,{x:560,ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{x:500, y:-340,delay:2.3, ease:Sine.easeOut});
    TweenMax.to("#car3",2,{x:-50, y:-300,delay:3.5, ease:Sine.easeOut});
    TweenMax.to("#car3",2,{x:-50, y:60,delay:5.6, ease:Sine.easeOut});
    TweenMax.to("#car3",2,{x:200,y:-170,delay:6.55,ease:Sine.easeOut});
    TweenMax.to("#car3",2,{rotation:270,delay:6.5,ease:Sine.easeOut});
    
    TweenMax.to("#explosion", 1,{opacity:1 ,delay:6.5,ease:Sine.easeOut});
    TweenMax.to("#explosion", 1,{opacity:0 ,delay:7.55,ease:Sine.easeOut});

}