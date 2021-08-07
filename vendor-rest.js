/*!
 * FilePond 4.28.2
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).FilePond={})}(this,function(e){"use strict";var t=function(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])},n=function(e){var n={};return t(e,function(t){!function(e,t,n){"function"!=typeof n?Object.defineProperty(e,t,Object.assign({},n)):e[t]=n}(n,t,e[t])}),n},r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null===n)return e.getAttribute(t)||e.hasAttribute(t);e.setAttribute(t,n)},o=["svg","path"],i=function(e){return o.includes(e)},a=function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"==typeof n&&(o=n,n=null);var a=i(e)?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n&&(i(e)?r(a,"class",n):a.className=n),t(o,function(e,t){r(a,e,t)}),a},u=function(e,t){return function(e,n){return void 0!==n?t.splice(n,0,e):t.push(e),e}},s=function(e,t){return function(n){return t.splice(t.indexOf(n),1),n.element.parentNode&&e.removeChild(n.element),n}},l="undefined"!=typeof window&&void 0!==window.document,c=function(){return l},f="children"in(c()?a("svg"):{})?function(e){return e.children.length}:function(e){return e.childNodes.length},d=function(e,t,n,r){var o=n[0]||e.left,i=n[1]||e.top,a=o+e.width,u=i+e.height*(r[1]||1),s={element:Object.assign({},e),inner:{left:e.left,top:e.top,right:e.right,bottom:e.bottom},outer:{left:o,top:i,right:a,bottom:u}};return t.filter(function(e){return!e.isRectIgnored()}).map(function(e){return e.rect}).forEach(function(e){p(s.inner,Object.assign({},e.inner)),p(s.outer,Object.assign({},e.outer))}),E(s.inner),s.outer.bottom+=s.element.marginBottom,s.outer.right+=s.element.marginRight,E(s.outer),s},p=function(e,t){t.top+=e.top,t.right+=e.left,t.bottom+=e.top,t.left+=e.left,t.bottom>e.bottom&&(e.bottom=t.bottom),t.right>e.right&&(e.right=t.right)},E=function(e){e.width=e.right-e.left,e.height=e.bottom-e.top},_=function(e){return"number"==typeof e},T=function(e){return e<.5?2*e*e:(4-2*e)*e-1},I={spring:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stiffness,r=void 0===t?.5:t,o=e.damping,i=void 0===o?.75:o,a=e.mass,u=void 0===a?10:a,s=null,l=null,c=0,f=!1,d=n({interpolate:function(e,t){if(!f){if(!_(s)||!_(l))return f=!0,void(c=0);(function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.001;return Math.abs(e-t)<r&&Math.abs(n)<r})(l+=c+=-(l-s)*r/u,s,c*=i)||t?(l=s,c=0,f=!0,d.onupdate(l),d.oncomplete(l)):d.onupdate(l)}},target:{set:function(e){if(_(e)&&!_(l)&&(l=e),null===s&&(s=e,l=e),l===(s=e)||void 0===s)return f=!0,c=0,d.onupdate(l),void d.oncomplete(l);f=!1},get:function(){return s}},resting:{get:function(){return f}},onupdate:function(e){},oncomplete:function(e){}});return d},tween:function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.duration,i=void 0===o?500:o,a=r.easing,u=void 0===a?T:a,s=r.delay,l=void 0===s?0:s,c=null,f=!0,d=!1,p=null,E=n({interpolate:function(n,r){f||null===p||(null===c&&(c=n),n-c<l||((e=n-c-l)>=i||r?(e=1,t=d?0:1,E.onupdate(t*p),E.oncomplete(t*p),f=!0):(t=e/i,E.onupdate((e>=0?u(d?1-t:t):0)*p))))},target:{get:function(){return d?0:p},set:function(e){if(null===p)return p=e,E.onupdate(e),void E.oncomplete(e);e<p?(p=1,d=!0):(d=!1,p=e),f=!1,c=null}},resting:{get:function(){return f}},onupdate:function(e){},oncomplete:function(e){}});return E}},v=function(e,t,n){var r=e[t]&&"object"==typeof e[t][n]?e[t][n]:e[t]||e,o="string"==typeof r?r:r.type,i="object"==typeof r?Object.assign({},r):{};return I[o]?I[o](i):null},m=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];(t=Array.isArray(t)?t:[t]).forEach(function(t){e.forEach(function(e){var o=e,i=function(){return n[e]},a=function(t){return n[e]=t};"object"==typeof e&&(o=e.key,i=e.getter||i,a=e.setter||a),t[o]&&!r||(t[o]={get:i,set:a})})})},h=function(e){return null!=e},g={opacity:1,scaleX:1,scaleY:1,translateX:0,translateY:0,rotateX:0,rotateY:0,rotateZ:0,originX:0,originY:0},R=function(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!0;for(var n in t)if(t[n]!==e[n])return!0;return!1},O=function(e,t){var n=t.opacity,r=t.perspective,o=t.translateX,i=t.translateY,a=t.scaleX,u=t.scaleY,s=t.rotateX,l=t.rotateY,c=t.rotateZ,f=t.originX,d=t.originY,p=t.width,E=t.height,_="",T="";(h(f)||h(d))&&(T+="transform-origin: "+(f||0)+"px "+(d||0)+"px;"),h(r)&&(_+="perspective("+r+"px) "),(h(o)||h(i))&&(_+="translate3d("+(o||0)+"px, "+(i||0)+"px, 0) "),(h(a)||h(u))&&(_+="scale3d("+(h(a)?a:1)+", "+(h(u)?u:1)+", 1) "),h(c)&&(_+="rotateZ("+c+"rad) "),h(s)&&(_+="rotateX("+s+"rad) "),h(l)&&(_+="rotateY("+l+"rad) "),_.length&&(T+="transform:"+_+";"),h(n)&&(T+="opacity:"+n+";",0===n&&(T+="visibility:hidden;"),n<1&&(T+="pointer-events:none;")),h(E)&&(T+="height:"+E+"px;"),h(p)&&(T+="width:"+p+"px;");var I=e.elementCurrentStyle||"";T.length===I.length&&T===I||(e.style.cssText=T,e.elementCurrentStyle=T)},D={styles:function(e){var t=e.mixinConfig,n=e.viewProps,r=e.viewInternalAPI,o=e.viewExternalAPI,i=e.view,a=Object.assign({},n),u={};m(t,[r,o],n);var s=function(){return i.rect?d(i.rect,i.childViews,[n.translateX||0,n.translateY||0],[n.scaleX||0,n.scaleY||0]):null};return r.rect={get:s},o.rect={get:s},t.forEach(function(e){n[e]=void 0===a[e]?g[e]:a[e]}),{write:function(){if(R(u,n))return O(i.element,n),Object.assign(u,Object.assign({},n)),!0},destroy:function(){}}},listeners:function(e){e.mixinConfig,e.viewProps,e.viewInternalAPI;var t,n=e.viewExternalAPI,r=(e.viewState,e.view),o=[],i=(t=r.element,function(e,n){t.addEventListener(e,n)}),a=function(e){return function(t,n){e.removeEventListener(t,n)}}(r.element);return n.on=function(e,t){o.push({type:e,fn:t}),i(e,t)},n.off=function(e,t){o.splice(o.findIndex(function(n){return n.type===e&&n.fn===t}),1),a(e,t)},{write:function(){return!0},destroy:function(){o.forEach(function(e){a(e.type,e.fn)})}}},animations:function(e){var n=e.mixinConfig,r=e.viewProps,o=e.viewInternalAPI,i=e.viewExternalAPI,a=Object.assign({},r),u=[];return t(n,function(e,t){var n=v(t);n&&(n.onupdate=function(t){r[e]=t},n.target=a[e],m([{key:e,setter:function(e){n.target!==e&&(n.target=e)},getter:function(){return r[e]}}],[o,i],r,!0),u.push(n))}),{write:function(e){var t=document.hidden,n=!0;return u.forEach(function(r){r.resting||(n=!1),r.interpolate(e,t)}),n},destroy:function(){}}},apis:function(e){var t=e.mixinConfig,n=e.viewProps,r=e.viewExternalAPI;m(t,r,n)}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.layoutCalculated||(e.paddingTop=parseInt(n.paddingTop,10)||0,e.marginTop=parseInt(n.marginTop,10)||0,e.marginRight=parseInt(n.marginRight,10)||0,e.marginBottom=parseInt(n.marginBottom,10)||0,e.marginLeft=parseInt(n.marginLeft,10)||0,t.layoutCalculated=!0),e.left=t.offsetLeft||0,e.top=t.offsetTop||0,e.width=t.offsetWidth||0,e.height=t.offsetHeight||0,e.right=e.left+e.width,e.bottom=e.top+e.height,e.scrollTop=t.scrollTop,e.hidden=null===t.offsetParent,e},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.tag,r=void 0===t?"div":t,o=e.name,i=void 0===o?null:o,l=e.attributes,c=void 0===l?{}:l,p=e.read,E=void 0===p?function(){}:p,_=e.write,T=void 0===_?function(){}:_,I=e.create,v=void 0===I?function(){}:I,m=e.destroy,h=void 0===m?function(){}:m,g=e.filterFrameActionsForChild,R=void 0===g?function(e,t){return t}:g,O=e.didCreateView,S=void 0===O?function(){}:O,A=e.didWriteView,L=void 0===A?function(){}:A,P=e.ignoreRect,b=void 0!==P&&P,M=e.ignoreRectUpdate,w=void 0!==M&&M,C=e.mixins,N=void 0===C?[]:C;return function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a(r,"filepond--"+i,c),p=window.getComputedStyle(l,null),_=y(),I=null,m=!1,g=[],O=[],A={},P={},M=[T],C=[E],G=[h],U=function(){return l},B=function(){return g.concat()},q=function(){return I||(I=d(_,g,[0,0],[1,1]))},F={element:{get:U},style:{get:function(){return p}},childViews:{get:B}},V=Object.assign({},F,{rect:{get:q},ref:{get:function(){return A}},is:function(e){return i===e},appendChild:(t=l,function(e,n){void 0!==n&&t.children[n]?t.insertBefore(e,t.children[n]):t.appendChild(e)}),createChildView:function(e){return function(t,n){return t(e,n)}}(e),linkView:function(e){return g.push(e),e},unlinkView:function(e){g.splice(g.indexOf(e),1)},appendChildView:u(0,g),removeChildView:s(l,g),registerWriter:function(e){return M.push(e)},registerReader:function(e){return C.push(e)},registerDestroyer:function(e){return G.push(e)},invalidateLayout:function(){return l.layoutCalculated=!1},dispatch:e.dispatch,query:e.query}),x={element:{get:U},childViews:{get:B},rect:{get:q},resting:{get:function(){return m}},isRectIgnored:function(){return b},_read:function(){I=null,g.forEach(function(e){return e._read()}),!(w&&_.width&&_.height)&&y(_,l,p);var e={root:j,props:o,rect:_};C.forEach(function(t){return t(e)})},_write:function(e,t,n){var r=0===t.length;return M.forEach(function(i){!1===i({props:o,root:j,actions:t,timestamp:e,shouldOptimize:n})&&(r=!1)}),O.forEach(function(t){!1===t.write(e)&&(r=!1)}),g.filter(function(e){return!!e.element.parentNode}).forEach(function(o){o._write(e,R(o,t),n)||(r=!1)}),g.forEach(function(o,i){o.element.parentNode||(j.appendChild(o.element,i),o._read(),o._write(e,R(o,t),n),r=!1)}),m=r,L({props:o,root:j,actions:t,timestamp:e}),r},_destroy:function(){O.forEach(function(e){return e.destroy()}),G.forEach(function(e){e({root:j,props:o})}),g.forEach(function(e){return e._destroy()})}},Y=Object.assign({},F,{rect:{get:function(){return _}}});Object.keys(N).sort(function(e,t){return"styles"===e?1:"styles"===t?-1:0}).forEach(function(e){var t=D[e]({mixinConfig:N[e],viewProps:o,viewState:P,viewInternalAPI:V,viewExternalAPI:x,view:n(Y)});t&&O.push(t)});var j=n(V);v({root:j,props:o});var k=f(l);return g.forEach(function(e,t){j.appendChild(e.element,k+t)}),S(j),n(x)}},A=function(e,t){return function(n){var r=n.root,o=n.props,i=n.actions,a=void 0===i?[]:i,u=n.timestamp,s=n.shouldOptimize;a.filter(function(t){return e[t.type]}).forEach(function(t){return e[t.type]({root:r,props:o,action:t.data,timestamp:u,shouldOptimize:s})}),t&&t({root:r,props:o,actions:a,timestamp:u,shouldOptimize:s})}},L=function(e,t){return t.parentNode.insertBefore(e,t)},P=function(e,t){return t.parentNode.insertBefore(e,t.nextSibling)},b=function(e){return Array.isArray(e)},M=function(e){return null==e},w=function(e){return e.trim()},C=function(e){return""+e},N=function(e){return"boolean"==typeof e},G=function(e){return N(e)?e:"true"===e},U=function(e){return"string"==typeof e},B=function(e){return _(e)?e:U(e)?C(e).replace(/[a-z]+/gi,""):0},q=function(e){return parseInt(B(e),10)},F=function(e){return parseFloat(B(e))},V=function(e){return _(e)&&isFinite(e)&&Math.floor(e)===e},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(V(e))return e;var n=C(e).trim();return/MB$/i.test(n)?(n=n.replace(/MB$i/,"").trim(),q(n)*t*t):/KB/i.test(n)?(n=n.replace(/KB$i/,"").trim(),q(n)*t):q(n)},Y=function(e){return"function"==typeof e},j={process:"POST",patch:"PATCH",revert:"DELETE",fetch:"GET",restore:"GET",load:"GET"},k=function(e,t,n,r,o){if(null===t)return null;if("function"==typeof t)return t;var i={url:"GET"===n||"PATCH"===n?"?"+e+"=":"",method:n,headers:o,withCredentials:!1,timeout:r,onload:null,ondata:null,onerror:null};if(U(t))return i.url=t,i;if(Object.assign(i,t),U(i.headers)){var a=i.headers.split(/:(.+)/);i.headers={header:a[0],value:a[1]}}return i.withCredentials=G(i.withCredentials),i},H=function(e){return"object"==typeof e&&null!==e},X=function(e){return b(e)?"array":function(e){return null===e}(e)?"null":V(e)?"int":/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e)?"bytes":function(e){return H(e)&&U(e.url)&&H(e.process)&&H(e.revert)&&H(e.restore)&&H(e.fetch)}(e)?"api":typeof e},W={array:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return M(e)?[]:b(e)?e:C(e).split(t).map(w).filter(function(e){return e.length})},boolean:G,int:function(e){return"bytes"===X(e)?x(e):q(e)},number:F,float:F,bytes:x,string:function(e){return Y(e)?e:C(e)},function:function(e){return function(e){for(var t=self,n=e.split("."),r=null;r=n.shift();)if(!(t=t[r]))return null;return t}(e)},serverapi:function(e){return(r={}).url=U(n=e)?n:n.url||"",r.timeout=n.timeout?parseInt(n.timeout,10):0,r.headers=n.headers?n.headers:{},t(j,function(e){r[e]=k(e,n[e],j[e],r.timeout,r.headers)}),r.process=n.process||U(n)||n.url?r.process:null,r.remove=n.remove||null,delete r.headers,r;var n,r},object:function(e){try{return JSON.parse(e.replace(/{\s*'/g,'{"').replace(/'\s*}/g,'"}').replace(/'\s*:/g,'":').replace(/:\s*'/g,':"').replace(/,\s*'/g,',"').replace(/'\s*,/g,'",'))}catch(e){return null}}},z=function(e,t,n){if(e===t)return e;var r,o=X(e);if(o!==n){var i=(r=e,W[n](r));if(o=X(i),null===i)throw'Trying to assign value with incorrect type to "'+option+'", allowed type: "'+n+'"';e=i}return e},Q=function(e){var r={};return t(e,function(t){var n,o,i,a=e[t];r[t]=(n=a[0],o=a[1],i=n,{enumerable:!0,get:function(){return i},set:function(e){i=z(e,n,o)}})}),n(r)},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.split(/(?=[A-Z])/).map(function(e){return e.toLowerCase()}).join(t)},$=function(e){return function(n,r,o){var i={};return t(e,function(e){var t=Z(e,"_").toUpperCase();i["SET_"+t]=function(r){try{o.options[e]=r.value}catch(e){}n("DID_SET_"+t,{value:o.options[e]})}}),i}},K=function(e){return function(n){var r={};return t(e,function(e){r["GET_"+Z(e,"_").toUpperCase()]=function(t){return n.options[e]}}),r}},J=1,ee=2,te=3,ne=4,re=5,oe=function(){return Math.random().toString(36).substr(2,9)};function ie(e){this.wrapped=e}function ae(e){var t,n;function r(t,n){try{var i=e[t](n),a=i.value,u=a instanceof ie;Promise.resolve(u?a.wrapped:a).then(function(e){u?r("next",e):o(i.done?"return":"normal",e)},function(e){r("throw",e)})}catch(e){o("throw",e)}}function o(e,o){switch(e){case"return":t.resolve({value:o,done:!0});break;case"throw":t.reject(o);break;default:t.resolve({value:o,done:!1})}(t=t.next)?r(t.key,t.arg):n=null}this._invoke=function(e,o){return new Promise(function(i,a){var u={key:e,arg:o,resolve:i,reject:a,next:null};n?n=n.next=u:(t=n=u,r(e,o))})},"function"!=typeof e.return&&(this.return=void 0)}function ue(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}"function"==typeof Symbol&&Symbol.asyncIterator&&(ae.prototype[Symbol.asyncIterator]=function(){return this}),ae.prototype.next=function(e){return this._invoke("next",e)},ae.prototype.throw=function(e){return this._invoke("throw",e)},ae.prototype.return=function(e){return this._invoke("return",e)};function se(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||le(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function le(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}var ce,fe,de=function(e,t){return e.splice(t,1)},pe=function(){var e=[],t=function(t,n){de(e,e.findIndex(function(e){return e.event===t&&(e.cb===n||!n)}))},n=function(t,n,r){e.filter(function(e){return e.event===t}).map(function(e){return e.cb}).forEach(function(e){return function(e,t){t?e():document.hidden?Promise.resolve(1).then(e):setTimeout(e,0)}(function(){return e.apply(void 0,se(n))},r)})};return{fireSync:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n(e,r,!0)},fire:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n(e,r,!1)},on:function(t,n){e.push({event:t,cb:n})},onOnce:function(n,r){e.push({event:n,cb:function(){t(n,r),r.apply(void 0,arguments)}})},off:t}},Ee=function(e,t,n){Object.getOwnPropertyNames(e).filter(function(e){return!n.includes(e)}).forEach(function(n){return Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})},_e=["fire","process","revert","load","on","off","onOnce","retryLoad","extend","archive","archived","release","released","requestProcessing","freeze"],Te=function(e){var t={};return Ee(e,t,_e),t},Ie={INIT:1,IDLE:2,PROCESSING_QUEUED:9,PROCESSING:3,PROCESSING_COMPLETE:5,PROCESSING_ERROR:6,PROCESSING_REVERT_ERROR:10,LOADING:7,LOAD_ERROR:8},ve={INPUT:1,LIMBO:2,LOCAL:3},me=function(e){return/[^0-9]+/.exec(e)},he=function(){return me(1.1.toLocaleString())[0]},ge={BOOLEAN:"boolean",INT:"int",NUMBER:"number",STRING:"string",ARRAY:"array",OBJECT:"object",FUNCTION:"function",ACTION:"action",SERVER_API:"serverapi",REGEX:"regex"},Re=[],Oe=function(e,t,n){return new Promise(function(r,o){var i=Re.filter(function(t){return t.key===e}).map(function(e){return e.cb});if(0!==i.length){var a=i.shift();i.reduce(function(e,t){return e.then(function(e){return t(e,n)})},a(t,n)).then(function(e){return r(e)}).catch(function(e){return o(e)})}else r(t)})},De=function(e,t,n){return Re.filter(function(t){return t.key===e}).map(function(e){return e.cb(t,n)})},ye=function(e,t){return Re.push({key:e,cb:t})},Se=function(){return Object.assign({},Ae)},Ae={id:[null,ge.STRING],name:["filepond",ge.STRING],disabled:[!1,ge.BOOLEAN],className:[null,ge.STRING],required:[!1,ge.BOOLEAN],captureMethod:[null,ge.STRING],allowSyncAcceptAttribute:[!0,ge.BOOLEAN],allowDrop:[!0,ge.BOOLEAN],allowBrowse:[!0,ge.BOOLEAN],allowPaste:[!0,ge.BOOLEAN],allowMultiple:[!1,ge.BOOLEAN],allowReplace:[!0,ge.BOOLEAN],allowRevert:[!0,ge.BOOLEAN],allowRemove:[!0,ge.BOOLEAN],allowProcess:[!0,ge.BOOLEAN],allowReorder:[!1,ge.BOOLEAN],allowDirectoriesOnly:[!1,ge.BOOLEAN],storeAsFile:[!1,ge.BOOLEAN],forceRevert:[!1,ge.BOOLEAN],maxFiles:[null,ge.INT],checkValidity:[!1,ge.BOOLEAN],itemInsertLocationFreedom:[!0,ge.BOOLEAN],itemInsertLocation:["before",ge.STRING],itemInsertInterval:[75,ge.INT],dropOnPage:[!1,ge.BOOLEAN],dropOnElement:[!0,ge.BOOLEAN],dropValidation:[!1,ge.BOOLEAN],ignoredFiles:[[".ds_store","thumbs.db","desktop.ini"],ge.ARRAY],instantUpload:[!0,ge.BOOLEAN],maxParallelUploads:[2,ge.INT],allowMinimumUploadDuration:[!0,ge.BOOLEAN],chunkUploads:[!1,ge.BOOLEAN],chunkForce:[!1,ge.BOOLEAN],chunkSize:[5e6,ge.INT],chunkRetryDelays:[[500,1e3,3e3],ge.ARRAY],server:[null,ge.SERVER_API],fileSizeBase:[1e3,ge.INT],labelDecimalSeparator:[he(),ge.STRING],labelThousandsSeparator:[(ce=he(),fe=1e3.toLocaleString(),fe!==1e3.toString()?me(fe)[0]:"."===ce?",":"."),ge.STRING],labelIdle:['Drag & Drop your files or <span class="filepond--label-action">Browse</span>',ge.STRING],labelInvalidField:["Field contains invalid files",ge.STRING],labelFileWaitingForSize:["Waiting for size",ge.STRING],labelFileSizeNotAvailable:["Size not available",ge.STRING],labelFileCountSingular:["file in list",ge.STRING],labelFileCountPlural:["files in list",ge.STRING],labelFileLoading:["Loading",ge.STRING],labelFileAdded:["Added",ge.STRING],labelFileLoadError:["Error during load",ge.STRING],labelFileRemoved:["Removed",ge.STRING],labelFileRemoveError:["Error during remove",ge.STRING],labelFileProcessing:["Uploading",ge.STRING],labelFileProcessingComplete:["Upload complete",ge.STRING],labelFileProcessingAborted:["Upload cancelled",ge.STRING],labelFileProcessingError:["Error during upload",ge.STRING],labelFileProcessingRevertError:["Error during revert",ge.STRING],labelTapToCancel:["tap to cancel",ge.STRING],labelTapToRetry:["tap to retry",ge.STRING],labelTapToUndo:["tap to undo",ge.STRING],labelButtonRemoveItem:["Remove",ge.STRING],labelButtonAbortItemLoad:["Abort",ge.STRING],labelButtonRetryItemLoad:["Retry",ge.STRING],labelButtonAbortItemProcessing:["Cancel",ge.STRING],labelButtonUndoItemProcessing:["Undo",ge.STRING],labelButtonRetryItemProcessing:["Retry",ge.STRING],labelButtonProcessItem:["Upload",ge.STRING],iconRemove:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',ge.STRING],iconProcess:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',ge.STRING],iconRetry:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',ge.STRING],iconUndo:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',ge.STRING],iconDone:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',ge.STRING],oninit:[null,ge.FUNCTION],onwarning:[null,ge.FUNCTION],onerror:[null,ge.FUNCTION],onactivatefile:[null,ge.FUNCTION],oninitfile:[null,ge.FUNCTION],onaddfilestart:[null,ge.FUNCTION],onaddfileprogress:[null,ge.FUNCTION],onaddfile:[null,ge.FUNCTION],onprocessfilestart:[null,ge.FUNCTION],onprocessfileprogress:[null,ge.FUNCTION],onprocessfileabort:[null,ge.FUNCTION],onprocessfilerevert:[null,ge.FUNCTION],onprocessfile:[null,ge.FUNCTION],onprocessfiles:[null,ge.FUNCTION],onremovefile:[null,ge.FUNCTION],onpreparefile:[null,ge.FUNCTION],onupdatefiles:[null,ge.FUNCTION],onreorderfiles:[null,ge.FUNCTION],beforeDropFile:[null,ge.FUNCTION],beforeAddFile:[null,ge.FUNCTION],beforeRemoveFile:[null,ge.FUNCTION],beforePrepareFile:[null,ge.FUNCTION],stylePanelLayout:[null,ge.STRING],stylePanelAspectRatio:[null,ge.STRING],styleItemPanelAspectRatio:[null,ge.STRING],styleButtonRemoveItemPosition:["left",ge.STRING],styleButtonProcessItemPosition:["right",ge.STRING],styleLoadIndicatorPosition:["right",ge.STRING],styleProgressIndicatorPosition:["right",ge.STRING],styleButtonRemoveItemAlign:[!1,ge.BOOLEAN],files:[[],ge.ARRAY],credits:[["https://pqina.nl/","Powered by PQINA"],ge.ARRAY]},Le=function(e,t){return M(t)?e[0]||null:V(t)?e[t]||null:("object"==typeof t&&(t=t.id),e.find(function(e){return e.id===t})||null)},Pe=function(e){if(M(e))return e;if(/:/.test(e)){var t=e.split(":");return t[1]/t[0]}return parseFloat(e)},be=function(e){return e.filter(function(e){return!e.archived})},Me={EMPTY:0,IDLE:1,ERROR:2,BUSY:3,READY:4},we=null,Ce=[Ie.LOAD_ERROR,Ie.PROCESSING_ERROR,Ie.PROCESSING_REVERT_ERROR],Ne=[Ie.LOADING,Ie.PROCESSING,Ie.PROCESSING_QUEUED,Ie.INIT],Ge=[Ie.PROCESSING_COMPLETE],Ue=function(e){return Ce.includes(e.status)},Be=function(e){return Ne.includes(e.status)},qe=function(e){return Ge.includes(e.status)},Fe=function(e){return H(e.options.server)&&(H(e.options.server.process)||Y(e.options.server.process))},Ve=function(e){return{GET_STATUS:function(){var t=be(e.items),n=Me.EMPTY,r=Me.ERROR,o=Me.BUSY,i=Me.IDLE,a=Me.READY;return 0===t.length?n:t.some(Ue)?r:t.some(Be)?o:t.some(qe)?a:i},GET_ITEM:function(t){return Le(e.items,t)},GET_ACTIVE_ITEM:function(t){return Le(be(e.items),t)},GET_ACTIVE_ITEMS:function(){return be(e.items)},GET_ITEMS:function(){return e.items},GET_ITEM_NAME:function(t){var n=Le(e.items,t);return n?n.filename:null},GET_ITEM_SIZE:function(t){var n=Le(e.items,t);return n?n.fileSize:null},GET_STYLES:function(){return Object.keys(e.options).filter(function(e){return/^style/.test(e)}).map(function(t){return{name:t,value:e.options[t]}})},GET_PANEL_ASPECT_RATIO:function(){return/circle/.test(e.options.stylePanelLayout)?1:Pe(e.options.stylePanelAspectRatio)},GET_ITEM_PANEL_ASPECT_RATIO:function(){return e.options.styleItemPanelAspectRatio},GET_ITEMS_BY_STATUS:function(t){return be(e.items).filter(function(e){return e.status===t})},GET_TOTAL_ITEMS:function(){return be(e.items).length},SHOULD_UPDATE_FILE_INPUT:function(){return e.options.storeAsFile&&function(){if(null===we)try{var e=new DataTransfer;e.items.add(new File(["hello world"],"This_Works.txt"));var t=document.createElement("input");t.setAttribute("type","file"),t.files=e.files,we=1===t.files.length}catch(e){we=!1}return we}()&&!Fe(e)},IS_ASYNC:function(){return Fe(e)}}},xe=function(e,t,n){return Math.max(Math.min(n,e),t)},Ye=function(e){return/^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(e)},je=function(e){return e.split("/").pop().split("?").shift()},ke=function(e){return e.split(".").pop()},He=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t+e).slice(-t.length)},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return e.getFullYear()+"-"+He(e.getMonth()+1,"00")+"-"+He(e.getDate(),"00")+"_"+He(e.getHours(),"00")+"-"+He(e.getMinutes(),"00")+"-"+He(e.getSeconds(),"00")},We=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o="string"==typeof n?e.slice(0,e.size,n):e.slice(0,e.size,e.type);return o.lastModifiedDate=new Date,e._relativePath&&(o._relativePath=e._relativePath),U(t)||(t=Xe()),t&&null===r&&ke(t)?o.name=t:(r=r||function(e){if("string"!=typeof e)return"";var t=e.split("/").pop();return/svg/.test(t)?"svg":/zip|compressed/.test(t)?"zip":/plain/.test(t)?"txt":/msword/.test(t)?"doc":/[a-z]+/.test(t)?"jpeg"===t?"jpg":t:""}(o.type),o.name=t+(r?"."+r:"")),o},ze=function(e,t){var n=window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;if(n){var r=new n;return r.append(e),r.getBlob(t)}return new Blob([e],{type:t})},Qe=function(e){return(/^data:(.+);/.exec(e)||[])[1]||null},Ze=function(e){var t=Qe(e);return function(e,t){for(var n=new ArrayBuffer(e.length),r=new Uint8Array(n),o=0;o<e.length;o++)r[o]=e.charCodeAt(o);return ze(n,t)}(function(e){return atob(function(e){return e.split(",")[1].replace(/\s/g,"")}(e))}(e),t)},$e=function(e){if(!/^content-disposition:/i.test(e))return null;var t=e.split(/filename=|filename\*=.+''/).splice(1).map(function(e){return e.trim().replace(/^["']|[;"']{0,2}$/g,"")}).filter(function(e){return e.length});return t.length?decodeURI(t[t.length-1]):null},Ke=function(e){if(/content-length:/i.test(e)){var t=e.match(/[0-9]+/)[0];return t?parseInt(t,10):null}return null},Je=function(e){return/x-content-transfer-id:/i.test(e)&&(e.split(":")[1]||"").trim()||null},et=function(e){var t={source:null,name:null,size:null},n=e.split("\n"),r=!0,o=!1,i=void 0;try{for(var a,u=n[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){var s=a.value,l=$e(s);if(l)t.name=l;else{var c=Ke(s);if(c)t.size=c;else{var f=Je(s);f&&(t.source=f)}}}}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t},tt=function(e){var t={source:null,complete:!1,progress:0,size:null,timestamp:null,duration:0,request:null},n=function(n){e?(t.timestamp=Date.now(),t.request=e(n,function(e){t.duration=Date.now()-t.timestamp,t.complete=!0,e instanceof Blob&&(e=We(e,e.name||je(n))),r.fire("load",e instanceof Blob?e:e?e.body:null)},function(e){r.fire("error","string"==typeof e?{type:"error",code:0,body:e}:e)},function(e,n,o){o&&(t.size=o),t.duration=Date.now()-t.timestamp,e?(t.progress=n/o,r.fire("progress",t.progress)):t.progress=null},function(){r.fire("abort")},function(e){var n=et("string"==typeof e?e:e.headers);r.fire("meta",{size:t.size||n.size,filename:n.name,source:n.source})})):r.fire("error",{type:"error",body:"Can't load URL",code:400})},r=Object.assign({},pe(),{setSource:function(e){return t.source=e},getProgress:function(){return t.progress},abort:function(){t.request&&t.request.abort&&t.request.abort()},load:function(){var e,o,i=t.source;r.fire("init",i),i instanceof File?r.fire("load",i):i instanceof Blob?r.fire("load",We(i,i.name)):Ye(i)?r.fire("load",We(Ze(i),e,null,o)):n(i)}});return r},nt=function(e){return/GET|HEAD/.test(e)},rt=function(e,t,n){var r={onheaders:function(){},onprogress:function(){},onload:function(){},ontimeout:function(){},onerror:function(){},onabort:function(){},abort:function(){o=!0,a.abort()}},o=!1,i=!1;n=Object.assign({method:"POST",headers:{},withCredentials:!1},n),t=encodeURI(t),nt(n.method)&&e&&(t=""+t+encodeURIComponent("string"==typeof e?e:JSON.stringify(e)));var a=new XMLHttpRequest;return(nt(n.method)?a:a.upload).onprogress=function(e){o||r.onprogress(e.lengthComputable,e.loaded,e.total)},a.onreadystatechange=function(){a.readyState<2||4===a.readyState&&0===a.status||i||(i=!0,r.onheaders(a))},a.onload=function(){a.status>=200&&a.status<300?r.onload(a):r.onerror(a)},a.onerror=function(){return r.onerror(a)},a.onabort=function(){o=!0,r.onabort()},a.ontimeout=function(){return r.ontimeout(a)},a.open(n.method,t,!0),V(n.timeout)&&(a.timeout=n.timeout),Object.keys(n.headers).forEach(function(e){var t=unescape(encodeURIComponent(n.headers[e]));a.setRequestHeader(e,t)}),n.responseType&&(a.responseType=n.responseType),n.withCredentials&&(a.withCredentials=!0),a.send(e),r},ot=function(e,t,n,r){return{type:e,code:t,body:n,headers:r}},it=function(e){return function(t){e(ot("error",0,"Timeout",t.getAllResponseHeaders()))}},at=function(e){return/\?/.test(e)},ut=function(){for(var e="",t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach(function(t){e+=at(e)&&at(t)?t.replace(/\?/,"&"):t}),e},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if("function"==typeof t)return t;if(!t||!U(t.url))return null;var n=t.onload||function(e){return e},r=t.onerror||function(e){return null};return function(o,i,a,u,s,l){var c=rt(o,ut(e,t.url),Object.assign({},t,{responseType:"blob"}));return c.onload=function(e){var r=e.getAllResponseHeaders(),a=et(r).name||je(o);i(ot("load",e.status,"HEAD"===t.method?null:We(n(e.response),a),r))},c.onerror=function(e){a(ot("error",e.status,r(e.response)||e.statusText,e.getAllResponseHeaders()))},c.onheaders=function(e){l(ot("headers",e.status,null,e.getAllResponseHeaders()))},c.ontimeout=it(a),c.onprogress=u,c.onabort=s,c}},lt=0,ct=1,ft=2,dt=3,pt=4,Et=function(e,t,n,r,o,i,a,u,s,l,c){for(var f=[],d=c.chunkTransferId,p=c.chunkServer,E=c.chunkSize,_=c.chunkRetryDelays,T={serverId:d,aborted:!1},I=t.ondata||function(e){return e},v=t.onload||function(e,t){return"HEAD"===t?e.getResponseHeader("Upload-Offset"):e.response},m=t.onerror||function(e){return null},h=Math.floor(r.size/E),g=0;g<=h;g++){var R=g*E,O=r.slice(R,R+E,"application/offset+octet-stream");f[g]={index:g,size:O.size,offset:R,data:O,file:r,progress:0,retries:se(_),status:lt,error:null,request:null,timeout:null}}var D,y,S,A,L=function(e){return e.status===lt||e.status===dt},P=function(t){if(!T.aborted)if(t=t||f.find(L)){t.status=ft,t.progress=null;var n=p.ondata||function(e){return e},o=p.onerror||function(e){return null},u=ut(e,p.url,T.serverId),l="function"==typeof p.headers?p.headers(t):Object.assign({},p.headers,{"Content-Type":"application/offset+octet-stream","Upload-Offset":t.offset,"Upload-Length":r.size,"Upload-Name":r.name}),c=t.request=rt(n(t.data),u,Object.assign({},p,{headers:l}));c.onload=function(){t.status=ct,t.request=null,w()},c.onprogress=function(e,n,r){t.progress=e?n:null,M()},c.onerror=function(e){t.status=dt,t.request=null,t.error=o(e.response)||e.statusText,b(t)||a(ot("error",e.status,o(e.response)||e.statusText,e.getAllResponseHeaders()))},c.ontimeout=function(e){t.status=dt,t.request=null,b(t)||it(a)(e)},c.onabort=function(){t.status=lt,t.request=null,s()}}else f.every(function(e){return e.status===ct})&&i(T.serverId)},b=function(e){return 0!==e.retries.length&&(e.status=pt,clearTimeout(e.timeout),e.timeout=setTimeout(function(){P(e)},e.retries.shift()),!0)},M=function(){var e=f.reduce(function(e,t){return null===e||null===t.progress?null:e+t.progress},0);if(null===e)return u(!1,0,0);var t=f.reduce(function(e,t){return e+t.size},0);u(!0,e,t)},w=function(){f.filter(function(e){return e.status===ft}).length>=1||P()};return T.serverId?(D=function(e){T.aborted||(f.filter(function(t){return t.offset<e}).forEach(function(e){e.status=ct,e.progress=e.size}),w())},y=ut(e,p.url,T.serverId),S={headers:"function"==typeof t.headers?t.headers(T.serverId):Object.assign({},t.headers),method:"HEAD"},(A=rt(null,y,S)).onload=function(e){return D(v(e,S.method))},A.onerror=function(e){return a(ot("error",e.status,m(e.response)||e.statusText,e.getAllResponseHeaders()))},A.ontimeout=it(a)):function(i){var u=new FormData;H(o)&&u.append(n,JSON.stringify(o));var s="function"==typeof t.headers?t.headers(r,o):Object.assign({},t.headers,{"Upload-Length":r.size}),l=Object.assign({},t,{headers:s}),c=rt(I(u),ut(e,t.url),l);c.onload=function(e){return i(v(e,l.method))},c.onerror=function(e){return a(ot("error",e.status,m(e.response)||e.statusText,e.getAllResponseHeaders()))},c.ontimeout=it(a)}(function(e){T.aborted||(l(e),T.serverId=e,w())}),{abort:function(){T.aborted=!0,f.forEach(function(e){clearTimeout(e.timeout),e.request&&e.request.abort()})}}},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return"function"==typeof t?function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return t.apply(void 0,[n].concat(o,[r]))}:t&&U(t.url)?function(e,t,n,r){return function(o,i,a,u,s,l,c){if(o){var f=r.chunkUploads,d=f&&o.size>r.chunkSize,p=f&&(d||r.chunkForce);if(o instanceof Blob&&p)return Et(e,t,n,o,i,a,u,s,l,c,r);var E=t.ondata||function(e){return e},_=t.onload||function(e){return e},T=t.onerror||function(e){return null},I="function"==typeof t.headers?t.headers(o,i)||{}:Object.assign({},t.headers),v=Object.assign({},t,{headers:I}),m=new FormData;H(i)&&m.append(n,JSON.stringify(i)),(o instanceof Blob?[{name:null,file:o}]:o).forEach(function(e){m.append(n,e.file,null===e.name?e.file.name:""+e.name+e.file.name)});var h=rt(E(m),ut(e,t.url),v);return h.onload=function(e){a(ot("load",e.status,_(e.response),e.getAllResponseHeaders()))},h.onerror=function(e){u(ot("error",e.status,T(e.response)||e.statusText,e.getAllResponseHeaders()))},h.ontimeout=it(u),h.onprogress=s,h.onabort=l,h}}}(e,t,n,r):null},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if("function"==typeof t)return t;if(!t||!U(t.url))return function(e,t){return t()};var n=t.onload||function(e){return e},r=t.onerror||function(e){return null};return function(o,i,a){var u=rt(o,e+t.url,t);return u.onload=function(e){i(ot("load",e.status,n(e.response),e.getAllResponseHeaders()))},u.onerror=function(e){a(ot("error",e.status,r(e.response)||e.statusText,e.getAllResponseHeaders()))},u.ontimeout=it(a),u}},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e+Math.random()*(t-e)},vt=function(e,t){var n={complete:!1,perceivedProgress:0,perceivedPerformanceUpdater:null,progress:null,timestamp:null,perceivedDuration:0,duration:0,request:null,response:null},r=t.allowMinimumUploadDuration,o=function(){n.request&&(n.perceivedPerformanceUpdater.clear(),n.request.abort&&n.request.abort(),n.complete=!0)},i=r?function(){return n.progress?Math.min(n.progress,n.perceivedProgress):null}:function(){return n.progress||null},a=r?function(){return Math.min(n.duration,n.perceivedDuration)}:function(){return n.duration},u=Object.assign({},pe(),{process:function(t,o){var i=function(){0!==n.duration&&null!==n.progress&&u.fire("progress",u.getProgress())},a=function(){n.complete=!0,u.fire("load-perceived",n.response.body)};u.fire("start"),n.timestamp=Date.now(),n.perceivedPerformanceUpdater=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:25),r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250,o=null,i=Date.now();return t>0&&function a(){var u=Date.now()-i,s=It(n,r);u+s>t&&(s=u+s-t);var l=u/t;l>=1||document.hidden?e(1):(e(l),o=setTimeout(a,s))}(),{clear:function(){clearTimeout(o)}}}(function(e){n.perceivedProgress=e,n.perceivedDuration=Date.now()-n.timestamp,i(),n.response&&1===n.perceivedProgress&&!n.complete&&a()},r?It(750,1500):0),n.request=e(t,o,function(e){n.response=H(e)?e:{type:"load",code:200,body:""+e,headers:{}},n.duration=Date.now()-n.timestamp,n.progress=1,u.fire("load",n.response.body),(!r||r&&1===n.perceivedProgress)&&a()},function(e){n.perceivedPerformanceUpdater.clear(),u.fire("error",H(e)?e:{type:"error",code:0,body:""+e})},function(e,t,r){n.duration=Date.now()-n.timestamp,n.progress=e?t/r:null,i()},function(){n.perceivedPerformanceUpdater.clear(),u.fire("abort",n.response?n.response.body:null)},function(e){u.fire("transfer",e)})},abort:o,getProgress:i,getDuration:a,reset:function(){o(),n.complete=!1,n.perceivedProgress=0,n.progress=0,n.timestamp=null,n.perceivedDuration=0,n.duration=0,n.request=null,n.response=null}});return u},mt=function(e){return e.substr(0,e.lastIndexOf("."))||e},ht=function(e){return!!(e instanceof File||e instanceof Blob&&e.name)},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=oe(),i={archived:!1,frozen:!1,released:!1,source:null,file:r,serverFileReference:t,transferId:null,processingAborted:!1,status:t?Ie.PROCESSING_COMPLETE:Ie.INIT,activeLoader:null,activeProcessor:null},a=null,u={},s=function(e){return i.status=e},l=function(e){if(!i.released&&!i.frozen){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];f.fire.apply(f,[e].concat(n))}},c=function(e,t,n){var r=e.split("."),o=r[0],i=r.pop(),a=u;r.forEach(function(e){return a=a[e]}),JSON.stringify(a[i])!==JSON.stringify(t)&&(a[i]=t,l("metadata-update",{key:o,value:u[o],silent:n}))},f=Object.assign({id:{get:function(){return o}},origin:{get:function(){return e},set:function(t){return e=t}},serverId:{get:function(){return i.serverFileReference}},transferId:{get:function(){return i.transferId}},status:{get:function(){return i.status}},filename:{get:function(){return i.file.name}},filenameWithoutExtension:{get:function(){return mt(i.file.name)}},fileExtension:{get:function(){return ke(i.file.name)}},fileType:{get:function(){return i.file.type}},fileSize:{get:function(){return i.file.size}},file:{get:function(){return i.file}},relativePath:{get:function(){return i.file._relativePath}},source:{get:function(){return i.source}},getMetadata:function(e){return function e(t){if(!H(t))return t;var n=b(t)?[]:{};for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];n[r]=o&&H(o)?e(o):o}return n}(e?u[e]:u)},setMetadata:function(e,t,n){if(H(e)){var r=e;return Object.keys(r).forEach(function(e){c(e,r[e],t)}),e}return c(e,t,n),t},extend:function(e,t){return d[e]=t},abortLoad:function(){i.activeLoader?i.activeLoader.abort():(s(Ie.INIT),l("load-abort"))},retryLoad:function(){i.activeLoader&&i.activeLoader.load()},requestProcessing:function(){i.processingAborted=!1,s(Ie.PROCESSING_QUEUED)},abortProcessing:function(){return new Promise(function(e){if(!i.activeProcessor)return i.processingAborted=!0,s(Ie.IDLE),l("process-abort"),void e();a=function(){e()},i.activeProcessor.abort()})},load:function(t,n,r){i.source=t,f.fireSync("init"),i.file?f.fireSync("load-skip"):(i.file=function(e){var t=[e.name,e.size,e.type];return e instanceof Blob||Ye(e)?t[0]=e.name||Xe():Ye(e)?(t[1]=e.length,t[2]=Qe(e)):U(e)&&(t[0]=je(e),t[1]=0,t[2]="application/octet-stream"),{name:t[0],size:t[1],type:t[2]}}(t),n.on("init",function(){l("load-init")}),n.on("meta",function(t){i.file.size=t.size,i.file.filename=t.filename,t.source&&(e=ve.LIMBO,i.serverFileReference=t.source,i.status=Ie.PROCESSING_COMPLETE),l("load-meta")}),n.on("progress",function(e){s(Ie.LOADING),l("load-progress",e)}),n.on("error",function(e){s(Ie.LOAD_ERROR),l("load-request-error",e)}),n.on("abort",function(){s(Ie.INIT),l("load-abort")}),n.on("load",function(t){i.activeLoader=null;var n=function(t){i.file=ht(t)?t:i.file,e===ve.LIMBO&&i.serverFileReference?s(Ie.PROCESSING_COMPLETE):s(Ie.IDLE),l("load")};i.serverFileReference?n(t):r(t,n,function(e){i.file=t,l("load-meta"),s(Ie.LOAD_ERROR),l("load-file-error",e)})}),n.setSource(t),i.activeLoader=n,n.load())},process:function e(t,n){if(i.processingAborted)i.processingAborted=!1;else if(s(Ie.PROCESSING),a=null,i.file instanceof Blob){t.on("load",function(e){i.transferId=null,i.serverFileReference=e}),t.on("transfer",function(e){i.transferId=e}),t.on("load-perceived",function(e){i.activeProcessor=null,i.transferId=null,i.serverFileReference=e,s(Ie.PROCESSING_COMPLETE),l("process-complete",e)}),t.on("start",function(){l("process-start")}),t.on("error",function(e){i.activeProcessor=null,s(Ie.PROCESSING_ERROR),l("process-error",e)}),t.on("abort",function(e){i.activeProcessor=null,i.transferId=null,i.serverFileReference=e,s(Ie.IDLE),l("process-abort"),a&&a()}),t.on("progress",function(e){l("process-progress",e)});var r=console.error;n(i.file,function(e){i.archived||t.process(e,Object.assign({},u))},r),i.activeProcessor=t}else f.on("load",function(){e(t,n)})},revert:function(e,t){return new Promise(function(n,r){null!==i.serverFileReference?(e(i.serverFileReference,function(){i.serverFileReference=null,n()},function(e){t?(s(Ie.PROCESSING_REVERT_ERROR),l("process-revert-error"),r(e)):n()}),s(Ie.IDLE),l("process-revert")):n()})}},pe(),{freeze:function(){return i.frozen=!0},release:function(){return i.released=!0},released:{get:function(){return i.released}},archive:function(){return i.archived=!0},archived:{get:function(){return i.archived}}}),d=n(f);return d},Rt=function(e,t){var n=function(e,t){return M(t)?0:U(t)?e.findIndex(function(e){return e.id===t}):-1}(e,t);if(!(n<0))return e[n]||null},Ot=function(e,t,n,r,o,i){var a=rt(null,e,{method:"GET",responseType:"blob"});return a.onload=function(n){var r=n.getAllResponseHeaders(),o=et(r).name||je(e);t(ot("load",n.status,We(n.response,o),r))},a.onerror=function(e){n(ot("error",e.status,e.statusText,e.getAllResponseHeaders()))},a.onheaders=function(e){i(ot("headers",e.status,null,e.getAllResponseHeaders()))},a.ontimeout=it(n),a.onprogress=r,a.onabort=o,a},Dt=function(e){return 0===e.indexOf("//")&&(e=location.protocol+e),e.toLowerCase().replace("blob:","").replace(/([a-z])?:\/\//,"$1").split("/")[0]},yt=function(e){return function(){return Y(e)?e.apply(void 0,arguments):e}},St=function(e,t){clearTimeout(t.listUpdateTimeout),t.listUpdateTimeout=setTimeout(function(){e("DID_UPDATE_ITEMS",{items:be(t.items)})},0)},At=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise(function(t){if(!e)return t(!0);var r=e.apply(void 0,n);return null==r?t(!0):"boolean"==typeof r?t(r):void("function"==typeof r.then&&r.then(t))})},Lt=function(e,t){e.items.sort(function(e,n){return t(Te(e),Te(n))})},Pt=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.query,o=n.success,i=void 0===o?function(){}:o,a=n.failure,u=void 0===a?function(){}:a,s=ue(n,["query","success","failure"]),l=Le(e.items,r);l?t(l,i,u,s||{}):u({error:ot("error",0,"Item not found"),file:null})}},bt=function(e,n,r){return{ABORT_ALL:function(){be(r.items).forEach(function(e){e.freeze(),e.abortLoad(),e.abortProcessing()})},DID_SET_FILES:function(t){var n=t.value,o=(void 0===n?[]:n).map(function(e){return{source:e.source?e.source:e,options:e.options}}),i=be(r.items);i.forEach(function(t){o.find(function(e){return e.source===t.source||e.source===t.file})||e("REMOVE_ITEM",{query:t,remove:!1})}),i=be(r.items),o.forEach(function(t,n){i.find(function(e){return e.source===t.source||e.file===t.source})||e("ADD_ITEM",Object.assign({},t,{interactionMethod:re,index:n}))})},DID_UPDATE_ITEM_METADATA:function(t){var o=t.id,i=t.action,a=t.change;a.silent||(clearTimeout(r.itemUpdateTimeout),r.itemUpdateTimeout=setTimeout(function(){var t=Rt(r.items,o);if(n("IS_ASYNC")){t.origin===ve.LOCAL&&e("DID_LOAD_ITEM",{id:t.id,error:null,serverFileReference:t.source});var u,s=function(){setTimeout(function(){e("REQUEST_ITEM_PROCESSING",{query:o})},32)};return t.status===Ie.PROCESSING_COMPLETE?(u=r.options.instantUpload,void t.revert(Tt(r.options.server.url,r.options.server.revert),n("GET_FORCE_REVERT")).then(u?s:function(){}).catch(function(){})):t.status===Ie.PROCESSING?function(e){t.abortProcessing().then(e?s:function(){})}(r.options.instantUpload):void(r.options.instantUpload&&s())}Oe("SHOULD_PREPARE_OUTPUT",!1,{item:t,query:n,action:i,change:a}).then(function(r){var i=n("GET_BEFORE_PREPARE_FILE");i&&(r=i(t,r)),r&&e("REQUEST_PREPARE_OUTPUT",{query:o,item:t,success:function(t){e("DID_PREPARE_OUTPUT",{id:o,file:t})}},!0)})},0))},MOVE_ITEM:function(e){var t=e.query,n=e.index,o=Le(r.items,t);if(o){var i=r.items.indexOf(o);i!==(n=xe(n,0,r.items.length-1))&&r.items.splice(n,0,r.items.splice(i,1)[0])}},SORT:function(t){var o=t.compare;Lt(r,o),e("DID_SORT_ITEMS",{items:n("GET_ACTIVE_ITEMS")})},ADD_ITEMS:function(t){var r=t.items,o=t.index,i=t.interactionMethod,a=t.success,u=void 0===a?function(){}:a,s=t.failure,l=void 0===s?function(){}:s,c=o;if(-1===o||void 0===o){var f=n("GET_ITEM_INSERT_LOCATION"),d=n("GET_TOTAL_ITEMS");c="before"===f?0:d}var p=n("GET_IGNORED_FILES"),E=r.filter(function(e){return ht(e)?!p.includes(e.name.toLowerCase()):!M(e)}).map(function(t){return new Promise(function(n,r){e("ADD_ITEM",{interactionMethod:i,source:t.source||t,success:n,failure:r,index:c++,options:t.options||{}})})});Promise.all(E).then(u).catch(l)},ADD_ITEM:function(t){var o=t.source,i=t.index,a=void 0===i?-1:i,u=t.interactionMethod,s=t.success,l=void 0===s?function(){}:s,c=t.failure,f=void 0===c?function(){}:c,d=t.options,p=void 0===d?{}:d;if(M(o))f({error:ot("error",0,"No source"),file:null});else if(!ht(o)||!r.options.ignoredFiles.includes(o.name.toLowerCase())){if(!function(e){var t=be(e.items).length;if(!e.options.allowMultiple)return 0===t;var n=e.options.maxFiles;return null===n||t<n}(r)){if(r.options.allowMultiple||!r.options.allowMultiple&&!r.options.allowReplace){var E=ot("warning",0,"Max files");return e("DID_THROW_MAX_FILES",{source:o,error:E}),void f({error:E,file:null})}var _=be(r.items)[0];if(_.status===Ie.PROCESSING_COMPLETE||_.status===Ie.PROCESSING_REVERT_ERROR){var T=n("GET_FORCE_REVERT");if(_.revert(Tt(r.options.server.url,r.options.server.revert),T).then(function(){T&&e("ADD_ITEM",{source:o,index:a,interactionMethod:u,success:l,failure:f,options:p})}).catch(function(){}),T)return}e("REMOVE_ITEM",{query:_.id})}var I="local"===p.type?ve.LOCAL:"limbo"===p.type?ve.LIMBO:ve.INPUT,v=gt(I,I===ve.INPUT?null:o,p.file);Object.keys(p.metadata||{}).forEach(function(e){v.setMetadata(e,p.metadata[e])}),De("DID_CREATE_ITEM",v,{query:n,dispatch:e});var m=n("GET_ITEM_INSERT_LOCATION");r.options.itemInsertLocationFreedom||(a="before"===m?-1:r.items.length),function(e,t,n){M(t)||(void 0===n?e.push(t):function(e,t,n){e.splice(t,0,n)}(e,n=xe(n,0,e.length),t))}(r.items,v,a),Y(m)&&o&&Lt(r,m);var h=v.id;v.on("init",function(){e("DID_INIT_ITEM",{id:h})}),v.on("load-init",function(){e("DID_START_ITEM_LOAD",{id:h})}),v.on("load-meta",function(){e("DID_UPDATE_ITEM_META",{id:h})}),v.on("load-progress",function(t){e("DID_UPDATE_ITEM_LOAD_PROGRESS",{id:h,progress:t})}),v.on("load-request-error",function(t){var n=yt(r.options.labelFileLoadError)(t);if(t.code>=400&&t.code<500)return e("DID_THROW_ITEM_INVALID",{id:h,error:t,status:{main:n,sub:t.code+" ("+t.body+")"}}),void f({error:t,file:Te(v)});e("DID_THROW_ITEM_LOAD_ERROR",{id:h,error:t,status:{main:n,sub:r.options.labelTapToRetry}})}),v.on("load-file-error",function(t){e("DID_THROW_ITEM_INVALID",{id:h,error:t.status,status:t.status}),f({error:t.status,file:Te(v)})}),v.on("load-abort",function(){e("REMOVE_ITEM",{query:h})}),v.on("load-skip",function(){e("COMPLETE_LOAD_ITEM",{query:h,item:v,data:{source:o,success:l}})}),v.on("load",function(){var t=function(t){t?(v.on("metadata-update",function(t){e("DID_UPDATE_ITEM_METADATA",{id:h,change:t})}),Oe("SHOULD_PREPARE_OUTPUT",!1,{item:v,query:n}).then(function(t){var i=n("GET_BEFORE_PREPARE_FILE");i&&(t=i(v,t));var a=function(){e("COMPLETE_LOAD_ITEM",{query:h,item:v,data:{source:o,success:l}}),St(e,r)};t?e("REQUEST_PREPARE_OUTPUT",{query:h,item:v,success:function(t){e("DID_PREPARE_OUTPUT",{id:h,file:t}),a()}},!0):a()})):e("REMOVE_ITEM",{query:h})};Oe("DID_LOAD_ITEM",v,{query:n,dispatch:e}).then(function(){At(n("GET_BEFORE_ADD_FILE"),Te(v)).then(t)}).catch(function(){t(!1)})}),v.on("process-start",function(){e("DID_START_ITEM_PROCESSING",{id:h})}),v.on("process-progress",function(t){e("DID_UPDATE_ITEM_PROCESS_PROGRESS",{id:h,progress:t})}),v.on("process-error",function(t){e("DID_THROW_ITEM_PROCESSING_ERROR",{id:h,error:t,status:{main:yt(r.options.labelFileProcessingError)(t),sub:r.options.labelTapToRetry}})}),v.on("process-revert-error",function(t){e("DID_THROW_ITEM_PROCESSING_REVERT_ERROR",{id:h,error:t,status:{main:yt(r.options.labelFileProcessingRevertError)(t),sub:r.options.labelTapToRetry}})}),v.on("process-complete",function(t){e("DID_COMPLETE_ITEM_PROCESSING",{id:h,error:null,serverFileReference:t}),e("DID_DEFINE_VALUE",{id:h,value:t})}),v.on("process-abort",function(){e("DID_ABORT_ITEM_PROCESSING",{id:h})}),v.on("process-revert",function(){e("DID_REVERT_ITEM_PROCESSING",{id:h}),e("DID_DEFINE_VALUE",{id:h,value:null})}),e("DID_ADD_ITEM",{id:h,index:a,interactionMethod:u}),St(e,r);var g=r.options.server||{},R=g.url,O=g.load,D=g.restore,y=g.fetch;v.load(o,tt(I===ve.INPUT?U(o)&&function(e){return(e.indexOf(":")>-1||e.indexOf("//")>-1)&&Dt(location.href)!==Dt(e)}(o)&&y?st(R,y):Ot:st(R,I===ve.LIMBO?D:O)),function(e,t,r){Oe("LOAD_FILE",e,{query:n}).then(t).catch(r)})}},REQUEST_PREPARE_OUTPUT:function(e){var t=e.item,r=e.success,o=e.failure,i=void 0===o?function(){}:o,a={error:ot("error",0,"Item not found"),file:null};if(t.archived)return i(a);Oe("PREPARE_OUTPUT",t.file,{query:n,item:t}).then(function(e){Oe("COMPLETE_PREPARE_OUTPUT",e,{query:n,item:t}).then(function(e){if(t.archived)return i(a);r(e)})})},COMPLETE_LOAD_ITEM:function(t){var o=t.item,i=t.data,a=i.success,u=i.source,s=n("GET_ITEM_INSERT_LOCATION");if(Y(s)&&u&&Lt(r,s),e("DID_LOAD_ITEM",{id:o.id,error:null,serverFileReference:o.origin===ve.INPUT?null:u}),a(Te(o)),o.origin!==ve.LOCAL)return o.origin===ve.LIMBO?(e("DID_COMPLETE_ITEM_PROCESSING",{id:o.id,error:null,serverFileReference:u}),void e("DID_DEFINE_VALUE",{id:o.id,value:o.serverId||u})):void(n("IS_ASYNC")&&r.options.instantUpload&&e("REQUEST_ITEM_PROCESSING",{query:o.id}));e("DID_LOAD_LOCAL_ITEM",{id:o.id})},RETRY_ITEM_LOAD:Pt(r,function(e){e.retryLoad()}),REQUEST_ITEM_PREPARE:Pt(r,function(t,n,r){e("REQUEST_PREPARE_OUTPUT",{query:t.id,item:t,success:function(r){e("DID_PREPARE_OUTPUT",{id:t.id,file:r}),n({file:t,output:r})},failure:r},!0)}),REQUEST_ITEM_PROCESSING:Pt(r,function(t,o,i){if(t.status===Ie.IDLE||t.status===Ie.PROCESSING_ERROR)t.status!==Ie.PROCESSING_QUEUED&&(t.requestProcessing(),e("DID_REQUEST_ITEM_PROCESSING",{id:t.id}),e("PROCESS_ITEM",{query:t,success:o,failure:i},!0));else{var a=function(){return e("REQUEST_ITEM_PROCESSING",{query:t,success:o,failure:i})},u=function(){return document.hidden?a():setTimeout(a,32)};t.status===Ie.PROCESSING_COMPLETE||t.status===Ie.PROCESSING_REVERT_ERROR?t.revert(Tt(r.options.server.url,r.options.server.revert),n("GET_FORCE_REVERT")).then(u).catch(function(){}):t.status===Ie.PROCESSING&&t.abortProcessing().then(u)}}),PROCESS_ITEM:Pt(r,function(t,o,i){var a=n("GET_MAX_PARALLEL_UPLOADS");if(n("GET_ITEMS_BY_STATUS",Ie.PROCESSING).length!==a){if(t.status!==Ie.PROCESSING){var u=function t(){var n=r.processingQueue.shift();if(n){var o=n.id,i=n.success,a=n.failure,u=Le(r.items,o);u&&!u.archived?e("PROCESS_ITEM",{query:o,success:i,failure:a},!0):t()}};t.onOnce("process-complete",function(){o(Te(t)),u();var i=r.options.server;if(r.options.instantUpload&&t.origin===ve.LOCAL&&Y(i.remove)){var a=function(){};t.origin=ve.LIMBO,r.options.server.remove(t.source,a,a)}n("GET_ITEMS_BY_STATUS",Ie.PROCESSING_COMPLETE).length===r.items.length&&e("DID_COMPLETE_ITEM_PROCESSING_ALL")}),t.onOnce("process-error",function(e){i({error:e,file:Te(t)}),u()});var s=r.options;t.process(vt(_t(s.server.url,s.server.process,s.name,{chunkTransferId:t.transferId,chunkServer:s.server.patch,chunkUploads:s.chunkUploads,chunkForce:s.chunkForce,chunkSize:s.chunkSize,chunkRetryDelays:s.chunkRetryDelays}),{allowMinimumUploadDuration:n("GET_ALLOW_MINIMUM_UPLOAD_DURATION")}),function(r,o,i){Oe("PREPARE_OUTPUT",r,{query:n,item:t}).then(function(n){e("DID_PREPARE_OUTPUT",{id:t.id,file:n}),o(n)}).catch(i)})}}else r.processingQueue.push({id:t.id,success:o,failure:i})}),RETRY_ITEM_PROCESSING:Pt(r,function(t){e("REQUEST_ITEM_PROCESSING",{query:t})}),REQUEST_REMOVE_ITEM:Pt(r,function(t){At(n("GET_BEFORE_REMOVE_FILE"),Te(t)).then(function(n){n&&e("REMOVE_ITEM",{query:t})})}),RELEASE_ITEM:Pt(r,function(e){e.release()}),REMOVE_ITEM:Pt(r,function(t,o,i,a){var u=function(){var n=t.id;Rt(r.items,n).archive(),e("DID_REMOVE_ITEM",{error:null,id:n,item:t}),St(e,r),o(Te(t))},s=r.options.server;t.origin===ve.LOCAL&&s&&Y(s.remove)&&!1!==a.remove?(e("DID_START_ITEM_REMOVE",{id:t.id}),s.remove(t.source,function(){return u()},function(n){e("DID_THROW_ITEM_REMOVE_ERROR",{id:t.id,error:ot("error",0,n,null),status:{main:yt(r.options.labelFileRemoveError)(n),sub:r.options.labelTapToRetry}})})):(a.revert&&t.origin!==ve.LOCAL&&null!==t.serverId&&t.revert(Tt(r.options.server.url,r.options.server.revert),n("GET_FORCE_REVERT")),u())}),ABORT_ITEM_LOAD:Pt(r,function(e){e.abortLoad()}),ABORT_ITEM_PROCESSING:Pt(r,function(t){t.serverId?e("REVERT_ITEM_PROCESSING",{id:t.id}):t.abortProcessing().then(function(){r.options.instantUpload&&e("REMOVE_ITEM",{query:t.id})})}),REQUEST_REVERT_ITEM_PROCESSING:Pt(r,function(t){if(r.options.instantUpload){var o=function(n){n&&e("REVERT_ITEM_PROCESSING",{query:t})},i=n("GET_BEFORE_REMOVE_FILE");if(!i)return o(!0);var a=i(Te(t));return null==a?o(!0):"boolean"==typeof a?o(a):void("function"==typeof a.then&&a.then(o))}e("REVERT_ITEM_PROCESSING",{query:t})}),REVERT_ITEM_PROCESSING:Pt(r,function(t){t.revert(Tt(r.options.server.url,r.options.server.revert),n("GET_FORCE_REVERT")).then(function(){(r.options.instantUpload||function(e){return!ht(e.file)}(t))&&e("REMOVE_ITEM",{query:t.id})}).catch(function(){})}),SET_OPTIONS:function(n){var r=n.options;t(r,function(t,n){e("SET_"+Z(t,"_").toUpperCase(),{value:n})})}}},Mt=function(e){return e},wt=function(e){return document.createElement(e)},Ct=function(e,t){var n=e.childNodes[0];n?t!==n.nodeValue&&(n.nodeValue=t):(n=document.createTextNode(t),e.appendChild(n))},Nt=function(e,t,n,r){var o=(r%360-90)*Math.PI/180;return{x:e+n*Math.cos(o),y:t+n*Math.sin(o)}},Gt=function(e,t,n,r,o){var i=1;return o>r&&o-r<=.5&&(i=0),r>o&&r-o>=.5&&(i=0),function(e,t,n,r,o,i){var a=Nt(e,t,n,o),u=Nt(e,t,n,r);return["M",a.x,a.y,"A",n,n,0,i,0,u.x,u.y].join(" ")}(e,t,n,360*Math.min(.9999,r),360*Math.min(.9999,o),i)},Ut=S({tag:"div",name:"progress-indicator",ignoreRectUpdate:!0,ignoreRect:!0,create:function(e){var t=e.root,n=e.props;n.spin=!1,n.progress=0,n.opacity=0;var r=a("svg");t.ref.path=a("path",{"stroke-width":2,"stroke-linecap":"round"}),r.appendChild(t.ref.path),t.ref.svg=r,t.appendChild(r)},write:function(e){var t=e.root,n=e.props;if(0!==n.opacity){n.align&&(t.element.dataset.align=n.align);var o=parseInt(r(t.ref.path,"stroke-width"),10),i=.5*t.rect.element.width,a=0,u=0;n.spin?(a=0,u=.5):(a=0,u=n.progress);var s=Gt(i,i,i-o,a,u);r(t.ref.path,"d",s),r(t.ref.path,"stroke-opacity",n.spin||n.progress>0?1:0)}},mixins:{apis:["progress","spin","align"],styles:["opacity"],animations:{opacity:{type:"tween",duration:500},progress:{type:"spring",stiffness:.95,damping:.65,mass:10}}}}),Bt=S({tag:"button",attributes:{type:"button"},ignoreRect:!0,ignoreRectUpdate:!0,name:"file-action-button",mixins:{apis:["label"],styles:["translateX","translateY","scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",translateX:"spring",translateY:"spring",opacity:{type:"tween",duration:250}},listeners:!0},create:function(e){var t=e.root,n=e.props;t.element.innerHTML=(n.icon||"")+"<span>"+n.label+"</span>",n.isDisabled=!1},write:function(e){var t=e.root,n=e.props,o=n.isDisabled,i=t.query("GET_DISABLED")||0===n.opacity;i&&!o?(n.isDisabled=!0,r(t.element,"disabled","disabled")):!i&&o&&(n.isDisabled=!1,t.element.removeAttribute("disabled"))}}),qt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=n,o=n*n,i=n*n*n;return(e=Math.round(Math.abs(e)))<r?e+" bytes":e<o?Math.floor(e/r)+" KB":e<i?Ft(e/o,1,t)+" MB":Ft(e/i,2,t)+" GB"},Ft=function(e,t,n){return e.toFixed(t).split(".").filter(function(e){return"0"!==e}).join(n)},Vt=function(e){var t=e.root,n=e.props;Ct(t.ref.fileSize,qt(t.query("GET_ITEM_SIZE",n.id),".",t.query("GET_FILE_SIZE_BASE"))),Ct(t.ref.fileName,Mt(t.query("GET_ITEM_NAME",n.id)))},xt=function(e){var t=e.root,n=e.props;V(t.query("GET_ITEM_SIZE",n.id))||Ct(t.ref.fileSize,t.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"))},Yt=S({name:"file-info",ignoreRect:!0,ignoreRectUpdate:!0,write:A({DID_LOAD_ITEM:Vt,DID_UPDATE_ITEM_META:Vt,DID_THROW_ITEM_LOAD_ERROR:xt,DID_THROW_ITEM_INVALID:xt}),didCreateView:function(e){De("CREATE_VIEW",Object.assign({},e,{view:e}))},create:function(e){var t=e.root,n=e.props,o=wt("span");o.className="filepond--file-info-main",r(o,"aria-hidden","true"),t.appendChild(o),t.ref.fileName=o;var i=wt("span");i.className="filepond--file-info-sub",t.appendChild(i),t.ref.fileSize=i,Ct(i,t.query("GET_LABEL_FILE_WAITING_FOR_SIZE")),Ct(o,Mt(t.query("GET_ITEM_NAME",n.id)))},mixins:{styles:["translateX","translateY"],animations:{translateX:"spring",translateY:"spring"}}}),jt=function(e){return Math.round(100*e)},kt=function(e){var t=e.root,n=e.action,r=null===n.progress?t.query("GET_LABEL_FILE_LOADING"):t.query("GET_LABEL_FILE_LOADING")+" "+jt(n.progress)+"%";Ct(t.ref.main,r),Ct(t.ref.sub,t.query("GET_LABEL_TAP_TO_CANCEL"))},Ht=function(e){var t=e.root;Ct(t.ref.main,""),Ct(t.ref.sub,"")},Xt=function(e){var t=e.root,n=e.action;Ct(t.ref.main,n.status.main),Ct(t.ref.sub,n.status.sub)},Wt=S({name:"file-status",ignoreRect:!0,ignoreRectUpdate:!0,write:A({DID_LOAD_ITEM:Ht,DID_REVERT_ITEM_PROCESSING:Ht,DID_REQUEST_ITEM_PROCESSING:function(e){var t=e.root;Ct(t.ref.main,t.query("GET_LABEL_FILE_PROCESSING")),Ct(t.ref.sub,t.query("GET_LABEL_TAP_TO_CANCEL"))},DID_ABORT_ITEM_PROCESSING:function(e){var t=e.root;Ct(t.ref.main,t.query("GET_LABEL_FILE_PROCESSING_ABORTED")),Ct(t.ref.sub,t.query("GET_LABEL_TAP_TO_RETRY"))},DID_COMPLETE_ITEM_PROCESSING:function(e){var t=e.root;Ct(t.ref.main,t.query("GET_LABEL_FILE_PROCESSING_COMPLETE")),Ct(t.ref.sub,t.query("GET_LABEL_TAP_TO_UNDO"))},DID_UPDATE_ITEM_PROCESS_PROGRESS:function(e){var t=e.root,n=e.action,r=null===n.progress?t.query("GET_LABEL_FILE_PROCESSING"):t.query("GET_LABEL_FILE_PROCESSING")+" "+jt(n.progress)+"%";Ct(t.ref.main,r),Ct(t.ref.sub,t.query("GET_LABEL_TAP_TO_CANCEL"))},DID_UPDATE_ITEM_LOAD_PROGRESS:kt,DID_THROW_ITEM_LOAD_ERROR:Xt,DID_THROW_ITEM_INVALID:Xt,DID_THROW_ITEM_PROCESSING_ERROR:Xt,DID_THROW_ITEM_PROCESSING_REVERT_ERROR:Xt,DID_THROW_ITEM_REMOVE_ERROR:Xt}),didCreateView:function(e){De("CREATE_VIEW",Object.assign({},e,{view:e}))},create:function(e){var t=e.root,n=wt("span");n.className="filepond--file-status-main",t.appendChild(n),t.ref.main=n;var r=wt("span");r.className="filepond--file-status-sub",t.appendChild(r),t.ref.sub=r,kt({root:t,action:{progress:null}})},mixins:{styles:["translateX","translateY","opacity"],animations:{opacity:{type:"tween",duration:250},translateX:"spring",translateY:"spring"}}}),zt={AbortItemLoad:{label:"GET_LABEL_BUTTON_ABORT_ITEM_LOAD",action:"ABORT_ITEM_LOAD",className:"filepond--action-abort-item-load",align:"LOAD_INDICATOR_POSITION"},RetryItemLoad:{label:"GET_LABEL_BUTTON_RETRY_ITEM_LOAD",action:"RETRY_ITEM_LOAD",icon:"GET_ICON_RETRY",className:"filepond--action-retry-item-load",align:"BUTTON_PROCESS_ITEM_POSITION"},RemoveItem:{label:"GET_LABEL_BUTTON_REMOVE_ITEM",action:"REQUEST_REMOVE_ITEM",icon:"GET_ICON_REMOVE",className:"filepond--action-remove-item",align:"BUTTON_REMOVE_ITEM_POSITION"},ProcessItem:{label:"GET_LABEL_BUTTON_PROCESS_ITEM",action:"REQUEST_ITEM_PROCESSING",icon:"GET_ICON_PROCESS",className:"filepond--action-process-item",align:"BUTTON_PROCESS_ITEM_POSITION"},AbortItemProcessing:{label:"GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",action:"ABORT_ITEM_PROCESSING",className:"filepond--action-abort-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"},RetryItemProcessing:{label:"GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",action:"RETRY_ITEM_PROCESSING",icon:"GET_ICON_RETRY",className:"filepond--action-retry-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"},RevertItemProcessing:{label:"GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",action:"REQUEST_REVERT_ITEM_PROCESSING",icon:"GET_ICON_UNDO",className:"filepond--action-revert-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"}},Qt=[];t(zt,function(e){Qt.push(e)});var Zt,$t=function(e){if("right"===tn(e))return 0;var t=e.ref.buttonRemoveItem.rect.element;return t.hidden?null:t.width+t.left},Kt=function(e){return e.ref.buttonAbortItemLoad.rect.element.width},Jt=function(e){return Math.floor(e.ref.buttonRemoveItem.rect.element.height/4)},en=function(e){return Math.floor(e.ref.buttonRemoveItem.rect.element.left/2)},tn=function(e){return e.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION")},nn={buttonAbortItemLoad:{opacity:0},buttonRetryItemLoad:{opacity:0},buttonRemoveItem:{opacity:0},buttonProcessItem:{opacity:0},buttonAbortItemProcessing:{opacity:0},buttonRetryItemProcessing:{opacity:0},buttonRevertItemProcessing:{opacity:0},loadProgressIndicator:{opacity:0,align:function(e){return e.query("GET_STYLE_LOAD_INDICATOR_POSITION")}},processProgressIndicator:{opacity:0,align:function(e){return e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")}},processingCompleteIndicator:{opacity:0,scaleX:.75,scaleY:.75},info:{translateX:0,translateY:0,opacity:0},status:{translateX:0,translateY:0,opacity:0}},rn={buttonRemoveItem:{opacity:1},buttonProcessItem:{opacity:1},info:{translateX:$t},status:{translateX:$t}},on={buttonAbortItemProcessing:{opacity:1},processProgressIndicator:{opacity:1},status:{opacity:1}},an={DID_THROW_ITEM_INVALID:{buttonRemoveItem:{opacity:1},info:{translateX:$t},status:{translateX:$t,opacity:1}},DID_START_ITEM_LOAD:{buttonAbortItemLoad:{opacity:1},loadProgressIndicator:{opacity:1},status:{opacity:1}},DID_THROW_ITEM_LOAD_ERROR:{buttonRetryItemLoad:{opacity:1},buttonRemoveItem:{opacity:1},info:{translateX:$t},status:{opacity:1}},DID_START_ITEM_REMOVE:{processProgressIndicator:{opacity:1,align:tn},info:{translateX:$t},status:{opacity:0}},DID_THROW_ITEM_REMOVE_ERROR:{processProgressIndicator:{opacity:0,align:tn},buttonRemoveItem:{opacity:1},info:{translateX:$t},status:{opacity:1,translateX:$t}},DID_LOAD_ITEM:rn,DID_LOAD_LOCAL_ITEM:{buttonRemoveItem:{opacity:1},info:{translateX:$t},status:{translateX:$t}},DID_START_ITEM_PROCESSING:on,DID_REQUEST_ITEM_PROCESSING:on,DID_UPDATE_ITEM_PROCESS_PROGRESS:on,DID_COMPLETE_ITEM_PROCESSING:{buttonRevertItemProcessing:{opacity:1},info:{opacity:1},status:{opacity:1}},DID_THROW_ITEM_PROCESSING_ERROR:{buttonRemoveItem:{opacity:1},buttonRetryItemProcessing:{opacity:1},status:{opacity:1},info:{translateX:$t}},DID_THROW_ITEM_PROCESSING_REVERT_ERROR:{buttonRevertItemProcessing:{opacity:1},status:{opacity:1},info:{opacity:1}},DID_ABORT_ITEM_PROCESSING:{buttonRemoveItem:{opacity:1},buttonProcessItem:{opacity:1},info:{translateX:$t},status:{opacity:1}},DID_REVERT_ITEM_PROCESSING:rn},un=S({create:function(e){var t=e.root;t.element.innerHTML=t.query("GET_ICON_DONE")},name:"processing-complete-indicator",ignoreRect:!0,mixins:{styles:["scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",opacity:{type:"tween",duration:250}}}}),sn=A({DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING:function(e){var t=e.root,n=e.action;t.ref.buttonAbortItemProcessing.label=n.value},DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD:function(e){var t=e.root,n=e.action;t.ref.buttonAbortItemLoad.label=n.value},DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL:function(e){var t=e.root,n=e.action;t.ref.buttonAbortItemRemoval.label=n.value},DID_REQUEST_ITEM_PROCESSING:function(e){var t=e.root;t.ref.processProgressIndicator.spin=!0,t.ref.processProgressIndicator.progress=0},DID_START_ITEM_LOAD:function(e){var t=e.root;t.ref.loadProgressIndicator.spin=!0,t.ref.loadProgressIndicator.progress=0},DID_START_ITEM_REMOVE:function(e){var t=e.root;t.ref.processProgressIndicator.spin=!0,t.ref.processProgressIndicator.progress=0},DID_UPDATE_ITEM_LOAD_PROGRESS:function(e){var t=e.root,n=e.action;t.ref.loadProgressIndicator.spin=!1,t.ref.loadProgressIndicator.progress=n.progress},DID_UPDATE_ITEM_PROCESS_PROGRESS:function(e){var t=e.root,n=e.action;t.ref.processProgressIndicator.spin=!1,t.ref.processProgressIndicator.progress=n.progress}}),ln=S({create:function(e){var n,r=e.root,o=e.props,i=Object.keys(zt).reduce(function(e,t){return e[t]=Object.assign({},zt[t]),e},{}),a=o.id,u=r.query("GET_ALLOW_REVERT"),s=r.query("GET_ALLOW_REMOVE"),l=r.query("GET_ALLOW_PROCESS"),c=r.query("GET_INSTANT_UPLOAD"),f=r.query("IS_ASYNC"),d=r.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");f?l&&!u?n=function(e){return!/RevertItemProcessing/.test(e)}:!l&&u?n=function(e){return!/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(e)}:l||u||(n=function(e){return!/Process/.test(e)}):n=function(e){return!/Process/.test(e)};var p=n?Qt.filter(n):Qt.concat();if(c&&u&&(i.RevertItemProcessing.label="GET_LABEL_BUTTON_REMOVE_ITEM",i.RevertItemProcessing.icon="GET_ICON_REMOVE"),f&&!u){var E=an.DID_COMPLETE_ITEM_PROCESSING;E.info.translateX=en,E.info.translateY=Jt,E.status.translateY=Jt,E.processingCompleteIndicator={opacity:1,scaleX:1,scaleY:1}}if(f&&!l&&(["DID_START_ITEM_PROCESSING","DID_REQUEST_ITEM_PROCESSING","DID_UPDATE_ITEM_PROCESS_PROGRESS","DID_THROW_ITEM_PROCESSING_ERROR"].forEach(function(e){an[e].status.translateY=Jt}),an.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX=Kt),d&&u){i.RevertItemProcessing.align="BUTTON_REMOVE_ITEM_POSITION";var _=an.DID_COMPLETE_ITEM_PROCESSING;_.info.translateX=$t,_.status.translateY=Jt,_.processingCompleteIndicator={opacity:1,scaleX:1,scaleY:1}}s||(i.RemoveItem.disabled=!0),t(i,function(e,t){var n=r.createChildView(Bt,{label:r.query(t.label),icon:r.query(t.icon),opacity:0});p.includes(e)&&r.appendChildView(n),t.disabled&&(n.element.setAttribute("disabled","disabled"),n.element.setAttribute("hidden","hidden")),n.element.dataset.align=r.query("GET_STYLE_"+t.align),n.element.classList.add(t.className),n.on("click",function(e){e.stopPropagation(),t.disabled||r.dispatch(t.action,{query:a})}),r.ref["button"+e]=n}),r.ref.processingCompleteIndicator=r.appendChildView(r.createChildView(un)),r.ref.processingCompleteIndicator.element.dataset.align=r.query("GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"),r.ref.info=r.appendChildView(r.createChildView(Yt,{id:a})),r.ref.status=r.appendChildView(r.createChildView(Wt,{id:a}));var T=r.appendChildView(r.createChildView(Ut,{opacity:0,align:r.query("GET_STYLE_LOAD_INDICATOR_POSITION")}));T.element.classList.add("filepond--load-indicator"),r.ref.loadProgressIndicator=T;var I=r.appendChildView(r.createChildView(Ut,{opacity:0,align:r.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")}));I.element.classList.add("filepond--process-indicator"),r.ref.processProgressIndicator=I,r.ref.activeStyles=[]},write:function(e){var n=e.root,r=e.actions,o=e.props;sn({root:n,actions:r,props:o});var i=r.concat().filter(function(e){return/^DID_/.test(e.type)}).reverse().find(function(e){return an[e.type]});if(i){n.ref.activeStyles=[];var a=an[i.type];t(nn,function(e,r){var o=n.ref[e];t(r,function(t,r){var i=a[e]&&void 0!==a[e][t]?a[e][t]:r;n.ref.activeStyles.push({control:o,key:t,value:i})})})}n.ref.activeStyles.forEach(function(e){var t=e.control,r=e.key,o=e.value;t[r]="function"==typeof o?o(n):o})},didCreateView:function(e){De("CREATE_VIEW",Object.assign({},e,{view:e}))},name:"file"}),cn=S({create:function(e){var t=e.root,n=e.props;t.ref.fileName=wt("legend"),t.appendChild(t.ref.fileName),t.ref.file=t.appendChildView(t.createChildView(ln,{id:n.id})),t.ref.data=!1},ignoreRect:!0,write:A({DID_LOAD_ITEM:function(e){var t=e.root,n=e.props;Ct(t.ref.fileName,Mt(t.query("GET_ITEM_NAME",n.id)))}}),didCreateView:function(e){De("CREATE_VIEW",Object.assign({},e,{view:e}))},tag:"fieldset",name:"file-wrapper"}),fn={type:"spring",damping:.6,mass:7},dn=function(e,t,n){var r=S({name:"panel-"+t.name+" filepond--"+n,mixins:t.mixins,ignoreRectUpdate:!0}),o=e.createChildView(r,t.props);e.ref[t.name]=e.appendChildView(o)},pn=S({name:"panel",read:function(e){var t=e.root;return e.props.heightCurrent=t.ref.bottom.translateY},write:function(e){var t=e.root,n=e.props;if(null!==t.ref.scalable&&n.scalable===t.ref.scalable||(t.ref.scalable=!N(n.scalable)||n.scalable,t.element.dataset.scalable=t.ref.scalable),n.height){var r=t.ref.top.rect.element,o=t.ref.bottom.rect.element,i=Math.max(r.height+o.height,n.height);t.ref.center.translateY=r.height,t.ref.center.scaleY=(i-r.height-o.height)/100,t.ref.bottom.translateY=i-o.height}},create:function(e){var t=e.root,n=e.props;[{name:"top"},{name:"center",props:{translateY:null,scaleY:null},mixins:{animations:{scaleY:fn},styles:["translateY","scaleY"]}},{name:"bottom",props:{translateY:null},mixins:{animations:{translateY:fn},styles:["translateY"]}}].forEach(function(e){dn(t,e,n.name)}),t.element.classList.add("filepond--"+n.name),t.ref.scalable=null},ignoreRect:!0,mixins:{apis:["height","heightCurrent","scalable"]}}),En={type:"spring",stiffness:.75,damping:.45,mass:10},_n={DID_START_ITEM_LOAD:"busy",DID_UPDATE_ITEM_LOAD_PROGRESS:"loading",DID_THROW_ITEM_INVALID:"load-invalid",DID_THROW_ITEM_LOAD_ERROR:"load-error",DID_LOAD_ITEM:"idle",DID_THROW_ITEM_REMOVE_ERROR:"remove-error",DID_START_ITEM_REMOVE:"busy",DID_START_ITEM_PROCESSING:"busy processing",DID_REQUEST_ITEM_PROCESSING:"busy processing",DID_UPDATE_ITEM_PROCESS_PROGRESS:"processing",DID_COMPLETE_ITEM_PROCESSING:"processing-complete",DID_THROW_ITEM_PROCESSING_ERROR:"processing-error",DID_THROW_ITEM_PROCESSING_REVERT_ERROR:"processing-revert-error",DID_ABORT_ITEM_PROCESSING:"cancelled",DID_REVERT_ITEM_PROCESSING:"idle"},Tn=A({DID_UPDATE_PANEL_HEIGHT:function(e){var t=e.root,n=e.action;t.height=n.height}}),In=A({DID_GRAB_ITEM:function(e){var t=e.root;e.props.dragOrigin={x:t.translateX,y:t.translateY}},DID_DRAG_ITEM:function(e){e.root.element.dataset.dragState="drag"},DID_DROP_ITEM:function(e){var t=e.root,n=e.props;n.dragOffset=null,n.dragOrigin=null,t.element.dataset.dragState="drop"}},function(e){var t=e.root,n=e.actions,r=e.props,o=e.shouldOptimize;"drop"===t.element.dataset.dragState&&t.scaleX<=1&&(t.element.dataset.dragState="idle");var i=n.concat().filter(function(e){return/^DID_/.test(e.type)}).reverse().find(function(e){return _n[e.type]});i&&i.type!==r.currentState&&(r.currentState=i.type,t.element.dataset.filepondItemState=_n[r.currentState]||"");var a=t.query("GET_ITEM_PANEL_ASPECT_RATIO")||t.query("GET_PANEL_ASPECT_RATIO");a?o||(t.height=t.rect.element.width*a):(Tn({root:t,actions:n,props:r}),!t.height&&t.ref.container.rect.element.height>0&&(t.height=t.ref.container.rect.element.height)),o&&(t.ref.panel.height=null),t.ref.panel.height=t.height}),vn=S({create:function(e){var t=e.root,n=e.props;t.ref.handleClick=function(e){return t.dispatch("DID_ACTIVATE_ITEM",{id:n.id})},t.element.id="filepond--item-"+n.id,t.element.addEventListener("click",t.ref.handleClick),t.ref.container=t.appendChildView(t.createChildView(cn,{id:n.id})),t.ref.panel=t.appendChildView(t.createChildView(pn,{name:"item-panel"})),t.ref.panel.height=null,n.markedForRemoval=!1,t.query("GET_ALLOW_REORDER")&&(t.element.dataset.dragState="idle",t.element.addEventListener("pointerdown",function(e){if(e.isPrimary){var r=!1,o=e.pageX,i=e.pageY;n.dragOrigin={x:t.translateX,y:t.translateY},n.dragCenter={x:e.offsetX,y:e.offsetY};var a,u,s,l=(a=t.query("GET_ACTIVE_ITEMS"),u=a.map(function(e){return e.id}),s=void 0,{setIndex:function(e){s=e},getIndex:function(){return s},getItemIndex:function(e){return u.indexOf(e.id)}});t.dispatch("DID_GRAB_ITEM",{id:n.id,dragState:l});var c=function(e){e.isPrimary&&(e.stopPropagation(),e.preventDefault(),n.dragOffset={x:e.pageX-o,y:e.pageY-i},n.dragOffset.x*n.dragOffset.x+n.dragOffset.y*n.dragOffset.y>16&&!r&&(r=!0,t.element.removeEventListener("click",t.ref.handleClick)),t.dispatch("DID_DRAG_ITEM",{id:n.id,dragState:l}))};document.addEventListener("pointermove",c),document.addEventListener("pointerup",function e(a){a.isPrimary&&(document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",e),n.dragOffset={x:a.pageX-o,y:a.pageY-i},t.dispatch("DID_DROP_ITEM",{id:n.id,dragState:l}),r&&setTimeout(function(){return t.element.addEventListener("click",t.ref.handleClick)},0))})}}))},write:In,destroy:function(e){var t=e.root,n=e.props;t.element.removeEventListener("click",t.ref.handleClick),t.dispatch("RELEASE_ITEM",{query:n.id})},tag:"li",name:"item",mixins:{apis:["id","interactionMethod","markedForRemoval","spawnDate","dragCenter","dragOrigin","dragOffset"],styles:["translateX","translateY","scaleX","scaleY","opacity","height"],animations:{scaleX:"spring",scaleY:"spring",translateX:En,translateY:En,opacity:{type:"tween",duration:150}}}}),mn=function(e,t){return Math.max(1,Math.floor((e+1)/t))},hn=function(e,t,n){if(n){var r=e.rect.element.width,o=t.length,i=null;if(0===o||n.top<t[0].rect.element.top)return-1;var a=t[0].rect.element,u=a.marginLeft+a.marginRight,s=a.width+u,l=mn(r,s);if(1===l){for(var c=0;c<o;c++){var f=t[c],d=f.rect.outer.top+.5*f.rect.element.height;if(n.top<d)return c}return o}for(var p=a.marginTop+a.marginBottom,E=a.height+p,_=0;_<o;_++){var T=_%l*s,I=Math.floor(_/l)*E,v=I-a.marginTop,m=T+s,h=I+E+a.marginBottom;if(n.top<h&&n.top>v){if(n.left<m)return _;i=_!==o-1?_:null}}return null!==i?i:o}},gn={height:0,width:0,get getHeight(){return this.height},set setHeight(e){0!==this.height&&0!==e||(this.height=e)},get getWidth(){return this.width},set setWidth(e){0!==this.width&&0!==e||(this.width=e)},setDimensions:function(e,t){0!==this.height&&0!==e||(this.height=e),0!==this.width&&0!==t||(this.width=t)}},Rn=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;e.dragOffset?(e.translateX=null,e.translateY=null,e.translateX=e.dragOrigin.x+e.dragOffset.x,e.translateY=e.dragOrigin.y+e.dragOffset.y,e.scaleX=1.025,e.scaleY=1.025):(e.translateX=t,e.translateY=n,Date.now()>e.spawnDate&&(0===e.opacity&&On(e,t,n,r,o),e.scaleX=1,e.scaleY=1,e.opacity=1))},On=function(e,t,n,r,o){e.interactionMethod===re?(e.translateX=null,e.translateX=t,e.translateY=null,e.translateY=n):e.interactionMethod===ee?(e.translateX=null,e.translateX=t-20*r,e.translateY=null,e.translateY=n-10*o,e.scaleX=.8,e.scaleY=.8):e.interactionMethod===te?(e.translateY=null,e.translateY=n-30):e.interactionMethod===J&&(e.translateX=null,e.translateX=t-30,e.translateY=null)},Dn=function(e){return e.rect.element.height+.5*e.rect.element.marginBottom+.5*e.rect.element.marginTop},yn=A({DID_ADD_ITEM:function(e){var t=e.root,n=e.action,r=n.id,o=n.index,i=n.interactionMethod;t.ref.addIndex=o;var a=Date.now(),u=a,s=1;if(i!==re){s=0;var l=t.query("GET_ITEM_INSERT_INTERVAL"),c=a-t.ref.lastItemSpanwDate;u=c<l?a+(l-c):a}t.ref.lastItemSpanwDate=u,t.appendChildView(t.createChildView(vn,{spawnDate:u,id:r,opacity:s,interactionMethod:i}),o)},DID_REMOVE_ITEM:function(e){var t=e.root,n=e.action.id,r=t.childViews.find(function(e){return e.id===n});r&&(r.scaleX=.9,r.scaleY=.9,r.opacity=0,r.markedForRemoval=!0)},DID_DRAG_ITEM:function(e){var t=e.root,n=e.action,r=n.id,o=n.dragState,i=t.query("GET_ITEM",{id:r}),a=t.childViews.find(function(e){return e.id===r}),u=t.childViews.length,s=o.getItemIndex(i);if(a){var l,c=a.dragOrigin.x+a.dragOffset.x+a.dragCenter.x,f=a.dragOrigin.y+a.dragOffset.y+a.dragCenter.y,d=Dn(a),p=(l=a).rect.element.width+.5*l.rect.element.marginLeft+.5*l.rect.element.marginRight,E=Math.floor(t.rect.outer.width/p);E>u&&(E=u);var _=Math.floor(u/E+1);gn.setHeight=d*_,gn.setWidth=p*E;var T={y:Math.floor(f/d),x:Math.floor(c/p),getGridIndex:function(){return f>gn.getHeight||f<0||c>gn.getWidth||c<0?s:this.y*E+this.x},getColIndex:function(){for(var e=t.query("GET_ACTIVE_ITEMS"),n=t.childViews.filter(function(e){return e.rect.element.height}),r=e.map(function(e){return n.find(function(t){return t.id===e.id})}),o=r.findIndex(function(e){return e===a}),i=Dn(a),u=r.length,s=u,l=0,c=0,d=0,p=0;p<u;p++)if(l=Dn(r[p]),f<(c=(d=c)+l)){if(o>p){if(f<d+i){s=p;break}continue}s=p;break}return s}},I=E>1?T.getGridIndex():T.getColIndex();t.dispatch("MOVE_ITEM",{query:a,index:I});var v=o.getIndex();if(void 0===v||v!==I){if(o.setIndex(I),void 0===v)return;t.dispatch("DID_REORDER_ITEMS",{items:t.query("GET_ACTIVE_ITEMS"),origin:s,target:I})}}}}),Sn=S({create:function(e){var t=e.root;r(t.element,"role","list"),t.ref.lastItemSpanwDate=Date.now()},write:function(e){var t=e.root,n=e.props,r=e.actions,o=e.shouldOptimize;yn({root:t,props:n,actions:r});var i=n.dragCoordinates,a=t.rect.element.width,u=t.childViews.filter(function(e){return e.rect.element.height}),s=t.query("GET_ACTIVE_ITEMS").map(function(e){return u.find(function(t){return t.id===e.id})}).filter(function(e){return e}),l=i?hn(t,s,i):null,c=t.ref.addIndex||null;t.ref.addIndex=null;var f=0,d=0,p=0;if(0!==s.length){var E=s[0].rect.element,_=E.marginTop+E.marginBottom,T=E.marginLeft+E.marginRight,I=E.width+T,v=E.height+_,m=mn(a,I);if(1===m){var h=0,g=0;s.forEach(function(e,t){if(l){var n=t-l;g=-2===n?.25*-_:-1===n?.75*-_:0===n?.75*_:1===n?.25*_:0}o&&(e.translateX=null,e.translateY=null),e.markedForRemoval||Rn(e,0,h+g);var r=(e.rect.element.height+_)*(e.markedForRemoval?e.opacity:1);h+=r})}else{var R=0,O=0;s.forEach(function(e,t){t===l&&(f=1),t===c&&(p+=1),e.markedForRemoval&&e.opacity<.5&&(d-=1);var n=t+p+f+d,r=n%m,i=Math.floor(n/m),a=r*I,u=i*v,s=Math.sign(a-R),E=Math.sign(u-O);R=a,O=u,e.markedForRemoval||(o&&(e.translateX=null,e.translateY=null),Rn(e,a,u,s,E))})}}},tag:"ul",name:"list",didWriteView:function(e){var t=e.root;t.childViews.filter(function(e){return e.markedForRemoval&&0===e.opacity&&e.resting}).forEach(function(e){e._destroy(),t.removeChildView(e)})},filterFrameActionsForChild:function(e,t){return t.filter(function(t){return!t.data||!t.data.id||e.id===t.data.id})},mixins:{apis:["dragCoordinates"]}}),An=A({DID_DRAG:function(e){var t=e.root,n=e.props,r=e.action;t.query("GET_ITEM_INSERT_LOCATION_FREEDOM")&&(n.dragCoordinates={left:r.position.scopeLeft-t.ref.list.rect.element.left,top:r.position.scopeTop-(t.rect.outer.top+t.rect.element.marginTop+t.rect.element.scrollTop)})},DID_END_DRAG:function(e){e.props.dragCoordinates=null}}),Ln=S({create:function(e){var t=e.root,n=e.props;t.ref.list=t.appendChildView(t.createChildView(Sn)),n.dragCoordinates=null,n.overflowing=!1},write:function(e){var t=e.root,n=e.props,r=e.actions;if(An({root:t,props:n,actions:r}),t.ref.list.dragCoordinates=n.dragCoordinates,n.overflowing&&!n.overflow&&(n.overflowing=!1,t.element.dataset.state="",t.height=null),n.overflow){var o=Math.round(n.overflow);o!==t.height&&(n.overflowing=!0,t.element.dataset.state="overflow",t.height=o)}},name:"list-scroller",mixins:{apis:["overflow","dragCoordinates"],styles:["height","translateY"],animations:{translateY:"spring"}}}),Pn=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";n?r(e,t,o):e.removeAttribute(t)},bn=function(e){var t=e.root,n=e.action;t.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE")&&Pn(t.element,"accept",!!n.value,n.value?n.value.join(","):"")},Mn=function(e){var t=e.root,n=e.action;Pn(t.element,"multiple",n.value)},wn=function(e){var t=e.root,n=e.action;Pn(t.element,"webkitdirectory",n.value)},Cn=function(e){var t=e.root,n=t.query("GET_DISABLED"),r=t.query("GET_ALLOW_BROWSE"),o=n||!r;Pn(t.element,"disabled",o)},Nn=function(e){var t=e.root;e.action.value?0===t.query("GET_TOTAL_ITEMS")&&Pn(t.element,"required",!0):Pn(t.element,"required",!1)},Gn=function(e){var t=e.root,n=e.action;Pn(t.element,"capture",!!n.value,!0===n.value?"":n.value)},Un=function(e){var t=e.root,n=t.element;t.query("GET_TOTAL_ITEMS")>0?(Pn(n,"required",!1),Pn(n,"name",!1)):(Pn(n,"name",!0,t.query("GET_NAME")),t.query("GET_CHECK_VALIDITY")&&n.setCustomValidity(""),t.query("GET_REQUIRED")&&Pn(n,"required",!0))},Bn=S({tag:"input",name:"browser",ignoreRect:!0,ignoreRectUpdate:!0,attributes:{type:"file"},create:function(e){var t=e.root,n=e.props;t.element.id="filepond--browser-"+n.id,r(t.element,"name",t.query("GET_NAME")),r(t.element,"aria-controls","filepond--assistant-"+n.id),r(t.element,"aria-labelledby","filepond--drop-label-"+n.id),bn({root:t,action:{value:t.query("GET_ACCEPTED_FILE_TYPES")}}),Mn({root:t,action:{value:t.query("GET_ALLOW_MULTIPLE")}}),wn({root:t,action:{value:t.query("GET_ALLOW_DIRECTORIES_ONLY")}}),Cn({root:t}),Nn({root:t,action:{value:t.query("GET_REQUIRED")}}),Gn({root:t,action:{value:t.query("GET_CAPTURE_METHOD")}}),t.ref.handleChange=function(e){if(t.element.value){var r=Array.from(t.element.files).map(function(e){return e._relativePath=e.webkitRelativePath,e});setTimeout(function(){n.onload(r),function(e){if(e&&""!==e.value){try{e.value=""}catch(e){}if(e.value){var t=wt("form"),n=e.parentNode,r=e.nextSibling;t.appendChild(e),t.reset(),r?n.insertBefore(e,r):n.appendChild(e)}}}(t.element)},250)}},t.element.addEventListener("change",t.ref.handleChange)},destroy:function(e){var t=e.root;t.element.removeEventListener("change",t.ref.handleChange)},write:A({DID_LOAD_ITEM:Un,DID_REMOVE_ITEM:Un,DID_THROW_ITEM_INVALID:function(e){var t=e.root;t.query("GET_CHECK_VALIDITY")&&t.element.setCustomValidity(t.query("GET_LABEL_INVALID_FIELD"))},DID_SET_DISABLED:Cn,DID_SET_ALLOW_BROWSE:Cn,DID_SET_ALLOW_DIRECTORIES_ONLY:wn,DID_SET_ALLOW_MULTIPLE:Mn,DID_SET_ACCEPTED_FILE_TYPES:bn,DID_SET_CAPTURE_METHOD:Gn,DID_SET_REQUIRED:Nn})}),qn=13,Fn=32,Vn=function(e,t){e.innerHTML=t;var n=e.querySelector(".filepond--label-action");return n&&r(n,"tabindex","0"),t},xn=S({name:"drop-label",ignoreRect:!0,create:function(e){var t=e.root,n=e.props,o=wt("label");r(o,"for","filepond--browser-"+n.id),r(o,"id","filepond--drop-label-"+n.id),r(o,"aria-hidden","true"),t.ref.handleKeyDown=function(e){(e.keyCode===qn||e.keyCode===Fn)&&(e.preventDefault(),t.ref.label.click())},t.ref.handleClick=function(e){e.target===o||o.contains(e.target)||t.ref.label.click()},o.addEventListener("keydown",t.ref.handleKeyDown),t.element.addEventListener("click",t.ref.handleClick),Vn(o,n.caption),t.appendChild(o),t.ref.label=o},destroy:function(e){var t=e.root;t.ref.label.addEventListener("keydown",t.ref.handleKeyDown),t.element.removeEventListener("click",t.ref.handleClick)},write:A({DID_SET_LABEL_IDLE:function(e){var t=e.root,n=e.action;Vn(t.ref.label,n.value)}}),mixins:{styles:["opacity","translateX","translateY"],animations:{opacity:{type:"tween",duration:150},translateX:"spring",translateY:"spring"}}}),Yn=S({name:"drip-blob",ignoreRect:!0,mixins:{styles:["translateX","translateY","scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",translateX:"spring",translateY:"spring",opacity:{type:"tween",duration:250}}}}),jn=A({DID_DRAG:function(e){var t=e.root,n=e.action;t.ref.blob?(t.ref.blob.translateX=n.position.scopeLeft,t.ref.blob.translateY=n.position.scopeTop,t.ref.blob.scaleX=1,t.ref.blob.scaleY=1,t.ref.blob.opacity=1):function(e){var t=e.root,n=.5*t.rect.element.width,r=.5*t.rect.element.height;t.ref.blob=t.appendChildView(t.createChildView(Yn,{opacity:0,scaleX:2.5,scaleY:2.5,translateX:n,translateY:r}))}({root:t})},DID_DROP:function(e){var t=e.root;t.ref.blob&&(t.ref.blob.scaleX=2.5,t.ref.blob.scaleY=2.5,t.ref.blob.opacity=0)},DID_END_DRAG:function(e){var t=e.root;t.ref.blob&&(t.ref.blob.opacity=0)}}),kn=S({ignoreRect:!0,ignoreRectUpdate:!0,name:"drip",write:function(e){var t=e.root,n=e.props,r=e.actions;jn({root:t,props:n,actions:r});var o=t.ref.blob;0===r.length&&o&&0===o.opacity&&(t.removeChildView(o),t.ref.blob=null)}}),Hn=function(e,t){try{var n=new DataTransfer;t.forEach(function(e){e instanceof File?n.items.add(e):n.items.add(new File([e],e.name,{type:e.type}))}),e.files=n.files}catch(e){return!1}return!0},Xn=function(e,t){return e.ref.fields[t]},Wn=function(e){e.query("GET_ACTIVE_ITEMS").forEach(function(t){e.ref.fields[t.id]&&e.element.appendChild(e.ref.fields[t.id])})},zn=function(e){var t=e.root;return Wn(t)},Qn=A({DID_SET_DISABLED:function(e){var t=e.root;t.element.disabled=t.query("GET_DISABLED")},DID_ADD_ITEM:function(e){var t=e.root,n=e.action,r=!(t.query("GET_ITEM",n.id).origin===ve.LOCAL)&&t.query("SHOULD_UPDATE_FILE_INPUT"),o=wt("input");o.type=r?"file":"hidden",o.name=t.query("GET_NAME"),o.disabled=t.query("GET_DISABLED"),t.ref.fields[n.id]=o,Wn(t)},DID_LOAD_ITEM:function(e){var t=e.root,n=e.action,r=Xn(t,n.id);if(r&&(null!==n.serverFileReference&&(r.value=n.serverFileReference),t.query("SHOULD_UPDATE_FILE_INPUT"))){var o=t.query("GET_ITEM",n.id);Hn(r,[o.file])}},DID_REMOVE_ITEM:function(e){var t=e.root,n=e.action,r=Xn(t,n.id);r&&(r.parentNode&&r.parentNode.removeChild(r),delete t.ref.fields[n.id])},DID_DEFINE_VALUE:function(e){var t=e.root,n=e.action,r=Xn(t,n.id);r&&(null===n.value?r.removeAttribute("value"):r.value=n.value,Wn(t))},DID_PREPARE_OUTPUT:function(e){var t=e.root,n=e.action;t.query("SHOULD_UPDATE_FILE_INPUT")&&setTimeout(function(){var e=Xn(t,n.id);e&&Hn(e,[n.file])},0)},DID_REORDER_ITEMS:zn,DID_SORT_ITEMS:zn}),Zn=S({tag:"fieldset",name:"data",create:function(e){return e.root.ref.fields={}},write:Qn,ignoreRect:!0}),$n=["jpg","jpeg","png","gif","bmp","webp","svg","tiff"],Kn=["css","csv","html","txt"],Jn={zip:"zip|compressed",epub:"application/epub+zip"},er=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.toLowerCase(),$n.includes(e)?"image/"+("jpg"===e?"jpeg":"svg"===e?"svg+xml":e):Kn.includes(e)?"text/"+e:Jn[e]||""},tr=function(e){return new Promise(function(t,n){var r=fr(e);if(r.length&&!nr(e))return t(r);rr(e).then(t)})},nr=function(e){return!!e.files&&e.files.length>0},rr=function(e){return new Promise(function(t,n){var r=(e.items?Array.from(e.items):[]).filter(function(e){return or(e)}).map(function(e){return ir(e)});r.length?Promise.all(r).then(function(e){var n=[];e.forEach(function(e){n.push.apply(n,e)}),t(n.filter(function(e){return e}).map(function(e){return e._relativePath||(e._relativePath=e.webkitRelativePath),e}))}).catch(console.error):t(e.files?Array.from(e.files):[])})},or=function(e){if(lr(e)){var t=cr(e);if(t)return t.isFile||t.isDirectory}return"file"===e.kind},ir=function(e){return new Promise(function(t,n){sr(e)?ar(cr(e)).then(t).catch(n):t([e.getAsFile()])})},ar=function(e){return new Promise(function(t,n){var r=[],o=0,i=0,a=function(){0===i&&0===o&&t(r)};!function e(t){o++;var u=t.createReader();!function t(){u.readEntries(function(n){if(0===n.length)return o--,void a();n.forEach(function(t){t.isDirectory?e(t):(i++,t.file(function(e){var n=ur(e);t.fullPath&&(n._relativePath=t.fullPath),r.push(n),i--,a()}))}),t()},n)}()}(e)})},ur=function(e){if(e.type.length)return e;var t=e.lastModifiedDate,n=e.name,r=er(ke(e.name));return r.length?((e=e.slice(0,e.size,r)).name=n,e.lastModifiedDate=t,e):e},sr=function(e){return lr(e)&&(cr(e)||{}).isDirectory},lr=function(e){return"webkitGetAsEntry"in e},cr=function(e){return e.webkitGetAsEntry()},fr=function(e){var t=[];try{if((t=pr(e)).length)return t;t=dr(e)}catch(e){}return t},dr=function(e){var t=e.getData("url");return"string"==typeof t&&t.length?[t]:[]},pr=function(e){var t=e.getData("text/html");if("string"==typeof t&&t.length){var n=t.match(/src\s*=\s*"(.+?)"/);if(n)return[n[1]]}return[]},Er=[],_r=function(e){return{pageLeft:e.pageX,pageTop:e.pageY,scopeLeft:e.offsetX||e.layerX,scopeTop:e.offsetY||e.layerY}},Tr=function(e){var t=Er.find(function(t){return t.element===e});if(t)return t;var n=Ir(e);return Er.push(n),n},Ir=function(e){var n=[],r={dragenter:gr,dragover:Rr,dragleave:Dr,drop:Or},o={};t(r,function(t,r){o[t]=r(e,n),e.addEventListener(t,o[t],!1)});var i={element:e,addListener:function(a){return n.push(a),function(){n.splice(n.indexOf(a),1),0===n.length&&(Er.splice(Er.indexOf(i),1),t(r,function(t){e.removeEventListener(t,o[t],!1)}))}}};return i},vr=function(e,t){var n,r=function(e,t){return"elementFromPoint"in e||(e=document),e.elementFromPoint(t.x,t.y)}("getRootNode"in(n=t)?n.getRootNode():document,{x:e.pageX-window.pageXOffset,y:e.pageY-window.pageYOffset});return r===t||t.contains(r)},mr=null,hr=function(e,t){try{e.dropEffect=t}catch(e){}},gr=function(e,t){return function(e){e.preventDefault(),mr=e.target,t.forEach(function(t){var n=t.element,r=t.onenter;vr(e,n)&&(t.state="enter",r(_r(e)))})}},Rr=function(e,t){return function(e){e.preventDefault();var n=e.dataTransfer;tr(n).then(function(r){var o=!1;t.some(function(t){var i=t.filterElement,a=t.element,u=t.onenter,s=t.onexit,l=t.ondrag,c=t.allowdrop;hr(n,"copy");var f=c(r);if(f)if(vr(e,a)){if(o=!0,null===t.state)return t.state="enter",void u(_r(e));if(t.state="over",i&&!f)return void hr(n,"none");l(_r(e))}else i&&!o&&hr(n,"none"),t.state&&(t.state=null,s(_r(e)));else hr(n,"none")})})}},Or=function(e,t){return function(e){e.preventDefault();var n=e.dataTransfer;tr(n).then(function(n){t.forEach(function(t){var r=t.filterElement,o=t.element,i=t.ondrop,a=t.onexit,u=t.allowdrop;if(t.state=null,!r||vr(e,o))return u(n)?void i(_r(e),n):a(_r(e))})})}},Dr=function(e,t){return function(e){mr===e.target&&t.forEach(function(t){var n=t.onexit;t.state=null,n(_r(e))})}},yr=function(e,t,n){e.classList.add("filepond--hopper");var r=n.catchesDropsOnPage,o=n.requiresDropOnElement,i=n.filterItems,a=void 0===i?function(e){return e}:i,u=function(e,t,n){var r=Tr(t),o={element:e,filterElement:n,state:null,ondrop:function(){},onenter:function(){},ondrag:function(){},onexit:function(){},onload:function(){},allowdrop:function(){}};return o.destroy=r.addListener(o),o}(e,r?document.documentElement:e,o),s="",l="";u.allowdrop=function(e){return t(a(e))},u.ondrop=function(e,n){var r=a(n);t(r)?(l="drag-drop",c.onload(r,e)):c.ondragend(e)},u.ondrag=function(e){c.ondrag(e)},u.onenter=function(e){l="drag-over",c.ondragstart(e)},u.onexit=function(e){l="drag-exit",c.ondragend(e)};var c={updateHopperState:function(){s!==l&&(e.dataset.hopperState=l,s=l)},onload:function(){},ondragstart:function(){},ondrag:function(){},ondragend:function(){},destroy:function(){u.destroy()}};return c},Sr=!1,Ar=[],Lr=function(e){var t=document.activeElement;if(t&&/textarea|input/i.test(t.nodeName)){for(var n=!1,r=t;r!==document.body;){if(r.classList.contains("filepond--root")){n=!0;break}r=r.parentNode}if(!n)return}tr(e.clipboardData).then(function(e){e.length&&Ar.forEach(function(t){return t(e)})})},Pr=function(){var e=function(e){t.onload(e)},t={destroy:function(){var t;t=e,de(Ar,Ar.indexOf(t)),0===Ar.length&&(document.removeEventListener("paste",Lr),Sr=!1)},onload:function(){}};return function(e){Ar.includes(e)||(Ar.push(e),Sr||(Sr=!0,document.addEventListener("paste",Lr)))}(e),t},br=null,Mr=null,wr=[],Cr=function(e,t){e.element.textContent=t},Nr=function(e,t,n){var r=e.query("GET_TOTAL_ITEMS");Cr(e,n+" "+t+", "+r+" "+(1===r?e.query("GET_LABEL_FILE_COUNT_SINGULAR"):e.query("GET_LABEL_FILE_COUNT_PLURAL"))),clearTimeout(Mr),Mr=setTimeout(function(){!function(e){e.element.textContent=""}(e)},1500)},Gr=function(e){return e.element.parentNode.contains(document.activeElement)},Ur=function(e){var t=e.root,n=e.action,r=t.query("GET_ITEM",n.id).filename,o=t.query("GET_LABEL_FILE_PROCESSING_ABORTED");Cr(t,r+" "+o)},Br=function(e){var t=e.root,n=e.action,r=t.query("GET_ITEM",n.id).filename;Cr(t,n.status.main+" "+r+" "+n.status.sub)},qr=S({create:function(e){var t=e.root,n=e.props;t.element.id="filepond--assistant-"+n.id,r(t.element,"role","status"),r(t.element,"aria-live","polite"),r(t.element,"aria-relevant","additions")},ignoreRect:!0,ignoreRectUpdate:!0,write:A({DID_LOAD_ITEM:function(e){var t=e.root,n=e.action;if(Gr(t)){t.element.textContent="";var r=t.query("GET_ITEM",n.id);wr.push(r.filename),clearTimeout(br),br=setTimeout(function(){Nr(t,wr.join(", "),t.query("GET_LABEL_FILE_ADDED")),wr.length=0},750)}},DID_REMOVE_ITEM:function(e){var t=e.root,n=e.action;if(Gr(t)){var r=n.item;Nr(t,r.filename,t.query("GET_LABEL_FILE_REMOVED"))}},DID_COMPLETE_ITEM_PROCESSING:function(e){var t=e.root,n=e.action,r=t.query("GET_ITEM",n.id).filename,o=t.query("GET_LABEL_FILE_PROCESSING_COMPLETE");Cr(t,r+" "+o)},DID_ABORT_ITEM_PROCESSING:Ur,DID_REVERT_ITEM_PROCESSING:Ur,DID_THROW_ITEM_REMOVE_ERROR:Br,DID_THROW_ITEM_LOAD_ERROR:Br,DID_THROW_ITEM_INVALID:Br,DID_THROW_ITEM_PROCESSING_ERROR:Br}),tag:"span",name:"assistant"}),Fr=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.replace(new RegExp(t+".","g"),function(e){return e.charAt(1).toUpperCase()})},Vr=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Date.now(),o=null;return function(){for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];clearTimeout(o);var s=Date.now()-r,l=function(){r=Date.now(),e.apply(void 0,a)};s<t?n||(o=setTimeout(l,t-s)):l()}},xr=function(e){return e.preventDefault()},Yr=function(e){var t=e.ref.list.childViews[0].childViews[0];return t?{top:t.rect.element.marginTop,bottom:t.rect.element.marginBottom}:{top:0,bottom:0}},jr=function(e){var t=0,n=0,r=e.ref.list,o=r.childViews[0],i=o.childViews.filter(function(e){return e.rect.element.height}),a=e.query("GET_ACTIVE_ITEMS").map(function(e){return i.find(function(t){return t.id===e.id})}).filter(function(e){return e});if(0===a.length)return{visual:t,bounds:n};var u=o.rect.element.width,s=hn(o,a,r.dragCoordinates),l=a[0].rect.element,c=l.marginTop+l.marginBottom,f=l.marginLeft+l.marginRight,d=l.width+f,p=l.height+c,E=void 0!==s&&s>=0?1:0,_=a.find(function(e){return e.markedForRemoval&&e.opacity<.45})?-1:0,T=a.length+E+_,I=mn(u,d);return 1===I?a.forEach(function(e){var r=e.rect.element.height+c;n+=r,t+=r*e.opacity}):(n=Math.ceil(T/I)*p,t=n),{visual:t,bounds:n}},kr=function(e){var t=e.ref.measureHeight||null;return{cappedHeight:parseInt(e.style.maxHeight,10)||null,fixedHeight:0===t?null:t}},Hr=function(e,t){var n=e.query("GET_ALLOW_REPLACE"),r=e.query("GET_ALLOW_MULTIPLE"),o=e.query("GET_TOTAL_ITEMS"),i=e.query("GET_MAX_FILES"),a=t.length;return!r&&a>1||!!(V(i=r?i:n?i:1)&&o+a>i)&&(e.dispatch("DID_THROW_MAX_FILES",{source:t,error:ot("warning",0,"Max files")}),!0)},Xr=function(e,t,n){var r=e.childViews[0];return hn(r,t,{left:n.scopeLeft-r.rect.element.left,top:n.scopeTop-(e.rect.outer.top+e.rect.element.marginTop+e.rect.element.scrollTop)})},Wr=function(e){var t=e.query("GET_ALLOW_DROP"),n=e.query("GET_DISABLED"),r=t&&!n;if(r&&!e.ref.hopper){var o=yr(e.element,function(t){var n=e.query("GET_BEFORE_DROP_FILE")||function(){return!0};return!e.query("GET_DROP_VALIDATION")||t.every(function(t){return De("ALLOW_HOPPER_ITEM",t,{query:e.query}).every(function(e){return!0===e})&&n(t)})},{filterItems:function(t){var n=e.query("GET_IGNORED_FILES");return t.filter(function(e){return!ht(e)||!n.includes(e.name.toLowerCase())})},catchesDropsOnPage:e.query("GET_DROP_ON_PAGE"),requiresDropOnElement:e.query("GET_DROP_ON_ELEMENT")});o.onload=function(t,n){var r=e.ref.list.childViews[0].childViews.filter(function(e){return e.rect.element.height}),o=e.query("GET_ACTIVE_ITEMS").map(function(e){return r.find(function(t){return t.id===e.id})}).filter(function(e){return e});Oe("ADD_ITEMS",t,{dispatch:e.dispatch}).then(function(t){if(Hr(e,t))return!1;e.dispatch("ADD_ITEMS",{items:t,index:Xr(e.ref.list,o,n),interactionMethod:ee})}),e.dispatch("DID_DROP",{position:n}),e.dispatch("DID_END_DRAG",{position:n})},o.ondragstart=function(t){e.dispatch("DID_START_DRAG",{position:t})},o.ondrag=Vr(function(t){e.dispatch("DID_DRAG",{position:t})}),o.ondragend=function(t){e.dispatch("DID_END_DRAG",{position:t})},e.ref.hopper=o,e.ref.drip=e.appendChildView(e.createChildView(kn))}else!r&&e.ref.hopper&&(e.ref.hopper.destroy(),e.ref.hopper=null,e.removeChildView(e.ref.drip))},zr=function(e,t){var n=e.query("GET_ALLOW_BROWSE"),r=e.query("GET_DISABLED"),o=n&&!r;o&&!e.ref.browser?e.ref.browser=e.appendChildView(e.createChildView(Bn,Object.assign({},t,{onload:function(t){Oe("ADD_ITEMS",t,{dispatch:e.dispatch}).then(function(t){if(Hr(e,t))return!1;e.dispatch("ADD_ITEMS",{items:t,index:-1,interactionMethod:te})})}})),0):!o&&e.ref.browser&&(e.removeChildView(e.ref.browser),e.ref.browser=null)},Qr=function(e){var t=e.query("GET_ALLOW_PASTE"),n=e.query("GET_DISABLED"),r=t&&!n;r&&!e.ref.paster?(e.ref.paster=Pr(),e.ref.paster.onload=function(t){Oe("ADD_ITEMS",t,{dispatch:e.dispatch}).then(function(t){if(Hr(e,t))return!1;e.dispatch("ADD_ITEMS",{items:t,index:-1,interactionMethod:ne})})}):!r&&e.ref.paster&&(e.ref.paster.destroy(),e.ref.paster=null)},Zr=A({DID_SET_ALLOW_BROWSE:function(e){var t=e.root,n=e.props;zr(t,n)},DID_SET_ALLOW_DROP:function(e){var t=e.root;Wr(t)},DID_SET_ALLOW_PASTE:function(e){var t=e.root;Qr(t)},DID_SET_DISABLED:function(e){var t=e.root,n=e.props;Wr(t),Qr(t),zr(t,n),t.query("GET_DISABLED")?t.element.dataset.disabled="disabled":t.element.removeAttribute("data-disabled")}}),$r=S({name:"root",read:function(e){var t=e.root;t.ref.measure&&(t.ref.measureHeight=t.ref.measure.offsetHeight)},create:function(e){var t=e.root,n=e.props,r=t.query("GET_ID");r&&(t.element.id=r);var o=t.query("GET_CLASS_NAME");o&&o.split(" ").filter(function(e){return e.length}).forEach(function(e){t.element.classList.add(e)}),t.ref.label=t.appendChildView(t.createChildView(xn,Object.assign({},n,{translateY:null,caption:t.query("GET_LABEL_IDLE")}))),t.ref.list=t.appendChildView(t.createChildView(Ln,{translateY:null})),t.ref.panel=t.appendChildView(t.createChildView(pn,{name:"panel-root"})),t.ref.assistant=t.appendChildView(t.createChildView(qr,Object.assign({},n))),t.ref.data=t.appendChildView(t.createChildView(Zn,Object.assign({},n))),t.ref.measure=wt("div"),t.ref.measure.style.height="100%",t.element.appendChild(t.ref.measure),t.ref.bounds=null,t.query("GET_STYLES").filter(function(e){return!M(e.value)}).map(function(e){var n=e.name,r=e.value;t.element.dataset[n]=r}),t.ref.widthPrevious=null,t.ref.widthUpdated=Vr(function(){t.ref.updateHistory=[],t.dispatch("DID_RESIZE_ROOT")},250),t.ref.previousAspectRatio=null,t.ref.updateHistory=[];var i=window.matchMedia("(pointer: fine) and (hover: hover)").matches,a="PointerEvent"in window;t.query("GET_ALLOW_REORDER")&&a&&!i&&(t.element.addEventListener("touchmove",xr,{passive:!1}),t.element.addEventListener("gesturestart",xr));var u=t.query("GET_CREDITS");if(2===u.length){var s=document.createElement("a");s.className="filepond--credits",s.setAttribute("aria-hidden","true"),s.href=u[0],s.tabindex=-1,s.target="_blank",s.rel="noopener noreferrer",s.textContent=u[1],t.element.appendChild(s),t.ref.credits=s}},write:function(e){var t=e.root,n=e.props,r=e.actions;if(Zr({root:t,props:n,actions:r}),r.filter(function(e){return/^DID_SET_STYLE_/.test(e.type)}).filter(function(e){return!M(e.data.value)}).map(function(e){var n=e.type,r=e.data,o=Fr(n.substr(8).toLowerCase(),"_");t.element.dataset[o]=r.value,t.invalidateLayout()}),!t.rect.element.hidden){t.rect.element.width!==t.ref.widthPrevious&&(t.ref.widthPrevious=t.rect.element.width,t.ref.widthUpdated());var o=t.ref.bounds;o||(o=t.ref.bounds=kr(t),t.element.removeChild(t.ref.measure),t.ref.measure=null);var i=t.ref,a=i.hopper,u=i.label,s=i.list,l=i.panel;a&&a.updateHopperState();var c=t.query("GET_PANEL_ASPECT_RATIO"),f=t.query("GET_ALLOW_MULTIPLE"),d=t.query("GET_TOTAL_ITEMS"),p=d===(f?t.query("GET_MAX_FILES")||1e6:1),E=r.find(function(e){return"DID_ADD_ITEM"===e.type});if(p&&E){var _=E.data.interactionMethod;u.opacity=0,f?u.translateY=-40:_===J?u.translateX=40:u.translateY=_===te?40:30}else p||(u.opacity=1,u.translateX=0,u.translateY=0);var T=Yr(t),I=jr(t),v=u.rect.element.height,m=!f||p?0:v,h=p?s.rect.element.marginTop:0,g=0===d?0:s.rect.element.marginBottom,R=m+h+I.visual+g,O=m+h+I.bounds+g;if(s.translateY=Math.max(0,m-s.rect.element.marginTop)-T.top,c){var D=t.rect.element.width,y=D*c;c!==t.ref.previousAspectRatio&&(t.ref.previousAspectRatio=c,t.ref.updateHistory=[]);var S=t.ref.updateHistory;if(S.push(D),S.length>4)for(var A=S.length,L=A-10,P=0,b=A;b>=L;b--)if(S[b]===S[b-2]&&P++,P>=2)return;l.scalable=!1,l.height=y;var w=y-m-(g-T.bottom)-(p?h:0);I.visual>w?s.overflow=w:s.overflow=null,t.height=y}else if(o.fixedHeight){l.scalable=!1;var C=o.fixedHeight-m-(g-T.bottom)-(p?h:0);I.visual>C?s.overflow=C:s.overflow=null}else if(o.cappedHeight){var N=R>=o.cappedHeight,G=Math.min(o.cappedHeight,R);l.scalable=!0,l.height=N?G:G-T.top-T.bottom;var U=G-m-(g-T.bottom)-(p?h:0);R>o.cappedHeight&&I.visual>U?s.overflow=U:s.overflow=null,t.height=Math.min(o.cappedHeight,O-T.top-T.bottom)}else{var B=d>0?T.top+T.bottom:0;l.scalable=!0,l.height=Math.max(v,R-B),t.height=Math.max(v,O-B)}t.ref.credits&&l.heightCurrent&&(t.ref.credits.style.transform="translateY("+l.heightCurrent+"px)")}},destroy:function(e){var t=e.root;t.ref.paster&&t.ref.paster.destroy(),t.ref.hopper&&t.ref.hopper.destroy(),t.element.removeEventListener("touchmove",xr),t.element.removeEventListener("gesturestart",xr)},mixins:{styles:["height"]}}),Kr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=null,o=Se(),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=Object.assign({},e),o=[],i=[],a=function(e,t,n){!n||document.hidden?(c[e]&&c[e](t),o.push({type:e,data:t})):i.push({type:e,data:t})},u=function(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return l[e]?(t=l)[e].apply(t,r):null},s={getState:function(){return Object.assign({},r)},processActionQueue:function(){var e=[].concat(o);return o.length=0,e},processDispatchQueue:function(){var e=[].concat(i);i.length=0,e.forEach(function(e){var t=e.type,n=e.data;a(t,n)})},dispatch:a,query:u},l={};t.forEach(function(e){l=Object.assign({},e(r),{},l)});var c={};return n.forEach(function(e){c=Object.assign({},e(a,u,r),{},c)}),s}({items:[],listUpdateTimeout:null,itemUpdateTimeout:null,processingQueue:[],options:Q(o)},[Ve,K(o)],[bt,$(o)]);i.dispatch("SET_OPTIONS",{options:e});var a=function(){document.hidden||i.dispatch("KICK")};document.addEventListener("visibilitychange",a);var u=null,s=!1,l=!1,c=null,f=null,d=function(){s||(s=!0),clearTimeout(u),u=setTimeout(function(){s=!1,c=null,f=null,l&&(l=!1,i.dispatch("DID_STOP_RESIZE"))},500)};window.addEventListener("resize",d);var p=$r(i,{id:oe()}),E=!1,T=!1,I={_read:function(){s&&(f=window.innerWidth,c||(c=f),l||f===c||(i.dispatch("DID_START_RESIZE"),l=!0)),T&&E&&(E=null===p.element.offsetParent),E||(p._read(),T=p.rect.element.hidden)},_write:function(e){var t,n=i.processActionQueue().filter(function(e){return!/^SET_/.test(e.type)});E&&!n.length||(g(n),E=p._write(e,n,l),(t=i.query("GET_ITEMS")).forEach(function(e,n){e.released&&de(t,n)}),E&&i.processDispatchQueue())}},v=function(e){return function(t){var n={type:e};if(!t)return n;if(t.hasOwnProperty("error")&&(n.error=t.error?Object.assign({},t.error):null),t.status&&(n.status=Object.assign({},t.status)),t.file&&(n.output=t.file),t.source)n.file=t.source;else if(t.item||t.id){var r=t.item?t.item:i.query("GET_ITEM",t.id);n.file=r?Te(r):null}return t.items&&(n.items=t.items.map(Te)),/progress/.test(e)&&(n.progress=t.progress),t.hasOwnProperty("origin")&&t.hasOwnProperty("target")&&(n.origin=t.origin,n.target=t.target),n}},m={DID_DESTROY:v("destroy"),DID_INIT:v("init"),DID_THROW_MAX_FILES:v("warning"),DID_INIT_ITEM:v("initfile"),DID_START_ITEM_LOAD:v("addfilestart"),DID_UPDATE_ITEM_LOAD_PROGRESS:v("addfileprogress"),DID_LOAD_ITEM:v("addfile"),DID_THROW_ITEM_INVALID:[v("error"),v("addfile")],DID_THROW_ITEM_LOAD_ERROR:[v("error"),v("addfile")],DID_THROW_ITEM_REMOVE_ERROR:[v("error"),v("removefile")],DID_PREPARE_OUTPUT:v("preparefile"),DID_START_ITEM_PROCESSING:v("processfilestart"),DID_UPDATE_ITEM_PROCESS_PROGRESS:v("processfileprogress"),DID_ABORT_ITEM_PROCESSING:v("processfileabort"),DID_COMPLETE_ITEM_PROCESSING:v("processfile"),DID_COMPLETE_ITEM_PROCESSING_ALL:v("processfiles"),DID_REVERT_ITEM_PROCESSING:v("processfilerevert"),DID_THROW_ITEM_PROCESSING_ERROR:[v("error"),v("processfile")],DID_REMOVE_ITEM:v("removefile"),DID_UPDATE_ITEMS:v("updatefiles"),DID_ACTIVATE_ITEM:v("activatefile"),DID_REORDER_ITEMS:v("reorderfiles")},h=function(e){var t=Object.assign({pond:A},e);delete t.type,p.element.dispatchEvent(new CustomEvent("FilePond:"+e.type,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));var n=[];e.hasOwnProperty("error")&&n.push(e.error),e.hasOwnProperty("file")&&n.push(e.file);var r=["type","error","file"];Object.keys(e).filter(function(e){return!r.includes(e)}).forEach(function(t){return n.push(e[t])}),A.fire.apply(A,[e.type].concat(n));var o=i.query("GET_ON"+e.type.toUpperCase());o&&o.apply(void 0,n)},g=function(e){e.length&&e.filter(function(e){return m[e.type]}).forEach(function(e){var t=m[e.type];(Array.isArray(t)?t:[t]).forEach(function(t){"DID_INIT_ITEM"===e.type?h(t(e.data)):setTimeout(function(){h(t(e.data))},0)})})},R=function(e){return new Promise(function(t,n){i.dispatch("REQUEST_ITEM_PREPARE",{query:e,success:function(e){t(e)},failure:function(e){n(e)}})})},O=function(e,t){var n;return"object"!=typeof e||(n=e).file&&n.id||t||(t=e,e=void 0),i.dispatch("REMOVE_ITEM",Object.assign({},t,{query:e})),null===i.query("GET_ACTIVE_ITEM",e)},D=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new Promise(function(e,n){var r=[],o={};if(b(t[0]))r.push.apply(r,t[0]),Object.assign(o,t[1]||{});else{var a=t[t.length-1];"object"!=typeof a||a instanceof Blob||Object.assign(o,t.pop()),r.push.apply(r,t)}i.dispatch("ADD_ITEMS",{items:r,index:o.index,interactionMethod:J,success:e,failure:n})})},y=function(){return i.query("GET_ACTIVE_ITEMS")},S=function(e){return new Promise(function(t,n){i.dispatch("REQUEST_ITEM_PROCESSING",{query:e,success:function(e){t(e)},failure:function(e){n(e)}})})},A=Object.assign({},pe(),{},I,{},function(e,n){var r={};return t(n,function(t){r[t]={get:function(){return e.getState().options[t]},set:function(n){e.dispatch("SET_"+Z(t,"_").toUpperCase(),{value:n})}}}),r}(i,o),{setOptions:function(e){return i.dispatch("SET_OPTIONS",{options:e})},addFile:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){D([{source:e,options:t}],{index:t.index}).then(function(e){return n(e&&e[0])}).catch(r)})},addFiles:D,getFile:function(e){return i.query("GET_ACTIVE_ITEM",e)},processFile:S,prepareFile:R,removeFile:O,moveFile:function(e,t){return i.dispatch("MOVE_ITEM",{query:e,index:t})},getFiles:y,processFiles:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Array.isArray(t[0])?t[0]:t;if(!r.length){var o=y().filter(function(e){return!(e.status===Ie.IDLE&&e.origin===ve.LOCAL)&&e.status!==Ie.PROCESSING&&e.status!==Ie.PROCESSING_COMPLETE&&e.status!==Ie.PROCESSING_REVERT_ERROR});return Promise.all(o.map(S))}return Promise.all(r.map(S))},removeFiles:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,o=Array.isArray(t[0])?t[0]:t;"object"==typeof o[o.length-1]?r=o.pop():Array.isArray(t[0])&&(r=t[1]);var i=y();return o.length?o.map(function(e){return _(e)?i[e]?i[e].id:null:e}).filter(function(e){return e}).map(function(e){return O(e,r)}):Promise.all(i.map(function(e){return O(e,r)}))},prepareFiles:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Array.isArray(t[0])?t[0]:t,o=r.length?r:y();return Promise.all(o.map(R))},sort:function(e){return i.dispatch("SORT",{compare:e})},browse:function(){var e=p.element.querySelector("input[type=file]");e&&e.click()},destroy:function(){A.fire("destroy",p.element),i.dispatch("ABORT_ALL"),p._destroy(),window.removeEventListener("resize",d),document.removeEventListener("visibilitychange",a),i.dispatch("DID_DESTROY")},insertBefore:function(e){return L(p.element,e)},insertAfter:function(e){return P(p.element,e)},appendTo:function(e){return e.appendChild(p.element)},replaceElement:function(e){L(p.element,e),e.parentNode.removeChild(e),r=e},restoreElement:function(){r&&(P(r,p.element),p.element.parentNode.removeChild(p.element),r=null)},isAttachedTo:function(e){return p.element===e||r===e},element:{get:function(){return p.element}},status:{get:function(){return i.query("GET_STATUS")}}});return i.dispatch("DID_INIT"),n(A)},Jr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={};return t(Se(),function(e,t){n[e]=t[0]}),Kr(Object.assign({},n,{},e))},eo=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[];t(e.attributes,function(t){o.push(e.attributes[t])});var i=o.filter(function(e){return e.name}).reduce(function(t,n){var o,i=r(e,n.name);return t[(o=n.name,Fr(o.replace(/^data-/,"")))]=i===n.name||i,t},{});return function e(n,r){t(r,function(r,o){t(n,function(e,t){var i=new RegExp(r);if(i.test(e)&&(delete n[e],!1!==o))if(U(o))n[o]=t;else{var a,u=o.group;H(o)&&!n[u]&&(n[u]={}),n[u][(a=e.replace(i,""),a.charAt(0).toLowerCase()+a.slice(1))]=t}}),o.mapping&&e(n[o.group],o.mapping)})}(i,n),i},to=function(){return(arguments.length<=0?void 0:arguments[0])instanceof HTMLElement?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={"^class$":"className","^multiple$":"allowMultiple","^capture$":"captureMethod","^webkitdirectory$":"allowDirectoriesOnly","^server":{group:"server",mapping:{"^process":{group:"process"},"^revert":{group:"revert"},"^fetch":{group:"fetch"},"^restore":{group:"restore"},"^load":{group:"load"}}},"^type$":!1,"^files$":!1};De("SET_ATTRIBUTE_TO_OPTION_MAP",n);var r=Object.assign({},t),o=eo("FIELDSET"===e.nodeName?e.querySelector("input[type=file]"):e,n);Object.keys(o).forEach(function(e){H(o[e])?(H(r[e])||(r[e]={}),Object.assign(r[e],o[e])):r[e]=o[e]}),r.files=(t.files||[]).concat(Array.from(e.querySelectorAll("input:not([type=file])")).map(function(e){return{source:e.value,options:{type:e.dataset.type}}}));var i=Jr(r);return e.files&&Array.from(e.files).forEach(function(e){i.addFile(e)}),i.replaceElement(e),i}.apply(void 0,arguments):Jr.apply(void 0,arguments)},no=["fire","_read","_write"],ro=function(e){var t={};return Ee(e,t,no),t},oo=function(e,t){return e.replace(/(?:{([a-zA-Z]+)})/g,function(e,n){return t[n]})},io=function(e){var t=new Blob(["(",e.toString(),")()"],{type:"application/javascript"}),n=URL.createObjectURL(t),r=new Worker(n);return{transfer:function(e,t){},post:function(e,t,n){var o=oe();r.onmessage=function(e){e.data.id===o&&t(e.data.message)},r.postMessage({id:o,message:e},n)},terminate:function(){r.terminate(),URL.revokeObjectURL(n)}}},ao=function(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=function(e){n(e)},r.src=e})},uo=function(e,t){var n=e.slice(0,e.size,e.type);return n.lastModifiedDate=e.lastModifiedDate,n.name=t,n},so=function(e){return uo(e,e.name)},lo=[],co=function(e){if(!lo.includes(e)){lo.push(e);var n,r=e({addFilter:ye,utils:{Type:ge,forin:t,isString:U,isFile:ht,toNaturalFileSize:qt,replaceInString:oo,getExtensionFromFilename:ke,getFilenameWithoutExtension:mt,guesstimateMimeType:er,getFileFromBlob:We,getFilenameFromURL:je,createRoute:A,createWorker:io,createView:S,createItemAPI:Te,loadImage:ao,copyFile:so,renameFile:uo,createBlob:ze,applyFilterChain:Oe,text:Ct,getNumericAspectRatioFromString:Pe},views:{fileActionButton:Bt}});n=r.options,Object.assign(Ae,n)}},fo=(Zt=c()&&!("[object OperaMini]"===Object.prototype.toString.call(window.operamini))&&"visibilityState"in document&&"Promise"in window&&"slice"in Blob.prototype&&"URL"in window&&"createObjectURL"in window.URL&&"performance"in window&&("supports"in(window.CSS||{})||/MSIE|Trident/.test(window.navigator.userAgent)),function(){return Zt}),po={apps:[]},Eo=function(){};if(e.Status={},e.FileStatus={},e.FileOrigin={},e.OptionTypes={},e.create=Eo,e.destroy=Eo,e.parse=Eo,e.find=Eo,e.registerPlugin=Eo,e.getOptions=Eo,e.setOptions=Eo,fo()){!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:60,r="__framePainter";if(window[r])return window[r].readers.push(e),void window[r].writers.push(t);window[r]={readers:[e],writers:[t]};var o=window[r],i=1e3/n,a=null,u=null,s=null,l=null,c=function(){document.hidden?(s=function(){return window.setTimeout(function(){return f(performance.now())},i)},l=function(){return window.clearTimeout(u)}):(s=function(){return window.requestAnimationFrame(f)},l=function(){return window.cancelAnimationFrame(u)})};document.addEventListener("visibilitychange",function(){l&&l(),c(),f(performance.now())});var f=function e(t){u=s(e),a||(a=t);var n=t-a;n<=i||(a=t-n%i,o.readers.forEach(function(e){return e()}),o.writers.forEach(function(e){return e(t)}))};c(),f(performance.now())}(function(){po.apps.forEach(function(e){return e._read()})},function(e){po.apps.forEach(function(t){return t._write(e)})});var _o=function t(){document.dispatchEvent(new CustomEvent("FilePond:loaded",{detail:{supported:fo,create:e.create,destroy:e.destroy,parse:e.parse,find:e.find,registerPlugin:e.registerPlugin,setOptions:e.setOptions}})),document.removeEventListener("DOMContentLoaded",t)};"loading"!==document.readyState?setTimeout(function(){return _o()},0):document.addEventListener("DOMContentLoaded",_o);var To=function(){return t(Se(),function(t,n){e.OptionTypes[t]=n[1]})};e.Status=Object.assign({},Me),e.FileOrigin=Object.assign({},ve),e.FileStatus=Object.assign({},Ie),e.OptionTypes={},To(),e.create=function(){var t=to.apply(void 0,arguments);return t.on("destroy",e.destroy),po.apps.push(t),ro(t)},e.destroy=function(e){var t=po.apps.findIndex(function(t){return t.isAttachedTo(e)});return t>=0&&(po.apps.splice(t,1)[0].restoreElement(),!0)},e.parse=function(t){return Array.from(t.querySelectorAll(".filepond")).filter(function(e){return!po.apps.find(function(t){return t.isAttachedTo(e)})}).map(function(t){return e.create(t)})},e.find=function(e){var t=po.apps.find(function(t){return t.isAttachedTo(e)});return t?ro(t):null},e.registerPlugin=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(co),To()},e.getOptions=function(){var e={};return t(Se(),function(t,n){e[t]=n[0]}),e},e.setOptions=function(n){return H(n)&&(po.apps.forEach(function(e){e.setOptions(n)}),function(e){t(e,function(e,t){Ae[e]&&(Ae[e][0]=z(t,Ae[e][0],Ae[e][1]))})}(n)),e.getOptions()}}e.supported=fo,Object.defineProperty(e,"__esModule",{value:!0})});


/*

FILEPOND.jquery.js

*/

