(this["webpackJsonpclean-teach"]=this["webpackJsonpclean-teach"]||[]).push([[0],{34:function(n,e,t){},56:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t.n(r),o=t(26),a=t.n(o),i=(t(34),t(6)),d=t(8),s=t(5),u=t(7),l=t.n(u),j=t(9);function b(n,e){var t="".concat(n,"_SUCCESS"),r="".concat(n,"_ERROR");return function(){var c=Object(j.a)(l.a.mark((function c(o){var a,i,d,s,u=arguments;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:for(o({type:n}),c.prev=1,a=u.length,i=new Array(a>1?a-1:0),d=1;d<a;d++)i[d-1]=u[d];return c.next=5,e.apply(void 0,i);case 5:s=c.sent,o({type:t,data:s}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),o({type:r,error:c.t0});case 12:case"end":return c.stop()}}),c,null,[[1,9]])})));return function(n){return c.apply(this,arguments)}}()}var x={loading:!1,data:null,error:null},p={loading:!0,data:null,error:null};function f(n,e){var t="".concat(n,"_SUCCESS"),r="".concat(n,"_ERROR");return function(c,o){switch(o.type){case n:return Object(s.a)(Object(s.a)({},c),{},Object(d.a)({},e,p));case t:return Object(s.a)(Object(s.a)({},c),{},Object(d.a)({},e,{loading:!1,data:o.data,error:null}));case r:return Object(s.a)(Object(s.a)({},c),{},Object(d.a)({},e,{loading:!1,data:null,error:o.error}));default:throw c}}}var O=t(14),h=t.n(O);function v(){return(v=Object(j.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.get("https://jsonplaceholder.typicode.com/users");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(){return(g=Object(j.a)(l.a.mark((function n(e){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.get("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var E=t(0),m={users:x,user:x},y=f("GET_USERS","users"),w=f("GET_USER","user");function S(n,e){switch(e.type){case"GET_USERS":case"GET_USERS_SUCCESS":case"GET_USERS_ERROR":return y(n,e);case"GET_USER":case"GET_USER_SUCCESS":case"GET_USER_ERROR":return w(n,e);default:throw new Error("Unhandled action type: ".concat(e.type))}}var C=Object(r.createContext)(null),R=Object(r.createContext)(null);function k(n){var e=n.children,t=Object(r.useReducer)(S,m),c=Object(i.a)(t,2),o=c[0],a=c[1];return Object(E.jsx)(C.Provider,{value:o,children:Object(E.jsx)(R.Provider,{value:a,children:e})})}function U(){var n=Object(r.useContext)(C);if(!n)throw new Error("Cannot find UsersProvider");return n}function _(){var n=Object(r.useContext)(R);if(!n)throw new Error("Cannot find UsersProvider");return n}var T=b("GET_USERS",(function(){return v.apply(this,arguments)})),G=b("GET_USER",(function(n){return g.apply(this,arguments)}));var z=function(n){var e=n.id,t=U(),c=_();Object(r.useEffect)((function(){G(c,e)}),[c,e]);var o=t.user,a=o.loading,i=o.data,d=o.error;return a?Object(E.jsx)("div",{children:"\ub85c\ub529\uc911.."}):d?Object(E.jsx)("div",{children:"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4"}):i?Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{children:[Object(E.jsx)("h2",{children:i.name}),Object(E.jsxs)("p",{children:[Object(E.jsx)("b",{children:"Email : "}),i.email]})]})}):null};var P=function(){var n=Object(r.useState)(null),e=Object(i.a)(n,2),t=e[0],c=e[1],o=U(),a=_(),d=o.users,s=d.loading,u=d.data,l=d.error,j=function(){T(a)};return s?Object(E.jsx)("div",{children:"\ub85c\ub529\uc911.."}):l?Object(E.jsx)("div",{children:"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4"}):u?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("ul",{children:u.map((function(n){return Object(E.jsxs)("li",{onClick:function(){return c(n.id)},style:{cursor:"pointer"},children:[n.username," (",n.name,")"]},n.id)}))}),Object(E.jsx)("button",{onClick:j,children:"\ub2e4\uc2dc \ubd88\ub7ec\uc624\uae30"}),t&&Object(E.jsx)(z,{id:t})]}):Object(E.jsx)("button",{onClick:j,children:"\ubd88\ub7ec\uc624\uae30"})},F=t(2),D=t(3),L=[{id:1,text:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30",done:!0},{id:2,text:"\ucef4\ud3ec\ub10c\ud2b8 \uc2a4\ud0c0\uc77c\ub9c1\ud558\uae30",done:!0},{id:3,text:"Context \ub9cc\ub4e4\uae30",done:!0},{id:4,text:"\uae30\ub2a5 \uad6c\ud604\ud558\uae30",done:!1}];function A(n,e){switch(e.type){case"CREATE":return n.concat(e.todo);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(s.a)(Object(s.a)({},n),{},{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:throw new Error("Unhandled action type: ".concat(e.type))}}var M=Object(r.createContext)(),J=Object(r.createContext)(),K=Object(r.createContext)();function N(n){var e=n.children,t=Object(r.useReducer)(A,L),c=Object(i.a)(t,2),o=c[0],a=c[1],d=Object(r.useRef)(5);return Object(E.jsx)(M.Provider,{value:o,children:Object(E.jsx)(J.Provider,{value:a,children:Object(E.jsx)(K.Provider,{value:d,children:e})})})}function V(){var n=Object(r.useContext)(M);if(!n)throw new Error("Cannot find TodoProvider");return n}function B(){var n=Object(r.useContext)(J);if(!n)throw new Error("Cannot find TodoProvider");return n}var I,q,H,Q,W,X=t(10),Y=D.c.button(I||(I=Object(F.a)(["\n    background-color: #38d9a9;\n    &:hover {\n        background-color: #63e6be;\n    }\n    &:active {\n        background-color: #20c997;\n    }\n    z-index: 5;\n    cursor: pointer;\n    width: 80px;\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 60px;\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 50%);\n    color: white;\n    border-radius: 50%;\n    border: none;\n    transition: .125s all ease-in;\n    ","\n"])),(function(n){return n.open&&Object(D.b)(q||(q=Object(F.a)(["\n        background-color: #ff6b6b;\n        &:hover {\n            background-color: #ff8787;\n        }\n        &:active {\n            background-color: #fa5252;\n        }\n        transform: translate(-50%, 50%) rotate(45deg);\n    "])))})),Z=D.c.div(H||(H=Object(F.a)(["\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n"]))),$=D.c.form(Q||(Q=Object(F.a)(["\n    background-color: #f8f9fa;\n    padding: 32px 32px 72px;\n    border-bottom-left-radius: 16px;\n    border-bottom-right-radius: 16px;\n    border-top: 1px solid #e9ecef;\n"]))),nn=D.c.input(W||(W=Object(F.a)(["\n    padding: 12px;\n    border-radius: 4px;\n    border: 1px solid #dee2e6;\n    width: 100%;\n    outline: none;\n    font-size: 18px;\n    box-sizing: border-box;\n"])));var en,tn=function(){var n=Object(r.useState)(!1),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(""),a=Object(i.a)(o,2),d=a[0],s=a[1],u=B(),l=function(){var n=Object(r.useContext)(K);if(!n)throw new Error("Cannot find TodoProvider");return n}();return Object(E.jsxs)(E.Fragment,{children:[t&&Object(E.jsx)(Z,{children:Object(E.jsx)($,{onSubmit:function(n){n.preventDefault(),u({type:"CREATE",todo:{id:l.current,text:d,done:!1}}),s(""),c(!1),l.current+=1},children:Object(E.jsx)(nn,{autoFocus:!0,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter \ub97c \ub204\ub974\uc138\uc694",onChange:function(n){return s(n.target.value)},value:d})})}),Object(E.jsx)(Y,{onClick:function(){return c(!t)},open:t,children:Object(E.jsx)(X.a,{})})]})},rn=D.c.div(en||(en=Object(F.a)(["\n    padding: 48px 32px 35px;\n    border-bottom: 1px solid #e9ecef;\n    h1 {\n        margin: 0;\n        font-size: 36px;\n        color: #343a40;\n    }\n    .day {\n        margin-top: 4px;\n        color: #868e96;\n        font-size: 21px;\n    }\n    .tasks-left {\n        color: #20c997;\n        font-size: 18px;\n        margin-top: 40px;\n        font-weight: bold;\n    }\n"])));var cn,on,an,dn,sn,un,ln=function(){var n=V().filter((function(n){return!n.done})),e=new Date,t=e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),r=e.toLocaleDateString("ko-KR",{weekday:"long"});return Object(E.jsxs)(rn,{children:[Object(E.jsx)("h1",{children:t}),Object(E.jsx)("div",{className:"day",children:r}),Object(E.jsxs)("div",{className:"tasks-left",children:["\ud560 \uc77c ",n.length,"\uac1c \ub0a8\uc74c"]})]})},jn=D.c.div(cn||(cn=Object(F.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #dee2e6;\n    font-size: 24px;\n    cursor: pointer;\n    &:hover {\n        color: #ff6b6b;\n    }\n    display: none;\n"]))),bn=D.c.div(on||(on=Object(F.a)(["\n    display: flex;\n    align-items: center;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    &:hover {\n        "," {\n            display: initial;\n        }\n    }\n"])),jn),xn=D.c.div(an||(an=Object(F.a)(["\n    width: 32px;\n    height: 32px;\n    border-radius: 16px;\n    border: 1px solid #ced4da;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 20px;\n    cursor: pointer;\n    ","\n"])),(function(n){return n.done&&Object(D.b)(dn||(dn=Object(F.a)(["\n            border: 1px solid #38d9a9;\n            color: #38d9a9;\n        "])))})),pn=D.c.div(sn||(sn=Object(F.a)(["\n    flex: 1;\n    font-size: 21px;\n    color: #495057;\n    ","\n"])),(function(n){return n.done&&Object(D.b)(un||(un=Object(F.a)(["\n            color: #ced4da;\n        "])))}));function fn(n){var e=n.id,t=n.done,r=n.text,c=B();return Object(E.jsxs)(bn,{children:[Object(E.jsx)(xn,{done:t,onClick:function(){return c({type:"TOGGLE",id:e})},children:t&&Object(E.jsx)(X.c,{})}),Object(E.jsx)(pn,{done:t,children:r}),Object(E.jsx)(jn,{onClick:function(){return c({type:"REMOVE",id:e})},children:Object(E.jsx)(X.b,{})})]})}var On,hn=c.a.memo(fn),vn=D.c.div(On||(On=Object(F.a)(["\n    flex: 1;\n    padding: 20px 32px 48px;\n    overflow-y: auto;\n"])));var gn,En=function(){var n=V();return Object(E.jsx)(vn,{children:n.map((function(n){return Object(E.jsx)(hn,{id:n.id,text:n.text,done:n.done},n.id)}))})},mn=D.c.div(gn||(gn=Object(F.a)(["\n    width: 512px;\n    height: 768px;\n    position: relative;\n    background-color: white;\n    border-radius: 16px;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, .04);\n    margin: 96px auto 32px;\n    display: flex;\n    flex-direction: column;\n"])));var yn,wn=function(n){var e=n.children;return Object(E.jsx)(mn,{children:e})},Sn=Object(D.a)(yn||(yn=Object(F.a)(["\n    body {\n        background-color: #e9ecef;\n    }\n"])));var Cn=function(){return Object(E.jsxs)(N,{children:[Object(E.jsx)(Sn,{}),Object(E.jsxs)(wn,{children:[Object(E.jsx)(ln,{}),Object(E.jsx)(En,{}),Object(E.jsx)(tn,{})]})]})};var Rn=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(k,{children:Object(E.jsx)(P,{})}),Object(E.jsx)(Cn,{})]})};a.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(Rn,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.824edbf9.chunk.js.map