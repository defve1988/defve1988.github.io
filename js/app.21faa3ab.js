(function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-249e6b29":"62762b54","chunk-bf8e5f34":"f80ac1d2","chunk-e5f4ca8e":"40b3ce7f","chunk-01d07993":"14e06504","chunk-12f8720f":"72c26b08","chunk-1af129bc":"830758c0","chunk-25316802":"0a5fdbf5","chunk-6264b0f7":"7a419201","chunk-74eb6f2c":"561de8ed","chunk-82c4ccaa":"71a9b59f","chunk-efcad654":"97db4982"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-249e6b29":1,"chunk-bf8e5f34":1,"chunk-e5f4ca8e":1,"chunk-01d07993":1,"chunk-12f8720f":1,"chunk-1af129bc":1,"chunk-25316802":1,"chunk-6264b0f7":1,"chunk-74eb6f2c":1,"chunk-82c4ccaa":1,"chunk-efcad654":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-249e6b29":"aa35bca3","chunk-bf8e5f34":"064ca5bd","chunk-e5f4ca8e":"6b5d6074","chunk-01d07993":"61c1466f","chunk-12f8720f":"8bb2c33c","chunk-1af129bc":"c106fddc","chunk-25316802":"4f06a5df","chunk-6264b0f7":"e4a8c079","chunk-74eb6f2c":"ca3f3665","chunk-82c4ccaa":"1131696d","chunk-efcad654":"60c45c34"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-row",[n("v-col",{staticClass:"pa-0 ma-0",attrs:{lg:"3",md:"12"}},[n("MajorCard",{attrs:{id:"major_card"}})],1),n("v-col",{staticClass:"pa-0 mx-0",attrs:{lg:"9",md:"12"}},[n("v-tabs",{staticClass:"sticky",attrs:{"background-color":"grey darken-3",color:"teal lighten-1",dark:"","slider-color":"grey darken-3",height:"70",id:"tabs",centered:"","center-active":"","show-arrows":""},on:{change:function(t){return e.scroll_window()}},model:{value:e.tabs_index,callback:function(t){e.tabs_index=t},expression:"tabs_index"}},e._l(e.tabs,(function(t,r){return n("v-tab",{key:r,class:r==e.tabs_index?"subtitle-1 font-weight-bold":"subtitle-1 font-weight-light",attrs:{ripple:""}},[e._v(e._s(t.text))])})),1),n("v-card",{attrs:{height:"122.8",color:"grey darken-3",tile:"",dark:"",elevation:"0"}},[n("v-row",{staticClass:"px-5",attrs:{justify:"center"}},[n("v-col",{attrs:{align:"center"}},[n("div",{staticClass:"mt-8 display-1 font-weight-thin"},[e._v(" My name is "),n("b",[e._v("Chuanlong Zhou")]),n("span",{staticClass:"ml-1"},[e._v(" | ")]),n("span",{staticClass:"ml-1 title font-weight-thin"},[e._v("I'm an Environmental Data Scientist.")])])])],1)],1),n("Education",{attrs:{id:"education"}}),n("Research",{attrs:{id:"research"}}),n("Projects",{attrs:{id:"projects"}}),n("Skills",{attrs:{id:"skills"}}),n("Publication",{attrs:{id:"publication"}}),n("Teaching",{attrs:{id:"teaching"}}),n("Contact",{attrs:{id:"contact"}})],1)],1),n("Footer")],1)},a=[],o=(n("4160"),n("d3b7"),n("159b"),{name:"App",computed:{is_small:function(){return window.innerWidth<1264}},mounted:function(){window.addEventListener("scroll",this.onScroll)},components:{MajorCard:function(){return Promise.all([n.e("chunk-249e6b29"),n.e("chunk-bf8e5f34")]).then(n.bind(null,"d298"))},Footer:function(){return n.e("chunk-efcad654").then(n.bind(null,"076e"))},Education:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-25316802")]).then(n.bind(null,"ba2a"))},Research:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-12f8720f")]).then(n.bind(null,"5b62"))},Projects:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-6264b0f7")]).then(n.bind(null,"17dc"))},Skills:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-01d07993")]).then(n.bind(null,"0872"))},Publication:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-249e6b29"),n.e("chunk-1af129bc")]).then(n.bind(null,"cbdc"))},Teaching:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-74eb6f2c")]).then(n.bind(null,"b102"))},Contact:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-82c4ccaa")]).then(n.bind(null,"2988"))}},data:function(){return{scrollTimer:-1,tabs_index:0,tabs:[{text:"education",id:"education"},{text:"Research Experiences",id:"research"},{text:"Projects",id:"projects"},{text:"Coding Skills",id:"skills"},{text:"Publication",id:"publication"},{text:"Teaching",id:"teaching"},{text:"Contact Me",id:"contact"}]}},methods:{scroll_window:function(){var e=document.getElementById(this.tabs[this.tabs_index].id),t=e.offsetTop-120;window.scroll(0,t)},onScroll:function(){var e=this;-1!=this.scrollTimer&&(clearTimeout(this.scrollTimer),console.log(this.scrollTimer)),this.scrollTimer=window.setTimeout((function(){console.log(1);var t=window.pageYOffset,n=-1,r=99999;e.tabs.forEach((function(e,c){Math.abs(t-document.getElementById(e.id).offsetTop)<r&&(r=Math.abs(t-document.getElementById(e.id).offsetTop),n=c)})),e.tabs_index=n,e.scrollTimer=-1}),50)}}}),i=o,u=(n("034f"),n("2877")),l=n("6544"),s=n.n(l),d=n("7496"),f=n("b0af"),h=n("62ad"),b=n("0fd9"),p=n("71a3"),m=n("fe57"),k=Object(u["a"])(i,c,a,!1,null,null,null),v=k.exports;s()(k,{VApp:d["a"],VCard:f["a"],VCol:h["a"],VRow:b["a"],VTab:p["a"],VTabs:m["a"]});var g=n("f309"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"256.000000pt",height:"256.000000pt",viewBox:"0 0 256.000000 256.000000",preserveAspectRatio:"xMidYMid meet"}},[n("g",{attrs:{transform:"translate(0.000000,256.000000) scale(0.100000,-0.100000)",fill:"#546E7A",stroke:"none"}},[n("path",{attrs:{d:"M1130 2314 c-249 -46 -441 -145 -601 -311 -191 -197 -289 -442 -289\n-722 0 -306 112 -562 337 -771 137 -127 317 -219 502 -257 103 -21 313 -21\n413 1 587 126 946 703 801 1286 -76 305 -319 585 -613 704 -130 53 -205 67\n-370 71 -85 2 -166 1 -180 -1z m445 -531 c22 -34 122 -278 205 -500 16 -46 43\n-119 60 -162 l29 -80 -62 30 c-133 63 -179 41 -392 -180 -76 -79 -167 -151\n-191 -151 -6 0 -28 39 -49 88 -42 93 -92 179 -118 200 -15 13 -11 20 34 72\n110 124 180 236 299 478 132 267 138 273 185 205z m-309 -280 c-19 -47 -109\n-183 -123 -183 -26 0 -83 40 -83 59 0 25 47 66 121 106 72 39 94 44 85 18z\nm-218 -225 c24 -17 42 -37 42 -47 0 -21 -115 -133 -161 -157 l-31 -15 -104 68\nc-57 37 -104 71 -104 75 0 7 122 59 219 93 71 25 77 24 139 -17z"}})])])},y=[],_={},x=Object(u["a"])(_,w,y,!1,null,null,null),P=x.exports;r["a"].use(g["a"]);var T=new g["a"]({icons:{values:{matlab_icon:{component:P}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:T,render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.21faa3ab.js.map