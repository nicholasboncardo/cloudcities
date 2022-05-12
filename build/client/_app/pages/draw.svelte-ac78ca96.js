import{S as ge,i as _e,s as we,e as g,c as _,a as T,d as h,b as d,g as O,K as at,E as ce,L as We,v as Le,t as R,k as y,h as Y,m as B,f as x,J as i,M as ue,N as V,O as me,P as Je,w as Ie,x as ke,y as Ee,q as A,o as ee,B as Te,Q as ut,j as ct,l as Se,R as dt,T as Ae,p as Oe,U as pe,n as Pe}from"../chunks/index-b4ba22ca.js";import{f as Xe,G as ft,c as mt,d as ht,a as vt,b as bt,r as pt}from"../chunks/wpTitles-5bf1f57d.js";import"../chunks/index-e1a0e36b.js";function gt(l){let e,t,s;return{c(){e=g("div"),this.h()},l(o){e=_(o,"DIV",{style:!0,class:!0}),T(e).forEach(h),this.h()},h(){d(e,"style",l[0]),d(e,"class","m-0")},m(o,u){O(o,e,u),t||(s=at(l[1].call(null,e)),t=!0)},p(o,[u]){u&1&&d(e,"style",o[0])},i:ce,o:ce,d(o){o&&h(e),t=!1,s()}}}function _t(l,e){return e.forEach(([t,s])=>l[t]=s),l}function wt(l,e,t){let{target:s=void 0}=e,{sketch:o=void 0}=e,{parentDivStyle:u="display: block;"}=e,{debug:m=!1}=e,c;const n=We(),a={ref(){n("ref",s)},instance(){n("instance",c)}};function r(v){return t(2,s=v),{destroy(){t(2,s=void 0)}}}return Le(async()=>{const v=await import("../chunks/p5.min-21ab2ccd.js").then(function(E){return E.p}),{default:k}=v,w=Object.entries(v).filter(([E,p])=>p instanceof Function&&E[0]!=="_"&&E!=="default");m&&console.log("available p5 native classes",w),c=new k(E=>(E=_t(E,w),m&&console.log("p5 instance",E),window._p5Instance=E,o(E)),s),a.ref(),a.instance()}),l.$$set=v=>{"target"in v&&t(2,s=v.target),"sketch"in v&&t(3,o=v.sketch),"parentDivStyle"in v&&t(0,u=v.parentDivStyle),"debug"in v&&t(4,m=v.debug)},[u,r,s,o,m]}class It extends ge{constructor(e){super(),_e(this,e,wt,gt,we,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function Ke(l){let e,t,s,o,u,m,c,n,a,r,v,k,b,w,E,p,I,D,j,C,P,X,M,S,U,L;return{c(){e=g("div"),t=g("div"),s=g("div"),o=g("p"),u=R("width"),m=y(),c=g("div"),n=g("div"),a=y(),r=g("div"),v=y(),k=g("div"),b=y(),w=g("div"),E=g("p"),p=R("color"),I=y(),D=g("div"),j=g("input"),C=y(),P=g("button"),X=R("Done"),M=y(),S=g("div"),this.h()},l(H){e=_(H,"DIV",{class:!0});var G=T(e);t=_(G,"DIV",{class:!0});var J=T(t);s=_(J,"DIV",{class:!0});var ne=T(s);o=_(ne,"P",{});var $=T(o);u=Y($,"width"),$.forEach(h),m=B(ne),c=_(ne,"DIV",{class:!0});var z=T(c);n=_(z,"DIV",{class:!0,id:!0,style:!0}),T(n).forEach(h),a=B(z),r=_(z,"DIV",{class:!0,id:!0,style:!0}),T(r).forEach(h),v=B(z),k=_(z,"DIV",{class:!0,id:!0,style:!0}),T(k).forEach(h),z.forEach(h),ne.forEach(h),b=B(J),w=_(J,"DIV",{class:!0});var ie=T(w);E=_(ie,"P",{});var te=T(E);p=Y(te,"color"),te.forEach(h),I=B(ie),D=_(ie,"DIV",{class:!0});var se=T(D);j=_(se,"INPUT",{type:!0,min:!0,max:!0,id:!0,style:!0,class:!0}),se.forEach(h),ie.forEach(h),C=B(J),P=_(J,"BUTTON",{id:!0,class:!0});var K=T(P);X=Y(K,"Done"),K.forEach(h),J.forEach(h),M=B(G),S=_(G,"DIV",{class:!0}),T(S).forEach(h),G.forEach(h),this.h()},h(){d(n,"class","stroke-button svelte-1c8tjmv"),d(n,"id","small-stroke"),x(n,"border",l[10]),d(r,"class","stroke-button svelte-1c8tjmv"),d(r,"id","medium-stroke"),x(r,"border",l[11]),d(k,"class","stroke-button svelte-1c8tjmv"),d(k,"id","big-stroke"),x(k,"border",l[12]),d(c,"class","stroke-width svelte-1c8tjmv"),d(s,"class","style-section svelte-1c8tjmv"),d(j,"type","range"),d(j,"min","0"),d(j,"max","255"),d(j,"id","color-slider"),x(j,"background-color","rgb("+l[0]+","+l[1]+","+l[2]),d(j,"class","svelte-1c8tjmv"),d(D,"class","stroke-color svelte-1c8tjmv"),d(w,"class","style-section svelte-1c8tjmv"),d(P,"id","pallette-done"),d(P,"class","svelte-1c8tjmv"),d(t,"class","modal-center draw-settings svelte-1c8tjmv"),d(S,"class","icon-button exit-button svelte-1c8tjmv"),d(e,"class","container svelte-1c8tjmv")},m(H,G){O(H,e,G),i(e,t),i(t,s),i(s,o),i(o,u),i(s,m),i(s,c),i(c,n),i(c,a),i(c,r),i(c,v),i(c,k),i(t,b),i(t,w),i(w,E),i(E,p),i(w,I),i(w,D),i(D,j),ue(j,l[0]),i(t,C),i(t,P),i(P,X),i(e,M),i(e,S),U||(L=[V(n,"click",l[15]),V(r,"click",l[15]),V(k,"click",l[15]),V(j,"change",l[18]),V(j,"change",l[29]),V(j,"input",l[29]),V(P,"click",l[22]),V(P,"touchstart",l[22],{passive:!0}),V(S,"click",l[22]),V(S,"touchstart",l[22],{passive:!0})],U=!0)},p(H,G){G[0]&1024&&x(n,"border",H[10]),G[0]&2048&&x(r,"border",H[11]),G[0]&4096&&x(k,"border",H[12]),G[0]&7&&x(j,"background-color","rgb("+H[0]+","+H[1]+","+H[2]),G[0]&1&&ue(j,H[0])},d(H){H&&h(e),U=!1,me(L)}}}function Qe(l){let e,t,s,o,u,m,c,n=l[13][0]+"",a,r,v,k,b,w,E=l[13][1]+"",p,I,D,j,C,P,X=l[13][2]+"",M,S,U,L,H,G=l[13][3]+"",J,ne,$,z,ie=l[13][4]+"",te,se,K,De,he,le,ye=l[13][5]+"",ve,ae,Be,be,re,Ve=l[13][6]+"",f,N,oe,Q,de,fe,q=l[6]&&Ze();return{c(){e=g("div"),t=g("div"),s=g("h2"),o=R("Contribute to the Cloud Cities repository"),u=y(),m=g("div"),c=g("p"),a=R(n),r=y(),v=g("input"),k=y(),b=g("div"),w=g("p"),p=R(E),I=y(),D=g("input"),j=y(),C=g("div"),P=g("p"),M=R(X),S=y(),U=g("input"),L=y(),H=g("p"),J=R(G),ne=y(),$=g("div"),z=g("button"),te=R(ie),se=y(),K=g("img"),he=y(),le=g("button"),ve=R(ye),ae=g("img"),be=y(),re=g("button"),f=R(Ve),N=y(),q&&q.c(),oe=y(),Q=g("div"),this.h()},l(F){e=_(F,"DIV",{class:!0});var Z=T(e);t=_(Z,"DIV",{class:!0});var W=T(t);s=_(W,"H2",{});var Fe=T(s);o=Y(Fe,"Contribute to the Cloud Cities repository"),Fe.forEach(h),u=B(W),m=_(W,"DIV",{class:!0});var je=T(m);c=_(je,"P",{class:!0});var ze=T(c);a=Y(ze,n),ze.forEach(h),r=B(je),v=_(je,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),je.forEach(h),k=B(W),b=_(W,"DIV",{class:!0});var Ce=T(b);w=_(Ce,"P",{class:!0});var Re=T(w);p=Y(Re,E),Re.forEach(h),I=B(Ce),D=_(Ce,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),Ce.forEach(h),j=B(W),C=_(W,"DIV",{class:!0});var Ue=T(C);P=_(Ue,"P",{class:!0});var Ye=T(P);M=Y(Ye,X),Ye.forEach(h),S=B(Ue),U=_(Ue,"INPUT",{type:!0,id:!0,"data-lpignore":!0,class:!0}),Ue.forEach(h),L=B(W),H=_(W,"P",{});var qe=T(H);J=Y(qe,G),qe.forEach(h),ne=B(W),$=_(W,"DIV",{class:!0});var Ne=T($);z=_(Ne,"BUTTON",{id:!0,class:!0});var Me=T(z);te=Y(Me,ie),se=B(Me),K=_(Me,"IMG",{src:!0,alt:!0,class:!0}),Me.forEach(h),he=B(Ne),le=_(Ne,"BUTTON",{id:!0,class:!0});var He=T(le);ve=Y(He,ye),ae=_(He,"IMG",{src:!0,alt:!0,class:!0}),He.forEach(h),Ne.forEach(h),be=B(W),re=_(W,"BUTTON",{id:!0,class:!0});var Ge=T(re);f=Y(Ge,Ve),Ge.forEach(h),N=B(W),q&&q.l(W),W.forEach(h),oe=B(Z),Q=_(Z,"DIV",{class:!0}),T(Q).forEach(h),Z.forEach(h),this.h()},h(){d(c,"class","svelte-1c8tjmv"),d(v,"type","text"),d(v,"id","input-title"),d(v,"data-lpignore","true"),d(v,"class","svelte-1c8tjmv"),d(m,"class","input-section svelte-1c8tjmv"),d(w,"class","svelte-1c8tjmv"),d(D,"type","text"),d(D,"id","input-location"),d(D,"data-lpignore","true"),d(D,"class","svelte-1c8tjmv"),d(b,"class","input-section svelte-1c8tjmv"),d(P,"class","svelte-1c8tjmv"),d(U,"type","text"),d(U,"id","input-name"),d(U,"data-lpignore","true"),d(U,"class","svelte-1c8tjmv"),d(C,"class","input-section svelte-1c8tjmv"),Je(K.src,De="./cloud_submit.svg")||d(K,"src",De),d(K,"alt","submit"),d(K,"class","svelte-1c8tjmv"),d(z,"id","submit-button"),d(z,"class","svelte-1c8tjmv"),Je(ae.src,Be="./cloud_download.svg")||d(ae,"src",Be),d(ae,"alt","download"),d(ae,"class","svelte-1c8tjmv"),d(le,"id","download-button"),d(le,"class","svelte-1c8tjmv"),d($,"class","flex-row"),d(re,"id","cancel-button"),d(re,"class","svelte-1c8tjmv"),d(t,"class","modal-center submit-image svelte-1c8tjmv"),d(Q,"class","icon-button exit-button svelte-1c8tjmv"),d(e,"class","container svelte-1c8tjmv")},m(F,Z){O(F,e,Z),i(e,t),i(t,s),i(s,o),i(t,u),i(t,m),i(m,c),i(c,a),i(m,r),i(m,v),ue(v,l[3]),i(t,k),i(t,b),i(b,w),i(w,p),i(b,I),i(b,D),ue(D,l[4]),i(t,j),i(t,C),i(C,P),i(P,M),i(C,S),i(C,U),ue(U,l[5]),i(t,L),i(t,H),i(H,J),i(t,ne),i(t,$),i($,z),i(z,te),i(z,se),i(z,K),i($,he),i($,le),i(le,ve),i(le,ae),i(t,be),i(t,re),i(re,f),i(t,N),q&&q.m(t,null),i(e,oe),i(e,Q),de||(fe=[V(v,"input",l[30]),V(D,"input",l[31]),V(U,"input",l[32]),V(z,"click",l[16]),V(le,"click",l[17]),V(re,"click",l[25]),V(Q,"click",l[22]),V(Q,"touchstart",l[22],{passive:!0})],de=!0)},p(F,Z){Z[0]&8&&v.value!==F[3]&&ue(v,F[3]),Z[0]&16&&D.value!==F[4]&&ue(D,F[4]),Z[0]&32&&U.value!==F[5]&&ue(U,F[5]),F[6]?q||(q=Ze(),q.c(),q.m(t,null)):q&&(q.d(1),q=null)},d(F){F&&h(e),q&&q.d(),de=!1,me(fe)}}}function Ze(l){let e,t;return{c(){e=g("p"),t=R(`We are missing information to complete your Cloud Cities submission. Please tell us more
						about your drawing! Please note: Location and Name are optional.`)},l(s){e=_(s,"P",{});var o=T(e);t=Y(o,`We are missing information to complete your Cloud Cities submission. Please tell us more
						about your drawing! Please note: Location and Name are optional.`),o.forEach(h)},m(s,o){O(s,e,o),i(e,t)},d(s){s&&h(e)}}}function xe(l){let e,t,s,o,u,m,c,n,a,r,v,k,b,w,E,p,I;return{c(){e=g("div"),t=g("div"),s=g("h2"),o=R("Thank you! Submission complete"),u=y(),m=g("p"),c=R("Your drawing will be reviewed shortly and subsequently published onto Cloud Cities."),n=y(),a=g("div"),r=g("button"),v=R("Return to drawing"),k=y(),b=g("a"),w=g("button"),E=R("Visit the repository"),this.h()},l(D){e=_(D,"DIV",{class:!0});var j=T(e);t=_(j,"DIV",{class:!0});var C=T(t);s=_(C,"H2",{});var P=T(s);o=Y(P,"Thank you! Submission complete"),P.forEach(h),u=B(C),m=_(C,"P",{});var X=T(m);c=Y(X,"Your drawing will be reviewed shortly and subsequently published onto Cloud Cities."),X.forEach(h),n=B(C),a=_(C,"DIV",{class:!0});var M=T(a);r=_(M,"BUTTON",{class:!0});var S=T(r);v=Y(S,"Return to drawing"),S.forEach(h),k=B(M),b=_(M,"A",{href:!0,class:!0});var U=T(b);w=_(U,"BUTTON",{class:!0});var L=T(w);E=Y(L,"Visit the repository"),L.forEach(h),U.forEach(h),M.forEach(h),C.forEach(h),j.forEach(h),this.h()},h(){d(r,"class","svelte-1c8tjmv"),d(w,"class","svelte-1c8tjmv"),d(b,"href","/"),d(b,"class","href svelte-1c8tjmv"),d(a,"class","flex-row svelte-1c8tjmv"),d(t,"class","modal-center svelte-1c8tjmv"),d(e,"class","container svelte-1c8tjmv")},m(D,j){O(D,e,j),i(e,t),i(t,s),i(s,o),i(t,u),i(t,m),i(m,c),i(t,n),i(t,a),i(a,r),i(r,v),i(a,k),i(a,b),i(b,w),i(w,E),p||(I=V(r,"click",l[24]),p=!0)},p:ce,d(D){D&&h(e),p=!1,I()}}}function $e(l){let e,t,s,o,u,m,c;return{c(){e=g("div"),t=y(),s=g("div"),o=y(),u=g("div"),this.h()},l(n){e=_(n,"DIV",{class:!0,id:!0}),T(e).forEach(h),t=B(n),s=_(n,"DIV",{class:!0,id:!0}),T(s).forEach(h),o=B(n),u=_(n,"DIV",{class:!0,id:!0}),T(u).forEach(h),this.h()},h(){d(e,"class","icon-button finished-drawing-button svelte-1c8tjmv"),d(e,"id","finish-button"),d(s,"class","icon-button pallette-button svelte-1c8tjmv"),d(s,"id","p-button"),d(u,"class","icon-button redo-button svelte-1c8tjmv"),d(u,"id","r-button")},m(n,a){O(n,e,a),O(n,t,a),O(n,s,a),O(n,o,a),O(n,u,a),m||(c=[V(e,"click",l[33]),V(e,"touchstart",l[34],{passive:!0}),V(e,"mouseenter",l[19]),V(e,"mouseleave",l[20]),V(s,"click",l[23]),V(s,"touchstart",l[35],{passive:!0}),V(s,"mouseenter",l[19]),V(s,"mouseleave",l[20]),V(u,"mouseenter",l[19]),V(u,"mouseleave",l[20])],m=!0)},p:ce,d(n){n&&h(e),n&&h(t),n&&h(s),n&&h(o),n&&h(u),m=!1,me(c)}}}function kt(l){let e,t,s,o,u,m,c,n,a,r,v;t=new It({props:{sketch:l[14]}});let k=l[8]&&Ke(l),b=l[9]&&Qe(l),w=l[7]&&xe(l),E=!l[8]&&!l[9]&&$e(l);return{c(){e=g("div"),Ie(t.$$.fragment),s=y(),o=g("div"),u=y(),k&&k.c(),m=y(),b&&b.c(),c=y(),w&&w.c(),n=y(),E&&E.c(),this.h()},l(p){e=_(p,"DIV",{id:!0});var I=T(e);ke(t.$$.fragment,I),s=B(I),o=_(I,"DIV",{class:!0}),T(o).forEach(h),u=B(I),k&&k.l(I),m=B(I),b&&b.l(I),c=B(I),w&&w.l(I),n=B(I),E&&E.l(I),I.forEach(h),this.h()},h(){d(o,"class","icon-button repo-button svelte-1c8tjmv"),d(e,"id","canvas-container")},m(p,I){O(p,e,I),Ee(t,e,null),i(e,s),i(e,o),i(e,u),k&&k.m(e,null),i(e,m),b&&b.m(e,null),i(e,c),w&&w.m(e,null),i(e,n),E&&E.m(e,null),a=!0,r||(v=[V(o,"mouseenter",l[19]),V(o,"mouseleave",l[20]),V(o,"touchstart",l[21],{passive:!0}),V(o,"click",l[21])],r=!0)},p(p,I){p[8]?k?k.p(p,I):(k=Ke(p),k.c(),k.m(e,m)):k&&(k.d(1),k=null),p[9]?b?b.p(p,I):(b=Qe(p),b.c(),b.m(e,c)):b&&(b.d(1),b=null),p[7]?w?w.p(p,I):(w=xe(p),w.c(),w.m(e,n)):w&&(w.d(1),w=null),!p[8]&&!p[9]?E?E.p(p,I):(E=$e(p),E.c(),E.m(e,null)):E&&(E.d(1),E=null)},i(p){a||(A(t.$$.fragment,p),a=!0)},o(p){ee(t.$$.fragment,p),a=!1},d(p){p&&h(e),Te(t),k&&k.d(),b&&b.d(),w&&w.d(),E&&E.d(),r=!1,me(v)}}}function Et(l,e,t){let{propValue:s}=e,{contributeModal:o}=e,{drawInstructions:u}=e,m=s;console.log("contribute modal: ",o);let c=o.map(f=>f.includes("<span>")?f.split("<span>").pop().split("<")[0]:f.includes("<p>")?f.split("<p>").pop().split("<")[0]:f.split('">').pop().split("<")[0]);console.log("contributeText: ",c);let n=4,a=0,r=0,v=0,k;console.log("drawInstructions: ",u),u&&(k=!0);const b=f=>{let N;f.preload=()=>{k=!1,console.log("preload"),N=f.loadImage(m)},f.setup=()=>{if(console.log("width: ",N.width),console.log("height: ",N.height),f.windowWidth>500)if(N.width<N.height){let W=N.height/(N.width/f.windowWidth);f.createCanvas(f.windowWidth,W)}else f.createCanvas(f.windowWidth,f.windowHeight);else f.windowWidth<500&&N.width<N.height?f.createCanvas(f.windowWidth,f.windowHeight):f.windowWidth<500&&f.createCanvas(N.width/2,f.windowHeight);f.background(N);let F=document.getElementById("canvas-container");F.addEventListener("touchstart",W=>{W.touches.length===2&&(k=!0)}),F.addEventListener("touchmove",W=>{W.touches.length===2&&(k=!0)}),F.addEventListener("touchend",W=>{k&&(k=!1)});let Z=document.getElementById("r-button");Z.addEventListener("click",function(){f.clear(),f.background(N)}),Z.addEventListener("touchstart",function(){f.clear(),f.background(N)})};let oe=0,Q=0,de=0,fe=0,q=.3;f.mousePressed=()=>{if(!(L||k||U||J))return oe=f.mouseX,Q=f.mouseY,de=f.mouseX,fe=f.mouseY,!1},f.touchMoved=()=>{if(L||k||U||J)return;let F=f.mouseX,Z=f.mouseY;return oe+=(F-oe)*q,Q+=(Z-Q)*q,f.strokeWeight(n),f.stroke(a,r,v),f.line(oe,Q,de,fe),de=oe,fe=Q,!1},f.windowResized=()=>{if(f.resizeCanvas(f.windowWidth,f.windowHeight),f.windowWidth>500)if(N.width<N.height){let F=N.height/(N.width/f.windowWidth);f.resizeCanvas(f.windowWidth,F)}else f.resizeCanvas(f.windowWidth,f.windowHeight);else f.windowWidth<500&&N.width<N.height?f.resizeCanvas(f.windowWidth,f.windowHeight):f.windowWidth<500&&f.resizeCanvas(N.width/2,f.windowHeight);f.background(N)}};let w=document.getElementsByClassName("stroke-button");const E=f=>{f.target.id==="small-stroke"?n=2:f.target.id==="medium-stroke"?n=4:f.target.id==="big-stroke"&&(n=6),w.forEach(N=>{N!==f.target?N.style.border="none":N.style.border="solid 4px #00D1FF"})};let p,I,D,j,C=JSON.parse(localStorage.getItem("cloudUploads"));const P=["none"];C||localStorage.setItem("cloudUploads",JSON.stringify(P));let X=!0;const M=()=>{if(p&&X){C=JSON.parse(localStorage.getItem("cloudUploads")),console.log("uploads: ",C),C.push("upload"),localStorage.setItem("cloudUploads",JSON.stringify(C)),X=!1,t(6,j=!1);let f=new FormData;f.append("title",p),f.append("location",I),f.append("name",D),f.append("userUploads",C.length),document.getElementById("defaultCanvas0").toBlob(function(oe){f.append("cloud",oe),fetch("/addPostfromServer",{method:"POST",body:f}).then(Q=>{console.log("result: ",Q.status)})}),t(9,L=!1),k=!0,t(7,S=!0)}else if(X)t(6,j=!0);else return};let S=!1,U=!1,L=!1;const H=()=>{let f=document.createElement("a");f.download="myCanvas.png",f.href=document.getElementById("defaultCanvas0").toDataURL(),f.click()},G=f=>{t(0,a=f.srcElement.value),t(1,r=f.srcElement.value),t(2,v=f.srcElement.value)};let J=!1;const ne=()=>{J=!0},$=()=>{J=!1},z=()=>{window.location.replace("/")},ie=()=>{U&&t(8,U=!1),L&&t(9,L=!1),J=!1};let te,se,K;const De=()=>{t(8,U=!U),n===2?(t(10,te="solid 4px #00D1FF"),t(11,se="none"),t(12,K="none")):n===4?(t(10,te="none"),t(11,se="solid 4px #00D1FF"),t(12,K="none")):(t(10,te="none"),t(11,se="none"),t(12,K="solid 4px #00D1FF"))},he=()=>{k=!1,window.location.reload()},le=()=>{t(9,L=!1),J=!1};function ye(){a=ut(this.value),t(0,a)}function ve(){p=this.value,t(3,p)}function ae(){I=this.value,t(4,I)}function Be(){D=this.value,t(5,D)}const be=()=>t(9,L=!L),re=()=>(t(9,L=!L),console.log("touch event on pallette")),Ve=()=>t(8,U=!U);return l.$$set=f=>{"propValue"in f&&t(26,s=f.propValue),"contributeModal"in f&&t(27,o=f.contributeModal),"drawInstructions"in f&&t(28,u=f.drawInstructions)},[a,r,v,p,I,D,j,S,U,L,te,se,K,c,b,E,M,H,G,ne,$,z,ie,De,he,le,s,o,u,ye,ve,ae,Be,be,re,Ve]}class Tt extends ge{constructor(e){super(),_e(this,e,Et,kt,we,{propValue:26,contributeModal:27,drawInstructions:28},null,[-1,-1])}}function Dt(l){let e,t,s,o,u,m,c;return{c(){e=g("div"),t=g("div"),s=g("div"),o=y(),u=g("button"),this.h()},l(n){e=_(n,"DIV",{class:!0});var a=T(e);t=_(a,"DIV",{class:!0});var r=T(t);s=_(r,"DIV",{id:!0}),T(s).forEach(h),o=B(r),u=_(r,"BUTTON",{id:!0}),T(u).forEach(h),r.forEach(h),a.forEach(h),this.h()},h(){d(s,"id","drawInstructions"),d(u,"id","begin-button"),d(t,"class","start-draw-center svelte-mdkjls"),d(e,"class","start-draw-container svelte-mdkjls")},m(n,a){O(n,e,a),i(e,t),i(t,s),i(t,o),i(t,u),m||(c=V(u,"click",l[0]),m=!0)},p:ce,i:ce,o:ce,d(n){n&&h(e),m=!1,c()}}}function yt(l,e,t){const s=We();let{drawInstructions:o}=e,u;Le(async()=>{u=document.getElementById("drawInstructions"),u.innerHTML=o[0];let c=document.getElementById("begin-button");c.innerHTML=o[1]});const m=()=>{s("closeInstructions")};return l.$$set=c=>{"drawInstructions"in c&&t(1,o=c.drawInstructions)},[m,o]}class Bt extends ge{constructor(e){super(),_e(this,e,yt,Dt,we,{drawInstructions:1})}}function et(l){let e,t,s,o,u,m,c,n,a,r,v,k,b,w,E,p=l[5]&&tt(l);return{c(){e=g("div"),t=g("h2"),s=R(l[1]),o=y(),u=g("div"),m=y(),c=g("div"),n=g("button"),a=y(),r=g("button"),v=y(),k=g("button"),b=y(),p&&p.c(),this.h()},l(I){e=_(I,"DIV",{class:!0});var D=T(e);t=_(D,"H2",{class:!0});var j=T(t);s=Y(j,l[1]),j.forEach(h),o=B(D),u=_(D,"DIV",{id:!0}),T(u).forEach(h),m=B(D),c=_(D,"DIV",{class:!0});var C=T(c);n=_(C,"BUTTON",{id:!0,class:!0}),T(n).forEach(h),a=B(C),r=_(C,"BUTTON",{id:!0,class:!0}),T(r).forEach(h),v=B(C),k=_(C,"BUTTON",{id:!0,class:!0}),T(k).forEach(h),C.forEach(h),b=B(D),p&&p.l(D),D.forEach(h),this.h()},h(){d(t,"class","svelte-xa4h8b"),d(u,"id","cloudstobe"),d(n,"id","draw-button"),d(n,"class","enter-button svelte-xa4h8b"),d(r,"id","remix-button"),d(r,"class","enter-button svelte-xa4h8b"),d(k,"id","upload-button"),d(k,"class","enter-button svelte-xa4h8b"),d(c,"class","button-section svelte-xa4h8b"),d(e,"class","start-draw-center svelte-xa4h8b")},m(I,D){O(I,e,D),i(e,t),i(t,s),i(e,o),i(e,u),i(e,m),i(e,c),i(c,n),i(c,a),i(c,r),i(c,v),i(c,k),i(e,b),p&&p.m(e,null),w||(E=[V(n,"click",l[10]),V(r,"click",l[12]),V(k,"click",l[7])],w=!0)},p(I,D){D&2&&ct(s,I[1]),I[5]?p?p.p(I,D):(p=tt(I),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},d(I){I&&h(e),p&&p.d(),w=!1,me(E)}}}function tt(l){let e,t,s,o,u,m,c=!l[6]&&st(l),n=l[6]&&lt();return{c(){e=g("input"),t=y(),c&&c.c(),s=y(),n&&n.c(),o=Se(),this.h()},l(a){e=_(a,"INPUT",{accept:!0,type:!0,id:!0,class:!0}),t=B(a),c&&c.l(a),s=B(a),n&&n.l(a),o=Se(),this.h()},h(){d(e,"accept",".png, .jpg, .jpeg"),d(e,"type","file"),d(e,"id","upload"),d(e,"class","svelte-xa4h8b")},m(a,r){O(a,e,r),O(a,t,r),c&&c.m(a,r),O(a,s,r),n&&n.m(a,r),O(a,o,r),u||(m=V(e,"change",l[8]),u=!0)},p(a,r){a[6]?c&&(c.d(1),c=null):c?c.p(a,r):(c=st(a),c.c(),c.m(s.parentNode,s)),a[6]?n||(n=lt(),n.c(),n.m(o.parentNode,o)):n&&(n.d(1),n=null)},d(a){a&&h(e),a&&h(t),c&&c.d(a),a&&h(s),n&&n.d(a),a&&h(o),u=!1,m()}}}function st(l){let e,t,s,o;return{c(){e=g("button"),t=R("Upload"),this.h()},l(u){e=_(u,"BUTTON",{id:!0,class:!0});var m=T(e);t=Y(m,"Upload"),m.forEach(h),this.h()},h(){d(e,"id","drawOnUpload-button"),d(e,"class","svelte-xa4h8b")},m(u,m){O(u,e,m),i(e,t),s||(o=V(e,"click",l[9]),s=!0)},p:ce,d(u){u&&h(e),s=!1,o()}}}function lt(l){let e,t;return{c(){e=g("p"),t=R("Please choose a smaller file")},l(s){e=_(s,"P",{});var o=T(e);t=Y(o,"Please choose a smaller file"),o.forEach(h)},m(s,o){O(s,e,o),i(e,t)},d(s){s&&h(e)}}}function Vt(l){let e,t,s,o,u,m,c,n,a,r,v,k,b=l[3]&&!l[2]&&et(l);return{c(){e=g("div"),t=g("div"),s=y(),b&&b.c(),o=y(),u=g("div"),m=g("div"),c=y(),n=g("button"),this.h()},l(w){e=_(w,"DIV",{class:!0,style:!0});var E=T(e);t=_(E,"DIV",{class:!0}),T(t).forEach(h),s=B(E),b&&b.l(E),o=B(E),u=_(E,"DIV",{class:!0,style:!0});var p=T(u);m=_(p,"DIV",{id:!0}),T(m).forEach(h),c=B(p),n=_(p,"BUTTON",{id:!0}),T(n).forEach(h),p.forEach(h),E.forEach(h),this.h()},h(){d(t,"class","icon-button repo-button svelte-xa4h8b"),d(m,"id","drawInstructions"),d(n,"id","begin-button"),d(u,"class","start-draw-center svelte-xa4h8b"),x(u,"visibility",l[4]),d(e,"class","start-draw-container svelte-xa4h8b"),x(e,"background-image","url("+l[0]+")"),x(e,"background-size","cover"),x(e,"background-position","center")},m(w,E){O(w,e,E),i(e,t),i(e,s),b&&b.m(e,null),i(e,o),i(e,u),i(u,m),i(u,c),i(u,n),r=!0,v||(k=[V(t,"touchstart",l[13],{passive:!0}),V(t,"click",l[13]),V(n,"click",l[11])],v=!0)},p(w,[E]){w[3]&&!w[2]?b?b.p(w,E):(b=et(w),b.c(),b.m(e,o)):b&&(b.d(1),b=null),(!r||E&16)&&x(u,"visibility",w[4]),(!r||E&1)&&x(e,"background-image","url("+w[0]+")")},i(w){r||(dt(()=>{a||(a=Ae(e,Xe,{},!0)),a.run(1)}),r=!0)},o(w){a||(a=Ae(e,Xe,{},!1)),a.run(0),r=!1},d(w){w&&h(e),b&&b.d(),w&&a&&a.end(),v=!1,me(k)}}}function jt(l,e,t){const s=We();let{propValue:o}=e,{cloudsToBe:u}=e,{drawInstructions:m}=e,{title:c}=e,{straightToInstructions:n}=e,a;Le(async()=>{let M=document.getElementById("cloudstobe");M.innerHTML=u[0];let S=document.getElementById("draw-button"),U=document.getElementById("remix-button"),L=document.getElementById("upload-button");S.innerHTML=u[1],U.innerHTML=u[2],L.innerHTML=u[3],a=document.getElementById("drawInstructions"),a.innerHTML=m[0];let H=document.getElementById("begin-button");H.innerHTML=m[1]});let r=!0,v="hidden",k=!1,b;const w=()=>{t(5,k=!0)};let E;const p=()=>{t(6,E=!1);const S=document.getElementById("upload").files[0];if(S.size>1e7){t(6,E=!0);return}console.log("Blob?: : ",S instanceof Blob),b=URL.createObjectURL(S)};let I;const D=()=>{console.log("chooseImage: ",b),t(3,r=!1),t(4,v="visible"),I="drawOnUploadImage"},j=()=>{t(3,r=!1),t(4,v="visible"),I="drawOnThisImage",console.log("instructionsText: ",a)},C=()=>{I==="drawOnThisImage"?s("startDrawing",!1):I==="drawOnUploadImage"&&s("startDrawing",b)},P=()=>{s("remixCanvas")},X=()=>{window.location.replace("/")};return l.$$set=M=>{"propValue"in M&&t(0,o=M.propValue),"cloudsToBe"in M&&t(14,u=M.cloudsToBe),"drawInstructions"in M&&t(15,m=M.drawInstructions),"title"in M&&t(1,c=M.title),"straightToInstructions"in M&&t(2,n=M.straightToInstructions)},[o,c,n,r,v,k,E,w,p,D,j,C,P,X,u,m]}class Ct extends ge{constructor(e){super(),_e(this,e,jt,Vt,we,{propValue:0,cloudsToBe:14,drawInstructions:15,title:1,straightToInstructions:2})}}function ot(l){let e,t;return e=new Ct({props:{title:l[7],drawInstructions:l[8],cloudsToBe:l[6],propValue:l[2],straightToInstructions:Nt}}),e.$on("startDrawing",l[11]),e.$on("remixCanvas",l[12]),{c(){Ie(e.$$.fragment)},l(s){ke(e.$$.fragment,s)},m(s,o){Ee(e,s,o),t=!0},p(s,o){const u={};o&128&&(u.title=s[7]),o&256&&(u.drawInstructions=s[8]),o&64&&(u.cloudsToBe=s[6]),o&4&&(u.propValue=s[2]),e.$set(u)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){Te(e,s)}}}function nt(l){let e,t;return e=new Tt({props:{propValue:l[3],drawInstructions:l[1],contributeModal:l[9]}}),{c(){Ie(e.$$.fragment)},l(s){ke(e.$$.fragment,s)},m(s,o){Ee(e,s,o),t=!0},p(s,o){const u={};o&8&&(u.propValue=s[3]),o&2&&(u.drawInstructions=s[1]),o&512&&(u.contributeModal=s[9]),e.$set(u)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){Te(e,s)}}}function rt(l){let e,t;return e=new ft({props:{repoImages:l[10],remix:!0}}),e.$on("drawOnImage",l[11]),{c(){Ie(e.$$.fragment)},l(s){ke(e.$$.fragment,s)},m(s,o){Ee(e,s,o),t=!0},p(s,o){const u={};o&1024&&(u.repoImages=s[10]),e.$set(u)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){Te(e,s)}}}function it(l){let e,t;return e=new Bt({props:{drawInstructions:l[8]}}),e.$on("closeInstructions",l[13]),{c(){Ie(e.$$.fragment)},l(s){ke(e.$$.fragment,s)},m(s,o){Ee(e,s,o),t=!0},p(s,o){const u={};o&256&&(u.drawInstructions=s[8]),e.$set(u)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){Te(e,s)}}}function Ut(l){let e,t,s,o,u,m=l[2]&&l[5]&&l[6].length>0&&ot(l),c=l[4]&&nt(l),n=l[0]&&rt(l),a=l[1]&&it(l);return{c(){m&&m.c(),e=y(),c&&c.c(),t=y(),n&&n.c(),s=y(),a&&a.c(),o=Se()},l(r){m&&m.l(r),e=B(r),c&&c.l(r),t=B(r),n&&n.l(r),s=B(r),a&&a.l(r),o=Se()},m(r,v){m&&m.m(r,v),O(r,e,v),c&&c.m(r,v),O(r,t,v),n&&n.m(r,v),O(r,s,v),a&&a.m(r,v),O(r,o,v),u=!0},p(r,[v]){r[2]&&r[5]&&r[6].length>0?m?(m.p(r,v),v&100&&A(m,1)):(m=ot(r),m.c(),A(m,1),m.m(e.parentNode,e)):m&&(Pe(),ee(m,1,1,()=>{m=null}),Oe()),r[4]?c?(c.p(r,v),v&16&&A(c,1)):(c=nt(r),c.c(),A(c,1),c.m(t.parentNode,t)):c&&(Pe(),ee(c,1,1,()=>{c=null}),Oe()),r[0]?n?(n.p(r,v),v&1&&A(n,1)):(n=rt(r),n.c(),A(n,1),n.m(s.parentNode,s)):n&&(Pe(),ee(n,1,1,()=>{n=null}),Oe()),r[1]?a?(a.p(r,v),v&2&&A(a,1)):(a=it(r),a.c(),A(a,1),a.m(o.parentNode,o)):a&&(Pe(),ee(a,1,1,()=>{a=null}),Oe())},i(r){u||(A(m),A(c),A(n),A(a),u=!0)},o(r){ee(m),ee(c),ee(n),ee(a),u=!1},d(r){m&&m.d(r),r&&h(e),c&&c.d(r),r&&h(t),n&&n.d(r),r&&h(s),a&&a.d(r),r&&h(o)}}}let Nt=!1;function Mt(l,e,t){let s,o,u,m,c;pe(l,mt,I=>t(6,s=I)),pe(l,ht,I=>t(7,o=I)),pe(l,vt,I=>t(8,u=I)),pe(l,bt,I=>t(9,m=I)),pe(l,pt,I=>t(10,c=I));let n=!1,a=!1,r;Le(async()=>{let D=await(await fetch("https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=48&per_page=50")).json(),j=Math.floor(Math.random()*D.length);t(2,r=D[j].source_url)});let v,k=!1,b=!0;return[n,a,r,v,k,b,s,o,u,m,c,I=>{console.log("startDrawing: ",I.detail),I.detail?t(3,v=I.detail):(t(3,v=r),console.log("startDrawing BG: ",r)),n?(t(1,a=!0),t(0,n=!1),t(4,k=!0),t(3,v=I.detail.link)):(t(5,b=!1),t(4,k=!0))},()=>{console.log("choose canvas"),t(0,n=!0),t(5,b=!1)},()=>t(1,a=!1)]}class Lt extends ge{constructor(e){super(),_e(this,e,Mt,Ut,we,{})}}export{Lt as default};
