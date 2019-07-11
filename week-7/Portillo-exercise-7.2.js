/*
============================================
 Title:  Constructor Function-7.2.js
 Modified By: Wendy Portillo
 Date:   July 10, 2019
 Description: Constructor Functions
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");


// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 6.2") + '\n');

// Start program


function Employee(id, firstName, lastName, title ) {

  this.id = id;

  this.firstName = firstName;

  this.lastName = lastName;

  this.title = title;

}

var Employees =[ new Employee(1, 1234, "Lucky", "Charm", "Leprechaun"),
  new Employee(2, 5678, "Tom", "Hanks", "Actor"),
  new Employee(3, 91011, "Mary", "Jane", "Singer"),
  new Employee(4, 1213, "Lisa", "Simpson", "Student"),
  new Employee(5, 1415, "Mona", "Lisa", "Famous Person")]

  for(var i=0; i<Employees.length;i++){
    console.log(`${Employees[i].id} ${Employees[i].firstName} ${Employees[i].lastName} ${Employees[i].title}`)
  }