(function($, FilePond){
  'use strict';

  // No jQuery No Go
  if (!$ || !FilePond) {
      return;
  }
  
  // Test if FilePond is supported
  if (!FilePond.supported()) {
      // add stub
      $.fn.filepond = function() {};
      return;
  }

  // Helpers
  function argsToArray(args) {
      return Array.prototype.slice.call(args);
  }

  function isFactory(args) {
      return !args.length || typeof args[0] === 'object';
  }

function isGetter(obj, key) {
  var descriptor = Object.getOwnPropertyDescriptor(obj, key);
  return descriptor ? typeof descriptor.get !== 'undefined' : false;
}

function isSetter(obj, key) {
  var descriptor = Object.getOwnPropertyDescriptor(obj, key);
  return descriptor ? typeof descriptor.set !== 'undefined' : false;
}

function isMethod(obj, key) {
  return typeof obj[key] === 'function';
}

  // Setup plugin
  $.fn.filepond = function() {

      // get arguments as array
      var args = argsToArray(arguments);

      // method results array
      var results = [];

      // Execute for every item in the list
      var items = this.each(function() {

          // test if is create call
          if (isFactory(args)) {
              FilePond.create(this, args[0])
              return;
          }
          
          // get a reference to the pond instance based on the element
          var pond = FilePond.find(this);

          // if no pond found, exit here
          if (!pond) {
              return;
          }

          // get property name or method name
          var key = args[0];

          // get params to pass
          var params = args.concat().slice(1);

          // run method
          if (isMethod(pond, key)) {
              results.push(pond[key].apply(pond, params));
              return;
          }

          // set setter
          if (isSetter(pond, key) && params.length) {
              pond[key] = params[0];
              return;
          }

          // get getter
          if (isGetter(pond, key)) {
              results.push(pond[key]);
              return;
          }

          console.warn('$().filepond("' + key + '") is an unknown property or method.');
      });

      // returns a jQuery object if no results returned
      return results.length ? this.length === 1 ? results[0] : results : items;
  };

  // Static API
  Object.keys(FilePond).forEach(function(key) {
      $.fn.filepond[key] = FilePond[key];
  });

  // Redirect setDefaults to setOptions
  $.fn.filepond.setDefaults = FilePond.setOptions;

}(jQuery, FilePond));



