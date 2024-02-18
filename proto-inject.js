// Check for all objects in current DOM - paste into console

//
//
document.querySelectorAll('*').forEach(el => {
    try {
        let tag = el.tagName;
        if (!window[tag]) {
            // This checks if there's a global constructor for the tag
            console.log(`No global constructor for: ${tag}`);
            return;
        }
        const testProp = `testProp${Date.now()}`;
        window[tag].prototype[testProp] = 'testValue';
        if (el[testProp] === 'testValue') {
            console.log(`Potential prototype pollution vulnerability found in ${tag}`);
        }
        delete window[tag].prototype[testProp]; // Attempt clean-up
    } catch (error) {
        console.error(`Error testing ${el.tagName}:`, error);
    }
});

Output: VM295:6 No global constructor for: DIV
VM295:6 No global constructor for: PIN-PARAGRAPH
VM295:6 No global constructor for: P
VM295:6 No global constructor for: A
3VM295:6 No global constructor for: DIV
VM295:6 No global constructor for: PIN-PARAGRAPH
VM295:6 No global constructor for: P
VM295:6 No global constructor for: A
3VM295:6 No global constructor for: DIV
VM295:6 No global constructor for: PIN-PARAGRAPH
VM295:6 No global constructor for: P
VM295:6 No global constructor for: A
3VM295:6 

---


// to get a list of ID's in use:
const allIds = [...new Set([...document.querySelectorAll('*')].map(el => el.id).filter(id => id))];
console.log(allIds);





document.querySelectorAll('*').forEach(el => {
    try {
        let tag = el.tagName;
        if (!window[tag]) {
            // This checks if there's a global constructor for the tag
            console.log(`No global constructor for: ${tag}`);
            return;
        }
        const testProp = `testProp${Date.now()}`;
        window[tag].prototype[testProp] = 'testValue';
        if (el[testProp] === 'testValue') {
            console.log(`Potential prototype pollution vulnerability found in ${tag}`);
        }
        delete window[tag].prototype[testProp]; // Attempt clean-up
    } catch (error) {
        console.error(`Error testing ${el.tagName}:`, error);
    }
});






Test Prototypes for pollution in inspect:
constructors.forEach(constructor => {
    try {
        const propName = 'polluted' + Math.random(); // Unique property name
        constructor.prototype[propName] = "This is a test";
        if ((new constructor())[propName] === "This is a test") {
            console.log(`Vulnerable to prototype pollution: ${constructor.name}`);
        }
        delete constructor.prototype[propName]; // Clean up
    } catch (error) {
        console.log(`Error testing ${constructor.name}:`, error);
    }
});



