/*
============================================
 Title:  Exercise-5.4.js
 Author: Wendy Portillo
 Date:   June 27, 2019
 Description: Object Collections
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");


// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 5.4") + '\n');

// Start program
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
    rating: "9"
  },
  {
    firstName: "Richard",
    lastName: "Wagner ",
    genre: "Classic",
    rating: "8"
  },
  {
    firstName: "Wolfgang",
    lastName: "Amadeus Mozart",
    genre: "Classic",
    rating: "7"
  },
  {
    firstName: "Johannes",
    lastName: "Brahms",
    genre: "Classic",
    rating: "6"
  }
]

console.log("-- COMPOSER BY RATING --")

var Rating = composers.map(function(composer){
  return "Rating: " + composer.rating + "\nComposer: " + composer.lastName + "\n"
})

Rating.forEach(function(composer){
console.log(composer)
});

console.log("-- COMPOSER BY GENRE --")


var genre = composers.map(function(composer){
  return "Genre: " + composer.genre + "\nComposer: " + composer.lastName + "\n"
})

genre.forEach(function(composer){
console.log(composer)
});

