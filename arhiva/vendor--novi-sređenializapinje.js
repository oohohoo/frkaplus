/*!
 * GSAP 3.7.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&oe}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=pt.length;r--&&!pt[r].targetTest(i););e=pt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(xt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ea(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function fa(t,e,r,i){ht.length&&ea(),t.render(e,r,i),ht.length&&ea()}function ga(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ha(t){return t}function ia(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ja(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function la(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?la(t[r]||(t[r]={}),e[r]):e[r]);return t}function ma(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function na(e){var r=e.parent||R,i=e.keyframes?ja:ia;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function qa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function ra(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function sa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function va(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function xa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function ya(t){return t._end=ca(t._start+(t._tDur/Math.abs(t._ts||t._rts||U)||0))}function za(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ca(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ya(t),r._dirty||sa(r,t)),t}function Aa(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=xa(t.rawTime(),e),(!e._dur||Tt(0,e.totalDuration(),r)-e._tTime>U)&&e.render(r,!0)),sa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-U}}function Ba(t,e,r,i){return e.parent&&ra(e),e._start=ca((q(r)?r:r||t!==R?bt(t,r,e):t._time)+e._delay),e._end=ca(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),vt(e)||(t._recent=e),i||Aa(t,e),t}function Ca(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Da(t,e,r,i){return Ut(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==St.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ia(t,e,r,i){var n=t._repeat,a=ca(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ca(a*(n+1)+t._rDelay*n):a,s&&!i?za(t,t._tTime=t._tDur*s):t.parent&&ya(t),r||sa(t.parent,t),t}function Ja(t){return t instanceof qt?sa(t):Ia(t,t._dur)}function Ma(e,r,i){var n,a,s=q(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=t(a.vars.inherit)&&a.parent;u.immediateRender=t(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Qt(r[0],u,r[1+o])}function Na(t,e){return t||0===t?e(t):e}function Pa(t){if("string"!=typeof t)return"";var e=st.exec(t);return e?t.substr(e.index+e[0].length):""}function Sa(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Wa(t){return t.sort(function(){return.5-Math.random()})}function Xa(t){if(p(t))return t;var _=s(t)?t:{each:t},m=Ft(_.ease),g=_.from||0,v=parseFloat(_.base)||0,y={},e=0<g&&g<1,b=isNaN(g)||e,T=_.axis,w=g,x=g;return o(g)?w=x={center:.5,edges:.5,end:1}[g]||0:!e&&b&&(w=g[0],x=g[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,c=y[d];if(!c){if(!(f="auto"===_.grid?0:(_.grid||[1,X])[1])){for(h=-X;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=y[d]=[],i=b?Math.min(f,d)*w-.5:g%f,n=b?d*x/f-.5:g/f|0,l=X,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):G(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===g&&Wa(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===g?-1:1),c.b=d<0?v-d:v,c.u=Pa(_.amount||_.each)||0,m=m&&d<0?Bt(m):m}return d=(c[t]-c.min)/c.max||0,ca(c.b+(m?m(d):d)*c.v)+c.u}}function Ya(r){var i=r<1?Math.pow(10,(r+"").length-2):1;return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Pa(t))}}function Za(u,t){var h,l,e=H(u);return!e&&s(u)&&(h=e=u.radius||X,u.values?(u=xt(u.values),(l=!q(u[0]))&&(h*=h)):u=Ya(u.increment)),Na(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=X,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Pa(t)}:Ya(u))}function $a(t,e,r,i){return Na(H(t)?!e:!0===r?!!(r=0):!i,function(){return H(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function cb(e,r,t){return Na(t,function(t){return e[~~r(t)]})}function fb(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+$a(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function ib(t,e,r){var i,n,a,s=t.labels,o=X;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function kb(t){return ra(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Pt(t,"onInterrupt"),t}function pb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*kt+.5|0}function qb(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?q(t)?[t>>16,t>>8&kt,t&kt]:0:Mt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Mt[t])c=Mt[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(c=parseInt(t.substr(1,6),16))>>16,c>>8&kt,c&kt,parseInt(t.substr(7),16)/255];c=[(t=parseInt(t.substr(1),16))>>16,t>>8&kt,t&kt]}else if("hsl"===t.substr(0,3))if(c=d=t.match(tt),e){if(~t.indexOf("="))return c=t.match(et),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=pb(s+1/3,i,n),c[1]=pb(s,i,n),c[2]=pb(s-1/3,i,n);else c=t.match(tt)||Mt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/kt,n=c[1]/kt,a=c[2]/kt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function rb(t){var r=[],i=[],n=-1;return t.split(At).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function sb(t,e,r){var i,n,a,s,o="",u=(t+o).match(At),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=qb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=rb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(At,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(At)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function vb(t){var e,r=t.join(" ");if(At.lastIndex=0,At.test(r))return e=Ct.test(r),t[1]=sb(t[1],e),t[0]=sb(t[0],e,rb(t[1])),!0}function Eb(t){var e=(t+"").split("("),r=zt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Et,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ga)):zt._CE&&It.test(t)?zt._CE("",t):r}function Gb(t,e){for(var r,i=t._first;i;)i instanceof qt?Gb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Gb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Ib(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in zt[t]=ot[t]=a,zt[n=t.toLowerCase()]=r,a)zt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=zt[t+"."+e]=a[e]}),a}function Jb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Kb(r,t,e){function Ol(t){return 1===t?1:i*Math.pow(2,-10*t)*J((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/V*(Math.asin(1/i)||0),s="out"===r?Ol:"in"===r?function(t){return 1-Ol(1-t)}:Jb(Ol);return n=V/n,s.config=function(t,e){return Kb(r,t,e)},s}function Lb(e,r){function Wl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Wl:"in"===e?function(t){return 1-Wl(1-t)}:Jb(Wl);return t.config=function(t){return Lb(e,t)},t}var F,R,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,A,C,S,D,z,I,E,B,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},L={duration:.5,overwrite:!1,delay:0},X=1e8,U=1/X,V=2*Math.PI,j=V/4,W=0,G=Math.sqrt,K=Math.cos,J=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},H=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},ct=30,pt=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},yt={_start:0,endTime:Q,totalDuration:Q},bt=function _parsePosition(t,e,r){var i,n,a,s=t.labels,u=t._recent||yt,h=t.duration()>=X?u.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in s)?(n=e.charAt(0),a="%"===e.substr(-1),i=e.indexOf("="),"<"===n||">"===n?(0<=i&&(e=e.replace(/=/,"")),("<"===n?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(a?(i<0?u:r).totalDuration()/100:1)):i<0?(e in s||(s[e]=h),s[e]):(n=parseFloat(e.charAt(i-1)+e.substr(i+1)),a&&r&&(n=n/100*(H(r)?r[0]:r).totalDuration()),1<i?_parsePosition(t,e.substr(0,i-1),r)+n:h+n)):null==e?h:+e},Tt=function _clamp(t,e,r){return r<t?t:e<r?e:r},wt=[].slice,xt=function toArray(t,e,r){return!o(t)||r||!n&&Dt()?H(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Sa(t,1)?r.push.apply(r,xt(t)):r.push(t)})||r}(t,r):Sa(t)?wt.call(t,0):t?[t]:[]:wt.call((e||a).querySelectorAll(t),0)},Ot=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Na(n,function(t){return r+((t-e)/a*s||0)})},Pt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&ea(),i?s.apply(n,i):s.call(n)},kt=255,Mt={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},At=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Mt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,St=(x=Date.now,k=500,A=33,C=x(),S=C,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){Kk(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=oe,(i.gsapVersions||(i.gsapVersions=[])).push(oe.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,Kk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,A=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){I.indexOf(t)<0&&I.push(t),Dt()},remove:function remove(t){var e;~(e=I.indexOf(t))&&I.splice(e,1)&&e<=w&&w--},_listeners:I=[]}),Dt=function _wake(){return!c&&St.wake()},zt={},It=/^[\d.\-M][\d.\-,\s]/,Et=/["']/g,Bt=function _invertEase(e){return function(t){return 1-e(1-t)}},Ft=function _parseEase(t,e){return t&&(p(t)?t:zt[t]||Eb(t))||e};function Kk(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(C+=a-A),(0<(e=(i=(S+=a)-C)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(Kk)),r)for(w=0;w<I.length;w++)I[w](i,T,n,t)}function lm(t){return t<B?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Ib(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),zt.Linear.easeNone=zt.none=zt.Linear.easeIn,Ib("Elastic",Kb("in"),Kb("out"),Kb()),E=7.5625,B=1/2.75,Ib("Bounce",function(t){return 1-lm(1-t)},lm),Ib("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Ib("Circ",function(t){return-(G(1-t*t)-1)}),Ib("Sine",function(t){return 1===t?1:1-K(t*j)}),Ib("Back",Lb("in"),Lb("out"),Lb()),zt.SteppedEase=zt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Tt(0,.99999999,t)|0)+n)*r}}},L.ease=zt["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var Rt,Lt=function GSCache(t,e){this.id=W++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Jt},Nt=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(Dt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(za(this,t),!r._dp||r.parent||Aa(r,this);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ba(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===U||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),fa(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+va(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+va(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-U?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?xa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-U?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(Tt(-this._delay,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==U&&(this._tTime-=U)))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ba(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xa(e.rawTime(t),this):this._tTime:this._tTime},Rt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ja(this)):-2===this._repeat?1/0:this._repeat},Rt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Ja(this),e?this.time(e):this}return this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(e,r){return this.totalTime(bt(this,e),t(r))},Rt.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-U:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-U,this},Rt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-U))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function Cn(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ha;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Cn():i._prom=Cn})},Rt.kill=function kill(){kb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ia(this,+t.duration,1,1),this.data=t.data,c||St.wake()}ia(Nt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-U,_prom:0,_ps:!1,_rts:1});var qt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),R&&Ba(e.parent||R,_assertThisInitialized(i),r),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&Ca(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r){return Ma(0,arguments,this),this},e.from=function from(t,e,r){return Ma(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Ma(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,na(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Qt(t,e,bt(this,r),1),this},e.call=function call(t,e,r){return Ba(this,Qt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Qt(t,r,bt(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,na(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,na(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==R&&m-U<t&&0<=t?m:t<U?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ca(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var b=c&&1&d,T=b===(c&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(p?0:ca(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Pt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Gb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ca(_),ca(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&(Pt(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-U);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-U:U);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-U)._zTime=_<=i?1:-1,this._ts))return this._start=f,ya(this),this.render(t,e,r);this._onUpdate&&!e&&Pt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||ra(this,1),e||t<0&&!_||!v&&!_&&m||(Pt(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=bt(this,e,t)),!(t instanceof Nt)){if(H(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Qt.delayedCall(0,t)}return this!==t?Ba(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-X);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Qt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(qa(this,t),t===this._recent&&(this._recent=this._last),sa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ca(St.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=bt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Qt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ba(this,i,bt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=bt(this,t);e;)e._start===t&&"isPause"===e.data&&ra(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Yt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=xt(t),a=this._first,s=q(e);a;)a instanceof Qt?da(a._targets,n)&&(s?(!Yt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=bt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Qt.to(i,ia({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||U,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ia(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ia({startAt:{time:bt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),ib(this,bt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),ib(this,bt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+U)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return sa(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),sa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=X;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ba(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ia(a,a===R&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(R._ts&&(fa(R,xa(t,R)),f=St.frame),St.frame>=ct){ct+=Y.autoSleep||120;var e=R._first;if((!e||!e._ts)&&Y.autoSleep&&St._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||St.sleep()}}},Timeline}(Nt);ia(qt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Sb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Vt(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||H(t)||Z(t))return o(t)?Vt(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Vt(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ae(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}var Yt,Xt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?$t:Kt:Gt;if(o(i)&&(~i.indexOf("random(")&&(i=fb(i)),"="===i.charAt(1)&&(!(l=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Pa(d)||0))&&0!==l||(i=l))),d!==i)return isNaN(d*i)||""===i?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ae(this._pt,t,e,0,1,te,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=fb(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ae(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?Ht:Zt,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},Ut=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,c,p,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,P=g.runBackwards,k=g.yoyoEase,M=g.keyframes,A=g.autoRevert,C=e._dur,S=e._startAt,D=e._targets,z=e.parent,I=z&&"nested"===z.data?z.parent._targets:D,E="auto"===e._overwrite&&!F,B=e.timeline;if(!B||M&&v||(v="none"),e._ease=Ft(v,L.ease),e._yEase=k?Bt(Ft(!0===k?v:k,L.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),e._from=!B&&!!g.runBackwards,!B){if(p=(l=D[0]?_(D[0]).harness:0)&&g[l.prop],i=ma(g,ut),S&&S.render(-1,!0).kill(),y)if(ra(e._startAt=Qt.set(D,ia({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),r<0&&!b&&!A&&e._startAt.render(-1,!0),b){if(0<r&&!A&&(e._startAt=0),C&&r<=0)return void(r&&(e._zTime=r))}else!1===A&&(e._startAt=0);else if(P&&C)if(S)A||(e._startAt=0);else if(r&&(b=!1),a=ia({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),p&&(a[l.prop]=p),ra(e._startAt=Qt.set(D,a)),r<0&&e._startAt.render(-1,!0),b){if(!r)return}else _initTween(e._startAt,U);for(e._pt=0,T=C&&t(T)||T&&!C,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||$(D)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&ea(),c=I===D?n:I.indexOf(o),l&&!1!==(f=new l).init(o,p||i,e,c,I)&&(e._pt=s=new ae(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)ft[a]&&(f=Sb(a,i,e,c,o,I))?f.priority&&(u=1):d[a]=s=Xt.call(e,o,a,"get",i[a],c,I,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(Yt=e,R.killTweensOf(o,d,e.globalTime(0)),m=!e.parent,Yt=0),e._pt&&T&&(lt[h.id]=1)}u&&ne(e),e._onInit&&e._onInit(e)}e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m},Vt=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?fb(t):t},jt=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Wt=(jt+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Qt=function(C){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,c,p,_=(a=C.call(this,n?r:na(r))||this).vars,m=_.duration,g=_.delay,y=_.immediateRender,b=_.stagger,T=_.overwrite,w=_.keyframes,x=_.defaults,P=_.scrollTrigger,k=_.yoyoEase,M=r.parent||R,A=(H(e)||Z(e)?q(e[0]):"length"in r)?[e]:xt(e);if(a._targets=A.length?$(A):O("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new qt({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,w)ia(o.vars.defaults,{ease:"none"}),b?A.forEach(function(r,i){return w.forEach(function(t,e){return o.to(r,t,e?">":i*b)})}):w.forEach(function(t){return o.to(A,t,">")});else{if(l=A.length,c=b?Xa(b):Q,s(b))for(f in b)~jt.indexOf(f)&&((p=p||{})[f]=b[f]);for(u=0;u<l;u++){for(f in h={},r)Wt.indexOf(f)<0&&(h[f]=r[f]);h.stagger=0,k&&(h.yoyoEase=k),p&&mt(h,p),d=A[u],h.duration=+Vt(m,_assertThisInitialized(a),u,d,A),h.delay=(+Vt(g,_assertThisInitialized(a),u,d,A)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,c(u,d,A))}o.duration()?m=g=0:a.timeline=0}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||F||(Yt=_assertThisInitialized(a),R.killTweensOf(A),Yt=0),Ba(M,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(y||!m&&!w&&a._start===ca(M._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==M.data)&&(a._tTime=-U,a.render(Math.max(0,-g))),P&&Ca(_assertThisInitialized(a),P),a}_inheritsLoose(Tween,C);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-U<t&&0<=t?c:t<U?0:t;if(p){if(_!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=ca(_%s),_===c?(a=this._repeat,i=p):((a=~~(_/s))&&a===_/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Gb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ca(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Da(this,t<0?t:i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&(Pt(this,"onStart"),this._tTime!==_))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-U:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),Pt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Pt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&p||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||ra(this,1),e||t<0&&!d||!_&&!d||(Pt(this,_===c?"onComplete":"onReverseComplete",!0),!this._prom||_<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!vt(t))||(t._ts<0||t._dp._ts<0)&&!vt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Tt(0,t._tDur,e),a=gt(l,h),s=gt(t._tTime,h),t._yoyo&&1&a&&(u=1-u),a!==s&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===U||!e&&t._zTime){if(!t._initted&&Da(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?U:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&Pt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Pt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&ra(t,1),r||(Pt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),C.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?kb(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Yt&&!0!==Yt.vars.overwrite)._first||kb(this),this.parent&&r!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?xt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),kb(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=c[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||qa(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&p&&kb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Ma(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Ma(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return R.killTweensOf(t,e,r)},Tween}(Nt);ia(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var t=new qt,e=wt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function bc(t,e,r){return t.setAttribute(e,r)}function jc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Gt=function _setterPlain(t,e,r){return t[e]=r},Kt=function _setterFunc(t,e,r){return t[e](r)},$t=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Jt=function _getSetter(t,e){return p(t[e])?Kt:r(t[e])&&t.setAttribute?bc:Gt},Zt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},Ht=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},te=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},ee=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},re=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ie=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?qa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},ne=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ae=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=jc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Zt,this.d=s||this,this.set=o||Gt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(_t+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Qt,ot.TimelineLite=ot.TimelineMax=qt,R=new qt({sortChildren:!1,defaults:L,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=vb;var se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:ee,add:Xt,kill:ie,modifier:re,rawVars:0},a={targetTest:0,get:0,getSetter:Jt,aliases:{},register:0};if(Dt(),t!==i){if(ft[e])return;ia(i,ia(ma(t,n),a)),mt(i.prototype,mt(n,ma(t,a))),ft[i.prop=e]=i,t.targetTest&&(pt.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(oe,i,ae)}(t)})},timeline:function timeline(t){return new qt(t)},getTweensOf:function getTweensOf(t,e){return R.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=xt(i)[0]);var n=_(i||{}).get,a=e?ha:ga;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=xt(r)).length){var n=r.map(function(t){return oe.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&ee(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<R.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Ft(t.ease,L.ease)),la(L,t||{})},config:function config(t){return la(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(xt(t),ia(e||{},a),r)},r&&(qt.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){zt[t]=Ft(e)},parseEase:function parseEase(t,e){return arguments.length?Ft(t,e):zt},getById:function getById(t){return R.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new qt(e);for(a.smoothChildTiming=t(e.smoothChildTiming),R.remove(a),a._dp=0,a._time=a._tTime=R._time,i=R._first;i;)n=i._next,!r&&!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]||Ba(a,i,i._start-i._delay),i=n;return Ba(R,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return H(e)?cb(e,wrap(0,e.length),t):Na(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return H(e)?cb(e,wrapYoyo(0,e.length-1),t):Na(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Xa,random:$a,snap:Za,normalize:function normalize(t,e,r){return Ot(t,e,0,1,r)},getUnit:Pa,clamp:function clamp(e,r,t){return Na(t,function(t){return Tt(e,r,t)})},splitColor:qb,toArray:xt,selector:function selector(r){return r=xt(r)[0]||O("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return xt(t,e.querySelectorAll?e:e===r?O("Invalid scope")||a.createElement("div"):r)}},mapRange:Ot,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Pa(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(H(e)&&!H(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(H(e)?[]:{},e));if(!u){for(a in r)Xt.call(d,e,a,"get",r[a]);n=function func(t){return ee(t,d)||(f?e.p:e)}}}return Na(t,n)},shuffle:Wa},install:M,effects:dt,ticker:St,updateRoot:qt.updateRoot,plugins:ft,globalTimeline:R,core:{PropTween:ae,globals:P,Tween:Qt,Timeline:qt,Animation:Nt,getCache:_,_removeLinkedListItem:qa,suppressOverwrites:function suppressOverwrites(t){return F=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return se[t]=Qt[t]}),St.add(qt.updateRoot),d=se.to({},{duration:0});function nc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function pc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=nc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var oe=se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},pc("roundProps",Ya),pc("modifiers"),pc("snap",Za))||se;Qt.version=qt.version=oe.version="3.7.1",l=1,u()&&Dt();function $c(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function _c(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function ad(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function bd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function cd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function dd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function ed(t,e,r){return t.style[e]=r}function fd(t,e,r){return t.style.setProperty(e,r)}function gd(t,e,r){return t._gsap[e]=r}function hd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function id(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function jd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function nd(t,e){var r=he.createElementNS?he.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):he.createElement(t);return r.style?r:he.createElement(t)}function od(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Re,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&od(t,Ve(e)||e,1)||""}function rd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(ue=window,he=ue.document,le=he.documentElement,de=nd("div")||{style:{}},nd("div"),Ye=Ve(Ye),Xe=Ye+"Origin",de.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pe=!!Ve("perspective"),fe=1)}function sd(t){var e,r=nd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(le.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=sd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),le.removeChild(r),this.style.cssText=a,e}function td(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function ud(e){var r;try{r=e.getBBox()}catch(t){r=sd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===sd||(r=sd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+td(e,["x","cx","x1"])||0,y:+td(e,["y","cy","y1"])||0,width:0,height:0}}function vd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!ud(t))}function wd(t,e){if(e){var r=t.style;e in Ie&&e!==Xe&&(e=Ye),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Re,"-$1").toLowerCase())):r.removeAttribute(e)}}function xd(t,e,r,i,n,a){var s=new ae(t._pt,e,r,0,1,a?dd:cd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function zd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=de.style,f=Le.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,m="%"===i;return i===h||!u||je[i]||je[h]?u:("px"===h||p||(u=zd(t,e,r,"px")),o=t.getCTM&&vd(t),!m&&"%"!==h||!Ie[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==he&&a.appendChild||(a=he.body),(s=a._gsap)&&m&&s.width&&f&&s.time===St.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=od(t,"position")),a===t&&(l.position="static"),a.appendChild(de),n=de[c],a.removeChild(de),l.position="absolute",f&&m&&((s=_(a)).time=St.time,s.width=a[c]),ca(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[c],ca(m?u/n*100:u/100*n)))}function Ad(t,e,r,i){var n;return fe||rd(),e in qe&&"transform"!==e&&~(e=qe[e]).indexOf(",")&&(e=e.split(",")[0]),Ie[e]&&"transform"!==e?(n=$e(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Je(od(t,Xe))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Qe[e]&&Qe[e](t,e,r)||od(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?zd(t,e,n,r)+r:n}function Bd(t,e,r,i){if(!r||"none"===r){var n=Ve(e,t,1),a=n&&od(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=od(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ae(this._pt,t.style,e,0,1,te),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=od(t,e)||i,t.style[e]=r),vb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=rt.lastIndex-_.length,_||(_=_||Y.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=zd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===b?p:",",s:h,c:g?g*c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?dd:cd;return nt.test(i)&&(v.e=0),this._pt=v}function Dd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=We[r]||r,e[1]=We[i]||i,e.join(" ")}function Ed(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Ie[r]&&(i=1,r="transformOrigin"===r?Xe:Ye),wd(a,r);i&&(wd(a,Ye),u&&(u.svg&&a.removeAttribute("transform"),$e(a,1),u.uncache=1))}}function Id(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Jd(t){var e=od(t,Ye);return Id(e)?Ge:e.substr(7).match(et).map(ca)}function Kd(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Jd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Ge:u:(u!==Ge||t.offsetParent||t===le||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,le.appendChild(t)),u=Jd(t),n?o.display=n:wd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):le.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Ld(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Kd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==Ge&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=ud(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=c+(y*_+b*g)-y,h.yOffset=p+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Xe]="0px 0px",a&&(xd(a,h,"xOrigin",f,w),xd(a,h,"yOrigin",d,x),xd(a,h,"xOffset",c,h.xOffset),xd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Od(t,e,r){var i=Pa(e);return ca(parseFloat(e)+parseFloat(zd(t,"x",r+"px",i)))+i}function Vd(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?Ee:1),d=a?f*a:f-i,c=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ae(t._pt,e,r,i,d,_c),u.e=c,u.u="deg",t._props.push(r),u}function Wd(t,e){for(var r in e)t[r]=e[r];return t}function Xd(t,e,r){var i,n,a,s,o,u,h,l=Wd({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[Ye]=e,i=$e(r,1),wd(r,Ye),r.setAttribute("transform",a)):(a=getComputedStyle(r)[Ye],f[Ye]=e,i=$e(r,1),f[Ye]=a),Ie)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Pa(a)!==(h=Pa(s))?zd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ae(t._pt,i,n,o,u-o,$c),t._pt.u=h||0,t._props.push(n));Wd(i,l)}var ue,he,le,fe,de,ce,pe,_e=zt.Power0,me=zt.Power1,ge=zt.Power2,ve=zt.Power3,ye=zt.Power4,be=zt.Linear,Te=zt.Quad,we=zt.Cubic,xe=zt.Quart,Oe=zt.Quint,Pe=zt.Strong,ke=zt.Elastic,Me=zt.Back,Ae=zt.SteppedEase,Ce=zt.Bounce,Se=zt.Sine,De=zt.Expo,ze=zt.Circ,Ie={},Ee=180/Math.PI,Be=Math.PI/180,Fe=Math.atan2,Re=/([A-Z])/g,Le=/(?:left|right|width|margin|padding|x)/i,Ne=/[\s,\(]\S/,qe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ye="transform",Xe=Ye+"Origin",Ue="O,Moz,ms,Ms,Webkit".split(","),Ve=function _checkPropPrefix(t,e,r){var i=(e||de).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ue[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ue[n]:"")+t},je={deg:1,rad:1,turn:1},We={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qe={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ae(t._pt,e,r,0,0,Ed);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Ge=[1,0,0,1,0,0],Ke={},$e=function _parseTransform(t,e){var r=t._gsap||new Lt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b,T,w,x,O,P,k,M,A,C,S,D,z,I,E,B=t.style,F=r.scaleX<0,R="deg",L=od(t,Xe)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!vd(t)),m=Kd(t,r.svg),r.svg&&(k=(!r.uncache||"0px 0px"===L)&&!e&&t.getAttribute("data-svg-origin"),Ld(t,k||L,!!k||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==Ge&&(b=m[0],T=m[1],w=m[2],x=m[3],i=O=m[4],n=P=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Fe(T,b)*Ee:0,(f=w||x?Fe(w,x)*Ee+u:0)&&(o*=Math.abs(Math.cos(f*Be))),r.svg&&(i-=p-(p*b+_*w),n-=_-(p*T+_*x))):(E=m[6],z=m[7],C=m[8],S=m[9],D=m[10],I=m[11],i=m[12],n=m[13],a=m[14],h=(g=Fe(E,D))*Ee,g&&(k=O*(v=Math.cos(-g))+C*(y=Math.sin(-g)),M=P*v+S*y,A=E*v+D*y,C=O*-y+C*v,S=P*-y+S*v,D=E*-y+D*v,I=z*-y+I*v,O=k,P=M,E=A),l=(g=Fe(-w,D))*Ee,g&&(v=Math.cos(-g),I=x*(y=Math.sin(-g))+I*v,b=k=b*v-C*y,T=M=T*v-S*y,w=A=w*v-D*y),u=(g=Fe(T,b))*Ee,g&&(k=b*(v=Math.cos(g))+T*(y=Math.sin(g)),M=O*v+P*y,T=T*v-b*y,P=P*v-O*y,b=k,O=M),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(b*b+T*T+w*w)),o=ca(Math.sqrt(P*P+E*E)),g=Fe(O,P),f=2e-4<Math.abs(g)?g*Ee:0,c=I?1/(I<0?-I:I):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Id(od(t,Ye)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(F?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=i&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+R,r.rotationX=ca(h)+R,r.rotationY=ca(l)+R,r.skewX=f+R,r.skewY=d+R,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(L.split(" ")[2])||0)&&(B[Xe]=Je(L)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?ir:pe?rr:Ze,r.uncache=0,r},Je=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Ze=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,rr(t,e)},He="0deg",tr="0px",er=") ",rr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==He||h!==He)){var T,w=parseFloat(h)*Be,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*Be,T=Math.cos(w),a=Od(g,a,x*T*-v),s=Od(g,s,-Math.sin(w)*-v),o=Od(g,o,O*T*-v+v)}_!==tr&&(y+="perspective("+_+er),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===tr&&s===tr&&o===tr||(y+=o!==tr||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+er),u!==He&&(y+="rotate("+u+er),h!==He&&(y+="rotateY("+h+er),l!==He&&(y+="rotateX("+l+er),f===He&&d===He||(y+="skew("+f+", "+d+er),1===c&&1===p||(y+="scale("+c+", "+p+er),g.style[Ye]=y||"translate(0, 0)"},ir=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=Be,c*=Be,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=Be,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=zd(g,"x",l,"px"),O=zd(g,"y",f,"px")),(v||y||b||T)&&(x=ca(x+v-(v*r+y*n)+b),O=ca(O+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),O=ca(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[Ye]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Qe[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return Ad(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var nr,ar,sr,or={name:"css",register:rd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b=this._props,T=t.style,w=r.vars.startAt;for(f in fe||rd(),e)if("autoRound"!==f&&(s=e[f],!ft[f]||!Sb(f,e,r,i,t,n)))if(h=typeof s,l=Qe[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=fb(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))a=(getComputedStyle(t).getPropertyValue(f)+"").trim(),s+="",At.lastIndex=0,At.test(a)||(d=Pa(a),c=Pa(s)),c?d!==c&&(a=zd(t,f,a,c)+c):d&&(s+=d),this.add(T,"setProperty",a,s,i,n,0,0,f),b.push(f);else if("undefined"!==h){if(w&&f in w?(a="function"==typeof w[f]?w[f].call(r,i,t,n):w[f],f in Y.units&&!Pa(a)&&(a+=Y.units[f]),"="===(a+"").charAt(1)&&(a=Ad(t,f))):a=Ad(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in qe&&("autoAlpha"===f&&(1===u&&"hidden"===Ad(t,"visibility")&&o&&(u=0),xd(this,T,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=qe[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in Ie)if(m||((g=t._gsap).renderTransform&&!e.parseTransform||$e(t,e.parseTransform),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ae(this._pt,T,Ye,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ae(this._pt,g,"scaleY",g.scaleY,(p?p*o:o-g.scaleY)||0),b.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=Dd(s),g.svg?Ld(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&xd(this,g,"zOrigin",g.zOrigin,c),xd(this,T,f,Je(a),Je(s)));continue}if("svgOrigin"===f){Ld(t,s,1,v,0,this);continue}if(f in Ke){Vd(this,g,f,u,s,p);continue}if("smoothOrigin"===f){xd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Xd(this,s,t);continue}}else f in T||(f=Ve(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Ne.test(s)&&f in T)o=o||0,(d=(a+"").substr((u+"").length))!==(c=Pa(s)||(f in Y.units?Y.units[f]:d))&&(u=zd(t,f,a,c)),this._pt=new ae(this._pt,_?g:T,f,u,p?p*o:o-u,_||"px"!==c&&"zIndex"!==f||!1===e.autoRound?$c:bd),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=ad);else if(f in T)Bd.call(this,t,f,a,s);else{if(!(f in t)){N(f,s);continue}this.add(t,f,a||t[f],s,i,n)}b.push(f)}y&&ne(this)},get:Ad,aliases:qe,getSetter:function getSetter(t,e,i){var n=qe[e];return n&&n.indexOf(",")<0&&(e=n),e in Ie&&e!==Xe&&(t._gsap.x||Ad(t,"x"))?i&&ce===i?"scale"===e?hd:gd:(ce=i||{})&&("scale"===e?id:jd):t.style&&!r(t.style[e])?ed:~e.indexOf("-")?fd:Jt(t,e)},core:{_removeProperty:wd,_getMatrix:Kd}};oe.utils.checkPrefix=Ve,sr=ba((nr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(ar="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Ie[t]=1}),ba(ar,function(t){Y.units[t]="deg",Ke[t]=1}),qe[sr[13]]=nr+","+ar,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");qe[e[1]]=sr[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),oe.registerPlugin(or);var ur=oe.registerPlugin(or)||oe,hr=ur.core.Tween;e.Back=Me,e.Bounce=Ce,e.CSSPlugin=or,e.Circ=ze,e.Cubic=we,e.Elastic=ke,e.Expo=De,e.Linear=be,e.Power0=_e,e.Power1=me,e.Power2=ge,e.Power3=ve,e.Power4=ye,e.Quad=Te,e.Quart=xe,e.Quint=Oe,e.Sine=Se,e.SteppedEase=Ae,e.Strong=Pe,e.TimelineLite=qt,e.TimelineMax=qt,e.TweenLite=Qt,e.TweenMax=hr,e.default=ur,e.gsap=ur;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
console.log("GSAP 3.7.1 ..... loaded");
/*!
 * ScrollTrigger 3.7.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function J(e){return e}function K(e){return Math.round(1e5*e)/1e5||0}function L(){return"undefined"!=typeof window}function M(){return Se||L()&&(Se=window.gsap)&&Se.registerPlugin&&Se}function N(e){return!!~o.indexOf(e)}function O(e,t){return~Fe.indexOf(e)&&Fe[Fe.indexOf(e)+1][t]}function P(t,e){var r=e.s,n=e.sc,o=v.indexOf(t),i=n===ot.sc?1:2;return~o||(o=v.push(t)-1),v[o+i]||(v[o+i]=O(t,r)||(N(t)?n:function(e){return arguments.length?t[r]=e:t[r]}))}function Q(e){return O(e,"getBoundingClientRect")||(N(e)?function(){return pt.width=Me.innerWidth,pt.height=Me.innerHeight,pt}:function(){return it(e)})}function T(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=O(e,r))?i()-Q(e)()[o]:N(e)?Math.max(_e[r],Pe[r])-(Me["inner"+n]||_e["client"+n]||Pe["client"+n]):e[r]-e["offset"+n]}function U(e,t){for(var r=0;r<d.length;r+=3)t&&!~t.indexOf(d[r+1])||e(d[r],d[r+1],d[r+2])}function V(e){return"string"==typeof e}function W(e){return"function"==typeof e}function X(e){return"number"==typeof e}function Y(e){return"object"==typeof e}function Z(e){return W(e)&&e()}function $(r,n){return function(){var e=Z(r),t=Z(n);return function(){Z(e),Z(t)}}}function ta(e){return Me.getComputedStyle(e)}function va(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function xa(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function ya(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function Ba(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function Ca(e,t,r){return e.addEventListener(t,r,{passive:!0})}function Da(e,t,r){return e.removeEventListener(t,r)}function Ha(e,t){if(V(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in C?C[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Ia(e,t,r,n,o,i,a){var s=o.startColor,l=o.endColor,c=o.fontSize,u=o.indent,f=o.fontWeight,p=ke.createElement("div"),d=N(r)||"fixed"===O(r,"pinType"),g=-1!==e.indexOf("scroller"),h=d?Pe:r,v=-1!==e.indexOf("start"),m=v?s:l,b="border-color:"+m+";font-size:"+c+";color:"+m+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+(g&&d?"fixed;":"absolute;"),!g&&d||(b+=(n===ot?x:y)+":"+(i+parseFloat(u))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e),p.style.cssText=b,p.innerText=t||0===t?e+"-"+t:e,h.children[0]?h.insertBefore(p,h.children[0]):h.appendChild(p),p._offset=p["offset"+n.op.d2],S(p,0,n,v),p}function Ma(){return l=l||s(F)}function Na(){l||(l=s(F),je||A("scrollStart"),je=He())}function Oa(){return!Be&&!r&&!ke.fullscreenElement&&a.restart(!0)}function Ua(e){var t,r=Se.ticker.frame,n=[],o=0;if(g!==r||De){for(R();o<E.length;o+=4)(t=Me.matchMedia(E[o]).matches)!==E[o+3]&&((E[o+3]=t)?n.push(o):R(1,E[o])||W(E[o+2])&&E[o+2]());for(I(),o=0;o<n.length;o++)t=n[o],Ve=E[t],E[t+2]=E[t+1](e);Ve=0,i&&z(0,1),g=r,A("matchMedia")}}function Va(){return Da(ee,"scrollEnd",Va)||z(!0)}function gb(e,t,r,n){if(e.parentNode!==t){for(var o,i=H.length,a=t.style,s=e.style;i--;)a[o=H[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[y]=s[x]="auto",a.overflow="visible",a.boxSizing="border-box",a[Xe]=xa(e,nt)+rt,a[Ze]=xa(e,ot)+rt,a[Ge]=s[et]=s.top=s[b]="0",ft(n),s[Xe]=s.maxWidth=r[Xe],s[Ze]=s.maxHeight=r[Ze],s[Ge]=r[Ge],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function jb(e){for(var t=j.length,r=e.style,n=[],o=0;o<t;o++)n.push(j[o],r[j[o]]);return n.t=e,n}function mb(e,t,r,n,o,i,a,s,l,c,u,f){if(W(e)&&(e=e(s)),V(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Ha("0"+e.substr(3),r):0)),X(e))a&&S(a,r,n,!0);else{W(t)&&(t=t(s));var p,d,g,h=Ee(t)[0]||Pe,v=it(h)||{},m=e.split(" ");v&&(v.left||v.top)||"none"!==ta(h).display||(g=h.style.display,h.style.display="block",v=it(h),g?h.style.display=g:h.style.removeProperty("display")),p=Ha(m[0],v[n.d]),d=Ha(m[1]||"0",r),e=v[n.p]-l[n.p]-c+p+o-d,a&&S(a,d,n,r-d<20||a._isStart&&20<d),r-=r-d}if(i){var b=e+r,x=i._isStart;f="scroll"+n.d2,S(i,b,n,x&&20<b||!x&&(u?Math.max(Pe[f],_e[f]):i.parentNode[f])<=b+1),u&&(l=it(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+rt))}return Math.round(e)}function ob(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===Pe){for(o in e._stOrig=a.cssText,i=ta(e))+o||G.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}}function pb(l,e){function Ye(e,t,r,n,o){var i=Ye.tween,a=t.onComplete,s={};return i&&i.kill(),c=Math.round(r),t[p]=e,(t.modifiers=s)[p]=function(e){return(e=K(f()))!==c&&e!==u&&2<Math.abs(e-c)?(i.kill(),Ye.tween=0):e=r+n*i.ratio+o*i.ratio*i.ratio,u=c,c=K(e)},t.onComplete=function(){Ye.tween=0,a&&a.call(i)},i=Ye.tween=Se.to(l,t)}var c,u,f=P(l,e),p="_scroll"+e.p2;return l[p]=f,l.addEventListener("wheel",function(){return Ye.tween&&Ye.tween.kill()&&(Ye.tween=0)},{passive:!0}),Ye}var Se,i,Me,ke,_e,Pe,o,a,s,l,Ee,Ne,Ae,c,Be,Ie,u,Le,f,p,d,Re,ze,r,We,Ve,g,h,De=1,Fe=[],v=[],He=Date.now,m=He(),je=0,Ue=1,Je=Math.abs,t="scrollLeft",n="scrollTop",b="left",x="right",y="bottom",Xe="width",Ze="height",qe="Right",$e="Left",Ke="Top",Qe="Bottom",Ge="padding",et="margin",tt="Width",w="Height",rt="px",nt={s:t,p:b,p2:$e,os:x,os2:qe,d:Xe,d2:tt,a:"x",sc:function sc(e){return arguments.length?Me.scrollTo(e,ot.sc()):Me.pageXOffset||ke[t]||_e[t]||Pe[t]||0}},ot={s:n,p:"top",p2:Ke,os:y,os2:Qe,d:Ze,d2:w,a:"y",op:nt,sc:function sc(e){return arguments.length?Me.scrollTo(nt.sc(),e):Me.pageYOffset||ke[n]||_e[n]||Pe[n]||0}},it=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==ta(e)[u]&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},at={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},st={toggleActions:"play",anticipatePin:0},C={top:0,left:0,center:.5,bottom:1,right:1},S=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+tt]=1,o["border"+a+tt]=0,o[r.p]=t+"px",Se.set(e,o)},lt=[],ct={},k={},_=[],E=[],A=function _dispatch(e){return k[e]&&k[e].map(function(e){return e()})||_},B=[],I=function _revertRecorded(e){for(var t=0;t<B.length;t+=5)e&&B[t+4]!==e||(B[t].style.cssText=B[t+1],B[t].getBBox&&B[t].setAttribute("transform",B[t+2]||""),B[t+3].uncache=1)},R=function _revertAll(e,t){var r;for(Le=0;Le<lt.length;Le++)r=lt[Le],t&&r.media!==t||(e?r.kill(1):r.revert());t&&I(t),t||A("revert")},z=function _refreshAll(e,t){if(!je||e){h=!0;var r=A("refreshInit");Re&&ee.sort(),t||R(),lt.forEach(function(e){return e.refresh()}),r.forEach(function(e){return e&&e.render&&e.render(-1)}),v.forEach(function(e){return"function"==typeof e&&(e.rec=0)}),a.pause(),h=!1,A("refresh")}else Ca(ee,"scrollEnd",Va)},D=0,ut=1,F=function _updateAll(){if(!h){var e=lt.length,t=He(),r=50<=t-m,n=e&&lt[0].scroll();if(ut=n<D?-1:1,D=n,r&&(je&&!Ie&&200<t-je&&(je=0,A("scrollEnd")),Ae=m,m=t),ut<0){for(Le=e;0<Le--;)lt[Le]&&lt[Le].update(0,r);ut=1}else for(Le=0;Le<e;Le++)lt[Le]&&lt[Le].update(0,r);l=0}},H=[b,"top",y,x,et+Qe,et+qe,et+Ke,et+$e,"display","flexShrink","float","zIndex","grid-column-start","grid-column-end","grid-row-start","grid-row-end","grid-area","justify-self","align-self","place-self"],j=H.concat([Xe,Ze,"boxSizing","max"+tt,"max"+w,"position",et,Ge,Ge+Ke,Ge+qe,Ge+Qe,Ge+$e]),q=/([A-Z])/g,ft=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(q,"-$1").toLowerCase())}},pt={left:0,top:0},G=/(?:webkit|moz|length|cssText|inset)/i;nt.op=ot;var ee=(ScrollTrigger.prototype.init=function init(S,M){if(this.progress=this.start=0,this.vars&&this.kill(1),Ue){var d,n,f,k,_,E,A,B,I,L,R,e,z,D,F,H,j,t,U,g,Z,q,h,$,v,m,r,b,x,K,o,p,y,G,ee,te,re=(S=va(V(S)||X(S)||S.nodeType?{trigger:S}:S,st)).horizontal?nt:ot,w=S.onUpdate,C=S.toggleClass,i=S.id,ne=S.onToggle,oe=S.onRefresh,a=S.scrub,ie=S.trigger,ae=S.pin,se=S.pinSpacing,le=S.invalidateOnRefresh,ce=S.anticipatePin,s=S.onScrubComplete,ue=S.onSnapComplete,fe=S.once,pe=S.snap,de=S.pinReparent,ge=!a&&0!==a,he=Ee(S.scroller||Me)[0],l=Se.core.getCache(he),ve=N(he),me="pinType"in S?"fixed"===S.pinType:ve||"fixed"===O(he,"pinType"),be=[S.onEnter,S.onLeave,S.onEnterBack,S.onLeaveBack],xe=ge&&S.toggleActions.split(" "),c="markers"in S?S.markers:st.markers,ye=ve?0:parseFloat(ta(he)["border"+re.p2+tt])||0,we=this,u=S.onRefreshInit&&function(){return S.onRefreshInit(we)},Ce=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=O(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Me["inner"+o]:e["client"+o])||0}}(he,ve,re),Te=function _getOffsetsFunc(e,t){return!t||~Fe.indexOf(e)?Q(e):function(){return pt}}(he,ve),Oe=0;we.media=Ve,ce*=45,we.scroller=he,we.scroll=P(he,re),k=we.scroll(),we.vars=S,M=M||S.animation,"refreshPriority"in S&&(Re=1),l.tweenScroll=l.tweenScroll||{top:pb(he,ot),left:pb(he,nt)},we.tweenTo=d=l.tweenScroll[re.p],M&&(M.vars.lazy=!1,M._initted||!1!==M.vars.immediateRender&&!1!==S.immediateRender&&M.render(0,!0,!0),we.animation=M.pause(),M.scrollTrigger=we,(o=X(a)&&a)&&(K=Se.to(M,{ease:"power3",duration:o,onComplete:function onComplete(){return s&&s(we)}})),b=0,i=i||M.vars.id),lt.push(we),pe&&(Y(pe)&&!pe.push||(pe={snapTo:pe}),"scrollBehavior"in Pe.style&&Se.set(ve?[Pe,_e]:he,{scrollBehavior:"auto"}),f=W(pe.snapTo)?pe.snapTo:"labels"===pe.snapTo?function _getClosestLabel(t){return function(e){return Se.utils.snap(ya(t),e)}}(M):"labelsDirectional"===pe.snapTo?function _getLabelAtDirection(o){return function(e,t){var r,n=ya(o);if(n.sort(function(e,t){return e-t}),0<t.direction){for(e-=1e-4,r=0;r<n.length;r++)if(n[r]>=e)return n[r];return n.pop()}for(r=n.length,e+=1e-4;r--;)if(n[r]<=e)return n[r];return n[0]}}(M):Se.utils.snap(pe.snapTo),p=pe.duration||{min:.1,max:2},p=Y(p)?Ne(p.min,p.max):Ne(p,p),y=Se.delayedCall(pe.delay||o/2||.1,function(){if(Math.abs(we.getVelocity())<10&&!Ie&&Oe!==we.scroll()){var e=M&&!ge?M.totalProgress():we.progress,t=(e-x)/(He()-Ae)*1e3||0,r=Se.utils.clamp(-we.progress,1-we.progress,Je(t/2)*t/.185),n=we.progress+(!1===pe.inertia?0:r),o=Ne(0,1,f(n,we)),i=we.scroll(),a=Math.round(E+o*z),s=pe.onStart,l=pe.onInterrupt,c=pe.onComplete,u=d.tween;if(i<=A&&E<=i&&a!==i){if(u&&!u._initted&&u.data<=Math.abs(a-i))return;!1===pe.inertia&&(r=o-we.progress),d(a,{duration:p(Je(.185*Math.max(Je(n-e),Je(o-e))/t/.05||0)),ease:pe.ease||"power3",data:Math.abs(a-i),onInterrupt:function onInterrupt(){return y.restart(!0)&&l&&l(we)},onComplete:function onComplete(){Oe=we.scroll(),b=x=M&&!ge?M.totalProgress():we.progress,ue&&ue(we),c&&c(we)}},i,r*z,a-i-r*z),s&&s(we,d.tween)}}else we.isActive&&y.restart(!0)}).pause()),i&&(ct[i]=we),ie=we.trigger=Ee(ie||ae)[0],ae=!0===ae?ie:Ee(ae)[0],V(C)&&(C={targets:ie,className:C}),ae&&(!1===se||se===et||(se=!(!se&&"flex"===ta(ae.parentNode).display)&&Ge),we.pin=ae,!1!==S.force3D&&Se.set(ae,{force3D:!0}),(n=Se.core.getCache(ae)).spacer?D=n.pinState:(n.spacer=j=ke.createElement("div"),j.setAttribute("class","pin-spacer"+(i?" pin-spacer-"+i:"")),n.pinState=D=jb(ae)),we.spacer=j=n.spacer,r=ta(ae),h=r[se+re.os2],U=Se.getProperty(ae),g=Se.quickSetter(ae,re.a,rt),gb(ae,j,r),H=jb(ae)),c&&(e=Y(c)?va(c,at):at,L=Ia("scroller-start",i,he,re,e,0),R=Ia("scroller-end",i,he,re,e,0,L),t=L["offset"+re.op.d2],B=Ia("start",i,he,re,e,t),I=Ia("end",i,he,re,e,t),me||Fe.length&&!0===O(he,"fixedMarkers")||(function _makePositionable(e){var t=ta(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(ve?Pe:he),Se.set([L,R],{force3D:!0}),v=Se.quickSetter(L,re.a,rt),m=Se.quickSetter(R,re.a,rt))),we.revert=function(e){var t=!1!==e||!we.enabled,r=Be;t!==we.isReverted&&(t&&(we.scroll.rec||(we.scroll.rec=we.scroll()),ee=Math.max(we.scroll(),we.scroll.rec||0),G=we.progress,te=M&&M.progress()),B&&[B,I,L,R].forEach(function(e){return e.style.display=t?"none":"block"}),t&&(Be=1),we.update(t),Be=r,ae&&(t?function _swapPinOut(e,t,r){if(ft(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}(ae,j,D):de&&we.isActive||gb(ae,j,ta(ae),$)),we.isReverted=t)},we.refresh=function(e,t){if(!Be&&we.enabled||t)if(ae&&e&&je)Ca(ScrollTrigger,"scrollEnd",Va);else{Be=1,K&&K.pause(),le&&M&&M.progress(0).invalidate(),we.isReverted||we.revert();for(var r,n,o,i,a,s,l,c,u,f,p=Ce(),d=Te(),g=T(he,re),h=0,v=0,m=S.end,b=S.endTrigger||ie,x=S.start||(0!==S.start&&ie?ae?"0 0":"0 100%":0),y=S.pinnedContainer&&Ee(S.pinnedContainer)[0],w=ie&&Math.max(0,lt.indexOf(we))||0,C=w;C--;)(s=lt[C]).end||s.refresh(0,1)||(Be=1),!(l=s.pin)||l!==ie&&l!==ae||s.isReverted||((f=f||[]).unshift(s),s.revert());for(E=mb(x,ie,p,re,we.scroll(),B,L,we,d,ye,me,g)||(ae?-.001:0),W(m)&&(m=m(we)),V(m)&&!m.indexOf("+=")&&(~m.indexOf(" ")?m=(V(x)?x.split(" ")[0]:"")+m:(h=Ha(m.substr(2),p),m=V(x)?x:E+h,b=ie)),A=Math.max(E,mb(m||(b?"100% 0":g),b,p,re,we.scroll()+h,I,R,we,d,ye,me,g))||-.001,z=A-E||(E-=.01)&&.001,h=0,C=w;C--;)(l=(s=lt[C]).pin)&&s.start-s._pinPush<E&&(r=s.end-s.start,l!==ie&&l!==y||(h+=r),l===ae&&(v+=r));if(E+=h,A+=h,we._pinPush=v,B&&h&&((r={})[re.a]="+="+h,y&&(r[re.p]="-="+we.scroll()),Se.set([B,I],r)),ae)r=ta(ae),i=re===ot,o=we.scroll(),Z=parseFloat(U(re.a))+v,!g&&1<A&&((ve?Pe:he).style["overflow-"+re.a]="scroll"),gb(ae,j,r),H=jb(ae),n=it(ae,!0),c=me&&P(he,i?nt:ot)(),se&&(($=[se+re.os2,z+v+rt]).t=j,(C=se===Ge?xa(ae,re)+z+v:0)&&$.push(re.d,C+rt),ft($),me&&we.scroll(ee)),me&&((a={top:n.top+(i?o-E:c)+rt,left:n.left+(i?c:o-E)+rt,boxSizing:"border-box",position:"fixed"})[Xe]=a.maxWidth=Math.ceil(n.width)+rt,a[Ze]=a.maxHeight=Math.ceil(n.height)+rt,a[et]=a[et+Ke]=a[et+qe]=a[et+Qe]=a[et+$e]="0",a[Ge]=r[Ge],a[Ge+Ke]=r[Ge+Ke],a[Ge+qe]=r[Ge+qe],a[Ge+Qe]=r[Ge+Qe],a[Ge+$e]=r[Ge+$e],F=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(D,a,de)),M?(u=M._initted,ze(1),M.render(M.duration(),!0,!0),q=U(re.a)-Z+z+v,z!==q&&F.splice(F.length-2,2),M.render(0,!0,!0),u||M.invalidate(),ze(0)):q=z;else if(ie&&we.scroll())for(n=ie.parentNode;n&&n!==Pe;)n._pinOffset&&(E-=n._pinOffset,A-=n._pinOffset),n=n.parentNode;f&&f.forEach(function(e){return e.revert(!1)}),we.start=E,we.end=A,(k=_=we.scroll())<ee&&we.scroll(ee),we.revert(!1),Be=0,M&&ge&&M._initted&&M.progress()!==te&&M.progress(te,!0).render(M.time(),!0,!0),G!==we.progress&&(K&&M.totalProgress(G,!0),we.progress=G,we.update()),ae&&se&&(j._pinOffset=Math.round(we.progress*q)),oe&&oe(we)}},we.getVelocity=function(){return(we.scroll()-_)/(He()-Ae)*1e3||0},we.update=function(e,t){var r,n,o,i,a,s=we.scroll(),l=e?0:(s-E)/z,c=l<0?0:1<l?1:l||0,u=we.progress;if(t&&(_=k,k=s,pe&&(x=b,b=M&&!ge?M.totalProgress():c)),ce&&!c&&ae&&!Be&&!De&&je&&E<s+(s-_)/(He()-Ae)*ce&&(c=1e-4),c!==u&&we.enabled){if(i=(a=(r=we.isActive=!!c&&c<1)!=(!!u&&u<1))||!!c!=!!u,we.direction=u<c?1:-1,we.progress=c,ge||(!K||Be||De?M&&M.totalProgress(c,!!Be):(K.vars.totalProgress=c,K.invalidate().restart())),ae)if(e&&se&&(j.style[se+re.os2]=h),me){if(i){if(o=!e&&u<c&&s<A+1&&s+1>=T(he,re),de)if(e||!r&&!o)ob(ae,j);else{var f=it(ae,!0),p=s-E;ob(ae,Pe,f.top+(re===ot?p:0)+rt,f.left+(re===ot?0:p)+rt)}ft(r||o?F:H),q!==z&&c<1&&r||g(Z+(1!==c||o?0:q))}}else g(Z+q*c);!pe||d.tween||Be||De||y.restart(!0),C&&(a||fe&&c&&(c<1||!We))&&Ee(C.targets).forEach(function(e){return e.classList[r||fe?"add":"remove"](C.className)}),!w||ge||e||w(we),i&&!Be?(n=c&&!u?0:1===c?1:1===u?2:3,ge&&(o=!a&&"none"!==xe[n+1]&&xe[n+1]||xe[n],M&&("complete"===o||"reset"===o||o in M)&&("complete"===o?M.pause().totalProgress(1):"reset"===o?M.restart(!0).pause():"restart"===o?M.restart(!0):M[o]()),w&&w(we)),!a&&We||(ne&&a&&ne(we),be[n]&&be[n](we),fe&&(1===c?we.kill(!1,1):be[n]=0),a||be[n=1===c?1:3]&&be[n](we))):ge&&w&&!Be&&w(we)}m&&(v(s+(L._isFlipped?1:0)),m(s))},we.enable=function(e,t){we.enabled||(we.enabled=!0,Ca(he,"resize",Oa),Ca(he,"scroll",Na),u&&Ca(ScrollTrigger,"refreshInit",u),!1!==e&&(we.progress=G=0,k=_=Oe=we.scroll()),!1!==t&&we.refresh())},we.getTween=function(e){return e&&d?d.tween:K},we.disable=function(e,t){if(we.enabled&&(!1!==e&&we.revert(),we.enabled=we.isActive=!1,t||K&&K.pause(),ee=0,n&&(n.uncache=1),u&&Da(ScrollTrigger,"refreshInit",u),y&&(y.pause(),d.tween&&d.tween.kill()&&(d.tween=0)),!ve)){for(var r=lt.length;r--;)if(lt[r].scroller===he&&lt[r]!==we)return;Da(he,"resize",Oa),Da(he,"scroll",Na)}},we.kill=function(e,t){we.disable(e,t),i&&delete ct[i];var r=lt.indexOf(we);lt.splice(r,1),r===Le&&0<ut&&Le--,r=0,lt.forEach(function(e){return e.scroller===we.scroller&&(r=1)}),r||(we.scroll.rec=0),M&&(M.scrollTrigger=null,e&&M.render(-1),t||M.kill()),B&&[B,I,L,R].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ae&&(n&&(n.uncache=1),r=0,lt.forEach(function(e){return e.pin===ae&&r++}),r||(n.spacer=0))},we.enable(!1,!1),M&&M.add&&!z?Se.delayedCall(.01,function(){return E||A||we.refresh()})&&(z=.01)&&(E=A=0):we.refresh()}else this.update=this.refresh=this.kill=J},ScrollTrigger.register=function register(e){if(!i&&(Se=e||M(),L()&&window.document&&(Me=window,ke=document,_e=ke.documentElement,Pe=ke.body),Se&&(Ee=Se.utils.toArray,Ne=Se.utils.clamp,ze=Se.core.suppressOverwrites||J,Se.core.globals("ScrollTrigger",ScrollTrigger),Pe))){s=Me.requestAnimationFrame||function(e){return setTimeout(e,16)},Ca(Me,"wheel",Na),o=[Me,ke,_e,Pe],Ca(ke,"scroll",Na);var t,r=Pe.style,n=r.borderTop;r.borderTop="1px solid #000",t=it(Pe),ot.m=Math.round(t.top+ot.sc())||0,nt.m=Math.round(t.left+nt.sc())||0,n?r.borderTop=n:r.removeProperty("border-top"),c=setInterval(Ma,200),Se.delayedCall(.5,function(){return De=0}),Ca(ke,"touchcancel",J),Ca(Pe,"touchstart",J),Ba(Ca,ke,"pointerdown,touchstart,mousedown",function(){return Ie=1}),Ba(Ca,ke,"pointerup,touchend,mouseup",function(){return Ie=0}),u=Se.utils.checkPrefix("transform"),j.push(u),i=He(),a=Se.delayedCall(.2,z).pause(),d=[ke,"visibilitychange",function(){var e=Me.innerWidth,t=Me.innerHeight;ke.hidden?(f=e,p=t):f===e&&p===t||Oa()},ke,"DOMContentLoaded",z,Me,"load",function(){return je||z()},Me,"resize",Oa],U(Ca)}return i},ScrollTrigger.defaults=function defaults(e){for(var t in e)st[t]=e[t]},ScrollTrigger.kill=function kill(){Ue=0,lt.slice(0).forEach(function(e){return e.kill(1)})},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(We=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(Ma,t),"autoRefreshEvents"in e&&(U(Da)||U(Ca,e.autoRefreshEvents||"none"),r=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=Ee(e)[0],n=v.indexOf(r),o=N(r);~n&&v.splice(n,o?6:2),o?Fe.unshift(Me,t,Pe,t,_e,t):Fe.unshift(r,t)},ScrollTrigger.matchMedia=function matchMedia(e){var t,r,n,o,i;for(r in e)n=E.indexOf(r),o=e[r],"all"===(Ve=r)?o():(t=Me.matchMedia(r))&&(t.matches&&(i=o()),~n?(E[n+1]=$(E[n+1],o),E[n+2]=$(E[n+2],i)):(n=E.length,E.push(r,o,i),t.addListener?t.addListener(Ua):t.addEventListener("change",Ua)),E[n+3]=t.matches),Ve=0;return E},ScrollTrigger.clearMatchMedia=function clearMatchMedia(e){e||(E.length=0),0<=(e=E.indexOf(e))&&E.splice(e,4)},ScrollTrigger);function ScrollTrigger(e,t){i||ScrollTrigger.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}ee.version="3.7.1",ee.saveStyles=function(e){return e?Ee(e).forEach(function(e){if(e&&e.style){var t=B.indexOf(e);0<=t&&B.splice(t,5),B.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),Ve)}}):B},ee.revert=function(e,t){return R(!e,t)},ee.create=function(e,t){return new ee(e,t)},ee.refresh=function(e){return e?Oa():z(!0)},ee.update=F,ee.maxScroll=function(e,t){return T(e,t?nt:ot)},ee.getScrollFunc=function(e,t){return P(Ee(e)[0],t?nt:ot)},ee.getById=function(e){return ct[e]},ee.getAll=function(){return lt.slice(0)},ee.isScrolling=function(){return!!je},ee.addEventListener=function(e,t){var r=k[e]||(k[e]=[]);~r.indexOf(t)||r.push(t)},ee.removeEventListener=function(e,t){var r=k[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},ee.batch=function(e,t){function Ji(e,t){var r=[],n=[],o=Se.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&W(t[r])&&"onRefreshInit"!==r?Ji(0,t[r]):t[r];return W(a)&&(a=a(),Ca(ee,"refresh",function(){return a=t.batchMax()})),Ee(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(ee.create(t))}),n},ee.sort=function(e){return lt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},M()&&Se.registerPlugin(ee),e.ScrollTrigger=ee,e.default=ee;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

console.log("SCROLLTRIGGER 3.7.1 ..... loaded");


// Locomotive 4.1.1
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).LocomotiveScroll=e()}(this,(function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?c(t):e}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=l(t);if(e){var n=l(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return h(this,i)}}function u(t,e,i){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var s=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(s){var n=Object.getOwnPropertyDescriptor(s,e);return n.get?n.get.call(i):n.value}})(t,e,i||t)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],s=!0,n=!1,o=void 0;try{for(var r,l=t[Symbol.iterator]();!(s=(r=l.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(t){n=!0,o=t}finally{try{s||null==l.return||l.return()}finally{if(n)throw o}}return i}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var y={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,initPosition:{x:0,y:0},direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},b=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetWidth,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),"horizontal"===this.direction?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return i(e,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var t=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame((function(){t.resize(),t.resizeTick=!1})))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var t=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",t!=this.context)("desktop"==t?this.smooth:this[t].smooth)!=("desktop"==this.context?this.smooth:this[this.context].smooth)&&window.location.reload()}}},{key:"initEvents",value:function(){var t=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach((function(e){e.addEventListener("click",t.setScrollTo,!1)}))}},{key:"setScrollTo",value:function(t){t.preventDefault(),this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name,"-href"))||t.currentTarget.getAttribute("href"),{offset:t.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(t){var e=this,i=this.instance.scroll.y,s=i+this.windowHeight,n=this.instance.scroll.x,o=n+this.windowWidth;Object.entries(this.els).forEach((function(r){var l=f(r,2),a=l[0],c=l[1];if(!c||c.inView&&!t||("horizontal"===e.direction?o>=c.left&&n<c.right&&e.setInView(c,a):s>=c.top&&i<c.bottom&&e.setInView(c,a)),c&&c.inView)if("horizontal"===e.direction){var h=c.right-c.left;c.progress=(e.instance.scroll.x-(c.left-e.windowWidth))/(h+e.windowWidth),(o<c.left||n>c.right)&&e.setOutOfView(c,a)}else{var d=c.bottom-c.top;c.progress=(e.instance.scroll.y-(c.top-e.windowHeight))/(d+e.windowHeight),(s<c.top||i>c.bottom)&&e.setOutOfView(c,a)}})),this.hasScrollTicking=!1}},{key:"setInView",value:function(t,e){this.els[e].inView=!0,t.el.classList.add(t.class),this.currentElements[e]=t,t.call&&this.hasCallEventSet&&(this.dispatchCall(t,"enter"),t.repeat||(this.els[e].call=!1))}},{key:"setOutOfView",value:function(t,e){var i=this;this.els[e].inView=!1,Object.keys(this.currentElements).forEach((function(t){t===e&&delete i.currentElements[t]})),t.call&&this.hasCallEventSet&&this.dispatchCall(t,"exit"),t.repeat&&t.el.classList.remove(t.class)}},{key:"dispatchCall",value:function(t,e){this.callWay=e,this.callValue=t.call.split(",").map((function(t){return t.trim()})),this.callObj=t,1==this.callValue.length&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var t=new Event(this.namespace+"scroll");this.el.dispatchEvent(t)}},{key:"setEvents",value:function(t,e){this.listeners[t]||(this.listeners[t]=[]);var i=this.listeners[t];i.push(e),1===i.length&&this.el.addEventListener(this.namespace+t,this.checkEvent,!1),"call"===t&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(t,e){if(this.listeners[t]){var i=this.listeners[t],s=i.indexOf(e);s<0||(i.splice(s,1),0===i.index&&this.el.removeEventListener(this.namespace+t,this.checkEvent,!1))}}},{key:"checkEvent",value:function(t){var e=this,i=t.type.replace(this.namespace,""),s=this.listeners[i];s&&0!==s.length&&s.forEach((function(t){switch(i){case"scroll":return t(e.instance);case"call":return t(e.callValue,e.callWay,e.callObj);default:return t()}}))}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(t,e){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var t=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach((function(e){t.el.removeEventListener(t.namespace+e,t.checkEvent,!1)})),this.listeners={},this.scrollToEls.forEach((function(e){e.removeEventListener("click",t.setScrollTo,!1)})),this.html.classList.remove(this.initClass)}}]),e}(),g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function w(t,e){return t(e={exports:{}},e.exports),e.exports}var x=w((function(t,e){t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var i,s=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:s.prototype.scroll||l,scrollIntoView:s.prototype.scrollIntoView},o=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,r=(i=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?p.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},s.prototype.scroll=s.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;p.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},s.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},s.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var i=u(this),s=i.getBoundingClientRect(),o=this.getBoundingClientRect();i!==e.body?(p.call(this,i,i.scrollLeft+o.left-s.left,i.scrollTop+o.top-s.top),"fixed"!==t.getComputedStyle(i).position&&t.scrollBy({left:s.left,top:s.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+r<t.scrollHeight:"X"===e?t.clientWidth+r<t.scrollWidth:void 0}function h(e,i){var s=t.getComputedStyle(e,null)["overflow"+i];return"auto"===s||"scroll"===s}function d(t){var e=c(t,"Y")&&h(t,"Y"),i=c(t,"X")&&h(t,"X");return e||i}function u(t){for(;t!==e.body&&!1===d(t);)t=t.parentNode||t.host;return t}function f(e){var i,s,n,r,l=(o()-e.startTime)/468;r=l=l>1?1:l,i=.5*(1-Math.cos(Math.PI*r)),s=e.startX+(e.x-e.startX)*i,n=e.startY+(e.y-e.startY)*i,e.method.call(e.scrollable,s,n),s===e.x&&n===e.y||t.requestAnimationFrame(f.bind(t,e))}function p(i,s,r){var a,c,h,d,u=o();i===e.body?(a=t,c=t.scrollX||t.pageXOffset,h=t.scrollY||t.pageYOffset,d=n.scroll):(a=i,c=i.scrollLeft,h=i.scrollTop,d=l),f({scrollable:a,method:d,startTime:u,startX:c,startY:h,x:s,y:r})}}}})),S=(x.polyfill,function(e){r(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),(e=s.call(this,i)).resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",e.checkScroll,!1),void 0===window.smoothscrollPolyfill&&(window.smoothscrollPolyfill=x,window.smoothscrollPolyfill.polyfill()),e}return i(n,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),u(l(n.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var t=this;u(l(n.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame((function(){t.detectElements()})),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var t=this;this.els={},this.el.querySelectorAll("[data-"+this.name+"]").forEach((function(e,i){e.getBoundingClientRect();var s,n,o,r=e.dataset[t.name+"Class"]||t.class,l="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:i,a="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,c=e.dataset[t.name+"Repeat"],h=e.dataset[t.name+"Call"],d=e.dataset[t.name+"Target"],u=(o=void 0!==d?document.querySelector("".concat(d)):e).getBoundingClientRect();s=u.top+t.instance.scroll.y,n=u.left+t.instance.scroll.x;var f=s+o.offsetHeight,p=n+o.offsetWidth;c="false"!=c&&(null!=c||t.repeat);var m=t.getRelativeOffset(a),v={el:e,targetEl:o,id:l,class:r,top:s+=m[0],bottom:f-=m[1],left:n,right:p,offset:a,progress:0,repeat:c,inView:!1,call:h};t.els[l]=v,e.classList.contains(r)&&t.setInView(t.els[l],l)}))}},{key:"updateElements",value:function(){var t=this;Object.entries(this.els).forEach((function(e){var i=f(e,2),s=i[0],n=i[1],o=n.targetEl.getBoundingClientRect().top+t.instance.scroll.y,r=o+n.targetEl.offsetHeight,l=t.getRelativeOffset(n.offset);t.els[s].top=o+l[0],t.els[s].bottom=r-l[1]})),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(t){var e=[0,0];if(t)for(var i=0;i<t.length;i++)"string"==typeof t[i]?t[i].includes("%")?e[i]=parseInt(t[i].replace("%","")*this.windowHeight/100):e[i]=parseInt(t[i]):e[i]=t[i];return e}},{key:"scrollTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=parseInt(e.offset)||0,s=!!e.callback&&e.callback;if("string"==typeof t){if("top"===t)t=this.html;else if("bottom"===t)t=this.html.offsetHeight-window.innerHeight;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");i="number"!=typeof t?t.getBoundingClientRect().top+i+this.instance.scroll.y:t+i;var n=function(){return parseInt(window.pageYOffset)===parseInt(i)};if(s){if(n())return void s();var o=function t(){n()&&(window.removeEventListener("scroll",t),s())};window.addEventListener("scroll",o)}window.scrollTo({top:i,behavior:"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){u(l(n.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),n}(b)),k=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;function A(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var O=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(t){s[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,n=A(t),o=1;o<arguments.length;o++){for(var r in i=Object(arguments[o]))T.call(i,r)&&(n[r]=i[r]);if(k){s=k(i);for(var l=0;l<s.length;l++)E.call(i,s[l])&&(n[s[l]]=i[s[l]])}}return n};function D(){}D.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,r=s.length;o<r;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}};var C=D,L=w((function(t,e){(function(){(null!==e?e:this).Lethargy=function(){function t(t,e,i,s){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=s?s:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this)}return t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),e>0?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,s,n,o,r,l;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(s=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),l=s.reduce((function(t,e){return t+e})),o=i.reduce((function(t,e){return t+e})),r=l/s.length,n=o/i.length,Math.abs(r)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(g)})),M={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1},j=Object.prototype.toString,_=Object.prototype.hasOwnProperty;function B(t,e){return function(){return t.apply(e,arguments)}}var W=L.Lethargy,H="virtualscroll",R=V,P=37,Y=38,I=39,z=40,X=32;function V(t){!function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var i in t)_.call(t,i)&&"function"==typeof t[i]&&"[object Function]"==j.call(t[i])&&e.push(i);for(var s=0;s<e.length;s++){var n=e[s];t[n]=B(t[n],t)}}(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,t&&t.el&&(this.el=t.el,delete t.el),this.options=O({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},t),this.options.limitInertia&&(this._lethargy=new W),this._emitter=new C,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,void 0!==this.options.passive&&(this.listenerOptions={passive:this.options.passive})}function F(t,e,i){return(1-i)*t+i*e}function q(t){var e={};if(window.getComputedStyle){var i=getComputedStyle(t),s=i.transform||i.webkitTransform||i.mozTransform,n=s.match(/^matrix3d\((.+)\)$/);return n?(e.x=n?parseFloat(n[1].split(", ")[12]):0,e.y=n?parseFloat(n[1].split(", ")[13]):0):(n=s.match(/^matrix\((.+)\)$/),e.x=n?parseFloat(n[1].split(", ")[4]):0,e.y=n?parseFloat(n[1].split(", ")[5]):0),e}}function K(t){for(var e=[];t&&t!==document;t=t.parentNode)e.push(t);return e}V.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(H,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},V.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||!1!==this._lethargy.check(t)){var i=this._event;i.deltaX=t.wheelDeltaX||-1*t.deltaX,i.deltaY=t.wheelDeltaY||-1*t.deltaY,M.isFirefox&&1==t.deltaMode&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)}},V.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||!1!==this._lethargy.check(t)){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},V.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},V.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=this._event,s=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(s.pageX-this.touchStartX)*e.touchMultiplier,i.deltaY=(s.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=s.pageX,this.touchStartY=s.pageY,this._notify(t)},V.prototype._onKeyDown=function(t){var e=this._event;e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case P:case Y:e.deltaY=this.options.keyStep;break;case I:case z:e.deltaY=-this.options.keyStep;break;case t.shiftKey:e.deltaY=i;break;case X:e.deltaY=-i;break;default:return}this._notify(t)},V.prototype._bind=function(){M.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),M.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),M.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),M.hasPointer&&M.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},V.prototype._unbind=function(){M.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),M.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),M.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),M.hasPointer&&M.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},V.prototype.on=function(t,e){this._emitter.on(H,t,e);var i=this._emitter.e;i&&i[H]&&1===i[H].length&&this._bind()},V.prototype.off=function(t,e){this._emitter.off(H,t,e);var i=this._emitter.e;(!i[H]||i[H].length<=0)&&this._unbind()},V.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},V.prototype.destroy=function(){this._emitter.off(),this._unbind()};var N="function"==typeof Float32Array;function U(t,e){return 1-3*e+3*t}function $(t,e){return 3*e-6*t}function G(t){return 3*t}function J(t,e,i){return((U(e,i)*t+$(e,i))*t+G(e))*t}function Q(t,e,i){return 3*U(e,i)*t*t+2*$(e,i)*t+G(e)}function Z(t){return t}var tt=function(t,e,i,s){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===s)return Z;for(var n=N?new Float32Array(11):new Array(11),o=0;o<11;++o)n[o]=J(.1*o,t,i);function r(e){for(var s=0,o=1;10!==o&&n[o]<=e;++o)s+=.1;--o;var r=s+.1*((e-n[o])/(n[o+1]-n[o])),l=Q(r,t,i);return l>=.001?function(t,e,i,s){for(var n=0;n<4;++n){var o=Q(e,i,s);if(0===o)return e;e-=(J(e,i,s)-t)/o}return e}(e,r,t,i):0===l?r:function(t,e,i,s,n){var o,r,l=0;do{(o=J(r=e+(i-e)/2,s,n)-t)>0?i=r:e=r}while(Math.abs(o)>1e-7&&++l<10);return r}(e,s,s+.1,t,i)}return function(t){return 0===t?0:1===t?1:J(r(t),e,s)}},et=38,it=40,st=32,nt=9,ot=33,rt=34,lt=36,at=35,ct=function(e){r(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),(e=s.call(this,i)).inertia&&(e.lerp=.1*e.inertia),e.isScrolling=!1,e.isDraggingScrollbar=!1,e.isTicking=!1,e.hasScrollTicking=!1,e.parallaxElements={},e.stop=!1,e.scrollbarContainer=i.scrollbarContainer,e.checkKey=e.checkKey.bind(c(e)),window.addEventListener("keydown",e.checkKey,!1),e}return i(n,[{key:"init",value:function(){var t=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=o({delta:{x:this.initPosition.x,y:this.initPosition.y},scroll:{x:this.initPosition.x,y:this.initPosition.y}},this.instance),this.vs=new R({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on((function(e){t.stop||t.isDraggingScrollbar||requestAnimationFrame((function(){t.updateDelta(e),t.isScrolling||t.startScrolling()}))})),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),u(l(n.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,"horizontal"===this.direction){for(var t=0,e=this.el.children,i=0;i<e.length;i++)t+=e[i].offsetWidth;this.instance.limit.x=t-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(t){var e=this;if(this.stop)t.keyCode==nt&&requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0}));else{switch(t.keyCode){case nt:requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0,e.scrollTo(document.activeElement,{offset:-window.innerHeight/2})}));break;case et:this.instance.delta[this.directionAxis]-=240;break;case it:this.instance.delta[this.directionAxis]+=240;break;case ot:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case rt:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case lt:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case at:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case st:document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement||(t.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}}},{key:"checkScroll",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame((function(){return t.checkScroll()})),this.hasScrollTicking=!0),this.updateScroll();var i=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),s=Date.now()-this.startScrollTs;if(!this.animatingScroll&&s>100&&(i<.5&&0!=this.instance.delta[this.directionAxis]||i<.5&&0==this.instance.delta[this.directionAxis])&&this.stopScrolling(),Object.entries(this.sections).forEach((function(i){var s=f(i,2),n=(s[0],s[1]);n.persistent||t.instance.scroll[t.directionAxis]>n.offset[t.directionAxis]&&t.instance.scroll[t.directionAxis]<n.limit[t.directionAxis]?("horizontal"===t.direction?t.transform(n.el,-t.instance.scroll[t.directionAxis],0):t.transform(n.el,0,-t.instance.scroll[t.directionAxis]),n.inView||(n.inView=!0,n.el.style.opacity=1,n.el.style.pointerEvents="all",n.el.setAttribute("data-".concat(t.name,"-section-inview"),""))):((n.inView||e)&&(n.inView=!1,n.el.style.opacity=0,n.el.style.pointerEvents="none",n.el.removeAttribute("data-".concat(t.name,"-section-inview"))),t.transform(n.el,0,0))})),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var o=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];"horizontal"===this.direction?this.transform(this.scrollbarThumb,o,0):this.transform(this.scrollbarThumb,0,o)}u(l(n.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(t){var e,i=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;e="both"===i?t.deltaX+t.deltaY:"vertical"===i?t.deltaY:"horizontal"===i?t.deltaX:t.deltaY,this.instance.delta[this.directionAxis]-=e*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(t){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=F(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?"right"!==this.instance.direction&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&"left"!==this.instance.direction&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(t){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(t){this.isDraggingScrollbar=!1,this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(t){var e=this;this.isDraggingScrollbar&&requestAnimationFrame((function(){var i=100*(t.clientX-e.scrollbarBCR.left)/e.scrollbarWidth*e.instance.limit.x/100,s=100*(t.clientY-e.scrollbarBCR.top)/e.scrollbarHeight*e.instance.limit.y/100;s>0&&s<e.instance.limit.y&&(e.instance.delta.y=s),i>0&&i<e.instance.limit.x&&(e.instance.delta.x=i)}))}},{key:"addElements",value:function(){var t=this;this.els={},this.parallaxElements={},this.el.querySelectorAll("[data-".concat(this.name,"]")).forEach((function(e,i){var s,n,o,r=K(e),l=Object.entries(t.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(t){return r.includes(t.el)})),a=e.dataset[t.name+"Class"]||t.class,c="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"el"+i,h=e.dataset[t.name+"Repeat"],d=e.dataset[t.name+"Call"],u=e.dataset[t.name+"Position"],p=e.dataset[t.name+"Delay"],m=e.dataset[t.name+"Direction"],v="string"==typeof e.dataset[t.name+"Sticky"],y=!!e.dataset[t.name+"Speed"]&&parseFloat(e.dataset[t.name+"Speed"])/10,b="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,g=e.dataset[t.name+"Target"],w=(o=void 0!==g?document.querySelector("".concat(g)):e).getBoundingClientRect();null===l||l.inView?(s=w.top+t.instance.scroll.y-q(o).y,n=w.left+t.instance.scroll.x-q(o).x):(s=w.top-q(l.el).y-q(o).y,n=w.left-q(l.el).x-q(o).x);var x=s+o.offsetHeight,S=n+o.offsetWidth,k={x:(S-n)/2+n,y:(x-s)/2+s};if(v){var T=e.getBoundingClientRect(),E=T.top,A=T.left,O={x:A-n,y:E-s};s+=window.innerHeight,n+=window.innerWidth,x=E+o.offsetHeight-e.offsetHeight-O[t.directionAxis],k={x:((S=A+o.offsetWidth-e.offsetWidth-O[t.directionAxis])-n)/2+n,y:(x-s)/2+s}}h="false"!=h&&(null!=h||t.repeat);var D=[0,0];if(b)if("horizontal"===t.direction){for(var C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowWidth/100):D[C]=parseInt(b[C]):D[C]=b[C];n+=D[0],S-=D[1]}else{for(C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowHeight/100):D[C]=parseInt(b[C]):D[C]=b[C];s+=D[0],x-=D[1]}var L={el:e,id:c,class:a,section:l,top:s,middle:k,bottom:x,left:n,right:S,offset:b,progress:0,repeat:h,inView:!1,call:d,speed:y,delay:p,position:u,target:o,direction:m,sticky:v};t.els[c]=L,e.classList.contains(a)&&t.setInView(t.els[c],c),(!1!==y||v)&&(t.parallaxElements[c]=L)}))}},{key:"addSections",value:function(){var t=this;this.sections={};var e=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));0===e.length&&(e=[this.el]),e.forEach((function(e,i){var s="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"section"+i,n=e.getBoundingClientRect(),o={x:n.left-1.5*window.innerWidth-q(e).x,y:n.top-1.5*window.innerHeight-q(e).y},r={x:o.x+n.width+2*window.innerWidth,y:o.y+n.height+2*window.innerHeight},l="string"==typeof e.dataset[t.name+"Persistent"];e.setAttribute("data-scroll-section-id",s);var a={el:e,offset:o,limit:r,inView:!1,persistent:l,id:s};t.sections[s]=a}))}},{key:"transform",value:function(t,e,i,s){var n;if(s){var o=q(t),r=F(o.x,e,s),l=F(o.y,i,s);n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(r,",").concat(l,",0,1)")}else n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e,",").concat(i,",0,1)");t.style.webkitTransform=n,t.style.msTransform=n,t.style.transform=n}},{key:"transformElements",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=this.instance.scroll.x+this.windowWidth,n=this.instance.scroll.y+this.windowHeight,o={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach((function(r){var l=f(r,2),a=(l[0],l[1]),c=!1;if(t&&(c=0),a.inView||i)switch(a.position){case"top":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementTop":c=(n-a.top)*-a.speed;break;case"bottom":c=(e.instance.limit[e.directionAxis]-n+e.windowHeight)*a.speed;break;case"left":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementLeft":c=(s-a.left)*-a.speed;break;case"right":c=(e.instance.limit[e.directionAxis]-s+e.windowHeight)*a.speed;break;default:c=(o[e.directionAxis]-a.middle[e.directionAxis])*-a.speed}a.sticky&&(c=a.inView?"horizontal"===e.direction?e.instance.scroll.x-a.left+window.innerWidth:e.instance.scroll.y-a.top+window.innerHeight:"horizontal"===e.direction?e.instance.scroll.x<a.left-window.innerWidth&&e.instance.scroll.x<a.left-window.innerWidth/2?0:e.instance.scroll.x>a.right&&e.instance.scroll.x>a.right+100&&a.right-a.left+window.innerWidth:e.instance.scroll.y<a.top-window.innerHeight&&e.instance.scroll.y<a.top-window.innerHeight/2?0:e.instance.scroll.y>a.bottom&&e.instance.scroll.y>a.bottom+100&&a.bottom-a.top+window.innerHeight),!1!==c&&("horizontal"===a.direction||"horizontal"===e.direction&&"vertical"!==a.direction?e.transform(a.el,c,0,!t&&a.delay):e.transform(a.el,0,c,!t&&a.delay))}))}},{key:"scrollTo",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=parseInt(i.offset)||0,n=isNaN(parseInt(i.duration))?1e3:parseInt(i.duration),o=i.easing||[.25,0,.35,1],r=!!i.disableLerp,l=!!i.callback&&i.callback;if(o=tt.apply(void 0,p(o)),"string"==typeof t){if("top"===t)t=0;else if("bottom"===t)t=this.instance.limit.y;else if("left"===t)t=0;else if("right"===t)t=this.instance.limit.x;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");if("number"!=typeof t){var a=K(t).includes(this.el);if(!a)return;var c=t.getBoundingClientRect(),h=c.top,d=c.left,u=K(t),m=u.find((function(t){return Object.entries(e.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(e){return e.el==t}))})),v=0;v=m?q(m)[this.directionAxis]:-this.instance.scroll[this.directionAxis],s="horizontal"===this.direction?d+s-v:h+s-v}else s=t+s;var y=parseFloat(this.instance.delta[this.directionAxis]),b=Math.max(0,Math.min(s,this.instance.limit[this.directionAxis])),g=b-y,w=function(t){r?"horizontal"===e.direction?e.setScroll(y+g*t,e.instance.delta.y):e.setScroll(e.instance.delta.x,y+g*t):e.instance.delta[e.directionAxis]=y+g*t};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var x=Date.now(),S=function t(){var i=(Date.now()-x)/n;i>1?(w(1),e.animatingScroll=!1,0==n&&e.update(),l&&l()):(e.scrollToRaf=requestAnimationFrame(t),w(o(i)))};S()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(t,e){this.instance=o(o({},this.instance),{},{scroll:{x:t,y:e},delta:{x:t,y:e},speed:0})}},{key:"destroy",value:function(){u(l(n.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),n}(b);return function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.options=i,Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.smooth||"horizontal"!=this.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),this.tablet.smooth||"horizontal"!=this.tablet.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),this.smartphone.smooth||"horizontal"!=this.smartphone.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return i(e,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new ct(this.options):this.scroll=new S(this.options),this.scroll.init(),window.location.hash){var t=window.location.hash.slice(1,window.location.hash.length),e=document.getElementById(t);e&&this.scroll.scrollTo(e)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(t,e){this.scroll.scrollTo(t,e)}},{key:"setScroll",value:function(t,e){this.scroll.setScroll(t,e)}},{key:"on",value:function(t,e){this.scroll.setEvents(t,e)}},{key:"off",value:function(t,e){this.scroll.unsetEvents(t,e)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),e}()}));

console.log("LOCOMOTIVE 4.1.1 ..... loaded");

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

console.log("imagesLoaded 4.1.4 ..... loaded");

/**
 Barba 2.9.7

 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).barba=n()}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));
//# sourceMappingURL=barba.umd.js.map

// --- BARBA Prefetch 2.1.10
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t=t||self).barbaPrefetch=i()}(this,function(){var t="2.1.10",i=window.requestIdleCallback||function(t){var i=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-i))}})},1)};return new(function(){function n(){this.name="@barba/prefetch",this.version=t,this.toPrefetch=new Set}var e=n.prototype;return e.install=function(t,i){var n=void 0===i?{}:i,e=n.root,o=void 0===e?document.body:e,r=n.timeout,s=void 0===r?2e3:r;this.logger=new t.Logger(this.name),this.logger.info(this.version),this.barba=t,this.root=o,this.timeout=s},e.init=function(){var t=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(i){i.forEach(function(i){if(i.isIntersecting){var n=i.target,e=t.barba.dom.getHref(n);t.toPrefetch.has(e)&&(t.observer.unobserve(n),t.barba.cache.has(e)?t.barba.cache.update(e,{action:"prefetch"}):t.barba.cache.set(e,t.barba.request(e,t.barba.timeout,t.barba.onRequestError.bind(t.barba,"barba")).catch(function(i){t.logger.error(i)}),"prefetch"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},e.observe=function(){var t=this;i(function(){t.root.querySelectorAll("a").forEach(function(i){var n=i,e=t.barba.dom.getHref(n);t.barba.cache.has(e)||t.barba.prevent.checkHref(e)||t.barba.prevent.checkLink(n,{},e)||(t.observer.observe(i),t.toPrefetch.add(e))})},{timeout:this.timeout})},n}())});
//# sourceMappingURL=barba-prefetch.umd.js.map

console.log("BARBA 2.9.7 ..... loaded");



/*!
 * FilePondPluginFileEncode 2.1.10
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
/*
function(global,factory){"object"==typeof exports&&"undefined"!=typeof module?module.exports=factory():"function"==typeof define&&define.amd?define(factory):(global=global||self).FilePondPluginFileEncode=factory()}(this,(function(){"use strict";var DataURIWorker=function DataURIWorker(){self.onmessage=function(e){convert(e.data.message,(function(response){self.postMessage({id:e.data.id,message:response})}))};var convert=function convert(options,cb){var file=options.file,reader=new FileReader;reader.onloadend=function(){cb(reader.result.replace("data:","").replace(/^.+,/,""))},reader.readAsDataURL(file)}},plugin=function plugin(_ref){var addFilter=_ref.addFilter,utils=_ref.utils,Type=utils.Type,createWorker=utils.createWorker,createRoute=utils.createRoute,isFile=utils.isFile,encode=function encode(_ref2){var name=_ref2.name,file=_ref2.file;return new Promise((function(resolve){var worker=createWorker(DataURIWorker);worker.post({file:file},(function(data){resolve({name:name,data:data}),worker.terminate()}))}))},base64Cache=[];return addFilter("DID_CREATE_ITEM",(function(item,_ref3){var query;(0,_ref3.query)("GET_ALLOW_FILE_ENCODE")&&(item.extend("getFileEncodeBase64String",(function(){return base64Cache[item.id]&&base64Cache[item.id].data})),item.extend("getFileEncodeDataURL",(function(){return"data:".concat(item.fileType,";base64,").concat(base64Cache[item.id].data)})))})),addFilter("SHOULD_PREPARE_OUTPUT",(function(shouldPrepareOutput,_ref4){var query=_ref4.query;return new Promise((function(resolve){resolve(query("GET_ALLOW_FILE_ENCODE"))}))})),addFilter("COMPLETE_PREPARE_OUTPUT",(function(file,_ref5){var item=_ref5.item,query=_ref5.query;return new Promise((function(resolve){if(!query("GET_ALLOW_FILE_ENCODE")||!isFile(file)&&!Array.isArray(file))return resolve(file);base64Cache[item.id]={metadata:item.getMetadata(),data:null},Promise.all((file instanceof Blob?[{name:null,file:file}]:file).map(encode)).then((function(dataItems){base64Cache[item.id].data=file instanceof Blob?dataItems[0].data:dataItems,resolve(file)}))}))})),addFilter("CREATE_VIEW",(function(viewAPI){var is=viewAPI.is,view=viewAPI.view,query=viewAPI.query;is("file-wrapper")&&query("GET_ALLOW_FILE_ENCODE")&&view.registerWriter(createRoute({DID_PREPARE_OUTPUT:function DID_PREPARE_OUTPUT(_ref6){var root=_ref6.root,action=_ref6.action;if(!query("IS_ASYNC")){var item=query("GET_ITEM",action.id);if(item){var cache=base64Cache[item.id],metadata=cache.metadata,data=cache.data,value=JSON.stringify({id:item.id,name:item.file.name,type:item.file.type,size:item.file.size,metadata:metadata,data:data});root.ref.data?root.ref.data.value=value:root.dispatch("DID_DEFINE_VALUE",{id:item.id,value:value})}}},DID_REMOVE_ITEM:function DID_REMOVE_ITEM(_ref7){var action=_ref7.action,item=query("GET_ITEM",action.id);item&&delete base64Cache[item.id]}}))})),{options:{allowFileEncode:[!0,Type.BOOLEAN]}}},isBrowser;return"undefined"!=typeof window&&void 0!==window.document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin})),plugin})),
console.log("FILEPOND filee ncode ..... loaded");
*/
/*!
 * FilePondPluginFileValidateSize 2.2.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
/*
function(global,factory){"object"==typeof exports&&"undefined"!=typeof module?module.exports=factory():"function"==typeof define&&define.amd?define(factory):(global=global||self).FilePondPluginFileValidateSize=factory()}(this,(function(){"use strict";var plugin=function plugin(_ref){var addFilter=_ref.addFilter,utils=_ref.utils,Type=utils.Type,replaceInString=utils.replaceInString,toNaturalFileSize=utils.toNaturalFileSize;return addFilter("ALLOW_HOPPER_ITEM",(function(file,_ref2){var query=_ref2.query;if(!query("GET_ALLOW_FILE_SIZE_VALIDATION"))return!0;var sizeMax=query("GET_MAX_FILE_SIZE");if(null!==sizeMax&&file.size>=sizeMax)return!1;var sizeMin=query("GET_MIN_FILE_SIZE");return!(null!==sizeMin&&file.size<=sizeMin)})),addFilter("LOAD_FILE",(function(file,_ref3){var query=_ref3.query;return new Promise((function(resolve,reject){if(!query("GET_ALLOW_FILE_SIZE_VALIDATION"))return resolve(file);var fileFilter=query("GET_FILE_VALIDATE_SIZE_FILTER");if(fileFilter&&!fileFilter(file))return resolve(file);var sizeMax=query("GET_MAX_FILE_SIZE");if(null!==sizeMax&&file.size>=sizeMax)reject({status:{main:query("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),sub:replaceInString(query("GET_LABEL_MAX_FILE_SIZE"),{filesize:toNaturalFileSize(sizeMax,".",query("GET_FILE_SIZE_BASE"))})}});else{var sizeMin=query("GET_MIN_FILE_SIZE");if(null!==sizeMin&&file.size<=sizeMin)reject({status:{main:query("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),sub:replaceInString(query("GET_LABEL_MIN_FILE_SIZE"),{filesize:toNaturalFileSize(sizeMin,".",query("GET_FILE_SIZE_BASE"))})}});else{var totalSizeMax=query("GET_MAX_TOTAL_FILE_SIZE"),currentTotalSize;if(null!==totalSizeMax)if(query("GET_ACTIVE_ITEMS").reduce((function(total,item){return total+item.fileSize}),0)>totalSizeMax)return void reject({status:{main:query("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),sub:replaceInString(query("GET_LABEL_MAX_TOTAL_FILE_SIZE"),{filesize:toNaturalFileSize(totalSizeMax)})}});resolve(file)}}}))})),{options:{allowFileSizeValidation:[!0,Type.BOOLEAN],maxFileSize:[null,Type.INT],minFileSize:[null,Type.INT],maxTotalFileSize:[null,Type.INT],fileValidateSizeFilter:[null,Type.FUNCTION],labelMinFileSizeExceeded:["File is too small",Type.STRING],labelMinFileSize:["Minimum file size is {filesize}",Type.STRING],labelMaxFileSizeExceeded:["File is too large",Type.STRING],labelMaxFileSize:["Maximum file size is {filesize}",Type.STRING],labelMaxTotalFileSizeExceeded:["Maximum total size exceeded",Type.STRING],labelMaxTotalFileSize:["Maximum total file size is {filesize}",Type.STRING]}}},isBrowser;return"undefined"!=typeof window&&void 0!==window.document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin})),plugin})),
console.log("FILEPOND filee validate size ..... loaded");

/*!
 * FilePondPluginFileValidateType 1.2.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
/*
function(global,factory){"object"==typeof exports&&"undefined"!=typeof module?module.exports=factory():"function"==typeof define&&define.amd?define(factory):(global=global||self).FilePondPluginFileValidateType=factory()}(this,(function(){"use strict";var plugin=function plugin(_ref){var addFilter=_ref.addFilter,utils=_ref.utils,Type=utils.Type,isString=utils.isString,replaceInString=utils.replaceInString,guesstimateMimeType=utils.guesstimateMimeType,getExtensionFromFilename=utils.getExtensionFromFilename,getFilenameFromURL=utils.getFilenameFromURL,mimeTypeMatchesWildCard=function mimeTypeMatchesWildCard(mimeType,wildcard){var mimeTypeGroup,wildcardGroup;return(/^[^/]+/.exec(mimeType)||[]).pop()===wildcard.slice(0,-2)},isValidMimeType=function isValidMimeType(acceptedTypes,userInputType){return acceptedTypes.some((function(acceptedType){return/\*$/.test(acceptedType)?mimeTypeMatchesWildCard(userInputType,acceptedType):acceptedType===userInputType}))},getItemType=function getItemType(item){var type="";if(isString(item)){var filename=getFilenameFromURL(item),extension=getExtensionFromFilename(filename);extension&&(type=guesstimateMimeType(extension))}else type=item.type;return type},validateFile=function validateFile(item,acceptedFileTypes,typeDetector){if(0===acceptedFileTypes.length)return!0;var type=getItemType(item);return typeDetector?new Promise((function(resolve,reject){typeDetector(item,type).then((function(detectedType){isValidMimeType(acceptedFileTypes,detectedType)?resolve():reject()})).catch(reject)})):isValidMimeType(acceptedFileTypes,type)},applyMimeTypeMap=function applyMimeTypeMap(map){return function(acceptedFileType){return null!==map[acceptedFileType]&&(map[acceptedFileType]||acceptedFileType)}};return addFilter("SET_ATTRIBUTE_TO_OPTION_MAP",(function(map){return Object.assign(map,{accept:"acceptedFileTypes"})})),addFilter("ALLOW_HOPPER_ITEM",(function(file,_ref2){var query=_ref2.query;return!query("GET_ALLOW_FILE_TYPE_VALIDATION")||validateFile(file,query("GET_ACCEPTED_FILE_TYPES"))})),addFilter("LOAD_FILE",(function(file,_ref3){var query=_ref3.query;return new Promise((function(resolve,reject){if(query("GET_ALLOW_FILE_TYPE_VALIDATION")){var acceptedFileTypes=query("GET_ACCEPTED_FILE_TYPES"),typeDetector=query("GET_FILE_VALIDATE_TYPE_DETECT_TYPE"),validationResult=validateFile(file,acceptedFileTypes,typeDetector),handleRejection=function handleRejection(){var acceptedFileTypesMapped=acceptedFileTypes.map(applyMimeTypeMap(query("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter((function(label){return!1!==label}));reject({status:{main:query("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),sub:replaceInString(query("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),{allTypes:acceptedFileTypesMapped.join(", "),allButLastType:acceptedFileTypesMapped.slice(0,-1).join(", "),lastType:acceptedFileTypesMapped[acceptedFileTypesMapped.length-1]})}})};if("boolean"==typeof validationResult)return validationResult?resolve(file):handleRejection();validationResult.then((function(){resolve(file)})).catch(handleRejection)}else resolve(file)}))})),{options:{allowFileTypeValidation:[!0,Type.BOOLEAN],acceptedFileTypes:[[],Type.ARRAY],labelFileTypeNotAllowed:["File is of invalid type",Type.STRING],fileValidateTypeLabelExpectedTypes:["Expects {allButLastType} or {lastType}",Type.STRING],fileValidateTypeLabelExpectedTypesMap:[{},Type.OBJECT],fileValidateTypeDetectType:[null,Type.FUNCTION]}}},isBrowser;return"undefined"!=typeof window&&void 0!==window.document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin})),plugin})),

console.log("FILEPOND validate type ..... loaded");

/*!
 * FilePondPluginMediaPreview 1.0.9
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit undefined for details.
 */

