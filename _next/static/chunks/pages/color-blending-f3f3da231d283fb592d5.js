_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(c.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},c=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,c=t.hasQuery,a=void 0!==c&&c;return n||o&&a}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=u,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=d();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var c=r?Object.getOwnPropertyDescriptor(t,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),c=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),s=n("FYa8"),i=n("/0+H");function d(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return d=function(){return t},t}function u(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var h=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(u(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var c=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var s=o.key.slice(o.key.indexOf("$")+1);t.has(s)?c=!1:t.add(s)}switch(o.type){case"title":case"base":e.has(o.type)?c=!1:e.add(o.type);break;case"meta":for(var i=0,d=h.length;i<d;i++){var u=h[i];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?c=!1:n.add(u);else{var p=o.props[u],f=r[u]||new Set;"name"===u&&a||!f.has(p)?(f.add(p),r[u]=f):c=!1}}}return c}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function l(t){var e=t.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},e)}l.rewind=function(){};var j=l;e.default=j},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},"PH+e":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/color-blending",function(){return n("oeal")}])},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),c=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||c(t)||a()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),c=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),s=n("a1gu"),i=n("Nsbk");function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}e.__esModule=!0,e.default=void 0;var u=n("q1tI"),p=function(t){a(n,t);var e=d(n);function n(t){var c;return o(this,n),(c=e.call(this,t))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(r(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);e.default=p},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},fVdp:function(t,e,n){t.exports={svg:"ColorBlending_svg__2aHMP","filled-heading":"ColorBlending_filled-heading__naiFl",background:"ColorBlending_background__1S8r_",rotate:"ColorBlending_rotate__3qnB0"}},g4pe:function(t,e,n){t.exports=n("8Kt/")},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},oeal:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var r=n("nKUr"),o=n("g4pe"),c=n.n(o),a=n("q1tI"),s=n("fVdp"),i=n.n(s);function d(){var t=Object(a.useState)(0),e=t[0],n=t[1],o=Object(a.useState)(0),s=o[0],d=o[1];return Object(a.useEffect)((function(){n(300),d(200)}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:"imti | color blending"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("main",{className:"main",children:[Object(r.jsx)("h1",{className:"title",children:"color blending"}),Object(r.jsx)("p",{className:"description",children:"using svg + mix blend mode"}),Object(r.jsxs)("svg",{className:i.a.svg,viewBox:"0 0 ".concat(s," ").concat(e),children:[Object(r.jsxs)("clipPath",{id:"textClip",className:i.a["filled-heading"],children:[Object(r.jsx)("text",{y:"90",x:"50%",children:"Hey"}),Object(r.jsx)("text",{y:"180",x:"50%",children:"\ud83d\udeb4\u200d\u2642\ufe0f\u200d\ud83d\udca8"})]}),Object(r.jsxs)("g",{className:i.a.background,x:"50%","clip-path":"url(#textClip)",children:[Object(r.jsx)("path",{d:"m445.62-26.657c-19.58 20.137-3.6309 59.698 27.377 73.932 31.007 14.234 67.049-14.123 72.974-27.02 5.9253-12.875-13.142-59.988-24.058-65.022-10.937-5.012-42.19-16.996-76.294 18.11z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m449.78 166.4c20.137 19.58 59.698 3.6309 73.932-27.377 14.234-31.007-14.123-67.071-27.02-72.974-12.875-5.9253-3.5418 38.759-20.382 59.364-15.704 19.201-61.636 6.8608-26.53 40.987z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m299.4 7.4916c15.704-7.5959-10.269-35.128-31.297-38.002-20.983-2.8513-44.395 14.835-51.969 26.597-10.848 16.863 2.3389 30.785 9.7344 31.787 7.3954 1.0024 53.238-10.581 73.531-20.382z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m-23.125 15.756c-25.35 12.096-24.124 54.709 0 78.833 24.124 24.124 67.806 10.024 77.83 0 10.024-10.024 8.4869-60.834 0-69.321-8.487-8.487-33.658-30.584-77.83-9.5116z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m354 213.43c9.378-26.463-21.629-55.755-55.755-55.755-34.126 0-55.02 40.853-55.02 55.02 0 14.167 37 49.028 49.028 49.028 12.006 0 45.397-2.1607 61.748-48.293z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m269.57 39.746c-26.463-9.3557-55.756 21.629-55.756 55.755 0 34.126 40.853 55.02 55.02 55.02s-12.964-36.71-6.2816-62.438c6.2594-24.013 53.149-31.988 7.0167-48.338z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m396.7 253.28c22.676 16.551 42.123-41.187 30.272-73.197-11.851-32.01-54.686-51.857-77.118-53.706-32.188-2.6508-41.967 26.641-37.802 37.913 4.1878 11.271 55.355 67.584 84.647 88.99z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m368.92 42.13c-17.442 0.33414-5.3461 36.22 12.563 47.58 17.909 11.36 46.556 5.0788 58.339-2.4503 16.907-10.804 10.737-28.958 4.4328-32.968-6.3039-3.9873-52.793-12.586-75.336-12.162z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m409.18 183.25c-17.442 0.33413-5.3461 36.22 12.563 47.58 17.887 11.383 46.556 5.0788 58.34-2.4503 16.907-10.804 10.737-28.958 4.4328-32.968-6.304-3.9873-52.771-12.586-75.336-12.162z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m110.44 135.06c-25.349 12.096-24.124 54.709 0 78.833 24.124 24.124 67.806 10.024 77.83 0 10.024-10.024 8.4869-60.834 0-69.321-8.5093-8.487-33.658-30.584-77.83-9.5116z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m134.41-33.696c-25.35 12.096-24.124 54.709 0 78.833 24.124 24.124 67.806 10.024 77.83 0 10.024-10.024 8.4869-60.834 0-69.321-8.5092-8.4869-33.658-30.584-77.83-9.5116z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m71.301 148.81c12.096 25.349 54.708 24.124 78.833 0 24.124-24.124 10.024-67.807 0-77.83-10.024-10.024-16.774 35.128-39.717 48.583-21.407 12.586-60.188-14.925-39.116 29.248z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m132.74 79.753c3.4973 27.844 50.031 16.194 74.155-7.9301 24.124-24.124 17.553-32.789 7.5291-42.836-10.024-10.046-24.303 0.13365-47.246 13.588-21.407 12.608-38.18 7.3955-34.438 37.178z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m52.501 109.18c-27.844 3.4972-16.194 50.031 7.9301 74.155 24.124 24.124 32.79 17.553 42.836 7.5291 10.046-10.024-0.1337-24.303-13.588-47.246-12.608-21.429-7.3955-38.18-37.178-34.438z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m137.44 89.51c23.389-15.504-20.939-25.951-55.065-25.951-34.126 0-70.68 5.4352-80.192 25.817-13.655 29.27 10.425 48.605 22.431 48.605s82.575-28.423 112.83-48.471z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m171.61 118.56c23.389-15.504-20.939-25.951-55.065-25.951-34.126 0-70.68 5.4352-80.192 25.817-13.655 29.27 10.425 48.605 22.431 48.605s82.575-28.423 112.83-48.471z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m273.56 120.12c23.389-15.504-20.939-25.951-55.065-25.951s-70.68 5.4352-80.192 25.817c-13.655 29.27 10.425 48.605 22.431 48.605 12.006 0.0223 82.575-28.423 112.83-48.471z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m102.51 97.173c15.504 23.389 53.795-24.013 53.795-58.139 0-34.126-33.28-67.606-53.684-77.14-29.27-13.655-48.605 10.425-48.605 22.431 0 12.006 28.446 82.597 48.494 112.85z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m15.1 236.39c15.504 23.389 53.795-24.013 53.795-58.139s-33.28-67.606-53.662-77.118c-29.27-13.655-48.605 10.425-48.605 22.431 0 12.006 28.424 82.575 48.471 112.83z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m38.601 4.2171c-16.484-5.7471-17.575 32.099-4.7447 48.984 12.831 16.885 41.9 20.917 55.555 17.954 19.602-4.2546 20.115-23.434 15.593-29.381-4.5219-5.9253-45.108-30.139-66.403-37.556z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m48.068 156.65c-16.484-5.7471-17.575 32.099-4.7447 48.984 12.831 16.885 41.9 20.917 55.555 17.954 19.602-4.2546 20.115-23.434 15.593-29.381-4.522-5.9253-45.13-30.139-66.403-37.556z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m430.43 67.056c9.3779-26.463-21.63-55.755-55.756-55.755s-55.02 40.853-55.02 55.02c0 14.167 37 49.028 49.028 49.028 12.006 0.0223 45.397-2.1384 61.748-48.293z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m251.62 77.147c9.378-26.463-21.63-55.755-55.756-55.755s-55.02 40.853-55.02 55.02c0 14.167 37 49.051 49.006 49.051 12.029 0 45.42-2.1607 61.77-48.315z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m274.94 132.01c-22.164-17.219-46.823 23.924-46.823 58.028s10.781 35.596 24.971 35.596 17.108-17.263 23.79-43.014c6.2371-24.013 21.785-32.166-1.938-50.61z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m310.9 54.493c17.219-22.164-23.924-46.823-58.028-46.823-34.104 0-35.618 10.781-35.618 24.949 0 14.167 17.263 17.108 43.014 23.79 24.035 6.2594 32.21 21.785 50.632-1.9157z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m264.74 128.47c-5.5689 27.51 33.146 3.5418 57.27-20.583 24.124-24.124 46.132-53.84 38.447-74.979-11.026-30.361-41.722-26.998-50.209-18.511-8.4869 8.487-38.314 78.499-45.509 114.07z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m220.03 132.08c-5.5689 27.51 33.146 3.5418 57.27-20.583 24.124-24.124 46.132-53.818 38.448-74.979-11.026-30.361-41.722-26.998-50.209-18.511-8.5093 8.487-38.292 78.499-45.509 114.07z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m162.34 234.95c-5.7316 28.402 34.114 3.6566 58.943-21.25 24.829-24.906 47.48-55.562 39.571-77.409-11.348-31.322-42.941-27.873-51.698-19.111-8.7119 8.785-39.387 81.043-46.815 117.77z","stroke-width":".22962"}),Object(r.jsx)("path",{d:"m284.01 98.331c-27.51-5.5689-21.073 55.02 3.074 79.145 24.147 24.124 71.348 24.28 92.488 16.573 30.339-11.026 26.998-41.722 18.511-50.231-8.487-8.487-78.499-38.269-114.07-45.487z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m281.49-61.362c-27.51-5.5689-21.073 55.02 3.074 79.145 24.147 24.124 71.348 24.28 92.488 16.573 30.339-11.026 26.998-41.722 18.511-50.231-8.487-8.5092-78.499-38.292-114.07-45.486z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m394.94 118.87c15.704-7.5959-10.269-35.128-31.297-38.002-21.006-2.8513-44.417 14.835-51.991 26.597-10.848 16.863 2.3389 30.785 9.7344 31.809 7.4177 1.0024 53.261-10.581 73.554-20.404z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m315.04 74.385c-19.58 20.137-3.6309 59.698 27.376 73.932 31.007 14.234 67.071-14.123 72.974-27.02 5.9253-12.875-13.142-59.988-24.058-65.022-10.915-5.0342-42.167-16.974-76.293 18.11z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m483.42 148.49c-19.58 20.137-3.6309 59.698 27.376 73.932 31.008 14.256 67.072-14.123 72.974-27.02 5.9252-12.875-13.143-59.988-24.058-65.022-10.915-5.012-42.167-16.996-76.293 18.11z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m483.42 80.31c12.942 24.904 52.548-2.1607 66.782-33.168 14.256-31.007 5.0788-36.844-7.8187-42.769-12.875-5.9253-22.743 8.5538-39.584 29.136-15.682 19.224-33.213 20.159-19.38 46.801z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m418.38 135.75c-24.904 12.942 2.1608 52.548 33.168 66.782 31.007 14.234 36.844 5.0788 42.769-7.8187 5.9253-12.898-8.5538-22.743-29.136-39.584-19.224-15.704-20.137-33.235-46.801-19.38z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m491.22 87.817c16.551-22.676-28.646-17.063-60.634-5.2347-31.988 11.828-64.398 29.626-66.247 52.058-2.6508 32.188 26.641 41.967 37.913 37.801 11.249-4.1655 67.562-55.332 88.968-84.624z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m533.34 103.21c16.551-22.676-28.646-17.063-60.634-5.2347-31.988 11.828-64.398 29.626-66.247 52.058-2.6508 32.188 26.641 41.967 37.913 37.801 11.249-4.1655 67.562-55.31 88.968-84.624z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m625.47 49.548c16.551-22.676-28.646-17.063-60.634-5.2347-32.01 11.851-64.398 29.626-66.247 52.058-2.6508 32.188 26.641 41.967 37.913 37.801 11.249-4.1655 67.562-55.332 88.968-84.625z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m461.12 107.13c22.676 16.551 42.123-41.187 30.272-73.197-11.85-32.01-54.686-51.835-77.118-53.684-32.166-2.6508-41.945 26.619-37.779 37.891 4.1655 11.271 55.31 67.584 84.624 88.99z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m601.9 237.96c-15.704 7.5959 10.269 35.128 31.297 38.002 20.983 2.8513 44.395-14.835 51.969-26.597 10.848-16.863-2.3389-30.785-9.7344-31.787-7.3954-1.0024-53.238 10.581-73.531 20.382z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m547.3 32.024c-9.378 26.463 21.629 55.755 55.755 55.755 34.126 0 55.02-40.853 55.02-55.02 0-14.167-37-49.028-49.028-49.028-12.006 0-45.397 2.1607-61.748 48.293z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m631.73 205.71c26.463 9.3557 55.756-21.629 55.756-55.755 0-34.126-40.853-55.02-55.02-55.02s12.964 36.71 6.2816 62.438c-6.2594 24.013-53.149 31.988-7.0167 48.338z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m626.36 113.44c22.164 17.219 46.823-23.924 46.823-58.028s-10.781-35.596-24.971-35.596-17.108 17.263-23.79 43.014c-6.2371 24.013-21.785 32.166 1.938 50.61z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m590.41 190.96c-17.219 22.164 23.924 46.823 58.028 46.823 34.104 0 35.618-10.781 35.618-24.949 0-14.167-17.263-17.108-43.014-23.79-24.035-6.2594-32.21-21.785-50.632 1.9157z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m636.56 116.98c5.5689-27.51-33.146-3.5418-57.27 20.583-24.124 24.124-46.133 53.84-38.447 74.979 11.026 30.361 41.722 26.998 50.209 18.511 8.4869-8.487 38.314-78.499 45.509-114.07z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m681.27 113.37c5.5689-27.51-33.146-3.5418-57.27 20.583-24.124 24.124-46.132 53.818-38.448 74.979 11.026 30.361 41.722 26.998 50.209 18.511 8.5093-8.487 38.292-78.499 45.509-114.07z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m734.02 188.36c13.701-24.519-11.944-58.604-45.579-64.328-33.635-5.7237-61.109 30.995-63.495 44.987-2.391 13.97 28.221 54.542 40.067 56.58 11.862 2.0104 45.151 5.4976 69.007-37.239z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m692.88 65.812c-24.519-13.701-58.604 11.944-64.328 45.579-5.7237 33.635 31.001 61.131 44.987 63.495 13.97 2.391-6.6105-38.355 4.323-62.617 10.199-22.612 57.76-22.58 15.018-46.457z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m727.75 39.036c16.761-4.837-4.2105-36.369-24.45-42.708-20.224-6.3654-46.284 7.1438-55.717 17.466-13.535 14.811-2.876 30.75 4.2509 32.992 7.1212 2.2198 54.23-1.5013 75.916-7.7503z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m731.16 87.29c20.706-18.947-15.688-50.198-49.322-55.922-33.635-5.7237-36.903 4.6301-39.288 18.622-2.3853 13.992 14.149 19.754 38.388 30.694 22.633 10.194 28.053 26.891 50.222 6.6064z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m628.53 148.48c-10.118 26.187 32.086 9.0674 59.923-10.637 27.836-19.704 54.536-45.284 50.516-67.43-5.7704-31.777-36.595-33.642-46.405-26.701-9.7877 6.9351-50.944 70.912-64.034 104.77z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m618.21 182.56c27.616-5.1225 37.462-46.601 20.403-76.147-17.058-29.546-62.902-27.232-75.178-20.144-12.277 7.088-23.943 56.565-17.942 66.959 6.0012 10.394 24.596 38.253 72.717 29.332z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m569.35 72.75c27.801 3.8286 28.591-44.135 11.533-73.681-17.058-29.546-27.129-25.442-39.427-18.359-12.298 7.0822-6.1608 23.509 0.89676 49.153 6.6322 23.962-2.7382 38.793 26.998 42.887z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m555.61 177.73c14.435 9.8176 25.284-26.456 17.261-46.087-8.0234-19.63-35.059-31.049-49.015-31.721-20.036-0.96383-25.494 17.429-22.666 24.344 2.8342 6.8937 35.77 40.787 54.42 53.463z","stroke-width":".22275"}),Object(r.jsx)("path",{d:"m250.61 235.97c27.616-5.1225 37.462-46.601 20.403-76.147-17.058-29.546-62.902-27.232-75.178-20.144-12.277 7.088-23.943 56.565-17.942 66.959 6.0012 10.394 24.596 38.253 72.717 29.332z","stroke-width":".22275"})]})]})]})]})}}},[["PH+e",0,1]]]);