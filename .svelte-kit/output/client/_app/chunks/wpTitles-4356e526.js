import{S as de,i as ue,s as he,l as G,g as E,e as g,k as w,c as b,a as k,d as _,m as j,P as W,b as h,J as v,N as M,V as C,t as D,h as V,f as H,j as P,O as J,W as S,E as z,L as _e,v as ve,X as me}from"./index-b4ba22ca.js";import{w as N}from"./index-e1a0e36b.js";const pe=N([]);let ge=20;const ce=async s=>{const e=await(await fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=44&per_page=${s}`)).json();console.log("data: ",e);const l=e.map(i=>{let o=new Date(i.date);return{date:Intl.DateTimeFormat("de-DE").format(o),link:i.source_url,title:i.title.rendered,name:i.alt_text,description:i.description.rendered.includes("<p>")?i.description.rendered.split("<p>").pop().split("</p>")[0]:!1,location:i.caption.rendered.split("<p>").pop().split("</p>")[0]}});pe.set(l)};ce(ge);function B(s,t,e){const l=s.slice();return l[10]=t[e],l[12]=e,l}function F(s,t,e){const l=s.slice();return l[10]=t[e],l[12]=e,l}function O(s,t,e){const l=s.slice();return l[10]=t[e],l[12]=e,l}function q(s,t,e){const l=s.slice();return l[10]=t[e],l[12]=e,l}function A(s){let t,e,l,i,o,r,d,u,m,a=s[1]&&R(s);return{c(){t=g("div"),e=g("div"),l=g("div"),i=g("img"),r=w(),a&&a.c(),d=w(),this.h()},l(n){t=b(n,"DIV",{class:!0});var c=k(t);e=b(c,"DIV",{class:!0});var f=k(e);l=b(f,"DIV",{class:!0});var p=k(l);i=b(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(_),r=j(f),a&&a.l(f),f.forEach(_),d=j(c),c.forEach(_),this.h()},h(){W(i.src,o=s[10].link)||h(i,"src",o),h(i,"alt",""),h(i,"class","svelte-1bcr14j"),h(l,"class","image svelte-1bcr14j"),h(e,"class","gallery-item svelte-1bcr14j"),h(t,"class","gallery-container")},m(n,c){E(n,t,c),v(t,e),v(e,l),v(l,i),v(e,r),a&&a.m(e,null),v(t,d),u||(m=[M(e,"mouseenter",s[4]),M(e,"mouseleave",s[4]),M(t,"click",function(){C(s[3](s[10]))&&s[3](s[10]).apply(this,arguments)})],u=!0)},p(n,c){s=n,c&1&&!W(i.src,o=s[10].link)&&h(i,"src",o),s[1]?a?a.p(s,c):(a=R(s),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(n){n&&_(t),a&&a.d(),u=!1,J(m)}}}function R(s){let t,e,l,i=s[10].date+"",o,r,d,u,m=s[10].title+"",a,n=s[10].location!=="undefined"&&X(s);return{c(){t=g("div"),e=g("div"),l=g("p"),o=D(i),r=w(),n&&n.c(),d=w(),u=g("h2"),a=D(m),this.h()},l(c){t=b(c,"DIV",{class:!0,style:!0});var f=k(t);e=b(f,"DIV",{class:!0});var p=k(e);l=b(p,"P",{class:!0});var I=k(l);o=V(I,i),I.forEach(_),r=j(p),n&&n.l(p),d=j(p),u=b(p,"H2",{class:!0});var y=k(u);a=V(y,m),y.forEach(_),p.forEach(_),f.forEach(_),this.h()},h(){h(l,"class","svelte-1bcr14j"),h(u,"class","desc-text svelte-1bcr14j"),h(e,"class","info-text svelte-1bcr14j"),h(t,"class","img-info svelte-1bcr14j"),H(t,"visibility","hidden")},m(c,f){E(c,t,f),v(t,e),v(e,l),v(l,o),v(e,r),n&&n.m(e,null),v(e,d),v(e,u),v(u,a)},p(c,f){f&1&&i!==(i=c[10].date+"")&&P(o,i),c[10].location!=="undefined"?n?n.p(c,f):(n=X(c),n.c(),n.m(e,d)):n&&(n.d(1),n=null),f&1&&m!==(m=c[10].title+"")&&P(a,m)},d(c){c&&_(t),n&&n.d()}}}function X(s){let t,e=s[10].location+"",l;return{c(){t=g("p"),l=D(e),this.h()},l(i){t=b(i,"P",{class:!0});var o=k(t);l=V(o,e),o.forEach(_),this.h()},h(){h(t,"class","svelte-1bcr14j")},m(i,o){E(i,t,o),v(t,l)},p(i,o){o&1&&e!==(e=i[10].location+"")&&P(l,e)},d(i){i&&_(t)}}}function K(s){let t,e=s[12]%s[2]==0&&A(s);return{c(){e&&e.c(),t=G()},l(l){e&&e.l(l),t=G()},m(l,i){e&&e.m(l,i),E(l,t,i)},p(l,i){l[12]%l[2]==0?e?e.p(l,i):(e=A(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(l){e&&e.d(l),l&&_(t)}}}function Q(s){let t,e=s[0],l=[];for(let i=0;i<e.length;i+=1)l[i]=$(O(s,e,i));return{c(){t=g("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=b(i,"DIV",{class:!0,id:!0});var o=k(t);for(let r=0;r<l.length;r+=1)l[r].l(o);o.forEach(_),this.h()},h(){h(t,"class","flex-container svelte-1bcr14j"),h(t,"id","flex-container2")},m(i,o){E(i,t,o);for(let r=0;r<l.length;r+=1)l[r].m(t,null)},p(i,o){if(o&31){e=i[0];let r;for(r=0;r<e.length;r+=1){const d=O(i,e,r);l[r]?l[r].p(d,o):(l[r]=$(d),l[r].c(),l[r].m(t,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=e.length}},d(i){i&&_(t),S(l,i)}}}function U(s){let t,e,l,i,o,r,d,u,m,a=s[1]&&Y(s);return{c(){t=g("div"),e=g("div"),l=g("div"),i=g("img"),r=w(),a&&a.c(),d=w(),this.h()},l(n){t=b(n,"DIV",{class:!0});var c=k(t);e=b(c,"DIV",{class:!0});var f=k(e);l=b(f,"DIV",{class:!0});var p=k(l);i=b(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(_),r=j(f),a&&a.l(f),f.forEach(_),d=j(c),c.forEach(_),this.h()},h(){W(i.src,o=s[10].link)||h(i,"src",o),h(i,"alt",""),h(i,"class","svelte-1bcr14j"),h(l,"class","image svelte-1bcr14j"),h(e,"class","gallery-item svelte-1bcr14j"),h(t,"class","gallery-container")},m(n,c){E(n,t,c),v(t,e),v(e,l),v(l,i),v(e,r),a&&a.m(e,null),v(t,d),u||(m=[M(e,"mouseenter",s[4]),M(e,"mouseleave",s[4]),M(t,"click",function(){C(s[3](s[10]))&&s[3](s[10]).apply(this,arguments)})],u=!0)},p(n,c){s=n,c&1&&!W(i.src,o=s[10].link)&&h(i,"src",o),s[1]?a?a.p(s,c):(a=Y(s),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(n){n&&_(t),a&&a.d(),u=!1,J(m)}}}function Y(s){let t,e,l,i=s[10].date+"",o,r,d,u,m=s[10].title+"",a,n=s[10].location!=="undefined"&&Z(s);return{c(){t=g("div"),e=g("div"),l=g("p"),o=D(i),r=w(),n&&n.c(),d=w(),u=g("h2"),a=D(m),this.h()},l(c){t=b(c,"DIV",{class:!0,style:!0});var f=k(t);e=b(f,"DIV",{class:!0});var p=k(e);l=b(p,"P",{class:!0});var I=k(l);o=V(I,i),I.forEach(_),r=j(p),n&&n.l(p),d=j(p),u=b(p,"H2",{class:!0});var y=k(u);a=V(y,m),y.forEach(_),p.forEach(_),f.forEach(_),this.h()},h(){h(l,"class","svelte-1bcr14j"),h(u,"class","desc-text svelte-1bcr14j"),h(e,"class","info-text svelte-1bcr14j"),h(t,"class","img-info svelte-1bcr14j"),H(t,"visibility","hidden")},m(c,f){E(c,t,f),v(t,e),v(e,l),v(l,o),v(e,r),n&&n.m(e,null),v(e,d),v(e,u),v(u,a)},p(c,f){f&1&&i!==(i=c[10].date+"")&&P(o,i),c[10].location!=="undefined"?n?n.p(c,f):(n=Z(c),n.c(),n.m(e,d)):n&&(n.d(1),n=null),f&1&&m!==(m=c[10].title+"")&&P(a,m)},d(c){c&&_(t),n&&n.d()}}}function Z(s){let t,e=s[10].location+"",l;return{c(){t=g("p"),l=D(e),this.h()},l(i){t=b(i,"P",{class:!0});var o=k(t);l=V(o,e),o.forEach(_),this.h()},h(){h(t,"class","svelte-1bcr14j")},m(i,o){E(i,t,o),v(t,l)},p(i,o){o&1&&e!==(e=i[10].location+"")&&P(l,e)},d(i){i&&_(t)}}}function $(s){let t,e=s[12]%s[2]==1&&U(s);return{c(){e&&e.c(),t=G()},l(l){e&&e.l(l),t=G()},m(l,i){e&&e.m(l,i),E(l,t,i)},p(l,i){l[12]%l[2]==1?e?e.p(l,i):(e=U(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(l){e&&e.d(l),l&&_(t)}}}function x(s){let t,e=s[0],l=[];for(let i=0;i<e.length;i+=1)l[i]=ie(F(s,e,i));return{c(){t=g("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=b(i,"DIV",{class:!0,id:!0});var o=k(t);for(let r=0;r<l.length;r+=1)l[r].l(o);o.forEach(_),this.h()},h(){h(t,"class","flex-container svelte-1bcr14j"),h(t,"id","flex-container3")},m(i,o){E(i,t,o);for(let r=0;r<l.length;r+=1)l[r].m(t,null)},p(i,o){if(o&31){e=i[0];let r;for(r=0;r<e.length;r+=1){const d=F(i,e,r);l[r]?l[r].p(d,o):(l[r]=ie(d),l[r].c(),l[r].m(t,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=e.length}},d(i){i&&_(t),S(l,i)}}}function ee(s){let t,e,l,i,o,r,d,u,m,a=s[1]&&le(s);return{c(){t=g("div"),e=g("div"),l=g("div"),i=g("img"),r=w(),a&&a.c(),d=w(),this.h()},l(n){t=b(n,"DIV",{class:!0});var c=k(t);e=b(c,"DIV",{class:!0});var f=k(e);l=b(f,"DIV",{class:!0});var p=k(l);i=b(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(_),r=j(f),a&&a.l(f),f.forEach(_),d=j(c),c.forEach(_),this.h()},h(){W(i.src,o=s[10].link)||h(i,"src",o),h(i,"alt",""),h(i,"class","svelte-1bcr14j"),h(l,"class","image svelte-1bcr14j"),h(e,"class","gallery-item svelte-1bcr14j"),h(t,"class","gallery-container")},m(n,c){E(n,t,c),v(t,e),v(e,l),v(l,i),v(e,r),a&&a.m(e,null),v(t,d),u||(m=[M(e,"mouseenter",s[4]),M(e,"mouseleave",s[4]),M(t,"click",function(){C(s[3](s[10]))&&s[3](s[10]).apply(this,arguments)})],u=!0)},p(n,c){s=n,c&1&&!W(i.src,o=s[10].link)&&h(i,"src",o),s[1]?a?a.p(s,c):(a=le(s),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(n){n&&_(t),a&&a.d(),u=!1,J(m)}}}function le(s){let t,e,l,i=s[10].date+"",o,r,d,u,m=s[10].title+"",a,n=s[10].location!=="undefined"&&te(s);return{c(){t=g("div"),e=g("div"),l=g("p"),o=D(i),r=w(),n&&n.c(),d=w(),u=g("h2"),a=D(m),this.h()},l(c){t=b(c,"DIV",{class:!0,style:!0});var f=k(t);e=b(f,"DIV",{class:!0});var p=k(e);l=b(p,"P",{class:!0});var I=k(l);o=V(I,i),I.forEach(_),r=j(p),n&&n.l(p),d=j(p),u=b(p,"H2",{class:!0});var y=k(u);a=V(y,m),y.forEach(_),p.forEach(_),f.forEach(_),this.h()},h(){h(l,"class","svelte-1bcr14j"),h(u,"class","desc-text svelte-1bcr14j"),h(e,"class","info-text svelte-1bcr14j"),h(t,"class","img-info svelte-1bcr14j"),H(t,"visibility","hidden")},m(c,f){E(c,t,f),v(t,e),v(e,l),v(l,o),v(e,r),n&&n.m(e,null),v(e,d),v(e,u),v(u,a)},p(c,f){f&1&&i!==(i=c[10].date+"")&&P(o,i),c[10].location!=="undefined"?n?n.p(c,f):(n=te(c),n.c(),n.m(e,d)):n&&(n.d(1),n=null),f&1&&m!==(m=c[10].title+"")&&P(a,m)},d(c){c&&_(t),n&&n.d()}}}function te(s){let t,e=s[10].location+"",l;return{c(){t=g("p"),l=D(e),this.h()},l(i){t=b(i,"P",{class:!0});var o=k(t);l=V(o,e),o.forEach(_),this.h()},h(){h(t,"class","svelte-1bcr14j")},m(i,o){E(i,t,o),v(t,l)},p(i,o){o&1&&e!==(e=i[10].location+"")&&P(l,e)},d(i){i&&_(t)}}}function ie(s){let t,e=s[12]%s[2]==2&&ee(s);return{c(){e&&e.c(),t=G()},l(l){e&&e.l(l),t=G()},m(l,i){e&&e.m(l,i),E(l,t,i)},p(l,i){l[12]%l[2]==2?e?e.p(l,i):(e=ee(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(l){e&&e.d(l),l&&_(t)}}}function se(s){let t,e=s[0],l=[];for(let i=0;i<e.length;i+=1)l[i]=ae(B(s,e,i));return{c(){t=g("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=b(i,"DIV",{class:!0,id:!0});var o=k(t);for(let r=0;r<l.length;r+=1)l[r].l(o);o.forEach(_),this.h()},h(){h(t,"class","flex-container svelte-1bcr14j"),h(t,"id","flex-container4")},m(i,o){E(i,t,o);for(let r=0;r<l.length;r+=1)l[r].m(t,null)},p(i,o){if(o&31){e=i[0];let r;for(r=0;r<e.length;r+=1){const d=B(i,e,r);l[r]?l[r].p(d,o):(l[r]=ae(d),l[r].c(),l[r].m(t,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=e.length}},d(i){i&&_(t),S(l,i)}}}function ne(s){let t,e,l,i,o,r,d,u,m,a=s[1]&&re(s);return{c(){t=g("div"),e=g("div"),l=g("div"),i=g("img"),r=w(),a&&a.c(),d=w(),this.h()},l(n){t=b(n,"DIV",{class:!0});var c=k(t);e=b(c,"DIV",{class:!0});var f=k(e);l=b(f,"DIV",{class:!0});var p=k(l);i=b(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(_),r=j(f),a&&a.l(f),f.forEach(_),d=j(c),c.forEach(_),this.h()},h(){W(i.src,o=s[10].link)||h(i,"src",o),h(i,"alt",""),h(i,"class","svelte-1bcr14j"),h(l,"class","image svelte-1bcr14j"),h(e,"class","gallery-item svelte-1bcr14j"),h(t,"class","gallery-container")},m(n,c){E(n,t,c),v(t,e),v(e,l),v(l,i),v(e,r),a&&a.m(e,null),v(t,d),u||(m=[M(e,"mouseenter",s[4]),M(e,"mouseleave",s[4]),M(t,"click",function(){C(s[3](s[10]))&&s[3](s[10]).apply(this,arguments)})],u=!0)},p(n,c){s=n,c&1&&!W(i.src,o=s[10].link)&&h(i,"src",o),s[1]?a?a.p(s,c):(a=re(s),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(n){n&&_(t),a&&a.d(),u=!1,J(m)}}}function re(s){let t,e,l,i=s[10].date+"",o,r,d,u,m=s[10].title+"",a,n=s[10].location!=="undefined"&&oe(s);return{c(){t=g("div"),e=g("div"),l=g("p"),o=D(i),r=w(),n&&n.c(),d=w(),u=g("h2"),a=D(m),this.h()},l(c){t=b(c,"DIV",{class:!0,style:!0});var f=k(t);e=b(f,"DIV",{class:!0});var p=k(e);l=b(p,"P",{class:!0});var I=k(l);o=V(I,i),I.forEach(_),r=j(p),n&&n.l(p),d=j(p),u=b(p,"H2",{class:!0});var y=k(u);a=V(y,m),y.forEach(_),p.forEach(_),f.forEach(_),this.h()},h(){h(l,"class","svelte-1bcr14j"),h(u,"class","desc-text svelte-1bcr14j"),h(e,"class","info-text svelte-1bcr14j"),h(t,"class","img-info svelte-1bcr14j"),H(t,"visibility","hidden")},m(c,f){E(c,t,f),v(t,e),v(e,l),v(l,o),v(e,r),n&&n.m(e,null),v(e,d),v(e,u),v(u,a)},p(c,f){f&1&&i!==(i=c[10].date+"")&&P(o,i),c[10].location!=="undefined"?n?n.p(c,f):(n=oe(c),n.c(),n.m(e,d)):n&&(n.d(1),n=null),f&1&&m!==(m=c[10].title+"")&&P(a,m)},d(c){c&&_(t),n&&n.d()}}}function oe(s){let t,e,l=s[10].location+"",i;return{c(){t=D(`}
											`),e=g("p"),i=D(l),this.h()},l(o){t=V(o,`}
											`),e=b(o,"P",{class:!0});var r=k(e);i=V(r,l),r.forEach(_),this.h()},h(){h(e,"class","svelte-1bcr14j")},m(o,r){E(o,t,r),E(o,e,r),v(e,i)},p(o,r){r&1&&l!==(l=o[10].location+"")&&P(i,l)},d(o){o&&_(t),o&&_(e)}}}function ae(s){let t,e=s[12]%s[2]==3&&ne(s);return{c(){e&&e.c(),t=G()},l(l){e&&e.l(l),t=G()},m(l,i){e&&e.m(l,i),E(l,t,i)},p(l,i){l[12]%l[2]==3?e?e.p(l,i):(e=ne(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(l){e&&e.d(l),l&&_(t)}}}function be(s){let t,e,l,i,o,r=s[0],d=[];for(let n=0;n<r.length;n+=1)d[n]=K(q(s,r,n));let u=(s[2]==2||s[2]==3||s[2]==4)&&Q(s),m=(s[2]==3||s[2]==4)&&x(s),a=s[2]==4&&se(s);return{c(){t=g("div"),e=g("div");for(let n=0;n<d.length;n+=1)d[n].c();l=w(),u&&u.c(),i=w(),m&&m.c(),o=w(),a&&a.c(),this.h()},l(n){t=b(n,"DIV",{class:!0,id:!0});var c=k(t);e=b(c,"DIV",{class:!0,id:!0});var f=k(e);for(let p=0;p<d.length;p+=1)d[p].l(f);f.forEach(_),l=j(c),u&&u.l(c),i=j(c),m&&m.l(c),o=j(c),a&&a.l(c),c.forEach(_),this.h()},h(){h(e,"class","flex-container svelte-1bcr14j"),h(e,"id","flex-container1"),h(t,"class","gallery svelte-1bcr14j"),h(t,"id","gallery")},m(n,c){E(n,t,c),v(t,e);for(let f=0;f<d.length;f+=1)d[f].m(e,null);v(t,l),u&&u.m(t,null),v(t,i),m&&m.m(t,null),v(t,o),a&&a.m(t,null)},p(n,[c]){if(c&31){r=n[0];let f;for(f=0;f<r.length;f+=1){const p=q(n,r,f);d[f]?d[f].p(p,c):(d[f]=K(p),d[f].c(),d[f].m(e,null))}for(;f<d.length;f+=1)d[f].d(1);d.length=r.length}n[2]==2||n[2]==3||n[2]==4?u?u.p(n,c):(u=Q(n),u.c(),u.m(t,i)):u&&(u.d(1),u=null),n[2]==3||n[2]==4?m?m.p(n,c):(m=x(n),m.c(),m.m(t,o)):m&&(m.d(1),m=null),n[2]==4?a?a.p(n,c):(a=se(n),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},i:z,o:z,d(n){n&&_(t),S(d,n),u&&u.d(),m&&m.d(),a&&a.d()}}}function ke(s,t,e){const l=_e();let{repoImages:i}=t,{remix:o}=t;console.log("remix: ",o);const r=f=>{console.log("open image: ",f),l(o?"drawOnImage":"openImage",f)};let d=!0;const u=f=>{d?(f.srcElement.children[1].style.visibility="visible",f.srcElement.children[0].children[0].style.transform="scale(1.2)"):(f.srcElement.children[1].style.visibility="hidden",f.srcElement.children[0].children[0].style.transform="scale(1)"),d=!d};let m=20,a=!0,n;const c=()=>{console.log("resize!: "),window.innerWidth<=500?e(2,n=1):window.innerWidth>500&&window.innerWidth<=700?e(2,n=2):window.innerWidth>700&&window.innerWidth<=1e3?e(2,n=3):e(2,n=4),console.log("columns: ",n)};return ve(async()=>{console.log("Window-width: ",window.innerWidth),c(),window.onresize=c,window.screen.width<=560&&(e(1,a=!1),window.addEventListener("scroll",I));let f=document.getElementById("gallery"),p=!0;f.addEventListener("scroll",I);function I(){console.log("scroll registered"),f.scrollTop+window.innerHeight>f.scrollHeight-100&&p&&(console.log("near bottom"),m+=10,ce(m),p=!1)}let y=document.getElementsByClassName("gallery-item");for(let L=0;L<y.length;L++)y[L].addEventListener("mouseover",function(Me){})}),s.$$set=f=>{"repoImages"in f&&e(0,i=f.repoImages),"remix"in f&&e(5,o=f.remix)},[i,a,n,r,u,o]}class We extends de{constructor(t){super(),ue(this,t,ke,be,he,{repoImages:0,remix:5})}}function Ne(s,{delay:t=0,duration:e=400,easing:l=me}={}){const i=+getComputedStyle(s).opacity;return{delay:t,duration:e,easing:l,css:o=>`opacity: ${o*i}`}}const Ee=N([]),we=N([]),je=N([]),Ie=N([]),ye=N([]),T=async(s,t)=>{let e=[],i=await(await fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/posts?slug=modal_${s}`)).json();JSON.parse(i[0].grid).cont.forEach(r=>{e.push(r.cont)}),t.set(e)};T(1,Ee);T(2,we);T(3,je);T(4,Ie);T(5,ye);const De=N(),Ve=N([]),fe=async(s,t)=>{let i=(await(await fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/posts?slug=modal_${s}`)).json())[0].title.rendered;t.set(i)};fe(1,De);fe(2,Ve);export{We as G,je as a,ye as b,we as c,Ve as d,Ee as e,Ne as f,pe as r,De as w};
