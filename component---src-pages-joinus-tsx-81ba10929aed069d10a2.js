(self.webpackChunkswiftinsg_org=self.webpackChunkswiftinsg_org||[]).push([[560],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return b}});var r=n(4694),a=n(5697),i=n.n(a),o=n(7294);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=f(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[a]=i,e}),{})}var h=!1;try{h=!0}catch(v){}function g(e){return r.Qc.icon?r.Qc.icon(e):null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function w(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function b(e){var t=e.forwardedRef,n=d(e,["forwardedRef"]),a=n.icon,i=n.mask,o=n.symbol,l=n.className,c=n.title,f=n.titleId,p=g(a),v=w("classes",[].concat(m(function(e){var t,n=e.spin,r=e.pulse,a=e.fixedWidth,i=e.inverse,o=e.border,l=e.listItem,c=e.flip,u=e.size,d=e.rotation,m=e.pull,f=(s(t={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(t,"fa-rotate-".concat(d),null!=d&&0!==d),s(t,"fa-pull-".concat(m),null!=m),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(n)),m(l.split(" ")))),E=w("transform","string"==typeof n.transform?r.Qc.transform(n.transform):n.transform),S=w("mask",g(i)),O=(0,r.qv)(p,u({},v,{},E,{},S,{symbol:o,title:c,titleId:f}));if(!O)return function(){var e;!h&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var k=O.abstract,I={ref:t};return Object.keys(n).forEach((function(e){b.defaultProps.hasOwnProperty(e)||(I[e]=n[e])})),y(k[0],I)}b.displayName="FontAwesomeIcon",b.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},b.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var y=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=p(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[f(t)]=r}return e}),{attrs:{}}),o=r.style,l=void 0===o?{}:o,s=d(r,["style"]);return i.attrs.style=u({},i.attrs.style,{},l),t.apply(void 0,[n.tag,u({},i.attrs,{},s)].concat(m(a)))}.bind(null,o.createElement)},8076:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=n(9274);var i=function(e){var t=e.children,n=e.className,i=e.style,o=e.bgStyle,l=e.bg;return r.createElement(a.Z,{className:[l?"index-module--bannerSection--3k6Km":"index-module--bannerNoBg--1eyHE",n].join(" "),style:Object.assign({color:l?"white":"black"},i)},r.createElement("div",{className:"index-module--bg--2ugIb",style:Object.assign({backgroundImage:"url("+l+")"},o)}),t)}},6636:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=n(7606);var i=function(){return r.createElement(r.Fragment,null,r.createElement("footer",{className:"index-module--footer--iZ-vb"},r.createElement("span",null,"© 2022 Swift Innovators' Summit. All rights reserved."),r.createElement("div",null,r.createElement("a",{target:"_blank",href:"https://www.instagram.com/swiftinsg/"},r.createElement(a.G,{icon:["fab","instagram"]})),r.createElement("a",{target:"_blank",href:"https://twitter.com/swiftinsg"},r.createElement(a.G,{icon:["fab","twitter"]})),r.createElement("a",{target:"_blank",href:"mailto:hello@swiftinsg.org"},r.createElement(a.G,{icon:["far","envelope"]})))))}},1322:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(5444),i=n(7606),o="index-module--landingHeader--3JkDZ",l=[{href:"/about",name:"About"},{href:"/sis",name:"Swift Innovators' Summit"},{href:"/students",name:"Students"},{href:"/apps",name:"Apps"},{href:"/news",name:"News & Achievements"},{href:"/joinus",name:"Join Us"}];var s=function(e){var t=e.startWhite,n=(0,r.useState)(!1),s=n[0],c=n[1],u=(0,r.useState)(!1),d=u[0],m=u[1];return(0,r.useEffect)((function(){function e(e){var t=window.scrollY;c(t>25)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),r.createElement(r.Fragment,null,r.createElement("header",{className:[o,s?"index-module--beyondScroll--3hGar":t?"index-module--startWhite--3RCjB":""].join(" ")},r.createElement(a.rU,{to:"/"},r.createElement("div",{className:"index-module--swiftIcon--1ZTYU"})),r.createElement("div",{className:"index-module--headerLinks--11H-I"},l.map((function(e){return r.createElement(a.rU,{to:e.href},e.name)})),r.createElement(i.G,{icon:["fas","bars"],onClick:function(){return m(!d)}}),r.createElement("div",{className:"index-module--drawer--d1rYx",style:{width:d?"100vw":"0px"}},r.createElement("a",{href:"javascript:void(0)",className:"index-module--closeBtn--cdUmP",onClick:function(){return m(!d)}},"×"),l.map((function(e){return r.createElement(a.rU,{to:e.href},e.name)}))))))}},8689:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a="index-module--page--1i8Aa";var i=function(e){var t=e.children,n=e.className,i=e.style,o=e.genericBackground;return r.createElement("div",{className:[a,n].join(" "),style:Object.assign({},i,{backgroundImage:o?"url(/assets/genericBg.svg)":""})},t)}},4489:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=n(7606);var i=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"index-module--readMore--3hz7W",onClick:function(){return window.scroll({top:window.innerHeight-95,behavior:"smooth"})}},r.createElement("span",null,"Read more"),r.createElement(a.G,{icon:["fas","arrow-down"]})))}},9274:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a="index-module--section--3EKCW";var i=function(e){var t=e.children,n=e.className,i=e.style;return r.createElement("div",{className:[a,n].join(" "),style:i},t)}},8729:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),a=function(e){var t=e.title;return r.createElement("div",null,r.createElement("div",{className:"index-module--titleHolder--5o3lT"},r.createElement("span",{className:"index-module--title--2JcC7"},t),r.createElement("hr",null)))}},2310:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a="index-module--text--Tlr9v";var i=function(e){var t=e.children,n=e.className,i=e.style;return r.createElement("div",{className:[a,n].join(" "),style:i},t)}},9355:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r={};n.r(r),n.d(r,{Sq:function(){return i},rO:function(){return a},c8:function(){return s},Os:function(){return c},LF:function(){return o},Z2:function(){return l}});var a="joinus-module--linkText--3uLwE",i="joinus-module--bodyText--1JWDJ",o="joinus-module--sectionTwo--1Peru",l="joinus-module--timeline--UVhzg",s="joinus-module--outlineDiv--2lTgp",c="joinus-module--schedule--1BnIE",u=n(8076),d=n(6636),m=n(1322),f=n(8689),p=n(7294),h=n(4489),g=n(9274),w=n(8729),b=n.p+"static/joinus-e71d504c30dd112103fad5ea604e2164.jpeg",y=n(2310),v=n(5444),E=[{title:"Introduction to programming in SwiftUI",desc:"This module will introduce students to SwiftUI. SwiftUI is a new, powerful declarative UI framework for Apple’s platforms. It is designed to be easy to use and pick up for beginners compared to its predecessors, UIKit and AppKit. Students will be introduced to the concept of modifiers and stack views within SwiftUI. Students will get started on Swift Playgrounds.",pic:"/assets/xcode.png"},{title:"Introduction to programming in Swift",desc:"This module will introduce students to programming in the latest version of the Swift programming language. Swift is a modern, open-source language created by Apple, designed to be easy for beginners to learn, and powerful for advanced users to utilise in creating iOS apps.\n                Students will be introduced to coding concepts in Swift, using Xcode Playgrounds: constants, variables, data types, operators, and control flow. "},{title:"State and Interactivity",desc:"Students will learn to create interactive apps by using interactive elements, stored states, and animations.\n                They will learn to use @State variables, frames and positioning, more modifiers and animations. "},{title:"Design and Prototyping",desc:"This module introduces students to design thinking philosophies, and how to apply them to create, validate, and pitch ideas, how to find product-market fit, and do basic wireframing. We will include case studies on technology products—well known ones, as well as our own, which are more obscure but rich in lessons learned. \n                They will be introduced to Keynote for prototyping, resources such as Apple’s Human Interface Guidelines and accessibility guidelines.\n                On the design front, students will be introduced to user interface and user experience (UI/UX) design tools, preferably free ones such as XD or Figma, to prototype their own apps."},{title:"Exploring Swift",desc:"Students will learn intermediate-level Swift features, essential for building apps in SwiftUI such as arrays, structs, properties and methods. Students will also be introduced to closures."},{title:"Array-Based App",desc:"Students will make use of their knowledge of arrays and structs to create a multi-screen array based app"},{title:"Swift in-depth",desc:"Students will learn about in-depth features of the Swift programming language which are commonly used in SwiftUI, namely, iteration and optionals."},{title:"List-Based Apps",desc:"Students will learn to create an app that allows them to perform basic CRUD (Create, Read, Update, Delete) operations. Students will also learn more about manipulating arrays and navigation views in SwiftUI."},{title:"Persistence and Packages",desc:"This module covers more technically advanced features often found in iOS apps, particularly permanent data storage (on device or in the cloud), and working with external web services to store and retrieve data. \n                Students will also begin to make full use of iOS device capabilities by learning and utilising powerful built-in iOS application programming interfaces (APIs). These include web and API access, geolocation, accelerometer readings, and more. Students will also be exposed to commonly-used external libraries that allow them to quickly implement powerful features while saving on development time."},{title:"Introduction to UIKit",desc:"This module covers UIKit and how students can integrate UIKit views into their SwiftUI apps. UIKit is an imperative UI framework developed by Apple for creating user interfaces for iOS/iPadOS devices. Currently, many technologies and packages, including Apple’s, rely on UIKit to work as it provides more flexibility than SwiftUI.\n                The module will ease students from SwiftUI’s declarative syntax to UIKit’s imperative syntax by introducing them to concepts like SwiftUI Path, a way to draw paths and create rich vectors imperatively, within SwiftUI, similar to Python Turtle. Following which, they will be introduced to UIView, UIViewRepresentable and Autolayout.\n                Importantly, they will be focusing on programmatic UIKit instead of Storyboards as programmatic UIKit has better interoperability with SwiftUI."},{title:"Building, marketing, and launching your app",desc:"Creating an app is never just about the technical requirements; companies and developers have to make an effort to get noticed in a store containing millions of other apps. \n                In this final module, students will revise their design thinking principles to ensure they don’t “make something nobody wants”, revenue models available to apps, how to project-manage apps, and pitch them to “investors” and customers. \n                Finally, students will be closely guided through the process of proposing, designing, implementing, and finally submitting their apps to the Apple App Store for public consumption. Students will also learn how best to present and tell a story about their apps."}];function S(e){var t=e.title,n=e.desc,r=e.pic;return p.createElement("div",{className:s},p.createElement("div",null,p.createElement("h1",null,t),p.createElement("p",null,n.split("\n").map((function(e){return p.createElement(p.Fragment,null,e,p.createElement("br",null),p.createElement("br",null))})))),r?p.createElement("img",{src:r}):"")}var O=function(){return p.createElement(p.Fragment,null,p.createElement(m.Z,{startWhite:!0}),p.createElement(f.Z,{className:r.page},p.createElement(u.Z,{bg:b},p.createElement("h1",null,"Join Us"),p.createElement("h3",{id:i},"Applications for the Class of 2022 have closed"),p.createElement("h3",{id:i},"Email ",p.createElement(v.rU,{className:a,href:"mailto:hello@swiftinsg.org"},"hello@swiftinsg.org")," to find out more, or follow us on social media to keep up with the Class of 2022."),p.createElement(h.Z,null)),p.createElement(g.Z,{className:o},p.createElement(w.Z,{title:"Frequently Asked Questions"}),p.createElement(y.Z,null,p.createElement("ul",null,p.createElement("li",null,p.createElement("b",null,"Does the programme cost anything to join?")," No, the classes and optional certification are sponsored by IMDA."),p.createElement("li",null,p.createElement("b",null,"Must students be from the Infocomm/Media/AV Club to join?")," We will give priority to students from these clubs, as they are IMDA-supported clubs and this is an IMDA-sponsored programme. "),p.createElement("li",null,p.createElement("b",null,"Can Sec 4s/JC students join?")," Only if your schedule allows — please take a careful look at the schedule on this page, which is designed for Sec 1-3. IP Year 4s have joined the programme and found our schedule doesn't clash much; we suspect O-level and JC students might have a tougher time in this regard. "),p.createElement("li",null,p.createElement("b",null,"Do we need a Mac for the programme?")," Yes. If you don't have one, we should be able to arrange a loan for the programme. But in case we can't get enough loans, we may need to prioritise applicants who have their own. "),p.createElement("li",null,p.createElement("b",null,"Why did you push back the application deadline?")," Teachers we spoke to at the graduation this week agreed this holiday week is quite busy for students (and we're guilty of adding to that, running 3 other ongoing competitions & challenges), so this extension would allow students to spend a bit more time on their submissions. "),p.createElement("li",null,p.createElement("b",null,"My iPad PLD can't run Swift Playgrounds apps, how can I do the activity required for the application?")," Please watch ",p.createElement(v.rU,{to:"https://www.youtube.com/watch?v=NGBcPkwOAc0"},"this video")," for a workaround."),p.createElement("li",null,p.createElement("b",null,"The application requires an iPad, and I don't have one. How?")," If your school can loan you an iPad for 2-3 hours, you should be able to complete that segment in that time. Alternatively, email us at hello@swiftinsg.org to arrange a time to come to our office (at Henderson Road) to use our iPads for this activity."),p.createElement("li",null,p.createElement("b",null,"What's the difference between this and the Swift Explorers Programme?")," We are also supporting this pilot programme hosted by Crescent Girls' School, which is a light introduction to prototyping and coding, suitable for anyone with a broad interest in design and app development. The Swift Accelerator Programme, on the other hand, goes much deeper into app development, with your own app as a final product. Find out more at ",p.createElement(v.rU,{to:"https://www.crescent.edu.sg/cradle/swift-explorers-singapore-ses/about-ses"},"this link"))))),p.createElement(g.Z,{className:o},p.createElement(w.Z,{title:"Schedule for 2022"}),p.createElement(y.Z,null,p.createElement("p",null,"Please note, this schedule is very tentative, and based on having most classes conducted online — we will aim to bring together the class for face-to-face lessons at Apple, but only if allowed by prevailing safe distancing measures.")),p.createElement("div",{style:{textAlign:"center"}},p.createElement("img",{className:c,src:"/assets/schedule2022.png"}),p.createElement("p",null,p.createElement("b",null,"You may download a copy ",p.createElement(v.rU,{href:"https://cld.tk.sg/6quE6O6P"},"here"))))),p.createElement(g.Z,{className:l},p.createElement(w.Z,{title:"Programme Outline"}),p.createElement("div",null,E.map((function(e){return p.createElement(S,e)})))),p.createElement(d.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-joinus-tsx-81ba10929aed069d10a2.js.map