(this["webpackJsonppart2.2"]=this["webpackJsonppart2.2"]||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),u=t(4),l=t(2),i=function(e){var n=e.findName,t=e.handleFindNo;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.newName,t=e.newNo,a=e.handleName,o=e.handleNo,c=e.submitName;return r.a.createElement("form",{onSubmit:c},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a}),"number: ",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=function(e){var n=e.personShow,t=e.removePerson;return r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))})))},s=t(3),f=t.n(s),b="/api/persons",h=function(e){return f.a.post(b,e).then((function(e){return e.data})).catch((function(e){console.log("inside add ".concat(e))}))},g=function(e,n){return f.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},E=function(){return f.a.get(b).then((function(e){return e.data}))},p=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},w=function(e){var n=e.message;return console.log("inside error noti ".concat(n)),null===n?(console.log("inside error noti where msg is null ".concat(n)),null):(console.log("inside error noti where msg is not null ".concat(n)),r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n))},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),f=s[0],b=s[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),N=O[0],S=O[1],y=Object(a.useState)(""),k=Object(l.a)(y,2),C=k[0],T=k[1],B=Object(a.useState)(null),P=Object(l.a)(B,2),z=P[0],F=P[1],I=Object(a.useState)(null),J=Object(l.a)(I,2),L=J[0],R=J[1],x=t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(a.useEffect)((function(){E().then((function(e){o(e)}))}),[]),Object(a.useEffect)((function(){var e=setTimeout((function(){F(null)}),3e3);return function(){return clearTimeout(e)}}),[z]),Object(a.useEffect)((function(){var e=setTimeout((function(){R(null)}),3e3);return function(){return clearTimeout(e)}}),[L]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:z}),r.a.createElement(w,{message:L}),r.a.createElement(i,{findName:C,handleFindNo:function(e){T(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{newName:f,newNo:N,handleName:function(e){b(e.target.value)},handleNo:function(e){S(e.target.value)},submitName:function(e){e.preventDefault();var n={name:f,number:N};console.log(n);var a=t.find((function(e){return e.name===f}));if(a){var r=Object(u.a)(Object(u.a)({},a),{},{number:n.number});window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))&&(g(a.id,r).then((function(e){o(t.map((function(n){return n.id!==e.id?n:e})))})),b(""),S(""))}else h(n).then((function(e){F("Added ".concat(e.name)),o(t.concat(e)),b(""),S("")}))}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{personShow:x,removePerson:function(e){v(e).then((function(n){console.log(n),o(t.filter((function(n){return n.id!==e})))})).catch((function(){return R("Information of ".concat(t.find((function(n){return n.id===e})).name," has already been removed from the server"))}))}}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c75259f1.chunk.js.map