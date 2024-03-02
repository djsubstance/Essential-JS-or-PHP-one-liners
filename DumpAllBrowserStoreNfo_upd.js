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

