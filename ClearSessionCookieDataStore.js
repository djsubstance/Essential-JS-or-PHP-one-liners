

Clearing Session Information
To clear or wipe all information from your client's web session, you can employ several techniques depending on what type of data you wish to clear:

Cookies: Use JavaScript to delete each cookie by setting their expiration dates to a past date. 
  Example:
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

LocalStorage: 
  localStorage.clear() 
    // method to remove all data stored in localStorage for the domain.
SessionStorage: 
  sessionStorage.clear() 
    // method to remove all data stored in sessionStorage for the tab/window.

IndexedDB: 
This is more complex and involves opening a connection to each database and deleting them individually or clearing all the data from the object stores.

  const actions = [
    () => indexedDB.open('myDatabase'), // Open Database
    () => indexedDB.deleteDatabase('myDatabase'), // Delete Database
    () => db.transaction(['myObjectStore'], 'readwrite').objectStore('myObjectStore').clear(), // Clear Object Store
    () => db.versionchange = (event) => { db.createObjectStore('newStore', {keyPath: 'id'}); }, // Create Object Store
    () => { let transaction = db.transaction(['myObjectStore'], 'versionchange'); transaction.objectStore('myObjectStore').delete(); }, // Delete Object Store
    () => indexedDB.databases().then(dbs => console.log(dbs)), // List All Databases
    () => { const request = indexedDB.open('myDatabase'); request.onupgradeneeded = () => console.log('Database does not exist'); }, // Check Database Existence
    () => db.transaction(['myObjectStore'], 'readwrite').objectStore('myObjectStore').add({id: 1, data: 'test'}), // Add Data to Store
    () => db.transaction('myObjectStore').objectStore('myObjectStore').get(1).onsuccess = (event) => console.log(event.target.result), // Read Data from Store
    () => db.transaction(['myObjectStore'], 'readwrite').objectStore('myObjectStore').put({id: 1, data: 'updated'}), // Update Object Store Data
];
