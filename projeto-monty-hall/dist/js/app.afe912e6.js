(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e73":function(t,e,n){t.exports=n.p+"img/Lovepik_com-401489059-vector-gift-box.48c8ca85.png"},"1cc6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("Problema de Monty Hall")]),e("div",{staticClass:"form"},[t.started?t._e():e("div",[e("label",{attrs:{for:"portsAmount"}},[t._v("Quantas portas? ")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.portsAmount,expression:"portsAmount",modifiers:{number:!0}}],attrs:{type:"text",id:"portAmount",size:"3"},domProps:{value:t.portsAmount},on:{input:function(e){e.target.composing||(t.portsAmount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t.started?t._e():e("div",[e("label",{attrs:{for:"selectedPort"}},[t._v("Qual porta é premiada? ")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.selectedPort,expression:"selectedPort",modifiers:{number:!0}}],attrs:{type:"text",id:"selectedPort",size:"3"},domProps:{value:t.selectedPort},on:{input:function(e){e.target.composing||(t.selectedPort=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t.started?t._e():e("button",{on:{click:function(e){t.started=!0}}},[t._v("Iniciar")]),t.started?e("button",{on:{click:function(e){t.started=!1}}},[t._v("Reiniciar")]):t._e()]),t.started?e("div",{staticClass:"doors"},t._l(t.portsAmount,(function(n){return e("div",{key:n},[e("Door",{attrs:{hasGift:n==t.selectedPort,number:n}})],1)})),0):t._e()])},s=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"door-area"},[e("div",{staticClass:"door-frame",class:{selected:t.selected&&!t.open}},[t.open&&t.hasGift?e("Gift"):t._e()],1),e("div",{staticClass:"door",class:{open:t.open},on:{click:function(e){t.selected=!t.selected}}},[e("div",{staticClass:"number",class:{selected:t.selected}},[t._v(t._s(t.number))]),e("div",{staticClass:"knob",class:{selected:t.selected},on:{click:function(e){e.stopPropagation(),t.open=!0}}})])])},i=[],c=function(){var t=this;t._self._c;return t._m(0)},u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"gift"},[e("img",{staticClass:"img-gift",attrs:{src:n("0e73"),alt:"imagem de dois presentes"}})])}],l={name:"Gift"},d=l,p=(n("679a"),n("2877")),f=Object(p["a"])(d,c,u,!1,null,null,null),m=f.exports,v={name:"Door",components:{Gift:m},props:{number:{},hasGift:{type:Boolean}},data:function(){return{open:!1,selected:!1}}},b=v,_=(n("b79b"),Object(p["a"])(b,a,i,!1,null,null,null)),g=_.exports,h={name:"App",components:{Door:g},data:function(){return{started:!1,portsAmount:3,selectedPort:null}}},y=h,P=(n("b69e"),Object(p["a"])(y,o,s,!1,null,null,null)),x=P.exports;new r["a"]({render:function(t){return t(x)}}).$mount("#app")},"679a":function(t,e,n){"use strict";n("fd40")},"6a6e":function(t,e,n){},b69e:function(t,e,n){"use strict";n("1cc6")},b79b:function(t,e,n){"use strict";n("6a6e")},fd40:function(t,e,n){}});
//# sourceMappingURL=app.afe912e6.js.map