import{S as Ee,i as ye,s as De,e as w,c as k,a as y,d as f,b as n,g as P,K as mt,E as $,L as Se,v as Ye,t as L,k as B,h as W,m as q,f as A,J as i,M as Ie,N as V,O as _e,P as Ge,Q as Ke,w as he,x as pe,y as ve,q as O,o as R,B as be,R as ht,j as pt,l as Re,T as vt,U as Qe,V as bt,p as Ve,W as Le,X as _t,Y as gt,n as Be}from"../chunks/index-ffce5867.js";import{f as Ze,O as wt,G as kt,c as It,d as Et,a as yt,b as Dt,r as Tt}from"../chunks/wpTitles-5387dbe1.js";import"../chunks/index-c54c4907.js";function Vt(s){let e,t,l;return{c(){e=w("div"),this.h()},l(r){e=k(r,"DIV",{style:!0,class:!0}),y(e).forEach(f),this.h()},h(){n(e,"style",s[0]),n(e,"class","m-0")},m(r,u){P(r,e,u),t||(l=mt(s[1].call(null,e)),t=!0)},p(r,[u]){u&1&&n(e,"style",r[0])},i:$,o:$,d(r){r&&f(e),t=!1,l()}}}function Bt(s,e){return e.forEach(([t,l])=>s[t]=l),s}function qt(s,e,t){let{target:l=void 0}=e,{sketch:r=void 0}=e,{parentDivStyle:u="display: block;"}=e,{debug:c=!1}=e,d;const m=Se(),a={ref(){m("ref",l)},instance(){m("instance",d)}};function _(p){return t(2,l=p),{destroy(){t(2,l=void 0)}}}return Ye(async()=>{const p=await import("../chunks/p5.min-21ab2ccd.js").then(function(E){return E.p}),{default:g}=p,I=Object.entries(p).filter(([E,o])=>o instanceof Function&&E[0]!=="_"&&E!=="default");c&&console.log("available p5 native classes",I),d=new g(E=>(E=Bt(E,I),c&&console.log("p5 instance",E),window._p5Instance=E,r(E)),l),a.ref(),a.instance()}),s.$$set=p=>{"target"in p&&t(2,l=p.target),"sketch"in p&&t(3,r=p.sketch),"parentDivStyle"in p&&t(0,u=p.parentDivStyle),"debug"in p&&t(4,c=p.debug)},[u,_,l,r,c]}class Ct extends Ee{constructor(e){super(),ye(this,e,qt,Vt,De,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function xe(s){let e,t,l,r,u,c,d,m,a,_,p,g,b,I,E,o,v,T,S,D,N,C,Y,M,z,x,j,X,ee;return{c(){e=w("div"),t=w("div"),l=w("div"),r=w("p"),u=L("size"),c=B(),d=w("div"),m=w("div"),a=w("div"),_=B(),p=w("div"),g=B(),b=w("div"),I=B(),E=w("div"),o=B(),v=w("div"),T=w("p"),S=L("color"),D=B(),N=w("div"),C=w("input"),Y=B(),M=w("button"),z=L("Done"),x=B(),j=w("div"),this.h()},l(U){e=k(U,"DIV",{class:!0,id:!0});var H=y(e);t=k(H,"DIV",{class:!0,id:!0});var oe=y(t);l=k(oe,"DIV",{class:!0});var G=y(l);r=k(G,"P",{});var Q=y(r);u=W(Q,"size"),Q.forEach(f),c=q(G),d=k(G,"DIV",{class:!0});var te=y(d);m=k(te,"DIV",{id:!0,class:!0});var ge=y(m);a=k(ge,"DIV",{class:!0,id:!0,style:!0}),y(a).forEach(f),ge.forEach(f),_=q(te),p=k(te,"DIV",{class:!0,id:!0,style:!0}),y(p).forEach(f),g=q(te),b=k(te,"DIV",{class:!0,id:!0,style:!0}),y(b).forEach(f),I=q(te),E=k(te,"DIV",{class:!0,id:!0,style:!0}),y(E).forEach(f),te.forEach(f),G.forEach(f),o=q(oe),v=k(oe,"DIV",{class:!0});var J=y(v);T=k(J,"P",{});var ne=y(T);S=W(ne,"color"),ne.forEach(f),D=q(J),N=k(J,"DIV",{class:!0});var ue=y(N);C=k(ue,"INPUT",{type:!0,min:!0,max:!0,id:!0,style:!0,class:!0}),ue.forEach(f),J.forEach(f),Y=q(oe),M=k(oe,"BUTTON",{id:!0,class:!0});var ae=y(M);z=W(ae,"Done"),ae.forEach(f),oe.forEach(f),x=q(H),j=k(H,"DIV",{class:!0}),y(j).forEach(f),H.forEach(f),this.h()},h(){n(a,"class","stroke-button svelte-142uptq"),n(a,"id","tiny-stroke-circle"),A(a,"border",s[11]),n(m,"id","tiny-stroke-container"),n(m,"class","svelte-142uptq"),n(p,"class","stroke-button svelte-142uptq"),n(p,"id","small-stroke"),A(p,"border",s[12]),n(b,"class","stroke-button svelte-142uptq"),n(b,"id","medium-stroke"),A(b,"border",s[13]),n(E,"class","stroke-button svelte-142uptq"),n(E,"id","big-stroke"),A(E,"border",s[14]),n(d,"class","stroke-width svelte-142uptq"),n(l,"class","style-section svelte-142uptq"),n(C,"type","range"),n(C,"min","0"),n(C,"max","255"),n(C,"id","color-slider"),A(C,"background-color","rgb("+s[0]+","+s[1]+","+s[2]),n(C,"class","svelte-142uptq"),n(N,"class","stroke-color svelte-142uptq"),n(v,"class","style-section svelte-142uptq"),n(M,"id","pallette-done"),n(M,"class","svelte-142uptq"),n(t,"class","modal-info draw-settings svelte-142uptq"),n(t,"id","pallette"),n(j,"class","icon-button exit-button svelte-142uptq"),n(e,"class","container svelte-142uptq"),n(e,"id","pallette-container")},m(U,H){P(U,e,H),i(e,t),i(t,l),i(l,r),i(r,u),i(l,c),i(l,d),i(d,m),i(m,a),i(d,_),i(d,p),i(d,g),i(d,b),i(d,I),i(d,E),i(t,o),i(t,v),i(v,T),i(T,S),i(v,D),i(v,N),i(N,C),Ie(C,s[0]),i(t,Y),i(t,M),i(M,z),i(e,x),i(e,j),X||(ee=[V(m,"click",s[19]),V(m,"touchstart",s[19]),V(p,"click",s[19]),V(p,"touchstart",s[19]),V(b,"click",s[19]),V(b,"touchstart",s[19]),V(E,"click",s[19]),V(E,"touchstart",s[19]),V(C,"change",s[22]),V(C,"change",s[35]),V(C,"input",s[35]),V(M,"click",s[26]),V(M,"touchstart",s[26],{passive:!0}),V(M,"mouseenter",s[36]),V(M,"mouseleave",s[37]),V(t,"mouseenter",s[38]),V(t,"mouseleave",s[39]),V(j,"click",s[26]),V(j,"touchstart",s[26],{passive:!0}),V(e,"click",s[26])],X=!0)},p(U,H){H[0]&2048&&A(a,"border",U[11]),H[0]&4096&&A(p,"border",U[12]),H[0]&8192&&A(b,"border",U[13]),H[0]&16384&&A(E,"border",U[14]),H[0]&7&&A(C,"background-color","rgb("+U[0]+","+U[1]+","+U[2]),H[0]&1&&Ie(C,U[0])},d(U){U&&f(e),X=!1,_e(ee)}}}function $e(s){let e,t,l,r,u,c,d,m=s[15][0]+"",a,_,p,g,b,I,E=s[15][1]+"",o,v,T,S,D,N,C=s[15][2]+"",Y,M,z,x,j,X,ee,U,H,oe,G,Q,te=s[15][4]+"",ge,J,ne,ue,ae,se,we=s[15][5]+"",He,me,We,Ne,ce,Fe=s[15][6]+"",Me,Ue,Oe,ze,Z=s[7]&&et();return{c(){e=w("div"),t=w("div"),l=w("h2"),r=L("Contribute to the Cloud Cities repository"),u=B(),c=w("div"),d=w("p"),a=L(m),_=B(),p=w("input"),g=B(),b=w("div"),I=w("p"),o=L(E),v=B(),T=w("input"),S=B(),D=w("div"),N=w("p"),Y=L(C),M=B(),z=w("input"),x=B(),j=w("p"),X=L(s[16]),ee=w("span"),U=w("p"),H=L(s[17]),oe=B(),G=w("div"),Q=w("button"),ge=L(te),J=B(),ne=w("img"),ae=B(),se=w("button"),He=L(we),me=w("img"),Ne=B(),ce=w("button"),Me=L(Fe),Ue=B(),Z&&Z.c(),this.h()},l(le){e=k(le,"DIV",{class:!0});var de=y(e);t=k(de,"DIV",{class:!0});var K=y(t);l=k(K,"H2",{});var h=y(l);r=W(h,"Contribute to the Cloud Cities repository"),h.forEach(f),u=q(K),c=k(K,"DIV",{class:!0});var F=y(c);d=k(F,"P",{class:!0});var ie=y(d);a=W(ie,m),ie.forEach(f),_=q(F),p=k(F,"INPUT",{type:!0,id:!0,"data-lpignore":!0,maxlength:!0,class:!0}),F.forEach(f),g=q(K),b=k(K,"DIV",{class:!0});var re=y(b);I=k(re,"P",{class:!0});var ke=y(I);o=W(ke,E),ke.forEach(f),v=q(re),T=k(re,"INPUT",{type:!0,id:!0,"data-lpignore":!0,maxlength:!0,class:!0}),re.forEach(f),S=q(K),D=k(K,"DIV",{class:!0});var fe=y(D);N=k(fe,"P",{class:!0});var qe=y(N);Y=W(qe,C),qe.forEach(f),M=q(fe),z=k(fe,"INPUT",{type:!0,id:!0,"data-lpignore":!0,maxlength:!0,class:!0}),fe.forEach(f),x=q(K),j=k(K,"P",{class:!0});var Te=y(j);X=W(Te,s[16]),ee=k(Te,"SPAN",{style:!0});var Pe=y(ee);U=k(Pe,"P",{class:!0});var je=y(U);H=W(je,s[17]),je.forEach(f),Pe.forEach(f),Te.forEach(f),oe=q(K),G=k(K,"DIV",{class:!0});var Ce=y(G);Q=k(Ce,"BUTTON",{id:!0,class:!0});var Ae=y(Q);ge=W(Ae,te),J=q(Ae),ne=k(Ae,"IMG",{src:!0,alt:!0,class:!0}),Ae.forEach(f),ae=q(Ce),se=k(Ce,"BUTTON",{id:!0,class:!0});var Je=y(se);He=W(Je,we),me=k(Je,"IMG",{src:!0,alt:!0,class:!0}),Je.forEach(f),Ce.forEach(f),Ne=q(K),ce=k(K,"BUTTON",{id:!0,class:!0});var Xe=y(ce);Me=W(Xe,Fe),Xe.forEach(f),Ue=q(K),Z&&Z.l(K),K.forEach(f),de.forEach(f),this.h()},h(){n(d,"class","svelte-142uptq"),n(p,"type","text"),n(p,"id","input-title"),n(p,"data-lpignore","true"),n(p,"maxlength","50"),n(p,"class","svelte-142uptq"),n(c,"class","input-section svelte-142uptq"),n(I,"class","svelte-142uptq"),n(T,"type","text"),n(T,"id","input-location"),n(T,"data-lpignore","true"),n(T,"maxlength","30"),n(T,"class","svelte-142uptq"),n(b,"class","input-section svelte-142uptq"),n(N,"class","svelte-142uptq"),n(z,"type","text"),n(z,"id","input-name"),n(z,"data-lpignore","true"),n(z,"maxlength","30"),n(z,"class","svelte-142uptq"),n(D,"class","input-section svelte-142uptq"),n(U,"class","terms-and-conditions svelte-142uptq"),A(ee,"text-decoration","underline"),A(ee,"cursor","pointer"),n(j,"class","terms-and-conditions svelte-142uptq"),Ge(ne.src,ue="./cloud_submit.svg")||n(ne,"src",ue),n(ne,"alt","submit"),n(ne,"class","svelte-142uptq"),n(Q,"id","submit-button"),n(Q,"class","svelte-142uptq"),Ge(me.src,We="./cloud_download.svg")||n(me,"src",We),n(me,"alt","download"),n(me,"class","svelte-142uptq"),n(se,"id","download-button"),n(se,"class","svelte-142uptq"),n(G,"class","flex-row svelte-142uptq"),n(ce,"id","cancel-button"),n(ce,"class","svelte-142uptq"),n(t,"class","modal-info submit-image svelte-142uptq"),n(e,"class","container svelte-142uptq")},m(le,de){P(le,e,de),i(e,t),i(t,l),i(l,r),i(t,u),i(t,c),i(c,d),i(d,a),i(c,_),i(c,p),Ie(p,s[6]),i(t,g),i(t,b),i(b,I),i(I,o),i(b,v),i(b,T),Ie(T,s[5]),i(t,S),i(t,D),i(D,N),i(N,Y),i(D,M),i(D,z),Ie(z,s[4]),i(t,x),i(t,j),i(j,X),i(j,ee),i(ee,U),i(U,H),i(t,oe),i(t,G),i(G,Q),i(Q,ge),i(Q,J),i(Q,ne),i(G,ae),i(G,se),i(se,He),i(se,me),i(t,Ne),i(t,ce),i(ce,Me),i(t,Ue),Z&&Z.m(t,null),Oe||(ze=[V(p,"input",s[40]),V(T,"input",s[41]),V(z,"input",s[42]),V(ee,"click",s[30]),V(Q,"click",s[20]),V(se,"click",s[21]),V(ce,"click",s[28])],Oe=!0)},p(le,de){de[0]&64&&p.value!==le[6]&&Ie(p,le[6]),de[0]&32&&T.value!==le[5]&&Ie(T,le[5]),de[0]&16&&z.value!==le[4]&&Ie(z,le[4]),le[7]?Z||(Z=et(),Z.c(),Z.m(t,null)):Z&&(Z.d(1),Z=null)},d(le){le&&f(e),Z&&Z.d(),Oe=!1,_e(ze)}}}function et(s){let e,t;return{c(){e=w("p"),t=L(`We are missing information to complete your Cloud Cities submission. Please tell us more
						about your drawing! Please note: Location and Name are optional.`),this.h()},l(l){e=k(l,"P",{style:!0});var r=y(e);t=W(r,`We are missing information to complete your Cloud Cities submission. Please tell us more
						about your drawing! Please note: Location and Name are optional.`),r.forEach(f),this.h()},h(){A(e,"text-align","center")},m(l,r){P(l,e,r),i(e,t)},d(l){l&&f(e)}}}function tt(s){let e,t,l,r,u,c,d;return{c(){e=w("div"),t=B(),l=w("div"),r=B(),u=w("div"),this.h()},l(m){e=k(m,"DIV",{class:!0,id:!0}),y(e).forEach(f),t=q(m),l=k(m,"DIV",{class:!0,id:!0}),y(l).forEach(f),r=q(m),u=k(m,"DIV",{class:!0,id:!0}),y(u).forEach(f),this.h()},h(){n(e,"class","icon-button finished-drawing-button svelte-142uptq"),n(e,"id","finish-button"),n(l,"class","icon-button pallette-button svelte-142uptq"),n(l,"id","p-button"),n(u,"class","icon-button redo-button svelte-142uptq"),n(u,"id","r-button")},m(m,a){P(m,e,a),P(m,t,a),P(m,l,a),P(m,r,a),P(m,u,a),c||(d=[V(e,"click",s[43]),V(e,"touchstart",s[44],{passive:!0}),V(e,"mouseenter",s[23]),V(e,"mouseleave",s[24]),V(l,"click",s[27]),V(l,"touchstart",s[27],{passive:!0}),V(l,"mouseenter",s[23]),V(l,"mouseleave",s[24]),V(u,"mouseenter",s[23]),V(u,"mouseleave",s[24]),V(u,"click",function(){Ke(s[3])&&s[3].apply(this,arguments)}),V(u,"touchstart",function(){Ke(s[3])&&s[3].apply(this,arguments)})],c=!0)},p(m,a){s=m},d(m){m&&f(e),m&&f(t),m&&f(l),m&&f(r),m&&f(u),c=!1,_e(d)}}}function St(s){let e,t,l,r,u,c,d,m,a,_,p,g,b,I,E;t=new Ct({props:{sketch:s[18]}});let o=s[8]&&xe(s),v=s[9]&&$e(s),T=!s[8]&&!s[9]&&tt(s);return{c(){e=w("div"),he(t.$$.fragment),l=B(),r=w("h2"),u=L("Cloud Cities"),c=B(),d=w("div"),m=B(),a=w("div"),_=B(),o&&o.c(),p=B(),v&&v.c(),g=B(),T&&T.c(),this.h()},l(S){e=k(S,"DIV",{id:!0,class:!0});var D=y(e);pe(t.$$.fragment,D),l=q(D),r=k(D,"H2",{id:!0,class:!0});var N=y(r);u=W(N,"Cloud Cities"),N.forEach(f),c=q(D),d=k(D,"DIV",{class:!0}),y(d).forEach(f),m=q(D),a=k(D,"DIV",{class:!0}),y(a).forEach(f),_=q(D),o&&o.l(D),p=q(D),v&&v.l(D),g=q(D),T&&T.l(D),D.forEach(f),this.h()},h(){n(r,"id","title"),n(r,"class","svelte-142uptq"),n(d,"class","icon-button about-button svelte-142uptq"),n(a,"class","icon-button repo-button svelte-142uptq"),n(e,"id","canvas-container"),n(e,"class","svelte-142uptq")},m(S,D){P(S,e,D),ve(t,e,null),i(e,l),i(e,r),i(r,u),i(e,c),i(e,d),i(e,m),i(e,a),i(e,_),o&&o.m(e,null),i(e,p),v&&v.m(e,null),i(e,g),T&&T.m(e,null),b=!0,I||(E=[V(d,"click",s[29]),V(a,"mouseenter",s[23]),V(a,"mouseleave",s[24]),V(a,"touchstart",s[25],{passive:!0}),V(a,"click",s[25])],I=!0)},p(S,D){S[8]?o?o.p(S,D):(o=xe(S),o.c(),o.m(e,p)):o&&(o.d(1),o=null),S[9]?v?v.p(S,D):(v=$e(S),v.c(),v.m(e,g)):v&&(v.d(1),v=null),!S[8]&&!S[9]?T?T.p(S,D):(T=tt(S),T.c(),T.m(e,null)):T&&(T.d(1),T=null)},i(S){b||(O(t.$$.fragment,S),b=!0)},o(S){R(t.$$.fragment,S),b=!1},d(S){S&&f(e),be(t),o&&o.d(),v&&v.d(),T&&T.d(),I=!1,_e(E)}}}let Ht=!1;function Nt(s,e,t){const l=Se();let{propValue:r}=e,{contributeModal:u}=e,{mobile:c}=e,{disableDraw:d}=e,m=r,a=u.map(h=>h.includes("<span>")?h.split("<span>").pop().split("<")[0]:h.includes("<p>")?h.split("<p>").pop().split("<")[0]:h.split('">').pop().split("<")[0]),_=u[3].split("<span>").pop().split("<")[0],p=u[3].split('style="text-decoration: underline;">').pop().split("<")[0],g=5,b=0,I=0,E=0,o;const v=h=>{let F;h.preload=()=>{F=h.loadImage(m)};let ie,re;h.setup=()=>{F.width>F.height&&c&&l("openLandscapeModal"),re=F.height/(F.width/h.windowWidth),ie=F.width/(F.height/h.windowHeight),h.windowWidth>=500?h.windowHeight<500?h.createCanvas(h.windowWidth,h.windowHeight):re<h.windowHeight?h.createCanvas(ie,h.windowHeight):h.createCanvas(h.windowWidth,re):h.windowWidth<500&&h.createCanvas(h.windowWidth,h.windowHeight),h.background(F),t(3,o=()=>{h.clear(),h.background(F)})};let ke=0,fe=0,qe=0,Te=0,Pe=.3;h.mousePressed=()=>{if(!(H||d||U))return ke=h.mouseX,fe=h.mouseY,qe=h.mouseX,Te=h.mouseY,!1},h.touchMoved=()=>{if(H||d||U)return;let je=h.mouseX,Ce=h.mouseY;return ke+=(je-ke)*Pe,fe+=(Ce-fe)*Pe,h.strokeWeight(g),h.stroke(b,I,E),h.line(ke,fe,qe,Te),qe=ke,Te=fe,!1},h.windowResized=()=>{H||j||Ht||c&&h.width==h.windowWidth||(re=F.height/(F.width/h.windowWidth),ie=F.width/(F.height/h.windowHeight),h.windowWidth>=500&&h.windowHeight>500?h.height<=h.windowHeight&&h.windowWidth<h.width?h.resizeCanvas(ie,h.windowHeight):h.resizeCanvas(h.windowWidth,re):h.windowHeight<500?(re<h.windowHeight,h.resizeCanvas(h.windowWidth,h.windowHeight)):h.windowWidth<500&&h.resizeCanvas(h.windowWidth,h.windowHeight),h.background(F))}};let T=document.getElementsByClassName("stroke-button");const S=h=>{let F=h.target.id;h.target.id==="tiny-stroke-container"||h.target.id==="tiny-stroke-circle"?g=5:h.target.id==="small-stroke"?g=10:h.target.id==="medium-stroke"?g=20:h.target.id==="big-stroke"&&(g=30),T.forEach(ie=>{if(ie!==h.target){if(ie.style.border="none",F==="tiny-stroke-container"){let re=document.getElementById("tiny-stroke-circle");re.style.border="solid 4px #00D1FF"}}else ie.style.border="solid 4px #00D1FF"})};let D,N,C,Y,M=JSON.parse(localStorage.getItem("cloudUploads"));const z=["none"];localStorage.setItem("cloudUploads",JSON.stringify(z));let x=!0,j=!1,X=!1;const ee=()=>{if(!(D&&D.length>50||N&&N.length>30||C&&C.length>30))if(D&&x){l("clickSubmit"),j=!0,t(9,H=!1),setTimeout(()=>{X?X=!1:(j=!1,X=!0,l("imageSubmitted"))},1e4),M=JSON.parse(localStorage.getItem("cloudUploads")),M.push("upload"),localStorage.setItem("cloudUploads",JSON.stringify(M)),x=!1,t(7,Y=!1);let h=new FormData;h.append("title",D),h.append("location",N),h.append("name",C),h.append("userUploads",M.length),document.getElementById("defaultCanvas0").toBlob(function(ie){h.append("cloud",ie),fetch("/addPostfromServer",{method:"POST",body:h}).then(()=>{x=!0,X?X=!1:(X=!0,j=!1,l("imageSubmitted"))})}),t(9,H=!1)}else if(x)t(7,Y=!0);else return};let U=!1,H=!1;const oe=()=>{let h=document.createElement("a"),F;D?F=D.split(" ").join("-"):F="myCloudCity",h.download=`${F}.png`,h.href=document.getElementById("defaultCanvas0").toDataURL(),h.click()},G=h=>{t(0,b=h.srcElement.value),t(1,I=h.srcElement.value),t(2,E=h.srcElement.value)},Q=()=>{t(31,d=!0)},te=()=>{t(31,d=!1)},ge=()=>{window.location.replace("/")};let J=!1;const ne=()=>{J||(U&&t(8,U=!1),H&&t(9,H=!1),t(31,d=!1))};let ue,ae,se,we;const He=()=>{t(8,U=!U),g===5?(t(11,ue="solid 4px #00D1FF"),t(12,ae="none"),t(13,se="none"),t(14,we="none")):g===10?(t(12,ae="solid 4px #00D1FF"),t(13,se="none"),t(14,we="none"),t(11,ue="none")):g===20?(t(12,ae="none"),t(13,se="solid 4px #00D1FF"),t(14,we="none"),t(11,ue="none")):(t(12,ae="none"),t(13,se="none"),t(11,ue="none"),t(14,we="solid 4px #00D1FF"))},me=()=>{t(9,H=!1),l("cancelSubmit")},We=()=>{window.open("https://cloudcities.studiotomassaraceno.org","_self")},Ne=()=>{window.open("https://cloudcities.studiotomassaraceno.org/terms/","_blank").focus()};function ce(){b=ht(this.value),t(0,b)}const Fe=()=>t(10,J=!J),Me=()=>t(10,J=!J),Ue=()=>t(10,J=!J),Oe=()=>t(10,J=!J);function ze(){C=this.value,t(6,C)}function Z(){N=this.value,t(5,N)}function le(){D=this.value,t(4,D)}const de=()=>t(9,H=!H),K=()=>t(9,H=!H);return s.$$set=h=>{"propValue"in h&&t(32,r=h.propValue),"contributeModal"in h&&t(33,u=h.contributeModal),"mobile"in h&&t(34,c=h.mobile),"disableDraw"in h&&t(31,d=h.disableDraw)},[b,I,E,o,D,N,C,Y,U,H,J,ue,ae,se,we,a,_,p,v,S,ee,oe,G,Q,te,ge,ne,He,me,We,Ne,d,r,u,c,ce,Fe,Me,Ue,Oe,ze,Z,le,de,K]}class Mt extends Ee{constructor(e){super(),ye(this,e,Nt,St,De,{propValue:32,contributeModal:33,mobile:34,disableDraw:31},null,[-1,-1])}}function Ut(s){let e,t,l,r,u,c,d,m,a,_,p,g;return{c(){e=w("div"),t=w("div"),l=B(),r=w("div"),u=B(),c=w("div"),d=w("div"),m=w("div"),a=B(),_=w("button"),this.h()},l(b){e=k(b,"DIV",{class:!0});var I=y(e);t=k(I,"DIV",{class:!0}),y(t).forEach(f),l=q(I),r=k(I,"DIV",{class:!0,style:!0}),y(r).forEach(f),u=q(I),c=k(I,"DIV",{class:!0});var E=y(c);d=k(E,"DIV",{class:!0});var o=y(d);m=k(o,"DIV",{id:!0}),y(m).forEach(f),a=q(o),_=k(o,"BUTTON",{id:!0}),y(_).forEach(f),o.forEach(f),E.forEach(f),I.forEach(f),this.h()},h(){n(t,"class","icon-button about-button svelte-khx1i0"),n(r,"class","modal-container"),A(r,"background-image","url("+s[0]+")"),A(r,"background-size","cover"),A(r,"background-position","center"),n(m,"id","drawInstructions"),n(_,"id","begin-button"),n(d,"class","start-draw-center svelte-khx1i0"),n(c,"class","modal-container"),n(e,"class","start-draw-container svelte-khx1i0")},m(b,I){P(b,e,I),i(e,t),i(e,l),i(e,r),i(e,u),i(e,c),i(c,d),i(d,m),i(d,a),i(d,_),p||(g=[V(t,"click",s[2]),V(t,"touchstart",s[2],{passive:!0}),V(_,"click",s[1]),V(_,"touchstart",s[1],{passive:!0})],p=!0)},p(b,[I]){I&1&&A(r,"background-image","url("+b[0]+")")},i:$,o:$,d(b){b&&f(e),p=!1,_e(g)}}}function Ot(s,e,t){const l=Se();let{drawInstructions:r}=e,{propValue:u}=e,c;Ye(async()=>{c=document.getElementById("drawInstructions"),c.innerHTML=r[0];let a=document.getElementById("begin-button");a.innerHTML=r[1]});const d=()=>{l("closeInstructions")},m=()=>{window.open("https://cloudcities.studiotomassaraceno.org","_self")};return s.$$set=a=>{"drawInstructions"in a&&t(3,r=a.drawInstructions),"propValue"in a&&t(0,u=a.propValue)},[u,d,m,r]}class Pt extends Ee{constructor(e){super(),ye(this,e,Ot,Ut,De,{drawInstructions:3,propValue:0})}}function st(s){let e,t,l,r,u,c,d,m,a,_,p,g,b,I,E,o=s[5]&&lt(s);return{c(){e=w("div"),t=w("h2"),l=L(s[1]),r=B(),u=w("div"),c=B(),d=w("div"),m=w("button"),a=B(),_=w("button"),p=B(),g=w("button"),b=B(),o&&o.c(),this.h()},l(v){e=k(v,"DIV",{class:!0});var T=y(e);t=k(T,"H2",{class:!0});var S=y(t);l=W(S,s[1]),S.forEach(f),r=q(T),u=k(T,"DIV",{id:!0,class:!0}),y(u).forEach(f),c=q(T),d=k(T,"DIV",{class:!0});var D=y(d);m=k(D,"BUTTON",{id:!0,class:!0}),y(m).forEach(f),a=q(D),_=k(D,"BUTTON",{id:!0,class:!0}),y(_).forEach(f),p=q(D),g=k(D,"BUTTON",{id:!0,class:!0}),y(g).forEach(f),D.forEach(f),b=q(T),o&&o.l(T),T.forEach(f),this.h()},h(){n(t,"class","svelte-15yvine"),n(u,"id","cloudstobe"),n(u,"class","svelte-15yvine"),n(m,"id","draw-button"),n(m,"class","enter-button svelte-15yvine"),n(_,"id","remix-button"),n(_,"class","enter-button svelte-15yvine"),n(g,"id","upload-button"),n(g,"class","enter-button svelte-15yvine"),n(d,"class","button-section svelte-15yvine"),n(e,"class","modal-info")},m(v,T){P(v,e,T),i(e,t),i(t,l),i(e,r),i(e,u),i(e,c),i(e,d),i(d,m),i(d,a),i(d,_),i(d,p),i(d,g),i(e,b),o&&o.m(e,null),I||(E=[V(m,"click",s[10]),V(_,"click",s[12]),V(g,"click",s[7])],I=!0)},p(v,T){T&2&&pt(l,v[1]),v[5]?o?o.p(v,T):(o=lt(v),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(v){v&&f(e),o&&o.d(),I=!1,_e(E)}}}function lt(s){let e,t,l,r,u,c,d=!s[6]&&ot(s),m=s[6]&&it();return{c(){e=w("input"),t=B(),d&&d.c(),l=B(),m&&m.c(),r=Re(),this.h()},l(a){e=k(a,"INPUT",{accept:!0,type:!0,id:!0,class:!0}),t=q(a),d&&d.l(a),l=q(a),m&&m.l(a),r=Re(),this.h()},h(){n(e,"accept",".png, .jpg, .jpeg"),n(e,"type","file"),n(e,"id","upload"),n(e,"class","svelte-15yvine")},m(a,_){P(a,e,_),P(a,t,_),d&&d.m(a,_),P(a,l,_),m&&m.m(a,_),P(a,r,_),u||(c=V(e,"change",s[8]),u=!0)},p(a,_){a[6]?d&&(d.d(1),d=null):d?d.p(a,_):(d=ot(a),d.c(),d.m(l.parentNode,l)),a[6]?m||(m=it(),m.c(),m.m(r.parentNode,r)):m&&(m.d(1),m=null)},d(a){a&&f(e),a&&f(t),d&&d.d(a),a&&f(l),m&&m.d(a),a&&f(r),u=!1,c()}}}function ot(s){let e,t,l,r;return{c(){e=w("button"),t=L("Upload"),this.h()},l(u){e=k(u,"BUTTON",{id:!0,class:!0});var c=y(e);t=W(c,"Upload"),c.forEach(f),this.h()},h(){n(e,"id","drawOnUpload-button"),n(e,"class","svelte-15yvine")},m(u,c){P(u,e,c),i(e,t),l||(r=V(e,"click",s[9]),l=!0)},p:$,d(u){u&&f(e),l=!1,r()}}}function it(s){let e,t;return{c(){e=w("p"),t=L("Please choose a smaller file"),this.h()},l(l){e=k(l,"P",{class:!0});var r=y(e);t=W(r,"Please choose a smaller file"),r.forEach(f),this.h()},h(){n(e,"class","svelte-15yvine")},m(l,r){P(l,e,r),i(e,t)},d(l){l&&f(e)}}}function Lt(s){let e,t,l,r,u,c,d,m,a,_,p,g,b,I,E,o,v,T,S,D=s[3]&&!s[2]&&st(s);return{c(){e=w("div"),t=w("div"),l=B(),r=w("div"),u=B(),c=w("h2"),d=L("Cloud Cities"),m=B(),a=w("div"),_=B(),D&&D.c(),p=B(),g=w("div"),b=w("div"),I=B(),E=w("button"),this.h()},l(N){e=k(N,"DIV",{class:!0,style:!0});var C=y(e);t=k(C,"DIV",{class:!0}),y(t).forEach(f),l=q(C),r=k(C,"DIV",{class:!0}),y(r).forEach(f),u=q(C),c=k(C,"H2",{id:!0,class:!0});var Y=y(c);d=W(Y,"Cloud Cities"),Y.forEach(f),m=q(C),a=k(C,"DIV",{class:!0}),y(a).forEach(f),_=q(C),D&&D.l(C),p=q(C),g=k(C,"DIV",{class:!0,style:!0});var M=y(g);b=k(M,"DIV",{id:!0}),y(b).forEach(f),I=q(M),E=k(M,"BUTTON",{id:!0,class:!0}),y(E).forEach(f),M.forEach(f),C.forEach(f),this.h()},h(){n(t,"class","icon-button repo-button svelte-15yvine"),n(r,"class","modal-container"),n(c,"id","title"),n(c,"class","svelte-15yvine"),n(a,"class","icon-button about-button"),n(b,"id","drawInstructions"),n(E,"id","begin-button"),n(E,"class","svelte-15yvine"),n(g,"class","modal-info"),A(g,"visibility",s[4]),n(e,"class","modal-container"),A(e,"background-image","url("+s[0]+")"),A(e,"background-size","cover"),A(e,"background-position","center")},m(N,C){P(N,e,C),i(e,t),i(e,l),i(e,r),i(e,u),i(e,c),i(c,d),i(e,m),i(e,a),i(e,_),D&&D.m(e,null),i(e,p),i(e,g),i(g,b),i(g,I),i(g,E),v=!0,T||(S=[V(t,"touchstart",s[13],{passive:!0}),V(t,"click",s[13]),V(a,"click",s[14]),V(E,"click",s[11])],T=!0)},p(N,[C]){N[3]&&!N[2]?D?D.p(N,C):(D=st(N),D.c(),D.m(e,p)):D&&(D.d(1),D=null),(!v||C&16)&&A(g,"visibility",N[4]),(!v||C&1)&&A(e,"background-image","url("+N[0]+")")},i(N){v||(vt(()=>{o||(o=Qe(e,Ze,{},!0)),o.run(1)}),v=!0)},o(N){o||(o=Qe(e,Ze,{},!1)),o.run(0),v=!1},d(N){N&&f(e),D&&D.d(),N&&o&&o.end(),T=!1,_e(S)}}}function Wt(s,e,t){const l=Se();let{propValue:r}=e,{cloudsToBe:u}=e,{drawInstructions:c}=e,{title:d}=e,{straightToInstructions:m}=e,a;Ye(async()=>{let M=document.getElementById("cloudstobe");M.innerHTML=u[0];let z=document.getElementById("draw-button"),x=document.getElementById("remix-button"),j=document.getElementById("upload-button");z.innerHTML=u[1],x.innerHTML=u[2],j.innerHTML=u[3],a=document.getElementById("drawInstructions"),a.innerHTML=c[0];let X=document.getElementById("begin-button");X.innerHTML=c[1]});let _=!0,p="hidden",g=!1,b;const I=()=>{t(5,g=!0)};let E;const o=()=>{t(6,E=!1);const z=document.getElementById("upload").files[0];if(z.size>1e7){t(6,E=!0);return}b=URL.createObjectURL(z)};let v;const T=()=>{t(3,_=!1),t(4,p="visible"),v="drawOnUploadImage"},S=()=>{t(3,_=!1),t(4,p="visible"),v="drawOnThisImage"},D=()=>{v==="drawOnThisImage"?l("startDrawing",!1):v==="drawOnUploadImage"&&l("startDrawing",b)},N=()=>{l("remixCanvas")},C=()=>{window.location.replace("/")},Y=()=>{window.open("https://cloudcities.studiotomassaraceno.org","_self")};return s.$$set=M=>{"propValue"in M&&t(0,r=M.propValue),"cloudsToBe"in M&&t(15,u=M.cloudsToBe),"drawInstructions"in M&&t(16,c=M.drawInstructions),"title"in M&&t(1,d=M.title),"straightToInstructions"in M&&t(2,m=M.straightToInstructions)},[r,d,m,_,p,g,E,I,o,T,S,D,N,C,Y,u,c]}class Ft extends Ee{constructor(e){super(),ye(this,e,Wt,Lt,De,{propValue:0,cloudsToBe:15,drawInstructions:16,title:1,straightToInstructions:2})}}function zt(s){let e,t,l,r,u,c,d,m,a;return{c(){e=w("div"),t=w("div"),l=w("p"),r=L("We recommend rotating your device into landscape mode before you begin."),u=B(),c=w("button"),d=L("I\u2019ve rotated my device"),this.h()},l(_){e=k(_,"DIV",{id:!0,class:!0});var p=y(e);t=k(p,"DIV",{class:!0});var g=y(t);l=k(g,"P",{class:!0});var b=y(l);r=W(b,"We recommend rotating your device into landscape mode before you begin."),b.forEach(f),u=q(g),c=k(g,"BUTTON",{class:!0});var I=y(c);d=W(I,"I\u2019ve rotated my device"),I.forEach(f),g.forEach(f),p.forEach(f),this.h()},h(){n(l,"class","svelte-ylw8e9"),n(c,"class","svelte-ylw8e9"),n(t,"class","modal-info svelte-ylw8e9"),n(e,"id","landscapemodal"),n(e,"class","svelte-ylw8e9")},m(_,p){P(_,e,p),i(e,t),i(t,l),i(l,r),i(t,u),i(t,c),i(c,d),m||(a=[V(c,"click",s[0]),V(c,"touchstart",s[0],{passive:!0})],m=!0)},p:$,i:$,o:$,d(_){_&&f(e),m=!1,_e(a)}}}function jt(s){const e=Se();return[()=>{e("closeLandscape")}]}class At extends Ee{constructor(e){super(),ye(this,e,jt,zt,De,{})}}function Rt(s){let e,t,l,r,u,c,d,m,a,_,p,g,b;return{c(){e=w("div"),t=w("div"),l=w("h2"),r=L("Submitting"),u=B(),c=w("h2"),d=L("."),m=B(),a=w("h2"),_=L("."),p=B(),g=w("h2"),b=L("."),this.h()},l(I){e=k(I,"DIV",{class:!0});var E=y(e);t=k(E,"DIV",{id:!0,class:!0});var o=y(t);l=k(o,"H2",{id:!0});var v=y(l);r=W(v,"Submitting"),v.forEach(f),u=q(o),c=k(o,"H2",{class:!0});var T=y(c);d=W(T,"."),T.forEach(f),m=q(o),a=k(o,"H2",{class:!0});var S=y(a);_=W(S,"."),S.forEach(f),p=q(o),g=k(o,"H2",{class:!0});var D=y(g);b=W(D,"."),D.forEach(f),o.forEach(f),E.forEach(f),this.h()},h(){n(l,"id","submitting"),n(c,"class","dot dot-1 svelte-1q092g9"),n(a,"class","dot dot-2 svelte-1q092g9"),n(g,"class","dot dot-3 svelte-1q092g9"),n(t,"id","submit-line"),n(t,"class","svelte-1q092g9"),n(e,"class","container svelte-1q092g9")},m(I,E){P(I,e,E),i(e,t),i(t,l),i(l,r),i(t,u),i(t,c),i(c,d),i(t,m),i(t,a),i(a,_),i(t,p),i(t,g),i(g,b)},p:$,i:$,o:$,d(I){I&&f(e)}}}class Yt extends Ee{constructor(e){super(),ye(this,e,null,Rt,De,{})}}function Jt(s){let e,t,l,r,u,c,d,m,a,_,p,g,b,I,E,o;return{c(){e=w("div"),t=w("div"),l=w("h2"),r=L("Thank you! Submission complete"),u=B(),c=w("p"),d=L("Your drawing will be reviewed shortly and subsequently published onto Cloud Cities."),m=B(),a=w("div"),_=w("button"),p=L("Return to drawing"),g=B(),b=w("button"),I=L("Visit the repository"),this.h()},l(v){e=k(v,"DIV",{class:!0});var T=y(e);t=k(T,"DIV",{class:!0});var S=y(t);l=k(S,"H2",{});var D=y(l);r=W(D,"Thank you! Submission complete"),D.forEach(f),u=q(S),c=k(S,"P",{style:!0});var N=y(c);d=W(N,"Your drawing will be reviewed shortly and subsequently published onto Cloud Cities."),N.forEach(f),m=q(S),a=k(S,"DIV",{class:!0});var C=y(a);_=k(C,"BUTTON",{class:!0});var Y=y(_);p=W(Y,"Return to drawing"),Y.forEach(f),g=q(C),b=k(C,"BUTTON",{class:!0});var M=y(b);I=W(M,"Visit the repository"),M.forEach(f),C.forEach(f),S.forEach(f),T.forEach(f),this.h()},h(){A(c,"text-align","center"),n(_,"class","svelte-wsonmu"),n(b,"class","svelte-wsonmu"),n(a,"class","flex-row"),n(t,"class","modal-info thank-you svelte-wsonmu"),n(e,"class","container svelte-wsonmu")},m(v,T){P(v,e,T),i(e,t),i(t,l),i(l,r),i(t,u),i(t,c),i(c,d),i(t,m),i(t,a),i(a,_),i(_,p),i(a,g),i(a,b),i(b,I),E||(o=[V(_,"click",s[0]),V(_,"touchstart",s[0],{passive:!0}),V(b,"click",s[1]),V(b,"touchstart",s[1],{passive:!0})],E=!0)},p:$,i:$,o:$,d(v){v&&f(e),E=!1,_e(o)}}}function Xt(s){const e=Se();return[()=>{e("returnToDraw")},()=>{e("returnHome")}]}class Gt extends Ee{constructor(e){super(),ye(this,e,Xt,Jt,De,{})}}function rt(s){let e,t;return e=new Ft({props:{title:s[12],drawInstructions:s[13],cloudsToBe:s[11],propValue:s[2],straightToInstructions:Qt}}),e.$on("startDrawing",s[16]),e.$on("remixCanvas",s[18]),{c(){he(e.$$.fragment)},l(l){pe(e.$$.fragment,l)},m(l,r){ve(e,l,r),t=!0},p(l,r){const u={};r&4096&&(u.title=l[12]),r&8192&&(u.drawInstructions=l[13]),r&2048&&(u.cloudsToBe=l[11]),r&4&&(u.propValue=l[2]),e.$set(u)},i(l){t||(O(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){be(e,l)}}}function nt(s){let e,t;return e=new At({}),e.$on("closeLandscape",s[20]),{c(){he(e.$$.fragment)},l(l){pe(e.$$.fragment,l)},m(l,r){ve(e,l,r),t=!0},p:$,i(l){t||(O(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){be(e,l)}}}function at(s){let e,t,l;function r(c){s[26](c)}let u={propValue:s[7],contributeModal:s[14],mobile:s[3]};return s[6]!==void 0&&(u.disableDraw=s[6]),e=new Mt({props:u}),_t.push(()=>gt(e,"disableDraw",r)),e.$on("openLandscapeModal",s[19]),e.$on("imageSubmitted",s[22]),e.$on("clickSubmit",s[21]),e.$on("cancelSubmit",s[24]),{c(){he(e.$$.fragment)},l(c){pe(e.$$.fragment,c)},m(c,d){ve(e,c,d),l=!0},p(c,d){const m={};d&128&&(m.propValue=c[7]),d&16384&&(m.contributeModal=c[14]),d&8&&(m.mobile=c[3]),!t&&d&64&&(t=!0,m.disableDraw=c[6],bt(()=>t=!1)),e.$set(m)},i(c){l||(O(e.$$.fragment,c),l=!0)},o(c){R(e.$$.fragment,c),l=!1},d(c){be(e,c)}}}function ut(s){let e,t,l,r;return e=new wt({props:{openComponent:"remix",image:!1}}),l=new kt({props:{repoImages:s[15],remix:!0}}),l.$on("drawOnImage",s[16]),{c(){he(e.$$.fragment),t=B(),he(l.$$.fragment)},l(u){pe(e.$$.fragment,u),t=q(u),pe(l.$$.fragment,u)},m(u,c){ve(e,u,c),P(u,t,c),ve(l,u,c),r=!0},p(u,c){const d={};c&32768&&(d.repoImages=u[15]),l.$set(d)},i(u){r||(O(e.$$.fragment,u),O(l.$$.fragment,u),r=!0)},o(u){R(e.$$.fragment,u),R(l.$$.fragment,u),r=!1},d(u){be(e,u),u&&f(t),be(l,u)}}}function ct(s){let e,t;return e=new Pt({props:{propValue:s[7],drawInstructions:s[13]}}),e.$on("closeInstructions",s[17]),{c(){he(e.$$.fragment)},l(l){pe(e.$$.fragment,l)},m(l,r){ve(e,l,r),t=!0},p(l,r){const u={};r&128&&(u.propValue=l[7]),r&8192&&(u.drawInstructions=l[13]),e.$set(u)},i(l){t||(O(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){be(e,l)}}}function dt(s){let e,t;return e=new Yt({}),{c(){he(e.$$.fragment)},l(l){pe(e.$$.fragment,l)},m(l,r){ve(e,l,r),t=!0},i(l){t||(O(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){be(e,l)}}}function ft(s){let e,t;return e=new Gt({}),e.$on("returnToDraw",s[23]),e.$on("returnHome",s[25]),{c(){he(e.$$.fragment)},l(l){pe(e.$$.fragment,l)},m(l,r){ve(e,l,r),t=!0},p:$,i(l){t||(O(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){be(e,l)}}}function Kt(s){let e,t,l,r,u,c,d,m,a=s[2]&&s[9]&&s[11].length>0&&rt(s),_=s[4]&&nt(s),p=s[8]&&at(s),g=s[0]&&ut(s),b=s[1]&&ct(s),I=s[10]&&dt(),E=s[5]&&ft(s);return{c(){a&&a.c(),e=B(),_&&_.c(),t=B(),p&&p.c(),l=B(),g&&g.c(),r=B(),b&&b.c(),u=B(),I&&I.c(),c=B(),E&&E.c(),d=Re()},l(o){a&&a.l(o),e=q(o),_&&_.l(o),t=q(o),p&&p.l(o),l=q(o),g&&g.l(o),r=q(o),b&&b.l(o),u=q(o),I&&I.l(o),c=q(o),E&&E.l(o),d=Re()},m(o,v){a&&a.m(o,v),P(o,e,v),_&&_.m(o,v),P(o,t,v),p&&p.m(o,v),P(o,l,v),g&&g.m(o,v),P(o,r,v),b&&b.m(o,v),P(o,u,v),I&&I.m(o,v),P(o,c,v),E&&E.m(o,v),P(o,d,v),m=!0},p(o,[v]){o[2]&&o[9]&&o[11].length>0?a?(a.p(o,v),v&2564&&O(a,1)):(a=rt(o),a.c(),O(a,1),a.m(e.parentNode,e)):a&&(Be(),R(a,1,1,()=>{a=null}),Ve()),o[4]?_?(_.p(o,v),v&16&&O(_,1)):(_=nt(o),_.c(),O(_,1),_.m(t.parentNode,t)):_&&(Be(),R(_,1,1,()=>{_=null}),Ve()),o[8]?p?(p.p(o,v),v&256&&O(p,1)):(p=at(o),p.c(),O(p,1),p.m(l.parentNode,l)):p&&(Be(),R(p,1,1,()=>{p=null}),Ve()),o[0]?g?(g.p(o,v),v&1&&O(g,1)):(g=ut(o),g.c(),O(g,1),g.m(r.parentNode,r)):g&&(Be(),R(g,1,1,()=>{g=null}),Ve()),o[1]?b?(b.p(o,v),v&2&&O(b,1)):(b=ct(o),b.c(),O(b,1),b.m(u.parentNode,u)):b&&(Be(),R(b,1,1,()=>{b=null}),Ve()),o[10]?I?v&1024&&O(I,1):(I=dt(),I.c(),O(I,1),I.m(c.parentNode,c)):I&&(Be(),R(I,1,1,()=>{I=null}),Ve()),o[5]?E?(E.p(o,v),v&32&&O(E,1)):(E=ft(o),E.c(),O(E,1),E.m(d.parentNode,d)):E&&(Be(),R(E,1,1,()=>{E=null}),Ve())},i(o){m||(O(a),O(_),O(p),O(g),O(b),O(I),O(E),m=!0)},o(o){R(a),R(_),R(p),R(g),R(b),R(I),R(E),m=!1},d(o){a&&a.d(o),o&&f(e),_&&_.d(o),o&&f(t),p&&p.d(o),o&&f(l),g&&g.d(o),o&&f(r),b&&b.d(o),o&&f(u),I&&I.d(o),o&&f(c),E&&E.d(o),o&&f(d)}}}let Qt=!1;function Zt(s,e,t){let l,r,u,c,d;Le(s,It,H=>t(11,l=H)),Le(s,Et,H=>t(12,r=H)),Le(s,yt,H=>t(13,u=H)),Le(s,Dt,H=>t(14,c=H)),Le(s,Tt,H=>t(15,d=H));let m=!1,a=!1,_,p,g,b,I=!1;Ye(async()=>{window.addEventListener("gesturechange",function(te){te.preventDefault()},!1);let H=window.screen.width<window.outerWidth?window.screen.width:window.outerWidth;t(3,p=H<500);let G=await(await fetch("https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=48&per_page=50")).json(),Q=Math.floor(Math.random()*G.length);t(2,_=G[Q].source_url)});let E,o=!1,v=!0;const T=H=>{H.detail?t(7,E=H.detail):t(7,E=_),m?(t(1,a=!0),t(0,m=!1),t(8,o=!0),t(7,E=H.detail.link),t(6,I=!0)):(t(9,v=!1),t(8,o=!0))},S=()=>{t(1,a=!1),t(6,I=!1),N&&t(4,g=!0)},D=()=>{t(0,m=!0),t(9,v=!1)};let N;const C=()=>{N=!0,a||t(4,g=!0)},Y=()=>{t(4,g=!1)};let M;const z=()=>{t(10,M=!0),t(6,I=!0)},x=()=>{t(10,M=!1),t(5,b=!0)},j=()=>{t(5,b=!1),t(6,I=!1)},X=()=>{t(6,I=!1)},ee=()=>{window.open("https://cloudcities.org","_self")};function U(H){I=H,t(6,I)}return[m,a,_,p,g,b,I,E,o,v,M,l,r,u,c,d,T,S,D,C,Y,z,x,j,X,ee,U]}class ts extends Ee{constructor(e){super(),ye(this,e,Zt,Kt,De,{})}}export{ts as default};
