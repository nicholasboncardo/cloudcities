import{S as pe,i as ge,s as we,e as m,c as p,a as E,d,b as u,g as H,K as ze,E as me,L as Te,v as Ve,t as R,k as V,h as Y,m as B,f as oe,J as n,M as $,N as C,O as ne,w as _e,x as be,y as Ie,q as J,o as ee,B as ke,P as Ge,Q as Je,R as Oe,l as Pe,p as Ee,T as ye,n as De}from"../chunks/index-54fb5827.js";import{f as Se,G as Ke,d as Qe,c as Ze,r as xe}from"../chunks/wpTexts-f6d33e4b.js";import"../chunks/index-6a4dd393.js";function $e(l){let e,t,s;return{c(){e=m("div"),this.h()},l(c){e=p(c,"DIV",{style:!0,class:!0}),E(e).forEach(d),this.h()},h(){u(e,"style",l[0]),u(e,"class","m-0")},m(c,i){H(c,e,i),t||(s=ze(l[1].call(null,e)),t=!0)},p(c,[i]){i&1&&u(e,"style",c[0])},i:me,o:me,d(c){c&&d(e),t=!1,s()}}}function et(l,e){return e.forEach(([t,s])=>l[t]=s),l}function tt(l,e,t){let{target:s=void 0}=e,{sketch:c=void 0}=e,{parentDivStyle:i="display: block;"}=e,{debug:r=!1}=e,o;const a=Te(),g={ref(){a("ref",s)},instance(){a("instance",o)}};function k(w){return t(2,s=w),{destroy(){t(2,s=void 0)}}}return Ve(async()=>{const w=await import("../chunks/p5.min-21ab2ccd.js").then(function(I){return I.p}),{default:y}=w,h=Object.entries(w).filter(([I,v])=>v instanceof Function&&I[0]!=="_"&&I!=="default");r&&console.log("available p5 native classes",h),o=new y(I=>(I=et(I,h),r&&console.log("p5 instance",I),window._p5Instance=I,c(I)),s),g.ref(),g.instance()}),l.$$set=w=>{"target"in w&&t(2,s=w.target),"sketch"in w&&t(3,c=w.sketch),"parentDivStyle"in w&&t(0,i=w.parentDivStyle),"debug"in w&&t(4,r=w.debug)},[i,k,s,c,r]}class st extends pe{constructor(e){super(),ge(this,e,tt,$e,we,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function Le(l){let e,t,s,c,i,r,o,a,g,k,w,y,f,h,I,v,D,_,T,O,N,q,X;return{c(){e=m("div"),t=m("div"),s=m("div"),c=m("p"),i=R("width"),r=V(),o=m("div"),a=m("div"),g=V(),k=m("div"),w=V(),y=m("div"),f=V(),h=m("div"),I=m("p"),v=R("color"),D=V(),_=m("div"),T=m("input"),O=V(),N=m("div"),this.h()},l(P){e=p(P,"DIV",{class:!0});var U=E(e);t=p(U,"DIV",{class:!0});var z=E(t);s=p(z,"DIV",{class:!0});var Q=E(s);c=p(Q,"P",{});var W=E(c);i=Y(W,"width"),W.forEach(d),r=B(Q),o=p(Q,"DIV",{class:!0});var K=E(o);a=p(K,"DIV",{class:!0,id:!0}),E(a).forEach(d),g=B(K),k=p(K,"DIV",{class:!0,id:!0}),E(k).forEach(d),w=B(K),y=p(K,"DIV",{class:!0,id:!0}),E(y).forEach(d),K.forEach(d),Q.forEach(d),f=B(z),h=p(z,"DIV",{class:!0});var A=E(h);I=p(A,"P",{});var G=E(I);v=Y(G,"color"),G.forEach(d),D=B(A),_=p(A,"DIV",{class:!0});var le=E(_);T=p(le,"INPUT",{type:!0,min:!0,max:!0,id:!0,style:!0,class:!0}),le.forEach(d),A.forEach(d),z.forEach(d),O=B(U),N=p(U,"DIV",{class:!0}),E(N).forEach(d),U.forEach(d),this.h()},h(){u(a,"class","stroke-button svelte-1h05qwi"),u(a,"id","small-stroke"),u(k,"class","stroke-button svelte-1h05qwi"),u(k,"id","medium-stroke"),u(y,"class","stroke-button svelte-1h05qwi"),u(y,"id","big-stroke"),u(o,"class","stroke-width svelte-1h05qwi"),u(s,"class","style-section svelte-1h05qwi"),u(T,"type","range"),u(T,"min","0"),u(T,"max","255"),u(T,"id","color-slider"),oe(T,"background-color","rgb("+l[0]+","+l[1]+","+l[2]),u(T,"class","svelte-1h05qwi"),u(_,"class","stroke-color svelte-1h05qwi"),u(h,"class","style-section svelte-1h05qwi"),u(t,"class","modal-center draw-settings svelte-1h05qwi"),u(N,"class","icon-button exit-button svelte-1h05qwi"),u(e,"class","container svelte-1h05qwi")},m(P,U){H(P,e,U),n(e,t),n(t,s),n(s,c),n(c,i),n(s,r),n(s,o),n(o,a),n(o,g),n(o,k),n(o,w),n(o,y),n(t,f),n(t,h),n(h,I),n(I,v),n(h,D),n(h,_),n(_,T),$(T,l[0]),n(e,O),n(e,N),q||(X=[C(a,"click",l[12]),C(k,"click",l[12]),C(y,"click",l[12]),C(T,"change",l[15]),C(T,"change",l[21]),C(T,"input",l[21]),C(N,"click",l[19]),C(N,"touchstart",l[19],{passive:!0})],q=!0)},p(P,U){U[0]&7&&oe(T,"background-color","rgb("+P[0]+","+P[1]+","+P[2]),U[0]&1&&$(T,P[0])},d(P){P&&d(e),q=!1,ne(X)}}}function Me(l){let e,t,s,c,i,r,o,a,g,k,w,y,f,h,I,v,D,_,T,O,N,q,X,P,U,z,Q,W,K,A,G,le,ie,Z,re,ae,ue,te,b,j,S=l[7]&&He();return{c(){e=m("div"),t=m("div"),s=m("h2"),c=R("Contribute to the Cloud Cities repository"),i=V(),r=m("div"),o=m("p"),a=R("Cloud City"),g=V(),k=m("input"),w=V(),y=m("div"),f=m("p"),h=R("Location"),I=V(),v=m("input"),D=V(),_=m("div"),T=m("p"),O=R("Description"),N=V(),q=m("input"),X=V(),P=m("div"),U=m("p"),z=R("Name (optional)"),Q=V(),W=m("input"),K=V(),A=m("div"),G=m("button"),le=R("Submit"),ie=V(),Z=m("button"),re=R("Download"),ae=V(),S&&S.c(),ue=V(),te=m("div"),this.h()},l(L){e=p(L,"DIV",{class:!0});var F=E(e);t=p(F,"DIV",{class:!0});var M=E(t);s=p(M,"H2",{});var ce=E(s);c=Y(ce,"Contribute to the Cloud Cities repository"),ce.forEach(d),i=B(M),r=p(M,"DIV",{class:!0});var x=E(r);o=p(x,"P",{class:!0});var se=E(o);a=Y(se,"Cloud City"),se.forEach(d),g=B(x),k=p(x,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),x.forEach(d),w=B(M),y=p(M,"DIV",{class:!0});var de=E(y);f=p(de,"P",{class:!0});var Be=E(f);h=Y(Be,"Location"),Be.forEach(d),I=B(de),v=p(de,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),de.forEach(d),D=B(M),_=p(M,"DIV",{class:!0});var fe=E(_);T=p(fe,"P",{class:!0});var qe=E(T);O=Y(qe,"Description"),qe.forEach(d),N=B(fe),q=p(fe,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),fe.forEach(d),X=B(M),P=p(M,"DIV",{class:!0});var he=E(P);U=p(he,"P",{class:!0});var Ce=E(U);z=Y(Ce,"Name (optional)"),Ce.forEach(d),Q=B(he),W=p(he,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),he.forEach(d),K=B(M),A=p(M,"DIV",{class:!0});var ve=E(A);G=p(ve,"BUTTON",{id:!0,class:!0});var Ue=E(G);le=Y(Ue,"Submit"),Ue.forEach(d),ie=B(ve),Z=p(ve,"BUTTON",{id:!0,class:!0});var Ne=E(Z);re=Y(Ne,"Download"),Ne.forEach(d),ve.forEach(d),ae=B(M),S&&S.l(M),M.forEach(d),ue=B(F),te=p(F,"DIV",{class:!0}),E(te).forEach(d),F.forEach(d),this.h()},h(){u(o,"class","svelte-1h05qwi"),u(k,"type","text"),u(k,"id","input-username"),u(k,"data-lpignore","true"),u(k,"class","svelte-1h05qwi"),u(r,"class","input-section svelte-1h05qwi"),u(f,"class","svelte-1h05qwi"),u(v,"type","text"),u(v,"id","input-username"),u(v,"data-lpignore","true"),u(v,"class","svelte-1h05qwi"),u(y,"class","input-section svelte-1h05qwi"),u(T,"class","svelte-1h05qwi"),u(q,"type","text"),u(q,"id","input-description"),u(q,"data-lpignore","true"),u(q,"class","svelte-1h05qwi"),u(_,"class","input-section svelte-1h05qwi"),u(U,"class","svelte-1h05qwi"),u(W,"type","text"),u(W,"id","input-name"),u(W,"data-lpignore","true"),u(W,"class","svelte-1h05qwi"),u(P,"class","input-section svelte-1h05qwi"),u(G,"id","submit-button"),u(G,"class","svelte-1h05qwi"),u(Z,"id","download-button"),u(Z,"class","svelte-1h05qwi"),u(A,"class","flex-row"),u(t,"class","modal-center submit-image svelte-1h05qwi"),u(te,"class","icon-button exit-button svelte-1h05qwi"),u(e,"class","container svelte-1h05qwi")},m(L,F){H(L,e,F),n(e,t),n(t,s),n(s,c),n(t,i),n(t,r),n(r,o),n(o,a),n(r,g),n(r,k),$(k,l[3]),n(t,w),n(t,y),n(y,f),n(f,h),n(y,I),n(y,v),$(v,l[4]),n(t,D),n(t,_),n(_,T),n(T,O),n(_,N),n(_,q),$(q,l[5]),n(t,X),n(t,P),n(P,U),n(U,z),n(P,Q),n(P,W),$(W,l[6]),n(t,K),n(t,A),n(A,G),n(G,le),n(A,ie),n(A,Z),n(Z,re),n(t,ae),S&&S.m(t,null),n(e,ue),n(e,te),b||(j=[C(k,"input",l[22]),C(v,"input",l[23]),C(q,"input",l[24]),C(W,"input",l[25]),C(G,"click",l[13]),C(Z,"click",l[14]),C(te,"click",l[19]),C(te,"touchstart",l[19],{passive:!0})],b=!0)},p(L,F){F[0]&8&&k.value!==L[3]&&$(k,L[3]),F[0]&16&&v.value!==L[4]&&$(v,L[4]),F[0]&32&&q.value!==L[5]&&$(q,L[5]),F[0]&64&&W.value!==L[6]&&$(W,L[6]),L[7]?S||(S=He(),S.c(),S.m(t,null)):S&&(S.d(1),S=null)},d(L){L&&d(e),S&&S.d(),b=!1,ne(j)}}}function He(l){let e,t;return{c(){e=m("p"),t=R("We need more Information")},l(s){e=p(s,"P",{});var c=E(e);t=Y(c,"We need more Information"),c.forEach(d)},m(s,c){H(s,e,c),n(e,t)},d(s){s&&d(e)}}}function We(l){let e,t,s,c,i,r,o,a,g,k,w,y,f,h,I,v;return{c(){e=m("div"),t=m("div"),s=m("h2"),c=R("Thank you! Submission complete"),i=V(),r=m("p"),o=R("Your drawing will be reviewed shortly and subsequently published onto Cloud Cities."),a=V(),g=m("div"),k=m("a"),w=m("button"),y=R("Return to drawing"),f=V(),h=m("a"),I=m("button"),v=R("Visit the repository"),this.h()},l(D){e=p(D,"DIV",{class:!0});var _=E(e);t=p(_,"DIV",{class:!0});var T=E(t);s=p(T,"H2",{});var O=E(s);c=Y(O,"Thank you! Submission complete"),O.forEach(d),i=B(T),r=p(T,"P",{});var N=E(r);o=Y(N,"Your drawing will be reviewed shortly and subsequently published onto Cloud Cities."),N.forEach(d),a=B(T),g=p(T,"DIV",{class:!0});var q=E(g);k=p(q,"A",{href:!0,class:!0});var X=E(k);w=p(X,"BUTTON",{class:!0});var P=E(w);y=Y(P,"Return to drawing"),P.forEach(d),X.forEach(d),f=B(q),h=p(q,"A",{href:!0,class:!0});var U=E(h);I=p(U,"BUTTON",{class:!0});var z=E(I);v=Y(z,"Visit the repository"),z.forEach(d),U.forEach(d),q.forEach(d),T.forEach(d),_.forEach(d),this.h()},h(){u(w,"class","svelte-1h05qwi"),u(k,"href","/draw"),u(k,"class","href svelte-1h05qwi"),u(I,"class","svelte-1h05qwi"),u(h,"href","/"),u(h,"class","hred svelte-1h05qwi"),u(g,"class","flex-row svelte-1h05qwi"),u(t,"class","modal-center svelte-1h05qwi"),u(e,"class","container svelte-1h05qwi")},m(D,_){H(D,e,_),n(e,t),n(t,s),n(s,c),n(t,i),n(t,r),n(r,o),n(t,a),n(t,g),n(g,k),n(k,w),n(w,y),n(g,f),n(g,h),n(h,I),n(I,v)},d(D){D&&d(e)}}}function je(l){let e,t,s,c,i;return{c(){e=m("div"),t=V(),s=m("div"),this.h()},l(r){e=p(r,"DIV",{class:!0,id:!0}),E(e).forEach(d),t=B(r),s=p(r,"DIV",{class:!0,id:!0}),E(s).forEach(d),this.h()},h(){u(e,"class","icon-button finished-drawing-button svelte-1h05qwi"),u(e,"id","finish-button"),u(s,"class","icon-button pallette-button svelte-1h05qwi"),u(s,"id","p-button")},m(r,o){H(r,e,o),H(r,t,o),H(r,s,o),c||(i=[C(e,"click",l[26]),C(e,"touchstart",l[27],{passive:!0}),C(e,"mouseenter",l[16]),C(e,"mouseleave",l[17]),C(s,"click",l[28]),C(s,"touchstart",l[29],{passive:!0}),C(s,"mouseenter",l[16]),C(s,"mouseleave",l[17])],c=!0)},p:me,d(r){r&&d(e),r&&d(t),r&&d(s),c=!1,ne(i)}}}function lt(l){let e,t,s,c,i,r,o,a,g,k,w,y;t=new st({props:{sketch:l[11]}});let f=l[9]&&Le(l),h=l[10]&&Me(l),I=l[8]&&We(),v=!l[9]&&!l[10]&&je(l);return{c(){e=m("div"),_e(t.$$.fragment),s=V(),c=m("a"),i=m("div"),r=V(),f&&f.c(),o=V(),h&&h.c(),a=V(),I&&I.c(),g=V(),v&&v.c(),this.h()},l(D){e=p(D,"DIV",{id:!0});var _=E(e);be(t.$$.fragment,_),s=B(_),c=p(_,"A",{href:!0});var T=E(c);i=p(T,"DIV",{class:!0}),E(i).forEach(d),T.forEach(d),r=B(_),f&&f.l(_),o=B(_),h&&h.l(_),a=B(_),I&&I.l(_),g=B(_),v&&v.l(_),_.forEach(d),this.h()},h(){u(i,"class","icon-button repo-button svelte-1h05qwi"),u(c,"href","/"),u(e,"id","canvas-container")},m(D,_){H(D,e,_),Ie(t,e,null),n(e,s),n(e,c),n(c,i),n(e,r),f&&f.m(e,null),n(e,o),h&&h.m(e,null),n(e,a),I&&I.m(e,null),n(e,g),v&&v.m(e,null),k=!0,w||(y=[C(i,"mouseenter",l[16]),C(i,"mouseleave",l[17]),C(i,"touchstart",l[18],{passive:!0})],w=!0)},p(D,_){D[9]?f?f.p(D,_):(f=Le(D),f.c(),f.m(e,o)):f&&(f.d(1),f=null),D[10]?h?h.p(D,_):(h=Me(D),h.c(),h.m(e,a)):h&&(h.d(1),h=null),D[8]?I||(I=We(),I.c(),I.m(e,g)):I&&(I.d(1),I=null),!D[9]&&!D[10]?v?v.p(D,_):(v=je(D),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},i(D){k||(J(t.$$.fragment,D),k=!0)},o(D){ee(t.$$.fragment,D),k=!1},d(D){D&&d(e),ke(t),f&&f.d(),h&&h.d(),I&&I.d(),v&&v.d(),w=!1,ne(y)}}}function ot(l,e,t){Te();let{propValue:s}=e,c=s,i=3,r=0,o=0,a=0,g;const k=b=>{let j;b.preload=()=>{console.log("preload"),j=b.loadImage(c)},b.setup=()=>{console.log("width: ",j.width),console.log("height: ",j.height),b.windowWidth>500||b.windowWidth<500&&j.width<j.height?b.createCanvas(b.windowWidth,b.windowHeight):b.windowWidth<500&&b.createCanvas(j.width/2,b.windowHeight),b.background(j);let x=document.getElementById("canvas-container");x.addEventListener("touchstart",se=>{se.touches.length===2&&(g=!0)}),x.addEventListener("touchmove",se=>{se.touches.length===2&&(g=!0)}),x.addEventListener("touchend",se=>{g&&(g=!1)})};let S=0,L=0,F=0,M=0,ce=.3;b.mousePressed=()=>{if(!(q||g||N||U))return S=b.mouseX,L=b.mouseY,F=b.mouseX,M=b.mouseY,!1},b.touchMoved=()=>{if(q||g||N||U)return;let x=b.mouseX,se=b.mouseY;return S+=(x-S)*ce,L+=(se-L)*ce,b.strokeWeight(i),b.stroke(r,o,a),b.line(S,L,F,M),F=S,M=L,!1},b.windowResized=()=>{b.resizeCanvas(b.windowWidth,b.windowHeight),b.background(j)}};let w=document.getElementsByClassName("stroke-button");const y=b=>{b.target.id==="small-stroke"?i=2:b.target.id==="medium-stroke"?i=4:b.target.id==="big-stroke"&&(i=6),w.forEach(j=>{j!==b.target?j.style.border="none":j.style.border="solid 4px #00D1FF"})};let f,h,I,v,D,_=!0;const T=()=>{if(f&&I&&_){_=!1,t(7,D=!1);let b=new FormData;b.append("title",f),b.append("title",h),b.append("description",I),b.append("name",v),document.getElementById("defaultCanvas0").toBlob(function(S){b.append("file",S),fetch("/addPostfromServer",{method:"POST",body:b})}),t(10,q=!1),t(8,O=!0)}else if(_)t(7,D=!0);else return};let O=!1,N=!1,q=!1;const X=()=>{let b=document.createElement("a");b.download="myCanvas.png",b.href=document.getElementById("defaultCanvas0").toDataURL(),b.click()},P=b=>{t(0,r=b.srcElement.value),t(1,o=b.srcElement.value),t(2,a=b.srcElement.value)};let U=!1;const z=()=>{U=!0,console.log("overbutton: ",U)},Q=()=>{U=!1,console.log("overbutton: ",U)},W=()=>{window.location.replace("/")},K=()=>{console.log("finishedDrawing: ",q),N&&t(9,N=!1),q&&t(10,q=!1),U=!1};function A(){r=Ge(this.value),t(0,r)}function G(){f=this.value,t(3,f)}function le(){h=this.value,t(4,h)}function ie(){I=this.value,t(5,I)}function Z(){v=this.value,t(6,v)}const re=()=>t(10,q=!q),ae=()=>(t(10,q=!q),console.log("touch event on pallette")),ue=()=>(t(9,N=!N),console.log("click event on pallette")),te=()=>(t(9,N=!N),console.log("touch event on pallette"));return l.$$set=b=>{"propValue"in b&&t(20,s=b.propValue)},[r,o,a,f,h,I,v,D,O,N,q,k,y,T,X,P,z,Q,W,K,s,A,G,le,ie,Z,re,ae,ue,te]}class nt extends pe{constructor(e){super(),ge(this,e,ot,lt,we,{propValue:20},null,[-1,-1])}}function Re(l){let e,t,s,c,i,r,o,a,g,k,w,y,f,h,I,v=l[3]&&Ye(l);return{c(){e=m("div"),t=m("h2"),s=R("Clouds to be..."),c=V(),i=m("div"),r=V(),o=m("div"),a=m("button"),g=V(),k=m("button"),w=V(),y=m("button"),f=V(),v&&v.c(),this.h()},l(D){e=p(D,"DIV",{class:!0});var _=E(e);t=p(_,"H2",{class:!0});var T=E(t);s=Y(T,"Clouds to be..."),T.forEach(d),c=B(_),i=p(_,"DIV",{id:!0}),E(i).forEach(d),r=B(_),o=p(_,"DIV",{class:!0});var O=E(o);a=p(O,"BUTTON",{id:!0,class:!0}),E(a).forEach(d),g=B(O),k=p(O,"BUTTON",{id:!0,class:!0}),E(k).forEach(d),w=B(O),y=p(O,"BUTTON",{id:!0,class:!0}),E(y).forEach(d),O.forEach(d),f=B(_),v&&v.l(_),_.forEach(d),this.h()},h(){u(t,"class","svelte-1a26x8d"),u(i,"id","cloudstobe"),u(a,"id","draw-button"),u(a,"class","enter-button svelte-1a26x8d"),u(k,"id","remix-button"),u(k,"class","enter-button svelte-1a26x8d"),u(y,"id","upload-button"),u(y,"class","enter-button svelte-1a26x8d"),u(o,"class","button-section svelte-1a26x8d"),u(e,"class","start-draw-center svelte-1a26x8d")},m(D,_){H(D,e,_),n(e,t),n(t,s),n(e,c),n(e,i),n(e,r),n(e,o),n(o,a),n(o,g),n(o,k),n(o,w),n(o,y),n(e,f),v&&v.m(e,null),h||(I=[C(a,"click",l[7]),C(k,"click",l[9]),C(y,"click",l[4])],h=!0)},p(D,_){D[3]?v?v.p(D,_):(v=Ye(D),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},d(D){D&&d(e),v&&v.d(),h=!1,ne(I)}}}function Ye(l){let e,t,s,c,i,r;return{c(){e=m("input"),t=V(),s=m("button"),c=R("Start"),this.h()},l(o){e=p(o,"INPUT",{accept:!0,type:!0,id:!0}),t=B(o),s=p(o,"BUTTON",{});var a=E(s);c=Y(a,"Start"),a.forEach(d),this.h()},h(){u(e,"accept",".png, .jpg, .jpeg"),u(e,"type","file"),u(e,"id","upload")},m(o,a){H(o,e,a),H(o,t,a),H(o,s,a),n(s,c),i||(r=[C(e,"change",l[5]),C(s,"click",l[6])],i=!0)},p:me,d(o){o&&d(e),o&&d(t),o&&d(s),i=!1,ne(r)}}}function it(l){let e,t,s,c,i,r,o,a,g,k,w=l[1]&&Re(l);return{c(){e=m("div"),w&&w.c(),t=V(),s=m("div"),c=m("div"),i=V(),r=m("button"),this.h()},l(y){e=p(y,"DIV",{class:!0,style:!0});var f=E(e);w&&w.l(f),t=B(f),s=p(f,"DIV",{class:!0,style:!0});var h=E(s);c=p(h,"DIV",{id:!0}),E(c).forEach(d),i=B(h),r=p(h,"BUTTON",{id:!0}),E(r).forEach(d),h.forEach(d),f.forEach(d),this.h()},h(){u(c,"id","drawInstructions"),u(r,"id","begin-button"),u(s,"class","start-draw-center svelte-1a26x8d"),oe(s,"visibility",l[2]),u(e,"class","start-draw-container svelte-1a26x8d"),oe(e,"background-image","url("+l[0]+")"),oe(e,"background-size","cover"),oe(e,"background-position","center")},m(y,f){H(y,e,f),w&&w.m(e,null),n(e,t),n(e,s),n(s,c),n(s,i),n(s,r),a=!0,g||(k=C(r,"click",l[8]),g=!0)},p(y,[f]){y[1]?w?w.p(y,f):(w=Re(y),w.c(),w.m(e,t)):w&&(w.d(1),w=null),(!a||f&4)&&oe(s,"visibility",y[2]),(!a||f&1)&&oe(e,"background-image","url("+y[0]+")")},i(y){a||(Je(()=>{o||(o=Oe(e,Se,{},!0)),o.run(1)}),a=!0)},o(y){o||(o=Oe(e,Se,{},!1)),o.run(0),a=!1},d(y){y&&d(e),w&&w.d(),y&&o&&o.end(),g=!1,k()}}}function rt(l,e,t){const s=Te();let{propValue:c}=e,{cloudsToBe:i}=e,{drawInstructions:r}=e,o;Ve(async()=>{let T=document.getElementById("cloudstobe");T.innerHTML=i[0],o=document.getElementById("drawInstructions"),o.innerHTML=r[0];let O=document.getElementById("draw-button"),N=document.getElementById("remix-button"),q=document.getElementById("upload-button");O.innerHTML=i[1],N.innerHTML=i[2],q.innerHTML=i[3];let X=document.getElementById("begin-button");X.innerHTML=r[1]});let a=!0,g="hidden",k=!1,w;const y=()=>{t(3,k=!0)},f=()=>{const O=document.getElementById("upload").files[0];w=URL.createObjectURL(O),console.log("chooseImage: ",w)};let h;const I=()=>{t(1,a=!1),t(2,g="visible"),h="drawOnUploadImage"},v=()=>{t(1,a=!1),t(2,g="visible"),h="drawOnThisImage",console.log("instructionsText: ",o)},D=()=>{h==="drawOnThisImage"?s("startDrawing",!1):h==="drawOnUploadImage"&&s("startDrawing",w)},_=()=>{s("remixCanvas")};return l.$$set=T=>{"propValue"in T&&t(0,c=T.propValue),"cloudsToBe"in T&&t(10,i=T.cloudsToBe),"drawInstructions"in T&&t(11,r=T.drawInstructions)},[c,a,g,k,y,f,I,v,D,_,i,r]}class at extends pe{constructor(e){super(),ge(this,e,rt,it,we,{propValue:0,cloudsToBe:10,drawInstructions:11})}}function Ae(l){let e,t;return e=new at({props:{drawInstructions:l[5],cloudsToBe:l[6],propValue:l[1]}}),e.$on("startDrawing",l[8]),e.$on("remixCanvas",l[9]),{c(){_e(e.$$.fragment)},l(s){be(e.$$.fragment,s)},m(s,c){Ie(e,s,c),t=!0},p(s,c){const i={};c&32&&(i.drawInstructions=s[5]),c&64&&(i.cloudsToBe=s[6]),c&2&&(i.propValue=s[1]),e.$set(i)},i(s){t||(J(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){ke(e,s)}}}function Fe(l){let e,t;return e=new nt({props:{propValue:l[2]}}),{c(){_e(e.$$.fragment)},l(s){be(e.$$.fragment,s)},m(s,c){Ie(e,s,c),t=!0},p(s,c){const i={};c&4&&(i.propValue=s[2]),e.$set(i)},i(s){t||(J(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){ke(e,s)}}}function Xe(l){let e,t;return e=new Ke({props:{repoImages:l[7],remix:!0}}),e.$on("drawOnImage",l[8]),{c(){_e(e.$$.fragment)},l(s){be(e.$$.fragment,s)},m(s,c){Ie(e,s,c),t=!0},p(s,c){const i={};c&128&&(i.repoImages=s[7]),e.$set(i)},i(s){t||(J(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){ke(e,s)}}}function ut(l){let e,t,s,c,i=l[1]&&l[4]&&Ae(l),r=l[3]&&Fe(l),o=l[0]&&Xe(l);return{c(){i&&i.c(),e=V(),r&&r.c(),t=V(),o&&o.c(),s=Pe()},l(a){i&&i.l(a),e=B(a),r&&r.l(a),t=B(a),o&&o.l(a),s=Pe()},m(a,g){i&&i.m(a,g),H(a,e,g),r&&r.m(a,g),H(a,t,g),o&&o.m(a,g),H(a,s,g),c=!0},p(a,[g]){a[1]&&a[4]?i?(i.p(a,g),g&18&&J(i,1)):(i=Ae(a),i.c(),J(i,1),i.m(e.parentNode,e)):i&&(De(),ee(i,1,1,()=>{i=null}),Ee()),a[3]?r?(r.p(a,g),g&8&&J(r,1)):(r=Fe(a),r.c(),J(r,1),r.m(t.parentNode,t)):r&&(De(),ee(r,1,1,()=>{r=null}),Ee()),a[0]?o?(o.p(a,g),g&1&&J(o,1)):(o=Xe(a),o.c(),J(o,1),o.m(s.parentNode,s)):o&&(De(),ee(o,1,1,()=>{o=null}),Ee())},i(a){c||(J(i),J(r),J(o),c=!0)},o(a){ee(i),ee(r),ee(o),c=!1},d(a){i&&i.d(a),a&&d(e),r&&r.d(a),a&&d(t),o&&o.d(a),a&&d(s)}}}function ct(l,e,t){let s,c,i;ye(l,Qe,f=>t(5,s=f)),ye(l,Ze,f=>t(6,c=f)),ye(l,xe,f=>t(7,i=f));let r=!1,o;Ve(async()=>{let h=await(await fetch("https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=48")).json(),I=Math.floor(Math.random()*h.length);t(1,o=h[I].source_url)});let a,g=!1,k=!0;return[r,o,a,g,k,s,c,i,f=>{console.log("startDrawing: ",f.detail),f.detail?t(2,a=f.detail.link):(t(2,a=o),console.log("startDrawing BG: ",o)),r?(t(0,r=!1),t(4,k=!0),t(1,o=f.detail.link)):(t(4,k=!1),t(3,g=!0))},()=>{console.log("choose canvas"),t(0,r=!0),t(4,k=!1)}]}class vt extends pe{constructor(e){super(),ge(this,e,ct,ut,we,{})}}export{vt as default};
