/*
============================================
 Title:  Discussion Board-6.1.js
 Author: TutorialsPoint(tutorialspoint.com)
 Modified By: Wendy Portillo
 Date:   July 2, 2019
 Description: Objects and Built-In Objects
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");


// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 6.1") + '\n');

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
  ,
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
    rating: 10'
  }
]
composers.forEach(function(composer){
  console.log(composer)
})


www.tutorialspoint.com/javascript/javascript_objects.htm

var book = new Object()   // Create the object
         book.subject = "Perl";     // Assign properties to the object
         book.author  = "Mohtashim";
