/*
=================================================================
; Title:  Assignment 4.1 Arrays
; Author: William Imoh https://scotch.io/tutorials
; Modified by: Karie Funk
; Modified By: Wendy Portillo (Found and corrected errors)
; Date:   20 June 2019
; Description: Using array.map() example with two errors.
;================================================================
*/



// Load additional JavaScript file
var header = require("../header.js");

// Output Header Display
console.log(header.display("Wendy", "Portillo", "Discussion Board 4-solution2") + "\n");

// Start program

// create a function to use
const makeSweeter = sweetItem => sweetItem * 2;

// we have an array
const sweetArray = [2, 3, 4, 5, 35];

// call the function we made. more readable
const sweeterArray = sweetArray.map(makeSweeter);
// sweetArray.map(makeSweeter) missing map
console.log(sweeterArray);
// misspelling error

// Result [4, 6, 8, 10, 70]
