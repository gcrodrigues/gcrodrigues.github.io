(this.webpackJsonpgcrodrigues=this.webpackJsonpgcrodrigues||[]).push([[0],{37:function(n,e,t){n.exports=t.p+"static/media/avatar.4f3c9f9f.png"},38:function(n,e,t){n.exports=t.p+"static/media/404dark.f6f2607c.png"},39:function(n,e,t){n.exports=t.p+"static/media/404light.cdc9d6b2.png"},40:function(n,e,t){n.exports={container:"NotFound_container__1C9wQ"}},41:function(n,e,t){n.exports=t(68)},51:function(n,e,t){n.exports=t.p+"static/media/papotabu.791f2b9e.jpg"},68:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(33),i=t.n(o),c=t(11),l=t(3),u=t(10),m={title:"dark",colors:{primary:"#c24e98",secundary:"#7159c1",background:"#12181b",complement:"#2a2e35",navbar:"#2a2e35",inputBorder:Object(u.b)(.05,"#12181b"),icons:"#6d6969",text:"#fff"}},d={title:"light",colors:{primary:"#c24e98",secundary:"#7e56cc",background:"#f0f0fe",complement:"#fff",navbar:"".concat(Object(u.b)(.1,"rgba(67, 53, 198, 1)")),inputBorder:Object(u.a)(.03,"#f0f0fe"),icons:"#f1f1f1",text:"#222"}},s=Object(r.createContext)(),f=function(n){var e=n.children,t=Object(r.useState)(m),o=Object(c.a)(t,2),i=o[0],u=o[1],f=Object(r.useState)(window.innerWidth),h=Object(c.a)(f,2),g=h[0],p=h[1];return Object(r.useEffect)((function(){var n=function(){return p(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[g]),a.a.createElement(s.Provider,{value:{toggleTheme:function(){u(i===m?d:m)},theme:i,width:g}},a.a.createElement(l.b,{theme:i},e))},h=s,g=t(12),p=t(5),b=t(7),v=t(4);function x(){var n=Object(v.a)(["\n  ul {\n    list-style: none;\n    display: flex;\n    margin-top: 2rem;\n    align-self: center;\n    width: fit-content;\n    display: flex;\n    justify-content: space-around;\n    color: ",";\n\n    li {\n      transition: color 0.2s;\n\n      a {\n        text-decoration: none;\n        color: ",";\n        &:hover {\n          color: ",";\n        }\n      }\n\n      + li {\n        margin-left: 1rem;\n      }\n    }\n  }\n"]);return x=function(){return n},n}var E=l.d.div(x(),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.secundary}));var w=function(){return a.a.createElement(E,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/gcrodrigues"},a.a.createElement(b.e,{size:25}))),a.a.createElement("li",null,a.a.createElement("a",{target:"_blank",href:"https://www.github.com/gcrodrigues"},a.a.createElement(b.c,{size:25}))),a.a.createElement("li",null,a.a.createElement("a",{target:"_blank",href:"https://api.whatsapp.com/send?phone=5513974080420"},a.a.createElement(b.i,{size:25})))))},y=t(21),k=t(15);function j(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 8rem;\n  padding: 0 2.5rem;\n  color: ",";\n"]);return j=function(){return n},n}function C(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  list-style: none;\n\n  @media (max-width: 770px) {\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  li {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    justify-content: center;\n  }\n\n  li:first-child {\n    margin-bottom: 2rem;\n\n    @media (max-width: 770px) {\n      margin-bottom: 0;\n    }\n  }\n\n  li:last-child {\n    margin-top: auto;\n    padding: 1rem 0;\n    cursor: pointer;\n    color: ",";\n    filter: brightness(100%);\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(80%);\n    }\n\n    @media (max-width: 770px) {\n      display: none;\n      /*       padding: 0;\n      margin-top: 0; */\n    }\n  }\n"]);return C=function(){return n},n}function O(){var n=Object(v.a)(["\n  position: fixed;\n  background-color: ",";\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  height: 8rem;\n  padding: 0 1.5rem;\n\n  @media (min-width: 770px) and (max-height: 450px) {\n    width: calc(8rem + 0.72rem);\n    overflow-y: scroll;\n\n    &::-webkit-scrollbar {\n      width: 0.72rem;\n    }\n\n    &::-webkit-scrollbar-track {\n      background: ",";\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: ",';\n    }\n  }\n\n  @media (min-width: 770px) {\n    width: 8rem;\n    height: 100%;\n    padding: 2rem 0;\n  }\n\n  h1 {\n    font-size: 1rem;\n    text-align: center;\n    font-family: "Montserrat", Arial, Helvetica, sans-serif;\n    letter-spacing: 0.2rem;\n    color: #fff;\n\n    span {\n      color: #fff;\n      font-size: 2.5rem;\n      font-family: "Balsamiq Sans", Arial, Helvetica, sans-serif;\n      font-weight: 100;\n    }\n  }\n']);return O=function(){return n},n}var z=l.d.nav(O(),(function(n){return n.theme.colors.navbar}),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.secundary})),S=l.d.ul(C(),(function(n){return n.theme.colors.icons})),B=Object(l.d)(g.c)(j(),(function(n){return n.theme.colors.icons})),_=function(){var n=Object(r.useContext)(h),e=n.toggleTheme,t=n.theme,o=n.width,i=Object(r.useContext)(l.a).colors;return a.a.createElement(a.a.Fragment,null,a.a.createElement(z,null,a.a.createElement(S,null,a.a.createElement("li",null,a.a.createElement("h1",null,a.a.createElement("span",null,"GC"),a.a.createElement("br",null),"Rodrigues")),a.a.createElement("li",{"data-for":"home","data-tip":!0},a.a.createElement(B,{exact:!0,to:"/",activeStyle:{color:i.secundary,backgroundColor:i.background}},a.a.createElement(b.d,{size:30}))),a.a.createElement(k.a,{id:"home",place:o<=770?"bottom":"right",border:!0,textColor:i.text,borderColor:i.secundary,backgroundColor:i.background,effect:"solid"},a.a.createElement("p",{style:{fontWeight:600,fontSize:14}},"Home")),a.a.createElement("li",{"data-for":"about","data-tip":!0},a.a.createElement(B,{to:"/about",activeStyle:{color:i.secundary,backgroundColor:i.background}},a.a.createElement(b.b,{size:30}))),a.a.createElement(k.a,{id:"about",place:o<=770?"bottom":"right",effect:"solid",border:!0,textColor:i.text,borderColor:i.secundary,backgroundColor:i.background},a.a.createElement("p",{style:{fontWeight:600,fontSize:14}},"About")),a.a.createElement("li",{"data-for":"portfolio","data-tip":!0},a.a.createElement(B,{to:"/portfolio",activeStyle:{color:i.secundary,backgroundColor:i.background}},a.a.createElement(y.b,{size:30}))),a.a.createElement(k.a,{id:"portfolio",place:o<=770?"bottom":"right",effect:"solid",border:!0,textColor:i.text,borderColor:i.secundary,backgroundColor:i.background},a.a.createElement("p",{style:{fontWeight:600,fontSize:14}},"Portfolio")),a.a.createElement("li",{"data-for":"contact","data-tip":!0},a.a.createElement(B,{to:"/contact",activeStyle:{color:i.secundary,backgroundColor:i.background}},a.a.createElement(y.a,{size:30}))),a.a.createElement(k.a,{id:"contact",place:o<=770?"bottom":"right",effect:"solid",border:!0,textColor:i.text,borderColor:i.secundary,backgroundColor:i.background},a.a.createElement("p",{style:{fontWeight:600,fontSize:14}},"Contact")),a.a.createElement("li",{onClick:e},"dark"===t.title?a.a.createElement(b.a,{size:30}):a.a.createElement(b.h,{size:30})))))};function D(){var n=Object(v.a)(["\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  justify-content: space-around;\n\n  height: 100%;\n\n  padding: 1rem 1.5rem;\n  border-bottom: ",";\n\n  border-left: ",";\n\n  border-right: ",";\n\n  border-radius: 0 0 0.5rem 0.5rem;\n\n  h2 {\n    font-size: 2.4rem;\n  }\n\n  p {\n    margin: 0.5rem 0;\n    font-size: 1.6rem;\n  }\n\n  div {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n\n    a {\n      width: 45%;\n      text-decoration: none;\n      color: ",";\n      padding: 0.8rem 0;\n      margin-top: 1rem;\n      border-radius: 0.5rem;\n      font-weight: 600;\n      background-color: ",";\n      transition: all 0.15s ease-out;\n      font-size: 1.6rem;\n\n      &:hover {\n        background-color: ",";\n      }\n\n      &:nth-child(2n) {\n        background-color: ",";\n        border: 0.1rem solid ",";\n        color: ",";\n      }\n\n      &:nth-child(2n):hover {\n        background-color: ",";\n      }\n    }\n  }\n"]);return D=function(){return n},n}function P(){var n=Object(v.a)(["\n  width: 100%;\n  max-width: 720px;\n\n  display: inline-flex;\n  flex-direction: column;\n\n  background: ",";\n  color: ",";\n\n  padding: 0;\n  border-radius: 0.5rem;\n\n  text-align: center;\n\n  img {\n    max-width: 100%;\n    border-radius: 0.5rem 0.5rem 0 0;\n  }\n"]);return P=function(){return n},n}var W=l.d.div(P(),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.text})),A=l.d.div(D(),(function(n){return"light"===n.theme.title?"1px solid #ccc":"none"}),(function(n){return"light"===n.theme.title?"1px solid #ccc":"none"}),(function(n){return"light"===n.theme.title?"1px solid #ccc":"none"}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secundary}),Object(u.a)(.1,"#9b1fff"),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.secundary}),(function(n){return n.theme.colors.secundary}),Object(u.b)(.02,"#2a2e35")),F=function(n){var e=n.name,r=n.url,o=n.homepage,i=n.description;return a.a.createElement(a.a.Fragment,null,a.a.createElement(W,null,a.a.createElement("img",{src:t(51),alt:"test"}),a.a.createElement(A,null,a.a.createElement("h2",null,e),a.a.createElement("p",null,i),a.a.createElement("div",null,a.a.createElement("a",{href:o},"Visitar site"),a.a.createElement("a",{href:r},"Visitar repo")))))},I=t(16),M=t.n(I),R=M.a.create({baseURL:"https://api.github.com/graphql",headers:{Authorization:"bearer ".concat("b015824201eaffcb7060ff53a6ca2c744f9340b4")}}),N=R;function q(){var n=Object(v.a)(["\n  padding: 3rem;\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n  grid-template-rows: repeat(2, 1fr);\n"]);return q=function(){return n},n}var H=l.d.div(q()),L=function(){var n=Object(r.useState)([]),e=Object(c.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)((function(){N.post("",{query:'\n  {\n    user(login: "gcrodrigues") {\n      pinnedItems(first: 6, types: REPOSITORY) {\n        nodes {\n          ... on Repository {\n            id\n            name\n            description\n            homepageUrl\n            url\n          }\n        }\n      }\n    }\n  }\n'}).then((function(n){var e=n.data.data.user.pinnedItems.nodes;o(e)}))}),[]),a.a.createElement(H,null,t.map((function(n){return a.a.createElement(F,{key:n.id,name:n.name,url:n.url,homepage:n.homepageUrl,description:n.description})})))};function U(){var n=Object(v.a)(["\n  width: calc(100% - 8rem);\n  height: 100%;\n  @media (max-width: 770px) {\n    width: 100%;\n    height: calc(100% - 8rem);\n  }\n"]);return U=function(){return n},n}function Y(){var n=Object(v.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  overflow: ",";\n\n  @media (max-width: 770px) {\n    align-items: flex-end;\n    justify-content: center;\n  }\n"]);return Y=function(){return n},n}var T=l.d.div(Y(),(function(n){return n.hidden?"hidden":"unset"})),Z=l.d.section(U());function G(){var n=Object(v.a)(["\n  mask-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cpath d='M394.5 170.1c44.4 11.4 108.2 9.8 143.2 36.1 35 26.3 41.2 80.6 23.8 124.3-17.3 43.8-58.2 77-92.6 114.8-34.4 37.8-62.3 80.1-94.9 75.2-32.5-4.9-69.6-57.1-95.9-90.2-26.3-33.2-41.9-47.4-65.3-61.8-23.4-14.4-54.7-29-78.2-57.2-23.5-28.2-39.1-70-33-109.6 6.1-39.7 33.8-77.1 70.5-92 36.7-14.9 82.3-7.3 117.6 8.7s60.4 40.3 104.8 51.7z'/%3E%3C/svg%3E\");\n  mask-size: 100% 100%;\n  mask-repeat: no-repeat;\n  background: linear-gradient(90deg, #3f5efb, #fc466b) !important;\n  position: absolute;\n  height: 100% !important;\n  width: 100% !important;\n  z-index: -1;\n  transform: scale(2);\n  right: -15rem;\n  bottom: 0;\n"]);return G=function(){return n},n}function J(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 4rem;\n  padding: 0 3rem;\n  border: 0.1rem solid #aaa;\n  border-radius: 5rem;\n  text-decoration: none;\n  color: ",";\n  font-size: 1.6rem;\n  margin-top: 1.5rem;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: rgba(75, 75, 75, 0.1);\n  }\n\n  svg {\n    margin-left: 1rem;\n    color: ",";\n  }\n"]);return J=function(){return n},n}function V(){var n=Object(v.a)(["\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 1020px) {\n    display: none;\n  }\n\n  @media (max-width: 1300px) {\n    width: 40rem;\n\n    height: 40rem;\n    overflow: hidden;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: calc(40rem / 2);\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n"]);return V=function(){return n},n}function Q(){var n=Object(v.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  width: 100%;\n  max-width: 500px;\n  min-width: 300px;\n  font-family: "Nunito", sans-serif;\n  font-size: 1.6rem;\n\n  h2 {\n    background-color: #ffc734;\n    border-radius: 0.3rem;\n    padding: 0 1rem;\n    animation: '," 2s infinite;\n    margin-bottom: 1rem;\n  }\n\n  h1 {\n    font-size: 4.8rem;\n\n    @media (max-width: 480px) {\n      font-size: 3.5rem;\n    }\n  }\n\n  p {\n    font-size: 1.9rem;\n    ",";\n    margin-top: 1rem;\n  }\n"]);return Q=function(){return n},n}function X(){var n=Object(v.a)(["\n  0% {\n    box-shadow: 0 0 0 0 rgba(255,199,52.5);\n  }\n  70% {\n      box-shadow: 0 0 0 1rem rgba(204,169,44, 0);\n  }\n  100% {\n      box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n  }\n"]);return X=function(){return n},n}function K(){var n=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n\n  position: relative;\n  padding: 0 4rem;\n\n  img {\n    height: 100%;\n  }\n"]);return K=function(){return n},n}var $=l.d.div(K()),nn=Object(l.e)(X()),en=l.d.div(Q(),nn,(function(n){return n.theme.colors.text})),tn=l.d.div(V()),rn=Object(l.d)(g.b)(J(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.text})),an=l.d.div(G()),on=t(37),cn=t.n(on);var ln=function(){return a.a.createElement(T,{hidden:!0},a.a.createElement(_,null),a.a.createElement(Z,null,a.a.createElement($,null,a.a.createElement(en,null,a.a.createElement("h2",null,"Website under development!"),a.a.createElement("h1",null,"I'm Gustavo Carvalho ",a.a.createElement("br",null),"and I create creative websites."),a.a.createElement("p",null,"Front-end Developer"),a.a.createElement(rn,{to:"/about"},"About me ",a.a.createElement(b.f,{size:20}))),a.a.createElement(tn,null,a.a.createElement("img",{src:cn.a,alt:"Selfie"})),a.a.createElement(an,null))))};function un(){var n=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  > div {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    background: ",";\n    padding: 2rem;\n    border-radius: 0.5rem;\n\n    > a {\n      padding: 1rem 2.5rem;\n      font-size: 1.6rem;\n      color: white;\n      text-decoration: none;\n      background-color: ",";\n      margin: 1rem 0;\n    }\n\n    h2 {\n      font-size: 2.4rem;\n    }\n\n    p {\n      font-size: 1.5rem;\n    }\n\n    ul {\n      a {\n        color: ",";\n        margin-top: 0;\n      }\n    }\n  }\n"]);return un=function(){return n},n}var mn=l.d.div(un(),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.secundary}),(function(n){return n.theme.colors.text}));var dn=function(){return a.a.createElement(T,null,a.a.createElement(_,null),a.a.createElement(Z,null,a.a.createElement(mn,null,a.a.createElement("div",null,a.a.createElement("h2",null,"Page under development!"),a.a.createElement("a",{target:"_blank",href:"https://drive.google.com/file/d/1f4wL263wM4zzeECxngxDZUD4X1PYP01P/view?usp=sharing"},"Download my resume"),a.a.createElement("p",null,"Check my social medias"),a.a.createElement(w,null)))))};var sn=function(){return a.a.createElement(T,null,a.a.createElement(_,null),a.a.createElement(Z,null,a.a.createElement(L,null)))};function fn(){var n=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  position: absolute;\n\n  div {\n    width: 100%;\n    height: 100%;\n    position: relative;\n\n    svg:first-child {\n      position: absolute;\n      left: -45rem;\n      top: -15rem;\n\n      @media (max-width: 500px) {\n        bottom: -15rem;\n        top: auto;\n      }\n    }\n    svg:last-child {\n      position: absolute;\n      bottom: -10rem;\n      right: -100rem;\n    }\n  }\n"]);return fn=function(){return n},n}function hn(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-top: 1.5rem;\n  padding: 1rem;\n  font-size: 1.6rem;\n  color: #fff;\n  background-color: ",";\n  border-radius: 0.3rem;\n  border: 0;\n  text-transform: uppercase;\n  font-weight: 700;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  svg {\n    margin-left: 0.5rem;\n  }\n"]);return hn=function(){return n},n}function gn(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n\n  width: 40%;\n  min-width: 322px;\n  max-width: 400px;\n\n  padding: 2rem 3rem;\n  border-radius: 0.4rem;\n  border: ",";\n\n  background-color: ",";\n\n  h2 {\n    font-weight: 500;\n    text-align: center;\n    margin: 0 0 1rem;\n    font-size: 2.4rem;\n  }\n  p {\n    text-align: center;\n    font-size: 1.6rem;\n  }\n\n  input {\n    height: 4rem;\n    padding: 2rem 1rem;\n    border-radius: 0.3rem;\n    border: 0.2rem solid ",";\n    background-color: ",";\n    color: #f6f6f6;\n    margin-top: 1.5rem;\n    transition: border 0.3s ease;\n    font-size: 1.6rem;\n    transition: all 0.2s;\n\n    &:focus {\n      border-color: ",";\n    }\n  }\n\n  textarea {\n    padding: 1rem;\n    border-radius: 0.3rem;\n    border: 0.2rem solid ",";\n    background-color: ",";\n    color: #f6f6f6;\n    margin-top: 1.5rem;\n    font-size: 1.6rem;\n    resize: initial;\n    transition: all 0.2s;\n\n    &:focus {\n      border-color: ",";\n    }\n  }\n"]);return gn=function(){return n},n}function pn(){var n=Object(v.a)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return pn=function(){return n},n}var bn=l.d.div(pn()),vn=l.d.form(gn(),(function(n){return"light"===n.theme.title?"1px solid #eee":"none"}),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.secundary}),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.secundary})),xn=l.d.button(hn(),(function(n){return n.theme.colors.secundary}),(function(n){return"".concat(Object(u.a)(.05,n.theme.colors.secundary))})),En=l.d.div(fn());var wn=function(){var n=Object(r.useState)(""),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(""),u=Object(c.a)(i,2),m=u[0],d=u[1],s=Object(r.useState)(""),f=Object(c.a)(s,2),h=f[0],g=f[1],p=Object(r.useContext)(l.a).colors;return a.a.createElement(T,{hidden:!0},a.a.createElement(_,null),a.a.createElement(Z,null,a.a.createElement(bn,null,a.a.createElement(En,null,a.a.createElement("div",null,a.a.createElement("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fill:p.primary,d:"M20.2,-30.5C28.4,-21.9,38.8,-18.9,49.7,-10.3C60.5,-1.7,71.8,12.7,72.8,28C73.8,43.3,64.5,59.6,50.6,61.8C36.8,64,18.4,52,4.4,46C-9.7,40.1,-19.4,40,-23.8,34.8C-28.2,29.5,-27.4,19.1,-35.9,8.1C-44.4,-2.9,-62.2,-14.4,-64.3,-24.9C-66.4,-35.4,-52.9,-44.8,-39.6,-51.8C-26.2,-58.7,-13.1,-63.3,-3.6,-58.4C6,-53.5,12,-39.1,20.2,-30.5Z",transform:"translate(100 100)"})),a.a.createElement("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fill:p.secundary,d:"M24.2,-35.4C29.8,-29.2,31.8,-20.1,31.9,-12.2C32,-4.3,30.1,2.5,30.3,12.3C30.5,22.1,32.7,35.1,28,45.2C23.3,55.3,11.6,62.6,2.9,58.7C-5.9,54.7,-11.8,39.5,-23.5,31.7C-35.3,23.9,-52.9,23.4,-59.8,16.1C-66.8,8.8,-63.1,-5.2,-55.5,-14.8C-48,-24.4,-36.5,-29.4,-26.6,-34.3C-16.7,-39.2,-8.3,-43.8,0.5,-44.5C9.3,-45.1,18.5,-41.7,24.2,-35.4Z",transform:"translate(100 100)"})))),a.a.createElement(vn,{onSubmit:function(n){return function(n){n.preventDefault();var e=new FormData;e.append("name",t),e.append("email",m),e.append("message",h),M.a.post("https://formspree.io/meqrnjdk",e).then((function(n){return console.log("Success")})).catch((function(n){return console.log("Failure")}))}(n)}},a.a.createElement("h2",null,"Contact me right now!"),a.a.createElement("p",null,"Send me a message so we can talk!"),a.a.createElement("input",{type:"text",name:"nome",value:t,onChange:function(n){return o(n.target.value)},placeholder:"Your Name"}),a.a.createElement("input",{type:"email",name:"_replyto",value:m,onChange:function(n){return d(n.target.value)},placeholder:"Your email"}),a.a.createElement("textarea",{name:"message",cols:"50",rows:"5",value:h,onChange:function(n){return g(n.target.value)},placeholder:"Message"}),a.a.createElement(xn,null,"SEND ",a.a.createElement(b.g,{size:20}))),a.a.createElement(w,null))))},yn=t(38),kn=t.n(yn),jn=t(39),Cn=t.n(jn),On=t(40),zn=t.n(On);var Sn=function(){var n=Object(r.useContext)(l.a).title;return a.a.createElement("div",{className:zn.a.container},a.a.createElement("img",{src:"dark"===n?kn.a:Cn.a,alt:"404"}),a.a.createElement("h1",null,"Sorry, page not found :("),a.a.createElement(g.b,{to:"/"},"Back to home page"))},Bn=function(){return a.a.createElement(g.a,null,a.a.createElement(p.c,null,a.a.createElement(p.a,{exact:!0,path:"/",component:ln}),a.a.createElement(p.a,{path:"/about",component:dn}),a.a.createElement(p.a,{path:"/portfolio",component:sn}),a.a.createElement(p.a,{path:"/contact",component:wn}),a.a.createElement(p.a,{path:"/",component:Sn})))};function _n(){var n=Object(v.a)(["\n  :root {\n    font-size: 55%;\n  }\n\n  *{\n    padding: 0;\n    margin: 0;\n    outline: 0;\n    box-sizing:border-box;\n  }\n\n  body{\n    background: ",";\n    color: ",';\n    font-family: "Open Sans", sans-serif; \n  }\n\n  body::-webkit-scrollbar {\n    width: .72rem;\n  }\n  \n  body::-webkit-scrollbar-track {\n    background: ',";\n  }\n  \n  body::-webkit-scrollbar-thumb {\n    background:",';\n  }\n\n\n  #root{\n    min-height: 650px;\n  }\n\n  html, body, #root {\n    height: 100%;\n    width: 100%\n  }\n\n  input, button, textarea{\n    font-family: "Roboto", Arial, Helvetica, sans-serif;\n  }\n\n  button{\n    cursor:pointer;\n  }\n\n  @media (min-width: 700px) {\n    :root{\n      font-size: 62.5%;\n\n    }\n  }\n']);return _n=function(){return n},n}var Dn=Object(l.c)(_n(),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.complement}),(function(n){return n.theme.colors.secundary})),Pn=function(){return a.a.createElement(f,null,a.a.createElement(Bn,null),a.a.createElement(Dn,null))};i.a.render(a.a.createElement(Pn,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8241af92.chunk.js.map