/*Downloaded from https://www.codeseek.co/shaylonh/jump-scare-eGRKXR */
var audio = new Audio('http://soundbible.com/mp3/Female_Scream_Horror-NeoPhyTe-138499973.mp3');

setTimeout(function() { boo(); }, 2000);
setTimeout(function() { reset(); }, 4000);

function boo () {
  $('.can-hide').addClass("hide"); 
  $('.skull').addClass("jump");
  $('.skull').addClass("shake");
  audio.play();
}

function reset() {
  $('.can-hide').removeClass("hide"); 
  $('.skull').removeClass("jump"); 
  $('.skull').removeClass("shake");
}