 
░▒▓█▓▒░ ▒▓████████▓▒░▒▓███████▓▒░       ░▒▓███████▓▒░░ ▒▓████████▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓██████▓▒░▒▓████████▓▒░ 
░▒▓█▓▒░   ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░         ░▒▓█▓▒░   ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░     
░▒▓█▓▒░   ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░         ░▒▓█▓▒░   ░▒▓█▓▒░     ░▒▓█▓▒░        ░▒▓█▓▒░     
░▒▓█▓▒░   ░▒▓█▓▒░   ░▒▓███████▓▒░       ░▒▓█▓▒░░▒▓█▓▒░ ▒▓██████▓▒░    ░▒▓█▓▒░   ░▒▓██████▓▒░░▒▓█▓▒░        ░▒▓█▓▒░     
░▒▓█▓▒░   ░▒▓█▓▒░   ░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░         ░▒▓█▓▒░   ░▒▓█▓▒░     ░▒▓█▓▒░        ░▒▓█▓▒░     
░▒▓█▓▒░   ░▒▓█▓▒░   ░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░         ░▒▓█▓▒░   ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░     
░▒▓█▓▒░   ░▒▓█▓▒░   ░▒▓█▓▒░             ░▒▓███████▓▒░░ ▒▓████████▓▒░  ░▒▓█▓▒░   ░▒▓████████▓▒░▒▓██████▓▒░  ░▒▓█▓▒░     
                                                                                                                   
--------------------------------------------------------------------------------------------------------------------
ITP - Intelligent Tracking Prevention 

Brief Summary:
Intelligent Tracking Prevention is a new feature of WebKit, an open-source web-browser engine that powers Apple’s 
  Safari web browser, among others, shipped out in the new release of Safari 12 and iOS 11.
The feature aims to further protect users’ online privacy by changing the way Safari handles first-party cookies.

  Before the notion of Intelligent Tracking Prevention, Safari desktop and mobile browsers blocked third-party cookies 
  by default and allowed iOS users to block ads by installing Safari extensions, aka content blockers (available
                                                                                                     from iOS 9 onwards).
Can we check if its being used by our client? its 50/50 - we can certainly try:
  
One of the primary functions of ITP is to restrict third-party cookies or limit the lifespan of first-party cookies. 
    You can attempt to detect ITP by setting a cookie in a way that would be restricted under ITP and then checking 
    if the cookie behaves as expected.

      (paste into console perhaps)

  (function detectITP() {
    // Attempt to set a cookie
    document.cookie = "testCookie=1; max-age=600";
    if (document.cookie.indexOf("testCookie=1") === -1)  console.log("ITP or similar tracking prevention might be enabled."); 
    else console.log("ITP or similar tracking prevention does not seem to be enabled.");
    document.cookie = "testCookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    })();

[*] Use Storage Access API
    Safari's Storage Access API provides a method for requesting access to first-party cookies when third-party content
     is embedded in an iframe. The presence and behavior of this API can be used to infer if ITP is active:

    ------ Code Example -----
if (document.requestStorageAccess) {
    document.requestStorageAccess().then(
        () => console.log("Storage Access API request granted. ITP might be active but granted access."),
        () => console.log("Storage Access API request denied. ITP is likely active.")
    );   } else {   console.log("Storage Access API not available. Browser might not support ITP."); }


Keep in mind:
  Browser Compatibility: These methods primarily target behaviors seen in Safari with ITP. 
    Other browsers have introduced similar features (like Firefox's Enhanced Tracking Protection 
    and Chrome's privacy initiatives), but their implementations and the behaviors they exhibit may differ.
  Browsers continuously update and evolve their privacy features. Techniques that work today might not work 
    tomorrow - stay fresh - and fuck the haters *ehemm darkness*
  
