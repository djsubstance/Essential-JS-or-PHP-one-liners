open webhint report which has +'s condensed and paste in (to console)

To expand all sections on your page that are collapsed within <details> elements, you can use the following one-liner in the browser console. This will ensure that every <details> element is opened and remains interactable:

Array.from(document.querySelectorAll('details')).forEach(details => {    details.open = true;});

Array.from(document.querySelectorAll('details')).forEach(details => {    details.open = false;});


Explanation:
document.querySelectorAll('details'): Selects all <details> elements on the page.
Array.from(...).forEach(...): Converts the NodeList into an array and iterates over each <details> element.
details.open = true;: Sets the open attribute of each <details> element to true, ensuring that the content inside is expanded.

  



