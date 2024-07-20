paste into console:

const analyticsHtmlEncoded = '[{&#34;dimensions&#34;: {&#34;dimension16&#34;: false, &#34;dimension17&#34;: &#34;Signed out&#34;, &#34;dimension2&#34;: &#34;en&#34;, &#34;dimension46&#34;: false, &#34;dimension36&#34;: &#34;en&#34;}, &#34;gaid&#34;: &#34;UA-36037335-14&#34;, &#34;metrics&#34;: {}, &#34;purpose&#34;: 0}]';
const tagManagementHtmlEncoded = '{&#34;at&#34;: &#34;True&#34;, &#34;ga4&#34;: [], &#34;ga4p&#34;: [], &#34;gtm&#34;: [{&#34;id&#34;: &#34;GTM-5CVQBG&#34;, &#34;purpose&#34;: 1}], &#34;parameters&#34;: {&#34;internalUser&#34;: &#34;False&#34;, &#34;language&#34;: {&#34;machineTranslated&#34;: &#34;False&#34;, &#34;requested&#34;: &#34;en&#34;, &#34;served&#34;: &#34;en&#34;}, &#34;pageType&#34;: &#34;error&#34;, &#34;projectName&#34;: &#34;Google Cloud&#34;, &#34;signedIn&#34;: &#34;False&#34;, &#34;tenant&#34;: &#34;cloud&#34;, &#34;recommendations&#34;: {&#34;sourcePage&#34;: &#34;&#34;, &#34;sourceType&#34;: 0, &#34;sourceRank&#34;: 0, &#34;sourceIdenticalDescriptions&#34;: 0, &#34;sourceTitleWords&#34;: 0, &#34;sourceDescriptionWords&#34;: 0, &#34;experiment&#34;: &#34;&#34;}, &#34;experiment&#34;: {&#34;ids&#34;: &#34;&#34;}}}';
// replace the above variables you can get them from google pages

// Function to decode HTML entities
function htmlDecode(input) {
    const doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

// Decode the HTML entities
const analyticsDecoded = htmlDecode(analyticsHtmlEncoded);
const tagManagementDecoded = htmlDecode(tagManagementHtmlEncoded);

// Parse the JSON strings
const analyticsJson = JSON.parse(analyticsDecoded);
const tagManagementJson = JSON.parse(tagManagementDecoded);

console.log(analyticsJson);
console.log(tagManagementJson);
