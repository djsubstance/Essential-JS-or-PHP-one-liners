var scripts = document.scripts;
var scriptPaths = [];

// ASCII art as a JS variable
var asciiArt = `
 ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
 ░▒▓███████▓▒░░▒▓██████▓▒░  
        ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
          ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
    ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ 
`;

for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src) {  // Check if the script has a src attribute
        scriptPaths.push(scripts[i].src);
    }
}

// Create a container div
var container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '50%';
container.style.left = '50%';
container.style.transform = 'translate(-50%, -50%)';
container.style.width = '600px';
container.style.height = '400px';
container.style.backgroundColor = 'rgba(0, 0, 0, 0.66)';
container.style.color = 'white';
container.style.overflowY = 'scroll';
container.style.padding = '10px';
container.style.boxSizing = 'border-box';
container.style.zIndex = '1000';

// Create the close button
var closeButton = document.createElement('button');
closeButton.textContent = 'X';
closeButton.style.position = 'absolute';
closeButton.style.top = '10px';
closeButton.style.right = '10px';
closeButton.style.color = 'white';
closeButton.style.background = 'transparent';
closeButton.style.border = 'none';
closeButton.style.fontSize = '20px';
closeButton.style.cursor = 'pointer';

// Append the close button to the container
container.appendChild(closeButton);

// Display ASCII art
var asciiArtElement = document.createElement('pre');
asciiArtElement.textContent = asciiArt;
container.appendChild(asciiArtElement);

// Create a list to hold the script paths
var list = document.createElement('ul');
scriptPaths.forEach(function(path) {
    var listItem = document.createElement('li');
    listItem.textContent = path;
    list.appendChild(listItem);
});

container.appendChild(list);
document.body.appendChild(container);

// Function to hide the container
function hideContainer() {
    container.style.display = 'none';
}

// Add click event listener to the close button
closeButton.addEventListener('click', hideContainer);

// Add event listener for the ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hideContainer();
    }
});

