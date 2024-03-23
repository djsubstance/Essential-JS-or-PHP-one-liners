// Watcher.js


If you're looking at exploring objects that are not directly visible in your code or hidden properties within objects, \

Accessing Hidden or Non-enumerable Properties
JavaScript objects can have non-enumerable properties that don't show up in standard loops like for...in or methods like Object.keys(). To display these:


const obj = Object.create({}, {
  hiddenProp: {
    value: 'This is hidden',
    enumerable: false
  }
});

console.log(Object.getOwnPropertyNames(obj)); // Displays all properties, including non-enumerable ones
console.log(Object.getOwnPropertyDescriptor(obj, 'hiddenProp')); // Get details of a specific hidden property

Viewing Prototype Chain Properties
Objects in JavaScript inherit properties and methods from their prototypes. To see properties up the prototype chain:


let example = {};
console.log(Object.getPrototypeOf(example)); // Displays the prototype of `example`

// To see all properties, including those on the prototype chain:
function getAllProperties(obj) {
  let props = [];
  do {
    props = props.concat(Object.getOwnPropertyNames(obj));
  } while (obj = Object.getPrototypeOf(obj));
  return props;
}

console.log(getAllProperties(example));
Debugging Tools in Browsers

 Modern web browsers have developer tools with features to inspect objects deeply, 
 including properties that are not immediately visible in the console output:


Using a Debugger Statement
If you want to inspect objects at a certain point in your code's execution in detail,
  you can use the debugger; statement to pause execution when the developer tools are open:

let obj = { hidden: 'value' };
debugger; // Execution will pause here if the developer tools are open, allowing for in-depth i
