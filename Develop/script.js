// Assignment code here
function generatePassword() {
  // Setting specifications for the password
  var numArray = ['0','1','2','3','4','5','6','7','8','9'];
  var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var specialCharArray = ['!','@','#','$','*','&','[', ']', '(', ')','%', '>', '<', '+', '.', ':', ';','=','^','{', '}', ',','_' ]; // !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  var emptyArray = [];


  passwordLength = prompt("How many characters would you like in your password? Please choose between 1 and 128 characters.");
    if (passwordLength < 8 && passwordLength > 128) {
      return "Please choose a number between 8-128.";
    } else if (isNaN(passwordLength)) {
      passwordLength = prompt("Please enter a valid number.")
    } else {
      alert("Your password will be " + passwordLength +" long.");
    }
  
  inputLowerCase = confirm("Would you like your password to have lowercase letters?");
    if (inputLowerCase) {
      var changeLowerCase = alert("Your password will contain lowercase letters!");

    } else {
      alert("Your password will not contain lowercase letters.")
    }
  
  inputUpperCase = confirm("Would you like for your password to have uppercase letters?");
    if (inputUpperCase) {
      var changeUpperCase = alert("Your password will contain uppercase letters!");
    } else {
      alert("Your password will not have uppercase letters.");
    }
  
  inputSpecialChar = confirm("Would you like for your password to contain special characters?")
    if (inputSpecialChar) {
      var changeSpecialChar = alert ("Your password will contain special characters!")
    } else {
      alert ("Your password will NOT contain special characters.")
    }
  }


  
/*
// Assignment Code

// 'Generate Password' button
var generateBtn = document.querySelector("#generate"); //generate password button

// Setting specifications for the password
var specialCharArray = ['!','@','#','$','*','&','[', ']', '(', ')','%', '>', '<', '+', '.', ':', ';','=','^','{', '}', ',','_' ]; // !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numArray = ['0','1','2','3','4','5','6','7','8','9'];
var emptyArray = [];

// when user clicks the generate button, it will call the password function.
generateBtn.addEventListener("click",writePassword); 


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // calling generate password function and storing value into 'password' var
  var passwordText = document.querySelector("#password"); // generated password

  passwordText.value = password; // takes value of generated password & plugs it into the screen
/* 
prompts-
length: 8-128 char
lowercase, uppercase, numeric, and/or special characters
once answered > input validated, one char type selected, password with correct criteria generated & displayed

  //Prompt for uppercase letters
 var mainCharArray = function () {
  var promptUppercase = window.prompt ('Would you like to include Uppercase letters? Type "YES" or "NO"');
  promptUpperCase = promptUpperCase.toLowerCase();
    if (promptUppercase === "YES") {
      window.confirm ('Your password will include uppercase letters');
      var mainCharacterArray = emptyArray.concat(upperCaseArray);
     } else {
        mainCharacterArray = emptyArray;
      };

    mainCharacterArray();
    console.log(mainCharacterArray);
    
  //Prompt for lowercase letters
  var promptLowerCase = window.prompt ('Would you like to include lowercase letters? Type "YES" or "NO"');
  promptLowerCase = promptLowerCase.toLocaleLowerCase();
    if (promptLowercase === "YES") {
      window.confirm ('Your password will include lowercase letters.')
    } else {
        mainCharacterArray2= emptyArray;
      };
      var mainCharacterArray2 = mainCharacterArray.concat(lowerCaseArray);

    }
  }

  
// password length
function passwordLength () {
  var promptLength = window.prompt('Please enter a password length between 8-128 characters.');
    
}
  
}
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random("#generate") * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  
  }
*/