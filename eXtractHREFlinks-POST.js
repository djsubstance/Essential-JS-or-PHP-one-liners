var CurrentLinks = Array.from(document.querySelectorAll('a[href^="http://"], a[href^="https://"]'))
    .map(link => link.href)
    .map(url => {
        try {
            return new URL(url).href;  // Normalize URL
        } catch (e) {
            return null;  // Ignore invalid URLs
        }
    })
    .filter(url => url !== null);  // Remove invalid URLs

// Convert to JSON
var jsonString = JSON.stringify(CurrentLinks);

// Use fetch to post the cleaned-up URL data
fetch('https:/<snip.com>?id=' + encodeURIComponent(document.location), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: jsonString
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok');
})
.then(data => {
    console.log('Data successfully sent!', data);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});

