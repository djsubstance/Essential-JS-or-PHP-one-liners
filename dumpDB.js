// Helper function to create and append a button
function createButton(id, text, onClick) {
  var button = document.createElement('button');
  button.id = id;
  button.textContent = text;
  document.body.appendChild(button);
  button.addEventListener('click', onClick);
}

// Function to list all IndexedDB databases
function listIndexedDBDatabases() {
  indexedDB.databases().then(databases => {
    const dbNames = databases.map(db => db.name);
    console.log('IndexedDB Databases:', dbNames);
    dbNames.forEach(dbName => {
      listObjectStores(dbName);
    });
  }).catch(err => {
    console.error('Error accessing IndexedDB:', err);
  });
}

// Function to list all object stores in a given database
function listObjectStores(dbName) {
  const request = indexedDB.open(dbName);

  request.onsuccess = function(event) {
    const db = event.target.result;
    const objectStoreNames = Array.from(db.objectStoreNames);
    console.log(`Object Stores in ${dbName}:`, objectStoreNames);
  };

  request.onerror = function(event) {
    console.error(`Error opening database ${dbName}:`, event);
  };
}

// Create buttons to list IndexedDB databases and their object stores
createButton('listIndexedDBDatabasesButton', 'List IndexedDB Databases', listIndexedDBDatabases);


