document.querySelectorAll('div span[jscontroller]').forEach(span => {
    let link = span.closest('div').querySelector('a');
    if (link) console.log(link.href);
});

