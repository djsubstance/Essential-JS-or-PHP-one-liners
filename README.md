
<!-- <img width="419" alt="image" src="https://github.com/djsubstance/Essential-JS-or-PHP-one-liners/assets/20057689/a944fd34-1e76-4001-8962-b97032901427"> -->

Essential one liners in mostly JS:

  
Example:
Create Object and set values in it for later pollution testing:
var params = {
  s: '1197757129',
  t: time,
  err_url: document.URL,
  err: '500',
  test: '-',
  ats_host: 'ats-ncache-fp--production-ne1-d9d7c7969-xpncr',
  rid: '-',
  message: 'Could not process this request'
};

------------
 setInterval(() => document.querySelector('button.ant-btn.load-more.ant-btn-primary')?.click(), 100);

 


[ Note ]
In Javascript, the 'window' interface of the DOM
 - is home to a variety of
 -   functions,
 -   namespaces,
 -   objects,
 -   constructors
 -     which are not necessarily directly associated with the concept of a user interface 'window'
 - [Keep in mind] the Window interface is a suitable place to include these items that need to be globally available.
**
the 'document.defaultView' object in the DOM: (is read-only)
   - returns the window object associated with a document
   or
   - null if none is available

In addition, every kind of DOM node is represented by an interface based on Node. 
 * Attr
 * CharacterData
    *   (which Text,
    *    Comment,
    *    CDATASection 
    *    ProcessingInstruction 
    *    DocumentType
                            are all based on


[*] Weird console error msgs:
 * Attestation check for Attribution Reporting on https://ad.doubleclick.net failed

   Definition:
   Attestation check: This is a security measure or process used to verify that a piece of data,
    a digital certificate, or a report is genuine and unaltered. In cybersecurity and digital
    forensics, attestation is often used to ensure that a system or a set of data has not been tampered with.

    This message in console relates to a process involved in verifying the integrity or authenticity of a 
     digital attribution report associated with advertising, specifically in the context of ad.doubleclick.net, 
      which is a domain owned by Google used for serving digital advertisements.


Attribution Reporting: This refers to the practice of identifying how users interact with advertising content and attributing actions, 
conversions, or events (like clicks or purchases) back to specific ads. Attribution reporting is crucial for advertisers as it helps
them understand the effectiveness of their ad campaigns across different platforms and media.

The error implies that there was an attempt to verify the authenticity or integrity of attribution reporting data
related to ads served from or interactions with ad.doubleclick.net, but this verification process did not succeed.  

Possible Reasons:
Data Tampering: The data might have been altered or tampered with, which could indicate a security issue or fraudulent activity
Certification Issues: The digital certificates or credentials used in the attestation process might be expired, invalid, or not configured.
Technical Errors: Technical errors in the attestation process, including issues with how the check was performed
with the reporting data's format or transmission.
 
--------------------------------------------------------------------------------------------------------------------------------
Various Key One Liners for enumeration and prototype exploitation:

Safe Object Merging
Avoid directly merging user-controlled objects into your application or system objects. 
Use a secure function that ignores prototype properties.

function safeMerge(target, ...sources) {  sources.forEach(source => {
    Object.keys(source).forEach(key => { if (!key.startsWith('__')) {
        target[key] = source[key];}    });  }); return target; }

// Example :
const userOptions = JSON.parse('{"__proto__": {"polluted": "true"}}');
safeMerge({}, userOptions);
console.log(Object.prototype.polluted); // Should log `undefined`


[*] Validate and Sanitize Input

function isValidKey(key) {   // Add more validation logic as needed
  return !key.startsWith('__');
}

function safelySetProperty(obj, key, value) {
  if (isValidKey(key)) {    obj[key] = value; } }

// Example:
safelySetProperty({}, '__proto__.polluted', 'true');
console.log(Object.prototype.polluted); // Should log `undefined`

[*] Freezing Object Prototype
Freeze Object.prototype early in your application lifecycle to prevent modifications.
Note: This is a drastic measure and might not be compatible with all libraries or frameworks.

Object.freeze(Object.prototype);

// Any attempts to modify Object.prototype should now throw an error
[*] Using Maps for Dynamic Key-Value Pairs
Consider using Map instead of plain objects for dynamic key-value stores to avoid prototype pollution risks.

let safeStore = new Map();
safeStore.set('key', 'value');
console.log(safeStore.get('key')); // 'value'

[*] Deep Cloning Objects without Prototypes
When cloning objects, ensure the clone does not inherit the prototype of the original. This prevents prototype pollution through cloned objects.

function deepCloneWithoutPrototype(obj) {   return JSON.parse(JSON.stringify(obj));  }
const newObj = deepCloneWithoutPrototype(userInput);

[*] Object.create(null) for Dictionary Objects
Create objects with no prototype for cases where you need a pure dictionary without inherited properties.

let safeDict = Object.create(null);
safeDict.key = 'value';
console.log(safeDict.hasOwnProperty); // Should log `undefined`

[*] Prevent Extension of Critical Objects
Use Object.preventExtensions, Object.seal, or Object.freeze to make critical objects immutable, depending on your needs.

let criticalObject = { important: true };
Object.freeze(criticalObject);

// Attempts to modify criticalObject now throw an error or fail silently in non-strict mode

[*] Manual Prototype Chain Checking
For library authors, ensure your functions don't trust the prototype chain implicitly.

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

[*] Auditing and Updating Dependencies
Regularly audit your dependencies for known vulnerabilities, including prototype pollution, and update them as necessary.

// Use npm or yarn commands to check and update dependencies
// npm audit
// npm update

[*] Using a Security Linter
Integrate a security-focused linter into your development workflow to catch potential vulnerabilities early.

// ESLint with security plugin can help identify risky patterns
// eslint-plugin-security

Remember, the effectiveness of these techniques depends on the context in which they're applied.
Always test your applications thoroughly and consider the impact of security measures on functionality and performance.

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
If you want to inspect objects at a certain point in your code's execution in detail, you can use the debugger; statement to pause execution when the developer tools are open:

let obj = { hidden: 'value' };
debugger; // Execution will pause here if the developer tools are open, allowing for in-depth i
