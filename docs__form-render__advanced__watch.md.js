(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{RZMt:function(M,v,r){},Zxc8:function(M,v,r){"use strict";r.r(v);var i=r("q1tI"),u=r.n(i),h=r("k3GJ"),d=r("MZF8"),l=r("dEAq"),A=r.n(l),p=r("H1Ra"),t=r("RZMt"),W=r.n(t);function m(n,o){return $(n)||f(n,o)||E(n,o)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(n,o){if(!!n){if(typeof n=="string")return b(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(n,o)}}function b(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,s=new Array(o);a<o;a++)s[a]=n[a];return s}function f(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var s=[],j=!0,C=!1,D,O;try{for(a=a.call(n);!(j=(D=a.next()).done)&&(s.push(D.value),!(o&&s.length===o));j=!0);}catch(e){C=!0,O=e}finally{try{!j&&a.return!=null&&a.return()}finally{if(C)throw O}}return s}}function $(n){if(Array.isArray(n))return n}function B(n,o){var a,s=(a=n.match(/\.(\w+)$/))===null||a===void 0?void 0:a[1];return s||(s=o.tsx?"tsx":"jsx"),s}var Z=function(o){var a,s,j,C=Object(i.useRef)(),D=Object(i.useContext)(l.context),O=D.locale,e=Object(l.useLocaleProps)(O,o),H=Object(l.useDemoUrl)(e.identifier),g=e.demoUrl||H,J=(d.a===null||d.a===void 0?void 0:d.a.location.hash)==="#".concat(e.identifier),G=Object.keys(e.sources).length===1,R=Object(l.useCodeSandbox)(((a=e.hideActions)===null||a===void 0?void 0:a.includes("CSB"))?null:e),I=Object(l.useRiddle)(((s=e.hideActions)===null||s===void 0?void 0:s.includes("RIDDLE"))?null:e),X=Object(l.useMotions)(e.motions||[],C.current),S=m(X,2),V=S[0],z=S[1],Q=Object(l.useCopy)(),w=m(Q,2),Y=w[0],q=w[1],ee=Object(i.useState)(function(){return e.sources._?"_":Object.keys(e.sources)[0]}),L=m(ee,2),F=L[0],te=L[1],ue=Object(i.useState)(B(F,e.sources[F])),T=m(ue,2),y=T[0],ne=T[1],ae=Object(i.useState)(Boolean(e.defaultShowCode)),k=m(ae,2),x=k[0],re=k[1],oe=Object(i.useState)(Math.random()),U=m(oe,2),ce=U[0],N=U[1],P=e.sources[F][y]||e.sources[F].content,ie=Object(l.useTSPlaygroundUrl)(O,P),le=Object(i.useRef)(),se=Object(l.usePrefersColor)(),de=m(se,1),me=de[0],K=e.actionBarRender,_e=K===void 0?function(c){return c}:K;Object(i.useEffect)(function(){N(Math.random())},[me]);function Ee(c){te(c),ne(B(c,e.sources[c]))}return u.a.createElement("div",{style:e.style,className:[e.className,"__dumi-default-previewer",J?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:e.identifier,"data-debug":e.debug||void 0,"data-iframe":e.iframe||void 0},e.iframe&&u.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),u.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:e.transform?"translate(0, 0)":void 0,padding:e.compact||e.iframe&&e.compact!==!1?"0":void 0,background:e.background}},e.iframe?u.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(e.iframe).replace(/(\d)$/,"$1px")},key:ce,src:g,ref:le}):e.children),u.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":e.title},e.title&&u.a.createElement(l.AnchorLink,{to:"#".concat(e.identifier)},e.title),e.description&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),u.a.createElement("div",{className:"__dumi-default-previewer-actions"},_e(u.a.createElement(u.a.Fragment,null,R&&u.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:R}),I&&u.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:I}),e.motions&&u.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:function(){return V()}}),e.iframe&&u.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return N(Math.random())}}),!((j=e.hideActions)===null||j===void 0?void 0:j.includes("EXTERNAL"))&&u.a.createElement(l.Link,{target:"_blank",to:g},u.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),u.a.createElement("span",null),u.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":q,onClick:function(){return Y(P)}}),y==="tsx"&&x&&u.a.createElement(l.Link,{target:"_blank",to:ie},u.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),u.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(x?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return re(!x)}})))),x&&u.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&u.a.createElement(h.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:F,onChange:Ee},Object.keys(e.sources).map(function(c){return u.a.createElement(h.TabPane,{tab:c==="_"?"index.".concat(B(c,e.sources[c])):c,key:c})})),u.a.createElement("div",{className:"__dumi-default-previewer-source"},u.a.createElement(p.a,{code:P,lang:y,showCopy:!1}))))};v.default=Z},mFKp:function(M,v,r){"use strict";r.r(v);var i=r("k1fw"),u=r("q1tI"),h=r.n(u),d=r("dEAq"),l=r.n(d),A=r("Zxc8"),p=r("H1Ra"),t=r("nKUr"),W=r.n(t),m=h.a.memo(_=>{var E=_.demos,b=E["watch-demo"].component,f=E["watch-demo-1"].component;return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)(h.a.Fragment,{children:[Object(t.jsxs)("div",{className:"markdown",children:[Object(t.jsxs)("h1",{id:"\u8868\u5355\u76D1\u542Cwatch",children:[Object(t.jsx)(d.AnchorLink,{to:"#\u8868\u5355\u76D1\u542Cwatch","aria-hidden":"true",tabIndex:-1,children:Object(t.jsx)("span",{className:"icon icon-link"})}),"\u8868\u5355\u76D1\u542C\uFF08watch\uFF09"]}),Object(t.jsxs)("p",{children:["\u6709\u65F6\u6211\u4EEC\u9700\u8981\u6839\u636E\u7279\u5B9A\u8868\u5355\u6570\u636E\u7684\u53D8\u52A8\u800C\u65F6\u65F6\u89E6\u53D1\u4E00\u4E2A callback\uFF0CFormRender \u5F00\u653E\u4E86 ",Object(t.jsx)("code",{children:"watch"})," \u53D8\u91CF\uFF0C\u7528\u4E8E\u6570\u636E\u7684\u76D1\u542C\u7684\u5524\u8D77\u56DE\u8C03\u3002\u8BED\u6CD5\u7C7B\u4F3C\u4E8E vue \u7684 watch\u3002"]}),Object(t.jsx)("p",{children:"\u6CE8\u610F form-render \u5E76\u672A\u9650\u5236\u5728 watch \u7684 callback \u91CC\u80FD\u5199\u7684\u5185\u5BB9\uFF0C\u8BF7\u614E\u91CD\u4F7F\u7528\u3002\u4F8B\u5982 path \u662F'#' \u5219\u9ED8\u8BA4\u6BCF\u6B21\u90FD\u4F1A\u6267\u884C\uFF0C\u8981\u662F\u5728 callback \u91CC\u5199\u4E86\u4EFB\u4F55\u5BF9 formData\u3001schema \u7684\u4FEE\u6539\uFF0C\u5C31\u53EF\u80FD\u4F1A\u9677\u5165\u53CD\u590D\u89E6\u53D1\u3002\u6240\u4EE5\u8BF7\u786E\u4FDD watch \u7684\u903B\u8F91\u7B26\u5408\u771F\u5B9E\u8054\u52A8\u4F7F\u7528\u903B\u8F91\u3002"}),Object(t.jsxs)("h2",{id:"\u503C\u7684\u8054\u52A8",children:[Object(t.jsx)(d.AnchorLink,{to:"#\u503C\u7684\u8054\u52A8","aria-hidden":"true",tabIndex:-1,children:Object(t.jsx)("span",{className:"icon icon-link"})}),"\u503C\u7684\u8054\u52A8"]}),Object(t.jsx)("p",{children:"\u6CE8\u610F\u4F7F\u7528 form.setValueByPath \u6307\u5B9A\u8DEF\u5F84\u5BF9\u503C\u8FDB\u884C\u4FEE\u6539"})]}),Object(t.jsx)(A.default,Object(i.a)(Object(i.a)({},E["watch-demo"].previewerProps),{},{children:Object(t.jsx)(b,{})})),Object(t.jsxs)("div",{className:"markdown",children:[Object(t.jsxs)("h2",{id:"schema-\u7684\u8054\u52A8",children:[Object(t.jsx)(d.AnchorLink,{to:"#schema-\u7684\u8054\u52A8","aria-hidden":"true",tabIndex:-1,children:Object(t.jsx)("span",{className:"icon icon-link"})}),"schema \u7684\u8054\u52A8"]}),Object(t.jsx)("p",{children:"form.setSchemaByPath \u6307\u5B9A\u8DEF\u5F84\u5BF9 schema \u8FDB\u884C\u4FEE\u6539"})]}),Object(t.jsx)(A.default,Object(i.a)(Object(i.a)({},E["watch-demo-1"].previewerProps),{},{children:Object(t.jsx)(f,{})})),Object(t.jsxs)("div",{className:"markdown",children:[Object(t.jsxs)("h3",{id:"\u8BED\u6CD5\u8BF4\u660E",children:[Object(t.jsx)(d.AnchorLink,{to:"#\u8BED\u6CD5\u8BF4\u660E","aria-hidden":"true",tabIndex:-1,children:Object(t.jsx)("span",{className:"icon icon-link"})}),"\u8BED\u6CD5\u8BF4\u660E"]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("code",{children:"watch"})," \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0Ckey \u503C\u4E3A\u6570\u636E\u5BF9\u5E94\u7684\u201C\u8DEF\u5F84\u201D\uFF0Cvalue \u4E3A callback \u51FD\u6570\uFF0C\u6216\u8005\u5728\u590D\u6742\u60C5\u51B5\u662F\u4E2A\u5BF9\u8C61"]}),Object(t.jsx)(p.a,{code:`const watch = {
  // # \u4E3A\u5168\u5C40
  '#': val => {
    console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
  },
  input1: val => {
    if (val !== undefined) {
      form.onItemChange('input2', val);
    }
  },
  'object1.select2': {
    handler: val => {
      if (val === 'option1') {
        form.onItemChange('object1.input2', 'hello');
      }
    },
    immediate: true,
  },
};`,lang:"js"}),Object(t.jsxs)("h3",{id:"option-immediate",children:[Object(t.jsx)(d.AnchorLink,{to:"#option-immediate","aria-hidden":"true",tabIndex:-1,children:Object(t.jsx)("span",{className:"icon icon-link"})}),"Option: immediate"]}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"\u7C7B\u578B: boolean"}),Object(t.jsx)("li",{children:"\u9ED8\u8BA4: false"})]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("code",{children:"immediate: true"})," \u4F1A\u5728\u9996\u6B21\u52A0\u8F7D\u65F6\u5C31\u6267\u884C\u4E00\u6B21 watch \u7684 handler"]}),Object(t.jsx)(p.a,{code:`const watch = {
  // # \u4E3A\u5168\u5C40
  input1: {
    handler: val => {
      if (val !== undefined) {
        form.onItemChange('input2', val);
      }
    },
    immediate: true,
  },
};`,lang:"js"})]})]})})});v.default=_=>{var E=h.a.useContext(d.context),b=E.demos;return h.a.useEffect(()=>{var f;_!=null&&(f=_.location)!==null&&f!==void 0&&f.hash&&d.AnchorLink.scrollToAnchor(decodeURIComponent(_.location.hash.slice(1)))},[]),Object(t.jsx)(m,{demos:b})}}}]);
