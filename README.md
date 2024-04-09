<pre>


   ________               /\       ____. _________      _________      .__                  .__  .__        
  /   __   \___  ___     / /      |    |/   _____/     /   _____/ ____ |  |__   ____   ____ |  | |__| ____  
  \____    /\  \/  /    / /       |    |\_____  \      \_____  \_/ ___\|  |  \ /  _ \ /  _ \|  | |  |/    \ 
     /    /  >    <    / /    /\__|    |/        \     /        \  \___|   Y  (  <_> |  <_> )  |_|  |   |  \
    /____/  /__/\_ \  / /     \________/_______  /    /_______  /\___  >___|  /\____/ \____/|____/__|___|  /
                  \/  \/                       \/             \/     \/     \/                           \/ 

 ------------------------------------------ [ Javascript Core Methods / Functions    ] --------------------------------------------------

xhr.open: Initializes a new request (or re-initializes an existing one) in an XMLHttpRequest object with a specified method and URL.
xhr.send: Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.
fetch: A modern interface that allows you to make network requests similar to XMLHttpRequest. It returns promises and is more powerful and flexible.
fetch.header: Used to read and modify the headers of a fetch request.
fetch.url: The URL of the request made using the fetch API.
fetch.body: The body of the request made using the fetch API, used to specify the data to be sent to the server.
xhr.setRequestHeader.name: Specifies the name of an HTTP request header to be set before sending a request with XMLHttpRequest.
xhr.setRequestHeader.value: Specifies the value of an HTTP request header to be set with setRequestHeader.
document.domain: Gets or sets the domain of the current document, used for same-origin policy.
history.pushState: Adds an entry to the browser's session history stack, allowing you to change the URL without reloading the page.
history.replaceState: Similar to pushState but replaces the current entry in the session history stack.
xhr.setRequestHeader: Sets the value of an HTTP request header when using XMLHttpRequest.
websocket: A protocol providing full-duplex communication channels over a single TCP connection, used for real-time data transfer between a client and a server.
anchor.href: The URL (href attribute) of an <a> anchor element.
JSON.parse: Parses a JSON string, constructing the JavaScript value or object described by the string.
document.cookie: Allows you to read, write, and delete the cookies associated with the document.
localStorage.setItem.name: Sets the name of an item in the browser's local storage.
localStorage.setItem.value: Sets the value of an item in the browser's local storage.
sessionStorage.setItem.name: Sets the name of an item in the browser's session storage.
sessionStorage.setItem.value: Sets the value of an item in the browser's session storage.
window.name: Gets or sets the name of the window.
location.pathname: Returns the path segment of the URL.
location.protocol: Returns the protocol scheme of the URL (e.g., "http:" or "https:").
location.host: Returns the host name and port number of a URL.
location.hostname: Returns the domain name of the URL.
location.hash: Returns the anchor part of a URL, including the hash sign (#).
location.search: Returns the query string part of a URL, including the question mark (?).

--------------------------------------------------------------------------------------------------------------------------------------------------------

<!-- <img width="419" alt="image" src="https://github.com/djsubstance/Essential-JS-or-PHP-one-liners/assets/20057689/a944fd34-1e76-4001-8962-b97032901427"> -->

Essential one liners in mostly JS:
jQuery shortcut: $(function(){ ... }); is shorthand for $(document).ready(function(){ ... });

  
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

------ One more topic for now -----
   
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ 
     ▐░▌     ▐░▌▐░▌    ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          
     ▐░▌     ▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ 
     ▐░▌     ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
     ▐░▌     ▐░▌   ▐░▌ ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀▀▀ 
     ▐░▌     ▐░▌    ▐░▌▐░▌          ▐░▌▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌          
 ▄▄▄▄█░█▄▄▄▄ ▐░▌     ▐░▐░▌ ▄▄▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀ 
                                                                                                        


██╗ ███████╗██████╗  █████╗ ███╗   ███╗███████╗███████╗
██║ ██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝██╔════╝
██║ █████╗  ██████╔╝███████║██╔████╔██║█████╗  ███████╗
██║ ██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ╚════██║
██║ ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗███████║
╚═╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝
                     INSECURE IFRAMES                               
Great for attacks: 

   <iframe name="result" allow="midi; geolocation; microphone; camera; display-capture; encrypted-media; clipboard-read; clipboard-write; notifications; payment-handler; persistent-storage; background-sync; ambient-light-sensor; accessibility-events;"  sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activiation allow-downloads" allowfullscreen="" allowpaymentrequest="" frameborder=0 src="https://target.com">

      Note: do not ever use this in production
       
My recommendation is to test your apps thoroughly and consider the impact of security measures on functionality and performance.
Also, do not overuse shared hosting and forget what you have exposed on Github or on your own domains

 - substance
 peace and beats
 
</pre>
