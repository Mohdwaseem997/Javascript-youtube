"use strict"; //treat all JS code as newer version

//alert(3 + 4) // we are using node.js so we will not see the alert in the terminal. It is used in browsers to show a pop-up message.

//console.log(3 +
//      4) // code readability is important. So break when needed but not like this. It is better to break after the operator for better readability.

let name = "John" 
let age = 30 
let isApproved = true 
let firstName = undefined 
let selectedColor = null 

// number => has a range of values from -2^53 to 2^53. It can be used for both integers and floating point numbers. It is a primitive data type in JavaScript.
// string => is a sequence of characters used to represent text. It can be defined using single quotes '', double quotes "", or backticks ``. It is a primitive data type in JavaScript.
// boolean => is a data type that can have one of two values: true or false. It is used to represent logical values and is a primitive data type in JavaScript.
// undefined => is a data type that represents the absence of a value. It is the default value of uninitialized variables and is a primitive data type in JavaScript.
// null => is a data type that represents the intentional absence of any object value. It is used to indicate that a variable has no value and is a primitive data type in JavaScript.
// symbol => is a data type that represents a unique and immutable value. It is often used as an identifier for object properties and is a primitive data type in JavaScript.

//objects => are a collection of key-value pairs.null is an object They can be used to store and organize data in a structured way. Objects are a non-primitive data type in JavaScript.

// returns "object" because null is considered an object in JavaScript. However, it is a primitive data type that represents the intentional absence of any object value.

console.log(typeof null);