/*!
 * FilePondPluginFileEncode 2.1.10
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : ((global = global || self),
      (global.FilePondPluginFileEncode = factory()));
})(this, function() {
  'use strict';

  var DataURIWorker = function DataURIWorker() {
    // route messages
    self.onmessage = function(e) {
      convert(e.data.message, function(response) {
        self.postMessage({ id: e.data.id, message: response });
      });
    };

    // convert file to data uri
    var convert = function convert(options, cb) {
      var file = options.file;

      var reader = new FileReader();
      reader.onloadend = function() {
        cb(reader.result.replace('data:', '').replace(/^.+,/, ''));
      };
      reader.readAsDataURL(file);
    };
  };

  var plugin = function plugin(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;

    // get quick reference to Type utils
    var Type = utils.Type,
      createWorker = utils.createWorker,
      createRoute = utils.createRoute,
      isFile = utils.isFile;

    var encode = function encode(_ref2) {
      var name = _ref2.name,
        file = _ref2.file;
      return new Promise(function(resolve) {
        var worker = createWorker(DataURIWorker);
        worker.post({ file: file }, function(data) {
          resolve({ name: name, data: data });
          worker.terminate();
        });
      });
    };

    // holds base64 strings till can be moved to item
    var base64Cache = [];
    addFilter('DID_CREATE_ITEM', function(item, _ref3) {
      var query = _ref3.query;

      if (!query('GET_ALLOW_FILE_ENCODE')) return;

      item.extend('getFileEncodeBase64String', function() {
        return base64Cache[item.id] && base64Cache[item.id].data;
      });
      item.extend('getFileEncodeDataURL', function() {
        return 'data:'
          .concat(item.fileType, ';base64,')
          .concat(base64Cache[item.id].data);
      });
    });

    addFilter('SHOULD_PREPARE_OUTPUT', function(shouldPrepareOutput, _ref4) {
      var query = _ref4.query;
      return new Promise(function(resolve) {
        resolve(query('GET_ALLOW_FILE_ENCODE'));
      });
    });

    addFilter('COMPLETE_PREPARE_OUTPUT', function(file, _ref5) {
      var item = _ref5.item,
        query = _ref5.query;
      return new Promise(function(resolve) {
        // if it's not a file or a list of files, continue
        if (
          !query('GET_ALLOW_FILE_ENCODE') ||
          (!isFile(file) && !Array.isArray(file))
        ) {
          return resolve(file);
        }

        // store metadata settings for this cache
        base64Cache[item.id] = {
          metadata: item.getMetadata(),
          data: null
        };

        // wait for all file items to be encoded
        Promise.all(
          (file instanceof Blob ? [{ name: null, file: file }] : file).map(
            encode
          )
        ).then(function(dataItems) {
          base64Cache[item.id].data =
            file instanceof Blob ? dataItems[0].data : dataItems;
          resolve(file);
        });
      });
    });

    // called for each view that is created right after the 'create' method
    addFilter('CREATE_VIEW', function(viewAPI) {
      // get reference to created view
      var is = viewAPI.is,
        view = viewAPI.view,
        query = viewAPI.query;

      // only hook up to item view
      if (!is('file-wrapper') || !query('GET_ALLOW_FILE_ENCODE')) {
        return;
      }

      view.registerWriter(
        createRoute({
          DID_PREPARE_OUTPUT: function DID_PREPARE_OUTPUT(_ref6) {
            var root = _ref6.root,
              action = _ref6.action;

            // only do this if is not uploading async
            if (query('IS_ASYNC')) {
              return;
            }

            var item = query('GET_ITEM', action.id);
            if (!item) return;

            // extract base64 string
            var cache = base64Cache[item.id];
            var metadata = cache.metadata;
            var data = cache.data;

            // create JSON string from encoded data
            var value = JSON.stringify({
              id: item.id,
              name: item.file.name,
              type: item.file.type,
              size: item.file.size,
              metadata: metadata,
              data: data
            });

            // for filepond < 4.13.0
            if (root.ref.data) {
              root.ref.data.value = value;
            }
            // newer versions
            else {
              root.dispatch('DID_DEFINE_VALUE', {
                id: item.id,
                value: value
              });
            }
          },
          DID_REMOVE_ITEM: function DID_REMOVE_ITEM(_ref7) {
            var action = _ref7.action;
            var item = query('GET_ITEM', action.id);
            if (!item) return;
            delete base64Cache[item.id];
          }
        })
      );
    });

    return {
      options: {
        // Enable or disable file encoding
        allowFileEncode: [true, Type.BOOLEAN]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});




/*!
 * FilePondPluginFileValidateSize 2.2.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */
