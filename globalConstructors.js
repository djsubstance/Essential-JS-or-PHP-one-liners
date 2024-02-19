document.querySelectorAll('*').forEach(el => {
    const tagName = el.tagName.toLowerCase(); // Get the tag name in lowercase
    // Construct the expected constructor name based on the tag name
    let constructorName = `HTML${tagName.charAt(0).toUpperCase() + tagName.slice(1)}Element`;
    if (tagName === "html") constructorName = "HTMLHtmlElement"; // Special case for the <html> element
    const constructor = window[constructorName];

    if (!constructor) {
        console.log(`No global constructor found for: ${tagName.toUpperCase()}`);
        return;
    }

    try {
        const testProp = `testProp${Date.now()}`;
        Object.defineProperty(constructor.prototype, testProp, {value: 'testValue', configurable: true});
        if (el[testProp] === 'testValue') {
            console.log(`Potential prototype pollution vulnerability found in ${tagName.toUpperCase()}`);
        }
        delete constructor.prototype[testProp]; // Clean-up
    } catch (error) {
        console.error(`Error testing ${tagName.toUpperCase()}:`, error);
    }
});

 ==
