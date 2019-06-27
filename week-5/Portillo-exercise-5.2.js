/*
============================================
 Title:  Exercise-5.2.js
 Author: Wendy Portillo
 Date:   June 27, 2019
 Description: ES5 Built-In Functions
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");


// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 5.2") + '\n');

// Start program

var myFavoritefood = ['fries', 'cheeseburger', 'hummus', 'pita chips', 'ice cream'];
myFavoritefood.forEach(function(food){
  console.log(food)
});



