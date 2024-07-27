

$$$$$$$\   $$$$$$\  $$\      $$\                                                         
$$  __$$\ $$  __$$\ $$$\    $$$ |                                                        
$$ |  $$ |$$ /  $$ |$$$$\  $$$$ |                                                        
$$ |  $$ |$$ |  $$ |$$\$$\$$ $$ |                                                        
$$ |  $$ |$$ |  $$ |$$ \$$$  $$ |                                                        
$$ |  $$ |$$ |  $$ |$$ |\$  /$$ |                                                        
$$$$$$$  | $$$$$$  |$$ | \_/ $$ |                                                        
\_______/  \______/ \__|     \__|                                                        
                                                                                         
                                                                                         
                                                                                         
$$\   $$\ $$\      $$\        $$$$$$\                                          $$\       
$$ | $$  |$$ | $\  $$ |      $$  __$$\                                         $$ |      
$$ |$$  / $$ |$$$\ $$ |      $$ /  \__| $$$$$$\   $$$$$$\   $$$$$$\   $$$$$$$\ $$$$$$$\  
$$$$$  /  $$ $$ $$\$$ |      \$$$$$$\  $$  __$$\  \____$$\ $$  __$$\ $$  _____|$$  __$$\ 
$$  $$<   $$$$  _$$$$ |       \____$$\ $$$$$$$$ | $$$$$$$ |$$ |  \__|$$ /      $$ |  $$ |
$$ |\$$\  $$$  / \$$$ |      $$\   $$ |$$   ____|$$  __$$ |$$ |      $$ |      $$ |  $$ |
$$ | \$$\ $$  /   \$$ |      \$$$$$$  |\$$$$$$$\ \$$$$$$$ |$$ |      \$$$$$$$\ $$ |  $$ |
\__|  \__|\__/     \__|       \______/  \_______| \_______|\__|       \_______|\__|  \__|
                                                                                         
       [ DOM Keyword Search ] 

Desc:  Will search dom / all scripts for the keywords at end of script

                                                                                         
   

Method 1: (may not work in FF):
(async terms => { const results = [], searchContent = (content, url) => { content.split('\n').forEach((line, index) => { if (terms.some(term => line.toLowerCase().includes(term.toLowerCase()))) { results.push({ url, lineNumber: index + 1, line: line.trim() }); } }); }; searchContent(document.documentElement.outerHTML, window.location.href); const fetchAndSearch = async url => { try { const response = await fetch(url), text = await response.text(); searchContent(text, url); } catch (e) { console.error(`Error fetching ${url}:`, e); } }; const urls = [...document.querySelectorAll('link[rel="stylesheet"], script[src]')].map(el => el.href || el.src); await Promise.all(urls.map(fetchAndSearch)); results.length ? results.forEach(result => console.log(`Found in ${result.url} (Line ${result.lineNumber}): ${result.line}`)) : console.log(`No occurrences of the terms "${terms.join(', ')}" found.`); })(['secret', 'token', 'bearer', 'api', 'key', 'jwt']).catch(console.error);
(async terms => { const results = [], searchContent = (content, url) => { content.split('\n').forEach((line, index) => { if (terms.some(term => line.toLowerCase().includes(term.toLowerCase()))) { results.push(`Found in ${url} (Line ${index + 1}): ${line.trim()}`); } }); }; searchContent(document.documentElement.outerHTML, window.location.href); const fetchAndSearch = async url => { try { const response = await fetch(url), text = await response.text(); searchContent(text, url); } catch (e) { console.error(`Error fetching ${url}:`, e); } }; const urls = [...document.querySelectorAll('link[rel="stylesheet"], script[src]')].map(el => el.href || el.src); await Promise.all(urls.map(fetchAndSearch)); const iframe = document.createElement('iframe'); iframe.style.position = 'fixed'; iframe.style.top = '10px'; iframe.style.left = '10px'; iframe.style.width = '600px'; iframe.style.height = '600px'; iframe.style.zIndex = '10000'; iframe.style.backgroundColor = 'white'; iframe.style.border = '1px solid black'; document.body.appendChild(iframe); const iframeDoc = iframe.contentDocument || iframe.contentWindow.document; iframeDoc.open(); iframeDoc.write('<html><body style="font-family: Arial, sans-serif;"><h1>Search Results</h1><pre>' + (results.length ? results.join('\n\n') : `No occurrences of the terms "${terms.join(', ')}" found.`) + '</pre></body></html>'); iframeDoc.close(); })(['secret', 'token', 'bearer', 'api', 'key', 'jwt']).catch(console.error);


