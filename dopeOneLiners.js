Altering Object Behavior: 
[*] Polluting the body prototype to change a default behavior across all instances.
Object.prototype.body = { loggedIn: true };

Default Value Override: Setting a default property on body that affects all objects lacking that property.
Object.prototype.body = { accessLevel: 'admin' };

Function Hijacking: Adding a function to the body prototype that could be executed unexpectedly.
Object.prototype.body = { execute: () => console.log('Prototype polluted') };

Type Confusion: Causing confusion by adding unexpected properties to body.
Object.prototype.body = { userType: 'superuser' };

Unintended Method Execution: Inserting a method that could be executed unintentionally on objects.
Object.prototype.body = { init: () => alert('Compromised!') };

Prototype Chain Pollution: Polluting the prototype chain to insert a harmful method.
Object.prototype.body = { destroy: () => console.log('Destroying...') };

Access Control Bypass: Using pollution to bypass access controls by setting unauthorized properties.
Object.prototype.body = { authentication: () => true };

Denial of Service (DoS): Introducing a property that could lead to application crash or slowdown.
Object.prototype.body = { crash: () => { while(true) {} } };

Data Leakage: Injecting a property that could lead to unintended data exposure.
Object.prototype.body = { sensitiveData: 'leaked_info' };

Cross-Site Scripting (XSS): Embedding a script in the prototype that gets executed on the client-side.
Object.prototype.body = { script: '<script>alert("XSS via prototype pollution")</script>' };

These examples are highly simplified and serve to illustrate the concept of prototype pollution, 
  where the prototype of a base object (Object.prototype) is modified to include malicious properties or methods.
  In real-world scenarios, exploiting prototype pollution vulnerabilities can be complex and depends on specific 
  application behaviors and configurations. =

Creating one-liners to fuzz random objects or methods in a controlled environment like your lab can be an effective way to identify potential vulnerabilities. 
    These examples demonstrate how you can target various aspects of a system or application to test its resilience against unexpected input or actions.
    Each script or command assumes a context where dynamic execution is possible, such as a browser console for web applications or a scripting environment for software applications.

Web Application Context (JavaScript in Browser Console):

[*] Fuzz DOM Elements' Properties:
Document.querySelectorAll('*').forEach(el => el.style.color = '#' + Math.random().toString(16).slice(-6));

[*] Modify Input Values Randomly:
document.querySelectorAll('input').forEach(input => input.value = Math.random().toString(36).substring(2));

[*] Random Click on Page Elements:
const allElements = document.querySelectorAll('*'); allElements[Math.floor(Math.random() * allElements.length)].click();

[*] Inject Random Scripts into Head:
const script = document.createElement('script'); script.innerText = `console.log("${Math.random().toString(36).substring(2)}")`; document.head.appendChild(script);

[*] Overwrite Random Methods of Window Object:
Object.keys(window).forEach(key => typeof window[key] === 'function' && (window[key] = () => console.log('Fuzzed!')));

[*] Toggle Random Styles on Body:
document.body.style = `background-color: #${Math.floor(Math.random()*16777215).toString(16)};`;

[*] Randomize Images Source:
document.querySelectorAll('img').forEach(img => img.src = `https://via.placeholder.com/${Math.floor(Math.random() * 500)}`);

[*] Fuzz EventListeners on Random Element:
document.querySelectorAll('*')[Math.floor(Math.random() * document.querySelectorAll('*').length)].addEventListener('click', () => alert('Fuzzed!'));

[*] Delete Random Elements from the DOM:
const elements = document.body.children; elements[Math.floor(Math.random() * elements.length)].remove();

[*] Set Random Values for All Cookies:
document.cookie.split(';').forEach(cookie => document.cookie = `${cookie.split('=')[0]}=${Math.random().toString(36)}`);




General Software Application Context (Pseudo Commands):

configFiles[randomIndex].write(randomString)
Invoke Methods with Random Arguments:

obj.methods[randomIndex](randomArg)

[*] Randomly Delete Files in a Directory:
directory.files[randomIndex].delete()

[*] Corrupt Data Structures by Random Insertions:
dataStructure.insertAt(randomIndex, randomValue)

[*] Randomize Network Requests:
networkRequestTo(randomEndpoint, { data: randomData })
