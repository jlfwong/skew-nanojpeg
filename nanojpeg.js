/*
NanoJPEG -- KeyJ's Tiny Baseline JPEG Decoder (http://keyj.emphy.de/nanojpeg/)
version 1.3 (2012-03-05)
by Martin J. Fiedler <martin.fiedler@gmx.net>

NanoJPEG -- KeyJ's Tiny Baseline JPEG Decoder, Skew Port with EXIF Orientation
version 1.3 (2015-10-12)
By Evan Wallace <evan.exe@gmail.com>

This software is published under the terms of KeyJ's Research License,
version 0.2. Usage of this software is subject to the following conditions:
0. There's no warranty whatsoever. The author(s) of this software can not
   be held liable for any damages that occur when using this software.
1. This software may be used freely for both non-commercial and commercial
   purposes.
2. This software may be redistributed freely as long as no fees are charged
   for the distribution and this license information is included.
3. This software may be modified freely except for this license information,
   which must not be changed in any way.
4. If anything other than configuration, indentation or comments have been
   altered in the code, the original author(s) must receive a copy of the
   modified code.
*/

(function(){var Z=Math.imul||function(e,b){return (e*(b>>>16)<<16)+e*(b&65535)|0};var J;function ba(){(typeof exports!=='undefined'?exports:this).decodeJPEG=function(e){var b=new aa;return X(b,e)?null:{width:b.u,height:b.j,rgb:b.z}}}function K(f){for(var e=f.a-3|0,b=0,c=0,a=new Uint8Array(f.a*f.i<<1),i=f.i;i;i=i-1|0){a[c]=o((Z(f.g[b],139)+Z(f.g[b+1|0],-11)|0)+64>>7),a[c+1|0]=o(((Z(f.g[b],104)+Z(f.g[b+1|0],27)|0)+Z(f.g[b+2|0],-3)|0)+64>>7),a[c+2|0]=o(((Z(f.g[b],28)+Z(f.g[b+1|0],109)|0)+Z(f.g[b+2|0],-9)|0)+64>>7);for(var d=0;d<e;d=d+1|0)a[(c+(d<<1)|0)+3|0]=o((((Z(f.g[b+d|0],-9)+Z(f.g[(b+d|0)+1|0],111)|0)+Z(f.g[(b+d|0)+2|0],29)|0)+Z(f.g[(b+d|0)+3|0],-3)|0)+64>>7),a[(c+(d<<1)|0)+4|0]=o((((Z(f.g[b+d|0],-3)+Z(f.g[(b+d|0)+1|0],29)|0)+Z(f.g[(b+d|0)+2|0],111)|0)+Z(f.g[(b+d|0)+3|0],-9)|0)+64>>7);b=b+f.d|0,c=c+(f.a<<1)|0,a[c-3|0]=o(((Z(f.g[b-1|0],28)+Z(f.g[b-2|0],109)|0)+Z(f.g[b-3|0],-9)|0)+64>>7),a[c-2|0]=o(((Z(f.g[b-1|0],104)+Z(f.g[b-2|0],27)|0)+Z(f.g[b-3|0],-3)|0)+64>>7),a[c-1|0]=o((Z(f.g[b-1|0],139)+Z(f.g[b-2|0],-11)|0)+64>>7)}
f.a<<=1,f.d=f.a,f.g=a}function L(j){for(var e=j.a,b=j.d,c=b+b|0,a=new Uint8Array(j.a*j.i<<1),i=0;i<e;i=i+1|0){var d=i,f=i;a[f]=o((Z(j.g[d],139)+Z(j.g[d+b|0],-11)|0)+64>>7),f=f+e|0,a[f]=o(((Z(j.g[d],104)+Z(j.g[d+b|0],27)|0)+Z(j.g[d+c|0],-3)|0)+64>>7),f=f+e|0,a[f]=o(((Z(j.g[d],28)+Z(j.g[d+b|0],109)|0)+Z(j.g[d+c|0],-9)|0)+64>>7),f=f+e|0,d=d+b|0;for(var l=j.i-3|0;l;l=l-1|0)a[f]=o((((Z(j.g[d-b|0],-9)+Z(j.g[d],111)|0)+Z(j.g[d+b|0],29)|0)+Z(j.g[d+c|0],-3)|0)+64>>7),f=f+e|0,a[f]=o((((Z(j.g[d-b|0],-3)+Z(j.g[d],29)|0)+Z(j.g[d+b|0],111)|0)+Z(j.g[d+c|0],-9)|0)+64>>7),f=f+e|0,d=d+b|0;d=d+b|0,a[f]=o(((Z(j.g[d],28)+Z(j.g[d-b|0],109)|0)+Z(j.g[d-c|0],-9)|0)+64>>7),f=f+e|0,a[f]=o(((Z(j.g[d],104)+Z(j.g[d-b|0],27)|0)+Z(j.g[d-c|0],-3)|0)+64>>7),f=f+e|0,a[f]=o((Z(j.g[d],139)+Z(j.g[d-b|0],-11)|0)+64>>7)}j.i<<=1,j.d=j.a,j.g=a}function m(b,e){b.f=e;throw new $}function B(a,e){if(!e)return 0;for(;a.b<e;)if(a.s<1)a.e=a.e<<8|255,a.b=a.b+8|0;else{var b=a.a[a.p];if(a.p=a.p+1|0,a.s=a.s-1|0,a.b=a.b+8|0,a.e=a.e<<8|b,b==255){a.s||m(a,3);var c=a.a[a.p];
a.p=a.p+1|0,a.s=a.s-1|0,c^217?c&&c^255&&(c&248^208&&m(a,3),a.e=a.e<<8|c,a.b=a.b+8|0):a.s=0}}return a.e>>a.b-e&(1<<e)-1}function F(b,e){b.b<e&&B(b,e),b.b=b.b-e|0}function G(c,e){var b=B(c,e);return F(c,e),b}function q(b,e){b.p=b.p+e|0,b.s=b.s-e|0,b.n=b.n-e|0,b.s<0&&m(b,3)}function y(b,e){return b.a[e]<<8|b.a[e+1|0]}function C(b,e){return b.a[e]<<24|b.a[e+1|0]<<16|b.a[e+2|0]<<8|b.a[e+3|0]}function A(c,e,b){return b^1?y(c,e):c.a[e]|c.a[e+1|0]<<8}function D(c,e,b){return b^1?C(c,e):c.a[e]|c.a[e+1|0]<<8|c.a[e+2|0]<<16|c.a[e+3|0]<<24}function v(e){e.s<2&&m(e,3),e.n=y(e,e.p),e.n>e.s&&m(e,3),q(e,2)}function H(e){v(e),q(e,e.n)}function O(d){var e=0,b=0,c=null;v(d),d.n<9&&m(d,3),d.a[d.p]^8&&m(d,2),d.j=y(d,d.p+1|0),d.u=y(d,d.p+3|0),d.i=d.a[d.p+5|0],q(d,6),d.i^1&&d.i^3&&m(d,2),d.n<Z(d.i,3)&&m(d,3);for(var a=0;a<d.i;a=a+1|0)c=d.d[a],c.e=d.a[d.p],c.b=d.a[d.p+1|0]>>4,c.c=d.a[d.p+1|0]&15,c.f=d.a[d.p+2|0],(!c.b||!c.c||c.f&252)&&m(d,3),(c.b&c.b-1||c.c&c.c-1)&&m(d,2),q(d,3),c.b>e&&(e=c.b),c.c>b&&(b=c.c);d.i^1||(c=d.d[0],c.b=c.c=e=b=1),
d.k=e<<3,d.r=b<<3,d.t=((d.u+d.k|0)-1|0)/d.k|0,d.h=((d.j+d.r|0)-1|0)/d.r|0;for(var i=0;i<d.i;i=i+1|0)c=d.d[i],c.a=((Z(d.u,c.b)+e|0)-1|0)/e|0,c.i=((Z(d.j,c.c)+b|0)-1|0)/b|0,c.d=Z(Z(d.t,d.k),c.b)/e|0,(c.a<3&&c.b^e||c.i<3&&c.c^b)&&m(d,2),c.g=new Uint8Array(Z(c.d,Z(Z(d.h,d.r),c.c)/b|0));d.z=new Uint8Array(Z(Z(d.u,d.j),3)),q(d,d.n)}function P(k){for(v(k);k.n>16;){var e=k.a[k.p];e&236&&m(k,3),e&2&&m(k,2),e=(e|e>>3)&3;for(var b=new Uint8Array(16),c=1;c<17;c=c+1|0)b[c-1|0]=k.a[k.p+c|0];q(k,17);for(var a=k.g[e],i=0,d=65536,f=65536,l=1;l<17;l=l+1|0){f>>=1;var j=b[l-1|0];if(j){k.n<j&&m(k,3),d=d-(j<<16-l)|0,d<0&&m(k,3);for(var h=0;h<j;h=h+1|0)for(var g=k.a[k.p+h|0],n=f;n;n=n-1|0)i<65536&&(a[i]=l<<8|g,i=i+1|0);q(k,j)}}for(;d;)d=d-1|0,i<65536&&(a[i]=a[i]&65280,i=i+1|0)}k.n&&m(k,3)}function Q(a){for(v(a);a.n>64;){var e=a.a[a.p];e&252&&m(a,3);for(var b=a.w[e],c=0;c<64;c=c+1|0)b[c]=a.a[(a.p+c|0)+1|0];q(a,65)}a.n&&m(a,3)}function R(e){v(e),e.n<2&&m(e,3),e.x=y(e,e.p),q(e,e.n)}function I(a,e){var b=B(a,16),c=e[b]>>8;return c||m(a,
3),F(a,c),b=e[b]&255,a.E=b,c=b&15,c?(b=G(a,c),b<1<<c-1&&(b=b+((-1<<c)+1|0)|0),b):0}function S(f,e,b){var c=0;for(f.c=new Int32Array(64),e.h=e.h+I(f,f.g[e.j])|0,f.c[0]=Z(e.h,f.w[e.f][0]);c<63;){var a=I(f,f.g[e.l]);if(!f.E)break;!(f.E&15)&&f.E^240&&m(f,3),c=c+((f.E>>4)+1|0)|0,c>63&&m(f,3),f.c[Y[c]]=Z(a,f.w[e.f][c])}for(var i=0;i<64;i=i+8|0)M(f.c,i);for(var d=0;d<8;d=d+1|0)N(f.c,d,e.g,b+d|0,e.d)}function T(k){var e=k.x,b=0;v(k),k.n<(4+(k.i<<1)|0)&&m(k,3),k.a[k.p]^k.i&&m(k,2),q(k,1);for(var c=0;c<k.i;c=c+1|0){var a=k.d[c];k.a[k.p]^a.e&&m(k,3),k.a[k.p+1|0]&238&&m(k,3),a.j=k.a[k.p+1|0]>>4,a.l=k.a[k.p+1|0]&1|2,q(k,2)}(k.a[k.p]||k.a[k.p+1|0]^63||k.a[k.p+2|0])&&m(k,2),q(k,k.n);for(var i=0;i<k.h;i=i+1|0)for(var d=0;d<k.t;d=d+1|0){if((d||i)&&k.x&&(e=e-1|0,!e)){k.b&=248;var f=G(k,16);(f&65528^65488||f&7^b)&&m(k,3),b=b+1&7,e=k.x;for(var l=0;l<4;l=l+1|0)k.d[l].h=0}for(var j=0;j<k.i;j=j+1|0)for(var h=k.d[j],g=0;g<h.c;g=g+1|0)for(var n=0;n<h.b;n=n+1|0)S(k,h,(Z(Z(i,h.c)+g|0,h.d)+Z(d,h.b)|0)+n<<3)}k.f=4}function U(h){if(v(h),h.n<6||C(h,
h.p)^1165519206||y(h,h.p+4|0))q(h,h.n);else{q(h,6);var e=h.p;h.n<8&&m(h,3);var b=C(h,e),c=b^1229531648?0:1;!c&&b^1296891946&&m(h,3);var a=e+D(h,e+4|0,c)|0,i=A(h,a,c);a=a+2|0;for(var d=0;d<i;d=d+1|0){var f=A(h,a,c),l=A(h,a+2|0,c),j=D(h,a+4|0,c);if(a=a+8|0,f==274&&j==1){h.l=0,l^1?l^3?(l==4||l==9)&&(h.l=D(h,a,c)):h.l=A(h,a,c):h.l=h.a[a],(l<1||l>8)&&m(h,3);break}a=a+4|0}q(h,h.n)}}function V(t){for(var e=0;e<t.i;e=e+1|0)for(var b=t.d[e];b.a<t.u||b.i<t.j;)b.a<t.u&&K(b),b.i<t.j&&L(b);var c=t.d[0],a=t.z;if(t.i^1)for(var h=t.d[1],g=t.d[2],n=0,k=0,r=0,p=0,w=t.j;w;w=w-1|0){for(var x=0;x<t.u;x=x+1|0){var z=c.g[k+x|0]<<8,s=h.g[r+x|0]-128|0,u=g.g[p+x|0]-128|0;a[n]=o((z+Z(u,359)|0)+128>>8),a[n+1|0]=o(((z-Z(s,88)|0)-Z(u,183)|0)+128>>8),a[n+2|0]=o((z+Z(s,454)|0)+128>>8),n=n+3|0}k=k+c.d|0,r=r+h.d|0,p=p+g.d|0}else for(var i=0,d=0,f=t.j;f;f=f-1|0){for(var l=0;l<t.u;l=l+1|0){var j=c.g[d+l|0];a[i]=a[i+1|0]=a[i+2|0]=j,i=i+3|0}d=d+c.d|0}}function W(k){if(k.l^1){for(var e=k.u,b=k.j,c=k.l>4,a=c?b:e,i=c?e:b,d=k.z,f=new Uint8Array(Z(Z(a,
i),3)),l=0,j=0;l<b;l=l+1|0){var h=0,g=0;switch(k.l){case 1:h=Z(l,a),g=1;break;case 2:h=(Z(l,a)+a|0)-1|0,g=-1;break;case 3:h=(Z((b-l|0)-1|0,a)+a|0)-1|0,g=-1;break;case 4:h=Z((b-l|0)-1|0,a),g=1;break;case 5:h=l,g=a;break;case 6:h=(b-l|0)-1|0,g=a;break;case 7:h=((b-l|0)-1|0)+Z(a,i-1|0)|0,g=-a|0;break;case 8:h=l+Z(a,i-1|0)|0,g=-a|0;break}h=Z(h,3),g=Z(g,3);for(var n=0;n<e;n=n+1|0,j=j+3|0)f[h]=d[j],f[h+1|0]=d[j+1|0],f[h+2|0]=d[j+2|0],h=h+g|0}k.u=a,k.j=i,k.z=f}}function X(c,e){try{for(c.a=e,c.p=0,c.s=e.length,(c.s<2||c.a[0]^255||c.a[1]^216)&&m(c,1),q(c,2);!c.f;){(c.s<2||c.a[c.p]^255)&&m(c,3),q(c,2);var b=c.a[c.p-1|0];b^192?b^196?b^219?b^221?b^218?b^225?b^254?b&240^224?m(c,2):H(c):H(c):U(c):T(c):R(c):Q(c):P(c):O(c)}c.f^4?c.f=3:(V(c),W(c),c.f=0)}catch(a){if(!(a instanceof $))throw a}return c.f}function o(e){return e<0?0:e>255?255:e}function M(e,b){var c=0,a=e[b+4|0]<<11,i=e[b+6|0],d=e[b+2|0],f=e[b+1|0],l=e[b+7|0],j=e[b+5|0],h=e[b+3|0],g=0;if(a|i|d|f|l|j|h)c=(e[b]<<11)+128|0,g=Z(f+l|0,565),f=g+Z(f,2276)|0,l=g-Z(l,3406)|0,
g=Z(j+h|0,2408),j=g-Z(j,799)|0,h=g-Z(h,4017)|0,g=c+a|0,c=c-a|0,a=Z(d+i|0,1108),i=a-Z(i,3784)|0,d=a+Z(d,1568)|0,a=f+j|0,f=f-j|0,j=l+h|0,l=l-h|0,h=g+d|0,g=g-d|0,d=c+i|0,c=c-i|0,i=Z(f+l|0,181)+128>>8,f=Z(f-l|0,181)+128>>8,e[b]=h+a>>8,e[b+1|0]=d+i>>8,e[b+2|0]=c+f>>8,e[b+3|0]=g+j>>8,e[b+4|0]=g-j>>8,e[b+5|0]=c-f>>8,e[b+6|0]=d-i>>8,e[b+7|0]=h-a>>8;else{var n=e[b]<<3;e[b]=e[b+1|0]=e[b+2|0]=e[b+3|0]=e[b+4|0]=e[b+5|0]=e[b+6|0]=e[b+7|0]=n}}function N(e,b,c,a,i){var d=0,f=e[b+32|0]<<8,l=e[b+48|0],j=e[b+16|0],h=e[b+8|0],g=e[b+56|0],n=e[b+40|0],k=e[b+24|0],r=0;if(f|l|j|h|g|n|k)d=(e[b]<<8)+8192|0,r=Z(h+g|0,565)+4|0,h=r+Z(h,2276)>>3,g=r-Z(g,3406)>>3,r=Z(n+k|0,2408)+4|0,n=r-Z(n,799)>>3,k=r-Z(k,4017)>>3,r=d+f|0,d=d-f|0,f=Z(j+l|0,1108)+4|0,l=f-Z(l,3784)>>3,j=f+Z(j,1568)>>3,f=h+n|0,h=h-n|0,n=g+k|0,g=g-k|0,k=r+j|0,r=r-j|0,j=d+l|0,d=d-l|0,l=Z(h+g|0,181)+128>>8,h=Z(h-g|0,181)+128>>8,c[a]=o((k+f>>14)+128|0),a=a+i|0,c[a]=o((j+l>>14)+128|0),a=a+i|0,c[a]=o((d+h>>14)+128|0),a=a+i|0,c[a]=o((r+n>>14)+128|0),a=a+i|0,c[a]=o((r-n>>14)+128|0),
a=a+i|0,c[a]=o((d-h>>14)+128|0),a=a+i|0,c[a]=o((j-l>>14)+128|0),a=a+i|0,c[a]=o((k-f>>14)+128|0);else for(var p=o((e[b]+32>>6)+128|0),w=8;w;w=w-1|0)c[a]=p,a=a+i|0}function _(){this.e=this.b=this.c=this.a=this.i=this.d=this.f=this.l=this.j=this.h=0,this.g=null}function $(){}function aa(){this.e=this.b=0,this.c=new Int32Array(64),this.a=null,this.i=0,this.d=[],this.f=0,this.l=1,this.j=this.h=0,this.g=[],this.n=this.k=this.r=this.p=0,this.w=[],this.x=0,this.z=null,this.s=this.u=this.t=this.E=0;for(var e=0;e<4;e=e+1|0)this.w.push(new Uint8Array(64)),this.g.push(new Uint16Array(65536)),this.d.push(new _)}var Y=[0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63];ba()})();
