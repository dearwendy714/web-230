/*
============================================
; Title:  Assignment 6.1
; Author: Joshua Hughes
; Modified By: Wendy Portillo (Found and corrected errors)
; Date:   2 July 2019
; Description: A simple program to demonstrate
;			   how to create objects and assign
;			   properties to the object. This
;			   program has multiple errors that need
;			   to be corrected before it will run.
;===========================================
*/

// Load additional JavaScript file
var header = require("../header.js");

// Output Header Display
console.log(header.display("Wendy", "Portillo", "Discussion Board 6-solution1") + "\n");

// Start program

//global variable definitions


//object  using new
var person = new Object();
person.firstName = "Josh";
person.LastName = "Hughes";
person.emailAddress = "Test123@yahoo.com";
person.phone = "1234567890";

//object using prototype
var course = Object.create(Object.prototype);
course.title = "Course 101- learning courses";
course.startdate = "3/15/2020";
course.credits = "4";

//object using object literal
var student = [
  gradeLevel = "Sophomore",
  graduationDate = new Date(2020,07,15).toDateString(),//August 15, 2020
  personalInfo = person, // input person object
  classes = course,//input course object
]

//converts objects into arrays for parsing
const studentEntries = Object.entries(student);
const personEntries = Object.entries(person);
const courseEntries = Object.entries(course);

//output //change incorrect "for each" into "for of" also change the closing )
for (var [property, value] of (studentEntries)) {
  if (property == "personalInfo") {
    console.log("person:");

    //loops through person array object
    for (var [property, value] of personEntries){
      console.log("    "+property + " : " +value )
    }
  }

  //loops through course array object
  else if (property == "classes") {
    console.log("course:");
    for (var [property, value] of courseEntries){
      console.log("    "+property + " : " +value )
    }
  }
  else{
    console.log(property + " : " + value);
  }
}

/*
; Expected output:
;===========================================
;gradeLevel : Sophomore
;graduationDate : Sat Aug 15 2020
;person:
;    firstName : Josh
;    LastName : Hughes
;    emailAddress : Test123@yahoo.com
;    phone : 1234567890
;course:
;    title : Course 101- learning courses
;    startdate : 3/15/2020
;    credits : 4
;===========================================
*/
