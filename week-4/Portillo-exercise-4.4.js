/*
============================================
 Title:  Portillo-exercise-3.3.js
 Author: Wendy Portillo
 Date:   June 22, 2019
 Description: Simple program on how to use
		   arrays and filtering.
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");

// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 4.3") + '\n');

// Start program

// Create a one-dimensional 5 element array
var states = [
	"Alabama",
	"Nebraska",
	"Iowa",
	"California",
	"Nevada"
];

// Function to output section headers
function headerMsg(msg) {
	console.log("\n-- " + msg +" --");
}

// Function to output an array's elements
function outputArray(arr) {
	// Output each element to the console
	for (var j = 0; j < arr.length; j++) {
		console.log(arr[j]);
	}
}

// Function to output an array's elements in asc. order
function sortArray(arr) {
	// Sort the array
	arr.sort();

	// Output each element to the console
	for (var j = 0; j < arr.length; j++) {
		console.log(arr[j]);
	}
}

// Function to filter one array's elements and create
// a second array containing the filtered element.
function getValue(x, val) {
	var filteredArray = x.filter(function(el){
		return val === el;
	});

	// Output the filtered result;
	console.log(filteredArray[0] + "\n");
}

// Output section header
headerMsg("ORIGINAL ARRAY");

// Output the states array elements
outputArray(states);

// Output section header
headerMsg("SORTED ARRAY");

// Output the states array elements sorted in ascender order
sortArray(states);

// Output section header
headerMsg("SELECTED VALUE");

// Output Iowa
getValue(states, "Iowa");

// End program
