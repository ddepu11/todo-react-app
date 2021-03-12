(this["webpackJsonpnew-react"]=this["webpackJsonpnew-react"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(8),l=a.n(n),o=a(10),i=a(7),r=a.n(i),d=a(2),u=a(9),j=a(3),b=(a(16),a(0)),m=function(e){var t=e.todos,a=e.handleComplete,c=e.handleRemove,s=e.handleEdit;return Object(b.jsx)("div",{className:"todos",children:t.map((function(e,t){var n=e.title,l=e.id,o=e.hasCompleted;return Object(b.jsxs)("div",{className:"todo flex",children:[o?Object(b.jsx)("span",{className:"line"}):"",Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:t+1}),"\xa0\xa0",n]}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("i",{onClick:s,id:l,className:"fas fa-pencil-alt fa-1x edit"}),Object(b.jsx)("i",{onClick:a,id:l,className:"fas fa-check fa-1x completed"}),Object(b.jsx)("i",{onClick:c,id:l,className:"fas fa-times fa-1x delete"})]})]},t)}))})},h=function(e){var t=e.handleSubmit,a=e.handleInput,c=e.value;return Object(b.jsx)("main",{children:Object(b.jsx)("form",{onSubmit:t,children:Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("input",{value:c,type:"text",onChange:a,placeholder:"What do you want to do?"}),Object(b.jsx)("input",{type:"submit"})]})})})},f=function(e){var t=e.alert,a=e.setAlert,s=t.msg,n=t.styleClass;return Object(c.useEffect)((function(){var e=setTimeout((function(){return a({show:!1,msg:"",styleClass:""})}),3e3);return function(){return clearTimeout(e)}}),[t]),Object(b.jsx)("div",{className:n?"alert ".concat(n):"alert",children:Object(b.jsx)("h6",{children:s})})},O=function(){var e=Object(c.useState)({id:0,title:"",hasCompleted:!1}),t=Object(j.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)({show:!1,msg:"",styleClass:""}),l=Object(j.a)(n,2),i=l[0],O=l[1],p=Object(c.useState)(null!==localStorage.getItem("todos")&&void 0!==localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]),v=Object(j.a)(p,2),x=v[0],g=v[1],C=Object(c.useState)(!1),S=Object(j.a)(C,2),y=S[0],N=S[1],w=Object(c.useState)(null),I=Object(j.a)(w,2),k=I[0],E=I[1];Object(c.useEffect)((function(){return localStorage.setItem("todos",JSON.stringify(x))}),[x]);var J=function(e,t){O({show:!0,msg:e,styleClass:t})},A=function(){var e=Object(u.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.id,g((function(e){return e.map((function(e){return e.id===+a?(J(e.hasCompleted?"Uncompleted!!":"Completed!!",e.hasCompleted?"error":"success"),Object(d.a)(Object(d.a)({},e),{},{hasCompleted:!e.hasCompleted})):e}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h4",{children:"Todo List Using React "})}),Object(b.jsx)(h,{handleSubmit:function(e){e.preventDefault(),""!==a.title&&null!==a.title&&y?(g(x.map((function(e){return e.id===k?(s(Object(d.a)(Object(d.a)({},a),{},{title:""})),Object(d.a)(Object(d.a)({},e),{},{title:a.title})):e}))),s({id:0,title:"",hasCompleted:!1}),J("Successfully Updated a todo !!","success"),N(!1),E(null)):""!==a.title&&null!==a.title?(g([].concat(Object(o.a)(x),[Object(d.a)(Object(d.a)({},a),{},{id:Math.floor(100*Math.random())})])),J("Successfully Added a todo !!","success"),e.target[0].value="",s({id:0,title:"",hasCompleted:!1})):J("Input value cant't be empty!!","error")},value:a.title,handleInput:function(e){var t=e.target.value;s({hasCompleted:!1,title:t})}}),i.show?Object(b.jsx)(f,{setAlert:O,alert:i}):"",Object(b.jsx)(m,{todos:x,handleEdit:function(e){var t=e.target.id;N(!0),E(+t),x.map((function(e){return e.id===+t?a.title=e.title:""}))},handleComplete:A,handleRemove:function(e){var t=e.target.id;g(x.filter((function(e){return e.id!==+t}))),J("Successfully Deleted a todo !!","success")}})]})};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.290fb360.chunk.js.map