/* eslint-disable */
/*
!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(e="undefined"!=typeof globalThis?globalThis:e||self).FilePondPluginMediaPreview=i()}(this,(function(){"use strict";const e=e=>/^video/.test(e.type),i=e=>/^audio/.test(e.type);class t{constructor(e,i){this.mediaEl=e,this.audioElems=i,this.onplayhead=!1,this.duration=0,this.timelineWidth=this.audioElems.timeline.offsetWidth-this.audioElems.playhead.offsetWidth,this.moveplayheadFn=this.moveplayhead.bind(this),this.registerListeners()}registerListeners(){this.mediaEl.addEventListener("timeupdate",this.timeUpdate.bind(this),!1),this.mediaEl.addEventListener("canplaythrough",(()=>this.duration=this.mediaEl.duration),!1),this.audioElems.timeline.addEventListener("click",this.timelineClicked.bind(this),!1),this.audioElems.button.addEventListener("click",this.play.bind(this)),this.audioElems.playhead.addEventListener("mousedown",this.mouseDown.bind(this),!1),window.addEventListener("mouseup",this.mouseUp.bind(this),!1)}play(){this.mediaEl.paused?this.mediaEl.play():this.mediaEl.pause(),this.audioElems.button.classList.toggle("play"),this.audioElems.button.classList.toggle("pause")}timeUpdate(){let e=this.mediaEl.currentTime/this.duration*100;this.audioElems.playhead.style.marginLeft=e+"%",this.mediaEl.currentTime===this.duration&&(this.audioElems.button.classList.toggle("play"),this.audioElems.button.classList.toggle("pause"))}moveplayhead(e){let i=e.clientX-this.getPosition(this.audioElems.timeline);i>=0&&i<=this.timelineWidth&&(this.audioElems.playhead.style.marginLeft=i+"px"),i<0&&(this.audioElems.playhead.style.marginLeft="0px"),i>this.timelineWidth&&(this.audioElems.playhead.style.marginLeft=this.timelineWidth-4+"px")}timelineClicked(e){this.moveplayhead(e),this.mediaEl.currentTime=this.duration*this.clickPercent(e)}mouseDown(){this.onplayhead=!0,window.addEventListener("mousemove",this.moveplayheadFn,!0),this.mediaEl.removeEventListener("timeupdate",this.timeUpdate.bind(this),!1)}mouseUp(e){window.removeEventListener("mousemove",this.moveplayheadFn,!0),1==this.onplayhead&&(this.moveplayhead(e),this.mediaEl.currentTime=this.duration*this.clickPercent(e),this.mediaEl.addEventListener("timeupdate",this.timeUpdate.bind(this),!1)),this.onplayhead=!1}clickPercent(e){return(e.clientX-this.getPosition(this.audioElems.timeline))/this.timelineWidth}getPosition(e){return e.getBoundingClientRect().left}}const d=d=>d.utils.createView({name:"media-preview-wrapper",create:({root:a,props:s})=>{const n=(d=>d.utils.createView({name:"media-preview",tag:"div",ignoreRect:!0,create:({root:e,props:t})=>{const{id:d}=t,a=e.query("GET_ITEM",{id:t.id});let s=i(a.file)?"audio":"video";if(e.ref.media=document.createElement(s),e.ref.media.setAttribute("controls",!0),e.element.appendChild(e.ref.media),i(a.file)){let i=document.createDocumentFragment();e.ref.audio=[],e.ref.audio.container=document.createElement("div"),e.ref.audio.button=document.createElement("span"),e.ref.audio.timeline=document.createElement("div"),e.ref.audio.playhead=document.createElement("div"),e.ref.audio.container.className="audioplayer",e.ref.audio.button.className="playpausebtn play",e.ref.audio.timeline.className="timeline",e.ref.audio.playhead.className="playhead",e.ref.audio.timeline.appendChild(e.ref.audio.playhead),e.ref.audio.container.appendChild(e.ref.audio.button),e.ref.audio.container.appendChild(e.ref.audio.timeline),i.appendChild(e.ref.audio.container),e.element.appendChild(i)}},write:d.utils.createRoute({DID_MEDIA_PREVIEW_LOAD:({root:d,props:a})=>{const{id:s}=a,n=d.query("GET_ITEM",{id:a.id});if(!n)return;let o=window.URL||window.webkitURL,l=new Blob([n.file],{type:n.file.type});d.ref.media.type=n.file.type,d.ref.media.src=n.file.mock&&n.file.url||o.createObjectURL(l),i(n.file)&&new t(d.ref.media,d.ref.audio),d.ref.media.addEventListener("loadeddata",(()=>{let i=75;if(e(n.file)){let e=d.ref.media.offsetWidth,t=d.ref.media.videoWidth/e;i=d.ref.media.videoHeight/t}d.dispatch("DID_UPDATE_PANEL_HEIGHT",{id:a.id,height:i})}),!1)}})}))(d);a.ref.media=a.appendChildView(a.createChildView(n,{id:s.id}))},write:d.utils.createRoute({DID_MEDIA_PREVIEW_CONTAINER_CREATE:({root:e,props:i})=>{const{id:t}=i;e.query("GET_ITEM",t)&&e.dispatch("DID_MEDIA_PREVIEW_LOAD",{id:t})}})}),a=t=>{const{addFilter:a,utils:s}=t,{Type:n,createRoute:o}=s,l=d(t);return a("CREATE_VIEW",(t=>{const{is:d,view:a,query:s}=t;if(!d("file"))return;a.registerWriter(o({DID_LOAD_ITEM:({root:t,props:d})=>{const{id:n}=d,o=s("GET_ITEM",n);o&&!o.archived&&(e(o.file)||i(o.file))&&(t.ref.mediaPreview=a.appendChildView(a.createChildView(l,{id:n})),t.dispatch("DID_MEDIA_PREVIEW_CONTAINER_CREATE",{id:n}))}},(({root:t,props:d})=>{const{id:a}=d,n=s("GET_ITEM",a);n&&(e(n.file)||i(n.file))&&t.rect.element.hidden})))})),{options:{allowVideoPreview:[!0,n.BOOLEAN],allowAudioPreview:[!0,n.BOOLEAN]}}};return"undefined"!=typeof window&&void 0!==window.document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:a})),a}));
console.log("FILEPOND plugin media preview ..... loaded");









/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
*/
!function(){"use strict";var t={d:function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},o:function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{CREATED:function(){return R},DESTROYED:function(){return X},IDLE:function(){return F},MOUNTED:function(){return B},MOVING:function(){return G}});function e(){return(e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var i=Object.keys;function o(t,n){i(t).some((function(e,i){return n(t[e],e,i)}))}function r(t){return i(t).map((function(n){return t[n]}))}function s(t){return"object"==typeof t}function a(t,n){var i=e({},t);return o(n,(function(t,n){s(t)?(s(i[n])||(i[n]={}),i[n]=a(i[n],t)):i[n]=t})),i}function u(t){return Array.isArray(t)?t:[t]}function c(t,n,e){return Math.min(Math.max(t,n>e?e:n),n>e?n:e)}function d(t,n){var e=0;return t.replace(/%s/g,(function(){return u(n)[e++]}))}function f(t){var n=typeof t;return"number"===n&&t>0?parseFloat(t)+"px":"string"===n?t:""}function l(t){return t<10?"0"+t:t}function h(t,n){if("string"==typeof n){var e=m("div",{});E(e,{position:"absolute",width:n}),w(t,e),n=e.clientWidth,b(e)}return+n||0}function p(t,n){return t?t.querySelector(n.split(" ")[0]):null}function g(t,n){return v(t,n)[0]}function v(t,n){return t?r(t.children).filter((function(t){return P(t,n.split(" ")[0])||t.tagName===n})):[]}function m(t,n){var e=document.createElement(t);return o(n,(function(t,n){return C(e,n,t)})),e}function y(t){var n=m("div",{});return n.innerHTML=t,n.firstChild}function b(t){u(t).forEach((function(t){if(t){var n=t.parentElement;n&&n.removeChild(t)}}))}function w(t,n){t&&t.appendChild(n)}function x(t,n){if(t&&n){var e=n.parentElement;e&&e.insertBefore(t,n)}}function E(t,n){t&&o(n,(function(n,e){null!==n&&(t.style[e]=n)}))}function _(t,n,e){t&&u(n).forEach((function(n){n&&t.classList[e?"remove":"add"](n)}))}function k(t,n){_(t,n,!1)}function S(t,n){_(t,n,!0)}function P(t,n){return!!t&&t.classList.contains(n)}function C(t,n,e){t&&t.setAttribute(n,e)}function z(t,n){return t?t.getAttribute(n):""}function I(t,n){u(n).forEach((function(n){u(t).forEach((function(t){return t&&t.removeAttribute(n)}))}))}function M(t){return t.getBoundingClientRect()}var T="slide",A="loop",O="fade",L=function(t,n){var e,i;return{mount:function(){e=n.Elements.list,t.on("transitionend",(function(t){t.target===e&&i&&i()}),e)},start:function(o,r,s,a,u){var c=t.options,d=n.Controller.edgeIndex,f=c.speed;i=u,t.is(T)&&(0===s&&r>=d||s>=d&&0===r)&&(f=c.rewindSpeed||f),E(e,{transition:"transform "+f+"ms "+c.easing,transform:"translate("+a.x+"px,"+a.y+"px)"})}}},W=function(t,n){function e(e){var i=t.options;E(n.Elements.slides[e],{transition:"opacity "+i.speed+"ms "+i.easing})}return{mount:function(){e(t.index)},start:function(t,i,o,r,s){var a=n.Elements.track;E(a,{height:f(a.clientHeight)}),e(i),setTimeout((function(){s(),E(a,{height:""})}))}}};function H(t){console.error("[SPLIDE] "+t)}function j(t,n){if(!t)throw new Error(n)}var q="splide",D={active:"is-active",visible:"is-visible",loading:"is-loading"},N={type:"slide",rewind:!1,speed:400,rewindSpeed:0,waitForTransition:!0,width:0,height:0,fixedWidth:0,fixedHeight:0,heightRatio:0,autoWidth:!1,autoHeight:!1,perPage:1,perMove:0,clones:0,start:0,focus:!1,gap:0,padding:0,arrows:!0,arrowPath:"",pagination:!0,autoplay:!1,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,lazyLoad:!1,preloadPages:1,easing:"cubic-bezier(.42,.65,.27,.99)",keyboard:"global",drag:!0,dragAngleThreshold:30,swipeDistanceThreshold:150,flickVelocityThreshold:.6,flickPower:600,flickMaxPages:1,direction:"ltr",cover:!1,accessibility:!0,slideFocus:!0,isNavigation:!1,trimSpace:!0,updateOnMove:!1,throttle:100,destroy:!1,breakpoints:!1,classes:{root:q,slider:q+"__slider",track:q+"__track",list:q+"__list",slide:q+"__slide",container:q+"__slide__container",arrows:q+"__arrows",arrow:q+"__arrow",prev:q+"__arrow--prev",next:q+"__arrow--next",pagination:q+"__pagination",page:q+"__pagination__page",clone:q+"__slide--clone",progress:q+"__progress",bar:q+"__progress__bar",autoplay:q+"__autoplay",play:q+"__play",pause:q+"__pause",spinner:q+"__spinner",sr:q+"__sr"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}},R=1,B=2,F=3,G=4,X=5;function V(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var U=function(){function t(t,e,i){var o;void 0===e&&(e={}),void 0===i&&(i={}),this.root=t instanceof Element?t:document.querySelector(t),j(this.root,"An invalid element/selector was given."),this.Components=null,this.Event=function(){var t=[];function n(t){t.elm&&t.elm.removeEventListener(t.event,t.handler,t.options)}return{on:function(n,e,i,o){void 0===i&&(i=null),void 0===o&&(o={}),n.split(" ").forEach((function(n){i&&i.addEventListener(n,e,o),t.push({event:n,handler:e,elm:i,options:o})}))},off:function(e,i){void 0===i&&(i=null),e.split(" ").forEach((function(e){t=t.filter((function(t){return!t||t.event!==e||t.elm!==i||(n(t),!1)}))}))},emit:function(n){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];t.forEach((function(t){t.elm||t.event.split(".")[0]!==n||t.handler.apply(t,i)}))},destroy:function(){t.forEach(n),t=[]}}}(),this.State=(o=R,{set:function(t){o=t},is:function(t){return t===o}}),this.STATES=n,this._o=a(N,e),this._i=0,this._c=i,this._e={},this._t=null}var e,i,s,u=t.prototype;return u.mount=function(t,n){var e=this;void 0===t&&(t=this._e),void 0===n&&(n=this._t),this.State.set(R),this._e=t,this._t=n,this.Components=function(t,n,e){var i={};return o(n,(function(n,e){i[e]=n(t,i,e.toLowerCase())})),e||(e=t.is(O)?W:L),i.Transition=e(t,i),i}(this,a(this._c,t),n);try{o(this.Components,(function(t,n){var i=t.required;void 0===i||i?t.mount&&t.mount():delete e.Components[n]}))}catch(t){return void H(t.message)}var i=this.State;return i.set(B),o(this.Components,(function(t){t.mounted&&t.mounted()})),this.emit("mounted"),i.set(F),this.emit("ready"),E(this.root,{visibility:"visible"}),this.on("move drag",(function(){return i.set(G)})).on("moved dragged",(function(){return i.set(F)})),this},u.sync=function(t){return this.sibling=t,this},u.on=function(t,n,e,i){return void 0===e&&(e=null),void 0===i&&(i={}),this.Event.on(t,n,e,i),this},u.off=function(t,n){return void 0===n&&(n=null),this.Event.off(t,n),this},u.emit=function(t){for(var n,e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];return(n=this.Event).emit.apply(n,[t].concat(i)),this},u.go=function(t,n){return void 0===n&&(n=this.options.waitForTransition),(this.State.is(F)||this.State.is(G)&&!n)&&this.Components.Controller.go(t,!1),this},u.is=function(t){return t===this._o.type},u.add=function(t,n){return void 0===n&&(n=-1),this.Components.Elements.add(t,n,this.refresh.bind(this)),this},u.remove=function(t){return this.Components.Elements.remove(t),this.refresh(),this},u.refresh=function(){return this.emit("refresh:before").emit("refresh").emit("resize"),this},u.destroy=function(t){var n=this;if(void 0===t&&(t=!0),!this.State.is(R))return r(this.Components).reverse().forEach((function(n){n.destroy&&n.destroy(t)})),this.emit("destroy",t),this.Event.destroy(),this.State.set(X),this;this.on("ready",(function(){return n.destroy(t)}))},e=t,(i=[{key:"index",get:function(){return this._i},set:function(t){this._i=parseInt(t)}},{key:"length",get:function(){return this.Components.Elements.length}},{key:"options",get:function(){return this._o},set:function(t){var n=this.State.is(R);n||this.emit("update"),this._o=a(this._o,t),n||this.emit("updated",this._o)}},{key:"classes",get:function(){return this._o.classes}},{key:"i18n",get:function(){return this._o.i18n}}])&&V(e.prototype,i),s&&V(e,s),t}(),Y=function(t){var n=z(t.root,"data-splide");if(n)try{t.options=JSON.parse(n)}catch(t){H(t.message)}return{mount:function(){t.State.is(R)&&(t.index=t.options.start)}}},J="rtl",K="ttb",Q="update.slide",Z=function(t,n){var e=t.root,i=t.classes,s=[];if(!e.id){window.splide=window.splide||{};var a=window.splide.uid||0;window.splide.uid=++a,e.id="splide"+l(a)}var u={mount:function(){var n=this;this.init(),t.on("refresh",(function(){n.destroy(),n.init()})).on("updated",(function(){S(e,c()),k(e,c())}))},destroy:function(){s.forEach((function(t){t.destroy()})),s=[],S(e,c())},init:function(){var t=this;!function(){u.slider=g(e,i.slider),u.track=p(e,"."+i.track),u.list=g(u.track,i.list),j(u.track&&u.list,"Track or list was not found."),u.slides=v(u.list,i.slide);var t=d(i.arrows);u.arrows={prev:p(t,"."+i.prev),next:p(t,"."+i.next)};var n=d(i.autoplay);u.bar=p(d(i.progress),"."+i.bar),u.play=p(n,"."+i.play),u.pause=p(n,"."+i.pause),u.track.id=u.track.id||e.id+"-track",u.list.id=u.list.id||e.id+"-list"}(),k(e,c()),this.slides.forEach((function(n,e){t.register(n,e,-1)}))},register:function(n,e,i){var o=function(t,n,e,i){var o=t.options.updateOnMove,s="ready.slide updated.slide resized.slide moved.slide"+(o?" move.slide":""),a={slide:i,index:n,realIndex:e,container:g(i,t.classes.container),isClone:e>-1,mount:function(){var r=this;this.isClone||(i.id=t.root.id+"-slide"+l(n+1)),t.on(s,(function(){return r.update()})).on(Q,c).on("click",(function(){return t.emit("click",r)}),i),o&&t.on("move.slide",(function(t){t===e&&u(!0,!1)})),E(i,{display:""}),this.styles=z(i,"style")||""},destroy:function(){t.off(s).off(Q).off("click",i),S(i,r(D)),c(),I(this.container,"style")},update:function(){u(this.isActive(),!1),u(this.isVisible(),!0)},isActive:function(){return t.index===n},isVisible:function(){var n=this.isActive();if(t.is(O)||n)return n;var e=Math.ceil,o=M(t.Components.Elements.track),r=M(i);return t.options.direction===K?o.top<=r.top&&r.bottom<=e(o.bottom):o.left<=r.left&&r.right<=e(o.right)},isWithin:function(e,i){var o=Math.abs(e-n);return t.is(T)||this.isClone||(o=Math.min(o,t.length-o)),o<i}};function u(n,e){var o=e?"visible":"active",r=D[o];n?(k(i,r),t.emit(""+o,a)):P(i,r)&&(S(i,r),t.emit(e?"hidden":"inactive",a))}function c(){C(i,"style",a.styles)}return a}(t,e,i,n);o.mount(),s.push(o)},getSlide:function(t){return s.filter((function(n){return n.index===t}))[0]},getSlides:function(t){return t?s:s.filter((function(t){return!t.isClone}))},getSlidesByPage:function(e){var i=n.Controller.toIndex(e),o=t.options,r=!1!==o.focus?1:o.perPage;return s.filter((function(t){var n=t.index;return i<=n&&n<i+r}))},add:function(t,n,e){if("string"==typeof t&&(t=y(t)),t instanceof Element){var i=this.slides[n];E(t,{display:"none"}),i?(x(t,i),this.slides.splice(n,0,t)):(w(this.list,t),this.slides.push(t)),function(t,n){var e=t.querySelectorAll("img"),i=e.length;if(i){var r=0;o(e,(function(t){t.onload=t.onerror=function(){++r===i&&n()}}))}else n()}(t,(function(){e&&e(t)}))}},remove:function(t){b(this.slides.splice(t,1)[0])},each:function(t){s.forEach(t)},get length(){return this.slides.length},get total(){return s.length}};function c(){var n=i.root,e=t.options;return[n+"--"+e.type,n+"--"+e.direction,e.drag?n+"--draggable":"",e.isNavigation?n+"--nav":"",D.active]}function d(t){return g(e,t)||g(u.slider,t)}return u},$=Math.floor,tt=function(t,n){var e,i,o={mount:function(){e=t.options,i=t.is(A),t.on("move",(function(n){t.index=n})).on("updated refresh",(function(n){e=n||e,t.index=c(t.index,0,o.edgeIndex)}))},go:function(t,e){var i=this.trim(this.parse(t));n.Track.go(i,this.rewind(i),e)},parse:function(n){var i=t.index,r=String(n).match(/([+\-<>]+)(\d+)?/),s=r?r[1]:"",a=r?parseInt(r[2]):0;switch(s){case"+":i+=a||1;break;case"-":i-=a||1;break;case">":case"<":i=function(t,n,i){if(t>-1)return o.toIndex(t);var r=e.perMove,s=i?-1:1;if(r)return n+r*s;return o.toIndex(o.toPage(n)+s)}(a,i,"<"===s);break;default:i=parseInt(n)}return i},toIndex:function(n){if(r())return n;var i=t.length,o=e.perPage,s=n*o;return i-o<=(s-=(this.pageLength*o-i)*$(s/i))&&s<i&&(s=i-o),s},toPage:function(n){if(r())return n;var i=t.length,o=e.perPage;return $(i-o<=n&&n<i?(i-1)/o:n/o)},trim:function(t){return i||(t=e.rewind?this.rewind(t):c(t,0,this.edgeIndex)),t},rewind:function(t){var n=this.edgeIndex;if(i){for(;t>n;)t-=n+1;for(;t<0;)t+=n+1}else t>n?t=0:t<0&&(t=n);return t},isRtl:function(){return e.direction===J},get pageLength(){var n=t.length;return r()?n:Math.ceil(n/e.perPage)},get edgeIndex(){var n=t.length;return n?r()||e.isNavigation||i?n-1:n-e.perPage:0},get prevIndex(){var n=t.index-1;return(i||e.rewind)&&(n=this.rewind(n)),n>-1?n:-1},get nextIndex(){var n=t.index+1;return(i||e.rewind)&&(n=this.rewind(n)),t.index<n&&n<=this.edgeIndex||0===n?n:-1}};function r(){return!1!==e.focus}return o},nt=Math.abs,et=function(t,n){var e,i,o,r=t.options.direction===K,s=t.is(O),a=t.options.direction===J,u=!1,d=a?1:-1,f={sign:d,mount:function(){i=n.Elements,e=n.Layout,o=i.list},mounted:function(){var n=this;s||(this.jump(0),t.on("mounted resize updated",(function(){n.jump(t.index)})))},go:function(e,i,o){var r=h(e),a=t.index;t.State.is(G)&&u||(u=e!==i,o||t.emit("move",i,a,e),Math.abs(r-this.position)>=1||s?n.Transition.start(e,i,a,this.toCoord(r),(function(){l(e,i,a,o)})):e!==a&&"move"===t.options.trimSpace?n.Controller.go(e+e-a,o):l(e,i,a,o))},jump:function(t){this.translate(h(t))},translate:function(t){E(o,{transform:"translate"+(r?"Y":"X")+"("+t+"px)"})},cancel:function(){t.is(A)?this.shift():this.translate(this.position),E(o,{transition:""})},shift:function(){var n=nt(this.position),e=nt(this.toPosition(0)),i=nt(this.toPosition(t.length)),o=i-e;n<e?n+=o:n>i&&(n-=o),this.translate(d*n)},trim:function(n){return!t.options.trimSpace||t.is(A)?n:c(n,d*(e.totalSize()-e.size-e.gap),0)},toIndex:function(t){var n=this,e=0,o=1/0;return i.getSlides(!0).forEach((function(i){var r=i.index,s=nt(n.toPosition(r)-t);s<o&&(o=s,e=r)})),e},toCoord:function(t){return{x:r?0:t,y:r?t:0}},toPosition:function(t){var n=e.totalSize(t)-e.slideSize(t)-e.gap;return d*(n+this.offset(t))},offset:function(n){var i=t.options.focus,o=e.slideSize(n);return"center"===i?-(e.size-o)/2:-(parseInt(i)||0)*(o+e.gap)},get position(){var t=r?"top":a?"right":"left";return M(o)[t]-(M(i.track)[t]-e.padding[t]*d)}};function l(n,e,i,r){E(o,{transition:""}),u=!1,s||f.jump(e),r||t.emit("moved",e,i,n)}function h(t){return f.trim(f.toPosition(t))}return f},it=function(t,n){var e=[],i=0,o=n.Elements,r={mount:function(){var n=this;t.is(A)&&(s(),t.on("refresh:before",(function(){n.destroy()})).on("refresh",s).on("resize",(function(){i!==a()&&(n.destroy(),t.refresh())})))},destroy:function(){b(e),e=[]},get clones(){return e},get length(){return e.length}};function s(){r.destroy(),function(t){var n=o.length,i=o.register;if(n){for(var r=o.slides;r.length<t;)r=r.concat(r);r.slice(0,t).forEach((function(t,r){var s=u(t);w(o.list,s),e.push(s),i(s,r+n,r%n)})),r.slice(-t).forEach((function(o,s){var a=u(o);x(a,r[0]),e.push(a),i(a,s-t,(n+s-t%n)%n)}))}}(i=a())}function a(){var n=t.options;if(n.clones)return n.clones;var e=n.autoWidth||n.autoHeight?o.length:n.perPage,i=n.direction===K?"Height":"Width",r=h(t.root,n["fixed"+i]);return r&&(e=Math.ceil(o.track["client"+i]/r)),e*(n.drag?n.flickMaxPages+1:1)}function u(n){var e=n.cloneNode(!0);return k(e,t.classes.clone),I(e,"id"),e}return r};function ot(t,n){var e;return function(){e||(e=setTimeout((function(){t(),e=null}),n))}}var rt=function(t,n){var e,o,r=n.Elements,s=t.options.direction===K,a=(e={mount:function(){t.on("resize load",ot((function(){t.emit("resize")}),t.options.throttle),window).on("resize",c).on("updated refresh",u),u(),this.totalSize=s?this.totalHeight:this.totalWidth,this.slideSize=s?this.slideHeight:this.slideWidth},destroy:function(){I([r.list,r.track],"style")},get size(){return s?this.height:this.width}},o=s?function(t,n){var e,i,o=n.Elements,r=t.root;return{margin:"marginBottom",init:function(){this.resize()},resize:function(){i=t.options,e=o.track,this.gap=h(r,i.gap);var n=i.padding,s=h(r,n.top||n),a=h(r,n.bottom||n);this.padding={top:s,bottom:a},E(e,{paddingTop:f(s),paddingBottom:f(a)})},totalHeight:function(n){void 0===n&&(n=t.length-1);var e=o.getSlide(n);return e?M(e.slide).bottom-M(o.list).top+this.gap:0},slideWidth:function(){return h(r,i.fixedWidth||this.width)},slideHeight:function(t){if(i.autoHeight){var n=o.getSlide(t);return n?n.slide.offsetHeight:0}var e=i.fixedHeight||(this.height+this.gap)/i.perPage-this.gap;return h(r,e)},get width(){return e.clientWidth},get height(){var t=i.height||this.width*i.heightRatio;return j(t,'"height" or "heightRatio" is missing.'),h(r,t)-this.padding.top-this.padding.bottom}}}(t,n):function(t,n){var e,i=n.Elements,o=t.root,r=t.options;return{margin:"margin"+(r.direction===J?"Left":"Right"),height:0,init:function(){this.resize()},resize:function(){r=t.options,e=i.track,this.gap=h(o,r.gap);var n=r.padding,s=h(o,n.left||n),a=h(o,n.right||n);this.padding={left:s,right:a},E(e,{paddingLeft:f(s),paddingRight:f(a)})},totalWidth:function(n){void 0===n&&(n=t.length-1);var e=i.getSlide(n),o=0;if(e){var s=M(e.slide),a=M(i.list);o=r.direction===J?a.right-s.left:s.right-a.left,o+=this.gap}return o},slideWidth:function(t){if(r.autoWidth){var n=i.getSlide(t);return n?n.slide.offsetWidth:0}var e=r.fixedWidth||(this.width+this.gap)/r.perPage-this.gap;return h(o,e)},slideHeight:function(){var t=r.height||r.fixedHeight||this.width*r.heightRatio;return h(o,t)},get width(){return e.clientWidth-this.padding.left-this.padding.right}}}(t,n),i(o).forEach((function(t){e[t]||Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})),e);function u(){a.init(),E(t.root,{maxWidth:f(t.options.width)}),r.each((function(t){t.slide.style[a.margin]=f(a.gap)})),c()}function c(){var n=t.options;a.resize(),E(r.track,{height:f(a.height)});var e=n.autoHeight?null:f(a.slideHeight());r.each((function(t){E(t.container,{height:e}),E(t.slide,{width:n.autoWidth?null:f(a.slideWidth(t.index)),height:t.container?null:e})})),t.emit("resized")}return a},st=Math.abs,at=function(t,n){var e,i,r,s,a=n.Track,u=n.Controller,d=t.options.direction===K,f=d?"y":"x",l={disabled:!1,mount:function(){var e=this,i=n.Elements,r=i.track;t.on("touchstart mousedown",h,r).on("touchmove mousemove",g,r,{passive:!1}).on("touchend touchcancel mouseleave mouseup dragend",v,r).on("mounted refresh",(function(){o(i.list.querySelectorAll("img, a"),(function(n){t.off("dragstart",n).on("dragstart",(function(t){t.preventDefault()}),n,{passive:!1})}))})).on("mounted updated",(function(){e.disabled=!t.options.drag}))}};function h(t){l.disabled||s||p(t)}function p(t){e=a.toCoord(a.position),i=m(t,{}),r=i}function g(n){if(i)if(r=m(n,i),s){if(n.cancelable&&n.preventDefault(),!t.is(O)){var o=e[f]+r.offset[f];a.translate(function(n){if(t.is(T)){var e=a.sign,i=e*a.trim(a.toPosition(0)),o=e*a.trim(a.toPosition(u.edgeIndex));(n*=e)<i?n=i-7*Math.log(i-n):n>o&&(n=o+7*Math.log(n-o)),n*=e}return n}(o))}}else(function(n){var e=n.offset;if(t.State.is(G)&&t.options.waitForTransition)return!1;var i=180*Math.atan(st(e.y)/st(e.x))/Math.PI;d&&(i=90-i);return i<t.options.dragAngleThreshold})(r)&&(t.emit("drag",i),s=!0,a.cancel(),p(n))}function v(){i=null,s&&(t.emit("dragged",r),function(e){var i=e.velocity[f],o=st(i);if(o>0){var r=t.options,s=t.index,d=i<0?-1:1,l=s;if(!t.is(O)){var h=a.position;o>r.flickVelocityThreshold&&st(e.offset[f])<r.swipeDistanceThreshold&&(h+=d*Math.min(o*r.flickPower,n.Layout.size*(r.flickMaxPages||1))),l=a.toIndex(h)}l===s&&o>.1&&(l=s+d*a.sign),t.is(T)&&(l=c(l,0,u.edgeIndex)),u.go(l,r.isNavigation)}}(r),s=!1)}function m(t,n){var e=t.timeStamp,i=t.touches,o=i?i[0]:t,r=o.clientX,s=o.clientY,a=n.to||{},u=a.x,c=void 0===u?r:u,d=a.y,f={x:r-c,y:s-(void 0===d?s:d)},l=e-(n.time||0);return{to:{x:r,y:s},offset:f,time:e,velocity:{x:f.x/l,y:f.y/l}}}return l},ut=function(t,n){var e=!1;function i(t){e&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())}return{required:t.options.drag,mount:function(){t.on("click",i,n.Elements.track,{capture:!0}).on("drag",(function(){e=!0})).on("dragged",(function(){setTimeout((function(){e=!1}))}))}}},ct=1,dt=2,ft=3,lt=function(t,n,e){var i,o,r,s=t.classes,a=t.root,u=n.Elements;function c(){var r=n.Controller,s=r.prevIndex,a=r.nextIndex,u=t.length>t.options.perPage||t.is(A);i.disabled=s<0||!u,o.disabled=a<0||!u,t.emit(e+":updated",i,o,s,a)}function d(n){return y('<button class="'+s.arrow+" "+(n?s.prev:s.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg"\tviewBox="0 0 40 40"\twidth="40"\theight="40"><path d="'+(t.options.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}return{required:t.options.arrows,mount:function(){i=u.arrows.prev,o=u.arrows.next,i&&o||!t.options.arrows||(i=d(!0),o=d(!1),r=!0,function(){var n=m("div",{class:s.arrows});w(n,i),w(n,o);var e=u.slider,r="slider"===t.options.arrows&&e?e:a;x(n,r.firstElementChild)}()),i&&o&&t.on("click",(function(){t.go("<")}),i).on("click",(function(){t.go(">")}),o).on("mounted move updated refresh",c),this.arrows={prev:i,next:o}},mounted:function(){t.emit(e+":mounted",i,o)},destroy:function(){I([i,o],"disabled"),r&&b(i.parentElement)}}},ht="move.page",pt="updated.page refresh.page",gt=function(t,n,e){var i={},o=n.Elements,r={mount:function(){var n=t.options.pagination;if(n){i=function(){var n=t.options,e=t.classes,i=m("ul",{class:e.pagination}),r=o.getSlides(!1).filter((function(t){return!1!==n.focus||t.index%n.perPage==0})).map((function(n,r){var s=m("li",{}),a=m("button",{class:e.page,type:"button"});return w(s,a),w(i,s),t.on("click",(function(){t.go(">"+r)}),a),{li:s,button:a,page:r,Slides:o.getSlidesByPage(r)}}));return{list:i,items:r}}();var e=o.slider;w("slider"===n&&e?e:t.root,i.list),t.on(ht,s)}t.off(pt).on(pt,(function(){r.destroy(),t.options.pagination&&(r.mount(),r.mounted())}))},mounted:function(){if(t.options.pagination){var n=t.index;t.emit(e+":mounted",i,this.getItem(n)),s(n,-1)}},destroy:function(){b(i.list),i.items&&i.items.forEach((function(n){t.off("click",n.button)})),t.off(ht),i={}},getItem:function(t){return i.items[n.Controller.toPage(t)]},get data(){return i}};function s(n,o){var s=r.getItem(o),a=r.getItem(n),u=D.active;s&&S(s.button,u),a&&k(a.button,u),t.emit(e+":updated",i,s,a)}return r},vt="data-splide-lazy",mt="data-splide-lazy-srcset",yt="aria-current",bt="aria-controls",wt="aria-label",xt="aria-hidden",Et="tabindex",_t={ltr:{ArrowLeft:"<",ArrowRight:">",Left:"<",Right:">"},rtl:{ArrowLeft:">",ArrowRight:"<",Left:">",Right:"<"},ttb:{ArrowUp:"<",ArrowDown:">",Up:"<",Down:">"}},kt=function(t,n){var e=t.i18n,i=n.Elements,o=[xt,Et,bt,wt,yt,"role"];function r(n,e){C(n,xt,!e),t.options.slideFocus&&C(n,Et,e?0:-1)}function s(t,n){var e=i.track.id;C(t,bt,e),C(n,bt,e)}function a(n,i,o,r){var s=t.index,a=o>-1&&s<o?e.last:e.prev,u=r>-1&&s>r?e.first:e.next;C(n,wt,a),C(i,wt,u)}function u(n,i){i&&C(i.button,yt,!0),n.items.forEach((function(n){var i=t.options,o=d(!1===i.focus&&i.perPage>1?e.pageX:e.slideX,n.page+1),r=n.button,s=n.Slides.map((function(t){return t.slide.id}));C(r,bt,s.join(" ")),C(r,wt,o)}))}function c(t,n,e){n&&I(n.button,yt),e&&C(e.button,yt,!0)}function f(t){i.each((function(n){var i=n.slide,o=n.realIndex;h(i)||C(i,"role","button");var r=o>-1?o:n.index,s=d(e.slideX,r+1),a=t.Components.Elements.getSlide(r);C(i,wt,s),a&&C(i,bt,a.slide.id)}))}function l(t,n){var e=t.slide;n?C(e,yt,!0):I(e,yt)}function h(t){return"BUTTON"===t.tagName}return{required:t.options.accessibility,mount:function(){t.on("visible",(function(t){r(t.slide,!0)})).on("hidden",(function(t){r(t.slide,!1)})).on("arrows:mounted",s).on("arrows:updated",a).on("pagination:mounted",u).on("pagination:updated",c).on("refresh",(function(){I(n.Clones.clones,o)})),t.options.isNavigation&&t.on("navigation:mounted navigation:updated",f).on("active",(function(t){l(t,!0)})).on("inactive",(function(t){l(t,!1)})),["play","pause"].forEach((function(t){var n=i[t];n&&(h(n)||C(n,"role","button"),C(n,bt,i.track.id),C(n,wt,e[t]))}))},destroy:function(){var t=n.Arrows,e=t?t.arrows:{};I(i.slides.concat([e.prev,e.next,i.play,i.pause]),o)}}},St="move.sync",Pt="mouseup touchend",Ct=[" ","Enter","Spacebar"],zt={Options:Y,Breakpoints:function(t){var n,e,i=t.options.breakpoints,o=ot(s,50),r=[];function s(){var o,s=(o=r.filter((function(t){return t.mql.matches}))[0])?o.point:-1;if(s!==e){e=s;var a=t.State,u=i[s]||n,c=u.destroy;c?(t.options=n,t.destroy("completely"===c)):(a.is(X)&&t.mount(),t.options=u)}}return{required:i&&matchMedia,mount:function(){r=Object.keys(i).sort((function(t,n){return+t-+n})).map((function(t){return{point:t,mql:matchMedia("(max-width:"+t+"px)")}})),this.destroy(!0),addEventListener("resize",o),n=t.options,s()},destroy:function(t){t&&removeEventListener("resize",o)}}},Controller:tt,Elements:Z,Track:et,Clones:it,Layout:rt,Drag:at,Click:ut,Autoplay:function(t,n,e){var i,o=[],r=n.Elements,s={required:t.options.autoplay,mount:function(){var n=t.options;r.slides.length>n.perPage&&(i=function(t,n,e){var i,o,r,s=window.requestAnimationFrame,a=!0,u=function u(c){a||(i||(i=c,r&&r<1&&(i-=r*n)),r=(o=c-i)/n,o>=n&&(i=0,r=1,t()),e&&e(r),s(u))};return{pause:function(){a=!0,i=0},play:function(t){i=0,t&&(r=0),a&&(a=!1,s(u))}}}((function(){t.go(">")}),n.interval,(function(n){t.emit(e+":playing",n),r.bar&&E(r.bar,{width:100*n+"%"})})),function(){var n=t.options,e=t.sibling,i=[t.root,e?e.root:null];n.pauseOnHover&&(a(i,"mouseleave",ct,!0),a(i,"mouseenter",ct,!1));n.pauseOnFocus&&(a(i,"focusout",dt,!0),a(i,"focusin",dt,!1));r.play&&t.on("click",(function(){s.play(dt),s.play(ft)}),r.play);r.pause&&a([r.pause],"click",ft,!1);t.on("move refresh",(function(){s.play()})).on("destroy",(function(){s.pause()}))}(),this.play())},play:function(n){void 0===n&&(n=0),(o=o.filter((function(t){return t!==n}))).length||(t.emit(e+":play"),i.play(t.options.resetProgress))},pause:function(n){void 0===n&&(n=0),i.pause(),-1===o.indexOf(n)&&o.push(n),1===o.length&&t.emit(e+":pause")}};function a(n,e,i,o){n.forEach((function(n){t.on(e,(function(){s[o?"play":"pause"](i)}),n)}))}return s},Cover:function(t,n){function e(t){n.Elements.each((function(n){var e=g(n.slide,"IMG")||g(n.container,"IMG");e&&e.src&&i(e,t)}))}function i(t,n){E(t.parentElement,{background:n?"":'center/cover no-repeat url("'+t.src+'")'}),E(t,{display:n?"":"none"})}return{required:t.options.cover,mount:function(){t.on("lazyload:loaded",(function(t){i(t,!1)})),t.on("mounted updated refresh",(function(){return e(!1)}))},destroy:function(){e(!0)}}},Arrows:lt,Pagination:gt,LazyLoad:function(t,n,e){var i,r,s=t.options,a="sequential"===s.lazyLoad;function u(){r=[],i=0}function c(n){n=isNaN(n)?t.index:n,(r=r.filter((function(t){return!t.Slide.isWithin(n,s.perPage*(s.preloadPages+1))||(d(t.img,t.Slide),!1)})))[0]||t.off("moved."+e)}function d(n,e){k(e.slide,D.loading);var i=m("span",{class:t.classes.spinner});w(n.parentElement,i),n.onload=function(){l(n,i,e,!1)},n.onerror=function(){l(n,i,e,!0)},C(n,"srcset",z(n,mt)||""),C(n,"src",z(n,vt)||"")}function f(){if(i<r.length){var t=r[i];d(t.img,t.Slide)}i++}function l(n,i,o,r){S(o.slide,D.loading),r||(b(i),E(n,{display:""}),t.emit(e+":loaded",n).emit("resize")),a&&f()}return{required:s.lazyLoad,mount:function(){t.on("mounted refresh",(function(){u(),n.Elements.each((function(t){o(t.slide.querySelectorAll("[data-splide-lazy], ["+mt+"]"),(function(n){n.src||n.srcset||(r.push({img:n,Slide:t}),E(n,{display:"none"}))}))})),a&&f()})),a||t.on("mounted refresh moved."+e,c)},destroy:u}},Keyboard:function(t){var n;return{mount:function(){t.on("mounted updated",(function(){var e=t.options,i=t.root,o=_t[e.direction],r=e.keyboard;n&&(t.off("keydown",n),I(i,Et)),r&&("focused"===r?(n=i,C(i,Et,0)):n=document,t.on("keydown",(function(n){o[n.key]&&t.go(o[n.key])}),n))}))}}},Sync:function(t){var n=t.sibling,e=n&&n.options.isNavigation;function i(){t.on(St,(function(t,e,i){n.off(St).go(n.is(A)?i:t,!1),o()}))}function o(){n.on(St,(function(n,e,o){t.off(St).go(t.is(A)?o:n,!1),i()}))}function r(){n.Components.Elements.each((function(n){var e=n.slide,i=n.index;t.off(Pt,e).on(Pt,(function(t){t.button&&0!==t.button||s(i)}),e),t.off("keyup",e).on("keyup",(function(t){Ct.indexOf(t.key)>-1&&(t.preventDefault(),s(i))}),e,{passive:!1})}))}function s(e){t.State.is(F)&&n.go(e)}return{required:!!n,mount:function(){i(),o(),e&&(r(),t.on("refresh",(function(){setTimeout((function(){r(),n.emit("navigation:updated",t)}))})))},mounted:function(){e&&n.emit("navigation:mounted",t)}}},A11y:kt};var It=function(t){var n,e;function i(n,e){return t.call(this,n,e,zt)||this}return e=t,(n=i).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,i}(U);window.Splide=It}();

console.log("SPLIDE ..... loaded");



 /* S H U F F L E . JS*/ 

 (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Shuffle = factory());
  }(this, (function () { 'use strict';
  
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
  
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
  
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
  
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
  
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
  
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }
  
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  
      return _setPrototypeOf(o, p);
    }
  
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
  
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }
  
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
  
      return self;
    }
  
    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }
  
      return _assertThisInitialized(self);
    }
  
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
  
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;
  
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
  
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
  
        return _possibleConstructorReturn(this, result);
      };
    }
  
    var tinyEmitter = {exports: {}};
  
    function E () {
      // Keep this empty so it's easier to inherit from
      // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
    }
  
    E.prototype = {
      on: function (name, callback, ctx) {
        var e = this.e || (this.e = {});
  
        (e[name] || (e[name] = [])).push({
          fn: callback,
          ctx: ctx
        });
  
        return this;
      },
  
      once: function (name, callback, ctx) {
        var self = this;
        function listener () {
          self.off(name, listener);
          callback.apply(ctx, arguments);
        }
        listener._ = callback;
        return this.on(name, listener, ctx);
      },
  
      emit: function (name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        var i = 0;
        var len = evtArr.length;
  
        for (i; i < len; i++) {
          evtArr[i].fn.apply(evtArr[i].ctx, data);
        }
  
        return this;
      },
  
      off: function (name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];
  
        if (evts && callback) {
          for (var i = 0, len = evts.length; i < len; i++) {
            if (evts[i].fn !== callback && evts[i].fn._ !== callback)
              liveEvents.push(evts[i]);
          }
        }
  
        // Remove event from queue to prevent memory leak
        // Suggested by https://github.com/lazd
        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
  
        (liveEvents.length)
          ? e[name] = liveEvents
          : delete e[name];
  
        return this;
      }
    };
  
    tinyEmitter.exports = E;
    tinyEmitter.exports.TinyEmitter = E;
  
    var TinyEmitter = tinyEmitter.exports;
  
    var proto = typeof Element !== 'undefined' ? Element.prototype : {};
    var vendor = proto.matches
      || proto.matchesSelector
      || proto.webkitMatchesSelector
      || proto.mozMatchesSelector
      || proto.msMatchesSelector
      || proto.oMatchesSelector;
  
    var matchesSelector = match;
  
    /**
     * Match `el` to `selector`.
     *
     * @param {Element} el
     * @param {String} selector
     * @return {Boolean}
     * @api public
     */
  
    function match(el, selector) {
      if (!el || el.nodeType !== 1) return false;
      if (vendor) return vendor.call(el, selector);
      var nodes = el.parentNode.querySelectorAll(selector);
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i] == el) return true;
      }
      return false;
    }
  
    var throttleit = throttle;
  
    /**
     * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
     *
     * @param {Function} func Function to wrap.
     * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.
     * @return {Function} A new function that wraps the `func` function passed in.
     */
  
    function throttle (func, wait) {
      var ctx, args, rtn, timeoutID; // caching
      var last = 0;
  
      return function throttled () {
        ctx = this;
        args = arguments;
        var delta = new Date() - last;
        if (!timeoutID)
          if (delta >= wait) call();
          else timeoutID = setTimeout(call, wait - delta);
        return rtn;
      };
  
      function call () {
        timeoutID = 0;
        last = +new Date();
        rtn = func.apply(ctx, args);
        ctx = null;
        args = null;
      }
    }
  
    var arrayParallel = function parallel(fns, context, callback) {
      if (!callback) {
        if (typeof context === 'function') {
          callback = context;
          context = null;
        } else {
          callback = noop;
        }
      }
  
      var pending = fns && fns.length;
      if (!pending) return callback(null, []);
  
      var finished = false;
      var results = new Array(pending);
  
      fns.forEach(context ? function (fn, i) {
        fn.call(context, maybeDone(i));
      } : function (fn, i) {
        fn(maybeDone(i));
      });
  
      function maybeDone(i) {
        return function (err, result) {
          if (finished) return;
  
          if (err) {
            callback(err, results);
            finished = true;
            return
          }
  
          results[i] = result;
  
          if (!--pending) callback(null, results);
        }
      }
    };
  
    function noop() {}
  
    /**
     * Always returns a numeric value, given a value. Logic from jQuery's `isNumeric`.
     * @param {*} value Possibly numeric value.
     * @return {number} `value` or zero if `value` isn't numeric.
     */
    function getNumber(value) {
      return parseFloat(value) || 0;
    }
  
    var Point = /*#__PURE__*/function () {
      /**
       * Represents a coordinate pair.
       * @param {number} [x=0] X.
       * @param {number} [y=0] Y.
       */
      function Point(x, y) {
        _classCallCheck(this, Point);
  
        this.x = getNumber(x);
        this.y = getNumber(y);
      }
      /**
       * Whether two points are equal.
       * @param {Point} a Point A.
       * @param {Point} b Point B.
       * @return {boolean}
       */
  
  
      _createClass(Point, null, [{
        key: "equals",
        value: function equals(a, b) {
          return a.x === b.x && a.y === b.y;
        }
      }]);
  
      return Point;
    }();
  
    var Rect = /*#__PURE__*/function () {
      /**
       * Class for representing rectangular regions.
       * https://github.com/google/closure-library/blob/master/closure/goog/math/rect.js
       * @param {number} x Left.
       * @param {number} y Top.
       * @param {number} w Width.
       * @param {number} h Height.
       * @param {number} id Identifier
       * @constructor
       */
      function Rect(x, y, w, h, id) {
        _classCallCheck(this, Rect);
  
        this.id = id;
        /** @type {number} */
  
        this.left = x;
        /** @type {number} */
  
        this.top = y;
        /** @type {number} */
  
        this.width = w;
        /** @type {number} */
  
        this.height = h;
      }
      /**
       * Returns whether two rectangles intersect.
       * @param {Rect} a A Rectangle.
       * @param {Rect} b A Rectangle.
       * @return {boolean} Whether a and b intersect.
       */
  
  
      _createClass(Rect, null, [{
        key: "intersects",
        value: function intersects(a, b) {
          return a.left < b.left + b.width && b.left < a.left + a.width && a.top < b.top + b.height && b.top < a.top + a.height;
        }
      }]);
  
      return Rect;
    }();
  
    var Classes = {
      BASE: 'shuffle',
      SHUFFLE_ITEM: 'shuffle-item',
      VISIBLE: 'shuffle-item--visible',
      HIDDEN: 'shuffle-item--hidden'
    };
  
    var id$1 = 0;
  
    var ShuffleItem = /*#__PURE__*/function () {
      function ShuffleItem(element, isRTL) {
        _classCallCheck(this, ShuffleItem);
  
        id$1 += 1;
        this.id = id$1;
        this.element = element;
        /**
         * Set correct direction of item
         */
  
        this.isRTL = isRTL;
        /**
         * Used to separate items for layout and shrink.
         */
  
        this.isVisible = true;
        /**
         * Used to determine if a transition will happen. By the time the _layout
         * and _shrink methods get the ShuffleItem instances, the `isVisible` value
         * has already been changed by the separation methods, so this property is
         * needed to know if the item was visible/hidden before the shrink/layout.
         */
  
        this.isHidden = false;
      }
  
      _createClass(ShuffleItem, [{
        key: "show",
        value: function show() {
          this.isVisible = true;
          this.element.classList.remove(Classes.HIDDEN);
          this.element.classList.add(Classes.VISIBLE);
          this.element.removeAttribute('aria-hidden');
        }
      }, {
        key: "hide",
        value: function hide() {
          this.isVisible = false;
          this.element.classList.remove(Classes.VISIBLE);
          this.element.classList.add(Classes.HIDDEN);
          this.element.setAttribute('aria-hidden', true);
        }
      }, {
        key: "init",
        value: function init() {
          this.addClasses([Classes.SHUFFLE_ITEM, Classes.VISIBLE]);
          this.applyCss(ShuffleItem.Css.INITIAL);
          this.applyCss(this.isRTL ? ShuffleItem.Css.DIRECTION.rtl : ShuffleItem.Css.DIRECTION.ltr);
          this.scale = ShuffleItem.Scale.VISIBLE;
          this.point = new Point();
        }
      }, {
        key: "addClasses",
        value: function addClasses(classes) {
          var _this = this;
  
          classes.forEach(function (className) {
            _this.element.classList.add(className);
          });
        }
      }, {
        key: "removeClasses",
        value: function removeClasses(classes) {
          var _this2 = this;
  
          classes.forEach(function (className) {
            _this2.element.classList.remove(className);
          });
        }
      }, {
        key: "applyCss",
        value: function applyCss(obj) {
          var _this3 = this;
  
          Object.keys(obj).forEach(function (key) {
            _this3.element.style[key] = obj[key];
          });
        }
      }, {
        key: "dispose",
        value: function dispose() {
          this.removeClasses([Classes.HIDDEN, Classes.VISIBLE, Classes.SHUFFLE_ITEM]);
          this.element.removeAttribute('style');
          this.element = null;
        }
      }]);
  
      return ShuffleItem;
    }();
  
    ShuffleItem.Css = {
      INITIAL: {
        position: 'absolute',
        top: 0,
        visibility: 'visible',
        willChange: 'transform'
      },
      DIRECTION: {
        ltr: {
          left: 0
        },
        rtl: {
          right: 0
        }
      },
      VISIBLE: {
        before: {
          opacity: 1,
          visibility: 'visible'
        },
        after: {
          transitionDelay: ''
        }
      },
      HIDDEN: {
        before: {
          opacity: 0
        },
        after: {
          visibility: 'hidden',
          transitionDelay: ''
        }
      }
    };
    ShuffleItem.Scale = {
      VISIBLE: 1,
      HIDDEN: 0.001
    };
  
    var value = null;
    var testComputedSize = (function () {
      if (value !== null) {
        return value;
      }
  
      var element = document.body || document.documentElement;
      var e = document.createElement('div');
      e.style.cssText = 'width:10px;padding:2px;box-sizing:border-box;';
      element.appendChild(e);
  
      var _window$getComputedSt = window.getComputedStyle(e, null),
          width = _window$getComputedSt.width; // Fix for issue #314
  
  
      value = Math.round(getNumber(width)) === 10;
      element.removeChild(e);
      return value;
    });
  
    /**
     * Retrieve the computed style for an element, parsed as a float.
     * @param {Element} element Element to get style for.
     * @param {string} style Style property.
     * @param {CSSStyleDeclaration} [styles] Optionally include clean styles to
     *     use instead of asking for them again.
     * @return {number} The parsed computed value or zero if that fails because IE
     *     will return 'auto' when the element doesn't have margins instead of
     *     the computed style.
     */
  
    function getNumberStyle(element, style) {
      var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.getComputedStyle(element, null);
      var value = getNumber(styles[style]); // Support IE<=11 and W3C spec.
  
      if (!testComputedSize() && style === 'width') {
        value += getNumber(styles.paddingLeft) + getNumber(styles.paddingRight) + getNumber(styles.borderLeftWidth) + getNumber(styles.borderRightWidth);
      } else if (!testComputedSize() && style === 'height') {
        value += getNumber(styles.paddingTop) + getNumber(styles.paddingBottom) + getNumber(styles.borderTopWidth) + getNumber(styles.borderBottomWidth);
      }
  
      return value;
    }
  
    /**
     * Fisher-Yates shuffle.
     * http://stackoverflow.com/a/962890/373422
     * https://bost.ocks.org/mike/shuffle/
     * @param {Array} array Array to shuffle.
     * @return {Array} Randomly sorted array.
     */
    function randomize(array) {
      var n = array.length;
  
      while (n) {
        n -= 1;
        var i = Math.floor(Math.random() * (n + 1));
        var temp = array[i];
        array[i] = array[n];
        array[n] = temp;
      }
  
      return array;
    }
  
    var defaults = {
      // Use array.reverse() to reverse the results
      reverse: false,
      // Sorting function
      by: null,
      // Custom sort function
      compare: null,
      // If true, this will skip the sorting and return a randomized order in the array
      randomize: false,
      // Determines which property of each item in the array is passed to the
      // sorting method.
      key: 'element'
    };
    /**
     * You can return `undefined` from the `by` function to revert to DOM order.
     * @param {Array<T>} arr Array to sort.
     * @param {SortOptions} options Sorting options.
     * @return {Array<T>}
     */
  
    function sorter(arr, options) {
      // eslint-disable-next-line prefer-object-spread
      var opts = Object.assign({}, defaults, options);
      var original = Array.from(arr);
      var revert = false;
  
      if (!arr.length) {
        return [];
      }
  
      if (opts.randomize) {
        return randomize(arr);
      } // Sort the elements by the opts.by function.
      // If we don't have opts.by, default to DOM order
  
  
      if (typeof opts.by === 'function') {
        arr.sort(function (a, b) {
          // Exit early if we already know we want to revert
          if (revert) {
            return 0;
          }
  
          var valA = opts.by(a[opts.key]);
          var valB = opts.by(b[opts.key]); // If both values are undefined, use the DOM order
  
          if (valA === undefined && valB === undefined) {
            revert = true;
            return 0;
          }
  
          if (valA < valB || valA === 'sortFirst' || valB === 'sortLast') {
            return -1;
          }
  
          if (valA > valB || valA === 'sortLast' || valB === 'sortFirst') {
            return 1;
          }
  
          return 0;
        });
      } else if (typeof opts.compare === 'function') {
        arr.sort(opts.compare);
      } // Revert to the original array if necessary
  
  
      if (revert) {
        return original;
      }
  
      if (opts.reverse) {
        arr.reverse();
      }
  
      return arr;
    }
  
    var transitions = {};
    var eventName = 'transitionend';
    var count = 0;
  
    function uniqueId() {
      count += 1;
      return eventName + count;
    }
  
    function cancelTransitionEnd(id) {
      if (transitions[id]) {
        transitions[id].element.removeEventListener(eventName, transitions[id].listener);
        transitions[id] = null;
        return true;
      }
  
      return false;
    }
    function onTransitionEnd(element, callback) {
      var id = uniqueId();
  
      var listener = function listener(evt) {
        if (evt.currentTarget === evt.target) {
          cancelTransitionEnd(id);
          callback(evt);
        }
      };
  
      element.addEventListener(eventName, listener);
      transitions[id] = {
        element: element,
        listener: listener
      };
      return id;
    }
  
    function arrayMax(array) {
      return Math.max.apply(Math, array); // eslint-disable-line prefer-spread
    }
  
    function arrayMin(array) {
      return Math.min.apply(Math, array); // eslint-disable-line prefer-spread
    }
  
    /**
     * Determine the number of columns an items spans.
     * @param {number} itemWidth Width of the item.
     * @param {number} columnWidth Width of the column (includes gutter).
     * @param {number} columns Total number of columns
     * @param {number} threshold A buffer value for the size of the column to fit.
     * @return {number}
     */
  
    function getColumnSpan(itemWidth, columnWidth, columns, threshold) {
      var columnSpan = itemWidth / columnWidth; // If the difference between the rounded column span number and the
      // calculated column span number is really small, round the number to
      // make it fit.
  
      if (Math.abs(Math.round(columnSpan) - columnSpan) < threshold) {
        // e.g. columnSpan = 4.0089945390298745
        columnSpan = Math.round(columnSpan);
      } // Ensure the column span is not more than the amount of columns in the whole layout.
  
  
      return Math.min(Math.ceil(columnSpan), columns);
    }
    /**
     * Retrieves the column set to use for placement.
     * @param {number} columnSpan The number of columns this current item spans.
     * @param {number} columns The total columns in the grid.
     * @return {Array.<number>} An array of numbers represeting the column set.
     */
  
    function getAvailablePositions(positions, columnSpan, columns) {
      // The item spans only one column.
      if (columnSpan === 1) {
        return positions;
      } // The item spans more than one column, figure out how many different
      // places it could fit horizontally.
      // The group count is the number of places within the positions this block
      // could fit, ignoring the current positions of items.
      // Imagine a 2 column brick as the second item in a 4 column grid with
      // 10px height each. Find the places it would fit:
      // [20, 10, 10, 0]
      //  |   |   |
      //  *   *   *
      //
      // Then take the places which fit and get the bigger of the two:
      // max([20, 10]), max([10, 10]), max([10, 0]) = [20, 10, 10]
      //
      // Next, find the first smallest number (the short column).
      // [20, 10, 10]
      //      |
      //      *
      //
      // And that's where it should be placed!
      //
      // Another example where the second column's item extends past the first:
      // [10, 20, 10, 0] => [20, 20, 10] => 10
  
  
      var available = []; // For how many possible positions for this item there are.
  
      for (var i = 0; i <= columns - columnSpan; i++) {
        // Find the bigger value for each place it could fit.
        available.push(arrayMax(positions.slice(i, i + columnSpan)));
      }
  
      return available;
    }
    /**
     * Find index of short column, the first from the left where this item will go.
     *
     * @param {Array.<number>} positions The array to search for the smallest number.
     * @param {number} buffer Optional buffer which is very useful when the height
     *     is a percentage of the width.
     * @return {number} Index of the short column.
     */
  
    function getShortColumn(positions, buffer) {
      var minPosition = arrayMin(positions);
  
      for (var i = 0, len = positions.length; i < len; i++) {
        if (positions[i] >= minPosition - buffer && positions[i] <= minPosition + buffer) {
          return i;
        }
      }
  
      return 0;
    }
    /**
     * Determine the location of the next item, based on its size.
     * @param {Object} itemSize Object with width and height.
     * @param {Array.<number>} positions Positions of the other current items.
     * @param {number} gridSize The column width or row height.
     * @param {number} total The total number of columns or rows.
     * @param {number} threshold Buffer value for the column to fit.
     * @param {number} buffer Vertical buffer for the height of items.
     * @return {Point}
     */
  
    function getItemPosition(_ref) {
      var itemSize = _ref.itemSize,
          positions = _ref.positions,
          gridSize = _ref.gridSize,
          total = _ref.total,
          threshold = _ref.threshold,
          buffer = _ref.buffer;
      var span = getColumnSpan(itemSize.width, gridSize, total, threshold);
      var setY = getAvailablePositions(positions, span, total);
      var shortColumnIndex = getShortColumn(setY, buffer); // Position the item
  
      var point = new Point(gridSize * shortColumnIndex, setY[shortColumnIndex]); // Update the columns array with the new values for each column.
      // e.g. before the update the columns could be [250, 0, 0, 0] for an item
      // which spans 2 columns. After it would be [250, itemHeight, itemHeight, 0].
  
      var setHeight = setY[shortColumnIndex] + itemSize.height;
  
      for (var i = 0; i < span; i++) {
        positions[shortColumnIndex + i] = setHeight;
      }
  
      return point;
    }
    /**
     * This method attempts to center items. This method could potentially be slow
     * with a large number of items because it must place items, then check every
     * previous item to ensure there is no overlap.
     * @param {Array.<Rect>} itemRects Item data objects.
     * @param {number} containerWidth Width of the containing element.
     * @return {Array.<Point>}
     */
  
    function getCenteredPositions(itemRects, containerWidth) {
      var rowMap = {}; // Populate rows by their offset because items could jump between rows like:
      // a   c
      //  bbb
  
      itemRects.forEach(function (itemRect) {
        if (rowMap[itemRect.top]) {
          // Push the point to the last row array.
          rowMap[itemRect.top].push(itemRect);
        } else {
          // Start of a new row.
          rowMap[itemRect.top] = [itemRect];
        }
      }); // For each row, find the end of the last item, then calculate
      // the remaining space by dividing it by 2. Then add that
      // offset to the x position of each point.
  
      var rects = [];
      var rows = [];
      var centeredRows = [];
      Object.keys(rowMap).forEach(function (key) {
        var itemRects = rowMap[key];
        rows.push(itemRects);
        var lastItem = itemRects[itemRects.length - 1];
        var end = lastItem.left + lastItem.width;
        var offset = Math.round((containerWidth - end) / 2);
        var finalRects = itemRects;
        var canMove = false;
  
        if (offset > 0) {
          var newRects = [];
          canMove = itemRects.every(function (r) {
            var newRect = new Rect(r.left + offset, r.top, r.width, r.height, r.id); // Check all current rects to make sure none overlap.
  
            var noOverlap = !rects.some(function (r) {
              return Rect.intersects(newRect, r);
            });
            newRects.push(newRect);
            return noOverlap;
          }); // If none of the rectangles overlapped, the whole group can be centered.
  
          if (canMove) {
            finalRects = newRects;
          }
        } // If the items are not going to be offset, ensure that the original
        // placement for this row will not overlap previous rows (row-spanning
        // elements could be in the way).
  
  
        if (!canMove) {
          var intersectingRect;
          var hasOverlap = itemRects.some(function (itemRect) {
            return rects.some(function (r) {
              var intersects = Rect.intersects(itemRect, r);
  
              if (intersects) {
                intersectingRect = r;
              }
  
              return intersects;
            });
          }); // If there is any overlap, replace the overlapping row with the original.
  
          if (hasOverlap) {
            var rowIndex = centeredRows.findIndex(function (items) {
              return items.includes(intersectingRect);
            });
            centeredRows.splice(rowIndex, 1, rows[rowIndex]);
          }
        }
  
        rects = rects.concat(finalRects);
        centeredRows.push(finalRects);
      }); // Reduce array of arrays to a single array of points.
      // https://stackoverflow.com/a/10865042/373422
      // Then reset sort back to how the items were passed to this method.
      // Remove the wrapper object with index, map to a Point.
  
      return [].concat.apply([], centeredRows) // eslint-disable-line prefer-spread
      .sort(function (a, b) {
        return a.id - b.id;
      }).map(function (itemRect) {
        return new Point(itemRect.left, itemRect.top);
      });
    }
  
    /**
     * Hyphenates a javascript style string to a css one. For example:
     * MozBoxSizing -> -moz-box-sizing.
     * @param {string} str The string to hyphenate.
     * @return {string} The hyphenated string.
     */
    function hyphenate(str) {
      return str.replace(/([A-Z])/g, function (str, m1) {
        return "-".concat(m1.toLowerCase());
      });
    }
  
    function arrayUnique(x) {
      return Array.from(new Set(x));
    } // Used for unique instance variables
  
  
    var id = 0;
  
    var Shuffle = /*#__PURE__*/function (_TinyEmitter) {
      _inherits(Shuffle, _TinyEmitter);
  
      var _super = _createSuper(Shuffle);
  
      /**
       * Categorize, sort, and filter a responsive grid of items.
       *
       * @param {Element} element An element which is the parent container for the grid items.
       * @param {Object} [options=Shuffle.options] Options object.
       * @constructor
       */
      function Shuffle(element) {
        var _this;
  
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        _classCallCheck(this, Shuffle);
  
        _this = _super.call(this); // eslint-disable-next-line prefer-object-spread
  
        _this.options = Object.assign({}, Shuffle.options, options); // Allow misspelling of delimiter since that's how it used to be.
        // Remove in v6.
  
        if (_this.options.delimeter) {
          _this.options.delimiter = _this.options.delimeter;
        }
  
        _this.lastSort = {};
        _this.group = Shuffle.ALL_ITEMS;
        _this.lastFilter = Shuffle.ALL_ITEMS;
        _this.isEnabled = true;
        _this.isDestroyed = false;
        _this.isInitialized = false;
        _this._transitions = [];
        _this.isTransitioning = false;
        _this._queue = [];
  
        var el = _this._getElementOption(element);
  
        if (!el) {
          throw new TypeError('Shuffle needs to be initialized with an element.');
        }
  
        _this.element = el;
        _this.id = 'shuffle_' + id;
        id += 1;
  
        _this._init();
  
        _this.isInitialized = true;
        return _this;
      }
  
      _createClass(Shuffle, [{
        key: "_init",
        value: function _init() {
          this.items = this._getItems();
          this.sortedItems = this.items;
          this.options.sizer = this._getElementOption(this.options.sizer); // Add class and invalidate styles
  
          this.element.classList.add(Shuffle.Classes.BASE); // Set initial css for each item
  
          this._initItems(this.items); // Bind resize events
  
  
          this._onResize = this._getResizeFunction();
          window.addEventListener('resize', this._onResize); // If the page has not already emitted the `load` event, call layout on load.
          // This avoids layout issues caused by images and fonts loading after the
          // instance has been initialized.
  
          if (document.readyState !== 'complete') {
            var layout = this.layout.bind(this);
            window.addEventListener('load', function onLoad() {
              window.removeEventListener('load', onLoad);
              layout();
            });
          } // Get container css all in one request. Causes reflow
  
  
          var containerCss = window.getComputedStyle(this.element, null);
          var containerWidth = Shuffle.getSize(this.element).width; // Add styles to the container if it doesn't have them.
  
          this._validateStyles(containerCss); // We already got the container's width above, no need to cause another
          // reflow getting it again... Calculate the number of columns there will be
  
  
          this._setColumns(containerWidth); // Kick off!
  
  
          this.filter(this.options.group, this.options.initialSort); // The shuffle items haven't had transitions set on them yet so the user
          // doesn't see the first layout. Set them now that the first layout is done.
          // First, however, a synchronous layout must be caused for the previous
          // styles to be applied without transitions.
  
          this.element.offsetWidth; // eslint-disable-line no-unused-expressions
  
          this.setItemTransitions(this.items);
          this.element.style.transition = "height ".concat(this.options.speed, "ms ").concat(this.options.easing);
        }
        /**
         * Returns a throttled and proxied function for the resize handler.
         * @return {function}
         * @private
         */
  
      }, {
        key: "_getResizeFunction",
        value: function _getResizeFunction() {
          var resizeFunction = this._handleResize.bind(this);
  
          return this.options.throttle ? this.options.throttle(resizeFunction, this.options.throttleTime) : resizeFunction;
        }
        /**
         * Retrieve an element from an option.
         * @param {string|jQuery|Element} option The option to check.
         * @return {?Element} The plain element or null.
         * @private
         */
  
      }, {
        key: "_getElementOption",
        value: function _getElementOption(option) {
          // If column width is a string, treat is as a selector and search for the
          // sizer element within the outermost container
          if (typeof option === 'string') {
            return this.element.querySelector(option);
          } // Check for an element
  
  
          if (option && option.nodeType && option.nodeType === 1) {
            return option;
          } // Check for jQuery object
  
  
          if (option && option.jquery) {
            return option[0];
          }
  
          return null;
        }
        /**
         * Ensures the shuffle container has the css styles it needs applied to it.
         * @param {Object} styles Key value pairs for position and overflow.
         * @private
         */
  
      }, {
        key: "_validateStyles",
        value: function _validateStyles(styles) {
          // Position cannot be static.
          if (styles.position === 'static') {
            this.element.style.position = 'relative';
          } // Overflow has to be hidden.
  
  
          if (styles.overflow !== 'hidden') {
            this.element.style.overflow = 'hidden';
          }
        }
        /**
         * Filter the elements by a category.
         * @param {string|string[]|function(Element):boolean} [category] Category to
         *     filter by. If it's given, the last category will be used to filter the items.
         * @param {Array} [collection] Optionally filter a collection. Defaults to
         *     all the items.
         * @return {{visible: ShuffleItem[], hidden: ShuffleItem[]}}
         * @private
         */
  
      }, {
        key: "_filter",
        value: function _filter() {
          var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastFilter;
          var collection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.items;
  
          var set = this._getFilteredSets(category, collection); // Individually add/remove hidden/visible classes
  
  
          this._toggleFilterClasses(set); // Save the last filter in case elements are appended.
  
  
          this.lastFilter = category; // This is saved mainly because providing a filter function (like searching)
          // will overwrite the `lastFilter` property every time its called.
  
          if (typeof category === 'string') {
            this.group = category;
          }
  
          return set;
        }
        /**
         * Returns an object containing the visible and hidden elements.
         * @param {string|string[]|function(Element):boolean} category Category or function to filter by.
         * @param {ShuffleItem[]} items A collection of items to filter.
         * @return {{visible: ShuffleItem[], hidden: ShuffleItem[]}}
         * @private
         */
  
      }, {
        key: "_getFilteredSets",
        value: function _getFilteredSets(category, items) {
          var _this2 = this;
  
          var visible = [];
          var hidden = []; // category === 'all', add visible class to everything
  
          if (category === Shuffle.ALL_ITEMS) {
            visible = items; // Loop through each item and use provided function to determine
            // whether to hide it or not.
          } else {
            items.forEach(function (item) {
              if (_this2._doesPassFilter(category, item.element)) {
                visible.push(item);
              } else {
                hidden.push(item);
              }
            });
          }
  
          return {
            visible: visible,
            hidden: hidden
          };
        }
        /**
         * Test an item to see if it passes a category.
         * @param {string|string[]|function():boolean} category Category or function to filter by.
         * @param {Element} element An element to test.
         * @return {boolean} Whether it passes the category/filter.
         * @private
         */
  
      }, {
        key: "_doesPassFilter",
        value: function _doesPassFilter(category, element) {
          if (typeof category === 'function') {
            return category.call(element, element, this);
          } // Check each element's data-groups attribute against the given category.
  
  
          var attr = element.getAttribute('data-' + Shuffle.FILTER_ATTRIBUTE_KEY);
          var keys = this.options.delimiter ? attr.split(this.options.delimiter) : JSON.parse(attr);
  
          function testCategory(category) {
            return keys.includes(category);
          }
  
          if (Array.isArray(category)) {
            if (this.options.filterMode === Shuffle.FilterMode.ANY) {
              return category.some(testCategory);
            }
  
            return category.every(testCategory);
          }
  
          return keys.includes(category);
        }
        /**
         * Toggles the visible and hidden class names.
         * @param {{visible, hidden}} Object with visible and hidden arrays.
         * @private
         */
  
      }, {
        key: "_toggleFilterClasses",
        value: function _toggleFilterClasses(_ref) {
          var visible = _ref.visible,
              hidden = _ref.hidden;
          visible.forEach(function (item) {
            item.show();
          });
          hidden.forEach(function (item) {
            item.hide();
          });
        }
        /**
         * Set the initial css for each item
         * @param {ShuffleItem[]} items Set to initialize.
         * @private
         */
  
      }, {
        key: "_initItems",
        value: function _initItems(items) {
          items.forEach(function (item) {
            item.init();
          });
        }
        /**
         * Remove element reference and styles.
         * @param {ShuffleItem[]} items Set to dispose.
         * @private
         */
  
      }, {
        key: "_disposeItems",
        value: function _disposeItems(items) {
          items.forEach(function (item) {
            item.dispose();
          });
        }
        /**
         * Updates the visible item count.
         * @private
         */
  
      }, {
        key: "_updateItemCount",
        value: function _updateItemCount() {
          this.visibleItems = this._getFilteredItems().length;
        }
        /**
         * Sets css transform transition on a group of elements. This is not executed
         * at the same time as `item.init` so that transitions don't occur upon
         * initialization of a new Shuffle instance.
         * @param {ShuffleItem[]} items Shuffle items to set transitions on.
         * @protected
         */
  
      }, {
        key: "setItemTransitions",
        value: function setItemTransitions(items) {
          var _this$options = this.options,
              speed = _this$options.speed,
              easing = _this$options.easing;
          var positionProps = this.options.useTransforms ? ['transform'] : ['top', 'left']; // Allow users to transtion other properties if they exist in the `before`
          // css mapping of the shuffle item.
  
          var cssProps = Object.keys(ShuffleItem.Css.HIDDEN.before).map(function (k) {
            return hyphenate(k);
          });
          var properties = positionProps.concat(cssProps).join();
          items.forEach(function (item) {
            item.element.style.transitionDuration = speed + 'ms';
            item.element.style.transitionTimingFunction = easing;
            item.element.style.transitionProperty = properties;
          });
        }
      }, {
        key: "_getItems",
        value: function _getItems() {
          var _this3 = this;
  
          return Array.from(this.element.children).filter(function (el) {
            return matchesSelector(el, _this3.options.itemSelector);
          }).map(function (el) {
            return new ShuffleItem(el, _this3.options.isRTL);
          });
        }
        /**
         * Combine the current items array with a new one and sort it by DOM order.
         * @param {ShuffleItem[]} items Items to track.
         * @return {ShuffleItem[]}
         */
  
      }, {
        key: "_mergeNewItems",
        value: function _mergeNewItems(items) {
          var children = Array.from(this.element.children);
          return sorter(this.items.concat(items), {
            by: function by(element) {
              return children.indexOf(element);
            }
          });
        }
      }, {
        key: "_getFilteredItems",
        value: function _getFilteredItems() {
          return this.items.filter(function (item) {
            return item.isVisible;
          });
        }
      }, {
        key: "_getConcealedItems",
        value: function _getConcealedItems() {
          return this.items.filter(function (item) {
            return !item.isVisible;
          });
        }
        /**
         * Returns the column size, based on column width and sizer options.
         * @param {number} containerWidth Size of the parent container.
         * @param {number} gutterSize Size of the gutters.
         * @return {number}
         * @private
         */
  
      }, {
        key: "_getColumnSize",
        value: function _getColumnSize(containerWidth, gutterSize) {
          var size; // If the columnWidth property is a function, then the grid is fluid
  
          if (typeof this.options.columnWidth === 'function') {
            size = this.options.columnWidth(containerWidth); // columnWidth option isn't a function, are they using a sizing element?
          } else if (this.options.sizer) {
            size = Shuffle.getSize(this.options.sizer).width; // if not, how about the explicitly set option?
          } else if (this.options.columnWidth) {
            size = this.options.columnWidth; // or use the size of the first item
          } else if (this.items.length > 0) {
            size = Shuffle.getSize(this.items[0].element, true).width; // if there's no items, use size of container
          } else {
            size = containerWidth;
          } // Don't let them set a column width of zero.
  
  
          if (size === 0) {
            size = containerWidth;
          }
  
          return size + gutterSize;
        }
        /**
         * Returns the gutter size, based on gutter width and sizer options.
         * @param {number} containerWidth Size of the parent container.
         * @return {number}
         * @private
         */
  
      }, {
        key: "_getGutterSize",
        value: function _getGutterSize(containerWidth) {
          var size;
  
          if (typeof this.options.gutterWidth === 'function') {
            size = this.options.gutterWidth(containerWidth);
          } else if (this.options.sizer) {
            size = getNumberStyle(this.options.sizer, 'marginLeft');
          } else {
            size = this.options.gutterWidth;
          }
  
          return size;
        }
        /**
         * Calculate the number of columns to be used. Gets css if using sizer element.
         * @param {number} [containerWidth] Optionally specify a container width if
         *    it's already available.
         */
  
      }, {
        key: "_setColumns",
        value: function _setColumns() {
          var containerWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Shuffle.getSize(this.element).width;
  
          var gutter = this._getGutterSize(containerWidth);
  
          var columnWidth = this._getColumnSize(containerWidth, gutter);
  
          var calculatedColumns = (containerWidth + gutter) / columnWidth; // Widths given from getStyles are not precise enough...
  
          if (Math.abs(Math.round(calculatedColumns) - calculatedColumns) < this.options.columnThreshold) {
            // e.g. calculatedColumns = 11.998876
            calculatedColumns = Math.round(calculatedColumns);
          }
  
          this.cols = Math.max(Math.floor(calculatedColumns || 0), 1);
          this.containerWidth = containerWidth;
          this.colWidth = columnWidth;
        }
        /**
         * Adjust the height of the grid
         */
  
      }, {
        key: "_setContainerSize",
        value: function _setContainerSize() {
          this.element.style.height = this._getContainerSize() + 'px';
        }
        /**
         * Based on the column heights, it returns the biggest one.
         * @return {number}
         * @private
         */
  
      }, {
        key: "_getContainerSize",
        value: function _getContainerSize() {
          return arrayMax(this.positions);
        }
        /**
         * Get the clamped stagger amount.
         * @param {number} index Index of the item to be staggered.
         * @return {number}
         */
  
      }, {
        key: "_getStaggerAmount",
        value: function _getStaggerAmount(index) {
          return Math.min(index * this.options.staggerAmount, this.options.staggerAmountMax);
        }
        /**
         * Emit an event from this instance.
         * @param {string} name Event name.
         * @param {Object} [data={}] Optional object data.
         */
  
      }, {
        key: "_dispatch",
        value: function _dispatch(name) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
          if (this.isDestroyed) {
            return;
          }
  
          data.shuffle = this;
          this.emit(name, data);
        }
        /**
         * Zeros out the y columns array, which is used to determine item placement.
         * @private
         */
  
      }, {
        key: "_resetCols",
        value: function _resetCols() {
          var i = this.cols;
          this.positions = [];
  
          while (i) {
            i -= 1;
            this.positions.push(0);
          }
        }
        /**
         * Loops through each item that should be shown and calculates the x, y position.
         * @param {ShuffleItem[]} items Array of items that will be shown/layed
         *     out in order in their array.
         */
  
      }, {
        key: "_layout",
        value: function _layout(items) {
          var _this4 = this;
  
          var itemPositions = this._getNextPositions(items);
  
          var count = 0;
          items.forEach(function (item, i) {
            function callback() {
              item.applyCss(ShuffleItem.Css.VISIBLE.after);
            } // If the item will not change its position, do not add it to the render
            // queue. Transitions don't fire when setting a property to the same value.
  
  
            if (Point.equals(item.point, itemPositions[i]) && !item.isHidden) {
              item.applyCss(ShuffleItem.Css.VISIBLE.before);
              callback();
              return;
            }
  
            item.point = itemPositions[i];
            item.scale = ShuffleItem.Scale.VISIBLE;
            item.isHidden = false; // Clone the object so that the `before` object isn't modified when the
            // transition delay is added.
  
            var styles = _this4.getStylesForTransition(item, ShuffleItem.Css.VISIBLE.before);
  
            styles.transitionDelay = _this4._getStaggerAmount(count) + 'ms';
  
            _this4._queue.push({
              item: item,
              styles: styles,
              callback: callback
            });
  
            count += 1;
          });
        }
        /**
         * Return an array of Point instances representing the future positions of
         * each item.
         * @param {ShuffleItem[]} items Array of sorted shuffle items.
         * @return {Point[]}
         * @private
         */
  
      }, {
        key: "_getNextPositions",
        value: function _getNextPositions(items) {
          var _this5 = this;
  
          // If position data is going to be changed, add the item's size to the
          // transformer to allow for calculations.
          if (this.options.isCentered) {
            var itemsData = items.map(function (item, i) {
              var itemSize = Shuffle.getSize(item.element, true);
  
              var point = _this5._getItemPosition(itemSize);
  
              return new Rect(point.x, point.y, itemSize.width, itemSize.height, i);
            });
            return this.getTransformedPositions(itemsData, this.containerWidth);
          } // If no transforms are going to happen, simply return an array of the
          // future points of each item.
  
  
          return items.map(function (item) {
            return _this5._getItemPosition(Shuffle.getSize(item.element, true));
          });
        }
        /**
         * Determine the location of the next item, based on its size.
         * @param {{width: number, height: number}} itemSize Object with width and height.
         * @return {Point}
         * @private
         */
  
      }, {
        key: "_getItemPosition",
        value: function _getItemPosition(itemSize) {
          return getItemPosition({
            itemSize: itemSize,
            positions: this.positions,
            gridSize: this.colWidth,
            total: this.cols,
            threshold: this.options.columnThreshold,
            buffer: this.options.buffer
          });
        }
        /**
         * Mutate positions before they're applied.
         * @param {Rect[]} itemRects Item data objects.
         * @param {number} containerWidth Width of the containing element.
         * @return {Point[]}
         * @protected
         */
  
      }, {
        key: "getTransformedPositions",
        value: function getTransformedPositions(itemRects, containerWidth) {
          return getCenteredPositions(itemRects, containerWidth);
        }
        /**
         * Hides the elements that don't match our filter.
         * @param {ShuffleItem[]} collection Collection to shrink.
         * @private
         */
  
      }, {
        key: "_shrink",
        value: function _shrink() {
          var _this6 = this;
  
          var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getConcealedItems();
          var count = 0;
          collection.forEach(function (item) {
            function callback() {
              item.applyCss(ShuffleItem.Css.HIDDEN.after);
            } // Continuing would add a transitionend event listener to the element, but
            // that listener would not execute because the transform and opacity would
            // stay the same.
            // The callback is executed here because it is not guaranteed to be called
            // after the transitionend event because the transitionend could be
            // canceled if another animation starts.
  
  
            if (item.isHidden) {
              item.applyCss(ShuffleItem.Css.HIDDEN.before);
              callback();
              return;
            }
  
            item.scale = ShuffleItem.Scale.HIDDEN;
            item.isHidden = true;
  
            var styles = _this6.getStylesForTransition(item, ShuffleItem.Css.HIDDEN.before);
  
            styles.transitionDelay = _this6._getStaggerAmount(count) + 'ms';
  
            _this6._queue.push({
              item: item,
              styles: styles,
              callback: callback
            });
  
            count += 1;
          });
        }
        /**
         * Resize handler.
         * @private
         */
  
      }, {
        key: "_handleResize",
        value: function _handleResize() {
          // If shuffle is disabled, destroyed, don't do anything
          if (!this.isEnabled || this.isDestroyed) {
            return;
          }
  
          this.update();
        }
        /**
         * Returns styles which will be applied to the an item for a transition.
         * @param {ShuffleItem} item Item to get styles for. Should have updated
         *   scale and point properties.
         * @param {Object} styleObject Extra styles that will be used in the transition.
         * @return {!Object} Transforms for transitions, left/top for animate.
         * @protected
         */
  
      }, {
        key: "getStylesForTransition",
        value: function getStylesForTransition(item, styleObject) {
          // Clone the object to avoid mutating the original.
          // eslint-disable-next-line prefer-object-spread
          var styles = Object.assign({}, styleObject);
  
          if (this.options.useTransforms) {
            var sign = this.options.isRTL ? '-' : '';
            var x = this.options.roundTransforms ? Math.round(item.point.x) : item.point.x;
            var y = this.options.roundTransforms ? Math.round(item.point.y) : item.point.y;
            styles.transform = "translate(".concat(sign).concat(x, "px, ").concat(y, "px) scale(").concat(item.scale, ")");
          } else {
            if (this.options.isRTL) {
              styles.right = item.point.x + 'px';
            } else {
              styles.left = item.point.x + 'px';
            }
  
            styles.top = item.point.y + 'px';
          }
  
          return styles;
        }
        /**
         * Listen for the transition end on an element and execute the itemCallback
         * when it finishes.
         * @param {Element} element Element to listen on.
         * @param {function} itemCallback Callback for the item.
         * @param {function} done Callback to notify `parallel` that this one is done.
         */
  
      }, {
        key: "_whenTransitionDone",
        value: function _whenTransitionDone(element, itemCallback, done) {
          var id = onTransitionEnd(element, function (evt) {
            itemCallback();
            done(null, evt);
          });
  
          this._transitions.push(id);
        }
        /**
         * Return a function which will set CSS styles and call the `done` function
         * when (if) the transition finishes.
         * @param {Object} opts Transition object.
         * @return {function} A function to be called with a `done` function.
         */
  
      }, {
        key: "_getTransitionFunction",
        value: function _getTransitionFunction(opts) {
          var _this7 = this;
  
          return function (done) {
            opts.item.applyCss(opts.styles);
  
            _this7._whenTransitionDone(opts.item.element, opts.callback, done);
          };
        }
        /**
         * Execute the styles gathered in the style queue. This applies styles to elements,
         * triggering transitions.
         * @private
         */
  
      }, {
        key: "_processQueue",
        value: function _processQueue() {
          if (this.isTransitioning) {
            this._cancelMovement();
          }
  
          var hasSpeed = this.options.speed > 0;
          var hasQueue = this._queue.length > 0;
  
          if (hasQueue && hasSpeed && this.isInitialized) {
            this._startTransitions(this._queue);
          } else if (hasQueue) {
            this._styleImmediately(this._queue);
  
            this._dispatch(Shuffle.EventType.LAYOUT); // A call to layout happened, but none of the newly visible items will
            // change position or the transition duration is zero, which will not trigger
            // the transitionend event.
  
          } else {
            this._dispatch(Shuffle.EventType.LAYOUT);
          } // Remove everything in the style queue
  
  
          this._queue.length = 0;
        }
        /**
         * Wait for each transition to finish, the emit the layout event.
         * @param {Object[]} transitions Array of transition objects.
         */
  
      }, {
        key: "_startTransitions",
        value: function _startTransitions(transitions) {
          var _this8 = this;
  
          // Set flag that shuffle is currently in motion.
          this.isTransitioning = true; // Create an array of functions to be called.
  
          var callbacks = transitions.map(function (obj) {
            return _this8._getTransitionFunction(obj);
          });
          arrayParallel(callbacks, this._movementFinished.bind(this));
        }
      }, {
        key: "_cancelMovement",
        value: function _cancelMovement() {
          // Remove the transition end event for each listener.
          this._transitions.forEach(cancelTransitionEnd); // Reset the array.
  
  
          this._transitions.length = 0; // Show it's no longer active.
  
          this.isTransitioning = false;
        }
        /**
         * Apply styles without a transition.
         * @param {Object[]} objects Array of transition objects.
         * @private
         */
  
      }, {
        key: "_styleImmediately",
        value: function _styleImmediately(objects) {
          if (objects.length) {
            var elements = objects.map(function (obj) {
              return obj.item.element;
            });
  
            Shuffle._skipTransitions(elements, function () {
              objects.forEach(function (obj) {
                obj.item.applyCss(obj.styles);
                obj.callback();
              });
            });
          }
        }
      }, {
        key: "_movementFinished",
        value: function _movementFinished() {
          this._transitions.length = 0;
          this.isTransitioning = false;
  
          this._dispatch(Shuffle.EventType.LAYOUT);
        }
        /**
         * The magic. This is what makes the plugin 'shuffle'
         * @param {string|string[]|function(Element):boolean} [category] Category to filter by.
         *     Can be a function, string, or array of strings.
         * @param {SortOptions} [sortOptions] A sort object which can sort the visible set
         */
  
      }, {
        key: "filter",
        value: function filter(category, sortOptions) {
          if (!this.isEnabled) {
            return;
          }
  
          if (!category || category && category.length === 0) {
            category = Shuffle.ALL_ITEMS; // eslint-disable-line no-param-reassign
          }
  
          this._filter(category); // Shrink each hidden item
  
  
          this._shrink(); // How many visible elements?
  
  
          this._updateItemCount(); // Update transforms on visible elements so they will animate to their new positions.
  
  
          this.sort(sortOptions);
        }
        /**
         * Gets the visible elements, sorts them, and passes them to layout.
         * @param {SortOptions} [sortOptions] The options object to pass to `sorter`.
         */
  
      }, {
        key: "sort",
        value: function sort() {
          var sortOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastSort;
  
          if (!this.isEnabled) {
            return;
          }
  
          this._resetCols();
  
          var items = sorter(this._getFilteredItems(), sortOptions);
          this.sortedItems = items;
  
          this._layout(items); // `_layout` always happens after `_shrink`, so it's safe to process the style
          // queue here with styles from the shrink method.
  
  
          this._processQueue(); // Adjust the height of the container.
  
  
          this._setContainerSize();
  
          this.lastSort = sortOptions;
        }
        /**
         * Reposition everything.
         * @param {boolean} [isOnlyLayout=false] If true, column and gutter widths won't be recalculated.
         */
  
      }, {
        key: "update",
        value: function update() {
          var isOnlyLayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  
          if (this.isEnabled) {
            if (!isOnlyLayout) {
              // Get updated colCount
              this._setColumns();
            } // Layout items
  
  
            this.sort();
          }
        }
        /**
         * Use this instead of `update()` if you don't need the columns and gutters updated
         * Maybe an image inside `shuffle` loaded (and now has a height), which means calculations
         * could be off.
         */
  
      }, {
        key: "layout",
        value: function layout() {
          this.update(true);
        }
        /**
         * New items have been appended to shuffle. Mix them in with the current
         * filter or sort status.
         * @param {Element[]} newItems Collection of new items.
         */
  
      }, {
        key: "add",
        value: function add(newItems) {
          var _this9 = this;
  
          var items = arrayUnique(newItems).map(function (el) {
            return new ShuffleItem(el, _this9.options.isRTL);
          }); // Add classes and set initial positions.
  
          this._initItems(items); // Determine which items will go with the current filter.
  
  
          this._resetCols();
  
          var allItems = this._mergeNewItems(items);
  
          var sortedItems = sorter(allItems, this.lastSort);
  
          var allSortedItemsSet = this._filter(this.lastFilter, sortedItems);
  
          var isNewItem = function isNewItem(item) {
            return items.includes(item);
          };
  
          var applyHiddenState = function applyHiddenState(item) {
            item.scale = ShuffleItem.Scale.HIDDEN;
            item.isHidden = true;
            item.applyCss(ShuffleItem.Css.HIDDEN.before);
            item.applyCss(ShuffleItem.Css.HIDDEN.after);
          }; // Layout all items again so that new items get positions.
          // Synchonously apply positions.
  
  
          var itemPositions = this._getNextPositions(allSortedItemsSet.visible);
  
          allSortedItemsSet.visible.forEach(function (item, i) {
            if (isNewItem(item)) {
              item.point = itemPositions[i];
              applyHiddenState(item);
              item.applyCss(_this9.getStylesForTransition(item, {}));
            }
          });
          allSortedItemsSet.hidden.forEach(function (item) {
            if (isNewItem(item)) {
              applyHiddenState(item);
            }
          }); // Cause layout so that the styles above are applied.
  
          this.element.offsetWidth; // eslint-disable-line no-unused-expressions
          // Add transition to each item.
  
          this.setItemTransitions(items); // Update the list of items.
  
          this.items = this._mergeNewItems(items); // Update layout/visibility of new and old items.
  
          this.filter(this.lastFilter);
        }
        /**
         * Disables shuffle from updating dimensions and layout on resize
         */
  
      }, {
        key: "disable",
        value: function disable() {
          this.isEnabled = false;
        }
        /**
         * Enables shuffle again
         * @param {boolean} [isUpdateLayout=true] if undefined, shuffle will update columns and gutters
         */
  
      }, {
        key: "enable",
        value: function enable() {
          var isUpdateLayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this.isEnabled = true;
  
          if (isUpdateLayout) {
            this.update();
          }
        }
        /**
         * Remove 1 or more shuffle items.
         * @param {Element[]} elements An array containing one or more
         *     elements in shuffle
         * @return {Shuffle} The shuffle instance.
         */
  
      }, {
        key: "remove",
        value: function remove(elements) {
          var _this10 = this;
  
          if (!elements.length) {
            return;
          }
  
          var collection = arrayUnique(elements);
          var oldItems = collection.map(function (element) {
            return _this10.getItemByElement(element);
          }).filter(function (item) {
            return !!item;
          });
  
          var handleLayout = function handleLayout() {
            _this10._disposeItems(oldItems); // Remove the collection in the callback
  
  
            collection.forEach(function (element) {
              element.parentNode.removeChild(element);
            });
  
            _this10._dispatch(Shuffle.EventType.REMOVED, {
              collection: collection
            });
          }; // Hide collection first.
  
  
          this._toggleFilterClasses({
            visible: [],
            hidden: oldItems
          });
  
          this._shrink(oldItems);
  
          this.sort(); // Update the list of items here because `remove` could be called again
          // with an item that is in the process of being removed.
  
          this.items = this.items.filter(function (item) {
            return !oldItems.includes(item);
          });
  
          this._updateItemCount();
  
          this.once(Shuffle.EventType.LAYOUT, handleLayout);
        }
        /**
         * Retrieve a shuffle item by its element.
         * @param {Element} element Element to look for.
         * @return {?ShuffleItem} A shuffle item or undefined if it's not found.
         */
  
      }, {
        key: "getItemByElement",
        value: function getItemByElement(element) {
          return this.items.find(function (item) {
            return item.element === element;
          });
        }
        /**
         * Dump the elements currently stored and reinitialize all child elements which
         * match the `itemSelector`.
         */
  
      }, {
        key: "resetItems",
        value: function resetItems() {
          var _this11 = this;
  
          // Remove refs to current items.
          this._disposeItems(this.items);
  
          this.isInitialized = false; // Find new items in the DOM.
  
          this.items = this._getItems(); // Set initial styles on the new items.
  
          this._initItems(this.items);
  
          this.once(Shuffle.EventType.LAYOUT, function () {
            // Add transition to each item.
            _this11.setItemTransitions(_this11.items);
  
            _this11.isInitialized = true;
          }); // Lay out all items.
  
          this.filter(this.lastFilter);
        }
        /**
         * Destroys shuffle, removes events, styles, and classes
         */
  
      }, {
        key: "destroy",
        value: function destroy() {
          this._cancelMovement();
  
          window.removeEventListener('resize', this._onResize); // Reset container styles
  
          this.element.classList.remove('shuffle');
          this.element.removeAttribute('style'); // Reset individual item styles
  
          this._disposeItems(this.items);
  
          this.items.length = 0;
          this._transitions.length = 0; // Null DOM references
  
          this.options.sizer = null;
          this.element = null; // Set a flag so if a debounced resize has been triggered,
          // it can first check if it is actually isDestroyed and not doing anything
  
          this.isDestroyed = true;
          this.isEnabled = false;
        }
        /**
         * Returns the outer width of an element, optionally including its margins.
         *
         * There are a few different methods for getting the width of an element, none of
         * which work perfectly for all Shuffle's use cases.
         *
         * 1. getBoundingClientRect() `left` and `right` properties.
         *   - Accounts for transform scaled elements, making it useless for Shuffle
         *   elements which have shrunk.
         * 2. The `offsetWidth` property.
         *   - This value stays the same regardless of the elements transform property,
         *   however, it does not return subpixel values.
         * 3. getComputedStyle()
         *   - This works great Chrome, Firefox, Safari, but IE<=11 does not include
         *   padding and border when box-sizing: border-box is set, requiring a feature
         *   test and extra work to add the padding back for IE and other browsers which
         *   follow the W3C spec here.
         *
         * @param {Element} element The element.
         * @param {boolean} [includeMargins=false] Whether to include margins.
         * @return {{width: number, height: number}} The width and height.
         */
  
      }], [{
        key: "getSize",
        value: function getSize(element) {
          var includeMargins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          // Store the styles so that they can be used by others without asking for it again.
          var styles = window.getComputedStyle(element, null);
          var width = getNumberStyle(element, 'width', styles);
          var height = getNumberStyle(element, 'height', styles);
  
          if (includeMargins) {
            var marginLeft = getNumberStyle(element, 'marginLeft', styles);
            var marginRight = getNumberStyle(element, 'marginRight', styles);
            var marginTop = getNumberStyle(element, 'marginTop', styles);
            var marginBottom = getNumberStyle(element, 'marginBottom', styles);
            width += marginLeft + marginRight;
            height += marginTop + marginBottom;
          }
  
          return {
            width: width,
            height: height
          };
        }
        /**
         * Change a property or execute a function which will not have a transition
         * @param {Element[]} elements DOM elements that won't be transitioned.
         * @param {function} callback A function which will be called while transition
         *     is set to 0ms.
         * @private
         */
  
      }, {
        key: "_skipTransitions",
        value: function _skipTransitions(elements, callback) {
          var zero = '0ms'; // Save current duration and delay.
  
          var data = elements.map(function (element) {
            var style = element.style;
            var duration = style.transitionDuration;
            var delay = style.transitionDelay; // Set the duration to zero so it happens immediately
  
            style.transitionDuration = zero;
            style.transitionDelay = zero;
            return {
              duration: duration,
              delay: delay
            };
          });
          callback(); // Cause forced synchronous layout.
  
          elements[0].offsetWidth; // eslint-disable-line no-unused-expressions
          // Put the duration back
  
          elements.forEach(function (element, i) {
            element.style.transitionDuration = data[i].duration;
            element.style.transitionDelay = data[i].delay;
          });
        }
      }]);
  
      return Shuffle;
    }(TinyEmitter);
  
    Shuffle.ShuffleItem = ShuffleItem;
    Shuffle.ALL_ITEMS = 'all';
    Shuffle.FILTER_ATTRIBUTE_KEY = 'groups';
    /** @enum {string} */
  
    Shuffle.EventType = {
      LAYOUT: 'shuffle:layout',
      REMOVED: 'shuffle:removed'
    };
    /** @enum {string} */
  
    Shuffle.Classes = Classes;
    /** @enum {string} */
  
    Shuffle.FilterMode = {
      ANY: 'any',
      ALL: 'all'
    }; // Overrideable options
  
    Shuffle.options = {
      // Initial filter group.
      group: Shuffle.ALL_ITEMS,
      // Transition/animation speed (milliseconds).
      speed: 250,
      // CSS easing function to use.
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      // e.g. '.picture-item'.
      itemSelector: '*',
      // Element or selector string. Use an element to determine the size of columns
      // and gutters.
      sizer: null,
      // A static number or function that tells the plugin how wide the gutters
      // between columns are (in pixels).
      gutterWidth: 0,
      // A static number or function that returns a number which tells the plugin
      // how wide the columns are (in pixels).
      columnWidth: 0,
      // If your group is not json, and is comma delimeted, you could set delimiter
      // to ','.
      delimiter: null,
      // Useful for percentage based heights when they might not always be exactly
      // the same (in pixels).
      buffer: 0,
      // Reading the width of elements isn't precise enough and can cause columns to
      // jump between values.
      columnThreshold: 0.01,
      // Shuffle can be isInitialized with a sort object. It is the same object
      // given to the sort method.
      initialSort: null,
      // By default, shuffle will throttle resize events. This can be changed or
      // removed.
      throttle: throttleit,
      // How often shuffle can be called on resize (in milliseconds).
      throttleTime: 300,
      // Transition delay offset for each item in milliseconds.
      staggerAmount: 15,
      // Maximum stagger delay in milliseconds.
      staggerAmountMax: 150,
      // Whether to use transforms or absolute positioning.
      useTransforms: true,
      // Affects using an array with filter. e.g. `filter(['one', 'two'])`. With "any",
      // the element passes the test if any of its groups are in the array. With "all",
      // the element only passes if all groups are in the array.
      filterMode: Shuffle.FilterMode.ANY,
      // Attempt to center grid items in each row.
      isCentered: false,
      // Attempt to align grid items to right.
      isRTL: false,
      // Whether to round pixel values used in translate(x, y). This usually avoids
      // blurriness.
      roundTransforms: true
    };
    Shuffle.Point = Point;
    Shuffle.Rect = Rect; // Expose for testing. Hack at your own risk.
  
    Shuffle.__sorter = sorter;
    Shuffle.__getColumnSpan = getColumnSpan;
    Shuffle.__getAvailablePositions = getAvailablePositions;
    Shuffle.__getShortColumn = getShortColumn;
    Shuffle.__getCenteredPositions = getCenteredPositions;
  
    return Shuffle;
  
  })));
  //# sourceMappingURL=shuffle.js.map


  console.log("SHUFFLE JS ..... loaded");

  /* FULLSCREEN ZOOM */

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  window.cancelRequestAnimFrame = ( function() {
      return window.cancelAnimationFrame          ||
          window.webkitCancelRequestAnimationFrame    ||
          window.mozCancelRequestAnimationFrame       ||
          window.oCancelRequestAnimationFrame     ||
          window.msCancelRequestAnimationFrame        ||
          clearTimeout
  } )();
  
  
  var Intense = (function() {
  
      'use strict';
  
      var KEYCODE_ESC = 27;
  
      // Track both the current and destination mouse coordinates
      // Destination coordinates are non-eased actual mouse coordinates
      var mouse = { xCurr:0, yCurr:0, xDest: 0, yDest: 0 };
  
      var horizontalOrientation = true;
  
      // Holds the animation frame id.
      var looper;
    
      // Current position of scrolly element
      var lastPosition, currentPosition = 0;
      
      var sourceDimensions, target;
      var targetDimensions = { w: 0, h: 0 };
    
      var container;
      var containerDimensions = { w: 0, h:0 };
      var overflowArea = { x: 0, y: 0 };
  
      // Overflow variable before screen is locked.
      var overflowValue;
  
      /* -------------------------
      /*          UTILS
      /* -------------------------*/
  
      // Soft object augmentation
      function extend( target, source ) {
  
          for ( var key in source )
  
              if ( !( key in target ) )
  
                  target[ key ] = source[ key ];
  
          return target;
      }
  
      // Applys a dict of css properties to an element
      function applyProperties( target, properties ) {
  
        for( var key in properties ) {
          target.style[ key ] = properties[ key ];
        }
      }
  
      // Returns whether target a vertical or horizontal fit in the page.
      // As well as the right fitting width/height of the image.
      function getFit( 
  
        source ) {
  
        var heightRatio = window.innerHeight / source.h;
  
        if( (source.w * heightRatio) > window.innerWidth ) {
          return { w: source.w * heightRatio, h: source.h * heightRatio, fit: true };
        } else {
          var widthRatio = window.innerWidth / source.w;
          return { w: source.w * widthRatio, h: source.h * widthRatio, fit: false };
        }
      }
  
      /* -------------------------
      /*          APP
      /* -------------------------*/
  
      function startTracking( passedElements ) {
  
        var i;
  
        // If passed an array of elements, assign tracking to all.
        if ( passedElements.length ) {
  
          // Loop and assign
          for( i = 0; i < passedElements.length; i++ ) {
            track( passedElements[ i ] );
          }
  
        } else {
            track( passedElements );
        }
      }
  
      function track( element ) {
  
        // Element needs a src at minumun.
        if( element.getAttribute( 'data-image') || element.src ) {
          element.addEventListener( 'click', function() {
            init( this );
          }, false );
        }
      }
    

      function start() { 
        loop();
      }
     
      function stop() {
        cancelRequestAnimFrame( looper );
      }
  
      function loop() {
          looper = requestAnimFrame(loop);
          positionTarget();      
      }
  
      // Lock scroll on the document body.
      function lockBody() {
  
        overflowValue = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
  
      // Unlock scroll on the document body.
      function unlockBody() {
        document.body.style.overflow = overflowValue;
      }
  
      function createViewer( title, caption ) {
  
        /*
         *  Container
         */
        var containerProperties = {
          'backgroundColor': 'rgba(0,0,0,0.8)',
          'width': '100%',
          'height': '100%',
          'position': 'fixed',
          'top': '0px',
          'left': '0px',
          'overflow': 'hidden',
          'zIndex': '999999',
          'margin': '0px',
          'webkitTransition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
          'MozTransition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
          'transition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
          'opacity': '0'
        }
        container = document.createElement( 'figure' );
        container.appendChild( target );
        applyProperties( container, containerProperties );
  
        var imageProperties = {
          'cursor': 'url( "https://uploads-ssl.webflow.com/6061fc4a0ad1c29787bd162c/60dc69289d7b776bb9ec5ab0_close-fullscreen.svg" ) 64 64, auto'
        }
        applyProperties( target, imageProperties );
  
        /*
         *  Caption Container
         */
        var captionContainerProperties = {
          'fontFamily': 'Hkspec, sans',
          'position': 'fixed',
          'bottom': '0px',
          'left': '0px',
          'fontSize': '1.04em',
          'padding': '40px',
          'color': '#FFFCF0',
          'wordSpacing': '0.2px',
          'webkitFontSmoothing': 'antialiased',
          'textShadow': '-1px 0px 1px rgba(0,0,0,0.4)'
        }
        var captionContainer = document.createElement( 'figcaption' );
        applyProperties( captionContainer, captionContainerProperties );
  
        /*
         *  Caption Title
         */
        if ( title ) {
          var captionTitleProperties = {
            'margin': '0px',
            'padding': '0px',
            'fontWeight': 'normal',
            'fontSize': '2em',
            'color': '#FFFCF0',
            'letterSpacing': '-0.018em',
            'lineHeight': '35px',
            'textAlign': 'left'
          }
          var captionTitle = document.createElement( 'h1' );
          applyProperties( captionTitle, captionTitleProperties );
          captionTitle.innerHTML = title;
          captionContainer.appendChild( captionTitle );
        }
  
        if ( caption ) {
          var captionTextProperties = {
            'margin': '0px',
            'padding': '0px',
            'fontWeight': 'normal',
            'fontSize': '20px',
            'letterSpacing': '0.1px',
            'maxWidth': '500px',
            'textAlign': 'left',
            'background': 'none',
            'marginTop': '5px'
          }
          var captionText = document.createElement( 'h2' );
          applyProperties( captionText, captionTextProperties );
          captionText.innerHTML = caption;
          captionContainer.appendChild( captionText );
        }
  
        container.appendChild( captionContainer );
  
        setDimensions();
  
        mouse.xCurr = mouse.xDest = window.innerWidth / 2;
        mouse.yCurr = mouse.yDest = window.innerHeight / 2;
        
        document.body.appendChild( container );
        setTimeout( function() {
          container.style[ 'opacity' ] = '1';
        }, 10);
      }
  
      function removeViewer() {
  
        unlockBody();
        unbindEvents();
        document.body.removeChild( container );
      }
  
      function setDimensions() {
  
        // Manually set height to stop bug where 
        var imageDimensions = getFit( sourceDimensions );
        target.width = imageDimensions.w;
        target.height = imageDimensions.h;
        horizontalOrientation = imageDimensions.fit;
  
        targetDimensions = { w: target.width, h: target.height };
        containerDimensions = { w: window.innerWidth, h: window.innerHeight };
        overflowArea = {x: containerDimensions.w - targetDimensions.w, y: containerDimensions.h - targetDimensions.h};
  
      }
  
      function init( element ) {
  
        var imageSource = element.getAttribute( 'data-image') || element.src;
        var title = element.getAttribute( 'data-title');
        var caption = element.getAttribute( 'data-caption');
        
        var img = new Image();
        img.onload = function() {
  
          sourceDimensions = { w: img.width, h: img.height }; // Save original dimensions for later.
          target = this;
          createViewer( title, caption );
          lockBody();
          bindEvents();
          loop();
        }
  
        img.src = imageSource;
      }
  
      function bindEvents() {
  
        container.addEventListener( 'mousemove', onMouseMove,   false );
        container.addEventListener( 'touchmove', onTouchMove,   false );
        window.addEventListener(    'resize',    setDimensions, false );
        window.addEventListener(    'keyup',     onKeyUp,       false );
        target.addEventListener(    'click',     removeViewer,  false );
      }
  
      function unbindEvents() {
  
        container.removeEventListener( 'mousemove', onMouseMove,   false );
        container.removeEventListener( 'touchmove', onTouchMove,   false);
        window.removeEventListener(    'resize',    setDimensions, false );
        window.removeEventListener(    'keyup',     onKeyUp,       false );
        target.removeEventListener(    'click',     removeViewer,  false )
      }
    
      function onMouseMove( event ) {
  
        mouse.xDest = event.clientX;
        mouse.yDest = event.clientY;
      }
  
      function onTouchMove( event ) {
  
        event.preventDefault(); // Needed to keep this event firing.
        mouse.xDest = event.touches[0].clientX;
        mouse.yDest = event.touches[0].clientY;
      }
  
      // Exit on excape key pressed;
      function onKeyUp( event ) {
  
        event.preventDefault();
        if ( event.keyCode === KEYCODE_ESC ) {
          removeViewer();
        } 
      }
    
      function positionTarget() {
  
        mouse.xCurr += ( mouse.xDest - mouse.xCurr ) * 0.05;
        mouse.yCurr += ( mouse.yDest - mouse.yCurr ) * 0.05;
  
        if ( horizontalOrientation === true ) {
  
          // HORIZONTAL SCANNING
          currentPosition += ( mouse.xCurr - currentPosition );
          if( mouse.xCurr !== lastPosition ) {
            var position = parseFloat( currentPosition / containerDimensions.w );
            position = overflowArea.x * position;
            target.style[ 'webkitTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
            target.style[ 'MozTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
            target.style[ 'msTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
            lastPosition = mouse.xCurr;
          }
        } else if ( horizontalOrientation === false ) {
  
          // VERTICAL SCANNING
          currentPosition += ( mouse.yCurr - currentPosition );
          if( mouse.yCurr !== lastPosition ) {
            var position = parseFloat( currentPosition / containerDimensions.h );
            position = overflowArea.y * position;
            target.style[ 'webkitTransform' ] = 'translate3d( 0px, ' + position + 'px, 0px)';
            target.style[ 'MozTransform' ] = 'translate3d( 0px, ' + position + 'px, 0px)';
            target.style[ 'msTransform' ] = 'translate3d( 0px, ' + position + 'px, 0px)';
            lastPosition = mouse.yCurr;
          }
        }
      }
  
      function main( element ) {
  
        // Parse arguments
  
        if ( !element ) {
          throw 'You need to pass an element!';
        }
  
        startTracking( element );
      }
  
      return extend( main, {
          resize: setDimensions,
          start: start,
          stop: stop
      });
  
  })();
  console.log("shuffle.min.js loaded");

  console.log("FULLSCREEN ZOOM ..... loaded");


/* SELECT*/

  /*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(u){var e=function(){if(u&&u.fn&&u.fn.select2&&u.fn.select2.amd)var e=u.fn.select2.amd;var t,n,r,h,o,s,f,g,m,v,y,_,i,a,b;function w(e,t){return i.call(e,t)}function l(e,t){var n,r,i,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(s=(e=e.split("/")).length-1,y.nodeIdCompat&&b.test(e[s])&&(e[s]=e[s].replace(b,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),--u;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;--u){if(r=n.slice(0,u).join("/"),h)for(d=h.length;0<d;--d)if(i=(i=f[h.slice(0,d).join("/")])&&i[r]){o=i,a=u;break}if(o)break;!l&&g&&g[r]&&(l=g[r],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function A(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),s.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function D(e){if(w(v,e)){var t=v[e];delete v[e],_[e]=!0,o.apply(h,t)}if(!w(m,e)&&!w(_,e))throw new Error("No "+e);return m[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return e?c(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},_={},i=Object.prototype.hasOwnProperty,a=[].slice,b=/\.js$/,f=function(e,t){var n,r,i=c(e),o=i[0],s=t[1];return e=i[1],o&&(n=D(o=l(o,s))),o?e=n&&n.normalize?n.normalize(e,(r=s,function(e){return l(e,r)})):l(e,s):(o=(i=c(e=l(e,s)))[0],e=i[1],o&&(n=D(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:n}},g={require:function(e){return A(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:(t=e,function(){return y&&y.config&&y.config[t]||{}})};var t}},o=function(e,t,n,r){var i,o,s,a,l,c,u,d=[],p=typeof n;if(c=S(r=r||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(o=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===o)d[l]=g.exports(e),u=!0;else if("module"===o)i=d[l]=g.module(e);else if(w(m,o)||w(v,o)||w(_,o))d[l]=D(o);else{if(!a.p)throw new Error(e+" missing "+o);a.p.load(a.n,A(r,!0),x(o),{}),d[l]=m[o]}s=n?n.apply(m[e],d):void 0,e&&(i&&i.exports!==h&&i.exports!==m[e]?m[e]=i.exports:s===h&&u||(m[e]=s))}else e&&(m[e]=n)},t=n=s=function(e,t,n,r,i){if("string"==typeof e)return g[e]?g[e](t):D(f(e,S(t)).f);if(!e.splice){if((y=e).deps&&s(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=r,r=i),r?o(h,e,t,n):setTimeout(function(){o(h,e,t,n)},4),s},s.config=function(e){return s(e)},t._defined=m,(r=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),w(m,e)||w(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=r),e.define("almond",function(){}),e.define("jquery",[],function(){var e=u||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(o){var i={};function u(e){var t=e.prototype,n=[];for(var r in t){"function"==typeof t[r]&&"constructor"!==r&&n.push(r)}return n}i.Extend=function(e,t){var n={}.hasOwnProperty;function r(){this.constructor=e}for(var i in t)n.call(t,i)&&(e[i]=t[i]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},i.Decorate=function(r,i){var e=u(i),t=u(r);function o(){var e=Array.prototype.unshift,t=i.prototype.constructor.length,n=r.prototype.constructor;0<t&&(e.call(arguments,r.prototype.constructor),n=i.prototype.constructor),n.apply(this,arguments)}i.displayName=r.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var s=t[n];o.prototype[s]=r.prototype[s]}function a(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=i.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];o.prototype[c]=a(c)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,r=e.length;n<r;n++)e[n].apply(this,t)},i.Observable=e,i.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=Math.floor(36*Math.random()).toString(36)}return t},i.bind=function(e,t){return function(){e.apply(t,arguments)}},i._convertData=function(e){for(var t in e){var n=t.split("-"),r=e;if(1!==n.length){for(var i=0;i<n.length;i++){var o=n[i];(o=o.substring(0,1).toLowerCase()+o.substring(1))in r||(r[o]={}),i==n.length-1&&(r[o]=e[t]),r=r[o]}delete e[t]}}return e},i.hasScroll=function(e,t){var n=o(t),r=t.style.overflowX,i=t.style.overflowY;return(r!==i||"hidden"!==i&&"visible"!==i)&&("scroll"===r||"scroll"===i||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},i.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},i.appendMany=function(e,t){if("1.7"===o.fn.jquery.substr(0,3)){var n=o();o.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},i.__cache={};var n=0;return i.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},i.StoreData=function(e,t,n){var r=i.GetUniqueElementId(e);i.__cache[r]||(i.__cache[r]={}),i.__cache[r][t]=n},i.GetData=function(e,t){var n=i.GetUniqueElementId(e);return t?i.__cache[n]&&null!=i.__cache[n][t]?i.__cache[n][t]:o(e).data(t):i.__cache[n]},i.RemoveData=function(e){var t=i.GetUniqueElementId(e);null!=i.__cache[t]&&delete i.__cache[t],e.removeAttribute("data-select2-id")},i}),e.define("select2/results",["jquery","./utils"],function(h,f){function r(e,t,n){this.$element=e,this.data=n,this.options=t,r.__super__.constructor.call(this)}return f.Extend(r,f.Observable),r.prototype.render=function(){var e=h('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},r.prototype.clear=function(){this.$results.empty()},r.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),r=this.options.get("translations").get(e.message);n.append(t(r(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},r.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},r.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var r=e.results[n],i=this.option(r);t.push(i)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},r.prototype.position=function(e,t){t.find(".select2-results").append(e)},r.prototype.sort=function(e){return this.options.get("sorter")(e)},r.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},r.prototype.setClasses=function(){var t=this;this.data.current(function(e){var r=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,r)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},r.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},r.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},r.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"option","aria-selected":"false"},r=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var i in(null!=e.element&&r.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var o=n[i];t.setAttribute(i,o)}if(e.children){var s=h(t),a=document.createElement("strong");a.className="select2-results__group";h(a);this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},r.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var r=n-1;0===e.length&&(r=0);var i=t.eq(r);i.trigger("mouseenter");var o=l.$results.offset().top,s=i.offset().top,a=l.$results.scrollTop()+(s-o);0===r?l.$results.scrollTop(0):s-o<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var r=t.eq(n);r.trigger("mouseenter");var i=l.$results.offset().top+l.$results.outerHeight(!1),o=r.offset().top+r.outerHeight(!1),s=l.$results.scrollTop()+o-i;0===n?l.$results.scrollTop(0):i<o&&l.$results.scrollTop(s)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,r=0<e.deltaY&&t-e.deltaY<=0,i=e.deltaY<0&&n<=l.$results.height();r?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):i&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},r.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},r.prototype.destroy=function(){this.$results.remove()},r.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,r=e.offset().top,i=this.$results.scrollTop()+(r-n),o=r-n;i-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(i)}},r.prototype.template=function(e,t){var n=this.options.get("templateResult"),r=this.options.get("escapeMarkup"),i=n(e,t);null==i?t.style.display="none":"string"==typeof i?t.innerHTML=r(i):h(t).append(i)},r}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,r,i){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return r.Extend(o,r.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=r.GetData(this.$element[0],"old-tabindex")?this._tabindex=r.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},o.prototype.bind=function(e,t){var n=this,r=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",r),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&r.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,r){function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},i.prototype.bind=function(t,e){var n=this;i.__super__.bind.apply(this,arguments);var r=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",r).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",r),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),r=this.display(t,n);n.empty().append(r);var i=t.title||t.text;i?n.attr("title",i):n.removeAttr("title")}else this.clear()},i}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,e,l){function n(e,t){n.__super__.constructor.apply(this,arguments)}return l.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var r=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){r.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!r.isDisabled()){var t=i(this).parent(),n=l.GetData(t[0],"data");r.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var r=e[n],i=this.selectionContainer(),o=this.display(r,i);i.append(o);var s=r.title||r.text;s&&i.attr("title",s),l.StoreData(i[0],"data",r),t.push(i)}var a=this.$selection.find(".select2-selection__rendered");l.appendMany(a,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var r=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(r)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(i,r,a){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){r._handleClear(e)}),t.on("keypress",function(e){r._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var r=a.GetData(n[0],"data"),i=this.$element.val();this.$element.val(this.placeholder.id);var o={data:r};if(this.trigger("clear",o),o.prevented)this.$element.val(i);else{for(var s=0;s<r.length;s++)if(o={data:r[s]},this.trigger("unselect",o),o.prevented)return void this.$element.val(i);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=r.DELETE&&t.which!=r.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),r=i('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(r[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(r)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(r,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=r('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var r=this,i=t.id+"-results";e.call(this,t,n),t.on("open",function(){r.$search.attr("aria-controls",i),r.$search.trigger("focus")}),t.on("close",function(){r.$search.val(""),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.trigger("focus")}),t.on("enable",function(){r.$search.prop("disabled",!1),r._transferTabIndex()}),t.on("disable",function(){r.$search.prop("disabled",!0)}),t.on("focus",function(e){r.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){r.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){r._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented(),e.which===l.BACKSPACE&&""===r.$search.val()){var t=r.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=a.GetData(t[0],"data");r.searchRemoveChoice(n),e.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(e){r.$search.val()&&e.stopPropagation()});var o=document.documentMode,s=o&&o<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){s?r.$selection.off("input.search input.searchcheck"):r.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(s&&"input"===e.type)r.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&r.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";""!==this.$search.attr("placeholder")?e=this.$selection.find(".select2-selection__rendered").width():e=.75*(this.$search.val().length+1)+"em";this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var r=this,i=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==s.inArray(e,i)){t=t||{};var n=s.Event("select2:"+e,{params:t});r.$element.trigger(n),-1!==s.inArray(e,o)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function r(e){this.dict=e||{}}return r.prototype.all=function(){return this.dict},r.prototype.get=function(e){return this.dict[e]},r.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},r._cache={},r.loadPath=function(e){if(!(e in r._cache)){var t=n(e);r._cache[e]=t}return new r(r._cache[e])},r}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(r){function n(e,t){n.__super__.constructor.call(this)}return r.Extend(n,r.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=r.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+r.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],r=this;this.$element.find(":selected").each(function(){var e=l(this),t=r.item(e);n.push(t)}),e(n)},n.prototype.select=function(i){var o=this;if(i.selected=!0,l(i.element).is("option"))return i.element.selected=!0,void this.$element.trigger("input").trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(i=[i]).push.apply(i,e);for(var n=0;n<i.length;n++){var r=i[n].id;-1===l.inArray(r,t)&&t.push(r)}o.$element.val(t),o.$element.trigger("input").trigger("change")});else{var e=i.id;this.$element.val(e),this.$element.trigger("input").trigger("change")}},n.prototype.unselect=function(i){var o=this;if(this.$element.prop("multiple")){if(i.selected=!1,l(i.element).is("option"))return i.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n].id;r!==i.id&&-1===l.inArray(r,t)&&t.push(r)}o.$element.val(t),o.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(r,e){var i=[],o=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=o.item(e),n=o.matches(r,t);null!==n&&i.push(n)}}),e({results:i})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),r=this._normalizeItem(e);return r.element=t,a.StoreData(t,"data",r),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),r=[],i=0;i<n.length;i++){var o=l(n[i]),s=this.item(o);r.push(s)}t.children=r}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function r(e,t){this._dataToConvert=t.get("data")||[],r.__super__.constructor.call(this,e,t)}return f.Extend(r,e),r.prototype.bind=function(e,t){r.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},r.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),r.__super__.select.call(this,n)},r.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),r=n.map(function(){return t.item(g(this)).id}).get(),i=[];function o(e){return function(){return g(this).val()==e.id}}for(var s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);if(0<=g.inArray(a.id,r)){var l=n.filter(o(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}i.push(p)}}return i},r}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){var r=o.ajax(e);return r.then(t),r.fail(n),r}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,r){var i=this;null!=this._request&&(o.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=i.processResults(e,n);i.options.get("debug")&&window.console&&console.error&&(t&&t.results&&o.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),r(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||i.trigger("results:message",{message:"errorLoading"})});i._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var r=n.get("tags"),i=n.get("createTag");void 0!==i&&(this.createTag=i);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),u.isArray(r))for(var s=0;s<r.length;s++){var a=r[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var r=t.results,i=0;i<r.length;i++){var o=r[i],s=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||s)return!n&&(t.data=r,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(r,a)}t.results=r,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var r=n.get("tokenizer");void 0!==r&&(this.tokenizer=r),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var i=this;t.term=t.term||"";var r=this.tokenizer(t,this.options,function(e){var t,n=i._normalizeItem(e);if(!i.$element.find("option").filter(function(){return d(this).val()===n.id}).length){var r=i.option(n);r.attr("data-select2-tag",!0),i._removeOldTags(),i.addOptions([r])}t=n,i.trigger("select",{data:t})});r.term!==t.term&&(this.$search.length&&(this.$search.val(r.term),this.$search.trigger("focus")),t.term=r.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,r){for(var i=n.get("tokenSeparators")||[],o=t.term,s=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};s<o.length;){var l=o[s];if(-1!==d.inArray(l,i)){var c=o.substr(0,s),u=a(d.extend({},t,{term:c}));null!=u?(r(u),o=o.substr(s+1)||"",s=0):s++}else s++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(){r._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var r=this;this._checkIfMaximumSelected(function(){e.call(r,t,n)})},e.prototype._checkIfMaximumSelected=function(e,n){var r=this;this.current(function(e){var t=null!=e?e.length:0;0<r.maximumSelectionLength&&t>=r.maximumSelectionLength?r.trigger("results:message",{message:"maximumSelected",args:{maximum:r.maximumSelectionLength}}):n&&n()})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(o,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var r=this,i=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){o(this).off("keyup")}),this.$search.on("keyup input",function(e){r.handleSearch(e)}),t.on("open",function(){r.$search.attr("tabindex",0),r.$search.attr("aria-controls",i),r.$search.trigger("focus"),window.setTimeout(function(){r.$search.trigger("focus")},0)}),t.on("close",function(){r.$search.attr("tabindex",-1),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.val(""),r.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||r.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(r.showSearch(e)?r.$searchContainer.removeClass("select2-search--hide"):r.$searchContainer.addClass("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,r){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,r)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),r=t.length-1;0<=r;r--){var i=t[r];this.placeholder.id===i.id&&n.splice(r,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,r){this.lastParams={},e.call(this,t,n,r),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("query",function(e){r.lastParams=e,r.loading=!0}),t.on("query:append",function(e){r.lastParams=e,r.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=f(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("open",function(){r._showDropdown(),r._attachPositioningHandler(t),r._bindContainerResultHandlers(t)}),t.on("close",function(){r._hideDropdown(),r._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0}},e.prototype._attachPositioningHandler=function(e,t){var n=this,r="scroll.select2."+t.id,i="resize.select2."+t.id,o="orientationchange.select2."+t.id,s=this.$container.parents().filter(a.hasScroll);s.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),s.on(r,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(r+" "+i+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,r="resize.select2."+t.id,i="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+r+" "+i)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),r=null,i=this.$container.offset();i.bottom=i.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=i.top,o.bottom=i.top+o.height;var s=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<i.top-s,u=l>i.bottom+s,d={left:i.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h={top:0,left:0};(f.contains(document.body,p[0])||p[0].isConnected)&&(h=p.offset()),d.top-=h.top,d.left-=h.left,t||n||(r="below"),u||!c||t?!c&&u&&t&&(r="below"):r="above",("above"==r||t&&"below"!==r)&&(d.top=o.top-h.top-s),null!=r&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+r),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+r)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,r){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,r)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,r=0;r<t.length;r++){var i=t[r];i.children?n+=e(i.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("close",function(e){r._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var r=this.getHighlightedResults();if(!(r.length<1)){var i=o.GetData(r[0],"data");null!=i.element&&i.element.selected||null==i.element&&i.selected||this.trigger("select",{data:i})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(e){r._selectTriggered(e)}),t.on("unselect",function(e){r._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(c,u,d,p,h,f,g,m,v,y,s,t,_,$,b,w,A,x,D,S,E,C,O,T,q,L,I,j,e){function n(){this.reset()}return n.prototype.apply=function(e){if(null==(e=c.extend(!0,{},this.defaults,e)).dataAdapter){if(null!=e.ajax?e.dataAdapter=b:null!=e.data?e.dataAdapter=$:e.dataAdapter=_,0<e.minimumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,x)),0<e.maximumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,D)),0<e.maximumSelectionLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,S)),e.tags&&(e.dataAdapter=y.Decorate(e.dataAdapter,w)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=y.Decorate(e.dataAdapter,A)),null!=e.query){var t=u(e.amdBase+"compat/query");e.dataAdapter=y.Decorate(e.dataAdapter,t)}if(null!=e.initSelection){var n=u(e.amdBase+"compat/initSelection");e.dataAdapter=y.Decorate(e.dataAdapter,n)}}if(null==e.resultsAdapter&&(e.resultsAdapter=d,null!=e.ajax&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,T)),null!=e.placeholder&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,O)),e.selectOnClose&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,I))),null==e.dropdownAdapter){if(e.multiple)e.dropdownAdapter=E;else{var r=y.Decorate(E,C);e.dropdownAdapter=r}if(0!==e.minimumResultsForSearch&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,L)),e.closeOnSelect&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,j)),null!=e.dropdownCssClass||null!=e.dropdownCss||null!=e.adaptDropdownCssClass){var i=u(e.amdBase+"compat/dropdownCss");e.dropdownAdapter=y.Decorate(e.dropdownAdapter,i)}e.dropdownAdapter=y.Decorate(e.dropdownAdapter,q)}if(null==e.selectionAdapter){if(e.multiple?e.selectionAdapter=h:e.selectionAdapter=p,null!=e.placeholder&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,f)),e.allowClear&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,g)),e.multiple&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,m)),null!=e.containerCssClass||null!=e.containerCss||null!=e.adaptContainerCssClass){var o=u(e.amdBase+"compat/containerCss");e.selectionAdapter=y.Decorate(e.selectionAdapter,o)}e.selectionAdapter=y.Decorate(e.selectionAdapter,v)}e.language=this._resolveLanguage(e.language),e.language.push("en");for(var s=[],a=0;a<e.language.length;a++){var l=e.language[a];-1===s.indexOf(l)&&s.push(l)}return e.language=s,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:y.escapeMarkup,language:{},matcher:function e(t,n){if(""===c.trim(t.term))return n;if(n.children&&0<n.children.length){for(var r=c.extend(!0,{},n),i=n.children.length-1;0<=i;i--)null==e(t,n.children[i])&&r.children.splice(i,1);return 0<r.children.length?r:e(t,r)}var o=a(n.text).toUpperCase(),s=a(t.term).toUpperCase();return-1<o.indexOf(s)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,r=this.defaults.language,i=t.prop("lang"),o=t.closest("[lang]").prop("lang"),s=Array.prototype.concat.call(this._resolveLanguage(i),this._resolveLanguage(n),this._resolveLanguage(r),this._resolveLanguage(o));return e.language=s,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(c.isEmptyObject(e))return[];if(c.isPlainObject(e))return[e];var t;t=c.isArray(e)?e:[e];for(var n=[],r=0;r<t.length;r++)if(n.push(t[r]),"string"==typeof t[r]&&0<t[r].indexOf("-")){var i=t[r].split("-")[0];n.push(i)}return n},n.prototype._processTranslations=function(e,t){for(var n=new s,r=0;r<e.length;r++){var i=new s,o=e[r];if("string"==typeof o)try{i=s.loadPath(o)}catch(e){try{o=this.defaults.amdLanguageBase+o,i=s.loadPath(o)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+o+'" could not be automatically loaded. A fallback will be used instead.')}}else i=c.isPlainObject(o)?new s(o):o;n.extend(i)}return n},n.prototype.set=function(e,t){var n={};n[c.camelCase(e)]=t;var r=y._convertData(n);c.extend(!0,this.defaults,r)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(r,d,i,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=i.applyFromElement(this.options,t)),this.options=i.apply(this.options),t&&t.is("input")){var n=r(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function r(e,t){return t.toUpperCase()}for(var i=0;i<e[0].attributes.length;i++){var o=e[0].attributes[i].name,s="data-";if(o.substr(0,s.length)==s){var a=o.substring(s.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,r)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(o,c,u,r){var d=function(e,t){null!=u.GetData(e[0],"select2")&&u.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new c(t,e),d.__super__.constructor.call(this);var n=e.attr("tabindex")||0;u.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");var r=this.options.get("dataAdapter");this.dataAdapter=new r(e,this.options);var i=this.render();this._placeContainer(i);var o=this.options.get("selectionAdapter");this.selection=new o(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,i);var s=this.options.get("dropdownAdapter");this.dropdown=new s(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,i);var a=this.options.get("resultsAdapter");this.results=new a(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),u.StoreData(e[0],"select2",this),e.data("select2",this)};return u.Extend(d,u.Observable),d.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+u.generateChars(2):u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},d.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},d.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var r=this._resolveWidth(e,"style");return null!=r?r:this._resolveWidth(e,"element")}if("element"==t){var i=e.outerWidth(!1);return i<=0?"auto":i+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},d.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},d.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=u.bind(this._syncAttributes,this),this._syncS=u.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){t._syncA(),t._syncS(null,e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},d.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerSelectionEvents=function(){var n=this,r=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===o.inArray(e,r)&&n.trigger(e,t)})},d.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===r.ESC||t===r.TAB||t===r.UP&&e.altKey?(n.close(e),e.preventDefault()):t===r.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===r.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===r.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===r.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===r.ENTER||t===r.SPACE||t===r.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},d.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},d.prototype._isChangeMutation=function(e,t){var n=!1,r=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var i=0;i<t.addedNodes.length;i++){t.addedNodes[i].selected&&(n=!0)}else t.removedNodes&&0<t.removedNodes.length?n=!0:o.isArray(t)&&o.each(t,function(e,t){if(r._isChangeMutation(e,t))return!(n=!0)});else n=!0;return n}},d.prototype._syncSubtree=function(e,t){var n=this._isChangeMutation(e,t),r=this;n&&this.dataAdapter.current(function(e){r.trigger("selection:update",{data:e})})},d.prototype.trigger=function(e,t){var n=d.__super__.trigger,r={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in r){var i=r[e],o={prevented:!1,name:e,args:t};if(n.call(this,i,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},d.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},d.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},d.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},d.prototype.isEnabled=function(){return!this.isDisabled()},d.prototype.isDisabled=function(){return this.options.get("disabled")},d.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},d.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},d.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},d.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},d.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},d.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];o.isArray(t)&&(t=o.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("input").trigger("change")},d.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",u.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),u.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},d.prototype.render=function(){var e=o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),u.StoreData(e[0],"element",this.$element),e},d}),e.define("jquery-mousewheel",["jquery"],function(e){return e}),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(i,e,o,t,s){if(null==i.fn.select2){var a=["open","close","destroy"];i.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=i.extend(!0,{},t);new o(i(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,r=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=s.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,r)}),-1<i.inArray(t,a)?this:n}}return null==i.fn.select2.defaults&&(i.fn.select2.defaults=t),o}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return u.fn.select2.amd=e,t});

console.log("SELECT2 ..... loaded");