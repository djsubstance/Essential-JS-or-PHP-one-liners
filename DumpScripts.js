If you want a quick and dirty list of all the scripts currently loaded in the DOM on the page your on, paste this into the
console:

var scripts = document.scripts;
var scriptPaths = [];

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

// Create a list to hold the script paths
var list = document.createElement('ul');
scriptPaths.forEach(function(path) {
    var listItem = document.createElement('li');
    listItem.textContent = path;
    list.appendChild(listItem);
});

container.appendChild(list);
document.body.appendChild(container);

// Add event listener for the ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        $(container).fadeOut();
    }
});