/*
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
      ? (module.exports = factory())
      : typeof define === 'function' && define.amd
      ? define(factory)
      : ((global = global || self), (global.FilePondPluginFileValidateSize = factory()));
})(this, function() {
  'use strict';

  var plugin = function plugin(_ref) {
      var addFilter = _ref.addFilter,
          utils = _ref.utils;
      // get quick reference to Type utils
      var Type = utils.Type,
          replaceInString = utils.replaceInString,
          toNaturalFileSize = utils.toNaturalFileSize;

      // filtering if an item is allowed in hopper
      addFilter('ALLOW_HOPPER_ITEM', function(file, _ref2) {
          var query = _ref2.query;
          if (!query('GET_ALLOW_FILE_SIZE_VALIDATION')) {
              return true;
          }

          var sizeMax = query('GET_MAX_FILE_SIZE');
          if (sizeMax !== null && file.size >= sizeMax) {
              return false;
          }

          var sizeMin = query('GET_MIN_FILE_SIZE');
          if (sizeMin !== null && file.size <= sizeMin) {
              return false;
          }

          return true;
      });

      // called for each file that is loaded
      // right before it is set to the item state
      // should return a promise
      addFilter('LOAD_FILE', function(file, _ref3) {
          var query = _ref3.query;
          return new Promise(function(resolve, reject) {
              // if not allowed, all fine, exit
              if (!query('GET_ALLOW_FILE_SIZE_VALIDATION')) {
                  return resolve(file);
              }

              // check if file should be filtered
              var fileFilter = query('GET_FILE_VALIDATE_SIZE_FILTER');
              if (fileFilter && !fileFilter(file)) {
                  return resolve(file);
              }

              // reject or resolve based on file size
              var sizeMax = query('GET_MAX_FILE_SIZE');
              if (sizeMax !== null && file.size >= sizeMax) {
                  reject({
                      status: {
                          main: query('GET_LABEL_MAX_FILE_SIZE_EXCEEDED'),
                          sub: replaceInString(query('GET_LABEL_MAX_FILE_SIZE'), {
                              filesize: toNaturalFileSize(
                                  sizeMax,
                                  '.',
                                  query('GET_FILE_SIZE_BASE')
                              ),
                          }),
                      },
                  });

                  return;
              }

              // reject or resolve based on file size
              var sizeMin = query('GET_MIN_FILE_SIZE');
              if (sizeMin !== null && file.size <= sizeMin) {
                  reject({
                      status: {
                          main: query('GET_LABEL_MIN_FILE_SIZE_EXCEEDED'),
                          sub: replaceInString(query('GET_LABEL_MIN_FILE_SIZE'), {
                              filesize: toNaturalFileSize(
                                  sizeMin,
                                  '.',
                                  query('GET_FILE_SIZE_BASE')
                              ),
                          }),
                      },
                  });

                  return;
              }

              // returns the current option value
              var totalSizeMax = query('GET_MAX_TOTAL_FILE_SIZE');
              if (totalSizeMax !== null) {
                  // get the current total file size
                  var currentTotalSize = query('GET_ACTIVE_ITEMS').reduce(function(total, item) {
                      return total + item.fileSize;
                  }, 0);

                  // get the size of the new file
                  if (currentTotalSize > totalSizeMax) {
                      reject({
                          status: {
                              main: query('GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED'),
                              sub: replaceInString(query('GET_LABEL_MAX_TOTAL_FILE_SIZE'), {
                                  filesize: toNaturalFileSize(totalSizeMax),
                              }),
                          },
                      });

                      return;
                  }
              }

              // file is fine, let's pass it back
              resolve(file);
          });
      });

      return {
          options: {
              // Enable or disable file type validation
              allowFileSizeValidation: [true, Type.BOOLEAN],

              // Max individual file size in bytes
              maxFileSize: [null, Type.INT],

              // Min individual file size in bytes
              minFileSize: [null, Type.INT],

              // Max total file size in bytes
              maxTotalFileSize: [null, Type.INT],

              // Filter the files that need to be validated for size
              fileValidateSizeFilter: [null, Type.FUNCTION],

              // error labels
              labelMinFileSizeExceeded: ['File is too small', Type.STRING],
              labelMinFileSize: ['Minimum file size is {filesize}', Type.STRING],

              labelMaxFileSizeExceeded: ['File is too large', Type.STRING],
              labelMaxFileSize: ['Maximum file size is {filesize}', Type.STRING],

              labelMaxTotalFileSizeExceeded: ['Maximum total size exceeded', Type.STRING],
              labelMaxTotalFileSize: ['Maximum total file size is {filesize}', Type.STRING],
          },
      };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
      document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: plugin }));
  }

  return plugin;
});
*/



