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
 // If cardNumber.length is 14 and firstPrefix is 38 or 39
   // return "Diner's Club"
 // If cardNumber.length is 15 and firstPrefix is 34 or 37
   // return "American Express"
 // If cardNumber.length is 13 or 16 or 19 and cardNumber[0] is 4
   // return "Visa"
 // If cardNumber.length is 16 and firstPrefix is 51 or 52 or 54 or 54 or 55
     // return "MasterCard"

var detectNetwork = function(cardNumber) {
  var length = cardNumber.length;
  var firstPrefix = cardNumber[0] + cardNumber[1];

  if (cardNumber.length === 14 && (firstPrefix === '38' || firstPrefix === '39')) {
  	return "Diner's Club";
  } else if (length === 15 && (firstPrefix === '34' || firstPrefix === '37')) {
  	return "American Express";
  } else if ((length === 13 || length === 16 || length === 19) && cardNumber[0] === '4') {
  	return "Visa";
  } else if (length === 16 && (firstPrefix === '51' || firstPrefix === '52' || firstPrefix === '53' || firstPrefix === '54' || firstPrefix === '55')) {
  	return "MasterCard";
  }
}




