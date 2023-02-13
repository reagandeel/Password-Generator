// Assignment Code
var generateBtn = document.getElementById("#generate");
const password_ele = document.getElementById("pwd-txt");
var string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const special_chars = "!@#$%^&*()";
const generate = document.getElementById ("generate");
const clipboard = document.getElementById ("clipboard");
var pwd_length = document.getElementById ("")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
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