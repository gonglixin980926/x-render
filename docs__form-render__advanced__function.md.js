(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{IfXp:function(P,b,r){"use strict";r.r(b);var s=r("k1fw"),n=r("q1tI"),O=r.n(n),E=r("dEAq"),_=r.n(E),g=r("Zxc8"),D=r("H1Ra"),p=r("dMo/"),e=r("nKUr"),m=r.n(e),y=O.a.memo(C=>{var f=C.demos,a=f["function-demo"].component,c=f["function-demo-1"].component;return Object(e.jsx)(e.Fragment,{children:Object(e.jsxs)(O.a.Fragment,{children:[Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h1",{id:"\u8868\u5355\u8054\u52A8",children:[Object(e.jsx)(E.AnchorLink,{to:"#\u8868\u5355\u8054\u52A8","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u8868\u5355\u8054\u52A8"]}),Object(e.jsx)("p",{children:"\u8868\u5355\u7EC4\u4EF6\u95F4\u7684\u8054\u52A8\u662F\u5F00\u53D1\u4E2D\u666E\u904D\u7684\u95EE\u9898\uFF0CFormRender \u5E0C\u671B\u80FD\u4FDD\u6301\u7B80\u6D01\u6613\u7528\u7684 api \u7684\u540C\u65F6\u652F\u6301\u8054\u52A8\u3002\u4E3A\u6B64\u6211\u4EEC\u63D0\u4F9B\u4E86\u201C\u51FD\u6570\u8868\u8FBE\u5F0F\u201D\u3002"}),Object(e.jsxs)("h3",{id:"\u51FD\u6570\u8868\u8FBE\u5F0F",children:[Object(e.jsx)(E.AnchorLink,{to:"#\u51FD\u6570\u8868\u8FBE\u5F0F","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u51FD\u6570\u8868\u8FBE\u5F0F"]}),Object(e.jsxs)("p",{children:["\u51FD\u6570\u8868\u8FBE\u5F0F\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5E76\u4EE5\u53CC\u62EC\u53F7",Object(e.jsxs)("code",{children:['"',"{","{","...","}","}",'"']}),"\u4E3A\u8BED\u6CD5\u7279\u5F81\u3002schema \u91CC\u9664\u4E86 default (\u9ED8\u8BA4\u503C) / rules \u5B57\u6BB5(\u6821\u9A8C\u4FE1\u606F) \u4EE5\u5916\uFF0C\u6240\u6709\u5B57\u6BB5\u90FD\u652F\u6301\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u4F8B\u5982"]}),Object(e.jsx)(D.a,{code:`{
  "title": "{{formData.x.y === 'us' ? '\u7F8E\u5143':'\u4EBA\u6C11\u5E01'}}",
  "type": "string"
}`,lang:"json"}),Object(e.jsxs)("p",{children:["\u6CE8 1\uFF1Arules \u5B57\u6BB5\u6682\u4E0D\u652F\u6301\u8868\u8FBE\u5F0F\uFF0C\u800C\u662F\u7528 ",Object(e.jsx)("code",{children:"validator"})," \u65B9\u6CD5\u5199\u590D\u6742\u6821\u9A8C\uFF0C\u8BE6\u89C1 ",Object(e.jsx)(E.Link,{to:"https://github.com/yiminghe/async-validator#type",children:"async-validator \u6587\u6863"}),"\u3002",Object(e.jsx)("br",{}),"\u6CE8 2\uFF1Adefault \u5B57\u6BB5\u5BF9\u5E94\u7684\u662F <Input /> \u7684 defaultValue\uFF0CdefaultValue \u662F\u4E0D\u4F1A\u6839\u636E\u503C\u7684\u540E\u7EED\u53D8\u5316\u800C\u53D8\u5316\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E5F\u4E0D\u5141\u8BB8 default \u5B57\u6BB5\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u9047\u5230\u4E00\u4E2A\u7EC4\u4EF6\u9700\u8981\u4FEE\u6539\u53E6\u4E00\u4E2A\u7EC4\u4EF6\u7684\u503C\u7684\u60C5\u51B5\uFF0C\u8BF7\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u7684 ",Object(e.jsx)("code",{children:"addons.onItemChange"})," \u65B9\u6CD5\u3002"]}),Object(e.jsx)("p",{children:"\u51FD\u6570\u8868\u8FBE\u5F0F\u53EF\u4F7F\u7528\u4EE5\u4E0B 2 \u5173\u952E\u5B57\uFF1A"}),Object(e.jsxs)(p.a,{children:[Object(e.jsx)("thead",{children:Object(e.jsxs)("tr",{children:[Object(e.jsx)("th",{children:"\u540D\u79F0"}),Object(e.jsx)("th",{align:"center",children:"\u8BF4\u660E"})]})}),Object(e.jsxs)("tbody",{children:[Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"formData"}),Object(e.jsx)("td",{align:"center",children:"\u6574\u4E2A form \u7684\u503C \uFF08\u6700\u5E38\u7528\uFF0C\u5F53\u4E24\u4E2A\u5173\u8054\u7EC4\u4EF6\u8DDD\u79BB\u8F83\u8FDC\u65F6\uFF0C\u53EF\u4EE5\u4ECE\u9876\u5C42\u7684 formData \u91CC\u83B7\u53D6\uFF09"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{children:"rootValue"}),Object(e.jsx)("td",{align:"center",children:"\u7236\u8868\u5355\u5143\u7D20\u7684\u503C \uFF08\u4E0A\u4E00\u7EA7\u7684\u503C\uFF0C\u53EA\u5728\u5217\u8868\u573A\u666F\u7684\u4F7F\u7528\uFF0C\u4F8B\u5982\u5217\u8868\u67D0\u4E2A\u5143\u7D20\u7684\u7236\u7EA7\u5C31\u662F\u6574\u4E2A item\uFF0C\u5176\u4ED6\u573A\u666F\u4E00\u5F8B\u4F7F\u7528 formData\uFF09"})]})]})]}),Object(e.jsxs)("h3",{id:"\u4F7F\u7528",children:[Object(e.jsx)(E.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]})]}),Object(e.jsx)(g.default,Object(s.a)(Object(s.a)({},f["function-demo"].previewerProps),{},{children:Object(e.jsx)(a,{})})),Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("ol",{children:[Object(e.jsxs)("li",{children:["\u5728\u4EE5\u4E0A\u573A\u666F\uFF0C",Object(e.jsx)("code",{children:"rootValue.checkbox1"}),"\u7684\u7236\u7EA7\u5C31\u662F formData\uFF0C\u6240\u4EE5",Object(e.jsx)("code",{children:"rootValue"}),"\u5B57\u6BB5\u4E0E",Object(e.jsx)("code",{children:"formData"}),"\u5B57\u6BB5\u4F7F\u7528\u8D77\u6765\u6CA1\u6709\u533A\u522B\u3002"]}),Object(e.jsxs)("li",{children:[Object(e.jsx)("strong",{children:"\u5199\u8868\u8FBE\u5F0F\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u9996\u6B21\u6E32\u67D3\u65F6\uFF0C\u6240\u6709\u6CA1\u6709\u6307\u660E default \u503C\u7684\u5143\u7D20\uFF0C\u503C\u90FD\u662F undefined"}),'\u3002\u6240\u4EE5\u4F8B\u5982 select1\u3001input1 \u7684\u521D\u59CB\u503C\u5E76\u4E0D\u662F\u7A7A\u5B57\u7B26\u4E32 ""\uFF0C\u800C\u662F undefined\u3002\u5199\u7C7B\u4F3C\u4E8E ',Object(e.jsxs)("code",{children:['"',"{","{","formData.input1 === ''","}","}",'"']})," \u7684\u8868\u8FBE\u5F0F\u5728\u9996\u6B21\u6E32\u67D3\u4E2D\u662F\u65E0\u6548\u7684"]})]}),Object(e.jsxs)("h3",{id:"\u66F4\u591A\u5C5E\u6027\u7684-demo",children:[Object(e.jsx)(E.AnchorLink,{to:"#\u66F4\u591A\u5C5E\u6027\u7684-demo","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u66F4\u591A\u5C5E\u6027\u7684 demo"]})]}),Object(e.jsx)(g.default,Object(s.a)(Object(s.a)({},f["function-demo-1"].previewerProps),{},{children:Object(e.jsx)(c,{})})),Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h3",{id:"\u6700\u540E",children:[Object(e.jsx)(E.AnchorLink,{to:"#\u6700\u540E","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u6700\u540E"]}),Object(e.jsxs)("ol",{children:[Object(e.jsxs)("li",{children:["\u5982\u679C\u6D89\u53CA\u5230\u503C\u7684\u8054\u52A8\uFF0C\u6216\u8005\u6781\u5176\u590D\u6742\u7684\u8868\u5355\u5C55\u793A\u8054\u52A8\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",Object(e.jsx)(E.Link,{to:"/form-render/advanced/watch",children:"watch"})]}),Object(e.jsxs)("li",{children:["\u66F4\u590D\u6742\u548C\u5B9A\u5236\u5316\u7684\u8868\u5355\u9700\u6C42\u5EFA\u8BAE\u4F7F\u7528 ",Object(e.jsx)("code",{children:"dependencies"})," \u5B57\u6BB5\u660E\u786E\u6CE8\u660E\u5173\u8054\u5173\u7CFB\u5B57\u6BB5\uFF0C\u5E76\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B9A\u5236\u6240\u9700\u5C55\u793A\u3002FormRender \u7684\u8BBE\u8BA1\u7406\u5FF5\u975E\u5E38\u63A8\u5D07\u7EC4\u4EF6\u7684\u5373\u63D2\u5373\u7528\uFF0C\u8BE6\u89C1",Object(e.jsx)(E.Link,{to:"/form-render/advanced/widget",children:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"}),"\u7AE0\u8282\u3002",Object(e.jsx)("code",{children:"dependencies"}),"\u5B57\u6BB5\u7684\u4F7F\u7528\u7EC6\u8282\u89C1",Object(e.jsx)(E.AnchorLink,{to:"/form-render/schema/schema#dependencies",children:"schema \u89C4\u8303"})]})]})]})]})})});b.default=C=>{var f=O.a.useContext(E.context),a=f.demos;return O.a.useEffect(()=>{var c;C!=null&&(c=C.location)!==null&&c!==void 0&&c.hash&&E.AnchorLink.scrollToAnchor(decodeURIComponent(C.location.hash.slice(1)))},[]),Object(e.jsx)(y,{demos:a})}},RZMt:function(P,b,r){},WpQk:function(P,b,r){},Zxc8:function(P,b,r){"use strict";r.r(b);var s=r("q1tI"),n=r.n(s),O=r("k3GJ"),E=r("MZF8"),_=r("dEAq"),g=r.n(_),D=r("H1Ra"),p=r("RZMt"),e=r.n(p);function m(t,l){return c(t)||a(t,l)||C(t,l)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(t,l){if(!!t){if(typeof t=="string")return f(t,l);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return f(t,l)}}function f(t,l){(l==null||l>t.length)&&(l=t.length);for(var o=0,d=new Array(l);o<l;o++)d[o]=t[o];return d}function a(t,l){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var d=[],h=!0,v=!1,x,A;try{for(o=o.call(t);!(h=(x=o.next()).done)&&(d.push(x.value),!(l&&d.length===l));h=!0);}catch(u){v=!0,A=u}finally{try{!h&&o.return!=null&&o.return()}finally{if(v)throw A}}return d}}function c(t){if(Array.isArray(t))return t}function i(t,l){var o,d=(o=t.match(/\.(\w+)$/))===null||o===void 0?void 0:o[1];return d||(d=l.tsx?"tsx":"jsx"),d}var j=function(l){var o,d,h,v=Object(s.useRef)(),x=Object(s.useContext)(_.context),A=x.locale,u=Object(_.useLocaleProps)(A,l),B=Object(_.useDemoUrl)(u.identifier),T=u.demoUrl||B,Z=(E.a===null||E.a===void 0?void 0:E.a.location.hash)==="#".concat(u.identifier),J=Object.keys(u.sources).length===1,S=Object(_.useCodeSandbox)(((o=u.hideActions)===null||o===void 0?void 0:o.includes("CSB"))?null:u),U=Object(_.useRiddle)(((d=u.hideActions)===null||d===void 0?void 0:d.includes("RIDDLE"))?null:u),X=Object(_.useMotions)(u.motions||[],v.current),W=m(X,2),z=W[0],G=W[1],Q=Object(_.useCopy)(),K=m(Q,2),Y=K[0],q=K[1],ee=Object(s.useState)(function(){return u.sources._?"_":Object.keys(u.sources)[0]}),k=m(ee,2),M=k[0],ue=k[1],te=Object(s.useState)(i(M,u.sources[M])),N=m(te,2),L=N[0],ne=N[1],re=Object(s.useState)(Boolean(u.defaultShowCode)),w=m(re,2),I=w[0],ae=w[1],oe=Object(s.useState)(Math.random()),$=m(oe,2),ce=$[0],H=$[1],R=u.sources[M][L]||u.sources[M].content,ie=Object(_.useTSPlaygroundUrl)(A,R),le=Object(s.useRef)(),se=Object(_.usePrefersColor)(),de=m(se,1),Ee=de[0],V=u.actionBarRender,_e=V===void 0?function(F){return F}:V;Object(s.useEffect)(function(){H(Math.random())},[Ee]);function Fe(F){ue(F),ne(i(F,u.sources[F]))}return n.a.createElement("div",{style:u.style,className:[u.className,"__dumi-default-previewer",Z?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:u.identifier,"data-debug":u.debug||void 0,"data-iframe":u.iframe||void 0},u.iframe&&n.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),n.a.createElement("div",{ref:v,className:"__dumi-default-previewer-demo",style:{transform:u.transform?"translate(0, 0)":void 0,padding:u.compact||u.iframe&&u.compact!==!1?"0":void 0,background:u.background}},u.iframe?n.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(u.iframe).replace(/(\d)$/,"$1px")},key:ce,src:T,ref:le}):u.children),n.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":u.title},u.title&&n.a.createElement(_.AnchorLink,{to:"#".concat(u.identifier)},u.title),u.description&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.description}})),n.a.createElement("div",{className:"__dumi-default-previewer-actions"},_e(n.a.createElement(n.a.Fragment,null,S&&n.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:S}),U&&n.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:U}),u.motions&&n.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:G,onClick:function(){return z()}}),u.iframe&&n.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return H(Math.random())}}),!((h=u.hideActions)===null||h===void 0?void 0:h.includes("EXTERNAL"))&&n.a.createElement(_.Link,{target:"_blank",to:T},n.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),n.a.createElement("span",null),n.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":q,onClick:function(){return Y(R)}}),L==="tsx"&&I&&n.a.createElement(_.Link,{target:"_blank",to:ie},n.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),n.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(I?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return ae(!I)}})))),I&&n.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!J&&n.a.createElement(O.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:M,onChange:Fe},Object.keys(u.sources).map(function(F){return n.a.createElement(O.TabPane,{tab:F==="_"?"index.".concat(i(F,u.sources[F])):F,key:F})})),n.a.createElement("div",{className:"__dumi-default-previewer-source"},n.a.createElement(D.a,{code:R,lang:L,showCopy:!1}))))};b.default=j},"dMo/":function(P,b,r){"use strict";var s=r("q1tI"),n=r.n(s),O=r("hKI/"),E=r.n(O),_=r("WpQk"),g=r.n(_);function D(a,c){return C(a)||y(a,c)||e(a,c)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(a,c){if(!!a){if(typeof a=="string")return m(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return m(a,c)}}function m(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,j=new Array(c);i<c;i++)j[i]=a[i];return j}function y(a,c){var i=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var j=[],t=!0,l=!1,o,d;try{for(i=i.call(a);!(t=(o=i.next()).done)&&(j.push(o.value),!(c&&j.length===c));t=!0);}catch(h){l=!0,d=h}finally{try{!t&&i.return!=null&&i.return()}finally{if(l)throw d}}return j}}function C(a){if(Array.isArray(a))return a}var f=function(c){var i=c.children,j=Object(s.useRef)(),t=Object(s.useState)(!1),l=D(t,2),o=l[0],d=l[1],h=Object(s.useState)(!1),v=D(h,2),x=v[0],A=v[1];return Object(s.useEffect)(function(){var u=j.current,B=E()(function(){d(u.scrollLeft>0),A(u.scrollLeft<u.scrollWidth-u.offsetWidth)},100);return B(),u.addEventListener("scroll",B),window.addEventListener("resize",B),function(){u.removeEventListener("scroll",B),window.removeEventListener("resize",B)}},[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:j,"data-left-folded":o||void 0,"data-right-folded":x||void 0},n.a.createElement("table",null,i)))};b.a=f}}]);