/*!
 * FilePondPluginFileValidateType 1.2.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : ((global = global || self),
      (global.FilePondPluginFileValidateType = factory()));
})(this, function() {
  'use strict';

  var plugin = function plugin(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;
    // get quick reference to Type utils
    var Type = utils.Type,
      isString = utils.isString,
      replaceInString = utils.replaceInString,
      guesstimateMimeType = utils.guesstimateMimeType,
      getExtensionFromFilename = utils.getExtensionFromFilename,
      getFilenameFromURL = utils.getFilenameFromURL;

    var mimeTypeMatchesWildCard = function mimeTypeMatchesWildCard(
      mimeType,
      wildcard
    ) {
      var mimeTypeGroup = (/^[^/]+/.exec(mimeType) || []).pop(); // image/png -> image
      var wildcardGroup = wildcard.slice(0, -2); // image/* -> image
      return mimeTypeGroup === wildcardGroup;
    };

    var isValidMimeType = function isValidMimeType(
      acceptedTypes,
      userInputType
    ) {
      return acceptedTypes.some(function(acceptedType) {
        // accepted is wildcard mime type
        if (/\*$/.test(acceptedType)) {
          return mimeTypeMatchesWildCard(userInputType, acceptedType);
        }

        // is normal mime type
        return acceptedType === userInputType;
      });
    };

    var getItemType = function getItemType(item) {
      // if the item is a url we guess the mime type by the extension
      var type = '';
      if (isString(item)) {
        var filename = getFilenameFromURL(item);
        var extension = getExtensionFromFilename(filename);
        if (extension) {
          type = guesstimateMimeType(extension);
        }
      } else {
        type = item.type;
      }

      return type;
    };

    var validateFile = function validateFile(
      item,
      acceptedFileTypes,
      typeDetector
    ) {
      // no types defined, everything is allowed \o/
      if (acceptedFileTypes.length === 0) {
        return true;
      }

      // gets the item type
      var type = getItemType(item);

      // no type detector, test now
      if (!typeDetector) {
        return isValidMimeType(acceptedFileTypes, type);
      }

      // use type detector
      return new Promise(function(resolve, reject) {
        typeDetector(item, type)
          .then(function(detectedType) {
            if (isValidMimeType(acceptedFileTypes, detectedType)) {
              resolve();
            } else {
              reject();
            }
          })
          .catch(reject);
      });
    };

    var applyMimeTypeMap = function applyMimeTypeMap(map) {
      return function(acceptedFileType) {
        return map[acceptedFileType] === null
          ? false
          : map[acceptedFileType] || acceptedFileType;
      };
    };

    // setup attribute mapping for accept
    addFilter('SET_ATTRIBUTE_TO_OPTION_MAP', function(map) {
      return Object.assign(map, {
        accept: 'acceptedFileTypes'
      });
    });

    // filtering if an item is allowed in hopper
    addFilter('ALLOW_HOPPER_ITEM', function(file, _ref2) {
      var query = _ref2.query;
      // if we are not doing file type validation exit
      if (!query('GET_ALLOW_FILE_TYPE_VALIDATION')) {
        return true;
      }

      // we validate the file against the accepted file types
      return validateFile(file, query('GET_ACCEPTED_FILE_TYPES'));
    });

    // called for each file that is loaded
    // right before it is set to the item state
    // should return a promise
    addFilter('LOAD_FILE', function(file, _ref3) {
      var query = _ref3.query;
      return new Promise(function(resolve, reject) {
        if (!query('GET_ALLOW_FILE_TYPE_VALIDATION')) {
          resolve(file);
          return;
        }

        var acceptedFileTypes = query('GET_ACCEPTED_FILE_TYPES');

        // custom type detector method
        var typeDetector = query('GET_FILE_VALIDATE_TYPE_DETECT_TYPE');

        // if invalid, exit here
        var validationResult = validateFile(
          file,
          acceptedFileTypes,
          typeDetector
        );

        var handleRejection = function handleRejection() {
          var acceptedFileTypesMapped = acceptedFileTypes
            .map(
              applyMimeTypeMap(
                query('GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP')
              )
            )
            .filter(function(label) {
              return label !== false;
            });

          reject({
            status: {
              main: query('GET_LABEL_FILE_TYPE_NOT_ALLOWED'),
              sub: replaceInString(
                query('GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES'),
                {
                  allTypes: acceptedFileTypesMapped.join(', '),
                  allButLastType: acceptedFileTypesMapped
                    .slice(0, -1)
                    .join(', '),
                  lastType:
                    acceptedFileTypesMapped[acceptedFileTypesMapped.length - 1]
                }
              )
            }
          });
        };

        // has returned new filename immidiately
        if (typeof validationResult === 'boolean') {
          if (!validationResult) {
            return handleRejection();
          }
          return resolve(file);
        }

        // is promise
        validationResult
          .then(function() {
            resolve(file);
          })
          .catch(handleRejection);
      });
    });

    // expose plugin
    return {
      // default options
      options: {
        // Enable or disable file type validation
        allowFileTypeValidation: [true, Type.BOOLEAN],

        // What file types to accept
        acceptedFileTypes: [[], Type.ARRAY],
        // - must be comma separated
        // - mime types: image/png, image/jpeg, image/gif
        // - extensions: .png, .jpg, .jpeg ( not enabled yet )
        // - wildcards: image/*

        // label to show when a type is not allowed
        labelFileTypeNotAllowed: ['File is of invalid type', Type.STRING],

        // nicer label
        fileValidateTypeLabelExpectedTypes: [
          'Expects {allButLastType} or {lastType}',
          Type.STRING
        ],

        // map mime types to extensions
        fileValidateTypeLabelExpectedTypesMap: [{}, Type.OBJECT],

        // Custom function to detect type of file
        fileValidateTypeDetectType: [null, Type.FUNCTION]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});



/*!
 * FilePondPluginImageValidateSize 1.2.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */
