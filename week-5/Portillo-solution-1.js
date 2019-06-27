/*
==========================================
Title: Portillo-solution-1.js
Author: codecademy.com
  Modified: Rita DeBraal
  Modified By: Wendy Portillo (Found and corrected errors)
Date: June 27, 2019
Description: Two parts create the secret
             message 'Hello World', second
             Iterate over smallNumbers array
             and divide by 100
==========================================
*/
// Load additional JavaScript file
var header = require("../header.js");


// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 5.4") + '\n');

// Start program

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', ' ', 'Whale',
                 'octopus', 'rabbit', 'lion', 'dog']

// Create the secretMessage array below
const secretMessage = animals.map(word => {
  /*
    Iterate over animals array pulling the first letter
    from each and print to console
  */
  return word[2]
})
// missing )

console.log(secretMessage.join(''))
console.log(' ')

const bigNumbers = [100, 200, 300, 400, 500]

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  /*
    Iterate over smallNumbers array and divide
    by 100 and print to console
  */
 return console.log(number * 100)
})
