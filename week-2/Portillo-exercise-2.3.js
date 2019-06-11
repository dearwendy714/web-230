/*
============================================
; Title:  Portillo-exercise-2.3.js
; Author: Wendy Portillo
; Date:   6 June 2019
; Description: Simple program on how to use
;			   function property values.
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!
*/

var header = require("../header.js");

// Header output
console.log(header.display("Wendy", "Portillo", "Week 2") + '\n');

// Start program

// Function properties
myName.wendy = "Wendy";
myName.portillo = "Portillo";

// Returns a hello message that includes function property values.
function myName() {
	return 'Hello ' + myName.wendy + ' ' + myName.portillo + '!';
}

// myName() output
console.log(myName());

// End program
