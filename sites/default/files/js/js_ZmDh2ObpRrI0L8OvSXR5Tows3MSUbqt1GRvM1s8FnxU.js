/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){return null!=n&&i.call(n,r)},x=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},_=Math.pow(2,53)-1,A=b("length"),w=function(n){var r=A(n);return"number"==typeof r&&0<=r&&r<=_};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var O=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!w(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=O(1),h.reduceRight=h.foldr=O(-1),h.find=h.detect=function(n,r,t){var e=(w(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return w(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=x(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return w(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=w(n)?h.clone(n):h.values(n),u=A(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var k=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=k(function(n,r,t){j(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=k(function(n,r,t){n[t]=r}),h.countBy=k(function(n,r,t){j(n,t)?n[t]++:n[t]=1});var S=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(S):w(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:w(n)?n.length:h.keys(n).length},h.partition=k(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var M=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=A(n);i<o;i++){var a=n[i];if(w(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else M(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return M(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=A(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(M(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=A(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=M(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,A).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=A(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var F=function(i){return function(n,r,t){r=d(r,t);for(var e=A(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=F(1),h.findLastIndex=F(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=A(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var E=function(i,o,a){return function(n,r,t){var e=0,u=A(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=E(1,h.findIndex,h.sortedIndex),h.lastIndexOf=E(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return N(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return N(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=M(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return j(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var I=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(n,r){var t=T.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(j(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=T[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)j(n,t)&&r.push(t);return I&&B(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return I&&B(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var R=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=R(h.allKeys),h.extendOwn=h.assign=R(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var q,K,z=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=z,r=M(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(M(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=R(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},q=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&K(n,r,t,e)},K=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!q(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!j(r,l)||!q(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return q(n,r)},h.isEmpty=function(n){return null==n||(w(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return j(n,"callee")});var D=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof D&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return j(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return x(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?x(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=h.invert(L),W=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=W(L),h.unescape=W(P),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var C=0;h.uniqueId=function(n){var r=++C+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,$=function(n){return"\\"+U[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||J).source,(n.interpolate||J).source,(n.evaluate||J).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(V,$),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var G=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),G(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],G(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return G(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,n,r){e.Backbone=t(e,r,i,n)})}else if(typeof exports!=="undefined"){var i=require("underscore"),n;try{n=require("jquery")}catch(r){}t(e,exports,i,n)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,n){var r=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.4.0";e.$=n;e.noConflict=function(){t.Backbone=r;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=e.Events={};var o=/\s+/;var h;var u=function(t,e,n,r,s){var a=0,h;if(n&&typeof n==="object"){if(r!==void 0&&"context"in s&&s.context===void 0)s.context=r;for(h=i.keys(n);a<h.length;a++){e=u(t,e,h[a],n[h[a]],s)}}else if(n&&o.test(n)){for(h=n.split(o);a<h.length;a++){e=t(e,h[a],r,s)}}else{e=t(e,n,r,s)}return e};a.on=function(t,e,i){this._events=u(l,this._events||{},t,e,{context:i,ctx:this,listening:h});if(h){var n=this._listeners||(this._listeners={});n[h.id]=h;h.interop=false}return this};a.listenTo=function(t,e,n){if(!t)return this;var r=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=h=s[r];if(!a){this._listenId||(this._listenId=i.uniqueId("l"));a=h=s[r]=new g(this,t)}var o=c(t,e,n,this);h=void 0;if(o)throw o;if(a.interop)a.on(e,n);return this};var l=function(t,e,i,n){if(i){var r=t[e]||(t[e]=[]);var s=n.context,a=n.ctx,o=n.listening;if(o)o.count++;r.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,n){try{t.on(e,i,n)}catch(r){return r}};a.off=function(t,e,i){if(!this._events)return this;this._events=u(f,this._events,t,e,{context:i,listeners:this._listeners});return this};a.stopListening=function(t,e,n){var r=this._listeningTo;if(!r)return this;var s=t?[t._listenId]:i.keys(r);for(var a=0;a<s.length;a++){var o=r[s[a]];if(!o)break;o.obj.off(e,n,this);if(o.interop)o.off(e,n)}if(i.isEmpty(r))this._listeningTo=void 0;return this};var f=function(t,e,n,r){if(!t)return;var s=r.context,a=r.listeners;var o=0,h;if(!e&&!s&&!n){for(h=i.keys(a);o<h.length;o++){a[h[o]].cleanup()}return}h=e?[e]:i.keys(t);for(;o<h.length;o++){e=h[o];var u=t[e];if(!u)break;var l=[];for(var c=0;c<u.length;c++){var f=u[c];if(n&&n!==f.callback&&n!==f.callback._callback||s&&s!==f.context){l.push(f)}else{var d=f.listening;if(d)d.off(e,n)}}if(l.length){t[e]=l}else{delete t[e]}}return t};a.once=function(t,e,i){var n=u(d,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(n,e,i)};a.listenToOnce=function(t,e,i){var n=u(d,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,n)};var d=function(t,e,n,r){if(n){var s=t[e]=i.once(function(){r(e,s);n.apply(this,arguments)});s._callback=n}return t};a.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var n=0;n<e;n++)i[n]=arguments[n+1];u(v,this._events,t,void 0,i);return this};var v=function(t,e,i,n){if(t){var r=t[e];var s=t.all;if(r&&s)s=s.slice();if(r)p(r,n);if(s)p(s,[e].concat(n))}return t};var p=function(t,e){var i,n=-1,r=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++n<r)(i=t[n]).callback.call(i.ctx);return;case 1:while(++n<r)(i=t[n]).callback.call(i.ctx,s);return;case 2:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a);return;case 3:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a,o);return;default:while(++n<r)(i=t[n]).callback.apply(i.ctx,e);return}};var g=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};g.prototype.on=a.on;g.prototype.off=function(t,e){var i;if(this.interop){this._events=u(f,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};g.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};a.bind=a.on;a.unbind=a.off;i.extend(e,a);var m=e.Model=function(t,e){var n=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)n=this.parse(n,e)||{};var r=i.result(this,"defaults");n=i.defaults(i.extend({},r,n),r);this.set(n,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(m.prototype,a,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,n){if(t==null)return this;var r;if(typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n||(n={});if(!this._validate(r,n))return false;var s=n.unset;var a=n.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in r){e=r[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}if(this.idAttribute in r)this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=n;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],n)}}if(h)return this;if(!a){while(this._pending){n=this._pending;this._pending=false;this.trigger("change",this,n)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var n={};var r;for(var s in t){var a=t[s];if(i.isEqual(e[s],a))continue;n[s]=a;r=true}return r?n:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var n=t.success;t.success=function(i){var r=t.parse?e.parse(i,t):i;if(!e.set(r,t))return false;if(n)n.call(t.context,e,i,t);e.trigger("sync",e,i,t)};G(this,t);return this.sync("read",this,t)},save:function(t,e,n){var r;if(t==null||typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n=i.extend({validate:true,parse:true},n);var s=n.wait;if(r&&!s){if(!this.set(r,n))return false}else if(!this._validate(r,n)){return false}var a=this;var o=n.success;var h=this.attributes;n.success=function(t){a.attributes=h;var e=n.parse?a.parse(t,n):t;if(s)e=i.extend({},r,e);if(e&&!a.set(e,n))return false;if(o)o.call(n.context,a,t,n);a.trigger("sync",a,t,n)};G(this,n);if(r&&s)this.attributes=i.extend({},h,r);var u=this.isNew()?"create":n.patch?"patch":"update";if(u==="patch"&&!n.attrs)n.attrs=r;var l=this.sync(u,this,n);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var n=t.success;var r=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(r)s();if(n)n.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{G(this,t);a=this.sync("delete",this,t)}if(!r)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;if(!n)return true;this.trigger("invalid",this,n,i.extend(e,{validationError:n}));return false}});var _=e.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var y={add:true,remove:true,merge:true};var b={add:true,remove:false};var x=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var n=Array(t.length-i);var r=e.length;var s;for(s=0;s<n.length;s++)n[s]=t[s+i];for(s=0;s<r;s++)t[s+i]=e[s];for(s=0;s<n.length;s++)t[s+r+i]=n[s]};i.extend(_.prototype,a,{model:m,preinitialize:function(){},initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,b))},remove:function(t,e){e=i.extend({},e);var n=!i.isArray(t);t=n?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return n?r[0]:r},set:function(t,e){if(t==null)return;e=i.extend({},y,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var n=!i.isArray(t);t=n?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var s=[];var a=[];var o=[];var h=[];var u={};var l=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&r==null&&e.sort!==false;var p=i.isString(this.comparator)?this.comparator:null;var g,m;for(m=0;m<t.length;m++){g=t[m];var _=this.get(g);if(_){if(c&&g!==_){var b=this._isModel(g)?g.attributes:g;if(e.parse)b=_.parse(b,e);_.set(b,e);o.push(_);if(v&&!d)d=_.hasChanged(p)}if(!u[_.cid]){u[_.cid]=true;s.push(_)}t[m]=_}else if(l){g=t[m]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);u[g.cid]=true;s.push(g)}}}if(f){for(m=0;m<this.length;m++){g=this.models[m];if(!u[g.cid])h.push(g)}if(h.length)this._removeModels(h,e)}var w=false;var E=!v&&l&&f;if(s.length&&E){w=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;x(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;x(this.models,a,r==null?this.length:r);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(r!=null)e.index=r+m;g=a[m];g.trigger("add",g,this,e)}if(d||w)this.trigger("sort",this,e);if(a.length||h.length||o.length){e.changes={added:a,removed:h,merged:o};this.trigger("update",this,e)}}return n?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var n=0;n<this.models.length;n++){this._removeReference(this.models[n],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var n=e.length;if(i.isFunction(e))e=e.bind(this);if(n===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var n=this;t.success=function(i){var r=t.reset?"reset":"set";n[r](i,t);if(e)e.call(t.context,n,i,t);n.trigger("sync",n,i,t)};G(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var n=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!n)this.add(t,e);var r=this;var s=e.success;e.success=function(t,e,i){if(n)r.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},values:function(){return new E(this,k)},keys:function(){return new E(this,I)},entries:function(){return new E(this,S)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var n=new this.model(t,e);if(!n.validationError)return n;this.trigger("invalid",this,n.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var n=0;n<t.length;n++){var r=this.get(t[n]);if(!r)continue;var s=this.indexOf(r);this.models.splice(s,1);this.length--;delete this._byId[r.cid];var a=this.modelId(r.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;r.trigger("remove",r,this,e)}i.push(r);this._removeReference(r,e)}return i},_isModel:function(t){return t instanceof m},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,n);if(t==="change"){var r=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(r!==s){if(r!=null)delete this._byId[r];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var w=typeof Symbol==="function"&&Symbol.iterator;if(w){_.prototype[w]=_.prototype.values}var E=function(t,e){this._collection=t;this._kind=e;this._index=0};var k=1;var I=2;var S=3;if(w){E.prototype[w]=function(){return this}}E.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===k){e=t}else{var i=this._collection.modelId(t.attributes);if(this._kind===I){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var T=e.View=function(t){this.cid=i.uniqueId("view");this.preinitialize.apply(this,arguments);i.extend(this,i.pick(t,H));this._ensureElement();this.initialize.apply(this,arguments)};var P=/^(\S+)\s*(.*)$/;var H=["model","collection","el","id","attributes","className","tagName","events"];i.extend(T.prototype,a,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var n=t[e];if(!i.isFunction(n))n=this[n];if(!n)continue;var r=e.match(P);this.delegate(r[1],r[2],n.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var $=function(t,e,i,n){switch(e){case 1:return function(){return t[i](this[n])};case 2:return function(e){return t[i](this[n],e)};case 3:return function(e,r){return t[i](this[n],C(e,this),r)};case 4:return function(e,r,s){return t[i](this[n],C(e,this),r,s)};default:return function(){var e=s.call(arguments);e.unshift(this[n]);return t[i].apply(t,e)}}};var A=function(t,e,n,r){i.each(n,function(i,n){if(e[n])t.prototype[n]=$(e,i,n,r)})};var C=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return R(t);if(i.isString(t))return function(e){return e.get(t)};return t};var R=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};i.each([[_,M,"models"],[m,N,"attributes"]],function(t){var e=t[0],n=t[1],r=t[2];e.mixin=function(t){var n=i.reduce(i.functions(t),function(t,e){t[e]=0;return t},{});A(e,t,n,r)};A(e,i,n,r)});e.sync=function(t,n,r){var s=j[t];i.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!r.url){a.url=i.result(n,"url")||V()}if(r.data==null&&n&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(r.attrs||n.toJSON(r))}if(r.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(r.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(r.emulateJSON)a.data._method=s;var o=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!r.emulateJSON){a.processData=false}var h=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(h)h.call(r.context,t,e,i)};var u=r.xhr=e.ajax(i.extend(a,r));n.trigger("request",n,u,r);return u};var j={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var O=e.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(O.prototype,a,{preinitialize:function(){},initialize:function(){},route:function(t,n,r){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(n)){r=n;n=""}if(!r)r=this[n];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(r,a,n)!==false){s.trigger.apply(s,["route:"+n].concat(a));s.trigger("route",n,a);e.history.trigger("route",s,n,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){if(e===n.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=e.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;i.extend(B.prototype,a,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var n=document.body;var r=n.insertBefore(this.iframe,n.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var n=i+t;t=t.replace(W,"");var r=this.decodeFragment(t);if(this.fragment===r)return;this.fragment=r;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,n)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(n)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else{t.hash="#"+e}}});e.history=new B;var D=function(t,e){var n=this;var r;if(t&&i.has(t,"constructor")){r=t.constructor}else{r=function(){return n.apply(this,arguments)}}i.extend(r,n,e);r.prototype=i.create(n.prototype,t);r.prototype.constructor=r;r.__super__=n.prototype;return r};m.extend=_.extend=O.extend=T.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(t,e){var i=e.error;e.error=function(n){if(i)i.call(e.context,t,n,e);t.trigger("error",t,n,e)}};return e});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],a):a(jQuery)}(function(a){return a.fn.labels=function(){var b,c,d,e,f;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){"1.7"===a.fn.jquery.substring(0,3)&&(a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{tabbable:function(b){var c=a.attr(b,"tabindex"),d=null!=c;return(!d||c>=0)&&a.ui.focusable(b,d)}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return a.ui=a.ui||{},a.ui.version="1.12.1"});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.escapeSelector=function(){var a=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(b){return b.replace(a,"\\$1")}}()});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){function b(a){for(var b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");return"hidden"!==b}return a.ui.focusable=function(c,d){var e,f,g,h,i,j=c.nodeName.toLowerCase();return"area"===j?(e=c.parentNode,f=e.name,!(!c.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']"),g.length>0&&g.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(j)?(h=!c.disabled,h&&(i=a(c).closest("fieldset")[0],i&&(h=!i.disabled))):h="a"===j?c.href||d:d,h&&a(c).is(":visible")&&b(a(c)))},a.extend(a.expr[":"],{focusable:function(b){return a.ui.focusable(b,null!=a.attr(b,"tabindex"))}}),a.ui.focusable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeActiveElement=function(a){var b;try{b=a.activeElement}catch(c){b=a.body}return b||(b=a.body),b.nodeName||(b=a.body),b}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeBlur=function(b){b&&"body"!==b.nodeName.toLowerCase()&&a(b).trigger("blur")}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h={},i=b.split(".")[0];b=b.split(".")[1];var j=i+"-"+b;return d||(d=c,c=a.Widget),a.isArray(d)&&(d=a.extend.apply(null,[{}].concat(d))),a.expr[":"][j.toLowerCase()]=function(b){return!!a.data(b,j)},a[i]=a[i]||{},e=a[i][b],f=a[i][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},a.extend(f,e,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),g=new c,g.options=a.widget.extend({},g.options),a.each(d,function(b,d){return a.isFunction(d)?void(h[b]=function(){function a(){return c.prototype[b].apply(this,arguments)}function e(a){return c.prototype[b].apply(this,a)}return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(h[b]=d)}),f.prototype=a.widget.extend(g,{widgetEventPrefix:e?g.widgetEventPrefix||b:b},h,{constructor:f,namespace:i,widgetName:b,widgetFullName:j}),e?(a.each(e._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,f,c._proto)}),delete e._childConstructors):c._childConstructors.push(f),a.widget.bridge(b,f),f},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.length||"instance"!==f?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):i=void 0:(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),this.classesElementLookup={},d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){var b=this;this._destroy(),a.each(this.classesElementLookup,function(a,c){b._removeClass(c,a)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(b){var c,d,e;for(c in b)e=this.classesElementLookup[c],b[c]!==this.options.classes[c]&&e&&e.length&&(d=a(e.get()),this._removeClass(e,c),d.addClass(this._classes({element:d,keys:c,classes:b,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(b){function c(c,f){var g,h;for(h=0;h<c.length;h++)g=e.classesElementLookup[c[h]]||a(),g=a(b.add?a.unique(g.get().concat(b.element.get())):g.not(b.element).get()),e.classesElementLookup[c[h]]=g,d.push(c[h]),f&&b.classes[c[h]]&&d.push(b.classes[c[h]])}var d=[],e=this;return b=a.extend({element:this.element,classes:this.options.classes||{}},b),this._on(b.element,{remove:"_untrackClassesElement"}),b.keys&&c(b.keys.match(/\S+/g)||[],!0),b.extra&&c(b.extra.match(/\S+/g)||[]),d.join(" ")},_untrackClassesElement:function(b){var c=this;a.each(c.classesElementLookup,function(d,e){a.inArray(b.target,e)!==-1&&(c.classesElementLookup[d]=a(e.not(b.target).get()))})},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){d="boolean"==typeof d?d:c;var e="string"==typeof a||null===a,f={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d};return f.element.toggleClass(this._classes(f),d),this},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.on(j,k,h):c.on(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.off(c).off(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){this._addClass(a(b.currentTarget),null,"ui-state-hover")},mouseleave:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){this._addClass(a(b.currentTarget),null,"ui-state-focus")},focusout:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });

  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);

      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');

      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');

      $nestedContextual.css({ top: $nestedContextual.position().top + height });
    }
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;

    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));

    var destination = 'destination=' + Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath));
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });

    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({ el: $contextual, model: model }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({ el: $region, model: model }, options)));

    contextual.collection.add(model);

    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });

    adjustIfNestedAndOverlapping($contextual);
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);

      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');
      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token')
        });
      });

      var uncachedIDs = [];
      var uncachedTokens = [];
      ids.forEach(function (contextualID) {
        var html = storage.getItem('Drupal.contextual.' + contextualID.id);
        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find('[data-contextual-id="' + contextualID.id + '"]:empty').eq(0), html);
          });
          return;
        }
        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: { 'ids[]': uncachedIDs, 'tokens[]': uncachedTokens },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem('Drupal.contextual.' + contextualID, html);

              if (html.length > 0) {
                $placeholders = $context.find('[data-contextual-id="' + contextualID + '"]');

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };

  Drupal.contextual = {
    views: [],

    regionViews: []
  };

  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel
  });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',

      regionIsHovered: false,

      hasFocus: false,

      isOpen: false,

      isLocked: false
    },

    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);

      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      this.$el.find('.contextual-links').prop('hidden', !isOpen);

      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },

    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;

      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $element.addClass('ajax-progress ajax-progress-bar');
  };
})(Drupal);;
/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });

    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields = void 0;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');

        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url = void 0;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $('#' + hash);
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);

      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);

  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);

  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./form","./version"],a):a(jQuery)}(function(a){return a.ui.formResetMixin={_formResetHandler:function(){var b=a(this);setTimeout(function(){var c=b.data("ui-form-reset-instances");a.each(c,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var a=this.form.data("ui-form-reset-instances")||[];a.length||this.form.on("reset.ui-form-reset",this._formResetHandler),a.push(this),this.form.data("ui-form-reset-instances",a)}},_unbindFormResetHandler:function(){if(this.form.length){var b=this.form.data("ui-form-reset-instances");b.splice(a.inArray(this,b),1),b.length?this.form.data("ui-form-reset-instances",b):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../escape-selector","../form-reset-mixin","../labels","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.checkboxradio",[a.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var b,c,d=this,e=this._super()||{};return this._readType(),c=this.element.labels(),this.label=a(c[c.length-1]),this.label.length||a.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){d.originalLabel+=3===this.nodeType?a(this).text():this.outerHTML}),this.originalLabel&&(e.label=this.originalLabel),b=this.element[0].disabled,null!=b&&(e.disabled=b),e},_create:function(){var a=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),a&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var b=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===b&&/radio|checkbox/.test(this.type)||a.error("Can't create checkboxradio on element.nodeName="+b+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var b,c=this.element[0].name,d="input[name='"+a.ui.escapeSelector(c)+"']";return c?(b=this.form.length?a(this.form[0].elements).filter(d):a(d).filter(function(){return 0===a(this).form().length}),b.not(this.element)):a([])},_toggleClasses:function(){var b=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",b),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",b)._toggleClass(this.icon,null,"ui-icon-blank",!b),"radio"===this.type&&this._getRadioGroup().each(function(){var b=a(this).checkboxradio("instance");b&&b._removeClass(b.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(a,b){if("label"!==a||b)return this._super(a,b),"disabled"===a?(this._toggleClass(this.label,null,"ui-state-disabled",b),void(this.element[0].disabled=b)):void this.refresh()},_updateIcon:function(b){var c="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=a("<span>"),this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(c+=b?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,b?"ui-icon-blank":"ui-icon-check")):c+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",c),b||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var a=this.label.contents().not(this.element[0]);this.icon&&(a=a.not(this.icon[0])),this.iconSpace&&(a=a.not(this.iconSpace[0])),a.remove(),this.label.append(this.options.label)},refresh:function(){var a=this.element[0].checked,b=this.element[0].disabled;this._updateIcon(a),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),null!==this.options.label&&this._updateLabel(),b!==this.options.disabled&&this._setOptions({disabled:b})}}]),a.ui.checkboxradio});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../widget"],a):a(jQuery)}(function(a){var b=/ui-corner-([a-z]){2,6}/g;return a.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var b=this,c=[];a.each(this.options.items,function(d,e){var f,g={};if(e)return"controlgroupLabel"===d?(f=b.element.find(e),f.each(function(){var b=a(this);b.children(".ui-controlgroup-label-contents").length||b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),b._addClass(f,null,"ui-widget ui-widget-content ui-state-default"),void(c=c.concat(f.get()))):void(a.fn[d]&&(g=b["_"+d+"Options"]?b["_"+d+"Options"]("middle"):{classes:{}},b.element.find(e).each(function(){var e=a(this),f=e[d]("instance"),h=a.widget.extend({},g);if("button"!==d||!e.parent(".ui-spinner").length){f||(f=e[d]()[d]("instance")),f&&(h.classes=b._resolveClassesValues(h.classes,f)),e[d](h);var i=e[d]("widget");a.data(i[0],"ui-controlgroup-data",f?f:e[d]("instance")),c.push(i[0])}})))}),this.childWidgets=a(a.unique(c)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(b){this.childWidgets.each(function(){var c=a(this),d=c.data("ui-controlgroup-data");d&&d[b]&&d[b]()})},_updateCornerClass:function(a,b){var c="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",d=this._buildSimpleOptions(b,"label").classes.label;this._removeClass(a,null,c),this._addClass(a,null,d)},_buildSimpleOptions:function(a,b){var c="vertical"===this.options.direction,d={classes:{}};return d.classes[b]={middle:"",first:"ui-corner-"+(c?"top":"left"),last:"ui-corner-"+(c?"bottom":"right"),only:"ui-corner-all"}[a],d},_spinnerOptions:function(a){var b=this._buildSimpleOptions(a,"ui-spinner");return b.classes["ui-spinner-up"]="",b.classes["ui-spinner-down"]="",b},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")},_selectmenuOptions:function(a){var b="vertical"===this.options.direction;return{width:!!b&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(b?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(b?"top":"left")},last:{"ui-selectmenu-button-open":b?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(b?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}},_resolveClassesValues:function(c,d){var e={};return a.each(c,function(f){var g=d.options.classes[f]||"";g=a.trim(g.replace(b,"")),e[f]=(g+" "+c[f]).replace(/\s+/g," ")}),e},_setOption:function(a,b){return"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,b),"disabled"===a?void this._callChildMethod(b?"disable":"enable"):void this.refresh()},refresh:function(){var b,c=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),b=this.childWidgets,this.options.onlyVisible&&(b=b.filter(":visible")),b.length&&(a.each(["first","last"],function(a,d){var e=b[d]().data("ui-controlgroup-data");if(e&&c["_"+e.widgetName+"Options"]){var f=c["_"+e.widgetName+"Options"](1===b.length?"only":d);f.classes=c._resolveClassesValues(f.classes,e),e.element[e.widgetName](f)}else c._updateCornerClass(b[d](),d)}),this._callChildMethod("refresh"))}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,b=this._super()||{};return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(b.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(b.label=this.originalLabel),b},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(b){b.keyCode===a.ui.keyCode.SPACE&&(b.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(b,c){var d="iconPosition"!==b,e=d?this.options.iconPosition:c,f="top"===e||"bottom"===e;this.icon?d&&this._removeClass(this.icon,null,this.options.icon):(this.icon=a("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),d&&this._addClass(this.icon,null,c),this._attachIcon(e),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(e))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,b),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(b):(this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,b),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),this.element[0].disabled=b,b&&this.element.blur())},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),a.uiBackCompat!==!1&&(a.widget("ui.button",a.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(a,b){return"text"===a?void this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),a.fn.button=function(b){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?b.apply(this,arguments):(a.ui.checkboxradio||a.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(a.fn.button),a.fn.buttonset=function(){return a.ui.controlgroup||a.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),a.ui.button});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],a):a(jQuery)}(function(a){var b=!1;return a(document).on("mouseup",function(){b=!1}),a.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.on("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).on("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f=!("string"!=typeof this.options.cancel||!c.target.nodeName)&&a(c.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(c))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0))}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)if(b.originalEvent.altKey||b.originalEvent.ctrlKey||b.originalEvent.metaKey||b.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(c){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,b=!1,c.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.draggable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(this._blurActiveElement(b),this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0))},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=a.ui.safeActiveElement(this.document[0]),d=a(b.target);d.closest(c).length||a.ui.safeBlur(c)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp(new a.Event("mouseup",b)),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.trigger("focus"),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new a.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,r<i-p||q>j+p||t<k-p||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}}),a.ui.draggable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(l.test(a[0])?b/100:1),parseFloat(a[1])*(l.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}var e,f=Math.max,g=Math.abs,h=/left|center|right/,i=/top|center|bottom/,j=/[\+\-]\d+(\.[\d]+)?%?/,k=/^\w+/,l=/%$/,m=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType,f=!d&&!e;return{element:c,isWindow:d,isDocument:e,offset:f?a(b).offset():{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return m.apply(this,arguments);e=a.extend({},e);var l,n,o,p,q,r,s=a(e.of),t=a.position.getWithinInfo(e.within),u=a.position.getScrollInfo(t),v=(e.collision||"flip").split(" "),w={};return r=d(s),s[0].preventDefault&&(e.at="left top"),n=r.width,o=r.height,p=r.offset,q=a.extend({},p),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=h.test(c[0])?c.concat(["center"]):i.test(c[0])?["center"].concat(c):["center","center"]),c[0]=h.test(c[0])?c[0]:"center",c[1]=i.test(c[1])?c[1]:"center",a=j.exec(c[0]),b=j.exec(c[1]),w[this]=[a?a[0]:0,b?b[0]:0],e[this]=[k.exec(c[0])[0],k.exec(c[1])[0]]}),1===v.length&&(v[1]=v[0]),"right"===e.at[0]?q.left+=n:"center"===e.at[0]&&(q.left+=n/2),"bottom"===e.at[1]?q.top+=o:"center"===e.at[1]&&(q.top+=o/2),l=b(w.at,n,o),q.left+=l[0],q.top+=l[1],this.each(function(){var d,h,i=a(this),j=i.outerWidth(),k=i.outerHeight(),m=c(this,"marginLeft"),r=c(this,"marginTop"),x=j+m+c(this,"marginRight")+u.width,y=k+r+c(this,"marginBottom")+u.height,z=a.extend({},q),A=b(w.my,i.outerWidth(),i.outerHeight());"right"===e.my[0]?z.left-=j:"center"===e.my[0]&&(z.left-=j/2),"bottom"===e.my[1]?z.top-=k:"center"===e.my[1]&&(z.top-=k/2),z.left+=A[0],z.top+=A[1],d={marginLeft:m,marginTop:r},a.each(["left","top"],function(b,c){a.ui.position[v[b]]&&a.ui.position[v[b]][c](z,{targetWidth:n,targetHeight:o,elemWidth:j,elemHeight:k,collisionPosition:d,collisionWidth:x,collisionHeight:y,offset:[l[0]+A[0],l[1]+A[1]],my:e.my,at:e.at,within:t,elem:i})}),e.using&&(h=function(a){var b=p.left-z.left,c=b+n-j,d=p.top-z.top,h=d+o-k,l={target:{element:s,left:p.left,top:p.top,width:n,height:o},element:{element:i,left:z.left,top:z.top,width:j,height:k},horizontal:c<0?"left":b>0?"right":"center",vertical:h<0?"top":d>0?"bottom":"middle"};n<j&&g(b+c)<n&&(l.horizontal="center"),o<k&&g(d+h)<o&&(l.vertical="middle"),f(g(b),g(c))>f(g(d),g(h))?l.important="horizontal":l.important="vertical",e.using.call(this,a,l)}),i.offset(a.extend(z,{using:h}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,g=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-g-e;b.collisionWidth>g?i>0&&j<=0?(c=a.left+i+b.collisionWidth-g-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+g-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=f(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,g=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-g-e;b.collisionHeight>g?i>0&&j<=0?(c=a.top+i+b.collisionHeight-g-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+g-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=f(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,h=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-h-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-h-f,(c<0||c<g(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||g(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,h=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-h-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-h-f,(d<0||d<g(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||g(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}}}(),a.ui.position});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.resizable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c=this.options,d=this;this._addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,b={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(b),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(b),this._proportionallyResize()),this._setupHandles(),c.autoHide&&a(this.element).on("mouseenter",function(){c.disabled||(d._removeClass("ui-resizable-autohide"),d._handles.show())}).on("mouseleave",function(){c.disabled||d.resizing||(d._addClass("ui-resizable-autohide"),d._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_setOption:function(a,b){switch(this._super(a,b),a){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var b,c,d,e,f,g=this.options,h=this;if(this.handles=g.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=a(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;c<d.length;c++)b=a.trim(d[c]),e="ui-resizable-"+b,f=a("<div>"),this._addClass(f,"ui-resizable-handle "+e),f.css({zIndex:g.zIndex}),this.handles[b]=".ui-resizable-"+b,this.element.append(f);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String?this.handles[c]=this.element.children(this.handles[c]).first().show():(this.handles[c].jquery||this.handles[c].nodeType)&&(this.handles[c]=a(this.handles[c]),this._on(this.handles[c],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),this._handles=this._handles.add(this.handles[c])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){h.resizing||(this.className&&(f=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=f&&f[1]?f[1]:"se")}),g.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),this._addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),!!i&&(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseFloat(k.element.css("left"))+(k.position.left-k.originalPosition.left)||null,i=parseFloat(k.element.css("top"))+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.originalPosition.top+this.originalSize.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];b<4;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(e[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,k=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseFloat(c.element.css("width")),height:parseFloat(c.element.css("height")),top:parseFloat(c.element.css("top")),left:parseFloat(c.element.css("left"))};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options;a(c.alsoResize).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseFloat(b.width()),height:parseFloat(b.height()),left:parseFloat(b.css("left")),top:parseFloat(b.css("top"))})})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0};a(e.alsoResize).each(function(){var b=a(this),d=a(this).data("ui-resizable-alsoresize"),e={},f=b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(f,function(a,b){var c=(d[b]||0)+(h[b]||0);c&&c>=0&&(e[b]=c||null)}),b.css(e)})},stop:function(){a(this).removeData("ui-resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}),b._addClass(b.ghost,"ui-resizable-ghost"),a.uiBackCompat!==!1&&"string"==typeof b.options.ghost&&b.ghost.addClass(this.options.ghost),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((o-k<=0||n-j<=0)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=j-b.width,c.size.width=n,c.position.left=g.left+f.width-n))}}),a.ui.resizable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../tabbable","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(b,c){var d=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+a(this).css("z-index")}).get(),f=Math.max.apply(null,e);return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),d=!0),d&&!c&&this._trigger("focus",b),d},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(a.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")},_keepFocus:function(b){function c(){var b=a.ui.safeActiveElement(this.document[0]),c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB&&!b.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){e.trigger("focus")}),b.preventDefault()):(this._delay(function(){d.trigger("focus")}),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=a("<button type='button'></button>").button({label:a("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(b,"ui-dialog-title"),this._title(b),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,f={icon:d.icon,iconPosition:d.iconPosition,showLabel:d.showLabel,icons:d.icons,text:d.text},delete d.click,delete d.icon,delete d.iconPosition,delete d.showLabel,delete d.icons,"boolean"==typeof d.text&&delete d.text,a("<button></button>",d).button(f).appendTo(b.uiButtonSet).on("click",function(){e.apply(b.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){c._addClass(a(this),"ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){var g=f.offset.left-c.document.scrollLeft(),h=f.offset.top-c.document.scrollTop();d.position={my:"left top",at:"left"+(g>=0?"+":"")+g+" top"+(h>=0?"+":"")+h,of:c.window},c._removeClass(a(this),"ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){c._addClass(a(this),"ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){var g=c.uiDialog.offset(),h=g.left-c.document.scrollLeft(),i=g.top-c.document.scrollTop();d.height=c.uiDialog.height(),d.width=c.uiDialog.width(),d.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(i>=0?"+":"")+i,of:c.window},c._removeClass(a(this),"ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(b){this._makeFocusTarget(),this._focusedElement=a(b.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var b=this._trackingInstances(),c=a.inArray(this,b);c!==-1&&b.splice(c,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var c=this,d=!1,e={};a.each(b,function(a,b){c._setOption(a,b),a in c.sizeRelatedOptions&&(d=!0),a in c.resizableRelatedOptions&&(e[a]=b)}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(b,c){var d,e,f=this.uiDialog;"disabled"!==b&&(this._super(b,c),"appendTo"===b&&this.uiDialog.appendTo(this._appendTo()),"buttons"===b&&this._createButtons(),"closeText"===b&&this.uiDialogTitlebarClose.button({label:a("<a>").text(""+this.options.closeText).html()}),"draggable"===b&&(d=f.is(":data(ui-draggable)"),d&&!c&&f.draggable("destroy"),!d&&c&&this._makeDraggable()),"position"===b&&this._position(),"resizable"===b&&(e=f.is(":data(ui-resizable)"),e&&!c&&f.resizable("destroy"),e&&"string"==typeof c&&f.resizable("option","handles",c),e||c===!1||this._makeResizable()),"title"===b&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(a){b||this._allowInteraction(a)||(a.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=a("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),a.uiBackCompat!==!1&&a.widget("ui.dialog",a.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b),this._superApply(arguments)}}),a.ui.dialog});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',

    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef = void 0;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);

      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    dialog.show = function () {
      openDialog({ modal: false });
    };
    dialog.showModal = function () {
      openDialog({ modal: true });
    };
    dialog.close = closeDialog;

    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({ autoResize: true, maxHeight: '95%' }, drupalSettings.dialog);

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option = void 0;
    var optionValue = void 0;
    var adjustedValue = void 0;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = { settings: settings, $element: $element };
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', { resizable: false, draggable: false }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex = void 0;
      var index = void 0;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });
})(jQuery);;
/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, drupalSettings, JSON, storage) {
  var options = $.extend(drupalSettings.quickedit, {
    strings: {
      quickEdit: Drupal.t('Quick edit')
    }
  });

  var fieldsMetadataQueue = [];

  var fieldsAvailableQueue = [];

  var contextualLinksQueue = [];

  var entityInstancesTracker = {};

  function initQuickEdit(bodyElement) {
    Drupal.quickedit.collections.entities = new Drupal.quickedit.EntityCollection();
    Drupal.quickedit.collections.fields = new Drupal.quickedit.FieldCollection();

    Drupal.quickedit.app = new Drupal.quickedit.AppView({
      el: bodyElement,
      model: new Drupal.quickedit.AppModel(),
      entitiesCollection: Drupal.quickedit.collections.entities,
      fieldsCollection: Drupal.quickedit.collections.fields
    });
  }

  function processEntity(entityElement) {
    var entityID = entityElement.getAttribute('data-quickedit-entity-id');
    if (!entityInstancesTracker.hasOwnProperty(entityID)) {
      entityInstancesTracker[entityID] = 0;
    } else {
      entityInstancesTracker[entityID]++;
    }

    var entityInstanceID = entityInstancesTracker[entityID];
    entityElement.setAttribute('data-quickedit-entity-instance-id', entityInstanceID);
  }

  function initializeField(fieldElement, fieldID, entityID, entityInstanceID) {
    var entity = Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    });

    $(fieldElement).addClass('quickedit-field');

    var field = new Drupal.quickedit.FieldModel({
      el: fieldElement,
      fieldID: fieldID,
      id: fieldID + '[' + entity.get('entityInstanceID') + ']',
      entity: entity,
      metadata: Drupal.quickedit.metadata.get(fieldID),
      acceptStateChange: _.bind(Drupal.quickedit.app.acceptEditorStateChange, Drupal.quickedit.app)
    });

    Drupal.quickedit.collections.fields.add(field);
  }

  function loadMissingEditors(callback) {
    var loadedEditors = _.keys(Drupal.quickedit.editors);
    var missingEditors = [];
    Drupal.quickedit.collections.fields.each(function (fieldModel) {
      var metadata = Drupal.quickedit.metadata.get(fieldModel.get('fieldID'));
      if (metadata.access && _.indexOf(loadedEditors, metadata.editor) === -1) {
        missingEditors.push(metadata.editor);

        Drupal.quickedit.editors[metadata.editor] = false;
      }
    });
    missingEditors = _.uniq(missingEditors);
    if (missingEditors.length === 0) {
      callback();
      return;
    }

    var loadEditorsAjax = Drupal.ajax({
      url: Drupal.url('quickedit/attachments'),
      submit: { 'editors[]': missingEditors }
    });

    var realInsert = Drupal.AjaxCommands.prototype.insert;
    loadEditorsAjax.commands.insert = function (ajax, response, status) {
      _.defer(callback);
      realInsert(ajax, response, status);
    };

    loadEditorsAjax.execute();
  }

  function initializeEntityContextualLink(contextualLink) {
    var metadata = Drupal.quickedit.metadata;

    function hasFieldWithPermission(fieldIDs) {
      for (var i = 0; i < fieldIDs.length; i++) {
        var fieldID = fieldIDs[i];
        if (metadata.get(fieldID, 'access') === true) {
          return true;
        }
      }
      return false;
    }

    function allMetadataExists(fieldIDs) {
      return fieldIDs.length === metadata.intersection(fieldIDs).length;
    }

    var fields = _.where(fieldsAvailableQueue, {
      entityID: contextualLink.entityID,
      entityInstanceID: contextualLink.entityInstanceID
    });
    var fieldIDs = _.pluck(fields, 'fieldID');

    if (fieldIDs.length === 0) {
      return false;
    }

    if (hasFieldWithPermission(fieldIDs)) {
      var entityModel = new Drupal.quickedit.EntityModel({
        el: contextualLink.region,
        entityID: contextualLink.entityID,
        entityInstanceID: contextualLink.entityInstanceID,
        id: contextualLink.entityID + '[' + contextualLink.entityInstanceID + ']',
        label: Drupal.quickedit.metadata.get(contextualLink.entityID, 'label')
      });
      Drupal.quickedit.collections.entities.add(entityModel);

      var entityDecorationView = new Drupal.quickedit.EntityDecorationView({
        el: contextualLink.region,
        model: entityModel
      });
      entityModel.set('entityDecorationView', entityDecorationView);

      _.each(fields, function (field) {
        initializeField(field.el, field.fieldID, contextualLink.entityID, contextualLink.entityInstanceID);
      });
      fieldsAvailableQueue = _.difference(fieldsAvailableQueue, fields);

      var initContextualLink = _.once(function () {
        var $links = $(contextualLink.el).find('.contextual-links');
        var contextualLinkView = new Drupal.quickedit.ContextualLinkView($.extend({
          el: $('<li class="quickedit"><a href="" role="button" aria-pressed="false"></a></li>').prependTo($links),
          model: entityModel,
          appModel: Drupal.quickedit.app.model
        }, options));
        entityModel.set('contextualLinkView', contextualLinkView);
      });

      loadMissingEditors(initContextualLink);

      return true;
    }

    if (allMetadataExists(fieldIDs)) {
      return true;
    }

    return false;
  }

  function extractEntityID(fieldID) {
    return fieldID.split('/').slice(0, 2).join('/');
  }

  function processField(fieldElement) {
    var metadata = Drupal.quickedit.metadata;
    var fieldID = fieldElement.getAttribute('data-quickedit-field-id');
    var entityID = extractEntityID(fieldID);

    var entityElementSelector = '[data-quickedit-entity-id="' + entityID + '"]';
    var $entityElement = $(entityElementSelector);

    if (!$entityElement.length) {
      throw new Error('Quick Edit could not associate the rendered entity field markup (with [data-quickedit-field-id="' + fieldID + '"]) with the corresponding rendered entity markup: no parent DOM node found with [data-quickedit-entity-id="' + entityID + '"]. This is typically caused by the theme\'s template for this entity type forgetting to print the attributes.');
    }
    var entityElement = $(fieldElement).closest($entityElement);

    if (entityElement.length === 0) {
      var $lowestCommonParent = $entityElement.parents().has(fieldElement).first();
      entityElement = $lowestCommonParent.find($entityElement);
    }
    var entityInstanceID = entityElement.get(0).getAttribute('data-quickedit-entity-instance-id');

    if (!metadata.has(fieldID)) {
      fieldsMetadataQueue.push({
        el: fieldElement,
        fieldID: fieldID,
        entityID: entityID,
        entityInstanceID: entityInstanceID
      });
      return;
    }

    if (metadata.get(fieldID, 'access') !== true) {
      return;
    }

    if (Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    })) {
      initializeField(fieldElement, fieldID, entityID, entityInstanceID);
    } else {
        fieldsAvailableQueue.push({
          el: fieldElement,
          fieldID: fieldID,
          entityID: entityID,
          entityInstanceID: entityInstanceID
        });
      }
  }

  function deleteContainedModelsAndQueues($context) {
    $context.find('[data-quickedit-entity-id]').addBack('[data-quickedit-entity-id]').each(function (index, entityElement) {
      var entityModel = Drupal.quickedit.collections.entities.findWhere({
        el: entityElement
      });
      if (entityModel) {
        var contextualLinkView = entityModel.get('contextualLinkView');
        contextualLinkView.undelegateEvents();
        contextualLinkView.remove();

        entityModel.get('entityDecorationView').remove();

        entityModel.destroy();
      }

      function hasOtherRegion(contextualLink) {
        return contextualLink.region !== entityElement;
      }

      contextualLinksQueue = _.filter(contextualLinksQueue, hasOtherRegion);
    });

    $context.find('[data-quickedit-field-id]').addBack('[data-quickedit-field-id]').each(function (index, fieldElement) {
      Drupal.quickedit.collections.fields.chain().filter(function (fieldModel) {
        return fieldModel.get('el') === fieldElement;
      }).invoke('destroy');

      function hasOtherFieldElement(field) {
        return field.el !== fieldElement;
      }

      fieldsMetadataQueue = _.filter(fieldsMetadataQueue, hasOtherFieldElement);
      fieldsAvailableQueue = _.filter(fieldsAvailableQueue, hasOtherFieldElement);
    });
  }

  function fetchMissingMetadata(callback) {
    if (fieldsMetadataQueue.length) {
      var fieldIDs = _.pluck(fieldsMetadataQueue, 'fieldID');
      var fieldElementsWithoutMetadata = _.pluck(fieldsMetadataQueue, 'el');
      var entityIDs = _.uniq(_.pluck(fieldsMetadataQueue, 'entityID'), true);

      entityIDs = _.difference(entityIDs, Drupal.quickedit.metadata.intersection(entityIDs));
      fieldsMetadataQueue = [];

      $.ajax({
        url: Drupal.url('quickedit/metadata'),
        type: 'POST',
        data: {
          'fields[]': fieldIDs,
          'entities[]': entityIDs
        },
        dataType: 'json',
        success: function success(results) {
          _.each(results, function (fieldMetadata, fieldID) {
            Drupal.quickedit.metadata.add(fieldID, fieldMetadata);
          });

          callback(fieldElementsWithoutMetadata);
        }
      });
    }
  }

  Drupal.behaviors.quickedit = {
    attach: function attach(context) {
      $('body').once('quickedit-init').each(initQuickEdit);

      var $fields = $(context).find('[data-quickedit-field-id]').once('quickedit');
      if ($fields.length === 0) {
        return;
      }

      $(context).find('[data-quickedit-entity-id]').once('quickedit').each(function (index, entityElement) {
        processEntity(entityElement);
      });

      $fields.each(function (index, fieldElement) {
        processField(fieldElement);
      });

      contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
        return !initializeEntityContextualLink(contextualLink);
      });

      fetchMissingMetadata(function (fieldElementsWithFreshMetadata) {
        _.each(fieldElementsWithFreshMetadata, processField);

        contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
          return !initializeEntityContextualLink(contextualLink);
        });
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        deleteContainedModelsAndQueues($(context));
      }
    }
  };

  Drupal.quickedit = {
    app: null,

    collections: {
      entities: null,

      fields: null
    },

    editors: {},

    metadata: {
      has: function has(fieldID) {
        return storage.getItem(this._prefixFieldID(fieldID)) !== null;
      },
      add: function add(fieldID, metadata) {
        storage.setItem(this._prefixFieldID(fieldID), JSON.stringify(metadata));
      },
      get: function get(fieldID, key) {
        var metadata = JSON.parse(storage.getItem(this._prefixFieldID(fieldID)));
        return typeof key === 'undefined' ? metadata : metadata[key];
      },
      _prefixFieldID: function _prefixFieldID(fieldID) {
        return 'Drupal.quickedit.metadata.' + fieldID;
      },
      _unprefixFieldID: function _unprefixFieldID(fieldID) {
        return fieldID.substring(26);
      },
      intersection: function intersection(fieldIDs) {
        var prefixedFieldIDs = _.map(fieldIDs, this._prefixFieldID);
        var intersection = _.intersection(prefixedFieldIDs, _.keys(sessionStorage));
        return _.map(intersection, this._unprefixFieldID);
      }
    }
  };

  var permissionsHashKey = Drupal.quickedit.metadata._prefixFieldID('permissionsHash');
  var permissionsHashValue = storage.getItem(permissionsHashKey);
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (permissionsHashValue !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 26) === 'Drupal.quickedit.metadata.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem(permissionsHashKey, permissionsHash);
  }

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    if (data.$region.is('[data-quickedit-entity-id]')) {
      if (!data.$region.is('[data-quickedit-entity-instance-id]')) {
        data.$region.once('quickedit');
        processEntity(data.$region.get(0));
      }
      var contextualLink = {
        entityID: data.$region.attr('data-quickedit-entity-id'),
        entityInstanceID: data.$region.attr('data-quickedit-entity-instance-id'),
        el: data.$el[0],
        region: data.$region[0]
      };

      if (!initializeEntityContextualLink(contextualLink)) {
        contextualLinksQueue.push(contextualLink);
      }
    }
  });
})(jQuery, _, Backbone, Drupal, drupalSettings, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.quickedit.util = Drupal.quickedit.util || {};

  Drupal.quickedit.util.constants = {};

  Drupal.quickedit.util.constants.transitionEnd = 'transitionEnd.quickedit webkitTransitionEnd.quickedit transitionend.quickedit msTransitionEnd.quickedit oTransitionEnd.quickedit';

  Drupal.quickedit.util.buildUrl = function (id, urlFormat) {
    var parts = id.split('/');
    return Drupal.formatString(decodeURIComponent(urlFormat), {
      '!entity_type': parts[0],
      '!id': parts[1],
      '!field_name': parts[2],
      '!langcode': parts[3],
      '!view_mode': parts[4]
    });
  };

  Drupal.quickedit.util.networkErrorModal = function (title, message) {
    var $message = $('<div>' + message + '</div>');
    var networkErrorModal = Drupal.dialog($message.get(0), {
      title: title,
      dialogClass: 'quickedit-network-error',
      buttons: [{
        text: Drupal.t('OK'),
        click: function click() {
          networkErrorModal.close();
        },

        primary: true
      }],
      create: function create() {
        $(this).parent().find('.ui-dialog-titlebar-close').remove();
      },
      close: function close(event) {
        $(event.target).remove();
      }
    });
    networkErrorModal.showModal();
  };

  Drupal.quickedit.util.form = {
    load: function load(options, callback) {
      var fieldID = options.fieldID;

      var formLoaderAjax = Drupal.ajax({
        url: Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode')),
        submit: {
          nocssjs: options.nocssjs,
          reset: options.reset
        },
        error: function error(xhr, url) {
          var fieldLabel = Drupal.quickedit.metadata.get(fieldID, 'label');
          var message = Drupal.t('Could not load the form for <q>@field-label</q>, either due to a website problem or a network connection problem.<br>Please try again.', { '@field-label': fieldLabel });
          Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);

          var fieldModel = Drupal.quickedit.app.model.get('activeField');
          fieldModel.set('state', 'candidate');
        }
      });

      formLoaderAjax.commands.quickeditFieldForm = function (ajax, response, status) {
        callback(response.data, ajax);
        Drupal.ajax.instances[this.instanceIndex] = null;
      };

      formLoaderAjax.execute();
    },
    ajaxifySaving: function ajaxifySaving(options, $submit) {
      var settings = {
        url: $submit.closest('form').attr('action'),
        setClick: true,
        event: 'click.quickedit',
        progress: false,
        submit: {
          nocssjs: options.nocssjs,
          other_view_modes: options.other_view_modes
        },

        success: function success(response, status) {
          var _this = this;

          Object.keys(response || {}).forEach(function (i) {
            if (response[i].command && _this.commands[response[i].command]) {
              _this.commands[response[i].command](_this, response[i], status);
            }
          });
        },

        base: $submit.attr('id'),
        element: $submit[0]
      };

      return Drupal.ajax(settings);
    },
    unajaxifySaving: function unajaxifySaving(ajax) {
      $(ajax.element).off('click.quickedit');
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (Drupal, Backbone) {
  Drupal.quickedit.BaseModel = Backbone.Model.extend({
    initialize: function initialize(options) {
      this.__initialized = true;
      return Backbone.Model.prototype.initialize.call(this, options);
    },
    set: function set(key, val, options) {
      if (this.__initialized) {
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
          key.validate = true;
        } else {
          if (!options) {
            options = {};
          }
          options.validate = true;
        }
      }
      return Backbone.Model.prototype.set.call(this, key, val, options);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.AppModel = Backbone.Model.extend({
    defaults: {
      highlightedField: null,

      activeField: null,

      activeModal: null
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, $, Backbone, Drupal) {
  Drupal.quickedit.EntityModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,

      entityID: null,

      entityInstanceID: null,

      id: null,

      label: null,

      fields: null,

      isActive: false,

      inTempStore: false,

      isDirty: false,

      isCommitting: false,

      state: 'closed',

      fieldsInTempStore: [],

      reload: false
    },

    initialize: function initialize() {
      this.set('fields', new Drupal.quickedit.FieldCollection());

      this.listenTo(this, 'change:state', this.stateChange);

      this.listenTo(this.get('fields'), 'change:state', this.fieldStateChange);

      Drupal.quickedit.BaseModel.prototype.initialize.call(this);
    },
    stateChange: function stateChange(entityModel, state, options) {
      var to = state;
      switch (to) {
        case 'closed':
          this.set({
            isActive: false,
            inTempStore: false,
            isDirty: false
          });
          break;

        case 'launching':
          break;

        case 'opening':
          entityModel.get('fields').each(function (fieldModel) {
            fieldModel.set('state', 'candidate', options);
          });
          break;

        case 'opened':
          this.set('isActive', true);
          break;

        case 'committing':
          {
            var fields = this.get('fields');

            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['active']).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'candidate');
            });

            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], Drupal.quickedit.app.changedFieldStates).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'saving');
            });
            break;
          }

        case 'deactivating':
          {
            var changedFields = this.get('fields').filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['changed', 'invalid']).length;
            });

            if ((changedFields.length || this.get('fieldsInTempStore').length) && !options.saved && !options.confirmed) {
              this.set('state', 'opened', { confirming: true });

              _.defer(function () {
                Drupal.quickedit.app.confirmEntityDeactivation(entityModel);
              });
            } else {
              var invalidFields = this.get('fields').filter(function (fieldModel) {
                return _.intersection([fieldModel.get('state')], ['invalid']).length;
              });

              entityModel.set('reload', this.get('fieldsInTempStore').length || invalidFields.length);

              entityModel.get('fields').each(function (fieldModel) {
                if (_.intersection([fieldModel.get('state')], ['candidate', 'highlighted']).length) {
                  fieldModel.trigger('change:state', fieldModel, fieldModel.get('state'), options);
                } else {
                  fieldModel.set('state', 'candidate', options);
                }
              });
            }
            break;
          }

        case 'closing':
          options.reason = 'stop';
          this.get('fields').each(function (fieldModel) {
            fieldModel.set({
              inTempStore: false,
              state: 'inactive'
            }, options);
          });
          break;
      }
    },
    _updateInTempStoreAttributes: function _updateInTempStoreAttributes(entityModel, fieldModel) {
      var current = fieldModel.get('state');
      var previous = fieldModel.previous('state');
      var fieldsInTempStore = entityModel.get('fieldsInTempStore');

      if (current === 'saved') {
        entityModel.set('inTempStore', true);

        fieldModel.set('inTempStore', true);

        fieldsInTempStore.push(fieldModel.get('fieldID'));
        fieldsInTempStore = _.uniq(fieldsInTempStore);
        entityModel.set('fieldsInTempStore', fieldsInTempStore);
      } else if (current === 'candidate' && previous === 'inactive') {
          fieldModel.set('inTempStore', _.intersection([fieldModel.get('fieldID')], fieldsInTempStore).length > 0);
        }
    },
    fieldStateChange: function fieldStateChange(fieldModel, state) {
      var entityModel = this;
      var fieldState = state;

      switch (this.get('state')) {
        case 'closed':
        case 'launching':
          break;

        case 'opening':
          _.defer(function () {
            entityModel.set('state', 'opened', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;

        case 'opened':
          if (fieldState === 'changed') {
            entityModel.set('isDirty', true);
          } else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }
          break;

        case 'committing':
          {
            if (fieldState === 'invalid') {
              _.defer(function () {
                entityModel.set('state', 'opened', { reason: 'invalid' });
              });
            } else {
              this._updateInTempStoreAttributes(entityModel, fieldModel);
            }

            var options = {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            };
            if (entityModel.set('isCommitting', true, options)) {
              entityModel.save({
                success: function success() {
                  entityModel.set({
                    state: 'deactivating',
                    isCommitting: false
                  }, { saved: true });
                },
                error: function error() {
                  entityModel.set('isCommitting', false);

                  entityModel.set('state', 'opened', {
                    reason: 'networkerror'
                  });

                  var message = Drupal.t('Your changes to <q>@entity-title</q> could not be saved, either due to a website problem or a network connection problem.<br>Please try again.', { '@entity-title': entityModel.get('label') });
                  Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
                }
              });
            }
            break;
          }

        case 'deactivating':
          _.defer(function () {
            entityModel.set('state', 'closing', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;

        case 'closing':
          _.defer(function () {
            entityModel.set('state', 'closed', {
              'accept-field-states': ['inactive']
            });
          });
          break;
      }
    },
    save: function save(options) {
      var entityModel = this;

      var entitySaverAjax = Drupal.ajax({
        url: Drupal.url('quickedit/entity/' + entityModel.get('entityID')),
        error: function error() {
          options.error.call(entityModel);
        }
      });

      entitySaverAjax.commands.quickeditEntitySaved = function (ajax, response, status) {
        entityModel.get('fields').each(function (fieldModel) {
          fieldModel.set('inTempStore', false);
        });
        entityModel.set('inTempStore', false);
        entityModel.set('fieldsInTempStore', []);

        if (options.success) {
          options.success.call(entityModel);
        }
      };

      entitySaverAjax.execute();
    },
    validate: function validate(attrs, options) {
      var acceptedFieldStates = options['accept-field-states'] || [];

      var currentState = this.get('state');
      var nextState = attrs.state;
      if (currentState !== nextState) {
        if (_.indexOf(this.constructor.states, nextState) === -1) {
          return '"' + nextState + '" is an invalid state';
        }

        if (!this._acceptStateChange(currentState, nextState, options)) {
          return 'state change not accepted';
        }

        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'state change not accepted because fields are not in acceptable state';
        }
      }

      var currentIsCommitting = this.get('isCommitting');
      var nextIsCommitting = attrs.isCommitting;
      if (currentIsCommitting === false && nextIsCommitting === true) {
        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'isCommitting change not accepted because fields are not in acceptable state';
        }
      } else if (currentIsCommitting === true && nextIsCommitting === true) {
        return 'isCommitting is a mutex, hence only changes are allowed';
      }
    },
    _acceptStateChange: function _acceptStateChange(from, to, context) {
      var accept = true;

      if (!this.constructor.followsStateSequence(from, to)) {
        accept = false;

        if (from === 'closing' && to === 'closed') {
          accept = true;
        } else if (from === 'committing' && to === 'opened' && context.reason && (context.reason === 'invalid' || context.reason === 'networkerror')) {
            accept = true;
          } else if (from === 'deactivating' && to === 'opened' && context.confirming) {
              accept = true;
            } else if (from === 'opened' && to === 'deactivating' && context.confirmed) {
                accept = true;
              }
      }

      return accept;
    },
    _fieldsHaveAcceptableStates: function _fieldsHaveAcceptableStates(acceptedFieldStates) {
      var accept = true;

      if (acceptedFieldStates.length > 0) {
        var fieldStates = this.get('fields').pluck('state') || [];

        if (_.difference(fieldStates, acceptedFieldStates).length) {
          accept = false;
        }
      }

      return accept;
    },
    destroy: function destroy(options) {
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);

      this.stopListening();

      this.get('fields').reset();
    },
    sync: function sync() {}
  }, {
    states: ['closed', 'launching', 'opening', 'opened', 'committing', 'deactivating', 'closing'],

    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });

  Drupal.quickedit.EntityCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.EntityModel
  });
})(_, jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, Backbone, Drupal) {
  Drupal.quickedit.FieldModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,

      fieldID: null,

      id: null,

      entity: null,

      metadata: null,

      acceptStateChange: null,

      logicalFieldID: null,

      state: 'inactive',

      isChanged: false,

      inTempStore: false,

      html: null,

      htmlForOtherViewModes: null
    },

    initialize: function initialize(options) {
      this.set('html', options.el.outerHTML);

      this.get('entity').get('fields').add(this);

      this.set('logicalFieldID', this.get('fieldID').split('/').slice(0, 4).join('/'));

      Drupal.quickedit.BaseModel.prototype.initialize.call(this, options);
    },
    destroy: function destroy(options) {
      if (this.get('state') !== 'inactive') {
        throw new Error('FieldModel cannot be destroyed if it is not inactive state.');
      }
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
    },
    sync: function sync() {},
    validate: function validate(attrs, options) {
      var current = this.get('state');
      var next = attrs.state;
      if (current !== next) {
        if (_.indexOf(this.constructor.states, next) === -1) {
          return '"' + next + '" is an invalid state';
        }

        if (!this.get('acceptStateChange')(current, next, options, this)) {
          return 'state change not accepted';
        }
      }
    },
    getEntityID: function getEntityID() {
      return this.get('fieldID').split('/').slice(0, 2).join('/');
    },
    getViewMode: function getViewMode() {
      return this.get('fieldID').split('/').pop();
    },
    findOtherViewModes: function findOtherViewModes() {
      var currentField = this;
      var otherViewModes = [];
      Drupal.quickedit.collections.fields.where({ logicalFieldID: currentField.get('logicalFieldID') }).forEach(function (field) {
        if (field !== currentField && field.get('fieldID') !== currentField.get('fieldID')) {
          otherViewModes.push(field.getViewMode());
        }
      });
      return otherViewModes;
    }
  }, {
    states: ['inactive', 'candidate', 'highlighted', 'activating', 'active', 'changed', 'saving', 'saved', 'invalid'],

    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });

  Drupal.quickedit.FieldCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.FieldModel
  });
})(_, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.EditorModel = Backbone.Model.extend({
    defaults: {
      originalValue: null,

      currentValue: null,

      validationErrors: null
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  var reload = false;

  Drupal.quickedit.AppView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.activeFieldStates = ['activating', 'active'];
      this.singleFieldStates = ['highlighted', 'activating', 'active'];
      this.changedFieldStates = ['changed', 'saving', 'saved', 'invalid'];
      this.readyFieldStates = ['candidate', 'highlighted'];

      this.listenTo(options.entitiesCollection, 'change:state', this.appStateChange);
      this.listenTo(options.entitiesCollection, 'change:isActive', this.enforceSingleActiveEntity);

      this.listenTo(options.fieldsCollection, 'change:state', this.editorStateChange);

      this.listenTo(options.fieldsCollection, 'change:html', this.renderUpdatedField);
      this.listenTo(options.fieldsCollection, 'change:html', this.propagateUpdatedField);

      this.listenTo(options.fieldsCollection, 'add', this.rerenderedFieldToCandidate);

      this.listenTo(options.fieldsCollection, 'destroy', this.teardownEditor);
    },
    appStateChange: function appStateChange(entityModel, state) {
      var app = this;
      var entityToolbarView = void 0;
      switch (state) {
        case 'launching':
          reload = false;

          entityToolbarView = new Drupal.quickedit.EntityToolbarView({
            model: entityModel,
            appModel: this.model
          });
          entityModel.toolbarView = entityToolbarView;

          entityModel.get('fields').each(function (fieldModel) {
            app.setupEditor(fieldModel);
          });

          _.defer(function () {
            entityModel.set('state', 'opening');
          });
          break;

        case 'closed':
          entityToolbarView = entityModel.toolbarView;

          entityModel.get('fields').each(function (fieldModel) {
            app.teardownEditor(fieldModel);
          });

          if (entityToolbarView) {
            entityToolbarView.remove();
            delete entityModel.toolbarView;
          }

          if (reload) {
            reload = false;
            window.location.reload();
          }
          break;
      }
    },
    acceptEditorStateChange: function acceptEditorStateChange(from, to, context, fieldModel) {
      var accept = true;

      if (context && (context.reason === 'stop' || context.reason === 'rerender')) {
        if (from === 'candidate' && to === 'inactive') {
          accept = true;
        }
      } else {
          if (!Drupal.quickedit.FieldModel.followsStateSequence(from, to)) {
            accept = false;

            if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
              accept = true;
            } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                accept = true;
              } else if (from === 'highlighted' && to === 'candidate') {
                  accept = true;
                } else if (from === 'saved' && to === 'candidate') {
                    accept = true;
                  } else if (from === 'invalid' && to === 'saving') {
                      accept = true;
                    } else if (from === 'invalid' && to === 'activating') {
                        accept = true;
                      }
          }

          if (accept) {
            var activeField = void 0;
            var activeFieldState = void 0;

            if ((this.readyFieldStates.indexOf(from) !== -1 || from === 'invalid') && this.activeFieldStates.indexOf(to) !== -1) {
              activeField = this.model.get('activeField');
              if (activeField && activeField !== fieldModel) {
                activeFieldState = activeField.get('state');

                if (this.activeFieldStates.indexOf(activeFieldState) !== -1) {
                  activeField.set('state', 'candidate');
                } else if (activeFieldState === 'changed' || activeFieldState === 'invalid') {
                  activeField.set('state', 'saving');
                }

                if (from === 'invalid') {
                  this.model.set('activeField', fieldModel);
                  accept = false;
                }
              }
            } else if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
                if (context && context.reason === 'mouseleave') {
                  accept = false;
                }
              } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                  if (context && context.reason === 'mouseleave') {
                    accept = false;
                  } else if (context && context.confirmed) {
                      accept = true;
                    }
                }
          }
        }

      return accept;
    },
    setupEditor: function setupEditor(fieldModel) {
      var entityModel = fieldModel.get('entity');
      var entityToolbarView = entityModel.toolbarView;

      var fieldToolbarRoot = entityToolbarView.getToolbarRoot();

      var editorName = fieldModel.get('metadata').editor;
      var editorModel = new Drupal.quickedit.EditorModel();
      var editorView = new Drupal.quickedit.editors[editorName]({
        el: $(fieldModel.get('el')),
        model: editorModel,
        fieldModel: fieldModel
      });

      var toolbarView = new Drupal.quickedit.FieldToolbarView({
        el: fieldToolbarRoot,
        model: fieldModel,
        $editedElement: $(editorView.getEditedElement()),
        editorView: editorView,
        entityModel: entityModel
      });

      var decorationView = new Drupal.quickedit.FieldDecorationView({
        el: $(editorView.getEditedElement()),
        model: fieldModel,
        editorView: editorView
      });

      fieldModel.editorView = editorView;
      fieldModel.toolbarView = toolbarView;
      fieldModel.decorationView = decorationView;
    },
    teardownEditor: function teardownEditor(fieldModel) {
      if (typeof fieldModel.editorView === 'undefined') {
        return;
      }

      fieldModel.toolbarView.remove();
      delete fieldModel.toolbarView;

      fieldModel.decorationView.remove();
      delete fieldModel.decorationView;

      fieldModel.editorView.remove();
      delete fieldModel.editorView;
    },
    confirmEntityDeactivation: function confirmEntityDeactivation(entityModel) {
      var that = this;
      var discardDialog = void 0;

      function closeDiscardDialog(action) {
        discardDialog.close(action);

        that.model.set('activeModal', null);

        if (action === 'save') {
          entityModel.set('state', 'committing', { confirmed: true });
        } else {
          entityModel.set('state', 'deactivating', { confirmed: true });

          if (entityModel.get('reload')) {
            reload = true;
            entityModel.set('reload', false);
          }
        }
      }

      if (!this.model.get('activeModal')) {
        var $unsavedChanges = $('<div>' + Drupal.t('You have unsaved changes') + '</div>');
        discardDialog = Drupal.dialog($unsavedChanges.get(0), {
          title: Drupal.t('Discard changes?'),
          dialogClass: 'quickedit-discard-modal',
          resizable: false,
          buttons: [{
            text: Drupal.t('Save'),
            click: function click() {
              closeDiscardDialog('save');
            },

            primary: true
          }, {
            text: Drupal.t('Discard changes'),
            click: function click() {
              closeDiscardDialog('discard');
            }
          }],

          closeOnEscape: false,
          create: function create() {
            $(this).parent().find('.ui-dialog-titlebar-close').remove();
          },

          beforeClose: false,
          close: function close(event) {
            $(event.target).remove();
          }
        });
        this.model.set('activeModal', discardDialog);

        discardDialog.showModal();
      }
    },
    editorStateChange: function editorStateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      if (_.indexOf(this.singleFieldStates, to) !== -1 && this.model.get('highlightedField') !== fieldModel) {
        this.model.set('highlightedField', fieldModel);
      } else if (this.model.get('highlightedField') === fieldModel && to === 'candidate') {
        this.model.set('highlightedField', null);
      }

      if (_.indexOf(this.activeFieldStates, to) !== -1 && this.model.get('activeField') !== fieldModel) {
        this.model.set('activeField', fieldModel);
      } else if (this.model.get('activeField') === fieldModel && to === 'candidate') {
        if (from === 'changed' || from === 'invalid') {
          fieldModel.editorView.revert();
        }
        this.model.set('activeField', null);
      }
    },
    renderUpdatedField: function renderUpdatedField(fieldModel, html, options) {
      var $fieldWrapper = $(fieldModel.get('el'));
      var $context = $fieldWrapper.parent();

      var renderField = function renderField() {
        fieldModel.destroy();

        $fieldWrapper.replaceWith(html);

        Drupal.attachBehaviors($context.get(0));
      };

      if (!options.propagation) {
        _.defer(function () {
          fieldModel.set('state', 'candidate');

          _.defer(function () {
            fieldModel.set('state', 'inactive', { reason: 'rerender' });

            renderField();
          });
        });
      } else {
        renderField();
      }
    },
    propagateUpdatedField: function propagateUpdatedField(updatedField, html, options) {
      if (options.propagation) {
        return;
      }

      var htmlForOtherViewModes = updatedField.get('htmlForOtherViewModes');
      Drupal.quickedit.collections.fields.where({ logicalFieldID: updatedField.get('logicalFieldID') }).forEach(function (field) {
        if (field === updatedField) {} else if (field.getViewMode() === updatedField.getViewMode()) {
            field.set('html', updatedField.get('html'));
          } else if (field.getViewMode() in htmlForOtherViewModes) {
              field.set('html', htmlForOtherViewModes[field.getViewMode()], {
                propagation: true
              });
            }
      });
    },
    rerenderedFieldToCandidate: function rerenderedFieldToCandidate(fieldModel) {
      var activeEntity = Drupal.quickedit.collections.entities.findWhere({
        isActive: true
      });

      if (!activeEntity) {
        return;
      }

      if (fieldModel.get('entity') === activeEntity) {
        this.setupEditor(fieldModel);
        fieldModel.set('state', 'candidate');
      }
    },
    enforceSingleActiveEntity: function enforceSingleActiveEntity(changedEntityModel) {
      if (changedEntityModel.get('isActive') === false) {
        return;
      }

      changedEntityModel.collection.chain().filter(function (entityModel) {
        return entityModel.get('isActive') === true && entityModel !== changedEntityModel;
      }).each(function (entityModel) {
        entityModel.set('state', 'deactivating');
      });
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.FieldDecorationView = Backbone.View.extend({
    _widthAttributeIsEmpty: null,

    events: {
      'mouseenter.quickedit': 'onMouseEnter',
      'mouseleave.quickedit': 'onMouseLeave',
      click: 'onClick',
      'tabIn.quickedit': 'onMouseEnter',
      'tabOut.quickedit': 'onMouseLeave'
    },

    initialize: function initialize(options) {
      this.editorView = options.editorView;

      this.listenTo(this.model, 'change:state', this.stateChange);
      this.listenTo(this.model, 'change:isChanged change:inTempStore', this.renderChanged);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          this.undecorate();
          break;

        case 'candidate':
          this.decorate();
          if (from !== 'inactive') {
            this.stopHighlight();
            if (from !== 'highlighted') {
              this.model.set('isChanged', false);
              this.stopEdit();
            }
          }
          this._unpad();
          break;

        case 'highlighted':
          this.startHighlight();
          break;

        case 'activating':
          this.prepareEdit();
          break;

        case 'active':
          if (from !== 'activating') {
            this.prepareEdit();
          }
          if (this.editorView.getQuickEditUISettings().padding) {
            this._pad();
          }
          break;

        case 'changed':
          this.model.set('isChanged', true);
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    renderChanged: function renderChanged() {
      this.$el.toggleClass('quickedit-changed', this.model.get('isChanged') || this.model.get('inTempStore'));
    },
    onMouseEnter: function onMouseEnter(event) {
      var that = this;
      that.model.set('state', 'highlighted');
      event.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(event) {
      var that = this;
      that.model.set('state', 'candidate', { reason: 'mouseleave' });
      event.stopPropagation();
    },
    onClick: function onClick(event) {
      this.model.set('state', 'activating');
      event.preventDefault();
      event.stopPropagation();
    },
    decorate: function decorate() {
      this.$el.addClass('quickedit-candidate quickedit-editable');
    },
    undecorate: function undecorate() {
      this.$el.removeClass('quickedit-candidate quickedit-editable quickedit-highlighted quickedit-editing');
    },
    startHighlight: function startHighlight() {
      var that = this;

      that.$el.addClass('quickedit-highlighted');
    },
    stopHighlight: function stopHighlight() {
      this.$el.removeClass('quickedit-highlighted');
    },
    prepareEdit: function prepareEdit() {
      this.$el.addClass('quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.addClass('quickedit-editor-is-popup');
      }
    },
    stopEdit: function stopEdit() {
      this.$el.removeClass('quickedit-highlighted quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.removeClass('quickedit-editor-is-popup');
      }

      $('.quickedit-candidate').addClass('quickedit-editable');
    },
    _pad: function _pad() {
      if (this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;

      if (this.$el[0].style.width === '') {
        this._widthAttributeIsEmpty = true;
        this.$el.addClass('quickedit-animate-disable-width').css('width', this.$el.width());
      }

      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');

        self.$el.css({
          position: 'relative',
          top: posProp.top - 5 + 'px',
          left: posProp.left - 5 + 'px',
          'padding-top': posProp['padding-top'] + 5 + 'px',
          'padding-left': posProp['padding-left'] + 5 + 'px',
          'padding-right': posProp['padding-right'] + 5 + 'px',
          'padding-bottom': posProp['padding-bottom'] + 5 + 'px',
          'margin-bottom': posProp['margin-bottom'] - 10 + 'px'
        }).data('quickedit-padded', true);
      }, 0);
    },
    _unpad: function _unpad() {
      if (!this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;

      if (this._widthAttributeIsEmpty) {
        this.$el.addClass('quickedit-animate-disable-width').css('width', '');
      }

      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');

        self.$el.css({
          position: 'relative',
          top: posProp.top + 5 + 'px',
          left: posProp.left + 5 + 'px',
          'padding-top': posProp['padding-top'] - 5 + 'px',
          'padding-left': posProp['padding-left'] - 5 + 'px',
          'padding-right': posProp['padding-right'] - 5 + 'px',
          'padding-bottom': posProp['padding-bottom'] - 5 + 'px',
          'margin-bottom': posProp['margin-bottom'] + 10 + 'px'
        });
      }, 0);

      this.$el.removeData('quickedit-padded');
    },
    _getPositionProperties: function _getPositionProperties($e) {
      var p = void 0;
      var r = {};
      var props = ['top', 'left', 'bottom', 'right', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'margin-bottom'];

      var propCount = props.length;
      for (var i = 0; i < propCount; i++) {
        p = props[i];
        r[p] = parseInt(this._replaceBlankPosition($e.css(p)), 10);
      }
      return r;
    },
    _replaceBlankPosition: function _replaceBlankPosition(pos) {
      if (pos === 'auto' || !pos) {
        pos = '0px';
      }
      return pos;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, $, Backbone) {
  Drupal.quickedit.EntityDecorationView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      this.$el.toggleClass('quickedit-entity-active', this.model.get('isActive'));
    },
    remove: function remove() {
      this.setElement(null);
      Backbone.View.prototype.remove.call(this);
    }
  });
})(Drupal, jQuery, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, debounce, Popper) {
  Drupal.quickedit.EntityToolbarView = Backbone.View.extend({
    _fieldToolbarRoot: null,

    events: function events() {
      var map = {
        'click button.action-save': 'onClickSave',
        'click button.action-cancel': 'onClickCancel',
        mouseenter: 'onMouseenter'
      };
      return map;
    },
    initialize: function initialize(options) {
      var that = this;
      this.appModel = options.appModel;
      this.$entity = $(this.model.get('el'));

      this.listenTo(this.model, 'change:isActive change:isDirty change:state', this.render);

      this.listenTo(this.appModel, 'change:highlightedField change:activeField', this.render);

      this.listenTo(this.model.get('fields'), 'change:state', this.fieldStateChange);

      $(window).on('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit', debounce($.proxy(this.windowChangeHandler, this), 150));

      $(document).on('drupalViewportOffsetChange.quickedit', function (event, offsets) {
        if (that.$fence) {
          that.$fence.css(offsets);
        }
      });

      var $toolbar = this.buildToolbarEl();
      this.setElement($toolbar);
      this._fieldToolbarRoot = $toolbar.find('.quickedit-toolbar-field').get(0);

      this.render();
    },
    render: function render() {
      if (this.model.get('isActive')) {
        var $body = $('body');
        if ($body.children('#quickedit-entity-toolbar').length === 0) {
          $body.append(this.$el);
        }

        if ($body.children('#quickedit-toolbar-fence').length === 0) {
          this.$fence = $(Drupal.theme('quickeditEntityToolbarFence')).css(Drupal.displace()).appendTo($body);
        }

        this.label();

        this.show('ops');

        this.position();
      }

      var $button = this.$el.find('.quickedit-button.action-save');
      var isDirty = this.model.get('isDirty');

      switch (this.model.get('state')) {
        case 'opened':
          $button.removeClass('action-saving icon-throbber icon-end').text(Drupal.t('Save')).removeAttr('disabled').attr('aria-hidden', !isDirty);
          break;

        case 'committing':
          $button.addClass('action-saving icon-throbber icon-end').text(Drupal.t('Saving')).attr('disabled', 'disabled');
          break;

        default:
          $button.attr('aria-hidden', true);
          break;
      }

      return this;
    },
    remove: function remove() {
      this.$fence.remove();

      $(window).off('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit');
      $(document).off('drupalViewportOffsetChange.quickedit');

      Backbone.View.prototype.remove.call(this);
    },
    windowChangeHandler: function windowChangeHandler(event) {
      this.position();
    },
    fieldStateChange: function fieldStateChange(model, state) {
      switch (state) {
        case 'active':
          this.render();
          break;

        case 'invalid':
          this.render();
          break;
      }
    },
    position: function position(element) {
      clearTimeout(this.timer);

      var that = this;

      var edge = document.documentElement.dir === 'rtl' ? 'right' : 'left';

      var delay = 0;

      var check = 0;

      var horizontalPadding = 0;
      var of = void 0;
      var activeField = void 0;
      var highlightedField = void 0;

      do {
        switch (check) {
          case 0:
            of = element;
            break;

          case 1:
            activeField = Drupal.quickedit.app.model.get('activeField');
            of = activeField && activeField.editorView && activeField.editorView.$formContainer && activeField.editorView.$formContainer.find('.quickedit-form');
            break;

          case 2:
            of = activeField && activeField.editorView && activeField.editorView.getEditedElement();
            if (activeField && activeField.editorView && activeField.editorView.getQuickEditUISettings().padding) {
              horizontalPadding = 5;
            }
            break;

          case 3:
            highlightedField = Drupal.quickedit.app.model.get('highlightedField');
            of = highlightedField && highlightedField.editorView && highlightedField.editorView.getEditedElement();
            delay = 250;
            break;

          default:
            {
              var fieldModels = this.model.get('fields').models;
              var topMostPosition = 1000000;
              var topMostField = null;

              for (var i = 0; i < fieldModels.length; i++) {
                var pos = fieldModels[i].get('el').getBoundingClientRect().top;
                if (pos < topMostPosition) {
                  topMostPosition = pos;
                  topMostField = fieldModels[i];
                }
              }
              of = topMostField.get('el');
              delay = 50;
              break;
            }
        }

        check++;
      } while (!of);

      function refinePopper(data) {
        var isBelow = data.offsets.popper.top > data.offsets.reference.top;
        var classListMethod = isBelow ? 'add' : 'remove';
        data.instance.popper.classList[classListMethod]('quickedit-toolbar-pointer-top');

        if (that.$entity[0] === data.instance.reference) {
          var $field = that.$entity.find('.quickedit-editable').eq(isBelow ? -1 : 0);
          if ($field.length > 0) {
            data.offsets.popper.top = isBelow ? $field.offset().top + $field.outerHeight(true) : $field.offset().top - $(data.instance.reference).outerHeight(true);
          }
        }

        var fenceTop = that.$fence.offset().top;
        var fenceHeight = that.$fence.height();
        var toolbarHeight = $(data.instance.popper).outerHeight(true);
        if (data.offsets.popper.top < fenceTop) {
          data.offsets.popper.top = fenceTop;
        } else if (data.offsets.popper.top + toolbarHeight > fenceTop + fenceHeight) {
          data.offsets.popper.top = fenceTop + fenceHeight - toolbarHeight;
        }
      }

      function positionToolbar() {
        var popperElement = that.el;
        var referenceElement = of;
        var boundariesElement = that.$fence[0];
        var popperedge = edge === 'left' ? 'start' : 'end';
        if (referenceElement !== undefined) {
          if (!popperElement.classList.contains('js-popper-processed')) {
            that.popper = new Popper(referenceElement, popperElement, {
              placement: 'top-' + popperedge,
              modifiers: {
                flip: {
                  behavior: ['top', 'bottom']
                },
                computeStyle: {
                  gpuAcceleration: false
                },
                preventOverflow: {
                  boundariesElement: boundariesElement
                }
              },
              onCreate: refinePopper,
              onUpdate: refinePopper
            });
            popperElement.classList.add('js-popper-processed');
          } else {
            that.popper.options.placement = 'top-' + popperedge;
            that.popper.reference = referenceElement[0] ? referenceElement[0] : referenceElement;
            that.popper.update();
          }
        }

        that.$el.css({
          'max-width': document.documentElement.clientWidth < 450 ? document.documentElement.clientWidth : 450,

          'min-width': document.documentElement.clientWidth < 240 ? document.documentElement.clientWidth : 240,
          width: '100%'
        });
      }

      this.timer = setTimeout(function () {
        _.defer(positionToolbar);
      }, delay);
    },
    onClickSave: function onClickSave(event) {
      event.stopPropagation();
      event.preventDefault();

      this.model.set('state', 'committing');
    },
    onClickCancel: function onClickCancel(event) {
      event.preventDefault();
      this.model.set('state', 'deactivating');
    },
    onMouseenter: function onMouseenter(event) {
      clearTimeout(this.timer);
    },
    buildToolbarEl: function buildToolbarEl() {
      var $toolbar = $(Drupal.theme('quickeditEntityToolbar', {
        id: 'quickedit-entity-toolbar'
      }));

      $toolbar.find('.quickedit-toolbar-entity').prepend(Drupal.theme('quickeditToolgroup', {
        classes: ['ops'],
        buttons: [{
          label: Drupal.t('Save'),
          type: 'submit',
          classes: 'action-save quickedit-button icon',
          attributes: {
            'aria-hidden': true
          }
        }, {
          label: Drupal.t('Close'),
          classes: 'action-cancel quickedit-button icon icon-close icon-only'
        }]
      }));

      $toolbar.css({
        left: this.$entity.offset().left,
        top: this.$entity.offset().top
      });

      return $toolbar;
    },
    getToolbarRoot: function getToolbarRoot() {
      return this._fieldToolbarRoot;
    },
    label: function label() {
      var label = '';
      var entityLabel = this.model.get('label');

      var activeField = Drupal.quickedit.app.model.get('activeField');
      var activeFieldLabel = activeField && activeField.get('metadata').label;

      var highlightedField = Drupal.quickedit.app.model.get('highlightedField');
      var highlightedFieldLabel = highlightedField && highlightedField.get('metadata').label;

      if (activeFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: activeFieldLabel
        });
      } else if (highlightedFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: highlightedFieldLabel
        });
      } else {
        label = Drupal.checkPlain(entityLabel);
      }

      this.$el.find('.quickedit-toolbar-label').html(label);
    },
    addClass: function addClass(toolgroup, classes) {
      this._find(toolgroup).addClass(classes);
    },
    removeClass: function removeClass(toolgroup, classes) {
      this._find(toolgroup).removeClass(classes);
    },
    _find: function _find(toolgroup) {
      return this.$el.find('.quickedit-toolbar .quickedit-toolgroup.' + toolgroup);
    },
    show: function show(toolgroup) {
      this.$el.removeClass('quickedit-animate-invisible');
    }
  });
})(jQuery, _, Backbone, Drupal, Drupal.debounce, Popper);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.ContextualLinkView = Backbone.View.extend({
    events: function events() {
      function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      }

      return {
        'click a': function clickA(event) {
          event.preventDefault();
          this.model.set('state', 'launching');
        },
        'touchEnd a': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.$el.find('a').text(options.strings.quickEdit);

      this.render();

      this.listenTo(this.model, 'change:isActive', this.render);
    },
    render: function render(entityModel, isActive) {
      this.$el.find('a').attr('aria-pressed', isActive);

      this.$el.closest('.contextual').toggle(!isActive);

      return this;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  Drupal.quickedit.FieldToolbarView = Backbone.View.extend({
    $editedElement: null,

    editorView: null,

    _id: null,

    initialize: function initialize(options) {
      this.$editedElement = options.$editedElement;
      this.editorView = options.editorView;

      this.$root = this.$el;

      this._id = 'quickedit-toolbar-for-' + this.model.id.replace(/[/[\]]/g, '_');

      this.listenTo(this.model, 'change:state', this.stateChange);
    },
    render: function render() {
      this.setElement($(Drupal.theme('quickeditFieldToolbar', {
        id: this._id
      })));

      this.$el.prependTo(this.$root);

      return this;
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from !== 'inactive' && from !== 'highlighted') {
            this.$el.remove();
            this.setElement();
          }
          break;

        case 'highlighted':
          break;

        case 'activating':
          this.render();

          if (this.editorView.getQuickEditUISettings().fullWidthToolbar) {
            this.$el.addClass('quickedit-toolbar-fullwidth');
          }

          if (this.editorView.getQuickEditUISettings().unifiedToolbar) {
            this.insertWYSIWYGToolGroups();
          }
          break;

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    insertWYSIWYGToolGroups: function insertWYSIWYGToolGroups() {
      this.$el.append(Drupal.theme('quickeditToolgroup', {
        id: this.getFloatedWysiwygToolgroupId(),
        classes: ['wysiwyg-floated', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      })).append(Drupal.theme('quickeditToolgroup', {
        id: this.getMainWysiwygToolgroupId(),
        classes: ['wysiwyg-main', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      }));

      this.show('wysiwyg-floated');
      this.show('wysiwyg-main');
    },
    getId: function getId() {
      return 'quickedit-toolbar-for-' + this._id;
    },
    getFloatedWysiwygToolgroupId: function getFloatedWysiwygToolgroupId() {
      return 'quickedit-wysiwyg-floated-toolgroup-for-' + this._id;
    },
    getMainWysiwygToolgroupId: function getMainWysiwygToolgroupId() {
      return 'quickedit-wysiwyg-main-toolgroup-for-' + this._id;
    },
    _find: function _find(toolgroup) {
      return this.$el.find('.quickedit-toolgroup.' + toolgroup);
    },
    show: function show(toolgroup) {
      var $group = this._find(toolgroup);

      $group.on(Drupal.quickedit.util.constants.transitionEnd, function (event) {
        $group.off(Drupal.quickedit.util.constants.transitionEnd);
      });

      window.setTimeout(function () {
        $group.removeClass('quickedit-animate-invisible');
      }, 0);
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.EditorView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.fieldModel = options.fieldModel;
      this.listenTo(this.fieldModel, 'change:state', this.stateChange);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    getEditedElement: function getEditedElement() {
      return this.$el;
    },
    getQuickEditUISettings: function getQuickEditUISettings() {
      return {
        padding: false,
        unifiedToolbar: false,
        fullWidthToolbar: false,
        popup: false
      };
    },
    stateChange: function stateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          break;

        case 'highlighted':
          break;

        case 'activating':
          {
            var loadDependencies = function loadDependencies(callback) {
              callback();
            };
            loadDependencies(function () {
              fieldModel.set('state', 'active');
            });
            break;
          }

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          this.save();
          break;

        case 'saved':
          break;

        case 'invalid':
          this.showValidationErrors();
          break;
      }
    },
    revert: function revert() {},
    save: function save() {
      var fieldModel = this.fieldModel;
      var editorModel = this.model;
      var backstageId = 'quickedit_backstage-' + this.fieldModel.id.replace(/[/[\]_\s]/g, '-');

      function fillAndSubmitForm(value) {
        var $form = $('#' + backstageId).find('form');

        $form.find(':input[type!="hidden"][type!="submit"]:not(select)').not('[name$="\\[summary\\]"]').val(value);

        $form.find('.quickedit-form-submit').trigger('click.quickedit');
      }

      var formOptions = {
        fieldID: this.fieldModel.get('fieldID'),
        $el: this.$el,
        nocssjs: true,
        other_view_modes: fieldModel.findOtherViewModes(),

        reset: !this.fieldModel.get('entity').get('inTempStore')
      };

      var self = this;
      Drupal.quickedit.util.form.load(formOptions, function (form, ajax) {
        var $backstage = $(Drupal.theme('quickeditBackstage', { id: backstageId })).appendTo('body');

        var $form = $(form).appendTo($backstage);

        $form.prop('novalidate', true);
        var $submit = $form.find('.quickedit-form-submit');
        self.formSaveAjax = Drupal.quickedit.util.form.ajaxifySaving(formOptions, $submit);

        function removeHiddenForm() {
          Drupal.quickedit.util.form.unajaxifySaving(self.formSaveAjax);
          delete self.formSaveAjax;
          $backstage.remove();
        }

        self.formSaveAjax.commands.quickeditFieldFormSaved = function (ajax, response, status) {
          removeHiddenForm();

          fieldModel.set('state', 'saved');

          fieldModel.set('htmlForOtherViewModes', response.other_view_modes);

          fieldModel.set('html', response.data);
        };

        self.formSaveAjax.commands.quickeditFieldFormValidationErrors = function (ajax, response, status) {
          removeHiddenForm();
          editorModel.set('validationErrors', response.data);
          fieldModel.set('state', 'invalid');
        };

        self.formSaveAjax.commands.quickeditFieldForm = function () {};

        fillAndSubmitForm(editorModel.get('currentValue'));
      });
    },
    showValidationErrors: function showValidationErrors() {
      var $errors = $('<div class="quickedit-validation-errors"></div>').append(this.model.get('validationErrors'));
      this.getEditedElement().addClass('quickedit-validation-error').after($errors);
    },
    removeValidationErrors: function removeValidationErrors() {
      this.getEditedElement().removeClass('quickedit-validation-error').next('.quickedit-validation-errors').remove();
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.quickeditBackstage = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '"></div>';
    return html;
  };

  Drupal.theme.quickeditEntityToolbar = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" class="quickedit quickedit-toolbar-container clearfix">';
    html += '<i class="quickedit-toolbar-pointer"></i>';
    html += '<div class="quickedit-toolbar-content">';
    html += '<div class="quickedit-toolbar quickedit-toolbar-entity clearfix icon icon-pencil">';
    html += '<div class="quickedit-toolbar-label"></div>';
    html += '</div>';
    html += '<div class="quickedit-toolbar quickedit-toolbar-field clearfix"></div>';
    html += '</div><div class="quickedit-toolbar-lining"></div></div>';
    return html;
  };

  Drupal.theme.quickeditEntityToolbarLabel = function (settings) {
    return '<span class="field">' + Drupal.checkPlain(settings.fieldLabel) + '</span>' + Drupal.checkPlain(settings.entityLabel);
  };

  Drupal.theme.quickeditEntityToolbarFence = function () {
    return '<div id="quickedit-toolbar-fence"></div>';
  };

  Drupal.theme.quickeditFieldToolbar = function (settings) {
    return '<div id="' + settings.id + '"></div>';
  };

  Drupal.theme.quickeditToolgroup = function (settings) {
    var classes = settings.classes || [];
    classes.unshift('quickedit-toolgroup');
    var html = '';
    html += '<div class="' + classes.join(' ') + '"';
    if (settings.id) {
      html += ' id="' + settings.id + '"';
    }
    html += '>';
    html += Drupal.theme('quickeditButtons', { buttons: settings.buttons });
    html += '</div>';
    return html;
  };

  Drupal.theme.quickeditButtons = function (settings) {
    var html = '';

    var _loop = function _loop(i) {
      var button = settings.buttons[i];
      if (!button.hasOwnProperty('type')) {
        button.type = 'button';
      }

      var attributes = [];
      var attrMap = settings.buttons[i].attributes || {};
      Object.keys(attrMap).forEach(function (attr) {
        attributes.push(attr + (attrMap[attr] ? '="' + attrMap[attr] + '"' : ''));
      });
      html += '<button type="' + button.type + '" class="' + button.classes + '" ' + attributes.join(' ') + '>' + button.label + '</button>';
    };

    for (var i = 0; i < settings.buttons.length; i++) {
      _loop(i);
    }
    return html;
  };

  Drupal.theme.quickeditFormContainer = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" class="quickedit-form-container">';
    html += '  <div class="quickedit-form">';
    html += '    <div class="placeholder">';
    html += settings.loadingMsg;
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
  };
})(jQuery, Drupal);;
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){function t(e,t){return t.toUpperCase()}var f=[],h=C.document,c=f.slice,m=f.concat,s=f.push,i=f.indexOf,n={},r=n.toString,g=n.hasOwnProperty,v={},o="1.12.4",E=function(e,t){return new E.fn.init(e,t)},a=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,l=/^-ms-/,u=/-([\da-z])/gi;function d(e){var t=!!e&&"length"in e&&e.length,n=E.type(e);return"function"!==n&&!E.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:o,constructor:E,selector:"",length:0,toArray:function(){return c.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:c.call(this)},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(c.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:f.sort,splice:f.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||E.isFunction(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],a!==(n=i[r])&&(u&&n&&(E.isPlainObject(n)||(t=E.isArray(n)))?(o=t?(t=!1,e&&E.isArray(e)?e:[]):e&&E.isPlainObject(e)?e:{},a[r]=E.extend(u,o,n)):void 0!==n&&(a[r]=n));return a},E.extend({expando:"jQuery"+(o+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===E.type(e)},isArray:Array.isArray||function(e){return"array"===E.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){var t=e&&e.toString();return!E.isArray(e)&&0<=t-parseFloat(t)+1},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==E.type(e)||e.nodeType||E.isWindow(e))return!1;try{if(e.constructor&&!g.call(e,"constructor")&&!g.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(!v.ownFirst)for(t in e)return g.call(e,t);for(t in e);return void 0===t||g.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[r.call(e)]||"object":typeof e},globalEval:function(e){e&&E.trim(e)&&(C.execScript||function(e){C.eval.call(C,e)})(e)},camelCase:function(e){return e.replace(l,"ms-").replace(u,t)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,r=0;if(d(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(a,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?E.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(i)return i.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;)e[i++]=t[r++];if(n!=n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!=a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return m.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;if("string"==typeof t&&(i=e[t],t=e,e=i),E.isFunction(e))return n=c.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(c.call(arguments)))}).guid=e.guid=e.guid||E.guid++,r},now:function(){return+new Date},support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=f[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var p=function(n){function f(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(65536+r):String.fromCharCode(r>>10|55296,1023&r|56320)}function i(){T()}var e,h,x,o,a,m,d,g,w,l,u,T,C,s,E,v,c,p,y,k="sizzle"+ +new Date,b=n.document,N=0,r=0,S=ie(),A=ie(),j=ie(),D=function(e,t){return e===t&&(u=!0),0},L={}.hasOwnProperty,t=[],H=t.pop,q=t.push,M=t.push,F=t.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},_="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",B="\\["+P+"*("+R+")(?:"+P+"*([*^$|!~]?=)"+P+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+P+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+B+")*)|.*)\\)|)",$=new RegExp(P+"+","g"),I=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),z=new RegExp("^"+P+"*,"+P+"*"),X=new RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),U=new RegExp("="+P+"*([^\\]'\"]*?)"+P+"*\\]","g"),V=new RegExp(W),G=new RegExp("^"+R+"$"),J={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:new RegExp("^(?:"+_+")$","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=/'|\\/g,ne=new RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig");try{M.apply(t=F.call(b.childNodes),b.childNodes),t[b.childNodes.length].nodeType}catch(e){M={apply:t.length?function(e,t){q.apply(e,F.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function re(e,t,n,r){var i,o,a,s,l,u,c,f,d=t&&t.ownerDocument,p=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;if(!r&&((t?t.ownerDocument||t:b)!==C&&T(t),t=t||C,E)){if(11!==p&&(u=Z.exec(e)))if(i=u[1]){if(9===p){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(d&&(a=d.getElementById(i))&&y(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return M.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&h.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(i)),n}if(h.qsa&&!j[e+" "]&&(!v||!v.test(e))){if(1!==p)d=t,f=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(te,"\\$&"):t.setAttribute("id",s=k),o=(c=m(e)).length,l=G.test(s)?"#"+s:"[id='"+s+"']";o--;)c[o]=l+" "+de(c[o]);f=c.join(","),d=ee.test(e)&&ce(t.parentNode)||t}if(f)try{return M.apply(n,d.querySelectorAll(f)),n}catch(e){}finally{s===k&&t.removeAttribute("id")}}}return g(e.replace(I,"$1"),t,n,r)}function ie(){var n=[];function r(e,t){return n.push(e+" ")>x.cacheLength&&delete r[n.shift()],r[e+" "]=t}return r}function oe(e){return e[k]=!0,e}function ae(e){var t=C.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function se(e,t){for(var n=e.split("|"),r=n.length;r--;)x.attrHandle[n[r]]=t}function le(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ue(a){return oe(function(o){return o=+o,oe(function(e,t){for(var n,r=a([],e.length,o),i=r.length;i--;)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ce(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in h=re.support={},a=re.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},T=re.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:b;return r!==C&&9===r.nodeType&&r.documentElement&&(s=(C=r).documentElement,E=!a(C),(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",i,!1):n.attachEvent&&n.attachEvent("onunload",i)),h.attributes=ae(function(e){return e.className="i",!e.getAttribute("className")}),h.getElementsByTagName=ae(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),h.getElementsByClassName=K.test(C.getElementsByClassName),h.getById=ae(function(e){return s.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),h.getById?(x.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}},x.filter.ID=function(e){var t=e.replace(ne,f);return function(e){return e.getAttribute("id")===t}}):(delete x.find.ID,x.filter.ID=function(e){var n=e.replace(ne,f);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}}),x.find.TAG=h.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):h.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"!==e)return o;for(;n=o[i++];)1===n.nodeType&&r.push(n);return r},x.find.CLASS=h.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&E)return t.getElementsByClassName(e)},c=[],v=[],(h.qsa=K.test(C.querySelectorAll))&&(ae(function(e){s.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+P+"*(?:value|"+_+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ae(function(e){var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+P+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(h.matchesSelector=K.test(p=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.oMatchesSelector||s.msMatchesSelector))&&ae(function(e){h.disconnectedMatch=p.call(e,"div"),p.call(e,"[s!='']:x"),c.push("!=",W)}),v=v.length&&new RegExp(v.join("|")),c=c.length&&new RegExp(c.join("|")),t=K.test(s.compareDocumentPosition),y=t||K.test(s.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return u=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!h.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===b&&y(b,e)?-1:t===C||t.ownerDocument===b&&y(b,t)?1:l?O(l,e)-O(l,t):0:4&n?-1:1)}:function(e,t){if(e===t)return u=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:l?O(l,e)-O(l,t):0;if(i===o)return le(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?le(a[r],s[r]):a[r]===b?-1:s[r]===b?1:0}),C},re.matches=function(e,t){return re(e,null,null,t)},re.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),t=t.replace(U,"='$1']"),h.matchesSelector&&E&&!j[t+" "]&&(!c||!c.test(t))&&(!v||!v.test(t)))try{var n=p.call(e,t);if(n||h.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<re(t,C,null,[e]).length},re.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},re.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=x.attrHandle[t.toLowerCase()],r=n&&L.call(x.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:h.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},re.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},re.uniqueSort=function(e){var t,n=[],r=0,i=0;if(u=!h.detectDuplicates,l=!h.sortStable&&e.slice(0),e.sort(D),u){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return l=null,e},o=re.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(x=re.selectors={cacheLength:50,createPseudo:oe,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ne,f),e[3]=(e[3]||e[4]||e[5]||"").replace(ne,f),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||re.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&re.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return J.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=m(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ne,f).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=S[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&S(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=re.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,m,g){var v="nth"!==h.slice(0,3),y="last"!==h.slice(-4),b="of-type"===e;return 1===m&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,l,u=v!=y?"nextSibling":"previousSibling",c=e.parentNode,f=b&&e.nodeName.toLowerCase(),d=!n&&!b,p=!1;if(c){if(v){for(;u;){for(a=e;a=a[u];)if(b?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;l=u="only"===h&&!l&&"nextSibling"}return!0}if(l=[y?c.firstChild:c.lastChild],y&&d){for(p=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===N&&r[1])&&r[2],a=s&&c.childNodes[s];a=++s&&a&&a[u]||(p=s=0)||l.pop();)if(1===a.nodeType&&++p&&a===e){i[h]=[N,s,p];break}}else if(d&&(p=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===N&&r[1]),!1===p)for(;(a=++s&&a&&a[u]||(p=s=0)||l.pop())&&((b?a.nodeName.toLowerCase()!==f:1!==a.nodeType)||!++p||(d&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[N,p]),a!==e)););return(p-=g)===m||p%m==0&&0<=p/m}}},PSEUDO:function(e,o){var t,a=x.pseudos[e]||x.setFilters[e.toLowerCase()]||re.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],x.setFilters.hasOwnProperty(e.toLowerCase())?oe(function(e,t){for(var n,r=a(e,o),i=r.length;i--;)e[n=O(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:oe(function(e){var r=[],i=[],s=d(e.replace(I,"$1"));return s[k]?oe(function(e,t,n,r){for(var i,o=s(e,null,r,[]),a=e.length;a--;)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:oe(function(t){return function(e){return 0<re(t,e).length}}),contains:oe(function(t){return t=t.replace(ne,f),function(e){return-1<(e.textContent||e.innerText||o(e)).indexOf(t)}}),lang:oe(function(n){return G.test(n||"")||re.error("unsupported lang: "+n),n=n.replace(ne,f).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===s},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ue(function(){return[0]}),last:ue(function(e,t){return[t-1]}),eq:ue(function(e,t,n){return[n<0?n+t:n]}),even:ue(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ue(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ue(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:ue(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=x.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[e]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(e);for(e in{submit:!0,reset:!0})x.pseudos[e]=function(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}(e);function fe(){}function de(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function pe(s,e,t){var l=e.dir,u=t&&"parentNode"===l,c=r++;return e.first?function(e,t,n){for(;e=e[l];)if(1===e.nodeType||u)return s(e,t,n)}:function(e,t,n){var r,i,o,a=[N,c];if(n){for(;e=e[l];)if((1===e.nodeType||u)&&s(e,t,n))return!0}else for(;e=e[l];)if(1===e.nodeType||u){if((r=(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}))[l])&&r[0]===N&&r[1]===c)return a[2]=r[2];if((i[l]=a)[2]=s(e,t,n))return!0}}}function he(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function me(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),u&&t.push(s)));return a}function ge(p,h,m,g,v,e){return g&&!g[k]&&(g=ge(g)),v&&!v[k]&&(v=ge(v,e)),oe(function(e,t,n,r){var i,o,a,s=[],l=[],u=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)re(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!p||!e&&h?c:me(c,s,p,n,r),d=m?v||(e?p:u||g)?[]:t:f;if(m&&m(f,d,n,r),g)for(i=me(d,l),g(i,[],n,r),o=i.length;o--;)(a=i[o])&&(d[l[o]]=!(f[l[o]]=a));if(e){if(v||p){if(v){for(i=[],o=d.length;o--;)(a=d[o])&&i.push(f[o]=a);v(null,d=[],i,r)}for(o=d.length;o--;)(a=d[o])&&-1<(i=v?O(e,a):s[o])&&(e[i]=!(t[i]=a))}}else d=me(d===t?d.splice(u,d.length):d),v?v(null,t,d,r):M.apply(t,d)})}function ve(g,v){function e(e,t,n,r,i){var o,a,s,l=0,u="0",c=e&&[],f=[],d=w,p=e||b&&x.find.TAG("*",i),h=N+=null==d?1:Math.random()||.1,m=p.length;for(i&&(w=t===C||t||i);u!==m&&null!=(o=p[u]);u++){if(b&&o){for(a=0,t||o.ownerDocument===C||(T(o),n=!E);s=g[a++];)if(s(o,t||C,n)){r.push(o);break}i&&(N=h)}y&&((o=!s&&o)&&l--,e&&c.push(o))}if(l+=u,y&&u!==l){for(a=0;s=v[a++];)s(c,f,t,n);if(e){if(0<l)for(;u--;)c[u]||f[u]||(f[u]=H.call(r));f=me(f)}M.apply(r,f),i&&!e&&0<f.length&&1<l+v.length&&re.uniqueSort(r)}return i&&(N=h,w=d),c}var y=0<v.length,b=0<g.length;return y?oe(e):e}return fe.prototype=x.filters=x.pseudos,x.setFilters=new fe,m=re.tokenize=function(e,t){var n,r,i,o,a,s,l,u=A[e+" "];if(u)return t?0:u.slice(0);for(a=e,s=[],l=x.preFilter;a;){for(o in n&&!(r=z.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(I," ")}),a=a.slice(n.length)),x.filter)!(r=J[o].exec(a))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?re.error(e):A(e,s).slice(0)},d=re.compile=function(e,t){var n,r=[],i=[],o=j[e+" "];if(!o){for(n=(t=t||m(e)).length;n--;)(o=function e(t){for(var i,n,r,o=t.length,a=x.relative[t[0].type],s=a||x.relative[" "],l=a?1:0,u=pe(function(e){return e===i},s,!0),c=pe(function(e){return-1<O(i,e)},s,!0),f=[function(e,t,n){var r=!a&&(n||t!==w)||((i=t).nodeType?u:c)(e,t,n);return i=null,r}];l<o;l++)if(n=x.relative[t[l].type])f=[pe(he(f),n)];else{if((n=x.filter[t[l].type].apply(null,t[l].matches))[k]){for(r=++l;r<o&&!x.relative[t[r].type];r++);return ge(1<l&&he(f),1<l&&de(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace(I,"$1"),n,l<r&&e(t.slice(l,r)),r<o&&e(t=t.slice(r)),r<o&&de(t))}f.push(n)}return he(f)}(t[n]))[k]?r.push(o):i.push(o);(o=j(e,ve(i,r))).selector=e}return o},g=re.select=function(e,t,n,r){var i,o,a,s,l,u="function"==typeof e&&e,c=!r&&m(e=u.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&h.getById&&9===t.nodeType&&E&&x.relative[o[1].type]){if(!(t=(x.find.ID(a.matches[0].replace(ne,f),t)||[])[0]))return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=J.needsContext.test(e)?0:o.length;i--&&(a=o[i],!x.relative[s=a.type]);)if((l=x.find[s])&&(r=l(a.matches[0].replace(ne,f),ee.test(o[0].type)&&ce(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&de(o)))return M.apply(n,r),n;break}}return(u||d(e,c))(r,t,!E,n,!t||ee.test(e)&&ce(t.parentNode)||t),n},h.sortStable=k.split("").sort(D).join("")===k,h.detectDuplicates=!!u,T(),h.sortDetached=ae(function(e){return 1&e.compareDocumentPosition(C.createElement("div"))}),ae(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||se("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),h.attributes&&ae(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||se("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ae(function(e){return null==e.getAttribute("disabled")})||se(_,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),re}(C);E.find=p,E.expr=p.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=p.uniqueSort,E.text=p.getText,E.isXMLDoc=p.isXML,E.contains=p.contains;function y(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r}function b(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}var x=E.expr.match.needsContext,w=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,T=/^.[^:#\[\.,]*$/;function k(e,n,r){if(E.isFunction(n))return E.grep(e,function(e,t){return!!n.call(e,t,e)!==r});if(n.nodeType)return E.grep(e,function(e){return e===n!==r});if("string"==typeof n){if(T.test(n))return E.filter(n,e,r);n=E.filter(n,e)}return E.grep(e,function(e){return-1<E.inArray(e,n)!==r})}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<i;t++)if(E.contains(r[t],this))return!0}));for(t=0;t<i;t++)E.find(e,r[t],n);return(n=this.pushStack(1<i?E.unique(n):n)).selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(k(this,e||[],!1))},not:function(e){return this.pushStack(k(this,e||[],!0))},is:function(e){return!!k(this,"string"==typeof e&&x.test(e)?E(e):e||[],!1).length}});var N,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||N,"string"!=typeof e)return e.nodeType?(this.context=this[0]=e,this.length=1,this):E.isFunction(e)?void 0!==n.ready?n.ready(e):e(E):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),E.makeArray(e,this));if(!(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:h,!0)),w.test(r[1])&&E.isPlainObject(t))for(r in t)E.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}if((i=h.getElementById(r[2]))&&i.parentNode){if(i.id!==r[2])return N.find(e);this.length=1,this[0]=i}return this.context=h,this.selector=e,this}).prototype=E.fn,N=E(h);var A=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function D(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t,n=E(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(E.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=x.test(e)||"string"!=typeof e?E(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?E.inArray(this[0],E(e)):E.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return y(e,"parentNode")},parentsUntil:function(e,t,n){return y(e,"parentNode",n)},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling")},nextAll:function(e){return y(e,"nextSibling")},prevAll:function(e){return y(e,"previousSibling")},nextUntil:function(e,t,n){return y(e,"nextSibling",n)},prevUntil:function(e,t,n){return y(e,"previousSibling",n)},siblings:function(e){return b((e.parentNode||{}).firstChild,e)},children:function(e){return b(e.firstChild)},contents:function(e){return E.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:E.merge([],e.childNodes)}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(j[r]||(n=E.uniqueSort(n)),A.test(r)&&(n=n.reverse())),this.pushStack(n)}});var L,H,q=/\S+/g;function M(){h.addEventListener?(h.removeEventListener("DOMContentLoaded",F),C.removeEventListener("load",F)):(h.detachEvent("onreadystatechange",F),C.detachEvent("onload",F))}function F(){!h.addEventListener&&"load"!==C.event.type&&"complete"!==h.readyState||(M(),E.ready())}for(H in E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(q)||[],function(e,t){n[t]=!0}),n):E.extend({},r);function i(){for(s=r.once,a=o=!0;u.length;c=-1)for(t=u.shift();++c<l.length;)!1===l[c].apply(t[0],t[1])&&r.stopOnFalse&&(c=l.length,t=!1);r.memory||(t=!1),o=!1,s&&(l=t?[]:"")}var o,t,a,s,l=[],u=[],c=-1,f={add:function(){return l&&(t&&!o&&(c=l.length-1,u.push(t)),function n(e){E.each(e,function(e,t){E.isFunction(t)?r.unique&&f.has(t)||l.push(t):t&&t.length&&"string"!==E.type(t)&&n(t)})}(arguments),t&&!o&&i()),this},remove:function(){return E.each(arguments,function(e,t){for(var n;-1<(n=E.inArray(t,l,n));)l.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<E.inArray(e,l):0<l.length},empty:function(){return l=l&&[],this},disable:function(){return s=u=[],l=t="",this},disabled:function(){return!l},lock:function(){return s=!0,t||f.disable(),this},locked:function(){return!!s},fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),o||i()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!a}};return f},E.extend({Deferred:function(e){var o=[["resolve","done",E.Callbacks("once memory"),"resolved"],["reject","fail",E.Callbacks("once memory"),"rejected"],["notify","progress",E.Callbacks("memory")]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=E.isFunction(i[e])&&i[e];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&E.isFunction(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this===a?r.promise():this,n?[e]:arguments)})}),i=null}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return a.pipe=a.then,E.each(o,function(e,t){var n=t[2],r=t[3];a[t[1]]=n.add,r&&n.add(function(){i=r},o[1^e][2].disable,o[2][2].lock),s[t[0]]=function(){return s[t[0]+"With"](this===s?a:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){function t(t,n,r){return function(e){n[t]=this,r[t]=1<arguments.length?c.call(arguments):e,r===i?u.notifyWith(n,r):--l||u.resolveWith(n,r)}}var i,n,r,o=0,a=c.call(arguments),s=a.length,l=1!==s||e&&E.isFunction(e.promise)?s:0,u=1===l?e:E.Deferred();if(1<s)for(i=new Array(s),n=new Array(s),r=new Array(s);o<s;o++)a[o]&&E.isFunction(a[o].promise)?a[o].promise().progress(t(o,n,i)).done(t(o,r,a)).fail(u.reject):--l;return l||u.resolveWith(r,a),u.promise()}}),E.fn.ready=function(e){return E.ready.promise().done(e),this},E.extend({isReady:!1,readyWait:1,holdReady:function(e){e?E.readyWait++:E.ready(!0)},ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||(L.resolveWith(h,[E]),E.fn.triggerHandler&&(E(h).triggerHandler("ready"),E(h).off("ready")))}}),E.ready.promise=function(e){if(!L)if(L=E.Deferred(),"complete"===h.readyState||"loading"!==h.readyState&&!h.documentElement.doScroll)C.setTimeout(E.ready);else if(h.addEventListener)h.addEventListener("DOMContentLoaded",F),C.addEventListener("load",F);else{h.attachEvent("onreadystatechange",F),C.attachEvent("onload",F);var n=!1;try{n=null==C.frameElement&&h.documentElement}catch(e){}n&&n.doScroll&&!function t(){if(!E.isReady){try{n.doScroll("left")}catch(e){return C.setTimeout(t,50)}M(),E.ready()}}()}return L.promise(e)},E.ready.promise(),E(v))break;v.ownFirst="0"===H,v.inlineBlockNeedsLayout=!1,E(function(){var e,t,n,r=h.getElementsByTagName("body")[0];r&&r.style&&(t=h.createElement("div"),(n=h.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",r.appendChild(n).appendChild(t),void 0!==t.style.zoom&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",v.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(r.style.zoom=1)),r.removeChild(n))}),function(){var e=h.createElement("div");v.deleteExpando=!0;try{delete e.test}catch(e){v.deleteExpando=!1}e=null}();function O(e){var t=E.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)}var _,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,R=/([A-Z])/g;function B(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(R,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:P.test(n)?E.parseJSON(n):n)}catch(e){}E.data(e,t,n)}else n=void 0}return n}function W(e){var t;for(t in e)if(("data"!==t||!E.isEmptyObject(e[t]))&&"toJSON"!==t)return;return 1}function $(e,t,n,r){if(O(e)){var i,o,a=E.expando,s=e.nodeType,l=s?E.cache:e,u=s?e[a]:e[a]&&a;if(u&&l[u]&&(r||l[u].data)||void 0!==n||"string"!=typeof t)return l[u=u||(s?e[a]=f.pop()||E.guid++:a)]||(l[u]=s?{}:{toJSON:E.noop}),"object"!=typeof t&&"function"!=typeof t||(r?l[u]=E.extend(l[u],t):l[u].data=E.extend(l[u].data,t)),o=l[u],r||(o.data||(o.data={}),o=o.data),void 0!==n&&(o[E.camelCase(t)]=n),"string"==typeof t?null==(i=o[t])&&(i=o[E.camelCase(t)]):i=o,i}}function I(e,t,n){if(O(e)){var r,i,o=e.nodeType,a=o?E.cache:e,s=o?e[E.expando]:E.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){i=(t=E.isArray(t)?t.concat(E.map(t,E.camelCase)):t in r||(t=E.camelCase(t))in r?[t]:t.split(" ")).length;for(;i--;)delete r[t[i]];if(n?!W(r):!E.isEmptyObject(r))return}(n||(delete a[s].data,W(a[s])))&&(o?E.cleanData([e],!0):v.deleteExpando||a!=a.window?delete a[s]:a[s]=void 0)}}}E.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?E.cache[e[E.expando]]:e[E.expando])&&!W(e)},data:function(e,t,n){return $(e,t,n)},removeData:function(e,t){return I(e,t)},_data:function(e,t,n){return $(e,t,n,!0)},_removeData:function(e,t){return I(e,t,!0)}}),E.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0!==e)return"object"==typeof e?this.each(function(){E.data(this,e)}):1<arguments.length?this.each(function(){E.data(this,e,t)}):o?B(o,e,E.data(o,e)):void 0;if(this.length&&(i=E.data(o),1===o.nodeType&&!E._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&B(o,r=E.camelCase(r.slice(5)),i[r]);E._data(o,"parsedAttrs",!0)}return i},removeData:function(e){return this.each(function(){E.removeData(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=E._data(e,t),n&&(!r||E.isArray(n)?r=E._data(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return E._data(e,n)||E._data(e,n,{empty:E.Callbacks("once memory").add(function(){E._removeData(e,t+"queue"),E._removeData(e,n)})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){function n(){--i||o.resolveWith(a,[a])}var r,i=1,o=E.Deferred(),a=this,s=this.length;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(r=E._data(a[s],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(n));return n(),o.promise(t)}}),v.shrinkWrapBlocks=function(){return null!=_?_:(_=!1,(t=h.getElementsByTagName("body")[0])&&t.style?(e=h.createElement("div"),(n=h.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(n).appendChild(e),void 0!==e.style.zoom&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(h.createElement("div")).style.width="5px",_=3!==e.offsetWidth),t.removeChild(n),_):void 0);var e,t,n};function z(e,t){return e=t||e,"none"===E.css(e,"display")||!E.contains(e.ownerDocument,e)}var X=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+X+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"];function G(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},l=s(),u=n&&n[3]||(E.cssNumber[t]?"":"px"),c=(E.cssNumber[t]||"px"!==u&&+l)&&U.exec(E.css(e,t));if(c&&c[3]!==u)for(u=u||c[3],n=n||[],c=+l||1;c/=o=o||".5",E.style(e,t,c+u),o!==(o=s()/l)&&1!==o&&--a;);return n&&(c=+c||+l||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=c,r.end=i)),i}var J,Y,Q,K=function(e,t,n,r,i,o,a){var s=0,l=e.length,u=null==n;if("object"===E.type(n))for(s in i=!0,n)K(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,E.isFunction(r)||(a=!0),u&&(t=a?(t.call(e,r),null):(u=t,function(e,t,n){return u.call(E(e),n)})),t))for(;s<l;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):l?t(e[0],n):o},Z=/^(?:checkbox|radio)$/i,ee=/<([\w:-]+)/,te=/^$|\/(?:java|ecma)script/i,ne=/^\s+/,re="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ie(e){var t=re.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}J=h.createElement("div"),Y=h.createDocumentFragment(),Q=h.createElement("input"),J.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",v.leadingWhitespace=3===J.firstChild.nodeType,v.tbody=!J.getElementsByTagName("tbody").length,v.htmlSerialize=!!J.getElementsByTagName("link").length,v.html5Clone="<:nav></:nav>"!==h.createElement("nav").cloneNode(!0).outerHTML,Q.type="checkbox",Q.checked=!0,Y.appendChild(Q),v.appendChecked=Q.checked,J.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!J.cloneNode(!0).lastChild.defaultValue,Y.appendChild(J),(Q=h.createElement("input")).setAttribute("type","radio"),Q.setAttribute("checked","checked"),Q.setAttribute("name","t"),J.appendChild(Q),v.checkClone=J.cloneNode(!0).cloneNode(!0).lastChild.checked,v.noCloneEvent=!!J.addEventListener,J[E.expando]=1,v.attributes=!J.getAttribute(E.expando);var oe={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:v.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};function ae(e,t){var n,r,i=0,o=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||E.nodeName(r,t)?o.push(r):E.merge(o,ae(r,t));return void 0===t||t&&E.nodeName(e,t)?E.merge([e],o):o}function se(e,t){for(var n,r=0;null!=(n=e[r]);r++)E._data(n,"globalEval",!t||E._data(t[r],"globalEval"))}oe.optgroup=oe.option,oe.tbody=oe.tfoot=oe.colgroup=oe.caption=oe.thead,oe.th=oe.td;var le=/<|&#?\w+;/,ue=/<tbody/i;function ce(e){Z.test(e.type)&&(e.defaultChecked=e.checked)}function fe(e,t,n,r,i){for(var o,a,s,l,u,c,f,d=e.length,p=ie(t),h=[],m=0;m<d;m++)if((a=e[m])||0===a)if("object"===E.type(a))E.merge(h,a.nodeType?[a]:a);else if(le.test(a)){for(l=l||p.appendChild(t.createElement("div")),u=(ee.exec(a)||["",""])[1].toLowerCase(),f=oe[u]||oe._default,l.innerHTML=f[1]+E.htmlPrefilter(a)+f[2],o=f[0];o--;)l=l.lastChild;if(!v.leadingWhitespace&&ne.test(a)&&h.push(t.createTextNode(ne.exec(a)[0])),!v.tbody)for(o=(a="table"!==u||ue.test(a)?"<table>"!==f[1]||ue.test(a)?0:l:l.firstChild)&&a.childNodes.length;o--;)E.nodeName(c=a.childNodes[o],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(E.merge(h,l.childNodes),l.textContent="";l.firstChild;)l.removeChild(l.firstChild);l=p.lastChild}else h.push(t.createTextNode(a));for(l&&p.removeChild(l),v.appendChecked||E.grep(ae(h,"input"),ce),m=0;a=h[m++];)if(r&&-1<E.inArray(a,r))i&&i.push(a);else if(s=E.contains(a.ownerDocument,a),l=ae(p.appendChild(a),"script"),s&&se(l),n)for(o=0;a=l[o++];)te.test(a.type||"")&&n.push(a);return l=null,p}!function(){var e,t,n=h.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})t="on"+e,(v[e]=t in C)||(n.setAttribute(t,"t"),v[e]=!1===n.attributes[t].expando);n=null}();var de=/^(?:input|select|textarea)$/i,pe=/^key/,he=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,me=/^(?:focusinfocus|focusoutblur)$/,ge=/^([^.]*)(?:\.(.+)|)/;function ve(){return!0}function ye(){return!1}function be(){try{return h.activeElement}catch(e){}}function xe(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)xe(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ye;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}E.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,u,c,f,d,p,h,m,g=E._data(e);if(g){for(n.handler&&(n=(l=n).handler,i=l.selector),n.guid||(n.guid=E.guid++),(a=g.events)||(a=g.events={}),(c=g.handle)||((c=g.handle=function(e){return void 0===E||e&&E.event.triggered===e.type?void 0:E.event.dispatch.apply(c.elem,arguments)}).elem=e),s=(t=(t||"").match(q)||[""]).length;s--;)p=m=(o=ge.exec(t[s])||[])[1],h=(o[2]||"").split(".").sort(),p&&(u=E.event.special[p]||{},p=(i?u.delegateType:u.bindType)||p,u=E.event.special[p]||{},f=E.extend({type:p,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},l),(d=a[p])||((d=a[p]=[]).delegateCount=0,u.setup&&!1!==u.setup.call(e,r,h,c)||(e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),u.add&&(u.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,f):d.push(f),E.event.global[p]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,d,p,h,m,g=E.hasData(e)&&E._data(e);if(g&&(c=g.events)){for(u=(t=(t||"").match(q)||[""]).length;u--;)if(p=m=(s=ge.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),p){for(f=E.event.special[p]||{},d=c[p=(r?f.delegateType:f.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=d.length;o--;)a=d[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(d.splice(o,1),a.selector&&d.delegateCount--,f.remove&&f.remove.call(e,a));l&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||E.removeEvent(e,p,g.handle),delete c[p])}else for(p in c)E.event.remove(e,p+t[u],n,r,!0);E.isEmptyObject(c)&&(delete g.handle,E._removeData(e,"events"))}},trigger:function(e,t,n,r){var i,o,a,s,l,u,c=[n||h],f=g.call(e,"type")?e.type:e,d=g.call(e,"namespace")?e.namespace.split("."):[],p=l=n=n||h;if(3!==n.nodeType&&8!==n.nodeType&&!me.test(f+E.event.triggered)&&(-1<f.indexOf(".")&&(f=(d=f.split(".")).shift(),d.sort()),o=f.indexOf(":")<0&&"on"+f,(e=e[E.expando]?e:new E.Event(f,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=d.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),s=E.event.special[f]||{},r||!s.trigger||!1!==s.trigger.apply(n,t))){if(!r&&!s.noBubble&&!E.isWindow(n)){for(a=s.delegateType||f,me.test(a+f)||(p=p.parentNode);p;p=p.parentNode)c.push(p),l=p;l===(n.ownerDocument||h)&&c.push(l.defaultView||l.parentWindow||C)}for(u=0;(p=c[u++])&&!e.isPropagationStopped();)e.type=1<u?a:s.bindType||f,(i=(E._data(p,"events")||{})[e.type]&&E._data(p,"handle"))&&i.apply(p,t),(i=o&&p[o])&&i.apply&&O(p)&&(e.result=i.apply(p,t),!1===e.result&&e.preventDefault());if(e.type=f,!r&&!e.isDefaultPrevented()&&(!s._default||!1===s._default.apply(c.pop(),t))&&O(n)&&o&&n[f]&&!E.isWindow(n)){(l=n[o])&&(n[o]=null),E.event.triggered=f;try{n[f]()}catch(e){}E.event.triggered=void 0,l&&(n[o]=l)}return e.result}},dispatch:function(e){e=E.event.fix(e);var t,n,r,i,o,a,s=c.call(arguments),l=(E._data(this,"events")||{})[e.type]||[],u=E.event.special[e.type]||{};if((s[0]=e).delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,e)){for(a=E.event.handlers.call(this,e,l),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==e.type)){for(r=[],n=0;n<s;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),r[i]&&r.push(o);r.length&&a.push({elem:l,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[E.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=he.test(i)?this.mouseHooks:pe.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new E.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=o.srcElement||h),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=(r=e.target.ownerDocument||h).documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==be()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===be()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(E.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return E.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}},E.removeEvent=h.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)}:function(e,t,n){var r="on"+t;e.detachEvent&&(void 0===e[r]&&(e[r]=null),e.detachEvent(r,n))},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ve:ye):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||E.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:ye,isPropagationStopped:ye,isImmediatePropagationStopped:ye,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ve,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ve,e&&!this.isSimulated&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ve,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),v.submit||(E.event.special.submit={setup:function(){if(E.nodeName(this,"form"))return!1;E.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=E.nodeName(t,"input")||E.nodeName(t,"button")?E.prop(t,"form"):void 0;n&&!E._data(n,"submit")&&(E.event.add(n,"submit._submit",function(e){e._submitBubble=!0}),E._data(n,"submit",!0))})},postDispatch:function(e){e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&E.event.simulate("submit",this.parentNode,e))},teardown:function(){if(E.nodeName(this,"form"))return!1;E.event.remove(this,"._submit")}}),v.change||(E.event.special.change={setup:function(){if(de.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(E.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)}),E.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),E.event.simulate("change",this,e)})),!1;E.event.add(this,"beforeactivate._change",function(e){var t=e.target;de.test(t.nodeName)&&!E._data(t,"change")&&(E.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||E.event.simulate("change",this.parentNode,e)}),E._data(t,"change",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return E.event.remove(this,"._change"),!de.test(this.nodeName)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){function i(e){E.event.simulate(r,e.target,E.event.fix(e))}E.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=E._data(e,r);t||e.addEventListener(n,i,!0),E._data(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=E._data(e,r)-1;t?E._data(e,r,t):(e.removeEventListener(n,i,!0),E._removeData(e,r))}}}),E.fn.extend({on:function(e,t,n,r){return xe(this,e,t,n,r)},one:function(e,t,n,r){return xe(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ye),this.each(function(){E.event.remove(this,e,n,t)});for(i in e)this.off(i,t,e[i]);return this},trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}});var we=/ jQuery\d+="(?:null|\d+)"/g,Te=new RegExp("<(?:"+re+")[\\s/>]","i"),Ce=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ee=/<script|<style|<link/i,ke=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^true\/(.*)/,Se=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ae=ie(h).appendChild(h.createElement("div"));function je(e,t){return E.nodeName(e,"table")&&E.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function De(e){return e.type=(null!==E.find.attr(e,"type"))+"/"+e.type,e}function Le(e){var t=Ne.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function He(e,t){if(1===t.nodeType&&E.hasData(e)){var n,r,i,o=E._data(e),a=E._data(t,o),s=o.events;if(s)for(n in delete a.handle,a.events={},s)for(r=0,i=s[n].length;r<i;r++)E.event.add(t,n,s[n][r]);a.data&&(a.data=E.extend({},a.data))}}function qe(n,r,i,o){r=m.apply([],r);var e,t,a,s,l,u,c=0,f=n.length,d=f-1,p=r[0],h=E.isFunction(p);if(h||1<f&&"string"==typeof p&&!v.checkClone&&ke.test(p))return n.each(function(e){var t=n.eq(e);h&&(r[0]=p.call(this,e,t.html())),qe(t,r,i,o)});if(f&&(e=(u=fe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===u.childNodes.length&&(u=e),e||o)){for(a=(s=E.map(ae(u,"script"),De)).length;c<f;c++)t=u,c!==d&&(t=E.clone(t,!0,!0),a&&E.merge(s,ae(t,"script"))),i.call(n[c],t,c);if(a)for(l=s[s.length-1].ownerDocument,E.map(s,Le),c=0;c<a;c++)t=s[c],te.test(t.type||"")&&!E._data(t,"globalEval")&&E.contains(l,t)&&(t.src?E._evalUrl&&E._evalUrl(t.src):E.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Se,"")));u=e=null}return n}function Me(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ae(r)),r.parentNode&&(n&&E.contains(r.ownerDocument,r)&&se(ae(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e.replace(Ce,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,l=E.contains(e.ownerDocument,e);if(v.html5Clone||E.isXMLDoc(e)||!Te.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Ae.innerHTML=e.outerHTML,Ae.removeChild(o=Ae.firstChild)),!(v.noCloneEvent&&v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(r=ae(o),s=ae(e),a=0;null!=(i=s[a]);++a)r[a]&&function(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!v.noCloneEvent&&t[E.expando]){for(r in(i=E._data(t)).events)E.removeEvent(t,r,i.handle);t.removeAttribute(E.expando)}"script"===n&&t.text!==e.text?(De(t).text=e.text,Le(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),v.html5Clone&&e.innerHTML&&!E.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Z.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}(i,r[a]);if(t)if(n)for(s=s||ae(e),r=r||ae(o),a=0;null!=(i=s[a]);a++)He(i,r[a]);else He(e,o);return 0<(r=ae(o,"script")).length&&se(r,!l&&ae(e,"script")),r=s=i=null,o},cleanData:function(e,t){for(var n,r,i,o,a=0,s=E.expando,l=E.cache,u=v.attributes,c=E.event.special;null!=(n=e[a]);a++)if((t||O(n))&&(o=(i=n[s])&&l[i])){if(o.events)for(r in o.events)c[r]?E.event.remove(n,r):E.removeEvent(n,r,o.handle);l[i]&&(delete l[i],u||void 0===n.removeAttribute?n[s]=void 0:n.removeAttribute(s),f.push(i))}}}),E.fn.extend({domManip:qe,detach:function(e){return Me(this,e,!0)},remove:function(e){return Me(this,e)},text:function(e){return K(this,function(e){return void 0===e?E.text(this):this.empty().append((this[0]&&this[0].ownerDocument||h).createTextNode(e))},null,e,arguments.length)},append:function(){return qe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return qe(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=je(this,e)).insertBefore(e,t.firstChild)})},before:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&E.cleanData(ae(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&E.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return K(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(we,""):void 0;if("string"==typeof e&&!Ee.test(e)&&(v.htmlSerialize||!Te.test(e))&&(v.leadingWhitespace||!ne.test(e))&&!oe[(ee.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ae(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return qe(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ae(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=0,r=[],i=E(e),o=i.length-1;n<=o;n++)t=n===o?this:this.clone(!0),E(i[n])[a](t),s.apply(r,t.get());return this.pushStack(r)}});var Fe,Oe={HTML:"block",BODY:"block"};function _e(e,t){var n=E(t.createElement(e)).appendTo(t.body),r=E.css(n[0],"display");return n.detach(),r}function Pe(e){var t=h,n=Oe[e];return n||("none"!==(n=_e(e,t))&&n||((t=((Fe=(Fe||E("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow||Fe[0].contentDocument).document).write(),t.close(),n=_e(e,t),Fe.detach()),Oe[e]=n),n}function Re(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i}var Be,We,$e,Ie,ze,Xe,Ue,Ve,Ge=/^margin/,Je=new RegExp("^("+X+")(?!px)[a-z%]+$","i"),Ye=h.documentElement;function Qe(){var e,t,n=h.documentElement;n.appendChild(Ue),Ve.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",Be=$e=Xe=!1,We=ze=!0,C.getComputedStyle&&(t=C.getComputedStyle(Ve),Be="1%"!==(t||{}).top,Xe="2px"===(t||{}).marginLeft,$e="4px"===(t||{width:"4px"}).width,Ve.style.marginRight="50%",We="4px"===(t||{marginRight:"4px"}).marginRight,(e=Ve.appendChild(h.createElement("div"))).style.cssText=Ve.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",Ve.style.width="1px",ze=!parseFloat((C.getComputedStyle(e)||{}).marginRight),Ve.removeChild(e)),Ve.style.display="none",(Ie=0===Ve.getClientRects().length)&&(Ve.style.display="",Ve.innerHTML="<table><tr><td></td><td>t</td></tr></table>",Ve.childNodes[0].style.borderCollapse="separate",(e=Ve.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(Ie=0===e[0].offsetHeight)&&(e[0].style.display="",e[1].style.display="none",Ie=0===e[0].offsetHeight)),n.removeChild(Ue)}Ue=h.createElement("div"),(Ve=h.createElement("div")).style&&(Ve.style.cssText="float:left;opacity:.5",v.opacity="0.5"===Ve.style.opacity,v.cssFloat=!!Ve.style.cssFloat,Ve.style.backgroundClip="content-box",Ve.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===Ve.style.backgroundClip,(Ue=h.createElement("div")).style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",Ve.innerHTML="",Ue.appendChild(Ve),v.boxSizing=""===Ve.style.boxSizing||""===Ve.style.MozBoxSizing||""===Ve.style.WebkitBoxSizing,E.extend(v,{reliableHiddenOffsets:function(){return null==Be&&Qe(),Ie},boxSizingReliable:function(){return null==Be&&Qe(),$e},pixelMarginRight:function(){return null==Be&&Qe(),We},pixelPosition:function(){return null==Be&&Qe(),Be},reliableMarginRight:function(){return null==Be&&Qe(),ze},reliableMarginLeft:function(){return null==Be&&Qe(),Xe}}));var Ke,Ze,et=/^(top|right|bottom|left)$/;function tt(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}C.getComputedStyle?(Ke=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ze=function(e,t,n){var r,i,o,a,s=e.style;return""!==(a=(n=n||Ke(e))?n.getPropertyValue(t)||n[t]:void 0)&&void 0!==a||E.contains(e.ownerDocument,e)||(a=E.style(e,t)),n&&!v.pixelMarginRight()&&Je.test(a)&&Ge.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o),void 0===a?a:a+""}):Ye.currentStyle&&(Ke=function(e){return e.currentStyle},Ze=function(e,t,n){var r,i,o,a,s=e.style;return null==(a=(n=n||Ke(e))?n[t]:void 0)&&s&&s[t]&&(a=s[t]),Je.test(a)&&!et.test(t)&&(r=s.left,(o=(i=e.runtimeStyle)&&i.left)&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"});var nt=/alpha\([^)]*\)/i,rt=/opacity\s*=\s*([^)]*)/i,it=/^(none|table(?!-c[ea]).+)/,ot=new RegExp("^("+X+")(.*)$","i"),at={position:"absolute",visibility:"hidden",display:"block"},st={letterSpacing:"0",fontWeight:"400"},lt=["Webkit","O","Moz","ms"],ut=h.createElement("div").style;function ct(e){if(e in ut)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=lt.length;n--;)if((e=lt[n]+t)in ut)return e}function ft(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)(r=e[a]).style&&(o[a]=E._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&z(r)&&(o[a]=E._data(r,"olddisplay",Pe(r.nodeName)))):(i=z(r),(n&&"none"!==n||!i)&&E._data(r,"olddisplay",i?n:E.css(r,"display"))));for(a=0;a<s;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function dt(e,t,n){var r=ot.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function pt(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=E.css(e,n+V[o],!0,i)),r?("content"===n&&(a-=E.css(e,"padding"+V[o],!0,i)),"margin"!==n&&(a-=E.css(e,"border"+V[o]+"Width",!0,i))):(a+=E.css(e,"padding"+V[o],!0,i),"padding"!==n&&(a+=E.css(e,"border"+V[o]+"Width",!0,i)));return a}function ht(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ke(e),a=v.boxSizing&&"border-box"===E.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=Ze(e,t,o))<0||null==i)&&(i=e.style[t]),Je.test(i))return i;r=a&&(v.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+pt(e,t,n||(a?"border":"content"),r,o)+"px"}function mt(e,t,n,r,i){return new mt.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:v.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=E.camelCase(t),l=e.style;if(t=E.cssProps[s]||(E.cssProps[s]=ct(s)||s),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];if("string"===(o=typeof n)&&(i=U.exec(n))&&i[1]&&(n=G(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{l[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=E.camelCase(t);return t=E.cssProps[s]||(E.cssProps[s]=ct(s)||s),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=Ze(e,t,r)),"normal"===o&&t in st&&(o=st[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),E.each(["height","width"],function(e,i){E.cssHooks[i]={get:function(e,t,n){if(t)return it.test(E.css(e,"display"))&&0===e.offsetWidth?Re(e,at,function(){return ht(e,i,n)}):ht(e,i,n)},set:function(e,t,n){var r=n&&Ke(e);return dt(0,t,n?pt(e,i,n,v.boxSizing&&"border-box"===E.css(e,"boxSizing",!1,r),r):0)}}}),v.opacity||(E.cssHooks.opacity={get:function(e,t){return rt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=E.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";((n.zoom=1)<=t||""===t)&&""===E.trim(o.replace(nt,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=nt.test(o)?o.replace(nt,i):o+" "+i)}}),E.cssHooks.marginRight=tt(v.reliableMarginRight,function(e,t){if(t)return Re(e,{display:"inline-block"},Ze,[e,"marginRight"])}),E.cssHooks.marginLeft=tt(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ze(e,"marginLeft"))||(E.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-Re(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}):0))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+V[t]+o]=r[t]||r[t-2]||r[0];return n}},Ge.test(i)||(E.cssHooks[i+o].set=dt)}),E.fn.extend({css:function(e,t){return K(this,function(e,t,n){var r,i,o={},a=0;if(E.isArray(t)){for(r=Ke(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)},show:function(){return ft(this,!0)},hide:function(){return ft(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){z(this)?E(this).show():E(this).hide()})}}),(E.Tween=mt).prototype={constructor:mt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=mt.propHooks[this.prop];return e&&e.get?e.get(this):mt.propHooks._default.get(this)},run:function(e){var t,n=mt.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):mt.propHooks._default.set(this),this}},mt.prototype.init.prototype=mt.prototype,mt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[E.cssProps[e.prop]]&&!E.cssHooks[e.prop]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}},mt.propHooks.scrollTop=mt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=mt.prototype.init,E.fx.step={};var gt,vt,yt,bt,xt,wt,Tt,Ct=/^(?:toggle|show|hide)$/,Et=/queueHooks$/;function kt(){return C.setTimeout(function(){gt=void 0}),gt=E.now()}function Nt(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=V[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function St(e,t,n){for(var r,i=(At.tweeners[t]||[]).concat(At.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function At(o,e,t){var n,a,r=0,i=At.prefilters.length,s=E.Deferred().always(function(){delete l.elem}),l=function(){if(a)return!1;for(var e=gt||kt(),t=Math.max(0,u.startTime+u.duration-e),n=1-(t/u.duration||0),r=0,i=u.tweens.length;r<i;r++)u.tweens[r].run(n);return s.notifyWith(o,[u,n,t]),n<1&&i?t:(s.resolveWith(o,[u]),!1)},u=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:gt||kt(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,u.opts,e,t,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(n),n},stop:function(e){var t=0,n=e?u.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)u.tweens[t].run(1);return e?(s.notifyWith(o,[u,1,0]),s.resolveWith(o,[u,e])):s.rejectWith(o,[u,e]),this}}),c=u.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=E.camelCase(n)],o=e[n],E.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,u.opts.specialEasing);r<i;r++)if(n=At.prefilters[r].call(u,o,c,u.opts))return E.isFunction(n.stop)&&(E._queueHooks(u.elem,u.opts.queue).stop=E.proxy(n.stop,n)),n;return E.map(c,St,u),E.isFunction(u.opts.start)&&u.opts.start.call(o,u),E.fx.timer(E.extend(l,{elem:o,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}E.Animation=E.extend(At,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return G(n.elem,e,U.exec(t),n),n}]},tweener:function(e,t){for(var n,r=0,i=(e=E.isFunction(e)?(t=e,["*"]):e.match(q)).length;r<i;r++)n=e[r],At.tweeners[n]=At.tweeners[n]||[],At.tweeners[n].unshift(t)},prefilters:[function(t,e,n){var r,i,o,a,s,l,u,c=this,f={},d=t.style,p=t.nodeType&&z(t),h=E._data(t,"fxshow");for(r in n.queue||(null==(s=E._queueHooks(t,"fx")).unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,E.queue(t,"fx").length||s.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===("none"===(u=E.css(t,"display"))?E._data(t,"olddisplay")||Pe(t.nodeName):u)&&"none"===E.css(t,"float")&&(v.inlineBlockNeedsLayout&&"inline"!==Pe(t.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",v.shrinkWrapBlocks()||c.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]})),e)if(i=e[r],Ct.exec(i)){if(delete e[r],o=o||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!h||void 0===h[r])continue;p=!0}f[r]=h&&h[r]||E.style(t,r)}else u=void 0;if(E.isEmptyObject(f))"inline"===("none"===u?Pe(t.nodeName):u)&&(d.display=u);else for(r in h?"hidden"in h&&(p=h.hidden):h=E._data(t,"fxshow",{}),o&&(h.hidden=!p),p?E(t).show():c.done(function(){E(t).hide()}),c.done(function(){var e;for(e in E._removeData(t,"fxshow"),f)E.style(t,e,f[e])}),f)a=St(p?h[r]:0,r,c),r in h||(h[r]=a.start,p&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],prefilter:function(e,t){t?At.prefilters.unshift(e):At.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||E.isFunction(e)&&e,duration:e,easing:n&&t||t&&!E.isFunction(t)&&t};return r.duration=E.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in E.fx.speeds?E.fx.speeds[r.duration]:E.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){E.isFunction(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(z).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){function i(){var e=At(this,E.extend({},t),a);(o||E._data(this,"finish"))&&e.stop(!0)}var o=E.isEmptyObject(t),a=E.speed(e,n,r);return i.finish=i,o||!1===a.queue?this.each(i):this.queue(a.queue,i)},stop:function(i,e,o){function a(e){var t=e.stop;delete e.stop,t(o)}return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=E._data(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&Et.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=E._data(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(Nt(r,!0),e,t,n)}}),E.each({slideDown:Nt("show"),slideUp:Nt("hide"),slideToggle:Nt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=E.timers,n=0;for(gt=E.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||E.fx.stop(),gt=void 0},E.fx.timer=function(e){E.timers.push(e),e()?E.fx.start():E.timers.pop()},E.fx.interval=13,E.fx.start=function(){vt=vt||C.setInterval(E.fx.tick,E.fx.interval)},E.fx.stop=function(){C.clearInterval(vt),vt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},bt=h.createElement("input"),xt=h.createElement("div"),wt=h.createElement("select"),Tt=wt.appendChild(h.createElement("option")),(xt=h.createElement("div")).setAttribute("className","t"),xt.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",yt=xt.getElementsByTagName("a")[0],bt.setAttribute("type","checkbox"),xt.appendChild(bt),(yt=xt.getElementsByTagName("a")[0]).style.cssText="top:1px",v.getSetAttribute="t"!==xt.className,v.style=/top/.test(yt.getAttribute("style")),v.hrefNormalized="/a"===yt.getAttribute("href"),v.checkOn=!!bt.value,v.optSelected=Tt.selected,v.enctype=!!h.createElement("form").enctype,wt.disabled=!0,v.optDisabled=!Tt.disabled,(bt=h.createElement("input")).setAttribute("value",""),v.input=""===bt.getAttribute("value"),bt.value="t",bt.setAttribute("type","radio"),v.radioValue="t"===bt.value;var jt=/\r/g,Dt=/[\x20\t\r\n\f]+/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=E.isFunction(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":E.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(jt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:E.trim(E.text(e)).replace(Dt," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,l=i<0?s:o?i:0;l<s;l++)if(((n=r[l]).selected||l===i)&&(v.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!E.nodeName(n.parentNode,"optgroup"))){if(t=E(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=E.makeArray(t),a=i.length;a--;)if(r=i[a],-1<E.inArray(E.valHooks.option.get(r),o))try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(E.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Lt,Ht,qt=E.expr.attrHandle,Mt=/^(?:checked|selected)$/i,Ft=v.getSetAttribute,Ot=v.input;E.fn.extend({attr:function(e,t){return K(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(t=t.toLowerCase(),i=E.attrHooks[t]||(E.expr.match.bool.test(t)?Ht:Lt)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):!(i&&"get"in i&&null!==(r=i.get(e,t)))&&null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&E.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(q);if(o&&1===e.nodeType)for(;n=o[i++];)r=E.propFix[n]||n,E.expr.match.bool.test(n)?Ot&&Ft||!Mt.test(n)?e[r]=!1:e[E.camelCase("default-"+n)]=e[r]=!1:E.attr(e,n,""),e.removeAttribute(Ft?n:r)}}),Ht={set:function(e,t,n){return!1===t?E.removeAttr(e,n):Ot&&Ft||!Mt.test(n)?e.setAttribute(!Ft&&E.propFix[n]||n,n):e[E.camelCase("default-"+n)]=e[n]=!0,n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var o=qt[t]||E.find.attr;Ot&&Ft||!Mt.test(t)?qt[t]=function(e,t,n){var r,i;return n||(i=qt[t],qt[t]=r,r=null!=o(e,t,n)?t.toLowerCase():null,qt[t]=i),r}:qt[t]=function(e,t,n){if(!n)return e[E.camelCase("default-"+t)]?t.toLowerCase():null}}),Ot&&Ft||(E.attrHooks.value={set:function(e,t,n){if(!E.nodeName(e,"input"))return Lt&&Lt.set(e,t,n);e.defaultValue=t}}),Ft||(Lt={set:function(e,t,n){var r=e.getAttributeNode(n);if(r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n))return t}},qt.id=qt.name=qt.coords=function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},E.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:Lt.set},E.attrHooks.contenteditable={set:function(e,t,n){Lt.set(e,""!==t&&t,n)}},E.each(["width","height"],function(e,n){E.attrHooks[n]={set:function(e,t){if(""===t)return e.setAttribute(n,"auto"),t}}})),v.style||(E.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var _t=/^(?:input|select|textarea|button|object)$/i,Pt=/^(?:a|area)$/i;E.fn.extend({prop:function(e,t){return K(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return e=E.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):_t.test(e.nodeName)||Pt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.hrefNormalized||E.each(["href","src"],function(e,t){E.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),v.enctype||(E.propFix.enctype="encoding");var Rt=/[\t\r\n\f]/g;function Bt(e){return E.attr(e,"class")||""}E.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,l=0;if(E.isFunction(t))return this.each(function(e){E(this).addClass(t.call(this,e,Bt(this)))});if("string"==typeof t&&t)for(e=t.match(q)||[];n=this[l++];)if(i=Bt(n),r=1===n.nodeType&&(" "+i+" ").replace(Rt," ")){for(a=0;o=e[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=E.trim(r))&&E.attr(n,"class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,l=0;if(E.isFunction(t))return this.each(function(e){E(this).removeClass(t.call(this,e,Bt(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(q)||[];n=this[l++];)if(i=Bt(n),r=1===n.nodeType&&(" "+i+" ").replace(Rt," ")){for(a=0;o=e[a++];)for(;-1<r.indexOf(" "+o+" ");)r=r.replace(" "+o+" "," ");i!==(s=E.trim(r))&&E.attr(n,"class",s)}return this},toggleClass:function(i,t){var o=typeof i;return"boolean"==typeof t&&"string"==o?t?this.addClass(i):this.removeClass(i):E.isFunction(i)?this.each(function(e){E(this).toggleClass(i.call(this,e,Bt(this),t),t)}):this.each(function(){var e,t,n,r;if("string"==o)for(t=0,n=E(this),r=i.match(q)||[];e=r[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==i&&"boolean"!=o||((e=Bt(this))&&E._data(this,"__className__",e),E.attr(this,"class",!e&&!1!==i&&E._data(this,"__className__")||""))})},hasClass:function(e){for(var t,n=0,r=" "+e+" ";t=this[n++];)if(1===t.nodeType&&-1<(" "+Bt(t)+" ").replace(Rt," ").indexOf(r))return!0;return!1}}),E.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var Wt=C.location,$t=E.now(),It=/\?/,zt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;E.parseJSON=function(e){if(C.JSON&&C.JSON.parse)return C.JSON.parse(e+"");var i,o=null,t=E.trim(e+"");return t&&!E.trim(t.replace(zt,function(e,t,n,r){return i&&t&&(o=0),0===o?e:(i=n||t,o+=!r-!n,"")}))?Function("return "+t)():E.error("Invalid JSON: "+e)},E.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{C.DOMParser?t=(new C.DOMParser).parseFromString(e,"text/xml"):((t=new C.ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e))}catch(e){t=void 0}return t&&t.documentElement&&!t.getElementsByTagName("parsererror").length||E.error("Invalid XML: "+e),t};var Xt=/#.*$/,Ut=/([?&])_=[^&]*/,Vt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Gt=/^(?:GET|HEAD)$/,Jt=/^\/\//,Yt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Qt={},Kt={},Zt="*/".concat("*"),en=Wt.href,tn=Yt.exec(en.toLowerCase())||[];function nn(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(q)||[];if(E.isFunction(t))for(;n=i[r++];)"+"===n.charAt(0)?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function rn(t,i,o,a){var s={},l=t===Kt;function u(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||l||s[n]?l?!(r=n):void 0:(i.dataTypes.unshift(n),u(n),!1)}),r}return u(i.dataTypes[0])||!s["*"]&&u("*")}function on(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n=n||{})[r]=t[r]);return n&&E.extend(!0,e,n),e}function an(e){if(!E.contains(e.ownerDocument||h,e))return!0;for(;e&&1===e.nodeType;){if("none"===((t=e).style&&t.style.display||E.css(t,"display"))||"hidden"===e.type)return!0;e=e.parentNode}var t;return!1}E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:en,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":E.parseJSON,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?on(on(e,E.ajaxSettings),t):on(E.ajaxSettings,e)},ajaxPrefilter:nn(Qt),ajaxTransport:nn(Kt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,r,c,f,d,p,h,i,m=E.ajaxSetup({},t),g=m.context||m,v=m.context&&(g.nodeType||g.jquery)?E(g):E.event,y=E.Deferred(),b=E.Callbacks("once memory"),x=m.statusCode||{},o={},a={},w=0,s="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===w){if(!i)for(i={};t=Vt.exec(f);)i[t[1].toLowerCase()]=t[2];t=i[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===w?f:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return w||(e=a[n]=a[n]||e,o[e]=t),this},overrideMimeType:function(e){return w||(m.mimeType=e),this},statusCode:function(e){var t;if(e)if(w<2)for(t in e)x[t]=[x[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||s;return h&&h.abort(t),l(0,t),this}};if(y.promise(T).complete=b.add,T.success=T.done,T.error=T.fail,m.url=((e||m.url||en)+"").replace(Xt,"").replace(Jt,tn[1]+"//"),m.type=t.method||t.type||m.method||m.type,m.dataTypes=E.trim(m.dataType||"*").toLowerCase().match(q)||[""],null==m.crossDomain&&(n=Yt.exec(m.url.toLowerCase()),m.crossDomain=!(!n||n[1]===tn[1]&&n[2]===tn[2]&&(n[3]||("http:"===n[1]?"80":"443"))===(tn[3]||("http:"===tn[1]?"80":"443")))),m.data&&m.processData&&"string"!=typeof m.data&&(m.data=E.param(m.data,m.traditional)),rn(Qt,m,t,T),2===w)return T;for(r in(p=E.event&&m.global)&&0==E.active++&&E.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!Gt.test(m.type),c=m.url,m.hasContent||(m.data&&(c=m.url+=(It.test(c)?"&":"?")+m.data,delete m.data),!1===m.cache&&(m.url=Ut.test(c)?c.replace(Ut,"$1_="+$t++):c+(It.test(c)?"&":"?")+"_="+$t++)),m.ifModified&&(E.lastModified[c]&&T.setRequestHeader("If-Modified-Since",E.lastModified[c]),E.etag[c]&&T.setRequestHeader("If-None-Match",E.etag[c])),(m.data&&m.hasContent&&!1!==m.contentType||t.contentType)&&T.setRequestHeader("Content-Type",m.contentType),T.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+Zt+"; q=0.01":""):m.accepts["*"]),m.headers)T.setRequestHeader(r,m.headers[r]);if(m.beforeSend&&(!1===m.beforeSend.call(g,T,m)||2===w))return T.abort();for(r in s="abort",{success:1,error:1,complete:1})T[r](m[r]);if(h=rn(Kt,m,t,T)){if(T.readyState=1,p&&v.trigger("ajaxSend",[T,m]),2===w)return T;m.async&&0<m.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},m.timeout));try{w=1,h.send(o,l)}catch(e){if(!(w<2))throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,l,u=t;2!==w&&(w=2,d&&C.clearTimeout(d),h=void 0,f=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){l.unshift(a);break}if(l[0]in n)o=l[0];else{for(a in n){if(!l[0]||e.converters[a+" "+l[0]]){o=a;break}r=r||a}o=o||r}if(o)return o!==l[0]&&l.unshift(o),n[o]}(m,T,n)),s=function(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=u[l+" "+o]||u["* "+o]))for(i in u)if((s=i.split(" "))[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[i]:!0!==u[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(m,s,T,i),i?(m.ifModified&&((l=T.getResponseHeader("Last-Modified"))&&(E.lastModified[c]=l),(l=T.getResponseHeader("etag"))&&(E.etag[c]=l)),204===e||"HEAD"===m.type?u="nocontent":304===e?u="notmodified":(u=s.state,o=s.data,i=!(a=s.error))):(a=u,!e&&u||(u="error",e<0&&(e=0))),T.status=e,T.statusText=(t||u)+"",i?y.resolveWith(g,[o,u,T]):y.rejectWith(g,[T,u,a]),T.statusCode(x),x=void 0,p&&v.trigger(i?"ajaxSuccess":"ajaxError",[T,m,i?o:a]),b.fireWith(g,[T,u]),p&&(v.trigger("ajaxComplete",[T,m]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return E.isFunction(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E._evalUrl=function(e){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},E.fn.extend({wrapAll:function(t){return E.isFunction(t)?this.each(function(e){E(this).wrapAll(t.call(this,e))}):(this[0]&&(e=E(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)),this);var e},wrapInner:function(n){return E.isFunction(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=E.isFunction(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(){return this.parent().each(function(){E.nodeName(this,"body")||E(this).replaceWith(this.childNodes)}).end()}}),E.expr.filters.hidden=function(e){return v.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:an(e)},E.expr.filters.visible=function(e){return!E.expr.filters.hidden(e)};var sn=/%20/g,ln=/\[\]$/,un=/\r?\n/g,cn=/^(?:submit|button|image|reset|file)$/i,fn=/^(?:input|select|textarea|keygen)/i;E.param=function(e,t){function n(e,t){t=E.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}var r,i=[];if(void 0===t&&(t=E.ajaxSettings&&E.ajaxSettings.traditional),E.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){n(this.name,this.value)});else for(r in e)!function n(r,e,i,o){var t;if(E.isArray(e))E.each(e,function(e,t){i||ln.test(r)?o(r,t):n(r+"["+("object"==typeof t&&null!=t?e:"")+"]",t,i,o)});else if(i||"object"!==E.type(e))o(r,e);else for(t in e)n(r+"["+t+"]",e[t],i,o)}(r,e[r],t,n);return i.join("&").replace(sn,"+")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&fn.test(this.nodeName)&&!cn.test(e)&&(this.checked||!Z.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:E.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(un,"\r\n")}}):{name:t.name,value:n.replace(un,"\r\n")}}).get()}}),E.ajaxSettings.xhr=void 0!==C.ActiveXObject?function(){return this.isLocal?gn():8<h.documentMode?mn():/^(get|post|head|put|delete|options)$/i.test(this.type)&&mn()||gn()}:mn;var dn=0,pn={},hn=E.ajaxSettings.xhr();function mn(){try{return new C.XMLHttpRequest}catch(e){}}function gn(){try{return new C.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}C.attachEvent&&C.attachEvent("onunload",function(){for(var e in pn)pn[e](void 0,!0)}),v.cors=!!hn&&"withCredentials"in hn,(hn=v.ajax=!!hn)&&E.ajaxTransport(function(l){var u;if(!l.crossDomain||v.cors)return{send:function(e,o){var t,a=l.xhr(),s=++dn;if(a.open(l.type,l.url,l.async,l.username,l.password),l.xhrFields)for(t in l.xhrFields)a[t]=l.xhrFields[t];for(t in l.mimeType&&a.overrideMimeType&&a.overrideMimeType(l.mimeType),l.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)void 0!==e[t]&&a.setRequestHeader(t,e[t]+"");a.send(l.hasContent&&l.data||null),u=function(e,t){var n,r,i;if(u&&(t||4===a.readyState))if(delete pn[s],u=void 0,a.onreadystatechange=E.noop,t)4!==a.readyState&&a.abort();else{i={},n=a.status,"string"==typeof a.responseText&&(i.text=a.responseText);try{r=a.statusText}catch(e){r=""}n||!l.isLocal||l.crossDomain?1223===n&&(n=204):n=i.text?200:404}i&&o(n,r,i,a.getAllResponseHeaders())},l.async?4===a.readyState?C.setTimeout(u):a.onreadystatechange=pn[s]=u:u()},abort:function(){u&&u(void 0,!0)}}}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),E.ajaxTransport("script",function(t){if(t.crossDomain){var r,i=h.head||E("head")[0]||h.documentElement;return{send:function(e,n){(r=h.createElement("script")).async=!0,t.scriptCharset&&(r.charset=t.scriptCharset),r.src=t.url,r.onload=r.onreadystatechange=function(e,t){!t&&r.readyState&&!/loaded|complete/.test(r.readyState)||(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),r=null,t||n(200,"success"))},i.insertBefore(r,i.firstChild)},abort:function(){r&&r.onload(void 0,!0)}}}});var vn=[],yn=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=vn.pop()||E.expando+"_"+$t++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(yn.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&yn.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=E.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(yn,"$1"+r):!1!==e.jsonp&&(e.url+=(It.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,vn.push(r)),o&&E.isFunction(i)&&i(o[0]),o=i=void 0}),"script"}),E.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||h;var r=w.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=fe([e],t,i),i&&i.length&&E(i).remove(),E.merge([],r.childNodes))};var bn=E.fn.load;function xn(e){return E.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}E.fn.load=function(e,t,n){if("string"!=typeof e&&bn)return bn.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=E.trim(e.slice(s,e.length)),e=e.slice(0,s)),E.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.expr.filters.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u=E.css(e,"position"),c=E(e),f={};"static"===u&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),l=E.css(e,"left"),i=("absolute"===u||"fixed"===u)&&-1<E.inArray("auto",[o,l])?(a=(r=c.position()).top,r.left):(a=parseFloat(o)||0,parseFloat(l)||0),E.isFunction(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(e=o.documentElement,E.contains(e,i)?(void 0!==i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=xn(o),{top:r.top+(n.pageYOffset||e.scrollTop)-(e.clientTop||0),left:r.left+(n.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===E.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),E.nodeName(e[0],"html")||(n=e.offset()),n.top+=E.css(e[0],"borderTopWidth",!0),n.left+=E.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-E.css(r,"marginTop",!0),left:t.left-n.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!E.nodeName(e,"html")&&"static"===E.css(e,"position");)e=e.offsetParent;return e||Ye})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o=/Y/.test(i);E.fn[t]=function(e){return K(this,function(e,t,n){var r=xn(e);if(void 0===n)return r?i in r?r[i]:r.document.documentElement[t]:e[t];r?r.scrollTo(o?E(r).scrollLeft():n,o?n:E(r).scrollTop()):e[t]=n},t,e,arguments.length,null)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=tt(v.pixelPosition,function(e,t){if(t)return t=Ze(e,n),Je.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(o,a){E.each({padding:"inner"+o,content:a,"":"outer"+o},function(r,e){E.fn[e]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return K(this,function(e,t,n){var r;return E.isWindow(e)?e.document.documentElement["client"+o]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+o],r["scroll"+o],e.body["offset"+o],r["offset"+o],r["client"+o])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},a,n?e:void 0,n,null)}})}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),E.fn.size=function(){return this.length},E.fn.andSelf=E.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var wn=C.jQuery,Tn=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Tn),e&&C.jQuery===E&&(C.jQuery=wn),E},e||(C.jQuery=C.$=E),E}),window.Modernizr=function(r,f,a){function t(e){h.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var n in e){var r=e[n];if(!i(r,"-")&&h[r]!==a)return"pfx"!=t||r}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+x.join(r+" ")+r).split(" ");return o(t,"string")||void 0===t?s(i,t):function(e,t,n){for(var r in e){var i=t[e[r]];if(i!==a)return!1===n?e[r]:o(i,"function")?i.bind(n||t):i}return!1}(i=(e+" "+w.join(r+" ")+r).split(" "),t,n)}function e(e,t,n,r){var i,o,a,s,l=f.createElement("div"),u=f.body,c=u||f.createElement("body");if(parseInt(n,10))for(;n--;)(a=f.createElement("div")).id=r?r[n]:p+(n+1),l.appendChild(a);return i=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),l.id=p,(u?l:c).innerHTML+=i,c.appendChild(l),u||(c.style.background="",c.style.overflow="hidden",s=d.style.overflow,d.style.overflow="hidden",d.appendChild(c)),o=t(l,e),u?l.parentNode.removeChild(l):(c.parentNode.removeChild(c),d.style.overflow=s),!!o}var n,u,c={},d=f.documentElement,p="modernizr",h=f.createElement(p).style,m=f.createElement("input"),g=":)",v={}.toString,y=" -webkit- -moz- -o- -ms- ".split(" "),b="Webkit Moz O ms",x=b.split(" "),w=b.toLowerCase().split(" "),T="http://www.w3.org/2000/svg",C={},E={},k={},N=[],S=N.slice,A=(u={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},function(e,t){t=t||f.createElement(u[e]||"div");var n=(e="on"+e)in t;return n||(t.setAttribute||(t=f.createElement("div")),t.setAttribute&&t.removeAttribute&&(t.setAttribute(e,""),n=o(t[e],"function"),void 0===t[e]||(t[e]=a),t.removeAttribute(e))),t=null,n}),j={}.hasOwnProperty,D=void 0!==j&&void 0!==j.call?function(e,t){return j.call(e,t)}:function(e,t){return t in e&&void 0===e.constructor.prototype[t]};for(var L in Function.prototype.bind||(Function.prototype.bind=function(r){var i=this;if("function"!=typeof i)throw new TypeError;var o=S.call(arguments,1),a=function(){if(this instanceof a){function e(){}e.prototype=i.prototype;var t=new e,n=i.apply(t,o.concat(S.call(arguments)));return Object(n)===n?n:t}return i.apply(r,o.concat(S.call(arguments)))};return a}),C.flexbox=function(){return l("flexWrap")},C.canvas=function(){var e=f.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},C.canvastext=function(){return!!c.canvas&&!!o(f.createElement("canvas").getContext("2d").fillText,"function")},C.webgl=function(){return!!r.WebGLRenderingContext},C.touch=function(){var t;return"ontouchstart"in r||r.DocumentTouch&&f instanceof DocumentTouch?t=!0:e(["@media (",y.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){t=9===e.offsetTop}),t},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!r.postMessage},C.websqldatabase=function(){return!!r.openDatabase},C.indexedDB=function(){return!!l("indexedDB",r)},C.hashchange=function(){return A("hashchange",r)&&(f.documentMode===a||7<f.documentMode)},C.history=function(){return!!r.history&&!!history.pushState},C.draganddrop=function(){var e=f.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},C.websockets=function(){return"WebSocket"in r||"MozWebSocket"in r},C.rgba=function(){return t("background-color:rgba(150,255,150,.5)"),i(h.backgroundColor,"rgba")},C.hsla=function(){return t("background-color:hsla(120,40%,100%,.5)"),i(h.backgroundColor,"rgba")||i(h.backgroundColor,"hsla")},C.multiplebgs=function(){return t("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(h.background)},C.backgroundsize=function(){return l("backgroundSize")},C.borderimage=function(){return l("borderImage")},C.borderradius=function(){return l("borderRadius")},C.boxshadow=function(){return l("boxShadow")},C.textshadow=function(){return""===f.createElement("div").style.textShadow},C.opacity=function(){return t(y.join("opacity:.55;")+""),/^0.55$/.test(h.opacity)},C.cssanimations=function(){return l("animationName")},C.csscolumns=function(){return l("columnCount")},C.cssgradients=function(){var e="background-image:";return t((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+y.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),i(h.backgroundImage,"gradient")},C.cssreflections=function(){return l("boxReflect")},C.csstransforms=function(){return!!l("transform")},C.csstransforms3d=function(){var n=!!l("perspective");return n&&"webkitPerspective"in d.style&&e("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,t){n=9===e.offsetLeft&&3===e.offsetHeight}),n},C.csstransitions=function(){return l("transition")},C.fontface=function(){var o;return e('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=f.getElementById("smodernizr"),r=n.sheet||n.styleSheet,i=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";o=/src/i.test(i)&&0===i.indexOf(t.split(" ")[0])}),o},C.generatedcontent=function(){var t;return e(["#",p,"{font:0/0 a}#",p,':after{content:"',g,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=3<=e.offsetHeight}),t},C.video=function(){var e=f.createElement("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return t},C.audio=function(){var e=f.createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t},C.localstorage=function(){try{return localStorage.setItem(p,p),localStorage.removeItem(p),!0}catch(e){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(p,p),sessionStorage.removeItem(p),!0}catch(e){return!1}},C.webworkers=function(){return!!r.Worker},C.applicationcache=function(){return!!r.applicationCache},C.svg=function(){return!!f.createElementNS&&!!f.createElementNS(T,"svg").createSVGRect},C.inlinesvg=function(){var e=f.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T},C.smil=function(){return!!f.createElementNS&&/SVGAnimate/.test(v.call(f.createElementNS(T,"animate")))},C.svgclippaths=function(){return!!f.createElementNS&&/SVGClipPath/.test(v.call(f.createElementNS(T,"clipPath")))},C)D(C,L)&&(n=L.toLowerCase(),c[n]=C[L](),N.push((c[n]?"":"no-")+n));return c.input||(c.input=function(e){for(var t=0,n=e.length;t<n;t++)k[e[t]]=e[t]in m;return k.list&&(k.list=!!f.createElement("datalist")&&!!r.HTMLDataListElement),k}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),c.inputtypes=function(e){for(var t,n,r,i=0,o=e.length;i<o;i++)m.setAttribute("type",n=e[i]),(t="text"!==m.type)&&(m.value=g,m.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&m.style.WebkitAppearance!==a?(d.appendChild(m),t=(r=f.defaultView).getComputedStyle&&"textfield"!==r.getComputedStyle(m,null).WebkitAppearance&&0!==m.offsetHeight,d.removeChild(m)):/^(search|tel)$/.test(n)||(t=/^(url|email)$/.test(n)?m.checkValidity&&!1===m.checkValidity():m.value!=g)),E[e[i]]=!!t;return E}("search tel url email datetime date month week time datetime-local number range color".split(" "))),c.addTest=function(e,t){if("object"==typeof e)for(var n in e)D(e,n)&&c.addTest(n,e[n]);else{if(e=e.toLowerCase(),c[e]!==a)return c;t="function"==typeof t?t():t,d.className+=" "+(t?"":"no-")+e,c[e]=t}return c},t(""),m=null,function(e,l){function u(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function c(e){var t=s[e[r]];return t||(t={},a++,e[r]=a,s[a]=t),t}function f(e,t,n){return t=t||l,p?t.createElement(e):!(r=(n=n||c(t)).cache[e]?n.cache[e].cloneNode():o.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||i.test(e)||r.tagUrn?r:n.frag.appendChild(r);var r}function t(e){var t,n,r,i,o,a,s=c(e=e||l);return!h.shivCSS||d||s.hasCSS||(s.hasCSS=(i="article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}",o=(r=e).createElement("p"),a=r.getElementsByTagName("head")[0]||r.documentElement,o.innerHTML="x<style>"+i+"</style>",!!a.insertBefore(o.lastChild,a.firstChild))),p||(t=e,(n=s).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return h.shivMethods?f(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+u().join().replace(/[\w\-]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,n.frag)),e}var d,p,n=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,r="_html5shiv",a=0,s={};!function(){try{var e=l.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,p=1==e.childNodes.length||function(){l.createElement("a");var e=l.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){p=d=!0}}();var h={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==n.shivCSS,supportsUnknownElements:p,shivMethods:!1!==n.shivMethods,type:"default",shivDocument:t,createElement:f,createDocumentFragment:function(e,t){if(e=e||l,p)return e.createDocumentFragment();for(var n=(t=t||c(e)).frag.cloneNode(),r=0,i=u(),o=i.length;r<o;r++)n.createElement(i[r]);return n}};e.html5=h,t(l)}(this,f),c._version="2.8.3",c._prefixes=y,c._domPrefixes=w,c._cssomPrefixes=x,c.hasEvent=A,c.testProp=function(e){return s([e])},c.testAllProps=l,c.testStyles=e,c.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+N.join(" ")),c}(this,this.document),function(e,v){function f(e){return"[object Function]"==i.call(e)}function y(e){return"string"==typeof e}function d(){}function b(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function x(){var e=C.shift();E=1,e?e.t?w(function(){("c"==e.t?D.injectCss:D.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),x()):E=0}function t(e,t,n,r,i){return E=0,t=t||"j",y(e)?(a="c"==t?A:S,s=e,l=t,u=this.i++,c=n,f=r,d=(d=i)||D.errorTimeout,p=v.createElement(a),m=h=0,g={t:l,s:s,e:c,a:f,x:d},1===j[s]&&(m=1,j[s]=[]),"object"==a?p.data=s:(p.src=s,p.type=a),p.width=p.height="0",p.onerror=p.onload=p.onreadystatechange=function(){o.call(this,m)},C.splice(u,0,g),"img"!=a&&(m||2===j[s]?(N.insertBefore(p,k?null:T),w(o,d)):j[s].push(p))):(C.splice(this.i++,0,e),1==C.length&&x()),this;function o(e){if(!h&&b(p.readyState)&&(g.r=h=1,E||x(),p.onload=p.onreadystatechange=null,e))for(var t in"img"!=a&&w(function(){N.removeChild(p)},50),j[s])j[s].hasOwnProperty(t)&&j[s][t].onload()}var a,s,l,u,c,f,d,p,h,m,g}function s(){var e=D;return e.loader={load:t,i:0},e}var n,r=v.documentElement,w=e.setTimeout,T=v.getElementsByTagName("script")[0],i={}.toString,C=[],E=0,o="MozAppearance"in r.style,k=o&&!!v.createRange().compareNode,N=k?r:T.parentNode,r=e.opera&&"[object Opera]"==i.call(e.opera),r=!!v.attachEvent&&!r,S=o?"object":r?"script":"img",A=r?"script":S,a=Array.isArray||function(e){return"[object Array]"==i.call(e)},l=[],j={},u={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},D=function(e){function c(e,t,n,r,i){var o=function(e){for(var t,n,e=e.split("!"),r=l.length,i=e.pop(),o=e.length,i={url:i,origUrl:i,prefixes:e},a=0;a<o;a++)n=e[a].split("="),(t=u[n.shift()])&&(i=t(i,n));for(a=0;a<r;a++)i=l[a](i);return i}(e),a=o.autoCallback;o.url.split(".").pop().split("?").shift(),o.bypass||(t=t&&(f(t)?t:t[e]||t[r]||t[e.split("/").pop().split("?")[0]]),o.instead?o.instead(e,t,n,r,i):(j[o.url]?o.noexec=!0:j[o.url]=1,n.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":void 0,o.noexec,o.attrs,o.timeout),(f(t)||f(a))&&n.load(function(){s(),t&&t(o.origUrl,i,r),a&&a(o.origUrl,i,r),j[o.url]=2})))}function t(e,t){function n(n,e){if(n){if(y(n))e||(s=function(){var e=[].slice.call(arguments);l.apply(this,e),u()}),c(n,s,t,0,o);else if(Object(n)===n)for(i in r=function(){var e,t=0;for(e in n)n.hasOwnProperty(e)&&t++;return t}(),n)n.hasOwnProperty(i)&&(e||--r||(f(s)?s=function(){var e=[].slice.call(arguments);l.apply(this,e),u()}:s[i]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),u()}}(l[i])),c(n[i],s,t,i,o))}else e||u()}var r,i,o=!!e.test,a=e.load||e.both,s=e.callback||d,l=s,u=e.complete||d;n(o?e.yep:e.nope,!!a),a&&n(a)}var n,r,i=this.yepnope.loader;if(y(e))c(e,0,i,0);else if(a(e))for(n=0;n<e.length;n++)y(r=e[n])?c(r,0,i,0):a(r)?D(r):Object(r)===r&&t(r,i);else Object(e)===e&&t(e,i)};D.addPrefix=function(e,t){u[e]=t},D.addFilter=function(e){l.push(e)},D.errorTimeout=1e4,null==v.readyState&&v.addEventListener&&(v.readyState="loading",v.addEventListener("DOMContentLoaded",n=function(){v.removeEventListener("DOMContentLoaded",n,0),v.readyState="complete"},0)),e.yepnope=s(),e.yepnope.executeStack=x,e.yepnope.injectJs=function(e,t,n,r,i,o){var a,s,l=v.createElement("script"),r=r||D.errorTimeout;for(s in l.src=e,n)l.setAttribute(s,n[s]);t=o?x:t||d,l.onreadystatechange=l.onload=function(){!a&&b(l.readyState)&&(a=1,t(),l.onload=l.onreadystatechange=null)},w(function(){a||t(a=1)},r),i?l.onload():T.parentNode.insertBefore(l,T)},e.yepnope.injectCss=function(e,t,n,r,i,o){var a,r=v.createElement("link"),t=o?x:t||d;for(a in r.href=e,r.rel="stylesheet",r.type="text/css",n)r.setAttribute(a,n[a]);i||(T.parentNode.insertBefore(r,T),w(t,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
function changeSlideClasses(e,t,i){e&&e.getCellElements().forEach(function(e){e.classList[t](i)})}!function(e){"use strict";function i(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}var n,o,s;function t(e,t){(n(e,t)?s:o)(e,t)}s="classList"in document.documentElement?(n=function(e,t){return e.classList.contains(t)},o=function(e,t){e.classList.add(t)},function(e,t){e.classList.remove(t)}):(n=function(e,t){return i(t).test(e.className)},o=function(e,t){n(e,t)||(e.className=e.className+" "+t)},function(e,t){e.className=e.className.replace(i(t)," ")});var r={hasClass:n,addClass:o,removeClass:s,toggleClass:t,has:n,add:o,remove:s,toggle:t};"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r:e.classie=r}(window),function(t,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("jquery")):t.jQueryBridget=i(t,t.jQuery)}(window,function(e,t){"use strict";var u=Array.prototype.slice,i=e.console,h=void 0===i?function(){}:function(e){i.error(e)};function n(c,o,d){(d=d||t||e.jQuery)&&(o.prototype.option||(o.prototype.option=function(e){d.isPlainObject(e)&&(this.options=d.extend(!0,this.options,e))}),d.fn[c]=function(e){if("string"!=typeof e)return n=e,this.each(function(e,t){var i=d.data(t,c);i?(i.option(n),i._init()):(i=new o(t,n),d.data(t,c,i))}),this;var t,s,r,a,l,n,i=u.call(arguments,1);return r=i,l="$()."+c+'("'+(s=e)+'")',(t=this).each(function(e,t){var i,n,o=d.data(t,c);o?(i=o[s])&&"_"!=s.charAt(0)?(n=i.apply(o,r),a=void 0===a?n:a):h(l+" is not a valid method"):h(c+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t},s(d))}function s(e){!e||e&&e.bridget||(e.bridget=n)}return s(t||e.jQuery),n}),function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{};return(i[e]=i[e]||{})[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var s=i[o];n&&n[s]&&(this.off(e,s),delete n[s]),s.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"function"==typeof define&&define.amd?define("get-size/get-size",t):"object"==typeof module&&module.exports?module.exports=t():e.getSize=t()}(window,function(){"use strict";function x(e){var t=parseFloat(e);return-1==e.indexOf("%")&&!isNaN(t)&&t}var i="undefined"==typeof console?function(){}:function(e){console.error(e)},w=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],S=w.length;function C(e){var t=getComputedStyle(e);return t||i("Style returned "+t+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),t}var E,k=!1;function T(e){var t,i,n;if(k||(k=!0,(t=document.createElement("div")).style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box",(i=document.body||document.documentElement).appendChild(t),n=C(t),E=200==Math.round(x(n.width)),T.isBoxSizeOuter=E,i.removeChild(t)),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var o=C(e);if("none"==o.display)return function(){for(var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},t=0;t<S;t++){e[w[t]]=0}return e}();var s={};s.width=e.offsetWidth,s.height=e.offsetHeight;for(var r=s.isBorderBox="border-box"==o.boxSizing,a=0;a<S;a++){var l=w[a],c=o[l],d=parseFloat(c);s[l]=isNaN(d)?0:d}var u=s.paddingLeft+s.paddingRight,h=s.paddingTop+s.paddingBottom,p=s.marginLeft+s.marginRight,f=s.marginTop+s.marginBottom,m=s.borderLeftWidth+s.borderRightWidth,g=s.borderTopWidth+s.borderBottomWidth,v=r&&E,b=x(o.width);!1!==b&&(s.width=b+(v?0:u+m));var y=x(o.height);return!1!==y&&(s.height=y+(v?0:h+g)),s.innerWidth=s.width-(u+m),s.innerHeight=s.height-(h+g),s.outerWidth=s.width+p,s.outerHeight=s.height+f,s}}return T}),function(e,t){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",t):"object"==typeof module&&module.exports?module.exports=t():e.matchesSelector=t()}(window,function(){"use strict";var i=function(){var e=window.Element.prototype;if(e.matches)return"matches";if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0;i<t.length;i++){var n=t[i]+"MatchesSelector";if(e[n])return n}}();return function(e,t){return e[i](t)}}),function(t,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("desandro-matches-selector")):t.fizzyUIUtils=i(t,t.matchesSelector)}(window,function(c,s){var d={extend:function(e,t){for(var i in t)e[i]=t[i];return e},modulo:function(e,t){return(e%t+t)%t}},t=Array.prototype.slice;d.makeArray=function(e){return Array.isArray(e)?e:null==e?[]:"object"==typeof e&&"number"==typeof e.length?t.call(e):[e]},d.removeFrom=function(e,t){var i=e.indexOf(t);-1!=i&&e.splice(i,1)},d.getParent=function(e,t){for(;e.parentNode&&e!=document.body;)if(e=e.parentNode,s(e,t))return e},d.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e},d.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},d.filterFindElements=function(e,n){e=d.makeArray(e);var o=[];return e.forEach(function(e){if(e instanceof HTMLElement)if(n){s(e,n)&&o.push(e);for(var t=e.querySelectorAll(n),i=0;i<t.length;i++)o.push(t[i])}else o.push(e)}),o},d.debounceMethod=function(e,t,n){n=n||100;var o=e.prototype[t],s=t+"Timeout";e.prototype[t]=function(){var e=this[s];clearTimeout(e);var t=arguments,i=this;this[s]=setTimeout(function(){o.apply(i,t),delete i[s]},n)}},d.docReady=function(e){var t=document.readyState;"complete"==t||"interactive"==t?setTimeout(e):document.addEventListener("DOMContentLoaded",e)},d.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,i){return t+"-"+i}).toLowerCase()};var u=c.console;return d.htmlInit=function(a,l){d.docReady(function(){var e=d.toDashed(l),o="data-"+e,t=document.querySelectorAll("["+o+"]"),i=document.querySelectorAll(".js-"+e),n=d.makeArray(t).concat(d.makeArray(i)),s=o+"-options",r=c.jQuery;n.forEach(function(t){var e,i=t.getAttribute(o)||t.getAttribute(s);try{e=i&&JSON.parse(i)}catch(e){return void(u&&u.error("Error parsing "+o+" on "+t.className+": "+e))}var n=new a(t,e);r&&r.data(t,l,n)})})},d}),function(e,t){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(e){return t(0,e)}):"object"==typeof module&&module.exports?module.exports=t(0,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=t(0,e.getSize))}(window,function(e,t){function i(e,t){this.element=e,this.parent=t,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var e=this.parent.originSide;this.element.style[e]=""},n.getSize=function(){this.size=t(this.element)},n.setPosition=function(e){this.x=e,this.updateTarget(),this.renderPosition(e)},n.updateTarget=n.setDefaultTarget=function(){var e="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[e]+this.size.width*this.parent.cellAlign},n.renderPosition=function(e){var t=this.parent.originSide;this.element.style[t]=this.parent.getPositionValue(e)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(e){this.shift=e,this.renderPosition(this.x+this.parent.slideableWidth*e)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(e,t){"function"==typeof define&&define.amd?define("flickity/js/slide",t):"object"==typeof module&&module.exports?module.exports=t():(e.Flickity=e.Flickity||{},e.Flickity.Slide=t())}(window,function(){"use strict";function e(e){this.parent=e,this.isOriginLeft="left"==e.originSide,this.cells=[],this.outerWidth=0,this.height=0}var t=e.prototype;return t.addCell=function(e){var t;this.cells.push(e),this.outerWidth+=e.size.outerWidth,this.height=Math.max(e.size.outerHeight,this.height),1==this.cells.length&&(this.x=e.x,t=this.isOriginLeft?"marginLeft":"marginRight",this.firstMargin=e.size[t])},t.updateTarget=function(){var e=this.isOriginLeft?"marginRight":"marginLeft",t=this.getLastCell(),i=t?t.size[e]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},t.getLastCell=function(){return this.cells[this.cells.length-1]},t.select=function(){this.cells.forEach(function(e){e.select()})},t.unselect=function(){this.cells.forEach(function(e){e.unselect()})},t.getCellElements=function(){return this.cells.map(function(e){return e.element})},e}),function(e,t){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(e){return t(0,e)}):"object"==typeof module&&module.exports?module.exports=t(0,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=t(0,e.fizzyUIUtils))}(window,function(e,t){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var e,t=this.x;this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating&&(e=this,requestAnimationFrame(function(){e.animate()}))},positionSlider:function(){var e=this.x;this.options.wrapAround&&1<this.cells.length&&(e=t.modulo(e,this.slideableWidth),e-=this.slideableWidth,this.shiftWrapCells(e)),this.setTranslateX(e,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(e,t){e+=this.cursorPosition,e=this.options.rightToLeft?-e:e;var i=this.getPositionValue(e);this.slider.style.transform=t?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var e,t,i=this.slides[0];i&&(t=(e=-this.x-i.target)/this.slidesWidth,this.dispatchEvent("scroll",null,[t,e]))},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(e){return this.options.percentPosition?.01*Math.round(e/this.size.innerWidth*1e4)+"%":Math.round(e)+"px"},settle:function(e){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*e)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(e){var t=this.cursorPosition+e;this._shiftCells(this.beforeShiftCells,t,-1);var i=this.size.innerWidth-(e+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(e,t,i){for(var n=0;n<e.length;n++){var o=e[n],s=0<t?i:0;o.wrapShift(s),t-=o.size.outerWidth}},_unshiftCells:function(e){if(e&&e.length)for(var t=0;t<e.length;t++)e[t].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(e){this.velocity+=e},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){var e;this.isDraggable&&this.isPointerDown&&(e=this.dragX-this.x-this.velocity,this.applyForce(e))},applySelectedAttraction:function(){var e;this.isDraggable&&this.isPointerDown||this.isFreeScrolling||!this.slides.length||(e=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction,this.applyForce(e))}};return i}),function(r,a){var e;"function"==typeof define&&define.amd?define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(e,t,i,n,o,s){return a(r,e,t,i,n,o,s)}):"object"==typeof module&&module.exports?module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate")):(e=r.Flickity,r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,e.Cell,e.Slide,e.animatePrototype))}(window,function(n,e,t,a,i,r,o){var l=n.jQuery,s=n.getComputedStyle,c=n.console;function d(e,t){for(e=a.makeArray(e);e.length;)t.appendChild(e.shift())}var u=0,h={};function p(e,t){var i=a.getQueryElement(e);if(i){if(this.element=i,this.element.flickityGUID){var n=h[this.element.flickityGUID];return n.option(t),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(t),this._create()}else c&&c.error("Bad element for Flickity: "+(i||e))}p.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},p.createMethods=[];var f=p.prototype;a.extend(f,e.prototype),f._create=function(){var e=this.guid=++u;for(var t in this.element.flickityGUID=e,(h[e]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[t];this.on(t,i)}p.createMethods.forEach(function(e){this[e]()},this),this.options.watchCSS?this.watchCSS():this.activate()},f.option=function(e){a.extend(this.options,e)},f.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),d(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},f._createSlider=function(){var e=document.createElement("div");e.className="flickity-slider",e.style[this.originSide]=0,this.slider=e},f._filterFindCellElements=function(e){return a.filterFindElements(e,this.options.cellSelector)},f.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},f._makeCells=function(e){return this._filterFindCellElements(e).map(function(e){return new i(e,this)},this)},f.getLastCell=function(){return this.cells[this.cells.length-1]},f.getLastSlide=function(){return this.slides[this.slides.length-1]},f.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},f._positionCells=function(e){e=e||0,this.maxCellHeight=e&&this.maxCellHeight||0;var t,i=0;0<e&&(i=(t=this.cells[e-1]).x+t.size.outerWidth);for(var n=this.cells.length,o=e;o<n;o++){var s=this.cells[o];s.setPosition(i),i+=s.size.outerWidth,this.maxCellHeight=Math.max(s.size.outerHeight,this.maxCellHeight)}this.slideableWidth=i,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},f._sizeCells=function(e){e.forEach(function(e){e.getSize()})},f.updateSlides=function(){var n,o,s;this.slides=[],this.cells.length&&(n=new r(this),this.slides.push(n),o="left"==this.originSide?"marginRight":"marginLeft",s=this._getCanCellFit(),this.cells.forEach(function(e,t){var i;n.cells.length&&(i=n.outerWidth-n.firstMargin+(e.size.outerWidth-e.size[o]),s.call(this,t,i)||(n.updateTarget(),n=new r(this),this.slides.push(n))),n.addCell(e)},this),n.updateTarget(),this.updateSelectedSlide())},f._getCanCellFit=function(){var e=this.options.groupCells;if(!e)return function(){return!1};if("number"==typeof e){var t=parseInt(e,10);return function(e){return e%t!=0}}var i="string"==typeof e&&e.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(e,t){return t<=(this.size.innerWidth+1)*n}},f._init=f.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},f.getSize=function(){this.size=t(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var m={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return f.setCellAlign=function(){var e=m[this.options.cellAlign];this.cellAlign=e?e[this.originSide]:this.options.cellAlign},f.setGallerySize=function(){var e;this.options.setGallerySize&&(e=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight,this.viewport.style.height=e+"px")},f._getWrapShiftCells=function(){var e,t;this.options.wrapAround&&(this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells),e=this.cursorPosition,t=this.cells.length-1,this.beforeShiftCells=this._getGapCells(e,t,-1),e=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(e,0,1))},f._getGapCells=function(e,t,i){for(var n=[];0<e;){var o=this.cells[t];if(!o)break;n.push(o),t+=i,e-=o.size.outerWidth}return n},f._containSlides=function(){var e,t,i,n,o,s,r;this.options.contain&&!this.options.wrapAround&&this.cells.length&&(t=(e=this.options.rightToLeft)?"marginRight":"marginLeft",i=e?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],o=n<this.size.innerWidth,s=this.cursorPosition+this.cells[0].size[t],r=n-this.size.innerWidth*(1-this.cellAlign),this.slides.forEach(function(e){o?e.target=n*this.cellAlign:(e.target=Math.max(e.target,s),e.target=Math.min(e.target,r))},this))},f.dispatchEvent=function(e,t,i){var n,o,s=t?[t].concat(i):i;this.emitEvent(e,s),l&&this.$element&&(n=e+=this.options.namespaceJQueryEvents?".flickity":"",t&&((o=l.Event(t)).type=e,n=o),this.$element.trigger(n,i))},f.select=function(e,t,i){var n;this.isActive&&(e=parseInt(e,10),this._wrapSelect(e),(this.options.wrapAround||t)&&(e=a.modulo(e,this.slides.length)),this.slides[e]&&(n=this.selectedIndex,this.selectedIndex=e,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[e]),e!=n&&this.dispatchEvent("change",null,[e]),this.dispatchEvent("cellSelect")))},f._wrapSelect=function(e){var t=this.slides.length;if(!(this.options.wrapAround&&1<t))return e;var i=a.modulo(e,t),n=Math.abs(i-this.selectedIndex),o=Math.abs(i+t-this.selectedIndex),s=Math.abs(i-t-this.selectedIndex);!this.isDragSelect&&o<n?e+=t:!this.isDragSelect&&s<n&&(e-=t),e<0?this.x-=this.slideableWidth:t<=e&&(this.x+=this.slideableWidth)},f.previous=function(e,t){this.select(this.selectedIndex-1,e,t)},f.next=function(e,t){this.select(this.selectedIndex+1,e,t)},f.updateSelectedSlide=function(){var e=this.slides[this.selectedIndex];e&&(this.unselectSelectedSlide(),(this.selectedSlide=e).select(),this.selectedCells=e.cells,this.selectedElements=e.getCellElements(),this.selectedCell=e.cells[0],this.selectedElement=this.selectedElements[0])},f.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},f.selectInitialIndex=function(){var e=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(e&&"string"==typeof e)if(this.queryCell(e))return void this.selectCell(e,!1,!0);var t=0;e&&this.slides[e]&&(t=e),this.select(t,!1,!0)}},f.selectCell=function(e,t,i){var n,o=this.queryCell(e);o&&(n=this.getCellSlideIndex(o),this.select(n,t,i))},f.getCellSlideIndex=function(e){for(var t=0;t<this.slides.length;t++){if(-1!=this.slides[t].cells.indexOf(e))return t}},f.getCell=function(e){for(var t=0;t<this.cells.length;t++){var i=this.cells[t];if(i.element==e)return i}},f.getCells=function(e){e=a.makeArray(e);var i=[];return e.forEach(function(e){var t=this.getCell(e);t&&i.push(t)},this),i},f.getCellElements=function(){return this.cells.map(function(e){return e.element})},f.getParentCell=function(e){var t=this.getCell(e);return t||(e=a.getParent(e,".flickity-slider > *"),this.getCell(e))},f.getAdjacentCellElements=function(e,t){if(!e)return this.selectedSlide.getCellElements();t=void 0===t?this.selectedIndex:t;var i=this.slides.length;if(i<=1+2*e)return this.getCellElements();for(var n=[],o=t-e;o<=t+e;o++){var s=this.options.wrapAround?a.modulo(o,i):o,r=this.slides[s];r&&(n=n.concat(r.getCellElements()))}return n},f.queryCell=function(e){if("number"==typeof e)return this.cells[e];if("string"==typeof e){if(e.match(/^[#\.]?[\d\/]/))return;e=this.element.querySelector(e)}return this.getCell(e)},f.uiChange=function(){this.emitEvent("uiChange")},f.childUIPointerDown=function(e){"touchstart"!=e.type&&e.preventDefault(),this.focus()},f.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(p,"onresize",150),f.resize=function(){var e;this.isActive&&(this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize"),e=this.selectedElements&&this.selectedElements[0],this.selectCell(e,!1,!0))},f.watchCSS=function(){this.options.watchCSS&&(-1!=s(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},f.onkeydown=function(e){var t,i=document.activeElement&&document.activeElement!=this.element;!this.options.accessibility||i||(t=p.keyboardHandlers[e.keyCode])&&t.call(this)},p.keyboardHandlers={37:function(){var e=this.options.rightToLeft?"next":"previous";this.uiChange(),this[e]()},39:function(){var e=this.options.rightToLeft?"previous":"next";this.uiChange(),this[e]()}},f.focus=function(){var e=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=e&&n.scrollTo(n.pageXOffset,e)},f.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(e){e.destroy()}),this.element.removeChild(this.viewport),d(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},f.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete h[this.guid]},a.extend(f,o),p.data=function(e){var t=(e=a.getQueryElement(e))&&e.flickityGUID;return t&&h[t]},a.htmlInit(p,"flickity"),l&&l.bridget&&l.bridget("flickity",p),p.setJQuery=function(e){l=e},p.Cell=i,p.Slide=r,p}),function(t,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter")):t.Unipointer=i(t,t.EvEmitter)}(window,function(o,e){function t(){}var i=t.prototype=Object.create(e.prototype);i.bindStartEvent=function(e){this._bindStartEvent(e,!0)},i.unbindStartEvent=function(e){this._bindStartEvent(e,!1)},i._bindStartEvent=function(e,t){var i=(t=void 0===t||t)?"addEventListener":"removeEventListener",n="mousedown";o.PointerEvent?n="pointerdown":"ontouchstart"in o&&(n="touchstart"),e[i](n,this)},i.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},i.getTouch=function(e){for(var t=0;t<e.length;t++){var i=e[t];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(e){var t=e.button;t&&0!==t&&1!==t||this._pointerDown(e,e)},i.ontouchstart=function(e){this._pointerDown(e,e.changedTouches[0])},i.onpointerdown=function(e){this._pointerDown(e,e)},i._pointerDown=function(e,t){e.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==t.pointerId?t.pointerId:t.identifier,this.pointerDown(e,t))},i.pointerDown=function(e,t){this._bindPostStartEvents(e),this.emitEvent("pointerDown",[e,t])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(e){var t;e&&((t=n[e.type]).forEach(function(e){o.addEventListener(e,this)},this),this._boundPointerEvents=t)},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(e){o.removeEventListener(e,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(e){this._pointerMove(e,e)},i.onpointermove=function(e){e.pointerId==this.pointerIdentifier&&this._pointerMove(e,e)},i.ontouchmove=function(e){var t=this.getTouch(e.changedTouches);t&&this._pointerMove(e,t)},i._pointerMove=function(e,t){this.pointerMove(e,t)},i.pointerMove=function(e,t){this.emitEvent("pointerMove",[e,t])},i.onmouseup=function(e){this._pointerUp(e,e)},i.onpointerup=function(e){e.pointerId==this.pointerIdentifier&&this._pointerUp(e,e)},i.ontouchend=function(e){var t=this.getTouch(e.changedTouches);t&&this._pointerUp(e,t)},i._pointerUp=function(e,t){this._pointerDone(),this.pointerUp(e,t)},i.pointerUp=function(e,t){this.emitEvent("pointerUp",[e,t])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(e){e.pointerId==this.pointerIdentifier&&this._pointerCancel(e,e)},i.ontouchcancel=function(e){var t=this.getTouch(e.changedTouches);t&&this._pointerCancel(e,t)},i._pointerCancel=function(e,t){this._pointerDone(),this.pointerCancel(e,t)},i.pointerCancel=function(e,t){this.emitEvent("pointerCancel",[e,t])},t.getPointerPoint=function(e){return{x:e.pageX,y:e.pageY}},t}),function(t,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("unipointer")):t.Unidragger=i(t,t.Unipointer)}(window,function(s,e){function t(){}var i=t.prototype=Object.create(e.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(e){for(var t=(e=void 0===e||e)?"addEventListener":"removeEventListener",i=e?this._touchActionValue:"",n=0;n<this.handles.length;n++){var o=this.handles[n];this._bindStartEvent(o,e),o[t]("click",this),s.PointerEvent&&(o.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(e,t){this.okayPointerDown(e)&&(this.pointerDownPointer=t,e.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(e),this.emitEvent("pointerDown",[e,t]))};var o={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(e){var t=o[e.target.nodeName],i=r[e.target.type],n=!t||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var e=document.activeElement;e&&e.blur&&e!=document.body&&e.blur()},i.pointerMove=function(e,t){var i=this._dragPointerMove(e,t);this.emitEvent("pointerMove",[e,t,i]),this._dragMove(e,t,i)},i._dragPointerMove=function(e,t){var i={x:t.pageX-this.pointerDownPointer.pageX,y:t.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(e,t),i},i.hasDragStarted=function(e){return 3<Math.abs(e.x)||3<Math.abs(e.y)},i.pointerUp=function(e,t){this.emitEvent("pointerUp",[e,t]),this._dragPointerUp(e,t)},i._dragPointerUp=function(e,t){this.isDragging?this._dragEnd(e,t):this._staticClick(e,t)},i._dragStart=function(e,t){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(e,t)},i.dragStart=function(e,t){this.emitEvent("dragStart",[e,t])},i._dragMove=function(e,t,i){this.isDragging&&this.dragMove(e,t,i)},i.dragMove=function(e,t,i){e.preventDefault(),this.emitEvent("dragMove",[e,t,i])},i._dragEnd=function(e,t){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(e,t)},i.dragEnd=function(e,t){this.emitEvent("dragEnd",[e,t])},i.onclick=function(e){this.isPreventingClicks&&e.preventDefault()},i._staticClick=function(e,t){this.isIgnoringMouseUp&&"mouseup"==e.type||(this.staticClick(e,t),"mouseup"!=e.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(e,t){this.emitEvent("staticClick",[e,t])},t.getPointerPoint=e.getPointerPoint,t}),function(n,o){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(e,t,i){return o(n,e,t,i)}):"object"==typeof module&&module.exports?module.exports=o(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=o(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,e,t,a){a.extend(e.defaults,{draggable:">1",dragThreshold:3}),e.createMethods.push("_createDrag");var n=e.prototype;a.extend(n,t.prototype),n._touchActionValue="pan-y";var o="createTouch"in document,s=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),o&&!s&&(i.addEventListener("touchmove",function(){}),s=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(e,t){this.isDraggable?this.okayPointerDown(e)&&(this._pointerDownPreventDefault(e),this.pointerDownFocus(e),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(e,t)):this._pointerDownDefault(e,t)},n._pointerDownDefault=function(e,t){this.pointerDownPointer={pageX:t.pageX,pageY:t.pageY},this._bindPostStartEvents(e),this.dispatchEvent("pointerDown",e,[t])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(e){r[e.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(e){var t="touchstart"==e.type,i="touch"==e.pointerType,n=r[e.target.nodeName];t||i||n||e.preventDefault()},n.hasDragStarted=function(e){return Math.abs(e.x)>this.options.dragThreshold},n.pointerUp=function(e,t){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",e,[t]),this._dragPointerUp(e,t)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(e,t){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",e,[t]))},n.pointerMove=function(e,t){var i=this._dragPointerMove(e,t);this.dispatchEvent("pointerMove",e,[t,i]),this._dragMove(e,t,i)},n.dragMove=function(e,t,i){var n,o,s,r;this.isDraggable&&(e.preventDefault(),this.previousDragX=this.dragX,n=this.options.rightToLeft?-1:1,this.options.wrapAround&&(i.x=i.x%this.slideableWidth),s=this.dragStartPosition+i.x*n,!this.options.wrapAround&&this.slides.length&&(s=(s=(o=Math.max(-this.slides[0].target,this.dragStartPosition))<s?.5*(s+o):s)<(r=Math.min(-this.getLastSlide().target,this.dragStartPosition))?.5*(s+r):s),this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",e,[t,i]))},n.dragEnd=function(e,t){var i,n;this.isDraggable&&(this.options.freeScroll&&(this.isFreeScrolling=!0),i=this.dragEndRestingSelect(),this.options.freeScroll&&!this.options.wrapAround?(n=this.getRestingPosition(),this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target):this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect()),delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",e,[t]))},n.dragEndRestingSelect=function(){var e=this.getRestingPosition(),t=Math.abs(this.getSlideDistance(-e,this.selectedIndex)),i=this._getClosestResting(e,t,1),n=this._getClosestResting(e,t,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(e,t,i){for(var n=this.selectedIndex,o=1/0,s=this.options.contain&&!this.options.wrapAround?function(e,t){return e<=t}:function(e,t){return e<t};s(t,o)&&(n+=i,o=t,null!==(t=this.getSlideDistance(-e,n)));)t=Math.abs(t);return{distance:o,index:n-i}},n.getSlideDistance=function(e,t){var i=this.slides.length,n=this.options.wrapAround&&1<i,o=n?a.modulo(t,i):t,s=this.slides[o];if(!s)return null;var r=n?this.slideableWidth*Math.floor(t/i):0;return e-(s.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var e=this.getSlideDistance(-this.dragX,this.selectedIndex),t=this.previousDragX-this.dragX;return 0<e&&0<t?1:e<0&&t<0?-1:0},n.staticClick=function(e,t){var i=this.getParentCell(e.target),n=i&&i.element,o=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",e,[t,n,o])},n.onscroll=function(){var e=l(),t=this.pointerDownScroll.x-e.x,i=this.pointerDownScroll.y-e.y;(3<Math.abs(t)||3<Math.abs(i))&&this._pointerDone()},e}),function(e,n){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(e,t,i){return n(0,e,t,i)}):"object"==typeof module&&module.exports?module.exports=n(0,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):n(0,e.Flickity,e.Unipointer,e.fizzyUIUtils)}(window,function(e,t,i,n){"use strict";var o="http://www.w3.org/2000/svg";function s(e,t){this.direction=e,this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var e=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==e;var t=this.element=document.createElement("button");t.className="flickity-button flickity-prev-next-button",t.className+=this.isPrevious?" previous":" next",t.setAttribute("type","button"),this.disable(),t.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();t.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},s.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},s.prototype.createSVG=function(){var e=document.createElementNS(o,"svg");e.setAttribute("class","flickity-button-icon"),e.setAttribute("viewBox","0 0 100 100");var t,i=document.createElementNS(o,"path"),n="string"!=typeof(t=this.parent.options.arrowShape)?"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z":t;return i.setAttribute("d",n),i.setAttribute("class","arrow"),this.isLeft||i.setAttribute("transform","translate(100, 100) rotate(180) "),e.appendChild(i),e},s.prototype.handleEvent=n.handleEvent,s.prototype.onclick=function(){var e;this.isEnabled&&(this.parent.uiChange(),e=this.isPrevious?"previous":"next",this.parent[e]())},s.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},s.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},s.prototype.update=function(){var e,t,i=this.parent.slides;this.parent.options.wrapAround&&1<i.length?this.enable():(e=i.length?i.length-1:0,t=this.isPrevious?0:e,this[this.parent.selectedIndex==t?"disable":"enable"]())},s.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(t.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),t.createMethods.push("_createPrevNextButtons");var r=t.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new s(-1,this),this.nextButton=new s(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},t.PrevNextButton=s,t}),function(e,n){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(e,t,i){return n(0,e,t,i)}):"object"==typeof module&&module.exports?module.exports=n(0,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):n(0,e.Flickity,e.Unipointer,e.fizzyUIUtils)}(window,function(e,t,i,n){function o(e){this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},o.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},o.prototype.setDots=function(){var e=this.parent.slides.length-this.dots.length;0<e?this.addDots(e):e<0&&this.removeDots(-e)},o.prototype.addDots=function(e){for(var t=document.createDocumentFragment(),i=[],n=this.dots.length,o=n+e,s=n;s<o;s++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(s+1)),t.appendChild(r),i.push(r)}this.holder.appendChild(t),this.dots=this.dots.concat(i)},o.prototype.removeDots=function(e){this.dots.splice(this.dots.length-e,e).forEach(function(e){this.holder.removeChild(e)},this)},o.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},o.prototype.onTap=o.prototype.onClick=function(e){var t,i=e.target;"LI"==i.nodeName&&(this.parent.uiChange(),t=this.dots.indexOf(i),this.parent.select(t))},o.prototype.destroy=function(){this.deactivate(),this.allOff()},t.PageDots=o,n.extend(t.defaults,{pageDots:!0}),t.createMethods.push("_createPageDots");var s=t.prototype;return s._createPageDots=function(){this.options.pageDots&&(this.pageDots=new o(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},s.activatePageDots=function(){this.pageDots.activate()},s.updateSelectedPageDots=function(){this.pageDots.updateSelected()},s.updatePageDots=function(){this.pageDots.setDots()},s.deactivatePageDots=function(){this.pageDots.deactivate()},t.PageDots=o,t}),function(e,t){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],t):"object"==typeof module&&module.exports?module.exports=t(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):t(e.EvEmitter,e.fizzyUIUtils,e.Flickity)}(window,function(e,t,i){function n(e){this.parent=e,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(e.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){var e,t;"playing"==this.state&&(e="number"==typeof(e=this.parent.options.autoPlay)?e:3e3,(t=this).clear(),this.timeout=setTimeout(function(){t.parent.next(!0),t.tick()},e))},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},t.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var o=i.prototype;return o._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},o.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},o.playPlayer=function(){this.player.play()},o.stopPlayer=function(){this.player.stop()},o.pausePlayer=function(){this.player.pause()},o.unpausePlayer=function(){this.player.unpause()},o.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},o.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},o.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(e,t){return i(0,e,t)}):"object"==typeof module&&module.exports?module.exports=i(0,require("./flickity"),require("fizzy-ui-utils")):i(0,e.Flickity,e.fizzyUIUtils)}(window,function(e,t,n){var i=t.prototype;return i.insert=function(e,t){var i,n,o,s,r,a,l,c=this._makeCells(e);c&&c.length&&(i=this.cells.length,t=void 0===t?i:t,o=c,s=document.createDocumentFragment(),o.forEach(function(e){s.appendChild(e.element)}),n=s,(r=t==i)?this.slider.appendChild(n):(a=this.cells[t].element,this.slider.insertBefore(n,a)),0===t?this.cells=c.concat(this.cells):r?this.cells=this.cells.concat(c):(l=this.cells.splice(t,i-t),this.cells=this.cells.concat(c).concat(l)),this._sizeCells(c),this.cellChange(t,!0))},i.append=function(e){this.insert(e,this.cells.length)},i.prepend=function(e){this.insert(e,0)},i.remove=function(e){var i,t=this.getCells(e);t&&t.length&&(i=this.cells.length-1,t.forEach(function(e){e.remove();var t=this.cells.indexOf(e);i=Math.min(t,i),n.removeFrom(this.cells,e)},this),this.cellChange(i,!0))},i.cellSizeChange=function(e){var t,i=this.getCell(e);i&&(i.getSize(),t=this.cells.indexOf(i),this.cellChange(t))},i.cellChange=function(e,t){var i=this.selectedElement;this._positionCells(e),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[e]),this.select(this.selectedIndex),t&&this.positionSliderAtSelected()},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(e,t){return i(0,e,t)}):"object"==typeof module&&module.exports?module.exports=i(0,require("./flickity"),require("fizzy-ui-utils")):i(0,e.Flickity,e.fizzyUIUtils)}(window,function(e,t,s){"use strict";t.createMethods.push("_createLazyload");var i=t.prototype;function o(e,t){this.img=e,this.flickity=t,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var e,t,i,n=this.options.lazyLoad;n&&(e="number"==typeof n?n:0,t=this.getAdjacentCellElements(e),i=[],t.forEach(function(e){var t=function(e){if("IMG"==e.nodeName){var t=e.getAttribute("data-flickity-lazyload"),i=e.getAttribute("data-flickity-lazyload-src"),n=e.getAttribute("data-flickity-lazyload-srcset");if(t||i||n)return[e]}var o=e.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return s.makeArray(o)}(e);i=i.concat(t)}),i.forEach(function(e){new o(e,this)},this))},o.prototype.handleEvent=s.handleEvent,o.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var e=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),t=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=e,t&&this.img.setAttribute("srcset",t),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},o.prototype.onload=function(e){this.complete(e,"flickity-lazyloaded")},o.prototype.onerror=function(e){this.complete(e,"flickity-lazyerror")},o.prototype.complete=function(e,t){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(t),this.flickity.dispatchEvent("lazyLoad",e,n)},t.LazyLoader=o,t}),function(e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}((window,function(e){return e})),function(e,t){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],t):"object"==typeof module&&module.exports?module.exports=t(require("flickity"),require("fizzy-ui-utils")):e.Flickity=t(e.Flickity,e.fizzyUIUtils)}(window,function(n,o){n.createMethods.push("_createAsNavFor");var e=n.prototype;return e._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var e,t=this.options.asNavFor;t&&(e=this,setTimeout(function(){e.setNavCompanion(t)}))},e.setNavCompanion=function(e){e=o.getQueryElement(e);var t,i=n.data(e);i&&i!=this&&(this.navCompanion=i,(t=this).onNavCompanionSelect=function(){t.navCompanionSelect()},i.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0))},e.navCompanionSelect=function(e){var t,i,n,o,s,r,a,l;this.navCompanion&&(t=this.navCompanion.selectedCells[0],n=(i=this.navCompanion.cells.indexOf(t))+this.navCompanion.selectedCells.length-1,o=Math.floor((s=i,r=n,a=this.navCompanion.cellAlign,(r-s)*a+s)),this.selectCell(o,!1,e),this.removeNavSelectedElements(),o>=this.cells.length||(l=this.cells.slice(i,1+n),this.navSelectedElements=l.map(function(e){return e.element}),this.changeNavSelectedClass("add")))},e.changeNavSelectedClass=function(t){this.navSelectedElements.forEach(function(e){e.classList[t]("is-nav-selected")})},e.activateAsNavFor=function(){this.navCompanionSelect(!0)},e.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},e.onNavStaticClick=function(e,t,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},e.deactivateAsNavFor=function(){this.removeNavSelectedElements()},e.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(t,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter")):t.imagesLoaded=i(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){var s=t.jQuery,r=t.console;function a(e,t){for(var i in t)e[i]=t[i];return e}var l=Array.prototype.slice;function c(e,t,i){if(!(this instanceof c))return new c(e,t,i);var n,o=e;"string"==typeof e&&(o=document.querySelectorAll(e)),o?(this.elements=(n=o,Array.isArray(n)?n:"object"==typeof n&&"number"==typeof n.length?l.call(n):[n]),this.options=a({},this.options),"function"==typeof t?i=t:a(this.options,t),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):r.error("Bad element for imagesLoaded "+(o||e))}(c.prototype=Object.create(e.prototype)).options={},c.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},c.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background)for(var s=e.querySelectorAll(this.options.background),n=0;n<s.length;n++){var r=s[n];this.addElementBackgroundImages(r)}}};var d={1:!0,9:!0,11:!0};function i(e){this.img=e}function n(e,t){this.url=e,this.element=t,this.img=new Image}return c.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},c.prototype.addImage=function(e){var t=new i(e);this.images.push(t)},c.prototype.addBackground=function(e,t){var i=new n(e,t);this.images.push(i)},c.prototype.check=function(){var n=this;function t(e,t,i){setTimeout(function(){n.progress(e,t,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},c.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+i,e,t)},c.prototype.complete=function(){var e,t=this.hasAnyBroken?"fail":"done";this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred&&(e=this.hasAnyBroken?"reject":"resolve",this.jqDeferred[e](this))},(i.prototype=Object.create(e.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},i.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},(c.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((s=e).fn.imagesLoaded=function(e,t){return new c(this,e,t).jqDeferred.promise(s(this))})})(),c}),function(e,i){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(e,t){return i(0,e,t)}):"object"==typeof module&&module.exports?module.exports=i(0,require("flickity"),require("imagesloaded")):e.Flickity=i(0,e.Flickity,e.imagesLoaded)}(window,function(e,t,i){"use strict";t.createMethods.push("_createImagesLoaded");var n=t.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){var n;this.options.imagesLoaded&&i((n=this).slider).on("progress",function(e,t){var i=n.getParentCell(t.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})},t}),Flickity.createMethods.push("_createPrevNextCells"),Flickity.prototype._createPrevNextCells=function(){this.on("select",this.setPrevNextCells)},Flickity.prototype.setPrevNextCells=function(){changeSlideClasses(this.previousSlide,"remove","is-previous"),changeSlideClasses(this.nextSlide,"remove","is-next"),this.previousSlide=this.slides[this.selectedIndex-1],this.nextSlide=this.slides[this.selectedIndex+1],changeSlideClasses(this.previousSlide,"add","is-previous"),changeSlideClasses(this.nextSlide,"add","is-next")},function(e,t){"function"==typeof define&&define.amd?define(["flickity/js/index","fizzy-ui-utils/utils"],t):"object"==typeof module&&module.exports?module.exports=t(require("flickity"),require("fizzy-ui-utils")):t(e.Flickity,e.fizzyUIUtils)}(this,function(e,a){var t=e.Slide,o=t.prototype.updateTarget;t.prototype.updateTarget=function(){var i,n;o.apply(this,arguments),this.parent.options.fade&&(i=this.target-this.x,n=this.cells[0].x,this.cells.forEach(function(e){var t=e.x-n-i;e.renderPosition(t)}))},t.prototype.setOpacity=function(t){this.cells.forEach(function(e){e.element.style.opacity=t})};var i=e.prototype;e.createMethods.push("_createFade"),i._createFade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};var n=i.updateSlides;i.updateSlides=function(){n.apply(this,arguments),this.options.fade&&this.slides.forEach(function(e,t){var i=t==this.selectedIndex?1:0;e.setOpacity(i)},this)},i.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},i.onSettleFade=function(){delete this.didDragEnd,this.options.fade&&(this.selectedSlide.setOpacity(1),this.slides[this.fadeIndex]&&this.fadeIndex!=this.selectedIndex&&this.slides[this.fadeIndex].setOpacity(0))},i.onDragEndFade=function(){this.didDragEnd=!0},i.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},i.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(function(e){e.setOpacity("")}))};var s=i.positionSlider;i.positionSlider=function(){this.options.fade?(this.fadeSlides(),this.dispatchScrollEvent()):s.apply(this,arguments)};var r=i.positionSliderAtSelected;i.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),r.apply(this,arguments)},i.fadeSlides=function(){var e,t,i,n,o,s;this.slides.length<2||(e=this.getFadeIndexes(),t=this.slides[e.a],i=this.slides[e.b],n=this.wrapDifference(t.target,i.target),o=this.wrapDifference(t.target,-this.x),o/=n,t.setOpacity(1-o),i.setOpacity(o),s=e.a,this.isDragging&&(s=.5<o?e.a:e.b),null!=this.fadeHideIndex&&this.fadeHideIndex!=s&&this.fadeHideIndex!=e.a&&this.fadeHideIndex!=e.b&&this.slides[this.fadeHideIndex].setOpacity(0),this.fadeHideIndex=s)},i.getFadeIndexes=function(){return this.isDragging||this.didDragEnd?this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes():{a:this.fadeIndex,b:this.selectedIndex}},i.getFadeDragWrapIndexes=function(){var e=this.slides.map(function(e,t){return this.getSlideDistance(-this.x,t)},this),t=e.map(function(e){return Math.abs(e)}),i=Math.min.apply(Math,t),n=t.indexOf(i),o=e[n],s=this.slides.length,r=0<=o?1:-1;return{a:n,b:a.modulo(n+r,s)}},i.getFadeDragLimitIndexes=function(){for(var e=0,t=0;t<this.slides.length-1;t++){var i=this.slides[t];if(-this.x<i.target)break;e=t}return{a:e,b:e+1}},i.wrapDifference=function(e,t){var i=t-e;if(!this.options.wrapAround)return i;var n=i+this.slideableWidth,o=i-this.slideableWidth;return Math.abs(n)<Math.abs(i)&&(i=n),Math.abs(o)<Math.abs(i)&&(i=o),i};var l=i._getWrapShiftCells;i._getWrapShiftCells=function(){this.options.fade||l.apply(this,arguments)};var c=i.shiftWrapCells;return i.shiftWrapCells=function(){this.options.fade||c.apply(this,arguments)},e}),function(l,u,m,g){"use strict";var e,o,r,s,h,t,c,p,d,n,i,a,f,v;function b(e,t){var i,n,o,s=[],r=0;e&&e.isDefaultPrevented()||(e.preventDefault(),t=t||{},e&&e.data&&(t=d(e.data.options,t)),i=t.$target||m(e.currentTarget).trigger("blur"),(o=m.fancybox.getInstance())&&o.$trigger&&o.$trigger.is(i)||(s=t.selector?m(t.selector):(n=i.attr("data-fancybox")||"")?(s=e.data?e.data.items:[]).length?s.filter('[data-fancybox="'+n+'"]'):m('[data-fancybox="'+n+'"]'):[i],(r=m(s).index(i))<0&&(r=0),(o=m.fancybox.open(s,t,r)).$trigger=i))}l.console=l.console||{info:function(e){}},m&&(m.fn.fancybox?console.info("fancyBox already initialized"):(e={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:m.noop,beforeLoad:m.noop,afterLoad:m.noop,beforeShow:m.noop,afterShow:m.noop,beforeClose:m.noop,afterClose:m.noop,onActivate:m.noop,onDeactivate:m.noop,clickContent:function(e,t){return"image"===e.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(e,t){return"image"===e.type&&"toggleControls"},clickSlide:function(e,t){return"image"===e.type?"toggleControls":"close"},dblclickContent:function(e,t){return"image"===e.type&&"zoom"},dblclickSlide:function(e,t){return"image"===e.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},o=m(l),r=m(u),s=0,h=l.requestAnimationFrame||l.webkitRequestAnimationFrame||l.mozRequestAnimationFrame||l.oRequestAnimationFrame||function(e){return l.setTimeout(e,1e3/60)},t=l.cancelAnimationFrame||l.webkitCancelAnimationFrame||l.mozCancelAnimationFrame||l.oCancelAnimationFrame||function(e){l.clearTimeout(e)},c=function(){var e,t=u.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(t.style[e]!==g)return i[e];return"transitionend"}(),p=function(e){return e&&e.length&&e[0].offsetHeight},d=function(e,t){var i=m.extend(!0,{},e,t);return m.each(t,function(e,t){m.isArray(t)&&(i[e]=t)}),i},n=function(e,t,i){var n=this;n.opts=d({index:i},m.fancybox.defaults),m.isPlainObject(t)&&(n.opts=d(n.opts,t)),m.fancybox.isMobile&&(n.opts=d(n.opts,n.opts.mobile)),n.id=n.opts.id||++s,n.currIndex=parseInt(n.opts.index,10)||0,n.prevIndex=null,n.prevPos=null,n.currPos=0,n.firstRun=!0,n.group=[],n.slides={},n.addContent(e),n.group.length&&n.init()},m.extend(n.prototype,{init:function(){var t,i,n=this,o=n.group[n.currIndex].opts;o.closeExisting&&m.fancybox.close(!0),m("body").addClass("fancybox-active"),!m.fancybox.getInstance()&&!1!==o.hideScrollbar&&!m.fancybox.isMobile&&u.body.scrollHeight>l.innerHeight&&(m("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(l.innerWidth-u.documentElement.clientWidth)+"px;}</style>"),m("body").addClass("compensate-for-scrollbar")),i="",m.each(o.buttons,function(e,t){i+=o.btnTpl[t]||""}),t=m(n.translate(n,o.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",o.btnTpl.arrowLeft+o.btnTpl.arrowRight))).attr("id","fancybox-container-"+n.id).addClass(o.baseClass).data("FancyBox",n).appendTo(o.parentEl),n.$refs={container:t},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(e){n.$refs[e]=t.find(".fancybox-"+e)}),n.trigger("onInit"),n.activate(),n.jumpTo(n.currIndex)},translate:function(e,t){var i=e.opts.i18n[e.opts.lang]||e.opts.i18n.en;return t.replace(/\{\{(\w+)\}\}/g,function(e,t){return i[t]===g?e:i[t]})},addContent:function(e){var t,c=this,i=m.makeArray(e);m.each(i,function(e,t){var i,n,o,s,r,a={},l={};m.isPlainObject(t)?l=(a=t).opts||t:"object"===m.type(t)&&m(t).length?(l=(i=m(t)).data()||{},(l=m.extend(!0,{},l,l.options)).$orig=i,a.src=c.opts.src||l.src||i.attr("href"),a.type||a.src||(a.type="inline",a.src=t)):a={type:"html",src:t+""},a.opts=m.extend(!0,{},c.opts,l),m.isArray(l.buttons)&&(a.opts.buttons=l.buttons),m.fancybox.isMobile&&a.opts.mobile&&(a.opts=d(a.opts,a.opts.mobile)),n=a.type||a.opts.type,s=a.src||"",!n&&s&&((o=s.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(n="video",a.opts.video.format||(a.opts.video.format="video/"+("ogv"===o[1]?"ogg":o[1]))):s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?n="image":s.match(/\.(pdf)((\?|#).*)?$/i)?(n="iframe",a=m.extend(!0,a,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===s.charAt(0)&&(n="inline")),n?a.type=n:c.trigger("objectNeedsType",a),a.contentType||(a.contentType=-1<m.inArray(a.type,["html","inline","ajax"])?"html":a.type),a.index=c.group.length,"auto"==a.opts.smallBtn&&(a.opts.smallBtn=-1<m.inArray(a.type,["html","inline","ajax"])),"auto"===a.opts.toolbar&&(a.opts.toolbar=!a.opts.smallBtn),a.$thumb=a.opts.$thumb||null,a.opts.$trigger&&a.index===c.opts.index&&(a.$thumb=a.opts.$trigger.find("img:first"),a.$thumb.length&&(a.opts.$orig=a.opts.$trigger)),a.$thumb&&a.$thumb.length||!a.opts.$orig||(a.$thumb=a.opts.$orig.find("img:first")),a.$thumb&&!a.$thumb.length&&(a.$thumb=null),a.thumb=a.opts.thumb||(a.$thumb?a.$thumb[0].src:null),"function"===m.type(a.opts.caption)&&(a.opts.caption=a.opts.caption.apply(t,[c,a])),"function"===m.type(c.opts.caption)&&(a.opts.caption=c.opts.caption.apply(t,[c,a])),a.opts.caption instanceof m||(a.opts.caption=a.opts.caption===g?"":a.opts.caption+""),"ajax"===a.type&&1<(r=s.split(/\s+/,2)).length&&(a.src=r.shift(),a.opts.filter=r.shift()),a.opts.modal&&(a.opts=m.extend(!0,a.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),c.group.push(a)}),Object.keys(c.slides).length&&(c.updateControls(),(t=c.Thumbs)&&t.isActive&&(t.create(),t.focus()))},addEvents:function(){var n=this;n.removeEvents(),n.$refs.container.on("click.fb-close","[data-fancybox-close]",function(e){e.stopPropagation(),e.preventDefault(),n.close(e)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(e){e.stopPropagation(),e.preventDefault(),n.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(e){e.stopPropagation(),e.preventDefault(),n.next()}).on("click.fb","[data-fancybox-zoom]",function(e){n[n.isScaledDown()?"scaleToActual":"scaleToFit"]()}),o.on("orientationchange.fb resize.fb",function(e){e&&e.originalEvent&&"resize"===e.originalEvent.type?(n.requestId&&t(n.requestId),n.requestId=h(function(){n.update(e)})):(n.current&&"iframe"===n.current.type&&n.$refs.stage.hide(),setTimeout(function(){n.$refs.stage.show(),n.update(e)},m.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(e){var t=(m.fancybox?m.fancybox.getInstance():null).current,i=e.keyCode||e.which;if(9!=i){if(!(!t.opts.keyboard||e.ctrlKey||e.altKey||e.shiftKey||m(e.target).is("input,textarea,video,audio,select")))return 8===i||27===i?(e.preventDefault(),void n.close(e)):37===i||38===i?(e.preventDefault(),void n.previous()):39===i||40===i?(e.preventDefault(),void n.next()):void n.trigger("afterKeydown",e,i)}else t.opts.trapFocus&&n.focus(e)}),n.group[n.currIndex].opts.idleTime&&(n.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(e){n.idleSecondsCounter=0,n.isIdle&&n.showControls(),n.isIdle=!1}),n.idleInterval=l.setInterval(function(){n.idleSecondsCounter++,n.idleSecondsCounter>=n.group[n.currIndex].opts.idleTime&&!n.isDragging&&(n.isIdle=!0,n.idleSecondsCounter=0,n.hideControls())},1e3))},removeEvents:function(){o.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),this.idleInterval&&(l.clearInterval(this.idleInterval),this.idleInterval=null)},previous:function(e){return this.jumpTo(this.currPos-1,e)},next:function(e){return this.jumpTo(this.currPos+1,e)},jumpTo:function(e,n){var t,i,o,s,r,a,l,c,d,u=this,h=u.group.length;if(!(u.isDragging||u.isClosing||u.isAnimating&&u.firstRun)){if(e=parseInt(e,10),!(o=u.current?u.current.opts.loop:u.opts.loop)&&(e<0||h<=e))return!1;if(t=u.firstRun=!Object.keys(u.slides).length,r=u.current,u.prevIndex=u.currIndex,u.prevPos=u.currPos,s=u.createSlide(e),1<h&&((o||s.index<h-1)&&u.createSlide(e+1),(o||0<s.index)&&u.createSlide(e-1)),u.current=s,u.currIndex=s.index,u.currPos=s.pos,u.trigger("beforeShow",t),u.updateControls(),s.forcedDuration=g,m.isNumeric(n)?s.forcedDuration=n:n=s.opts[t?"animationDuration":"transitionDuration"],n=parseInt(n,10),i=u.isMoved(s),s.$slide.addClass("fancybox-slide--current"),t)return s.opts.animationEffect&&n&&u.$refs.container.css("transition-duration",n+"ms"),u.$refs.container.addClass("fancybox-is-open").trigger("focus"),u.loadSlide(s),void u.preload("image");a=m.fancybox.getTranslate(r.$slide),l=m.fancybox.getTranslate(u.$refs.stage),m.each(u.slides,function(e,t){m.fancybox.stop(t.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(d=a.left-(r.pos*a.width+r.pos*r.opts.gutter),m.each(u.slides,function(e,t){t.$slide.removeClass("fancybox-animated").removeClass(function(e,t){return(t.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=t.pos*a.width+t.pos*t.opts.gutter;m.fancybox.setTranslate(t.$slide,{top:0,left:i-l.left+d}),t.pos!==s.pos&&t.$slide.addClass("fancybox-slide--"+(t.pos>s.pos?"next":"previous")),p(t.$slide),m.fancybox.animate(t.$slide,{top:0,left:(t.pos-s.pos)*a.width+(t.pos-s.pos)*t.opts.gutter},n,function(){t.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),t.pos===u.currPos&&u.complete()})})):n&&s.opts.transitionEffect&&(c="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),m.fancybox.animate(r.$slide,c,n,function(){r.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?u.revealContent(s):u.loadSlide(s),u.preload("image")}},createSlide:function(e){var t,i=this,n=e%i.group.length;return n=n<0?i.group.length+n:n,!i.slides[e]&&i.group[n]&&(t=m('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[e]=m.extend(!0,{},i.group[n],{pos:e,$slide:t,isLoaded:!1}),i.updateSlide(i.slides[e])),i.slides[e]},scaleToActual:function(e,t,i){var n,o,s,r,a,l=this,c=l.current,d=c.$content,u=m.fancybox.getTranslate(c.$slide).width,h=m.fancybox.getTranslate(c.$slide).height,p=c.width,f=c.height;l.isAnimating||l.isMoved()||!d||"image"!=c.type||!c.isLoaded||c.hasError||(l.isAnimating=!0,m.fancybox.stop(d),e=e===g?.5*u:e,t=t===g?.5*h:t,(n=m.fancybox.getTranslate(d)).top-=m.fancybox.getTranslate(c.$slide).top,n.left-=m.fancybox.getTranslate(c.$slide).left,r=p/n.width,a=f/n.height,o=.5*u-.5*p,s=.5*h-.5*f,u<p&&(0<(o=n.left*r-(e*r-e))&&(o=0),o<u-p&&(o=u-p)),h<f&&(0<(s=n.top*a-(t*a-t))&&(s=0),s<h-f&&(s=h-f)),l.updateCursor(p,f),m.fancybox.animate(d,{top:s,left:o,scaleX:r,scaleY:a},i||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(e){var t,i=this,n=i.current,o=n.$content;i.isAnimating||i.isMoved()||!o||"image"!=n.type||!n.isLoaded||n.hasError||(i.isAnimating=!0,m.fancybox.stop(o),t=i.getFitPos(n),i.updateCursor(t.width,t.height),m.fancybox.animate(o,{top:t.top,left:t.left,scaleX:t.width/o.width(),scaleY:t.height/o.height()},e||366,function(){i.isAnimating=!1}))},getFitPos:function(e){var t,i,n,o,s=e.$content,r=e.$slide,a=e.width||e.opts.width,l=e.height||e.opts.height,c={};return!!(e.isLoaded&&s&&s.length)&&(t=m.fancybox.getTranslate(this.$refs.stage).width,i=m.fancybox.getTranslate(this.$refs.stage).height,t-=parseFloat(r.css("paddingLeft"))+parseFloat(r.css("paddingRight"))+parseFloat(s.css("marginLeft"))+parseFloat(s.css("marginRight")),i-=parseFloat(r.css("paddingTop"))+parseFloat(r.css("paddingBottom"))+parseFloat(s.css("marginTop"))+parseFloat(s.css("marginBottom")),a&&l||(a=t,l=i),t-.5<(a*=n=Math.min(1,t/a,i/l))&&(a=t),i-.5<(l*=n)&&(l=i),"image"===e.type?(c.top=Math.floor(.5*(i-l))+parseFloat(r.css("paddingTop")),c.left=Math.floor(.5*(t-a))+parseFloat(r.css("paddingLeft"))):"video"===e.contentType&&(a/(o=e.opts.width&&e.opts.height?a/l:e.opts.ratio||16/9)<l?l=a/o:l*o<a&&(a=l*o)),c.width=a,c.height=l,c)},update:function(i){var n=this;m.each(n.slides,function(e,t){n.updateSlide(t,i)})},updateSlide:function(e,t){var i=this,n=e&&e.$content,o=e.width||e.opts.width,s=e.height||e.opts.height,r=e.$slide;i.adjustCaption(e),n&&(o||s||"video"===e.contentType)&&!e.hasError&&(m.fancybox.stop(n),m.fancybox.setTranslate(n,i.getFitPos(e)),e.pos===i.currPos&&(i.isAnimating=!1,i.updateCursor())),i.adjustLayout(e),r.length&&(r.trigger("refresh"),e.pos===i.currPos&&i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),i.trigger("onUpdate",e,t)},centerSlide:function(e){var t=this,i=t.current,n=i.$slide;!t.isClosing&&i&&(n.siblings().css({transform:"",opacity:""}),n.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),m.fancybox.animate(n,{top:0,left:0,opacity:1},e===g?0:e,function(){n.css({transform:"",opacity:""}),i.isComplete||t.complete()},!1))},isMoved:function(e){var t,i,n=e||this.current;return!!n&&(i=m.fancybox.getTranslate(this.$refs.stage),t=m.fancybox.getTranslate(n.$slide),!n.$slide.hasClass("fancybox-animated")&&(.5<Math.abs(t.top-i.top)||.5<Math.abs(t.left-i.left)))},updateCursor:function(e,t){var i,n,o=this,s=o.current,r=o.$refs.container;s&&!o.isClosing&&o.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),n=!!(i=o.canPan(e,t))||o.isZoomable(),r.toggleClass("fancybox-is-zoomable",n),m("[data-fancybox-zoom]").prop("disabled",!n),i?r.addClass("fancybox-can-pan"):n&&("zoom"===s.opts.clickContent||m.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||1<o.group.length)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var e,t=this.current;if(t&&!this.isClosing&&"image"===t.type&&!t.hasError){if(!t.isLoaded)return!0;if((e=this.getFitPos(t))&&(t.width>e.width||t.height>e.height))return!0}return!1},isScaledDown:function(e,t){var i=!1,n=this.current,o=n.$content;return e!==g&&t!==g?i=e<n.width&&t<n.height:o&&(i=(i=m.fancybox.getTranslate(o)).width<n.width&&i.height<n.height),i},canPan:function(e,t){var i=this.current,n=null,o=!1;return"image"===i.type&&(i.isComplete||e&&t)&&!i.hasError&&(o=this.getFitPos(i),e!==g&&t!==g?n={width:e,height:t}:i.isComplete&&(n=m.fancybox.getTranslate(i.$content)),n&&o&&(o=1.5<Math.abs(n.width-o.width)||1.5<Math.abs(n.height-o.height))),o},loadSlide:function(i){var e,t,n,o=this;if(!i.isLoading&&!i.isLoaded){if(!(i.isLoading=!0)===o.trigger("beforeLoad",i))return i.isLoading=!1;switch(e=i.type,(t=i.$slide).off("refresh").trigger("onReset").addClass(i.opts.slideClass),e){case"image":o.setImage(i);break;case"iframe":o.setIframe(i);break;case"html":o.setContent(i,i.src||i.content);break;case"video":o.setContent(i,i.opts.video.tpl.replace(/\{\{src\}\}/gi,i.src).replace("{{format}}",i.opts.videoFormat||i.opts.video.format||"").replace("{{poster}}",i.thumb||""));break;case"inline":m(i.src).length?o.setContent(i,m(i.src)):o.setError(i);break;case"ajax":o.showLoading(i),n=m.ajax(m.extend({},i.opts.ajax.settings,{url:i.src,success:function(e,t){"success"===t&&o.setContent(i,e)},error:function(e,t){e&&"abort"!==t&&o.setError(i)}})),t.one("onReset",function(){n.abort()});break;default:o.setError(i)}return!0}},setImage:function(t){var e,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=m('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,(e=u.createElement("img")).onerror=function(){m(this).remove(),t.$ghost=null},e.onload=function(){i.afterLoad(t)},t.$ghost=m(e).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var t,i,n,o,s=e.opts.srcset||e.opts.image.srcset;if(s){n=l.devicePixelRatio||1,o=l.innerWidth*n,(i=s.split(",").map(function(e){var n={};return e.trim().split(/\s+/).forEach(function(e,t){var i=parseInt(e.substring(0,e.length-1),10);if(0===t)return n.url=e;i&&(n.value=i,n.postfix=e[e.length-1])}),n})).sort(function(e,t){return e.value-t.value});for(var r=0;r<i.length;r++){var a=i[r];if("w"===a.postfix&&a.value>=o||"x"===a.postfix&&a.value>=n){t=a;break}}!t&&i.length&&(t=i[i.length-1]),t&&(e.src=t.url,e.width&&e.height&&"w"==t.postfix&&(e.height=e.width/e.height*t.value,e.width=t.value),e.opts.srcset=s)}},setBigImage:function(t){var i=this,e=u.createElement("img"),n=m(e);t.$image=n.one("error",function(){i.setError(t)}).one("load",function(){var e;t.$ghost||(i.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),i.afterLoad(t)),i.isClosing||(t.opts.srcset&&((e=t.opts.sizes)&&"auto"!==e||(e=(1<t.width/t.height&&1<o.width()/o.height()?"100":Math.round(t.width/t.height*100))+"vw"),n.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!i.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),i.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(e.complete||"complete"==e.readyState)&&n.naturalWidth&&n.naturalHeight?n.trigger("load"):e.error&&n.trigger("error")},resolveImageSlideSize:function(e,t,i){var n=parseInt(e.opts.width,10),o=parseInt(e.opts.height,10);e.width=t,e.height=i,0<n&&(e.width=n,e.height=Math.floor(n*i/t)),0<o&&(e.width=Math.floor(o*t/i),e.height=o)},setIframe:function(o){var s,t=this,r=o.opts.iframe,a=o.$slide;o.$content=m('<div class="fancybox-content'+(r.preload?" fancybox-is-hidden":"")+'"></div>').css(r.css).appendTo(a),a.addClass("fancybox-slide--"+o.contentType),o.$iframe=s=m(r.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(r.attr).appendTo(o.$content),r.preload?(t.showLoading(o),s.on("load.fb error.fb",function(e){this.isReady=1,o.$slide.trigger("refresh"),t.afterLoad(o)}),a.on("refresh.fb",function(){var e,t=o.$content,i=r.css.width,n=r.css.height;if(1===s[0].isReady){try{e=s.contents().find("body")}catch(e){}e&&e.length&&e.children().length&&(a.css("overflow","visible"),t.css({width:"100%","max-width":"100%",height:"9999px"}),i===g&&(i=Math.ceil(Math.max(e[0].clientWidth,e.outerWidth(!0)))),t.css("width",i||"").css("max-width",""),n===g&&(n=Math.ceil(Math.max(e[0].clientHeight,e.outerHeight(!0)))),t.css("height",n||""),a.css("overflow","auto")),t.removeClass("fancybox-is-hidden")}})):t.afterLoad(o),s.attr("src",o.src),a.one("onReset",function(){try{m(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(e){}m(this).off("refresh.fb").empty(),o.isLoaded=!1,o.isRevealed=!1})},setContent:function(e,t){var i;this.isClosing||(this.hideLoading(e),e.$content&&m.fancybox.stop(e.$content),e.$slide.empty(),(i=t)&&i.hasOwnProperty&&i instanceof m&&t.parent().length?((t.hasClass("fancybox-content")||t.parent().hasClass("fancybox-content"))&&t.parents(".fancybox-slide").trigger("onReset"),e.$placeholder=m("<div>").hide().insertAfter(t),t.css("display","inline-block")):e.hasError||("string"===m.type(t)&&(t=m("<div>").append(m.trim(t)).contents()),e.opts.filter&&(t=m("<div>").html(t).find(e.opts.filter))),e.$slide.one("onReset",function(){m(this).find("video,audio").trigger("pause"),e.$placeholder&&(e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(),e.$placeholder=null),e.$smallBtn&&(e.$smallBtn.remove(),e.$smallBtn=null),e.hasError||(m(this).empty(),e.isLoaded=!1,e.isRevealed=!1)}),m(t).appendTo(e.$slide),m(t).is("video,audio")&&(m(t).addClass("fancybox-video"),m(t).wrap("<div></div>"),e.contentType="video",e.opts.width=e.opts.width||m(t).attr("width"),e.opts.height=e.opts.height||m(t).attr("height")),e.$content=e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),e.$content.siblings().hide(),e.$content.length||(e.$content=e.$slide.wrapInner("<div></div>").children().first()),e.$content.addClass("fancybox-content"),e.$slide.addClass("fancybox-slide--"+e.contentType),this.afterLoad(e))},setError:function(e){e.hasError=!0,e.$slide.trigger("onReset").removeClass("fancybox-slide--"+e.contentType).addClass("fancybox-slide--error"),e.contentType="html",this.setContent(e,this.translate(e,e.opts.errorTpl)),e.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(e){(e=e||this.current)&&!e.$spinner&&(e.$spinner=m(this.translate(this,this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))},hideLoading:function(e){(e=e||this.current)&&e.$spinner&&(e.$spinner.stop().remove(),delete e.$spinner)},afterLoad:function(e){var t=this;t.isClosing||(e.isLoading=!1,e.isLoaded=!0,t.trigger("afterLoad",e),t.hideLoading(e),!e.opts.smallBtn||e.$smallBtn&&e.$smallBtn.length||(e.$smallBtn=m(t.translate(e,e.opts.btnTpl.smallBtn)).appendTo(e.$content)),e.opts.protect&&e.$content&&!e.hasError&&(e.$content.on("contextmenu.fb",function(e){return 2==e.button&&e.preventDefault(),!0}),"image"===e.type&&m('<div class="fancybox-spaceball"></div>').appendTo(e.$content)),t.adjustCaption(e),t.adjustLayout(e),e.pos===t.currPos&&t.updateCursor(),t.revealContent(e))},adjustCaption:function(e){var t,i=this,n=e||i.current,o=n.opts.caption,s=n.opts.preventCaptionOverlap,r=i.$refs.caption,a=!1;r.toggleClass("fancybox-caption--separate",s),s&&o&&o.length&&(n.pos!==i.currPos?((t=r.clone().appendTo(r.parent())).children().eq(0).empty().html(o),a=t.outerHeight(!0),t.empty().remove()):i.$caption&&(a=i.$caption.outerHeight(!0)),n.$slide.css("padding-bottom",a||""))},adjustLayout:function(e){var t,i,n,o,s=e||this.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(n=s.$slide[0].style["padding-bottom"],o=s.$slide.css("padding-bottom"),0<parseFloat(o)&&(t=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(t-s.$slide[0].scrollHeight)<1&&(i=o),s.$slide.css("padding-bottom",n))),s.$content.css("margin-bottom",i))},revealContent:function(e){var t,i,n,o,s=this,r=e.$slide,a=!1,l=!1,c=s.isMoved(e),d=e.isRevealed;return e.isRevealed=!0,t=e.opts[s.firstRun?"animationEffect":"transitionEffect"],n=e.opts[s.firstRun?"animationDuration":"transitionDuration"],n=parseInt(e.forcedDuration===g?n:e.forcedDuration,10),!c&&e.pos===s.currPos&&n||(t=!1),"zoom"===t&&(e.pos===s.currPos&&n&&"image"===e.type&&!e.hasError&&(l=s.getThumbPos(e))?a=s.getFitPos(e):t="fade"),"zoom"===t?(s.isAnimating=!0,a.scaleX=a.width/l.width,a.scaleY=a.height/l.height,"auto"==(o=e.opts.zoomOpacity)&&(o=.1<Math.abs(e.width/e.height-l.width/l.height)),o&&(l.opacity=.1,a.opacity=1),m.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"),l),p(e.$content),void m.fancybox.animate(e.$content,a,n,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(e),t?(m.fancybox.stop(r),i="fancybox-slide--"+(e.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+t,r.addClass(i).removeClass("fancybox-slide--current"),e.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==e.type&&e.$content.hide().show(0),void m.fancybox.animate(r,"fancybox-slide--current",n,function(){r.removeClass(i).css({transform:"",opacity:""}),e.pos===s.currPos&&s.complete()},!0)):(e.$content.removeClass("fancybox-is-hidden"),d||!c||"image"!==e.type||e.hasError||e.$content.hide().fadeIn("fast"),void(e.pos===s.currPos&&s.complete())))},getThumbPos:function(e){var t,i,n,o,s,r,a,l,c,d=e.$thumb;return!!(d&&(a=d[0])&&a.ownerDocument===u&&(m(".fancybox-container").css("pointer-events","none"),l={x:a.getBoundingClientRect().left+a.offsetWidth/2,y:a.getBoundingClientRect().top+a.offsetHeight/2},c=u.elementFromPoint(l.x,l.y)===a,m(".fancybox-container").css("pointer-events",""),c))&&(i=m.fancybox.getTranslate(d),n=parseFloat(d.css("border-top-width")||0),o=parseFloat(d.css("border-right-width")||0),s=parseFloat(d.css("border-bottom-width")||0),r=parseFloat(d.css("border-left-width")||0),t={top:i.top+n,left:i.left+r,width:i.width-o-r,height:i.height-n-s,scaleX:1,scaleY:1},0<i.width&&0<i.height&&t)},complete:function(){var e,i=this,t=i.current,n={};!i.isMoved()&&t.isLoaded&&(t.isComplete||(t.isComplete=!0,t.$slide.siblings().trigger("onReset"),i.preload("inline"),p(t.$slide),t.$slide.addClass("fancybox-slide--complete"),m.each(i.slides,function(e,t){t.pos>=i.currPos-1&&t.pos<=i.currPos+1?n[t.pos]=t:t&&(m.fancybox.stop(t.$slide),t.$slide.off().remove())}),i.slides=n),i.isAnimating=!1,i.updateCursor(),i.trigger("afterShow"),t.opts.video.autoStart&&t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),i.next()}),t.opts.autoFocus&&"html"===t.contentType&&((e=t.$content.find("input[autofocus]:enabled:visible:first")).length?e.trigger("focus"):i.focus(null,!0)),t.$slide.scrollTop(0).scrollLeft(0))},preload:function(e){var t,i,n=this;n.group.length<2||(i=n.slides[n.currPos+1],(t=n.slides[n.currPos-1])&&t.type===e&&n.loadSlide(t),i&&i.type===e&&n.loadSlide(i))},focus:function(e,t){var i,n,o=this,s=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");o.isClosing||((i=(i=!e&&o.current&&o.current.isComplete?o.current.$slide.find("*:visible"+(t?":not(.fancybox-close-small)":"")):o.$refs.container.find("*:visible")).filter(s).filter(function(){return"hidden"!==m(this).css("visibility")&&!m(this).hasClass("disabled")})).length?(n=i.index(u.activeElement),e&&e.shiftKey?(n<0||0==n)&&(e.preventDefault(),i.eq(i.length-1).trigger("focus")):(n<0||n==i.length-1)&&(e&&e.preventDefault(),i.eq(0).trigger("focus"))):o.$refs.container.trigger("focus"))},activate:function(){var t=this;m(".fancybox-container").each(function(){var e=m(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(e,t){function i(){d.cleanUp(e)}var n,o,s,r,a,l,c,d=this,u=d.current;return!d.isClosing&&(!(d.isClosing=!0)===d.trigger("beforeClose",e)?(d.isClosing=!1,h(function(){d.update()}),!1):(d.removeEvents(),s=u.$content,n=u.opts.animationEffect,o=m.isNumeric(t)?t:n?u.opts.animationDuration:0,u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==e?m.fancybox.stop(u.$slide):n=!1,u.$slide.siblings().trigger("onReset").remove(),o&&d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",o+"ms"),d.hideLoading(u),d.hideControls(!0),d.updateCursor(),"zoom"!==n||s&&o&&"image"===u.type&&!d.isMoved()&&!u.hasError&&(c=d.getThumbPos(u))||(n="fade"),"zoom"===n?(m.fancybox.stop(s),l={top:(r=m.fancybox.getTranslate(s)).top,left:r.left,scaleX:r.width/c.width,scaleY:r.height/c.height,width:c.width,height:c.height},"auto"==(a=u.opts.zoomOpacity)&&(a=.1<Math.abs(u.width/u.height-c.width/c.height)),a&&(c.opacity=0),m.fancybox.setTranslate(s,l),p(s),m.fancybox.animate(s,c,o,i)):n&&o?m.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+n,o,i):!0===e?setTimeout(i,o):i(),!0))},cleanUp:function(e){var t,i,n,o=this,s=o.current.opts.$orig;o.current.$slide.trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",e),o.current.opts.backFocus&&(s&&s.length&&s.is(":visible")||(s=o.$trigger),s&&s.length&&(i=l.scrollX,n=l.scrollY,s.trigger("focus"),m("html, body").scrollTop(n).scrollLeft(i))),o.current=null,(t=m.fancybox.getInstance())?t.activate():(m("body").removeClass("fancybox-active compensate-for-scrollbar"),m("#fancybox-style-noscroll").remove())},trigger:function(e,t){var i,n=Array.prototype.slice.call(arguments,1),o=this,s=t&&t.opts?t:o.current;if(s?n.unshift(s):s=o,n.unshift(o),m.isFunction(s.opts[e])&&(i=s.opts[e].apply(s,n)),!1===i)return i;"afterClose"!==e&&o.$refs?o.$refs.container.trigger(e+".fb",n):r.trigger(e+".fb",n)},updateControls:function(){var e=this,t=e.current,i=t.index,n=e.$refs.container,o=e.$refs.caption,s=t.opts.caption;t.$slide.trigger("refresh"),s&&s.length?(e.$caption=o).children().eq(0).html(s):e.$caption=null,e.hasHiddenControls||e.isIdle||e.showControls(),n.find("[data-fancybox-count]").html(e.group.length),n.find("[data-fancybox-index]").html(i+1),n.find("[data-fancybox-prev]").prop("disabled",!t.opts.loop&&i<=0),n.find("[data-fancybox-next]").prop("disabled",!t.opts.loop&&i>=e.group.length-1),"image"===t.type?n.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",t.opts.image.src||t.src).show():t.opts.toolbar&&n.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),m(u.activeElement).is(":hidden,[disabled]")&&e.$refs.container.trigger("focus")},hideControls:function(e){var t=["infobar","toolbar","nav"];!e&&this.current.opts.preventCaptionOverlap||t.push("caption"),this.$refs.container.removeClass(t.map(function(e){return"fancybox-show-"+e}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var e=this,t=e.current?e.current.opts:e.opts,i=e.$refs.container;e.hasHiddenControls=!1,e.idleSecondsCounter=0,i.toggleClass("fancybox-show-toolbar",!(!t.toolbar||!t.buttons)).toggleClass("fancybox-show-infobar",!!(t.infobar&&1<e.group.length)).toggleClass("fancybox-show-caption",!!e.$caption).toggleClass("fancybox-show-nav",!!(t.arrows&&1<e.group.length)).toggleClass("fancybox-is-modal",!!t.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),m.fancybox={version:"3.5.7",defaults:e,getInstance:function(e){var t=m('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),i=Array.prototype.slice.call(arguments,1);return t instanceof n&&("string"===m.type(e)?t[e].apply(t,i):"function"===m.type(e)&&e.apply(t,i),t)},open:function(e,t,i){return new n(e,t,i)},close:function(e){var t=this.getInstance();t&&(t.close(),!0===e&&this.close(e))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:(i=u.createElement("div"),l.getComputedStyle&&l.getComputedStyle(i)&&l.getComputedStyle(i).getPropertyValue("transform")&&!(u.documentMode&&u.documentMode<11)),getTranslate:function(e){var t;return!(!e||!e.length)&&{top:(t=e[0].getBoundingClientRect()).top||0,left:t.left||0,width:t.width,height:t.height,opacity:parseFloat(e.css("opacity"))}},setTranslate:function(e,t){var i="",n={};if(e&&t)return t.left===g&&t.top===g||(i=(t.left===g?e.position().left:t.left)+"px, "+(t.top===g?e.position().top:t.top)+"px",i=this.use3d?"translate3d("+i+", 0px)":"translate("+i+")"),t.scaleX!==g&&t.scaleY!==g?i+=" scale("+t.scaleX+", "+t.scaleY+")":t.scaleX!==g&&(i+=" scaleX("+t.scaleX+")"),i.length&&(n.transform=i),t.opacity!==g&&(n.opacity=t.opacity),t.width!==g&&(n.width=t.width),t.height!==g&&(n.height=t.height),e.css(n)},animate:function(t,i,n,o,s){var r,a=this;m.isFunction(n)&&(o=n,n=null),a.stop(t),r=a.getTranslate(t),t.on(c,function(e){e&&e.originalEvent&&(!t.is(e.originalEvent.target)||"z-index"==e.originalEvent.propertyName)||(a.stop(t),m.isNumeric(n)&&t.css("transition-duration",""),m.isPlainObject(i)?i.scaleX!==g&&i.scaleY!==g&&a.setTranslate(t,{top:i.top,left:i.left,width:r.width*i.scaleX,height:r.height*i.scaleY,scaleX:1,scaleY:1}):!0!==s&&t.removeClass(i),m.isFunction(o)&&o(e))}),m.isNumeric(n)&&t.css("transition-duration",n+"ms"),m.isPlainObject(i)?(i.scaleX!==g&&i.scaleY!==g&&(delete i.width,delete i.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),m.fancybox.setTranslate(t,i)):t.addClass(i),t.data("timer",setTimeout(function(){t.trigger(c)},n+33))},stop:function(e,t){e&&e.length&&(clearTimeout(e.data("timer")),t&&e.trigger(c),e.off(c).css("transition-duration",""),e.parent().removeClass("fancybox-is-scaling"))}},m.fn.fancybox=function(e){var t;return(t=(e=e||{}).selector||!1)?m("body").off("click.fb-start",t).on("click.fb-start",t,{options:e},b):this.off("click.fb-start").on("click.fb-start",{items:this,options:e},b),this},r.on("click.fb-start","[data-fancybox]",b),r.on("click.fb-start","[data-fancybox-trigger]",function(e){m('[data-fancybox="'+m(this).attr("data-fancybox-trigger")+'"]').eq(m(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:m(this)})}),a=".fancybox-button",f="fancybox-focus",v=null,r.on("mousedown mouseup focus blur",a,function(e){switch(e.type){case"mousedown":v=m(this);break;case"mouseup":v=null;break;case"focusin":m(a).removeClass(f),m(this).is(v)||m(this).is("[disabled]")||m(this).addClass(f);break;case"focusout":m(a).removeClass(f)}})))}(window,document,jQuery),function(p){"use strict";function f(i,e,t){if(i)return t=t||"","object"===p.type(t)&&(t=p.param(t,!0)),p.each(e,function(e,t){i=i.replace("$"+e,t||"")}),t.length&&(i+=(0<i.indexOf("?")?"&":"?")+t),i}var n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(e){return"//maps.google."+e[2]+"/?ll="+(e[9]?e[9]+"&z="+Math.floor(e[10])+(e[12]?e[12].replace(/^\//,"&"):""):e[12]+"").replace(/\?/,"&")+"&output="+(e[12]&&0<e[12].indexOf("layer=c")?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(e){return"//maps.google."+e[2]+"/maps?q="+e[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};p(document).on("objectNeedsType.fb",function(e,t,o){var s,r,a,l,c,d,u=o.src||"",h=!1,i=p.extend(!0,{},n,o.opts.media);p.each(i,function(e,t){if(r=u.match(t.matcher)){if(h=t.type,d=e,c={},t.paramPlace&&r[t.paramPlace]){"?"==(l=r[t.paramPlace])[0]&&(l=l.substring(1)),l=l.split("&");for(var i=0;i<l.length;++i){var n=l[i].split("=",2);2==n.length&&(c[n[0]]=decodeURIComponent(n[1].replace(/\+/g," ")))}}return a=p.extend(!0,{},t.params,o.opts[e],c),u="function"===p.type(t.url)?t.url.call(this,r,a,o):f(t.url,r,a),s="function"===p.type(t.thumb)?t.thumb.call(this,r,a,o):f(t.thumb,r),"youtube"===e?u=u.replace(/&t=((\d+)m)?(\d+)s/,function(e,t,i,n){return"&start="+((i?60*parseInt(i,10):0)+parseInt(n,10))}):"vimeo"===e&&(u=u.replace("&%23","#")),!1}}),h?(o.opts.thumb||o.opts.$thumb&&o.opts.$thumb.length||(o.opts.thumb=s),"iframe"===h&&(o.opts=p.extend(!0,o.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),p.extend(o,{type:h,src:u,origSrc:o.src,contentSource:d,contentType:"image"===h?"image":"gmap_place"==d||"gmap_search"==d?"map":"video"})):u&&(o.type=o.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(e){var t,i=this;this[e].loaded?setTimeout(function(){i.done(e)}):this[e].loading||(this[e].loading=!0,(t=document.createElement("script")).type="text/javascript",t.src=this[e].src,"youtube"===e?window.onYouTubeIframeAPIReady=function(){i[e].loaded=!0,i.done(e)}:t.onload=function(){i[e].loaded=!0,i.done(e)},document.body.appendChild(t))},done:function(e){var t,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(t=p.fancybox.getInstance())&&(i=t.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?new YT.Player(i.attr("id"),{events:{onStateChange:function(e){0==e.data&&t.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&new Vimeo.Player(i).on("ended",function(){t.next()}))}};p(document).on({"afterShow.fb":function(e,t,i){1<t.group.length&&("youtube"===i.contentSource||"vimeo"===i.contentSource)&&o.load(i.contentSource)}})}(jQuery),function(m,l,g){"use strict";function d(e){var t=[];for(var i in e=(e=e.originalEvent||e||m.e).touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e])e[i].pageX?t.push({x:e[i].pageX,y:e[i].pageY}):e[i].clientX&&t.push({x:e[i].clientX,y:e[i].clientY});return t}function v(e,t,i){return t&&e?"x"===i?e.x-t.x:"y"===i?e.y-t.y:Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)):0}function c(e){if(e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||g.isFunction(e.get(0).onclick)||e.data("selectable"))return 1;for(var t=0,i=e[0].attributes,n=i.length;t<n;t++)if("data-fancybox-"===i[t].nodeName.substr(0,14))return 1}function u(e){for(var t,i,n,o,s,r=!1;t=e.get(0),s=o=n=i=void 0,i=m.getComputedStyle(t)["overflow-y"],n=m.getComputedStyle(t)["overflow-x"],o=("scroll"===i||"auto"===i)&&t.scrollHeight>t.clientHeight,s=("scroll"===n||"auto"===n)&&t.scrollWidth>t.clientWidth,!(r=o||s)&&(e=e.parent()).length&&!e.hasClass("fancybox-stage")&&!e.is("body"););return r}function i(e){var t=this;t.instance=e,t.$bg=e.$refs.bg,t.$stage=e.$refs.stage,t.$container=e.$refs.container,t.destroy(),t.$container.on("touchstart.fb.touch mousedown.fb.touch",g.proxy(t,"ontouchstart"))}var b=m.requestAnimationFrame||m.webkitRequestAnimationFrame||m.mozRequestAnimationFrame||m.oRequestAnimationFrame||function(e){return m.setTimeout(e,1e3/60)},y=m.cancelAnimationFrame||m.webkitCancelAnimationFrame||m.mozCancelAnimationFrame||m.oCancelAnimationFrame||function(e){m.clearTimeout(e)};i.prototype.destroy=function(){var e=this;e.$container.off(".fb.touch"),g(l).off(".fb.touch"),e.requestId&&(y(e.requestId),e.requestId=null),e.tapped&&(clearTimeout(e.tapped),e.tapped=null)},i.prototype.ontouchstart=function(e){var t=this,i=g(e.target),n=t.instance,o=n.current,s=o.$slide,r=o.$content,a="touchstart"==e.type;if(a&&t.$container.off("mousedown.fb.touch"),(!e.originalEvent||2!=e.originalEvent.button)&&s.length&&i.length&&!c(i)&&!c(i.parent())&&(i.is("img")||!(e.originalEvent.clientX>i[0].clientWidth+i.offset().left))){if(!o||n.isAnimating||o.$slide.hasClass("fancybox-animated"))return e.stopPropagation(),void e.preventDefault();t.realPoints=t.startPoints=d(e),t.startPoints.length&&(o.touch&&e.stopPropagation(),t.startEvent=e,t.canTap=!0,t.$target=i,t.$content=r,t.opts=o.opts.touch,t.isPanning=!1,t.isSwiping=!1,t.isZooming=!1,t.isScrolling=!1,t.canPan=n.canPan(),t.startTime=(new Date).getTime(),t.distanceX=t.distanceY=t.distance=0,t.canvasWidth=Math.round(s[0].clientWidth),t.canvasHeight=Math.round(s[0].clientHeight),t.contentLastPos=null,t.contentStartPos=g.fancybox.getTranslate(t.$content)||{top:0,left:0},t.sliderStartPos=g.fancybox.getTranslate(s),t.stagePos=g.fancybox.getTranslate(n.$refs.stage),t.sliderStartPos.top-=t.stagePos.top,t.sliderStartPos.left-=t.stagePos.left,t.contentStartPos.top-=t.stagePos.top,t.contentStartPos.left-=t.stagePos.left,g(l).off(".fb.touch").on(a?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",g.proxy(t,"ontouchend")).on(a?"touchmove.fb.touch":"mousemove.fb.touch",g.proxy(t,"ontouchmove")),g.fancybox.isMobile&&l.addEventListener("scroll",t.onscroll,!0),((t.opts||t.canPan)&&(i.is(t.$stage)||t.$stage.find(i).length)||(i.is(".fancybox-image")&&e.preventDefault(),g.fancybox.isMobile&&i.parents(".fancybox-caption").length))&&(t.isScrollable=u(i)||u(i.parent()),g.fancybox.isMobile&&t.isScrollable||e.preventDefault(),1!==t.startPoints.length&&!o.hasError||(t.canPan?(g.fancybox.stop(t.$content),t.isPanning=!0):t.isSwiping=!0,t.$container.addClass("fancybox-is-grabbing")),2===t.startPoints.length&&"image"===o.type&&(o.isLoaded||o.$ghost)&&(t.canTap=!1,t.isSwiping=!1,t.isPanning=!1,t.isZooming=!0,g.fancybox.stop(t.$content),t.centerPointStartX=.5*(t.startPoints[0].x+t.startPoints[1].x)-g(m).scrollLeft(),t.centerPointStartY=.5*(t.startPoints[0].y+t.startPoints[1].y)-g(m).scrollTop(),t.percentageOfImageAtPinchPointX=(t.centerPointStartX-t.contentStartPos.left)/t.contentStartPos.width,t.percentageOfImageAtPinchPointY=(t.centerPointStartY-t.contentStartPos.top)/t.contentStartPos.height,t.startDistanceBetweenFingers=v(t.startPoints[0],t.startPoints[1]))))}},i.prototype.onscroll=function(e){this.isScrolling=!0,l.removeEventListener("scroll",this.onscroll,!0)},i.prototype.ontouchmove=function(e){var t=this;void 0===e.originalEvent.buttons||0!==e.originalEvent.buttons?t.isScrolling?t.canTap=!1:(t.newPoints=d(e),(t.opts||t.canPan)&&t.newPoints.length&&t.newPoints.length&&(t.isSwiping&&!0===t.isSwiping||e.preventDefault(),t.distanceX=v(t.newPoints[0],t.startPoints[0],"x"),t.distanceY=v(t.newPoints[0],t.startPoints[0],"y"),t.distance=v(t.newPoints[0],t.startPoints[0]),0<t.distance&&(t.isSwiping?t.onSwipe(e):t.isPanning?t.onPan():t.isZooming&&t.onZoom()))):t.ontouchend(e)},i.prototype.onSwipe=function(e){var t,o=this,s=o.instance,i=o.isSwiping,n=o.sliderStartPos.left||0;if(!0!==i)"x"==i&&(0<o.distanceX&&(o.instance.group.length<2||0===o.instance.current.index&&!o.instance.current.opts.loop)?n+=Math.pow(o.distanceX,.8):o.distanceX<0&&(o.instance.group.length<2||o.instance.current.index===o.instance.group.length-1&&!o.instance.current.opts.loop)?n-=Math.pow(-o.distanceX,.8):n+=o.distanceX),o.sliderLastPos={top:"x"==i?0:o.sliderStartPos.top+o.distanceY,left:n},o.requestId&&(y(o.requestId),o.requestId=null),o.requestId=b(function(){o.sliderLastPos&&(g.each(o.instance.slides,function(e,t){var i=t.pos-o.instance.currPos;g.fancybox.setTranslate(t.$slide,{top:o.sliderLastPos.top,left:o.sliderLastPos.left+i*o.canvasWidth+i*t.opts.gutter})}),o.$container.addClass("fancybox-is-sliding"))});else if(10<Math.abs(o.distance)){if(o.canTap=!1,s.group.length<2&&o.opts.vertical?o.isSwiping="y":s.isDragging||!1===o.opts.vertical||"auto"===o.opts.vertical&&800<g(m).width()?o.isSwiping="x":(t=Math.abs(180*Math.atan2(o.distanceY,o.distanceX)/Math.PI),o.isSwiping=45<t&&t<135?"y":"x"),"y"===o.isSwiping&&g.fancybox.isMobile&&o.isScrollable)return void(o.isScrolling=!0);s.isDragging=o.isSwiping,o.startPoints=o.newPoints,g.each(s.slides,function(e,t){var i,n;g.fancybox.stop(t.$slide),i=g.fancybox.getTranslate(t.$slide),n=g.fancybox.getTranslate(s.$refs.stage),t.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(e,t){return(t.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),t.pos===s.current.pos&&(o.sliderStartPos.top=i.top-n.top,o.sliderStartPos.left=i.left-n.left),g.fancybox.setTranslate(t.$slide,{top:i.top-n.top,left:i.left-n.left})}),s.SlideShow&&s.SlideShow.isActive&&s.SlideShow.stop()}},i.prototype.onPan=function(){var e=this;v(e.newPoints[0],e.realPoints[0])<(g.fancybox.isMobile?10:5)?e.startPoints=e.newPoints:(e.canTap=!1,e.contentLastPos=e.limitMovement(),e.requestId&&y(e.requestId),e.requestId=b(function(){g.fancybox.setTranslate(e.$content,e.contentLastPos)}))},i.prototype.limitMovement=function(){var e=this,t=e.canvasWidth,i=e.canvasHeight,n=e.distanceX,o=e.distanceY,s=e.contentStartPos,r=s.left,a=s.top,l=s.width,c=s.height,d=t<l?r+n:r,u=a+o,h=Math.max(0,.5*t-.5*l),p=Math.max(0,.5*i-.5*c),f=Math.min(t-l,.5*t-.5*l),m=Math.min(i-c,.5*i-.5*c);return 0<n&&h<d&&(d=h-1+Math.pow(-h+r+n,.8)||0),n<0&&d<f&&(d=f+1-Math.pow(f-r-n,.8)||0),0<o&&p<u&&(u=p-1+Math.pow(-p+a+o,.8)||0),o<0&&u<m&&(u=m+1-Math.pow(m-a-o,.8)||0),{top:u,left:d}},i.prototype.limitPosition=function(e,t,i,n){var o=this.canvasWidth,s=this.canvasHeight;return e=o<i?(e=0<e?0:e)<o-i?o-i:e:Math.max(0,o/2-i/2),{top:t=s<n?(t=0<t?0:t)<s-n?s-n:t:Math.max(0,s/2-n/2),left:e}},i.prototype.onZoom=function(){var e=this,t=e.contentStartPos,i=t.width,n=t.height,o=t.left,s=t.top,r=v(e.newPoints[0],e.newPoints[1])/e.startDistanceBetweenFingers,a=Math.floor(i*r),l=Math.floor(n*r),c=(i-a)*e.percentageOfImageAtPinchPointX,d=(n-l)*e.percentageOfImageAtPinchPointY,u=(e.newPoints[0].x+e.newPoints[1].x)/2-g(m).scrollLeft(),h=(e.newPoints[0].y+e.newPoints[1].y)/2-g(m).scrollTop(),p=u-e.centerPointStartX,f={top:s+(d+(h-e.centerPointStartY)),left:o+(c+p),scaleX:r,scaleY:r};e.canTap=!1,e.newWidth=a,e.newHeight=l,e.contentLastPos=f,e.requestId&&y(e.requestId),e.requestId=b(function(){g.fancybox.setTranslate(e.$content,e.contentLastPos)})},i.prototype.ontouchend=function(e){var t=this,i=t.isSwiping,n=t.isPanning,o=t.isZooming,s=t.isScrolling;if(t.endPoints=d(e),t.dMs=Math.max((new Date).getTime()-t.startTime,1),t.$container.removeClass("fancybox-is-grabbing"),g(l).off(".fb.touch"),l.removeEventListener("scroll",t.onscroll,!0),t.requestId&&(y(t.requestId),t.requestId=null),t.isSwiping=!1,t.isPanning=!1,t.isZooming=!1,t.isScrolling=!1,t.instance.isDragging=!1,t.canTap)return t.onTap(e);t.speed=100,t.velocityX=t.distanceX/t.dMs*.5,t.velocityY=t.distanceY/t.dMs*.5,n?t.endPanning():o?t.endZooming():t.endSwiping(i,s)},i.prototype.endSwiping=function(e,t){var i=this,n=!1,o=i.instance.group.length,s=Math.abs(i.distanceX),r="x"==e&&1<o&&(130<i.dMs&&10<s||50<s);i.sliderLastPos=null,"y"==e&&!t&&50<Math.abs(i.distanceY)?(g.fancybox.animate(i.instance.current.$slide,{top:i.sliderStartPos.top+i.distanceY+150*i.velocityY,opacity:0},200),n=i.instance.close(!0,250)):r&&0<i.distanceX?n=i.instance.previous(300):r&&i.distanceX<0&&(n=i.instance.next(300)),!1!==n||"x"!=e&&"y"!=e||i.instance.centerSlide(200),i.$container.removeClass("fancybox-is-sliding")},i.prototype.endPanning=function(){var e,t,i,n=this;n.contentLastPos&&(t=!1===n.opts.momentum||350<n.dMs?(e=n.contentLastPos.left,n.contentLastPos.top):(e=n.contentLastPos.left+500*n.velocityX,n.contentLastPos.top+500*n.velocityY),(i=n.limitPosition(e,t,n.contentStartPos.width,n.contentStartPos.height)).width=n.contentStartPos.width,i.height=n.contentStartPos.height,g.fancybox.animate(n.$content,i,366))},i.prototype.endZooming=function(){var e,t,i,n,o=this,s=o.instance.current,r=o.newWidth,a=o.newHeight;o.contentLastPos&&(e=o.contentLastPos.left,n={top:t=o.contentLastPos.top,left:e,width:r,height:a,scaleX:1,scaleY:1},g.fancybox.setTranslate(o.$content,n),r<o.canvasWidth&&a<o.canvasHeight?o.instance.scaleToFit(150):r>s.width||a>s.height?o.instance.scaleToActual(o.centerPointStartX,o.centerPointStartY,150):(i=o.limitPosition(e,t,r,a),g.fancybox.animate(o.$content,i,150)))},i.prototype.onTap=function(i){function e(e){var t=r.opts[e];if(g.isFunction(t)&&(t=t.apply(s,[r,i])),t)switch(t){case"close":s.close(n.startEvent);break;case"toggleControls":s.toggleControls();break;case"next":s.next();break;case"nextOrClose":1<s.group.length?s.next():s.close(n.startEvent);break;case"zoom":"image"==r.type&&(r.isLoaded||r.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(l,c):s.group.length<2&&s.close(n.startEvent))}}var t,n=this,o=g(i.target),s=n.instance,r=s.current,a=i&&d(i)||n.startPoints,l=a[0]?a[0].x-g(m).scrollLeft()-n.stagePos.left:0,c=a[0]?a[0].y-g(m).scrollTop()-n.stagePos.top:0;if((!i.originalEvent||2!=i.originalEvent.button)&&(o.is("img")||!(l>o[0].clientWidth+o.offset().left))){if(o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))t="Outside";else if(o.is(".fancybox-slide"))t="Slide";else{if(!s.current.$content||!s.current.$content.find(o).addBack().filter(o).length)return;t="Content"}if(n.tapped){if(clearTimeout(n.tapped),n.tapped=null,50<Math.abs(l-n.tapX)||50<Math.abs(c-n.tapY))return this;e("dblclick"+t)}else n.tapX=l,n.tapY=c,r.opts["dblclick"+t]&&r.opts["dblclick"+t]!==r.opts["click"+t]?n.tapped=setTimeout(function(){n.tapped=null,s.isAnimating||e("click"+t)},500):e("click"+t);return this}},g(l).on("onActivate.fb",function(e,t){t&&!t.Guestures&&(t.Guestures=new i(t))}).on("beforeClose.fb",function(e,t){t&&t.Guestures&&t.Guestures.destroy()})}(window,document,jQuery),function(r,a){"use strict";a.extend(!0,a.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});function i(e){this.instance=e,this.init()}a.extend(i.prototype,{timer:null,isActive:!1,$button:null,init:function(){var e=this,t=e.instance,i=t.group[t.currIndex].opts.slideShow;e.$button=t.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){e.toggle()}),t.group.length<2||!i?e.$button.hide():i.progress&&(e.$progress=a('<div class="fancybox-progress"></div>').appendTo(t.$refs.inner))},set:function(e){var t=this,i=t.instance,n=i.current;n&&(!0===e||n.opts.loop||i.currIndex<i.group.length-1)?t.isActive&&"video"!==n.contentType&&(t.$progress&&a.fancybox.animate(t.$progress.show(),{scaleX:1},n.opts.slideShow.speed),t.timer=setTimeout(function(){i.current.opts.loop||i.current.index!=i.group.length-1?i.next():i.jumpTo(0)},n.opts.slideShow.speed)):(t.stop(),i.idleSecondsCounter=0,i.showControls())},clear:function(){clearTimeout(this.timer),this.timer=null,this.$progress&&this.$progress.removeAttr("style").hide()},start:function(){var e=this,t=e.instance.current;t&&(e.$button.attr("title",(t.opts.i18n[t.opts.lang]||t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),e.isActive=!0,t.isComplete&&e.set(!0),e.instance.trigger("onSlideShowChange",!0))},stop:function(){var e=this,t=e.instance.current;e.clear(),e.$button.attr("title",(t.opts.i18n[t.opts.lang]||t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),e.isActive=!1,e.instance.trigger("onSlideShowChange",!1),e.$progress&&e.$progress.removeAttr("style").hide()},toggle:function(){this.isActive?this.stop():this.start()}}),a(r).on({"onInit.fb":function(e,t){t&&!t.SlideShow&&(t.SlideShow=new i(t))},"beforeShow.fb":function(e,t,i,n){var o=t&&t.SlideShow;n?o&&i.opts.slideShow.autoStart&&o.start():o&&o.isActive&&o.clear()},"afterShow.fb":function(e,t,i){var n=t&&t.SlideShow;n&&n.isActive&&n.set()},"afterKeydown.fb":function(e,t,i,n,o){var s=t&&t.SlideShow;!s||!i.opts.slideShow||80!==o&&32!==o||a(r.activeElement).is("button,a,input")||(n.preventDefault(),s.toggle())},"beforeClose.fb onDeactivate.fb":function(e,t){var i=t&&t.SlideShow;i&&i.stop()}}),a(r).on("visibilitychange",function(){var e=a.fancybox.getInstance(),t=e&&e.SlideShow;t&&t.isActive&&(r.hidden?t.clear():t.set())})}(document,jQuery),function(s,i){"use strict";var n,o=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],t={},i=0;i<e.length;i++){var n=e[i];if(n&&n[1]in s){for(var o=0;o<n.length;o++)t[e[0][o]]=n[o];return t}}return!1}();o&&(n={request:function(e){(e=e||s.documentElement)[o.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){s[o.exitFullscreen]()},toggle:function(e){e=e||s.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(s[o.fullscreenElement])},enabled:function(){return Boolean(s[o.fullscreenEnabled])}},i.extend(!0,i.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),i(s).on(o.fullscreenchange,function(){var e=n.isFullscreen(),t=i.fancybox.getInstance();t&&(t.current&&"image"===t.current.type&&t.isAnimating&&(t.isAnimating=!1,t.update(!0,!0,0),t.isComplete||t.complete()),t.trigger("onFullscreenChange",e),t.$refs.container.toggleClass("fancybox-is-fullscreen",e),t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!e).toggleClass("fancybox-button--fsexit",e))})),i(s).on({"onInit.fb":function(e,t){o?t&&t.group[t.currIndex].opts.fullScreen?(t.$refs.container.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(e){e.stopPropagation(),e.preventDefault(),n.toggle()}),t.opts.fullScreen&&!0===t.opts.fullScreen.autoStart&&n.request(),t.FullScreen=n):t&&t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide():t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()},"afterKeydown.fb":function(e,t,i,n,o){t&&t.FullScreen&&70===o&&(n.preventDefault(),t.FullScreen.toggle())},"beforeClose.fb":function(e,t){t&&t.FullScreen&&t.$refs.container.hasClass("fancybox-is-fullscreen")&&n.exit()}})}(document,jQuery),function(e,s){"use strict";var r="fancybox-thumbs",a=r+"-active";s.fancybox.defaults=s.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},s.fancybox.defaults);function n(e){this.init(e)}s.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(e){var t=this,i=e.group,n=0;t.instance=e,t.opts=i[e.currIndex].opts.thumbs,(e.Thumbs=t).$button=e.$refs.toolbar.find("[data-fancybox-thumbs]");for(var o=0,s=i.length;o<s&&(i[o].thumb&&n++,!(1<n));o++);1<n&&t.opts?(t.$button.removeAttr("style").on("click",function(){t.toggle()}),t.isActive=!0):t.$button.hide()},create:function(){var i,e=this,t=e.instance,n=e.opts.parentEl,o=[];e.$grid||(e.$grid=s('<div class="'+r+" "+r+"-"+e.opts.axis+'"></div>').appendTo(t.$refs.container.find(n).addBack().filter(n)),e.$grid.on("click","a",function(){t.jumpTo(s(this).attr("data-index"))})),e.$list||(e.$list=s('<div class="'+r+'__list">').appendTo(e.$grid)),s.each(t.group,function(e,t){(i=t.thumb)||"image"!==t.type||(i=t.src),o.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(i&&i.length?' style="background-image:url('+i+')"':'class="fancybox-thumbs-missing"')+"></a>")}),e.$list[0].innerHTML=o.join(""),"x"===e.opts.axis&&e.$list.width(parseInt(e.$grid.css("padding-right"),10)+t.group.length*e.$list.children().eq(0).outerWidth(!0))},focus:function(e){var t,i,n=this,o=n.$list,s=n.$grid;n.instance.current&&(i=(t=o.children().removeClass(a).filter('[data-index="'+n.instance.current.index+'"]').addClass(a)).position(),"y"===n.opts.axis&&(i.top<0||i.top>o.height()-t.outerHeight())?o.stop().animate({scrollTop:o.scrollTop()+i.top},e):"x"===n.opts.axis&&(i.left<s.scrollLeft()||i.left>s.scrollLeft()+(s.width()-t.outerWidth()))&&o.parent().stop().animate({scrollLeft:i.left},e))},update:function(){var e=this;e.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),e.isVisible?(e.$grid||e.create(),e.instance.trigger("onThumbsShow"),e.focus(0)):e.$grid&&e.instance.trigger("onThumbsHide"),e.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),s(e).on({"onInit.fb":function(e,t){var i;t&&!t.Thumbs&&(i=new n(t)).isActive&&!0===i.opts.autoStart&&i.show()},"beforeShow.fb":function(e,t,i,n){var o=t&&t.Thumbs;o&&o.isVisible&&o.focus(n?0:250)},"afterKeydown.fb":function(e,t,i,n,o){var s=t&&t.Thumbs;s&&s.isActive&&71===o&&(n.preventDefault(),s.toggle())},"beforeClose.fb":function(e,t){var i=t&&t.Thumbs;i&&i.isVisible&&!1!==i.opts.hideOnClose&&i.$grid.hide()}})}(document,jQuery),function(e,s){"use strict";s.extend(!0,s.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(e,t){return!e.currentHash&&"inline"!==t.type&&"html"!==t.type&&(t.origSrc||t.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),s(e).on("click","[data-fancybox-share]",function(){var e,t,i,n=s.fancybox.getInstance(),o=n.current||null;o&&("function"===s.type(o.opts.share.url)&&(e=o.opts.share.url.apply(o,[n,o])),t=o.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===o.type?encodeURIComponent(o.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g,(i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},String(e).replace(/[&<>"'`=\/]/g,function(e){return i[e]}))).replace(/\{\{descr\}\}/g,n.$caption?encodeURIComponent(n.$caption.text()):""),s.fancybox.open({src:n.translate(n,t),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(e,t){n.$refs.container.one("beforeClose.fb",function(){e.close(null,0)}),t.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(s,r,o){"use strict";function a(){var e=s.location.hash.substr(1),t=e.split("-"),i=1<t.length&&/^\+?\d+$/.test(t[t.length-1])&&parseInt(t.pop(-1),10)||1;return{hash:e,index:i<1?1:i,gallery:t.join("-")}}function t(e){""!==e.gallery&&o("[data-fancybox='"+o.escapeSelector(e.gallery)+"']").eq(e.index-1).focus().trigger("click.fb-start")}function l(e){var t,i;return!!e&&(""!==(i=(t=e.current?e.current.opts:e.opts).hash||(t.$orig?t.$orig.data("fancybox")||t.$orig.data("fancybox-trigger"):""))&&i)}o.escapeSelector||(o.escapeSelector=function(e){return(e+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e})}),o(function(){!1!==o.fancybox.defaults.hash&&(o(r).on({"onInit.fb":function(e,t){var i,n;!1!==t.group[t.currIndex].opts.hash&&(i=a(),(n=l(t))&&i.gallery&&n==i.gallery&&(t.currIndex=i.index-1))},"beforeShow.fb":function(e,t,i,n){var o;i&&!1!==i.opts.hash&&(o=l(t))&&(t.currentHash=o+(1<t.group.length?"-"+(i.index+1):""),s.location.hash!=="#"+t.currentHash&&(n&&!t.origHash&&(t.origHash=s.location.hash),t.hashTimer&&clearTimeout(t.hashTimer),t.hashTimer=setTimeout(function(){"replaceState"in s.history?(s.history[n?"pushState":"replaceState"]({},r.title,s.location.pathname+s.location.search+"#"+t.currentHash),n&&(t.hasCreatedHistory=!0)):s.location.hash=t.currentHash,t.hashTimer=null},300)))},"beforeClose.fb":function(e,t,i){i&&!1!==i.opts.hash&&(clearTimeout(t.hashTimer),t.currentHash&&t.hasCreatedHistory?s.history.back():t.currentHash&&("replaceState"in s.history?s.history.replaceState({},r.title,s.location.pathname+s.location.search+(t.origHash||"")):s.location.hash=t.origHash),t.currentHash=null)}}),o(s).on("hashchange.fb",function(){var e=a(),n=null;o.each(o(".fancybox-container").get().reverse(),function(e,t){var i=o(t).data("FancyBox");if(i&&i.currentHash)return n=i,!1}),n?n.currentHash===e.gallery+"-"+e.index||1===e.index&&n.currentHash==e.gallery||(n.currentHash=null,n.close()):""!==e.gallery&&t(e)}),setTimeout(function(){o.fancybox.getInstance()||t(a())},50))})}(window,document,jQuery),function(e,t){"use strict";var o=(new Date).getTime();t(e).on({"onInit.fb":function(e,n,t){n.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(e){var t=n.current,i=(new Date).getTime();n.group.length<2||!1===t.opts.wheel||"auto"===t.opts.wheel&&"image"!==t.type||(e.preventDefault(),e.stopPropagation(),t.$slide.hasClass("fancybox-animated")||(e=e.originalEvent||e,i-o<250||(o=i,n[(-e.deltaY||-e.deltaX||e.wheelDelta||-e.detail)<0?"next":"previous"]())))})}})}(document,jQuery),function(e){var t,o,i,n=navigator.userAgent;function s(){for(var e=document.querySelectorAll("picture > img, img[srcset][sizes]"),t=0;t<e.length;t++)!function(e){var t,i,n=e.parentNode;"PICTURE"===n.nodeName.toUpperCase()?(t=o.cloneNode(),n.insertBefore(t,n.firstElementChild),setTimeout(function(){n.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,i=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=i}))}(e[t])}function r(){clearTimeout(t),t=setTimeout(s,99)}function a(){r(),i&&i.addListener&&i.addListener(r)}e.HTMLPictureElement&&/ecko/.test(n)&&n.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(o=document.createElement("source"),i=e.matchMedia&&matchMedia("(orientation: landscape)"),o.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),r))}(window),function(e,s,c){"use strict";function d(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function E(e,t){return e.res-t.res}function k(e,t){var i,n,o;if(e&&t)for(o=M.parseSet(t),e=M.makeUrl(e),i=0;i<o.length;i++)if(e===M.makeUrl(o[i].url)){n=o[i];break}return n}function i(e){for(var t,i,n,o,s=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,r=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i,a=function(e){function t(){o&&(s.push(o),o="")}function i(){s[0]&&(r.push(s),s=[])}for(var n,o="",s=[],r=[],a=0,l=0,c=!1;;){if(""===(n=e.charAt(l)))return t(),i(),r;if(c){if("*"===n&&"/"===e[l+1]){c=!1,l+=2,t();continue}l+=1}else{if(d(n)){if(e.charAt(l-1)&&d(e.charAt(l-1))||!o){l+=1;continue}if(0===a){t(),l+=1;continue}n=" "}else if("("===n)a+=1;else if(")"===n)--a;else{if(","===n){t(),i(),l+=1;continue}if("/"===n&&"*"===e.charAt(l+1)){c=!0,l+=2;continue}}o+=n,l+=1}}}(e),l=a.length,c=0;c<l;c++)if(i=(t=a[c])[t.length-1],o=i,s.test(o)&&0<=parseFloat(o)||r.test(o)||"0"===o||"-0"===o||"+0"===o){if(n=i,t.pop(),0===t.length)return n;if(t=t.join(" "),M.matchesMedia(t))return n}return"100vw"}s.createElement("picture");function t(){}function n(e,t,i,n){e.addEventListener?e.addEventListener(t,i,n||!1):e.attachEvent&&e.attachEvent("on"+t,i)}function o(t){var i={};return function(e){return e in i||(i[e]=t(e)),i[e]}}function T(e,t){return e.w?(e.cWidth=M.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e}var r,u,l,a,h,p,f,m,g,v,b,y,x,w,S,C,z,A,P,I,L,M={},$=!1,D=s.createElement("img"),F=D.getAttribute,_=D.setAttribute,R=D.removeAttribute,O=s.documentElement,H={},B={algorithm:""},q="data-pfsrc",N=q+"set",j=navigator.userAgent,W=/rident/.test(j)||/ecko/.test(j)&&j.match(/rv\:(\d+)/)&&35<RegExp.$1,V="currentSrc",U=/\s+\+?\d+(e\d+)?w/,X=/(\([^)]+\))?\s*(.+)/,Y=e.picturefillCFG,Q="font-size:100%!important;",G=!0,Z={},K={},J=e.devicePixelRatio,ee={px:1,in:96},te=s.createElement("a"),ie=!1,ne=/^[ \t\n\r\u000c]+/,oe=/^[, \t\n\r\u000c]+/,se=/^[^ \t\n\r\u000c]+/,re=/[,]+$/,ae=/^\d+$/,le=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,ce=(a=/^([\d\.]+)(em|vw|px)$/,h=o(function(e){return"return "+function(){for(var e=arguments,t=0,i=e[0];++t in e;)i=i.replace(e[t],e[++t]);return i}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var i;if(!(e in Z))if(Z[e]=!1,t&&(i=e.match(a)))Z[e]=i[1]*ee[i[2]];else try{Z[e]=new Function("e",h(e))(ee)}catch(e){}return Z[e]}),de=function(e){if($){var t,i,n,o=e||{};if(o.elements&&1===o.elements.nodeType&&("IMG"===o.elements.nodeName.toUpperCase()?o.elements=[o.elements]:(o.context=o.elements,o.elements=null)),n=(t=o.elements||M.qsa(o.context||s,o.reevaluate||o.reselect?M.sel:M.selShort)).length){for(M.setupRun(o),ie=!0,i=0;i<n;i++)M.fillImg(t[i],o);M.teardownRun(o)}}};function ue(){2===z.width&&(M.supSizes=!0),u=M.supSrcset&&!M.supSizes,$=!0,setTimeout(de)}e.console&&console.warn,V in D||(V="src"),H["image/jpeg"]=!0,H["image/gif"]=!0,H["image/png"]=!0,H["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),M.ns=("pf"+(new Date).getTime()).substr(0,9),M.supSrcset="srcset"in D,M.supSizes="sizes"in D,M.supPicture=!!e.HTMLPictureElement,M.supSrcset&&M.supPicture&&!M.supSizes&&(A=s.createElement("img"),D.srcset="data:,a",A.src="data:,a",M.supSrcset=D.complete===A.complete,M.supPicture=M.supSrcset&&M.supPicture),M.supSrcset&&!M.supSizes?(C="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",(z=s.createElement("img")).onload=ue,z.onerror=ue,z.setAttribute("sizes","9px"),z.srcset=C+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",z.src=C):$=!0,M.selShort="picture>img,img[srcset]",M.sel=M.selShort,M.cfg=B,M.DPR=J||1,M.u=ee,M.types=H,M.setSize=t,M.makeUrl=o(function(e){return te.href=e,te.href}),M.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},M.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?M.matchesMedia=function(e){return!e||matchMedia(e).matches}:M.matchesMedia=M.mMQ,M.matchesMedia.apply(this,arguments)},M.mMQ=function(e){return!e||ce(e)},M.calcLength=function(e){var t=ce(e,!0)||!1;return t<0&&(t=!1),t},M.supportsType=function(e){return!e||H[e]},M.parseSize=o(function(e){var t=(e||"").match(X);return{media:t&&t[1],length:t&&t[2]}}),M.parseSet=function(e){return e.cands||(e.cands=function(n,u){function e(e){var t,i=e.exec(n.substring(a));return i?(t=i[0],a+=t.length,t):void 0}function t(){for(var e,t,i,n,o,s,r,a,l=!1,c={},d=0;d<p.length;d++)o=(n=p[d])[n.length-1],s=n.substring(0,n.length-1),r=parseInt(s,10),a=parseFloat(s),ae.test(s)&&"w"===o?((e||t)&&(l=!0),0===r?l=!0:e=r):le.test(s)&&"x"===o?((e||t||i)&&(l=!0),a<0?l=!0:t=a):ae.test(s)&&"h"===o?((i||t)&&(l=!0),0===r?l=!0:i=r):l=!0;l||(c.url=h,e&&(c.w=e),t&&(c.d=t),i&&(c.h=i),i||t||e||(c.d=1),1===c.d&&(u.has1x=!0),c.set=u,f.push(c))}for(var h,p,i,o,s,r=n.length,a=0,f=[];;){if(e(oe),r<=a)return f;h=e(se),p=[],","===h.slice(-1)?(h=h.replace(re,""),t()):function(){for(e(ne),i="",o="in descriptor";;){if(s=n.charAt(a),"in descriptor"===o)if(d(s))i&&(p.push(i),i="",o="after descriptor");else{if(","===s)return a+=1,i&&p.push(i),t();if("("===s)i+=s,o="in parens";else{if(""===s)return i&&p.push(i),t();i+=s}}else if("in parens"===o)if(")"===s)i+=s,o="in descriptor";else{if(""===s)return p.push(i),t();i+=s}else if("after descriptor"===o&&!d(s)){if(""===s)return t();o="in descriptor",--a}a+=1}}()}}(e.srcset,e)),e.cands},M.getEmValue=function(){var e,t,i,n;return!r&&(e=s.body)&&(t=s.createElement("div"),i=O.style.cssText,n=e.style.cssText,t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",O.style.cssText=Q,e.style.cssText=Q,e.appendChild(t),r=t.offsetWidth,e.removeChild(t),r=parseFloat(r,10),O.style.cssText=i,e.style.cssText=n),r||16},M.calcListLength=function(e){var t;return e in K&&!B.uT||(t=M.calcLength(i(e)),K[e]=t||ee.width),K[e]},M.setRes=function(e){var t;if(e)for(var i=0,n=(t=M.parseSet(e)).length;i<n;i++)T(t[i],e.sizes);return t},M.setRes.res=T,M.applySetCandidate=function(e,t){if(e.length){var i,n,o,s,r,a,l,c=t[M.ns],d=M.DPR,u=c.curSrc||t[V],h=c.curCan||(x=t,w=u,!(S=e[0].set)&&w&&(S=(S=x[M.ns].sets)&&S[S.length-1]),(C=k(w,S))&&(w=M.makeUrl(w),x[M.ns].curSrc=w,(x[M.ns].curCan=C).res||T(C,C.set.sizes)),C);if(h&&h.set===e[0].set&&((l=W&&!t.complete&&h.res-.1>d)||(h.cached=!0,h.res>=d&&(r=h))),!r)for(e.sort(E),r=e[(s=e.length)-1],n=0;n<s;n++)if((i=e[n]).res>=d){r=e[o=n-1]&&(l||u!==M.makeUrl(i.url))&&(p=e[o].res,f=i.res,m=d,g=e[o].cached,y=b=v=void 0,y="saveData"===B.algorithm?2.7<p?m+1:(b=(f-m)*(v=Math.pow(p-.6,1.5)),g&&(b+=.1*v),p+b):1<m?Math.sqrt(p*f):p,m<y)?e[o]:i;break}r&&(a=M.makeUrl(r.url),c.curSrc=a,c.curCan=r,a!==u&&M.setSrc(t,r),M.setSize(t))}var p,f,m,g,v,b,y,x,w,S,C},M.setSrc=function(e,t){var i;e.src=t.url,"image/svg+xml"===t.set.type&&(i=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=i))},M.getSet=function(e){for(var t,i,n=!1,o=e[M.ns].sets,s=0;s<o.length&&!n;s++)if((t=o[s]).srcset&&M.matchesMedia(t.media)&&(i=M.supportsType(t.type))){"pending"===i&&(t=i),n=t;break}return n},M.parseSets=function(e,t,i){var n,o,s,r,a=t&&"PICTURE"===t.nodeName.toUpperCase(),l=e[M.ns];l.src!==c&&!i.src||(l.src=F.call(e,"src"),l.src?_.call(e,q,l.src):R.call(e,q)),l.srcset!==c&&!i.srcset&&M.supSrcset&&!e.srcset||(n=F.call(e,"srcset"),l.srcset=n,r=!0),l.sets=[],a&&(l.pic=!0,function(e,t){for(var i,n,o=e.getElementsByTagName("source"),s=0,r=o.length;s<r;s++)(i=o[s])[M.ns]=!0,(n=i.getAttribute("srcset"))&&t.push({srcset:n,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,l.sets)),l.srcset?(o={srcset:l.srcset,sizes:F.call(e,"sizes")},l.sets.push(o),(s=(u||l.src)&&U.test(l.srcset||""))||!l.src||k(l.src,o)||o.has1x||(o.srcset+=", "+l.src,o.cands.push({url:l.src,d:1,set:o}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=c,l.supported=!(a||o&&!M.supSrcset||s&&!M.supSizes),r&&M.supSrcset&&!l.supported&&(n?(_.call(e,N,n),e.srcset=""):R.call(e,N)),l.supported&&!l.srcset&&(!l.src&&e.src||e.src!==M.makeUrl(l.src))&&(null===l.src?e.removeAttribute("src"):e.src=l.src),l.parsed=!0},M.fillImg=function(e,t){var i,n,o,s,r,a=t.reselect||t.reevaluate;e[M.ns]||(e[M.ns]={}),i=e[M.ns],!a&&i.evaled===l||(i.parsed&&!t.reevaluate||M.parseSets(e,e.parentNode,t),i.supported?i.evaled=l:(n=e,s=M.getSet(n),r=!1,"pending"!==s&&(r=l,s&&(o=M.setRes(s),M.applySetCandidate(o,n))),n[M.ns].evaled=r))},M.setupRun=function(){ie&&!G&&J===e.devicePixelRatio||(G=!1,J=e.devicePixelRatio,Z={},K={},M.DPR=J||1,ee.width=Math.max(e.innerWidth||0,O.clientWidth),ee.height=Math.max(e.innerHeight||0,O.clientHeight),ee.vw=ee.width/100,ee.vh=ee.height/100,l=[ee.height,ee.width,J].join("-"),ee.em=M.getEmValue(),ee.rem=ee.em)},M.supPicture?(de=t,M.fillImg=t):(y=e.attachEvent?/d$|^c/:/d$|^c|^i/,x=function(){var e=s.readyState||"";w=setTimeout(x,"loading"===e?200:999),s.body&&(M.fillImgs(),(p=p||y.test(e))&&clearTimeout(w))},w=setTimeout(x,s.body?9:99),S=O.clientHeight,n(e,"resize",(f=function(){G=Math.max(e.innerWidth||0,O.clientWidth)!==ee.width||O.clientHeight!==S,S=O.clientHeight,G&&M.fillImgs()},m=99,b=function(){var e=new Date-v;e<m?g=setTimeout(b,m-e):(g=null,f())},function(){v=new Date,g=g||setTimeout(b,m)})),n(s,"readystatechange",x)),M.picturefill=de,M.fillImgs=de,M.teardownRun=t,de._=M,e.picturefillCFG={pf:M,push:function(e){var t=e.shift();"function"==typeof M[t]?M[t].apply(M,e):(B[t]=e[0],ie&&M.fillImgs({reselect:!0}))}};for(;Y&&Y.length;)e.picturefillCFG.push(Y.shift());e.picturefill=de,"object"==typeof module&&"object"==typeof module.exports?module.exports=de:"function"==typeof define&&define.amd&&define("picturefill",function(){return de}),M.supPicture||(H["image/webp"]=(P="image/webp",I="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(L=new e.Image).onerror=function(){H[P]=!1,de()},L.onload=function(){H[P]=1===L.width,de()},L.src=I,"pending"))}(window,document),function(i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),i(t),t}:i(jQuery)}(function(u){"use strict";function i(e,t){var i=this;i.element=e,i.$element=u(e),i.state={multiple:!!i.$element.attr("multiple"),enabled:!1,opened:!1,currValue:-1,selectedIdx:-1,highlightedIdx:-1},i.eventTriggers={open:i.open,close:i.close,destroy:i.destroy,refresh:i.refresh,init:i.init},i.init(t)}var t=u(document),l=u(window),c="selectric",n=".sl",o=["a","e","i","o","u","n","c","y"],s=[/[\xE0-\xE5]/g,/[\xE8-\xEB]/g,/[\xEC-\xEF]/g,/[\xF2-\xF6]/g,/[\xF9-\xFC]/g,/[\xF1]/g,/[\xE7]/g,/[\xFD-\xFF]/g];i.prototype={utils:{isMobile:function(){return/android|ip(hone|od|ad)/i.test(navigator.userAgent)},escapeRegExp:function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},replaceDiacritics:function(e){for(var t=s.length;t--;)e=e.toLowerCase().replace(s[t],o[t]);return e},format:function(e){var n=arguments;return(""+e).replace(/\{(?:(\d+)|(\w+))\}/g,function(e,t,i){return i&&n[1]?n[1][i]:n[t]})},nextEnabledItem:function(e,t){for(;e[t=(t+1)%e.length].disabled;);return t},previousEnabledItem:function(e,t){for(;e[t=(0<t?t:e.length)-1].disabled;);return t},toDash:function(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},triggerCallback:function(e,t){var i=t.element,n=t.options["on"+e],o=[i].concat([].slice.call(arguments).slice(1));u.isFunction(n)&&n.apply(i,o),u(i).trigger(c+"-"+this.toDash(e),o)},arrayToClassname:function(e){var t=u.grep(e,function(e){return!!e});return u.trim(t.join(" "))}},init:function(e){var t,i,n,o,s,r,a,l=this;l.options=u.extend(!0,{},u.fn[c].defaults,l.options,e),l.utils.triggerCallback("BeforeInit",l),l.destroy(!0),l.options.disableOnMobile&&l.utils.isMobile()?l.disableOnMobile=!0:(l.classes=l.getClassNames(),t=u("<input/>",{class:l.classes.input,readonly:l.utils.isMobile()}),i=u("<div/>",{class:l.classes.items,tabindex:-1}),n=u("<div/>",{class:l.classes.scroll}),o=u("<div/>",{class:l.classes.prefix,html:l.options.arrowButtonMarkup}),s=u("<span/>",{class:"label"}),r=l.$element.wrap("<div/>").parent().append(o.prepend(s),i,t),a=u("<div/>",{class:l.classes.hideselect}),l.elements={input:t,items:i,itemsScroll:n,wrapper:o,label:s,outerWrapper:r},l.options.nativeOnMobile&&l.utils.isMobile()&&(l.elements.input=void 0,a.addClass(l.classes.prefix+"-is-native"),l.$element.on("change",function(){l.refresh()})),l.$element.on(l.eventTriggers).wrap(a),l.originalTabindex=l.$element.prop("tabindex"),l.$element.prop("tabindex",-1),l.populate(),l.activate(),l.utils.triggerCallback("Init",l))},activate:function(){var e=this,t=e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),i=e.$element.width();t.removeClass(e.classes.tempshow),e.utils.triggerCallback("BeforeActivate",e),e.elements.outerWrapper.prop("class",e.utils.arrayToClassname([e.classes.wrapper,e.$element.prop("class").replace(/\S+/g,e.classes.prefix+"-$&"),e.options.responsive?e.classes.responsive:""])),e.options.inheritOriginalWidth&&0<i&&e.elements.outerWrapper.width(i),e.unbindEvents(),e.$element.prop("disabled")?(e.elements.outerWrapper.addClass(e.classes.disabled),e.elements.input&&e.elements.input.prop("disabled",!0)):(e.state.enabled=!0,e.elements.outerWrapper.removeClass(e.classes.disabled),e.$li=e.elements.items.removeAttr("style").find("li"),e.bindEvents()),e.utils.triggerCallback("Activate",e)},getClassNames:function(){var n=this,o=n.options.customClass,s={};return u.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(" "),function(e,t){var i=o.prefix+t;s[t.toLowerCase()]=o.camelCase?i:n.utils.toDash(i)}),s.prefix=o.prefix,s},setLabel:function(){var e,t,i,n=this,o=n.options.labelBuilder;n.state.multiple?(e=0===(e=u.isArray(n.state.currValue)?n.state.currValue:[n.state.currValue]).length?[0]:e,t=u.map(e,function(t){return u.grep(n.lookupItems,function(e){return e.index===t})[0]}),t=u.grep(t,function(e){return 1<t.length||0===t.length?""!==u.trim(e.value):e}),t=u.map(t,function(e){return u.isFunction(o)?o(e):n.utils.format(o,e)}),n.options.multiple.maxLabelEntries&&(t.length>=n.options.multiple.maxLabelEntries+1?(t=t.slice(0,n.options.multiple.maxLabelEntries)).push(u.isFunction(o)?o({text:"..."}):n.utils.format(o,{text:"..."})):t.slice(t.length-1)),n.elements.label.html(t.join(n.options.multiple.separator))):(i=n.lookupItems[n.state.currValue],n.elements.label.html(u.isFunction(o)?o(i):n.utils.format(o,i)))},populate:function(){var n=this,e=n.$element.children(),t=n.$element.find("option"),i=t.filter(":selected"),o=t.index(i),s=0,r=n.state.multiple?[]:0;1<i.length&&n.state.multiple&&(o=[],i.each(function(){o.push(u(this).index())})),n.state.currValue=~o?o:r,n.state.selectedIdx=n.state.currValue,n.state.highlightedIdx=n.state.currValue,n.items=[],n.lookupItems=[],e.length&&(e.each(function(e){var i,t=u(this);t.is("optgroup")?(i={element:t,label:t.prop("label"),groupDisabled:t.prop("disabled"),items:[]},t.children().each(function(e){var t=u(this);i.items[e]=n.getItemData(s,t,i.groupDisabled||t.prop("disabled")),n.lookupItems[s]=i.items[e],s++}),n.items[e]=i):(n.items[e]=n.getItemData(s,t,t.prop("disabled")),n.lookupItems[s]=n.items[e],s++)}),n.setLabel(),n.elements.items.append(n.elements.itemsScroll.html(n.getItemsMarkup(n.items))))},getItemData:function(e,t,i){return{index:e,element:t,value:t.val(),className:t.prop("class"),text:t.html(),slug:u.trim(this.utils.replaceDiacritics(t.html())),alt:t.attr("data-alt"),selected:t.prop("selected"),disabled:i}},getItemsMarkup:function(e){var i=this,n="<ul>";return u.isFunction(i.options.listBuilder)&&i.options.listBuilder&&(e=i.options.listBuilder(e)),u.each(e,function(e,t){void 0!==t.label?(n+=i.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',i.utils.arrayToClassname([i.classes.group,t.groupDisabled?"disabled":"",t.element.prop("class")]),i.classes.grouplabel,t.element.prop("label")),u.each(t.items,function(e,t){n+=i.getItemMarkup(t.index,t)}),n+="</ul>"):n+=i.getItemMarkup(t.index,t)}),n+"</ul>"},getItemMarkup:function(e,t){var i=this,n=i.options.optionsItemBuilder,o={value:t.value,text:t.text,slug:t.slug,index:t.index};return i.utils.format('<li data-index="{1}" class="{2}">{3}</li>',e,i.utils.arrayToClassname([t.className,e===i.items.length-1?"last":"",t.disabled?"disabled":"",t.selected?"selected":""]),u.isFunction(n)?i.utils.format(n(t,this.$element,e),t):i.utils.format(n,o))},unbindEvents:function(){this.elements.wrapper.add(this.$element).add(this.elements.outerWrapper).add(this.elements.input).off(n)},bindEvents:function(){var s=this;s.elements.outerWrapper.on("mouseenter.sl mouseleave.sl",function(e){u(this).toggleClass(s.classes.hover,"mouseenter"===e.type),s.options.openOnHover&&(clearTimeout(s.closeTimer),"mouseleave"===e.type?s.closeTimer=setTimeout(u.proxy(s.close,s),s.options.hoverIntentTimeout):s.open())}),s.elements.wrapper.on("click.sl",function(e){s.state.opened?s.close():s.open(e)}),s.options.nativeOnMobile&&s.utils.isMobile()||(s.$element.on("focus.sl",function(){s.elements.input.focus()}),s.elements.input.prop({tabindex:s.originalTabindex,disabled:!1}).on("keydown.sl",u.proxy(s.handleKeys,s)).on("focusin.sl",function(e){s.elements.outerWrapper.addClass(s.classes.focus),s.elements.input.one("blur",function(){s.elements.input.blur()}),s.options.openOnFocus&&!s.state.opened&&s.open(e)}).on("focusout.sl",function(){s.elements.outerWrapper.removeClass(s.classes.focus)}).on("input propertychange",function(){var e=s.elements.input.val(),o=new RegExp("^"+s.utils.escapeRegExp(e),"i");clearTimeout(s.resetStr),s.resetStr=setTimeout(function(){s.elements.input.val("")},s.options.keySearchTimeout),e.length&&u.each(s.items,function(e,t){if(!t.disabled)if(o.test(t.text)||o.test(t.slug))s.highlight(e);else if(t.alt)for(var i=t.alt.split("|"),n=0;n<i.length&&i[n];n++)if(o.test(i[n].trim()))return void s.highlight(e)})})),s.$li.on({mousedown:function(e){e.preventDefault(),e.stopPropagation()},click:function(){return s.select(u(this).data("index")),!1}})},handleKeys:function(e){var t=this,i=e.which,n=t.options.keys,o=-1<u.inArray(i,n.previous),s=-1<u.inArray(i,n.next),r=-1<u.inArray(i,n.select),a=-1<u.inArray(i,n.open),l=t.state.highlightedIdx,c=o&&0===l||s&&l+1===t.items.length,d=0;if(13!==i&&32!==i||e.preventDefault(),o||s){if(!t.options.allowWrap&&c)return;o&&(d=t.utils.previousEnabledItem(t.lookupItems,l)),s&&(d=t.utils.nextEnabledItem(t.lookupItems,l)),t.highlight(d)}if(r&&t.state.opened)return t.select(l),void(t.state.multiple&&t.options.multiple.keepMenuOpen||t.close());a&&!t.state.opened&&t.open()},refresh:function(){this.populate(),this.activate(),this.utils.triggerCallback("Refresh",this)},setOptionsDimensions:function(){var e=this,t=e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),i=e.options.maxHeight,n=e.elements.items.outerWidth(),o=e.elements.wrapper.outerWidth()-(n-e.elements.items.width());!e.options.expandToItemText||n<o?e.finalWidth=o:(e.elements.items.css("overflow","scroll"),e.elements.outerWrapper.width(9e4),e.finalWidth=e.elements.items.width(),e.elements.items.css("overflow",""),e.elements.outerWrapper.width("")),e.elements.items.width(e.finalWidth).height()>i&&e.elements.items.height(i),t.removeClass(e.classes.tempshow)},isInViewport:function(){var e,t,i,n,o,s,r,a=this;!0===a.options.forceRenderAbove?a.elements.outerWrapper.addClass(a.classes.above):!0===a.options.forceRenderBelow?a.elements.outerWrapper.addClass(a.classes.below):(e=l.scrollTop(),t=l.height(),n=(i=a.elements.outerWrapper.offset().top)+a.elements.outerWrapper.outerHeight()+a.itemsHeight<=e+t,o=i-a.itemsHeight>e,r=!(s=!n&&o),a.elements.outerWrapper.toggleClass(a.classes.above,s),a.elements.outerWrapper.toggleClass(a.classes.below,r))},detectItemVisibility:function(e){var t=this,i=t.$li.filter("[data-index]");t.state.multiple&&(e=u.isArray(e)&&0===e.length?0:e,e=u.isArray(e)?Math.min.apply(Math,e):e);var n=i.eq(e).outerHeight(),o=i[e].offsetTop,s=t.elements.itemsScroll.scrollTop(),r=o+2*n;t.elements.itemsScroll.scrollTop(r>s+t.itemsHeight?r-t.itemsHeight:o-n<s?o-n:s)},open:function(e){var o=this;if(o.options.nativeOnMobile&&o.utils.isMobile())return!1;o.utils.triggerCallback("BeforeOpen",o),e&&(e.preventDefault(),o.options.stopPropagation&&e.stopPropagation()),o.state.enabled&&(o.setOptionsDimensions(),u("."+o.classes.hideselect,"."+o.classes.open).children()[c]("close"),o.state.opened=!0,o.itemsHeight=o.elements.items.outerHeight(),o.itemsInnerHeight=o.elements.items.height(),o.elements.outerWrapper.addClass(o.classes.open),o.elements.input.val(""),e&&"focusin"!==e.type&&o.elements.input.focus(),setTimeout(function(){t.on("click.sl",u.proxy(o.close,o)).on("scroll.sl",u.proxy(o.isInViewport,o))},1),o.isInViewport(),o.options.preventWindowScroll&&t.on("mousewheel.sl DOMMouseScroll.sl","."+o.classes.scroll,function(e){var t=e.originalEvent,i=u(this).scrollTop(),n=0;"detail"in t&&(n=-1*t.detail),"wheelDelta"in t&&(n=t.wheelDelta),"wheelDeltaY"in t&&(n=t.wheelDeltaY),"deltaY"in t&&(n=-1*t.deltaY),(i===this.scrollHeight-o.itemsInnerHeight&&n<0||0===i&&0<n)&&e.preventDefault()}),o.detectItemVisibility(o.state.selectedIdx),o.highlight(o.state.multiple?-1:o.state.selectedIdx),o.utils.triggerCallback("Open",o))},close:function(){var e=this;e.utils.triggerCallback("BeforeClose",e),t.off(n),e.elements.outerWrapper.removeClass(e.classes.open),e.state.opened=!1,e.utils.triggerCallback("Close",e)},change:function(){var i=this;i.utils.triggerCallback("BeforeChange",i),i.state.multiple?(u.each(i.lookupItems,function(e){i.lookupItems[e].selected=!1,i.$element.find("option").prop("selected",!1)}),u.each(i.state.selectedIdx,function(e,t){i.lookupItems[t].selected=!0,i.$element.find("option").eq(t).prop("selected",!0)}),i.state.currValue=i.state.selectedIdx,i.setLabel(),i.utils.triggerCallback("Change",i)):i.state.currValue!==i.state.selectedIdx&&(i.$element.prop("selectedIndex",i.state.currValue=i.state.selectedIdx).data("value",i.lookupItems[i.state.selectedIdx].text),i.setLabel(),i.utils.triggerCallback("Change",i))},highlight:function(e){var t=this,i=t.$li.filter("[data-index]").removeClass("highlighted");t.utils.triggerCallback("BeforeHighlight",t),void 0===e||-1===e||t.lookupItems[e].disabled||(i.eq(t.state.highlightedIdx=e).addClass("highlighted"),t.detectItemVisibility(e),t.utils.triggerCallback("Highlight",t))},select:function(e){var t,i=this,n=i.$li.filter("[data-index]");i.utils.triggerCallback("BeforeSelect",i,e),void 0===e||-1===e||i.lookupItems[e].disabled||(i.state.multiple?(i.state.selectedIdx=u.isArray(i.state.selectedIdx)?i.state.selectedIdx:[i.state.selectedIdx],-1!==(t=u.inArray(e,i.state.selectedIdx))?i.state.selectedIdx.splice(t,1):i.state.selectedIdx.push(e),n.removeClass("selected").filter(function(e){return-1!==u.inArray(e,i.state.selectedIdx)}).addClass("selected")):n.removeClass("selected").eq(i.state.selectedIdx=e).addClass("selected"),i.state.multiple&&i.options.multiple.keepMenuOpen||i.close(),i.change(),i.utils.triggerCallback("Select",i,e))},destroy:function(e){var t=this;t.state&&t.state.enabled&&(t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(),e||t.$element.removeData(c).removeData("value"),t.$element.prop("tabindex",t.originalTabindex).off(n).off(t.eventTriggers).unwrap().unwrap(),t.state.enabled=!1)}},u.fn[c]=function(t){return this.each(function(){var e=u.data(this,c);e&&!e.disableOnMobile?"string"==typeof t&&e[t]?e[t]():e.init(t):u.data(this,c,new i(this,t))})},u.fn[c].defaults={onChange:function(e){u(e).change()},maxHeight:300,keySearchTimeout:500,arrowButtonMarkup:'<b class="button">&#x25be;</b>',disableOnMobile:!1,nativeOnMobile:!0,openOnFocus:!0,openOnHover:!1,hoverIntentTimeout:500,expandToItemText:!1,responsive:!1,preventWindowScroll:!0,inheritOriginalWidth:!1,allowWrap:!0,forceRenderAbove:!1,forceRenderBelow:!1,stopPropagation:!0,optionsItemBuilder:"{text}",labelBuilder:"{text}",listBuilder:!1,keys:{previous:[37,38],next:[39,40],select:[9,13,27],open:[13,32,37,38,39,40],close:[9,27]},customClass:{prefix:c,camelCase:!1},multiple:{separator:", ",keepMenuOpen:!0,maxLabelEntries:!1}}}),function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t(require,0,module):e.CountUp=t()}(this,function(e,t,i){return function(e,t,i,n,o,s){var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,i,n){return i*(1-Math.pow(2,-10*e/n))*1024/1023+t},formattingFn:function(e){var t,i,n,o,s,r,a=e<0;if(e=Math.abs(e).toFixed(l.decimals),i=(t=(e+="").split("."))[0],n=1<t.length?l.options.decimal+t[1]:"",l.options.useGrouping){for(o="",s=0,r=i.length;s<r;++s)0!==s&&s%3==0&&(o=l.options.separator+o),o=i[r-s-1]+o;i=o}return l.options.numerals.length&&(i=i.replace(/[0-9]/g,function(e){return l.options.numerals[+e]}),n=n.replace(/[0-9]/g,function(e){return l.options.numerals[+e]})),(a?"-":"")+l.options.prefix+i+n+l.options.suffix},prefix:"",suffix:"",numerals:[]},s&&"object"==typeof s)for(var r in l.options)s.hasOwnProperty(r)&&null!==s[r]&&(l.options[r]=s[r]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var a=0,c=["webkit","moz","ms","o"],d=0;d<c.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[c[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[d]+"CancelAnimationFrame"]||window[c[d]+"CancelRequestAnimationFrame"];function u(e){return"number"==typeof e&&!isNaN(e)}window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var i=(new Date).getTime(),n=Math.max(0,16-(i-a)),o=window.setTimeout(function(){e(i+n)},n);return a=i+n,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof e?document.getElementById(e):e,l.d?(l.startVal=Number(t),l.endVal=Number(i),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,n||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(o)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0):(l.error="[CountUp] startVal ("+t+") or endVal ("+i+") is not a number",!1)):!(l.error="[CountUp] target is null or undefined"))},l.printValue=function(e){var t=l.options.formattingFn(e);"INPUT"===l.d.tagName?this.d.value=t:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=t:this.d.innerHTML=t},l.count=function(e){l.startTime||(l.startTime=e);var t=(l.timestamp=e)-l.startTime;l.remaining=l.duration-t,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(t,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(t,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(t/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(t/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),t<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(e){l.initialize()&&(l.callback=e,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(e){l.initialize()&&(u(e=Number(e))?(l.error="",e!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=e,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))):l.error="[CountUp] update() - new endVal is not a number: "+e)},l.initialize()&&l.printValue(l.startVal)}}),function(l){l.fn.countTo=function(s){s=l.extend({},l.fn.countTo.defaults,s||{});var r=Math.ceil(s.speed/s.refreshInterval),a=(s.from-s.to)/r;return Number.prototype.formatMoney=function(e,t,i){var n,e=isNaN(e=Math.abs(e))?2:e,t=null==t?".":t,i=null==i?",":i,o=this<0?"-":"",s=String(parseInt(n=Math.abs(Number(this)||0).toFixed(e))),r=3<(r=s.length)?r%3:0;return o+(r?s.substr(0,r)+i:"")+s.substr(r).replace(/(\d{3})(?=\d)/g,"$1"+i)+(e?t+Math.abs(n-s).toFixed(e).slice(2):"")},l(this).each(function(){var t=this,i=0,n=s.from,o=setInterval(function(){i++;var e=(n-=a).formatMoney(s.decimals,s.separator)+"";l(t).html(e),"function"==typeof s.onUpdate&&s.onUpdate.call(t,n);r<=i&&(clearInterval(o),n=s.to,"function"==typeof s.onComplete&&s.onComplete.call(t,n))},s.refreshInterval)})},l.fn.countTo.defaults={from:100,to:10,speed:1e3,refreshInterval:200,decimals:0,onUpdate:null,onComplete:null,separator:"."}}(jQuery),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(l){function c(e){return parseFloat(e)||0}function d(e){var t=l(e),n=null,o=[];return t.each(function(){var e=l(this),t=e.offset().top-c(e.css("margin-top")),i=0<o.length?o[o.length-1]:null;null!==i&&Math.floor(Math.abs(n-t))<=1?o[o.length-1]=i.add(e):o.push(e),n=t}),o}function u(e){var t={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?l.extend(t,e):("boolean"==typeof e?t.byRow=e:"remove"===e&&(t.remove=!0),t)}var n=-1,o=-1,h=l.fn.matchHeight=function(e){var t=u(e);if(t.remove){var i=this;return this.css(t.property,""),l.each(h._groups,function(e,t){t.elements=t.elements.not(i)}),this}return this.length<=1&&!t.target||(h._groups.push({elements:this,options:t}),h._apply(this,t)),this};h.version="0.7.2",h._groups=[],h._throttle=80,h._maintainScroll=!1,h._beforeUpdate=null,h._afterUpdate=null,h._rows=d,h._parse=c,h._parseOptions=u,h._apply=function(e,t){var s=u(t),i=l(e),n=[i],o=l(window).scrollTop(),r=l("html").outerHeight(!0),a=i.parents().filter(":hidden");return a.each(function(){var e=l(this);e.data("style-cache",e.attr("style"))}),a.css("display","block"),s.byRow&&!s.target&&(i.each(function(){var e=l(this),t=e.css("display");"inline-block"!==t&&"flex"!==t&&"inline-flex"!==t&&(t="block"),e.data("style-cache",e.attr("style")),e.css({display:t,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),n=d(i),i.each(function(){var e=l(this);e.attr("style",e.data("style-cache")||"")})),l.each(n,function(e,t){var i=l(t),o=0;if(s.target)o=s.target.outerHeight(!1);else{if(s.byRow&&i.length<=1)return void i.css(s.property,"");i.each(function(){var e=l(this),t=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var n={display:i};n[s.property]="",e.css(n),e.outerHeight(!1)>o&&(o=e.outerHeight(!1)),t?e.attr("style",t):e.css("display","")})}i.each(function(){var e=l(this),t=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(t+=c(e.css("border-top-width"))+c(e.css("border-bottom-width")),t+=c(e.css("padding-top"))+c(e.css("padding-bottom"))),e.css(s.property,o-t+"px"))})}),a.each(function(){var e=l(this);e.attr("style",e.data("style-cache")||null)}),h._maintainScroll&&l(window).scrollTop(o/r*l("html").outerHeight(!0)),this},h._applyDataApi=function(){var i={};l("[data-match-height], [data-mh]").each(function(){var e=l(this),t=e.attr("data-mh")||e.attr("data-match-height");t in i?i[t]=i[t].add(e):i[t]=e}),l.each(i,function(){this.matchHeight(!0)})};function s(e){h._beforeUpdate&&h._beforeUpdate(e,h._groups),l.each(h._groups,function(){h._apply(this.elements,this.options)}),h._afterUpdate&&h._afterUpdate(e,h._groups)}h._update=function(e,t){if(t&&"resize"===t.type){var i=l(window).width();if(i===n)return;n=i}e?-1===o&&(o=setTimeout(function(){s(t),o=-1},h._throttle)):s(t)},l(h._applyDataApi);var e=l.fn.on?"on":"bind";l(window)[e]("load",function(e){h._update(!1,e)}),l(window)[e]("resize orientationchange",function(e){h._update(!0,e)})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var s,T=!1,z=!1,A=0,P=2e3,I=0,L=e,M=document,$=window,D=L($),F=[],_=$.requestAnimationFrame||$.webkitRequestAnimationFrame||$.mozRequestAnimationFrame||!1,R=$.cancelAnimationFrame||$.webkitCancelAnimationFrame||$.mozCancelAnimationFrame||!1;_?$.cancelAnimationFrame||(R=function(e){}):(s=0,_=function(e,t){var i=(new Date).getTime(),n=Math.max(0,16-(i-s)),o=$.setTimeout(function(){e(i+n)},n);return s=i+n,o},R=function(e){$.clearTimeout(e)});function a(e,t){function i(){var e=y.doc.css(S.trstyle);return!(!e||"matrix"!=e.substr(0,6))&&e.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/)}function r(e,t,i){var n=e.css(t),o=parseFloat(n);if(isNaN(o)){var s=3==(o=h[n]||0)?i?y.win.outerHeight()-y.win.innerHeight():y.win.outerWidth()-y.win.innerWidth():1;return y.isie8&&o&&(o+=1),s?o:0}return o}function s(i,n,o,e){y._bind(i,n,function(e){var t={original:e=e||$.event,target:e.target||e.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==e.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){return e.preventDefault?e.preventDefault():e.returnValue=!1,!1},stopImmediatePropagation:function(){e.stopImmediatePropagation?e.stopImmediatePropagation():e.cancelBubble=!0}};return"mousewheel"==n?(e.wheelDeltaX&&(t.deltaX=-.025*e.wheelDeltaX),e.wheelDeltaY&&(t.deltaY=-.025*e.wheelDeltaY),t.deltaY||t.deltaX||(t.deltaY=-.025*e.wheelDelta)):t.deltaY=e.detail,o.call(i,t)},e)}function a(e,t,i,n){y.scrollrunning||(y.newscrolly=y.getScrollTop(),y.newscrollx=y.getScrollLeft(),C=H());var o=H()-C;if(C=H(),350<o?E=1:E+=(2-E)/10,t=t*E|0,e=e*E|0){if(n)if(e<0){if(y.getScrollLeft()>=y.page.maxw)return 1}else if(y.getScrollLeft()<=0)return 1;var s=0<e?1:-1;b!==s&&(y.scrollmom&&y.scrollmom.stop(),y.newscrollx=y.getScrollLeft(),b=s),y.lastdeltax-=e}if(t){if(function(){var e=y.getScrollTop();if(t<0){if(e>=y.page.maxh)return 1}else if(e<=0)return 1}()){if(w.nativeparentscrolling&&i&&!y.ispage&&!y.zoomactive)return 1;var r=y.view.h>>1;t=y.newscrolly<-r?(y.newscrolly=-r,-1):y.newscrolly>y.page.maxh+r?(y.newscrolly=y.page.maxh+r,1):0}var a=0<t?1:-1;v!==a&&(y.scrollmom&&y.scrollmom.stop(),y.newscrolly=y.getScrollTop(),v=a),y.lastdeltay-=t}(t||e)&&y.synched("relativexy",function(){var e=y.lastdeltay+y.newscrolly;y.lastdeltay=0;var t=y.lastdeltax+y.newscrollx;y.lastdeltax=0,y.rail.drag||y.doScrollPos(t,e)})}function o(e,t,i){var n,o;return!(i||!k)||(0===e.deltaMode?(n=-e.deltaX*(w.mousescrollstep/54)|0,o=-e.deltaY*(w.mousescrollstep/54)|0):1===e.deltaMode&&(n=-e.deltaX*w.mousescrollstep*50/80|0,o=-e.deltaY*w.mousescrollstep*50/80|0),t&&w.oneaxismousemode&&0===n&&o&&(n=o,o=0,i&&(n<0?y.getScrollLeft()>=y.page.maxw:y.getScrollLeft()<=0)&&(o=n,n=0)),y.isrtlmode&&(n=-n),a(n,o,i,!0)?void(i&&(k=!0)):(k=!1,e.stopImmediatePropagation(),e.preventDefault()))}var y=this;this.version="3.7.6",this.name="nicescroll",this.me=t;var n,l,x=L("body"),w=this.opt={doc:x,win:!1};if(L.extend(w,B),w.snapbackspeed=80,e)for(var c in w)void 0!==e[c]&&(w[c]=e[c]);if(w.disablemutationobserver&&(O=!1),this.doc=w.doc,this.iddoc=this.doc&&this.doc[0]&&this.doc[0].id||"",this.ispage=/^BODY|HTML/.test(w.win?w.win[0].nodeName:this.doc[0].nodeName),this.haswrapper=!1!==w.win,this.win=w.win||(this.ispage?D:this.doc),this.docscroll=this.ispage&&!this.haswrapper?D:this.win,this.body=x,this.viewport=!1,this.isfixed=!1,this.iframe=!1,this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName,this.istextarea="TEXTAREA"==this.win[0].nodeName,this.forcescreen=!1,this.canshowonmouseevent="scroll"!=w.autohidemode,this.onmousedown=!1,this.onmouseup=!1,this.onmousemove=!1,this.onmousewheel=!1,this.onkeypress=!1,this.ongesturezoom=!1,this.onclick=!1,this.onscrollstart=!1,this.onscrollend=!1,this.onscrollcancel=!1,this.onzoomin=!1,this.onzoomout=!1,this.view=!1,this.page=!1,this.scroll={x:0,y:0},this.scrollratio={x:0,y:0},this.cursorheight=20,this.scrollvaluemax=0,"auto"==w.rtlmode?"horizontal-tb"==(l=(n=this.win[0]==$?this.body:this.win).css("writing-mode")||n.css("-webkit-writing-mode")||n.css("-ms-writing-mode")||n.css("-moz-writing-mode"))||"lr-tb"==l||""===l?(this.isrtlmode="rtl"==n.css("direction"),this.isvertical=!1):(this.isrtlmode="vertical-rl"==l||"tb"==l||"tb-rl"==l||"rl-tb"==l,this.isvertical="vertical-rl"==l||"tb"==l||"tb-rl"==l):(this.isrtlmode=!0===w.rtlmode,this.isvertical=!1),this.scrollrunning=!1,this.scrollmom=!1,this.observer=!1,this.observerremover=!1,(this.observerbody=!1)!==w.scrollbarid)this.id=w.scrollbarid;else for(;this.id="ascrail"+P++,M.getElementById(this.id););this.rail=!1,this.cursor=!1,this.cursorfreezed=!1,this.selectiondrag=!1,this.zoom=!1,this.zoomactive=!1,this.hasfocus=!1,this.hasmousefocus=!1,this.railslocked=!1,this.locked=!1,this.hidden=!1,this.cursoractive=!0,this.wheelprevented=!1,this.overflowx=w.overflowx,this.overflowy=w.overflowy,this.nativescrollingarea=!1,this.checkarea=0,this.events=[],this.saved={},this.delaylist={},this.synclist={},this.lastdeltax=0,this.lastdeltay=0,this.detected=function(){if(q)return q;var e=M.createElement("DIV"),s=e.style,t=navigator.userAgent,i=navigator.platform,r={};return r.haspointerlock="pointerLockElement"in M||"webkitPointerLockElement"in M||"mozPointerLockElement"in M,r.isopera="opera"in $,r.isopera12=r.isopera&&"getUserMedia"in navigator,r.isoperamini="[object OperaMini]"===Object.prototype.toString.call($.operamini),r.isie="all"in M&&"attachEvent"in e&&!r.isopera,r.isieold=r.isie&&!("msInterpolationMode"in s),r.isie7=r.isie&&!r.isieold&&(!("documentMode"in M)||7===M.documentMode),r.isie8=r.isie&&"documentMode"in M&&8===M.documentMode,r.isie9=r.isie&&"performance"in $&&9===M.documentMode,r.isie10=r.isie&&"performance"in $&&10===M.documentMode,r.isie11="msRequestFullscreen"in e&&11<=M.documentMode,r.ismsedge="msCredentials"in $,r.ismozilla="MozAppearance"in s,r.iswebkit=!r.ismsedge&&"WebkitAppearance"in s,r.ischrome=r.iswebkit&&"chrome"in $,r.ischrome38=r.ischrome&&"touchAction"in s,r.ischrome22=!r.ischrome38&&r.ischrome&&r.haspointerlock,r.ischrome26=!r.ischrome38&&r.ischrome&&"transition"in s,r.cantouch="ontouchstart"in M.documentElement||"ontouchstart"in $,r.hasw3ctouch=!!$.PointerEvent&&(0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints),r.hasmstouch=!r.hasw3ctouch&&($.MSPointerEvent||!1),r.ismac=/^mac$/i.test(i),r.isios=r.cantouch&&/iphone|ipad|ipod/i.test(i),r.isios4=r.isios&&!("seal"in Object),r.isios7=r.isios&&"webkitHidden"in M,r.isios8=r.isios&&"hidden"in M,r.isios10=r.isios&&$.Proxy,r.isandroid=/android/i.test(t),r.haseventlistener="addEventListener"in e,r.trstyle=!1,r.hastransform=!1,r.hastranslate3d=!1,r.transitionstyle=!1,r.hastransition=!1,r.transitionend=!1,r.trstyle="transform",r.hastransform="transform"in s||function(){for(var e=["msTransform","webkitTransform","MozTransform","OTransform"],t=0,i=e.length;t<i;t++)if(void 0!==s[e[t]]){r.trstyle=e[t];break}r.hastransform=!!r.trstyle}(),r.hastransform&&(s[r.trstyle]="translate3d(1px,2px,3px)",r.hastranslate3d=/translate3d/.test(s[r.trstyle])),r.transitionstyle="transition",r.prefixstyle="",r.transitionend="transitionend",r.hastransition="transition"in s||function(){r.transitionend=!1;for(var e=["webkitTransition","msTransition","MozTransition","OTransition","OTransition","KhtmlTransition"],t=["-webkit-","-ms-","-moz-","-o-","-o","-khtml-"],i=["webkitTransitionEnd","msTransitionEnd","transitionend","otransitionend","oTransitionEnd","KhtmlTransitionEnd"],n=0,o=e.length;n<o;n++)if(e[n]in s){r.transitionstyle=e[n],r.prefixstyle=t[n],r.transitionend=i[n];break}r.ischrome26&&(r.prefixstyle=t[1]),r.hastransition=r.transitionstyle}(),r.cursorgrabvalue=function(){var e=["grab","-webkit-grab","-moz-grab"];(r.ischrome&&!r.ischrome38||r.isie)&&(e=[]);for(var t=0,i=e.length;t<i;t++){var n=e[t];if(s.cursor=n,s.cursor==n)return n}return"url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"}(),r.hasmousecapture="setCapture"in e,r.hasMutationObserver=!1!==O,e=null,q=r}();var d,S=L.extend({},this.detected);function u(e,t,i,n,o,s,r){this.st=e,this.ed=t,this.spd=i,this.p1=n||0,this.p2=o||1,this.p3=s||0,this.p4=r||1,this.ts=H(),this.df=t-e}this.canhwscroll=S.hastransform&&w.hwacceleration,this.ishwscroll=this.canhwscroll&&y.haswrapper,this.isrtlmode?this.isvertical?this.hasreversehr=!(S.iswebkit||S.isie||S.isie11):this.hasreversehr=!(S.iswebkit||S.isie&&!S.isie10&&!S.isie11):this.hasreversehr=!1,this.istouchcapable=!1,(S.cantouch||!S.hasw3ctouch&&!S.hasmstouch)&&(!S.cantouch||S.isios||S.isandroid||!S.iswebkit&&!S.ismozilla)||(this.istouchcapable=!0),w.enablemouselockapi||(S.hasmousecapture=!1,S.haspointerlock=!1),this.debounced=function(e,t,i){y&&(y.delaylist[e]||(y.delaylist[e]={h:_(function(){y.delaylist[e].fn.call(y),y.delaylist[e]=!1},i)},t.call(y)),y.delaylist[e].fn=t)},this.synched=function(e,t){y.synclist[e]?y.synclist[e]=t:(y.synclist[e]=t,_(function(){y&&(y.synclist[e]&&y.synclist[e].call(y),y.synclist[e]=null)}))},this.unsynched=function(e){y.synclist[e]&&(y.synclist[e]=!1)},this.css=function(e,t){for(var i in t)y.saved.css.push([e,i,e.css(i)]),e.css(i,t[i])},this.scrollTop=function(e){return void 0===e?y.getScrollTop():y.setScrollTop(e)},this.scrollLeft=function(e){return void 0===e?y.getScrollLeft():y.setScrollLeft(e)},u.prototype={B2:function(e){return 3*(1-e)*(1-e)*e},B3:function(e){return 3*(1-e)*e*e},B4:function(e){return e*e*e},getPos:function(){return(H()-this.ts)/this.spd},getNow:function(){var e=(H()-this.ts)/this.spd,t=this.B2(e)+this.B3(e)+this.B4(e);return 1<=e?this.ed:this.st+this.df*t|0},update:function(e,t){return this.st=this.getNow(),this.ed=e,this.spd=t,this.ts=H(),this.df=this.ed-this.st,this}},this.ishwscroll?(this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"},S.hastranslate3d&&S.isios&&this.doc.css("-webkit-backface-visibility","hidden"),this.getScrollTop=function(e){if(!e){var t=i();if(t)return 16==t.length?-t[13]:-t[5];if(y.timerscroll&&y.timerscroll.bz)return y.timerscroll.bz.getNow()}return y.doc.translate.y},this.getScrollLeft=function(e){if(!e){var t=i();if(t)return 16==t.length?-t[12]:-t[4];if(y.timerscroll&&y.timerscroll.bh)return y.timerscroll.bh.getNow()}return y.doc.translate.x},this.notifyScrollEvent=function(e){var t=M.createEvent("UIEvents");t.initUIEvent("scroll",!1,!1,$,1),t.niceevent=!0,e.dispatchEvent(t)},d=this.isrtlmode?1:-1,S.hastranslate3d&&w.enabletranslate3d?(this.setScrollTop=function(e,t){y.doc.translate.y=e,y.doc.translate.ty=-1*e+"px",y.doc.css(S.trstyle,"translate3d("+y.doc.translate.tx+","+y.doc.translate.ty+",0)"),t||y.notifyScrollEvent(y.win[0])},this.setScrollLeft=function(e,t){y.doc.translate.x=e,y.doc.translate.tx=e*d+"px",y.doc.css(S.trstyle,"translate3d("+y.doc.translate.tx+","+y.doc.translate.ty+",0)"),t||y.notifyScrollEvent(y.win[0])}):(this.setScrollTop=function(e,t){y.doc.translate.y=e,y.doc.translate.ty=-1*e+"px",y.doc.css(S.trstyle,"translate("+y.doc.translate.tx+","+y.doc.translate.ty+")"),t||y.notifyScrollEvent(y.win[0])},this.setScrollLeft=function(e,t){y.doc.translate.x=e,y.doc.translate.tx=e*d+"px",y.doc.css(S.trstyle,"translate("+y.doc.translate.tx+","+y.doc.translate.ty+")"),t||y.notifyScrollEvent(y.win[0])})):(this.getScrollTop=function(){return y.docscroll.scrollTop()},this.setScrollTop=function(e){y.docscroll.scrollTop(e)},this.getScrollLeft=function(){return y.hasreversehr?y.detected.ismozilla?y.page.maxw-Math.abs(y.docscroll.scrollLeft()):y.page.maxw-y.docscroll.scrollLeft():y.docscroll.scrollLeft()},this.setScrollLeft=function(e){return setTimeout(function(){if(y)return y.hasreversehr&&(e=y.detected.ismozilla?-(y.page.maxw-e):y.page.maxw-e),y.docscroll.scrollLeft(e)},1)}),this.getTarget=function(e){return!!e&&(e.target?e.target:!!e.srcElement&&e.srcElement)},this.hasParent=function(e,t){if(!e)return!1;for(var i=e.target||e.srcElement||e||!1;i&&i.id!=t;)i=i.parentNode||!1;return!1!==i};var h={thin:1,medium:3,thick:5};this.getDocumentScrollOffset=function(){return{top:$.pageYOffset||M.documentElement.scrollTop,left:$.pageXOffset||M.documentElement.scrollLeft}},this.getOffset=function(){if(y.isfixed){var e=y.win.offset(),t=y.getDocumentScrollOffset();return e.top-=t.top,e.left-=t.left,e}var i=y.win.offset();if(!y.viewport)return i;var n=y.viewport.offset();return{top:i.top-n.top,left:i.left-n.left}},this.updateScrollBar=function(e){var t,i,n,o,s;y.ishwscroll?(y.rail.css({height:y.win.innerHeight()-(w.railpadding.top+w.railpadding.bottom)}),y.railh&&y.railh.css({width:y.win.innerWidth()-(w.railpadding.left+w.railpadding.right)})):((s={top:(i=y.getOffset()).top,left:i.left-(w.railpadding.left+w.railpadding.right)}).top+=r(y.win,"border-top-width",!0),s.left+=y.rail.align?y.win.outerWidth()-r(y.win,"border-right-width")-y.rail.width:r(y.win,"border-left-width"),(t=w.railoffset)&&(t.top&&(s.top+=t.top),t.left&&(s.left+=t.left)),y.railslocked||y.rail.css({top:s.top,left:s.left,height:(e?e.h:y.win.innerHeight())-(w.railpadding.top+w.railpadding.bottom)}),y.zoom&&y.zoom.css({top:s.top+1,left:1==y.rail.align?s.left-20:s.left+y.rail.width+4}),y.railh&&!y.railslocked&&(s={top:i.top,left:i.left},(t=w.railhoffset)&&(t.top&&(s.top+=t.top),t.left&&(s.left+=t.left)),n=y.railh.align?s.top+r(y.win,"border-top-width",!0)+y.win.innerHeight()-y.railh.height:s.top+r(y.win,"border-top-width",!0),o=s.left+r(y.win,"border-left-width"),y.railh.css({top:n-(w.railpadding.top+w.railpadding.bottom),left:o,width:y.railh.width})))},this.doRailClick=function(e,t,i){var n,o,s,r;y.railslocked||(y.cancelEvent(e),"pageY"in e||(e.pageX=e.clientX+M.documentElement.scrollLeft,e.pageY=e.clientY+M.documentElement.scrollTop),t?(n=i?y.doScrollLeft:y.doScrollTop,s=i?(e.pageX-y.railh.offset().left-y.cursorwidth/2)*y.scrollratio.x:(e.pageY-y.rail.offset().top-y.cursorheight/2)*y.scrollratio.y,y.unsynched("relativexy"),n(0|s)):(n=i?y.doScrollLeftBy:y.doScrollBy,s=i?y.scroll.x:y.scroll.y,r=i?e.pageX-y.railh.offset().left:e.pageY-y.rail.offset().top,o=i?y.view.w:y.view.h,n(r<=s?o:-o)))},y.newscrolly=y.newscrollx=0,y.hasanimationframe="requestAnimationFrame"in $,y.hascancelanimationframe="cancelAnimationFrame"in $,y.hasborderbox=!1,this.init=function(){if(y.saved.css=[],S.isoperamini)return!0;if(S.isandroid&&!("hidden"in M))return!0;w.emulatetouch=w.emulatetouch||w.touchbehavior,y.hasborderbox=$.getComputedStyle&&"border-box"===$.getComputedStyle(M.body)["box-sizing"];var e,i={"overflow-y":"hidden"};if((S.isie11||S.isie10)&&(i["-ms-overflow-style"]="none"),y.ishwscroll&&(this.doc.css(S.transitionstyle,S.prefixstyle+"transform 0ms ease-out"),S.transitionend&&y.bind(y.doc,S.transitionend,y.onScrollTransitionEnd,!1)),y.zindex="auto",y.ispage||"auto"!=w.zindex?y.zindex=w.zindex:y.zindex=function(){var e=y.win;if("zIndex"in e)return e.zIndex();for(;0<e.length;){if(9==e[0].nodeType)return!1;var t=e.css("zIndex");if(!isNaN(t)&&0!==t)return parseInt(t);e=e.parent()}return!1}()||"auto",!y.ispage&&"auto"!=y.zindex&&y.zindex>I&&(I=y.zindex),y.isie&&0===y.zindex&&"auto"==w.zindex&&(y.zindex="auto"),!y.ispage||!S.isieold){var t=y.docscroll;y.ispage&&(t=y.haswrapper?y.win:y.doc),y.css(t,i),y.ispage&&(S.isie11||S.isie)&&y.css(L("html"),i),!S.isios||y.ispage||y.haswrapper||y.css(x,{"-webkit-overflow-scrolling":"touch"});var n=L(M.createElement("div"));n.css({position:"relative",top:0,float:"right",width:w.cursorwidth,height:0,"background-color":w.cursorcolor,border:w.cursorborder,"background-clip":"padding-box","-webkit-border-radius":w.cursorborderradius,"-moz-border-radius":w.cursorborderradius,"border-radius":w.cursorborderradius}),n.addClass("nicescroll-cursors"),y.cursor=n;var o=L(M.createElement("div"));o.attr("id",y.id),o.addClass("nicescroll-rails nicescroll-rails-vr");var s,r,a=["left","right","top","bottom"];for(var l in a)r=a[l],(s=w.railpadding[r]||0)&&o.css("padding-"+r,s+"px");o.append(n),o.width=Math.max(parseFloat(w.cursorwidth),n.outerWidth()),o.css({width:o.width+"px",zIndex:y.zindex,background:w.background,cursor:"default"}),o.visibility=!0,o.scrollable=!0,o.align="left"==w.railalign?0:1,y.rail=o;var c,d,u,f,m,h,p,g,v,b=y.rail.drag=!1;!w.boxzoom||y.ispage||S.isieold||(b=M.createElement("div"),y.bind(b,"click",y.doZoom),y.bind(b,"mouseenter",function(){y.zoom.css("opacity",w.cursoropacitymax)}),y.bind(b,"mouseleave",function(){y.zoom.css("opacity",w.cursoropacitymin)}),y.zoom=L(b),y.zoom.css({cursor:"pointer",zIndex:y.zindex,backgroundImage:"url("+w.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0 0"}),w.dblclickzoom&&y.bind(y.win,"dblclick",y.doZoom),S.cantouch&&w.gesturezoom&&(y.ongesturezoom=function(e){return 1.5<e.scale&&y.doZoomIn(e),e.scale<.8&&y.doZoomOut(e),y.cancelEvent(e)},y.bind(y.win,"gestureend",y.ongesturezoom))),y.railh=!1,w.horizrailenabled&&(y.css(t,{overflowX:"hidden"}),(n=L(M.createElement("div"))).css({position:"absolute",top:0,height:w.cursorwidth,width:0,backgroundColor:w.cursorcolor,border:w.cursorborder,backgroundClip:"padding-box","-webkit-border-radius":w.cursorborderradius,"-moz-border-radius":w.cursorborderradius,"border-radius":w.cursorborderradius}),S.isieold&&n.css("overflow","hidden"),n.addClass("nicescroll-cursors"),y.cursorh=n,(c=L(M.createElement("div"))).attr("id",y.id+"-hr"),c.addClass("nicescroll-rails nicescroll-rails-hr"),c.height=Math.max(parseFloat(w.cursorwidth),n.outerHeight()),c.css({height:c.height+"px",zIndex:y.zindex,background:w.background}),c.append(n),c.visibility=!0,c.scrollable=!0,c.align="top"==w.railvalign?0:1,y.railh=c,y.railh.drag=!1),y.ispage?(o.css({position:"fixed",top:0,height:"100%"}),o.css(o.align?{right:0}:{left:0}),y.body.append(o),y.railh&&(c.css({position:"fixed",left:0,width:"100%"}),c.css(c.align?{bottom:0}:{top:0}),y.body.append(c))):(y.ishwscroll?("static"==y.win.css("position")&&y.css(y.win,{position:"relative"}),d="HTML"==y.win[0].nodeName?y.body:y.win,L(d).scrollTop(0).scrollLeft(0),y.zoom&&(y.zoom.css({position:"absolute",top:1,right:0,"margin-right":o.width+4}),d.append(y.zoom)),o.css({position:"absolute",top:0}),o.css(o.align?{right:0}:{left:0}),d.append(o),c&&(c.css({position:"absolute",left:0,bottom:0}),c.css(c.align?{bottom:0}:{top:0}),d.append(c))):(y.isfixed="fixed"==y.win.css("position"),u=y.isfixed?"fixed":"absolute",y.isfixed||(y.viewport=y.getViewport(y.win[0])),y.viewport&&(y.body=y.viewport,/fixed|absolute/.test(y.viewport.css("position"))||y.css(y.viewport,{position:"relative"})),o.css({position:u}),y.zoom&&y.zoom.css({position:u}),y.updateScrollBar(),y.body.append(o),y.zoom&&y.body.append(y.zoom),y.railh&&(c.css({position:u}),y.body.append(c))),S.isios&&y.css(y.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),w.disableoutline&&(S.isie&&y.win.attr("hideFocus","true"),S.iswebkit&&y.win.css("outline","none"))),!1===w.autohidemode?(y.autohidedom=!1,y.rail.css({opacity:w.cursoropacitymax}),y.railh&&y.railh.css({opacity:w.cursoropacitymax})):!0===w.autohidemode||"leave"===w.autohidemode?(y.autohidedom=L().add(y.rail),S.isie8&&(y.autohidedom=y.autohidedom.add(y.cursor)),y.railh&&(y.autohidedom=y.autohidedom.add(y.railh)),y.railh&&S.isie8&&(y.autohidedom=y.autohidedom.add(y.cursorh))):"scroll"==w.autohidemode?(y.autohidedom=L().add(y.rail),y.railh&&(y.autohidedom=y.autohidedom.add(y.railh))):"cursor"==w.autohidemode?(y.autohidedom=L().add(y.cursor),y.railh&&(y.autohidedom=y.autohidedom.add(y.cursorh))):"hidden"==w.autohidemode&&(y.autohidedom=!1,y.hide(),y.railslocked=!1),(S.cantouch||y.istouchcapable||w.emulatetouch||S.hasmstouch)&&(y.scrollmom=new N(y),y.ontouchstart=function(e){if(y.locked)return!1;if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!1;if(y.hasmoving=!1,y.scrollmom.timer&&(y.triggerScrollEnd(),y.scrollmom.stop()),!y.railslocked){var t=y.getTarget(e);if(t&&/INPUT/i.test(t.nodeName)&&/range/i.test(t.type))return y.stopPropagation(e);var i,n,o,s,r,a,l,c="mousedown"===e.type;if(!("clientX"in e)&&"changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),y.forcescreen&&((e={original:(i=e).original?e.original:e}).clientX=i.screenX,e.clientY=i.screenY),y.rail.drag={x:e.clientX,y:e.clientY,sx:y.scroll.x,sy:y.scroll.y,st:y.getScrollTop(),sl:y.getScrollLeft(),pt:2,dl:!1,tg:t},y.ispage||!w.directionlockdeadzone?y.rail.drag.dl="f":(n=D.width(),o=D.height(),r=(s=y.getContentSize()).h-o,a=s.w-n,y.rail.scrollable&&!y.railh.scrollable?y.rail.drag.ck=0<r&&"v":!y.rail.scrollable&&y.railh.scrollable?y.rail.drag.ck=0<a&&"h":y.rail.drag.ck=!1),w.emulatetouch&&y.isiframe&&S.isie&&(l=y.win.position(),y.rail.drag.x+=l.left,y.rail.drag.y+=l.top),y.hasmoving=!1,y.lastmouseup=!1,y.scrollmom.reset(e.clientX,e.clientY),t&&c){if(!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(t.nodeName))return S.hasmousecapture&&t.setCapture(),w.emulatetouch?(t.onclick&&!t._onclick&&(t._onclick=t.onclick,t.onclick=function(e){if(y.hasmoving)return!1;t._onclick.call(this,e)}),y.cancelEvent(e)):y.stopPropagation(e);/SUBMIT|CANCEL|BUTTON/i.test(L(t).attr("type"))&&(y.preventclick={tg:t,click:!1})}}},y.ontouchend=function(e){if(!y.rail.drag)return!0;if(2==y.rail.drag.pt){if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!1;y.rail.drag=!1;var t="mouseup"===e.type;if(y.hasmoving&&(y.scrollmom.doMomentum(),y.lastmouseup=!0,y.hideCursor(),S.hasmousecapture&&M.releaseCapture(),t))return y.cancelEvent(e)}else if(1==y.rail.drag.pt)return y.onmouseup(e)},f=w.emulatetouch&&y.isiframe&&!S.hasmousecapture,m=.3*w.directionlockdeadzone|0,y.ontouchmove=function(e,t){if(!y.rail.drag)return!0;if(e.targetTouches&&w.preventmultitouchscrolling&&1<e.targetTouches.length)return!0;if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!0;if(2!=y.rail.drag.pt)return 1==y.rail.drag.pt?y.onmousemove(e):void 0;var i,n,o;"changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),n=o=0,f&&!t&&(n=-(i=y.win.position()).left,o=-i.top);var s=e.clientY+o,r=s-y.rail.drag.y,a=e.clientX+n,l=a-y.rail.drag.x,c=y.rail.drag.st-r;if(y.ishwscroll&&w.bouncescroll)c<0?c=Math.round(c/2):c>y.page.maxh&&(c=y.page.maxh+Math.round((c-y.page.maxh)/2));else if(c<0?s=c=0:c>y.page.maxh&&(c=y.page.maxh,s=0),0===s&&!y.hasmoving)return y.ispage||(y.rail.drag=!1),!0;var d=y.getScrollLeft();if(y.railh&&y.railh.scrollable&&(d=y.isrtlmode?l-y.rail.drag.sl:y.rail.drag.sl-l,y.ishwscroll&&w.bouncescroll?d<0?d=Math.round(d/2):d>y.page.maxw&&(d=y.page.maxw+Math.round((d-y.page.maxw)/2)):(d<0&&(a=d=0),d>y.page.maxw&&(d=y.page.maxw,a=0))),!y.hasmoving){if(y.rail.drag.y===e.clientY&&y.rail.drag.x===e.clientX)return y.cancelEvent(e);var u=Math.abs(r),h=Math.abs(l),p=w.directionlockdeadzone;if(y.rail.drag.ck?"v"==y.rail.drag.ck?p<h&&u<=m?y.rail.drag=!1:p<u&&(y.rail.drag.dl="v"):"h"==y.rail.drag.ck&&(p<u&&h<=m?y.rail.drag=!1:p<h&&(y.rail.drag.dl="h")):p<u&&p<h?y.rail.drag.dl="f":p<u?y.rail.drag.dl=m<h?"f":"v":p<h&&(y.rail.drag.dl=m<u?"f":"h"),!y.rail.drag.dl)return y.cancelEvent(e);y.triggerScrollStart(e.clientX,e.clientY,0,0,0),y.hasmoving=!0}return y.preventclick&&!y.preventclick.click&&(y.preventclick.click=y.preventclick.tg.onclick||!1,y.preventclick.tg.onclick=y.onpreventclick),y.rail.drag.dl&&("v"==y.rail.drag.dl?d=y.rail.drag.sl:"h"==y.rail.drag.dl&&(c=y.rail.drag.st)),y.synched("touchmove",function(){y.rail.drag&&2==y.rail.drag.pt&&(y.prepareTransition&&y.resetTransition(),y.rail.scrollable&&y.setScrollTop(c),y.scrollmom.update(a,s),y.railh&&y.railh.scrollable?(y.setScrollLeft(d),y.showCursor(c,d)):y.showCursor(c),S.isie10&&M.selection.clear())}),y.cancelEvent(e)},y.ontouchstartCursor=function(e,t){if(!y.rail.drag||3==y.rail.drag.pt){if(y.locked)return y.cancelEvent(e);y.cancelScroll(),y.rail.drag={x:e.touches[0].clientX,y:e.touches[0].clientY,sx:y.scroll.x,sy:y.scroll.y,pt:3,hr:!!t};var i=y.getTarget(e);return!y.ispage&&S.hasmousecapture&&i.setCapture(),y.isiframe&&!S.hasmousecapture&&(y.saved.csspointerevents=y.doc.css("pointer-events"),y.css(y.doc,{"pointer-events":"none"})),y.cancelEvent(e)}},y.ontouchendCursor=function(e){if(y.rail.drag){if(S.hasmousecapture&&M.releaseCapture(),y.isiframe&&!S.hasmousecapture&&y.doc.css("pointer-events",y.saved.csspointerevents),3!=y.rail.drag.pt)return;return y.rail.drag=!1,y.cancelEvent(e)}},y.ontouchmoveCursor=function(e){if(y.rail.drag){if(3!=y.rail.drag.pt)return;var t,i;return y.cursorfreezed=!0,y.rail.drag.hr?(y.scroll.x=y.rail.drag.sx+(e.touches[0].clientX-y.rail.drag.x),y.scroll.x<0&&(y.scroll.x=0),t=y.scrollvaluemaxw,y.scroll.x>t&&(y.scroll.x=t)):(y.scroll.y=y.rail.drag.sy+(e.touches[0].clientY-y.rail.drag.y),y.scroll.y<0&&(y.scroll.y=0),i=y.scrollvaluemax,y.scroll.y>i&&(y.scroll.y=i)),y.synched("touchmove",function(){y.rail.drag&&3==y.rail.drag.pt&&(y.showCursor(),y.rail.drag.hr?y.doScrollLeft(Math.round(y.scroll.x*y.scrollratio.x),w.cursordragspeed):y.doScrollTop(Math.round(y.scroll.y*y.scrollratio.y),w.cursordragspeed))}),y.cancelEvent(e)}}),y.onmousedown=function(e,t){if(!y.rail.drag||1==y.rail.drag.pt){if(y.railslocked)return y.cancelEvent(e);y.cancelScroll(),y.rail.drag={x:e.clientX,y:e.clientY,sx:y.scroll.x,sy:y.scroll.y,pt:1,hr:t||!1};var i=y.getTarget(e);return S.hasmousecapture&&i.setCapture(),y.isiframe&&!S.hasmousecapture&&(y.saved.csspointerevents=y.doc.css("pointer-events"),y.css(y.doc,{"pointer-events":"none"})),y.hasmoving=!1,y.cancelEvent(e)}},y.onmouseup=function(e){if(y.rail.drag)return 1!=y.rail.drag.pt||(S.hasmousecapture&&M.releaseCapture(),y.isiframe&&!S.hasmousecapture&&y.doc.css("pointer-events",y.saved.csspointerevents),y.rail.drag=!1,y.cursorfreezed=!1,y.hasmoving&&y.triggerScrollEnd(),y.cancelEvent(e))},y.onmousemove=function(e){if(y.rail.drag){if(1!==y.rail.drag.pt)return;return S.ischrome&&0===e.which?y.onmouseup(e):(y.cursorfreezed=!0,y.hasmoving||y.triggerScrollStart(e.clientX,e.clientY,0,0,0),y.hasmoving=!0,y.rail.drag.hr?(y.scroll.x=y.rail.drag.sx+(e.clientX-y.rail.drag.x),y.scroll.x<0&&(y.scroll.x=0),t=y.scrollvaluemaxw,y.scroll.x>t&&(y.scroll.x=t)):(y.scroll.y=y.rail.drag.sy+(e.clientY-y.rail.drag.y),y.scroll.y<0&&(y.scroll.y=0),i=y.scrollvaluemax,y.scroll.y>i&&(y.scroll.y=i)),y.synched("mousemove",function(){y.cursorfreezed&&(y.showCursor(),y.rail.drag.hr?y.scrollLeft(Math.round(y.scroll.x*y.scrollratio.x)):y.scrollTop(Math.round(y.scroll.y*y.scrollratio.y)))}),y.cancelEvent(e));var t,i}y.checkarea=0},S.cantouch||w.emulatetouch?(y.onpreventclick=function(e){if(y.preventclick)return y.preventclick.tg.onclick=y.preventclick.click,y.preventclick=!1,y.cancelEvent(e)},y.onclick=!S.isios&&function(e){return!y.lastmouseup||(y.lastmouseup=!1,y.cancelEvent(e))},w.grabcursorenabled&&S.cursorgrabvalue&&(y.css(y.ispage?y.doc:y.win,{cursor:S.cursorgrabvalue}),y.css(y.rail,{cursor:S.cursorgrabvalue}))):(h=function(e){var t,i,n;y.selectiondrag&&(e&&(t=y.win.outerHeight(),0<(i=e.pageY-y.selectiondrag.top)&&i<t&&(i=0),t<=i&&(i-=t),y.selectiondrag.df=i),0!==y.selectiondrag.df&&(n=-2*y.selectiondrag.df/6|0,y.doScrollBy(n),y.debounced("doselectionscroll",function(){h()},50)))},y.hasTextSelected="getSelection"in M?function(){return 0<M.getSelection().rangeCount}:"selection"in M?function(){return"None"!=M.selection.type}:function(){return!1},y.onselectionstart=function(e){y.ispage||(y.selectiondrag=y.win.offset())},y.onselectionend=function(e){y.selectiondrag=!1},y.onselectiondrag=function(e){y.selectiondrag&&y.hasTextSelected()&&y.debounced("selectionscroll",function(){h(e)},250)}),S.hasw3ctouch?(y.css(y.ispage?L("html"):y.win,{"touch-action":"none"}),y.css(y.rail,{"touch-action":"none"}),y.css(y.cursor,{"touch-action":"none"}),y.bind(y.win,"pointerdown",y.ontouchstart),y.bind(M,"pointerup",y.ontouchend),y.delegate(M,"pointermove",y.ontouchmove)):S.hasmstouch?(y.css(y.ispage?L("html"):y.win,{"-ms-touch-action":"none"}),y.css(y.rail,{"-ms-touch-action":"none"}),y.css(y.cursor,{"-ms-touch-action":"none"}),y.bind(y.win,"MSPointerDown",y.ontouchstart),y.bind(M,"MSPointerUp",y.ontouchend),y.delegate(M,"MSPointerMove",y.ontouchmove),y.bind(y.cursor,"MSGestureHold",function(e){e.preventDefault()}),y.bind(y.cursor,"contextmenu",function(e){e.preventDefault()})):S.cantouch&&(y.bind(y.win,"touchstart",y.ontouchstart,!1,!0),y.bind(M,"touchend",y.ontouchend,!1,!0),y.bind(M,"touchcancel",y.ontouchend,!1,!0),y.delegate(M,"touchmove",y.ontouchmove,!1,!0)),w.emulatetouch&&(y.bind(y.win,"mousedown",y.ontouchstart,!1,!0),y.bind(M,"mouseup",y.ontouchend,!1,!0),y.bind(M,"mousemove",y.ontouchmove,!1,!0)),!w.cursordragontouch&&(S.cantouch||w.emulatetouch)||(y.rail.css({cursor:"default"}),y.railh&&y.railh.css({cursor:"default"}),y.jqbind(y.rail,"mouseenter",function(){return!(!y.ispage&&!y.win.is(":visible"))&&(y.canshowonmouseevent&&y.showCursor(),void(y.rail.active=!0))}),y.jqbind(y.rail,"mouseleave",function(){y.rail.active=!1,y.rail.drag||y.hideCursor()}),w.sensitiverail&&(y.bind(y.rail,"click",function(e){y.doRailClick(e,!1,!1)}),y.bind(y.rail,"dblclick",function(e){y.doRailClick(e,!0,!1)}),y.bind(y.cursor,"click",function(e){y.cancelEvent(e)}),y.bind(y.cursor,"dblclick",function(e){y.cancelEvent(e)})),y.railh&&(y.jqbind(y.railh,"mouseenter",function(){return!(!y.ispage&&!y.win.is(":visible"))&&(y.canshowonmouseevent&&y.showCursor(),void(y.rail.active=!0))}),y.jqbind(y.railh,"mouseleave",function(){y.rail.active=!1,y.rail.drag||y.hideCursor()}),w.sensitiverail&&(y.bind(y.railh,"click",function(e){y.doRailClick(e,!1,!0)}),y.bind(y.railh,"dblclick",function(e){y.doRailClick(e,!0,!0)}),y.bind(y.cursorh,"click",function(e){y.cancelEvent(e)}),y.bind(y.cursorh,"dblclick",function(e){y.cancelEvent(e)})))),w.cursordragontouch&&(this.istouchcapable||S.cantouch)&&(y.bind(y.cursor,"touchstart",y.ontouchstartCursor),y.bind(y.cursor,"touchmove",y.ontouchmoveCursor),y.bind(y.cursor,"touchend",y.ontouchendCursor),y.cursorh&&y.bind(y.cursorh,"touchstart",function(e){y.ontouchstartCursor(e,!0)}),y.cursorh&&y.bind(y.cursorh,"touchmove",y.ontouchmoveCursor),y.cursorh&&y.bind(y.cursorh,"touchend",y.ontouchendCursor)),w.emulatetouch||S.isandroid||S.isios?(y.bind(S.hasmousecapture?y.win:M,"mouseup",y.ontouchend),y.onclick&&y.bind(M,"click",y.onclick),w.cursordragontouch?(y.bind(y.cursor,"mousedown",y.onmousedown),y.bind(y.cursor,"mouseup",y.onmouseup),y.cursorh&&y.bind(y.cursorh,"mousedown",function(e){y.onmousedown(e,!0)}),y.cursorh&&y.bind(y.cursorh,"mouseup",y.onmouseup)):(y.bind(y.rail,"mousedown",function(e){e.preventDefault()}),y.railh&&y.bind(y.railh,"mousedown",function(e){e.preventDefault()}))):(y.bind(S.hasmousecapture?y.win:M,"mouseup",y.onmouseup),y.bind(M,"mousemove",y.onmousemove),y.onclick&&y.bind(M,"click",y.onclick),y.bind(y.cursor,"mousedown",y.onmousedown),y.bind(y.cursor,"mouseup",y.onmouseup),y.railh&&(y.bind(y.cursorh,"mousedown",function(e){y.onmousedown(e,!0)}),y.bind(y.cursorh,"mouseup",y.onmouseup)),!y.ispage&&w.enablescrollonselection&&(y.bind(y.win[0],"mousedown",y.onselectionstart),y.bind(M,"mouseup",y.onselectionend),y.bind(y.cursor,"mouseup",y.onselectionend),y.cursorh&&y.bind(y.cursorh,"mouseup",y.onselectionend),y.bind(M,"mousemove",y.onselectiondrag)),y.zoom&&(y.jqbind(y.zoom,"mouseenter",function(){y.canshowonmouseevent&&y.showCursor(),y.rail.active=!0}),y.jqbind(y.zoom,"mouseleave",function(){y.rail.active=!1,y.rail.drag||y.hideCursor()}))),w.enablemousewheel&&(y.isiframe||y.mousewheel(S.isie&&y.ispage?M:y.win,y.onmousewheel),y.mousewheel(y.rail,y.onmousewheel),y.railh&&y.mousewheel(y.railh,y.onmousewheelhr)),y.ispage||S.cantouch||/HTML|^BODY/.test(y.win[0].nodeName)||(y.win.attr("tabindex")||y.win.attr({tabindex:++A}),y.bind(y.win,"focus",function(e){T=y.getTarget(e).id||y.getTarget(e)||!1,y.hasfocus=!0,y.canshowonmouseevent&&y.noticeCursor()}),y.bind(y.win,"blur",function(e){T=!1,y.hasfocus=!1}),y.bind(y.win,"mouseenter",function(e){z=y.getTarget(e).id||y.getTarget(e)||!1,y.hasmousefocus=!0,y.canshowonmouseevent&&y.noticeCursor()}),y.bind(y.win,"mouseleave",function(e){z=!1,y.hasmousefocus=!1,y.rail.drag||y.hideCursor()})),y.onkeypress=function(e){if(y.railslocked&&0===y.page.maxh)return!0;e=e||$.event;var t=y.getTarget(e);if(t&&/INPUT|TEXTAREA|SELECT|OPTION/.test(t.nodeName)&&(!t.getAttribute("type")&&!t.type||!/submit|button|cancel/i.tp))return!0;if(L(t).attr("contenteditable"))return!0;if(y.hasfocus||y.hasmousefocus&&!T||y.ispage&&!T&&!z){var i=e.keyCode;if(y.railslocked&&27!=i)return y.cancelEvent(e);var n=e.ctrlKey||!1,o=e.shiftKey||!1,s=!1;switch(i){case 38:case 63233:y.doScrollBy(72),s=!0;break;case 40:case 63235:y.doScrollBy(-72),s=!0;break;case 37:case 63232:y.railh&&(n?y.doScrollLeft(0):y.doScrollLeftBy(72),s=!0);break;case 39:case 63234:y.railh&&(n?y.doScrollLeft(y.page.maxw):y.doScrollLeftBy(-72),s=!0);break;case 33:case 63276:y.doScrollBy(y.view.h),s=!0;break;case 34:case 63277:y.doScrollBy(-y.view.h),s=!0;break;case 36:case 63273:y.railh&&n?y.doScrollPos(0,0):y.doScrollTo(0),s=!0;break;case 35:case 63275:y.railh&&n?y.doScrollPos(y.page.maxw,y.page.maxh):y.doScrollTo(y.page.maxh),s=!0;break;case 32:w.spacebarenabled&&(o?y.doScrollBy(y.view.h):y.doScrollBy(-y.view.h),s=!0);break;case 27:y.zoomactive&&(y.doZoom(),s=!0)}if(s)return y.cancelEvent(e)}},w.enablekeyboard&&y.bind(M,S.isopera&&!S.isopera12?"keypress":"keydown",y.onkeypress),y.bind(M,"keydown",function(e){e.ctrlKey&&(y.wheelprevented=!0)}),y.bind(M,"keyup",function(e){e.ctrlKey||(y.wheelprevented=!1)}),y.bind($,"blur",function(e){y.wheelprevented=!1}),y.bind($,"resize",y.onscreenresize),y.bind($,"orientationchange",y.onscreenresize),y.bind($,"load",y.lazyResize),!S.ischrome||y.ispage||y.haswrapper||(p=y.win.attr("style"),g=parseFloat(y.win.css("width"))+1,y.win.css("width",g),y.synched("chromefix",function(){y.win.attr("style",p)})),y.onAttributeChange=function(e){y.lazyResize(y.isieold?250:30)},!w.enableobserver||(y.isie11||!1===O||(y.observerbody=new O(function(e){if(e.forEach(function(e){if("attributes"==e.type)return x.hasClass("modal-open")&&x.hasClass("modal-dialog")&&!L.contains(L(".modal-dialog")[0],y.doc[0])?y.hide():y.show()}),y.me.clientWidth!=y.page.width||y.me.clientHeight!=y.page.height)return y.lazyResize(30)}),y.observerbody.observe(M.body,{childList:!0,subtree:!0,characterData:!1,attributes:!0,attributeFilter:["class"]})),y.ispage||y.haswrapper)||(v=y.win[0],!1!==O?(y.observer=new O(function(e){e.forEach(y.onAttributeChange)}),y.observer.observe(v,{childList:!0,characterData:!1,attributes:!0,subtree:!1}),y.observerremover=new O(function(e){e.forEach(function(e){if(0<e.removedNodes.length)for(var t in e.removedNodes)if(y&&e.removedNodes[t]===v)return y.remove()})}),y.observerremover.observe(v.parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(y.bind(v,S.isie&&!S.isie9?"propertychange":"DOMAttrModified",y.onAttributeChange),S.isie9&&v.attachEvent("onpropertychange",y.onAttributeChange),y.bind(v,"DOMNodeRemoved",function(e){e.target===v&&y.remove()}))),!y.ispage&&w.boxzoom&&y.bind($,"resize",y.resizeZoom),y.istextarea&&(y.bind(y.win,"keydown",y.lazyResize),y.bind(y.win,"mouseup",y.lazyResize)),y.lazyResize(30)}"IFRAME"==this.doc[0].nodeName&&(e=function(){var t,e;y.iframexd=!1;try{(t="contentDocument"in this?this.contentDocument:this.contentWindow._doc).domain}catch(e){t=!(y.iframexd=!0)}if(y.iframexd)return"console"in $&&console.log("NiceScroll error: policy restriced iframe"),!0;y.forcescreen=!0,y.isiframe&&(y.iframe={doc:L(t),html:y.doc.contents().find("html")[0],body:y.doc.contents().find("body")[0]},y.getContentSize=function(){return{w:Math.max(y.iframe.html.scrollWidth,y.iframe.body.scrollWidth),h:Math.max(y.iframe.html.scrollHeight,y.iframe.body.scrollHeight)}},y.docscroll=L(y.iframe.body)),S.isios||!w.iframeautoresize||y.isiframe||(y.win.scrollTop(0),y.doc.height(""),e=Math.max(t.getElementsByTagName("html")[0].scrollHeight,t.body.scrollHeight),y.doc.height(e)),y.lazyResize(30),y.css(L(y.iframe.body),i),S.isios&&y.haswrapper&&y.css(L(t.body),{"-webkit-transform":"translate3d(0,0,0)"}),"contentWindow"in this?y.bind(this.contentWindow,"scroll",y.onscroll):y.bind(t,"scroll",y.onscroll),w.enablemousewheel&&y.mousewheel(t,y.onmousewheel),w.enablekeyboard&&y.bind(t,S.isopera?"keypress":"keydown",y.onkeypress),S.cantouch?(y.bind(t,"touchstart",y.ontouchstart),y.bind(t,"touchmove",y.ontouchmove)):w.emulatetouch&&(y.bind(t,"mousedown",y.ontouchstart),y.bind(t,"mousemove",function(e){return y.ontouchmove(e,!0)}),w.grabcursorenabled&&S.cursorgrabvalue&&y.css(L(t.body),{cursor:S.cursorgrabvalue})),y.bind(t,"mouseup",y.ontouchend),y.zoom&&(w.dblclickzoom&&y.bind(t,"dblclick",y.doZoom),y.ongesturezoom&&y.bind(t,"gestureend",y.ongesturezoom))},this.doc[0].readyState&&"complete"===this.doc[0].readyState&&setTimeout(function(){e.call(y.doc[0],!1)},500),y.bind(this.doc,"load",e))},this.showCursor=function(e,t){var i;y.cursortimeout&&(clearTimeout(y.cursortimeout),y.cursortimeout=0),y.rail&&(y.autohidedom&&(y.autohidedom.stop().css({opacity:w.cursoropacitymax}),y.cursoractive=!0),y.rail.drag&&1==y.rail.drag.pt||(void 0!==e&&!1!==e&&(y.scroll.y=e/y.scrollratio.y|0),void 0!==t&&(y.scroll.x=t/y.scrollratio.x|0)),y.cursor.css({height:y.cursorheight,top:y.scroll.y}),y.cursorh&&(i=y.hasreversehr?y.scrollvaluemaxw-y.scroll.x:y.scroll.x,y.cursorh.css({width:y.cursorwidth,left:!y.rail.align&&y.rail.visibility?i+y.rail.width:i}),y.cursoractive=!0),y.zoom&&y.zoom.stop().css({opacity:w.cursoropacitymax}))},this.hideCursor=function(e){y.cursortimeout||y.rail&&y.autohidedom&&(y.hasmousefocus&&"leave"===w.autohidemode||(y.cursortimeout=setTimeout(function(){y.rail.active&&y.showonmouseevent||(y.autohidedom.stop().animate({opacity:w.cursoropacitymin}),y.zoom&&y.zoom.stop().animate({opacity:w.cursoropacitymin}),y.cursoractive=!1),y.cursortimeout=0},e||w.hidecursordelay)))},this.noticeCursor=function(e,t,i){y.showCursor(t,i),y.rail.active||y.hideCursor(e)},this.getContentSize=y.ispage?function(){return{w:Math.max(M.body.scrollWidth,M.documentElement.scrollWidth),h:Math.max(M.body.scrollHeight,M.documentElement.scrollHeight)}}:y.haswrapper?function(){return{w:y.doc[0].offsetWidth,h:y.doc[0].offsetHeight}}:function(){return{w:y.docscroll[0].scrollWidth,h:y.docscroll[0].scrollHeight}},this.onResize=function(e,t){if(!y||!y.win)return!1;var i=y.page.maxh,n=y.page.maxw,o=y.view.h,s=y.view.w;if(y.view={w:y.ispage?y.win.width():y.win[0].clientWidth,h:y.ispage?y.win.height():y.win[0].clientHeight},y.page=t||y.getContentSize(),y.page.maxh=Math.max(0,y.page.h-y.view.h),y.page.maxw=Math.max(0,y.page.w-y.view.w),y.page.maxh==i&&y.page.maxw==n&&y.view.w==s&&y.view.h==o){if(y.ispage)return y;var r=y.win.offset();if(y.lastposition){var a=y.lastposition;if(a.top==r.top&&a.left==r.left)return y}y.lastposition=r}return 0===y.page.maxh?(y.hideRail(),y.scrollvaluemax=0,y.scroll.y=0,y.scrollratio.y=0,y.cursorheight=0,y.setScrollTop(0),y.rail&&(y.rail.scrollable=!1)):(y.page.maxh-=w.railpadding.top+w.railpadding.bottom,y.rail.scrollable=!0),0===y.page.maxw?(y.hideRailHr(),y.scrollvaluemaxw=0,y.scroll.x=0,y.scrollratio.x=0,y.cursorwidth=0,y.setScrollLeft(0),y.railh&&(y.railh.scrollable=!1)):(y.page.maxw-=w.railpadding.left+w.railpadding.right,y.railh&&(y.railh.scrollable=w.horizrailenabled)),y.railslocked=y.locked||0===y.page.maxh&&0===y.page.maxw,y.railslocked?(y.ispage||y.updateScrollBar(y.view),!1):(y.hidden||(y.rail.visibility||y.showRail(),y.railh&&!y.railh.visibility&&y.showRailHr()),y.istextarea&&y.win.css("resize")&&"none"!=y.win.css("resize")&&(y.view.h-=20),y.cursorheight=Math.min(y.view.h,Math.round(y.view.h*(y.view.h/y.page.h))),y.cursorheight=w.cursorfixedheight?w.cursorfixedheight:Math.max(w.cursorminheight,y.cursorheight),y.cursorwidth=Math.min(y.view.w,Math.round(y.view.w*(y.view.w/y.page.w))),y.cursorwidth=w.cursorfixedheight?w.cursorfixedheight:Math.max(w.cursorminheight,y.cursorwidth),y.scrollvaluemax=y.view.h-y.cursorheight-(w.railpadding.top+w.railpadding.bottom),y.hasborderbox||(y.scrollvaluemax-=y.cursor[0].offsetHeight-y.cursor[0].clientHeight),y.railh&&(y.railh.width=0<y.page.maxh?y.view.w-y.rail.width:y.view.w,y.scrollvaluemaxw=y.railh.width-y.cursorwidth-(w.railpadding.left+w.railpadding.right)),y.ispage||y.updateScrollBar(y.view),y.scrollratio={x:y.page.maxw/y.scrollvaluemaxw,y:y.page.maxh/y.scrollvaluemax},y.getScrollTop()>y.page.maxh?y.doScrollTop(y.page.maxh):(y.scroll.y=y.getScrollTop()/y.scrollratio.y|0,y.scroll.x=y.getScrollLeft()/y.scrollratio.x|0,y.cursoractive&&y.noticeCursor()),y.scroll.y&&0===y.getScrollTop()&&y.doScrollTo(y.scroll.y*y.scrollratio.y|0),y)},this.resize=y.onResize;var p=0;this.onscreenresize=function(e){clearTimeout(p);var t=!y.ispage&&!y.haswrapper;t&&y.hideRails(),p=setTimeout(function(){y&&(t&&y.showRails(),y.resize()),p=0},120)},this.lazyResize=function(e){return clearTimeout(p),e=isNaN(e)?240:e,p=setTimeout(function(){y&&y.resize(),p=0},e),y},this.jqbind=function(e,t,i){y.events.push({e:e,n:t,f:i,q:!0}),L(e).on(t,i)};var f=!(this.mousewheel=function(e,t,i){var n,o="jquery"in e?e[0]:e;"onwheel"in M.createElement("div")?y._bind(o,"wheel",t,i||!1):(s(o,n=void 0!==M.onmousewheel?"mousewheel":"DOMMouseScroll",t,i||!1),"DOMMouseScroll"==n&&s(o,"MozMousePixelScroll",t,i||!1))});if(S.haseventlistener){try{var m=Object.defineProperty({},"passive",{get:function(){f=!0}});$.addEventListener("test",null,m)}catch(e){}this.stopPropagation=function(e){return!!e&&((e=e.original?e.original:e).stopPropagation(),!1)},this.cancelEvent=function(e){return e.cancelable&&e.preventDefault(),e.stopImmediatePropagation(),e.preventManipulation&&e.preventManipulation(),!1}}else Event.prototype.preventDefault=function(){this.returnValue=!1},Event.prototype.stopPropagation=function(){this.cancelBubble=!0},$.constructor.prototype.addEventListener=M.constructor.prototype.addEventListener=Element.prototype.addEventListener=function(e,t,i){this.attachEvent("on"+e,t)},$.constructor.prototype.removeEventListener=M.constructor.prototype.removeEventListener=Element.prototype.removeEventListener=function(e,t,i){this.detachEvent("on"+e,t)},this.cancelEvent=function(e){return(e=e||$.event)&&(e.cancelBubble=!0,e.cancel=!0,e.returnValue=!1),!1},this.stopPropagation=function(e){return(e=e||$.event)&&(e.cancelBubble=!0),!1};this.delegate=function(e,t,i,n,o){var s=F[t]||!1;s||(s={a:[],l:[],f:function(e){for(var t=s.l,i=!1,n=t.length-1;0<=n;n--)if(!1===(i=t[n].call(e.target,e)))return!1;return i}},y.bind(e,t,s.f,n,o),F[t]=s),y.ispage?(s.a=[y.id].concat(s.a),s.l=[i].concat(s.l)):(s.a.push(y.id),s.l.push(i))},this.undelegate=function(e,t,i,n,o){var s=F[t]||!1;if(s&&s.l)for(var r=0,a=s.l.length;r<a;r++)s.a[r]===y.id&&(s.a.splice(r),s.l.splice(r),0===s.a.length&&(y._unbind(e,t,s.l.f),F[t]=null))},this.bind=function(e,t,i,n,o){var s="jquery"in e?e[0]:e;y._bind(s,t,i,n||!1,o||!1)},this._bind=function(e,t,i,n,o){y.events.push({e:e,n:t,f:i,b:n,q:!1}),f&&o?e.addEventListener(t,i,{passive:!1,capture:n}):e.addEventListener(t,i,n||!1)},this._unbind=function(e,t,i,n){F[t]?y.undelegate(e,t,i,n):e.removeEventListener(t,i,n)},this.unbindAll=function(){for(var e=0;e<y.events.length;e++){var t=y.events[e];t.q?t.e.unbind(t.n,t.f):y._unbind(t.e,t.n,t.f,t.b)}},this.showRails=function(){return y.showRail().showRailHr()},this.showRail=function(){return 0===y.page.maxh||!y.ispage&&"none"==y.win.css("display")||(y.rail.visibility=!0,y.rail.css("display","block")),y},this.showRailHr=function(){return y.railh&&(0===y.page.maxw||!y.ispage&&"none"==y.win.css("display")||(y.railh.visibility=!0,y.railh.css("display","block"))),y},this.hideRails=function(){return y.hideRail().hideRailHr()},this.hideRail=function(){return y.rail.visibility=!1,y.rail.css("display","none"),y},this.hideRailHr=function(){return y.railh&&(y.railh.visibility=!1,y.railh.css("display","none")),y},this.show=function(){return y.hidden=!1,y.railslocked=!1,y.showRails()},this.hide=function(){return y.hidden=!0,y.railslocked=!0,y.hideRails()},this.toggle=function(){return y.hidden?y.show():y.hide()},this.remove=function(){for(var e in y.stop(),y.cursortimeout&&clearTimeout(y.cursortimeout),y.delaylist)y.delaylist[e]&&R(y.delaylist[e].h);y.doZoomOut(),y.unbindAll(),S.isie9&&y.win[0].detachEvent("onpropertychange",y.onAttributeChange),!1!==y.observer&&y.observer.disconnect(),!1!==y.observerremover&&y.observerremover.disconnect(),!1!==y.observerbody&&y.observerbody.disconnect(),y.events=null,y.cursor&&y.cursor.remove(),y.cursorh&&y.cursorh.remove(),y.rail&&y.rail.remove(),y.railh&&y.railh.remove(),y.zoom&&y.zoom.remove();for(var t=0;t<y.saved.css.length;t++){var i=y.saved.css[t];i[0].css(i[1],void 0===i[2]?"":i[2])}y.saved=!1,y.me.data("__nicescroll","");var n=L.nicescroll;for(var o in n.each(function(e){if(this&&this.id===y.id){delete n[e];for(var t=++e;t<n.length;t++,e++)n[e]=n[t];--n.length&&delete n[n.length]}}),y)y[o]=null,delete y[o];y=null},this.scrollstart=function(e){return this.onscrollstart=e,y},this.scrollend=function(e){return this.onscrollend=e,y},this.scrollcancel=function(e){return this.onscrollcancel=e,y},this.zoomin=function(e){return this.onzoomin=e,y},this.zoomout=function(e){return this.onzoomout=e,y},this.isScrollable=function(e){var t=e.target?e.target:e;if("OPTION"==t.nodeName)return!0;for(;t&&1==t.nodeType&&t!==this.me[0]&&!/^BODY|HTML/.test(t.nodeName);){var i=L(t),n=i.css("overflowY")||i.css("overflowX")||i.css("overflow")||"";if(/scroll|auto/.test(n))return t.clientHeight!=t.scrollHeight;t=!!t.parentNode&&t.parentNode}return!1},this.getViewport=function(e){for(var t=!(!e||!e.parentNode)&&e.parentNode;t&&1==t.nodeType&&!/^BODY|HTML/.test(t.nodeName);){var i=L(t);if(/fixed|absolute/.test(i.css("position")))return i;var n=i.css("overflowY")||i.css("overflowX")||i.css("overflow")||"";if(/scroll|auto/.test(n)&&t.clientHeight!=t.scrollHeight)return i;if(0<i.getNiceScroll().length)return i;t=!!t.parentNode&&t.parentNode}return!1},this.triggerScrollStart=function(e,t,i,n,o){var s;y.onscrollstart&&(s={type:"scrollstart",current:{x:e,y:t},request:{x:i,y:n},end:{x:y.newscrollx,y:y.newscrolly},speed:o},y.onscrollstart.call(y,s))},this.triggerScrollEnd=function(){var e,t,i;y.onscrollend&&(i={type:"scrollend",current:{x:e=y.getScrollLeft(),y:t=y.getScrollTop()},end:{x:e,y:t}},y.onscrollend.call(y,i))};var g,v=0,b=0,C=0,E=1,k=!1;this.onmousewheel=function(e){if(y.wheelprevented||y.locked)return!1;if(y.railslocked)return y.debounced("checkunlock",y.resize,250),!1;if(y.rail.drag)return y.cancelEvent(e);if("auto"===w.oneaxismousemode&&0!==e.deltaX&&(w.oneaxismousemode=!1),w.oneaxismousemode&&0===e.deltaX&&!y.rail.scrollable)return!y.railh||!y.railh.scrollable||y.onmousewheelhr(e);var t=H(),i=!1;if(w.preservenativescrolling&&y.checkarea+600<t&&(y.nativescrollingarea=y.isScrollable(e),i=!0),y.checkarea=t,y.nativescrollingarea)return!0;var n=o(e,!1,i);return n&&(y.checkarea=0),n},this.onmousewheelhr=function(e){if(!y.wheelprevented){if(y.railslocked||!y.railh.scrollable)return!0;if(y.rail.drag)return y.cancelEvent(e);var t=H(),i=!1;return w.preservenativescrolling&&y.checkarea+600<t&&(y.nativescrollingarea=y.isScrollable(e),i=!0),y.checkarea=t,!!y.nativescrollingarea||(y.railslocked?y.cancelEvent(e):o(e,!0,i))}},this.stop=function(){return y.cancelScroll(),y.scrollmon&&y.scrollmon.stop(),y.cursorfreezed=!1,y.scroll.y=Math.round(y.getScrollTop()*(1/y.scrollratio.y)),y.noticeCursor(),y},this.getTransitionSpeed=function(e){return 80+e/72*w.scrollspeed|0},w.smoothscroll?y.ishwscroll&&S.hastransition&&w.usetransition&&w.smoothscroll?(g="",this.resetTransition=function(){g="",y.doc.css(S.prefixstyle+"transition-duration","0ms")},this.prepareTransition=function(e,t){var i=t?e:y.getTransitionSpeed(e),n=i+"ms";return g!==n&&(g=n,y.doc.css(S.prefixstyle+"transition-duration",n)),i},this.doScrollLeft=function(e,t){var i=y.scrollrunning?y.newscrolly:y.getScrollTop();y.doScrollPos(e,i,t)},this.doScrollTop=function(e,t){var i=y.scrollrunning?y.newscrollx:y.getScrollLeft();y.doScrollPos(i,e,t)},this.cursorupdate={running:!1,start:function(){var e,t=this;t.running||(t.running=!0,e=function(){t.running&&_(e),y.showCursor(y.getScrollTop(),y.getScrollLeft()),y.notifyScrollEvent(y.win[0])},_(e))},stop:function(){this.running=!1}},this.doScrollPos=function(e,t,i){var n=y.getScrollTop(),o=y.getScrollLeft();if(((y.newscrolly-n)*(t-n)<0||(y.newscrollx-o)*(e-o)<0)&&y.cancelScroll(),w.bouncescroll?(t<0?t=t/2|0:t>y.page.maxh&&(t=y.page.maxh+(t-y.page.maxh)/2|0),e<0?e=e/2|0:e>y.page.maxw&&(e=y.page.maxw+(e-y.page.maxw)/2|0)):(t<0?t=0:t>y.page.maxh&&(t=y.page.maxh),e<0?e=0:e>y.page.maxw&&(e=y.page.maxw)),y.scrollrunning&&e==y.newscrollx&&t==y.newscrolly)return!1;y.newscrolly=t,y.newscrollx=e;var s=y.getScrollTop(),r=y.getScrollLeft(),a={};a.x=e-r,a.y=t-s;var l=0|Math.sqrt(a.x*a.x+a.y*a.y),c=y.prepareTransition(l);y.scrollrunning||(y.scrollrunning=!0,y.triggerScrollStart(r,s,e,t,c),y.cursorupdate.start()),y.scrollendtrapped=!0,S.transitionend||(y.scrollendtrapped&&clearTimeout(y.scrollendtrapped),y.scrollendtrapped=setTimeout(y.onScrollTransitionEnd,c)),y.setScrollTop(y.newscrolly),y.setScrollLeft(y.newscrollx)},this.cancelScroll=function(){if(!y.scrollendtrapped)return!0;var e=y.getScrollTop(),t=y.getScrollLeft();return y.scrollrunning=!1,S.transitionend||clearTimeout(S.transitionend),y.scrollendtrapped=!1,y.resetTransition(),y.setScrollTop(e),y.railh&&y.setScrollLeft(t),y.timerscroll&&y.timerscroll.tm&&clearInterval(y.timerscroll.tm),y.timerscroll=!1,y.cursorfreezed=!1,y.cursorupdate.stop(),y.showCursor(e,t),y},this.onScrollTransitionEnd=function(){if(y.scrollendtrapped){var e=y.getScrollTop(),t=y.getScrollLeft();if(e<0?e=0:e>y.page.maxh&&(e=y.page.maxh),t<0?t=0:t>y.page.maxw&&(t=y.page.maxw),e!=y.newscrolly||t!=y.newscrollx)return y.doScrollPos(t,e,w.snapbackspeed);y.scrollrunning&&y.triggerScrollEnd(),y.scrollrunning=!1,y.scrollendtrapped=!1,y.resetTransition(),y.timerscroll=!1,y.setScrollTop(e),y.railh&&y.setScrollLeft(t),y.cursorupdate.stop(),y.noticeCursor(!1,e,t),y.cursorfreezed=!1}}):(this.doScrollLeft=function(e,t){var i=y.scrollrunning?y.newscrolly:y.getScrollTop();y.doScrollPos(e,i,t)},this.doScrollTop=function(e,t){var i=y.scrollrunning?y.newscrollx:y.getScrollLeft();y.doScrollPos(i,e,t)},this.doScrollPos=function(e,t,i){var n=y.getScrollTop(),o=y.getScrollLeft();((y.newscrolly-n)*(t-n)<0||(y.newscrollx-o)*(e-o)<0)&&y.cancelScroll();var s=!1;if(y.bouncescroll&&y.rail.visibility||(t<0?s=!(t=0):t>y.page.maxh&&(t=y.page.maxh,s=!0)),y.bouncescroll&&y.railh.visibility||(e<0?s=!(e=0):e>y.page.maxw&&(e=y.page.maxw,s=!0)),y.scrollrunning&&y.newscrolly===t&&y.newscrollx===e)return!0;y.newscrolly=t,y.newscrollx=e,y.dst={},y.dst.x=e-o,y.dst.y=t-n,y.dst.px=o,y.dst.py=n;var r=0|Math.sqrt(y.dst.x*y.dst.x+y.dst.y*y.dst.y),a=y.getTransitionSpeed(r);y.bzscroll={};var l=s?1:.58;y.bzscroll.x=new u(o,y.newscrollx,a,0,0,l,1),y.bzscroll.y=new u(n,y.newscrolly,a,0,0,l,1),H();var c=function(){var e;y.scrollrunning&&(e=y.bzscroll.y.getPos(),y.setScrollLeft(y.bzscroll.x.getNow()),y.setScrollTop(y.bzscroll.y.getNow()),e<=1?y.timer=_(c):(y.scrollrunning=!1,y.timer=0,y.triggerScrollEnd()))};y.scrollrunning||(y.triggerScrollStart(o,n,e,t,a),y.scrollrunning=!0,y.timer=_(c))},this.cancelScroll=function(){return y.timer&&R(y.timer),y.timer=0,y.bzscroll=!1,y.scrollrunning=!1,y}):(this.doScrollLeft=function(e,t){var i=y.getScrollTop();y.doScrollPos(e,i,t)},this.doScrollTop=function(e,t){var i=y.getScrollLeft();y.doScrollPos(i,e,t)},this.doScrollPos=function(e,t,i){var n=e>y.page.maxw?y.page.maxw:e;n<0&&(n=0);var o=t>y.page.maxh?y.page.maxh:t;o<0&&(o=0),y.synched("scroll",function(){y.setScrollTop(o),y.setScrollLeft(n)})},this.cancelScroll=function(){}),this.doScrollBy=function(e,t){a(0,e)},this.doScrollLeftBy=function(e,t){a(e,0)},this.doScrollTo=function(e,t){var i=t?Math.round(e*y.scrollratio.y):e;i<0?i=0:i>y.page.maxh&&(i=y.page.maxh),y.cursorfreezed=!1,y.doScrollTop(e)},this.checkContentSize=function(){var e=y.getContentSize();e.h==y.page.h&&e.w==y.page.w||y.resize(!1,e)},y.onscroll=function(e){y.rail.drag||y.cursorfreezed||y.synched("scroll",function(){y.scroll.y=Math.round(y.getScrollTop()/y.scrollratio.y),y.railh&&(y.scroll.x=Math.round(y.getScrollLeft()/y.scrollratio.x)),y.noticeCursor()})},y.bind(y.docscroll,"scroll",y.onscroll),this.doZoomIn=function(e){if(!y.zoomactive){y.zoomactive=!0,y.zoomrestore={style:{}};var t=["position","top","left","zIndex","backgroundColor","marginTop","marginBottom","marginLeft","marginRight"],i=y.win[0].style;for(var n in t){var o=t[n];y.zoomrestore.style[o]=void 0!==i[o]?i[o]:""}y.zoomrestore.style.width=y.win.css("width"),y.zoomrestore.style.height=y.win.css("height"),y.zoomrestore.padding={w:y.win.outerWidth()-y.win.width(),h:y.win.outerHeight()-y.win.height()},S.isios4&&(y.zoomrestore.scrollTop=D.scrollTop(),D.scrollTop(0)),y.win.css({position:S.isios4?"absolute":"fixed",top:0,left:0,zIndex:I+100,margin:0});var s=y.win.css("backgroundColor");return""!==s&&!/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(s)||y.win.css("backgroundColor","#fff"),y.rail.css({zIndex:I+101}),y.zoom.css({zIndex:I+102}),y.zoom.css("backgroundPosition","0 -18px"),y.resizeZoom(),y.onzoomin&&y.onzoomin.call(y),y.cancelEvent(e)}},this.doZoomOut=function(e){if(y.zoomactive)return y.zoomactive=!1,y.win.css("margin",""),y.win.css(y.zoomrestore.style),S.isios4&&D.scrollTop(y.zoomrestore.scrollTop),y.rail.css({"z-index":y.zindex}),y.zoom.css({"z-index":y.zindex}),y.zoomrestore=!1,y.zoom.css("backgroundPosition","0 0"),y.onResize(),y.onzoomout&&y.onzoomout.call(y),y.cancelEvent(e)},this.doZoom=function(e){return y.zoomactive?y.doZoomOut(e):y.doZoomIn(e)},this.resizeZoom=function(){var e;y.zoomactive&&(e=y.getScrollTop(),y.win.css({width:D.width()-y.zoomrestore.padding.w+"px",height:D.height()-y.zoomrestore.padding.h+"px"}),y.onResize(),y.setScrollTop(Math.min(y.page.maxh,e)))},this.init(),L.nicescroll.push(this)}var t,i,n,O=$.MutationObserver||$.WebKitMutationObserver||!1,H=Date.now||function(){return(new Date).getTime()},B={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"6px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:40,mousescrollstep:27,touchbehavior:!1,emulatetouch:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,railhoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:(i=M.currentScript||!!(t=M.getElementsByTagName("script")).length&&t[t.length-1],0<(n=i?i.src.split("?")[0]:"").split("/").length?n.split("/").slice(0,-1).join("/")+"/":""),preventmultitouchscrolling:!0,disablemutationobserver:!1,enableobserver:!0,scrollbarid:!1},q=!1,N=function(e){var m=this;this.nc=e,this.lastx=0,this.lasty=0,this.speedx=0,this.speedy=0,this.lasttime=0,this.steptime=0,this.snapx=!1,this.snapy=!1,this.demulx=0,this.demuly=0,this.lastscrollx=-1,this.lastscrolly=-1,this.chkx=0,this.chky=0,this.timer=0,this.reset=function(e,t){m.stop(),m.steptime=0,m.lasttime=H(),m.speedx=0,m.speedy=0,m.lastx=e,m.lasty=t,m.lastscrollx=-1,m.lastscrolly=-1},this.update=function(e,t){var i=H();m.steptime=i-m.lasttime,m.lasttime=i;var n=t-m.lasty,o=e-m.lastx,s=m.nc.getScrollTop()+n,r=m.nc.getScrollLeft()+o;m.snapx=r<0||r>m.nc.page.maxw,m.snapy=s<0||s>m.nc.page.maxh,m.speedx=o,m.speedy=n,m.lastx=e,m.lasty=t},this.stop=function(){m.nc.unsynched("domomentum2d"),m.timer&&clearTimeout(m.timer),m.timer=0,m.lastscrollx=-1,m.lastscrolly=-1},this.doSnapy=function(e,t){var i=!1;t<0?i=!(t=0):t>m.nc.page.maxh&&(t=m.nc.page.maxh,i=!0),e<0?i=!(e=0):e>m.nc.page.maxw&&(e=m.nc.page.maxw,i=!0),i?m.nc.doScrollPos(e,t,m.nc.opt.snapbackspeed):m.nc.triggerScrollEnd()},this.doMomentum=function(e){var t=H(),i=e?t+e:m.lasttime,n=m.nc.getScrollLeft(),o=m.nc.getScrollTop(),s=m.nc.page.maxh,r=m.nc.page.maxw;m.speedx=0<r?Math.min(60,m.speedx):0,m.speedy=0<s?Math.min(60,m.speedy):0;var a=i&&t-i<=60;(o<0||s<o||n<0||r<n)&&(a=!1);var l,c,d,u,h,p=!(!m.speedy||!a)&&m.speedy,f=!(!m.speedx||!a)&&m.speedx;p||f?(50<(l=Math.max(16,m.steptime))&&(c=l/50,m.speedx*=c,m.speedy*=c,l=50),m.demulxy=0,m.lastscrollx=m.nc.getScrollLeft(),m.chkx=m.lastscrollx,m.lastscrolly=m.nc.getScrollTop(),m.chky=m.lastscrolly,d=m.lastscrollx,u=m.lastscrolly,(h=function(){var e=600<H()-t?.04:.02;m.speedx&&(d=Math.floor(m.lastscrollx-m.speedx*(1-m.demulxy)),((m.lastscrollx=d)<0||r<d)&&(e=.1)),m.speedy&&(u=Math.floor(m.lastscrolly-m.speedy*(1-m.demulxy)),((m.lastscrolly=u)<0||s<u)&&(e=.1)),m.demulxy=Math.min(1,m.demulxy+e),m.nc.synched("domomentum2d",function(){m.speedx&&(m.nc.getScrollLeft(),m.chkx=d,m.nc.setScrollLeft(d)),m.speedy&&(m.nc.getScrollTop(),m.chky=u,m.nc.setScrollTop(u)),m.timer||(m.nc.hideCursor(),m.doSnapy(d,u))}),m.demulxy<1?m.timer=setTimeout(h,l):(m.stop(),m.nc.hideCursor(),m.doSnapy(d,u))})()):m.doSnapy(m.nc.getScrollLeft(),m.nc.getScrollTop())}},o=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(e,t,i){var n=L.data(e,"__nicescroll")||!1;return n&&n.ishwscroll?n.getScrollTop():o.call(e)},set:function(e,t){var i=L.data(e,"__nicescroll")||!1;return i&&i.ishwscroll?i.setScrollTop(parseInt(t)):o.call(e,t),this}},e.fn.scrollTop=function(t){if(void 0!==t)return this.each(function(){var e=L.data(this,"__nicescroll")||!1;e&&e.ishwscroll?e.setScrollTop(parseInt(t)):o.call(L(this),t)});var e=!!this[0]&&(L.data(this[0],"__nicescroll")||!1);return e&&e.ishwscroll?e.getScrollTop():o.call(this)};var r=e.fn.scrollLeft;L.cssHooks.pageXOffset={get:function(e,t,i){var n=L.data(e,"__nicescroll")||!1;return n&&n.ishwscroll?n.getScrollLeft():r.call(e)},set:function(e,t){var i=L.data(e,"__nicescroll")||!1;return i&&i.ishwscroll?i.setScrollLeft(parseInt(t)):r.call(e,t),this}},e.fn.scrollLeft=function(t){if(void 0!==t)return this.each(function(){var e=L.data(this,"__nicescroll")||!1;e&&e.ishwscroll?e.setScrollLeft(parseInt(t)):r.call(L(this),t)});var e=!!this[0]&&(L.data(this[0],"__nicescroll")||!1);return e&&e.ishwscroll?e.getScrollLeft():r.call(this)};function l(e){var t=this;if(this.length=0,this.name="nicescrollarray",this.each=function(e){return L.each(t,e),t},this.push=function(e){t[t.length]=e,t.length++},this.eq=function(e){return t[e]},e)for(var i=0;i<e.length;i++){var n=L.data(e[i],"__nicescroll")||!1;n&&(this[this.length]=n,this.length++)}return this}!function(e,t){for(var i=0,n=t.length;i<n;i++)!function(e,t){e[t]=function(){var e=arguments;return this.each(function(){this[t].apply(this,e)})}}(e,t[i])}(l.prototype,["show","hide","toggle","onResize","resize","remove","stop","doScrollPos"]),e.fn.getNiceScroll=function(e){return void 0===e?new l(this):this[e]&&L.data(this[e],"__nicescroll")||!1},(e.expr.pseudos||e.expr[":"]).nicescroll=function(e){return void 0!==L.data(e,"__nicescroll")},L.fn.niceScroll=function(o,s){void 0!==s||"object"!=typeof o||"jquery"in o||(s=o,o=!1);var r=new l;return this.each(function(){var e,t=L(this),i=L.extend({},s);o&&(e=L(o),i.doc=1<e.length?L(o,t):e,i.win=t),!("doc"in i)||"win"in i||(i.win=t);var n=t.data("__nicescroll")||!1;n||(i.doc=i.doc||t,n=new a(i,t),t.data("__nicescroll",n)),r.push(n)}),1===r.length?r[0]:r},$.NiceScroll={getjQuery:function(){return e}},L.nicescroll||(L.nicescroll=new l,L.nicescroll.options=B)});;
function doneResizing(){var e;isResizing=!0,767<window.innerWidth?$(".home-blog ul  .flickity-viewport ").length&&$(".home-blog ul").flickity("destroy"):$(".home-blog ul ").length&&($(".home-blog ul  .flickity-viewport ").length&&$(".home-blog ul ").flickity("destroy"),$(".home-blog ul").flickity({cellAlign:"center",contain:!0,wrapAround:!0,imagesLoaded:!0,prevNextButtons:!1,pageDots:!1})),767<window.innerWidth?$(".success-listing-slider  .flickity-viewport ").length&&$(".success-listing-slider  ul").flickity("destroy"):$(".success-listing-slider ul ").length&&($(".success-listing-slider   .flickity-viewport ").length&&$(".success-listing-slider  ul ").flickity("destroy"),$(".success-listing-slider ul").flickity({cellAlign:"center",contain:!0,wrapAround:!0,imagesLoaded:!0,prevNextButtons:!1,pageDots:!1})),980<window.innerWidth?$(".related-video-list  .flickity-viewport ").length&&$(".related-video-list").flickity("destroy"):$(".related-video-list ").length&&($(".related-video-list  .flickity-viewport ").length&&$(".related-video-list ").flickity("destroy"),$(".related-video-list").flickity({cellAlign:"center",contain:!0,wrapAround:!1,imagesLoaded:!0,prevNextButtons:!1,pageDots:!1})),980<window.innerWidth?($(".swipe-slider  .flickity-viewport ").length&&$(".swipe-slider").flickity("destroy"),$(".parpefullpage").length&&$(".parpefullpage").parpefullpage()):$(".swipe-slider").length&&($(".slider-section , .slider-section div").removeAttr("style"),$(".swipe-slider  .flickity-viewport ").length&&$(".swipe-slider ").flickity("destroy"),$(".swipe-slider").flickity({cellAlign:"center",contain:!0,fade:!0,wrapAround:!0,imagesLoaded:!0,prevNextButtons:!1,pageDots:!0,on:{ready:function(){countInSlider()},change:function(e){countInSlider()}}})),980<window.innerWidth?$(".parpefullpage2").length&&($(".parpefullpage2 , .jp-page-items2").removeAttr("style"),$(".parpefullpage2").parpefullpage2(),$(".jp-page-items2").each(function(){var e=$(this).index();$(this).find(".tab-list li").eq(e).addClass("active").siblings().removeClass("active")})):$(".parpefullpage2").length&&$(".parpefullpage2 , .jp-page-items2").removeAttr("style"),$(".page-header").length&&(e=$(".page-header ").outerHeight(!0),$(".inner-banner,.inner-section:first-child").css("margin-top",e),$("#gmap").css({minHeight:"calc(100vh - "+e+"px)",maxHeight:"calc(100vh - "+e+"px)"}),$(".inner-banner.screenFit figure").css({paddingBottom:"calc(100vh - "+e+"px)"})),isResizing=!1}!function(){function t(){var e;$(".home-banner").length&&(e=i(),s<=e?l&&($(".page-header").outerHeight(!0),1024<window.innerWidth&&$("html").hasClass("btn-clicked"),l=!1):(console.log("attatched"),$(window).scrollTop()<5&&(l=!0)),a<=e?$("html").hasClass("animating")||classie.add(o,"compressed"):classie.remove(o,"compressed"),n=!1),$(".inner-banner.screenFit---------").length&&(e=i(),s<=e?(classie.add(o,"innerCompressed"),l&&(1024<window.innerWidth&&($(".page-header").outerHeight(!0),$("html, body").stop().animate({scrollTop:$(".inner-section").offset().top+2},700)),l=!1)):(classie.remove(o,"innerCompressed"),console.log("attatched"),$(window).scrollTop()<5&&(l=!0)),n=!1)}function i(){return window.pageYOffset||e.scrollTop}var e,o,n,s,a,l;0<$(".page-header").length&&(e=document.documentElement,o=document.querySelector("html"),n=!1,s=10,l=!(a=100),t(),l=$(window).scrollTop()<5,window.addEventListener("scroll",function(e){n||(n=!0,setTimeout(t,5))},!1))}(),$(function(){var e,t,i,o,n,s;function a(e){for(var t=0;t<e.length;t++)if(-1!=navigator.userAgent.indexOf(e[t]))return void $("html").addClass(e[t].toLowerCase())}(-1!=navigator.userAgent.indexOf("MSIE")?/MSIE (\d+\.\d+);/:/Trident.*rv[ :]*(\d+\.\d+)/).test(navigator.userAgent)&&(12==(e=new Number(RegExp.$1))?jQuery("body").addClass("IE12"):11==e?jQuery("body").addClass("IE11"):10==e?jQuery("body").addClass("IE10"):9==e&&jQuery("body").addClass("IE9")),a(["Chrome","Firefox","MSIE","Safari","Opera","Mozilla"]),a(["Android","iPhone","iPad","Linux","Mac","Windows"]),t=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,i=window.devicePixelRatio||1,o=window.screen.width*i,n=window.screen.height*i,t&&1125==o&&2436===n&&$("html").addClass("iphoneX"),980<window.innerWidth&&($(".services-blocks .item:nth-child(1),.services-blocks .item:nth-child(4)").addClass("delay-1"),$(".services-blocks .item:nth-child(2),.services-blocks .item:nth-child(5)").addClass("delay-2"),$(".services-blocks .item:nth-child(3),.services-blocks .item:nth-child(6)").addClass("delay-3")),$(".tab-list .item").click(function(){var e=$(this).index();return $(this).parents().hasClass("tab-content")?$(".jpPosition2 a").eq(e).click():($(".tab-list .item").removeClass("active"),$(".tab-content-box .tab-content").hide(),$(this).addClass("active"),$(".tab-content-box .tab-content").eq(e).show()),!1}),$(".sticky-tabs").length||($(".tab-content").hide(),$(".tab-list .item:first").trigger("click")),$(".nav-toggle").click(function(e){e.preventDefault(),e.stopPropagation(),$("html").hasClass("menu-open")?($(".nav-toggle").removeClass("active"),$("html").removeClass("menu-open")):($(".nav-toggle").addClass("active"),$("html").addClass("menu-open")),$(".top_box_header").slideUp(),$(".head-wrapper").removeClass("bg-white"),$(".search-box").removeClass("show")}),$(".c-select select").selectric({}),setTimeout(function(){$(".full-page-loader").addClass("start anim")},30),setTimeout(function(){$(".full-page-loader svg path").addClass("anim")},300),setTimeout(function(){$(".full-page-loader").addClass("end")},400),$(".page-menu ,.lang-selector,.nav-toggle,.search-box").on("click touchstart",function(e){e.stopPropagation()}),$(document).on("click touchstart",function(){$(".nav-toggle").removeClass("active"),$("html").removeClass("menu-open"),$(".home-search-wrapper").is(":visible")||$(".search-box").removeClass("show")}),$(window).resize(function(){clearTimeout(s),s=setTimeout(doneResizing,250)}),$(window).bind("orientationchange",function(){doneResizing()}),$(".home-slider").flickity({cellAlign:"left",contain:!0,wrapAround:!1,autoPlay:4e3,fade:!0,prevNextButtons:!1,imagesLoaded:!0,pageDots:!0}),$(".testimonial-slider").on("ready.flickity",function(){checkArrowPos()}),$(".testimonial-slider").flickity({cellAlign:"left",contain:!0,wrapAround:!1,autoPlay:!1,fade:!0,prevNextButtons:!0,imagesLoaded:!0,pageDots:!1,arrowShape:{x0:30,x1:45,y1:10,x2:30,y2:0,x3:100}}).on("change.flickity",function(e,t){stopAllVideos(),checkArrowPos()}),$(".play-btn:not(.custom-play)").click(function(e){e.preventDefault(),stopAllVideos();var t=$(this).parents(".video-box").find("iframe");$(this).parents(".video-box").find("iframe").remove();var i=t.prop("src"),o='<iframe src = "'+(-1!=i.indexOf("autoplay=0")?i.replace("autoplay=0","autoplay=1"):i+"?autoplay=1&rel=0")+'" allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  width = "850" height = "480"  frameborder = "0" > < /iframe>';$(this).parents(".video-box").prepend(o),$(this).parents(".video-box").addClass("now-playing")}),$(".lang-link").click(function(e){e.preventDefault(),$(".top_box_header").slideToggle(),$(".head-wrapper").toggleClass("bg-white"),$(".nav-toggle").removeClass("active"),$("html").removeClass("menu-open")}),$(".top_box_header .close-btn").click(function(e){e.preventDefault(),$(".top_box_header").slideUp(),$(".head-wrapper").removeClass("bg-white")}),$(".page-menu ul li").has("ul").addClass("parent"),$('<span class="arrow"></span').insertAfter($(".page-menu ul li.parent>a")),$(".page-menu ul li.parent .arrow").click(function(e){window.innerWidth<1200&&(e.preventDefault(),$(this).toggleClass("open").next("ul").slideToggle())}),$(".home-banner .item .banner-content .actions .btn").click(function(e){var t,i=$(this).attr("href");$(i).length&&(e.preventDefault(),$(i).parents().hasClass("home-tabs")?(t=$(i).index(),$(".tab-list li ").eq(t).click(),$("html,body").animate({scrollTop:$(".home-tabs").offset().top},1e3)):$("html,body").animate({scrollTop:$(i).offset().top},1e3))}),$(".home-banner .item .banner-content .actions .btnUnused").click(function(e){var t,i=$(this).attr("href");$(i).length&&(e.preventDefault(),$(".page-header").outerHeight(!0),$(i).parents().hasClass("services-tabs")?(t=$(i).index(),$("html").addClass("btn-clicked"),setTimeout(function(){$("html").removeClass("btn-clicked")},2e4),980<window.innerWidth?0<t?($(".sticky-tabs .tab-content").addClass("hideForWhile"),$(".jpPosition2 a ").eq(t).click(),setTimeout(function(){$(".sticky-tabs .tab-content").removeClass("hideForWhile")},1e3)):$(".jpPosition2 a ").eq(t).click():($(".tab-list li ").eq(t).click(),$("html,body").animate({scrollTop:$(".services-tabs").offset().top},1e3))):$("html,body").animate({scrollTop:$(i).offset().top},1e3))}),$(".inner-banner .down-arrow ").click(function(e){e.preventDefault();$(".page-header").outerHeight(!0);$(".ad-landing-banner").length&&$(window),innerWidth<768?$("html,body").animate({scrollTop:$(".ad-landing-banner .wrapper .banner-form-block").offset().top},700):$("html,body").animate({scrollTop:$(".inner-section").offset().top},700)}),$(".slider-section .down-arrow").click(function(e){e.preventDefault(),$(".jpPosition .jpPosition-items:last-child").hasClass("cur")?($(".page-header").outerHeight(!0),$("html,body").animate({scrollTop:$(this).parent().next().offset().top},700)):$(".jpPosition .jpPosition-items.cur").next().click()}),$(".home-banner .down-arrow ").click(function(e){e.preventDefault(),$("html,body").animate({scrollTop:$(".home-section").offset().top},700)}),$(".accord-head").click(function(){$(this).next(".accord-content").is(":visible")?$(this).removeClass("active").next(".accord-content").slideUp():($(this).addClass("active").next(".accord-content").slideDown(),$(this).parent().siblings().find(".accord-head").removeClass("active").next(".accord-content").slideUp())}),$(".accordion .item:first .accord-head ").click(),$(".mob-search-toggle").on("click touchstart",function(e){e.stopPropagation(),e.preventDefault(),$(".search-box").toggleClass("show")}),$(".page-footer .link-col h4").each(function(){$(this).next("ul").length&&$(this).append('<span class="plus-minus"></span>')}),$(".page-footer .link-col h4 .plus-minus").click(function(e){$(this).toggleClass("active").parent().next("ul").slideToggle()}),$(".lang-box").length&&$(".lang-box").clone(!0).appendTo(".page-menu"),$(".filterToggleBtn ").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).next(".col-3").slideToggle()}),$(".content-block .title").length&&($(".content-block .text-box .title").clone().appendTo(".content-block .mob-title"),$(".content-block .title:first-child").clone().appendTo(".page-title-block")),$(window).scroll(function(){$(".home-section").length&&($(window).scrollTop()>$(".home-section").offset().top+40?$("html").addClass("enteredHomeSection"):$("html").removeClass("enteredHomeSection")),$(".home-section").length&&($(window).scrollTop()>$(".home-section").offset().top?$("html").addClass("beyondBannerSection"):$("html").removeClass("beyondBannerSection")),$(".inner-section").length&&($(window).scrollTop()>$(".inner-section").offset().top?$("html").addClass("beyondBannerSection"):$("html").removeClass("beyondBannerSection"))})}),$(".sticky-tabs ").length&&$(".tab-list").clone(!0).prependTo(".tab-content"),$(function(){var e,t,i,o,n,s,a,l;$(".planet .satellite").length,$(".video-list ul li").click(function(){var e=$(this).index();return stopAllVideos(),$(".video-list ul li").removeClass("active"),$(".video-boxes  .image-box ").hide(),$(this).addClass("active"),$(".video-boxes  .image-box").eq(e).show().find(".play-btn ").click(),!1}),$(".percentage-box").length&&(t={useEasing:!0,easingFn:e=function(e,t,i,o){var n=(e/=o)*e,s=n*e;return t+i*(s*n+-5*n*n+10*s+-10*n+5*e)},useGrouping:!(a={useEasing:!0,easingFn:e,useGrouping:!0,separator:",",decimalPlaces:1,decimal:"."}),decimalPlaces:1,decimal:"."},$("#count1").length&&(s=-1!=(i=$("#count1").attr("data-end")).indexOf(".")?1:0,counter1=new CountUp("count1",0,i,s,1.5,a)),$("#count2").length&&(s=-1!=(o=$("#count2").attr("data-end")).indexOf(".")?1:0,counter2=new CountUp("count2",0,o,s,3.5,t)),$("#count3").length&&(s=-1!=(n=$("#count3").attr("data-end")).indexOf(".")?1:0,counter3=new CountUp("count3",0,n,s,3.5,t))),$(".countNew").length&&(a={useEasing:!0,useGrouping:!0,separator:",",decimal:"."},(l=$(".countNew")).each(function(e){$(l[e]).html()})),$(function(){$(".services-blocks .item .box .w60").matchHeight({byRow:!1,property:"min-height",target:null,remove:!1})}),$('.search-box input[type="text"]').focusin(function(){$(".page-header .head-wrapper").addClass("bg-white")}),$('.search-box input[type="text"]').focusout(function(){$(".page-header .head-wrapper").removeClass("bg-white")}),$(".content-block .down-arrow ").click(function(e){e.preventDefault();$(".page-header").outerHeight(!0);$("html,body").animate({scrollTop:$(this).parents(".content-block").next().offset().top},700)}),$(".testimonial-section .text-box .content p:first-child,.inner-banner .banner-content .quote,blockquote p:last-child,.testimonials-new .testimonial-new-slider .quote p").append('<span class="colon right"></span>'),$(".testimonials-new .testimonial-new-slider .quote p").prepend('<span class="colon left"></span>'),$(".mobile-only .c-a-list").flickity({cellAlign:"center",contain:!0,wrapAround:!0,imagesLoaded:!0,prevNextButtons:!1,pageDots:!1}),scrollContent(),doneResizing()});var didScroll,browserMobile=!1;$("body").hasClass("layout-mobile")&&(browserMobile=!0),$(window).scroll(function(){var e,t,i;scrollContent(),$(".page-title-block").length&&(e=$(".inner-section").offset().top,t=$(".inner-section").outerHeight(!0),i=$(".page-header").outerHeight(!0),$(window).scrollTop()+i>e&&$(window).scrollTop()+100<t+e?$(".page-title-block").addClass("fix"):$(".page-title-block").removeClass("fix"))});var trackerOffset,halfWindow,targetOffset,targetOffsetH,tabOffsetTop,lastScrollTopNew,deltaNew,scrollDirection,lastScrollTop=0,delta=5,navbarHeight=$("header").outerHeight();function hasScrolled(){var e=$(this).scrollTop();Math.abs(lastScrollTop-e)<=delta||(lastScrollTop<e&&navbarHeight<e?$("header").removeClass("nav-down").addClass("nav-up"):e+$(window).height()<$(document).height()&&$("header").removeClass("nav-up").addClass("nav-down"),lastScrollTop=e)}function scrollContent(){var e=$(".to-load"),t=$(".to-load-element");browserMobile&&$(".to-load").addClass("loaded"),$(".to-load-element").addClass("loaded"),newScroll=browserMobile?$(window).scrollTop():0<window.scrollY?window.scrollY:$("html,body").scrollTop(),browserMobile?($(".to-load").addClass("loaded"),$(".to-load-element").addClass("loaded")):(e.each(function(){var e=$(this);newScroll+1.05*$(window).height()>$(this).offset().top?(e.removeClass("no-anim"),e.addClass("loaded"),e.hasClass("percentage-box")&&(0<$("#count1").length&&counter1.start(),0<$("#count2").length&&counter2.start(),0<$("#count3").length&&counter3.start())):newScroll+$(window).height()<$(this).offset().top&&(e.addClass("no-anim"),e.removeClass("loaded"))}),t.each(function(){var e,t,i,o=$(this);newScroll+1.05*$(window).height()>$(this).offset().top?(o.removeClass("no-anim"),o.addClass("loaded"),o.find(".stasticsTeeeeeeeee").length&&(e=o.find(".stastics").find(".countNew"),t=e.attr("data-target"),e.hasClass("animated")||(i=-1!=t.indexOf(".")?1:0,setTimeout(function(){e.countTo({from:0,to:t,decimals:i,onComplete:function(){e.addClass("animated")}})},700)))):newScroll+$(window).height()<$(this).offset().top&&(o.addClass("no-anim"),o.removeClass("loaded"))})),currentScroll=newScroll}function whichBrs(){var e=navigator.userAgent.toLowerCase();return-1!=e.indexOf("opera")?"Opera":-1!=e.indexOf("staroffice")?"Star Office":-1!=e.indexOf("webtv")?"WebTV":-1!=e.indexOf("beonex")?"Beonex":-1!=e.indexOf("chimera")?"Chimera":-1!=e.indexOf("netpositive")?"NetPositive":-1!=e.indexOf("phoenix")?"Phoenix":-1!=e.indexOf("firefox")?"Firefox":-1!=e.indexOf("chrome")?"Chrome":-1!=e.indexOf("safari")?"Safari":-1!=e.indexOf("skipstone")?"SkipStone":-1!=e.indexOf("msie")?"Internet Explorer":-1!=e.indexOf("netscape")?"Netscape":-1!=e.indexOf("mozilla/5.0")?"Mozilla":-1!=e.indexOf("/")?"mozilla"!=e.substr(0,e.indexOf("/"))?navigator.userAgent.substr(0,e.indexOf("/")):"Netscape":-1!=e.indexOf(" ")?navigator.userAgent.substr(0,e.indexOf(" ")):navigator.userAgent}function stopAllVideos(){$(".video-box").each(function(){var e,t,i,o=$(this).find("iframe");$(this).find("iframe").remove(),o.length&&(-1!=(e=o.prop("src")).indexOf("autoplay=1")?(i='<iframe src = "'+(t=e.replace("autoplay=1","autoplay=0"))+'" allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  width = "850" height = "480"  frameborder = "0" > < /iframe>',$(this).prepend(i),$(this).removeClass("now-playing")):(i='<iframe src = "'+(t=e+"?autoplay=0&rel=0")+'" allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  width = "850" height = "480"  frameborder = "0" > < /iframe>',$(this).prepend(i),o.prop("src",t)))})}function planetRotating(){var e=$(window).scrollTop(),t=trackerOffset/2-e;console.log("tracker offset->"+trackerOffset+", current Scroll ->"+e+", theta->"+t),trackerOffset<e+halfWindow?(console.log("visible"),$(".planet .satellite").css({transform:"rotate("+t+"deg)"})):console.log("hide")}function countInSlider(){var e,t,i;$(".slider-section .swipe-slider .item.is-selected").find(".countNew").length&&((e=$(".slider-section .swipe-slider .item.is-selected").find(".countNew")).hasClass("animated")||(t=e.attr("data-target"),i=-1!=t.indexOf(".")?1:0,setTimeout(function(){e.countTo({from:0,to:t,decimals:i,onComplete:function(){e.addClass("animated"),$(".slider-section .swipe-slider .item.is-selected").siblings().find(".countNew").removeClass("animated").html("0")}})},600)))}function checkArrowPos(){var e;$(".testimonial-new-slider").length&&(e=$(".testimonial-new-slider .item.is-selected .quote ").outerHeight(),$(".testimonials-new .testimonial-new-slider .flickity-button").css("top",e/2))}$(window).scroll(function(e){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250),$(window).load(function(){stopAllVideos(),$("html").addClass("dom-loaded site-loaded"),doneResizing(),$(".menu>ul>li").mouseenter(function(){$(this).siblings().removeClass("hover"),$(this).addClass("hover")}),$(".menu").mouseleave(function(){$(".page-menu ul li").removeClass("hover")})}),$.fn.parpefullpage=function(){$(".jp-page-items").length<2&&$(".slider-section").addClass("singleSlide");var e=this,f=".jpPosition",u={};e.each(function(){var e=$(this);e.attr("data-index",0),e.find(".jp-page-items").eq(0).addClass("cur"),e.find(f).css({marginLeft:-(e.find(f).height()+20)/2})});function t(){if(980<window.innerWidth){var p=$(window).height(),h=$(window).scrollTop();return e.each(function(e){var t=$(this),i=t.offset().top,o=t.find(".jp-page-items");u[e]=o.length;var n=i+t.height()-p,s=i<=h&&h<=n?"fixed":"absolute";$(".jp-page-items").length<2?i-p+100<=h?$(".slider-section").addClass("enteredTheZone"):$(".slider-section").removeClass("enteredTheZone"):i<=h&&h<=n?$(".slider-section").addClass("enteredTheZone"):h>p*u[e]+i?$(".slider-section").addClass("beyondTheZone"):($(".slider-section").removeClass("beyondTheZone"),$(".slider-section").removeClass("enteredTheZone")),i<=h&&h<=n?$("html").addClass("inSlideZone"):($("html").removeClass("inSlideZone"),$(".slider-section .swipe-slider .item").find(".countNew").removeClass("animated").html("0")),i-p/2<=h?$("html").addClass("slidePartiaLshown"):$("html").removeClass("slidePartiaLshown");var a,l,r,c,d;$(".page-header").outerHeight(!0);t.css({height:p*u[e]}),o.css({height:p,position:s,width:"100%",top:0,left:0}),0===t.find(f).length&&(t.append('<div class="jpPosition"></div>'),o.each(function(e){t.find(f).append('<a class="jpPosition-items" href="javascript:;"><span>'+e+"</span></a>")}),t.find(".jpPosition-items").eq(0).addClass("cur")),"absolute"==s?(t.find(f).hide(),i<h&&o.last().css({top:"auto",bottom:0,opacity:1})):(t.find(f).show(),a=parseInt((h-i)/(p/1.5)),l=i<=h?a:0,a>=u[e]&&(l=u[e]-1),t.attr("data-index")!==l&&(t.find(".jpPosition-items").removeClass("cur").eq(l).addClass("cur"),o.removeClass("cur").css({opacity:0}).eq(l).addClass("cur").css({opacity:1}),t.attr("data-index",l)),$(".slider-section .swipe-slider .item").eq(l).find(".countNew").length&&((r=$(".slider-section .swipe-slider .item").eq(l).find(".countNew")).hasClass("animated")||(c=r.attr("data-target"),d=-1!=c.indexOf(".")?1:0,setTimeout(function(){r.countTo({from:0,to:c,decimals:d,onComplete:function(){r.addClass("animated"),$(".slider-section .swipe-slider .item.cur").siblings().find(".countNew").removeClass("animated").html("0")}})},600))))})}}$(document).on("click",".jpPosition-items",function(){var e=$(this).parent(),t=$(this).index(),i=$(window).height()/1.5,o=e.parent().offset().top+5;$("body, html").animate({scrollTop:o+t*i},500)}),t(),$(window).resize(t),$(window).scroll(t)},$(function(){$(".parpefullpage").length}),$.fn.parpefullpage2=function(){var e=this,p=".jpPosition2",h={};e.each(function(){var e=$(this);e.attr("data-index",0),e.find(".jp-page-items2").eq(0).addClass("cur2"),e.find(p).css({marginLeft:-(e.find(p).height()+20)/2})});function t(){if(980<window.innerWidth){var c=$(window).height(),d=$(window).scrollTop();return e.each(function(e){var t=$(this),i=t.offset().top,o=t.find(".jp-page-items2");h[e]=o.length;var n,s,a=i+t.height()-c,l=i<=d&&d<=a?"fixed":"absolute";i<=d&&d<=a?$("html").addClass("inSlideZone2"):$("html").removeClass("inSlideZone2"),t.css({height:c*h[e]}),o.css({height:c,position:l,width:"100%",top:0,left:0}),0===t.find(p).length&&(t.append('<div class="jpPosition2"></div>'),o.each(function(e){t.find(p).append('<a class="jpPosition-items2" href="javascript:;"><span>'+e+"</span></a>")}),t.find(".jpPosition-items2").eq(0).addClass("cur2")),"absolute"==l?(t.find(p).hide(),i<d&&o.last().css({top:"auto",bottom:0,opacity:1})):(t.find(p).show(),n=parseInt((d-i)/(c/1.5)),s=i<=d?n:0,n>=h[e]&&(s=h[e]-1),t.attr("data-index")!==s&&(t.find(".jpPosition-items2").removeClass("cur2").eq(s).addClass("cur2"),o.removeClass("cur2").css({opacity:0}).eq(s).addClass("cur2").css({opacity:1}).find(".to-load").addClass("loaded"),o.eq(s).siblings().find(".to-load").addClass("loaded"),t.attr("data-index",s)));var r=$(".parpefullpage2").attr("data-index");console.log(r),0==r||1==r?$(".sticky-tabs .tab-content").eq(0).addClass("showContent").siblings().removeClass("showContent"):2!=r&&3!=r||$(".sticky-tabs .tab-content").eq(3).addClass("showContent").siblings().removeClass("showContent")})}}$(document).on("click",".jpPosition-items2",function(){var e=$(this).parent(),t=$(this).index(),i=$(window).height()/1.5,o=e.parent().offset().top+5;$("body, html").animate({scrollTop:o+t*i},600)}),t(),$(window).resize(t),$(window).scroll(t)},$(".testimonial-slider .item").length<2&&$(".testimonial-slider").addClass("singleSlide"),$(".planet .satellite1111").length&&(trackerOffset=$(".tracker").offset().top,halfWindow=$(window).height()-10,$(window).scroll(function(){planetRotating()})),$(".planet .satellite").length&&(targetOffset=$(".tracker").offset().top,targetOffsetH=$(".home-content").outerHeight(!0),$(window).scroll(function(){var e=$(window).scrollTop()-targetOffset;(e/=5)<-20?e=-20:220<e&&(e=220),$(".planet .satellite").css({transform:"rotate("+e+"deg)"})})),$('.bg-image[data-type="background"]').length&&$('.bg-image[data-type="background"]').each(function(){var t=$(this),i=t.offset().top,o=t.data("speed");$(window).width()<1025&&(o=40),$(window).scroll(function(){var e="scale(1.2) matrix(1, 0, 0, 1, 0, "+-(i-$(window).scrollTop())/o+")";t.css({transform:e})})}),$(".home-tabs-oldBkp").length&&(lastScrollTopNew=tabOffsetTop=0,deltaNew=5,tabOffsetTop=$(".home-tabs").offset().top,$(window).scroll(function(){var e=$(this).scrollTop();Math.abs(lastScrollTopNew-e)>=deltaNew&&(scrollDirection=lastScrollTopNew<e?"Down":"Up",tabOffsetTop<e&&"Down"==scrollDirection?$(".home-tabs ul li:first-child").hasClass("active")&&$(".home-tabs ul li:last-child").click():e<tabOffsetTop&&"Up"==scrollDirection&&$(".home-tabs ul li:last-child").hasClass("active")&&$(".home-tabs ul li:first-child").click(),lastScrollTopNew=e)})),$(".home-tabssssss").length&&(lastScrollTopNew=tabOffsetTop=0,deltaNew=5,tabOffsetTop=$(".home-tabs").offset().top,$(window).scroll(function(){var e=$(this).scrollTop();Math.abs(lastScrollTopNew-e)>=deltaNew&&(scrollDirection=lastScrollTopNew<e?"Down":"Up",tabOffsetTop+90<e&&"Down"==scrollDirection?$(".home-tabs ul li:first-child").hasClass("active")&&$(".home-tabs ul li:last-child").click():e<tabOffsetTop-90&&"Up"==scrollDirection&&$(".home-tabs ul li:last-child").hasClass("active")&&$(".home-tabs ul li:first-child").click(),lastScrollTopNew=e)}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? '[data-drupal-link-query=\'' + queryString + '\']' : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors = void 0;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return selector + ':not([hreflang])';
      }), originalSelectors.map(function (selector) {
        return selector + '[hreflang="' + path.currentLanguage + '"]';
      }));

      selectors = selectors.map(function (current) {
        return current + querySelector;
      });

      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement = void 0;
  var announcements = [];

  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement = void 0;

    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';

      liveElement.setAttribute('aria-busy', 'true');

      liveElement.setAttribute('aria-live', priority);

      liveElement.innerHTML = text.join('\n');

      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });

    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');

      $item.toggleClass('open', switcher);

      $toggle.toggleClass('open', switcher);

      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');

      toggleList($item);

      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };

      $menu.find('li > a').wrap('<div class="toolbar-box">');

      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {
            '@label': $box.find('a').text()
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + window.location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);

        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options.class + '"><span class="action">' + options.action + '</span> <span class="label">' + options.text + '</span></button>';
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });

  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });

        Drupal.toolbar.models.toolbarModel = model;

        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;

          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));

          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));

          model.set('areSubtreesLoaded', true);
        });

        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });

        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', height + 'px');

              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', newHeight + 'px');
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };

  Drupal.toolbar = {
    views: {},

    models: {},

    mql: {},

    setSubtrees: new $.Deferred(),

    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, { validate: true });

          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,

      activeTray: null,

      isOriented: false,

      isFixed: false,

      areSubtreesLoaded: false,

      isViewportOverflowConstrained: false,

      orientation: 'horizontal',

      locked: false,

      isTrayToggleVisible: true,

      height: null,

      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');

      Object.keys(subtrees || {}).forEach(function (id) {
        _this.$el.find('#toolbar-link-' + id).once('toolbar-subtrees').after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text = void 0;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', { '@action': action });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);

      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));

      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);

      $('body').css({
        'padding-top': this.model.get('height')
      });

      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();

      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;

        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));

      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);

      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');

        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');

      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass('toolbar-tray-' + orientation);

      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);

      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';

      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');

      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');

      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
            localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);

            Drupal.ajax({ url: endpoint }).execute();

            localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()},"click .ui-menu-item":function(b){var c=a(b.target),d=a(a.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.select(b),b.isPropagationStopped()||(this.mouseHandled=!0),c.has(".ui-menu").length?this.expand(b):!this.element.is(":focus")&&d.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(b){if(!this.previousFilter){var c=a(b.target).closest(".ui-menu-item"),d=a(b.currentTarget);c[0]===d[0]&&(this._removeClass(d.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(b,d))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){var c=this.active||this.element.find(this.options.items).eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){var c=!a.contains(this.element[0],a.ui.safeActiveElement(this.document[0]));c&&this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1}})},_destroy:function(){var b=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),c=b.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),c.children().each(function(){var b=a(this);b.data("ui-menu-submenu-caret")&&b.remove()})},_keydown:function(b){var c,d,e,f,g=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:g=!1,d=this.previousFilter||"",f=!1,e=b.keyCode>=96&&b.keyCode<=105?(b.keyCode-96).toString():String.fromCharCode(b.keyCode),clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,c=this._filterMenuItems(e),c=f&&c.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):c,c.length||(e=String.fromCharCode(b.keyCode),c=this._filterMenuItems(e)),c.length?(this.focus(b,c),this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}g&&b.preventDefault()},_activate:function(a){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var b,c,d,e,f,g=this,h=this.options.icons.submenu,i=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),d=i.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var b=a(this),c=b.prev(),d=a("<span>").data("ui-menu-submenu-caret",!0);g._addClass(d,"ui-menu-icon","ui-icon "+h),c.attr("aria-haspopup","true").prepend(d),b.attr("aria-labelledby",c.attr("id"))}),this._addClass(d,"ui-menu","ui-widget ui-widget-content ui-front"),b=i.add(this.element),c=b.find(this.options.items),c.not(".ui-menu-item").each(function(){var b=a(this);g._isDivider(b)&&g._addClass(b,"ui-menu-divider","ui-widget-content")}),e=c.not(".ui-menu-item, .ui-menu-divider"),f=e.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(e,"ui-menu-item")._addClass(f,"ui-menu-item-wrapper"),c.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,b){if("icons"===a){var c=this.element.find(".ui-menu-icon");this._removeClass(c,null,this.options.icons.submenu)._addClass(c,null,b.submenu)}this._super(a,b)},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",String(a)),this._toggleClass(null,"ui-state-disabled",!!a)},focus:function(a,b){var c,d,e;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.children(".ui-menu-item-wrapper"),this._addClass(d,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),e=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(e,null,"ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&a&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.outerHeight(),e<0?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",a,{item:this.active}),this.active=null)},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));d.length||(d=this.element),this._close(d),this.blur(b),this._removeClass(d.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=d},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(b){return!a(b.target).closest(".ui-menu").length},_isDivider:function(a){return!/[^\-\u2014\u2013\s]/.test(a.text())},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items).first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,c)},_filterMenuItems:function(b){var c=b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),d=new RegExp("^"+c,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return d.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()))})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./menu","../keycode","../position","../safe-active-element","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var b,c,d,e=this.element[0].nodeName.toLowerCase(),f="textarea"===e,g="input"===e;this.isMultiLine=f||!g&&this._isContentEditable(this.element),this.valueMethod=this.element[f||g?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))return b=!0,d=!0,void(c=!0);b=!1,d=!1,c=!1;var f=a.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:b=!0,this._move("previousPage",e);break;case f.PAGE_DOWN:b=!0,this._move("nextPage",e);break;case f.UP:b=!0,this._keyEvent("previous",e);break;case f.DOWN:b=!0,this._keyEvent("next",e);break;case f.ENTER:this.menu.active&&(b=!0,e.preventDefault(),this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());break;default:c=!0,this._searchTimeout(e)}},keypress:function(d){if(b)return b=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||d.preventDefault());if(!c){var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:this._move("previousPage",d);break;case e.PAGE_DOWN:this._move("nextPage",d);break;case e.UP:this._keyEvent("previous",d);break;case e.DOWN:this._keyEvent("next",d)}}},input:function(a){return d?(d=!1,void a.preventDefault()):void this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(a),void this._change(a))}}),this._initSource(),this.menu=a("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(b){b.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==a.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(b,c){var d,e;return this.isNewMenu&&(this.isNewMenu=!1,b.originalEvent&&/^mouse/.test(b.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){a(b.target).trigger(b.originalEvent)})):(e=c.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",b,{item:e})&&b.originalEvent&&/^key/.test(b.originalEvent.type)&&this._value(e.value),d=c.item.attr("aria-label")||e.value,void(d&&a.trim(d).length&&(this.liveRegion.children().hide(),a("<div>").text(d).appendTo(this.liveRegion))))},menuselect:function(b,c){var d=c.item.data("ui-autocomplete-item"),e=this.previous;this.element[0]!==a.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=e,this._delay(function(){this.previous=e,this.selectedItem=d})),!1!==this._trigger("select",b,{item:d})&&this._value(d.value),this.term=this._value(),this.close(b),this.selectedItem=d}}),this.liveRegion=a("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(b){var c=this.menu.element[0];return b.target===this.element[0]||b.target===c||a.contains(c,b.target)},_closeOnClickOutside:function(a){this._isEventTargetInWidget(a)||this.close()},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b&&b[0]||(b=this.element.closest(".ui-front, dialog")),b.length||(b=this.document[0].body),b},_initSource:function(){var b,c,d=this;a.isArray(this.options.source)?(b=this.options.source,this.source=function(c,d){d(a.ui.autocomplete.filter(b,c.term))}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(b,e){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:b,dataType:"json",success:function(a){e(a)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){var b=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;b&&(!b||c||d)||(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(a):void 0},_search:function(a){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var b=++this.requestIndex;return a.proxy(function(a){b===this.requestIndex&&this.__response(a),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return"string"==typeof b?{label:b,value:b}:a.extend({},b,{label:b.label||b.value,value:b.value||b.label})})},_suggest:function(b){var c=this.menu.element.empty();this._renderMenu(c,b),this.isNewMenu=!0,this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItemData(b,c)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(b,c){return a("<li>").append(a("<div>").text(c.label)).appendTo(b)},_move:function(a,b){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[a](b):void this.search(null,b)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(a,b),b.preventDefault())},_isContentEditable:function(a){if(!a.length)return!1;var b=a.prop("contentEditable");return"inherit"===b?this._isContentEditable(a.parent()):"true"===b}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(b){var c;this._superApply(arguments),this.options.disabled||this.cancelSearch||(c=b&&b.length?this.options.messages.results(b.length):this.options.messages.noResults,this.liveRegion.children().hide(),a("<div>").text(c).appendTo(this.liveRegion))}}),a.ui.autocomplete});;
/**
 * @file
 * Behaviors for the search widget in the admin toolbar.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.adminToolbarSearch = {

    // If extra links have been fetched.
    extraFetched: false,

    attach: function (context) {
      if (context != document) {
        return;
      }

      var $self = this;
      this.links = [];

      $("#admin-toolbar-search-input").autocomplete({
        minLength: 2,
        source: function (request, response) {
          var data = $self.handleAutocomplete(request.term);
          if (!$self.extraFetched && drupalSettings.adminToolbarSearch.loadExtraLinks) {
            $.getJSON( Drupal.url( "admin/admin-toolbar-search" ), function( data ) {
              $(data).each(function () {
                var item = this;
                item.label = this.labelRaw + ' ' + this.value;
                $self.links.push(item);
              });

              $self.extraFetched = true;

              var results = $self.handleAutocomplete(request.term);
              response(results);
            });
          }
          else {
            response(data);
          }
        },
        open: function () {
          var zIndex = $('#toolbar-item-administration-tray')
            .css("z-index") + 1;
          $(this).autocomplete('widget').css('z-index', zIndex);

          return false;
        },
        select: function (event, ui) {
          if (ui.item.value) {
            location.href = ui.item.value;
            return false;
          }
        }
      }).data("ui-autocomplete")._renderItem = (function (ul, item) {
        ul.addClass('admin-toolbar-search-autocomplete-list');
        return $("<li>")
          .append('<div>' + item.labelRaw + ' <span class="admin-toolbar-search-url">' + item.value + '</span></div>')
          .appendTo(ul);
      });

      // Populate the links for search results when the input is pressed.
      $(context).find('#admin-toolbar-search-input')
        .once('admin_toolbar_search')
        .each(function () {
          $(this).focus(function () {
            Drupal.behaviors.adminToolbarSearch.populateLinks($self);
          });
        });
    },
    getItemLabel: function (item) {
      var breadcrumbs = [];
      $(item).parents().each(function () {
        if ($(this).hasClass('menu-item')) {
          var $link = $(this).find('a:first');
          if ($link.length && !$link.hasClass('admin-toolbar-search-ignore')) {
            breadcrumbs.unshift($link.text());
          }
        }
      });
      return breadcrumbs.join(' > ');
    },
    handleAutocomplete: function (term) {
      var $self = this;
      var keywords = term.split(" "); // Split search terms into list.

      var suggestions = [];
      $self.links.forEach(function (element) {
        var label = element.label.toLowerCase();

        // Add exact matches.
        if (label.indexOf(term.toLowerCase()) >= 0) {
          suggestions.push(element);
        }
        else {
          // Add suggestions where it matches all search terms.
          var matchCount = 0;
          keywords.forEach(function (keyword) {
            if (label.indexOf(keyword.toLowerCase()) >= 0) {
              matchCount++;
            }
          });
          if (matchCount == keywords.length) {
            suggestions.push(element);
          }
        }
      });
      return suggestions;
    },
    /**
     * Populates the links in admin toolbar search.
     */
    populateLinks: function ($self) {
      // Populate only when links array is empty (only the first time).
      if ($self.links.length === 0) {
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
        $('.toolbar-tray a[data-drupal-link-system-path]').each(function () {
          if (this.href !== baseUrl) {
            var label = $self.getItemLabel(this);
            $self.links.push({
              'value': this.href,
              'label': label + ' ' + this.href,
              'labelRaw': label
            });
          }
        });
      }
    },
  };

})(jQuery, Drupal);
;
  /*
 * jQuery Foundation Joyride Plugin 2.1
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, undefined) {
  'use strict';

  var defaults = {
      'version'              : '2.1',
      'tipLocation'          : 'bottom',  // 'top' or 'bottom' in relation to parent
      'nubPosition'          : 'auto',    // override on a per tooltip bases
      'scroll'               : true,      // whether to scroll to tips
      'scrollSpeed'          : 300,       // Page scrolling speed in milliseconds
      'timer'                : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      'autoStart'            : false,     // true or false - false tour starts when restart called
      'startTimerOnClick'    : true,      // true or false - true requires clicking the first button start the timer
      'startOffset'          : 0,         // the index of the tooltip you want to start on (index of the li)
      'nextButton'           : true,      // true or false to control whether a next button is used
      'tipAnimation'         : 'fade',    // 'pop' or 'fade' in each tip
      'pauseAfter'           : [],        // array of indexes where to pause the tour after
      'tipAnimationFadeSpeed': 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      'cookieMonster'        : false,     // true or false to control whether cookies are used
      'cookieName'           : 'joyride', // Name the cookie you'll use
      'cookieDomain'         : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      'cookiePath'           : false,     // Set to '/' if you want the cookie for the whole website
      'localStorage'         : false,     // true or false to control whether localstorage is used
      'localStorageKey'      : 'joyride', // Keyname in localstorage
      'tipContainer'         : 'body',    // Where will the tip be attached
      'modal'                : false,     // Whether to cover page with modal during the tour
      'expose'               : false,     // Whether to expose the elements at each step in the tour (requires modal:true)
      'postExposeCallback'   : $.noop,    // A method to call after an element has been exposed
      'preRideCallback'      : $.noop,    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      'postRideCallback'     : $.noop,    // A method to call once the tour closes (canceled or complete)
      'preStepCallback'      : $.noop,    // A method to call before each step
      'postStepCallback'     : $.noop,    // A method to call after each step
      'template' : { // HTML segments for tip layout
        'link'    : '<a href="#close" class="joyride-close-tip">X</a>',
        'timer'   : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        'tip'     : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        'wrapper' : '<div class="joyride-content-wrapper" role="dialog"></div>',
        'button'  : '<a href="#" class="joyride-next-tip"></a>',
        'modal'   : '<div class="joyride-modal-bg"></div>',
        'expose'  : '<div class="joyride-expose-wrapper"></div>',
        'exposeCover': '<div class="joyride-expose-cover"></div>'
      }
    },

    Modernizr = Modernizr || false,

    settings = {},

    methods = {

      init : function (opts) {
        return this.each(function () {

          if ($.isEmptyObject(settings)) {
            settings = $.extend(true, defaults, opts);

            // non configurable settings
            settings.document = window.document;
            settings.$document = $(settings.document);
            settings.$window = $(window);
            settings.$content_el = $(this);
            settings.$body = $(settings.tipContainer);
            settings.body_offset = $(settings.tipContainer).position();
            settings.$tip_content = $('> li', settings.$content_el);
            settings.paused = false;
            settings.attempts = 0;

            settings.tipLocationPatterns = {
              top: ['bottom'],
              bottom: [], // bottom should not need to be repositioned
              left: ['right', 'top', 'bottom'],
              right: ['left', 'top', 'bottom']
            };

            // are we using jQuery 1.7+
            methods.jquery_check();

            // can we create cookies?
            if (!$.isFunction($.cookie)) {
              settings.cookieMonster = false;
            }

            // generate the tips and insert into dom.
            if ( (!settings.cookieMonster || !$.cookie(settings.cookieName) ) &&
              (!settings.localStorage || !methods.support_localstorage() || !localStorage.getItem(settings.localStorageKey) ) ) {

              settings.$tip_content.each(function (index) {
                methods.create({$li : $(this), index : index});
              });

              // show first tip
              if(settings.autoStart)
              {
                if (!settings.startTimerOnClick && settings.timer > 0) {
                  methods.show('init');
                  methods.startTimer();
                } else {
                  methods.show('init');
                }
              }

            }

            settings.$document.on('click.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
              e.preventDefault();

              if (settings.$li.next().length < 1) {
                methods.end();
              } else if (settings.timer > 0) {
                clearTimeout(settings.automate);
                methods.hide();
                methods.show();
                methods.startTimer();
              } else {
                methods.hide();
                methods.show();
              }

            });

            settings.$document.on('click.joyride', '.joyride-close-tip', function (e) {
              e.preventDefault();
              methods.end(true /* isAborted */);
            });

            settings.$window.on('resize.joyride', function (e) {
              if(settings.$li){
              if(settings.exposed && settings.exposed.length>0){
                var $els = $(settings.exposed);
                $els.each(function(){
                  var $this = $(this);
                  methods.un_expose($this);
                  methods.expose($this);
                });
              }
              if (methods.is_phone()) {
                methods.pos_phone();
              } else {
                methods.pos_default();
              }
              }
            });
          } else {
            methods.restart();
          }

        });
      },

      // call this method when you want to resume the tour
      resume : function () {
        methods.set_li();
        methods.show();
      },

      nextTip: function(){
            if (settings.$li.next().length < 1) {
            methods.end();
            } else if (settings.timer > 0) {
            clearTimeout(settings.automate);
            methods.hide();
            methods.show();
            methods.startTimer();
            } else {
            methods.hide();
            methods.show();
            }
      },

      tip_template : function (opts) {
        var $blank, content, $wrapper;

        opts.tip_class = opts.tip_class || '';

        $blank = $(settings.template.tip).addClass(opts.tip_class);
        content = $.trim($(opts.li).html()) +
          methods.button_text(opts.button_text) +
          settings.template.link +
          methods.timer_instance(opts.index);

        $wrapper = $(settings.template.wrapper);
        if (opts.li.attr('data-aria-labelledby')) {
          $wrapper.attr('aria-labelledby', opts.li.attr('data-aria-labelledby'))
        }
        if (opts.li.attr('data-aria-describedby')) {
          $wrapper.attr('aria-describedby', opts.li.attr('data-aria-describedby'))
        }
        $blank.append($wrapper);
        $blank.first().attr('data-index', opts.index);
        $('.joyride-content-wrapper', $blank).append(content);

        return $blank[0];
      },

      timer_instance : function (index) {
        var txt;

        if ((index === 0 && settings.startTimerOnClick && settings.timer > 0) || settings.timer === 0) {
          txt = '';
        } else {
          txt = methods.outerHTML($(settings.template.timer)[0]);
        }
        return txt;
      },

      button_text : function (txt) {
        if (settings.nextButton) {
          txt = $.trim(txt) || 'Next';
          txt = methods.outerHTML($(settings.template.button).append(txt)[0]);
        } else {
          txt = '';
        }
        return txt;
      },

      create : function (opts) {
        // backwards compatibility with data-text attribute
        var buttonText = opts.$li.attr('data-button') || opts.$li.attr('data-text'),
          tipClass = opts.$li.attr('class'),
          $tip_content = $(methods.tip_template({
            tip_class : tipClass,
            index : opts.index,
            button_text : buttonText,
            li : opts.$li
          }));

        $(settings.tipContainer).append($tip_content);
      },

      show : function (init) {
        var opts = {}, ii, opts_arr = [], opts_len = 0, p,
            $timer = null;

        // are we paused?
        if (settings.$li === undefined || ($.inArray(settings.$li.index(), settings.pauseAfter) === -1)) {

          // don't go to the next li if the tour was paused
          if (settings.paused) {
            settings.paused = false;
          } else {
            methods.set_li(init);
          }

          settings.attempts = 0;

          if (settings.$li.length && settings.$target.length > 0) {
            if(init){ //run when we first start
                settings.preRideCallback(settings.$li.index(), settings.$next_tip );
                if(settings.modal){
                    methods.show_modal();
                }
            }
            settings.preStepCallback(settings.$li.index(), settings.$next_tip );

            // parse options
            opts_arr = (settings.$li.data('options') || ':').split(';');
            opts_len = opts_arr.length;
            for (ii = opts_len - 1; ii >= 0; ii--) {
              p = opts_arr[ii].split(':');

              if (p.length === 2) {
                opts[$.trim(p[0])] = $.trim(p[1]);
              }
            }
            settings.tipSettings = $.extend({}, settings, opts);
            settings.tipSettings.tipLocationPattern = settings.tipLocationPatterns[settings.tipSettings.tipLocation];

            if(settings.modal && settings.expose){
              methods.expose();
            }

            // scroll if not modal
            if (!settings.$target.is("body") && settings.scroll) {
              methods.scroll_to();
            }

            if (methods.is_phone()) {
              methods.pos_phone(true);
            } else {
              methods.pos_default(true);
            }

            $timer = $('.joyride-timer-indicator', settings.$next_tip);

            if (/pop/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.show();

              }


            } else if (/fade/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

              }
            }

            settings.$current_tip = settings.$next_tip;
            // Focus next button for keyboard users.
            $('.joyride-next-tip', settings.$current_tip).focus();
            methods.tabbable(settings.$current_tip);
          // skip non-existent targets
          } else if (settings.$li && settings.$target.length < 1) {

            methods.show();

          } else {

            methods.end();

          }
        } else {

          settings.paused = true;

        }

      },

      // detect phones with media queries if supported.
      is_phone : function () {
        if (Modernizr) {
          return Modernizr.mq('only screen and (max-width: 767px)');
        }

        return (settings.$window.width() < 767) ? true : false;
      },

      support_localstorage : function () {
        if (Modernizr) {
          return Modernizr.localstorage;
        } else {
          return !!window.localStorage;
        }
      },

      hide : function () {
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if(!settings.modal){
        $('.joyride-modal-bg').hide();
        }
        settings.$current_tip.hide();
        settings.postStepCallback(settings.$li.index(), settings.$current_tip);
      },

      set_li : function (init) {
        if (init) {
          settings.$li = settings.$tip_content.eq(settings.startOffset);
          methods.set_next_tip();
          settings.$current_tip = settings.$next_tip;
        } else {
          settings.$li = settings.$li.next();
          methods.set_next_tip();
        }

        methods.set_target();
      },

      set_next_tip : function () {
        settings.$next_tip = $('.joyride-tip-guide[data-index=' + settings.$li.index() + ']');
      },

      set_target : function () {
        var cl = settings.$li.attr('data-class'),
            id = settings.$li.attr('data-id'),
            $sel = function () {
              if (id) {
                return $(settings.document.getElementById(id));
              } else if (cl) {
                return $('.' + cl).filter(":visible").first();
              } else {
                return $('body');
              }
            };

        settings.$target = $sel();
      },

      scroll_to : function () {
        var window_half, tipOffset;

        window_half = settings.$window.height() / 2;
        tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight());

        $("html, body").stop().animate({
          scrollTop: tipOffset
        }, settings.scrollSpeed);
      },

      paused : function () {
        if (($.inArray((settings.$li.index() + 1), settings.pauseAfter) === -1)) {
          return true;
        }

        return false;
      },

      destroy : function () {
        if(!$.isEmptyObject(settings)){
        settings.$document.off('.joyride');
        }

        $(window).off('.joyride');
        $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
        $('.joyride-tip-guide, .joyride-modal-bg').remove();
        clearTimeout(settings.automate);
        settings = {};
      },

      restart : function () {
        if(!settings.autoStart)
        {
          if (!settings.startTimerOnClick && settings.timer > 0) {
            methods.show('init');
            methods.startTimer();
          } else {
            methods.show('init');
          }
          settings.autoStart = true;
        }
        else
        {
        methods.hide();
        settings.$li = undefined;
        methods.show('init');
        }
      },

      pos_default : function (init) {
        var half_fold = Math.ceil(settings.$window.height() / 2),
            tip_position = settings.$next_tip.offset(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_width = Math.ceil($nub.outerWidth() / 2),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        // tip must not be "display: none" to calculate position
        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {
            var
              topAdjustment = settings.tipSettings.tipAdjustmentY ? parseInt(settings.tipSettings.tipAdjustmentY) : 0,
              leftAdjustment = settings.tipSettings.tipAdjustmentX ? parseInt(settings.tipSettings.tipAdjustmentX) : 0;

            if (methods.bottom()) {
              settings.$next_tip.css({
                top: (settings.$target.offset().top + nub_height + settings.$target.outerHeight() + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              if (/right/i.test(settings.tipSettings.nubPosition)) {
                settings.$next_tip.css('left', settings.$target.offset().left - settings.$next_tip.outerWidth() + settings.$target.outerWidth());
              }

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'top');

            } else if (methods.top()) {

              settings.$next_tip.css({
                top: (settings.$target.offset().top - settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'bottom');

            } else if (methods.right()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.outerWidth() + settings.$target.offset().left + nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'left');

            } else if (methods.left()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.offset().left - settings.$next_tip.outerWidth() - nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'right');

            }

            if (!methods.visible(methods.corners(settings.$next_tip)) && settings.attempts < settings.tipSettings.tipLocationPattern.length) {

              $nub.removeClass('bottom')
                .removeClass('top')
                .removeClass('right')
                .removeClass('left');

              settings.tipSettings.tipLocation = settings.tipSettings.tipLocationPattern[settings.attempts];

              settings.attempts++;

              methods.pos_default(true);

            }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }

      },

      pos_phone : function (init) {
        var tip_height = settings.$next_tip.outerHeight(),
            tip_offset = settings.$next_tip.offset(),
            target_height = settings.$target.outerHeight(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        $nub.removeClass('bottom')
          .removeClass('top')
          .removeClass('right')
          .removeClass('left');

        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {

          if (methods.top()) {

              settings.$next_tip.offset({top: settings.$target.offset().top - tip_height - nub_height});
              $nub.addClass('bottom');

          } else {

            settings.$next_tip.offset({top: settings.$target.offset().top + target_height + nub_height});
            $nub.addClass('top');

          }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }
      },

      pos_modal : function ($nub) {
        methods.center();
        $nub.hide();

        methods.show_modal();

      },

      show_modal : function() {
        if ($('.joyride-modal-bg').length < 1) {
            $('body').append(settings.template.modal).show();
        }

        if (/pop/i.test(settings.tipAnimation)) {
          $('.joyride-modal-bg').show();
        } else {
          $('.joyride-modal-bg').fadeIn(settings.tipAnimationFadeSpeed);
        }
      },

      expose: function(){
        var expose,
          exposeCover,
          el,
          origCSS,
          randId = 'expose-'+Math.floor(Math.random()*10000);
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        expose = $(settings.template.expose);
        settings.$body.append(expose);
        expose.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        exposeCover = $(settings.template.exposeCover);
        origCSS = {
                  zIndex: el.css('z-index'),
                  position: el.css('position')
                  };
        el.css('z-index',expose.css('z-index')*1+1);
        if(origCSS.position == 'static'){
          el.css('position','relative');
        }
        el.data('expose-css',origCSS);
        exposeCover.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        settings.$body.append(exposeCover);
        expose.addClass(randId);
        exposeCover.addClass(randId);
        if(settings.tipSettings['exposeClass']){
          expose.addClass(settings.tipSettings['exposeClass']);
          exposeCover.addClass(settings.tipSettings['exposeClass']);
        }
        el.data('expose', randId);
        settings.postExposeCallback(settings.$li.index(), settings.$next_tip, el);
        methods.add_exposed(el);
      },

      un_expose: function(){
        var exposeId,
          el,
          expose ,
          origCSS,
          clearAll = false;
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        exposeId = el.data('expose');
        expose = $('.'+exposeId);
        if(arguments.length>1){
          clearAll = arguments[1];
        }
        if(clearAll === true){
          $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
        } else {
          expose.remove();
        }
        origCSS = el.data('expose-css');
        if(origCSS.zIndex == 'auto'){
          el.css('z-index', '');
        } else {
          el.css('z-index',origCSS.zIndex);
        }
        if(origCSS.position != el.css('position')){
          if(origCSS.position == 'static'){// this is default, no need to set it.
            el.css('position', '');
          } else {
            el.css('position',origCSS.position);
          }
        }
        el.removeData('expose');
        el.removeData('expose-z-index');
        methods.remove_exposed(el);
      },

      add_exposed: function(el){
        settings.exposed = settings.exposed || [];
        if(el instanceof $){
          settings.exposed.push(el[0]);
        } else if(typeof el == 'string'){
          settings.exposed.push(el);
        }
      },

      remove_exposed: function(el){
        var search;
        if(el instanceof $){
          search = el[0]
        } else if (typeof el == 'string'){
          search = el;
        }
        settings.exposed = settings.exposed || [];
        for(var i=0; i<settings.exposed.length; i++){
          if(settings.exposed[i] == search){
            settings.exposed.splice(i,1);
            return;
          }
        }
      },

      center : function () {
        var $w = settings.$window;

        settings.$next_tip.css({
          top : ((($w.height() - settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
          left : ((($w.width() - settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
        });

        return true;
      },

      bottom : function () {
        return /bottom/i.test(settings.tipSettings.tipLocation);
      },

      top : function () {
        return /top/i.test(settings.tipSettings.tipLocation);
      },

      right : function () {
        return /right/i.test(settings.tipSettings.tipLocation);
      },

      left : function () {
        return /left/i.test(settings.tipSettings.tipLocation);
      },

      corners : function (el) {
        var w = settings.$window,
            window_half = w.height() / 2,
            tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight()),//using this to calculate since scroll may not have finished yet.
            right = w.width() + w.scrollLeft(),
            offsetBottom =  w.height() + tipOffset,
            bottom = w.height() + w.scrollTop(),
            top = w.scrollTop();

            if(tipOffset < top){
              if (tipOffset <0 ){
                top = 0;
              } else {
                top = tipOffset;
              }
            }

            if(offsetBottom > bottom){
              bottom = offsetBottom;
            }

        return [
          el.offset().top < top,
          right < el.offset().left + el.outerWidth(),
          bottom < el.offset().top + el.outerHeight(),
          w.scrollLeft() > el.offset().left
        ];
      },

      visible : function (hidden_corners) {
        var i = hidden_corners.length;

        while (i--) {
          if (hidden_corners[i]) return false;
        }

        return true;
      },

      nub_position : function (nub, pos, def) {
        if (pos === 'auto') {
          nub.addClass(def);
        } else {
          nub.addClass(pos);
        }
      },

      startTimer : function () {
        if (settings.$li.length) {
          settings.automate = setTimeout(function () {
            methods.hide();
            methods.show();
            methods.startTimer();
          }, settings.timer);
        } else {
          clearTimeout(settings.automate);
        }
      },

      end : function (isAborted) {
        isAborted = isAborted || false;

        // Unbind resize events.
        if (isAborted) {
          settings.$window.off('resize.joyride');
        }

        if (settings.cookieMonster) {
          $.cookie(settings.cookieName, 'ridden', { expires: 365, domain: settings.cookieDomain, path: settings.cookiePath });
        }

        if (settings.localStorage) {
          localStorage.setItem(settings.localStorageKey, true);
        }

        if (settings.timer > 0) {
          clearTimeout(settings.automate);
        }
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if (settings.$current_tip) {
          settings.$current_tip.hide();
        }
        if (settings.$li) {
          settings.postStepCallback(settings.$li.index(), settings.$current_tip, isAborted);
          settings.postRideCallback(settings.$li.index(), settings.$current_tip, isAborted);
        }
        $('.joyride-modal-bg').hide();
      },

      jquery_check : function () {
        // define on() and off() for older jQuery
        if (!$.isFunction($.fn.on)) {

          $.fn.on = function (types, sel, fn) {

            return this.delegate(sel, types, fn);

          };

          $.fn.off = function (types, sel, fn) {

            return this.undelegate(sel, types, fn);

          };

          return false;
        }

        return true;
      },

      outerHTML : function (el) {
        // support FireFox < 11
        return el.outerHTML || new XMLSerializer().serializeToString(el);
      },

      version : function () {
        return settings.version;
      },

      tabbable : function (el) {
        $(el).on('keydown', function( event ) {
          if (!event.isDefaultPrevented() && event.keyCode &&
              // Escape key.
              event.keyCode === 27 ) {
            event.preventDefault();
            methods.end(true /* isAborted */);
            return;
          }

          // Prevent tabbing out of tour items.
          if ( event.keyCode !== 9 ) {
            return;
          }
          var tabbables = $(el).find(":tabbable"),
            first = tabbables.filter(":first"),
            last  = tabbables.filter(":last");
          if ( event.target === last[0] && !event.shiftKey ) {
            first.focus( 1 );
            event.preventDefault();
          } else if ( event.target === first[0] && event.shiftKey ) {
            last.focus( 1 );
            event.preventDefault();
          }
        });
      }

    };

  $.fn.joyride = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.joyride');
    }
  };

}(jQuery, this));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, document) {
  var queryString = decodeURI(window.location.search);

  Drupal.behaviors.tour = {
    attach: function attach(context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });

        model.on('change:isActive', function (model, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        }).set('tour', $(context).find('ol#tour'));

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };

  Drupal.tour = Drupal.tour || {
    models: {},

    views: {}
  };

  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],

      isActive: false,

      activeTour: []
    }
  });

  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: { click: 'onClick' },

    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);

      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).prop('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();
        this._removeIrrelevantTourItems($tour, this._getDocument());
        var that = this;
        var close = Drupal.t('Close');
        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function postRideCallback() {
              that.model.set('isActive', false);
            },

            template: {
              link: '<a href="#close" class="joyride-close-tip" aria-label="' + close + '">&times;</a>',
              button: '<a href="#" class="button button--primary joyride-next-tip"></a>'
            }
          });
          this.model.set({ isActive: true, activeTour: $tour });
        }
      } else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({ isActive: false, activeTour: [] });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _getDocument: function _getDocument() {
      return $(document);
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour.find('li').each(function () {
        var $this = $(this);
        var itemId = $this.attr('data-id');
        var itemClass = $this.attr('data-class');

        if (tips && !$(this).hasClass(tips[1])) {
          removals = true;
          $this.remove();
          return;
        }

        if (!itemId && !itemClass || itemId && $document.find('#' + itemId).length || itemClass && $document.find('.' + itemClass).length) {
          return;
        }
        removals = true;
        $this.remove();
      });

      if (removals) {
        var total = $tour.find('li').length;
        if (!total) {
          this.model.set({ tour: [] });
        }

        $tour.find('li').each(function (index) {
          var progress = Drupal.t('!tour_item of !total', {
            '!tour_item': index + 1,
            '!total': total
          });
          $(this).find('.tour-progress').text(progress);
        }).eq(-1).attr('data-text', Drupal.t('End tour'));
      }
    }
  });
})(jQuery, Backbone, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function TabbingManager() {
    this.stack = [];
  }

  function TabbingContext(options) {
    $.extend(this, {
      level: null,

      $tabbableElements: $(),

      $disabledElements: $(),

      released: false,

      active: false
    }, options);
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var $elements = $(elements).find(':tabbable').addBack(':tabbable');

      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $elements
      });

      this.stack.push(tabbingContext);

      tabbingContext.activate();

      $(document).trigger('drupalTabbingConstrained', tabbingContext);

      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;

      var $disabledSet = $(':tabbable').not($set);

      tabbingContext.$disabledElements = $disabledSet;

      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);

      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
            $el[0].removeAttribute('tabindex');
          }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });

  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);

        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);

        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);

        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });

    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };

  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,

      isVisible: false,

      contextualCount: 0,

      tabbingContext: null
    },

    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);

      this.listenTo(this, 'change:contextualCount', this.updateVisibility);

      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,

    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));

      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }
        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();

        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },

        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));

      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));

      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
;/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (jQuery && !jQuery.fn.hoverIntent) {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  // default configuration values
  var _cfg = {
    interval: 100,
    sensitivity: 6,
    timeout: 0
  };

  // counter used to generate an ID for each instance
  var INSTANCE_COUNT = 0;

  // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
  var cX, cY;

  // saves the current pointer position coordinates based on the given mousemove event
  var track = function (ev) {
    cX = ev.pageX;
    cY = ev.pageY;
  };

  // compares current and previous mouse positions
  var compare = function (ev,$el,s,cfg) {
    // compare mouse positions to see if pointer has slowed enough to trigger `over` function
    if ( Math.sqrt( (s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY) ) < cfg.sensitivity ) {
      $el.off(s.event,track);
      delete s.timeoutId;
      // set hoverIntent state as active for this element (permits `out` handler to trigger)
      s.isActive = true;
      // overwrite old mouseenter event coordinates with most recent pointer position
      ev.pageX = cX; ev.pageY = cY;
      // clear coordinate data from state object
      delete s.pX; delete s.pY;
      return cfg.over.apply($el[0],[ev]);
    } else {
      // set previous coordinates for next comparison
      s.pX = cX; s.pY = cY;
      // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
      s.timeoutId = setTimeout( function () {compare(ev, $el, s, cfg);} , cfg.interval );
    }
  };

  // triggers given `out` function at configured `timeout` after a mouseleave and clears state
  var delay = function (ev,$el,s,out) {
    delete $el.data('hoverIntent')[s.id];
    return out.apply($el[0],[ev]);
  };

  $.fn.hoverIntent = function (handlerIn,handlerOut,selector) {
    // instance ID, used as a key to store and retrieve state information on an element
    var instanceId = INSTANCE_COUNT++;

    // extend the default configuration and parse parameters
    var cfg = $.extend({}, _cfg);
    if ( $.isPlainObject(handlerIn) ) {
      cfg = $.extend(cfg, handlerIn);
      if ( !$.isFunction(cfg.out) ) {
        cfg.out = cfg.over;
      }
    } else if ( $.isFunction(handlerOut) ) {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
    } else {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
    }

    // A private function for handling mouse 'hovering'
    var handleHover = function (e) {
      // cloned event to pass to handlers (copy required for event object to be passed in IE)
      var ev = $.extend({},e);

      // the current target of the mouse event, wrapped in a jQuery object
      var $el = $(this);

      // read hoverIntent data from element (or initialize if not present)
      var hoverIntentData = $el.data('hoverIntent');
      if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})); }

      // read per-instance state from element (or initialize if not present)
      var state = hoverIntentData[instanceId];
      if (!state) { hoverIntentData[instanceId] = state = { id: instanceId }; }

      // state properties:
      // id = instance ID, used to clean up data
      // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
      // isActive = plugin state, true after `over` is called just until `out` is called
      // pX, pY = previously-measured pointer coordinates, updated at each polling interval
      // event = string representing the namespaced event used for mouse tracking

      // clear any existing timeout
      if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId); }

      // namespaced event used to register and unregister mousemove tracking
      var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent' + instanceId;

      // handle the event, based on its type
      if (e.type === 'mouseenter') {
        // do nothing if already active
        if (state.isActive) { return; }
        // set "previous" X and Y position based on initial entry point
        state.pX = ev.pageX; state.pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $el.off(mousemove,track).on(mousemove,track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        state.timeoutId = setTimeout( function () {compare(ev,$el,state,cfg);} , cfg.interval );
      } else { // "mouseleave"
        // do nothing if not already active
        if (!state.isActive) { return; }
        // unbind expensive mousemove event
        $el.off(mousemove,track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        state.timeoutId = setTimeout( function () {delay(ev,$el,state,cfg.out);} , cfg.timeout );
      }
    };

    // listen for mouseenter and mouseleave
    return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
  };
});
;
(function ($, Drupal) {
  Drupal.behaviors.adminToolbar = {
    attach: function (context, settings) {

      $('a.toolbar-icon', context).removeAttr('title');

      $('.toolbar-tray li.menu-item--expanded, .toolbar-tray ul li.menu-item--expanded .menu-item', context).hoverIntent({
        over: function () {
          // At the current depth, we should delete all "hover-intent" classes.
          // Other wise we get unwanted behaviour where menu items are expanded while already in hovering other ones.
          $(this).parent().find('li').removeClass('hover-intent');
          $(this).addClass('hover-intent');
        },
        out: function () {
          $(this).removeClass('hover-intent');
        },
        timeout: 250
      });

      // Make the toolbar menu navigable with keyboard.
      $('ul.toolbar-menu li.menu-item--expanded a', context).on('focusin', function () {
        $('li.menu-item--expanded', context).removeClass('hover-intent');
        $(this).parents('li.menu-item--expanded').addClass('hover-intent');
      });

      $('ul.toolbar-menu li.menu-item a', context).keydown(function (e) {
        if ((e.shiftKey && (e.keyCode || e.which) == 9)) {
          if ($(this).parent('.menu-item').prev().hasClass('menu-item--expanded')) {
            $(this).parent('.menu-item').prev().addClass('hover-intent');
          }
        }
      });

      $('.toolbar-menu:first-child > .menu-item:not(.menu-item--expanded) a, .toolbar-tab > a', context).on('focusin', function () {
        $('.menu-item--expanded').removeClass('hover-intent');
      });

      $('.toolbar-menu:first-child > .menu-item', context).on('hover', function () {
        $(this, 'a').css("background: #fff;");
      });

      $('ul:not(.toolbar-menu)', context).on({
        mousemove: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        },
        hover: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        }
      });

      // Always hide the dropdown menu on mobile.
      if ($('body:not(.toolbar-fixed) #toolbar-item-administration-tray').hasClass('toolbar-tray-vertical')) {
        $('#toolbar-item-administration').removeClass('is-active');
        $('#toolbar-item-administration-tray').removeClass('is-active');
      };

    }
  };
})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');
      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }

    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }

  function bigPipeProcessPlaceholderReplacement(index, placeholderReplacement) {
    var placeholderId = placeholderReplacement.getAttribute('data-big-pipe-replacement-for-placeholder-with-id');
    var content = this.textContent.trim();

    if (typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined') {
      var response = mapTextContentToAjaxResponse(content);

      if (response === false) {
        $(this).removeOnce('big-pipe');
      } else {
        var ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false
        });

        ajaxObject.success(response, 'success');
      }
    }
  }

  var interval = drupalSettings.bigPipeInterval || 50;

  var timeoutID = void 0;

  function bigPipeProcessDocument(context) {
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    $(context).find('script[data-big-pipe-replacement-for-placeholder-with-id]').once('big-pipe').each(bigPipeProcessPlaceholderReplacement);

    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(function () {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  bigPipeProcess();

  $(window).on('load', function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    bigPipeProcessDocument(document);
  });
})(jQuery, Drupal, drupalSettings);;
