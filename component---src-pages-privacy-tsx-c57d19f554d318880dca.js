(self.webpackChunkswiftinsg_org=self.webpackChunkswiftinsg_org||[]).push([[831],{7606:function(e,t,r){"use strict";r.d(t,{G:function(){return b}});var n=r(4694),a=r(5697),o=r.n(a),l=r(7294);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=d(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var y=!1;try{y=!0}catch(g){}function h(e){return n.Qc.icon?n.Qc.icon(e):null===e?null:"object"===i(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function b(e){var t=e.forwardedRef,r=m(e,["forwardedRef"]),a=r.icon,o=r.mask,l=r.symbol,i=r.className,s=r.title,d=r.titleId,p=h(a),g=v("classes",[].concat(f(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,l=e.border,i=e.listItem,s=e.flip,u=e.size,m=e.rotation,f=e.pull,d=(c(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(u),null!=u),c(t,"fa-rotate-".concat(m),null!=m&&0!==m),c(t,"fa-pull-".concat(f),null!=f),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(r)),f(i.split(" ")))),w=v("transform","string"==typeof r.transform?n.Qc.transform(r.transform):r.transform),P=v("mask",h(o)),S=(0,n.qv)(p,u({},g,{},w,{},P,{symbol:l,title:s,titleId:d}));if(!S)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var k=S.abstract,O={ref:t};return Object.keys(r).forEach((function(e){b.defaultProps.hasOwnProperty(e)||(O[e]=r[e])})),E(k[0],O)}b.displayName="FontAwesomeIcon",b.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},b.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var E=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=p(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,c=m(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},i),t.apply(void 0,[r.tag,u({},o.attrs,{},c)].concat(f(a)))}.bind(null,l.createElement)},8076:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),a=r(9274);var o=function(e){var t=e.children,r=e.className,o=e.style,l=e.bgStyle,i=e.bg;return n.createElement(a.Z,{className:[i?"index-module--bannerSection--3k6Km":"index-module--bannerNoBg--1eyHE",r].join(" "),style:Object.assign({color:i?"white":"black"},o)},n.createElement("div",{className:"index-module--bg--2ugIb",style:Object.assign({backgroundImage:"url("+i+")"},l)}),t)}},6636:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),a=r(7606);var o=function(){return n.createElement(n.Fragment,null,n.createElement("footer",{className:"index-module--footer--iZ-vb"},n.createElement("span",null,"© 2022 Swift Innovators' Summit. All rights reserved."),n.createElement("div",null,n.createElement("a",{target:"_blank",href:"https://www.instagram.com/swiftinsg/"},n.createElement(a.G,{icon:["fab","instagram"]})),n.createElement("a",{target:"_blank",href:"https://twitter.com/swiftinsg"},n.createElement(a.G,{icon:["fab","twitter"]})),n.createElement("a",{target:"_blank",href:"mailto:hello@swiftinsg.org"},n.createElement(a.G,{icon:["far","envelope"]})))))}},1322:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),a=r(5444),o=r(7606),l="index-module--landingHeader--3JkDZ",i=[{href:"/about",name:"About"},{href:"/sis",name:"Swift Innovators' Summit"},{href:"/students",name:"Students"},{href:"/apps",name:"Apps"},{href:"/news",name:"News & Achievements"},{href:"/joinus",name:"Join Us"}];var c=function(e){var t=e.startWhite,r=(0,n.useState)(!1),c=r[0],s=r[1],u=(0,n.useState)(!1),m=u[0],f=u[1];return(0,n.useEffect)((function(){function e(e){var t=window.scrollY;s(t>25)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n.createElement(n.Fragment,null,n.createElement("header",{className:[l,c?"index-module--beyondScroll--3hGar":t?"index-module--startWhite--3RCjB":""].join(" ")},n.createElement(a.rU,{to:"/"},n.createElement("div",{className:"index-module--swiftIcon--1ZTYU"})),n.createElement("div",{className:"index-module--headerLinks--11H-I"},i.map((function(e){return n.createElement(a.rU,{to:e.href},e.name)})),n.createElement(o.G,{icon:["fas","bars"],onClick:function(){return f(!m)}}),n.createElement("div",{className:"index-module--drawer--d1rYx",style:{width:m?"100vw":"0px"}},n.createElement("a",{href:"javascript:void(0)",className:"index-module--closeBtn--cdUmP",onClick:function(){return f(!m)}},"×"),i.map((function(e){return n.createElement(a.rU,{to:e.href},e.name)}))))))}},8689:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),a="index-module--page--1i8Aa";var o=function(e){var t=e.children,r=e.className,o=e.style,l=e.genericBackground;return n.createElement("div",{className:[a,r].join(" "),style:Object.assign({},o,{backgroundImage:l?"url(/assets/genericBg.svg)":""})},t)}},4489:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),a=r(7606);var o=function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"index-module--readMore--3hz7W",onClick:function(){return window.scroll({top:window.innerHeight-95,behavior:"smooth"})}},n.createElement("span",null,"Read more"),n.createElement(a.G,{icon:["fas","arrow-down"]})))}},9274:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),a="index-module--section--3EKCW";var o=function(e){var t=e.children,r=e.className,o=e.style;return n.createElement("div",{className:[a,r].join(" "),style:o},t)}},8729:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),a=function(e){var t=e.title;return n.createElement("div",null,n.createElement("div",{className:"index-module--titleHolder--5o3lT"},n.createElement("span",{className:"index-module--title--2JcC7"},t),n.createElement("hr",null)))}},2310:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),a="index-module--text--Tlr9v";var o=function(e){var t=e.children,r=e.className,o=e.style;return n.createElement("div",{className:[a,r].join(" "),style:o},t)}},1886:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n="privacy-module--subSection--UP-PB",a=r(8076),o=r(6636),l=r(1322),i=r(5444),c=r(8689),s=r(7294),u=r(4489),m=r(9274),f=r(8729),d=r(2310);var p=function(){return s.createElement(s.Fragment,null,s.createElement(l.Z,null),s.createElement(c.Z,{genericBackground:!0},s.createElement(a.Z,null,s.createElement("figure",null),s.createElement("h1",null,"Privacy Policy"),s.createElement(u.Z,null)),s.createElement(m.Z,{className:"privacy-module--section--142VY"},s.createElement(f.Z,{title:"Privacy Policy"}),s.createElement(d.Z,null,s.createElement("p",null,"Effective date: January 06, 2021"),s.createElement("p",null,'​Swift Accelerator Apps ("us", "we", or "our") operates the Swift Accelerator Apps mobile application (the "Service").'),s.createElement("p",null,"This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for Swift Accelerator Apps is created with the help of the ",s.createElement(i.rU,{to:"https://www.freeprivacypolicy.com/free-privacy-policy-generator.php"},"Free Privacy Policy Generator"),"."),s.createElement("p",null,"We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions."))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Information Collection And Use"}),s.createElement(d.Z,null,s.createElement("p",null,"We collect several different types of information for various purposes to provide and improve our Service to you."))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Types of Data Collected"}),s.createElement(d.Z,null,s.createElement("p",null,"We collect several different types of information for various purposes to provide and improve our Service to you."),s.createElement("p",null,s.createElement("b",null,"Personal Data")),s.createElement("p",null,'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:'),s.createElement("ul",null,s.createElement("li",null,"Cookies and Usage Data")),s.createElement("p",null,s.createElement("b",null,"Usage Data")),s.createElement("p",null,'When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data ("Usage Data").'),s.createElement("p",null,s.createElement("b",null,"Tracking & Cookies Data")),s.createElement("p",null,"We use cookies and similar tracking technologies to track the activity on our Service and hold certain information."),s.createElement("p",null,"Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service."),s.createElement("p",null,"You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."),s.createElement("p",null,"Examples of Cookies we use:"),s.createElement("ul",null,s.createElement("li",null,"Session Cookies. We use Session Cookies to operate our Service."),s.createElement("li",null,"Preference Cookies. We use Preference Cookies to remember your preferences and various settings."),s.createElement("li",null,"Security Cookies. We use Security Cookies for security purposes.")))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Use of Data"}),s.createElement(d.Z,null,s.createElement("p",null,"Swift Accelerator Apps uses the collected data for various purposes:"),s.createElement("ul",null,s.createElement("li",null,"To provide and maintain the Service"),s.createElement("li",null,"To notify you about changes to our Service"),s.createElement("li",null,"To allow you to participate in interactive features of our Service when you choose to do so"),s.createElement("li",null,"To provide customer care and support"),s.createElement("li",null,"To provide analysis or valuable information so that we can improve the Service"),s.createElement("li",null,"To monitor the usage of the Service"),s.createElement("li",null,"To detect, prevent and address technical issues")))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Transfer Of Data"}),s.createElement(d.Z,null,s.createElement("p",null,"Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."),s.createElement("p",null,"If you are located outside Singapore and choose to provide information to us, please note that we transfer the data, including Personal Data, to Singapore and process it there."),s.createElement("p",null,"Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."),s.createElement("p",null,"Swift Accelerator Apps will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Disclosure Of Data"}),s.createElement(d.Z,null,s.createElement("p",null,s.createElement("b",null,"Legal Requirements")),s.createElement("p",null,"Swift Accelerator Apps may disclose your Personal Data in the good faith belief that such action is necessary to:"),s.createElement("ul",null,s.createElement("li",null,"To comply with a legal obligation"),s.createElement("li",null,"To protect and defend the rights or property of Swift Accelerator Apps"),s.createElement("li",null,"To prevent or investigate possible wrongdoing in connection with the Service"),s.createElement("li",null,"To protect the personal safety of users of the Service or the public"),s.createElement("li",null,"To protect against legal liability")))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Security Of Data"}),s.createElement(d.Z,null,s.createElement("p",null,"The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Service Providers"}),s.createElement(d.Z,null,s.createElement("p",null,'We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.'),s.createElement("p",null,"These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Links To Other Sites"}),s.createElement(d.Z,null,s.createElement("p",null,"Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."),s.createElement("p",null,"We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Children's Privacy"}),s.createElement(d.Z,null,s.createElement("p",null,'Our Service does not address anyone under the age of 18 ("Children").'),s.createElement("p",null,"We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Changes To This Privacy Policy"}),s.createElement(d.Z,null,s.createElement("p",null,'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.'),s.createElement("p",null,"You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."))),s.createElement(m.Z,{className:n},s.createElement(f.Z,{title:"Contact Us"}),s.createElement(d.Z,null,s.createElement("p",null,"If you have any questions about this Privacy Policy, please contact us:"),s.createElement("ul",null,s.createElement("li",null,"By visiting this page on our website: https://www.swiftinsg.org/contact-us")))),s.createElement(o.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-privacy-tsx-c57d19f554d318880dca.js.map