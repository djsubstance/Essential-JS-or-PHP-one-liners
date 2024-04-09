Filename: ViewDOMsessioncontrols_securitynfo-misc.js
version: 1.0
Desc: Display sensitive data on console if not properly secured


fetch(window.location.href).then(response => { console.log('Headers:', Array.from(response.headers.entries())); console.log('Session Storage:', Object.fromEntries(Object.entries(sessionStorage))); console.log('Cookies:', document.cookie); });

