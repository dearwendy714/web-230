/*
=================================================================
; Title:  Discussion Board 3.1
; Author: Nathaniel D. Liebhart
; Modified By: Wendy Portillo (Found and corrected errors)
; Date:   13 June 2019
; Description: This is a program that contains two errors
;================================================================
*/

// Load additional JavaScript file
var header = require("../header.js");

// Output Header Display
console.log(header.display("Wendy", "Portillo", "Discussion Board 3-solution1") + "\n");

// Start program

 /**

* Declare cars array

*/

var cars = ["Hot Wheels", "Batmobile", "BloodMobile", "Wonder Womans Invisible Plane"];
 /**

* Declare an index variable i

*/

 var i;
 /**

* Loop through the cars array and console log each car with a new line

*/

for (i = 0; i < cars.length; i++) {

            console.log(cars[i] + "\n");

}

 /** error found  for (not for each) also missing + double not single*/
