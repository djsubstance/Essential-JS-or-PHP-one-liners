Filename: DumpAllBrowserStoreNfo.txt
Desc: Made for Inspect Console ( to paste in ) but will work as normal JS obviously
Purpose: To expose in a easy way to hijack and send to other resources (potentially) the session data cookie etc.
Original Creation Date: 02/04/24
Last Update: 04/08/24
By: substance
Note: Multiple revisions are listed here as i was tweaking it to make it more efficient, the latest version is at the top:

Latest version (v1.2a)
---------------------------- NOT ONE LINER - EXPANDED FOR CLARITY -----------------------
console.log(
  `Browser Local Storage:\n${
    localStorage.length
      ? JSON.stringify([...Array(localStorage.length)].map((_, i) => 
          [localStorage.key(i), localStorage.getItem(localStorage.key(i))])
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}), null, 2)
      : "None Found"
  }\n\n[*] Session Storage:\n${
    sessionStorage.length
      ? JSON.stringify([...Array(sessionStorage.length)].map((_, i) => 
          [sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i))])
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}), null, 2)
      : "None Found"
  }\n\n-------------\n[*] Cookies:\n\t${
    document.cookie
      ? `{${document.cookie.split(';').map(cookie => 
          `\n  "${cookie.split('=')[0].trim()}": "${cookie.split('=')[1]}"`).join(',')}\n\t}`
      : "None Found"
  }\n-------------\n`
);

---------------   ONE LINER :: ONCE YOU UNDERSTAND IT ----------------
console.log(`Browser Local Storage: ${localStorage.length ? JSON.stringify([...Array(localStorage.length)].map((_, i) => [localStorage.key(i), localStorage.getItem(localStorage.key(i))]).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}), null, 2) : "None Found"} [*] Session Storage: ${sessionStorage.length ? JSON.stringify([...Array(sessionStorage.length)].map((_, i) => [sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i))]).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}), null, 2) : "None Found"} ------------- [*] Cookies: ${document.cookie ? `{${document.cookie.split(';').map(cookie => `"${cookie.split('=')[0].trim()}": "${cookie.split('=')[1]}"`).join(', ')}}` : "None Found"} -------------`);

Example output from oneliner (v1.2 updated)
Note: you should see 3 potentially very large sets of data. Make sure you can determine where one begins and one ends:

The last section is session storage - for this page I see :
[*] Session Storage: {
  "soft-nav:latest-mechanism": "react",
  "soft-nav:react-app-name": "react-code-view",
  "soft-nav:marker": "0",
  "soft-nav:referrer": "https://github.com/djsubstance/Essential-JS-or-PHP-one-liners/edit/main/DumpAllBrowserStoreNfo_upd.js"
}
.. there are some limitations depending on the page your on in terms of getting this data into an array/variable and "sending" it to
other resources off the same origin

  



console.log(
  `%cBrowser Local Storage:\n%c${JSON.stringify([...Array(localStorage.length)].map((_, i) => [localStorage.key(i), localStorage.getItem(localStorage.key(i))]).reduce((acc, [key, value]) => ({...acc, [key]: value}), {}), null, 2)}\n\n%cSession Storage:\n%c${JSON.stringify([...Array(sessionStorage.length)].map((_, i) => [sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i))]).reduce((acc, [key, value]) => ({...acc, [key]: value}), {}), null, 2)}\n\n%cCookies:\n%c{${document.cookie.split(';').map(cookie => `\n  "${cookie.split('=')[0].trim()}": "${cookie.split('=')[1]}"`).join(',')}\n}`,
  "color: lightcyan", "", "color: lightcyan", "", "color: lightcyan", ""
);

-------
  output should resemble:
Browser Local Storage:{
  "COMMAND_PALETTE_KEY": "k",
  "<snip>/read-reports-state": "{\"0004736\":\"2025-03-02T17:55:06.935Z\"}",
  "HACKERONE_AI_GLOBAL_STATE": "{\"state\":\"CLOSED\",\"autoSwitchBasedOnContext\":false,\"defaultMode\":\"CHAT\"}",
  "HACKERONE_AI_WINDOW_STATE": "{\"width\":440,\"height\":480}",
  "AMP_unsent_b7cba2c000": "[]",
  "__anon_id": "\"30000000-6256-48d8-9faa-bf000000eb\"",
  "COMMAND_PALETTE_FN_KEY": "metaKey"
}

Session Storage:{
  "product_feature": "overview",
  "product_area": "<snip>",
  "METADATA_IS_EXPANDED": "true"
}

Cookies:{
  "AMP_b7cba2c14c": "JTdCJTIyZGV2aWNlS<snip>NzMlMjIlMkMlMjJzZXNzaW9uSWQlMjIlM0ExNzA5NDAyMDk4ODk4JTJDJTIyb3B0T3V0JTIyJTNBZmFsc2UlMNiUyQyUyMmxhc3RFdmVudElkJTIyJTNBMTAlN0Q",
  "_dd_s": "rum"
}
undefined