/*
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : ((global = global || self),
      (global.FilePondPluginImageValidateSize = factory()));
})(this, function() {
  'use strict';

  // test if file is of type image
  var isImage = function isImage(file) {
    return /^image/.test(file.type);
  };

  var getImageSize = function getImageSize(file) {
    return new Promise(function(resolve, reject) {
      var image = document.createElement('img');
      image.src = URL.createObjectURL(file);
      image.onerror = function(err) {
        clearInterval(intervalId);
        reject(err);
      };
      var intervalId = setInterval(function() {
        if (image.naturalWidth && image.naturalHeight) {
          clearInterval(intervalId);
          URL.revokeObjectURL(image.src);
          resolve({
            width: image.naturalWidth,
            height: image.naturalHeight
          });
        }
      }, 1);
    });
  };

  var plugin = function plugin(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;
    // get quick reference to Type utils
    var Type = utils.Type,
      replaceInString = utils.replaceInString,
      isFile = utils.isFile;

    // required file size
    var validateFile = function validateFile(file, bounds, measure) {
      return new Promise(function(resolve, reject) {
        var onReceiveSize = function onReceiveSize(_ref2) {
          var width = _ref2.width,
            height = _ref2.height;
          var minWidth = bounds.minWidth,
            minHeight = bounds.minHeight,
            maxWidth = bounds.maxWidth,
            maxHeight = bounds.maxHeight,
            minResolution = bounds.minResolution,
            maxResolution = bounds.maxResolution;

          var resolution = width * height;

          // validation result
          if (width < minWidth || height < minHeight) {
            reject('TOO_SMALL');
          } else if (width > maxWidth || height > maxHeight) {
            reject('TOO_BIG');
          } else if (minResolution !== null && resolution < minResolution) {
            reject('TOO_LOW_RES');
          } else if (maxResolution !== null && resolution > maxResolution) {
            reject('TOO_HIGH_RES');
          }

          // all is well
          resolve();
        };

        getImageSize(file)
          .then(onReceiveSize)
          .catch(function() {
            // no custom measure method supplied, exit here
            if (!measure) {
              reject();
              return;
            }

            // try fallback if defined by user, else reject
            measure(file, bounds)
              .then(onReceiveSize)
              .catch(function() {
                return reject();
              });
          });
      });
    };

    // called for each file that is loaded
    // right before it is set to the item state
    // should return a promise
    addFilter('LOAD_FILE', function(file, _ref3) {
      var query = _ref3.query;
      return new Promise(function(resolve, reject) {
        if (
          !isFile(file) ||
          !isImage(file) ||
          !query('GET_ALLOW_IMAGE_VALIDATE_SIZE')
        ) {
          resolve(file);
          return;
        }

        // get required dimensions
        var bounds = {
          minWidth: query('GET_IMAGE_VALIDATE_SIZE_MIN_WIDTH'),
          minHeight: query('GET_IMAGE_VALIDATE_SIZE_MIN_HEIGHT'),
          maxWidth: query('GET_IMAGE_VALIDATE_SIZE_MAX_WIDTH'),
          maxHeight: query('GET_IMAGE_VALIDATE_SIZE_MAX_HEIGHT'),
          minResolution: query('GET_IMAGE_VALIDATE_SIZE_MIN_RESOLUTION'),
          maxResolution: query('GET_IMAGE_VALIDATE_SIZE_MAX_RESOLUTION')
        };

        // get optional custom measure function
        var measure = query('GET_IMAGE_VALIDATE_SIZE_MEASURE');

        validateFile(file, bounds, measure)
          .then(function() {
            resolve(file);
          })
          .catch(function(error) {
            var status = error
              ? {
                  TOO_SMALL: {
                    label: query(
                      'GET_IMAGE_VALIDATE_SIZE_LABEL_IMAGE_SIZE_TOO_SMALL'
                    ),
                    details: query(
                      'GET_IMAGE_VALIDATE_SIZE_LABEL_EXPECTED_MIN_SIZE'
                    )
                  },

                  TOO_BIG: {
                    label: query(
                      'GET_IMAGE_VALIDATE_SIZE_LABEL_IMAGE_SIZE_TOO_BIG'
                    ),
                    details: query(
                      'GET_IMAGE_VALIDATE_SIZE_LABEL_EXPECTED_MAX_SIZE'
                    )
                  },

                  TOO_LOW_RES: {
                    label: query(
                      'GET_IMAGE_VALIDATE_SIZE_LABEL_IMAGE_RESOLUTION_TOO_LOW'
                    ),
                    details: query(
                      'GET_IMAGE_VALIDATE_SIZE_LABEL_EXPECTED_MIN_RESOLUTION'
                    )
                  },

                  TOO_HIGH_RES: {
                    label: query(
                      'GET_IMAGE_VALIDATE_SIZE_LABEL_IMAGE_RESOLUTION_TOO_HIGH'
                    ),
                    details: query(
                      'GET_IMAGE_VALIDATE_SIZE_LABEL_EXPECTED_MAX_RESOLUTION'
                    )
                  }
                }[error]
              : {
                  label: query('GET_IMAGE_VALIDATE_SIZE_LABEL_FORMAT_ERROR'),
                  details: file.type
                };

            reject({
              status: {
                main: status.label,
                sub: error
                  ? replaceInString(status.details, bounds)
                  : status.details
              }
            });
          });
      });
    });

    // expose plugin
    return {
      // default options
      options: {
        // Enable or disable file type validation
        allowImageValidateSize: [true, Type.BOOLEAN],

        // Error thrown when image can not be loaded
        imageValidateSizeLabelFormatError: [
          'Image type not supported',
          Type.STRING
        ],

        // Custom function to use as image measure
        imageValidateSizeMeasure: [null, Type.FUNCTION],

        // Required amount of pixels in the image
        imageValidateSizeMinResolution: [null, Type.INT],
        imageValidateSizeMaxResolution: [null, Type.INT],
        imageValidateSizeLabelImageResolutionTooLow: [
          'Resolution is too low',
          Type.STRING
        ],
        imageValidateSizeLabelImageResolutionTooHigh: [
          'Resolution is too high',
          Type.STRING
        ],
        imageValidateSizeLabelExpectedMinResolution: [
          'Minimum resolution is {minResolution}',
          Type.STRING
        ],
        imageValidateSizeLabelExpectedMaxResolution: [
          'Maximum resolution is {maxResolution}',
          Type.STRING
        ],

        // Required dimensions
        imageValidateSizeMinWidth: [1, Type.INT], // needs to be at least one pixel
        imageValidateSizeMinHeight: [1, Type.INT],
        imageValidateSizeMaxWidth: [65535, Type.INT], // maximum size of JPEG, fine for now I guess
        imageValidateSizeMaxHeight: [65535, Type.INT],

        // Label to show when an image is too small or image is too big
        imageValidateSizeLabelImageSizeTooSmall: [
          'Image is too small',
          Type.STRING
        ],
        imageValidateSizeLabelImageSizeTooBig: [
          'Image is too big',
          Type.STRING
        ],
        imageValidateSizeLabelExpectedMinSize: [
          'Minimum size is {minWidth} × {minHeight}',
          Type.STRING
        ],
        imageValidateSizeLabelExpectedMaxSize: [
          'Maximum size is {maxWidth} × {maxHeight}',
          Type.STRING
        ]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});

*/

