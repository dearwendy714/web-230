/*
============================================
 Title:  Discussion Board-6.4.js
 Modified By: Wendy Portillo
 Date:   July 2, 2019
 Description: Nested Object Literals
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");


// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 6.4") + '\n');

// Start program

var header = require('../header.js');

/*
 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

var ticket = {
    // ticket properties
    id : "303",
    name : "Wendy",
    dateCreated : new Date(),
    priority : "ASAP",
    personId : "411",

    person: {
        // person properties
      id : "411",
      firstName : "Wendy",
      lastName : "Goods",
      jobTitle : "Police Officer",
    }
};

console.log(ticket.person.firstName + " " + ticket.person.lastName + "\nAssignment 6.4\n" +
ticket.dateCreated  + "\n\nTicket " + ticket.id + " was created on " +
ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " +
ticket.person.lastName + " (" + ticket.person.jobTitle + ")." )
// end program
