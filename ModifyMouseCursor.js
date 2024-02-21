// Modify the mouse cursor to make it a SVG based bullet - on the fly  - via console

function generateBullseyeSVG() {
    // Adjust the size to one-third by changing the width and height
    // Also, change the stroke and fill colors to bright white (#FFFFFF)
    const svg = `
        <svg width="33" height="33" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.5" cy="16.5" r="13.3" stroke="white" stroke-width="1.33" fill="transparent" />
            <circle cx="16.5" cy="16.5" r="10" stroke="white" stroke-width="1" fill="transparent" />
            <circle cx="16.5" cy="16.5" r="6.6" stroke="white" stroke-width="0.66" fill="transparent" />
            <circle cx="16.5" cy="16.5" r="3.3" stroke="white" stroke-width="0.33" fill="transparent" />
            <circle cx="16.5" cy="16.5" r="1.65" stroke="white" stroke-width="0.33" fill="white" />
        </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function applyBullseyeCursor() {
    const svgUrl = generateBullseyeSVG();
    document.body.style.cursor = `url("${svgUrl}") 16.5 16.5, auto`; // Add explicit hotspot coordinates for better compatibility
}

applyBullseyeCursor();


