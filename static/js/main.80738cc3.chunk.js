(this["webpackJsonptodo-lista"]=this["webpackJsonptodo-lista"]||[]).push([[0],{25:function(t,e,a){},26:function(t,e,a){"use strict";a.r(e);var n=a(2),i=a(13),c=a.n(i),s=a(12),o=a(9),r=a(14),l=a(6),u=a(10),d=a(11),j=a(1);function O(t){var e=t.tehtava,a=t.dispatch;return Object(j.jsxs)("div",{className:"tehtava",children:[Object(j.jsx)("h4",{style:{color:e.valmis?"green":"red"},children:e.nimi}),Object(j.jsxs)("div",{className:"buttonit",children:[Object(j.jsx)("button",{onClick:function(){a({tyyppi:b.VALMIS,payload:{id:e.id}})},children:Object(j.jsx)(u.a,{icon:d.a})}),Object(j.jsx)("button",{onClick:function(){a({tyyppi:b.POISTO,payload:{id:e.id}})},children:Object(j.jsx)(u.a,{icon:d.b})})]})]})}a(25);var b=Object(l.a)({LISAYS:"lisays",POISTO:"poisto",VALMIS:"valmis"},"POISTO","poisto");function p(){function t(t){return{id:Date.now(),nimi:t,valmis:!1}}var e=Object(n.useReducer)((function(e,a){switch(a.tyyppi){case b.LISAYS:return[].concat(Object(r.a)(e),[t(a.payload.nimi)]);case b.POISTO:return e.filter((function(t){return t.id!==a.payload.id}));case b.VALMIS:return e.map((function(t){return t.id===a.payload.id?Object(o.a)(Object(o.a)({},t),{},{valmis:!t.valmis}):t}));default:return e}}),null==localStorage.getItem("tehtavat")?[]:(console.log("t\xe4ys"),JSON.parse(localStorage.getItem("tehtavat")))),a=Object(s.a)(e,2),i=a[0],c=a[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){localStorage.setItem("tehtavat",JSON.stringify(i))}),[i]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"lisays",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d.length>=1&&(c({tyyppi:b.LISAYS,payload:{nimi:d}}),p(""))},children:[Object(j.jsx)("input",{placeholder:"Sy\xf6t\xe4 teht\xe4v\xe4",type:"text",value:d,onChange:function(t){return p(t.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"L\xe4het\xe4"})]})}),i.map((function(t){return Object(j.jsx)(O,{tehtava:t,dispatch:c},t.id)}))]})}c.a.render(Object(j.jsx)(p,{}),document.getElementById("sovellus"))}},[[26,1,2]]]);
//# sourceMappingURL=main.80738cc3.chunk.js.map