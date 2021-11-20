(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(9),r=a.n(n),i=(a(19),a(5)),l=a(6),o=a(8),j=a(7),b=a(2),d=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)("header",{id:"home",children:[Object(b.jsxs)("nav",{id:"nav-wrap",children:[Object(b.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(b.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(b.jsxs)("ul",{id:"nav",className:"nav",children:[Object(b.jsx)("li",{className:"current",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Portfolio"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})})]})]}),Object(b.jsx)("div",{className:"row banner",children:Object(b.jsxs)("div",{className:"banner-text",children:[Object(b.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(b.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(b.jsx)("hr",{}),Object(b.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,target:"_blank",children:Object(b.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(b.jsx)("p",{className:"scrolldown",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(b.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),a}(s.Component),m=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(b.jsx)("section",{id:"about",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"three columns",children:Object(b.jsx)("img",{className:"profile-pic",src:"https://media-exp1.licdn.com/dms/image/C4E03AQEiqbywHrTC2w/profile-displayphoto-shrink_200_200/0/1626748912440?e=1642636800&v=beta&t=CUrX1OA3NJfF90DCwrtZeGYkha_pcQLo-wm3RFv9w90",alt:""})}),Object(b.jsxs)("div",{className:"nine columns main-col6",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsx)("p",{className:"aboutPara",children:e.aboutme}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"columns contact-details",children:[Object(b.jsx)("h2",{children:"Contact Info"}),Object(b.jsxs)("p",{className:"address",children:[Object(b.jsx)("span",{children:e.name}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:e.address}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:e.website}),Object(b.jsx)("br",{}),Object(b.jsxs)("a",{className:"button",target:"_blank",href:"https://drive.google.com/file/d/1TerPt9fwZpnEOmG4uENhjm4bPouJLQ14/view?usp=sharing",children:[Object(b.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})]}),Object(b.jsxs)("a",{target:"_blank",className:"button btn linkedin-btn",href:"https://www.linkedin.com/in/elsamarie-balkaran-999b6ab3/",children:[Object(b.jsx)("i",{className:"fa fa-linkedin"}),"LinkedIn"]}),Object(b.jsxs)("a",{target:"_blank",className:"button btn github-btn",href:"https://github.com/elsabalk",children:[Object(b.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})]})})}}]),a}(s.Component),h=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(b.jsxs)("section",{id:"resume",children:[Object(b.jsxs)("div",{className:"row education",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Education"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(b.jsx)("div",{className:"row item",children:Object(b.jsxs)("div",{className:"twelve columns",children:[Object(b.jsx)("h3",{children:e.UniversityName}),Object(b.jsxs)("p",{className:"info",children:[e.specialization,Object(b.jsx)("span",{children:"\u2022"})," ",Object(b.jsxs)("em",{className:"date",children:[e.MonthAndYearStarted," ",e.MonthAndYearEnded]})]})]})})}))})]}),Object(b.jsxs)("div",{className:"row work",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Work"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(b.jsx)("div",{className:"row item",children:Object(b.jsxs)("div",{className:"twelve columns",children:[Object(b.jsx)("h3",{children:e.CompanyName}),Object(b.jsxs)("p",{className:"info",children:[e.specialization,Object(b.jsx)("span",{children:"\u2022"})," ",Object(b.jsxs)("em",{className:"date",children:[e.MonthAndYearStarted," ",e.MonthAndYearEnded]})]})]})})}))})]}),Object(b.jsxs)("div",{className:"row skill",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Skills"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:Object(b.jsx)("div",{className:"bars",children:Object(b.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(b.jsx)("div",{className:"row item",children:Object(b.jsxs)("div",{className:"twelve columns",children:[Object(b.jsx)("h3",{children:e.skill}),Object(b.jsxs)("p",{className:"info",children:[e.specialization,Object(b.jsx)("span",{children:"\u2022"})," ",Object(b.jsx)("em",{className:"date",children:e.skillname})]})]})})}))})})})]})]})}}]),a}(s.Component),u=a(4),O=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){this.props.resumeData;return Object(b.jsx)("section",{id:"portfolio",children:Object(b.jsxs)("div",{className:"portfolioTitle",children:[Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.c,{style:{width:"18rem"},variant:"top",src:""}),Object(b.jsxs)(u.b,{children:[Object(b.jsx)(u.d,{children:"Check out some of my awesome work"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"button",onClick:function(){return window.location.href="https://agile-beyond-74624.herokuapp.com/"},children:"Budget Tracker"}),Object(b.jsx)("br",{})]})]}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.c,{style:{width:"18rem"},variant:"top",src:""}),Object(b.jsxs)(u.b,{children:[Object(b.jsx)("button",{className:"button",onClick:function(){return window.location.href="https://github.com/elsabalk/RegexTutorial.git"},children:"Regex Tutorial"}),Object(b.jsx)("br",{})]})]}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.c,{style:{width:"18rem"},variant:"top",src:""}),Object(b.jsxs)(u.b,{children:[Object(b.jsx)("button",{className:"button",onClick:function(){return window.location.href="https://github.com/elsabalk/WorkoutTracker.git"},children:"Workout Tracker"}),Object(b.jsx)("br",{})]})]}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.c,{style:{width:"18rem"},variant:"top",src:""}),Object(b.jsxs)(u.b,{children:[Object(b.jsx)("button",{className:"button",onClick:function(){return window.location.href="https://github.com/elsabalk/Employee-Tracker.git"},children:"Employee Tracker"}),Object(b.jsx)("br",{})]})]}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.c,{style:{width:"18rem"},variant:"top",src:""}),Object(b.jsxs)(u.b,{children:[Object(b.jsx)("button",{className:"button",onClick:function(){return window.location.href="https://github.com/ZagalJ/BarnesAndNode.git"},children:"Barns and Node"}),Object(b.jsx)("br",{})]})]}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.c,{style:{width:"18rem"},variant:"top",src:""}),Object(b.jsxs)(u.b,{children:[Object(b.jsx)("button",{className:"button",onClick:function(){return window.location.href="https://github.com/elsabalk/E-Commerce-Backend.git"},children:"Ecommerce Backend"}),Object(b.jsx)("br",{})]})]})]})})}}]),a}(s.Component),p=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){this.props.resumeData;return Object(b.jsxs)("section",{id:"contact",children:[Object(b.jsx)("div",{className:"row section-head",children:Object(b.jsx)("div",{className:"ten columns",children:Object(b.jsx)("p",{className:"lead",children:"Please feel free to contact me"})})}),Object(b.jsxs)("form",{id:"contact-form",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name *"}),Object(b.jsx)("input",{required:!0,type:"text",className:"form-control"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address *"}),Object(b.jsx)("input",{required:!0,type:"email",className:"form-control","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"exampleInputSubject",children:"Subject *"}),Object(b.jsx)("input",{required:!0,type:"text",className:"form-control","aria-describedby":"subjectHelp"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"message",children:"Message *"}),Object(b.jsx)("textarea",{required:!0,className:"form-control",rows:"5"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary button",children:"Submit"})]})]})}}]),a}(s.Component),x=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){this.props.resumeData;return Object(b.jsx)("footer",{children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"twelve columns",children:Object(b.jsx)("ul",{className:"social-links",children:Object(b.jsx)("ul",{className:"maker",children:Object(b.jsx)("a",{children:"Designed by Elsa Balkaran"})})})})})})}}]),a}(s.Component),f={imagebaseurl:"https://media-exp1.licdn.com/dms/image/C4E03AQEiqbywHrTC2w/profile-displayphoto-shrink_200_200/0/1626748912440?e=1642636800&v=beta&t=CUrX1OA3NJfF90DCwrtZeGYkha_pcQLo-wm3RFv9w90",name:"Elsa Balkaran",role:"Full Stack Web Developer",linkedinId:"elsamarie-balkaran-999b6ab3",email:"elsabalk@hotmail.com",phone:"651-492-9920",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/elsamarie-balkaran-999b6ab3/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/elsabalk",className:"fa fa-github"}],aboutme:"My name is Elsa Balkaran and I am a passionate full stack developer who learns quickly and adapts to change. My goal is to bring to your team my knowledge and background while growing and learning from each other. I am a self starter and motivated by change, no task is too big for me. ",address:"Minneapolis, MN",website:"https://github.com/elsabalk",education:[{UniversityName:"University of Minnesota",MonthAndYearStarted:"June 2021 -",MonthAndYearEnded:"Dec 2021"}],work:[{CompanyName:"Vermilion State Bank",MonthAndYearStarted:"September 2004 -",MonthAndYearEnded:"Apirl 2014"},{CompanyName:"Wells Fargo",MonthAndYearStarted:"October 2014 -",MonthAndYearEnded:"Apirl 2016"}],skills:[{skillname:"Javscript"},{skillname:"HTML"},{skillname:"Css"},{skillname:"Node.js"},{skillname:"React"},{skillname:"MySQL"},{skillname:"MongoDB"}],portfolio:[{name:"Budget Tracker",description:"Created an app for users to be able to manage their expenses and income",gitUrl:"https://agile-beyond-74624.herokuapp.com/"},{name:"Regex Tutorial",description:"Created a tutorial for regular expression",gitUrl:"https://github.com/elsabalk/RegexTutorial.git"},{name:"Workout Tracker",description:"Created an application for users to track reps",gitUrl:"https://github.com/elsabalk/WorkoutTracker.git"},{name:"Employee Tracker",description:"Created an application for managers to enter employee info and assign",gitUrl:"https://github.com/elsabalk/Employee-Tracker.git"},{name:"Barns and Node",description:"Group project created an online libary",gitUrl:"https://github.com/ZagalJ/BarnesAndNode.git"},{name:"Ecommerce Backend",description:"Setup an Ecommerce backend using MySQL database",gitUrl:"https://github.com/elsabalk/E-Commerce-Backend.git"}]},k=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{resumeData:f}),Object(b.jsx)(m,{resumeData:f}),Object(b.jsx)(h,{resumeData:f}),Object(b.jsx)(O,{resumeData:f}),Object(b.jsx)(p,{resumeData:f}),Object(b.jsx)(x,{resumeData:f})]})}}]),a}(s.Component),N=k;r.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.97aef4d1.chunk.js.map