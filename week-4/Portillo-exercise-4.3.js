
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
// Display Array items: 5 vehicles
var vehicles = [
	"Car",
	"Truck",
	"Motorcycle",
	"Airplane",
	"Bus"
];

// Function to get values
function getValue(arr, filterValue) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === filterValue) {
			console.log(arr[i]);
		}
	}
}


// Output values
console.log(" -- DISPLAYING ARRAY ITEMS --");
for(var j = 0; j < vehicles.length; j++) {
	console.log(vehicles[j]);
}

// Insert a new line
console.log("");

console.log(" -- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

// Insert a new line
console.log("");

console.log(" -- SELECTED VALUE --");
getValue(vehicles, "Bus");

// End program

