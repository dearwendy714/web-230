/*
=================================================================
; Title:  Assignment 4.1 Arrays
; Modified by: Nathaniel Liebhart
; Modified By: Wendy Portillo (Found and corrected errors)
; Date:   20 June 2019
; Description: Application with two errors using an array method
;================================================================
*/



// Load additional JavaScript file
var header = require("../header.js");

// Output Header Display
console.log(header.display("Wendy", "Portillo", "Discussion Board 4-solution1") + "\n");

// Start program
// The goal of this program is to remove Phone from the array and place Mouse in its place.

// This is an array of animals, but one of the items isn't an animal
var animals = ['Cats', 'Dogs', 'Cows', 'Phone']; // missing comma
// This method will take in 3 parameters in order to remove the item that doesn't belong and add in Mouse
animals.slice(3, 1, 'Mouse');
// This will print the items within the array
console.log(animals);
