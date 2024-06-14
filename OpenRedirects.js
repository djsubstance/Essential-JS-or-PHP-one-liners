via inspect/console..

  Paste in:


  const link = document.createElement('a');
link.href = '/redirect?url=http://ifconfig.me';
document.body.appendChild(link);
link.click();
setTimeout(() => {
    console.assert(location.href !== 'https://ifconfig.me/all', 'Open redirect vulnerability found'); // This will be logged if an open redirect is present
}, 1000);

.. this will evaluate the page for open redirects. look for any IP address being returned.
