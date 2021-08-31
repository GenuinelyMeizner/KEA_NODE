// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("My firstname is", firstName, "and my lastname is", lastName); //commas are used
console.log(`My firstname is ${firstName} and my lastname is ${lastName}`); //dollars are used

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

console.log(parseInt(year) + number); //Parses as 102 stops before a, typecasting
console.log(Number(year) + number); //NaN, only absolute numbers, breaks because of 'a', typecasting

// --------------------------------------
