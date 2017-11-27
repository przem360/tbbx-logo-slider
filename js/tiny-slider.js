var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=k.style.overflow,e.style.background="",e.style.overflow=k.style.overflow="hidden",k.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),k.style.overflow=t,k.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function d(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function f(e,t){return e.className.indexOf(t)>=0}function v(e,t){f(e,t)||(e.className+=" "+t)}function h(e,t){f(e,t)&&(e.className=e.className.replace(t,""))}function p(e,t){return e.hasAttribute(t)}function m(e,t){return e.getAttribute(t)}function y(e){return void 0!==e.item}function g(e,t){if(e=y(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function b(e,t){e=y(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function x(e){p(e,"hidden")||g(e,{hidden:""})}function T(e){p(e,"hidden")&&b(e,"hidden")}function E(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function C(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function w(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function D(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&W;e.addEventListener(n,t[n],i)}}function N(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&W;e.removeEventListener(n,t[n],i)}}function O(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function A(e,t,n,i,a,r,o){function s(){r-=l,u+=d,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var k=document.documentElement,P=!1;try{var M=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,M)}catch(e){}var W=!!P&&{passive:!0},I=navigator.userAgent,S=!0,L=localStorage;try{L.tnsApp?L.tnsApp!==I&&(L.tnsApp=I,["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){L.removeItem(e)})):L.tnsApp=I}catch(e){S=!1}var H=document,z=window,B={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},R=t(L.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),S),j=t(L.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),S),q=t(L.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),S),G=t(L.tTf)||n("tTf",C(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),S),F=t(L.tTDu)||n("tTDu",C(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),S),U=t(L.tTDe)||n("tTDe",C(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),S),X=t(L.tADu)||n("tADu",C(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),S),V=t(L.tADe)||n("tADe",C(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),S),Y=t(L.tTE)||n("tTE",w(F,"Transition"),S),K=t(L.tAE)||n("tAE",w(X,"Animation"),S);return q||(j=!1),function(t){function n(){return z.innerWidth||H.documentElement.clientWidth||H.body.clientWidth}function a(e){var n=t[e];return!n&&lt&&st.indexOf(e)>=0&&lt.forEach(function(t){ot[t][e]&&(n=!0)}),n}function r(e,n){n=n?n:ut;var i,a={slideBy:"page",edgePadding:!1,autoHeight:!0};if(!Ve&&e in a)i=a[e];else if("items"===e&&r("fixedWidth"))i=Math.floor(rt/(r("fixedWidth")+r("gutter")));else if("autoHeight"===e&&"outer"===yt)i=!0;else if(i=t[e],lt&&st.indexOf(e)>=0)for(var o=0,s=lt.length;o<s;o++){var l=lt[o];if(!(n>=l))break;e in ot[l]&&(i=ot[l][e])}return"slideBy"===e&&"page"===i&&(i=r("items")),i}function o(e){return R?R+"("+100*e+"% / "+Pt+")":100*e/Pt+"%"}function y(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(rt%(n+t)+t)/2+"px":$e?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r="-"+t+"px",o=$e?r+" 0 0":"0 "+r+" 0";i="margin: 0 "+o+";"}return i}function C(e,t,n){return e?(e+t)*Pt+"px":R?R+"("+100*Pt+"% / "+n+")":100*Pt/n+"%"}function w(e,t,n){var i="";if($e){if(i="width:",e)i+=e+t+"px";else{var a=Ve?Pt:n;i+=R?R+"(100% / "+a+")":100/a+"%"}i+=Jt+";"}return i}function k(e){var t="";if(e!==!1){t=($e?"padding-":"margin-")+($e?"right":"bottom")+": "+e+"px;"}return t}function P(e){e=e||z.event,clearTimeout(vt),vt=setTimeout(function(){var t=n();ut!==t&&(ut=t,M(),"outer"===yt&&Ft.emit("outerResized",qe(e)))},100)}function M(){var e=ct,t=Ht,n=pt,i=Qt;if(rt=_e.clientWidth,Ze=et.clientWidth,lt&&W(),e!==ct||xt){var a=Tt,o=Dt,s=xt,u=bt,d=gt,f=Yt;if(pt=r("items"),mt=r("slideBy"),Yt=r("disable"),Qt=!!Yt||!!Kt&&at<=pt,pt!==n&&(jt=Pt-pt-Bt,Kn()),Yt!==f&&S(Yt),Qt!==i&&(Qt&&(Ht=Ve?kt:0),I()),e!==ct&&(Et=r("speed"),bt=r("edgePadding"),gt=r("gutter"),xt=r("fixedWidth"),Yt||xt===s||de(),(Dt=r("autoHeight"))!==o&&(Dt||(et.style.height=""))),Tt=!Qt&&r("arrowKeys"),Tt!==a&&(Tt?D(H,tn):N(H,tn)),rn){var v=pn,h=mn;pn=!Qt&&r("controls"),mn=r("controlsText"),pn!==v&&(pn?T(yn):x(yn)),mn!==h&&(dn.innerHTML=mn[0],fn.innerHTML=mn[1])}if(on){var p=bn;bn=!Qt&&r("nav"),bn!==p&&(bn?(T(xn),je()):x(xn))}if(ln){var m=Gn;Gn=!Qt&&r("touch"),Gn!==m&&Ve&&(Gn?D(tt,nn):N(tt,nn))}if(cn){var g=Vn;Vn=!Qt&&r("mouseDrag"),Vn!==g&&Ve&&(Vn?D(tt,an):N(tt,an))}if(sn){var b=An,E=Wn,O=zn,A=Mn;if(Qt?An=Wn=zn=!1:(An=r("autoplay"),An?(Wn=r("autoplayHoverPause"),zn=r("autoplayResetOnVisibility")):Wn=zn=!1),Mn=r("autoplayText"),kn=r("autoplayTimeout"),An!==b&&(An?(In&&T(In),Sn||Te()):(In&&x(In),Sn&&Ee())),Wn!==E&&(Wn?D(tt,_t):N(tt,_t)),zn!==O&&(zn?D(H,en):N(H,en)),In&&Mn!==A){var P=An?1:0,M=In.innerHTML,L=M.length-A[P].length;M.substring(L)===A[P]&&(In.innerHTML=M.substring(0,L)+Mn[P])}}if(!q){if(Qt||bt===u&&gt===d||(et.style.cssText=y(bt,gt,xt)),Ve&&$e&&(xt!==s||gt!==d||pt!==n)&&(tt.style.width=C(xt,gt,pt)),$e&&(pt!==n||gt!==d)){var z=w(xt,gt,pt)+k(gt);Nt.removeRule(c(Nt)-1),l(Nt,"#"+Vt+" > .tns-item",z,c(Nt))}xt||Ht!==t||ve(0)}Ht!==t&&(Ft.emit("indexChanged",qe()),ve(0),zt=Ht),pt!==n&&(_(),Z(),navigator.msMaxTouchPoints&&ne())}$e||Yt||(te(),Be(),de()),xt&&bt&&(Qt||rt<=xt+gt?"0px"!==et.style.margin&&(et.style.margin="0px"):et.style.cssText=y(bt,gt,xt)),Z()}function W(){ct=0,lt.forEach(function(e,t){ut>=e&&(ct=t+1)})}function I(){if(kt){var e="tns-transparent";if(Qt){if(!f(it[0],e)){bt&&(et.style.margin="0px");for(var t=kt;t--;)v(it[t],e),v(it[Pt-t-1],e)}}else if(bt&&!xt&&q&&et.style.margin&&(et.style.margin=""),f(it[0],e))for(var t=kt;t--;)h(it[t],e),h(it[Pt-t-1],e)}}function S(e){var t=it.length;if(e){if(Nt.disabled=!0,tt.className=tt.className.replace(Xt.substring(1),""),tt.style="",wt)for(var n=kt;n--;)Ve&&x(it[n]),x(it[t-n-1]);if($e&&Ve||(et.style=""),!Ve)for(var i=Ht;i<Ht+at;i++){var a=it[i];a.style="",h(a,Ye),h(a,Je)}}else{if(Nt.disabled=!1,tt.className+=Xt,$e||te(),de(),wt)for(var n=kt;n--;)Ve&&T(it[n]),T(it[t-n-1]);if(!Ve)for(var i=Ht;i<Ht+at;i++){var a=it[i],r=i<Ht+pt?Ye:Je;a.style.left=100*(i-Ht)/pt+"%",v(a,r)}}}function L(){Sn&&(Ee(),Ln=!0)}function Q(){!Sn&&Ln&&(Te(),Ln=!1)}function J(){if(Ot&&!Yt){var e=Ht,t=Ht+pt;for(bt&&(e-=1,t+=1);e<t;e++)[].forEach.call(it[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[Y]=function(e){e.stopPropagation()},D(e,t),f(e,"loaded")||(e.src=m(e,"data-src"),v(e,"loaded"))})}}function Z(){if(Dt&&!Yt){for(var e=[],t=Ht;t<Ht+pt;t++)[].forEach.call(it[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?ee():$(e)}}function $(e){e.forEach(function(t,n){E(t)&&e.splice(n,1)}),0===e.length?ee():setTimeout(function(){$(e)},16)}function _(){J(),ie(),le(),je(),ae()}function ee(){for(var e,t=[],n=Ht;n<Ht+pt;n++)t.push(it[n].offsetHeight);e=Math.max.apply(null,t),et.style.height!==e&&(F&&ce(Et),et.style.height=e+"px")}function te(){ft=[0];for(var e,t=it[0].getBoundingClientRect().top,n=1;n<Pt;n++)e=it[n].getBoundingClientRect().top,ft.push(e-t)}function ne(){_e.style.msScrollSnapPointsX="snapInterval(0%, "+100/pt+"%)"}function ie(){for(var e=Pt;e--;){var t=it[e];e>=Ht&&e<Ht+pt?p(t,"tabindex")&&(g(t,{"aria-hidden":"false"}),b(t,["tabindex"]),v(t,un)):(p(t,"tabindex")||g(t,{"aria-hidden":"true",tabindex:"-1"}),f(t,un)&&h(t,un))}}function ae(){if(bn&&(wn=Cn!==-1?Cn:(Ht-Bt)%at,Cn=-1,wn!==Dn)){var e=gn[Dn],t=gn[wn];g(e,{tabindex:"-1","aria-selected":"false"}),g(t,{tabindex:"0","aria-selected":"true"}),h(e,Nn),v(t,Nn)}}function re(e){return"button"===e.nodeName.toLowerCase()}function oe(e){return"true"===e.getAttribute("aria-disabled")}function se(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function le(){if(pn&&!wt){var e=vn?dn.disabled:oe(dn),t=hn?fn.disabled:oe(fn),n=Ht===Rt,i=!Ct&&Ht===jt;n&&!e&&se(vn,dn,!0),!n&&e&&se(vn,dn,!1),i&&!t&&se(hn,fn,!0),!i&&t&&se(hn,fn,!1)}}function ce(e,t){e=e?e/1e3+"s":"",t=t||tt,t.style[F]=e,Ve||(t.style[X]=e),$e||(et.style[F]=e)}function ue(){var e;if($e)if(xt)e=-(xt+gt)*Ht+"px";else{var t=G?Pt:pt;e=100*-Ht/t+"%"}else e=-ft[Ht]+"px";return e}function de(e){e||(e=ue()),tt.style[It]=St+e+Lt}function fe(e,t,n,i){for(var a=e,r=e+pt;a<r;a++){var o=it[a];i||(o.style.left=100*(a-Ht)/pt+"%"),F&&ce(Et,o),Qe&&U&&(o.style[U]=o.style[V]=Qe*(a-e)/1e3+"s"),h(o,t),v(o,n),i&&At.push(o)}}function ve(e,t){void 0===e&&(e=Et),F&&ce(e),Qn(e,t)}function he(e){Wt&&Kn(),(Ht!==zt||e)&&(Ft.emit("indexChanged",qe()),Ft.emit("transitionStart",qe()),qt=!0,ve())}function pe(e){return e.toLowerCase().replace(/-/g,"")}function me(e){if(Ve||qt){if(Ft.emit("transitionEnd",qe(e)),!Ve&&At.length>0)for(var t=0;t<pt;t++){var n=At[t];n.style.left="",F&&ce(0,n),Qe&&U&&(n.style[U]=n.style[V]=""),h(n,Ke),v(n,Je)}if(!e||!Ve&&e.target.parentNode===tt||e.target===tt&&pe(e.propertyName)===pe(It)){if(!Wt){var i=Ht;Kn(),Ht!==i&&(Ft.emit("indexChanged",qe()),F&&ce(0),de())}Z(),"inner"===yt&&Ft.emit("innerLoaded",qe()),qt=!1,Dn=wn,zt=Ht}}}function ye(e){if(!Qt)if("prev"===e)ge(null,-1);else if("next"===e)ge(null,1);else if(!qt){var t=Ht%at,n=0;if(!wt&&a("edgePadding")&&t--,t<0&&(t+=at),"first"===e)n=-t;else if("last"===e)n=at-pt-t;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var i=e%at;i<0&&(i+=at),!wt&&bt&&(i+=1),n=i-t}Ht+=n,Ht%at!=zt%at&&he()}}function ge(e,t){if(!qt){if(!t){e=e||z.event;for(var n=e.target||e.srcElement;n!==yn&&[dn,fn].indexOf(n)<0;)n=n.parentNode;n===dn?t=-1:n===fn&&(t=1)}t===-1?Ht-=mt:1===t&&(Ct&&Ht===jt?ye(0):Ht+=mt),he()}}function be(e){if(!qt){e=e||z.event;for(var t,n=e.target||e.srcElement;n!==xn&&!p(n,"data-nav");)n=n.parentNode;p(n,"data-nav")&&(t=Cn=[].indexOf.call(gn,n),ye(t))}}function xe(e,t){g(In,{"data-action":e}),In.innerHTML=Hn[0]+e+Hn[1]+t}function Te(){we(),In&&xe("stop",Mn[1]),Sn=!0}function Ee(){Ce(),In&&xe("start",Mn[0]),Sn=!1}function Ce(){Sn="paused",clearInterval(On)}function we(){Sn!==!0&&(clearInterval(On),On=setInterval(function(){ge(null,Pn)},kn))}function De(){Sn?Ee():Te()}function Ne(){Bn!=H.hidden&&Sn!==!1&&(H.hidden?Ce():we()),Bn=H.hidden}function Oe(e){switch(e=e||z.event,e.keyCode){case B.LEFT:ge(null,-1);break;case B.RIGHT:ge(null,1)}}function Ae(e){switch(e=e||z.event,e.keyCode){case B.LEFT:case B.UP:case B.PAGEUP:dn.disabled||ge(null,-1);break;case B.RIGHT:case B.DOWN:case B.PAGEDOWN:fn.disabled||ge(null,1);break;case B.HOME:ye(0);break;case B.END:ye(at-1)}}function ke(e){e.focus()}function Pe(e){function n(e){return t.navContainer?e:Tn[e]}var i=H.activeElement;if(p(i,"data-nav")){e=e||z.event;var a=e.keyCode,r=[].indexOf.call(gn,i),o=Tn.length,s=Tn.indexOf(r);switch(t.navContainer&&(o=at,s=r),a){case B.LEFT:case B.PAGEUP:s>0&&ke(gn[n(s-1)]);break;case B.UP:case B.HOME:s>0&&ke(gn[n(0)]);break;case B.RIGHT:case B.PAGEDOWN:s<o-1&&ke(gn[n(s+1)]);break;case B.DOWN:case B.END:s<o-1&&ke(gn[n(o-1)]);break;case B.ENTER:case B.SPACE:Cn=r,ye(r)}}}function Me(){ve(0,tt.scrollLeft()),zt=Ht}function We(e){return e.target||e.srcElement}function Ie(e){return e.type.indexOf("touch")>=0}function Se(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Le(e){if(Xn=0,ht=!1,Fn=Un=null,!qt){e=e||z.event;var t;Ie(e)?(t=e.changedTouches[0],Ft.emit("touchStart",qe(e))):(t=e,Se(e),Ft.emit("dragStart",qe(e))),Fn=parseInt(t.clientX),Un=parseInt(t.clientY),Rn=parseFloat(tt.style[It].replace(St,"").replace(Lt,""))}}function He(e){if(!qt&&null!==Fn){e=e||z.event;var n;if(Ie(e)?n=e.changedTouches[0]:(n=e,Se(e)),jn=parseInt(n.clientX)-Fn,qn=parseInt(n.clientY)-Un,0===Xn&&(Xn=d(u(qn,jn),15)===t.axis),Xn){Ie(e)?Ft.emit("touchMove",qe(e)):(Yn||(Yn=!0),Ft.emit("dragMove",qe(e))),ht||(ht=!0);var i=Rn;if($e)if(xt)i+=jn,i+="px";else{var a=G?jn*pt*100/(Ze*Pt):100*jn/Ze;i+=a,i+="%"}else i+=qn,i+="px";G&&ce(0),tt.style[It]=St+i+Lt}}}function ze(e){if(!qt&&ht){e=e||z.event;var t;Ie(e)?(t=e.changedTouches[0],Ft.emit("touchEnd",qe(e))):(t=e,Ft.emit("dragEnd",qe(e))),jn=parseInt(t.clientX)-Fn,qn=parseInt(t.clientY)-Un;var n=Boolean($e?jn:qn);if(Xn=0,ht=!1,Fn=Un=null,$e){var i=-jn*pt/Ze;i=jn>0?Math.floor(i):Math.ceil(i),Ht+=i}else{var a=-(Rn+qn);if(a<=0)Ht=Rt;else if(a>=ft[ft.length-1])Ht=jt;else{var r=0;do{r++,Ht=qn<0?r+1:r}while(r<Pt&&a>=ft[r+1])}}if(he(n),Yn){Yn=!1;var o=We(e);D(o,{click:function e(t){Se(t),N(o,{click:e})}})}}}function Be(){et.style.height=ft[Ht+pt]-ft[Ht]+"px"}function Re(){Tn=[];for(var e=!wt&&bt?Ht-1:Ht,t=e%at%pt;t<at;)!wt&&t+pt>at&&(t=at-pt),Tn.push(t),t+=pt;(wt&&Tn.length*pt<at||!wt&&Tn[0]>0)&&Tn.unshift(0)}function je(){bn&&!t.navContainer&&Tn.indexOf(Ht%at)<0&&(Re(),Tn!==En&&(En.length>0&&En.forEach(function(e){x(gn[e])}),Tn.length>0&&Tn.forEach(function(e){T(gn[e])}),En=Tn))}function qe(e){return{container:tt,slideItems:it,navContainer:xn,navItems:gn,controlsContainer:yn,hasControls:rn,prevButton:dn,nextButton:fn,items:pt,slideBy:mt,cloneCount:kt,slideCount:at,slideCountNew:Pt,index:Ht,indexCached:zt,navCurrentIndex:wn,navCurrentIndexCached:Dn,visibleNavIndexes:Tn,visibleNavIndexesCached:En,event:e||{}}}if(t=e({container:H.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,freezable:!0,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=H.querySelector(t[e]))}),t.container&&t.container.nodeName&&!(t.container.children.length<2)){if(t.responsive){var Ge={},Fe=t.responsive;for(var Ue in Fe){var Xe=Fe[Ue];Ge[Ue]="number"==typeof Xe?{items:Xe}:Xe}t.responsive=Ge,Ge=null,0 in t.responsive&&(t=e(t,t.responsive[0]),delete t.responsive[0])}var Ve="carousel"===t.mode;if(!Ve){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var Ye="tns-fadeIn",Ke="tns-fadeOut",Qe=!1,Je=t.animateNormal||"tns-normal";Y&&K&&(Ye=t.animateIn||Ye,Ke=t.animateOut||Ke,Qe=t.animateDelay||Qe)}var Ze,$e="horizontal"===t.axis,_e=H.createElement("div"),et=H.createElement("div"),tt=t.container,nt=tt.parentNode,it=tt.children,at=it.length,rt=nt.clientWidth,ot=t.responsive,st=[],lt=!1,ct=0,ut=n();if(ot){lt=Object.keys(ot).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),lt.forEach(function(e){st=st.concat(Object.keys(ot[e]))});var dt=[];st.forEach(function(e){dt.indexOf(e)<0&&dt.push(e)}),st=dt,W()}var ft,vt,ht,pt=r("items"),mt="page"===r("slideBy")?pt:r("slideBy"),yt=t.nested,gt=r("gutter"),bt=r("edgePadding"),xt=r("fixedWidth"),Tt=r("arrowKeys"),Et=r("speed"),Ct=t.rewind,wt=!Ct&&t.loop,Dt=r("autoHeight"),Nt=s(),Ot=t.lazyload,At=[],kt=wt?2*at:a("edgePadding")?1:0,Pt=Ve?at+2*kt:at+kt,Mt=!(!xt||wt||bt),Wt=!Ve||!wt,It=$e?"left":"top",St="",Lt="",Ht=Ve?kt:0,zt=Ht,Bt=!wt&&a("edgePadding")?1:0,Rt=Bt,jt=Pt-pt-Bt,qt=!1,Gt=t.onInit,Ft=new O,Ut=tt.id,Xt=" tns-slider tns-"+t.mode,Vt=tt.id||i(),Yt=r("disable"),Kt=t.freezable,Qt=!!Yt||!!Kt&&at<=pt,Jt="inner"===yt?" !important":"",Zt={click:ge,keydown:Ae},$t={click:be,keydown:Pe},_t={mouseover:L,mouseout:Q},en={visibilitychange:Ne},tn={keydown:Oe},nn={touchstart:Le,touchmove:He,touchend:ze,touchcancel:ze},an={mousedown:Le,mousemove:He,mouseup:ze,mouseleave:ze},rn=a("controls"),on=a("nav"),sn=a("autoplay"),ln=a("touch"),cn=a("mouseDrag"),un="tns-slide-active";if(rn)var dn,fn,vn,hn,pn=r("controls"),mn=r("controlsText"),yn=t.controlsContainer;if(on)var gn,bn=r("nav"),xn=t.navContainer,Tn=[],En=Tn,Cn=-1,wn=0,Dn=0,Nn="tns-nav-active";if(sn)var On,An=r("autoplay"),kn=r("autoplayTimeout"),Pn="forward"===t.autoplayDirection?1:-1,Mn=r("autoplayText"),Wn=r("autoplayHoverPause"),In=t.autoplayButton,Sn=!1,Ln=!1,Hn=["<span class='tns-visually-hidden'>"," animation</span>"],zn=r("autoplayResetOnVisibility"),Bn=!1;if(ln)var Rn,jn,qn,Gn=r("touch"),Fn=null,Un=null,Xn=0;if(cn)var Vn=r("mouseDrag"),Yn=!1;Qt&&(pn=bn=Gn=Vn=Tt=An=Wn=zn=!1),G&&(It=G,St="translate",St+=$e?"X(":"Y(",Lt=")"),function(){_e.appendChild(et),nt.insertBefore(_e,tt),et.appendChild(tt),Ze=et.clientWidth;var e="tns-outer",n="tns-inner";if(Ve?$e&&(a("edgePadding")||a("gutter")&&!t.fixedWidth)?e+=" tns-ovh":n+=" tns-ovh":a("gutter")&&(e+=" tns-ovh"),_e.className=e,et.className=n,et.id=Vt+"-iw",Dt&&(et.className+=" tns-ah",et.style[F]=Et/1e3+"s"),""===tt.id&&(tt.id=Vt),Xt+=j?" tns-subpixel":" tns-no-subpixel",Xt+=R?" tns-calc":" tns-no-calc",Ve&&(Xt+=" tns-"+t.axis),tt.className+=Xt,Ve&&Y){var i={};i[Y]=me,D(tt,i)}e=n=null;for(var s=0;s<at;s++){var u=it[s];u.id||(u.id=Vt+"-item"+s),v(u,"tns-item"),!Ve&&Je&&v(u,Je),g(u,{"aria-hidden":"true",tabindex:"-1"})}if(wt||bt){for(var d=H.createDocumentFragment(),f=H.createDocumentFragment(),p=kt;p--;){var m=p%at,T=it[m].cloneNode(!0);if(b(T,"id"),f.insertBefore(T,f.firstChild),Ve){var E=it[at-1-m].cloneNode(!0);b(E,"id"),d.appendChild(E)}}tt.insertBefore(d,tt.firstChild),tt.appendChild(f),it=tt.children}for(var N=Ht;N<Ht+Math.min(at,pt);N++){var u=it[N];g(u,{"aria-hidden":"false"}),b(u,["tabindex"]),v(u,un),Ve||(u.style.left=100*(N-Ht)/pt+"%",v(u,Ye),h(u,Je))}if(Ve&&$e)if(j){var O=z.getComputedStyle(it[0]).fontSize;O.indexOf("em")>0&&(O=16*parseFloat(O)+"px"),l(Nt,"#"+Vt,"font-size:0;",c(Nt)),l(Nt,"#"+Vt+" > .tns-item","font-size:"+O+";",c(Nt))}else[].forEach.call(it,function(e,t){e.style.marginLeft=o(t)});if(q){var A=y(t.edgePadding,t.gutter,t.fixedWidth);l(Nt,"#"+Vt+"-iw",A,c(Nt)),Ve&&$e&&(A="width:"+C(t.fixedWidth,t.gutter,t.items),l(Nt,"#"+Vt,A,c(Nt))),($e||t.gutter)&&(A=w(t.fixedWidth,t.gutter,t.items)+k(t.gutter),l(Nt,"#"+Vt+" > .tns-item",A,c(Nt)))}else if(et.style.cssText=y(bt,gt,xt),Ve&&$e&&(tt.style.width=C(xt,gt,pt)),$e||gt){var A=w(xt,gt,pt)+k(gt);l(Nt,"#"+Vt+" > .tns-item",A,c(Nt))}if($e||Yt||(te(),Be()),ot&&q&&lt.forEach(function(e){var t=ot[e],n="",i="",o="",s="",l=r("items",e),c=r("fixedWidth",e),u=r("edgePadding",e),d=r("gutter",e);("edgePadding"in t||"gutter"in t)&&(i="#"+Vt+"-iw{"+y(u,d,c)+"}"),Ve&&$e&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(o="#"+Vt+"{width:"+C(c,d,l)+"}"),("fixedWidth"in t||a("fixedWidth")&&"gutter"in t||!Ve&&"items"in t)&&(s+=w(c,d,l)),"gutter"in t&&(s+=k(d)),s.length>0&&(s="#"+Vt+" > .tns-item{"+s+"}"),n=i+o+s,n.length>0&&Nt.insertRule("@media (min-width: "+e/16+"em) {"+n+"}",Nt.cssRules.length)}),Ve&&!Yt&&de(),navigator.msMaxTouchPoints&&(v(_e,"ms-touch"),D(_e,{scroll:Me}),ne()),on){var W=Ve?kt:0;if(xn)g(xn,{"aria-label":"Carousel Pagination"}),gn=xn.children,[].forEach.call(gn,function(e,t){g(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":it[W+t].id})});else{for(var L="",N=0;N<at;N++)L+='<button data-nav="'+N+'" tabindex="-1" aria-selected="false" aria-controls="'+it[W+N].id+'" hidden type="button"></button>';L='<div class="tns-nav" aria-label="Carousel Pagination">'+L+"</div>",_e.insertAdjacentHTML("afterbegin",L),xn=_e.querySelector(".tns-nav"),gn=xn.children,je()}if(F){var B=F.substring(0,F.length-18).toLowerCase(),A="transition: all "+Et/1e3+"s";B&&(A="-"+B+"-"+A),l(Nt,"[aria-controls^="+Vt+"-item]",A,c(Nt))}g(gn[0],{tabindex:"0","aria-selected":"true"}),v(gn[0],Nn),D(xn,$t),bn||x(xn)}if(sn){var G=An?"stop":"start";In?g(In,{"data-action":G}):t.autoplayButtonOutput&&(et.insertAdjacentHTML("beforebegin",'<button data-action="'+G+'" type="button">'+Hn[0]+G+Hn[1]+Mn[0]+"</button>"),In=_e.querySelector("[data-action]")),In&&D(In,{click:De}),An?(Te(),Wn&&D(tt,_t),zn&&D(tt,en)):In&&x(In)}rn&&(yn?(dn=yn.children[0],fn=yn.children[1],g(yn,{"aria-label":"Carousel Navigation",tabindex:"0"}),g(dn,{"data-controls":"prev"}),g(fn,{"data-controls":"next"}),g(yn.children,{"aria-controls":Vt,tabindex:"-1"})):(_e.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Vt+'" type="button">'+mn[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Vt+'" type="button">'+mn[1]+"</button></div>"),yn=_e.querySelector(".tns-controls"),dn=yn.children[0],fn=yn.children[1]),vn=re(dn),hn=re(fn),wt||se(vn,dn,!0),D(yn,Zt),pn||x(yn)),Gn&&D(tt,nn),Vn&&D(tt,an),Tt&&D(H,tn),"inner"===yt?Ft.on("outerResized",function(){M(),Ft.emit("innerLoaded",qe())}):(D(z,{resize:P}),"outer"===yt&&Ft.on("innerLoaded",Z)),J(),Z(),I(),Ft.on("indexChanged",_),"function"==typeof Gt&&Gt(qe()),"inner"===yt&&Ft.emit("innerLoaded",qe()),Yt&&S(!0)}();var Kn=function(){return wt?function(){var e=Rt+mt,t=jt-mt;if(bt)e+=1,t-=1;else if(xt){var n=gt?gt:0;rt%(xt+n)>n&&(t-=1)}if(Ht>t)for(;Ht>=e+at;)Ht-=at;else if(Ht<e)for(;Ht<=t-at;)Ht+=at}:function(){Ht=Math.max(Rt,Math.min(jt,Ht))}}(),Qn=function(){return Ve?function(e,t){t||(t=ue()),Mt&&Ht===jt&&(t=-((xt+gt)*Pt-Ze)+"px"),F||!e?(de(t),0===Et&&me()):A(tt,It,St,Lt,t,Et,me),$e||Be()}:function(){At=[];var e={};e[Y]=e[K]=me,N(it[zt],e),D(it[Ht],e),fe(zt,Ye,Ke,!0),fe(Ht,Je,Ye),Y&&K&&0!==Et||setTimeout(me,0)}}();return{getInfo:qe,events:Ft,goTo:ye,destroy:function(){if(Nt.disabled=!0,wt)for(var e=kt;e--;)it[0].remove(),it[it.length-1].remove();for(var n=at;n--;){var i=it[n];i.id.indexOf(Vt+"-item")>=0&&(i.id=""),i.classList.remove("tns-item")}if(b(it,["style","aria-hidden","tabindex"]),it=Vt=at=Pt=kt=null,pn&&(N(yn,Zt),t.controlsContainer&&(b(yn,["aria-label","tabindex"]),b(yn.children,["aria-controls","aria-disabled","tabindex"])),yn=dn=fn=null),bn&&(N(xn,$t),t.navContainer&&(b(xn,["aria-label"]),b(gn,["aria-selected","aria-controls","tabindex"])),xn=gn=null),An&&(clearInterval(On),In&&N(In,{click:De}),N(tt,_t),N(tt,en),t.autoplayButton&&b(In,["data-action"])),tt.id=Ut||"",tt.className=tt.className.replace(Xt,""),tt.style="",Ve&&Y){var a={};a[Y]=me,N(tt,a)}N(tt,nn),N(tt,an),nt.insertBefore(tt,_e),_e.remove(),_e=et=tt=null,N(H,tn),N(z,{resize:P})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map