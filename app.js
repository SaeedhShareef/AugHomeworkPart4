// Start ECMAScript 6

// start explore differences between var and let

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// end explore differences between var and let

// start compare scope of the var and let keywords

function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
    let  i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
// end compare scope of the var and let keywords
// ES6: Declare a Read-Only Variable with the const KeywordPassed
function printManyTimes(str) {
    "use strict";
  
    // Only change code below this line
  
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");
//   END ES6: Declare a Read-Only Variable with the const KeywordPassed

// start mutating arrays with Const

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
s[0] = 2
s[1] = 5
s[2] = 7
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
// end mutating arrays with const

// start ES6: Explore Differences Between the var and let Keywords

let catName;
let quote;
function catTalk() {
  "use strict";
 
  catName = "Oliver";
  quote = catName + " says Meow!";
 
}
catTalk();
// end  ES6: Explore Differences Between the var and let Keywords





// start ES6: Prevent Object Mutation
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
Object.freeze(MATH_CONSTANTS)
 
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// end  ES6: Prevent Object Mutation



// start ES6: Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
  "use strict";
  return new Date();
};
 
const myFunc = () => {
  const myVar = "value";
  return myVar;
}

// end ES6: Use Arrow Functions to Write Concise Anonymous Functions



// start ES6: Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1 * arr2; {
  
}
 
console.log(myConcat([1, 2], [3, 4, 5]));
// doubles input value and returns it
const doubler = (item) => item * 2;
=========================
 
// the same function, without the argument parentheses
const doubler = item => item * 2;
=========================
 
// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;

// end ES6: Write Arrow Functions with Parameters


// start ES6: Set Default Parameters for Your Functions


// Only change code below this line
const increment = (number, value=1) => number + value;
// Only change code above this line
 
// end ES6: Set Default Parameters for Your Functions










// start ES6: Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
 
// end ES6: Use the Rest Parameter with Function Parameters

// start ES6: Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
 
arr2 = [...arr1];  // Change this line
 
console.log(arr2);
 
 
=========================
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
=========================
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

// end ES6: Use the Spread Operator to Evaluate Arrays In-Place


// start ES6: Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
 
// Only change code below this line
 
const {today} = HIGH_TEMPERATURES;
const {tomorrow} = HIGH_TEMPERATURES;
 
// Only change code above this line
 
const user = { name: 'John Doe', age: 34 };
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34


// end ES6: Use Destructuring Assignment to Extract Values from Objects


// start ES6: Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
 
// Only change code below this line
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
 
// Only change code above this line
 
// end ES6: Use Destructuring Assignment to Assign Variables from Objects


// start ES6: Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  today: { low: 64, high: 77 },
 
};
 
// Only change code below this line
  
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
 
 
// Only change code above this line
 
// end ES6: Use Destructuring Assignment to Assign Variables from Nested Objects


// start ES6: Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line
 
 [,,,,,a,,b] = [1, 2, 3, 4, 5, 6, 7, 8];
 
 console.log(a,b);
=======================
let a = 8, b = 6;
// Only change code below this line
 
 [a, b] = [b, a];
 
 console.log(a,b);

// end ES6: Use Destructuring Assignment to Assign Variables from Arrays




// start ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
 

// end ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements




//  start ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
 
// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
 
// Only change code above this line
 
//  end ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters



// start ES6: Create Strings using Template Literals
const result = {
 success: ["max-length", "no-amd", "prefer-arrow-functions"],
 failure: ["no-var", "var-on-top", "linebreak"],
 skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
 "use strict";
 
 // Only change code below this line
const resultDisplayArray = [];
 for (let i = 0; i < arr.length; i++) {
   resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
 }
 // Only change code above this line
 
 return resultDisplayArray;
}
 
const resultDisplayArray = makeList(result.failure);
 
// end ES6: Create Strings using Template Literals



// start ES6: Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
 "use strict";
 // Only change code below this line
 return {
   name,
   age,
   gender
 };
 // Only change code above this line
};

// end ES6: Write Concise Object Literal Declarations Using Object Property Shorthand




// start ES6: Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
 gear: 2,
 setGear(newGear) {
   this.gear = newGear;
 }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
 
// end ES6: Write Concise Declarative Functions with ES6



// start ES6: Use class Syntax to Define a Constructor Function
// Only change code below this line
class Vegetable {
 constructor (name) {
this.name = name;
}
}
// Only change code above this line
 
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
 
// end ES6: Use class Syntax to Define a Constructor Function

// start ES6: Use getters and setters to Control Access to an Object
// Only change code below this line
class Thermostat {
 constructor(temperature) {
   this.fahrenheit = temperature;
 }
 
 get temperature() {
   return (5/9 * (this.fahrenheit - 32))
 }
 
 set temperature(updatedTemp) {
   this.fahrenheit = updatedTemp
 }
 }
// Only change code above this line
 
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
 
// end ES6: Use getters and setters to Control Access to an Object



// start ES6: Create a Module Script
<html>
 <body>
   <!-- Only change code below this line -->
 
<script type="module" src="index.js"></script>
 
   <!-- Only change code above this line -->
 </body>
</html>
 
// end ES6: Create a Module Script


// start ES6: Use export to Share a Code Block
const uppercaseString = (string) => {
 return string.toUpperCase();
}
 
const lowercaseString = (string) => {
 return string.toLowerCase()
}
 
export { uppercaseString, lowercaseString };

// end ES6: Use export to Share a Code Block




// start ES6: Reuse JavaScript Code Using import
 import { uppercaseString, lowercaseString } from './string_functions.js';
// Only change code above this line
 
uppercaseString("hello");
lowercaseString("WORLD!");
// end ES6: Reuse JavaScript Code Using import

//  start ES6: Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js";
// Only change code above this line
 
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
 
// end ES6: Use * to Import Everything from a File


//  start ES6: Create an Export Fallback with export default
export default function subtract(x, y) {
 return x - y;
}
 
// end ES6: Create an Export Fallback with export default



// start ES6: Import a Default Export

import subtract from "./math_functions.js"; 
// Only change code above this line
 
subtract(7,4);
 

// end ES6: Import a Default Export




//  start ES6: Create a JavaScript Promise

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-javascript-promise

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const makeServerRequest = new Promise((resolve, reject) => {
 
});
console.log(Promise);

// end ES6: Create a JavaScript Promise


// start ES6: Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
 // responseFromServer represents a response from a server
 let responseFromServer;
  
 if(responseFromServer) { resolve("We got the data");
   // Change this line
 } else {  reject("Data not received");
   // Change this line
 }
});
 
// end ES6: Complete a Promise with resolve and reject



// start ES6: Handle a Fulfilled Promise with then

const makeServerRequest = new Promise((resolve, reject) => {
 // responseFromServer is set to true to represent a successful response from a server
 let responseFromServer = true;
  
 if(responseFromServer) {
   resolve("We got the data");
 } else { 
   reject("Data not received");
 }
});
 
makeServerRequest.then(result => {
console.log(result);
});

// end ES6: Handle a Rejected Promise with catch
// start ES6: Handle a Rejected Promise with catch

const makeServerRequest = new Promise((resolve, reject) => {
 // responseFromServer is set to false to represent an unsuccessful response from a server
 let responseFromServer = false;
  
 if(responseFromServer) {
   resolve("We got the data");
 } else { 
   reject("Data not received");
 }
});
 
makeServerRequest.then(result => {
 console.log(result);
});
 
makeServerRequest.catch(error => {
 console.log(error);
})

// end ES6: Handle a Rejected Promise with catch


