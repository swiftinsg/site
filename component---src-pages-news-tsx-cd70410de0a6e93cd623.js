(self.webpackChunkswiftinsg_org=self.webpackChunkswiftinsg_org||[]).push([[114],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return y}});var r=n(4694),a=n(5697),l=n.n(a),s=n(7294);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=d(t.slice(0,r)),l=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=l:e[a]=l,e}),{})}var w=!1;try{w=!0}catch(v){}function b(e){return r.Qc.icon?r.Qc.icon(e):null===e?null:"object"===i(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?o({},e,t):{}}function y(e){var t=e.forwardedRef,n=m(e,["forwardedRef"]),a=n.icon,l=n.mask,s=n.symbol,i=n.className,c=n.title,d=n.titleId,p=b(a),v=h("classes",[].concat(f(function(e){var t,n=e.spin,r=e.pulse,a=e.fixedWidth,l=e.inverse,s=e.border,i=e.listItem,c=e.flip,u=e.size,m=e.rotation,f=e.pull,d=(o(t={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":l,"fa-border":s,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),o(t,"fa-rotate-".concat(m),null!=m&&0!==m),o(t,"fa-pull-".concat(f),null!=f),o(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(n)),f(i.split(" ")))),E=h("transform","string"==typeof n.transform?r.Qc.transform(n.transform):n.transform),O=h("mask",b(l)),N=(0,r.qv)(p,u({},v,{},E,{},O,{symbol:s,title:c,titleId:d}));if(!N)return function(){var e;!w&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var x=N.abstract,j={ref:t};return Object.keys(n).forEach((function(e){y.defaultProps.hasOwnProperty(e)||(j[e]=n[e])})),g(x[0],j)}y.displayName="FontAwesomeIcon",y.propTypes={border:l().bool,className:l().string,mask:l().oneOfType([l().object,l().array,l().string]),fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf(["horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),size:l().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),l=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=p(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[d(t)]=r}return e}),{attrs:{}}),s=r.style,i=void 0===s?{}:s,o=m(r,["style"]);return l.attrs.style=u({},l.attrs.style,{},i),t.apply(void 0,[n.tag,u({},l.attrs,{},o)].concat(f(a)))}.bind(null,s.createElement)},8076:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(9274);var l=function(e){var t=e.children,n=e.className,l=e.style,s=e.bgStyle,i=e.bg;return r.createElement(a.Z,{className:[i?"index-module--bannerSection--3k6Km":"index-module--bannerNoBg--1eyHE",n].join(" "),style:Object.assign({color:i?"white":"black"},l)},r.createElement("div",{className:"index-module--bg--2ugIb",style:Object.assign({backgroundImage:"url("+i+")"},s)}),t)}},6636:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(7606);var l=function(){return r.createElement(r.Fragment,null,r.createElement("footer",{className:"index-module--footer--iZ-vb"},r.createElement("span",null,"© 2022 Swift Innovators' Summit. All rights reserved."),r.createElement("div",null,r.createElement("a",{target:"_blank",href:"https://www.instagram.com/swiftinsg/"},r.createElement(a.G,{icon:["fab","instagram"]})),r.createElement("a",{target:"_blank",href:"https://twitter.com/swiftinsg"},r.createElement(a.G,{icon:["fab","twitter"]})),r.createElement("a",{target:"_blank",href:"mailto:hello@swiftinsg.org"},r.createElement(a.G,{icon:["far","envelope"]})))))}},1322:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(5444),l=n(7606),s="index-module--landingHeader--3JkDZ",i=[{href:"/about",name:"About"},{href:"/sis",name:"Swift Innovators' Summit"},{href:"/students",name:"Students"},{href:"/apps",name:"Apps"},{href:"/news",name:"News & Achievements"},{href:"/joinus",name:"Join Us"}];var o=function(e){var t=e.startWhite,n=(0,r.useState)(!1),o=n[0],c=n[1],u=(0,r.useState)(!1),m=u[0],f=u[1];return(0,r.useEffect)((function(){function e(e){var t=window.scrollY;c(t>25)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),r.createElement(r.Fragment,null,r.createElement("header",{className:[s,o?"index-module--beyondScroll--3hGar":t?"index-module--startWhite--3RCjB":""].join(" ")},r.createElement(a.rU,{to:"/"},r.createElement("div",{className:"index-module--swiftIcon--1ZTYU"})),r.createElement("div",{className:"index-module--headerLinks--11H-I"},i.map((function(e){return r.createElement(a.rU,{to:e.href},e.name)})),r.createElement(l.G,{icon:["fas","bars"],onClick:function(){return f(!m)}}),r.createElement("div",{className:"index-module--drawer--d1rYx",style:{width:m?"100vw":"0px"}},r.createElement("a",{href:"javascript:void(0)",className:"index-module--closeBtn--cdUmP",onClick:function(){return f(!m)}},"×"),i.map((function(e){return r.createElement(a.rU,{to:e.href},e.name)}))))))}},8689:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="index-module--page--1i8Aa";var l=function(e){var t=e.children,n=e.className,l=e.style,s=e.genericBackground;return r.createElement("div",{className:[a,n].join(" "),style:Object.assign({},l,{backgroundImage:s?"url(/assets/genericBg.svg)":""})},t)}},4489:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(7606);var l=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"index-module--readMore--3hz7W",onClick:function(){return window.scroll({top:window.innerHeight-95,behavior:"smooth"})}},r.createElement("span",null,"Read more"),r.createElement(a.G,{icon:["fas","arrow-down"]})))}},9274:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="index-module--section--3EKCW";var l=function(e){var t=e.children,n=e.className,l=e.style;return r.createElement("div",{className:[a,n].join(" "),style:l},t)}},8729:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),a=function(e){var t=e.title;return r.createElement("div",null,r.createElement("div",{className:"index-module--titleHolder--5o3lT"},r.createElement("span",{className:"index-module--title--2JcC7"},t),r.createElement("hr",null)))}},2310:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="index-module--text--Tlr9v";var l=function(e){var t=e.children,n=e.className,l=e.style;return r.createElement("div",{className:[a,n].join(" "),style:l},t)}},9988:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r="news-module--articleBlock--3MTn9",a="news-module--articleText--RQFk2",l="news-module--articleImgContainer--L_4-Q",s="news-module--articleTitle--Ae1Fi",i="news-module--seeMoreButton--3DbwN",o=n(8076),c=n(6636),u=n(1322),m=n(8689),f=n(7294),d=n(4489),p=n(9274),w=n(8729),b=n(2310),h=n.p+"static/news-cf872fb52b96ee46c02b306c6ffc94d9.jpeg",y=[{name:"Yee Jia Chen",img:"/assets/news/wwdc/jiachen.jpeg",desc1:"WWDC 2020 and 2021 Swift Student Challenge winner",desc2:"SAP Class of 2018",embedLink:"https://www.youtube.com/embed/iHAuAlpHKZE"},{name:"Chua Wei Xuan",img:"/assets/news/wwdc/weixuan.jpeg",desc1:"WWDC 2021 Swift Student Challenge winner",desc2:"SAP Class of 2021",embedLink:"https://www.youtube.com/embed/W7KstoEl_bs"}];var g=function(){return f.createElement(f.Fragment,null,f.createElement(u.Z,{startWhite:!0}),f.createElement(m.Z,null,f.createElement(o.Z,{bg:h},f.createElement("h1",null,"News &",f.createElement("br",null),"Achievements"),f.createElement(d.Z,null)),f.createElement(p.Z,{className:"news-module--sectionTwo--1qvZV"},f.createElement(w.Z,{title:"News"}),f.createElement("div",{className:"news-module--flexContainer--3n6KJ"},f.createElement("div",{className:r},f.createElement("img",{src:"/assets/news/news2.jpg",className:l,alt:"sis 2021"}),f.createElement("div",{className:a},f.createElement("h2",{className:s},"Our Class of 2020 graduated at the Swift Innovators' Summit 2021!"),f.createElement("a",{href:"https://www.youtube.com/watch?v=9Uk3tsdwI4A",className:i},"WATCH IT HERE"))),f.createElement("div",{className:r},f.createElement("img",{src:"/assets/news/news1.jpg",className:l,alt:"tim cook visit"}),f.createElement("div",{className:a},f.createElement("h2",{className:s},"Apple CEO Tim Cook visited us in 2019, and encouraged students to code"),f.createElement("a",{href:"https://www.straitstimes.com/tech/apple-chief-in-spore-urges-kids-to-learn-coding",className:i},"READ MORE"))),f.createElement("div",{className:r},f.createElement("img",{src:"/assets/news/news0.jpg",className:l,alt:"first news feature"}),f.createElement("div",{className:a},f.createElement("h2",{className:s},"A news feature on apps created by Swift Accelerator students"),f.createElement("a",{href:"https://www.straitstimes.com/singapore/education/apple-picks-up-apps-created-by-sst-students",className:i},"READ MORE"))))),f.createElement(p.Z,{className:"news-module--sectionThree--2SsEY"},f.createElement(w.Z,{title:"Achievements"}),f.createElement("h1",null,"WWDC Swift Student Challenge"),f.createElement(b.Z,null,"Supporting students from around the world who love to code, Apple's WWDC Swift Student Challenge provides an opportunity for students to showcase their passion for coding by creating an incredible Swift playground on the topic of their choice. Meet the Swift Student Challenge winners from the Swift Accelerator Program and see their story."),f.createElement(f.Fragment,null,y.map((function(e){return f.createElement("div",{className:"news-module--wwdcWinner--2JF_A"},f.createElement("img",{src:e.img}),f.createElement("div",null,f.createElement("span",null,e.name),f.createElement("span",null,e.desc1),f.createElement("span",null,e.desc2)),f.createElement("iframe",{width:"560",height:"315",src:e.embedLink,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))})))),f.createElement(c.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-news-tsx-cd70410de0a6e93cd623.js.map