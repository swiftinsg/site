(self.webpackChunkswiftinsg_org=self.webpackChunkswiftinsg_org||[]).push([[49],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return y}});var r=n(4694),a=n(5697),o=n.n(a),l=n(7294);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=d(t.slice(0,r)),o=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[a]=o,e}),{})}var g=!1;try{g=!0}catch(w){}function b(e){return r.Qc.icon?r.Qc.icon(e):null===e?null:"object"===i(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function y(e){var t=e.forwardedRef,n=m(e,["forwardedRef"]),a=n.icon,o=n.mask,l=n.symbol,i=n.className,c=n.title,d=n.titleId,p=b(a),w=h("classes",[].concat(f(function(e){var t,n=e.spin,r=e.pulse,a=e.fixedWidth,o=e.inverse,l=e.border,i=e.listItem,c=e.flip,u=e.size,m=e.rotation,f=e.pull,d=(s(t={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(t,"fa-rotate-".concat(m),null!=m&&0!==m),s(t,"fa-pull-".concat(f),null!=f),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(n)),f(i.split(" ")))),E=h("transform","string"==typeof n.transform?r.Qc.transform(n.transform):n.transform),O=h("mask",b(o)),k=(0,r.qv)(p,u({},w,{},E,{},O,{symbol:l,title:c,titleId:d}));if(!k)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var x=k.abstract,j={ref:t};return Object.keys(n).forEach((function(e){y.defaultProps.hasOwnProperty(e)||(j[e]=n[e])})),v(x[0],j)}y.displayName="FontAwesomeIcon",y.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=p(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[d(t)]=r}return e}),{attrs:{}}),l=r.style,i=void 0===l?{}:l,s=m(r,["style"]);return o.attrs.style=u({},o.attrs.style,{},i),t.apply(void 0,[n.tag,u({},o.attrs,{},s)].concat(f(a)))}.bind(null,l.createElement)},8076:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(9274);var o=function(e){var t=e.children,n=e.className,o=e.style,l=e.bgStyle,i=e.bg;return r.createElement(a.Z,{className:[i?"index-module--bannerSection--3k6Km":"index-module--bannerNoBg--1eyHE",n].join(" "),style:Object.assign({color:i?"white":"black"},o)},r.createElement("div",{className:"index-module--bg--2ugIb",style:Object.assign({backgroundImage:"url("+i+")"},l)}),t)}},6636:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(7606);var o=function(){return r.createElement(r.Fragment,null,r.createElement("footer",{className:"index-module--footer--iZ-vb"},r.createElement("span",null,"© 2021 Swift Innovators' Summit. All rights reserved."),r.createElement("div",null,r.createElement("a",{target:"_blank",href:"https://www.instagram.com/swiftinsg/"},r.createElement(a.G,{icon:["fab","instagram"]})),r.createElement("a",{target:"_blank",href:"https://twitter.com/swiftinsg"},r.createElement(a.G,{icon:["fab","twitter"]})),r.createElement("a",{target:"_blank",href:"mailto:hello@swiftinsg.org"},r.createElement(a.G,{icon:["far","envelope"]})))))}},1322:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(5444),o=n(7606),l="index-module--landingHeader--3JkDZ",i=[{href:"/about",name:"About"},{href:"/sis",name:"Swift Innovators' Summit"},{href:"/students",name:"Students"},{href:"/apps",name:"Apps"},{href:"/news",name:"News"},{href:"/joinus",name:"Join Us"}];var s=function(e){var t=e.startWhite,n=(0,r.useState)(!1),s=n[0],c=n[1],u=(0,r.useState)(!1),m=u[0],f=u[1];return(0,r.useEffect)((function(){function e(e){var t=window.scrollY;c(t>25)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),r.createElement(r.Fragment,null,r.createElement("header",{className:[l,s?"index-module--beyondScroll--3hGar":t?"index-module--startWhite--3RCjB":""].join(" ")},r.createElement(a.rU,{to:"/"},r.createElement("div",{className:"index-module--swiftIcon--1ZTYU"})),r.createElement("div",{className:"index-module--headerLinks--11H-I"},i.map((function(e){return r.createElement(a.rU,{to:e.href},e.name)})),r.createElement(o.G,{icon:["fas","bars"],onClick:function(){return f(!m)}}),r.createElement("div",{className:"index-module--drawer--d1rYx",style:{width:m?"100vw":"0px"}},r.createElement("a",{href:"javascript:void(0)",className:"index-module--closeBtn--cdUmP",onClick:function(){return f(!m)}},"×"),i.map((function(e){return r.createElement(a.rU,{to:e.href},e.name)}))))))}},8689:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a="index-module--page--1i8Aa";var o=function(e){var t=e.children,n=e.className,o=e.style,l=e.genericBackground;return r.createElement("div",{className:[a,n,l?"index-module--bg--Ph-wm":""].join(" "),style:o},t)}},4489:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(7606);var o=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"index-module--readMore--3hz7W",onClick:function(){return window.scroll({top:window.innerHeight-95,behavior:"smooth"})}},r.createElement("span",null,"Read more"),r.createElement(a.G,{icon:["fas","arrow-down"]})))}},9274:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a="index-module--section--3EKCW";var o=function(e){var t=e.children,n=e.className,o=e.style;return r.createElement("div",{className:[a,n].join(" "),style:o},t)}},8729:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),a=function(e){var t=e.title;return r.createElement("div",null,r.createElement("div",{className:"index-module--titleHolder--5o3lT"},r.createElement("span",{className:"index-module--title--2JcC7"},t),r.createElement("hr",null)))}},2310:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a="index-module--text--Tlr9v";var o=function(e){var t=e.children,n=e.className,o=e.style;return r.createElement("div",{className:[a,n].join(" "),style:o},t)}},4798:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),a=n(5444),o=n(2310),l=n(8689),i=n(9274),s=n(1322),c=n(8729),u=n(4489),m=n(6636),f=n(8076);var d=function(){return r.createElement(r.Fragment,null,r.createElement(s.Z,null),r.createElement(l.Z,{genericBackground:!0},r.createElement(f.Z,null,r.createElement("figure",null),r.createElement("h1",null,"About the Swift",r.createElement("br",null),"Accelerator Programme"),r.createElement(u.Z,null)),r.createElement(i.Z,{className:"about-module--sectionTwo--12IxQ"},r.createElement(c.Z,{title:"About Swift Accelerator Programme"}),r.createElement(o.Z,null,r.createElement("p",null,"The Swift Accelerator Programme is an intensive talent development programme for secondary school students with an interest and aptitude for app development and computational thinking. Over 8 months, participants learn to code in Swift, and apply story-telling and design thinking principles to design, build, and release an iOS app of their own."),r.createElement("p",null,"First launched in 2018 by IMDA and Apple, the programme has helped develop three selected groups of young coders in 2018, 2019, and 2020, by giving them the space, opportunity, and guidance in coding, story-telling, and design thinking, in order to help them take their passion to the next level."),r.createElement("p",null,"The programme is fully subsidised for successful applicants.")),r.createElement(c.Z,{title:"About Tinkercademy"}),r.createElement("div",{className:"about-module--logoHolder--Krj1I"},r.createElement(a.rU,{target:"_blank",to:"https://tinkertanker.com/"},r.createElement("img",{src:"/assets/logos/tinkertanker.png"})),r.createElement(a.rU,{target:"_blank",to:"https://tinkercademy.com/"},r.createElement("img",{src:"/assets/logos/tinkercademy.png"})),r.createElement(a.rU,{to:"#"},r.createElement("img",{src:"/assets/logos/acn.svg"}))),r.createElement(o.Z,null,r.createElement("p",null,"Tinkercademy is the education programmes brand of Tinkertanker Pte Ltd, a member of the Apple Consultants Network, where we teach coding and making to learners of all ages. The Swift Accelerator Programme is one of our flagship coding courses, an intensive year-long course for talented young app developers, developed and run with support from IMDA and Apple. We also run Swift Coding Clubs for students to learn to code and build apps with iPad and Xcode, as well as hands-on Swift Playgrounds workshops with micro:bit, Sphero, Dash, and more. Our vision is that everyone should be empowered to enjoy creating with technology. To that end, our mission is to inspire delight and wonder with technology, to have students learn from the best educators and crafters in the field.")),r.createElement(c.Z,{title:"Programme Outline"}),r.createElement(o.Z,null,r.createElement("p",null,"Get more details to the program outline ",r.createElement(a.rU,{to:"/joinus"},"here"),"."))),r.createElement(m.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-768b399da79e58ae39c3.js.map