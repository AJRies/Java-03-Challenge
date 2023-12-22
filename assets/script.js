// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//prompt(), alert(), confirm(),
var length = Number(prompt("Please select a password length."));

var characterType = prompt("Please select the character type: uppercase, lowercase, numeric, and or special characters.");

// prompt("How long do you want your password to be")

function generatePassword() {
}