(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],{19:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(48),s=n.n(r),a=(n(56),n(6)),l=(n(57),n(5)),d=[{q:"Name",a:"",identity:"Name*"},{q:"Email",a:"",identity:"Email*"},{q:"Mobile",a:"",identity:"Mobile*"},{q:"LinkedIn",a:"",identity:"LinkedIn*"},{q:"Github",a:"",identity:"Github*"},{q:"ex: Java 4, JS 3",a:"",identity:"ex: Java 4, JS 3*"},{q:"School/College/University",a:"",identity:"School/College/University*"},{q:"Degree",a:"",identity:"Degree*"},{q:"Discipline",a:"",identity:"Discipline*"},{q:"Marks/Percentage/CGPA",a:"",identity:"Marks/Percentage/CGPA*"},{q:"Education From",a:"",identity:"Education From*"},{q:"Education To",a:"",identity:"Education To*"},{q:"Organization",a:"",identity:"Organization*"},{q:"Position",a:"",identity:"Position*"},{q:"Present Job",a:"",identity:"Present Job"},{q:"Experience From",a:"",identity:"Experience From*"},{q:"Experience To",a:"",identity:"Experience To*"},{q:"Experience Description",a:"",identity:"Experience Description*"},{q:"Title",a:"",identity:"Title*"},{q:"Link",a:"",identity:"Link*"},{q:"Project Description",a:"",identity:"Project Description*"},{q:"Hobbies Description",a:"",identity:"Hobbies Description*"}],j=n(0),o=function(e){var t=e.placeholder,n=e.handleChange,c=Object(i.useState)(!1),r=Object(a.a)(c,2),s=r[0],l=r[1];return Object(j.jsx)("div",{className:"input-element",children:Object(j.jsxs)("fieldset",{children:[s&&{}&&Object(j.jsx)("legend",{children:t}),Object(j.jsx)("input",{onChange:n,type:"text",id:t,placeholder:t,onClick:function(){return l(!0)}})]})})},u=function(e){var t=e.setPage,n=function(e){d.map((function(t){if(e.target.id===t.identity)return t.a=e.target.value}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"input-fields-container",children:[Object(j.jsx)(o,{placeholder:"Name*",handleChange:n}),Object(j.jsx)(o,{placeholder:"Email*",handleChange:n}),Object(j.jsx)(o,{placeholder:"Mobile*",handleChange:n}),Object(j.jsx)(o,{placeholder:"LinkedIn*",handleChange:n}),Object(j.jsx)(o,{placeholder:"Github*",handleChange:n}),Object(j.jsx)(o,{placeholder:"ex: Java 4, JS 3*",handleChange:n})]}),Object(j.jsx)(l.b,{to:"/resumeBuilder/education",children:Object(j.jsx)("button",{id:"next",onClick:function(){return t((function(e){return e+1}))},children:"Next section"})})]})},h=function(e){var t=e.placeholder,n=e.handleChange,c=Object(i.useState)(!1),r=Object(a.a)(c,2),s=r[0],l=r[1];return Object(j.jsx)("div",{className:"input-element",children:Object(j.jsxs)("fieldset",{children:[s&&{}&&Object(j.jsx)("legend",{children:t}),Object(j.jsx)("input",{onChange:n,id:t,type:"text",placeholder:t,onClick:function(){return l(!0)}})]})})},b=function(e){var t=e.placeholder,n=e.handleChange;return Object(j.jsx)("div",{className:"input-element",children:Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:t}),Object(j.jsx)("input",{onChange:n,id:t,type:"date",placeholder:t})]})})},x=function(e){var t=e.setPage,n=function(e){d.map((function(t){if(e.target.id===t.identity)return t.a=e.target.value}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"input-fields-container",children:[Object(j.jsx)(h,{handleChange:n,placeholder:"School/College/University*"}),Object(j.jsx)(h,{handleChange:n,placeholder:"Degree*"}),Object(j.jsx)(h,{handleChange:n,placeholder:"Discipline*"}),Object(j.jsx)(h,{handleChange:n,placeholder:"Marks/Percentage/CGPA*"}),Object(j.jsx)(b,{handleChange:n,placeholder:"Education From*"}),Object(j.jsx)(b,{handleChange:n,placeholder:"Education To*"})]}),Object(j.jsx)(l.b,{to:"/resumeBuilder/",children:Object(j.jsx)("button",{id:"next",onClick:function(){return t((function(e){return e-1}))},children:"Prev section"})}),Object(j.jsx)(l.b,{to:"/resumeBuilder/experience",children:Object(j.jsx)("button",{id:"next",onClick:function(){return t((function(e){return e+1}))},children:"Next section"})})]})},O=(n(19),function(e){var t=e.placeholder,n=e.handleChange,c=Object(i.useState)(!1),r=Object(a.a)(c,2),s=r[0],l=r[1];return Object(j.jsx)("div",{className:"input-element",children:Object(j.jsxs)("fieldset",{children:[s&&{}&&Object(j.jsx)("legend",{children:t}),Object(j.jsx)("input",{onChange:n,id:t,type:"text",placeholder:t,onClick:function(){return l(!0)}})]})})}),p=function(e){var t=e.placeholder,n=e.handleChange;return Object(j.jsx)("div",{className:"input-element",children:Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:t}),Object(j.jsx)("input",{onChange:n,id:t,type:"date",placeholder:t})]})})},f=function(e){var t=e.placeholder,n=e.handleChange,c=Object(i.useState)(!1),r=Object(a.a)(c,2),s=r[0],l=r[1];return Object(j.jsx)("div",{className:"input-element",children:Object(j.jsxs)("fieldset",{children:[s&&{}&&Object(j.jsx)("legend",{children:t}),Object(j.jsx)("textarea",{type:"text",rows:"5",columns:"20",placeholder:t,onChange:n,id:t,onClick:function(){return l(!0)}})]})})},m=function(e){var t=e.placeholder,n=e.handleChange,c=Object(i.useState)(!1),r=Object(a.a)(c,2),s=r[0],l=r[1];return Object(j.jsx)("div",{className:"input-element",children:Object(j.jsxs)("fieldset",{children:[s&&{}&&Object(j.jsx)("legend",{children:t}),Object(j.jsxs)("div",{style:{backgroundColor:"white",color:"black",minWidth:"400px",textAlign:"left",cursor:"pointer"},children:[Object(j.jsx)("input",{onChange:n,id:t,type:"checkbox",style:{margin:"5px",padding:"0",height:"20px",minWidth:"10px"}}),Object(j.jsx)("span",{onClick:function(){return l(!0)},children:t})]})]})})},g=function(e){var t=e.setPage,n=function(e){d.map((function(t){if(e.target.id===t.identity)return t.a=e.target.value}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"input-fields-container",children:[Object(j.jsx)(O,{handleChange:n,placeholder:"Organization*"}),Object(j.jsx)(O,{handleChange:n,placeholder:"Position*"}),Object(j.jsx)(m,{handleChange:n,placeholder:"Present Job"}),Object(j.jsx)(p,{handleChange:n,placeholder:"Experience From*"}),Object(j.jsx)(p,{handleChange:n,placeholder:"Experience To*"}),Object(j.jsx)(f,{handleChange:n,placeholder:"Experience Description*"})]}),Object(j.jsx)(l.b,{to:"/resumeBuilder/education",children:Object(j.jsx)("button",{id:"next",onClick:function(){return t((function(e){return e-1}))},children:"Prev section"})}),Object(j.jsx)(l.b,{to:"/resumeBuilder/projects",children:Object(j.jsx)("button",{id:"next",onClick:function(){return t((function(e){return e+1}))},children:"Next section"})})]})},v=function(e){var t=e.placeholder,n=e.handleChange,c=Object(i.useState)(!1),r=Object(a.a)(c,2),s=r[0],l=r[1];return Object(j.jsx)("div",{className:"input-element",children:Object(j.jsxs)("fieldset",{children:[s&&{}&&Object(j.jsx)("legend",{children:t}),Object(j.jsx)("input",{onChange:n,id:t,type:"text",placeholder:t,onClick:function(){return l(!0)}})]})})},C=function(e){var t=e.placeholder,n=e.handleChange,c=Object(i.useState)(!1),r=Object(a.a)(c,2),s=r[0],l=r[1];return Object(j.jsx)("div",{className:"input-element",children:Object(j.jsxs)("fieldset",{children:[s&&{}&&Object(j.jsx)("legend",{children:t}),Object(j.jsx)("textarea",{type:"text",rows:"5",columns:"20",placeholder:t,onChange:n,id:t,onClick:function(){return l(!0)}})]})})},y=function(e){var t=e.setPage,n=function(e){d.map((function(t){if(e.target.id===t.identity)return t.a=e.target.value}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"input-fields-container",children:[Object(j.jsx)(v,{handleChange:n,placeholder:"Title*"}),Object(j.jsx)(v,{handleChange:n,placeholder:"Link*"}),Object(j.jsx)(C,{handleChange:n,placeholder:"Project Description*"})]}),Object(j.jsx)(l.b,{to:"/resumeBuilder/experience",children:Object(j.jsx)("button",{id:"next",onClick:function(){return t((function(e){return e-1}))},children:"Prev section"})}),Object(j.jsx)(l.b,{to:"/resumeBuilder/hobbies",children:Object(j.jsx)("button",{id:"next",onClick:function(){return t((function(e){return e+1}))},children:"Next section"})})]})},k=function(e){var t=e.placeholder,n=e.handleChange,c=Object(i.useState)(!1),r=Object(a.a)(c,2),s=r[0],l=r[1];return Object(j.jsx)("div",{className:"input-element",children:Object(j.jsxs)("fieldset",{children:[s&&{}&&Object(j.jsx)("legend",{children:t}),Object(j.jsx)("textarea",{type:"text",rows:"5",columns:"20",placeholder:t,onChange:n,id:t,onClick:function(){return l(!0)}})]})})},P=function(e){var t=e.setPage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{id:"input-fields-container",children:Object(j.jsx)(k,{handleChange:function(e){d.map((function(t){if(e.target.id===t.identity)return t.a=e.target.value}))},placeholder:"Hobbies Description*"})}),Object(j.jsx)(l.b,{to:"/resumeBuilder/projects",children:Object(j.jsx)("button",{id:"next",onClick:function(){return t((function(e){return e-1}))},children:"Prev section"})}),Object(j.jsx)(l.b,{to:"/resumeBuilder/success",children:Object(j.jsx)("button",{id:"next",onClick:function(){return t((function(e){return e+1}))},children:"Next section"})})]})},q=n(51),N=n.n(q),E=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"personal-details",children:[Object(j.jsx)("h3",{children:d.filter((function(e){return"Name"==e.q}))[0].a}),Object(j.jsxs)("div",{children:["Email: ",d.filter((function(e){return"Email"==e.q}))[0].a]}),Object(j.jsxs)("div",{children:["Contact no: ",d.filter((function(e){return"Mobile"==e.q}))[0].a]}),Object(j.jsxs)("div",{className:"external-links",children:[Object(j.jsx)("a",{href:d.filter((function(e){return"LinkedIn"==e.q}))[0].a,target:"_blank",children:"LinkedIn"}),Object(j.jsx)("a",{href:d.filter((function(e){return"Github"==e.q}))[0].a,target:"_blank",children:"Github"})]})]})})},F=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"education-details",children:[Object(j.jsx)("div",{className:"section-heading",children:"Education"}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Year"}),Object(j.jsx)("td",{children:"Degree/Examination"}),Object(j.jsx)("td",{children:"Institution/Board"}),Object(j.jsx)("td",{children:"CGPA/Percentage"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:d.filter((function(e){return"Education To"==e.q}))[0].a}),Object(j.jsxs)("td",{children:[d.filter((function(e){return"Degree"==e.q}))[0].a," ( ",d.filter((function(e){return"Discipline"==e.q}))[0].a," )"]}),Object(j.jsx)("td",{children:d.filter((function(e){return"School/College/University"==e.q}))[0].a}),Object(j.jsx)("td",{children:d.filter((function(e){return"Marks/Percentage/CGPA"==e.q}))[0].a})]})})]})]})})},B=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"projects-details",children:[Object(j.jsx)("div",{className:"section-heading",children:"Projects"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h5",{children:[d.filter((function(e){return"Title"==e.q}))[0].a," | "]}),Object(j.jsx)("a",{href:d.filter((function(e){return"Link"==e.q}))[0].a,target:"_blank",children:"link"}),Object(j.jsx)("div",{className:"project-description-container",children:d.filter((function(e){return"Project Description"==e.q}))[0].a.split(".").map((function(e){if(""!=e.trim())return Object(j.jsx)("li",{children:e})}))})]})]})})},S=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"skills-details",children:[Object(j.jsx)("div",{className:"section-heading",children:"Skills"}),Object(j.jsx)("div",{className:"skills-container",children:Object(j.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, auto)"},children:d.filter((function(e){return"ex: Java 4, JS 3"==e.q}))[0].a.split(",").map((function(e){var t=e.trim().split(" "),n=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)("span",{children:[t[0]," "]}),w(n)]})})}))})})]})})},D=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"experience-details",children:[Object(j.jsx)("div",{className:"section-heading",children:"Experience"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h5",{children:[d.filter((function(e){return"Organization"==e.q}))[0].a," | "]}),Object(j.jsx)("span",{children:Object(j.jsx)("i",{children:d.filter((function(e){return"Position"==e.q}))[0].a})}),Object(j.jsxs)("div",{className:"experience-info",children:[Object(j.jsx)("div",{children:d.filter((function(e){return"Experience Description"==e.q}))[0].a}),Object(j.jsxs)("div",{children:["From : ",d.filter((function(e){return"Experience From"==e.q}))[0].a]}),Object(j.jsxs)("div",{children:["Till : ",d.filter((function(e){return"Experience To"==e.q}))[0].a]})]})]})]})})};function w(e){var t=[];e=e>5?5:Math.round(e);for(var n=0;n<e;n++)t.push(Object(j.jsx)("span",{style:{display:"inline-block",fontSize:25,color:"#f8b715"},children:" \u2605 "}));if(e<5)for(var i=e;i<5;i++)t.push(Object(j.jsx)("span",{style:{display:"inline-block",fontSize:25,color:"grey"},children:" \u2605 "}));return t}var T=function(e){var t=e.setPage,n=Object(i.createRef)(),c=d.filter((function(e){return"Name"==e.q}))[0].a.toString()+"Resume";return console.log(c),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{ref:n,className:"resume-container",children:[Object(j.jsx)(E,{}),Object(j.jsx)(F,{}),Object(j.jsx)(B,{}),Object(j.jsx)(S,{}),Object(j.jsx)(D,{})]}),Object(j.jsx)(N.a,{targetRef:n,filename:c,children:function(e){var t=e.toPdf;return Object(j.jsx)("button",{onClick:t,id:"download",children:"Generate pdf"})}}),Object(j.jsx)("br",{}),Object(j.jsx)(l.b,{to:"/resumeBuilder/hobbies",children:Object(j.jsx)("button",{id:"next",onClick:function(){return t((function(e){return e-1}))},children:"Prev section"})})]})},J=n(3),G=function(e){var t=e.number,n=e.text,i="";return("/resumeBuilder/"==window.location.pathname&&1==t||"/resumeBuilder/education"==window.location.pathname&&2==t||"/resumeBuilder/experience"==window.location.pathname&&3==t||"/resumeBuilder/projects"==window.location.pathname&&4==t||"/resumeBuilder/hobbies"==window.location.pathname&&5==t)&&(i="Active"),Object(j.jsxs)("div",{className:"task",children:[Object(j.jsx)("span",{className:"task-number",id:i,children:t}),Object(j.jsx)("div",{children:n})]})},L=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"tasks",children:[Object(j.jsx)(G,{number:"1",text:"Personal Details"}),Object(j.jsx)("span",{className:"dash"}),Object(j.jsx)(G,{number:"2",text:"Education"}),Object(j.jsx)("span",{className:"dash"}),Object(j.jsx)(G,{number:"3",text:"Experience"}),Object(j.jsx)("span",{className:"dash"}),Object(j.jsx)(G,{number:"4",text:"Projects"}),Object(j.jsx)("span",{className:"dash"}),Object(j.jsx)(G,{number:"5",text:"Hobbies/Achievements"})]})})},A=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{style:{fontSize:12},children:"Do not worry, your previous data is already saved."})})};var M=function(){var e=Object(i.useState)(0),t=Object(a.a)(e,2),n=(t[0],t[1]);return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"App-header",children:[Object(j.jsx)("h1",{children:"We create your resume!"}),Object(j.jsxs)("form",{noValidate:!0,children:[Object(j.jsx)(L,{}),Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{id:"questions-container",children:Object(j.jsxs)(J.c,{children:[Object(j.jsxs)(J.a,{path:"/resumeBuilder/",exact:!0,children:[Object(j.jsx)(A,{}),Object(j.jsx)(u,{setPage:n})]}),Object(j.jsxs)(J.a,{path:"/resumeBuilder/education",children:[Object(j.jsx)(A,{}),Object(j.jsx)(x,{setPage:n})]}),Object(j.jsxs)(J.a,{path:"/resumeBuilder/experience",children:[Object(j.jsx)(A,{}),Object(j.jsx)(g,{setPage:n})]}),Object(j.jsxs)(J.a,{path:"/resumeBuilder/projects",children:[Object(j.jsx)(A,{}),Object(j.jsx)(y,{setPage:n})]}),Object(j.jsxs)(J.a,{path:"/resumeBuilder/hobbies",children:[Object(j.jsx)(A,{}),Object(j.jsx)(P,{setPage:n})]}),Object(j.jsxs)(J.a,{path:"/resumeBuilder/success",children:[Object(j.jsx)("h1",{children:"Your resume is Ready!"}),Object(j.jsx)(T,{setPage:n})]})]})})})]})]})})},I=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,244)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),I()}},[[94,1,3]]]);
//# sourceMappingURL=main.bcc08e0c.chunk.js.map