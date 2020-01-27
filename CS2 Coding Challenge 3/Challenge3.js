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


function everyOther(message){
    everyOther = "";
for (var i=0; i<message.length; i+=3){
    var thisLetter = message.charAt(i);
everyOther += thisLetter
}
return everyOther;
}

message = "what am i doing?"
console.log(everyOther(message,3))