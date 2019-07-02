/*
============================================
 Title:  Discussion Board-6.2.js
 Modified By: Wendy Portillo
 Date:   July 2, 2019
 Description: Demonstrates how to create a try/catch/finally block
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");


// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 6.2") + '\n');

// Start program

try {
  // variables
  var arr = [0, 1, 2, 3]
  var index = 4

  // if statementif
  if (index > 3) throw 'IndexOutOfRangeException'

  // output
  console.log(arr[index])
} catch (err) {
  console.log('Catch clause: ' + err)
} finally {
  console.log('Finally clause reached...')
}
