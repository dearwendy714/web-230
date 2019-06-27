/*
============================================
 Title:  Exercise-5.3.js
 Author: Wendy Portillo
 Date:   June 27, 2019
 Description: Object Collections
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");


// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 5.3") + '\n');

// Start program
// Array like object containing composers
var composers = [
	{
    firstName: "Ludwig",
    lastName: "van Beethoven",
    genre: "Classic",
    rating: "10"
  },
  {
    firstName: "Johann",
    lastName: "Sebastian Bach",
    genre: "Classic",
    rating: "10"
  },
  {
    firstName: "Richard",
    lastName: "Wagner ",
    genre: "Classic",
    rating: "10"
  },
  {
    firstName: "Wolfgang",
    lastName: "Amadeus Mozart",
    genre: "Classic",
    rating: "10"
  },
  {
    firstName: "Johannes",
    lastName: "Brahms",
    genre: "Classic",
    rating: "10"
  }
]
composers.forEach(function(composer){
  console.log(composer)
})
