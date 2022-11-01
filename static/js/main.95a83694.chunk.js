(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(5),r=c(3),o=c.n(r),l=c(1),d=c.n(l),i=(c(13),c(14),c(4)),j=c.n(i),u=c(2),b=c(0),h=d.a.createContext({todos:[],setTodos:function(){},selectedUser:0,setSelectedUser:function(){},selectedTodoId:0,setSelectedTodoId:function(){},userInfo:null,setUserInfo:function(){},sortType:"all",setSortType:function(){},query:"",setQuery:function(){},appliedQuery:"",setAppliedQuery:function(){}}),O=function(e){var t=e.children,c=Object(l.useState)([]),s=Object(u.a)(c,2),a=s[0],n=s[1],r=Object(l.useState)(0),o=Object(u.a)(r,2),d=o[0],i=o[1],j=Object(l.useState)(0),O=Object(u.a)(j,2),m=O[0],x=O[1],f=Object(l.useState)(null),p=Object(u.a)(f,2),v=p[0],y=p[1],N=Object(l.useState)("all"),T=Object(u.a)(N,2),g=T[0],S=T[1],I=Object(l.useState)(""),k=Object(u.a)(I,2),C=k[0],w=k[1],U=Object(l.useState)(""),Q=Object(u.a)(U,2),A=Q[0],_=Q[1],E=Object(l.useMemo)((function(){return{todos:a,setTodos:n,selectedUser:d,setSelectedUser:i,selectedTodoId:m,setSelectedTodoId:x,userInfo:v,setUserInfo:y,sortType:g,setSortType:S,query:C,setQuery:w,appliedQuery:A,setAppliedQuery:_}}),[a,d,v,m,g,C,A]);return Object(b.jsx)(h.Provider,{value:E,children:t})},m=function(e){var t=e.todo,c=t.id,s=t.title,a=t.completed,n=t.userId,r=Object(l.useContext)(h),o=r.selectedTodoId,d=r.setSelectedUser,i=r.setSelectedTodoId,u=o===c;return Object(b.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":u}),children:[Object(b.jsx)("td",{className:"is-vcentered",children:c}),Object(b.jsx)("td",{className:"is-vcentered",children:a&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:j()({"has-text-danger":!a,"has-text-success":a}),children:s})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){d(n),i(c)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:j()("far",{"fa-eye":!u,"fa-eye-slash":u})})})})})]},c)},x=function(){var e,t=Object(l.useContext)(h),c=t.todos,s=t.sortType,a=t.appliedQuery,n=function(e){return c.filter((function(t){return t.completed===e}))},r=function(e){switch(s){case"all":default:return e;case"active":return n(!1);case"completed":return n(!0)}}(c),o=(e=a,r.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())})));return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:o.map((function(e){return Object(b.jsx)(d.a.Fragment,{children:Object(b.jsx)(m,{todo:e})},e.id)}))})]})};var f=function(){var e=Object(l.useContext)(h),t=e.setSortType,c=e.query,s=e.setQuery,a=e.setAppliedQuery,n=Object(l.useCallback)(function(e,t){var c;return function(s){clearTimeout(c),c=setTimeout(e,t,s)}}(a,1e3),[]);return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var c=e.target.value;t(c)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){s(e.target.value),n(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){s(""),a("")}})})]})]})};function p(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var v=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})},y=function(){var e=Object(l.useContext)(h),t=e.todos,c=e.selectedUser,s=e.selectedTodoId,a=e.setUserInfo,r=e.userInfo,d=e.setSelectedUser,i=e.setSelectedTodoId,u=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/users/".concat(c));case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){u()}),[]);var O=t.find((function(e){return e.id===s}));return Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),r?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){a(null),d(0),i(0)}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:null===O||void 0===O?void 0:O.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(b.jsx)("strong",{className:j()({"has-text-danger":!(null!==O&&void 0!==O&&O.completed),"has-text-success":null===O||void 0===O?void 0:O.completed}),children:null!==O&&void 0!==O&&O.completed?"Done":"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(r.email),children:r.name})]})]})]}):Object(b.jsx)(v,{})]})},N=function(){var e=Object(l.useContext)(h),t=e.todos,c=e.setTodos,s=e.selectedTodoId,a=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/todos");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){a()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(f,{})}),Object(b.jsx)("div",{className:"block",children:0===t.length?Object(b.jsx)(v,{}):Object(b.jsx)(x,{})})]})})}),s&&Object(b.jsx)(y,{})]})};a.a.render(Object(b.jsx)(O,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.95a83694.chunk.js.map