(this.webpackJsonpgcrodrigues=this.webpackJsonpgcrodrigues||[]).push([[0],{41:function(n,e,t){n.exports=t.p+"static/media/avatar.4f3c9f9f.png"},42:function(n,e,t){n.exports=t.p+"static/media/gustavo.c201d9d4.jpg"},43:function(n,e,t){n.exports=t.p+"static/media/html.860719a5.svg"},44:function(n,e,t){n.exports=t.p+"static/media/css.60311824.svg"},45:function(n,e,t){n.exports=t.p+"static/media/javascript.7f644fef.svg"},46:function(n,e,t){n.exports=t.p+"static/media/typescript.95ec8d63.svg"},47:function(n,e,t){n.exports=t.p+"static/media/styled.39523436.svg"},48:function(n,e,t){n.exports=t.p+"static/media/react.3d258004.svg"},49:function(n,e,t){n.exports=t.p+"static/media/sass.306ae4b9.svg"},50:function(n,e,t){n.exports=t.p+"static/media/redux.647919cc.svg"},51:function(n,e,t){n.exports=t.p+"static/media/node.e46aef18.svg"},52:function(n,e,t){n.exports=t.p+"static/media/git.911ff8d8.svg"},53:function(n,e,t){n.exports=t.p+"static/media/404dark.f6f2607c.png"},54:function(n,e,t){n.exports=t.p+"static/media/404light.cdc9d6b2.png"},55:function(n,e,t){n.exports={container:"NotFound_container__2GCvw"}},56:function(n,e,t){n.exports=t(83)},83:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(37),i=t.n(o),c=t(10),l=t(2),u=t(11),m={title:"dark",colors:{primary:"#c24e98",secundary:"#7159c1",background:"#12181b",complement:"#2a2e35",navbar:"#2a2e35",inputBorder:Object(u.b)(.05,"#12181b"),icons:"#6d6969",text:"#fff",active:"rgba(120, 120, 120, .1)"}},s={title:"light",colors:{primary:"#f7b733",secundary:"#f25c27",background:"#fafafa",complement:"#fff",navbar:"".concat(Object(u.b)(.1,"#fc4a1a")),inputBorder:Object(u.a)(.03,"#f0f0fe"),icons:"#f1f1f1",text:"#222",active:"rgba(50, 50, 50, .1)"}},d=Object(r.createContext)(),f=function(n){var e=n.children,t=Object(r.useState)(m),o=Object(c.a)(t,2),i=o[0],u=o[1],f=Object(r.useState)(window.innerWidth),g=Object(c.a)(f,2),p=g[0],h=g[1],b=Object(r.useState)(!1),v=Object(c.a)(b,2),E=v[0],x=v[1];Object(r.useEffect)((function(){var n=function(){return h(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[p]);return a.a.createElement(d.Provider,{value:{toggleTheme:function(){u(i===m?s:m)},handleNavbar:function(){x(!E),document.body.style.overflow=E?"unset":"hidden"},theme:i,width:p,navIsOpen:E}},a.a.createElement(l.b,{theme:i},e))},g=d,p=t(12),h=t(5),b=t(19),v=t(7),E=t(4);function x(){var n=Object(E.a)(["\n  ul {\n    list-style: none;\n    display: flex;\n    margin-top: 2rem;\n    align-self: center;\n    width: fit-content;\n    display: flex;\n    justify-content: space-around;\n    color: ",";\n\n    li {\n      transition: color 0.2s;\n\n      a {\n        text-decoration: none;\n        color: ",";\n        &:hover {\n          color: ",";\n        }\n      }\n\n      + li {\n        margin-left: 1rem;\n      }\n    }\n  }\n"]);return x=function(){return n},n}var w=l.d.div(x(),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secundary}));var y=function(){return a.a.createElement(w,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/gcrodrigues"},a.a.createElement(v.e,{size:25}))),a.a.createElement("li",null,a.a.createElement("a",{target:"_blank",href:"https://www.github.com/gcrodrigues"},a.a.createElement(v.c,{size:25}))),a.a.createElement("li",null,a.a.createElement("a",{target:"_blank",href:"https://api.whatsapp.com/send?phone=5513974080420"},a.a.createElement(v.i,{size:25})))))},k=t(25),j=t(15),O=t(17);function C(){var n=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 6rem;\n  padding: 0 1.5rem;\n  color: ",";\n  text-decoration: none;\n\n  @media (max-width: 770px) {\n    padding: 0;\n    border-top: 0.1rem solid rgba(255, 255, 255, 0.1);\n  }\n\n  @media (min-width: 770px) {\n    border-radius: 50%;\n    &:not(:first-child) {\n      margin: 1.5rem 0 0;\n    }\n  }\n\n  p {\n    font-size: 1.4rem;\n    color: #fff;\n    font-weight: bold;\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n  @media (min-width: 770px) {\n    margin: 1rem 0;\n  }\n"]);return z=function(){return n},n}function S(){var n=Object(E.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 2;\n\n  width: 100%;\n  height: 8rem;\n  padding: 0 1.5rem;\n\n  background-color: ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (min-width: 770px) and (max-height: 421px) {\n    width: calc(8rem + 0.72rem);\n    overflow-y: scroll;\n\n    &::-webkit-scrollbar {\n      width: 0.72rem;\n    }\n\n    &::-webkit-scrollbar-track {\n      background: ",";\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: ",';\n    }\n  }\n\n  @media (min-width: 770px) {\n    width: 8rem;\n    height: 100%;\n    padding: 2rem 0;\n\n    flex-direction: column;\n  }\n\n  > button:first-child {\n    @media (min-width: 770px) {\n      display: none;\n    }\n  }\n\n  h1 {\n    font-size: 1rem;\n    text-align: center;\n    font-family: "Montserrat", Arial, Helvetica, sans-serif;\n    letter-spacing: 0.2rem;\n    color: #fff;\n\n    span {\n      color: #fff;\n      font-size: 2.5rem;\n      font-family: "Balsamiq Sans", Arial, Helvetica, sans-serif;\n      font-weight: 100;\n    }\n  }\n\n  button {\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n    color: ',";\n    filter: brightness(100%);\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(80%);\n    }\n  }\n\n  > div {\n    @media (max-width: 770px) {\n      width: 100%;\n\n      position: absolute;\n      left: ",";\n      top: 7.5rem;\n\n      background-color: ",';\n      padding: 1rem 1.5rem;\n\n      transition: left 0.2s;\n\n      z-index: 2;\n\n      &:after {\n        content: "";\n        position: absolute;\n        height: 100vh;\n        width: 100vw;\n        left: 0;\n        top: 100%;\n        z-index: 1;\n        background-color: rgba(0, 0, 0, 0.6);\n        transition: opacity 1s ease-out;\n\n        opacity: ',";\n      }\n    }\n  }\n"]);return S=function(){return n},n}var T=l.d.header(S(),(function(n){return n.theme.colors.navbar}),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.secundary}),(function(n){return n.theme.colors.icons}),(function(n){return n.isOpen?"0":"-100%"}),(function(n){return n.theme.colors.navbar}),(function(n){return n.isOpen?"1":"0"})),I=l.d.nav(z()),N=Object(l.d)(p.c)(C(),(function(n){return n.theme.colors.icons})),P=function(){var n=Object(r.useContext)(g),e=n.handleNavbar,t=n.toggleTheme,o=n.theme,i=n.width,c=n.navIsOpen,u=Object(r.useContext)(l.a).colors;return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{isOpen:c},a.a.createElement("button",{onClick:e},c?a.a.createElement(j.c,{size:30}):a.a.createElement(j.b,{size:30})),a.a.createElement("h1",null,a.a.createElement("span",null,"GC"),a.a.createElement("br",null),"Rodrigues"),a.a.createElement("div",null,a.a.createElement(I,null,a.a.createElement(N,{onClick:e,"data-for":"home","data-tip":!0,exact:!0,to:"/",activeStyle:i>770?{color:u.secundary,backgroundColor:u.background}:{backgroundColor:u.active}},i>=770?a.a.createElement(v.d,{size:30}):a.a.createElement("p",null,"Home")),i>770&&a.a.createElement(O.a,{id:"home",place:"right",border:!0,textColor:u.text,borderColor:u.secundary,backgroundColor:u.background,effect:"solid"},a.a.createElement("p",{style:{fontWeight:600,fontSize:14}},"Home")),a.a.createElement(N,{onClick:e,"data-for":"about","data-tip":!0,to:"/about",activeStyle:i>770?{color:u.secundary,backgroundColor:u.background}:{backgroundColor:u.active}},i>=770?a.a.createElement(v.b,{size:30}):a.a.createElement("p",null,"About")),i>770&&a.a.createElement(O.a,{id:"about",place:"right",effect:"solid",border:!0,textColor:u.text,borderColor:u.secundary,backgroundColor:u.background},a.a.createElement("p",{style:{fontWeight:600,fontSize:14}},"About")),a.a.createElement(N,{onClick:e,"data-for":"portfolio","data-tip":!0,to:"/portfolio",activeStyle:i>770?{color:u.secundary,backgroundColor:u.background}:{backgroundColor:u.active}},i>=770?a.a.createElement(k.b,{size:30}):a.a.createElement("p",null,"Portfolio")),i>770&&a.a.createElement(O.a,{id:"portfolio",place:"right",effect:"solid",border:!0,textColor:u.text,borderColor:u.secundary,backgroundColor:u.background},a.a.createElement("p",{style:{fontWeight:600,fontSize:14}},"Portfolio")),a.a.createElement(N,{onClick:e,"data-for":"contact","data-tip":!0,to:"/contact",activeStyle:i>770?{color:u.secundary,backgroundColor:u.background}:{backgroundColor:u.active}},i>=770?a.a.createElement(k.a,{size:30}):a.a.createElement("p",null,"Contact")),i>770&&a.a.createElement(O.a,{id:"contact",place:"right",effect:"solid",border:!0,textColor:u.text,borderColor:u.secundary,backgroundColor:u.background},a.a.createElement("p",{style:{fontWeight:600,fontSize:14}},"Contact")))),a.a.createElement("button",{onClick:t},"dark"===o.title?a.a.createElement(v.h,{size:30}):a.a.createElement(v.a,{size:30}))))};function D(){var n=Object(E.a)(["\n  background-color: ",";\n\n  color: ",";\n  padding: 2px 8px;\n  border-radius: .4rem;\n\n  font-size:1.4rem;\n  font-weight: 600;\n\n  & + span {\n    margin-left: 5px;\n  }\n"]);return D=function(){return n},n}function A(){var n=Object(E.a)(["\n  width: 100%;\n  min-height: 150px;\n\n  display: flex;\n  flex-direction: column;\n\n  text-decoration: none;\n  \n  color: ",";\n\n  padding:  1.5rem; \n  border-radius: 0.6rem;\n  border:.1rem solid ",";\n\n  transition: transform .2s, background-color .2s;\n\n  &:hover{\n    transform: scale(1.02);\n    background-color: rgba(150,150,150,.1);\n  }\n\n  h2{\n    font-size: 2rem;\n  }\n\n  p{\n    margin: 0.5rem 0;\n    font-size:1.6rem;\n  }\n\n  div{\n    margin-top: auto;\n    margin-left: auto;\n  }\n\n"]);return A=function(){return n},n}var R=l.d.a(A(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secundary})),_=l.d.span(D(),(function(n){return"TypeScript"===n.lang?"#007acd":"JavaScript"===n.lang?"#f5dd19":"CSS"===n.lang?"#573f7d":"#e44c27"}),(function(n){return"JavaScript"===n.lang?"#1d1d1d":"#fff"})),B=function(n){var e=n.name,t=n.url,r=n.description,o=n.languages;return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,{href:t,target:"_blank"},a.a.createElement("h2",null,e),a.a.createElement("p",null,r),a.a.createElement("div",null,Object.keys(o).map((function(n){return a.a.createElement(_,{lang:n},n)})))))},J=t(16),M=t.n(J),F=t(26),G=t(18),H=t.n(G),L=H.a.create({baseURL:"https://api.github.com/"});function W(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 3rem 0;\n\n  animation: "," 1s infinite linear;\n\n  svg {\n    color: ",";\n  }\n"]);return W=function(){return n},n}function Y(){var n=Object(E.a)(["\n  margin: 0 auto;\n  max-width: 1920px;\n  padding: 3rem;\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n  grid-template-rows: repeat(auto-fit, 1fr);\n"]);return Y=function(){return n},n}function q(){var n=Object(E.a)(["\n  from{\n    transform: rotate(0deg);\n  }\n\n  to{\n    transform: rotate(360deg);\n  }\n"]);return q=function(){return n},n}var U=Object(l.e)(q()),Z=l.d.div(Y()),V=l.d.div(W(),U,(function(n){return n.theme.colors.text})),X=function(){var n=Object(r.useState)((function(){var n=localStorage.getItem("@Portfolio:repositories");return n?JSON.parse(n):[]})),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!1),l=Object(c.a)(i,2),u=l[0],m=l[1];Object(r.useEffect)((function(){localStorage.getItem("@Portfolio:repositories")||s()}),[]),Object(r.useEffect)((function(){localStorage.setItem("@Portfolio:repositories",JSON.stringify(t))}),[t]);var s=function(){var n=Object(F.a)(M.a.mark((function n(){var e,t,r;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.next=3,L.get("users/gcrodrigues/repos");case 3:return e=n.sent,t=e.data,n.next=7,Promise.all(t.sort((function(n,e){return new Date(e.created_at).getTime()-new Date(n.created_at).getTime()})).filter((function(n){return"gostack-desafio-conceitos-reactjs"!==n.name&&"gcrodrigues.github.io"!==n.name&&new Date(n.created_at).getTime()>=158498781e4})).map(function(){var n=Object(F.a)(M.a.mark((function n(e){var t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.get("repos/gcrodrigues/".concat(e.name,"/languages"));case 2:return t=n.sent,e.languages=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 7:r=n.sent,o(r),m(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return u?a.a.createElement(V,null,a.a.createElement(j.a,{size:45})):a.a.createElement(Z,null,t.map((function(n){return a.a.createElement(B,{key:n.id,name:n.name,url:n.html_url,description:n.description,languages:n.languages})})))};function K(){var n=Object(E.a)(["\n  width: calc(100% - 8rem);\n  height: 100%;\n  @media (max-width: 770px) {\n    width: 100%;\n    height: calc(100% - 8rem);\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(E.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  overflow: ",";\n\n  @media (max-width: 770px) {\n    align-items: flex-end;\n    justify-content: center;\n  }\n"]);return Q=function(){return n},n}var $={initial:{opacity:0,scale:.99},in:{opacity:1,scale:1},out:{opacity:0,scale:.99}},nn={type:"tween",ease:"anticipate",duration:.3},en=l.d.div(Q(),(function(n){return n.hidden?"hidden":"unset"})),tn=Object(l.d)(b.b.div).attrs((function(){return{initial:"initial",animate:"in",exit:"out",variants:$,transition:nn}}))(K());function rn(){var n=Object(E.a)(["\n  mask-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cpath d='M394.5 170.1c44.4 11.4 108.2 9.8 143.2 36.1 35 26.3 41.2 80.6 23.8 124.3-17.3 43.8-58.2 77-92.6 114.8-34.4 37.8-62.3 80.1-94.9 75.2-32.5-4.9-69.6-57.1-95.9-90.2-26.3-33.2-41.9-47.4-65.3-61.8-23.4-14.4-54.7-29-78.2-57.2-23.5-28.2-39.1-70-33-109.6 6.1-39.7 33.8-77.1 70.5-92 36.7-14.9 82.3-7.3 117.6 8.7s60.4 40.3 104.8 51.7z'/%3E%3C/svg%3E\");\n  mask-size: 100% 100%;\n  mask-repeat: no-repeat;\n  background: ","!important;\n  position: absolute;\n  height: 100% !important;\n  width: 100% !important;\n  z-index: -1;\n  transform: scale(2);\n  right: -15rem;\n  bottom: 0;\n"]);return rn=function(){return n},n}function an(){var n=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 4rem;\n  padding: 0 3rem;\n  border: 0.1rem solid #aaa;\n  border-radius: 5rem;\n  text-decoration: none;\n  color: ",";\n  font-size: 1.6rem;\n  margin-top: 1.5rem;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: rgba(75, 75, 75, 0.1);\n  }\n\n  svg {\n    margin-left: 1rem;\n    color: ",";\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(E.a)(["\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 1020px) {\n    display: none;\n  }\n\n  @media (max-width: 1300px) {\n    width: 40rem;\n\n    height: 40rem;\n    overflow: hidden;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: calc(40rem / 2);\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(E.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  width: 100%;\n  max-width: 500px;\n  min-width: 300px;\n  font-family: "Nunito", sans-serif;\n  font-size: 1.6rem;\n\n  h1 {\n    font-size: 4.8rem;\n\n    @media (max-width: 480px) {\n      font-size: 3.5rem;\n    }\n  }\n\n  p {\n    font-size: 1.9rem;\n    ',";\n    margin-top: 1rem;\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(E.a)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n\n  position: relative;\n  padding: 0 4rem;\n\n  img {\n    height: 100%;\n  }\n"]);return ln=function(){return n},n}var un=l.d.div(ln()),mn=l.d.div(cn(),(function(n){return n.theme.colors.text})),sn=l.d.div(on()),dn=Object(l.d)(p.b)(an(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.text})),fn=l.d.div(rn(),(function(n){var e=n.theme.colors;return"linear-gradient(90deg, ".concat(e.secundary,", ").concat(e.primary,")")})),gn=t(41),pn=t.n(gn);var hn=function(){return a.a.createElement(en,{hidden:!0},a.a.createElement(P,null),a.a.createElement(tn,null,a.a.createElement(un,null,a.a.createElement(mn,null,a.a.createElement("h1",null,"I'm Gustavo Carvalho ",a.a.createElement("br",null),"and I create creative websites."),a.a.createElement("p",null,"Front-end Developer"),a.a.createElement(dn,{to:"/about"},"About me ",a.a.createElement(v.f,{size:20}))),a.a.createElement(sn,null,a.a.createElement("img",{src:pn.a,alt:"Selfie"})),a.a.createElement(fn,null))))};function bn(){var n=Object(E.a)(["\n  width: 7rem;\n  height: 7rem;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover,\n  &:focus {\n    animation: "," 0.3s linear;\n    background-image: none;\n\n    p {\n      opacity: 1;\n    }\n  }\n\n  p {\n    font-size: 1.2rem;\n    font-weight: bold;\n    opacity: 0;\n    transition: opacity 0.2s;\n    text-align: center;\n  }\n"]);return bn=function(){return n},n}function vn(){var n=Object(E.a)(["\n  grid-area: tech;\n  margin: 10px 0;\n\n  > div {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 7rem);\n    grid-gap: 1rem;\n  }\n"]);return vn=function(){return n},n}function En(){var n=Object(E.a)(["\n  grid-area: about;\n  margin: 10px 0;\n\n  span {\n    color: ",";\n  }\n\n  p {\n    font-size: 1.8rem;\n    line-height: 1.6;\n\n    & + p {\n      margin-top: 10px;\n    }\n  }\n"]);return En=function(){return n},n}function xn(){var n=Object(E.a)(['\n  width: 75%;\n  height: 75%;\n  border: solid 0.5rem transparent;\n  border-radius: 50%;\n  position: relative;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    margin: -0.5rem;\n    border-radius: inherit;\n    background: ',";\n  }\n\n  img {\n    width: 100%;\n    border-radius: 50%;\n  }\n"]);return xn=function(){return n},n}function wn(){var n=Object(E.a)(['\n  grid-area: card;\n\n  margin: 0 auto;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  width: 100%;\n  max-width: 45rem;\n\n  height: fit-content;\n\n  > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    h1 {\n      font-size: 2.5rem;\n      margin-top: 20px;\n    }\n\n    p {\n      font-size: 1.6rem;\n      margin: 8px 0;\n      position: relative;\n\n      &::after {\n        content: "";\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 2px;\n        margin-top: 10px;\n\n        background-color: ',";\n      }\n    }\n  }\n"]);return wn=function(){return n},n}function yn(){var n=Object(E.a)(['\n  padding: 2rem;\n\n  @media (min-width: 1000px) {\n    padding: 4rem;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  > div {\n    perspective: 100rem;\n    display: flex;\n    flex-direction: column;\n\n    max-width: 1024px;\n\n    @media (min-width: 1000px) {\n      display: grid;\n      grid-template-rows: 1fr 20rem;\n      grid-template-columns: 30% auto;\n      grid-column-gap: 3rem;\n      grid-row-gap: 2rem;\n      grid-template-areas:\n        "card about about"\n        "card tech tech"\n        ". download download";\n    }\n\n    > a {\n      grid-area: download;\n\n      color: white;\n      background-color: #53b853;\n\n      margin: 2rem 0;\n      padding: 1rem 2.5rem;\n      border-radius: 0.5rem;\n\n      font-weight: bold;\n      font-size: 1.6rem;\n      text-transform: uppercase;\n      text-decoration: none;\n      text-align: center;\n\n      transition: background-color 0.2s;\n\n      &:hover,\n      &:focus {\n        background-color: ',";\n      }\n    }\n    h2 {\n      font-size: 2.5rem;\n      margin-bottom: 15px;\n    }\n  }\n"]);return yn=function(){return n},n}function kn(){var n=Object(E.a)(["\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n\n  20%, 60%{\n    transform: rotate(5deg);\n  }\n  40%, 80%{\n    transform: rotate(-5deg);\n  }\n"]);return kn=function(){return n},n}var jn=Object(l.e)(kn()),On=l.d.div(yn(),Object(u.a)(.1,"#53b853")),Cn=l.d.div(wn(),(function(n){return n.theme.colors.text})),zn=l.d.div(xn(),(function(n){return"linear-gradient(-45deg, ".concat(n.theme.colors.primary,", ").concat(n.theme.colors.secundary,")")})),Sn=l.d.div(En(),(function(n){return n.theme.colors.secundary})),Tn=l.d.div(vn()),In=l.d.div(bn(),(function(n){return"url(".concat(n.background,")")}),jn),Nn=t(42),Pn=t.n(Nn),Dn=t(43),An=t.n(Dn),Rn=t(44),_n=t.n(Rn),Bn=t(45),Jn=t.n(Bn),Mn=t(46),Fn=t.n(Mn),Gn=t(47),Hn=t.n(Gn),Ln=t(48),Wn=t.n(Ln),Yn=t(49),qn=t.n(Yn),Un=t(50),Zn=t.n(Un),Vn=t(51),Xn=t.n(Vn),Kn=t(52),Qn=t.n(Kn);var $n=function(){return a.a.createElement(en,null,a.a.createElement(P,null),a.a.createElement(tn,null,a.a.createElement(On,null,a.a.createElement("div",null,a.a.createElement(Cn,null,a.a.createElement(zn,null,a.a.createElement("img",{src:Pn.a,alt:"Gustavo Carvalho avatar"})),a.a.createElement("div",null,a.a.createElement("h1",null,"Gustavo de Carvalho"),a.a.createElement("p",null,"Front-end Developer"),a.a.createElement(y,null))),a.a.createElement("a",{target:"_blank",href:"https://drive.google.com/file/d/1f4wL263wM4zzeECxngxDZUD4X1PYP01P/view?usp=sharing"},"Download Resume"),a.a.createElement(Sn,null,a.a.createElement("h2",null,"About me"),a.a.createElement("p",null,"Hi! My name is ",a.a.createElement("span",null,"Gustavo de Carvalho Rodrigues")," and I'm a Front-end developer. Passionate about technology and problem solving, making people lives better. I'm in the last semester of my graduation at Fatec Rubens lara in Internet Systems. Currently working with the most modern web development technologies: ",a.a.createElement("strong",null,"ReactJS"),","," ",a.a.createElement("strong",null,"React Native")," and ",a.a.createElement("strong",null,"Node.js")),a.a.createElement("p",null,"I'm dynamic, creative, communicative, committed, with team spirit, willingness, always looking for self improvement as developer and human and searching for new challenges.")),a.a.createElement(Tn,null,a.a.createElement("h2",null,"Technologies"),a.a.createElement("div",null,a.a.createElement(In,{background:An.a},a.a.createElement("p",null,"HTML5")),a.a.createElement(In,{background:_n.a},a.a.createElement("p",null,"CSS3")),a.a.createElement(In,{background:Jn.a},a.a.createElement("p",null,"JAVASCRIPT")),a.a.createElement(In,{background:Fn.a},a.a.createElement("p",null,"TYPESCRIPT")),a.a.createElement(In,{background:Wn.a},a.a.createElement("p",null,"REACTJS & REACT NATIVE")),a.a.createElement(In,{background:Hn.a},a.a.createElement("p",null,"STYLED COMPONENTS")),a.a.createElement(In,{background:Zn.a},a.a.createElement("p",null,"REDUX")),a.a.createElement(In,{background:qn.a},a.a.createElement("p",null,"SASS")),a.a.createElement(In,{background:Qn.a},a.a.createElement("p",null,"GIT")),a.a.createElement(In,{background:Xn.a},a.a.createElement("p",null,"NODEJS"))))))))};var ne=function(){return a.a.createElement(en,null,a.a.createElement(P,null),a.a.createElement(tn,null,a.a.createElement(X,null)))};function ee(){var n=Object(E.a)(["\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  position: absolute;\n\n  div {\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n\n    svg {\n      max-width: 1500px;\n      position: absolute;\n      @media (max-width: 500px) {\n        transform: scale(2);\n      }\n\n      &:first-child {\n        bottom: -85rem;\n        left: -45rem;\n      }\n\n      &:last-child {\n        top: -70rem;\n        right: -50rem;\n      }\n    }\n  }\n"]);return ee=function(){return n},n}function te(){var n=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-top: 1.5rem;\n  padding: 1rem;\n  font-size: 1.6rem;\n  color: #fff;\n  background-color: ",";\n  border-radius: 0.3rem;\n  border: 0;\n  text-transform: uppercase;\n  font-weight: 700;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  svg {\n    margin-left: 0.5rem;\n  }\n"]);return te=function(){return n},n}function re(){var n=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n\n  width: 40%;\n  min-width: 322px;\n  max-width: 400px;\n\n  padding: 2rem 3rem;\n  border-radius: 0.4rem;\n  border: ",";\n  box-shadow: 0 0 5rem 0.5rem rgba(0, 0, 0, 0.1);\n  background-color: ",";\n\n  h2 {\n    font-weight: 500;\n    text-align: center;\n    margin: 0 0 1rem;\n    font-size: 2.4rem;\n  }\n  p {\n    text-align: center;\n    font-size: 1.6rem;\n  }\n\n  input {\n    height: 4rem;\n    padding: 2rem 1rem;\n    border-radius: 0.3rem;\n    border: 0.2rem solid ",";\n    background-color: ",";\n    color: ",";\n    margin-top: 1.5rem;\n    transition: border 0.3s ease;\n    font-size: 1.6rem;\n    transition: all 0.2s;\n\n    &:focus {\n      border-color: ",";\n    }\n  }\n\n  textarea {\n    padding: 1rem;\n    border-radius: 0.3rem;\n    border: 0.2rem solid ",";\n    background-color: ",";\n    color: ",";\n    margin-top: 1.5rem;\n    font-size: 1.6rem;\n    resize: initial;\n    transition: all 0.2s;\n\n    &:focus {\n      border-color: ",";\n    }\n  }\n"]);return re=function(){return n},n}function ae(){var n=Object(E.a)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return ae=function(){return n},n}var oe=l.d.div(ae()),ie=l.d.form(re(),(function(n){return"light"===n.theme.title?"1px solid #eee":"none"}),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secundary}),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secundary})),ce=l.d.button(te(),(function(n){return n.theme.colors.secundary}),(function(n){return"".concat(Object(u.a)(.05,n.theme.colors.secundary))})),le=l.d.div(ee());var ue=function(){var n=Object(r.useState)(""),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(""),u=Object(c.a)(i,2),m=u[0],s=u[1],d=Object(r.useState)(""),f=Object(c.a)(d,2),g=f[0],p=f[1],h=Object(r.useContext)(l.a).colors;return a.a.createElement(en,{hidden:!0},a.a.createElement(P,null),a.a.createElement(tn,null,a.a.createElement(oe,null,a.a.createElement(le,null,a.a.createElement("div",null,a.a.createElement("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fill:h.primary,d:"M16,-38.5C20.8,-24.9,24.8,-20.8,35.4,-15.9C46.1,-11.1,63.4,-5.5,72,5C80.6,15.5,80.5,31,72.8,40.9C65,50.7,49.7,55.1,36.3,61.9C22.9,68.8,11.4,78.2,1,76.5C-9.4,74.7,-18.8,61.7,-27,51.9C-35.3,42,-42.4,35.3,-44.2,27.2C-46,19,-42.6,9.5,-48.3,-3.3C-54,-16.1,-68.8,-32.2,-69.6,-44.8C-70.4,-57.5,-57.1,-66.8,-43.2,-75.1C-29.2,-83.4,-14.6,-90.9,-4.5,-83.1C5.6,-75.2,11.2,-52.1,16,-38.5Z",transform:"translate(100 100)"})),a.a.createElement("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fill:h.secundary,d:"M24.2,-35.4C29.8,-29.2,31.8,-20.1,31.9,-12.2C32,-4.3,30.1,2.5,30.3,12.3C30.5,22.1,32.7,35.1,28,45.2C23.3,55.3,11.6,62.6,2.9,58.7C-5.9,54.7,-11.8,39.5,-23.5,31.7C-35.3,23.9,-52.9,23.4,-59.8,16.1C-66.8,8.8,-63.1,-5.2,-55.5,-14.8C-48,-24.4,-36.5,-29.4,-26.6,-34.3C-16.7,-39.2,-8.3,-43.8,0.5,-44.5C9.3,-45.1,18.5,-41.7,24.2,-35.4Z",transform:"translate(100 100)"})))),a.a.createElement(ie,{onSubmit:function(n){return function(n){n.preventDefault();var e=new FormData;e.append("name",t),e.append("email",m),e.append("message",g),H.a.post("https://formspree.io/meqrnjdk",e).then((function(n){return alert("Success! Your email has been sent!")})).catch((function(n){return console.log("Error sending the message. Try again.")})),o(""),s(""),p("")}(n)}},a.a.createElement("h2",null,"Contact me right now!"),a.a.createElement("p",null,"Send me a message so we can talk!"),a.a.createElement("input",{type:"text",name:"nome",value:t,onChange:function(n){return o(n.target.value)},placeholder:"Your Name",required:!0}),a.a.createElement("input",{type:"email",name:"_replyto",value:m,onChange:function(n){return s(n.target.value)},placeholder:"Your email",required:!0}),a.a.createElement("textarea",{name:"message",cols:"50",rows:"5",value:g,onChange:function(n){return p(n.target.value)},placeholder:"Message",required:!0}),a.a.createElement(ce,null,"SEND ",a.a.createElement(v.g,{size:20}))),a.a.createElement(y,null))))},me=t(53),se=t.n(me),de=t(54),fe=t.n(de),ge=t(55),pe=t.n(ge);var he=function(){var n=Object(r.useContext)(l.a).title;return a.a.createElement("div",{className:pe.a.container},a.a.createElement("img",{src:"dark"===n?se.a:fe.a,alt:"404"}),a.a.createElement("h1",null,"Sorry, page not found :("),a.a.createElement(p.b,{to:"/"},"Back to home page"))},be=function(){var n=Object(h.f)();return a.a.createElement(b.a,{exitBeforeEnter:!0},a.a.createElement(h.c,{location:n,key:n.pathname},a.a.createElement(h.a,{exact:!0,path:"/",component:hn}),a.a.createElement(h.a,{path:"/about",component:$n}),a.a.createElement(h.a,{path:"/portfolio",component:ne}),a.a.createElement(h.a,{path:"/contact",component:ue}),a.a.createElement(h.a,{path:"/",component:he})))};function ve(){var n=Object(E.a)(["\n  :root {\n    font-size: 55%;\n  }\n\n  *{\n    padding: 0;\n    margin: 0;\n    outline: 0;\n    box-sizing:border-box;\n  }\n\n  body{\n    background: ",";\n    color: ",';\n    font-family: "Open Sans", sans-serif; \n  }\n\n  body::-webkit-scrollbar {\n    width: .72rem;\n  }\n  \n  body::-webkit-scrollbar-track {\n    background: ',";\n  }\n  \n  body::-webkit-scrollbar-thumb {\n    background:",';\n  }\n\n\n  #root{\n    min-height: 650px;\n  }\n\n  html, body, #root {\n    height: 100%;\n    width: 100%\n  }\n\n  input, button, textarea{\n    font-family: "Roboto", Arial, Helvetica, sans-serif;\n  }\n\n  button{\n    cursor:pointer;\n  }\n\n  @media (min-width: 700px) {\n    :root{\n      font-size: 62.5%;\n\n    }\n  }\n']);return ve=function(){return n},n}var Ee=Object(l.c)(ve(),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.secundary})),xe=function(){return a.a.createElement(f,null,a.a.createElement(p.a,null,a.a.createElement(be,null)),a.a.createElement(Ee,null))};i.a.render(a.a.createElement(xe,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.0ddb89be.chunk.js.map