(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2N97":function(P,m,_){"use strict";var b=_("xbqb"),A=_("Lw8S");Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;function S(){var f=_("q1tI");return S=function(){return f},f}function w(f,t){return h(f)||T(f,t)||I(f,t)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(f,t){if(!!f){if(typeof f=="string")return E(f,t);var r=Object.prototype.toString.call(f).slice(8,-1);if(r==="Object"&&f.constructor&&(r=f.constructor.name),r==="Map"||r==="Set")return Array.from(f);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(f,t)}}function E(f,t){(t==null||t>f.length)&&(t=f.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=f[r];return e}function T(f,t){var r=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(r!=null){var e=[],i=!0,v=!1,p,c;try{for(r=r.call(f);!(i=(p=r.next()).done)&&(e.push(p.value),!(t&&e.length===t));i=!0);}catch(d){v=!0,c=d}finally{try{!i&&r.return!=null&&r.return()}finally{if(v)throw c}}return e}}function h(f){if(Array.isArray(f))return f}var s="data-prefers-color",u="dumi:prefers-color",o,n=function(){function f(){var t=this;b(this,f),this.color=void 0,this.callbacks=[],this.color=localStorage.getItem(u)||document.documentElement.getAttribute(s),["light","dark"].forEach(function(r){var e=t.getColorMedia(r),i=function(p){p.matches&&t.color==="auto"&&(document.documentElement.setAttribute(s,r),t.applyCallbacks())};e.addEventListener?e.addEventListener("change",i):e.addListener&&e.addListener(i)})}return A(f,[{key:"getColorMedia",value:function(r){return window.matchMedia("(prefers-color-scheme: ".concat(r,")"))}},{key:"isColorMode",value:function(r){return this.getColorMedia(r).matches}},{key:"applyCallbacks",value:function(){var r=this;this.callbacks.forEach(function(e){return e(r.color)})}},{key:"listen",value:function(r){this.callbacks.push(r)}},{key:"unlisten",value:function(r){this.callbacks.splice(this.callbacks.indexOf(r),1)}},{key:"set",value:function(r){return this.color=r,localStorage.setItem(u,r),this.applyCallbacks(),r==="auto"?document.documentElement.setAttribute(s,this.isColorMode("dark")?"dark":"light"):document.documentElement.setAttribute(s,r),r}}]),f}(),a=function(){var t=(0,S().useState)(),r=w(t,2),e=r[0],i=r[1],v=(0,S().useCallback)(function(p){o.set(p)},[]);return(0,S().useEffect)(function(){return o=o||new n,o.listen(i),i(o.color),function(){return o.unlisten(i)}},[]),[e,v]};m.default=a},"3QDa":function(P,m,_){"use strict";var b=_("5wUe");Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;function A(){var n=_("q1tI");return A=function(){return n},n}var S=w(_("nLCz"));function w(n){return n&&n.__esModule?n:{default:n}}function C(n,a){return s(n)||h(n,a)||E(n,a)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(n,a){if(!!n){if(typeof n=="string")return T(n,a);var f=Object.prototype.toString.call(n).slice(8,-1);if(f==="Object"&&n.constructor&&(f=n.constructor.name),f==="Map"||f==="Set")return Array.from(n);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return T(n,a)}}function T(n,a){(a==null||a>n.length)&&(a=n.length);for(var f=0,t=new Array(a);f<a;f++)t[f]=n[f];return t}function h(n,a){var f=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(f!=null){var t=[],r=!0,e=!1,i,v;try{for(f=f.call(n);!(r=(i=f.next()).done)&&(t.push(i.value),!(a&&t.length===a));r=!0);}catch(p){e=!0,v=p}finally{try{!r&&f.return!=null&&f.return()}finally{if(e)throw v}}return t}}function s(n){if(Array.isArray(n))return n}function u(n,a,f){return Object.entries(n[a]).reduce(function(t,r){var e=b(r,2),i=e[0],v=e[1];return t[i]=v.map(function(p){var c={description:p.description};return Object.keys(p).forEach(function(d){if(d.startsWith("description.")){var l=d.match(/^description\.(.*)$/),y=C(l,2),O=y[1];O&&O===f&&(c.description=p[d])}else c[d]=p[d]}),c}),t},{})}var o=function(a){var f=(0,A().useContext)(S.default),t=f.locale,r=f.apis,e=(0,A().useState)(u(r,a,t)),i=C(e,2),v=i[0],p=i[1];return(0,A().useEffect)(function(){p(u(r,a,t))},[r,a,t]),v};m.default=o},"6asN":function(P,m,_){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var b=_("LtsZ"),A=_("zqmC"),S=(0,A.LinkWrapper)(b.NavLink);m.default=S},"6xEa":function(P,m,_){var b,A=function(){var S=String.fromCharCode,w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",I={};function E(h,s){if(!I[h]){I[h]={};for(var u=0;u<h.length;u++)I[h][h.charAt(u)]=u}return I[h][s]}var T={compressToBase64:function(s){if(s==null)return"";var u=T._compress(s,6,function(o){return w.charAt(o)});switch(u.length%4){default:case 0:return u;case 1:return u+"===";case 2:return u+"==";case 3:return u+"="}},decompressFromBase64:function(s){return s==null?"":s==""?null:T._decompress(s.length,32,function(u){return E(w,s.charAt(u))})},compressToUTF16:function(s){return s==null?"":T._compress(s,15,function(u){return S(u+32)})+" "},decompressFromUTF16:function(s){return s==null?"":s==""?null:T._decompress(s.length,16384,function(u){return s.charCodeAt(u)-32})},compressToUint8Array:function(s){for(var u=T.compress(s),o=new Uint8Array(u.length*2),n=0,a=u.length;n<a;n++){var f=u.charCodeAt(n);o[n*2]=f>>>8,o[n*2+1]=f%256}return o},decompressFromUint8Array:function(s){if(s==null)return T.decompress(s);for(var u=new Array(s.length/2),o=0,n=u.length;o<n;o++)u[o]=s[o*2]*256+s[o*2+1];var a=[];return u.forEach(function(f){a.push(S(f))}),T.decompress(a.join(""))},compressToEncodedURIComponent:function(s){return s==null?"":T._compress(s,6,function(u){return C.charAt(u)})},decompressFromEncodedURIComponent:function(s){return s==null?"":s==""?null:(s=s.replace(/ /g,"+"),T._decompress(s.length,32,function(u){return E(C,s.charAt(u))}))},compress:function(s){return T._compress(s,16,function(u){return S(u)})},_compress:function(s,u,o){if(s==null)return"";var n,a,f={},t={},r="",e="",i="",v=2,p=3,c=2,d=[],l=0,y=0,O;for(O=0;O<s.length;O+=1)if(r=s.charAt(O),Object.prototype.hasOwnProperty.call(f,r)||(f[r]=p++,t[r]=!0),e=i+r,Object.prototype.hasOwnProperty.call(f,e))i=e;else{if(Object.prototype.hasOwnProperty.call(t,i)){if(i.charCodeAt(0)<256){for(n=0;n<c;n++)l=l<<1,y==u-1?(y=0,d.push(o(l)),l=0):y++;for(a=i.charCodeAt(0),n=0;n<8;n++)l=l<<1|a&1,y==u-1?(y=0,d.push(o(l)),l=0):y++,a=a>>1}else{for(a=1,n=0;n<c;n++)l=l<<1|a,y==u-1?(y=0,d.push(o(l)),l=0):y++,a=0;for(a=i.charCodeAt(0),n=0;n<16;n++)l=l<<1|a&1,y==u-1?(y=0,d.push(o(l)),l=0):y++,a=a>>1}v--,v==0&&(v=Math.pow(2,c),c++),delete t[i]}else for(a=f[i],n=0;n<c;n++)l=l<<1|a&1,y==u-1?(y=0,d.push(o(l)),l=0):y++,a=a>>1;v--,v==0&&(v=Math.pow(2,c),c++),f[e]=p++,i=String(r)}if(i!==""){if(Object.prototype.hasOwnProperty.call(t,i)){if(i.charCodeAt(0)<256){for(n=0;n<c;n++)l=l<<1,y==u-1?(y=0,d.push(o(l)),l=0):y++;for(a=i.charCodeAt(0),n=0;n<8;n++)l=l<<1|a&1,y==u-1?(y=0,d.push(o(l)),l=0):y++,a=a>>1}else{for(a=1,n=0;n<c;n++)l=l<<1|a,y==u-1?(y=0,d.push(o(l)),l=0):y++,a=0;for(a=i.charCodeAt(0),n=0;n<16;n++)l=l<<1|a&1,y==u-1?(y=0,d.push(o(l)),l=0):y++,a=a>>1}v--,v==0&&(v=Math.pow(2,c),c++),delete t[i]}else for(a=f[i],n=0;n<c;n++)l=l<<1|a&1,y==u-1?(y=0,d.push(o(l)),l=0):y++,a=a>>1;v--,v==0&&(v=Math.pow(2,c),c++)}for(a=2,n=0;n<c;n++)l=l<<1|a&1,y==u-1?(y=0,d.push(o(l)),l=0):y++,a=a>>1;for(;;)if(l=l<<1,y==u-1){d.push(o(l));break}else y++;return d.join("")},decompress:function(s){return s==null?"":s==""?null:T._decompress(s.length,32768,function(u){return s.charCodeAt(u)})},_decompress:function(s,u,o){var n=[],a,f=4,t=4,r=3,e="",i=[],v,p,c,d,l,y,O,g={val:o(0),position:u,index:1};for(v=0;v<3;v+=1)n[v]=v;for(c=0,l=Math.pow(2,2),y=1;y!=l;)d=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=o(g.index++)),c|=(d>0?1:0)*y,y<<=1;switch(a=c){case 0:for(c=0,l=Math.pow(2,8),y=1;y!=l;)d=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=o(g.index++)),c|=(d>0?1:0)*y,y<<=1;O=S(c);break;case 1:for(c=0,l=Math.pow(2,16),y=1;y!=l;)d=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=o(g.index++)),c|=(d>0?1:0)*y,y<<=1;O=S(c);break;case 2:return""}for(n[3]=O,p=O,i.push(O);;){if(g.index>s)return"";for(c=0,l=Math.pow(2,r),y=1;y!=l;)d=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=o(g.index++)),c|=(d>0?1:0)*y,y<<=1;switch(O=c){case 0:for(c=0,l=Math.pow(2,8),y=1;y!=l;)d=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=o(g.index++)),c|=(d>0?1:0)*y,y<<=1;n[t++]=S(c),O=t-1,f--;break;case 1:for(c=0,l=Math.pow(2,16),y=1;y!=l;)d=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=o(g.index++)),c|=(d>0?1:0)*y,y<<=1;n[t++]=S(c),O=t-1,f--;break;case 2:return i.join("")}if(f==0&&(f=Math.pow(2,r),r++),n[O])e=n[O];else if(O===t)e=p+p.charAt(0);else return null;i.push(e),n[t++]=p+e.charAt(0),f--,p=e,f==0&&(f=Math.pow(2,r),r++)}}};return T}();b=function(){return A}.call(m,_,m,P),b!==void 0&&(P.exports=b)},"7sf/":function(P,m,_){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;function b(){var o=_("q1tI");return b=function(){return o},o}function A(){var o=S(_("6xEa"));return A=function(){return o},o}function S(o){return o&&o.__esModule?o:{default:o}}function w(o,n){return h(o)||T(o,n)||I(o,n)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(o,n){if(!!o){if(typeof o=="string")return E(o,n);var a=Object.prototype.toString.call(o).slice(8,-1);if(a==="Object"&&o.constructor&&(a=o.constructor.name),a==="Map"||a==="Set")return Array.from(o);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return E(o,n)}}function E(o,n){(n==null||n>o.length)&&(n=o.length);for(var a=0,f=new Array(n);a<n;a++)f[a]=o[a];return f}function T(o,n){var a=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(a!=null){var f=[],t=!0,r=!1,e,i;try{for(a=a.call(o);!(t=(e=a.next()).done)&&(f.push(e.value),!(n&&f.length===n));t=!0);}catch(v){r=!0,i=v}finally{try{!t&&a.return!=null&&a.return()}finally{if(r)throw i}}return f}}function h(o){if(Array.isArray(o))return o}var s={"zh-CN":"https://www.typescriptlang.org/zh/play","en-US":"https://www.typescriptlang.org/play"},u=function(n,a){var f=function(){var p=/^zh|cn$/.test(arguments.length<=0?void 0:arguments[0])?s["zh-CN"]:s["en-US"];return"".concat(p,"?skipLibCheck=true&jsx=1#code/").concat(A().default.compressToEncodedURIComponent(arguments.length<=1?void 0:arguments[1]))},t=(0,b().useState)(f(n,a)),r=w(t,2),e=r[0],i=r[1];return(0,b().useEffect)(function(){i(f(n,a))},[n,a]),e};m.default=u},Lw8S:function(P,m){function _(A,S){for(var w=0;w<S.length;w++){var C=S[w];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(A,C.key,C)}}function b(A,S,w){return S&&_(A.prototype,S),w&&_(A,w),A}P.exports=b},"U/TZ":function(P,m,_){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;function b(){var h=_("q1tI");return b=function(){return h},h}function A(h,s){return E(h)||I(h,s)||w(h,s)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(h,s){if(!!h){if(typeof h=="string")return C(h,s);var u=Object.prototype.toString.call(h).slice(8,-1);if(u==="Object"&&h.constructor&&(u=h.constructor.name),u==="Map"||u==="Set")return Array.from(h);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return C(h,s)}}function C(h,s){(s==null||s>h.length)&&(s=h.length);for(var u=0,o=new Array(s);u<s;u++)o[u]=h[u];return o}function I(h,s){var u=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(u!=null){var o=[],n=!0,a=!1,f,t;try{for(u=u.call(h);!(n=(f=u.next()).done)&&(o.push(f.value),!(s&&o.length===s));n=!0);}catch(r){a=!0,t=r}finally{try{!n&&u.return!=null&&u.return()}finally{if(a)throw t}}return o}}function E(h){if(Array.isArray(h))return h}var T=function(s,u){var o=function(){for(var e=arguments.length,i=new Array(e),v=0;v<e;v++)i[v]=arguments[v];var p={};return Object.keys(i[1]).forEach(function(c){var d=(c.match(/^(.+)\.([^_]+)$/)||[]).slice(1),l=A(d,2),y=l[0],O=l[1];(!O||O===i[0])&&(p[y||c]=i[1][c])}),p},n=(0,b().useState)(o(s,u)),a=A(n,2),f=a[0],t=a[1];return(0,b().useEffect)(function(){t(o(s,u))},[s,u]),f};m.default=T},WWur:function(P,m,_){"use strict";var b=function(S){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=w.target,I=C===void 0?document.body:C,E=document.createElement("textarea"),T=document.activeElement;E.value=S,E.setAttribute("readonly",""),E.style.contain="strict",E.style.position="absolute",E.style.left="-9999px",E.style.fontSize="12pt";var h=document.getSelection(),s=!1;h.rangeCount>0&&(s=h.getRangeAt(0)),I.append(E),E.select(),E.selectionStart=0,E.selectionEnd=S.length;var u=!1;try{u=document.execCommand("copy")}catch(o){}return E.remove(),s&&(h.removeAllRanges(),h.addRange(s)),T&&T.focus(),u};P.exports=b,P.exports.default=b},bYHP:function(P,m,_){"use strict";function b(c){return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},b(c)}Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var A=E(_("q1tI")),S=_("LtsZ"),w=C(_("hKI/"));function C(c){return c&&c.__esModule?c:{default:c}}function I(c){if(typeof WeakMap!="function")return null;var d=new WeakMap,l=new WeakMap;return(I=function(O){return O?l:d})(c)}function E(c,d){if(!d&&c&&c.__esModule)return c;if(c===null||b(c)!=="object"&&typeof c!="function")return{default:c};var l=I(d);if(l&&l.has(c))return l.get(c);var y={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in c)if(g!=="default"&&Object.prototype.hasOwnProperty.call(c,g)){var j=O?Object.getOwnPropertyDescriptor(c,g):null;j&&(j.get||j.set)?Object.defineProperty(y,g,j):y[g]=c[g]}return y.default=c,l&&l.set(c,y),y}function T(){return T=Object.assign||function(c){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var y in l)Object.prototype.hasOwnProperty.call(l,y)&&(c[y]=l[y])}return c},T.apply(this,arguments)}function h(c,d){return a(c)||n(c,d)||u(c,d)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(c,d){if(!!c){if(typeof c=="string")return o(c,d);var l=Object.prototype.toString.call(c).slice(8,-1);if(l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set")return Array.from(c);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return o(c,d)}}function o(c,d){(d==null||d>c.length)&&(d=c.length);for(var l=0,y=new Array(d);l<d;l++)y[l]=c[l];return y}function n(c,d){var l=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var y=[],O=!0,g=!1,j,D;try{for(l=l.call(c);!(O=(j=l.next()).done)&&(y.push(j.value),!(d&&y.length===d));O=!0);}catch(R){g=!0,D=R}finally{try{!O&&l.return!=null&&l.return()}finally{if(g)throw D}}return y}}function a(c){if(Array.isArray(c))return c}function f(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function t(c,d){for(var l=0;l<d.length;l++){var y=d[l];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(c,y.key,y)}}function r(c,d,l){return d&&t(c.prototype,d),l&&t(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}var e=new(function(){function c(){f(this,c),this.anchors=[],this.listeners=[],this.listener=void 0,this.listener=(0,w.default)(this._matchActiveAnchor.bind(this),200)}return r(c,[{key:"_matchActiveAnchor",value:function(){var l=this,y=this.anchors.findIndex(function(j,D){return j.getBoundingClientRect().top>128||D===l.anchors.length-1}),O=this.anchors[Math.max(0,y-1)],g=O.parentElement.id;this.listeners.forEach(function(j){return j(g)})}},{key:"watch",value:function(l){this.anchors.length===0&&typeof window!="undefined"&&window.addEventListener("scroll",this.listener),this.anchors.push(l),this.listener()}},{key:"unwatch",value:function(l){this.anchors.splice(this.anchors.findIndex(function(y){return y===l}),1),this.anchors.length===0&&typeof window!="undefined"&&window.removeEventListener("scroll",this.listener)}},{key:"listen",value:function(l){this.listeners.push(l)}},{key:"unlisten",value:function(l){this.listeners.splice(this.listeners.findIndex(function(y){return y===l}),1)}}]),c}());function i(c){return c.offsetTop+(c.offsetParent?i(c.offsetParent):0)}var v=function c(d){var l,y=((l=d.to.match(/(#[^&?]*)/))===null||l===void 0?void 0:l[1])||"",O=(0,A.useRef)(null),g=(0,A.useState)(!1),j=h(g,2),D=j[0],R=j[1];return(0,A.useEffect)(function(){var M,k;if(["H1","H2","H3"].includes((M=O.current)===null||M===void 0||(k=M.parentElement)===null||k===void 0?void 0:k.tagName)&&O.current.parentElement.id){var L=O.current;return e.watch(L),function(){e.unwatch(L)}}var x=function(U){R(y==="#".concat(U))};return e.listen(x),function(){return e.unlisten(x)}},[]),A.default.createElement(S.NavLink,T({},d,{ref:O,onClick:function(){return c.scrollToAnchor(y.substring(1))},isActive:function(){return D}}))};v.scrollToAnchor=function(c){window.requestAnimationFrame(function(){var d=document.getElementById(decodeURIComponent(c));d&&window.scrollTo(0,i(d)-100)})};var p=v;m.default=p},beRK:function(P,m,_){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.getDemoUrl=m.getDemoRouteName=m.default=void 0;function b(){var a=_("q1tI");return b=function(){return a},a}var A=S(_("nLCz"));function S(a){return a&&a.__esModule?a:{default:a}}function w(a,f){return h(a)||T(a,f)||I(a,f)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(a,f){if(!!a){if(typeof a=="string")return E(a,f);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(a,f)}}function E(a,f){(f==null||f>a.length)&&(f=a.length);for(var t=0,r=new Array(f);t<f;t++)r[t]=a[t];return r}function T(a,f){var t=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var r=[],e=!0,i=!1,v,p;try{for(t=t.call(a);!(e=(v=t.next()).done)&&(r.push(v.value),!(f&&r.length===f));e=!0);}catch(c){i=!0,p=c}finally{try{!e&&t.return!=null&&t.return()}finally{if(i)throw p}}return r}}function h(a){if(Array.isArray(a))return a}function s(){return Object({NODE_ENV:"production"}).PLATFORM_TYPE==="BASEMENT"}var u=function(){return s()?"_demos":"~demos"};m.getDemoRouteName=u;var o=function(f,t){var r,e=window,i=e.location,v=i.href,p=i.origin,c=v.split(/#\//),d=w(c,2),l=d[0],y=d[1],O=typeof y=="string";return[O?"".concat(l,"#"):p,"".concat(((r=window)===null||r===void 0?void 0:r.routerBase)||"","/").replace(/\/\/$/,"/"),u(),"/",f,"".concat(t?".html":"")].join("")};m.getDemoUrl=o;var n=function(f){var t=(0,b().useContext)(A.default),r=t.config,e=(0,b().useState)(""),i=w(e,2),v=i[0],p=i[1];return(0,b().useEffect)(function(){p(f?o(f,r.exportStatic&&r.exportStatic.htmlSuffix):null)},[f,r]),v};m.default=n},dEAq:function(P,m,_){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"AnchorLink",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(m,"Link",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(m,"NavLink",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(m,"context",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(m,"getDemoUrl",{enumerable:!0,get:function(){return u.getDemoUrl}}),Object.defineProperty(m,"useApiData",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(m,"useCodeSandbox",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(m,"useCopy",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(m,"useDemoUrl",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(m,"useLocaleProps",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(m,"useMotions",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(m,"usePrefersColor",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(m,"useRiddle",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(m,"useSearch",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(m,"useTSPlaygroundUrl",{enumerable:!0,get:function(){return n.default}});var b=r(_("nLCz")),A=r(_("zqmC")),S=r(_("6asN")),w=r(_("bYHP")),C=r(_("t/kZ")),I=r(_("dfPH")),E=r(_("o0kM")),T=r(_("zYLY")),h=r(_("r1Q5")),s=r(_("U/TZ")),u=t(_("beRK")),o=r(_("3QDa")),n=r(_("7sf/")),a=r(_("2N97"));function f(e){if(typeof WeakMap!="function")return null;var i=new WeakMap,v=new WeakMap;return(f=function(c){return c?v:i})(e)}function t(e,i){if(!i&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var v=f(i);if(v&&v.has(e))return v.get(e);var p={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if(d!=="default"&&Object.prototype.hasOwnProperty.call(e,d)){var l=c?Object.getOwnPropertyDescriptor(e,d):null;l&&(l.get||l.set)?Object.defineProperty(p,d,l):p[d]=e[d]}return p.default=e,v&&v.set(e,p),p}function r(e){return e&&e.__esModule?e:{default:e}}},dfPH:function(P,m,_){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;function b(){var u=_("q1tI");return b=function(){return u},u}function A(){var u=S(_("WWur"));return A=function(){return u},u}function S(u){return u&&u.__esModule?u:{default:u}}function w(u,o){return h(u)||T(u,o)||I(u,o)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(u,o){if(!!u){if(typeof u=="string")return E(u,o);var n=Object.prototype.toString.call(u).slice(8,-1);if(n==="Object"&&u.constructor&&(n=u.constructor.name),n==="Map"||n==="Set")return Array.from(u);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(u,o)}}function E(u,o){(o==null||o>u.length)&&(o=u.length);for(var n=0,a=new Array(o);n<o;n++)a[n]=u[n];return a}function T(u,o){var n=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(n!=null){var a=[],f=!0,t=!1,r,e;try{for(n=n.call(u);!(f=(r=n.next()).done)&&(a.push(r.value),!(o&&a.length===o));f=!0);}catch(i){t=!0,e=i}finally{try{!f&&n.return!=null&&n.return()}finally{if(t)throw e}}return a}}function h(u){if(Array.isArray(u))return u}var s=function(){var o=(0,b().useState)(),n=w(o,2),a=n[0],f=n[1],t=(0,b().useState)("ready"),r=w(t,2),e=r[0],i=r[1],v=(0,b().useCallback)(function(p){(0,A().default)(p),i("copied"),clearTimeout(a),f(setTimeout(function(){i("ready")},2e3))},[]);return[v,e]};m.default=s},dmwd:function(P,m){function _(b,A,S){return A in b?Object.defineProperty(b,A,{value:S,enumerable:!0,configurable:!0,writable:!0}):b[A]=S,b}P.exports=_},nLCz:function(P,m,_){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;function b(){var w=A(_("q1tI"));return b=function(){return w},w}function A(w){return w&&w.__esModule?w:{default:w}}var S=b().default.createContext({config:{mode:"doc",title:"",navs:{},menus:{},locales:[],repository:{branch:"master"},theme:{}},meta:{title:""},menu:[],nav:[],base:"",routes:[],apis:{},demos:{}});m.default=S},o0kM:function(P,m,_){"use strict";var b=_("dmwd"),A=_("5wUe");Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;function S(){var e=_("q1tI");return S=function(){return e},e}function w(e,i){var v=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);i&&(p=p.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),v.push.apply(v,p)}return v}function C(e){for(var i=1;i<arguments.length;i++){var v=arguments[i]!=null?arguments[i]:{};i%2?w(Object(v),!0).forEach(function(p){I(e,p,v[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(v)):w(Object(v)).forEach(function(p){Object.defineProperty(e,p,Object.getOwnPropertyDescriptor(v,p))})}return e}function I(e,i,v){return i in e?Object.defineProperty(e,i,{value:v,enumerable:!0,configurable:!0,writable:!0}):e[i]=v,e}function E(e,i){return o(e)||u(e,i)||h(e,i)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(e,i){if(!!e){if(typeof e=="string")return s(e,i);var v=Object.prototype.toString.call(e).slice(8,-1);if(v==="Object"&&e.constructor&&(v=e.constructor.name),v==="Map"||v==="Set")return Array.from(e);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return s(e,i)}}function s(e,i){(i==null||i>e.length)&&(i=e.length);for(var v=0,p=new Array(i);v<i;v++)p[v]=e[v];return p}function u(e,i){var v=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(v!=null){var p=[],c=!0,d=!1,l,y;try{for(v=v.call(e);!(c=(l=v.next()).done)&&(p.push(l.value),!(i&&p.length===i));c=!0);}catch(O){d=!0,y=O}finally{try{!c&&v.return!=null&&v.return()}finally{if(d)throw y}}return p}}function o(e){if(Array.isArray(e))return e}var n="https://riddle.alibaba-inc.com/riddles/define",a,f=function(){var i=(0,S().useState)(Boolean(a)),v=E(i,2),p=v[0],c=v[1];return(0,S().useEffect)(function(){if(a===void 0){var d=document.createElement("img");setTimeout(function(){d.src="",d.remove()},200),d.onload=function(){a=!0,c(!0),d.remove()},d.src="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png"}},[]),p};function t(e){var i=e.sources._.tsx||e.sources._.jsx;return i=i.replace(/^/,`import ReactDOM from 'react-dom';
`).replace("export default","const DumiDemo =").concat(`
ReactDOM.render(<DumiDemo />, mountNode);`),i}var r=function(i){var v=(0,S().useState)(),p=E(v,2),c=p[0],d=p[1],l=f();return(0,S().useEffect)(function(){if(i&&l&&Object.keys(i.sources).length===1){var y,O=document.createElement("form"),g=document.createElement("input");return O.method="POST",O.target="_blank",O.style.display="none",O.action=n,O.appendChild(g),O.setAttribute("data-demo",i.title||""),g.name="data",g.value=JSON.stringify({title:i.titlle,js:t(i),css:Object.entries(i.dependencies).filter(function(j){var D=A(j,2),R=D[1];return R.css}).map(function(j){var D=A(j,2),R=D[0],M=D[1],k=M.version,L=M.css;return"@import '~".concat(L.replace(new RegExp("^(".concat(R,")")),"$1@".concat(k)),"';")}).concat(i.background?`body {
  background: `.concat(i.background,`;
}`):"").join(`
`),json:JSON.stringify({description:i.description,dependencies:Object.entries(i.dependencies).reduce(function(j,D){var R=A(D,2),M=R[0],k=R[1].version;return C(C({},j),{},b({},M,k))},{"react-dom":((y=i.dependencies.react)===null||y===void 0?void 0:y.version)||"latest"})},null,2)}),document.body.appendChild(O),d(function(){return function(){return O.submit()}}),function(){return O.remove()}}},[i,l]),c};m.default=r},r1Q5:function(P,m,_){"use strict";var b=_("5wUe");Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;function A(){var t=_("q1tI");return A=function(){return t},t}function S(){var t=w(_("6xEa"));return S=function(){return t},t}function w(t){return t&&t.__esModule?t:{default:t}}function C(t,r){return s(t)||h(t,r)||E(t,r)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(t,r){if(!!t){if(typeof t=="string")return T(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return T(t,r)}}function T(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,i=new Array(r);e<r;e++)i[e]=t[e];return i}function h(t,r){var e=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var i=[],v=!0,p=!1,c,d;try{for(e=e.call(t);!(v=(c=e.next()).done)&&(i.push(c.value),!(r&&i.length===r));v=!0);}catch(l){p=!0,d=l}finally{try{!v&&e.return!=null&&e.return()}finally{if(p)throw d}}return i}}function s(t){if(Array.isArray(t))return t}var u="https://codesandbox.io/api/v1/sandboxes/define";function o(t){return S().default.compressToBase64(JSON.stringify(t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function n(t){var r=document.createElement("span");r.innerHTML=t;var e=r.textContent;return r.remove(),e}function a(t){var r=Boolean(t.sources._.tsx),e=r?".tsx":".jsx",i={},v={},p=Object.values(t.dependencies).filter(function(l){return l.css}),c="App".concat(e),d="index".concat(e);return Object.entries(t.dependencies).forEach(function(l){var y=b(l,2),O=y[0],g=y[1].version;v[O]=g}),v["react-dom"]||(v["react-dom"]=v.react||"latest"),i["sandbox.config.json"]={content:JSON.stringify({template:r?"create-react-app-typescript":"create-react-app"},null,2)},i["package.json"]={content:JSON.stringify({name:t.title,description:n(t.description)||"An auto-generated demo by dumi",main:d,dependencies:v,devDependencies:r?{typescript:"^3"}:{}},null,2)},i["index.html"]={content:'<div style="margin: 16px;" id="root"></div>'},i[d]={content:`/**
* This is an auto-generated demo by dumi
* if you think it is not working as expected,
* please report the issue at
* https://github.com/umijs/dumi/issues
**/

import React from 'react';
import ReactDOM from 'react-dom';
`.concat(p.map(function(l){var y=l.css;return"import '".concat(y,"';")}).join(`
`),`
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);`)},Object.entries(t.sources).forEach(function(l){var y=b(l,2),O=y[0],g=y[1],j=g.tsx,D=g.jsx,R=g.content;i[O==="_"?c:O]={content:j||D||R}}),o({files:i})}var f=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:u,i=(0,A().useState)(),v=C(i,2),p=v[0],c=v[1];return(0,A().useEffect)(function(){if(r){var d=document.createElement("form"),l=document.createElement("input"),y=a(r);return d.method="POST",d.target="_blank",d.style.display="none",d.action=e,d.appendChild(l),d.setAttribute("data-demo",r.title||""),l.name="parameters",l.value=y,document.body.appendChild(d),c(function(){return function(){return d.submit()}}),function(){return d.remove()}}},[r]),p};m.default=f},"t/kZ":function(P,m,_){"use strict";var b=_("R5yR");Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;function A(){var t=_("q1tI");return A=function(){return t},t}var S=_("dEAq");function w(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(v){return Object.getOwnPropertyDescriptor(t,v).enumerable})),e.push.apply(e,i)}return e}function C(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?w(Object(e),!0).forEach(function(i){I(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function I(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function E(t,r){return o(t)||u(t,r)||h(t,r)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(t,r){if(!!t){if(typeof t=="string")return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,r)}}function s(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,i=new Array(r);e<r;e++)i[e]=t[e];return i}function u(t,r){var e=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var i=[],v=!0,p=!1,c,d;try{for(e=e.call(t);!(v=(c=e.next()).done)&&(i.push(c.value),!(r&&i.length===r));v=!0);}catch(l){p=!0,d=l}finally{try{!v&&e.return!=null&&e.return()}finally{if(p)throw d}}return i}}function o(t){if(Array.isArray(t))return t}var n=function(r){var e=(0,A().useContext)(S.context),i=e.locale,v=e.routes,p=e.config.locales,c=(0,A().useState)([]),d=E(c,2),l=d[0],y=d[1],O=(0,A().useState)([]),g=E(O,2),j=g[0],D=g[1];return(0,A().useEffect)(function(){y(v.filter(function(R){var M=R.title,k=R.meta,L=(k==null?void 0:k.locale)===i,x=!(k==null?void 0:k.locale)&&(!p.length||i===p[0].name);return M&&(x||L)}).reduce(function(R,M){var k,L,x,W={title:((k=M.meta)===null||k===void 0?void 0:k.title)||M.title,path:M.path};return((L=M.meta)===null||L===void 0?void 0:L.group)&&(W.parent=M.meta.group),R.push(W),R.push.apply(R,b((((x=M.meta)===null||x===void 0?void 0:x.slugs)||[]).filter(function(U){var $=U.value,N;return $!==(((N=M.meta)===null||N===void 0?void 0:N.title)||M.title)}).map(function(U){return{title:U.value,path:"".concat(M.path,"#").concat(U.heading),parent:W}}))),R},[]))},[v.length,i]),(0,A().useEffect)(function(){var R=r==null?void 0:r.trim().toUpperCase();if(R){for(var M=[],k=0;k<l.length;k+=1)l[k].title.toUpperCase().indexOf(R)>-1&&M.push(l[k]);D(M)}else D([])},[r,l.length]),j},a=function(){var r=(0,A().useContext)(S.context),e=r.config.algolia,i=(0,A().useCallback)(function(v){window.docsearch(C({inputSelector:v},e))},[e]);return i},f=function(r){var e=(0,A().useContext)(S.context),i=e.config,v=n(r),p=a();return i.algolia?p:v};m.default=f},xbqb:function(P,m){function _(b,A){if(!(b instanceof A))throw new TypeError("Cannot call a class as a function")}P.exports=_},zYLY:function(P,m,_){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;function b(){var s=_("q1tI");return b=function(){return s},s}function A(s,u){return E(s)||I(s,u)||w(s,u)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(s,u){if(!!s){if(typeof s=="string")return C(s,u);var o=Object.prototype.toString.call(s).slice(8,-1);if(o==="Object"&&s.constructor&&(o=s.constructor.name),o==="Map"||o==="Set")return Array.from(s);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return C(s,u)}}function C(s,u){(u==null||u>s.length)&&(u=s.length);for(var o=0,n=new Array(u);o<u;o++)n[o]=s[o];return n}function I(s,u){var o=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(o!=null){var n=[],a=!0,f=!1,t,r;try{for(o=o.call(s);!(a=(t=o.next()).done)&&(n.push(t.value),!(u&&n.length===u));a=!0);}catch(e){f=!0,r=e}finally{try{!a&&o.return!=null&&o.return()}finally{if(f)throw r}}return n}}function E(s){if(Array.isArray(s))return s}function T(s,u,o){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a;if(n<u.length){var f=u[n],t=function(){return T(s,u,o,n+1)},r=f.match(/^([^:]+):?(.*)$/)||[],e=A(r,3),i=e[1],v=e[2];switch(i){case"autoplay":t();break;case"click":var p=v.match(/^(global\()?(.+?)\)?$/)||[],c=A(p,3),d=c[1],l=c[2],y=d?document:s;(a=y.querySelector(l))===null||a===void 0||a.click(),t();break;case"timeout":setTimeout(t,Number(v));break;case"capture":window.postMessage({type:"dumi:capture-element",value:v},"*"),t();break;default:console.warn("[dumi: motion] unknown motion '".concat(f,"', skip.")),t()}}else o()}var h=function(u,o){var n=(0,b().useState)(!1),a=A(n,2),f=a[0],t=a[1],r=(0,b().useCallback)(function(){f||(T(o,u,function(){t(!1)}),t(!0))},[u,o,f]);return(0,b().useEffect)(function(){u[0]==="autoplay"&&o&&r()},[u,o]),[r,f]};m.default=h},zqmC:function(P,m,_){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.default=m.LinkWrapper=void 0;var b=w(_("q1tI")),A=_("LtsZ"),S=["to"];function w(s){return s&&s.__esModule?s:{default:s}}function C(){return C=Object.assign||function(s){for(var u=1;u<arguments.length;u++){var o=arguments[u];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(s[n]=o[n])}return s},C.apply(this,arguments)}function I(s,u){if(s==null)return{};var o=E(s,u),n,a;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);for(a=0;a<f.length;a++)n=f[a],!(u.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,n)||(o[n]=s[n]))}return o}function E(s,u){if(s==null)return{};var o={},n=Object.keys(s),a,f;for(f=0;f<n.length;f++)a=n[f],!(u.indexOf(a)>=0)&&(o[a]=s[a]);return o}var T=function(u){return function(o){var n=o.to,a=I(o,S),f=/^(\w+:)?\/\/|^(mailto|tel):/.test(n)||!n,t=b.default.isValidElement(a.children);return b.default.createElement(u,C({to:n||"",component:f?function(){return b.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},a.children,n&&!t&&b.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},b.default.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),b.default.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))}:void 0},a,f?{}:{onClick:function(){var e;window.scrollTo({top:0});for(var i=arguments.length,v=new Array(i),p=0;p<i;p++)v[p]=arguments[p];(e=a.onClick)===null||e===void 0||e.apply(this,v)}}))}};m.LinkWrapper=T;var h=T(A.Link);m.default=h}}]);
