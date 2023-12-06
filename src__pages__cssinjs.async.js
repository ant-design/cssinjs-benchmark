"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[649],{42890:function(A,h,t){t.d(h,{Z:function(){return V}});var m=t(19058),a=t.n(m),n=t(24576),v=t(96314),x=t(80174),j=t(64445),p=t(64668),W=t(48500),k=t(79249),M=t(14339),O=t(14648),I=t(57382),R=t(70451),e=t(44810),K=function(s){var r=s.theme;return(0,e.jsx)(v.ZP,{theme:r,children:(0,e.jsxs)("div",{children:[(0,e.jsx)(j.ZP,{children:"Button"}),(0,e.jsx)(p.Z,{}),(0,e.jsx)(W.Z,{}),(0,e.jsx)(k.Z,{}),(0,e.jsx)(M.Z,{}),(0,e.jsx)(O.Z,{content:"Popover content",children:(0,e.jsx)("div",{children:"123"})}),(0,e.jsx)(I.Z,{}),(0,e.jsx)(R.Z,{children:(0,e.jsx)(R.Z.Item,{children:(0,e.jsx)("div",{children:"123"})})})]})})},F=function(s){var r=s.onEffect,i=s.themeCount,l=i===void 0?5:i;return(0,n.useEffect)(function(){r==null||r()},[]),(0,e.jsx)(e.Fragment,{children:Array(l).fill(1).map(function(c,u){return(0,e.jsx)(K,{theme:{token:{borderRadius:u}}},u)})})},L=F,g=t(97211),U=(0,n.forwardRef)(function(f,s){var r=f.children,i=(0,n.useState)(function(){return(0,g.Df)()}),l=a()(i,1),c=l[0];return(0,n.useImperativeHandle)(s,function(){return{getSize:function(){return"".concat((new Blob([(0,g.EN)(c,!0)]).size/1024).toFixed(2),"KB")}}}),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(g.V9,{cache:c,children:r})})}),H=U,N=function(s){var r=s.renderDemo,i=r===void 0?function(o){return o}:r,l=n.useState(1),c=a()(l,2),u=c[0],G=c[1],J=n.useState(!1),S=a()(J,2),Q=S[0],C=S[1],X=n.useState(),D=a()(X,2),E=D[0],Z=D[1],Y=n.useState("light"),y=a()(Y,2),T=y[0],b=y[1],$=n.useRef(0),P=n.useRef(null),w=n.useState(""),z=a()(w,2),B=z[0],q=z[1],_=function(){$.current=Date.now(),C(!0)};return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{children:(0,e.jsxs)("label",{children:[(0,e.jsx)("span",{style:{marginRight:4},children:"Themes:"}),(0,e.jsx)("input",{style:{width:80},type:"number",value:u,onChange:function(d){return G(Number(d.target.value))}})]})}),(0,e.jsxs)("div",{style:{display:"flex",gap:8,marginTop:12},children:[(0,e.jsx)("button",{onClick:_,children:"Render"}),(0,e.jsx)("button",{onClick:function(){C(!1),Z(void 0)},children:"Reset"}),(0,e.jsx)("button",{onClick:function(){return window.location.reload()},children:"Refresh"}),(0,e.jsx)("button",{onClick:function(){return b(function(d){return d==="dark"?"light":"dark"})},children:"Change Theme"})]}),(0,e.jsx)("div",{style:{border:"2px dashed gray",padding:12,height:400,overflow:"auto",marginTop:24,background:T==="dark"?"#000":"#fff"},children:Q?i((0,e.jsx)(v.ZP,{theme:{algorithm:T==="dark"?x.Z.darkAlgorithm:x.Z.defaultAlgorithm},children:(0,e.jsx)(H,{ref:P,children:(0,e.jsx)(L,{themeCount:u,onEffect:function(){var d;Z(Date.now()-$.current),q(((d=P.current)===null||d===void 0?void 0:d.getSize())||"")}})})})):"Click Render to start"}),(0,e.jsxs)("div",{style:{border:"2px dashed gray",padding:12,marginTop:24},children:[E&&(0,e.jsxs)("div",{children:["Rendered in ",E,"ms"]}),B&&(0,e.jsxs)("div",{children:["Extract style size ",B]})]})]})},V=N},99525:function(A,h,t){t.r(h),t.d(h,{default:function(){return v}});var m=t(42890),a=t(96314),n=t(44810);function v(){return(0,n.jsx)(m.Z,{renderDemo:function(j){return(0,n.jsx)(a.ZP,{children:j})}})}}}]);
