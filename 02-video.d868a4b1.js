!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,y=Math.max,m=Math.min,p=function(){return d.Date.now()};function g(e,t,n){var i,r,u,a,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(O,t),s?g(e):a}function w(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function O(){var e=p();if(w(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function T(e){return f=void 0,v&&i?g(e):(i=r=void 0,a)}function S(){var e=p(),n=w(e);if(i=arguments,r=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(O,t),g(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=h(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?y(h(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=r=f=void 0},S.flush=function(){return void 0===f?a:T(p())},S}function b(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var o=a.test(e);return o||f.test(e)?c(e.slice(2),o?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};var j=document.querySelector("iframe"),w=new Vimeo.Player(j);w.setCurrentTime(function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log("Everyone makes mistakes, this is yours:",e.message)}}("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name})),w.on("timeupdate",n((function(e){!function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log("Everyone makes mistakes, this is yours:",e.message)}}("videoplayer-current-time",e.seconds)}),1e3))}();
//# sourceMappingURL=02-video.d868a4b1.js.map