/*!
 * Cropper v4.1.0
 * https://fengyuanchen.github.io/cropper
 *
 * Copyright 2014-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-10-12T07:43:51.850Z
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t=t||self).jQuery)}(this,function(l){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function C(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach(function(t){var e,i,a;e=n,a=o[i=t],i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(o).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))})}return n}function P(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}l=l&&l.hasOwnProperty("default")?l.default:l;var n="undefined"!=typeof window&&void 0!==window.document,r=n?window:{},t=n&&"ontouchstart"in r.document.documentElement,o=n&&"PointerEvent"in r,d="cropper",D="all",B="crop",k="move",O="zoom",T="e",E="w",W="s",N="n",H="ne",L="nw",z="se",Y="sw",h="".concat(d,"-crop"),s="".concat(d,"-disabled"),X="".concat(d,"-hidden"),p="".concat(d,"-hide"),u="".concat(d,"-invisible"),c="".concat(d,"-modal"),m="".concat(d,"-move"),g="".concat(d,"Action"),f="".concat(d,"Preview"),v="crop",w="move",b="none",y="crop",x="cropend",M="cropmove",R="cropstart",j="dblclick",A=o?"pointerdown":t?"touchstart":"mousedown",S=o?"pointermove":t?"touchmove":"mousemove",I=o?"pointerup pointercancel":t?"touchend touchcancel":"mouseup",U="zoom",q="image/jpeg",$=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Q=/^data:/,K=/^data:image\/jpeg;base64,/,Z=/^img|canvas$/i,F={viewMode:0,dragMode:v,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},G=Number.isNaN||r.isNaN;function V(t){return"number"==typeof t&&!G(t)}var J=function(t){return 0<t&&t<1/0};function _(t){return void 0===t}function tt(t){return"object"===e(t)&&null!==t}var et=Object.prototype.hasOwnProperty;function it(t){if(!tt(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&et.call(i,"isPrototypeOf")}catch(t){return!1}}function at(t){return"function"==typeof t}var nt=Array.prototype.slice;function ot(t){return Array.from?Array.from(t):nt.call(t)}function rt(i,a){return i&&at(a)&&(Array.isArray(i)||V(i.length)?ot(i).forEach(function(t,e){a.call(i,t,e,i)}):tt(i)&&Object.keys(i).forEach(function(t){a.call(i,i[t],t,i)})),i}var ht=Object.assign||function(i){for(var t=arguments.length,e=new Array(1<t?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];return tt(i)&&0<e.length&&e.forEach(function(e){tt(e)&&Object.keys(e).forEach(function(t){i[t]=e[t]})}),i},st=/\.\d*(?:0|9){12}\d*$/;function ct(t,e){var i=1<arguments.length&&void 0!==e?e:1e11;return st.test(t)?Math.round(t*i)/i:t}var lt=/^width|height|left|top|marginLeft|marginTop$/;function dt(t,e){var i=t.style;rt(e,function(t,e){lt.test(e)&&V(t)&&(t="".concat(t,"px")),i[e]=t})}function pt(t,e){if(e)if(V(t.length))rt(t,function(t){pt(t,e)});else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function ut(t,e){e&&(V(t.length)?rt(t,function(t){ut(t,e)}):t.classList?t.classList.remove(e):0<=t.className.indexOf(e)&&(t.className=t.className.replace(e,"")))}function mt(t,e,i){e&&(V(t.length)?rt(t,function(t){mt(t,e,i)}):i?pt(t,e):ut(t,e))}var gt=/([a-z\d])([A-Z])/g;function ft(t){return t.replace(gt,"$1-$2").toLowerCase()}function vt(t,e){return tt(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(ft(e)))}function wt(t,e,i){tt(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(ft(e)),i)}var bt=/\s\s*/,yt=function(){var t=!1;if(n){var e=!1,i=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});r.addEventListener("test",i,a),r.removeEventListener("test",i,a)}return t}();function xt(i,t,a,e){var n=3<arguments.length&&void 0!==e?e:{},o=a;t.trim().split(bt).forEach(function(t){if(!yt){var e=i.listeners;e&&e[t]&&e[t][a]&&(o=e[t][a],delete e[t][a],0===Object.keys(e[t]).length&&delete e[t],0===Object.keys(e).length&&delete i.listeners)}i.removeEventListener(t,o,n)})}function Mt(o,t,r,e){var h=3<arguments.length&&void 0!==e?e:{},s=r;t.trim().split(bt).forEach(function(a){if(h.once&&!yt){var t=o.listeners,n=void 0===t?{}:t;s=function(){delete n[a][r],o.removeEventListener(a,s,h);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];r.apply(o,e)},n[a]||(n[a]={}),n[a][r]&&o.removeEventListener(a,n[a][r],h),n[a][r]=s,o.listeners=n}o.addEventListener(a,s,h)})}function Ct(t,e,i){var a;return at(Event)&&at(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function Dt(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var Bt=r.location,kt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Ot(t){var e=t.match(kt);return null!==e&&(e[1]!==Bt.protocol||e[2]!==Bt.hostname||e[3]!==Bt.port)}function Tt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Et(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];V(n)&&0!==n&&r.push("translateX(".concat(n,"px)")),V(o)&&0!==o&&r.push("translateY(".concat(o,"px)")),V(e)&&0!==e&&r.push("rotate(".concat(e,"deg)")),V(i)&&1!==i&&r.push("scaleX(".concat(i,")")),V(a)&&1!==a&&r.push("scaleY(".concat(a,")"));var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function Wt(t,e){var i=t.pageX,a=t.pageY,n={endX:i,endY:a};return e?n:C({startX:i,startY:a},n)}function Nt(t,e){var i=t.aspectRatio,a=t.height,n=t.width,o=1<arguments.length&&void 0!==e?e:"contain",r=J(n),h=J(a);if(r&&h){var s=a*i;"contain"===o&&n<s||"cover"===o&&s<n?a=n/i:n=a*i}else r?a=n/i:h&&(n=a*i);return{width:n,height:a}}var Ht=String.fromCharCode;var Lt=/^data:.*,/;function zt(t){var e,i=new DataView(t);try{var a,n,o;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var r=i.byteLength,h=2;h+1<r;){if(255===i.getUint8(h)&&225===i.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+10;if("Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=Ht(t.getUint8(n));return a}(i,n+4,4)){var c=i.getUint16(s);if(((a=18761===c)||19789===c)&&42===i.getUint16(s+2,a)){var l=i.getUint32(s+4,a);8<=l&&(o=s+l)}}}if(o){var d,p,u=i.getUint16(o,a);for(p=0;p<u;p+=1)if(d=o+12*p+2,274===i.getUint16(d,a)){d+=8,e=i.getUint16(d,a),i.setUint16(d,1,a);break}}}catch(t){e=1}return e}var Yt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper;pt(a,X),ut(t,X);var n={width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)};dt(a,{width:(this.containerData=n).width,height:n.height}),pt(t,X),ut(a,X)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,s=t.height;t.height*r>t.width?3===i?h=t.height*r:s=t.width/r:3===i?s=t.width/r:h=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:s};c.left=(t.width-h)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),this.initialImageData=ht({},e),this.initialCanvasData=ht({},c)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(i.minCanvasWidth)||0,l=Number(i.minCanvasHeight)||0;1<r?(c=Math.max(c,a.width),l=Math.max(l,a.height),3===r&&(c<l*h?c=l*h:l=c/h)):0<r&&(c?c=Math.max(c,s?o.width:0):l?l=Math.max(l,s?o.height:0):s&&((c=o.width)<(l=o.height)*h?c=l*h:l=c/h));var d=Nt({aspectRatio:h,width:c,height:l});c=d.width,l=d.height,n.minWidth=c,n.minHeight=l,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if((s?0:1)<r){var p=a.width-n.width,u=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,u),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,u),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,u),n.maxTop=Math.max(0,u))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,e){var i=this.canvasData,a=this.imageData;if(e){var n=function(t){var e=t.width,i=t.height,a=t.degree;if(90===(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return 90<a?{width:s,height:h}:{width:h,height:s}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,h=i.width*(o/i.naturalWidth),s=i.height*(r/i.naturalHeight);i.left-=(h-i.width)/2,i.top-=(s-i.height)/2,i.width=h,i.height=s,i.aspectRatio=o/r,i.naturalWidth=o,i.naturalHeight=r,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,dt(this.canvas,ht({width:i.width,height:i.height},Et({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);ht(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),dt(this.image,ht({width:i.width,height:i.height},Et(ht({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=ht({},n)},limitCropBox:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,h=i.aspectRatio;if(t){var s=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,l=r?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,d=r?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),h&&(s&&c?s<c*h?c=s/h:s=c*h:s?c=s/h:c&&(s=c*h),l<d*h?d=l/h:l=d*h),o.minWidth=Math.min(s,l),o.minHeight=Math.min(c,d),o.maxWidth=l,o.maxHeight=d}e&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&wt(this.face,g,i.width>=e.width&&i.height>=e.height?k:D),dt(this.cropBox,ht({width:i.width,height:i.height},Et({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Ct(this.element,y,this.getData())}},Xt={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,a=i?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");if(i&&(o.crossOrigin=i),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,e){var r=e;"string"==typeof e?r=t.ownerDocument.querySelectorAll(e):e.querySelector&&(r=[e]),rt(this.previews=r,function(t){var e=document.createElement("img");wt(t,f,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=a,e.alt=n,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)})}},resetPreview:function(){rt(this.previews,function(t){var e=vt(t,f);dt(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(e,i){if(tt(e[i]))try{delete e[i]}catch(t){e[i]=void 0}else if(e.dataset)try{delete e.dataset[i]}catch(t){e.dataset[i]=void 0}else e.removeAttribute("data-".concat(ft(i)))}(t,f)})},preview:function(){var h=this.imageData,t=this.canvasData,e=this.cropBoxData,s=e.width,c=e.height,l=h.width,d=h.height,p=e.left-t.left-h.left,u=e.top-t.top-h.top;this.cropped&&!this.disabled&&(dt(this.viewBoxImage,ht({width:l,height:d},Et(ht({translateX:-p,translateY:-u},h)))),rt(this.previews,function(t){var e=vt(t,f),i=e.width,a=e.height,n=i,o=a,r=1;s&&(o=c*(r=i/s)),c&&a<o&&(n=s*(r=a/c),o=a),dt(t,{width:n,height:o}),dt(t.getElementsByTagName("img")[0],ht({width:l*r,height:d*r},Et(ht({translateX:-p*r,translateY:-u*r},h))))}))}},Rt={bind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&Mt(t,R,e.cropstart),at(e.cropmove)&&Mt(t,M,e.cropmove),at(e.cropend)&&Mt(t,x,e.cropend),at(e.crop)&&Mt(t,y,e.crop),at(e.zoom)&&Mt(t,U,e.zoom),Mt(i,A,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&Mt(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Mt(i,j,this.onDblclick=this.dblclick.bind(this)),Mt(t.ownerDocument,S,this.onCropMove=this.cropMove.bind(this)),Mt(t.ownerDocument,I,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&Mt(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&xt(t,R,e.cropstart),at(e.cropmove)&&xt(t,M,e.cropmove),at(e.cropend)&&xt(t,x,e.cropend),at(e.crop)&&xt(t,y,e.crop),at(e.zoom)&&xt(t,U,e.zoom),xt(i,A,this.onCropStart),e.zoomable&&e.zoomOnWheel&&xt(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&xt(i,j,this.onDblclick),xt(t.ownerDocument,S,this.onCropMove),xt(t.ownerDocument,I,this.onCropEnd),e.responsive&&xt(window,"resize",this.onResize)}},jt={resize:function(){var t=this.options,e=this.container,i=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||i.width<=a||i.height<=n)){var o,r,h=e.offsetWidth/i.width;if(1!=h||e.offsetHeight!==i.height)t.restore&&(o=this.getCanvasData(),r=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(rt(o,function(t,e){o[e]=t*h})),this.setCropBoxData(rt(r,function(t,e){r[e]=t*h})))}},dblclick:function(){this.disabled||this.options.dragMode===b||this.setDragMode(function(t,e){return t.classList?t.classList.contains(e):-1<t.className.indexOf(e)}(this.dragBox,h)?w:v)},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(V(e)&&1!==e||V(i)&&0!==i||t.ctrlKey))){var a,n=this.options,o=this.pointers;t.changedTouches?rt(t.changedTouches,function(t){o[t.identifier]=Wt(t)}):o[t.pointerId||0]=Wt(t),a=1<Object.keys(o).length&&n.zoomable&&n.zoomOnTouch?O:vt(t.target,g),$.test(a)&&!1!==Ct(this.element,R,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===B&&(this.cropping=!0,pt(this.dragBox,c)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==Ct(this.element,M,{originalEvent:t,action:e})&&(t.changedTouches?rt(t.changedTouches,function(t){ht(i[t.identifier]||{},Wt(t,!0))}):ht(i[t.pointerId||0]||{},Wt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?rt(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,mt(this.dragBox,c,this.cropped&&this.options.modal)),Ct(this.element,x,{originalEvent:t,action:e}))}}},At={change:function(t){var e,i=this.options,a=this.canvasData,n=this.containerData,o=this.cropBoxData,r=this.pointers,h=this.action,s=i.aspectRatio,c=o.left,l=o.top,d=o.width,p=o.height,u=c+d,m=l+p,g=0,f=0,v=n.width,w=n.height,b=!0;!s&&t.shiftKey&&(s=d&&p?d/p:1),this.limited&&(g=o.minLeft,f=o.minTop,v=g+Math.min(n.width,a.width,a.left+a.width),w=f+Math.min(n.height,a.height,a.top+a.height));function y(t){switch(t){case T:u+M.x>v&&(M.x=v-u);break;case E:c+M.x<g&&(M.x=g-c);break;case N:l+M.y<f&&(M.y=f-l);break;case W:m+M.y>w&&(M.y=w-m)}}var x=r[Object.keys(r)[0]],M={x:x.endX-x.startX,y:x.endY-x.startY};switch(h){case D:c+=M.x,l+=M.y;break;case T:if(0<=M.x&&(v<=u||s&&(l<=f||w<=m))){b=!1;break}y(T),(d+=M.x)<0&&(h=E,c-=d=-d),s&&(p=d/s,l+=(o.height-p)/2);break;case N:if(M.y<=0&&(l<=f||s&&(c<=g||v<=u))){b=!1;break}y(N),p-=M.y,l+=M.y,p<0&&(h=W,l-=p=-p),s&&(d=p*s,c+=(o.width-d)/2);break;case E:if(M.x<=0&&(c<=g||s&&(l<=f||w<=m))){b=!1;break}y(E),d-=M.x,c+=M.x,d<0&&(h=T,c-=d=-d),s&&(p=d/s,l+=(o.height-p)/2);break;case W:if(0<=M.y&&(w<=m||s&&(c<=g||v<=u))){b=!1;break}y(W),(p+=M.y)<0&&(h=N,l-=p=-p),s&&(d=p*s,c+=(o.width-d)/2);break;case H:if(s){if(M.y<=0&&(l<=f||v<=u)){b=!1;break}y(N),p-=M.y,l+=M.y,d=p*s}else y(N),y(T),0<=M.x?u<v?d+=M.x:M.y<=0&&l<=f&&(b=!1):d+=M.x,M.y<=0?f<l&&(p-=M.y,l+=M.y):(p-=M.y,l+=M.y);d<0&&p<0?(h=Y,l-=p=-p,c-=d=-d):d<0?(h=L,c-=d=-d):p<0&&(h=z,l-=p=-p);break;case L:if(s){if(M.y<=0&&(l<=f||c<=g)){b=!1;break}y(N),p-=M.y,l+=M.y,d=p*s,c+=o.width-d}else y(N),y(E),M.x<=0?g<c?(d-=M.x,c+=M.x):M.y<=0&&l<=f&&(b=!1):(d-=M.x,c+=M.x),M.y<=0?f<l&&(p-=M.y,l+=M.y):(p-=M.y,l+=M.y);d<0&&p<0?(h=z,l-=p=-p,c-=d=-d):d<0?(h=H,c-=d=-d):p<0&&(h=Y,l-=p=-p);break;case Y:if(s){if(M.x<=0&&(c<=g||w<=m)){b=!1;break}y(E),d-=M.x,c+=M.x,p=d/s}else y(W),y(E),M.x<=0?g<c?(d-=M.x,c+=M.x):0<=M.y&&w<=m&&(b=!1):(d-=M.x,c+=M.x),0<=M.y?m<w&&(p+=M.y):p+=M.y;d<0&&p<0?(h=H,l-=p=-p,c-=d=-d):d<0?(h=z,c-=d=-d):p<0&&(h=L,l-=p=-p);break;case z:if(s){if(0<=M.x&&(v<=u||w<=m)){b=!1;break}y(T),p=(d+=M.x)/s}else y(W),y(T),0<=M.x?u<v?d+=M.x:0<=M.y&&w<=m&&(b=!1):d+=M.x,0<=M.y?m<w&&(p+=M.y):p+=M.y;d<0&&p<0?(h=L,l-=p=-p,c-=d=-d):d<0?(h=Y,c-=d=-d):p<0&&(h=H,l-=p=-p);break;case k:this.move(M.x,M.y),b=!1;break;case O:this.zoom(function(t){var e=C({},t),s=[];return rt(t,function(h,t){delete e[t],rt(e,function(t){var e=Math.abs(h.startX-t.startX),i=Math.abs(h.startY-t.startY),a=Math.abs(h.endX-t.endX),n=Math.abs(h.endY-t.endY),o=Math.sqrt(e*e+i*i),r=(Math.sqrt(a*a+n*n)-o)/o;s.push(r)})}),s.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),s[0]}(r),t),b=!1;break;case B:if(!M.x||!M.y){b=!1;break}e=Dt(this.cropper),c=x.startX-e.left,l=x.startY-e.top,d=o.minWidth,p=o.minHeight,0<M.x?h=0<M.y?z:H:M.x<0&&(c-=d,h=0<M.y?Y:L),M.y<0&&(l-=p),this.cropped||(ut(this.cropBox,X),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}b&&(o.width=d,o.height=p,o.left=c,o.top=l,this.action=h,this.renderCropBox()),rt(r,function(t){t.startX=t.endX,t.startY=t.endY})}},St={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&pt(this.dragBox,c),ut(this.cropBox,X),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=ht({},this.initialImageData),this.canvasData=ht({},this.initialCanvasData),this.cropBoxData=ht({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(ht(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),ut(this.dragBox,c),pt(this.cropBox,X)),this},replace:function(e,t){var i=1<arguments.length&&void 0!==t&&t;return!this.disabled&&e&&(this.isImg&&(this.element.src=e),i?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,rt(this.previews,function(t){t.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,ut(this.cropper,s)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,pt(this.cropper,s)),this},destroy:function(){var t=this.element;return t[d]&&(t[d]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.canvasData,n=a.left,o=a.top;return this.moveTo(_(t)?t:n+Number(t),_(i)?i:o+Number(i))},moveTo:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.canvasData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(V(t)&&(a.left=t,n=!0),V(i)&&(a.top=i,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a=this.options,n=this.canvasData,o=n.width,r=n.height,h=n.naturalWidth,s=n.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&a.zoomable){var c=h*t,l=s*t;if(!1===Ct(this.element,U,{ratio:t,oldRatio:o/h,originalEvent:i}))return this;if(i){var d=this.pointers,p=Dt(this.cropper),u=d&&Object.keys(d).length?function(t){var a=0,n=0,o=0;return rt(t,function(t){var e=t.startX,i=t.startY;a+=e,n+=i,o+=1}),{pageX:a/=o,pageY:n/=o}}(d):{pageX:i.pageX,pageY:i.pageY};n.left-=(c-o)*((u.pageX-p.left-n.left)/o),n.top-=(l-r)*((u.pageY-p.top-n.top)/r)}else it(e)&&V(e.x)&&V(e.y)?(n.left-=(c-o)*((e.x-n.left)/o),n.top-=(l-r)*((e.y-n.top)/r)):(n.left-=(c-o)/2,n.top-=(l-r)/2);n.width=c,n.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return V(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,V(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(V(e)?e:1,t)},scale:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.imageData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(V(t)&&(a.scaleX=t,n=!0),V(i)&&(a.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(t){var i,e=0<arguments.length&&void 0!==t&&t,a=this.options,n=this.imageData,o=this.canvasData,r=this.cropBoxData;if(this.ready&&this.cropped){i={x:r.left-o.left,y:r.top-o.top,width:r.width,height:r.height};var h=n.width/n.naturalWidth;if(rt(i,function(t,e){i[e]=t/h}),e){var s=Math.round(i.y+i.height),c=Math.round(i.x+i.width);i.x=Math.round(i.x),i.y=Math.round(i.y),i.width=c-i.x,i.height=s-i.y}}else i={x:0,y:0,width:0,height:0};return a.rotatable&&(i.rotate=n.rotate||0),a.scalable&&(i.scaleX=n.scaleX||1,i.scaleY=n.scaleY||1),i},setData:function(t){var e=this.options,i=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&it(t)){var o=!1;e.rotatable&&V(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,o=!0),e.scalable&&(V(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,o=!0),V(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=i.width/i.naturalWidth;V(t.x)&&(n.left=t.x*r+a.left),V(t.y)&&(n.top=t.y*r+a.top),V(t.width)&&(n.width=t.width*r),V(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?ht({},this.containerData):{}},getImageData:function(){return this.sized?ht({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,i={};return this.ready&&rt(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&it(t)&&(V(t.left)&&(e.left=t.left),V(t.top)&&(e.top=t.top),V(t.width)?(e.width=t.width,e.height=t.width/i):V(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&it(t)&&(V(t.left)&&(a.left=t.left),V(t.top)&&(a.top=t.top),V(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),V(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(t){var e=0<arguments.length&&void 0!==t?t:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,a=function(t,e,i,a){var n=e.aspectRatio,o=e.naturalWidth,r=e.naturalHeight,h=e.rotate,s=void 0===h?0:h,c=e.scaleX,l=void 0===c?1:c,d=e.scaleY,p=void 0===d?1:d,u=i.aspectRatio,m=i.naturalWidth,g=i.naturalHeight,f=a.fillColor,v=void 0===f?"transparent":f,w=a.imageSmoothingEnabled,b=void 0===w||w,y=a.imageSmoothingQuality,x=void 0===y?"low":y,M=a.maxWidth,C=void 0===M?1/0:M,D=a.maxHeight,B=void 0===D?1/0:D,k=a.minWidth,O=void 0===k?0:k,T=a.minHeight,E=void 0===T?0:T,W=document.createElement("canvas"),N=W.getContext("2d"),H=Nt({aspectRatio:u,width:C,height:B}),L=Nt({aspectRatio:u,width:O,height:E},"cover"),z=Math.min(H.width,Math.max(L.width,m)),Y=Math.min(H.height,Math.max(L.height,g)),X=Nt({aspectRatio:n,width:C,height:B}),R=Nt({aspectRatio:n,width:O,height:E},"cover"),j=Math.min(X.width,Math.max(R.width,o)),A=Math.min(X.height,Math.max(R.height,r)),S=[-j/2,-A/2,j,A];return W.width=ct(z),W.height=ct(Y),N.fillStyle=v,N.fillRect(0,0,z,Y),N.save(),N.translate(z/2,Y/2),N.rotate(s*Math.PI/180),N.scale(l,p),N.imageSmoothingEnabled=b,N.imageSmoothingQuality=x,N.drawImage.apply(N,[t].concat(P(S.map(function(t){return Math.floor(ct(t))})))),N.restore(),W}(this.image,this.imageData,i,e);if(!this.cropped)return a;var n=this.getData(),o=n.x,r=n.y,h=n.width,s=n.height,c=a.width/Math.floor(i.naturalWidth);1!=c&&(o*=c,r*=c,h*=c,s*=c);var l=h/s,d=Nt({aspectRatio:l,width:e.maxWidth||1/0,height:e.maxHeight||1/0}),p=Nt({aspectRatio:l,width:e.minWidth||0,height:e.minHeight||0},"cover"),u=Nt({aspectRatio:l,width:e.width||(1!=c?a.width:h),height:e.height||(1!=c?a.height:s)}),m=u.width,g=u.height;m=Math.min(d.width,Math.max(p.width,m)),g=Math.min(d.height,Math.max(p.height,g));var f=document.createElement("canvas"),v=f.getContext("2d");f.width=ct(m),f.height=ct(g),v.fillStyle=e.fillColor||"transparent",v.fillRect(0,0,m,g);var w=e.imageSmoothingEnabled,b=void 0===w||w,y=e.imageSmoothingQuality;v.imageSmoothingEnabled=b,y&&(v.imageSmoothingQuality=y);var x,M,C,D,B,k,O=a.width,T=a.height,E=o,W=r;E<=-h||O<E?B=C=x=E=0:E<=0?(C=-E,E=0,B=x=Math.min(O,h+E)):E<=O&&(C=0,B=x=Math.min(h,O-E)),x<=0||W<=-s||T<W?k=D=M=W=0:W<=0?(D=-W,W=0,k=M=Math.min(T,s+W)):W<=T&&(D=0,k=M=Math.min(s,T-W));var N=[E,W,x,M];if(0<B&&0<k){var H=m/h;N.push(C*H,D*H,B*H,k*H)}return v.drawImage.apply(v,[a].concat(P(N.map(function(t){return Math.floor(ct(t))})))),f},setAspectRatio:function(t){var e=this.options;return this.disabled||_(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===v,o=e.movable&&t===w;t=n||o?t:b,e.dragMode=t,wt(i,g,t),mt(i,h,n),mt(i,m,o),e.cropBoxMovable||(wt(a,g,t),mt(a,h,n),mt(a,m,o))}return this}},Pt=r.Cropper,It=function(){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),!t||!Z.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=ht({},F,it(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return function(t,e,i){e&&a(t.prototype,e),i&&a(t,i)}(i,[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[d]){if(e[d]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",!(this.originalUrl=t))return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(Q.test(t))K.test(t)?this.read(function(t){var e=t.replace(Lt,""),i=atob(e),a=new ArrayBuffer(i.length),n=new Uint8Array(a);return rt(n,function(t,e){n[e]=i.charCodeAt(e)}),a}(t)):this.clone();else{var n=new XMLHttpRequest,o=this.clone.bind(this);this.reloading=!0,(this.xhr=n).onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){n.getResponseHeader("content-type")!==q&&n.abort()},n.onload=function(){e.read(n.response)},n.onloadend=function(){e.reloading=!1,e.xhr=null},a.checkCrossOrigin&&Ot(t)&&i.crossOrigin&&(t=Tt(t)),n.open("GET",t),n.responseType="arraybuffer",n.withCredentials="use-credentials"===i.crossOrigin,n.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=zt(t),n=0,o=1,r=1;if(1<a){this.url=function(t,e){for(var i=[],a=new Uint8Array(t);0<a.length;)i.push(Ht.apply(null,ot(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,q);var h=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a);n=h.rotate,o=h.scaleX,r=h.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&Ot(e)&&(i=i||"anonymous",a=Tt(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),pt(n,p),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var i=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;function e(t,e){ht(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.sizing=!1,i.sized=!0,i.build()}var a=r.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(r.navigator.userAgent);if(!t.naturalWidth||a){var n=document.createElement("img"),o=document.body||document.documentElement;(this.sizingImage=n).onload=function(){e(n.width,n.height),a||o.removeChild(n)},n.src=t.src,a||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else e(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".".concat(d,"-container")),r=o.querySelector(".".concat(d,"-canvas")),h=o.querySelector(".".concat(d,"-drag-box")),s=o.querySelector(".".concat(d,"-crop-box")),c=s.querySelector(".".concat(d,"-face"));this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=s,this.viewBox=o.querySelector(".".concat(d,"-view-box")),this.face=c,r.appendChild(i),pt(t,X),a.insertBefore(o,t.nextSibling),this.isImg||ut(i,p),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,pt(s,X),e.guides||pt(s.getElementsByClassName("".concat(d,"-dashed")),X),e.center||pt(s.getElementsByClassName("".concat(d,"-center")),X),e.background&&pt(o,"".concat(d,"-bg")),e.highlight||pt(c,u),e.cropBoxMovable&&(pt(c,m),wt(c,g,D)),e.cropBoxResizable||(pt(s.getElementsByClassName("".concat(d,"-line")),X),pt(s.getElementsByClassName("".concat(d,"-point")),X)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),at(e.ready)&&Mt(t,"ready",e.ready,{once:!0}),Ct(t,"ready")}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),ut(this.element,X))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=Pt,i}},{key:"setDefaults",value:function(t){ht(F,it(t)&&t)}}]),i}();if(ht(It.prototype,Yt,Xt,Rt,jt,At,St),l.fn){var Ut=l.fn.cropper,qt="cropper";l.fn.cropper=function(h){for(var t=arguments.length,s=new Array(1<t?t-1:0),e=1;e<t;e++)s[e-1]=arguments[e];var c;return this.each(function(t,e){var i=l(e),a="destroy"===h,n=i.data(qt);if(!n){if(a)return;var o=l.extend({},i.data(),l.isPlainObject(h)&&h);n=new It(e,o),i.data(qt,n)}if("string"==typeof h){var r=n[h];l.isFunction(r)&&((c=r.apply(n,s))===n&&(c=void 0),a&&i.removeData(qt))}}),void 0!==c?c:this},l.fn.cropper.Constructor=It,l.fn.cropper.setDefaults=It.setDefaults,l.fn.cropper.noConflict=function(){return l.fn.cropper=Ut,this}}});






