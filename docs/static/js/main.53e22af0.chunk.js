(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(8),i=n.n(c),s=(n(17),n(5)),u=n(2),o=n(9),j=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(u.a)(n,2),i=c[0],o=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("Submit hecho"),i.trim().length>2&&(t((function(e){return[i].concat(Object(s.a)(e))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})})};j.prototype={setCategories:n.n(o).a.func.isRequired};var d=n(11),l=n(7),p=n.n(l),b=n(10),f=function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=Mr0qE6qCU2n2utYYG3V2SXDHJBYFIYst"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})},h=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",t," "]}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(a.jsx)(m,Object(d.a)({},e),e.id)}))})]})},O=function(){var e=Object(r.useState)(["Dragon Ball"]),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(j,{setCategories:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(h,{category:e},e)}))})]})};i.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.53e22af0.chunk.js.map