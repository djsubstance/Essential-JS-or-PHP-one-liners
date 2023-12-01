// Javscript - Can be pasted into Inspect Element to get all of that pages "Browser Store" data
// This is typically data stored other then cookies, related to the page your on

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}

Example output:
STATSIG_LOCAL_STORAGE_INTERNAL_STORE_V4:{
   "200381xxx3":{
      "feature_gates":{
         "575xxx630":{
            "name":"57xxx30",
            "value":false,
            "rule_id":"default",
            "id_type":"userID",
            "secondary_exposures":[
               
            ]
         },
   ..........
