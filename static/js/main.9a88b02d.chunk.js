(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{10:function(e,t,a){e.exports={container:"Header_container__17-nE",logo:"Header_logo__2UPuP",menu:"Header_menu__2oc6r",span:"Header_span__12gFP",switch:"Header_switch__3nc0h"}},11:function(e,t,a){e.exports={toolsContainer:"Tools_toolsContainer__1w8aS",toolsCommand:"Tools_toolsCommand__3HbVW",tools:"Tools_tools__4b-OO"}},2:function(e,t,a){e.exports={homeContainer:"Home_homeContainer__318ap",leftContainer:"Home_leftContainer__3B6ML",profileContainer:"Home_profileContainer__3UsW9",catCommand:"Home_catCommand__3c4Hi",hello:"Home_hello__1vaY8",name:"Home_name__L9Q3d",about:"Home_about__23V8k",contactContainer:"Home_contactContainer__1oQhw",downloadResume:"Home_downloadResume__21hRQ",alertContainer:"Home_alertContainer__IGZUm",alertTitle:"Home_alertTitle__lw4sN",alertConfirmButton:"Home_alertConfirmButton__24nLr",alertCancelButton:"Home_alertCancelButton__-OaNb",alertCloseButton:"Home_alertCloseButton__3O0KW",socialMediasContainer:"Home_socialMediasContainer__3Y2Br",socialMedias:"Home_socialMedias__3O6cN",rightContainer:"Home_rightContainer__f6Xat",image:"Home_image__-SVYS",resumeContainer:"Home_resumeContainer__3fsGX"}},28:function(e,t,a){},3:function(e,t,a){e.exports={commands:"Animation_commands__y8tHy",blink:"Animation_blink__2Q8tE",helloAppear:"Animation_helloAppear__Yd0Tq",nameAppear:"Animation_nameAppear__2mDn4",aboutAppear:"Animation_aboutAppear__36G3P",downloadResumeAppear:"Animation_downloadResumeAppear__1JGwC",socialMediasAppear:"Animation_socialMediasAppear__1CZ-s",imageAppear:"Animation_imageAppear__2nMty",aboutTextAppear:"Animation_aboutTextAppear__25cnn",hobbiesAppear:"Animation_hobbiesAppear__3lhk-",appearOnScreen:"Animation_appearOnScreen__mSeQi"}},31:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(17),o=a.n(s),r=a(13),i=a(5);var l,d,j,m,b,h=function(e,t){var a=Object(c.useState)((function(){var a=localStorage.getItem(e);return a?JSON.parse(a):t})),n=Object(r.a)(a,2),s=n[0],o=n[1];return Object(c.useEffect)((function(){return localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,o]},p=a(8),u=Object(i.c)(l||(l=Object(p.a)(["\n    \n    body {\n        background: ",";\n        \n        color: ",";\n    }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.text})),x=(a(28),a(21)),O=a.n(x),_=a.p+"static/media/logo.fe37f188.png",g=i.d.div(d||(d=Object(p.a)(["\n    background: ",";\n\n    color: ",";\n"])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.text})),f=a(10),C=a.n(f),v=a(0),N=function(e){var t=e.toogleTheme,a=Object(c.useContext)(i.a),n=a.title,s=a.colors;return Object(v.jsxs)(g,{className:C.a.container,children:[Object(v.jsx)("a",{href:"https://iuri-almeida.github.io/",children:Object(v.jsx)("img",{className:C.a.logo,src:_,alt:"Logo"})}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:C.a.menu,children:[Object(v.jsx)("a",{href:"#home",children:"Home"}),Object(v.jsx)("a",{href:"#about",children:"About me"}),Object(v.jsx)("a",{href:"#tools",children:"Tools"}),Object(v.jsx)("a",{href:"#projects",children:"Projects"})]}),Object(v.jsx)("span",{className:C.a.span,children:"Light"}),Object(v.jsx)(O.a,{className:C.a.switch,checked:"dark"===n,onChange:t,checkedIcon:!1,uncheckedIcon:!1,height:32,width:66,handleDiameter:26,onColor:s.primary,offColor:s.primary,onHandleColor:"#449DD1",offHandleColor:"#449DD1"}),Object(v.jsx)("span",{className:C.a.span,children:"Dark"})]})]})},y=a(6),w=a.n(y),A=a(3),H=a.n(A),k=a.p+"static/media/github.f439f098.png",I=a.p+"static/media/linkedin.99b9a19e.png",T=a.p+"static/media/instagram.5d5966a3.png",S=a.p+"static/media/facebook.9f680718.png",D=a.p+"static/media/gmail.e5626796.png",M=a.p+"static/media/iuri.c06da653.jpg",R=a(9),L=a.n(R),E=a(2),B=a.n(E),J=function(){return Object(v.jsxs)("div",{id:"home",className:B.a.homeContainer,children:[Object(v.jsxs)("div",{className:B.a.leftContainer,children:[Object(v.jsxs)("div",{className:B.a.profileContainer,children:[Object(v.jsx)("span",{className:"".concat(w.a.commands," ").concat(H.a.commands," ").concat(B.a.catCommand),children:"$ cat profile.txt"}),Object(v.jsx)("span",{className:"".concat(B.a.hello," ").concat(H.a.helloAppearAppear),children:"Hello world, my name is"}),Object(v.jsx)("span",{className:"".concat(B.a.name," ").concat(H.a.nameAppear),children:"IURI ALMEIDA"}),Object(v.jsx)("span",{className:"".concat(B.a.about," ").concat(H.a.aboutAppear),children:"SELF-TAUGHT AND FULL STACK DEVELOPER"})]}),Object(v.jsxs)("div",{className:B.a.contactContainer,children:[Object(v.jsxs)("div",{className:B.a.resumeContainer,children:[Object(v.jsx)("span",{className:"".concat(w.a.commands," ").concat(H.a.commands),children:"$ wget resume.pdf"}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:"".concat(B.a.downloadResume," ").concat(H.a.downloadResumeAppear),onClick:function(){var e,t,a,c,n,s;L.a.fire({title:"Select a resume for download",showCancelButton:!0,showCloseButton:!0,confirmButtonText:"Portuguese",cancelButtonText:"English"});var o=L.a.getConfirmButton(),r=L.a.getCancelButton(),i=L.a.getActions();null===o||void 0===o||o.remove(),null===r||void 0===r||r.remove();var l=document.createElement("a"),d=document.createElement("a");l.setAttribute("href","/iuri_pt-br.pdf"),l.setAttribute("download","iuri_pt-br.pdf"),d.setAttribute("href","/iuri_en-us.pdf"),d.setAttribute("download","iuri_en-us.pdf"),l.appendChild(o||document.createElement("button")),d.appendChild(r||document.createElement("button")),null===i||void 0===i||i.appendChild(l),null===i||void 0===i||i.appendChild(d),null===(e=L.a.getHeader())||void 0===e||null===(t=e.parentElement)||void 0===t||t.classList.add(B.a.alertContainer),null===(a=L.a.getTitle())||void 0===a||a.classList.add(B.a.alertTitle),null===(c=L.a.getConfirmButton())||void 0===c||c.classList.add(B.a.alertConfirmButton),null===(n=L.a.getCancelButton())||void 0===n||n.classList.add(B.a.alertCancelButton),null===(s=L.a.getCloseButton())||void 0===s||s.classList.add(B.a.alertCloseButton)},children:"Download Resume"})})]}),Object(v.jsxs)("div",{className:B.a.socialMediasContainer,children:[Object(v.jsx)("span",{className:"".concat(w.a.commands," ").concat(H.a.commands),children:"$ open https://social_medias.com"}),Object(v.jsxs)("div",{className:H.a.socialMediasAppear,children:[Object(v.jsx)("a",{href:"https://github.com/Iuri-Almeida",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("img",{className:B.a.socialMedias,src:k,alt:"Meu GitHub"})}),Object(v.jsx)("a",{href:"https://www.linkedin.com/in/iurilopesalmeida/",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("img",{className:B.a.socialMedias,src:I,alt:"Meu LinkedIn"})}),Object(v.jsx)("a",{href:"https://www.instagram.com/_iurialmeida/",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("img",{className:B.a.socialMedias,src:T,alt:"Meu Instagram"})}),Object(v.jsx)("a",{href:"https://www.facebook.com/iuri.almeida.96",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("img",{className:B.a.socialMedias,src:S,alt:"Meu Facebook"})}),Object(v.jsx)("a",{href:"mailto:iurilopesalmeida@gmail.com",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("img",{className:B.a.socialMedias,src:D,alt:"Meu E-mail"})})]})]})]})]}),Object(v.jsx)("div",{className:B.a.rightContainer,children:Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:"".concat(w.a.commands," ").concat(H.a.commands),children:"$ display iuri.png"}),Object(v.jsx)("div",{className:H.a.imageAppear,children:Object(v.jsx)("img",{className:B.a.image,src:M,alt:"Iuri Almeida"})})]})})]})},P=a.p+"static/media/python.8dbd7f1f.png",F=a.p+"static/media/challenges.e72b5cea.png",G=a.p+"static/media/code.cd3a94b7.png",U=a.p+"static/media/jiujitsu.5c8f55d8.png",Q=i.d.div(j||(j=Object(p.a)(["\n    background: ",";\n\n    color: ",";\n"])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.text})),$=a(7),V=a.n($),W=function(){return Object(v.jsxs)("div",{id:"about",className:V.a.aboutContainer,children:[Object(v.jsx)("span",{className:"".concat(w.a.commands," ").concat(H.a.commands," ").concat(V.a.aboutCommand),children:"$ whoami"}),Object(v.jsxs)("p",{className:"".concat(V.a.aboutText," ").concat(H.a.aboutTextAppear),children:["Hi there, I'm ",Object(v.jsx)("span",{className:V.a.regularText,children:"Iuri Almeida"}),", a self-taught and full stack developer from Brazil, currently working at ",Object(v.jsx)("a",{className:V.a.regularText,href:"https://nossaenergia.petrobras.com.br/pt/energia/conexoes-para-a-inovacao-modulo-ignicao-busca-as-ideias-de-jovens-estudantes/#menu",target:"_blank",rel:"noreferrer",children:"M\xf3dulo Igni\xe7\xe3o"})," as a software developer. I\u2019m always willing to learn new things and spread knowledge around the world.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:V.a.regularText,children:"Curiosity:"})," I'm a jiu jitsu black belt."]}),Object(v.jsx)("span",{className:"".concat(w.a.commands," ").concat(H.a.commands," ").concat(V.a.lsCommand),children:"$ ls hobbies/"}),Object(v.jsxs)("div",{className:"".concat(V.a.hobbiesContainer," ").concat(H.a.hobbiesAppear),children:[Object(v.jsxs)(Q,{className:V.a.hobbies,children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:G,alt:"Programming"})}),Object(v.jsx)("h1",{children:"Programming"}),Object(v.jsx)("span",{children:"I love spending hours on the computer developing and creating new things."})]}),Object(v.jsxs)(Q,{className:V.a.hobbies,children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:P,alt:"Python"})}),Object(v.jsx)("h1",{children:"Python"}),Object(v.jsx)("span",{children:"Python is beautiful and that's it, you need to accept."})]}),Object(v.jsxs)(Q,{className:V.a.hobbies,children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:F,alt:"Challenges"})}),Object(v.jsx)("h1",{children:"Challenges"}),Object(v.jsx)("span",{children:"I am driven by challenges and I\u2019m always looking for more."})]}),Object(v.jsxs)(Q,{className:V.a.hobbies,children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:U,alt:"Jiu Jitsu"})}),Object(v.jsx)("h1",{children:"Jiu Jitsu"}),Object(v.jsx)("span",{children:"When I train Jiu Jitsu I relax and forget about my obligations."})]})]})]})},Y=a.p+"static/media/html.8af967a5.png",q=a.p+"static/media/css.99c55bd9.png",X=a.p+"static/media/js.41e7e18b.png",z=a.p+"static/media/sql.1b0f6da3.png",K=a.p+"static/media/reactjs.58d07884.png",Z=a.p+"static/media/nodejs.a0857db9.png",ee=a.p+"static/media/vscode.d88f2614.png",te=a.p+"static/media/linux.fb3d31d6.png",ae=a.p+"static/media/terminal.45a33f07.png",ce=a.p+"static/media/git.cfc36f25.png",ne=a(11),se=a.n(ne),oe=i.d.div(m||(m=Object(p.a)(["\n    background: ",";\n"])),(function(e){return e.theme.colors.secondary})),re=function(){return Object(v.jsxs)("div",{id:"tools",className:se.a.toolsContainer,children:[Object(v.jsx)("span",{className:"".concat(se.a.toolsCommand," ").concat(w.a.commands," ").concat(H.a.commands),children:"$ ls tools/"}),Object(v.jsxs)("div",{className:se.a.tools,children:[Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:Y,alt:"HTML5",title:"HTML5"})}),Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:q,alt:"CSS3",title:"CSS3"})}),Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:X,alt:"JavaScript",title:"JavaScript"})}),Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:P,alt:"Python",title:"Python"})}),Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:z,alt:"SQL",title:"SQL"})}),Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:K,alt:"ReactJS",title:"ReactJS"})})]}),Object(v.jsxs)("div",{className:se.a.tools,children:[Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:Z,alt:"NodeJS",title:"NodeJS"})}),Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:ee,alt:"Visual Studio Code",title:"Visual Studio Code"})}),Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:te,alt:"GNU/Linux",title:"GNU/Linux"})}),Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:ae,alt:"Terminal",title:"Terminal"})}),Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:ce,alt:"Git",title:"Git"})}),Object(v.jsx)(oe,{children:Object(v.jsx)("img",{src:k,alt:"GitHub",title:"GitHub"})})]})]})},ie=i.d.div(b||(b=Object(p.a)(["\n    background: ",";\n"])),(function(e){return e.theme.colors.secondary})),le=a(4),de=a.n(le),je=function(){return Object(v.jsxs)("div",{id:"projects",className:de.a.projectsContainer,children:[Object(v.jsx)("span",{className:"".concat(w.a.commands," ").concat(H.a.commands),children:"$ cd projects/"}),Object(v.jsxs)("div",{className:de.a.projects,children:[Object(v.jsxs)(ie,{className:de.a.project,children:[Object(v.jsxs)("div",{className:de.a.projectDescription,children:[Object(v.jsx)("h1",{children:"Donut Rotation"}),Object(v.jsxs)("p",{children:["In this project I wanted to challenge myself to recreate the ",Object(v.jsx)("a",{href:"https://www.a1k0n.net/2011/07/20/donut-math.html",target:"_blank",rel:"noreferrer",children:"Donut Project"})," made by ",Object(v.jsx)("a",{href:"https://github.com/a1k0n",target:"_blank",rel:"noreferrer",children:"a1k0n"}),". Initially this project was made entirely in C# and I wanted to create using only JavaScript. And this was the result that I  achieved."]})]}),Object(v.jsxs)("div",{className:de.a.projectFooter,children:[Object(v.jsx)("a",{href:"/donut-rotation",children:Object(v.jsx)("button",{type:"button",children:"Demo"})}),Object(v.jsx)("a",{href:"https://github.com/Iuri-Almeida/donut-rotation",target:"_blank",rel:"noreferrer",children:Object(v.jsx)("img",{src:k,alt:"GitHub Repository",title:"Donut Rotation Repository"})})]})]}),Object(v.jsxs)(ie,{className:de.a.project,children:[Object(v.jsxs)("div",{className:de.a.projectDescription,children:[Object(v.jsx)("h1",{children:"Rotate Cube"}),Object(v.jsx)("p",{children:"This project was part of my personal challenges, which I needed to create a page every day. Here I studied about how to treat 3D objects using CSS."})]}),Object(v.jsxs)("div",{className:de.a.projectFooter,children:[Object(v.jsx)("a",{href:"/rotate-cube",children:Object(v.jsx)("button",{type:"button",children:"Demo"})}),Object(v.jsx)("a",{href:"https://github.com/Iuri-Almeida/rotate-cube",target:"_blank",rel:"noreferrer",children:Object(v.jsx)("img",{src:k,alt:"GitHub Repository",title:"Rotate Cube Repository"})})]})]}),Object(v.jsxs)(ie,{className:de.a.project,children:[Object(v.jsxs)("div",{className:de.a.projectDescription,children:[Object(v.jsx)("h1",{children:"Carousel"}),Object(v.jsx)("p",{children:"This project was part of my personal challenges, which I needed to create a page every day. Here I studied about how to create a carousel in several different ways."})]}),Object(v.jsxs)("div",{className:de.a.projectFooter,children:[Object(v.jsx)("a",{href:"/carousel",children:Object(v.jsx)("button",{type:"button",children:"Demo"})}),Object(v.jsx)("a",{href:"https://github.com/Iuri-Almeida/carousel",target:"_blank",rel:"noreferrer",children:Object(v.jsx)("img",{src:k,alt:"GitHub Repository",title:"Carousel Repository"})})]})]}),Object(v.jsxs)(ie,{className:de.a.project,children:[Object(v.jsxs)("div",{className:de.a.projectDescription,children:[Object(v.jsx)("h1",{children:"Smile Focus"}),Object(v.jsx)("p",{children:"This project was part of my personal challenges, which I needed to create a page every day. Here I studied about how the click positions and the movements of the mouse cursor on a page works."})]}),Object(v.jsxs)("div",{className:de.a.projectFooter,children:[Object(v.jsx)("a",{href:"/smile-focus",children:Object(v.jsx)("button",{type:"button",children:"Demo"})}),Object(v.jsx)("a",{href:"https://github.com/Iuri-Almeida/smile-focus",target:"_blank",rel:"noreferrer",children:Object(v.jsx)("img",{src:k,alt:"GitHub Repository",title:"Smile Focus Repository"})})]})]}),Object(v.jsxs)(ie,{className:de.a.project,children:[Object(v.jsxs)("div",{className:de.a.projectDescription,children:[Object(v.jsx)("h1",{children:"Flip Card"}),Object(v.jsx)("p",{children:"This project was part of my personal challenges, which I needed to create a page every day. Here I studied about how to create a 3D object using CSS."})]}),Object(v.jsxs)("div",{className:de.a.projectFooter,children:[Object(v.jsx)("a",{href:"/flip-card",children:Object(v.jsx)("button",{type:"button",children:"Demo"})}),Object(v.jsx)("a",{href:"https://github.com/Iuri-Almeida/flip-card",target:"_blank",rel:"noreferrer",children:Object(v.jsx)("img",{src:k,alt:"GitHub Repository",title:"Flip Card Repository"})})]})]}),Object(v.jsxs)(ie,{className:de.a.project,children:[Object(v.jsxs)("div",{className:de.a.projectDescription,children:[Object(v.jsx)("h1",{children:"Chronometer"}),Object(v.jsx)("p",{children:"This project was part of my personal challenges, which I needed to create a page every day. Here I studied about how a timer buttons start, continue and restart works."})]}),Object(v.jsxs)("div",{className:de.a.projectFooter,children:[Object(v.jsx)("a",{href:"/chronometer",children:Object(v.jsx)("button",{type:"button",children:"Demo"})}),Object(v.jsx)("a",{href:"https://github.com/Iuri-Almeida/chronometer",target:"_blank",rel:"noreferrer",children:Object(v.jsx)("img",{src:k,alt:"GitHub Repository",title:"Chronometer Repository"})})]})]})]})]})},me=function(){return Object(v.jsxs)("div",{className:w.a.mainContainer,onLoad:function(){for(var e=document.querySelectorAll("span.".concat(H.a.commands)),t=function(t){var a=e[t].innerHTML.split("");e[t].innerHTML="",a.forEach((function(a,c){return setTimeout((function(){return e[t].innerHTML+=a}),160*c)}))},a=0;a<e.length;a++)t(a)},children:[Object(v.jsx)(J,{}),Object(v.jsx)(W,{}),Object(v.jsx)(re,{}),Object(v.jsx)(je,{})]})},be={title:"light",colors:{primary:"#E0E0EA",secondary:"#EAECF8",text:"#262525"}},he={title:"dark",colors:{primary:"#0E0E52",secondary:"#150578",text:"#fff"}};var pe=function(){var e=h("theme",he),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(v.jsx)(i.b,{theme:a,children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(u,{}),Object(v.jsx)(N,{toogleTheme:function(){c("dark"===a.title?be:he)}}),Object(v.jsx)(me,{})]})})};o.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(pe,{})}),document.getElementById("root"))},4:function(e,t,a){e.exports={projectsContainer:"Projects_projectsContainer__1PJC_",projects:"Projects_projects__31O0i",project:"Projects_project__2Hmhj",projectDescription:"Projects_projectDescription__3sdJY",projectFooter:"Projects_projectFooter__2zs9j"}},6:function(e,t,a){e.exports={mainContainer:"Main_mainContainer__1StLT",commands:"Main_commands__3c2V7"}},7:function(e,t,a){e.exports={aboutContainer:"About_aboutContainer__Q9JXt",aboutCommand:"About_aboutCommand__1Ue8H",lsCommand:"About_lsCommand__18_C8",aboutText:"About_aboutText__2lr39",regularText:"About_regularText__2Fi6n",hobbiesContainer:"About_hobbiesContainer__14TWx",hobbies:"About_hobbies__1mwNJ"}}},[[31,1,2]]]);
//# sourceMappingURL=main.9a88b02d.chunk.js.map