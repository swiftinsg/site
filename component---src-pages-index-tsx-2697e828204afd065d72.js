(self.webpackChunkswiftinsg_org=self.webpackChunkswiftinsg_org||[]).push([[691],{7606:function(e,t,r){"use strict";r.d(t,{G:function(){return O}});var n=r(4694),o=r(5697),a=r.n(o),i=r(7294);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=p(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var y=!1;try{y=!0}catch(v){}function d(e){return n.Qc.icon?n.Qc.icon(e):null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function O(e){var t=e.forwardedRef,r=u(e,["forwardedRef"]),o=r.icon,a=r.mask,i=r.symbol,l=r.className,c=r.title,p=r.titleId,b=d(o),v=g("classes",[].concat(m(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,a=e.inverse,i=e.border,l=e.listItem,c=e.flip,f=e.size,u=e.rotation,m=e.pull,p=(s(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(f),null!=f),s(t,"fa-rotate-".concat(u),null!=u&&0!==u),s(t,"fa-pull-".concat(m),null!=m),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),m(l.split(" ")))),w=g("transform","string"==typeof r.transform?n.Qc.transform(r.transform):r.transform),j=g("mask",d(a)),x=(0,n.qv)(b,f({},v,{},w,{},j,{symbol:i,title:c,titleId:p}));if(!x)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var E=x.abstract,k={ref:t};return Object.keys(r).forEach((function(e){O.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),h(E[0],k)}O.displayName="FontAwesomeIcon",O.propTypes={border:a().bool,className:a().string,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=b(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[p(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=u(n,["style"]);return a.attrs.style=f({},a.attrs.style,{},l),t.apply(void 0,[r.tag,f({},a.attrs,{},s)].concat(m(o)))}.bind(null,i.createElement)},4126:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(7294),o=r(5444),a=r(7606),i="index-module--main--1ojXz",l="index-module--section--egTkv",s="index-module--sectionOne--bdPmR",c=function(e){return console.log(i),n.createElement("main",{className:i},n.createElement("section",{className:[l,s].join(" ")},n.createElement("header",{className:"index-module--landingHeader--1Vmmr"},n.createElement(o.rU,{to:"/",style:{marginLeft:0,height:"8vh",width:"8vh"}},n.createElement("div",{className:"index-module--swiftIcon--3_4yt"})),n.createElement(o.rU,{to:"/about"},"About"),n.createElement(o.rU,{to:"/sis"},"Swift Innovators' Summit"),n.createElement(o.rU,{to:"/students"},"Students"),n.createElement(o.rU,{to:"/apps"},"Apps"),n.createElement(o.rU,{to:"/news"},"News & Achievements"),n.createElement(o.rU,{to:"/joinus"},"Join Us")),n.createElement("div",{className:"index-module--jumboText--3jc7g"},n.createElement("h1",null,"Swift Accelerator",n.createElement("br",null),"Programme"),n.createElement("div",null,n.createElement("a",{target:"_blank",href:"https://www.instagram.com/swiftinsg/"},n.createElement(a.G,{icon:["fab","instagram"]})),n.createElement("a",{target:"_blank",href:"https://twitter.com/swiftinsg"},n.createElement(a.G,{icon:["fab","twitter"]})),n.createElement("a",{target:"_blank",href:"mailto:hello@swiftinsg.org"},n.createElement(a.G,{icon:["far","envelope"]}))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2697e828204afd065d72.js.map