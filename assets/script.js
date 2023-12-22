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
var characterType = character(prompt("Please select the password criteria."))

prompt("Please select a password length.")

prompt("Please select the character types.")

// prompt("How long do you want your password to be")

function generatePassword() {
  alert("Here is your password: " + password)
}