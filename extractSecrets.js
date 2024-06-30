Paste this into inspect console. it will open a new window and display all files and lines  associated with secrets

(async terms => { 
    const results = [], 
    searchContent = (content, url) => { 
        content.split('\n').forEach((line, index) => { 
            if (terms.some(term => line.toLowerCase().includes(term.toLowerCase()))) { 
                results.push(`Found in ${url} (Line ${index + 1}): ${line.trim()}`); 
            } 
        }); 
    }; 
    searchContent(document.documentElement.outerHTML, window.location.href); 
    const fetchAndSearch = async url => { 
        try { 
            const response = await fetch(url), text = await response.text(); 
            searchContent(text, url); 
        } catch (e) { 
            console.error(`Error fetching ${url}:`, e); 
        } 
    }; 
    const urls = [...document.querySelectorAll('link[rel="stylesheet"], script[src]')].map(el => el.href || el.src); 
    await Promise.all(urls.map(fetchAndSearch)); 
    const newWindow = window.open(); 
    const newDocument = newWindow.document; 
    newDocument.open(); 
    newDocument.write(`<html><body style="font-family: Arial, sans-serif; background-color: #333; color: lightcyan; font-size: 18px; white-space: pre-wrap; word-wrap: break-word; overflow-wrap: break-word;"><h1>Search Results</h1><pre>` + (results.length ? results.join('\n\n') : `No occurrences of the terms "${terms.join(', ')}" found.`) + `</pre></body></html>`); 
    newDocument.close(); 
})(['secret', 'token', 'bearer', 'api', 'key', 'jwt', 'client-data', 'x-auth', 'creden', 'password', 'stripe']).catch(console.error);

