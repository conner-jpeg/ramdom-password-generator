// Assignment Code
var generateBtn = document.querySelector("#generate");
//need variable for the user selection
var passwordLength = textLength = ">=8, <=128";
//prompt ("please enter a password length between 8 & 128 characters long")
//if (passwordLength === false) {}
//var characters = {
  //"alphabet": ["a b c d e f g h i j k l m n o p q r s t u v w x y z "],
  //"numbers": ["0 1 2 3 4 5 6 7 8 9"],
  //"specialCharacters" : [" ~ ` ! @ # $ % ^ & * ( ) _ + - = {} [] \ | : ; < > , . / ? "],
//}; console.log(characters);
var char = "abcdefghijklmnopqrstuvwxyz";
var digits = "0,1,2,3,4,5,6,7,8,9";
var specialR = "`~!@#$%^&*()_-=+|}{[]:;<>,./?'"

console.log(26,char);
//let passwordLength = 8 < 128; //prompt("enter a password length between 8 and 128 characters");
//var userLength = prompt("enter a number between 8 and 128");
//for (var passwordLength  >=8; <=128);
//prompt ("enter a password length between 8 and 128 characters");

//if (passwordLength === true) ; { //dunno how to set the parameter.. 
  //alert ("please enter a number between 8 and 128");
  //console.log(passwordLength)
//}
//else {
 // confirm ("please reenter a number between 8 ")
//}


//else if (passwordLength > 128); {
    //prompt("enter a password length between 8 and 128 characters");} studpid mother fucking js. 
//else {}
// Write password to the #password input
function writePassword(length, characters) {
  var password = generatePassword();
  for (var i = 0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
var generateBtn = prompt ("please enter a password length between 8 & 128 characters long");
if (generateBtn <=8 >128){
  alert ("welp try again")
  prompt ("please enter a password length between 8 & 128 characters long");
}
else {
  //var generateBtn = generateBtn.addEventListener("click")
};

//else {
  //var generateBtn = generateBtn.addEventListener("click");

//}}; 