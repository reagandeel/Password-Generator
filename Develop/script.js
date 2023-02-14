// Assignment code here
function generatePassword() {
  // Setting specifications for the password
  const OPTIONS = {
      lowerCaseArray : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      upperCaseArray : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      numArray : ['0','1','2','3','4','5','6','7','8','9'],
      specialCharArray : ['!','@','#','$','*','&','[', ']', '(', ')','%', '>', '<', '+', '.', ':', ';','=','^','{', '}', ',','_' ], // !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  
  };
  var emptyArray =[''];

  // prompt - meets minimum and maxium character requirement (1-128 characters.)
  passwordLength = prompt("How many characters would you like in your password? Please choose between 1 - 128 characters.");
    if (passwordLength < 8 && passwordLength > 128) {
      return "Please choose a number between 8-128.";
    } else if (isNaN(passwordLength)) {
      passwordLength = prompt("Please enter a valid number.");
    } else {
      alert("Your password will be " + passwordLength +" characters long.");
    }
  // prompt - meets lower case letter requirement
  inputLowerCase = confirm ("Would you like your password to have lowercase letters?");
    if (inputLowerCase) {
      var changeLowerCase = alert ("Your password will contain lowercase letters!");

    } else {
      alert("Your password will NOT contain lowercase letters.");
    }
  // prompt - meets upper case letter requirement.

  inputUpperCase = confirm("Would you like for your password to have uppercase letters?");
    if (inputUpperCase) {
      var changeUpperCase = alert("Your password will contain uppercase letters!");
    } else {
      alert("Your password will NOT have uppercase letters.");
    }

  // prompt - meets number requirement
  inputNum = confirm ("Would you like for your password to have numbers?");
    if (inputNum) {
      var changeNum = alert("Your password will contain numbers!");

    } else {
      alert("Your password will NOT contain numbers.");

    }
    // prompt - special character requirement.
  inputSpecialChar = confirm("Would you like for your password to contain special characters?");
    if (inputSpecialChar) {
      var changeSpecialChar = alert ("Your password will contain special characters!");
    } else {
      alert ("Your password will NOT contain special characters.");
    }
    
    if (inputLowerCase === false && inputUpperCase === false && inputNum === false && inputSpecialChar === false) {
      return "Please select at least one character type.";
    };
  
    let endResult = ""

    for (let i = 0; i < passwordLength; i++) {
      let rng =[Math.floor(Math.random("#generate") * emptyArray.length)];
      endResult = endResult + emptyArray.length;
     }

      return endResult;

    };

  // sets function for generate password 
function writePassword () {
  var password= generatePassword ();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// sets task for HTML.
  var generateBtn = document.querySelector ("#generate");

  // creates a use/function for the button in the HTML.
  generateBtn.addEventListener ("click", writePassword);


  
