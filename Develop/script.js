// Assignment Code
var generateBtn = document.getElementById("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var passwordLength = 8;


  passwordText.value = password;

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random("#generate") * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  
  }
}

function generateBtn {
    document.getElementbyId = generatePassword();

}
/*
  document.writePassword("password").value {


}
*/