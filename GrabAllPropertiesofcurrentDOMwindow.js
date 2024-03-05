Object.getOwnPropertyNames(window).forEach((name) => console.log(`${name}:`, Object.getOwnPropertyNames(window[name]).join(', ')));


the output should resemble: 
VM788:1 0: Object, Function, Array, Number, parseFloat, parseInt, Infinity, NaN, undefined, Boolean, String, Symbol, Date, Promise, RegExp, Error, AggregateError, 
  EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, globalThis, JSON, Math, Intl, ArrayBuffer, Atomics, Uint8Array, Int8Array, 
  Uint16Array, Int16Array, Uint32Array, Int32Array, Float32Array, Float64Array, Uint8ClampedArray, BigUint64Array, BigInt64Array, DataView, Map, BigInt, 
  Set, WeakMap, WeakSet, Proxy, Reflect, FinalizationRegistry, WeakRef, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent, escape, unescape,
  eval, isFinite, isNaN, console, Option, Image, Audio, webkitURL, webkitRTCPeerConnection, webkitMediaStream, WebKitMutationObserver, WebKitCSSMatrix,
  XSLTProcessor, XPathResult, XPathExpression, XPathEvaluator, XMLSerializer, XMLHttpRequestUpload, XMLHttpRequestEventTarget, XMLHttpRequest, XMLDocument, 
  WritableStreamDefaultWriter, WritableStreamDefaultController, WritableStream, Worker, Window, WheelEvent, WebSocket, WebGLVertexArrayObject, WebGLUniformLocation,
  WebGLTransformFeedback, WebGLTexture, WebGLSync, WebGLShaderPrecisionFormat, WebGLShader, WebGLSampler, WebGLRenderingContext, WebGLRenderbuffer, WebGLQuery, 
  AggregateError, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, globalThis, JSON, Math, Intl, ArrayBuffer, Atomics, Uint8Array, Int8Array, 
  Uint16Array, Int16Array, Uint32Array, Int32Array, Float32Array, Float64Array, Uint8ClampedArray, BigUint64Array, BigInt64Array, DataView, Map, BigInt, Set, WeakMap, 
  'WeakSet, Proxy, Reflect, FinalizationRegistry, WeakRef, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent, escape, unescape, eval, isFinite, isNaN,
  console, Option, Image, Audio, webkitURL, webkitRTCPeerConnection, webkitMediaStream, WebKitMutationObserver, WebKitCSSMatrix, XSLTProcessor, XPathResult, 
  XPathExpression, XPathEvaluator, XMLSerializer, XMLHttpRequestUpload, XMLHttpRequestEventTarget, XMLHttpRequest, XMLDocument, WritableStreamDefaultWriter,<snip>


  This is useful to identify object to pollute
