import{S as ve,i as _e,s as me,l as S,g as E,e as g,k as w,c as b,a as k,d as m,m as j,P as V,b as v,J as p,M as y,Q as J,t as C,h as M,f as O,j as G,N as T,W as A,E as W,L as pe,v as ke,X as Ee}from"./index-37d50d90.js";import{w as H}from"./index-d2201ef8.js";const we=H([]);let je=20;const ge=async s=>{const i=(await(await fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=44&per_page=${s}`)).json()).map(t=>{let r=new Date(t.date);return{date:Intl.DateTimeFormat("de-DE").format(r),link:t.source_url,title:t.title.rendered,name:t.alt_text,description:t.description.rendered.includes("<p>")?t.description.rendered.split("<p>").pop().split("</p>")[0]:!1,location:t.caption.rendered.split("<p>").pop().split("</p>")[0]}});we.set(i)};ge(je);function F(s,l,e){const i=s.slice();return i[10]=l[e],i[12]=e,i}function q(s,l,e){const i=s.slice();return i[10]=l[e],i[12]=e,i}function z(s,l,e){const i=s.slice();return i[10]=l[e],i[12]=e,i}function X(s,l,e){const i=s.slice();return i[10]=l[e],i[12]=e,i}function Q(s){let l,e,i,t,r,a,d,u,h,c=s[1]&&R(s);return{c(){l=g("div"),e=g("div"),i=g("div"),t=g("img"),a=w(),c&&c.c(),d=w(),this.h()},l(n){l=b(n,"DIV",{class:!0});var f=k(l);e=b(f,"DIV",{class:!0});var o=k(e);i=b(o,"DIV",{class:!0});var _=k(i);t=b(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(m),a=j(o),c&&c.l(o),o.forEach(m),d=j(f),f.forEach(m),this.h()},h(){V(t.src,r=s[10].link)||v(t,"src",r),v(t,"alt",""),v(t,"class","svelte-icgujv"),v(i,"class","image svelte-icgujv"),v(e,"class","gallery-item svelte-icgujv"),v(l,"class","gallery-container")},m(n,f){E(n,l,f),p(l,e),p(e,i),p(i,t),p(e,a),c&&c.m(e,null),p(l,d),u||(h=[y(e,"mouseenter",s[4]),y(e,"mouseleave",s[4]),y(l,"click",function(){J(s[3](s[10]))&&s[3](s[10]).apply(this,arguments)})],u=!0)},p(n,f){s=n,f&1&&!V(t.src,r=s[10].link)&&v(t,"src",r),s[1]?c?c.p(s,f):(c=R(s),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(n){n&&m(l),c&&c.d(),u=!1,T(h)}}}function R(s){let l,e,i,t=s[10].date+"",r,a,d,u,h=s[10].title+"",c,n=s[10].location!=="undefined"&&K(s);return{c(){l=g("div"),e=g("div"),i=g("p"),r=C(t),a=w(),n&&n.c(),d=w(),u=g("h2"),c=C(h),this.h()},l(f){l=b(f,"DIV",{class:!0,style:!0});var o=k(l);e=b(o,"DIV",{class:!0});var _=k(e);i=b(_,"P",{class:!0});var I=k(i);r=M(I,t),I.forEach(m),a=j(_),n&&n.l(_),d=j(_),u=b(_,"H2",{class:!0});var D=k(u);c=M(D,h),D.forEach(m),_.forEach(m),o.forEach(m),this.h()},h(){v(i,"class","svelte-icgujv"),v(u,"class","desc-text svelte-icgujv"),v(e,"class","info-text svelte-icgujv"),v(l,"class","img-info svelte-icgujv"),O(l,"visibility","hidden")},m(f,o){E(f,l,o),p(l,e),p(e,i),p(i,r),p(e,a),n&&n.m(e,null),p(e,d),p(e,u),p(u,c)},p(f,o){o&1&&t!==(t=f[10].date+"")&&G(r,t),f[10].location!=="undefined"?n?n.p(f,o):(n=K(f),n.c(),n.m(e,d)):n&&(n.d(1),n=null),o&1&&h!==(h=f[10].title+"")&&G(c,h)},d(f){f&&m(l),n&&n.d()}}}function K(s){let l,e=s[10].location+"",i;return{c(){l=g("p"),i=C(e),this.h()},l(t){l=b(t,"P",{class:!0});var r=k(l);i=M(r,e),r.forEach(m),this.h()},h(){v(l,"class","svelte-icgujv")},m(t,r){E(t,l,r),p(l,i)},p(t,r){r&1&&e!==(e=t[10].location+"")&&G(i,e)},d(t){t&&m(l)}}}function U(s){let l,e=s[12]%s[2]==0&&Q(s);return{c(){e&&e.c(),l=S()},l(i){e&&e.l(i),l=S()},m(i,t){e&&e.m(i,t),E(i,l,t)},p(i,t){i[12]%i[2]==0?e?e.p(i,t):(e=Q(i),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(i){e&&e.d(i),i&&m(l)}}}function Y(s){let l,e=s[0],i=[];for(let t=0;t<e.length;t+=1)i[t]=ee(z(s,e,t));return{c(){l=g("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){l=b(t,"DIV",{class:!0,id:!0});var r=k(l);for(let a=0;a<i.length;a+=1)i[a].l(r);r.forEach(m),this.h()},h(){v(l,"class","flex-container svelte-icgujv"),v(l,"id","flex-container2")},m(t,r){E(t,l,r);for(let a=0;a<i.length;a+=1)i[a].m(l,null)},p(t,r){if(r&31){e=t[0];let a;for(a=0;a<e.length;a+=1){const d=z(t,e,a);i[a]?i[a].p(d,r):(i[a]=ee(d),i[a].c(),i[a].m(l,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=e.length}},d(t){t&&m(l),A(i,t)}}}function Z(s){let l,e,i,t,r,a,d,u,h,c=s[1]&&$(s);return{c(){l=g("div"),e=g("div"),i=g("div"),t=g("img"),a=w(),c&&c.c(),d=w(),this.h()},l(n){l=b(n,"DIV",{class:!0});var f=k(l);e=b(f,"DIV",{class:!0});var o=k(e);i=b(o,"DIV",{class:!0});var _=k(i);t=b(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(m),a=j(o),c&&c.l(o),o.forEach(m),d=j(f),f.forEach(m),this.h()},h(){V(t.src,r=s[10].link)||v(t,"src",r),v(t,"alt",""),v(t,"class","svelte-icgujv"),v(i,"class","image svelte-icgujv"),v(e,"class","gallery-item svelte-icgujv"),v(l,"class","gallery-container")},m(n,f){E(n,l,f),p(l,e),p(e,i),p(i,t),p(e,a),c&&c.m(e,null),p(l,d),u||(h=[y(e,"mouseenter",s[4]),y(e,"mouseleave",s[4]),y(l,"click",function(){J(s[3](s[10]))&&s[3](s[10]).apply(this,arguments)})],u=!0)},p(n,f){s=n,f&1&&!V(t.src,r=s[10].link)&&v(t,"src",r),s[1]?c?c.p(s,f):(c=$(s),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(n){n&&m(l),c&&c.d(),u=!1,T(h)}}}function $(s){let l,e,i,t=s[10].date+"",r,a,d,u,h=s[10].title+"",c,n=s[10].location!=="undefined"&&x(s);return{c(){l=g("div"),e=g("div"),i=g("p"),r=C(t),a=w(),n&&n.c(),d=w(),u=g("h2"),c=C(h),this.h()},l(f){l=b(f,"DIV",{class:!0,style:!0});var o=k(l);e=b(o,"DIV",{class:!0});var _=k(e);i=b(_,"P",{class:!0});var I=k(i);r=M(I,t),I.forEach(m),a=j(_),n&&n.l(_),d=j(_),u=b(_,"H2",{class:!0});var D=k(u);c=M(D,h),D.forEach(m),_.forEach(m),o.forEach(m),this.h()},h(){v(i,"class","svelte-icgujv"),v(u,"class","desc-text svelte-icgujv"),v(e,"class","info-text svelte-icgujv"),v(l,"class","img-info svelte-icgujv"),O(l,"visibility","hidden")},m(f,o){E(f,l,o),p(l,e),p(e,i),p(i,r),p(e,a),n&&n.m(e,null),p(e,d),p(e,u),p(u,c)},p(f,o){o&1&&t!==(t=f[10].date+"")&&G(r,t),f[10].location!=="undefined"?n?n.p(f,o):(n=x(f),n.c(),n.m(e,d)):n&&(n.d(1),n=null),o&1&&h!==(h=f[10].title+"")&&G(c,h)},d(f){f&&m(l),n&&n.d()}}}function x(s){let l,e=s[10].location+"",i;return{c(){l=g("p"),i=C(e),this.h()},l(t){l=b(t,"P",{class:!0});var r=k(l);i=M(r,e),r.forEach(m),this.h()},h(){v(l,"class","svelte-icgujv")},m(t,r){E(t,l,r),p(l,i)},p(t,r){r&1&&e!==(e=t[10].location+"")&&G(i,e)},d(t){t&&m(l)}}}function ee(s){let l,e=s[12]%s[2]==1&&Z(s);return{c(){e&&e.c(),l=S()},l(i){e&&e.l(i),l=S()},m(i,t){e&&e.m(i,t),E(i,l,t)},p(i,t){i[12]%i[2]==1?e?e.p(i,t):(e=Z(i),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(i){e&&e.d(i),i&&m(l)}}}function le(s){let l,e=s[0],i=[];for(let t=0;t<e.length;t+=1)i[t]=ne(q(s,e,t));return{c(){l=g("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){l=b(t,"DIV",{class:!0,id:!0});var r=k(l);for(let a=0;a<i.length;a+=1)i[a].l(r);r.forEach(m),this.h()},h(){v(l,"class","flex-container svelte-icgujv"),v(l,"id","flex-container3")},m(t,r){E(t,l,r);for(let a=0;a<i.length;a+=1)i[a].m(l,null)},p(t,r){if(r&31){e=t[0];let a;for(a=0;a<e.length;a+=1){const d=q(t,e,a);i[a]?i[a].p(d,r):(i[a]=ne(d),i[a].c(),i[a].m(l,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=e.length}},d(t){t&&m(l),A(i,t)}}}function te(s){let l,e,i,t,r,a,d,u,h,c=s[1]&&ie(s);return{c(){l=g("div"),e=g("div"),i=g("div"),t=g("img"),a=w(),c&&c.c(),d=w(),this.h()},l(n){l=b(n,"DIV",{class:!0});var f=k(l);e=b(f,"DIV",{class:!0});var o=k(e);i=b(o,"DIV",{class:!0});var _=k(i);t=b(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(m),a=j(o),c&&c.l(o),o.forEach(m),d=j(f),f.forEach(m),this.h()},h(){V(t.src,r=s[10].link)||v(t,"src",r),v(t,"alt",""),v(t,"class","svelte-icgujv"),v(i,"class","image svelte-icgujv"),v(e,"class","gallery-item svelte-icgujv"),v(l,"class","gallery-container")},m(n,f){E(n,l,f),p(l,e),p(e,i),p(i,t),p(e,a),c&&c.m(e,null),p(l,d),u||(h=[y(e,"mouseenter",s[4]),y(e,"mouseleave",s[4]),y(l,"click",function(){J(s[3](s[10]))&&s[3](s[10]).apply(this,arguments)})],u=!0)},p(n,f){s=n,f&1&&!V(t.src,r=s[10].link)&&v(t,"src",r),s[1]?c?c.p(s,f):(c=ie(s),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(n){n&&m(l),c&&c.d(),u=!1,T(h)}}}function ie(s){let l,e,i,t=s[10].date+"",r,a,d,u,h=s[10].title+"",c,n=s[10].location!=="undefined"&&se(s);return{c(){l=g("div"),e=g("div"),i=g("p"),r=C(t),a=w(),n&&n.c(),d=w(),u=g("h2"),c=C(h),this.h()},l(f){l=b(f,"DIV",{class:!0,style:!0});var o=k(l);e=b(o,"DIV",{class:!0});var _=k(e);i=b(_,"P",{class:!0});var I=k(i);r=M(I,t),I.forEach(m),a=j(_),n&&n.l(_),d=j(_),u=b(_,"H2",{class:!0});var D=k(u);c=M(D,h),D.forEach(m),_.forEach(m),o.forEach(m),this.h()},h(){v(i,"class","svelte-icgujv"),v(u,"class","desc-text svelte-icgujv"),v(e,"class","info-text svelte-icgujv"),v(l,"class","img-info svelte-icgujv"),O(l,"visibility","hidden")},m(f,o){E(f,l,o),p(l,e),p(e,i),p(i,r),p(e,a),n&&n.m(e,null),p(e,d),p(e,u),p(u,c)},p(f,o){o&1&&t!==(t=f[10].date+"")&&G(r,t),f[10].location!=="undefined"?n?n.p(f,o):(n=se(f),n.c(),n.m(e,d)):n&&(n.d(1),n=null),o&1&&h!==(h=f[10].title+"")&&G(c,h)},d(f){f&&m(l),n&&n.d()}}}function se(s){let l,e=s[10].location+"",i;return{c(){l=g("p"),i=C(e),this.h()},l(t){l=b(t,"P",{class:!0});var r=k(l);i=M(r,e),r.forEach(m),this.h()},h(){v(l,"class","svelte-icgujv")},m(t,r){E(t,l,r),p(l,i)},p(t,r){r&1&&e!==(e=t[10].location+"")&&G(i,e)},d(t){t&&m(l)}}}function ne(s){let l,e=s[12]%s[2]==2&&te(s);return{c(){e&&e.c(),l=S()},l(i){e&&e.l(i),l=S()},m(i,t){e&&e.m(i,t),E(i,l,t)},p(i,t){i[12]%i[2]==2?e?e.p(i,t):(e=te(i),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(i){e&&e.d(i),i&&m(l)}}}function re(s){let l,e=s[0],i=[];for(let t=0;t<e.length;t+=1)i[t]=fe(F(s,e,t));return{c(){l=g("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){l=b(t,"DIV",{class:!0,id:!0});var r=k(l);for(let a=0;a<i.length;a+=1)i[a].l(r);r.forEach(m),this.h()},h(){v(l,"class","flex-container svelte-icgujv"),v(l,"id","flex-container4")},m(t,r){E(t,l,r);for(let a=0;a<i.length;a+=1)i[a].m(l,null)},p(t,r){if(r&31){e=t[0];let a;for(a=0;a<e.length;a+=1){const d=F(t,e,a);i[a]?i[a].p(d,r):(i[a]=fe(d),i[a].c(),i[a].m(l,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=e.length}},d(t){t&&m(l),A(i,t)}}}function oe(s){let l,e,i,t,r,a,d,u,h,c=s[1]&&ae(s);return{c(){l=g("div"),e=g("div"),i=g("div"),t=g("img"),a=w(),c&&c.c(),d=w(),this.h()},l(n){l=b(n,"DIV",{class:!0});var f=k(l);e=b(f,"DIV",{class:!0});var o=k(e);i=b(o,"DIV",{class:!0});var _=k(i);t=b(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(m),a=j(o),c&&c.l(o),o.forEach(m),d=j(f),f.forEach(m),this.h()},h(){V(t.src,r=s[10].link)||v(t,"src",r),v(t,"alt",""),v(t,"class","svelte-icgujv"),v(i,"class","image svelte-icgujv"),v(e,"class","gallery-item svelte-icgujv"),v(l,"class","gallery-container")},m(n,f){E(n,l,f),p(l,e),p(e,i),p(i,t),p(e,a),c&&c.m(e,null),p(l,d),u||(h=[y(e,"mouseenter",s[4]),y(e,"mouseleave",s[4]),y(l,"click",function(){J(s[3](s[10]))&&s[3](s[10]).apply(this,arguments)})],u=!0)},p(n,f){s=n,f&1&&!V(t.src,r=s[10].link)&&v(t,"src",r),s[1]?c?c.p(s,f):(c=ae(s),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(n){n&&m(l),c&&c.d(),u=!1,T(h)}}}function ae(s){let l,e,i,t=s[10].date+"",r,a,d,u,h=s[10].title+"",c,n=s[10].location!=="undefined"&&ce(s);return{c(){l=g("div"),e=g("div"),i=g("p"),r=C(t),a=w(),n&&n.c(),d=w(),u=g("h2"),c=C(h),this.h()},l(f){l=b(f,"DIV",{class:!0,style:!0});var o=k(l);e=b(o,"DIV",{class:!0});var _=k(e);i=b(_,"P",{class:!0});var I=k(i);r=M(I,t),I.forEach(m),a=j(_),n&&n.l(_),d=j(_),u=b(_,"H2",{class:!0});var D=k(u);c=M(D,h),D.forEach(m),_.forEach(m),o.forEach(m),this.h()},h(){v(i,"class","svelte-icgujv"),v(u,"class","desc-text svelte-icgujv"),v(e,"class","info-text svelte-icgujv"),v(l,"class","img-info svelte-icgujv"),O(l,"visibility","hidden")},m(f,o){E(f,l,o),p(l,e),p(e,i),p(i,r),p(e,a),n&&n.m(e,null),p(e,d),p(e,u),p(u,c)},p(f,o){o&1&&t!==(t=f[10].date+"")&&G(r,t),f[10].location!=="undefined"?n?n.p(f,o):(n=ce(f),n.c(),n.m(e,d)):n&&(n.d(1),n=null),o&1&&h!==(h=f[10].title+"")&&G(c,h)},d(f){f&&m(l),n&&n.d()}}}function ce(s){let l,e=s[10].location+"",i;return{c(){l=g("p"),i=C(e),this.h()},l(t){l=b(t,"P",{class:!0});var r=k(l);i=M(r,e),r.forEach(m),this.h()},h(){v(l,"class","svelte-icgujv")},m(t,r){E(t,l,r),p(l,i)},p(t,r){r&1&&e!==(e=t[10].location+"")&&G(i,e)},d(t){t&&m(l)}}}function fe(s){let l,e=s[12]%s[2]==3&&oe(s);return{c(){e&&e.c(),l=S()},l(i){e&&e.l(i),l=S()},m(i,t){e&&e.m(i,t),E(i,l,t)},p(i,t){i[12]%i[2]==3?e?e.p(i,t):(e=oe(i),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(i){e&&e.d(i),i&&m(l)}}}function Ie(s){let l,e,i,t,r,a=s[0],d=[];for(let n=0;n<a.length;n+=1)d[n]=U(X(s,a,n));let u=(s[2]==2||s[2]==3||s[2]==4)&&Y(s),h=(s[2]==3||s[2]==4)&&le(s),c=s[2]==4&&re(s);return{c(){l=g("div"),e=g("div");for(let n=0;n<d.length;n+=1)d[n].c();i=w(),u&&u.c(),t=w(),h&&h.c(),r=w(),c&&c.c(),this.h()},l(n){l=b(n,"DIV",{class:!0,id:!0});var f=k(l);e=b(f,"DIV",{class:!0,id:!0});var o=k(e);for(let _=0;_<d.length;_+=1)d[_].l(o);o.forEach(m),i=j(f),u&&u.l(f),t=j(f),h&&h.l(f),r=j(f),c&&c.l(f),f.forEach(m),this.h()},h(){v(e,"class","flex-container svelte-icgujv"),v(e,"id","flex-container1"),v(l,"class","gallery svelte-icgujv"),v(l,"id","gallery")},m(n,f){E(n,l,f),p(l,e);for(let o=0;o<d.length;o+=1)d[o].m(e,null);p(l,i),u&&u.m(l,null),p(l,t),h&&h.m(l,null),p(l,r),c&&c.m(l,null)},p(n,[f]){if(f&31){a=n[0];let o;for(o=0;o<a.length;o+=1){const _=X(n,a,o);d[o]?d[o].p(_,f):(d[o]=U(_),d[o].c(),d[o].m(e,null))}for(;o<d.length;o+=1)d[o].d(1);d.length=a.length}n[2]==2||n[2]==3||n[2]==4?u?u.p(n,f):(u=Y(n),u.c(),u.m(l,t)):u&&(u.d(1),u=null),n[2]==3||n[2]==4?h?h.p(n,f):(h=le(n),h.c(),h.m(l,r)):h&&(h.d(1),h=null),n[2]==4?c?c.p(n,f):(c=re(n),c.c(),c.m(l,null)):c&&(c.d(1),c=null)},i:W,o:W,d(n){n&&m(l),A(d,n),u&&u.d(),h&&h.d(),c&&c.d()}}}function ye(s,l,e){const i=pe();let{repoImages:t}=l,{remix:r}=l;const a=o=>{i(r?"drawOnImage":"openImage",o)};let d=!0;const u=o=>{d?(o.srcElement.children[1].style.visibility="visible",o.srcElement.children[0].children[0].style.transform="scale(1.2)"):(o.srcElement.children[1].style.visibility="hidden",o.srcElement.children[0].children[0].style.transform="scale(1)"),d=!d};let h=20,c=!0,n;const f=()=>{window.innerWidth<=500?e(2,n=1):window.innerWidth>500&&window.innerWidth<=700?e(2,n=2):window.innerWidth>700&&window.innerWidth<=1500?e(2,n=3):e(2,n=4)};return ke(async()=>{f(),window.onresize=f,window.screen.width<=560&&(e(1,c=!1),window.addEventListener("scroll",D));let o=document.getElementById("gallery"),_=!0,I=0;o.addEventListener("scroll",D);function D(){let P=window.pageXOffset||o.scrollTop;if(!(P<I)){if(o.scrollTop+window.innerHeight>o.scrollHeight-100&&_){if(h>t)return;h+=10,ge(h),_=!1}else _=!0;I=P<=0?0:P}}let L=document.getElementsByClassName("gallery-item");for(let P=0;P<L.length;P++)L[P].addEventListener("mouseover",function(N){})}),s.$$set=o=>{"repoImages"in o&&e(0,t=o.repoImages),"remix"in o&&e(5,r=o.remix)},[t,c,n,a,u,r]}class Le extends ve{constructor(l){super(),_e(this,l,ye,Ie,me,{repoImages:0,remix:5})}}function ue(s){let l,e,i,t,r,a,d,u,h,c,n,f;return{c(){l=g("a"),e=g("img"),t=w(),r=g("h2"),a=C("Cloud Cities"),d=w(),u=g("a"),h=g("img"),this.h()},l(o){l=b(o,"A",{href:!0});var _=k(l);e=b(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(m),t=j(o),r=b(o,"H2",{class:!0});var I=k(r);a=M(I,"Cloud Cities"),I.forEach(m),d=j(o),u=b(o,"A",{href:!0});var D=k(u);h=b(D,"IMG",{src:!0,alt:!0,class:!0}),D.forEach(m),this.h()},h(){V(e.src,i=s[2])||v(e,"src",i),v(e,"alt","draw-button"),v(e,"class","icon-button svelte-jfml84"),v(l,"href","/draw"),v(r,"class","svelte-jfml84"),V(h.src,c=s[3])||v(h,"src",c),v(h,"alt","about-button"),v(h,"class","icon-button svelte-jfml84"),v(u,"href","https://cloudcities.studiotomassaraceno.org")},m(o,_){E(o,l,_),p(l,e),E(o,t,_),E(o,r,_),p(r,a),E(o,d,_),E(o,u,_),p(u,h),n||(f=[y(e,"click",s[6]),y(e,"mouseenter",s[7]),y(e,"mouseleave",s[8]),y(h,"mouseenter",s[9]),y(h,"mouseleave",s[10])],n=!0)},p(o,_){_&4&&!V(e.src,i=o[2])&&v(e,"src",i),_&8&&!V(h.src,c=o[3])&&v(h,"src",c)},d(o){o&&m(l),o&&m(t),o&&m(r),o&&m(d),o&&m(u),n=!1,T(f)}}}function de(s){let l,e,i,t,r=s[1].title+"",a,d,u,h,c,n,f;return{c(){l=g("img"),i=w(),t=g("h2"),a=C(r),d=w(),u=g("a"),h=g("img"),this.h()},l(o){l=b(o,"IMG",{class:!0,alt:!0,src:!0}),i=j(o),t=b(o,"H2",{class:!0});var _=k(t);a=M(_,r),_.forEach(m),d=j(o),u=b(o,"A",{href:!0});var I=k(u);h=b(I,"IMG",{src:!0,alt:!0,class:!0}),I.forEach(m),this.h()},h(){v(l,"class","icon-button svelte-jfml84"),v(l,"alt","exit-button"),V(l.src,e=s[4])||v(l,"src",e),v(t,"class","svelte-jfml84"),V(h.src,c=s[3])||v(h,"src",c),v(h,"alt","about-button"),v(h,"class","icon-button svelte-jfml84"),v(u,"href","https://cloudcities.studiotomassaraceno.org")},m(o,_){E(o,l,_),E(o,i,_),E(o,t,_),p(t,a),E(o,d,_),E(o,u,_),p(u,h),n||(f=[y(l,"click",s[5]),y(l,"mouseenter",s[11]),y(l,"mouseleave",s[12]),y(h,"mouseenter",s[13]),y(h,"mouseleave",s[14])],n=!0)},p(o,_){_&16&&!V(l.src,e=o[4])&&v(l,"src",e),_&2&&r!==(r=o[1].title+"")&&G(a,r),_&8&&!V(h.src,c=o[3])&&v(h,"src",c)},d(o){o&&m(l),o&&m(i),o&&m(t),o&&m(d),o&&m(u),n=!1,T(f)}}}function he(s){let l,e;return{c(){l=g("h2"),e=C("Select a drawing to re/interpret"),this.h()},l(i){l=b(i,"H2",{id:!0,class:!0});var t=k(l);e=M(t,"Select a drawing to re/interpret"),t.forEach(m),this.h()},h(){v(l,"id","remix"),v(l,"class","svelte-jfml84")},m(i,t){E(i,l,t),p(l,e)},d(i){i&&m(l)}}}function De(s){let l,e,i,t=s[0]==="gallery"&&ue(s),r=s[0]==="individualPost"&&de(s),a=s[0]==="remix"&&he();return{c(){l=g("div"),t&&t.c(),e=w(),r&&r.c(),i=w(),a&&a.c(),this.h()},l(d){l=b(d,"DIV",{class:!0});var u=k(l);t&&t.l(u),e=j(u),r&&r.l(u),i=j(u),a&&a.l(u),u.forEach(m),this.h()},h(){v(l,"class","overlay svelte-jfml84")},m(d,u){E(d,l,u),t&&t.m(l,null),p(l,e),r&&r.m(l,null),p(l,i),a&&a.m(l,null)},p(d,[u]){d[0]==="gallery"?t?t.p(d,u):(t=ue(d),t.c(),t.m(l,e)):t&&(t.d(1),t=null),d[0]==="individualPost"?r?r.p(d,u):(r=de(d),r.c(),r.m(l,i)):r&&(r.d(1),r=null),d[0]==="remix"?a||(a=he(),a.c(),a.m(l,null)):a&&(a.d(1),a=null)},i:W,o:W,d(d){d&&m(l),t&&t.d(),r&&r.d(),a&&a.d()}}}function Ve(s,l,e){const i=pe();let{openComponent:t}=l,{image:r}=l;const a=()=>{e(4,c="button_close.png"),i("closeLargeImage")},d=()=>{i("clickDraw")};let u="draw-unselected.png",h="icon_info.png",c="button_close.png";const n=()=>e(2,u="draw-hover.png"),f=()=>e(2,u="draw-unselected.png"),o=()=>e(3,h="icon_info_hover.png"),_=()=>e(3,h="icon_info.png"),I=()=>e(4,c="button_close_hover.png"),D=()=>e(4,c="button_close.png"),L=()=>e(3,h="icon_info_hover.png"),P=()=>e(3,h="icon_info.png");return s.$$set=N=>{"openComponent"in N&&e(0,t=N.openComponent),"image"in N&&e(1,r=N.image)},[t,r,u,h,c,a,d,n,f,o,_,I,D,L,P]}class We extends ve{constructor(l){super(),_e(this,l,Ve,De,me,{openComponent:0,image:1})}}function Je(s,{delay:l=0,duration:e=400,easing:i=Ee}={}){const t=+getComputedStyle(s).opacity;return{delay:l,duration:e,easing:i,css:r=>`opacity: ${r*t}`}}const Ce=H([]),Me=H([]),Ge=H([]),Pe=H([]),Se=H([]),B=async(s,l)=>{let e=[],t=await(await fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/posts?slug=modal_${s}`)).json();JSON.parse(t[0].grid).cont.forEach(a=>{e.push(a.cont)}),l.set(e)};B(1,Ce);B(2,Me);B(3,Ge);B(4,Pe);B(5,Se);const He=H(),Te=H([]),be=async(s,l)=>{let t=(await(await fetch(`https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/posts?slug=modal_${s}`)).json())[0].title.rendered;l.set(t)};be(1,He);be(2,Te);export{Le as G,We as O,Ge as a,Se as b,Me as c,Te as d,He as e,Je as f,we as r,Ce as w};