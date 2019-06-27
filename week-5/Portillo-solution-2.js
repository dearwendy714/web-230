/*
============================================
; Title:  Portillo-solution-2.js
; Author: April Auger
  Modified By: Wendy Portillo (Found and corrected errors)
; Date:   June 27, 2019
; Description: A simple program to demonstrate
;			   how to use the map function to
;			   output an array's values and index.
;			   There are three errors in the code.
;===========================================
*/

// Start program

// Restaurants array
var restaurants = [
  'La Grande Orange Cafe',
  'The Front Yard',
  'Angelini Osteria',
  'Pampas Grill',
  'Providence'
];// use []

// Map function creates a new array that will return
// the values and keys for each element in the array
var list = restaurants.map(function(currentValue, index ){
return currentValue + ' (' + index + ')';
});
// You don't use ++ inside a parameter, and you don't need employee


// Output the new array values and keys
list.forEach(function(e) {
  return console.log(e);
 });

// End program
