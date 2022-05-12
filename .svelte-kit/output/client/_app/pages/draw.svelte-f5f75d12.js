import{S as ke,i as Ie,s as Ee,e as b,c as g,a as k,d as h,b as m,g as L,K as dt,E as ce,L as Fe,v as We,t as j,k as B,h as R,m as y,f as G,J as i,M as ie,N,O as Te,w as De,x as Be,y as ye,q as A,o as K,B as Ve,P as ft,j as mt,l as ze,Q as ht,R as Qe,p as Le,T as we,n as He}from"../chunks/index-c93fc7ab.js";import{f as Ze,G as pt,c as vt,d as _t,a as bt,b as gt,r as wt}from"../chunks/wpTitles-16503f3a.js";import"../chunks/index-a24d6f2a.js";function kt(l){let e,t,s;return{c(){e=b("div"),this.h()},l(o){e=g(o,"DIV",{style:!0,class:!0}),k(e).forEach(h),this.h()},h(){m(e,"style",l[0]),m(e,"class","m-0")},m(o,d){L(o,e,d),t||(s=dt(l[1].call(null,e)),t=!0)},p(o,[d]){d&1&&m(e,"style",o[0])},i:ce,o:ce,d(o){o&&h(e),t=!1,s()}}}function It(l,e){return e.forEach(([t,s])=>l[t]=s),l}function Et(l,e,t){let{target:s=void 0}=e,{sketch:o=void 0}=e,{parentDivStyle:d="display: block;"}=e,{debug:a=!1}=e,n;const u=Fe(),c={ref(){u("ref",s)},instance(){u("instance",n)}};function r(f){return t(2,s=f),{destroy(){t(2,s=void 0)}}}return We(async()=>{const f=await import("../chunks/p5.min-21ab2ccd.js").then(function(D){return D.p}),{default:E}=f,I=Object.entries(f).filter(([D,T])=>T instanceof Function&&D[0]!=="_"&&D!=="default");a&&console.log("available p5 native classes",I),n=new E(D=>(D=It(D,I),a&&console.log("p5 instance",D),window._p5Instance=D,o(D)),s),c.ref(),c.instance()}),l.$$set=f=>{"target"in f&&t(2,s=f.target),"sketch"in f&&t(3,o=f.sketch),"parentDivStyle"in f&&t(0,d=f.parentDivStyle),"debug"in f&&t(4,a=f.debug)},[d,r,s,o,a]}class Tt extends ke{constructor(e){super(),Ie(this,e,Et,kt,Ee,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function xe(l){let e,t,s,o,d,a,n,u,c,r,f,E,w,I,D,T,p,_,U,C,H,S,F;return{c(){e=b("div"),t=b("div"),s=b("div"),o=b("p"),d=j("width"),a=B(),n=b("div"),u=b("div"),c=B(),r=b("div"),f=B(),E=b("div"),w=B(),I=b("div"),D=b("p"),T=j("color"),p=B(),_=b("div"),U=b("input"),C=B(),H=b("div"),this.h()},l(M){e=g(M,"DIV",{class:!0});var V=k(e);t=g(V,"DIV",{class:!0});var O=k(t);s=g(O,"DIV",{class:!0});var X=k(s);o=g(X,"P",{});var Q=k(o);d=R(Q,"width"),Q.forEach(h),a=y(X),n=g(X,"DIV",{class:!0});var J=k(n);u=g(J,"DIV",{class:!0,id:!0,style:!0}),k(u).forEach(h),c=y(J),r=g(J,"DIV",{class:!0,id:!0,style:!0}),k(r).forEach(h),f=y(J),E=g(J,"DIV",{class:!0,id:!0,style:!0}),k(E).forEach(h),J.forEach(h),X.forEach(h),w=y(O),I=g(O,"DIV",{class:!0});var te=k(I);D=g(te,"P",{});var ae=k(D);T=R(ae,"color"),ae.forEach(h),p=y(te),_=g(te,"DIV",{class:!0});var q=k(_);U=g(q,"INPUT",{type:!0,min:!0,max:!0,id:!0,style:!0,class:!0}),q.forEach(h),te.forEach(h),O.forEach(h),C=y(V),H=g(V,"DIV",{class:!0}),k(H).forEach(h),V.forEach(h),this.h()},h(){m(u,"class","stroke-button svelte-12xo9mk"),m(u,"id","small-stroke"),G(u,"border",l[11]),m(r,"class","stroke-button svelte-12xo9mk"),m(r,"id","medium-stroke"),G(r,"border",l[12]),m(E,"class","stroke-button svelte-12xo9mk"),m(E,"id","big-stroke"),G(E,"border",l[13]),m(n,"class","stroke-width svelte-12xo9mk"),m(s,"class","style-section svelte-12xo9mk"),m(U,"type","range"),m(U,"min","0"),m(U,"max","255"),m(U,"id","color-slider"),G(U,"background-color","rgb("+l[0]+","+l[1]+","+l[2]),m(U,"class","svelte-12xo9mk"),m(_,"class","stroke-color svelte-12xo9mk"),m(I,"class","style-section svelte-12xo9mk"),m(t,"class","modal-center draw-settings svelte-12xo9mk"),m(H,"class","icon-button exit-button svelte-12xo9mk"),m(e,"class","container svelte-12xo9mk")},m(M,V){L(M,e,V),i(e,t),i(t,s),i(s,o),i(o,d),i(s,a),i(s,n),i(n,u),i(n,c),i(n,r),i(n,f),i(n,E),i(t,w),i(t,I),i(I,D),i(D,T),i(I,p),i(I,_),i(_,U),ie(U,l[0]),i(e,C),i(e,H),S||(F=[N(u,"click",l[16]),N(r,"click",l[16]),N(E,"click",l[16]),N(U,"change",l[19]),N(U,"change",l[29]),N(U,"input",l[29]),N(H,"click",l[23]),N(H,"touchstart",l[23],{passive:!0})],S=!0)},p(M,V){V[0]&2048&&G(u,"border",M[11]),V[0]&4096&&G(r,"border",M[12]),V[0]&8192&&G(E,"border",M[13]),V[0]&7&&G(U,"background-color","rgb("+M[0]+","+M[1]+","+M[2]),V[0]&1&&ie(U,M[0])},d(M){M&&h(e),S=!1,Te(F)}}}function $e(l){let e,t,s,o,d,a,n,u=l[14][0]+"",c,r,f,E,w,I,D=l[14][1]+"",T,p,_,U,C,H,S=l[14][2]+"",F,M,V,O,X,Q,J=l[14][3]+"",te,ae,q,me,se,de=l[14][4]+"",ue,he,le,oe,Ue=l[14][5]+"",pe,ve,ne,Ne=l[14][6]+"",_e,be,re,v=l[14][7]+"",z,Z,x,$,fe,ge,W=l[7]&&et();return{c(){e=b("div"),t=b("div"),s=b("h2"),o=j("Contribute to the Cloud Cities repository"),d=B(),a=b("div"),n=b("p"),c=j(u),r=B(),f=b("input"),E=B(),w=b("div"),I=b("p"),T=j(D),p=B(),_=b("input"),U=B(),C=b("div"),H=b("p"),F=j(S),M=B(),V=b("input"),O=B(),X=b("div"),Q=b("p"),te=j(J),ae=B(),q=b("input"),me=B(),se=b("p"),ue=j(de),he=B(),le=b("div"),oe=b("button"),pe=j(Ue),ve=B(),ne=b("button"),_e=j(Ne),be=B(),re=b("button"),z=j(v),Z=B(),W&&W.c(),x=B(),$=b("div"),this.h()},l(P){e=g(P,"DIV",{class:!0});var ee=k(e);t=g(ee,"DIV",{class:!0});var Y=k(t);s=g(Y,"H2",{});var je=k(s);o=R(je,"Contribute to the Cloud Cities repository"),je.forEach(h),d=y(Y),a=g(Y,"DIV",{class:!0});var Ce=k(a);n=g(Ce,"P",{class:!0});var Re=k(n);c=R(Re,u),Re.forEach(h),r=y(Ce),f=g(Ce,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),Ce.forEach(h),E=y(Y),w=g(Y,"DIV",{class:!0});var Se=k(w);I=g(Se,"P",{class:!0});var Ye=k(I);T=R(Ye,D),Ye.forEach(h),p=y(Se),_=g(Se,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),Se.forEach(h),U=y(Y),C=g(Y,"DIV",{class:!0});var Me=k(C);H=g(Me,"P",{class:!0});var Ae=k(H);F=R(Ae,S),Ae.forEach(h),M=y(Me),V=g(Me,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),Me.forEach(h),O=y(Y),X=g(Y,"DIV",{class:!0});var Oe=k(X);Q=g(Oe,"P",{class:!0});var Je=k(Q);te=R(Je,J),Je.forEach(h),ae=y(Oe),q=g(Oe,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),Oe.forEach(h),me=y(Y),se=g(Y,"P",{});var qe=k(se);ue=R(qe,de),qe.forEach(h),he=y(Y),le=g(Y,"DIV",{class:!0});var Pe=k(le);oe=g(Pe,"BUTTON",{id:!0,class:!0});var Xe=k(oe);pe=R(Xe,Ue),Xe.forEach(h),ve=y(Pe),ne=g(Pe,"BUTTON",{id:!0,class:!0});var Ge=k(ne);_e=R(Ge,Ne),Ge.forEach(h),Pe.forEach(h),be=y(Y),re=g(Y,"BUTTON",{id:!0,class:!0});var Ke=k(re);z=R(Ke,v),Ke.forEach(h),Z=y(Y),W&&W.l(Y),Y.forEach(h),x=y(ee),$=g(ee,"DIV",{class:!0}),k($).forEach(h),ee.forEach(h),this.h()},h(){m(n,"class","svelte-12xo9mk"),m(f,"type","text"),m(f,"id","input-username"),m(f,"data-lpignore","true"),m(f,"class","svelte-12xo9mk"),m(a,"class","input-section svelte-12xo9mk"),m(I,"class","svelte-12xo9mk"),m(_,"type","text"),m(_,"id","input-username"),m(_,"data-lpignore","true"),m(_,"class","svelte-12xo9mk"),m(w,"class","input-section svelte-12xo9mk"),m(H,"class","svelte-12xo9mk"),m(V,"type","text"),m(V,"id","input-description"),m(V,"data-lpignore","true"),m(V,"class","svelte-12xo9mk"),m(C,"class","input-section svelte-12xo9mk"),m(Q,"class","svelte-12xo9mk"),m(q,"type","text"),m(q,"id","input-name"),m(q,"data-lpignore","true"),m(q,"class","svelte-12xo9mk"),m(X,"class","input-section svelte-12xo9mk"),m(oe,"id","submit-button"),m(oe,"class","svelte-12xo9mk"),m(ne,"id","download-button"),m(ne,"class","svelte-12xo9mk"),m(le,"class","flex-row"),m(re,"id","cancel-button"),m(re,"class","svelte-12xo9mk"),m(t,"class","modal-center submit-image svelte-12xo9mk"),m($,"class","icon-button exit-button svelte-12xo9mk"),m(e,"class","container svelte-12xo9mk")},m(P,ee){L(P,e,ee),i(e,t),i(t,s),i(s,o),i(t,d),i(t,a),i(a,n),i(n,c),i(a,r),i(a,f),ie(f,l[3]),i(t,E),i(t,w),i(w,I),i(I,T),i(w,p),i(w,_),ie(_,l[4]),i(t,U),i(t,C),i(C,H),i(H,F),i(C,M),i(C,V),ie(V,l[5]),i(t,O),i(t,X),i(X,Q),i(Q,te),i(X,ae),i(X,q),ie(q,l[6]),i(t,me),i(t,se),i(se,ue),i(t,he),i(t,le),i(le,oe),i(oe,pe),i(le,ve),i(le,ne),i(ne,_e),i(t,be),i(t,re),i(re,z),i(t,Z),W&&W.m(t,null),i(e,x),i(e,$),fe||(ge=[N(f,"input",l[30]),N(_,"input",l[31]),N(V,"input",l[32]),N(q,"input",l[33]),N(oe,"click",l[17]),N(ne,"click",l[18]),N(re,"click",l[26]),N($,"click",l[23]),N($,"touchstart",l[23],{passive:!0})],fe=!0)},p(P,ee){ee[0]&8&&f.value!==P[3]&&ie(f,P[3]),ee[0]&16&&_.value!==P[4]&&ie(_,P[4]),ee[0]&32&&V.value!==P[5]&&ie(V,P[5]),ee[0]&64&&q.value!==P[6]&&ie(q,P[6]),P[7]?W||(W=et(),W.c(),W.m(t,null)):W&&(W.d(1),W=null)},d(P){P&&h(e),W&&W.d(),fe=!1,Te(ge)}}}function et(l){let e,t;return{c(){e=b("p"),t=j("We need more Information")},l(s){e=g(s,"P",{});var o=k(e);t=R(o,"We need more Information"),o.forEach(h)},m(s,o){L(s,e,o),i(e,t)},d(s){s&&h(e)}}}function tt(l){let e,t,s,o,d,a,n,u,c,r,f,E,w,I,D,T,p;return{c(){e=b("div"),t=b("div"),s=b("h2"),o=j("Thank you! Submission complete"),d=B(),a=b("p"),n=j("Your drawing will be reviewed shortly and subsequently published onto Cloud Cities."),u=B(),c=b("div"),r=b("button"),f=j("Return to drawing"),E=B(),w=b("a"),I=b("button"),D=j("Visit the repository"),this.h()},l(_){e=g(_,"DIV",{class:!0});var U=k(e);t=g(U,"DIV",{class:!0});var C=k(t);s=g(C,"H2",{});var H=k(s);o=R(H,"Thank you! Submission complete"),H.forEach(h),d=y(C),a=g(C,"P",{});var S=k(a);n=R(S,"Your drawing will be reviewed shortly and subsequently published onto Cloud Cities."),S.forEach(h),u=y(C),c=g(C,"DIV",{class:!0});var F=k(c);r=g(F,"BUTTON",{class:!0});var M=k(r);f=R(M,"Return to drawing"),M.forEach(h),E=y(F),w=g(F,"A",{href:!0,class:!0});var V=k(w);I=g(V,"BUTTON",{class:!0});var O=k(I);D=R(O,"Visit the repository"),O.forEach(h),V.forEach(h),F.forEach(h),C.forEach(h),U.forEach(h),this.h()},h(){m(r,"class","svelte-12xo9mk"),m(I,"class","svelte-12xo9mk"),m(w,"href","/"),m(w,"class","href svelte-12xo9mk"),m(c,"class","flex-row svelte-12xo9mk"),m(t,"class","modal-center svelte-12xo9mk"),m(e,"class","container svelte-12xo9mk")},m(_,U){L(_,e,U),i(e,t),i(t,s),i(s,o),i(t,d),i(t,a),i(a,n),i(t,u),i(t,c),i(c,r),i(r,f),i(c,E),i(c,w),i(w,I),i(I,D),T||(p=N(r,"click",l[25]),T=!0)},p:ce,d(_){_&&h(e),T=!1,p()}}}function st(l){let e,t,s,o,d;return{c(){e=b("div"),t=B(),s=b("div"),this.h()},l(a){e=g(a,"DIV",{class:!0,id:!0}),k(e).forEach(h),t=y(a),s=g(a,"DIV",{class:!0,id:!0}),k(s).forEach(h),this.h()},h(){m(e,"class","icon-button finished-drawing-button svelte-12xo9mk"),m(e,"id","finish-button"),m(s,"class","icon-button pallette-button svelte-12xo9mk"),m(s,"id","p-button")},m(a,n){L(a,e,n),L(a,t,n),L(a,s,n),o||(d=[N(e,"click",l[34]),N(e,"touchstart",l[35],{passive:!0}),N(e,"mouseenter",l[20]),N(e,"mouseleave",l[21]),N(s,"click",l[24]),N(s,"touchstart",l[36],{passive:!0}),N(s,"mouseenter",l[20]),N(s,"mouseleave",l[21])],o=!0)},p:ce,d(a){a&&h(e),a&&h(t),a&&h(s),o=!1,Te(d)}}}function Dt(l){let e,t,s,o,d,a,n,u,c,r,f,E;t=new Tt({props:{sketch:l[15]}});let w=l[9]&&xe(l),I=l[10]&&$e(l),D=l[8]&&tt(l),T=!l[9]&&!l[10]&&st(l);return{c(){e=b("div"),De(t.$$.fragment),s=B(),o=b("a"),d=b("div"),a=B(),w&&w.c(),n=B(),I&&I.c(),u=B(),D&&D.c(),c=B(),T&&T.c(),this.h()},l(p){e=g(p,"DIV",{id:!0});var _=k(e);Be(t.$$.fragment,_),s=y(_),o=g(_,"A",{href:!0});var U=k(o);d=g(U,"DIV",{class:!0}),k(d).forEach(h),U.forEach(h),a=y(_),w&&w.l(_),n=y(_),I&&I.l(_),u=y(_),D&&D.l(_),c=y(_),T&&T.l(_),_.forEach(h),this.h()},h(){m(d,"class","icon-button repo-button svelte-12xo9mk"),m(o,"href","/"),m(e,"id","canvas-container")},m(p,_){L(p,e,_),ye(t,e,null),i(e,s),i(e,o),i(o,d),i(e,a),w&&w.m(e,null),i(e,n),I&&I.m(e,null),i(e,u),D&&D.m(e,null),i(e,c),T&&T.m(e,null),r=!0,f||(E=[N(d,"mouseenter",l[20]),N(d,"mouseleave",l[21]),N(d,"touchstart",l[22],{passive:!0})],f=!0)},p(p,_){p[9]?w?w.p(p,_):(w=xe(p),w.c(),w.m(e,n)):w&&(w.d(1),w=null),p[10]?I?I.p(p,_):(I=$e(p),I.c(),I.m(e,u)):I&&(I.d(1),I=null),p[8]?D?D.p(p,_):(D=tt(p),D.c(),D.m(e,c)):D&&(D.d(1),D=null),!p[9]&&!p[10]?T?T.p(p,_):(T=st(p),T.c(),T.m(e,null)):T&&(T.d(1),T=null)},i(p){r||(A(t.$$.fragment,p),r=!0)},o(p){K(t.$$.fragment,p),r=!1},d(p){p&&h(e),Ve(t),w&&w.d(),I&&I.d(),D&&D.d(),T&&T.d(),f=!1,Te(E)}}}function Bt(l,e,t){let{propValue:s}=e,{contributeModal:o}=e,d=s;console.log("contribute modal: ",o);let a=o.map(v=>v.includes("<span>")?v.split("<span>").pop().split("<")[0]:v.includes("<p>")?v.split("<p>").pop().split("<")[0]:v.split('">').pop().split("<")[0]);console.log("contributeText: ",a);let n=4,u=0,c=0,r=0,f;const E=v=>{let z;v.preload=()=>{console.log("preload"),z=v.loadImage(d)},v.setup=()=>{if(console.log("width: ",z.width),console.log("height: ",z.height),v.windowWidth>500)if(z.width<z.height){let P=z.height/(z.width/v.windowWidth);v.createCanvas(v.windowWidth,P)}else v.createCanvas(v.windowWidth,v.windowHeight);else v.windowWidth<500&&z.width<z.height?v.createCanvas(v.windowWidth,v.windowHeight):v.windowWidth<500&&v.createCanvas(z.width/2,v.windowHeight);v.background(z);let W=document.getElementById("canvas-container");W.addEventListener("touchstart",P=>{P.touches.length===2&&(f=!0)}),W.addEventListener("touchmove",P=>{P.touches.length===2&&(f=!0)}),W.addEventListener("touchend",P=>{f&&(f=!1)})};let Z=0,x=0,$=0,fe=0,ge=.3;v.mousePressed=()=>{if(!(O||f||V||J))return Z=v.mouseX,x=v.mouseY,$=v.mouseX,fe=v.mouseY,!1},v.touchMoved=()=>{if(O||f||V||J)return;let W=v.mouseX,P=v.mouseY;return Z+=(W-Z)*ge,x+=(P-x)*ge,v.strokeWeight(n),v.stroke(u,c,r),v.line(Z,x,$,fe),$=Z,fe=x,!1},v.windowResized=()=>{v.resizeCanvas(v.windowWidth,v.windowHeight),v.background(z)}};let w=document.getElementsByClassName("stroke-button");const I=v=>{v.target.id==="small-stroke"?n=2:v.target.id==="medium-stroke"?n=4:v.target.id==="big-stroke"&&(n=6),w.forEach(z=>{z!==v.target?z.style.border="none":z.style.border="solid 4px #00D1FF"})};let D,T,p,_,U,C=JSON.parse(localStorage.getItem("cloudUploads"));const H=["none"];C||localStorage.setItem("cloudUploads",JSON.stringify(H));let S=!0;const F=()=>{if(D&&p&&S){C=JSON.parse(localStorage.getItem("cloudUploads")),console.log("uploads: ",C),C.push("upload"),localStorage.setItem("cloudUploads",JSON.stringify(C)),S=!1,t(7,U=!1);let v=new FormData;v.append("title",D),v.append("location",T),v.append("description",p),v.append("name",_),v.append("userUploads",C.length),document.getElementById("defaultCanvas0").toBlob(function(Z){v.append("cloud",Z),fetch("/addPostfromServer",{method:"POST",body:v}).then(x=>{console.log("result: ",x.status)})}),t(10,O=!1),t(8,M=!0)}else if(S)t(7,U=!0);else return};let M=!1,V=!1,O=!1;const X=()=>{let v=document.createElement("a");v.download="myCanvas.png",v.href=document.getElementById("defaultCanvas0").toDataURL(),v.click()},Q=v=>{t(0,u=v.srcElement.value),t(1,c=v.srcElement.value),t(2,r=v.srcElement.value)};let J=!1;const te=()=>{J=!0},ae=()=>{J=!1},q=()=>{window.location.replace("/")},me=()=>{V&&t(9,V=!1),O&&t(10,O=!1),J=!1};let se,de,ue;const he=()=>{t(9,V=!V),n===2?(t(11,se="solid 4px #00D1FF"),t(12,de="none"),t(13,ue="none")):n===4?(t(11,se="none"),t(12,de="solid 4px #00D1FF"),t(13,ue="none")):(t(11,se="none"),t(12,de="none"),t(13,ue="solid 4px #00D1FF"))},le=()=>{console.log("return to draw"),window.location.reload()},oe=()=>{t(10,O=!1),J=!1};function Ue(){u=ft(this.value),t(0,u)}function pe(){D=this.value,t(3,D)}function ve(){T=this.value,t(4,T)}function ne(){p=this.value,t(5,p)}function Ne(){_=this.value,t(6,_)}const _e=()=>t(10,O=!O),be=()=>(t(10,O=!O),console.log("touch event on pallette")),re=()=>t(9,V=!V);return l.$$set=v=>{"propValue"in v&&t(27,s=v.propValue),"contributeModal"in v&&t(28,o=v.contributeModal)},[u,c,r,D,T,p,_,U,M,V,O,se,de,ue,a,E,I,F,X,Q,te,ae,q,me,he,le,oe,s,o,Ue,pe,ve,ne,Ne,_e,be,re]}class yt extends ke{constructor(e){super(),Ie(this,e,Bt,Dt,Ee,{propValue:27,contributeModal:28},null,[-1,-1])}}function Vt(l){let e,t,s,o,d,a,n;return{c(){e=b("div"),t=b("div"),s=b("div"),o=B(),d=b("button"),this.h()},l(u){e=g(u,"DIV",{class:!0});var c=k(e);t=g(c,"DIV",{class:!0});var r=k(t);s=g(r,"DIV",{id:!0}),k(s).forEach(h),o=y(r),d=g(r,"BUTTON",{id:!0}),k(d).forEach(h),r.forEach(h),c.forEach(h),this.h()},h(){m(s,"id","drawInstructions"),m(d,"id","begin-button"),m(t,"class","start-draw-center svelte-1hjrlab"),m(e,"class","start-draw-container svelte-1hjrlab")},m(u,c){L(u,e,c),i(e,t),i(t,s),i(t,o),i(t,d),a||(n=N(d,"click",l[0]),a=!0)},p:ce,i:ce,o:ce,d(u){u&&h(e),a=!1,n()}}}function Ut(l,e,t){const s=Fe();let{drawInstructions:o}=e,d;We(async()=>{d=document.getElementById("drawInstructions"),d.innerHTML=o[0];let n=document.getElementById("begin-button");n.innerHTML=o[1]});const a=()=>{s("closeInstructions")};return l.$$set=n=>{"drawInstructions"in n&&t(1,o=n.drawInstructions)},[a,o]}class Nt extends ke{constructor(e){super(),Ie(this,e,Ut,Vt,Ee,{drawInstructions:1})}}function lt(l){let e,t,s,o,d,a,n,u,c,r,f,E,w,I,D,T=l[5]&&ot(l);return{c(){e=b("div"),t=b("h2"),s=j(l[1]),o=B(),d=b("div"),a=B(),n=b("div"),u=b("button"),c=B(),r=b("button"),f=B(),E=b("button"),w=B(),T&&T.c(),this.h()},l(p){e=g(p,"DIV",{class:!0});var _=k(e);t=g(_,"H2",{class:!0});var U=k(t);s=R(U,l[1]),U.forEach(h),o=y(_),d=g(_,"DIV",{id:!0}),k(d).forEach(h),a=y(_),n=g(_,"DIV",{class:!0});var C=k(n);u=g(C,"BUTTON",{id:!0,class:!0}),k(u).forEach(h),c=y(C),r=g(C,"BUTTON",{id:!0,class:!0}),k(r).forEach(h),f=y(C),E=g(C,"BUTTON",{id:!0,class:!0}),k(E).forEach(h),C.forEach(h),w=y(_),T&&T.l(_),_.forEach(h),this.h()},h(){m(t,"class","svelte-15aiz3m"),m(d,"id","cloudstobe"),m(u,"id","draw-button"),m(u,"class","enter-button svelte-15aiz3m"),m(r,"id","remix-button"),m(r,"class","enter-button svelte-15aiz3m"),m(E,"id","upload-button"),m(E,"class","enter-button svelte-15aiz3m"),m(n,"class","button-section svelte-15aiz3m"),m(e,"class","start-draw-center svelte-15aiz3m")},m(p,_){L(p,e,_),i(e,t),i(t,s),i(e,o),i(e,d),i(e,a),i(e,n),i(n,u),i(n,c),i(n,r),i(n,f),i(n,E),i(e,w),T&&T.m(e,null),I||(D=[N(u,"click",l[10]),N(r,"click",l[12]),N(E,"click",l[7])],I=!0)},p(p,_){_&2&&mt(s,p[1]),p[5]?T?T.p(p,_):(T=ot(p),T.c(),T.m(e,null)):T&&(T.d(1),T=null)},d(p){p&&h(e),T&&T.d(),I=!1,Te(D)}}}function ot(l){let e,t,s,o,d,a,n=!l[6]&&nt(l),u=l[6]&&rt();return{c(){e=b("input"),t=B(),n&&n.c(),s=B(),u&&u.c(),o=ze(),this.h()},l(c){e=g(c,"INPUT",{accept:!0,type:!0,id:!0,class:!0}),t=y(c),n&&n.l(c),s=y(c),u&&u.l(c),o=ze(),this.h()},h(){m(e,"accept",".png, .jpg, .jpeg"),m(e,"type","file"),m(e,"id","upload"),m(e,"class","svelte-15aiz3m")},m(c,r){L(c,e,r),L(c,t,r),n&&n.m(c,r),L(c,s,r),u&&u.m(c,r),L(c,o,r),d||(a=N(e,"change",l[8]),d=!0)},p(c,r){c[6]?n&&(n.d(1),n=null):n?n.p(c,r):(n=nt(c),n.c(),n.m(s.parentNode,s)),c[6]?u||(u=rt(),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null)},d(c){c&&h(e),c&&h(t),n&&n.d(c),c&&h(s),u&&u.d(c),c&&h(o),d=!1,a()}}}function nt(l){let e,t,s,o;return{c(){e=b("button"),t=j("Start")},l(d){e=g(d,"BUTTON",{});var a=k(e);t=R(a,"Start"),a.forEach(h)},m(d,a){L(d,e,a),i(e,t),s||(o=N(e,"click",l[9]),s=!0)},p:ce,d(d){d&&h(e),s=!1,o()}}}function rt(l){let e,t;return{c(){e=b("p"),t=j("Please choose a smaller file")},l(s){e=g(s,"P",{});var o=k(e);t=R(o,"Please choose a smaller file"),o.forEach(h)},m(s,o){L(s,e,o),i(e,t)},d(s){s&&h(e)}}}function Ct(l){let e,t,s,o,d,a,n,u,c,r,f=l[3]&&!l[2]&&lt(l);return{c(){e=b("div"),f&&f.c(),t=B(),s=b("div"),o=b("div"),d=B(),a=b("button"),this.h()},l(E){e=g(E,"DIV",{class:!0,style:!0});var w=k(e);f&&f.l(w),t=y(w),s=g(w,"DIV",{class:!0,style:!0});var I=k(s);o=g(I,"DIV",{id:!0}),k(o).forEach(h),d=y(I),a=g(I,"BUTTON",{id:!0}),k(a).forEach(h),I.forEach(h),w.forEach(h),this.h()},h(){m(o,"id","drawInstructions"),m(a,"id","begin-button"),m(s,"class","start-draw-center svelte-15aiz3m"),G(s,"visibility",l[4]),m(e,"class","start-draw-container svelte-15aiz3m"),G(e,"background-image","url("+l[0]+")"),G(e,"background-size","cover"),G(e,"background-position","center")},m(E,w){L(E,e,w),f&&f.m(e,null),i(e,t),i(e,s),i(s,o),i(s,d),i(s,a),u=!0,c||(r=N(a,"click",l[11]),c=!0)},p(E,[w]){E[3]&&!E[2]?f?f.p(E,w):(f=lt(E),f.c(),f.m(e,t)):f&&(f.d(1),f=null),(!u||w&16)&&G(s,"visibility",E[4]),(!u||w&1)&&G(e,"background-image","url("+E[0]+")")},i(E){u||(ht(()=>{n||(n=Qe(e,Ze,{},!0)),n.run(1)}),u=!0)},o(E){n||(n=Qe(e,Ze,{},!1)),n.run(0),u=!1},d(E){E&&h(e),f&&f.d(),E&&n&&n.end(),c=!1,r()}}}function St(l,e,t){const s=Fe();let{propValue:o}=e,{cloudsToBe:d}=e,{drawInstructions:a}=e,{title:n}=e,{straightToInstructions:u}=e,c;We(async()=>{let S=document.getElementById("cloudstobe");S.innerHTML=d[0];let F=document.getElementById("draw-button"),M=document.getElementById("remix-button"),V=document.getElementById("upload-button");F.innerHTML=d[1],M.innerHTML=d[2],V.innerHTML=d[3],c=document.getElementById("drawInstructions"),c.innerHTML=a[0];let O=document.getElementById("begin-button");O.innerHTML=a[1]});let r=!0,f="hidden",E=!1,w;const I=()=>{t(5,E=!0)};let D;const T=()=>{t(6,D=!1);const F=document.getElementById("upload").files[0];if(F.size>1e7){t(6,D=!0);return}console.log("Blob?: : ",F instanceof Blob),w=URL.createObjectURL(F)};let p;const _=()=>{console.log("chooseImage: ",w),t(3,r=!1),t(4,f="visible"),p="drawOnUploadImage"},U=()=>{t(3,r=!1),t(4,f="visible"),p="drawOnThisImage",console.log("instructionsText: ",c)},C=()=>{p==="drawOnThisImage"?s("startDrawing",!1):p==="drawOnUploadImage"&&s("startDrawing",w)},H=()=>{s("remixCanvas")};return l.$$set=S=>{"propValue"in S&&t(0,o=S.propValue),"cloudsToBe"in S&&t(13,d=S.cloudsToBe),"drawInstructions"in S&&t(14,a=S.drawInstructions),"title"in S&&t(1,n=S.title),"straightToInstructions"in S&&t(2,u=S.straightToInstructions)},[o,n,u,r,f,E,D,I,T,_,U,C,H,d,a]}class Mt extends ke{constructor(e){super(),Ie(this,e,St,Ct,Ee,{propValue:0,cloudsToBe:13,drawInstructions:14,title:1,straightToInstructions:2})}}function it(l){let e,t;return e=new Mt({props:{title:l[7],drawInstructions:l[8],cloudsToBe:l[6],propValue:l[2],straightToInstructions:Pt}}),e.$on("startDrawing",l[11]),e.$on("remixCanvas",l[12]),{c(){De(e.$$.fragment)},l(s){Be(e.$$.fragment,s)},m(s,o){ye(e,s,o),t=!0},p(s,o){const d={};o&128&&(d.title=s[7]),o&256&&(d.drawInstructions=s[8]),o&64&&(d.cloudsToBe=s[6]),o&4&&(d.propValue=s[2]),e.$set(d)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){K(e.$$.fragment,s),t=!1},d(s){Ve(e,s)}}}function at(l){let e,t;return e=new yt({props:{propValue:l[3],drawInstructions:l[1],contributeModal:l[9]}}),{c(){De(e.$$.fragment)},l(s){Be(e.$$.fragment,s)},m(s,o){ye(e,s,o),t=!0},p(s,o){const d={};o&8&&(d.propValue=s[3]),o&2&&(d.drawInstructions=s[1]),o&512&&(d.contributeModal=s[9]),e.$set(d)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){K(e.$$.fragment,s),t=!1},d(s){Ve(e,s)}}}function ut(l){let e,t;return e=new pt({props:{repoImages:l[10],remix:!0}}),e.$on("drawOnImage",l[11]),{c(){De(e.$$.fragment)},l(s){Be(e.$$.fragment,s)},m(s,o){ye(e,s,o),t=!0},p(s,o){const d={};o&1024&&(d.repoImages=s[10]),e.$set(d)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){K(e.$$.fragment,s),t=!1},d(s){Ve(e,s)}}}function ct(l){let e,t;return e=new Nt({props:{drawInstructions:l[8]}}),e.$on("closeInstructions",l[13]),{c(){De(e.$$.fragment)},l(s){Be(e.$$.fragment,s)},m(s,o){ye(e,s,o),t=!0},p(s,o){const d={};o&256&&(d.drawInstructions=s[8]),e.$set(d)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){K(e.$$.fragment,s),t=!1},d(s){Ve(e,s)}}}function Ot(l){let e,t,s,o,d,a=l[2]&&l[5]&&l[6].length>0&&it(l),n=l[4]&&at(l),u=l[0]&&ut(l),c=l[1]&&ct(l);return{c(){a&&a.c(),e=B(),n&&n.c(),t=B(),u&&u.c(),s=B(),c&&c.c(),o=ze()},l(r){a&&a.l(r),e=y(r),n&&n.l(r),t=y(r),u&&u.l(r),s=y(r),c&&c.l(r),o=ze()},m(r,f){a&&a.m(r,f),L(r,e,f),n&&n.m(r,f),L(r,t,f),u&&u.m(r,f),L(r,s,f),c&&c.m(r,f),L(r,o,f),d=!0},p(r,[f]){r[2]&&r[5]&&r[6].length>0?a?(a.p(r,f),f&100&&A(a,1)):(a=it(r),a.c(),A(a,1),a.m(e.parentNode,e)):a&&(He(),K(a,1,1,()=>{a=null}),Le()),r[4]?n?(n.p(r,f),f&16&&A(n,1)):(n=at(r),n.c(),A(n,1),n.m(t.parentNode,t)):n&&(He(),K(n,1,1,()=>{n=null}),Le()),r[0]?u?(u.p(r,f),f&1&&A(u,1)):(u=ut(r),u.c(),A(u,1),u.m(s.parentNode,s)):u&&(He(),K(u,1,1,()=>{u=null}),Le()),r[1]?c?(c.p(r,f),f&2&&A(c,1)):(c=ct(r),c.c(),A(c,1),c.m(o.parentNode,o)):c&&(He(),K(c,1,1,()=>{c=null}),Le())},i(r){d||(A(a),A(n),A(u),A(c),d=!0)},o(r){K(a),K(n),K(u),K(c),d=!1},d(r){a&&a.d(r),r&&h(e),n&&n.d(r),r&&h(t),u&&u.d(r),r&&h(s),c&&c.d(r),r&&h(o)}}}let Pt=!1;function Lt(l,e,t){let s,o,d,a,n;we(l,vt,p=>t(6,s=p)),we(l,_t,p=>t(7,o=p)),we(l,bt,p=>t(8,d=p)),we(l,gt,p=>t(9,a=p)),we(l,wt,p=>t(10,n=p));let u=!1,c=!1,r;We(async()=>{let _=await(await fetch("https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=48&per_page=50")).json(),U=Math.floor(Math.random()*_.length);t(2,r=_[U].source_url)});let f,E=!1,w=!0;return[u,c,r,f,E,w,s,o,d,a,n,p=>{console.log("startDrawing: ",p.detail),p.detail?t(3,f=p.detail):(t(3,f=r),console.log("startDrawing BG: ",r)),u?(t(1,c=!0),t(0,u=!1),t(4,E=!0),t(3,f=p.detail.link)):(t(5,w=!1),t(4,E=!0))},()=>{console.log("choose canvas"),t(0,u=!0),t(5,w=!1)},()=>t(1,c=!1)]}class Ft extends ke{constructor(e){super(),Ie(this,e,Lt,Ot,Ee,{})}}export{Ft as default};
