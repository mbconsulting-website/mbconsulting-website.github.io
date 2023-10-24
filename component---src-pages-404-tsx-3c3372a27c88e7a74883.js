"use strict";(self.webpackChunkgatsby_starter_chakra_ui_type_script=self.webpackChunkgatsby_starter_chakra_ui_type_script||[]).push([[218],{2513:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u}});var a=t(7294),r=t(1883),i=t(7747),s=t(2757),c=t(1293),o=t(8424),l=t(2883);n.default=()=>a.createElement(i.xu,{p:24,fontFamily:"-apple-system, Roboto, sans-serif, serif"},a.createElement(s.X,{as:"h1",mt:0,mb:16,maxW:"container.sm"},"Page not found"),a.createElement(c.x,{mb:12},"Sorry 😔, we couldn’t find what you were looking for.",a.createElement("br",null),null,a.createElement("br",null),a.createElement(o.z,null,a.createElement(l.r,{as:r.Link,to:"/"},"Go home"))));const u=()=>a.createElement("title",null,"Not found")},8424:function(e,n,t){t.d(n,{z:function(){return _}});var a=t(7294);var r=t(5227),[i,s]=(0,r.k)({strict:!1,name:"ButtonGroupContext"}),c=t(9133),o=t(5432),l=t(5893);function u(e){const{children:n,className:t,...r}=e,i=(0,a.isValidElement)(n)?(0,a.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,s=(0,o.cx)("chakra-button__icon",t);return(0,l.jsx)(c.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:s,children:i})}u.displayName="ButtonIcon";var m=t(1136);function d(e){const{label:n,placement:t,spacing:r="0.5rem",children:i=(0,l.jsx)(m.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:u,...d}=e,f=(0,o.cx)("chakra-button__spinner",s),p="start"===t?"marginEnd":"marginStart",x=(0,a.useMemo)((()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[p]:n?r:0,fontSize:"1em",lineHeight:"normal",...u})),[u,n,p,r]);return(0,l.jsx)(c.m.div,{className:f,...d,__css:x,children:i})}function f(...e){return n=>{e.forEach((e=>{!function(e,n){if(null!=e)if("function"!=typeof e)try{e.current=n}catch(t){throw new Error(`Cannot assign value '${n}' to ref '${e}'`)}else e(n)}(e,n)}))}}function p(...e){return(0,a.useMemo)((()=>f(...e)),e)}d.displayName="ButtonSpinner";var x=t(6554),h=t(2032),g=t(3179),_=(0,x.G)(((e,n)=>{const t=s(),r=(0,h.mq)("Button",{...t,...e}),{isDisabled:i=(null==t?void 0:t.isDisabled),isLoading:u,isActive:m,children:f,leftIcon:x,rightIcon:_,loadingText:b,iconSpacing:N="0.5rem",type:k,spinner:v,spinnerPlacement:j="start",className:S,as:E,...w}=(0,g.Lr)(e),I=(0,a.useMemo)((()=>{const e={...null==r?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!t&&{_focus:e}}}),[r,t]),{ref:C,type:B}=function(e){const[n,t]=(0,a.useState)(!e);return{ref:(0,a.useCallback)((e=>{e&&t("BUTTON"===e.tagName)}),[]),type:n?"button":void 0}}(E),G={rightIcon:_,leftIcon:x,iconSpacing:N,children:f};return(0,l.jsxs)(c.m.button,{ref:p(n,C),as:E,type:null!=k?k:B,"data-active":(0,o.PB)(m),"data-loading":(0,o.PB)(u),__css:I,className:(0,o.cx)("chakra-button",S),...w,disabled:i||u,children:[u&&"start"===j&&(0,l.jsx)(d,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:N,children:v}),u?b||(0,l.jsx)(c.m.span,{opacity:0,children:(0,l.jsx)(y,{...G})}):(0,l.jsx)(y,{...G}),u&&"end"===j&&(0,l.jsx)(d,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:N,children:v})]})}));function y(e){const{leftIcon:n,rightIcon:t,children:a,iconSpacing:r}=e;return(0,l.jsxs)(l.Fragment,{children:[n&&(0,l.jsx)(u,{marginEnd:r,children:n}),a,t&&(0,l.jsx)(u,{marginStart:r,children:t})]})}_.displayName="Button"},1293:function(e,n,t){t.d(n,{x:function(){return u}});var a=t(6554),r=t(2032),i=t(3179),s=t(9133),c=t(5432),o=t(7052),l=t(5893),u=(0,a.G)((function(e,n){const t=(0,r.mq)("Text",e),{className:a,align:u,decoration:m,casing:d,...f}=(0,i.Lr)(e),p=(0,o.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,l.jsx)(s.m.p,{ref:n,className:(0,c.cx)("chakra-text",e.className),...p,...f,__css:t})}));u.displayName="Text"},2757:function(e,n,t){t.d(n,{X:function(){return l}});var a=t(6554),r=t(2032),i=t(3179),s=t(9133),c=t(5432),o=t(5893),l=(0,a.G)((function(e,n){const t=(0,r.mq)("Heading",e),{className:a,...l}=(0,i.Lr)(e);return(0,o.jsx)(s.m.h2,{ref:n,className:(0,c.cx)("chakra-heading",e.className),...l,__css:t})}));l.displayName="Heading"},2883:function(e,n,t){t.d(n,{r:function(){return l}});var a=t(6554),r=t(2032),i=t(3179),s=t(9133),c=t(5432),o=t(5893),l=(0,a.G)((function(e,n){const t=(0,r.mq)("Link",e),{className:a,isExternal:l,...u}=(0,i.Lr)(e);return(0,o.jsx)(s.m.a,{target:l?"_blank":void 0,rel:l?"noopener":void 0,ref:n,className:(0,c.cx)("chakra-link",a),...u,__css:t})}));l.displayName="Link"},7747:function(e,n,t){t.d(n,{xu:function(){return s}});var a=t(9133),r=t(6554),i=t(5893),s=(0,a.m)("div");s.displayName="Box";var c=(0,r.G)((function(e,n){const{size:t,centerContent:a=!0,...r}=e,c=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,i.jsx)(s,{ref:n,boxSize:t,__css:{...c,flexShrink:0,flexGrow:0},...r})}));c.displayName="Square",(0,r.G)((function(e,n){const{size:t,...a}=e;return(0,i.jsx)(c,{size:t,ref:n,borderRadius:"9999px",...a})})).displayName="Circle"},7052:function(e,n,t){function a(e){const n=Object.assign({},e);for(let t in n)void 0===n[t]&&delete n[t];return n}t.d(n,{o:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-404-tsx-3c3372a27c88e7a74883.js.map