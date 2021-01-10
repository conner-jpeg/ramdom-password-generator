// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
  "alphabet": ["a b c d e f g h i j k l m n o p q r s t u v w x y z "],
  "numbers": ["0 1 2 3 4 5 6 7 8 9"],
  "specialCharacters" : [" ~ ` ! @ # $ % ^ & * ( ) _ + - = {} [] \ | : ; < > , . / ? "],
};
console.log(characters);
var passwordLength = prompt("enter a password length between 8 and 128 characters");
//var userLength = prompt("enter a number between 8 and 128");
//for (var passwordLength  >=8; <=128);
if (passwordLength <=8) (passwordLength >=128); { //dunno how to set the parameter.. 
  alert ("please enter a number between 8 and 128");
};
//onClick.prompt("how many characters would you like in your password (between 8 & 128)");
console.log(passwordLength)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
//var scale = prompt("how many characters would you like in your pass word (between 8 and 128 characters) ")
