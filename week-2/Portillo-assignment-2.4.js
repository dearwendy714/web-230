/*
============================================
; Title:  auger-assignment-2.4.js
; Author: Wendy Portillo
; Date:   6 June 2019
; Description: Simple program on how to use functions
;===========================================
*/
var header = require("../header.js");

// Header output
console.log(header.display("Wendy", "Portillo", "Assignment 2.4") + "\n");

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>

    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/

// Function concatenates a person's first and last name
function fullName(first, last) {
	return first + ' ' + last;
}

// Function formats a day
function dateWriter(year, month, day) {
	var todaysDate;
	todaysDate = new Date(year + "-" + month + "-" + day);
	return todaysDate.toLocaleDateString("en-US");
}

// Function formats a number to a fixed position
function formatNumber(number, fixedPosition) {
	return number.toFixed(fixedPosition);
}

// Function converts a string to an integer
function convertToInt(stringInt) {
	return parseInt(stringInt);
}

// Function converts a string to an floating-point number
function convertToFloat(stingFloat) {
	return parseFloat(stingFloat);
}

// Output
console.log("Hello my name is " + fullName("Wendy", "Portillo") + "!\n");
console.log("Today's date is " + dateWriter(2019, 06, 6) + " and the current temperature is " + formatNumber(89.95, 1) + ", ");
console.log("I am " + convertToInt("30") + " years old and my savings account goal is " + convertToFloat("10000000.00") + " dollars.");

// end program
