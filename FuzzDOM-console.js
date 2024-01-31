// Filename: FuzzDOM-console.js
// Usage: Paste the following into any target webpage if you open developer options, inspect, console 
// Test prior to using this with:  alert(document.cookie); - verify you get an alert

/* Purpose: 
   This script will open 10 new tabs, each with a fuzzed version of the current page. 
   The randomFuzz function alters the text content of each element on the page by replacing it with a random string. 
   The openFuzzedTabs function duplicates the current page's HTML content into 10 new tabs and then applies the fuzzing.  
   */


// CAUTION: It is recommended to run this in an incognito browser without any other tabs open

function randomFuzz() {
    // Function to randomly alter DOM elements
    const fuzzElement = (element) => {
        const randomValue = Math.random().toString(36).substring(2, 15);
        if (element.childNodes.length === 0) {
            element.textContent = randomValue;
        } else {
            element.childNodes.forEach(child => fuzzElement(child));
        }
    };

    // Apply fuzzing to all elements
    document.querySelectorAll('*').forEach(el => fuzzElement(el));
}

function openFuzzedTabs() {
    const originalContent = document.documentElement.innerHTML;
    for (let i = 0; i < 10; i++) {
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write(originalContent);
            newWindow.document.close();
            newWindow.eval('(' + randomFuzz.toString() + ')();');
        }
    }
}

// Run the function
openFuzzedTabs();
