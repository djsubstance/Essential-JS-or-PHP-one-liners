

(function expandAll() {
    // Targeting any clickable element that could be a toggle trigger
    const toggleTriggers = document.querySelectorAll('.details.toggle-view, .details.toggle-view *');

    let clickedCount = 0;
    toggleTriggers.forEach(trigger => {
        //  click if hasn't been clicked before
        if (!trigger.getAttribute('data-clicked')) {
            trigger.click(); // Attempt to expand
            trigger.setAttribute('data-clicked', 'true'); // Mark as clicked
            clickedCount++;
        }
    });

    console.log(`Clicked on ${clickedCount} elements.`);
    if (clickedCount > 0) {
        // If  clicked on new elements, run again after a short delay
        setTimeout(expandAll, 1000);
    } else {
        console.log("No more elements to expand.");
    }
})();
