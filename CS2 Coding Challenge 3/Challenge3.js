function noVowels(message) {
    noVowelsString = "";
    var vowels = 'aeiou';
for (var i=0; i<message.length; i++){
    var currLetter = message.charAt(i);
    if(vowels.indexOf(currLetter)<0)
        noVowelsString += currLetter;
    }
return noVowelsString;
}
message = "Hello, how are you?";
console.log(noVowels(message))


function everyOther(message,n){
    everyOther = "";
for (var i=0; i<message.length; i+=n){
    var thisLetter = message.charAt(i);
everyOther += thisLetter
}
return everyOther;
}

message = "what am i doing?"
console.log(everyOther(message,3))


function newReverse(message){
    var newReverse = "";
    for(var ye=message.length-1; ye>=0 ;ye--){
        newReverse =+ message.charAt(ye);
}

return newReverse;
}
console.log(newReverse("mustangs"))
