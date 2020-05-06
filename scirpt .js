
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generatePassword();

function generatePassword() {
  generateBtn.addEventListener("#generate", generatePassword);
  var generateBtn = document.querySelector("#generate");
}

//generate password
function generatePassword() {
  //ask for length
  var length = parseInt(prompt("How many characters will your password be? Enter a number between 8 and 128"));
  if (isNaN(length) === true) {
    alert ("Please enter a number.");
    return "";
  }
if (length < 8 || length > 128 ) {
  alert ("This needs to be between 8 and 128.");
  return "";

}
  //ask for character type
 // var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
 var ConfirmUppercase = confirm("Do you want uppercase?");
 var ConfirmLowercase = confirm("Do you want lowercase?");
 var ConfirmNumbers = confirm("Do you want numbers?");
 var ConfirmSymbols = confirm("Do you want symbols?");
 
  //evaluate character type
  var charSet = "";
  if( ConfirmLowercase === true ) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  } 
  if( ConfirmUppercase === true ) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  if( ConfirmNumbers === true ) {
    charSet += "0123456789";
  } 
  if( ConfirmSymbols === true ) {
    charSet += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  if (charSet === "") {
    alert ("You have to select at least one character type.");
  return "";
  }
  var retVal = "";
  //for (var i = 0, n = charSet.length; i < length; i++) {
    for (var i = 0; i < length; i++) {
   // password += charSet.charAt (math.floor (math.random() + charSet.length));
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length)); }

  return retVal; }
  

