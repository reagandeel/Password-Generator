// Assignment Code
var generateBtn = document.querySelector("#generate"); //generate password button


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // calling generate password function and storing value into 'password' var
  var passwordText = document.querySelector("#password"); // generated password

  passwordText.value = password; // takes value of generated password & plugs it into the screen

}
function generatePassword() {
  console.log ("test")
}

generateBtn.addEventListener("click",writePassword); // when user clicks the generate button, it will call the password function.


/*
}
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random("#generate") * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  
  }
*/