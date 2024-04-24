document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    
  
    overlay.style.transition = 'opacity 0.5s';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500); // Must match the transition duration
});

 
function loadPageWithFade(url, contentSelector) {
    const overlay = document.getElementById('overlay');
    const content = document.querySelector(contentSelector);

    // Start the fade out
    overlay.style.display = 'block';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 1.5s';

    // Fade to black
    setTimeout(() => {
        overlay.style.opacity = '1';

        // Fetch the new content
        fetch(url)
            .then(response => response.text())
            .then(html => {
                setTimeout(() => {
                    // Insert new content
                    content.innerHTML = html;

                    // Fade in to new content
                    overlay.style.transition = 'opacity 0.5s';
                    overlay.style.opacity = '0';

                    // Hide overlay after transition
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 500); // Match the fade-in duration

                }, 1500); // Wait for the fade-out to complete

            }).catch(err => {
                console.error('Failed to fetch new page:', err);
                overlay.style.display = 'none'; // Hide overlay on error
            });
    }, 100);
}

// Example usage: loadPageWithFade('newPage.html', '#content');
