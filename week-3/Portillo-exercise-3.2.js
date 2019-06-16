/*
============================================
; Title:  Portillo-exercise-3.2.js
; Author: Wendy Portillo
; Date:   13 June 2019
; Description: Simple program on how to use
;			   pattern matching functions
;			   to conditionally output values.
;===========================================
*/

var header = require("../header.js");

// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 3.2") + '\n');

// Start program

/*
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
*/

// Start Program

// Variables
var testVar1 = "A";
var testVar2 = "B";
var testVar3 = "C";
var testVar4 = "D";
var testVar5 = "E";
var testVar6 = "F";


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

// Using if, else statement testing variable

if (match(testVar1, testVar2)) {
  logMatch (testVar1, testVar2)
} else {
  logMismatch (testVar1, testVar2)
}

// Compares the variables three and four
if (match(testVar3, testVar4)) {
	logMatch(testVar3, testVar4);
} else {
	logMismatch(testVar3, testVar4);
}

// Compares the variables five and six
if (match(testVar5, testVar6)) {
	logMatch(testVar5, testVar6);
} else {
	logMismatch(testVar5, testVar6);
}


// End Program

