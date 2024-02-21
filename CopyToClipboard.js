
// Create button on DOM when clicked will copy all session cookie/data to clipboard
document.body.innerHTML += '<button id="copyButton">Copy to Clipboard</button>'; document.getElementById('copyButton').onclick = function() 
{ navigator.clipboard.writeText(document.cookie).then(() => console.log('Copied to clipboard successfully!'), (err) => console.error('Failed to copy text:', err)); };

