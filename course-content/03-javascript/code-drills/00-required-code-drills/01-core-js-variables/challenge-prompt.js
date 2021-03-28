//Variables
//the nouns of programming

//this is a comment 
//any code commented out is not run
//meaning that any code or text commented out is ignored.

/*
this is a multiline comment
You can comment out many lines at once.
For the most part you will see single line comments
but it is good to see this.
As in single line comments, any code contained within multi-line comments are not run -
meaning that any code commented out is ignored.
*/

// str=""
// += string 
// string[0]
// newstr += 
// // for string you can't change it 

// arr=[]
// push array
// arr[0] = 4

//Topic: strings

// // Create a variable named `subject` without giving it a value:
// // example: var hobby;
// var subject;

// // Assign a value of "Programmers" to the variable `subject`
// // example: hobby = "problem solving"

// var subject = "Programmers"

// // Create a variable `firstName` and assign it a value of an empty string.

// // example: var emptyString = "";
// var firstName = ""


// // Assign a value of "Ada" to the variable `firstName`

// firstName = "Ada"

// // Create a variable `lastName` and assign it a value of a string "Lovelace".

// var lastName = "Lovvelace"


// // Create a variable `fullName` and assign it a value of `firstName` and `lastName` concatenated together with a space between them.

// var fullName = firstName.concat(" ", lastName)
// // var fullName = firtName + " " + lastName

// console.log(fullName)
// // Create a variable `profession` and assign it a value of a string, "Computer Programmer".

// var profession = "Computer Programmer"
// // Create a variable `knownFor` and assign it a value of a string, "first computer programmer".

// var fistAlgorithm = "Analytical Engine"
// // Create a variable `firstAlgorithm` and assign it a value of a string, "Analytical Engine".

// // Create a variable `cityLocation` and assign it a value of a string, "London";
// var cityLocation = "Lodon"

// // Create a variable `countryLocation` and assign it a value of a string, "England";
// var countryLocation = "England"

// // Create a variable `nationality` and assign it a value of a string, "British";
// var nationality = "British "


// //Topic: integers

// // Create a variable `birthYear` and assign it a value of the integer, 1815.
// var birthYear = 1815


// // Create a variable `deathYear` and assign it a value of the integer, 1852.
// var deathYear = 1852


// // Create a variable `ageAtPassing` and assign it to be the difference between `deathYear` and `birthYear`.
// var ageAtPassing = deathYear - birthYear

// // Create a variable `yearOfPublish` and assign it a value of the integer, 1842.
// var yearOfPublish = 1842

// // Create a variable `ageAtYearOfPublish` and assign it to be the difference between `yearOfPublish` and `birthYear`.
// ageAtYearofPublish = yearOfPublish - birthYear


// //Topic: console log

// //console log: "First Name: Ada" by concatenating the `firstName` variable to the back of a string of "First Name: "
// console.log("First Name: " + firstName)
// console.log("Last Name: " + lastName, "Profession:" + profession)

// //console log: "Last Name: Lovelace" by concatenating the `lastName` variable to the back of a string of "Last Name: "


// //console log: "Profession: Computer Programmer" by concatenating the `profession` variable to the back of a string of "Profession: "


// //console log: "BirthYear: 1815" by concatenating the `birthYear` variable to the back of a string of "BirthYear: "
// console.log("Birthyear: " + birthYear)


// //Topic: Concat Values

// // Create a variable `statementOne` and assign it a value of a string:
// // "Programmers: Ada Lovelace is a British Computer Programmer born in 1815."
// //
// // Use the `subject`, `fullName`, `nationality`, `profession`, and `birthYear` variables instead of hard coding in the full string
// // much like you did for the console logs and `fullName`

// var statementOne = "";
// var knownFor = "the first computer programmer"
// var stamentTwo = "she is comonly refeered to as "
// console.log(stamentTwo.concat("", knownFor))
// Create a variable `statementTwo` and assign it a value of a string:
// "She is commonly referred to as the first computer programmer"
//
// Use the `knownFor` variable instead of hard coding in the full string
// much like you did for the console logs and `fullName`


// Create a variable `statementThree` and assign it a value of a string:
// "In 1842 she published the first Algorithm, the Analytical Engine, at the age of 27."
//
// Use the `yearOfPublish`, `firstAlgorithm`, and `ageAtYearOfPublish` variables instead of hard coding in the full string
// much like you did for the console logs and `fullName`


// Create a variable `statementFour` and assign it a value of a string:
// "She was a British Citizen who lived in London, England until her passing in 1852 at the age of 37.
//
// Use the `nationality`, `cityLocation`, `countryLocation`, and `ageAtPassing` variables instead of hard coding in the full string
// much like you did for the console logs and `fullName`



//Topic: console.log()

//console log statementOne


//console log statementTwo


//console log statementThree


//console log statementFour




function sum(n) {
  var sume = 0;
  for (let i = 0; i <= n; i++) {
    sume += i;
  }
  var sume = 0;
}
sum(3);
console.log(sum(3))


var sumTwo 
function sumTwo(n){
  sum = ((n / 2) * n) + n
  return sum
}
  


var arr = [1, 2, 3];
var sun = 0;
function sumAll(arr) {
  for (i = 0; i < arr.length; i++) {
    sun += arr[i];

  }
  return sun
}
console.log(sumAll(arr))

// function sayHello() {
//   alert("hello");
// }
// console.log(sayHello())


 //1 + 2 +3 = 6


