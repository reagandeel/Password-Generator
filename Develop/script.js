// Assignment Code
var generateBtn = document.querySelector("#generate"); //generate password button
var SpecialCharArray = ['!','@','#','$','*','&','[', ']', '(', ')','%', '>', '<', '+', '.', ':', ';','=','^','{', '}', ',','_' ]; // !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numArray = ['0','1','2','3','4','5','6','7','8','9']

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // calling generate password function and storing value into 'password' var
  var passwordText = document.querySelector("#password"); // generated password

  passwordText.value = password; // takes value of generated password & plugs it into the screen

}
/* 
prompts-
length: 8-128 char
lowercase, uppercase, numeric, and/or special characters
once answered > input validated, one char type selected, password with correct criteria generated & displayed
*/
function generatePassword() {
  console.log ("test")
  var password = '';
  var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    
  return password; 
}

generateBtn.addEventListener("click",writePassword); // when user clicks the generate button, it will call the password function.


/*
}
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random("#generate") * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  
  }
*/