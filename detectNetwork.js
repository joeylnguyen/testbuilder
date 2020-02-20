// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

 // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

 // create length var for convenience
 // create firstPrefix var for convenience
 // If cardNumber.length is 14
   // return "Diner's Club"
 // If cardNumber.length is 15
   // return "American Express"
 // If cardNumber.length is 13
   // return "Visa"
 // If cardNumber.length is 19
   // return "Visa"
 // If cardNumber.length is 16
   // If the first number is 4
     // return "Visa"
     // Otherwise return "MasterCard"

var detectNetwork = function(cardNumber) {
  var cardNumber = JSON.stringify(cardNumber);
  var length = cardNumber.length;
  var firstPrefix = cardNumber[0];

  if (cardNumber.length === 14) {
  	return "Diner's Club";
  } else if (length === 15) {
  	return "American Express";
  } else if (length === 13 || length === 19) {
  	return "Visa";
  } else if (length === 16) {
  	if (firstPrefix === '4') {
  		return "Visa";
  	} else {
  		return "MasterCard";
  	}
  }
  
}




