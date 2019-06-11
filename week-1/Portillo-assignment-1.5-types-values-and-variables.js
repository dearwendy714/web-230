/*
===========================================================
Title: Assignment 1.5 - Types, Values, and Variables
Author: Wendy Portillo
Date: May 30, 2019
Description: A simple program that demonstrates how to use
			 JavaScript types, values, and variables.
============================================================
*/

// Variable Declarations
var firstName, lastName, address, payRate, hireDate, payRateRounded;
var firstNameTwo, lastNameTwo, addressTwo, payRateTwo, hireDateTwo, payRateRoundedTwo;
var firstNameThree, lastNameThree, addressThree, payRateThree, hireDateThree, payRateRoundedThree;

// Variable Assignments
// Employee Record 1
firstName = "Wendy";
lastName = "Portillo";
address = "1533 Beacon Street, Anaheim, CA 92707";
payRate = 25.00;
hireDate = new Date(2000, 1, 1);

// Employee Record 1
firstNameTwo = "Danny";
lastNameTwo = "Santana";
addressTwo = "302 Berkeley Street, Santa Ana, CA 92707";
payRateTwo = 35.50;
hireDateTwo = new Date(2006, 7, 1);

// Employee Record 3
firstNameThree = "Richard";
lastNameThree = "Alexander";
addressThree = "714 Sunflower, Coast Mesa, CA 92707";
payRateThree = 40.50;
hireDateThree = new Date(2018, 10, 16);

// Output
console.log("-------- EMPLOYEE RECORD 1 --------");
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);
console.log("Address: " + address);
console.log("Pay Rate: " + payRate.toFixed(1));
console.log("Hire Date Name: " + hireDate.toLocaleDateString());

console.log("\n-------- EMPLOYEE RECORD 2 --------");
console.log("First Name: " + firstNameTwo);
console.log("Last Name: " + lastNameTwo);
console.log("Address: " + addressTwo);
console.log("Pay Rate: " + payRateTwo.toFixed(1));
console.log("Hire Date: " + hireDateTwo.toLocaleDateString());

console.log("\n-------- EMPLOYEE RECORD 3 --------");
console.log("First Name: " + firstNameThree);
console.log("Last Name: " + lastNameThree);
console.log("Address: " + addressThree);
console.log("Pay Rate: " + payRateThree.toFixed(1));
console.log("Hire Date: " + hireDateThree.toLocaleDateString());
