(this["webpackJsonptask-for-gramoday"]=this["webpackJsonptask-for-gramoday"]||[]).push([[0],{114:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(37),i=n.n(c),s=(n(114),n(11)),o=n(202),u=n(203),l=n(201),d=n(199),j=n(15),p=n.n(j),b=n(14),f=n(19),h=n(204),x=n(205),O=n(187),m=n(206),v=n(207),g=n(208),w=n(93),y=n.n(w),k=n(193),C=n(192),S=n(198),R=function(e){return"https://api.github.com/repos/".concat(e)},F=function(e){return"https://api.github.com/repos/".concat(e,"/branches")},_=function(e){return"https://api.github.com/repos/".concat(e,"/issues")},E=function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(R(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(_(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){return"https://secret-everglades-26382.herokuapp.com/"},N=function(){return"https://secret-everglades-26382.herokuapp.com/addRepo"},W=function(){return"https://secret-everglades-26382.herokuapp.com/deleteRepo"},L=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(I());case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={full_name:t.full_name},e.next=3,fetch(N(),{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={full_name:t},e.next=3,fetch(W(),{method:"DELETE",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=n(1),A={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"center"};function U(e){var t=e.repoCallback,n=e.repoListCallback,a=r.useState(!1),c=Object(s.a)(a,2),i=c[0],o=c[1],u=function(){return o(!1)},d=r.useState(0),j=Object(s.a)(d,2),w=j[0],R=j[1],F=r.useState(""),_=Object(s.a)(F,2),T=_[0],D=_[1],I=r.useState(""),N=Object(s.a)(I,2),W=N[0],J=N[1],U=r.useState(""),G=Object(s.a)(U,2),z=G[0],H=G[1],M=r.useState([]),Y=Object(s.a)(M,2),q=Y[0],K=Y[1],Q=function(){var e=Object(f.a)(p.a.mark((function e(t,n){var r,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t+"/"+n,e.next=3,E(r);case 3:a=e.sent,c={full_name:r,description:a.description},K([].concat(Object(b.a)(q),[c])),u(),J(""),H(""),B(c);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:e.sent.map(function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t.full_name);case 2:n=e.sent,r={full_name:t.full_name,description:n.description},K([].concat(Object(b.a)(q),[r]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.useEffect((function(){V()}),[]),r.useEffect((function(){t(T),n(q)}),[T,q]),Object(P.jsxs)(h.a,{sx:{width:"100%",maxWidth:"100vw",bgcolor:"background.paper"},children:[Object(P.jsx)(x.a,{component:"nav","aria-label":"secondary mailbox folder",children:0!==q.length?q.map((function(e,t){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(O.a,{selected:w===t,onClick:function(n){return function(e,t,n){R(t),D(n.full_name)}(0,t,e)},children:Object(P.jsx)(m.a,{primary:e.full_name,secondary:e.description})},t),Object(P.jsx)(v.a,{})]})})):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(O.a,{children:Object(P.jsx)(m.a,{primary:"No repo added, add repo through + icon"})}),Object(P.jsx)(v.a,{})]})}),Object(P.jsx)(g.a,{color:"primary","aria-label":"add",sx:{position:"fixed",bottom:"30px",left:"20px"},onClick:function(){return o(!0)},children:Object(P.jsx)(y.a,{})}),Object(P.jsx)(k.a,{open:i,onClose:u,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(P.jsxs)(h.a,{sx:A,children:[Object(P.jsx)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"ADD NEW REPOSITORY"}),Object(P.jsx)(C.a,{id:"outlined-basic",label:"Owner / Organization",variant:"outlined",margin:"normal",onChange:function(e){return J(e.target.value)},value:W,fullWidth:!0}),Object(P.jsx)(C.a,{id:"outlined-basic",label:"Repository Name",variant:"outlined",margin:"normal",onChange:function(e){return H(e.target.value)},value:z,fullWidth:!0}),Object(P.jsx)(S.a,{variant:"contained",sx:{margin:"20px"},onClick:function(){return Q(W,z)},children:"Add"})]})})]})}var G=n(52),z=n(96),H=n(94),M=n.n(H),Y=n(27),q=n(194),K=n(209);function Q(e){var t=r.useState([]),n=Object(s.a)(t,2),a=n[0],c=n[1];r.useEffect((function(){""!==e.selectedRepo&&i(e.selectedRepo)}),[e.selectedRepo]);var i=function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsx)(h.a,{sx:{width:"100%",maxWidth:"100vw",bgcolor:"background.paper"},children:Object(P.jsx)(x.a,{component:"nav","aria-label":"secondary mailbox folder",children:0!==a.length?a.map((function(e,t){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(O.a,{children:Object(P.jsx)(m.a,{primary:e.name})}),Object(P.jsx)(v.a,{})]})})):Object(P.jsx)(O.a,{children:Object(P.jsx)(m.a,{primary:"No branches available"})})})})}var V=n(197),X=n(211),Z=n(200);function $(e){var t=r.useState([]),n=Object(s.a)(t,2),a=n[0],c=n[1];r.useEffect((function(){""!==e.selectedRepo&&i(e.selectedRepo)}),[e.selectedRepo]);var i=function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsx)(x.a,{sx:{width:"100%",maxWidth:"100vw",bgcolor:"background.paper"},children:0!==a.length?a.map((function(e,t){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(V.a,{alignItems:"flex-start",children:[Object(P.jsx)(X.a,{children:Object(P.jsx)(Z.a,{alt:"user image",src:e.user.avatar_url})}),Object(P.jsx)(m.a,{primary:new Date(e.created_at).toLocaleDateString(),secondary:Object(P.jsxs)(r.Fragment,{children:[Object(P.jsx)(l.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:e.user.login})," \u2014 ".concat(e.title)]})})]}),Object(P.jsx)(v.a,{variant:"inset",component:"li"})]})})):Object(P.jsx)(O.a,{children:Object(P.jsx)(m.a,{primary:"No issues available"})})})}var ee=["children","value","index"];function te(e){var t=e.children,n=e.value,r=e.index,a=Object(z.a)(e,ee);return Object(P.jsx)("div",Object(G.a)(Object(G.a)({role:"tabpanel",hidden:n!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r)},a),{},{children:n===r&&Object(P.jsx)(h.a,{sx:{p:3},children:Object(P.jsx)(l.a,{children:t})})}))}function ne(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function re(e){var t=Object(Y.a)(),n=r.useState(0),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(P.jsxs)(h.a,{sx:{bgcolor:"background.paper",width:"100%"},children:[Object(P.jsx)(o.a,{position:"static",children:Object(P.jsxs)(q.a,{value:c,onChange:function(e,t){i(t)},indicatorColor:"secondary",textColor:"inherit","aria-label":"full width tabs example",children:[Object(P.jsx)(K.a,Object(G.a)({label:"Branches"},ne(0))),Object(P.jsx)(K.a,Object(G.a)({label:"Issues"},ne(1)))]})}),Object(P.jsxs)(M.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:c,onChangeIndex:function(e){i(e)},children:[Object(P.jsx)(te,{value:c,index:0,dir:t.direction,children:Object(P.jsx)(Q,{selectedRepo:e.selectedRepo})}),Object(P.jsx)(te,{value:c,index:1,dir:t.direction,children:Object(P.jsx)($,{selectedRepo:e.selectedRepo})})]})]})}var ae=function(){var e=a.a.useState(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=a.a.useState([]),i=Object(s.a)(c,2),j=i[0],p=i[1],b=a.a.useCallback((function(e){r(e)}),[]),f=a.a.useCallback((function(e){p(e)}),[]);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(o.a,{position:"static",children:Object(P.jsx)(u.a,{children:Object(P.jsx)(l.a,{variant:"h6",component:"div",align:"center",sx:{flexGrow:1},children:"GITHUB BROWSER"})})}),Object(P.jsxs)(d.a,{container:!0,sx:{height:"100vh"},children:[Object(P.jsx)(d.a,{item:!0,xs:4,borderRight:1,children:Object(P.jsx)(U,{repoCallback:b,repoListCallback:f})}),Object(P.jsxs)(d.a,{item:!0,xs:8,children:[Object(P.jsx)(d.a,{container:!0,children:Object(P.jsx)(d.a,{item:!0,xs:12,children:Object(P.jsx)(S.a,{variant:"contained",sx:{margin:"20px",left:"85%"},onClick:function(){return function(){for(var e=0;e<j.length;e++)j[e].full_name===n&&p(j.splice(e,1));J(n)}()},children:"Delete"})})}),Object(P.jsx)(re,{selectedRepo:n})]})]})]})},ce=n(95),ie=n(196),se=Object(ce.a)({palette:{primary:{main:"#000000"}}});var oe=function(){return Object(P.jsx)(ie.a,{theme:se,children:Object(P.jsx)(ae,{})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(oe,{})}),document.getElementById("root")),ue()}},[[144,1,2]]]);
//# sourceMappingURL=main.0f62df62.chunk.js.map