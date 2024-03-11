// Create Cookie Array:
var CookieAll = {
  names: ["sessionId", "userToken", "preferences", "trackingId", "1P_JAR", "AEC", "NID"],
  values: [
    "abc123",
    "xyz789",
    "darkMode=yes;language=en",
    "uuid-1234-5678",
    "2024-02-19-04",
    "Ae3NU9PxUyeIzqkFaOvyVOta4JA5xl_KFth5PAZceqdKyOp_WhNq2rtQQjI",
    "511=HX_eavvMhTGU_KaL2uKJbM2ZOm7Cos5wcksqVoH_XT2aqTTi06Q3pDvXpf-GNeA0GSKSFGM5yKj43Gxplry1HAZSGkaZ7GSEO93P-rV2DtTAPvUc-7hB8LrlQfrcKC3rPLsCOJkoEOc3WsSbcIe0WZunQiEXytq19qz_OeVLN0CB2pELK0odZRsf3ZxHW-DVmLFftrAvRA"
  ],
  flags: [
    "Secure", 
    "HttpOnly", 
    "SameSite=Strict", 
    "SameSite=Lax", 
    // Note: "None" is used for SameSite=None scenarios
  ],
  paths: ["/", "/account", "/settings"],
  domains: [".example.com", "subdomain.example.com", "example.com", ".google.com"],
  dates: [
    "expires=Fri, 31 Dec 9999 23:59:59 GMT",
    "expires=Wed, 01 Jan 2020 00:00:00 GMT",
    "Max-Age=3600",
    "Max-Age=86400",
    // Adding specific examples
    "expires=Wed, 20-Mar-2024 04:03:43 GMT",
    "expires=Mon, 22-Jul-2024 00:13:48 GMT",
    "expires=Sun, 18-Aug-2024 12:47:22 GMT"
  ],
  examples: [
    {
      name: "1P_JAR",
      value: "2024-02-19-04",
      expires: "Wed, 20-Mar-2024 04:03:43 GMT",
      path: "/",
      domain: ".google.com",
      flags: ["Secure", "SameSite=None"]
    },
    {
      name: "AEC",
      value: "Ae3NU9PxUyeIzqkFaOvyVOta4JA5xl_KFth5PAZceqdKyOp_WhNq2rtQQjI",
      expires: "Mon, 22-Jul-2024 00:13:48 GMT",
      path: "/",
      domain: ".google.com",
      flags: ["Secure", "HttpOnly", "SameSite=Lax"]
    },
    {
      name: "NID",
      value: "511=HX_eavvMhTGU_KaL2uKJbM2ZOm7Cos5wcksqVoH_XT2aqTTi06Q3pDvXpf-GNeA0GSKSFGM5yKj43Gxplry1HAZSGkaZ7GSEO93P-rV2DtTAPvUc-7hB8LrlQfrcKC3rPLsCOJkoEOc3WsSbcIe0WZunQiEXytq19qz_OeVLN0CB2pELK0odZRsf3ZxHW-DVmLFftrAvRA",
      expires: "Sun, 18-Aug-2024 12:47:22 GMT",
      path: "/",
      domain: ".google.com",
      flags: ["Secure", "HttpOnly", "SameSite=None"]
    }
  ]
};

// This creates 3 cookies that appear to have the right traits

console.log(CookieAll.examples[0]); // Outputs the first example cookie configuration

18:16:02.577 VM204:1 {name: '1P_JAR', value: '2024-02-19-04', expires: 'Wed, 20-Mar-2024 04:03:43 GMT', 
  path: '/', domain: '.google.com', …}domain: ".google.com"expires: "Wed, 20-Mar-2024 04:03:43 GMT"
  flags: Array(2)0: "Secure"1: "SameSite=None"length: 2[[Prototype]]: Array(0)name: "1P_JAR"path: "/"
    value: "2024-02-19-04"[[Prototype]]: Objectconstructor: ƒ Object()assign: ƒ assign()create: ƒ create()d
   defineProperties: ƒ defineProperties()defineProperty: ƒ defineProperty()entries: ƒ entries()freeze: ƒ freeze()f
   romEntries: ƒ fromEntries()getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()getOwnProperty
   Descriptors: ƒ getOwnPropertyDescriptors()getOwnPropertyNames: ƒ getOwnPropertyNames()
     getOwnPropertySymbols: ƒ getOwnPropertySymbols()getPrototypeOf: ƒ getPrototypeOf()groupBy: ƒ groupBy()
       hasOwn: ƒ hasOwn()is: ƒ is()isExtensible: ƒ isExtensible()isFrozen: ƒ isFrozen()isSealed: ƒ isSealed()
         keys: ƒ keys()length: 1name: "Object"preventExtensions: ƒ preventExtensions()prototype: {constructor: ƒ, 
  
           You will likely often see:
           18:16:02.596 undefined


nothing was returned
                                                                                                  
