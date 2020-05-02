    
    function generatePassword() {
    
// Special characters for the function created

var lowercase  = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
var values = 'lowercase + uppercase + numbers + symbols';
var password = '';

// Prompts that come up after you click generate password
function generatePassword() {

  alert("Welcome to Password Generator");

  varconfirmPassword = confirm("Please select the length of your password greater than 8 values.");

  varconfirmNumbers = confirm("Do you want numbers in your password?");

  varconfirmLowerCase = confirm("Do you want lowercases in your password?");

  varconfirmUppercase = confirm("Do you want uppercases in your password?");

  varconfirmSymbols = confirm("Do you want special characters in your password?");

} else if (upperCase && lowerCase && special) {
  characters = upper.concat(lower, symbol);

} else if (upperCase && lowerCase && numbers) {
  characters = upper.concat(lower, num);      

} else if (upperCase && special && numbers) {
  characters = upper.concat(special, num);

} else if (lowerCase && special && numbers) {
  characters = lower.concat(special, num);


// For passwords containing only two characters
} else if (upperCase && lowerCase) {
  characters = upper.concat(lower);

} else if (upperCase && special) {
  characters = upper.concat(symbol);

} else if (upperCase && numbers) {
  characters = upper.concat(num);

} else if (lowerCase && special) {
  characters = lower.concat(symbol);

} else if (lowerCase && numbers) {
  characters = lower.concat(num);

} else if (special && numbers) {
  characters = symbol.concat(number);


// For passwords containing only one symbol
} else if (upperCase) {
  characters = upper;

} else if (lowerCase) {
  characters = lower;

} else if (special) {
  characters = symbol;

} else if (numbers) {
  characters = num;
};


///Loop
var pw = ''
for (vari = 0; i <= length; i++) {
{password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
}
///
    var password = pw.join("");
    return password;
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);