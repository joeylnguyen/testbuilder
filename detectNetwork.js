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
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

 // create length var for convenience
 // create prefix var for convenience and set to first number
 // create longerPrefix var and set to first number plus second number
 // loop through cardNumber starting at 2nd number
	 // If cardNumber.length is 14 and prefix is 38 or 39
	   // return "Diner's Club"
	 // If cardNumber.length is 15 and prefix is 34 or 37
	   // return "American Express"
	 // If cardNumber.length is 13 or 16 or 19 and cardNumber[0] is 4
	   // return "Visa"
	 // If cardNumber.length is 16 and prefix is 51 or 52 or 54 or 54 or 55
	     // return "MasterCard"
	 // If cardNumber.length is 16 or 19 and prefix is 6011 or 644-649 or 65
	     // return "Discover"
	 // If cardNumber.length is greater than or equal to 12 and less than or equal to 19 and prefix is 5018 or 5020 or 5038 or 6304
	     // return "Maestro"
	 // At end of loop, add current number to prefix

  

var detectNetwork = function(cardNumber) {
  var length = cardNumber.length;
  var prefix = cardNumber[0];
  var longerPrefix = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3]
  for (var i = 1; i < length; i++) {

	if (cardNumber.length === 14 && (prefix === '38' || prefix === '39')) {
	  return "Diner's Club";
	  } else if (length === 15 && (prefix === '34' || prefix === '37')) {
	  return "American Express";
	  } else if ((length === 13 || length === 16 || length === 19) && prefix === '4') {
	  return "Visa";
	  } else if (length === 16 && (prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55')) {
	  return "MasterCard";
	  } else if ((length === 16 || length === 19) && (prefix === '6011' || (prefix >= '644' && prefix <= '649') || prefix === '65')) {
      return "Discover";
	  } else if ((length >= 12 && length <= 19) && (prefix === '5018' || prefix === '5020' || prefix === '5038' || prefix === '6304')) {
      return "Maestro";
	  } else if ((length === 16 || length === 18 || length === 19) && ((prefix >= 622126 && prefix <= 622925) || (prefix >= 624 && prefix <= 626) || (prefix >= 6282 && prefix <= 6288))) {
      return "China UnionPay";
	  } else if ((length === 16 || length === 18 || length === 19) && (longerPrefix === '4903' || longerPrefix === '4905' || longerPrefix === '4911' || longerPrefix === '4936' || longerPrefix === '564182' || longerPrefix === '633110' || longerPrefix === '6333' || longerPrefix === '6759')) {
	  return "Switch";
	  };

	prefix += cardNumber[i];
	longerPrefix += cardNumber[3 + i];
  };
};



