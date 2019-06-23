/*
============================================
; Title:  Portillo-exercise-3.2.js
; Author: Wendy Portillo
; Date:   June 22 2019
; Description: Simple program on how to use arrays.
;===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");

// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 4.2") + '\n');

// Start Program

// Array containing different fruits; order does not matter
var fruits = [
	"Papaya",
	"Figs",
	"Guava",
	"Pear",
	"Mango"
];

function getFruit(arr) {
	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

// Call the getFruit() function
getFruit(fruits);

// End Program
