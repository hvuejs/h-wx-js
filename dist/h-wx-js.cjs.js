/*!
 * h-wx-js v1.0.0
 * (c) 2018-2022 ljh
 * Released under the MIT License.
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=window.navigator.userAgent,t=""+e.toLowerCase();function n(){return!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(){try{WeixinJSBridge.invoke("setFontSizeCallback",{fontSize:0}),WeixinJSBridge.on("menu:setfont",(function(){WeixinJSBridge.invoke("setFontSizeCallback",{fontSize:0})}))}catch(e){console.warn(e)}}exports.fixScroll=function(){n()&&window.scrollTo(0,0)},exports.initFontSize=function(){if("object"==("undefined"==typeof WeixinJSBridge?"undefined":o(WeixinJSBridge))&&"function"==typeof WeixinJSBridge.invoke)i();else{var e=document;e.addEventListener?e.addEventListener("WeixinJSBridgeReady",i,!1):e.attachEvent&&(e.attachEvent("WeixinJSBridgeReady",i),e.attachEvent("onWeixinJSBridgeReady",i))}},exports.watchInput=function(){var e;/MicroMessenger/i.test(t)&&n()&&(document.body.addEventListener("focusin",(function(){clearTimeout(e)})),document.body.addEventListener("focusout",(function(){clearTimeout(e),e=setTimeout((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),200)})))};
