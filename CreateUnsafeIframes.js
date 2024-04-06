Description: create non-sandbox'd iframes that with the proper (or improper) CORS/CSP will allow injection and other fun stuff
  
To allow content from the current window to be sent into an <iframe>, such as through JavaScript interactions, 
  you do not need to specify anything extra in the iframe tag itself beyond what you already have.
  However, you must ensure that both the parent page and the <iframe> content are served over HTTPS and that you have
  control over or access to both the parent and the embedded content's source code for scripting interactions.

Cross-origin resource sharing (CORS) policies and the Same-Origin Policy will be your primary considerations here, 
  especially if the <iframe> content (https://<snip>.com in your snippet) is served from a different origin than the parent page.

Here are some methods to allow interactions and send data into the <iframe>:

1. JavaScript postMessage
The window.postMessage method provides a way to safely enable cross-origin communication between Window objects; 
e.g., between a page and a pop-up that it spawned, or between a page and an <iframe> embedded within it.

Parent to <iframe>: To send data from the parent to the <iframe>, you can use:

var iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage('Hello there!', 'https://cloud.google.com');

Handling message in <iframe>: 
  Inside the <iframe> (thus, in the script of https://target.com), you'd listen for the message like so:

window.addEventListener('message', (event) => {
  if (event.origin !== "https://parent-origin.com") // Replace with the parent page's origin
    return;

  console.log('Received message:', event.data);
  // Process the event.data as needed
});

2. Targeting the <iframe> for Form Submission

If your goal is to send data into the <iframe> via form inputs or similar, you can target the <iframe> 
  in a form's target attribute
  assuming you're dealing with the same origin or you have control over the embedded page to handle CORS:

--HTML
<form target="iframeName" action="https://example.com/target-endpoint" method="post">
  <input type="text" name="message" value="Hello!">
  <input type="submit" value="Send">
</form>

<iframe name="iframeName" src="https://target.com" width="0" height="0"></iframe> <!-- height=0 width=0 is good for hidden iframes -->

3. Direct Script Access
Direct DOM manipulation or script access is only possible if the parent and the <iframe> share the same origin. 
  If this is the case, you can directly access and manipulate the <iframe>'s content via JavaScript:

var iframeDocument = document.querySelector('iframe').contentDocument;
iframeDocument.querySelector('selector').innerHTML = 'New content';

Security Considerations:
The postMessage approach is the most versatile and secure for cross-origin communication.
Ensure you always validate the origin in any message event handlers to prevent security vulnerabilities.
Direct script access and form targeting methods require careful consideration of CORS and the Same-Origin Policy to function as intended.
By following these methods and adhering to security best practices, you can facilitate communication
  from the current window into an <iframe>, regardless of whether you're working within the same origin 
    or across origins, always considering the limitations and protections provided by modern web security models.

    
