var Audio = new Audio();//document.createElement('Audio');
Audio.src = 'zombies.mp3';



setTimeout(function() { playAudio(); }, 13000);


TweenMax.to(".image1", 1,{opacity:1 ,delay:13});
TweenMax.to(".image1",1,{opacity:0, delay:17});


function playAudio(){
    Audio.play();
    
}