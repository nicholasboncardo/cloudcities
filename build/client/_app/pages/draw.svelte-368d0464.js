import{S as Oe,i as Me,s as Pe,e as p,c as b,a as _,d as h,b as n,g as F,K as bt,E as we,L as Xe,v as Je,t as S,k as C,h as W,m as U,J as o,M as z,N as ve,f as A,O as _e,P as Qe,Q as Ze,w as Te,x as De,y as ze,q as K,o as le,B as Ve,R as _t,j as gt,l as qe,T as wt,U as xe,p as Ae,V as He,n as Ye}from"../chunks/index-37d50d90.js";import{f as $e,O as It,G as kt,c as Et,d as yt,a as Tt,b as Dt,r as zt}from"../chunks/wpTitles-8ad038ab.js";import"../chunks/index-d2201ef8.js";function Vt(s){let e,t,l;return{c(){e=p("div"),this.h()},l(i){e=b(i,"DIV",{style:!0,class:!0}),_(e).forEach(h),this.h()},h(){n(e,"style",s[0]),n(e,"class","m-0")},m(i,r){F(i,e,r),t||(l=bt(s[1].call(null,e)),t=!0)},p(i,[r]){r&1&&n(e,"style",i[0])},i:we,o:we,d(i){i&&h(e),t=!1,l()}}}function Bt(s,e){return e.forEach(([t,l])=>s[t]=l),s}function Ct(s,e,t){let{target:l=void 0}=e,{sketch:i=void 0}=e,{parentDivStyle:r="display: block;"}=e,{debug:d=!1}=e,f;const u=Xe(),a={ref(){u("ref",l)},instance(){u("instance",f)}};function c(m){return t(2,l=m),{destroy(){t(2,l=void 0)}}}return Je(async()=>{const m=await import("../chunks/p5.min-21ab2ccd.js").then(function(D){return D.p}),{default:k}=m,V=Object.entries(m).filter(([D,y])=>y instanceof Function&&D[0]!=="_"&&D!=="default");d&&console.log("available p5 native classes",V),f=new k(D=>(D=Bt(D,V),d&&console.log("p5 instance",D),window._p5Instance=D,i(D)),l),a.ref(),a.instance()}),s.$$set=m=>{"target"in m&&t(2,l=m.target),"sketch"in m&&t(3,i=m.sketch),"parentDivStyle"in m&&t(0,r=m.parentDivStyle),"debug"in m&&t(4,d=m.debug)},[r,c,l,i,d]}class Ut extends Oe{constructor(e){super(),Me(this,e,Ct,Vt,Pe,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function et(s){let e,t,l,i,r,d,f,u,a;return{c(){e=p("div"),t=p("div"),l=p("p"),i=S("We recommend rotating your device into landscape mode before you begin."),r=C(),d=p("button"),f=S("I\u2019ve rotated my device"),this.h()},l(c){e=b(c,"DIV",{id:!0,class:!0});var m=_(e);t=b(m,"DIV",{class:!0});var k=_(t);l=b(k,"P",{class:!0});var g=_(l);i=W(g,"We recommend rotating your device into landscape mode before you begin."),g.forEach(h),r=U(k),d=b(k,"BUTTON",{class:!0});var V=_(d);f=W(V,"I\u2019ve rotated my device"),V.forEach(h),k.forEach(h),m.forEach(h),this.h()},h(){n(l,"class","svelte-zo037c"),n(d,"class","svelte-zo037c"),n(t,"class","modal-info svelte-zo037c"),n(e,"id","landscapemodal"),n(e,"class","svelte-zo037c")},m(c,m){F(c,e,m),o(e,t),o(t,l),o(l,i),o(t,r),o(t,d),o(d,f),u||(a=[z(d,"click",s[39]),z(d,"touchstart",s[40],{passive:!0})],u=!0)},p:we,d(c){c&&h(e),u=!1,ve(a)}}}function tt(s){let e,t,l,i,r,d,f,u,a,c,m,k,g,V,D,y,H,I,O,E,T,w,P,B,N,M,R,te,J;return{c(){e=p("div"),t=p("div"),l=p("div"),i=p("p"),r=S("size"),d=C(),f=p("div"),u=p("div"),a=p("div"),c=C(),m=p("div"),k=C(),g=p("div"),V=C(),D=p("div"),y=C(),H=p("div"),I=p("p"),O=S("color"),E=C(),T=p("div"),w=p("input"),P=C(),B=p("button"),N=S("Done"),M=C(),R=p("div"),this.h()},l(Y){e=b(Y,"DIV",{class:!0,id:!0});var q=_(e);t=b(q,"DIV",{class:!0,id:!0});var G=_(t);l=b(G,"DIV",{class:!0});var L=_(l);i=b(L,"P",{});var x=_(i);r=W(x,"size"),x.forEach(h),d=U(L),f=b(L,"DIV",{class:!0});var oe=_(f);u=b(oe,"DIV",{id:!0,class:!0});var se=_(u);a=b(se,"DIV",{class:!0,id:!0,style:!0}),_(a).forEach(h),se.forEach(h),c=U(oe),m=b(oe,"DIV",{class:!0,id:!0,style:!0}),_(m).forEach(h),k=U(oe),g=b(oe,"DIV",{class:!0,id:!0,style:!0}),_(g).forEach(h),V=U(oe),D=b(oe,"DIV",{class:!0,id:!0,style:!0}),_(D).forEach(h),oe.forEach(h),L.forEach(h),y=U(G),H=b(G,"DIV",{class:!0});var ue=_(H);I=b(ue,"P",{});var ne=_(I);O=W(ne,"color"),ne.forEach(h),E=U(ue),T=b(ue,"DIV",{class:!0});var ge=_(T);w=b(ge,"INPUT",{type:!0,min:!0,max:!0,id:!0,style:!0,class:!0}),ge.forEach(h),ue.forEach(h),P=U(G),B=b(G,"BUTTON",{id:!0,class:!0});var Q=_(B);N=W(Q,"Done"),Q.forEach(h),G.forEach(h),M=U(q),R=b(q,"DIV",{class:!0}),_(R).forEach(h),q.forEach(h),this.h()},h(){n(a,"class","stroke-button svelte-zo037c"),n(a,"id","tiny-stroke-circle"),A(a,"border",s[15]),n(u,"id","tiny-stroke-container"),n(u,"class","svelte-zo037c"),n(m,"class","stroke-button svelte-zo037c"),n(m,"id","small-stroke"),A(m,"border",s[16]),n(g,"class","stroke-button svelte-zo037c"),n(g,"id","medium-stroke"),A(g,"border",s[17]),n(D,"class","stroke-button svelte-zo037c"),n(D,"id","big-stroke"),A(D,"border",s[18]),n(f,"class","stroke-width svelte-zo037c"),n(l,"class","style-section svelte-zo037c"),n(w,"type","range"),n(w,"min","0"),n(w,"max","255"),n(w,"id","color-slider"),A(w,"background-color","rgb("+s[1]+","+s[2]+","+s[3]),n(w,"class","svelte-zo037c"),n(T,"class","stroke-color svelte-zo037c"),n(H,"class","style-section svelte-zo037c"),n(B,"id","pallette-done"),n(B,"class","svelte-zo037c"),n(t,"class","modal-info draw-settings svelte-zo037c"),n(t,"id","pallette"),n(R,"class","icon-button exit-button svelte-zo037c"),n(e,"class","container svelte-zo037c"),n(e,"id","pallette-container")},m(Y,q){F(Y,e,q),o(e,t),o(t,l),o(l,i),o(i,r),o(l,d),o(l,f),o(f,u),o(u,a),o(f,c),o(f,m),o(f,k),o(f,g),o(f,V),o(f,D),o(t,y),o(t,H),o(H,I),o(I,O),o(H,E),o(H,T),o(T,w),_e(w,s[1]),o(t,P),o(t,B),o(B,N),o(e,M),o(e,R),te||(J=[z(u,"click",s[23]),z(u,"touchstart",s[23]),z(m,"click",s[23]),z(m,"touchstart",s[23]),z(g,"click",s[23]),z(g,"touchstart",s[23]),z(D,"click",s[23]),z(D,"touchstart",s[23]),z(w,"change",s[26]),z(w,"change",s[41]),z(w,"input",s[41]),z(B,"click",s[30]),z(B,"touchstart",s[30],{passive:!0}),z(B,"mouseenter",s[42]),z(B,"mouseleave",s[43]),z(t,"mouseenter",s[44]),z(t,"mouseleave",s[45]),z(R,"click",s[30]),z(R,"touchstart",s[30],{passive:!0}),z(e,"click",s[30])],te=!0)},p(Y,q){q[0]&32768&&A(a,"border",Y[15]),q[0]&65536&&A(m,"border",Y[16]),q[0]&131072&&A(g,"border",Y[17]),q[0]&262144&&A(D,"border",Y[18]),q[0]&14&&A(w,"background-color","rgb("+Y[1]+","+Y[2]+","+Y[3]),q[0]&2&&_e(w,Y[1])},d(Y){Y&&h(e),te=!1,ve(J)}}}function st(s){let e,t,l,i,r,d,f,u=s[19][0]+"",a,c,m,k,g,V,D=s[19][1]+"",y,H,I,O,E,T,w=s[19][2]+"",P,B,N,M,R,te,J,Y,q,G,L,x,oe=s[19][4]+"",se,ue,ne,ge,Q,ae,pe=s[19][5]+"",he,ie,be,Be,ce,Se=s[19][6]+"",Ce,Ue,Ne,We,Z=s[9]&&lt();return{c(){e=p("div"),t=p("div"),l=p("h2"),i=S("Contribute to the Cloud Cities repository"),r=C(),d=p("div"),f=p("p"),a=S(u),c=C(),m=p("input"),k=C(),g=p("div"),V=p("p"),y=S(D),H=C(),I=p("input"),O=C(),E=p("div"),T=p("p"),P=S(w),B=C(),N=p("input"),M=C(),R=p("p"),te=S(s[20]),J=p("span"),Y=p("p"),q=S(s[21]),G=C(),L=p("div"),x=p("button"),se=S(oe),ue=C(),ne=p("img"),Q=C(),ae=p("button"),he=S(pe),ie=p("img"),Be=C(),ce=p("button"),Ce=S(Se),Ue=C(),Z&&Z.c(),this.h()},l($){e=b($,"DIV",{class:!0});var de=_(e);t=b(de,"DIV",{class:!0});var X=_(t);l=b(X,"H2",{});var Le=_(l);i=W(Le,"Contribute to the Cloud Cities repository"),Le.forEach(h),r=U(X),d=b(X,"DIV",{class:!0});var Ie=_(d);f=b(Ie,"P",{class:!0});var Fe=_(f);a=W(Fe,u),Fe.forEach(h),c=U(Ie),m=b(Ie,"INPUT",{type:!0,id:!0,"data-lpignore":!0,maxlength:!0,class:!0}),Ie.forEach(h),k=U(X),g=b(X,"DIV",{class:!0});var ke=_(g);V=b(ke,"P",{class:!0});var Re=_(V);y=W(Re,D),Re.forEach(h),H=U(ke),I=b(ke,"INPUT",{type:!0,id:!0,"data-lpignore":!0,maxlength:!0,class:!0}),ke.forEach(h),O=U(X),E=b(X,"DIV",{class:!0});var Ee=_(E);T=b(Ee,"P",{class:!0});var je=_(T);P=W(je,w),je.forEach(h),B=U(Ee),N=b(Ee,"INPUT",{type:!0,id:!0,"data-lpignore":!0,maxlength:!0,class:!0}),Ee.forEach(h),M=U(X),R=b(X,"P",{});var v=_(R);te=W(v,s[20]),J=b(v,"SPAN",{style:!0});var j=_(J);Y=b(j,"P",{});var re=_(Y);q=W(re,s[21]),re.forEach(h),j.forEach(h),v.forEach(h),G=U(X),L=b(X,"DIV",{class:!0});var ee=_(L);x=b(ee,"BUTTON",{id:!0,class:!0});var fe=_(x);se=W(fe,oe),ue=U(fe),ne=b(fe,"IMG",{src:!0,alt:!0,class:!0}),fe.forEach(h),Q=U(ee),ae=b(ee,"BUTTON",{id:!0,class:!0});var me=_(ae);he=W(me,pe),ie=b(me,"IMG",{src:!0,alt:!0,class:!0}),me.forEach(h),ee.forEach(h),Be=U(X),ce=b(X,"BUTTON",{id:!0,class:!0});var ye=_(ce);Ce=W(ye,Se),ye.forEach(h),Ue=U(X),Z&&Z.l(X),X.forEach(h),de.forEach(h),this.h()},h(){n(f,"class","svelte-zo037c"),n(m,"type","text"),n(m,"id","input-title"),n(m,"data-lpignore","true"),n(m,"maxlength","50"),n(m,"class","svelte-zo037c"),n(d,"class","input-section svelte-zo037c"),n(V,"class","svelte-zo037c"),n(I,"type","text"),n(I,"id","input-location"),n(I,"data-lpignore","true"),n(I,"maxlength","30"),n(I,"class","svelte-zo037c"),n(g,"class","input-section svelte-zo037c"),n(T,"class","svelte-zo037c"),n(N,"type","text"),n(N,"id","input-name"),n(N,"data-lpignore","true"),n(N,"maxlength","30"),n(N,"class","svelte-zo037c"),n(E,"class","input-section svelte-zo037c"),A(J,"text-decoration","underline"),A(J,"cursor","pointer"),Qe(ne.src,ge="./cloud_submit.svg")||n(ne,"src",ge),n(ne,"alt","submit"),n(ne,"class","svelte-zo037c"),n(x,"id","submit-button"),n(x,"class","svelte-zo037c"),Qe(ie.src,be="./cloud_download.svg")||n(ie,"src",be),n(ie,"alt","download"),n(ie,"class","svelte-zo037c"),n(ae,"id","download-button"),n(ae,"class","svelte-zo037c"),n(L,"class","flex-row svelte-zo037c"),n(ce,"id","cancel-button"),n(ce,"class","svelte-zo037c"),n(t,"class","modal-info submit-image svelte-zo037c"),n(e,"class","container svelte-zo037c")},m($,de){F($,e,de),o(e,t),o(t,l),o(l,i),o(t,r),o(t,d),o(d,f),o(f,a),o(d,c),o(d,m),_e(m,s[8]),o(t,k),o(t,g),o(g,V),o(V,y),o(g,H),o(g,I),_e(I,s[7]),o(t,O),o(t,E),o(E,T),o(T,P),o(E,B),o(E,N),_e(N,s[6]),o(t,M),o(t,R),o(R,te),o(R,J),o(J,Y),o(Y,q),o(t,G),o(t,L),o(L,x),o(x,se),o(x,ue),o(x,ne),o(L,Q),o(L,ae),o(ae,he),o(ae,ie),o(t,Be),o(t,ce),o(ce,Ce),o(t,Ue),Z&&Z.m(t,null),Ne||(We=[z(m,"input",s[46]),z(I,"input",s[47]),z(N,"input",s[48]),z(J,"click",s[35]),z(x,"click",s[24]),z(ae,"click",s[25]),z(ce,"click",s[33])],Ne=!0)},p($,de){de[0]&256&&m.value!==$[8]&&_e(m,$[8]),de[0]&128&&I.value!==$[7]&&_e(I,$[7]),de[0]&64&&N.value!==$[6]&&_e(N,$[6]),$[9]?Z||(Z=lt(),Z.c(),Z.m(t,null)):Z&&(Z.d(1),Z=null)},d($){$&&h(e),Z&&Z.d(),Ne=!1,ve(We)}}}function lt(s){let e,t;return{c(){e=p("p"),t=S(`We are missing information to complete your Cloud Cities submission. Please tell us more
						about your drawing! Please note: Location and Name are optional.`)},l(l){e=b(l,"P",{});var i=_(e);t=W(i,`We are missing information to complete your Cloud Cities submission. Please tell us more
						about your drawing! Please note: Location and Name are optional.`),i.forEach(h)},m(l,i){F(l,e,i),o(e,t)},d(l){l&&h(e)}}}function ot(s){let e,t,l,i,r,d,f,u,a,c,m,k,g;return{c(){e=p("div"),t=p("div"),l=p("h2"),i=S("Submitting"),r=C(),d=p("h2"),f=S("."),u=C(),a=p("h2"),c=S("."),m=C(),k=p("h2"),g=S("."),this.h()},l(V){e=b(V,"DIV",{class:!0});var D=_(e);t=b(D,"DIV",{id:!0,class:!0});var y=_(t);l=b(y,"H2",{id:!0});var H=_(l);i=W(H,"Submitting"),H.forEach(h),r=U(y),d=b(y,"H2",{class:!0});var I=_(d);f=W(I,"."),I.forEach(h),u=U(y),a=b(y,"H2",{class:!0});var O=_(a);c=W(O,"."),O.forEach(h),m=U(y),k=b(y,"H2",{class:!0});var E=_(k);g=W(E,"."),E.forEach(h),y.forEach(h),D.forEach(h),this.h()},h(){n(l,"id","submitting"),n(d,"class","dot dot-1 svelte-zo037c"),n(a,"class","dot dot-2 svelte-zo037c"),n(k,"class","dot dot-3 svelte-zo037c"),n(t,"id","submit-line"),n(t,"class","svelte-zo037c"),n(e,"class","container svelte-zo037c")},m(V,D){F(V,e,D),o(e,t),o(t,l),o(l,i),o(t,r),o(t,d),o(d,f),o(t,u),o(t,a),o(a,c),o(t,m),o(t,k),o(k,g)},d(V){V&&h(e)}}}function it(s){let e,t,l,i,r,d,f,u,a,c,m,k,g,V,D,y;return{c(){e=p("div"),t=p("div"),l=p("h2"),i=S("Thank you! Submission complete"),r=C(),d=p("p"),f=S("Your drawing will be reviewed shortly and subsequently published onto Cloud Cities."),u=C(),a=p("div"),c=p("button"),m=S("Return to drawing"),k=C(),g=p("button"),V=S("Visit the repository"),this.h()},l(H){e=b(H,"DIV",{class:!0});var I=_(e);t=b(I,"DIV",{class:!0});var O=_(t);l=b(O,"H2",{});var E=_(l);i=W(E,"Thank you! Submission complete"),E.forEach(h),r=U(O),d=b(O,"P",{style:!0});var T=_(d);f=W(T,"Your drawing will be reviewed shortly and subsequently published onto Cloud Cities."),T.forEach(h),u=U(O),a=b(O,"DIV",{class:!0});var w=_(a);c=b(w,"BUTTON",{class:!0});var P=_(c);m=W(P,"Return to drawing"),P.forEach(h),k=U(w),g=b(w,"BUTTON",{class:!0});var B=_(g);V=W(B,"Visit the repository"),B.forEach(h),w.forEach(h),O.forEach(h),I.forEach(h),this.h()},h(){A(d,"text-align","center"),n(c,"class","svelte-zo037c"),n(g,"class","svelte-zo037c"),n(a,"class","flex-row svelte-zo037c"),n(t,"class","modal-info svelte-zo037c"),n(e,"class","container svelte-zo037c")},m(H,I){F(H,e,I),o(e,t),o(t,l),o(l,i),o(t,r),o(t,d),o(d,f),o(t,u),o(t,a),o(a,c),o(c,m),o(a,k),o(a,g),o(g,V),D||(y=[z(c,"click",s[32]),z(c,"touchstart",s[32],{passive:!0}),z(g,"click",s[29]),z(g,"touchstart",s[29],{passive:!0})],D=!0)},p:we,d(H){H&&h(e),D=!1,ve(y)}}}function rt(s){let e,t,l,i,r,d,f;return{c(){e=p("div"),t=C(),l=p("div"),i=C(),r=p("div"),this.h()},l(u){e=b(u,"DIV",{class:!0,id:!0}),_(e).forEach(h),t=U(u),l=b(u,"DIV",{class:!0,id:!0}),_(l).forEach(h),i=U(u),r=b(u,"DIV",{class:!0,id:!0}),_(r).forEach(h),this.h()},h(){n(e,"class","icon-button finished-drawing-button svelte-zo037c"),n(e,"id","finish-button"),n(l,"class","icon-button pallette-button svelte-zo037c"),n(l,"id","p-button"),n(r,"class","icon-button redo-button svelte-zo037c"),n(r,"id","r-button")},m(u,a){F(u,e,a),F(u,t,a),F(u,l,a),F(u,i,a),F(u,r,a),d||(f=[z(e,"click",s[49]),z(e,"touchstart",s[50],{passive:!0}),z(e,"mouseenter",s[27]),z(e,"mouseleave",s[28]),z(l,"click",s[31]),z(l,"touchstart",s[51],{passive:!0}),z(l,"mouseenter",s[27]),z(l,"mouseleave",s[28]),z(r,"mouseenter",s[27]),z(r,"mouseleave",s[28]),z(r,"click",function(){Ze(s[4])&&s[4].apply(this,arguments)}),z(r,"touchstart",function(){Ze(s[4])&&s[4].apply(this,arguments)})],d=!0)},p(u,a){s=u},d(u){u&&h(e),u&&h(t),u&&h(l),u&&h(i),u&&h(r),d=!1,ve(f)}}}function Nt(s){let e,t,l,i,r,d,f,u,a,c,m,k,g,V,D,y,H,I,O=s[5]&&!s[0]&&et(s);l=new Ut({props:{sketch:s[22]}});let E=s[12]&&tt(s),T=s[13]&&st(s),w=s[10]&&ot(),P=s[11]&&it(s),B=!s[12]&&!s[13]&&rt(s);return{c(){e=p("div"),O&&O.c(),t=C(),Te(l.$$.fragment),i=C(),r=p("h2"),d=S("Cloud Cities"),f=C(),u=p("div"),a=C(),c=p("div"),m=C(),E&&E.c(),k=C(),T&&T.c(),g=C(),w&&w.c(),V=C(),P&&P.c(),D=C(),B&&B.c(),this.h()},l(N){e=b(N,"DIV",{id:!0,class:!0});var M=_(e);O&&O.l(M),t=U(M),De(l.$$.fragment,M),i=U(M),r=b(M,"H2",{id:!0,class:!0});var R=_(r);d=W(R,"Cloud Cities"),R.forEach(h),f=U(M),u=b(M,"DIV",{class:!0}),_(u).forEach(h),a=U(M),c=b(M,"DIV",{class:!0}),_(c).forEach(h),m=U(M),E&&E.l(M),k=U(M),T&&T.l(M),g=U(M),w&&w.l(M),V=U(M),P&&P.l(M),D=U(M),B&&B.l(M),M.forEach(h),this.h()},h(){n(r,"id","title"),n(r,"class","svelte-zo037c"),n(u,"class","icon-button about-button svelte-zo037c"),n(c,"class","icon-button repo-button svelte-zo037c"),n(e,"id","canvas-container"),n(e,"class","svelte-zo037c")},m(N,M){F(N,e,M),O&&O.m(e,null),o(e,t),ze(l,e,null),o(e,i),o(e,r),o(r,d),o(e,f),o(e,u),o(e,a),o(e,c),o(e,m),E&&E.m(e,null),o(e,k),T&&T.m(e,null),o(e,g),w&&w.m(e,null),o(e,V),P&&P.m(e,null),o(e,D),B&&B.m(e,null),y=!0,H||(I=[z(u,"click",s[34]),z(c,"mouseenter",s[27]),z(c,"mouseleave",s[28]),z(c,"touchstart",s[29],{passive:!0}),z(c,"click",s[29])],H=!0)},p(N,M){N[5]&&!N[0]?O?O.p(N,M):(O=et(N),O.c(),O.m(e,t)):O&&(O.d(1),O=null),N[12]?E?E.p(N,M):(E=tt(N),E.c(),E.m(e,k)):E&&(E.d(1),E=null),N[13]?T?T.p(N,M):(T=st(N),T.c(),T.m(e,g)):T&&(T.d(1),T=null),N[10]?w||(w=ot(),w.c(),w.m(e,V)):w&&(w.d(1),w=null),N[11]?P?P.p(N,M):(P=it(N),P.c(),P.m(e,D)):P&&(P.d(1),P=null),!N[12]&&!N[13]?B?B.p(N,M):(B=rt(N),B.c(),B.m(e,null)):B&&(B.d(1),B=null)},i(N){y||(K(l.$$.fragment,N),y=!0)},o(N){le(l.$$.fragment,N),y=!1},d(N){N&&h(e),O&&O.d(),Ve(l),E&&E.d(),T&&T.d(),w&&w.d(),P&&P.d(),B&&B.d(),H=!1,ve(I)}}}function Ht(s,e,t){let{propValue:l}=e,{contributeModal:i}=e,{drawInstructions:r}=e,{mobile:d}=e,f=l,u=i.map(v=>v.includes("<span>")?v.split("<span>").pop().split("<")[0]:v.includes("<p>")?v.split("<p>").pop().split("<")[0]:v.split('">').pop().split("<")[0]),a=i[3].split("<span>").pop().split("<")[0],c=i[3].split('style="text-decoration: underline;">').pop().split("<")[0],m=5,k=0,g=0,V=0,D,y,H;const I=v=>{let j;v.preload=()=>{j=v.loadImage(f)};let re,ee;v.setup=()=>{j.width>j.height&&d&&t(5,H=!0),ee=j.height/(j.width/v.windowWidth),re=j.width/(j.height/v.windowHeight),v.windowWidth>=500?v.windowHeight<500?v.createCanvas(v.windowWidth,v.windowHeight):ee<v.windowHeight?v.createCanvas(re,v.windowHeight):v.createCanvas(v.windowWidth,ee):v.windowWidth<500&&v.createCanvas(v.windowWidth,v.windowHeight),v.background(j),document.getElementById("canvas-container"),t(4,y=()=>{v.clear(),v.background(j)})};let fe=0,me=0,ye=0,Ge=0,Ke=.3;v.mousePressed=()=>{if(!(L||D||G||se||r))return fe=v.mouseX,me=v.mouseY,ye=v.mouseX,Ge=v.mouseY,!1},v.touchMoved=()=>{if(L||D||G||se||r)return;let vt=v.mouseX,pt=v.mouseY;return fe+=(vt-fe)*Ke,me+=(pt-me)*Ke,v.strokeWeight(m),v.stroke(k,g,V),v.line(fe,me,ye,Ge),ye=fe,Ge=me,!1},v.windowResized=()=>{ee=j.height/(j.width/v.windowWidth),re=j.width/(j.height/v.windowHeight),v.windowWidth>=500&&v.windowHeight>500?v.height<=v.windowHeight&&v.windowWidth<v.width?v.resizeCanvas(re,v.windowHeight):v.resizeCanvas(v.windowWidth,ee):v.windowHeight<500?(ee<v.windowHeight,v.resizeCanvas(v.windowWidth,v.windowHeight)):v.windowWidth<500&&v.resizeCanvas(v.windowWidth,v.windowHeight),v.background(j)}};let O=document.getElementsByClassName("stroke-button");const E=v=>{let j=v.target.id;v.target.id==="tiny-stroke-container"||v.target.id==="tiny-stroke-circle"?m=5:v.target.id==="small-stroke"?m=10:v.target.id==="medium-stroke"?m=20:v.target.id==="big-stroke"&&(m=30),O.forEach(re=>{if(re!==v.target){if(re.style.border="none",j==="tiny-stroke-container"){let ee=document.getElementById("tiny-stroke-circle");ee.style.border="solid 4px #00D1FF"}}else re.style.border="solid 4px #00D1FF"})};let T,w,P,B,N=JSON.parse(localStorage.getItem("cloudUploads"));const M=["none"];localStorage.setItem("cloudUploads",JSON.stringify(M));let R=!0,te=!1,J=!1;const Y=()=>{if(t(10,te=!0),t(13,L=!1),setTimeout(()=>{console.log("serverResponse in setTimeout: ",J),J?J=!1:(t(11,q=!0),t(10,te=!1),J=!0)},1e4),!(T&&T.length>50||w&&w.length>30||P&&P.length>30))if(T&&R){N=JSON.parse(localStorage.getItem("cloudUploads")),N.push("upload"),localStorage.setItem("cloudUploads",JSON.stringify(N)),R=!1,t(9,B=!1);let v=new FormData;v.append("title",T),v.append("location",w),v.append("name",P),v.append("userUploads",N.length),document.getElementById("defaultCanvas0").toBlob(function(re){v.append("cloud",re),fetch("/addPostfromServer",{method:"POST",body:v}).then(ee=>{console.log("result: ",ee.status),console.log("serverResponse in then: ",J),R=!0,J?J=!1:(console.log("serverResponse in setTimeout: ",J),J=!0,t(11,q=!0),t(10,te=!1))})}),t(13,L=!1),D=!0}else if(R)t(9,B=!0);else return};let q=!1,G=!1,L=!1;const x=()=>{let v=document.createElement("a"),j;T?j=T.split(" ").join("-"):j="myCloudCity",v.download=`${j}.png`,v.href=document.getElementById("defaultCanvas0").toDataURL(),v.click()},oe=v=>{t(1,k=v.srcElement.value),t(2,g=v.srcElement.value),t(3,V=v.srcElement.value)};let se=!1;const ue=()=>{se=!0},ne=()=>{se=!1},ge=()=>{window.location.replace("/")};let Q=!1;const ae=()=>{Q||(G&&t(12,G=!1),L&&t(13,L=!1),se=!1)};let pe,he,ie,be;const Be=()=>{t(12,G=!G),m===5?(t(15,pe="solid 4px #00D1FF"),t(16,he="none"),t(17,ie="none"),t(18,be="none")):m===10?(t(16,he="solid 4px #00D1FF"),t(17,ie="none"),t(18,be="none"),t(15,pe="none")):m===20?(t(16,he="none"),t(17,ie="solid 4px #00D1FF"),t(18,be="none"),t(15,pe="none")):(t(16,he="none"),t(17,ie="none"),t(15,pe="none"),t(18,be="solid 4px #00D1FF"))},ce=()=>{t(13,L=!1),t(11,q=!1),D=!1,se=!1},Se=()=>{t(13,L=!1),se=!1},Ce=()=>{window.open("https://cloudcities.studiotomassaraceno.org","_self")},Ue=()=>{window.open("https://cloudcities.studiotomassaraceno.org/terms/","_blank").focus()},Ne=()=>t(5,H=!1),We=()=>t(5,H=!1);function Z(){k=_t(this.value),t(1,k)}const $=()=>t(14,Q=!Q),de=()=>t(14,Q=!Q),X=()=>t(14,Q=!Q),Le=()=>t(14,Q=!Q);function Ie(){P=this.value,t(8,P)}function Fe(){w=this.value,t(7,w)}function ke(){T=this.value,t(6,T)}const Re=()=>t(13,L=!L),Ee=()=>t(13,L=!L),je=()=>t(12,G=!G);return s.$$set=v=>{"propValue"in v&&t(36,l=v.propValue),"contributeModal"in v&&t(37,i=v.contributeModal),"drawInstructions"in v&&t(0,r=v.drawInstructions),"mobile"in v&&t(38,d=v.mobile)},[r,k,g,V,y,H,T,w,P,B,te,q,G,L,Q,pe,he,ie,be,u,a,c,I,E,Y,x,oe,ue,ne,ge,ae,Be,ce,Se,Ce,Ue,l,i,d,Ne,We,Z,$,de,X,Le,Ie,Fe,ke,Re,Ee,je]}class Ot extends Oe{constructor(e){super(),Me(this,e,Ht,Nt,Pe,{propValue:36,contributeModal:37,drawInstructions:0,mobile:38},null,[-1,-1])}}function Mt(s){let e,t,l,i,r,d,f,u,a,c,m,k;return{c(){e=p("div"),t=p("div"),l=C(),i=p("div"),r=C(),d=p("div"),f=p("div"),u=p("div"),a=C(),c=p("button"),this.h()},l(g){e=b(g,"DIV",{class:!0});var V=_(e);t=b(V,"DIV",{class:!0}),_(t).forEach(h),l=U(V),i=b(V,"DIV",{class:!0,style:!0}),_(i).forEach(h),r=U(V),d=b(V,"DIV",{class:!0});var D=_(d);f=b(D,"DIV",{class:!0});var y=_(f);u=b(y,"DIV",{id:!0}),_(u).forEach(h),a=U(y),c=b(y,"BUTTON",{id:!0}),_(c).forEach(h),y.forEach(h),D.forEach(h),V.forEach(h),this.h()},h(){n(t,"class","icon-button about-button svelte-khx1i0"),n(i,"class","modal-container"),A(i,"background-image","url("+s[0]+")"),A(i,"background-size","cover"),A(i,"background-position","center"),n(u,"id","drawInstructions"),n(c,"id","begin-button"),n(f,"class","start-draw-center svelte-khx1i0"),n(d,"class","modal-container"),n(e,"class","start-draw-container svelte-khx1i0")},m(g,V){F(g,e,V),o(e,t),o(e,l),o(e,i),o(e,r),o(e,d),o(d,f),o(f,u),o(f,a),o(f,c),m||(k=[z(t,"click",s[2]),z(c,"click",s[1])],m=!0)},p(g,[V]){V&1&&A(i,"background-image","url("+g[0]+")")},i:we,o:we,d(g){g&&h(e),m=!1,ve(k)}}}function Pt(s,e,t){const l=Xe();let{drawInstructions:i}=e,{propValue:r}=e,d;Je(async()=>{d=document.getElementById("drawInstructions"),d.innerHTML=i[0];let a=document.getElementById("begin-button");a.innerHTML=i[1]});const f=()=>{l("closeInstructions")},u=()=>{window.open("https://cloudcities.studiotomassaraceno.org","_self")};return s.$$set=a=>{"drawInstructions"in a&&t(3,i=a.drawInstructions),"propValue"in a&&t(0,r=a.propValue)},[r,f,u,i]}class St extends Oe{constructor(e){super(),Me(this,e,Pt,Mt,Pe,{drawInstructions:3,propValue:0})}}function nt(s){let e,t,l,i,r,d,f,u,a,c,m,k,g,V,D,y=s[5]&&at(s);return{c(){e=p("div"),t=p("h2"),l=S(s[1]),i=C(),r=p("div"),d=C(),f=p("div"),u=p("button"),a=C(),c=p("button"),m=C(),k=p("button"),g=C(),y&&y.c(),this.h()},l(H){e=b(H,"DIV",{class:!0});var I=_(e);t=b(I,"H2",{class:!0});var O=_(t);l=W(O,s[1]),O.forEach(h),i=U(I),r=b(I,"DIV",{id:!0,class:!0}),_(r).forEach(h),d=U(I),f=b(I,"DIV",{class:!0});var E=_(f);u=b(E,"BUTTON",{id:!0,class:!0}),_(u).forEach(h),a=U(E),c=b(E,"BUTTON",{id:!0,class:!0}),_(c).forEach(h),m=U(E),k=b(E,"BUTTON",{id:!0,class:!0}),_(k).forEach(h),E.forEach(h),g=U(I),y&&y.l(I),I.forEach(h),this.h()},h(){n(t,"class","svelte-yoz1d9"),n(r,"id","cloudstobe"),n(r,"class","svelte-yoz1d9"),n(u,"id","draw-button"),n(u,"class","enter-button svelte-yoz1d9"),n(c,"id","remix-button"),n(c,"class","enter-button svelte-yoz1d9"),n(k,"id","upload-button"),n(k,"class","enter-button svelte-yoz1d9"),n(f,"class","button-section svelte-yoz1d9"),n(e,"class","modal-info svelte-yoz1d9")},m(H,I){F(H,e,I),o(e,t),o(t,l),o(e,i),o(e,r),o(e,d),o(e,f),o(f,u),o(f,a),o(f,c),o(f,m),o(f,k),o(e,g),y&&y.m(e,null),V||(D=[z(u,"click",s[10]),z(c,"click",s[12]),z(k,"click",s[7])],V=!0)},p(H,I){I&2&&gt(l,H[1]),H[5]?y?y.p(H,I):(y=at(H),y.c(),y.m(e,null)):y&&(y.d(1),y=null)},d(H){H&&h(e),y&&y.d(),V=!1,ve(D)}}}function at(s){let e,t,l,i,r,d,f=!s[6]&&ut(s),u=s[6]&&ct();return{c(){e=p("input"),t=C(),f&&f.c(),l=C(),u&&u.c(),i=qe(),this.h()},l(a){e=b(a,"INPUT",{accept:!0,type:!0,id:!0,class:!0}),t=U(a),f&&f.l(a),l=U(a),u&&u.l(a),i=qe(),this.h()},h(){n(e,"accept",".png, .jpg, .jpeg"),n(e,"type","file"),n(e,"id","upload"),n(e,"class","svelte-yoz1d9")},m(a,c){F(a,e,c),F(a,t,c),f&&f.m(a,c),F(a,l,c),u&&u.m(a,c),F(a,i,c),r||(d=z(e,"change",s[8]),r=!0)},p(a,c){a[6]?f&&(f.d(1),f=null):f?f.p(a,c):(f=ut(a),f.c(),f.m(l.parentNode,l)),a[6]?u||(u=ct(),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null)},d(a){a&&h(e),a&&h(t),f&&f.d(a),a&&h(l),u&&u.d(a),a&&h(i),r=!1,d()}}}function ut(s){let e,t,l,i;return{c(){e=p("button"),t=S("Upload"),this.h()},l(r){e=b(r,"BUTTON",{id:!0,class:!0});var d=_(e);t=W(d,"Upload"),d.forEach(h),this.h()},h(){n(e,"id","drawOnUpload-button"),n(e,"class","svelte-yoz1d9")},m(r,d){F(r,e,d),o(e,t),l||(i=z(e,"click",s[9]),l=!0)},p:we,d(r){r&&h(e),l=!1,i()}}}function ct(s){let e,t;return{c(){e=p("p"),t=S("Please choose a smaller file"),this.h()},l(l){e=b(l,"P",{class:!0});var i=_(e);t=W(i,"Please choose a smaller file"),i.forEach(h),this.h()},h(){n(e,"class","svelte-yoz1d9")},m(l,i){F(l,e,i),o(e,t)},d(l){l&&h(e)}}}function Wt(s){let e,t,l,i,r,d,f,u,a,c,m,k,g,V,D,y,H,I,O,E=s[3]&&!s[2]&&nt(s);return{c(){e=p("div"),t=p("div"),l=C(),i=p("div"),r=C(),d=p("h2"),f=S("Cloud Cities"),u=C(),a=p("div"),c=C(),E&&E.c(),m=C(),k=p("div"),g=p("div"),V=C(),D=p("button"),this.h()},l(T){e=b(T,"DIV",{class:!0,style:!0});var w=_(e);t=b(w,"DIV",{class:!0}),_(t).forEach(h),l=U(w),i=b(w,"DIV",{class:!0}),_(i).forEach(h),r=U(w),d=b(w,"H2",{id:!0,class:!0});var P=_(d);f=W(P,"Cloud Cities"),P.forEach(h),u=U(w),a=b(w,"DIV",{class:!0}),_(a).forEach(h),c=U(w),E&&E.l(w),m=U(w),k=b(w,"DIV",{class:!0,style:!0});var B=_(k);g=b(B,"DIV",{id:!0}),_(g).forEach(h),V=U(B),D=b(B,"BUTTON",{id:!0,class:!0}),_(D).forEach(h),B.forEach(h),w.forEach(h),this.h()},h(){n(t,"class","icon-button repo-button svelte-yoz1d9"),n(i,"class","modal-container"),n(d,"id","title"),n(d,"class","svelte-yoz1d9"),n(a,"class","icon-button about-button"),n(g,"id","drawInstructions"),n(D,"id","begin-button"),n(D,"class","svelte-yoz1d9"),n(k,"class","modal-info svelte-yoz1d9"),A(k,"visibility",s[4]),n(e,"class","modal-container"),A(e,"background-image","url("+s[0]+")"),A(e,"background-size","cover"),A(e,"background-position","center")},m(T,w){F(T,e,w),o(e,t),o(e,l),o(e,i),o(e,r),o(e,d),o(d,f),o(e,u),o(e,a),o(e,c),E&&E.m(e,null),o(e,m),o(e,k),o(k,g),o(k,V),o(k,D),H=!0,I||(O=[z(t,"touchstart",s[13],{passive:!0}),z(t,"click",s[13]),z(a,"click",s[14]),z(D,"click",s[11])],I=!0)},p(T,[w]){T[3]&&!T[2]?E?E.p(T,w):(E=nt(T),E.c(),E.m(e,m)):E&&(E.d(1),E=null),(!H||w&16)&&A(k,"visibility",T[4]),(!H||w&1)&&A(e,"background-image","url("+T[0]+")")},i(T){H||(wt(()=>{y||(y=xe(e,$e,{},!0)),y.run(1)}),H=!0)},o(T){y||(y=xe(e,$e,{},!1)),y.run(0),H=!1},d(T){T&&h(e),E&&E.d(),T&&y&&y.end(),I=!1,ve(O)}}}function Lt(s,e,t){const l=Xe();let{propValue:i}=e,{cloudsToBe:r}=e,{drawInstructions:d}=e,{title:f}=e,{straightToInstructions:u}=e,a;Je(async()=>{let B=document.getElementById("cloudstobe");B.innerHTML=r[0];let N=document.getElementById("draw-button"),M=document.getElementById("remix-button"),R=document.getElementById("upload-button");N.innerHTML=r[1],M.innerHTML=r[2],R.innerHTML=r[3],a=document.getElementById("drawInstructions"),a.innerHTML=d[0];let te=document.getElementById("begin-button");te.innerHTML=d[1]});let c=!0,m="hidden",k=!1,g;const V=()=>{t(5,k=!0)};let D;const y=()=>{t(6,D=!1);const N=document.getElementById("upload").files[0];if(N.size>1e7){t(6,D=!0);return}g=URL.createObjectURL(N)};let H;const I=()=>{t(3,c=!1),t(4,m="visible"),H="drawOnUploadImage"},O=()=>{t(3,c=!1),t(4,m="visible"),H="drawOnThisImage"},E=()=>{H==="drawOnThisImage"?l("startDrawing",!1):H==="drawOnUploadImage"&&l("startDrawing",g)},T=()=>{l("remixCanvas")},w=()=>{window.location.replace("/")},P=()=>{window.open("https://cloudcities.studiotomassaraceno.org","_self")};return s.$$set=B=>{"propValue"in B&&t(0,i=B.propValue),"cloudsToBe"in B&&t(15,r=B.cloudsToBe),"drawInstructions"in B&&t(16,d=B.drawInstructions),"title"in B&&t(1,f=B.title),"straightToInstructions"in B&&t(2,u=B.straightToInstructions)},[i,f,u,c,m,k,D,V,y,I,O,E,T,w,P,r,d]}class Ft extends Oe{constructor(e){super(),Me(this,e,Lt,Wt,Pe,{propValue:0,cloudsToBe:15,drawInstructions:16,title:1,straightToInstructions:2})}}function dt(s){let e,t;return e=new Ft({props:{title:s[8],drawInstructions:s[9],cloudsToBe:s[7],propValue:s[2],straightToInstructions:jt}}),e.$on("startDrawing",s[12]),e.$on("remixCanvas",s[13]),{c(){Te(e.$$.fragment)},l(l){De(e.$$.fragment,l)},m(l,i){ze(e,l,i),t=!0},p(l,i){const r={};i&256&&(r.title=l[8]),i&512&&(r.drawInstructions=l[9]),i&128&&(r.cloudsToBe=l[7]),i&4&&(r.propValue=l[2]),e.$set(r)},i(l){t||(K(e.$$.fragment,l),t=!0)},o(l){le(e.$$.fragment,l),t=!1},d(l){Ve(e,l)}}}function ft(s){let e,t;return e=new Ot({props:{propValue:s[4],drawInstructions:s[1],contributeModal:s[10],mobile:s[3]}}),{c(){Te(e.$$.fragment)},l(l){De(e.$$.fragment,l)},m(l,i){ze(e,l,i),t=!0},p(l,i){const r={};i&16&&(r.propValue=l[4]),i&2&&(r.drawInstructions=l[1]),i&1024&&(r.contributeModal=l[10]),i&8&&(r.mobile=l[3]),e.$set(r)},i(l){t||(K(e.$$.fragment,l),t=!0)},o(l){le(e.$$.fragment,l),t=!1},d(l){Ve(e,l)}}}function ht(s){let e,t,l,i;return e=new It({props:{openComponent:"remix",image:!1}}),l=new kt({props:{repoImages:s[11],remix:!0}}),l.$on("drawOnImage",s[12]),{c(){Te(e.$$.fragment),t=C(),Te(l.$$.fragment)},l(r){De(e.$$.fragment,r),t=U(r),De(l.$$.fragment,r)},m(r,d){ze(e,r,d),F(r,t,d),ze(l,r,d),i=!0},p(r,d){const f={};d&2048&&(f.repoImages=r[11]),l.$set(f)},i(r){i||(K(e.$$.fragment,r),K(l.$$.fragment,r),i=!0)},o(r){le(e.$$.fragment,r),le(l.$$.fragment,r),i=!1},d(r){Ve(e,r),r&&h(t),Ve(l,r)}}}function mt(s){let e,t;return e=new St({props:{propValue:s[4],drawInstructions:s[9]}}),e.$on("closeInstructions",s[14]),{c(){Te(e.$$.fragment)},l(l){De(e.$$.fragment,l)},m(l,i){ze(e,l,i),t=!0},p(l,i){const r={};i&16&&(r.propValue=l[4]),i&512&&(r.drawInstructions=l[9]),e.$set(r)},i(l){t||(K(e.$$.fragment,l),t=!0)},o(l){le(e.$$.fragment,l),t=!1},d(l){Ve(e,l)}}}function Rt(s){let e,t,l,i,r,d=s[2]&&s[6]&&s[7].length>0&&dt(s),f=s[5]&&ft(s),u=s[0]&&ht(s),a=s[1]&&mt(s);return{c(){d&&d.c(),e=C(),f&&f.c(),t=C(),u&&u.c(),l=C(),a&&a.c(),i=qe()},l(c){d&&d.l(c),e=U(c),f&&f.l(c),t=U(c),u&&u.l(c),l=U(c),a&&a.l(c),i=qe()},m(c,m){d&&d.m(c,m),F(c,e,m),f&&f.m(c,m),F(c,t,m),u&&u.m(c,m),F(c,l,m),a&&a.m(c,m),F(c,i,m),r=!0},p(c,[m]){c[2]&&c[6]&&c[7].length>0?d?(d.p(c,m),m&196&&K(d,1)):(d=dt(c),d.c(),K(d,1),d.m(e.parentNode,e)):d&&(Ye(),le(d,1,1,()=>{d=null}),Ae()),c[5]?f?(f.p(c,m),m&32&&K(f,1)):(f=ft(c),f.c(),K(f,1),f.m(t.parentNode,t)):f&&(Ye(),le(f,1,1,()=>{f=null}),Ae()),c[0]?u?(u.p(c,m),m&1&&K(u,1)):(u=ht(c),u.c(),K(u,1),u.m(l.parentNode,l)):u&&(Ye(),le(u,1,1,()=>{u=null}),Ae()),c[1]?a?(a.p(c,m),m&2&&K(a,1)):(a=mt(c),a.c(),K(a,1),a.m(i.parentNode,i)):a&&(Ye(),le(a,1,1,()=>{a=null}),Ae())},i(c){r||(K(d),K(f),K(u),K(a),r=!0)},o(c){le(d),le(f),le(u),le(a),r=!1},d(c){d&&d.d(c),c&&h(e),f&&f.d(c),c&&h(t),u&&u.d(c),c&&h(l),a&&a.d(c),c&&h(i)}}}let jt=!1;function At(s,e,t){let l,i,r,d,f;He(s,Et,I=>t(7,l=I)),He(s,yt,I=>t(8,i=I)),He(s,Tt,I=>t(9,r=I)),He(s,Dt,I=>t(10,d=I)),He(s,zt,I=>t(11,f=I));let u=!1,a=!1,c,m;Je(async()=>{window.addEventListener("gesturechange",function(w){w.preventDefault()},!1);let I=window.screen.width<window.outerWidth?window.screen.width:window.outerWidth;t(3,m=I<500);let E=await(await fetch("https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=48&per_page=50")).json(),T=Math.floor(Math.random()*E.length);t(2,c=E[T].source_url)});let k,g=!1,V=!0;return[u,a,c,m,k,g,V,l,i,r,d,f,I=>{I.detail?t(4,k=I.detail):t(4,k=c),u?(t(1,a=!0),t(0,u=!1),t(5,g=!0),t(4,k=I.detail.link)):(t(6,V=!1),t(5,g=!0))},()=>{t(0,u=!0),t(6,V=!1)},()=>t(1,a=!1)]}class Gt extends Oe{constructor(e){super(),Me(this,e,At,Rt,Pe,{})}}export{Gt as default};
