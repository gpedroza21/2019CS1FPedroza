function noVowels(message) {
    noVowelsString = "";
    var vowels = 'aeiou';
for (var i=0; i<message.length; i++){
        noVowelsString += message.charAt(i);
}
return noVowelsString;


message = "Hello, how are you?";
console.log(noVowels(message))}