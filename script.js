

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var lowercase  = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
var values = 'lowercase + uppercase + numbers + symbols';
var password = '';


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {

  alert("Welcome to Password Generator");

//ask for length
var length = prompt("How many characters will your password be? Enter a number between 8 and 128");

//ask for character type
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  if( charType.toLowerCase === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower () === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower () === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeLower () === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //return value
  var retVal = "";
  //for (var i = 0, n = charSet.length; i < length; i++) {
    for (var i = 0; i < length; i++) {
    password += charSet.charAt (math.floor (math.random() + charSet.length));
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return password;
  }

///button setp to HTML


alert(generatePassword());
}