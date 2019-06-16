/*
============================================
; Title:  Portillo-assignment-3.4.js
; Author: Wendy Portillo
; Date:   13 June 2019
; Description: A program on how to create
			   loops in JavaScript.
;===========================================
*/


var header = require("../header.js");

// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 3.4") + '\n');

// Start program

var value=10;


// Functions

/**
 * Params: arg1, arg2
 * Response: boolean value
 * Description: Compares arg1 value with arg2 value
 */
function match(arg1, arg2) {
	if (arg1 === arg2) {
		return true;
	} else {
		return false;
	}
}


/**
 * Params: param1, param2
 * Response: console.log
 * Description: Stating that param1 and param2 don't equal each other
 */
function logMismatch(param1, param2) {
  const message= "The values " + param1 + " and " + param2 + " do not match."
  console.log(message);
}

/**
 * Params: param1, param2
 * Response: console.log
 * Description: Stating that param1 and param2 do equal each other
 */
function logMatch(param1, param2) {
  const message= "The values " + param1 + " and " + param2 + " do match."
  console.log(message);
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

for(var i=0; i<10; i++) {
  var rand=randomNumber()

  if (match(value,rand)) {
    logMatch(value, rand);
  } else {
    logMismatch(value, rand);
  }

}
