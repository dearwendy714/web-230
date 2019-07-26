/*
============================================
; Title: Assignment 1.1
; Author:  Justin Singleton
; Date: 2 June 2019
; Modified By: Wendy Portillo
; Description: Class: WEB231 1.1 Values and Variables
;===========================================
*/
 // Load additional JavaScript file
 var header = require("../header.js");

 // Output Header Display
 console.log(header.display("Wendy", "Portillo", "Discussion Board 1-solution2") + "\n");

 // Start program

//Random meal price//

var price = Math.floor(Math.random() * 100) +1;

//percentage set to 20%//

var percent = .02; // 2% Needs to be as a double such as .02

//formula to calculate//

var result = (price * percent);

//print price//

"This is the meal price";

console.log(price);

//print percent//

"This is the percent of tip";

console.log(percent);

//print the tip amount//

"This is the amount to tip";

console.log(result); // {result) The opening curly bracket should be a opening parentheses

