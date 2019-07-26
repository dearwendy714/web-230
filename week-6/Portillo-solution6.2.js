/*
=================================================================
; Title:  Assignment 6.1
; Author: April Auger
; Modified By: Wendy Portillo (Found and corrected errors)
; Date:   2 July 2019
; Description: A simple program to demonstrate
;			   how to create objects and assign
;			   properties to the object. This
;			   program has multiple errors that need
;			   to be corrected before it will run.
;================================================================
*/



// Load additional JavaScript file
var header = require("../header.js");

// Output Header Display
console.log(header.display("Wendy", "Portillo", "Discussion Board 6-solution2") + "\n");

// Start program

// Person object
var Person = {
	// Properties
	name: 'Mary Smith',
	address: '2158 Broadway, Sacramento, CA 95855',
	phone: '916-555-5555',
	gender: 'Female',

	// Method
	details: function() {
		return `Name: ${name}\nAddress: ${address}\nPhone: ${phone}\nGender: ${this.gender}`;

	}
}

console.log(Person.detail());

// End program
