// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
 // use the prompt function to ask the user
 while (length < 8 || length > 128) {
  length = parseInt(prompt("Please enter a password length between 8 and 128 characters:"));
  // use if statements to evaluate if user has met criteria
  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128.");
    }
  }
  // Character types
  // Use confirm booleans and store user choices in empty array
  var charOptions = "";
  // var userOptions = {length, charOptions}
  if(confirm("Use lowercase characters?")) {
    charOptions = charOptions.concat(lowerCasedCharacters);
    var lowercase = true;
  } 
  if(confirm("Use uppercase characters?")) {
    charOptions = charOptions.concat(upperCasedCharacters);
    var uppercase = true;
  }
  if(confirm("Use numbers?")) {
    charOptions = charOptions.concat(numericCharacters);
    var numeric = true;
  }
  if(confirm("Use special characters ($@%&*,etc)?")) {
    charOptions = charOptions.concat(specialCharacters);
    var special = true;
  }
  console.log(charOptions);
  
  // return { length: 0, lowercase: true, uppercase: true, numeric: true, special: true };
  return userOptions = {length, charOptions, lowercase, uppercase, numeric, special};
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randChars = "";

  for(var i = 0; i <= userOptions.length; i++) {
    randChars += arr[Math.floor(Math.random() * arr.length + 1)];
  }

console.log(randChars);
return randChars;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  console.log(options);
  var random = getRandom(userOptions.charOptions);
  console.log(random);
  return random;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);