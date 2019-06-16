/*
============================================
; Title:  Portillo-exercise-3.3.js
; Author: Wendy Portillo
; Date:   13 June 2019
; Description: A program on how to create a
;			   switch statement in JavaScript.
;===========================================
*/



var header = require("../header.js");

// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 3.3") + '\n');

// Start program


let eventKeyCode = 13

if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}

switch (eventKeyCode) {

  case 13:
  console.log('The enter key was pressed.')  //some results
  break;

  case 16:
  console.log('The shift key was pressed.')  //some results
  break;

  case 32:
  console.log('The space bar key was pressed.')  //some results
  break;

  case 8:
  console.log('The backspace / delete key was pressed.')  //some results
  break;

  default:
  console.log('Unrecognized key.') //some results
  break;

}
