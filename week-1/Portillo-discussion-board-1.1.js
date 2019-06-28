/*
===========================================================
Title: JavaScript Best Practices
Author: w3schools https://www.w3schools.com/js/js_best_practices.asp
Date: May 28, 2019
Modified by: Wendy Portillo
Description: A simple program that calculates and outputs an
			 item's sale price. I altered the original
			 program to include additional variables, a
			 second calculation, and three coding errors.
============================================================
*/

// Start program

// Variable declaration
var firstName;
var lastName;
var price,
var discount;
var savings;
var salePrice;

// Variable assignments
firstname = John;
lastName = "Doe";
price = 100;
discount = 0.25;
savings = price * discount;
salePrice = price - savings;

// Output
console.log(
  `${firstName} ${lastName} paid $${salePrice} on an item that was originally $${price}, he saved $${savings}.`
);
