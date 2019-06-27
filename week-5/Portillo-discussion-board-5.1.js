/*
============================================
 Title:  Discussion Board-5.1.js
 Author: Mozilla (developer.mozilla.org)
 Modified By: Wendy Portillo
 Date:   June 27, 2019
 Description: Simple program on how to use
       arrays and operators.
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");


// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 5.1") + '\n');

// Start program

// Create a map

var sayings = new Map()
sayings.set('dog', 'woof');
sayings.set('cat, 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.dele('dog');
sayings.has('dog'); // false

fr (var [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0


// Set Object

var mySet = new Set();
mySet.add(1);
mySet.add(some text');
myset.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"

