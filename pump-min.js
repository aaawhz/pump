(function(E){if(E.pump){return}var e=document;var i=e.head||e.getElementsByTagName("head")[0]||e.documentElement;var t=!+"\v1";var a=i.getElementsByTagName("base")[0];var b=/\.jpg|jpeg|png|gif|bmp(?:\?|$)/i;var h=/\.css(?:\?|$)/i;var I=/loaded|complete|undefined/;var C=e.createElement("script").async===true||"MozAppearance" in e.documentElement.style||window.opera;var A;var n;var H=Array.prototype;var d=Object.prototype.toString;var k=function(L){return d.call(L)==="[object Function]"};var g=function(L){return d.call(L)==="[object String]"};var q=function(L){return d.call(L)==="[object Array]"};var z=function(L,S,O,N,R){var T=h.test(L);var P=b.test(L);var M=P?(new Image()):document.createElement(T?"link":"script");if(!P&&O){var Q=k(O)?O(L):O;Q&&(M.charset=Q)}F(M,S||G);if(P){M.src=L;return}if(T){M.rel="stylesheet";M.href=L}else{M.async=N?"async":false;M.type="text/"+(R||"javascript");M.src=L}A=M;a?i.insertBefore(M,a):i.appendChild(M);A=null};function F(L,M){if(L.nodeName==="IMG"){D(L,M);return}if(L.nodeName==="SCRIPT"){c(L,M)}else{K(L,M)}}function f(L){if(t){L.removeNode()}else{if(L&&L.parentNode){L.parentNode.removeChild(L)}}}function D(L,M){L.onload=L.onerror=function(){L.onload=L.onerror=null;f(L);L=undefined;M()}}function c(L,M){L.onload=L.onerror=L.onreadystatechange=function(){if(I.test(L.readyState)){L.onload=L.onerror=L.onreadystatechange=null;f(L);L=undefined;M()}}}function K(L,M){if(o||m){setTimeout(function(){B(L,M)},1)}else{L.onload=L.onerror=function(){L.onload=L.onerror=null;L=undefined;M()}}}function B(N,O){var L;if(o){if(N.sheet){L=true}}else{if(N.sheet){try{if(N.sheet.cssRules){L=true}}catch(M){if(M.name==="NS_ERROR_DOM_SECURITY_ERR"){L=true}}}}setTimeout(function(){if(L){O()}else{B(N,O)}},1)}function G(){}function l(){if(document.currentScript){return document.currentScript}else{if(document.attachEvent){if(A){return A}if(n&&n.readyState==="interactive"){return n}var M=i.getElementsByTagName("script");for(var O=0;O<M.length;O++){var N=M[O];if(N.readyState==="interactive"){n=N;return N}}}else{var L;try{makeReferenceError}catch(P){L=P.stack}if(!L){return undefined}var P=L.indexOf(" at ")!==-1?" at ":"@";while(L.indexOf(P)!==-1){L=L.substring(L.indexOf(P)+P.length)}L=L.replace(/:\d+:\d+$/ig,"");var M=document.getElementsByTagName("script");for(var O=M.length-1;O>-1;O--){if(M[O].src===L){return M[O]}}}}}function J(){var L=l();if(!L){return""}return(L.hasAttribute?L.src:L.getAttribute("src",4))}var u=navigator.userAgent;var o=Number(u.replace(/.*AppleWebKit\/(\d+)\..*/,"$1"))<536;var m=u.indexOf("Firefox")>0&&!("onload" in document.createElement("link"));function j(Q){var M=false,P=true,S=E.document,R=S.documentElement,V=S.addEventListener?"addEventListener":"attachEvent",T=S.addEventListener?"removeEventListener":"detachEvent",L=S.addEventListener?"":"on",U=function(W){if(W.type=="readystatechange"&&S.readyState!="complete"){return}(W.type=="load"?E:S)[T](L+W.type,U,false);if(!M&&(M=true)){Q.call(E,W.type||W)}},O=function(){try{R.doScroll("left")}catch(W){setTimeout(O,50);return}U("poll")};if(S.readyState=="complete"){Q.call(E,"lazy")}else{if(S.createEventObject&&R.doScroll){try{P=!E.frameElement}catch(N){}if(P){O()}}S[V](L+"DOMContentLoaded",U,false);S[V](L+"readystatechange",U,false);E[V](L+"load",U,false)}}function x(){var L=0,M;if(r.length){for(;M=r[L++];){M()}}}var w=[],r=[],s={},y={charset:"gbk",type:"order"};var v=function(L,S){var Q=arguments,M=w.length,P=M-1,R=w[P],N=y.charset,O=l(),U;var T=function(V){if(M==0){V();return}if(J()){V();return}if(R){R.loaded?V():R.callChain.push(V);return}V()};if(!k(L)&&!g(L)){return}if(k(L)){S=L;T(S);return}S||(S=G);if(Q.length===1){return s[L]&&s[L].exports}s[L]={init:function(){var V=s[L].exports;S(V);return V},exports:{}};U=s[L].init;T(U)};var p=function(O){var N=O.callChain,M=N.length;for(var L=0;L<M;L++){N[L].call(E)}O.called=true};v.executeOrder=function(O,Q){var N,P=y.charset;var M=function(){var U=w[N],T=w.length,S=w[N-1];U.loaded=true;if(N==0||(S&&S.called)){p(U);for(var R=N;w[R++];){if(w[R]&&w[R].loaded){p(w[R])}else{break}}}};var L=function(){z(O,function(){current.loaded=true;z(O,M,null,P)},y.charset,"cache")};w.push({url:O,callChain:[Q],loaded:false,called:false});N=w.length-1;C?z(O,function(){p(w[N])},y.charset):preload()};v.executeNow=function(L,N,M){z(L,N,y.charset,true)};v.load=function(N,O,M){var L;if(g(O)){M=O;O=G}if(arguments.length==1){O=G}M=M||y.type;L="execute"+M.charAt(0).toUpperCase()+M.substring(1);return v[L]&&v[L].call(E,N,O,y.charset)};v.ready=function(L,M){if(k(L)&&arguments.length==1){M=L}r.push(function(){v(L,M)})};v.clean=function(){w=[];s=[];r=[]};j(function(){x()});v.modules=s;v.config=y;E.pump=v})(window);
