(self.AMP=self.AMP||[]).push({n:"amp-sidebar",v:"1525381599226",f:(function(AMP){var h;function m(a,b){function d(){}d.prototype=b.prototype;a.prototype=new d;a.prototype.constructor=a;for(var c in b)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,c);f&&Object.defineProperty(a,c,f)}else a[c]=b[c]};function n(a){if(!a)return[];for(var b=Array(a.length),d=0;d<a.length;d++)b[d]=a[d];return b};self.log=self.log||{user:null,dev:null,userForEmbed:null};var p=self.log;function q(){var a="\u200b\u200b\u200b";throw Error("failed to call initLogConstructor");};function r(a){this.P=a;this.h=Object.create(null)}r.prototype.get=function(a){if(this.h[a])return this.h[a].access=Date.now(),this.h[a].payload};r.prototype.put=function(a,b){var d=this;this.h[a]={payload:b,access:Date.now()};var c=Object.keys(this.h);if(c.length>this.P){if(p.dev)a=p.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming template cache");c.sort(function(a,b){return d.h[b].access-d.h[a].access});delete this.h[c[c.length-1]]}};var t,u;function v(a){var b=a.indexOf("#");return-1==b?a:a.substring(0,b)};function w(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;if(b=b!=(b.__AMP_TOP||b)&&x(b,"action")?y(b,"action"):null)return b}return z(a,"action")}function A(a,b){a=a.__AMP_TOP||a;return y(a,b)}function z(a,b){a=B(a);a=B(a);a=a.isSingleDoc()?a.win:a;return y(a,b)}function B(a){return a.nodeType?A((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}
function y(a,b){x(a,b);var d=a.services;d||(d=a.services={});var c=d;a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function x(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function C(a,b){for(var d,c=a;c&&c!==d;c=c.parentElement)if(b(c))return c;return null}function D(a){var b="A";if(a.closest)return a.closest(b);b=b.toUpperCase();return C(a,function(a){return a.tagName==b})}function E(a){var b=a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr";return"rtl"==b};var F,G="Webkit webkit Moz moz ms O o".split(" ");function H(a,b){var d=void 0;if(2>b.length?0:0==b.lastIndexOf("--",0))return b;F||(F=Object.create(null));var c=F[b];if(!c||d){c=b;if(void 0===a[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<G.length;g++){var k=G[g]+f;if(void 0!==a[k]){f=k;break a}}f=""}var l=f;void 0!==a[l]&&(c=l)}d||(F[b]=c)}return c}function I(a,b,d){var c;(b=H(a.style,b))&&(a.style[b]=c?d+c:d)}
function J(a,b){if(void 0===b){var d;d=(d=H(a.style,"display"))?a.style[d]:void 0;b="none"==d}I(a,"display",b?"":"none")};function K(a,b){function d(){c=0;var k=350-(a.Date.now()-f);if(0<k)c=a.setTimeout(d,k);else{var l=g;g=null;b.apply(null,l)}}var c=0,f=0,g=null;return function(b){for(var l=[],e=0;e<arguments.length;++e)l[e-0]=arguments[e];f=a.Date.now();g=l;c||(c=a.setTimeout(d,350))}};function L(a,b,d){this.c=a;this.W=void 0;this.m=b;this.I=d;this.V=this.c.getAttribute("toolbar");this.G=null;this.l=void 0;this.H=!1;this.c.classList.add("amp-sidebar-toolbar-target-hidden");M(this)}L.prototype.onLayoutChange=function(a){var b=this.I.win.matchMedia(this.V).matches;if(b){var d=N(this);d&&d.then(a)}else O(this)};
function M(a){a.G=a.c.cloneNode(!0);p.user||(p.user=q());var b=p.user.assert(a.c.getAttribute("toolbar-target"),'"toolbar-target" is required',a.c);a.I.whenReady().then(function(){var d=a.I.getElementById(b);if(d)a.l=d,a.G.classList.add("i-amphtml-toolbar"),J(a.l,!1);else throw Error("Could not find the toolbar-target element with an id: "+b);})}
function N(a){if(!a.H)return a.m.mutatePromise(function(){a.l&&(J(a.l,!0),a.l.contains(a.G)||a.l.appendChild(a.G),a.c.classList.add("amp-sidebar-toolbar-target-shown"),a.c.classList.remove("amp-sidebar-toolbar-target-hidden"),a.H=!0)})}function O(a){a.H&&a.m.mutate(function(){a.l&&(J(a.l,!1),a.c.classList.add("amp-sidebar-toolbar-target-hidden"),a.c.classList.remove("amp-sidebar-toolbar-target-shown"),a.H=!1)})};function P(a){a=AMP.BaseElement.call(this,a)||this;a.w=null;a.m=A(a.win,"vsync");a.K=null;a.A=null;a.o=a.win.document;a.R=a.o.documentElement;a.B=null;a.O=[];var b=A(a.win,"platform");a.N=b.isIos();a.S=b.isSafari();a.D=-1;a.L=!1;a.X=null;a.C=K(a.win,a.T.bind(a));a.J=null;a.M=0;return a}m(P,AMP.BaseElement);h=P.prototype;h.isLayoutSupported=function(a){return"nodisplay"==a};
h.buildCallback=function(){var a=this;this.element.classList.add("i-amphtml-overlay");this.B=this.element.getAttribute("side");this.w=this.getViewport();this.K=w(this.element);"left"!=this.B&&"right"!=this.B&&(this.B=E(this.o)?"right":"left",this.element.setAttribute("side",this.B));var b=this.getAmpDoc(),d=n(this.element.querySelectorAll("nav[toolbar]"));d.forEach(function(d){try{a.O.push(new L(d,a.m,b))}catch(k){a.user().error("amp-sidebar toolbar","Failed to instantiate toolbar",k)}});this.N&&
Q(this);R(this)?this.F():this.element.setAttribute("aria-hidden","true");this.element.hasAttribute("role")||this.element.setAttribute("role","menu");this.element.tabIndex=-1;this.R.addEventListener("keydown",function(b){27==b.keyCode&&a.j()});var c=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",f=this.o.createElement("button");f.textContent=c;f.classList.add("i-amphtml-screen-reader");f.tabIndex=-1;f.addEventListener("click",function(){a.j()});this.element.appendChild(f);
this.registerAction("toggle",this.U.bind(this));this.registerAction("open",this.F.bind(this));this.registerAction("close",this.j.bind(this));this.element.addEventListener("click",function(b){if((b=D(b.target))&&b.href){var d;d=b.href;t||(t=self.document.createElement("a"),u=self.UrlCache||(self.UrlCache=new r(100)));var c=u.get(d);if(c)d=c;else{c=t;c.href=d;c.protocol||(c.href=c.href);var e={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,
search:c.search,hash:c.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;u.put(d,e);d=e}var f=d,g=a.getAmpDoc().win.location.href;v(b.href)==v(g)&&f.hash&&a.j()}},!0);this.element.addEventListener("transitionend",this.C);this.element.addEventListener("animationend",this.C)};
h.activate=function(a){this.F(a)};h.onLayoutMeasure=function(){var a=this;this.getAmpDoc().whenReady().then(function(){a.O.forEach(function(b){b.onLayoutChange(function(){a.j()})})})};function R(a){return a.element.hasAttribute("open")}h.U=function(a){R(this)?this.j():this.F(a)};
h.F=function(a){var b=this;R(this)||(this.w.enterOverlayMode(),this.m.mutate(function(){J(b.element,!0);b.w.addToFixedLayer(b.element,!0);b.N&&b.S&&S(b);b.element.scrollTop=1;b.m.mutate(function(){T(b);b.element.setAttribute("open","");b.C();b.element.setAttribute("aria-hidden","false")})}),z(this.getAmpDoc(),"history").push(this.j.bind(this)).then(function(a){b.D=a}),a&&(this.J=a.caller,this.M=this.w.getScrollTop()))};
h.j=function(){var a=this;if(R(this)){this.w.leaveOverlayMode();var b=this.M==this.w.getScrollTop(),d=this.element.contains(this.o.activeElement);this.m.mutate(function(){a.A&&J(a.A,!1);a.element.removeAttribute("open");a.C();a.element.setAttribute("aria-hidden","true")});-1!=this.D&&(z(this.getAmpDoc(),"history").pop(this.D),this.D=-1);if(this.J&&d&&b)try{this.J.focus()}catch(c){}}};
function T(a){if(!a.A){var b=a.o.createElement("div");b.classList.add("i-amphtml-sidebar-mask");b.addEventListener("click",function(){a.j()});a.element.ownerDocument.body.appendChild(b);b.addEventListener("touchmove",function(a){a.preventDefault()});a.A=b}J(a.A,!0)}
function Q(a){a.element.addEventListener("scroll",function(b){R(a)&&(1>a.element.scrollTop?(a.element.scrollTop=1,b.preventDefault()):a.element.scrollHeight==a.element.scrollTop+a.element.offsetHeight&&(--a.element.scrollTop,b.preventDefault()))})}function S(a){if(!a.L){var b=a.o.createElement("div"),d={height:"10vh",width:"100%","background-color":"transparent"},c;for(c in d)I(b,c,d[c]);a.element.appendChild(b);a.L=!0}}
h.T=function(){var a=this;if(R(this)){var b=this.getRealChildren();this.scheduleLayout(b);this.scheduleResume(b);try{this.element.focus()}catch(d){}U(this,"sidebarOpen")}else this.m.mutate(function(){J(a.element,!1);a.schedulePause(a.getRealChildren());U(a,"sidebarClose")})};
function U(a,b){var d;var c=a.win;d="amp-sidebar toolbar."+b;var f={},g={detail:f};Object.assign(g,void 0);"function"==typeof c.CustomEvent?d=new c.CustomEvent(d,g):(c=c.document.createEvent("CustomEvent"),c.initCustomEvent(d,!!g.bubbles,!!g.cancelable,f),d=c);a.K.trigger(a.element,b,d,100)}(function(a){a.registerElement("amp-sidebar",P,"amp-sidebar{position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw!important;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;-webkit-transform:translateX(-100%)!important;transform:translateX(-100%)!important}amp-sidebar[side=right]{right:0!important;-webkit-transform:translateX(100%)!important;transform:translateX(100%)!important}amp-sidebar[side][open]{-webkit-transform:translateX(0)!important;transform:translateX(0)!important}amp-sidebar[side]{-webkit-transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1);transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1);transition:transform 233ms cubic-bezier(0,0,.21,1);transition:transform 233ms cubic-bezier(0,0,.21,1),-webkit-transform 233ms cubic-bezier(0,0,.21,1)}.i-amphtml-toolbar>ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;opacity:0.2;background-image:none!important;background-color:#000;z-index:2147483646}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-sidebar-0.1.js.map
