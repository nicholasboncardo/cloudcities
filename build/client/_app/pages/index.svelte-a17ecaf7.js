import{S as O,i as R,s as U,e as h,k as T,t as H,c as g,a as k,d,m as w,h as B,b as v,g as I,J as _,N as S,E as K,O as re,j as N,L as ae,Q as ne,R as q,v as fe,U as x,w as j,x as F,y as J,q as $,o as L,B as Q,l as ee,p as te,T as z,n as le}from"../chunks/index-c93fc7ab.js";import{f as G,G as ce,w as ue,b as de,r as me}from"../chunks/wpTitles-f2c63942.js";import"../chunks/index-a24d6f2a.js";function se(a){let e,l,t,s,r,n,f,c,u,p;return{c(){e=h("a"),l=h("div"),t=T(),s=h("h2"),r=H("Cloud Cities"),n=T(),f=h("a"),c=h("div"),this.h()},l(i){e=g(i,"A",{href:!0});var o=k(e);l=g(o,"DIV",{class:!0}),k(l).forEach(d),o.forEach(d),t=w(i),s=g(i,"H2",{class:!0});var m=k(s);r=B(m,"Cloud Cities"),m.forEach(d),n=w(i),f=g(i,"A",{href:!0});var b=k(f);c=g(b,"DIV",{class:!0}),k(c).forEach(d),b.forEach(d),this.h()},h(){v(l,"class","overlay-button draw svelte-5r6x5d"),v(e,"href","/draw"),v(s,"class","svelte-5r6x5d"),v(c,"class","overlay-button about svelte-5r6x5d"),v(f,"href","/about")},m(i,o){I(i,e,o),_(e,l),I(i,t,o),I(i,s,o),_(s,r),I(i,n,o),I(i,f,o),_(f,c),u||(p=[S(l,"click",a[3]),S(c,"click",a[4])],u=!0)},p:K,d(i){i&&d(e),i&&d(t),i&&d(s),i&&d(n),i&&d(f),u=!1,re(p)}}}function ie(a){let e,l,t,s=a[1].title+"",r,n,f,c,u,p;return{c(){e=h("div"),l=T(),t=h("h2"),r=H(s),n=T(),f=h("a"),c=h("div"),this.h()},l(i){e=g(i,"DIV",{class:!0}),k(e).forEach(d),l=w(i),t=g(i,"H2",{class:!0});var o=k(t);r=B(o,s),o.forEach(d),n=w(i),f=g(i,"A",{href:!0});var m=k(f);c=g(m,"DIV",{class:!0}),k(c).forEach(d),m.forEach(d),this.h()},h(){v(e,"class","overlay-button close svelte-5r6x5d"),v(t,"class","svelte-5r6x5d"),v(c,"class","overlay-button about svelte-5r6x5d"),v(f,"href","/about")},m(i,o){I(i,e,o),I(i,l,o),I(i,t,o),_(t,r),I(i,n,o),I(i,f,o),_(f,c),u||(p=[S(e,"click",a[2]),S(c,"click",a[4])],u=!0)},p(i,o){o&2&&s!==(s=i[1].title+"")&&N(r,s)},d(i){i&&d(e),i&&d(l),i&&d(t),i&&d(n),i&&d(f),u=!1,re(p)}}}function _e(a){let e,l,t=a[0]==="gallery"&&se(a),s=a[0]==="individualPost"&&ie(a);return{c(){e=h("div"),t&&t.c(),l=T(),s&&s.c(),this.h()},l(r){e=g(r,"DIV",{class:!0});var n=k(e);t&&t.l(n),l=w(n),s&&s.l(n),n.forEach(d),this.h()},h(){v(e,"class","overlay svelte-5r6x5d")},m(r,n){I(r,e,n),t&&t.m(e,null),_(e,l),s&&s.m(e,null)},p(r,[n]){r[0]==="gallery"?t?t.p(r,n):(t=se(r),t.c(),t.m(e,l)):t&&(t.d(1),t=null),r[0]==="individualPost"?s?s.p(r,n):(s=ie(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:K,o:K,d(r){r&&d(e),t&&t.d(),s&&s.d()}}}function ve(a,e,l){const t=ae();let{openComponent:s}=e,{image:r}=e;const n=()=>{t("closeLargeImage")},f=()=>{t("clickDraw")},c=()=>{t("goToAbout")};return a.$$set=u=>{"openComponent"in u&&l(0,s=u.openComponent),"image"in u&&l(1,r=u.image)},[s,r,n,f,c]}class pe extends O{constructor(e){super(),R(this,e,ve,_e,U,{openComponent:0,image:1})}}function he(a){let e,l,t,s,r,n,f,c,u,p,i,o,m;return{c(){e=h("div"),l=h("div"),t=h("h2"),s=H(a[0]),r=T(),n=h("div"),f=T(),c=h("button"),u=H("Enter"),this.h()},l(b){e=g(b,"DIV",{class:!0});var y=k(e);l=g(y,"DIV",{class:!0});var C=k(l);t=g(C,"H2",{id:!0,class:!0});var A=k(t);s=B(A,a[0]),A.forEach(d),r=w(C),n=g(C,"DIV",{id:!0}),k(n).forEach(d),f=w(C),c=g(C,"BUTTON",{id:!0,class:!0});var D=k(c);u=B(D,"Enter"),D.forEach(d),C.forEach(d),y.forEach(d),this.h()},h(){v(t,"id","title"),v(t,"class","start-headline"),v(n,"id","text"),v(c,"id","enter-button"),v(c,"class","svelte-1407kxg"),v(l,"class","modal-center start-info svelte-1407kxg"),v(e,"class","start-container svelte-1407kxg")},m(b,y){I(b,e,y),_(e,l),_(l,t),_(t,s),_(l,r),_(l,n),_(l,f),_(l,c),_(c,u),i=!0,o||(m=S(c,"click",a[1]),o=!0)},p(b,[y]){(!i||y&1)&&N(s,b[0])},i(b){i||(ne(()=>{p||(p=q(e,G,{duration:1e3},!0)),p.run(1)}),i=!0)},o(b){p||(p=q(e,G,{duration:1e3},!1)),p.run(0),i=!1},d(b){b&&d(e),b&&p&&p.end(),o=!1,m()}}}function ge(a,e,l){const t=ae();let{modalText:s}=e,{title:r}=e;const n=()=>{console.log("enter cloud cities"),t("enterCloudcities")};let f,c;return fe(async()=>{l(3,f=document.getElementById("text")),c=document.getElementById("enter-button")}),console.log("title in onmount: ",typeof r),a.$$set=u=>{"modalText"in u&&l(2,s=u.modalText),"title"in u&&l(0,r=u.title)},a.$$.update=()=>{a.$$.dirty&1,a.$$.dirty&13&&s.length>0&&f&&(l(3,f.innerHTML=s[0],f),c.innerHTML=s[1],c.children[0].style.margin="0px",console.log("title in onmount: ",typeof r))},[r,n,s,f]}class be extends O{constructor(e){super(),R(this,e,ge,he,U,{modalText:2,title:0})}}function ke(a){let e,l,t,s,r,n,f,c=a[0].date+"",u,p,i,o=a[0].description+"",m,b,y,C=a[0].location+"",A,D,V;return{c(){e=h("div"),l=h("div"),t=h("img"),r=T(),n=h("div"),f=h("p"),u=H(c),p=T(),i=h("p"),m=H(o),b=T(),y=h("p"),A=H(C),this.h()},l(E){e=g(E,"DIV",{class:!0});var P=k(e);l=g(P,"DIV",{class:!0});var W=k(l);t=g(W,"IMG",{src:!0,alt:!0,class:!0}),W.forEach(d),r=w(P),n=g(P,"DIV",{class:!0});var M=k(n);f=g(M,"P",{});var X=k(f);u=B(X,c),X.forEach(d),p=w(M),i=g(M,"P",{class:!0});var Y=k(i);m=B(Y,o),Y.forEach(d),b=w(M),y=g(M,"P",{});var Z=k(y);A=B(Z,C),Z.forEach(d),M.forEach(d),P.forEach(d),this.h()},h(){x(t.src,s=a[0].link)||v(t,"src",s),v(t,"alt",""),v(t,"class","svelte-1xfmvns"),v(l,"class","indiv-post-image svelte-1xfmvns"),v(i,"class","desc-text svelte-1xfmvns"),v(n,"class","indiv-post-info svelte-1xfmvns"),v(e,"class","indiv-post-modal svelte-1xfmvns")},m(E,P){I(E,e,P),_(e,l),_(l,t),_(e,r),_(e,n),_(n,f),_(f,u),_(n,p),_(n,i),_(i,m),_(n,b),_(n,y),_(y,A),V=!0},p(E,[P]){(!V||P&1&&!x(t.src,s=E[0].link))&&v(t,"src",s),(!V||P&1)&&c!==(c=E[0].date+"")&&N(u,c),(!V||P&1)&&o!==(o=E[0].description+"")&&N(m,o),(!V||P&1)&&C!==(C=E[0].location+"")&&N(A,C)},i(E){V||(ne(()=>{D||(D=q(e,G,{},!0)),D.run(1)}),V=!0)},o(E){D||(D=q(e,G,{},!1)),D.run(0),V=!1},d(E){E&&d(e),E&&D&&D.end()}}}function Ie(a,e,l){let{image:t}=e;return console.log("image: ",t),a.$$set=s=>{"image"in s&&l(0,t=s.image)},[t]}class ye extends O{constructor(e){super(),R(this,e,Ie,ke,U,{image:0})}}function Ee(a){let e,l;return e=new pe({props:{openComponent:a[1],image:a[3]}}),e.$on("closeLargeImage",a[9]),{c(){j(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){J(e,t,s),l=!0},p(t,s){const r={};s&2&&(r.openComponent=t[1]),s&8&&(r.image=t[3]),e.$set(r)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Ce(a){let e,l;return e=new be({props:{title:a[4],modalText:a[5]}}),e.$on("enterCloudcities",a[7]),{c(){j(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){J(e,t,s),l=!0},p(t,s){const r={};s&16&&(r.title=t[4]),s&32&&(r.modalText=t[5]),e.$set(r)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function oe(a){let e,l;return e=new ye({props:{image:a[3]}}),{c(){j(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){J(e,t,s),l=!0},p(t,s){const r={};s&8&&(r.image=t[3]),e.$set(r)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Te(a){let e,l,t,s,r,n,f;const c=[Ce,Ee],u=[];function p(o,m){return o[0]&&o[5].length>0?0:1}e=p(a),l=u[e]=c[e](a),s=new ce({props:{repoImages:a[6],remix:!1}}),s.$on("openImage",a[8]);let i=a[2]&&oe(a);return{c(){l.c(),t=T(),j(s.$$.fragment),r=T(),i&&i.c(),n=ee()},l(o){l.l(o),t=w(o),F(s.$$.fragment,o),r=w(o),i&&i.l(o),n=ee()},m(o,m){u[e].m(o,m),I(o,t,m),J(s,o,m),I(o,r,m),i&&i.m(o,m),I(o,n,m),f=!0},p(o,[m]){let b=e;e=p(o),e===b?u[e].p(o,m):(le(),L(u[b],1,1,()=>{u[b]=null}),te(),l=u[e],l?l.p(o,m):(l=u[e]=c[e](o),l.c()),$(l,1),l.m(t.parentNode,t));const y={};m&64&&(y.repoImages=o[6]),s.$set(y),o[2]?i?(i.p(o,m),m&4&&$(i,1)):(i=oe(o),i.c(),$(i,1),i.m(n.parentNode,n)):i&&(le(),L(i,1,1,()=>{i=null}),te())},i(o){f||($(l),$(s.$$.fragment,o),$(i),f=!0)},o(o){L(l),L(s.$$.fragment,o),L(i),f=!1},d(o){u[e].d(o),o&&d(t),Q(s,o),o&&d(r),i&&i.d(o),o&&d(n)}}}function we(a,e,l){let t,s,r;z(a,ue,m=>l(4,t=m)),z(a,de,m=>l(5,s=m)),z(a,me,m=>l(6,r=m)),console.log("title: ",t);let n=!0,f="gallery";const c=()=>{l(0,n=!1)};let u=!1,p;return[n,f,u,p,t,s,r,c,m=>{l(3,p=m.detail),l(2,u=!0),l(1,f="individualPost")},()=>{l(2,u=!1),l(1,f="gallery")}]}class Ve extends O{constructor(e){super(),R(this,e,we,Te,U,{})}}export{Ve as default};
