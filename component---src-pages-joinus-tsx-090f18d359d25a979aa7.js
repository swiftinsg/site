(self.webpackChunkswiftinsg_org=self.webpackChunkswiftinsg_org||[]).push([[560],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return w}});var r=n(4694),o=n(5697),a=n.n(o),i=n(7294);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=f(t.slice(0,r)),a=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[o]=a,e}),{})}var g=!1;try{g=!0}catch(y){}function h(e){return r.Qc.icon?r.Qc.icon(e):null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function w(e){var t=e.forwardedRef,n=d(e,["forwardedRef"]),o=n.icon,a=n.mask,i=n.symbol,l=n.className,c=n.title,f=n.titleId,p=h(o),y=b("classes",[].concat(m(function(e){var t,n=e.spin,r=e.pulse,o=e.fixedWidth,a=e.inverse,i=e.border,l=e.listItem,c=e.flip,u=e.size,d=e.rotation,m=e.pull,f=(s(t={"fa-spin":n,"fa-pulse":r,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(t,"fa-rotate-".concat(d),null!=d&&0!==d),s(t,"fa-pull-".concat(m),null!=m),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(n)),m(l.split(" ")))),E=b("transform","string"==typeof n.transform?r.Qc.transform(n.transform):n.transform),O=b("mask",h(a)),x=(0,r.qv)(p,u({},y,{},E,{},O,{symbol:i,title:c,titleId:f}));if(!x)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var j=x.abstract,k={ref:t};return Object.keys(n).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(k[e]=n[e])})),v(j[0],k)}w.displayName="FontAwesomeIcon",w.propTypes={border:a().bool,className:a().string,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=p(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[f(t)]=r}return e}),{attrs:{}}),i=r.style,l=void 0===i?{}:i,s=d(r,["style"]);return a.attrs.style=u({},a.attrs.style,{},l),t.apply(void 0,[n.tag,u({},a.attrs,{},s)].concat(m(o)))}.bind(null,i.createElement)},8076:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o=n(9274);var a=function(e){var t=e.children,n=e.className,a=e.style,i=e.bgStyle,l=e.bg;return r.createElement(o.Z,{className:[l?"index-module--bannerSection--3k6Km":"index-module--bannerNoBg--1eyHE",n].join(" "),style:Object.assign({color:l?"white":"black"},a)},r.createElement("div",{className:"index-module--bg--2ugIb",style:Object.assign({backgroundImage:"url("+l+")"},i)}),t)}},6636:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o=n(7606);var a=function(){return r.createElement(r.Fragment,null,r.createElement("footer",{className:"index-module--footer--iZ-vb"},r.createElement("span",null,"© 2021 Swift Innovators' Summit. All rights reserved."),r.createElement("div",null,r.createElement("a",{target:"_blank",href:"https://www.instagram.com/swiftinsg/"},r.createElement(o.G,{icon:["fab","instagram"]})),r.createElement("a",{target:"_blank",href:"https://twitter.com/swiftinsg"},r.createElement(o.G,{icon:["fab","twitter"]})),r.createElement("a",{target:"_blank",href:"mailto:hello@swiftinsg.org"},r.createElement(o.G,{icon:["far","envelope"]})))))}},1322:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=n(5444),a=n(7606),i="index-module--landingHeader--3JkDZ",l=[{href:"/about",name:"About"},{href:"/sis",name:"Swift Innovators' Summit"},{href:"/students",name:"Students"},{href:"/apps",name:"Apps"},{href:"/news",name:"News & Achievements"},{href:"/joinus",name:"Join Us"}];var s=function(e){var t=e.startWhite,n=(0,r.useState)(!1),s=n[0],c=n[1],u=(0,r.useState)(!1),d=u[0],m=u[1];return(0,r.useEffect)((function(){function e(e){var t=window.scrollY;c(t>25)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),r.createElement(r.Fragment,null,r.createElement("header",{className:[i,s?"index-module--beyondScroll--3hGar":t?"index-module--startWhite--3RCjB":""].join(" ")},r.createElement(o.rU,{to:"/"},r.createElement("div",{className:"index-module--swiftIcon--1ZTYU"})),r.createElement("div",{className:"index-module--headerLinks--11H-I"},l.map((function(e){return r.createElement(o.rU,{to:e.href},e.name)})),r.createElement(a.G,{icon:["fas","bars"],onClick:function(){return m(!d)}}),r.createElement("div",{className:"index-module--drawer--d1rYx",style:{width:d?"100vw":"0px"}},r.createElement("a",{href:"javascript:void(0)",className:"index-module--closeBtn--cdUmP",onClick:function(){return m(!d)}},"×"),l.map((function(e){return r.createElement(o.rU,{to:e.href},e.name)}))))))}},8689:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o="index-module--page--1i8Aa";var a=function(e){var t=e.children,n=e.className,a=e.style,i=e.genericBackground;return r.createElement("div",{className:[o,n].join(" "),style:Object.assign({},a,{backgroundImage:i?"url(/assets/genericBg.svg)":""})},t)}},4489:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o=n(7606);var a=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"index-module--readMore--3hz7W",onClick:function(){return window.scroll({top:window.innerHeight-95,behavior:"smooth"})}},r.createElement("span",null,"Read more"),r.createElement(o.G,{icon:["fas","arrow-down"]})))}},9274:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o="index-module--section--3EKCW";var a=function(e){var t=e.children,n=e.className,a=e.style;return r.createElement("div",{className:[o,n].join(" "),style:a},t)}},8729:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),o=function(e){var t=e.title;return r.createElement("div",null,r.createElement("div",{className:"index-module--titleHolder--5o3lT"},r.createElement("span",{className:"index-module--title--2JcC7"},t),r.createElement("hr",null)))}},9355:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r={};n.r(r),n.d(r,{J9:function(){return b},Sq:function(){return h},ts:function(){return p},ov:function(){return g},rO:function(){return f},c8:function(){return v},LF:function(){return w}});var o=n(7294),a=n(8689),i=n(9274),l=n(8076),s=n(1322),c=n(8729),u=n(4489),d=n(6636),m=n(7606),f="joinus-module--linkText--3uLwE",p="joinus-module--flavorButton--1fGuJ",g="joinus-module--flexContainer--6_EiB",h="joinus-module--bodyText--1JWDJ",b="joinus-module--altButton--2RdC2",w="joinus-module--sectionTwo--1Peru",v="joinus-module--outlineDiv--2lTgp",y=n.p+"static/joinus-e71d504c30dd112103fad5ea604e2164.jpeg",E=[{title:"Introduction to programming in Swift & Xcode",desc:"We begin by introducing students to programming in the latest version of the Swift programming language. Swift is a modern, open-source language created by Apple, designed to be easy for beginners to learn, and powerful for advanced users to utilise in creating iOS apps.\n               Students will be introduced to coding concepts in Swift, using Xcode Playgrounds: constants, variables, data types, operators, and control flow.",pic:"/assets/xcode.png"},{title:"From Idea to launch",desc:"This module introduces students to design thinking philosophies, and how to apply them to create, validate, and pitch ideas, how to find product-market fit, and do basic wireframing. We will include case studies on technology products well known ones, as well as our own, which are more obscure but rich in lessons learned.\n               On the design front, students will be introduced to user interface and user experience (UI/UX) design tools such as Figma to prototype their own apps.​\n               The second half of this module introduces further development in Xcode, such as functions, classes, collections, and further UIKit controls such as Stack Views."},{title:"Further iOS app development in Xcode",desc:"This module begins exploring the development on iOS apps using Xcode. Building upon the foundation laid in Modules 1 and 2, students will be guided into creating a variety of apps with real-world applications, making full use of the iOS UIKit framework.\n        iOS concepts include critical UI elements such as table views, collection views, navigation controllers, and tab bar controllers. Advanced Swift language constructs such as Optionals, Guard, and enumerations will be introduced here."},{title:"Designing for delight",desc:"Apple has always emphasised the need to delight users in creating apps, and regularly features apps that shine through in terms of design, experience, and animation. This module will provide some background for students on how to achieve the high standards of design expected of iOS apps.\n               This module brings an introduction to icon design and graphics tools, using, preferably, freely available tools such as Figma.\n               In Xcode, students will learn how to implement animations in Xcode, using basic UIView animations and transitions."},{title:"Persistence and libraries",desc:"This module covers more technically advanced features often found in iOS apps, particularly permanent data storage (on device or in the cloud), and working with external web services to store and retrieve data.\n               Students will also begin to make full use of iOS device capabilities by learning and utilising powerful built-in iOS application programming interfaces (APIs). These include web and API access, geolocation, accelerometer readings, and more. Students will also be exposed to commonly-used external libraries that allow them to quickly implement powerful features while saving on development time."},{title:"Building, marketing, and launching your app",desc:"Creating an app is never just about the technical requirements; companies and developers have to make an effort to get noticed in a store containing millions of other apps.\n               In this final module, students will revise their design thinking principles to ensure they don’t “make something nobody wants”, revenue models available to apps, how to project-manage apps, and pitch them to “investors” and customers.\n               Finally, students will be closely guided through the process of proposing, designing, implementing, and finally submitting their apps to the Apple App Store for public consumption. Students will also learn how best to present and tell a story about their apps."}];function O(e){var t=e.title,n=e.desc,r=e.pic;return o.createElement("div",{className:v},o.createElement("div",null,o.createElement("h1",null,t),o.createElement("p",null,n.split("\n").map((function(e){return o.createElement(o.Fragment,null,e,o.createElement("br",null),o.createElement("br",null))})))),r?o.createElement("img",{src:r}):"")}var x=function(){return o.createElement(o.Fragment,null,o.createElement(s.Z,{startWhite:!0}),o.createElement(a.Z,{className:r.page},o.createElement(l.Z,{bg:y},o.createElement("h1",null,"Join Us"),o.createElement("h3",{id:h},"Applications for the Class of 2021 are closed."),o.createElement("h3",{id:h},"Email ",o.createElement("a",{className:f,href:"mailto:hello@swiftinsg.org"},"hello@swiftinsg.org")," to find out more, or follow us on social media to keep up with the Class of 2021."),o.createElement("div",{className:g},o.createElement("a",{href:"https://www.instagram.com/swiftinsg",className:p},o.createElement(m.G,{icon:["fab","instagram"]}),"Follow us on Instagram"),o.createElement("a",{href:"https://www.youtube.com/channel/UCGYAY8RMWAkx_aDkPV_tFsA",className:p,id:b},o.createElement(m.G,{icon:["fab","youtube"]}),"Explore our Youtube Channel")),o.createElement(u.Z,null)),o.createElement(i.Z,{className:w},o.createElement(c.Z,{title:"Programme Outline"}),o.createElement("div",null,E.map((function(e){return o.createElement(O,e)})))),o.createElement(d.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-joinus-tsx-090f18d359d25a979aa7.js.map