

Paste into console. it will display an iframe with that sites robots.txt
all disallows are clickable
click in iframe and hit enter and wait, it will display which disallows are 200

(async () => {
    let hasExecuted = false;

    if (!hasExecuted) {
        var f = document.createElement('iframe');
        var fqdn = window.location.protocol + '//' + window.location.hostname;

        hasExecuted = true;

        // Fetch the robots.txt content
        try {
            const response = await fetch(`${fqdn}/robots.txt`);
            const text = await response.text();

            // Set up the iframe attributes and styles
            f.style.position = 'fixed';
            f.style.left = '0';
            f.style.right = '0';
            f.style.margin = 'auto';
            f.style.top = '0';
            f.style.overflow = 'auto';
            f.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            f.style.color = 'lightcyan';
            f.style.zIndex = '100';
            f.setAttribute('width', '400');
            f.setAttribute('height', '600');
            document.getElementsByTagName('body')[0].appendChild(f);

            // Process the content to make Disallows clickable
            const processedText = text.replace(/Disallow: (\/[^\s]*)/g, (match, path) => {
                return `Disallow: <a href="${path}" target="_blank" style="color: lightcyan;">${path}</a>`;
            });

            // Write the content to the iframe
            const iframeDoc = f.contentDocument || f.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(`
                <html>
                    <body style="font-family: Arial, sans-serif; background-color: rgba(0, 0, 0, 0.8); color: white; word-wrap: break-word; overflow-wrap: break-word;">
                        <h1 style="font-weight: bold; color: lightcyan;">${fqdn}/robots.txt</h1>
                        <pre style="white-space: pre-wrap;">${processedText}</pre>
                        <div id="results"></div>
                    </body>
                </html>
            `);
            iframeDoc.close();

            // Add an event listener to remove the iframe when ESC is pressed
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    document.body.removeChild(f);
                }
            });

            // Add an event listener for the iframe to detect Enter key press
            iframeDoc.addEventListener('keydown', async function(event) {
                if (event.key === 'Enter') {
                    const links = iframeDoc.querySelectorAll('a');
                    let count200 = 0;
                    let count404 = 0;
                    let otherCounts = {};
                    let resultsHTML = '';

                    for (let link of links) {
                        const path = link.getAttribute('href');
                        const url = fqdn + path;
                        console.log(`Checking Disallow: ${url}`);
                        try {
                            const res = await fetch(url, { redirect: 'follow' });
                            if (res.status === 404) {
                                count404++;
                            } else if (res.status === 200) {
                                count200++;
                                resultsHTML += `<a href="${url}" target="_blank" style="color: lightcyan;">${url}</a> - Response code [${res.status}]<br>`;
                            } else {
                                if (!otherCounts[res.status]) {
                                    otherCounts[res.status] = 0;
                                }
                                otherCounts[res.status]++;
                            }
                        } catch (e) {
                            console.error(`Error fetching ${url}:`, e);
                        }
                        await new Promise(r => setTimeout(r, 500)); // Wait for 0.5 seconds
                    }

                    // Display the results in the iframe
                    const resultsDiv = iframeDoc.getElementById('results');
                    resultsDiv.innerHTML = `
                        <pre style="white-space: pre-wrap; overflow-wrap: break-word;">
                            ${resultsHTML || 'All Disallows returned 404 or non-200 responses.'}
                            <br>Total 404 responses: ${count404}
                            <br>Total 200 responses: ${count200}
                            ${Object.keys(otherCounts).map(status => `<br>Total ${status} responses: ${otherCounts[status]}`).join('')}
                        </pre>
                    `;
                }
            });
        } catch (e) {
            console.error('Error fetching the robots.txt:', e);
        }
    }
})();

---------

  One liner version:
(async () => { let hasExecuted = false; if (!hasExecuted) { var f = document.createElement('iframe'); var fqdn = window.location.protocol + '//' + window.location.hostname; hasExecuted = true; try { const response = await fetch(`${fqdn}/robots.txt`); const text = await response.text(); f.style.position = 'fixed'; f.style.left = '0'; f.style.right = '0'; f.style.margin = 'auto'; f.style.top = '0'; f.style.overflow = 'auto'; f.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; f.style.color = 'lightcyan'; f.style.zIndex = '100'; f.setAttribute('width', '400'); f.setAttribute('height', '600'); document.getElementsByTagName('body')[0].appendChild(f); const processedText = text.replace(/Disallow: (\/[^\s]*)/g, (match, path) => `Disallow: <a href="${path}" target="_blank" style="color: lightcyan;">${path}</a>`); const iframeDoc = f.contentDocument || f.contentWindow.document; iframeDoc.open(); iframeDoc.write(`<html><body style="font-family: Arial, sans-serif; background-color: rgba(0, 0, 0, 0.8); color: white; word-wrap: break-word; overflow-wrap: break-word;"><h1 style="font-weight: bold; color: lightcyan;">${fqdn}/robots.txt</h1><pre style="white-space: pre-wrap;">${processedText}</pre><div id="results"></div></body></html>`); iframeDoc.close(); document.addEventListener('keydown', function(event) { if (event.key === 'Escape') { document.body.removeChild(f); } }); iframeDoc.addEventListener('keydown', async function(event) { if (event.key === 'Enter') { const links = iframeDoc.querySelectorAll('a'); let count200 = 0; let count404 = 0; let otherCounts = {}; let resultsHTML = ''; for (let link of links) { const path = link.getAttribute('href'); const url = fqdn + path; console.log(`Checking Disallow: ${url}`); try { const res = await fetch(url, { redirect: 'follow' }); if (res.status === 404) { count404++; } else if (res.status === 200) { count200++; resultsHTML += `<a href="${url}" target="_blank" style="color: lightcyan;">${url}</a> - Response code [${res.status}]<br>`; } else { if (!otherCounts[res.status]) { otherCounts[res.status] = 0; } otherCounts[res.status]++; } } catch (e) { console.error(`Error fetching ${url}:`, e); } await new Promise(r => setTimeout(r, 500)); } const resultsDiv = iframeDoc.getElementById('results'); resultsDiv.innerHTML = `<pre style="white-space: pre-wrap; overflow-wrap: break-word;">${resultsHTML || 'All Disallows returned 404 or non-200 responses.'}<br>Total 404 responses: ${count404}<br>Total 200 responses: ${count200}${Object.keys(otherCounts).map(status => `<br>Total ${status} responses: ${otherCounts[status]}`).join('')}</pre>`; } }); } catch (e) { console.error('Error fetching the robots.txt:', e); } } })();






Hit ESC to close the iframe
