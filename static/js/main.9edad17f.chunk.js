(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{13:function(e,t,a){},140:function(e,t,a){e.exports=a.p+"static/media/left-arrow.34a4f31c.svg"},141:function(e,t,a){e.exports=a.p+"static/media/right-arrow.5e5b72cc.svg"},150:function(e,t,a){e.exports=a.p+"static/media/truck.dc7c3322.gif"},151:function(e,t,a){e.exports=a.p+"static/media/trash.8e52305f.gif"},152:function(e,t,a){e.exports=a.p+"static/media/gold.6b018cdc.gif"},153:function(e){e.exports=JSON.parse('[{"id":1,"name":"Staples","subname":"Brand-name electronics & office supplies","phone":"(312) 660-9501","directions":"https://www.google.com/maps/dir//Staples+Print+%26+Marketing+Services,+1130+S+Canal+St,+Chicago,+IL+60607/@41.8869967,-87.727418,12z/data=!4m16!1m6!3m5!1s0x0:0x1422b0387e340b0f!2sStaples+Print+%26+Marketing+Services!8m2!3d41.8678351!4d-87.6405358!4m8!1m0!1m5!1m1!1s0x880e2ced034c9653:0x1422b0387e340b0f!2m2!1d-87.6405424!2d41.8678281!3e3","location":[41.867883,-87.64024]},{"id":2,"name":"Staples","subname":"Brand-name electronics & office supplies","phone":"(773) 769-0536","directions":"https://www.google.com/maps/dir//Staples,+4610+N+Clark+St,+Chicago,+IL+60640/@41.910178,-87.7897563,12z/data=!4m16!1m6!3m5!1s0x0:0xa15d0543da8a04c3!2sStaples!8m2!3d41.9660159!4d-87.6674867!4m8!1m0!1m5!1m1!1s0x880fd28d6148cc9b:0xa15d0543da8a04c3!2m2!1d-87.667492!2d41.9660219!3e3","location":[41.96577,-87.6669]},{"id":3,"name":"Staples","subname":"Brand-name electronics & office supplies","phone":"(708) 457-8438","directions":"https://www.google.com/maps/dir//Staples,+7000+W+Forest+Preserve+Dr,+Norridge,+IL+60706/@41.8959277,-87.8226711,12z/data=!4m16!1m6!3m5!1s0x0:0x1c42681874a20395!2sStaples!8m2!3d41.9562668!4d-87.802949!4m8!1m0!1m5!1m1!1s0x880fcbb8e4be84b3:0x1c42681874a20395!2m2!1d-87.802959!2d41.956269!3e3","location":[41.95592,-87.80322]},{"id":4,"name":"Staples","subname":"Brand-name electronics & office supplies","phone":"(312) 641-1213","directions":"https://www.google.com/maps/dir//Staples,+111+N+Wabash+Ave,+Chicago,+IL+60602/@41.8833876,-87.6960291,12z/data=!4m16!1m6!3m5!1s0x880e2ca598944d19:0x6404e8e22e50cb5a!2sStaples!8m2!3d41.8833836!4d-87.6259913!4m8!1m0!1m5!1m1!1s0x880e2ca598944d19:0x6404e8e22e50cb5a!2m2!1d-87.6259913!2d41.8833836!3e3","location":[41.88348,-87.62561]}]')},155:function(e,t,a){e.exports=a.p+"static/media/sun-solid.6e1d81ac.svg"},156:function(e,t,a){e.exports=a.p+"static/media/moon-regular.2eae935f.svg"},157:function(e,t,a){e.exports=a.p+"static/media/e-stewards.dfd5258e.png"},158:function(e){e.exports=JSON.parse('{"homepage":"https://dserapio.github.io/websitecalc","name":"website","version":"0.1.0","private":true,"dependencies":{"@emotion/core":"^10.0.28","@emotion/styled":"^10.0.27","@nivo/pie":"^0.62.0","@react-google-maps/api":"^1.9.3","@testing-library/jest-dom":"^5.9.0","@testing-library/react":"^10.0.4","@testing-library/user-event":"^10.4.0","react":"^16.13.1","react-device-detect":"^1.12.1","react-dom":"^16.13.1","react-router-dom":"^5.2.0","react-scripts":"3.4.1","react-swipeable":"^5.5.1","react-transition-group":"^4.4.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","deploy":"gh-pages -d build","predeploy":"npm run build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^3.0.0"}}')},164:function(e,t,a){e.exports=a(300)},299:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),c=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(3),o=a(67),s=a(41),u=a(9),m={name:"light",main:"white",mainAlt:"#f3f0ed",off:"black",offAlt:"#909090"},d={name:"dark",main:"#2b2a2a",mainAlt:"#36383d",off:"lightgray",offAlt:"#909090"},f=function(e){switch(e.name){case"light":return d;case"dark":return m;default:throw new Error}},b=r.a.createContext(m),h=function(){return.9*window.innerWidth},p=function(e){return window.innerWidth-e.clientWidth},v=function(e,t){switch(t.type){case"open":return{hide:!1,area:p(t.menu)};case"close":return{hide:!0,area:h()};case"swap":return{hide:!e.hide,area:e.hide?h():p(t.menu)};default:throw new Error}},g=function(e){return{hide:e,area:h()}},E=r.a.createContext(g(!1)),w=a(17),O=a(4);function j(){var e=Object(w.a)(["\n    .container {\n      display: inline-block;\n      cursor: pointer;\n    }\n    \n    .bar1, .bar2, .bar3 {\n      width: 5vh;\n      height: 0.6vh;\n      background-color: ",";\n      margin: 0.75vh 1.35vh;\n      transition: 0.4s;\n    }\n    \n    /* Rotate first bar */\n    .bar1.active {\n      transform: rotate(-45deg) translate(-1.3vh, 1.15vh) ;\n    }\n    \n    /* Fade out the second bar */\n    .bar2.active {\n      opacity: 0;\n    }\n    \n    /* Rotate last bar */\n    .bar3.active {\n      transform: rotate(45deg) translate(-0.6vh, -0.55vh) ;\n    }\n  "]);return j=function(){return e},e}function y(e){var t=e.active,a=e.onClick,n=e.color,r=Object(O.a)(j(),n);return Object(O.b)("div",{css:r,className:"container",onClick:a},["bar1","bar2","bar3"].map((function(e,a){return Object(O.b)("div",{key:e,className:"".concat(e," ").concat(t?"active":"")})})))}var k=a(23),x=a(6),C=a(7);a(13);function N(){var e=Object(w.a)(["\n      transform: translateX(-","px);\n      transition: transform ease-out ","s;\n      height: 100%;\n      width: ","px;\n      display: flex;\n    "]);return N=function(){return e},e}var S=function(e){return Object(O.b)("div",{css:Object(O.a)(N(),e.translate,e.transition,e.width)},e.children)};function L(){var e=Object(w.a)(["\n      height: 100%;\n      width: ","px;\n      background-image: url('","');\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n    "]);return L=function(){return e},e}var A=function(e){var t=e.content,a=e.width;return Object(O.b)("div",{css:Object(O.a)(L(),a,t)})},M=a(140),R=a.n(M),P=a(141),T=a.n(P);function G(){var e=Object(w.a)(["\n      display: flex;\n      position: absolute;\n      top: 50%;\n      ",";\n      height: 50px;\n      width: 50px;\n      justify-content: center;\n      background: white;\n      border-radius: 50%;\n      cursor: pointer;\n      align-items: center;\n      transition: transform ease-in 0.1s;\n\n      &:hover {\n        transform: scale(1.1);\n      }\n\n      img {\n        transform: translateX(","px);\n\n        &:focus {\n          outline: 0;\n        }\n      }\n    "]);return G=function(){return e},e}var F=function(e){var t=e.direction,a=e.handleClick;return Object(O.b)("div",{onClick:a,css:Object(O.a)(G(),"right"===t?"right: 25px":"left: 25px","left"===t?"-2":"2")},"right"===t?Object(O.b)("img",{src:T.a,alt:"right-arrow"}):Object(O.b)("img",{src:R.a,alt:"left-arrow"}))};function B(){var e=Object(w.a)(["\n      position: absolute;\n      bottom: 25px;\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    "]);return B=function(){return e},e}function D(){var e=Object(w.a)(["\n      padding: 10px;\n      margin-right: 5px;\n      border-radius: 50%;\n      background: ",";\n    "]);return D=function(){return e},e}var W=function(e){var t=e.active;return Object(O.b)("span",{css:Object(O.a)(D(),t?"yellowgreen":"silver")})},z=function(e){var t=e.slides,a=e.activeSlide;return Object(O.b)("div",{css:Object(O.a)(B())},t.map((function(e,t){return Object(O.b)(W,{key:e,active:a===t})})))};function H(){var e=Object(w.a)(["\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n"]);return H=function(){return e},e}var I=function(){return window.innerWidth},_=Object(O.a)(H()),V=function(e){var t=e.autoPlay,a=e.slides,r=a[0],i=a[1],c=a[a.length-1],s=Object(n.useState)({activeSlide:0,translate:I(),transition:.45,_slides:[c,r,i],updating:!1,signal:!1}),m=Object(l.a)(s,2),d=m[0],f=m[1],b=d.activeSlide,h=d.translate,p=d._slides,v=d.transition,g=d.updating,w=d.signal,j=Object(n.useRef)(),y=Object(n.useRef)(),k=Object(n.useRef)(),C=function(){f(Object(x.a)({},d,{translate:I(),transition:0}))},N=function(){var e=[];e=b===a.length-1?[a[a.length-2],c,r]:0===b?[c,r,i]:a.slice(b-1,b+2),f(Object(x.a)({},d,{_slides:e,transition:0,translate:I()}))},L=function(){g||f(Object(x.a)({},d,{translate:h+I(),activeSlide:b===a.length-1?0:b+1,updating:!0}))},M=function(){g||f(Object(x.a)({},d,{translate:0,activeSlide:0===b?a.length-1:b-1,updating:!0}))};Object(n.useEffect)((function(){j.current=L,y.current=N,k.current=C})),Object(n.useEffect)((function(){var e=!0,a=function(){e&&j.current()},n=t?setInterval(a,1e3*t):null,r=window.addEventListener("transitionend",(function(r){e&&r.target.className.includes("SliderContent")&&(y.current(),null!==n&&(clearInterval(n),n=setInterval(a,1e3*t)))})),i=window.addEventListener("resize",(function(){e&&k.current()}));return f((function(e){return Object(x.a)({},e,{signal:!0})})),function(){e=!1,window.removeEventListener("transitionend",r),window.removeEventListener("resize",i),t&&clearInterval(n)}}),[t]),Object(n.useEffect)((function(){f((function(e){return 0===e.transition?Object(x.a)({},e,{transition:.45,updating:!1}):e}))}),[v]),Object(n.useEffect)((function(){w&&j.current()}),[w]);var R=Object(n.useContext)(E),P=Object(o.a)({onSwipedLeft:function(e){e.initial[0]<R.area&&L()},onSwipedRight:function(){R.hide&&M()}});return Object(O.b)("div",Object.assign({},P,{css:_}),Object(O.b)(S,{translate:h,transition:v,width:I()*p.length},p.map((function(e,t){return Object(O.b)(A,{width:I(),key:e+t,content:e})}))),!u.isMobile&&Object(O.b)("div",null,Object(O.b)(F,{direction:"left",handleClick:M}),Object(O.b)(F,{direction:"right",handleClick:L})),Object(O.b)(z,{slides:a,activeSlide:b}))};var Y=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.BrowserView,null,r.a.createElement("div",{className:"content"},t)),r.a.createElement(u.MobileView,null,r.a.createElement("div",{className:"content mobile"},t)))},J=function(){return r.a.createElement(Y,null,r.a.createElement("section",{className:"main"},r.a.createElement("h1",null,"Information"),r.a.createElement("section",null,r.a.createElement("h2",null,"General Information"),r.a.createElement("p",null,"80% of our collective e-waste is wasted by being left in landfills. Electronics are filled with recoverable resources such as copper, gold, platinum, and steel among other metals. However, electronics are packed with materials that are toxic to us and the environment. Electronics are filled with lead, mercury, cadmium, and arsenic. In 2018, 1.5 billion cell phones were manufactured. On average, Americans tend to keep their cell phones for about 34 months. While the amount of materials is small for individual electronics they add up considering that cell phones alone are in the billions. These materials are left in landfills to only plague the environment and the people around.")),r.a.createElement("section",null,r.a.createElement("h2",null,"Developing Countries"),r.a.createElement("p",null,"Most electronics are thrown away because they are broken and people aren\u2019t sure how to fix them. These electronics are being thrown away at such a high rate there aren't enough recyclers to handle all the e-waste. This leads to exporting all the e-waste we can\u2019t handle to developing countries. People living in these developing countries have to go through fields of toxic e-waste looking for recoverable materials. The people who live in these developing countries have to deal with all the health risks that arise from our e-waste.")),r.a.createElement("section",null,r.a.createElement("h2",null,"Refurbishment"),r.a.createElement("p",null,"Much of our generated e-waste is because we perceive these electronics as broken. A good amount of e-waste that is thrown away can be fixed. There are many places online that can show you how to fix your electronics. ",r.a.createElement("a",{href:"https://www.ifixit.com/Right-to-Repair/E-waste#"},"ifixit")," is one example of showing you how to fix your broken electronics. By doing this you can help the environment and others by not adding to the vast ocean of e-waste that has accumulated over the years"))))},U=a(51),X=a(35),K=a(308),Q=a(307),$=function(e){var t=e.children,a=Object(X.a)(e,["children"]),i=Object(n.useRef)(null);return r.a.createElement(K.a,Object.assign({nodeRef:i,timeout:350,classNames:"fade",unmountOnExit:!0},a),r.a.createElement("div",{ref:i,className:"rel"},t))},q=function(e){var t=e.divClass,a=e.children,i=Object(X.a)(e,["divClass","children"]),c=Object(n.useRef)(null);return r.a.createElement(K.a,Object.assign({nodeRef:c,timeout:250,unmountOnExit:!0},i),r.a.createElement("div",{ref:c,className:t},a))},Z=function(e){var t=e.children,a=Object(X.a)(e,["children"]),i=Object(n.useRef)(null);return r.a.createElement(Q.a,null,r.a.createElement(K.a,Object.assign({key:t,nodeRef:i,timeout:200},a),r.a.createElement("span",{ref:i},t)))},ee={kg:1,lbs:2.20462},te=function(e){return{name:e,convert:ee[e]}};var ae=function(e){var t=e.name,a=t.indexOf("-");return[t.substring(0,-1===a?t.length:a),t.substring(a+1,t.length)]},ne=function(e){e.cancelable&&e.preventDefault()};function re(e){var t=e.inputs,a=e.setInputs,i=e.toResults,c=e.weight,o=e.swapWeight,s=e.toAbout,u=e.unit,m=e.tolbs,d=e.tokg,f=Object(n.useState)(!0),h=Object(l.a)(f,2),p=h[0],v=h[1],g=Object(n.useState)(!0),E=Object(l.a)(g,2),w=E[0],O=E[1],j=Object(n.useState)(!1),y=Object(l.a)(j,2),k=y[0],x=y[1],C=Object(n.useState)(""),N=Object(l.a)(C,2),S=N[0],L=N[1],A=Object(n.useContext)(b),M=function(e){var n=e.target;window.addEventListener("resize",ne),v(!0);var r=ae(n),i=Object(l.a)(r,2),c=i[0],o=i[1],s=t[c][o];s.value&&s.default&&(L(s.value),a({type:o,field:c,value:""}))},R=function(e){var t=e.target;if(window.removeEventListener("resize",ne),S&&!t.value){var n=ae(t),r=Object(l.a)(n,2),i=r[0],c=r[1];a({type:c,field:i,value:S,default:!0})}L("")},P=function(e){var t=e.target;if(+t.value>=0){var n=ae(t),r=Object(l.a)(n,2),i=r[0],c=r[1];("weight"===c||function(e){var t=+e;return Number.isInteger(t)&&t>=0}(t.value))&&a({type:c,field:i,value:t.value})}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"sidebar"},r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{type:"button",onClick:s},"About"),r.a.createElement("button",{className:w?" active":"",type:"button",onClick:function(){v(!0),O((function(e){return!e}))}},"Set Avg. Weight"),r.a.createElement("button",{className:k?" active":"",type:"button",onClick:function(){v(!0),x((function(e){return!e}))}},"# of Containers")),r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{className:c?" active":"",type:"button",onClick:o},"By Total Weight"),r.a.createElement("button",{className:"kg"===u.name?"active":"",disabled:!c&&!w,type:"button",onClick:d},"kg"),r.a.createElement("button",{className:"lbs"===u.name?"active":"",disabled:!c&&!w,type:"button",onClick:m},"lbs"))),r.a.createElement("section",{className:"main"},r.a.createElement("h1",null,"Find Out Material Yields"),r.a.createElement("p",null,"Enter in any electronic, and we'll breakdown what it's made of."),r.a.createElement("p",null,'Click the "About" button for more help on how to use the calculator.'),r.a.createElement("form",{id:"calc-input",onSubmit:function(e){e.preventDefault();var a=ke.every((function(e){var a=t[e].amount;return!(a&&a>0)})),n=ke.reduce((function(e,a){var n=t[a].weight.value;return e&&Boolean(n)&&n>0}),!0);a||!n?v(!1):i()},noValidate:!0},ke.map((function(e,a){return r.a.createElement(ie,{key:e+a,name:e,value:t[e],weight:c,avg:w,boxes:k,theme:A,unit:u.name,onChange:P,onFocus:M,onBlur:R})}))),r.a.createElement("div",{className:"submit"},r.a.createElement("div",{className:"buttons"},r.a.createElement("input",{className:"button",type:"submit",form:"calc-input",value:"Calculate"}),r.a.createElement("input",{className:"button",type:"button",onClick:function(){v(!0),a({type:"reset",value:u.convert})},value:"Reset"})),!p&&r.a.createElement("span",{className:"error"},'Require at least one "Total" field and all "Average Weight" fields not zero'))))}var ie=function(e){var t=e.name,a=e.value,n=e.unit,i=e.weight,c=e.avg,l=e.boxes,o=Object(X.a)(e,["name","value","unit","weight","avg","boxes"]),s=a.amount,u=a.weight.value,m=a.boxes.value;return r.a.createElement("div",{className:"fields"},r.a.createElement(ce,Object.assign({name:"".concat(t,"-amount"),value:s,show:!0},o),"Total ",function(e){var t=e[e.length-1];return e.concat("s"===t||")"===t?"":"s")}(t)," "," ",r.a.createElement(Z,{classNames:"fade"},i&&"(".concat(n,")"))),r.a.createElement("div",{className:"subfields"},r.a.createElement(ce,Object.assign({name:"".concat(t,"-weight"),value:u,show:c,subfield:!0},o),"Average Weight ",r.a.createElement(Z,{classNames:"fade"},"(",n,")")),r.a.createElement(ce,Object.assign({name:"".concat(t,"-boxes"),value:m,show:l,subfield:!0},o),"Numbers Per Container")))},ce=function(e){var t=e.show,a=e.name,n=e.subfield,i=e.theme,c=e.children,l=Object(X.a)(e,["show","name","subfield","theme","children"]);return r.a.createElement(q,{key:a,in:t,classNames:"fade",divClass:"text-container ".concat(n?"subfield":"")},r.a.createElement("label",null,c,r.a.createElement("input",Object.assign({type:"tel",className:"textfield",name:a},l,{style:{borderColor:i.off}}))))},le=a(91),oe=a.n(le),se=a(142),ue=a(159),me=a(34),de=a(150),fe=a.n(de),be=a(151),he=a.n(be),pe=a(152),ve=a.n(pe),ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return e.toLocaleString(void 0,{maximumFractionDigits:t})},Ee=function(){var e=Object(se.a)(oe.a.mark((function e(){var t,a,n,r,i;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.kitco.com/gold-price-today-usa/",e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://www.kitco.com/gold-price-today-usa/").then((function(e){return e.text()}));case 3:return t=e.sent,a=new DOMParser,n=a.parseFromString(t,"text/html"),r=Object(U.a)(n.getElementsByTagName("table")).filter((function(e){return e.tBodies.item(0).innerText.includes("Gold Spot Price")}))[0],i=Object(U.a)(r.tBodies.item(0).rows).filter((function(e){return e.cells.item(0).innerText.includes("kilo")}))[0].cells.item(1).innerText,console.log("got price ".concat(i)),e.abrupt("return",parseFloat(i.replace(",","")));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){return{width:u.isMobile?.85*window.innerWidth:.2*window.innerWidth+200,height:.4*window.innerHeight}};function Oe(e){var t=e.unit,a=e.tolbs,i=e.tokg,c=e.toAbout,o=e.toBack,s=e.values,m=Object(n.useState)({price:55006.71,default:!0}),d=Object(l.a)(m,2),f=d[0],h=d[1],p=Object(n.useState)(we),v=Object(l.a)(p,2),g=v[0],E=v[1],w=Object(n.useContext)(b);Object(n.useEffect)((function(){f.default&&Ee().then((function(e){return h((function(t){return Object(x.a)({},t,{price:e})}))})).catch(console.log).finally((function(){return h((function(e){return Object(x.a)({},e,{default:!1})}))}))}),[f.default]),Object(n.useEffect)((function(){var e=function(){return E(we)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[E]);var O=["#444444","#FFC300","#FF5733","#C70039","#900C3F","#1A08FF","#83FF0C","#000000","#00ECFF","#201015","#581845"],j=Object.entries(s).filter((function(e){var t=Object(l.a)(e,2),a=t[0];t[1];return!xe.includes(a)})).map((function(e,a){var n=Object(l.a)(e,2),r=n[0];return{id:r,label:r,value:n[1]*t.convert,color:O[a]}})),y=Object(l.a)(xe,2),k=y[0],C=y[1],N=s[C]/me.trucks,S=s[C]/me.divert,L=s[k]/me.co2LANY;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"sidebar"},r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{type:"button",onClick:c},"About"),r.a.createElement("button",{className:"kg"===t.name?"active":"",type:"button",onClick:i},"kg"),r.a.createElement("button",{className:"lbs"===t.name?"active":"",type:"button",onClick:a},"lbs"))),r.a.createElement("section",{className:"main"},r.a.createElement("h1",null,"Total Material Yields"),r.a.createElement("div",{className:"outputs"},r.a.createElement("section",null,r.a.createElement("h2",null,"By the Numbers"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"output"},"Material"),r.a.createElement("th",{className:"output"},"Amount Yield (",t.name,")"))),r.a.createElement("tbody",null,Object.entries(s).map((function(e,a){var n=Object(l.a)(e,2),i=n[0],c=n[1];return r.a.createElement("tr",{key:i+a,style:{backgroundColor:a%2===0?w.mainAlt:w.main}},r.a.createElement("td",{className:"output"},i," "),r.a.createElement("td",{className:"output-value"},ge(c*t.convert)," ",t.name," "))}))))),r.a.createElement("div",{className:"infos"},N>1&&r.a.createElement("section",{className:"info-stat"},r.a.createElement("img",{alt:"truck-gif",src:fe.a}),r.a.createElement("p",null,r.a.createElement("span",{className:"show-num"},ge(s[C])," ",t.name)," is enough e-waste to fill",r.a.createElement("span",{className:"show-num"}," ",ge(N,2)," semi-trucks!"))),r.a.createElement("section",{className:"info-stat"},r.a.createElement("img",{alt:"factory",src:he.a}),r.a.createElement("p",null,"Diverts ",r.a.createElement("span",{className:"show-num"},ge(S,0)," ",t.name)," "," ","of valuable and toxic materials from landfills!")),r.a.createElement("section",{className:"info-stat"},r.a.createElement("img",{alt:"driving",src:"https://acegif.com/wp-content/gifs/car-driving-7.gif"}),r.a.createElement("p",null,"The greenhouse gas emissions is as much gas used in "," ",r.a.createElement("span",{className:"show-num"},ge(L,0))," car trips between New York and Los Angeles!")),r.a.createElement("section",{className:"info-stat"},r.a.createElement("img",{alt:"gold-bars",src:ve.a}),r.a.createElement("p",null,"The total gold currently worth around "," ",r.a.createElement("span",{className:"show-num"},"$",ge(s.Gold*f.price,2))))),r.a.createElement("section",null,r.a.createElement("h2",null,"Output Material Breakdown"),r.a.createElement(ue.a,{data:j,margin:u.isMobile?{top:15,right:80,bottom:30,left:70}:{top:25,right:150,bottom:30,left:80},width:g.width,height:g.height,colors:{scheme:"paired"},startAngle:-180,endAngle:360,innerRadius:.5,padAngle:.7,cornerRadius:5,radialLabelsSkipAngle:u.isMobile?10:5,radialLabelsTextXOffset:0,radialLabelsTextColor:w.off,radialLabelsLinkOffset:0,radialLabelsLinkDiagonalLength:16,radialLabelsLinkHorizontalLength:24,radialLabelsLinkStrokeWidth:1,slicesLabelsSkipAngle:360,animate:!0,motionStiffness:90,motionDamping:15,sortByValue:!0,legends:u.isMobile?void 0:[{anchor:"right",direction:"column",translateX:110,itemWidth:60,itemHeight:16,itemsSpacing:2,itemTextColor:w.off,symbolSize:14,symbolShape:"circle"}],tooltip:function(e){var a=e.id,n=e.value;return r.a.createElement("strong",null,a," : ",n.toFixed(4)," ",t.name)},theme:{tooltip:{container:{background:w.main,color:w.off}}}}))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:o},"Back"))))}var je=r.a.memo((function(e){var t=e.calc;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"sidebar"},r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{type:"button",onClick:t},"Calculator"))),r.a.createElement("section",{className:"main"},r.a.createElement("h1",null,"About the Calculator"),r.a.createElement("p",null,"Welcome to the e-Stewards Global Impact Calculator. This tool is designed to estimate the environmental benefits of recycling your electronic waste with e-Stewards Certified Recyclers."),r.a.createElement("section",null,r.a.createElement("h2",null,"Usage"),r.a.createElement("p",null,'By default, you enter in the the total of individual electronics. Clicking "By Total Weight" you can choose to enter the total weight of each of the electronics'),r.a.createElement("p",null,'"Set Avg. Weight" brings out a new field where you enter the average weight of each of the electronics. "# of Containers" also brings out a new field where you enter the number of that electronic can fit into a specific container.')),r.a.createElement("section",null,r.a.createElement("h2",null,"Default Values"),r.a.createElement("p",null,"Based on averaged data, the default input of unit weights and compositions are automatically input into the calculator. The user can edit this number to tailor their specific electronics along with the unit values of weight or unit count. The calculator will output the yield of recoverable material and the greenhouse gas savings made by the recovery. Charts will be output to motivate the representative numbers. Alternatively, there is also a greenhouse gas savings yield value that represents the savings made by refurbishing the electronics. Refurbishment and recovery are mutually exclusive results. E-stewards ensures that all data within electronics is properly destroyed.")),r.a.createElement("section",null,r.a.createElement("h2",null,"Background"),r.a.createElement("p",null,"Due to the accelerating nature of technological advancement, any calculations made on the calculator are averages and approximations. This takes into account of the varying sizes and compositions of technologies such as flat panel TVs and smartphones. Some electronics may contain proprietary material and losses may happen during recovery. "),r.a.createElement("p",null," For more information, sources used to develop the calculations can be found ",r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1ObHDmde5JPeCf04jsK3n6PvsbKxdmbop/edit#gid=993306743 "},"here"),". "),r.a.createElement("h3",null,"The environmental benefits are measured in three critical areas:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Green house gas avoidance"),r.a.createElement("li",null,"Toxic metals diverted from export, dumping or disposal"),r.a.createElement("li",null,"Valuable metals diverted from landfill or disposal")),r.a.createElement("p",null,"These figures can be used to demonstrate and measure individual or corporate responsibility"))))})),ye=a(37);var ke=ye.data.map((function(e){return e.title})),xe=["GHG Emissions","Total Input","Total Output"],Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return ye.data.reduce((function(t,a){return Object(x.a)({},t,Object(k.a)({},a.title,{amount:"",boxes:{default:!0,value:"1"},weight:{default:!0,value:a.weight?a.weight*e:""}}))}),{})},Ne=function(e,t){switch(t.type){case"reset":return t.value?Ce(t.value):Ce();case"amount":var a=e[t.field];return a[t.type]=t.value,Object(x.a)({},e,Object(k.a)({},t.field,a));case"boxes":case"weight":var n=e[t.field];return n[t.type].value=t.value,n[t.type].default=t.default,Object(x.a)({},e,Object(k.a)({},t.field,n));default:throw new Error}},Se=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=xe[0],r=xe[1],i=xe[2],c=[].concat(Object(U.a)(ye.materials),xe).reduce((function(e,t){return Object(x.a)({},e,Object(k.a)({},t,0))}),{});return ye.data.forEach((function(l){var o=e[l.title],s=o.weight.value,u=a?o.amount/s:o.amount,m=u*(s/(t*l.weight))*o.boxes.value;ye.materials.forEach((function(e){var t=l[e]*m;c[e]+=t,c[i]+=t})),c[r]+=u*s,c[n]+=l[n]*o.boxes.value})),Object.entries(me.materials).forEach((function(e){var t=Object(l.a)(e,2),a=t[0],r=t[1];c[n]+=c[a]*r*1e3})),c[n]*=me.distance,c},Le=a(42),Ae=a(153);var Me={"/":{Comp:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"slider"},r.a.createElement(V,{slides:["https://s3files.core77.com/blog/images/lead_n_spotlight/477276_title__52109_cnNbfrAUP.jpg","https://icdn2.digitaltrends.com/image/digitaltrends/technological-waste.jpg","https://www.rd.com/wp-content/uploads/2019/09/mobile-devices.jpg"],autoPlay:10})),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"e-Stewards is the globally responsible way to recycle your electronics.")),r.a.createElement("div",{className:"moreinfo"},r.a.createElement("div",{className:"littlebox"},r.a.createElement("h2",null,"FOR ENTERPRISES"),r.a.createElement("p",null,"Use the highest industry standard for your asset disposition."),r.a.createElement("a",{href:"http://e-stewards.org/learn-more/for-enterprises/"}," Learn More")),r.a.createElement("div",{className:"littlebox"},r.a.createElement("h2",null,"FOR RECYCLERS"),r.a.createElement("p",null,"Differentiate your business with the e-Stewards Standard."),r.a.createElement("a",{href:"http://e-stewards.org/learn-more/for-recyclers/"}," Learn More")),r.a.createElement("div",{className:"littlebox"},r.a.createElement("h2",null,"FOR CONSUMERS"),r.a.createElement("p",null,"Join us today in creating a cleaner, more just world."),r.a.createElement("a",{href:"http://e-stewards.org/learn-more/for-consumers/"}," Learn More"))))},trans:"zoom",rel:!0},"/information":{Comp:J,trans:"fade",rel:!0},"/calculator":{Comp:function(){var e=Object(n.useState)({about:!1,enter:!1,weight:!1}),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(te("kg")),o=Object(l.a)(c,2),s=o[0],u=o[1],m=Object(n.useReducer)(Ne,void 0,Ce),d=Object(l.a)(m,2),f=d[0],b=d[1],h=Object(n.useState)({}),p=Object(l.a)(h,2),v=p[0],g=p[1],E=Object(n.useRef)(),w=function(){return u(te("lbs"))},O=function(){return u(te("kg"))},j=function(){return i((function(e){return Object(x.a)({},e,{about:!e.about})}))};Object(n.useEffect)((function(){E.current=function(){return Object.entries(f).reduce((function(e,t){var a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(x.a)({},e,Object(k.a)({},n,r.weight))}),{})}}),[f]),Object(n.useEffect)((function(){var e=E.current();ye.data.forEach((function(t){var a=t.title,n=e[a];n.value&&n.default&&b({type:"weight",field:a,value:t.weight*s.convert,default:!0})}))}),[s]);var y=a.about,C=a.enter,N=a.weight;return r.a.createElement(r.a.Fragment,null,r.a.createElement($,{in:y},r.a.createElement(Y,null,r.a.createElement(je,{calc:j}))),r.a.createElement($,{in:!y&&!C},r.a.createElement(Y,null,r.a.createElement(re,{inputs:f,setInputs:b,unit:s,tolbs:w,tokg:O,weight:N,swapWeight:function(){return i((function(e){return Object(x.a)({},e,{weight:!e.weight})}))},toAbout:j,toResults:function(){g(Se(f,s.convert,a.weight)),i((function(e){return Object(x.a)({},e,{enter:!0})}))}}))),r.a.createElement($,{in:!y&&C},r.a.createElement(Y,null,r.a.createElement(Oe,{values:v,unit:s,tolbs:w,tokg:O,toAbout:j,toBack:function(){return i((function(e){return Object(x.a)({},e,{enter:!1})}))}}))))},trans:"fade",rel:!0},"/find-recycler":{Comp:function(){var e=Object(Le.e)({googleMapsApiKey:"AIzaSyA-U9tVnswDVHRfHH3DLhc-Y8HWFksQyNQ"}),t=e.isLoaded,a=e.loadError,i=Object(n.useState)(null),c=Object(l.a)(i,2),o=c[0],s=c[1],u=Object(n.useRef)(),m=Object(n.useCallback)((function(e){u.current=e}),[]);return a?"Error Loading Maps":t?r.a.createElement(r.a.Fragment,null,r.a.createElement(Le.a,{mapContainerClassName:"map",zoom:10,center:{lat:41.878113,lng:-87.629799},onLoad:m},r.a.createElement(Le.d,{options:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"},(function(e){return Ae.map((function(t){return r.a.createElement(Le.c,{key:t.id,position:{lat:t.location[0],lng:t.location[1]},clusterer:e,onClick:function(){s(t)},icon:{url:"/icon16.png",scaledSize:new window.google.maps.Size(30,30)}})}))})),o&&r.a.createElement(Le.b,{position:{lat:o.location[0],lng:o.location[1]},onCloseClick:function(){s(null)}},r.a.createElement("div",null,r.a.createElement("h2",null," ",o.name," "),r.a.createElement("h3",null," ",o.subname," "),r.a.createElement("p",null," Phone: ",o.phone," "),r.a.createElement("a",{href:o.directions,target:"_blank",rel:"noopener noreferrer"},"Get Directions")))),r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"search"}))):"Loading Maps"},trans:"fade",rel:!1},"/error":{Comp:function(){return r.a.createElement(Y,null,r.a.createElement("section",{className:"main"},r.a.createElement("h1",null,"Error: Page does not exist!")))},trans:"fade",rel:!0}},Re=function(){return Object.keys(Me).map((function(e){return["".concat(_e).concat(e),e]})).reduce((function(e,t){var a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(x.a)({},e,Object(k.a)({},n,r))}),{})},Pe=function(){return Object.keys(Me).map((function(e){return e.replace("/","")})).map((function(e){return""===e?"home":e})).map((function(e){return e.replace("-"," ")})).map((function(e){return e.replace(/ ([a-z])/,(function(e){return e.toUpperCase()}))})).map((function(e){return e.replace(/^./,(function(e){return e.toUpperCase()}))}))},Te=Object(C.e)((function(e){var t=e.location,a=Object(n.useMemo)((function(){var e=Object.keys(Me);return Pe().reduce((function(t,a,n){return Object(x.a)({},t,Object(k.a)({},e[n],a))}),{})}),[]),i=Re(),c=Object.keys(i).reduce((function(e,a){return e||Object(C.d)(t.pathname,{path:a,exact:!0})}),!1),o=c?i[c.path]:"/error",s=Me[o].Comp;return Object(n.useEffect)((function(){document.title="e-Stewards - ".concat(a[o])}),[a,o]),r.a.createElement(r.a.Fragment,null,Object.entries(Me).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1],i=n.Comp,c=n.trans,o=n.rel;return r.a.createElement(C.a,{key:a,exact:!0,path:a},(function(){return r.a.createElement(q,{in:i===s,classNames:c,divClass:o?"rel":""},r.a.createElement(i,null))}))})))})),Ge=a(155),Fe=a.n(Ge),Be=a(156),De=a.n(Be),We=a(157),ze=a.n(We),He=r.a.forwardRef((function(e,t){var a=e.hide,i=e.setNav,c=e.swapTheme,o=Object(n.useMemo)((function(){var e=Pe();return Object.entries(Re()).filter((function(e){var t=Object(l.a)(e,2);t[0];return"/error"!==t[1]})).map((function(t,a){var n=Object(l.a)(t,2),r=n[0];n[1];return[r,e[a]]}))}),[]),m=Object(n.useState)(0),d=Object(l.a)(m,2),f=d[0],h=d[1],p=Object(n.useRef)(),v=Object(n.useRef)(),g=Object(n.useRef)(),E=Object(n.useRef)(),w=Object(n.useContext)(b);Object(n.useEffect)((function(){E.current=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=window.innerHeight*(u.isMobile?.1:.02),a=u.isMobile?"hidden":"smaller",n=e>f;h(e),e>t&&n?p.current.classList.add(a):n||p.current.classList.remove(a)}}),[f]),Object(n.useEffect)((function(){u.isMobile&&!a&&p.current.classList.remove("hidden")}),[a]),Object(n.useEffect)((function(){u.isMobile?p.current.classList.add("mobile"):p.current.classList.remove("mobile");var e=function(){return E.current()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(n.useEffect)((function(){g.current=function(){return i("close")}})),Object(n.useEffect)((function(){var e=function(e){var t=e.target;v.current.contains(t)&&!t.className.includes("nav-link")||g.current()};return u.isMobile&&window.addEventListener("click",e),function(){u.isMobile&&window.removeEventListener("click",e)}}),[]);var O="dark"===w.name,j=!O;return r.a.createElement("div",{className:"nav",ref:p,style:{backgroundColor:w.mainAlt}},r.a.createElement("div",{className:"logoBtn",style:{backgroundColor:j?"transparent":w.offAlt}},r.a.createElement(s.b,{className:"nav-link",exact:!0,to:"/"},r.a.createElement("img",{className:"logo",src:ze.a,alt:"logo"}))),r.a.createElement("div",{ref:v,className:"nav-menu"},r.a.createElement("div",{ref:t,className:"nav-list ".concat(a?"hide":""),style:{backgroundColor:w.mainAlt}},o.map((function(e,t){var a=Object(l.a)(e,2),n=a[0],i=a[1];return r.a.createElement(s.b,{key:n+t,className:"nav-link",exact:!0,to:n},i)})),r.a.createElement("div",{className:"nav-link theme-link",onClick:c},!j&&r.a.createElement("img",{className:"theme-logo",src:Fe.a,alt:"Light Mode"}),!O&&r.a.createElement("img",{className:"theme-logo",src:De.a,alt:"Dark Mode"}))),u.isMobile&&r.a.createElement(y,{onClick:function(){return i("swap")},active:!a,color:w.offAlt})))}));function Ie(){var e=Object(n.useReducer)(f,m),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useReducer)(v,g(u.isMobile)),d=Object(l.a)(c,2),h=d[0],p=d[1],w=Object(n.useRef)(),O=function(e){return p({type:e,menu:w.current})},j=Object(o.a)({onSwipedLeft:function(e){var t=e.initial;h.hide&&t[0]>=h.area&&O("open")},onSwipedRight:function(e){var t=e.initial,a=e.deltaX,n=t[0]-a;!h.hide&&n>=h.area&&O("close")},onSwiping:function(e){var t=e.event,a=e.dir;w.current.contains(t.target)?t.cancelable&&t.preventDefault():h.hide||"Up"!==a&&"Down"!==a||O("close")}});return Object(n.useEffect)((function(){var e=document.body;e.style.backgroundColor=a.main,e.style.color=a.off}),[a]),r.a.createElement("div",j,r.a.createElement(s.a,null,r.a.createElement(b.Provider,{value:a},r.a.createElement(He,{ref:w,hide:h.hide,setNav:O,swapTheme:i}),r.a.createElement(E.Provider,{value:h},r.a.createElement(Te,null)))))}var _e=a(158).homepage.replace("https://dserapio.github.io","");a(299);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e){e.exports=JSON.parse('{"trucks":27688.74,"divert":2.9610136,"avgMpg":22.3,"co2PerGal":8.887,"LaToNyMiles":2790,"co2LANY":995.77,"distance":10195.87,"materials":{"Aluminum":0.00987,"Palladium":6.43391,"Platinum":37.01729,"Gold":21.5996,"Copper":0.00352,"Steel":0.00086}}')},37:function(e){e.exports=JSON.parse('{"materials":["Lead","Mercury","Cadmium","Arsenic","Copper","Gold","Platinum","Palladium","Aluminum","Steel"],"data":[{"id":1,"title":"Laptop","weight":3.78,"GHG Emissions":0.0000299364,"Lead":0.0061,"Mercury":0.000004,"Cadmium":7.6e-7,"Arsenic":0.000011337,"Copper":0.27,"Gold":0.00036,"Platinum":0.000011389991,"Palladium":0.00006,"Aluminum":0.135,"Steel":0.2304},{"id":2,"title":"Cathode Ray Tube (CRT) Display","weight":24.8,"GHG Emissions":0.0000299364,"Lead":0.4,"Mercury":0,"Cadmium":0.000248,"Arsenic":0.0000609,"Copper":0.06,"Gold":4.35e-7,"Platinum":0,"Palladium":0,"Aluminum":0.0064,"Steel":0.244},{"id":3,"title":"Desktop and Server","weight":9.9,"GHG Emissions":0.0000299364,"Lead":0.0198,"Mercury":0,"Cadmium":0,"Arsenic":0.0396,"Copper":0.1069,"Gold":0.000297,"Platinum":0.0000204732,"Palladium":0.0001396,"Aluminum":0.3564,"Steel":0.498},{"id":4,"title":"Flat Panel Display","weight":17.26,"GHG Emissions":0.0000299364,"Lead":0.000428,"Mercury":0.00000265,"Cadmium":0,"Arsenic":0,"Copper":0.00291,"Gold":0.00000389,"Platinum":0,"Palladium":0.0000012,"Aluminum":0.00628,"Steel":0.207},{"id":5,"title":"Mobile Phone","weight":0.129,"GHG Emissions":0.0000299364,"Lead":0.000339,"Mercury":4e-8,"Cadmium":3e-7,"Arsenic":0.005,"Copper":0.061,"Gold":0.000034,"Platinum":3.4e-7,"Palladium":0.000015,"Aluminum":0.24,"Steel":0.12},{"id":6,"title":"Hard Drive","weight":1.25,"GHG Emissions":0.0000299364,"Lead":0,"Mercury":0,"Cadmium":0,"Arsenic":0,"Copper":0.031014353,"Gold":0.00034,"Platinum":0,"Palladium":0.0000113,"Aluminum":0.311220811,"Steel":0},{"id":7,"title":"Imaging Devices (Copiers/Printers/Faxes)","weight":17.4,"GHG Emissions":0.0000299364,"Lead":0.0266,"Mercury":0,"Cadmium":0.000130274,"Arsenic":0.000119364,"Copper":1.0266,"Gold":0.0000616134,"Platinum":0.0000375144,"Palladium":0.000247028,"Aluminum":0.358728,"Steel":0},{"id":8,"title":"Others (Keyboards, mice, games)","weight":17.7,"GHG Emissions":0.0000299364,"Lead":0.0410286,"Mercury":0,"Cadmium":0,"Arsenic":0,"Copper":1.338828,"Gold":0.000075579,"Platinum":0,"Palladium":0.000237534,"Aluminum":0.3807978,"Steel":0}]}')}},[[164,1,2]]]);
//# sourceMappingURL=main.9edad17f.chunk.js.map