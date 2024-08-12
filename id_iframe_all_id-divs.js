(function() {
    const elements = [...document.querySelectorAll('script, div')];
    const details = elements.map(el => {
        const tag = el.tagName.toLowerCase();
        const id = el.id ? ` id="${el.id}"` : '';
        const classes = el.className ? ` class="${el.className}"` : '';
        const summary = `${tag}${id}${classes}`;
        const content = el.outerHTML.length > 100 ? el.outerHTML.slice(0, 100) + '...' : el.outerHTML;
        return `<details><summary>${summary}</summary><pre>${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></details>`;
    }).join('');

    // Create an iframe and insert it into the DOM
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.top = '5%';
    iframe.style.left = '5%';
    iframe.style.width = '90%';
    iframe.style.height = '90%';
    iframe.style.border = '1px solid black';
    iframe.style.zIndex = '10000';
    iframe.style.backgroundColor = 'white';
    iframe.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';  // Dark background
    iframe.style.color = 'lightcyan';  // Light cyan text color
    iframe.style.fontSize = '16px';  // Larger text
    iframe.style.overflowY = 'auto';  // Allow scrolling
    document.body.appendChild(iframe);

    // Write the collected information into the iframe
    iframe.contentWindow.document.body.innerHTML = `<div style="padding:20px; font-family: Arial, sans-serif; font-size: 16px; color: lightcyan; background-color: rgba(0, 0, 0, 0.9); max-height: 100%; overflow-y: auto;">${details}</div>`;

    // Close the iframe when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!iframe.contains(event.target)) {
            iframe.remove();
        }
    });

    // Close the iframe on pressing 'Esc'
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            iframe.remove();
        }
    });
})();
