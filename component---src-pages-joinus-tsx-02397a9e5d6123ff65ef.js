(self.webpackChunkswiftinsg_org=self.webpackChunkswiftinsg_org||[]).push([[560],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return y}});var r=n(4694),a=n(5697),l=n.n(a),i=n(7294);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=f(t.slice(0,r)),l=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=l:e[a]=l,e}),{})}var h=!1;try{h=!0}catch(v){}function g(e){return r.Qc.icon?r.Qc.icon(e):null===e?null:"object"===o(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function y(e){var t=e.forwardedRef,n=d(e,["forwardedRef"]),a=n.icon,l=n.mask,i=n.symbol,o=n.className,c=n.title,f=n.titleId,p=g(a),v=b("classes",[].concat(m(function(e){var t,n=e.spin,r=e.pulse,a=e.fixedWidth,l=e.inverse,i=e.border,o=e.listItem,c=e.flip,u=e.size,d=e.rotation,m=e.pull,f=(s(t={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":l,"fa-border":i,"fa-li":o,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(t,"fa-rotate-".concat(d),null!=d&&0!==d),s(t,"fa-pull-".concat(m),null!=m),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(n)),m(o.split(" ")))),E=b("transform","string"==typeof n.transform?r.Qc.transform(n.transform):n.transform),O=b("mask",g(l)),k=(0,r.qv)(p,u({},v,{},E,{},O,{symbol:i,title:c,titleId:f}));if(!k)return function(){var e;!h&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var x=k.abstract,j={ref:t};return Object.keys(n).forEach((function(e){y.defaultProps.hasOwnProperty(e)||(j[e]=n[e])})),w(x[0],j)}y.displayName="FontAwesomeIcon",y.propTypes={border:l().bool,className:l().string,mask:l().oneOfType([l().object,l().array,l().string]),fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf(["horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),size:l().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),l=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=p(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[f(t)]=r}return e}),{attrs:{}}),i=r.style,o=void 0===i?{}:i,s=d(r,["style"]);return l.attrs.style=u({},l.attrs.style,{},o),t.apply(void 0,[n.tag,u({},l.attrs,{},s)].concat(m(a)))}.bind(null,i.createElement)},8076:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(9274);var l=function(e){var t=e.children,n=e.className,l=e.style,i=e.bgStyle,o=e.bg;return r.createElement(a.Z,{className:[o?"index-module--bannerSection--3k6Km":"index-module--bannerNoBg--1eyHE",n].join(" "),style:Object.assign({color:o?"white":"black"},l)},r.createElement("div",{className:"index-module--bg--2ugIb",style:Object.assign({backgroundImage:"url("+o+")"},i)}),t)}},6636:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(7606);var l=function(){return r.createElement(r.Fragment,null,r.createElement("footer",{className:"index-module--footer--iZ-vb"},r.createElement("span",null,"© 2021 Swift Innovators' Summit. All rights reserved."),r.createElement("div",null,r.createElement("a",{target:"_blank",href:"https://www.instagram.com/swiftinsg/"},r.createElement(a.G,{icon:["fab","instagram"]})),r.createElement("a",{target:"_blank",href:"https://twitter.com/swiftinsg"},r.createElement(a.G,{icon:["fab","twitter"]})),r.createElement("a",{target:"_blank",href:"mailto:hello@swiftinsg.org"},r.createElement(a.G,{icon:["far","envelope"]})))))}},1322:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(5444),l=n(7606),i="index-module--landingHeader--3JkDZ",o=[{href:"/about",name:"About"},{href:"/sis",name:"Swift Innovators' Summit"},{href:"/students",name:"Students"},{href:"/apps",name:"Apps"},{href:"/news",name:"News & Achievements"}];var s=function(e){var t=e.startWhite,n=(0,r.useState)(!1),s=n[0],c=n[1],u=(0,r.useState)(!1),d=u[0],m=u[1];return(0,r.useEffect)((function(){function e(e){var t=window.scrollY;c(t>25)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),r.createElement(r.Fragment,null,r.createElement("header",{className:[i,s?"index-module--beyondScroll--3hGar":t?"index-module--startWhite--3RCjB":""].join(" ")},r.createElement(a.rU,{to:"/"},r.createElement("div",{className:"index-module--swiftIcon--1ZTYU"})),r.createElement("div",{className:"index-module--headerLinks--11H-I"},o.map((function(e){return r.createElement(a.rU,{to:e.href},e.name)})),r.createElement(l.G,{icon:["fas","bars"],onClick:function(){return m(!d)}}),r.createElement("div",{className:"index-module--drawer--d1rYx",style:{width:d?"100vw":"0px"}},r.createElement("a",{href:"javascript:void(0)",className:"index-module--closeBtn--cdUmP",onClick:function(){return m(!d)}},"×"),o.map((function(e){return r.createElement(a.rU,{to:e.href},e.name)}))))))}},8689:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="index-module--page--1i8Aa";var l=function(e){var t=e.children,n=e.className,l=e.style,i=e.genericBackground;return r.createElement("div",{className:[a,n].join(" "),style:Object.assign({},l,{backgroundImage:i?"url(/assets/genericBg.svg)":""})},t)}},4489:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(7606);var l=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"index-module--readMore--3hz7W",onClick:function(){return window.scroll({top:window.innerHeight-95,behavior:"smooth"})}},r.createElement("span",null,"Read more"),r.createElement(a.G,{icon:["fas","arrow-down"]})))}},9274:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="index-module--section--3EKCW";var l=function(e){var t=e.children,n=e.className,l=e.style;return r.createElement("div",{className:[a,n].join(" "),style:l},t)}},8729:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),a=function(e){var t=e.title;return r.createElement("div",null,r.createElement("div",{className:"index-module--titleHolder--5o3lT"},r.createElement("span",{className:"index-module--title--2JcC7"},t),r.createElement("hr",null)))}},2310:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="index-module--text--Tlr9v";var l=function(e){var t=e.children,n=e.className,l=e.style;return r.createElement("div",{className:[a,n].join(" "),style:l},t)}},9355:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r={};n.r(r),n.d(r,{J9:function(){return s},Sq:function(){return o},ts:function(){return l},ov:function(){return i},rO:function(){return a},c8:function(){return d},Os:function(){return m},LF:function(){return c},Z2:function(){return u}});var a="joinus-module--linkText--3uLwE",l="joinus-module--flavorButton--1fGuJ",i="joinus-module--flexContainer--6_EiB",o="joinus-module--bodyText--1JWDJ",s="joinus-module--altButton--2RdC2",c="joinus-module--sectionTwo--1Peru",u="joinus-module--timeline--UVhzg",d="joinus-module--outlineDiv--2lTgp",m="joinus-module--schedule--1BnIE",f=n(8076),p=n(7606),h=n(6636),g=n(1322),b=n(8689),y=n(7294),w=n(4489),v=n(9274),E=n(8729),O=n.p+"static/joinus-e71d504c30dd112103fad5ea604e2164.jpeg",k=n(2310),x=[{title:"Introduction to programming in Swift & Xcode",desc:"We begin by introducing students to programming in the latest version of the Swift programming language. Swift is a modern, open-source language created by Apple, designed to be easy for beginners to learn, and powerful for advanced users to utilise in creating iOS apps.\n               Students will be introduced to coding concepts in Swift, using Xcode Playgrounds: constants, variables, data types, operators, and control flow.",pic:"/assets/xcode.png"},{title:"From Idea to launch",desc:"This module introduces students to design thinking philosophies, and how to apply them to create, validate, and pitch ideas, how to find product-market fit, and do basic wireframing. We will include case studies on technology products well known ones, as well as our own, which are more obscure but rich in lessons learned.\n               On the design front, students will be introduced to user interface and user experience (UI/UX) design tools such as Figma to prototype their own apps.​\n               The second half of this module introduces further development in Xcode, such as functions, classes, collections, and further UIKit controls such as Stack Views."},{title:"Further iOS app development in Xcode",desc:"This module begins exploring the development on iOS apps using Xcode. Building upon the foundation laid in Modules 1 and 2, students will be guided into creating a variety of apps with real-world applications, making full use of the iOS UIKit framework.\n        iOS concepts include critical UI elements such as table views, collection views, navigation controllers, and tab bar controllers. Advanced Swift language constructs such as Optionals, Guard, and enumerations will be introduced here."},{title:"Designing for delight",desc:"Apple has always emphasised the need to delight users in creating apps, and regularly features apps that shine through in terms of design, experience, and animation. This module will provide some background for students on how to achieve the high standards of design expected of iOS apps.\n               This module brings an introduction to icon design and graphics tools, using, preferably, freely available tools such as Figma.\n               In Xcode, students will learn how to implement animations in Xcode, using basic UIView animations and transitions."},{title:"Persistence and libraries",desc:"This module covers more technically advanced features often found in iOS apps, particularly permanent data storage (on device or in the cloud), and working with external web services to store and retrieve data.\n               Students will also begin to make full use of iOS device capabilities by learning and utilising powerful built-in iOS application programming interfaces (APIs). These include web and API access, geolocation, accelerometer readings, and more. Students will also be exposed to commonly-used external libraries that allow them to quickly implement powerful features while saving on development time."},{title:"Building, marketing, and launching your app",desc:"Creating an app is never just about the technical requirements; companies and developers have to make an effort to get noticed in a store containing millions of other apps.\n               In this final module, students will revise their design thinking principles to ensure they don’t “make something nobody wants”, revenue models available to apps, how to project-manage apps, and pitch them to “investors” and customers.\n               Finally, students will be closely guided through the process of proposing, designing, implementing, and finally submitting their apps to the Apple App Store for public consumption. Students will also learn how best to present and tell a story about their apps."}];function j(e){var t=e.title,n=e.desc,r=e.pic;return y.createElement("div",{className:d},y.createElement("div",null,y.createElement("h1",null,t),y.createElement("p",null,n.split("\n").map((function(e){return y.createElement(y.Fragment,null,e,y.createElement("br",null),y.createElement("br",null))})))),r?y.createElement("img",{src:r}):"")}var S=function(){return y.createElement(y.Fragment,null,y.createElement(g.Z,{startWhite:!0}),y.createElement(b.Z,{className:r.page},y.createElement(f.Z,{bg:O},y.createElement("h1",null,"Join Us"),y.createElement("h3",{id:o},"Applications for the Class of 2021 are closed."),y.createElement("h3",{id:o},"Email ",y.createElement("a",{className:a,href:"mailto:hello@swiftinsg.org"},"hello@swiftinsg.org")," to find out more, or follow us on social media to keep up with the Class of 2021."),y.createElement("div",{className:i},y.createElement("a",{href:"https://www.instagram.com/swiftinsg",className:l},y.createElement(p.G,{icon:["fab","instagram"]}),"Follow us on Instagram"),y.createElement("a",{href:"https://www.youtube.com/channel/UCGYAY8RMWAkx_aDkPV_tFsA",className:l,id:s},y.createElement(p.G,{icon:["fab","youtube"]}),"Explore our Youtube Channel")),y.createElement(w.Z,null)),y.createElement(v.Z,{className:c},y.createElement(E.Z,{title:"Application Details"}),y.createElement(k.Z,null,y.createElement("p",null,"To apply for the Swift Accelerator Programme, applicants must demonstrate strong aptitude and interest in programming and app design. The application process is as follows:  "),y.createElement("ol",null,y.createElement("li",null,"Take note of the important dates below for deadlines and briefings. "),y.createElement("li",null,"Confirm that you can attend the ",y.createElement("b",null,"vast majority")," of the scheduled sessions. ",y.createElement("a",{href:"https://cld.tk.sg/6quE6O6P"},"See the schedule below.")),y.createElement("li",null,"Try out Unit 1 of our ",y.createElement("a",{href:"https://tk.sg/swiftui-videos-unit1"},"SwiftUI video series"),". You may use Swift Playgrounds on iPad or Mac for this. If you have any issues, email us at ",y.createElement("a",{href:"mailto:hello@swiftinsg.org"},"hello@swiftinsg.org"),"."),y.createElement("li",null,"Prepare a ",y.createElement("b",null,"minute-long")," video introducing yourself and your end-product based on [3]. Reflect on your experience creating it (how you got it to work, any challenges, anything new you've tried, etc.). Our focus will be on the content of the video and not the video production quality. However, please ensure the video and audio are clear enough that we are able to understand what you say."),y.createElement("li",null,"Prepare any supporting documents, links or any information you think might be relevant when we consider your application"),y.createElement("li",null,"Complete an individual entrance test and survey. The test includes coding, design, essay questions (involving the aforementioned video), and should be completed in about an hour.")),y.createElement("p",null,y.createElement("b",null,"Important note:")," The programme is fully subsidised for successful applicants. Please read through the application form carefully, and ensure, before applying:"),y.createElement("ol",null,y.createElement("li",null,"You can attend a vast majority of the scheduled sessions. ",y.createElement("a",{href:"https://cld.tk.sg/6quE6O6P"},"See the schedule below.")),y.createElement("li",null,"You're interested enough in coding, design, and app development to spend a huge chunk of your free time learning and practising — the entire programme lasts 180 hours, and you'll spend more time than that coding on your own."),y.createElement("li",null,"You're up for a challenge!")))),y.createElement(v.Z,{className:c},y.createElement(E.Z,{title:"Dates to Note"}),y.createElement(k.Z,null,y.createElement("ul",null,y.createElement("li",null,y.createElement("b",null,"1 March, Tuesday:")," Applications open."),y.createElement("li",null,y.createElement("b",null,"12 March, Saturday, 10am:")," ​Online briefing introducing the programme, with time for questions. Please register at ",y.createElement("a",{href:"https://tk.sg/swift2022briefing"},"tk.sg/swift2022briefing"),"."),y.createElement("li",null,y.createElement("b",null,"18 March, Friday, 11pm:")," Applications close."),y.createElement("li",null,y.createElement("b",null,"28 March, Monday:")," Successful applicants will be notified through email"),y.createElement("li",null,y.createElement("b",null,"9 April, Saturday, 9am:")," First lesson")))),y.createElement(v.Z,{className:c},y.createElement(E.Z,{title:"Schedule for 2022"}),y.createElement(k.Z,null,y.createElement("p",null,"Please note, this schedule is very tentative, and based on having most classes conducted online — we will aim to bring together the class for face-to-face lessons at Apple, but only if allowed by prevailing safe distancing measures.")),y.createElement("div",{style:{textAlign:"center"}},y.createElement("img",{className:m,src:"/assets/schedule2022.png"}),y.createElement("p",null,y.createElement("b",null,"You may download a copy ",y.createElement("a",{href:"https://cld.tk.sg/6quE6O6"},"here"))))),y.createElement(v.Z,{className:u},y.createElement(E.Z,{title:"Programme Outline"}),y.createElement("div",null,x.map((function(e){return y.createElement(j,e)})))),y.createElement(h.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-joinus-tsx-02397a9e5d6123ff65ef.js.map