// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
  "alphabet": ["a b c d e f g h i j k l m n o p q r s t u v w x y z "],
  "numbers": ["0 1 2 3 4 5 6 7 8 9"],
  "specialCharacters" : [" ~ ` ! @ # $ % ^ & * ( ) _ + - = {} [] \ | : ; < > , . / ? "],
}
console.log(characters);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); prompt("");
//var scale = prompt("how many characters would you like in your pass word (between 8 and 128 characters) ")
