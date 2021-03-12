// without rest
function add(x, y) {
  return x + y;
}
console.log(add(1, 2, 3, 4, 5)); // => 3

// 1. rest
function add(...nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  return sum;
}

add(1); // => 1
add(3, 3); // => 6
add(1, 1, 4, 5); // => 11

// 2. 
function howManyArgs(...args) {
  return `You passed ${args.length} arguments.`; // point out the template literal
}

console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.
// ["argument!", null, ["one", 2, "three"], 4]

function saySomething(arg1, arg2, ...allOther){
  //a rest paramter has to be the last argument in params
  var one = arg1;
  var two = arg2;
  var restArray = allOther;
}

// 1. spread
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]


const firstArr = [{name: "Farley"}, {name: "Asher"}, {name: "Mr, Snugggles"}];

const secondArr = [...firstArr];

secondArr[0].nickname = "Furball";

console.log("firstArr", firstArr);
// [
//   { name: 'Farley', nickname: 'Furball' },
//   { name: 'Asher' },
//   { name: 'Mr, Snugggles' }


// ]



console.log("secondArr", secondArr);
// [
//   { name: 'Farley', nickname: 'Furball' },
//   { name: 'Asher' },
//   { name: 'Mr, Snugggles' },

// ]

secondArr.push({name: "Jerome"});
console.log("secondArr", secondArr);

console.log("firstArr[2] === secondArr[2]", firstArr[2] === secondArr[2])



const objectOne = {hello: "Farley"}
const objectTwo = {goodbye: "Puppy"}
const objectThree = {...objectOne, ...objectTwo, eat: "bacon"}
console.log(objectThree) // Object { hello: "Farley", goodbye: "Puppy", eat: "bacon" }
const objectFour = {...objectOne, ...objectTwo, eat: () => {console.log("🥓".repeat(5))}}
// objectFour {hello: "Farley", goodbye: "Puppy", eat: () => {console.log("🥓".repeat(5)}
objectFour.laugh() // 🥓🥓🥓🥓🥓

const objectFive = {...objectFour, hello: "World"}

console.log(objectFive);//{hello: "World", goodbye: "Puppy", eat: ƒ}

const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

const cardedMoviePatrons = moviePatrons.map(patron => {
  // Copy the object being iterated over
  //Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const pObj = { ...patron };
  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
});
console.log("**********")

console.log("moviePatrons", moviePatrons)
console.log("cardedMoviePatrons", cardedMoviePatrons)
console.log("moviePatrons", moviePatrons)

console.log("**********")


const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];


const cardedMoviePatronsMutated = moviePatrons.map(patron => {
  if (patron.age >= 17) {
    patron.canWatchRatedR = true;
  } else {
    patron.canWatchRatedR = false;
  }
  return patron;
});

console.log("cardedMoviePatronsMutated", cardedMoviePatronsMutated)
console.log("moviePatrons", moviePatrons)
