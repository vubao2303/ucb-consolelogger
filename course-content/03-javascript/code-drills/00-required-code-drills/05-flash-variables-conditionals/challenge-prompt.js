// declare a variable named farm

let farm = ["Pig", "Cow", "Chicken", "Dog", "Horse", "Sheep"]

// set that farm variable to be an array with the elements
// Pig, Cow, Chicken, Dog, Horse, Sheep



// write an if statement that creates an alert that says "RWAR!" if the first element of farm is not "godzilla"
if (farm[0] !== "godzilla") {
  alert("Rwar")
}

// write another if statement that creates an alert "SCREECH!" if the last element of farm is "mothra"
if (farm[farm.length - 1] === "morthra") {
  alert("SCREECH")
}


// declare a variable named dog with a value of "Spot"
let dog = "Spot"

// declare 3 variables cat, car, city without assigning them values
let cat;
let car;
let city;

// assign the string "Farley" to cat
cat = "Farley"

// assign the string "San Francisco" to city
city = "San Francisco"

// assign the string "Prius" to car

car = "Prius"
// using string concatenation, console log out the sentence
// "See Spot run!" without explicitly using "Spot" inside the string.
console.log("See " + dog + " run")


// using string concatenation, console log out the sentence 
//"I drive Farley around San Francisco in my Prius" without explicityly 
//using "Farley", "San Francisco", and "Prius"
// Remember to use the variables we just declared!
console.log("I drive " + cat + " around " + city + "in my " + car)


// declare a variable budget and assign it a value of 5000
var budget = 5000

// declare a variable rentCost and assign it a value of 1500
var rentCost = 1500

// declare a variable utilitiesCost and assign it a value of 150
var utilitiesCost = 150

// declare a variable foodCost and assign it a value of 250
var foodCost = 250

// declare a variable transportationCost and assign it a value of 350
var transportationCost = 350

// declare a variable computerCost and assign it a value of 2000
var computerCost = 2000

// write an if statement that checks whether the sum of all our costs is within the budget.
// if it is within budget, console log out the total cost, otherwise, create an alert telling
// us the sum of all the costs.
var sum = rentCost + utilitiesCost + foodCost + transportationCost + computerCost;
if (sum <= budget) {
  console.log(sum)
}
else {
  alert("you don't have enough money")
}


// write an if statement that checks whether the rentCost is larger than  the sum of the utilitiesCost, foodCost, and transportationCost
var lifeSum = utilitiesCost + foodCost + transportationCost
var basicCost = rentCost + utilitiesCost
if (rentCost > lifeSum && computerCost > basicCost) {
  alert("computer cost is too high ")
}
else {
  alert("Rent is too high")
}
//
// and if computerCost is greater than the sum of rentCost and utilities cost
// if both those statements are true, then create an alert that says "Computer costs are too high!"
// else, create an alert that says "Rent is too high!"


