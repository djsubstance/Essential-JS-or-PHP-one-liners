(function() {
    function searchInPrototype(proto, keywords) {
        let results = [];

        function recursiveSearch(obj, path = '') {
            for (let key in obj) {
                // Try to access the property safely
                try {
                    let value = obj[key];
                    let fullPath = path ? `${path}.${key}` : key;

                    // Check if the key or value matches any of the keywords
                    if (typeof key === 'string' && keywords.some(keyword => key.toLowerCase().includes(keyword))) {
                        results.push({ path: fullPath, value: key });
                    }
                    if (typeof value === 'string' && keywords.some(keyword => value.toLowerCase().includes(keyword))) {
                        results.push({ path: fullPath, value: value });
                    }

                    // If the value is an object, recursively search it
                    if (typeof value === 'object' && value !== null) {
                        recursiveSearch(value, fullPath);
                    }
                } catch (e) {
                    console.warn(`Cannot access property ${path}.${key}: ${e.message}`);
                }
            }
        }

        recursiveSearch(proto);
        return results;
    }

    // Define the keywords to search for
    const keywords = ['api', 'b', 'password', 'auth', 'o'];

    // Start the search on Function.prototype
    const functionPrototypeResults = searchInPrototype(Function.prototype, keywords);

    // Log the results
    console.log("Matches in Function.prototype:");
    console.log(functionPrototypeResults);

})();
