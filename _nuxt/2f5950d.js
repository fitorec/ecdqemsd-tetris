(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{190:function(t,e,r){var content=r(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("a7de93b8",content,!0,{sourceMap:!1})},191:function(t,e,r){"use strict";r(60),r(29),r(34),r(192),r(144);var n=r(93);var o=r(99);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=r(22);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={tipos:[{nombre:"ninguna",color:"Gris",hexaCode:"#333",forma:["    ","    "]},{nombre:"escuadra",color:"Blanco",hexaCode:"#FFF",forma:["   ▇","▇▇▇▇"]},{nombre:"escuadra_invertida",color:"Magenta",hexaCode:"#AA00AA",forma:["▇   ","▇▇▇▇"]},{nombre:"ese",color:"Verde",hexaCode:"#0000AA",forma:["  ▇▇"," ▇▇ "]},{nombre:"zeta",color:"Cyan",hexaCode:"cyan",forma:["▇▇  "," ▇▇ "]},{nombre:"te",color:"Marrón",hexaCode:"#AA5500",forma:["▇▇▇ "," ▇  "]},{nombre:"cuadro",color:"Azul",hexaCode:"#0000AA",forma:[" ▇▇ "," ▇▇ "]}],ficha:function(t){var e=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.tipos[t]);return e.forma=["".padStart(4," ")].concat(c(e.forma),["".padStart(4," ")]).map((function(t){return t.split("").map((function(t){return" "!==t}))})),e.forma=this.rotacionDerecha(e.forma),e},rotacionDerecha:function(t){if(!this.formaValida(t))return null;for(var e=[],i=0;i<4;i+=1)e.push([Boolean(t[3][i]),Boolean(t[2][i]),Boolean(t[1][i]),Boolean(t[0][i])]);return e},rotacionIzquierda:function(t){if(!this.formaValida(t))return null;for(var e=[],i=0;i<4;i+=1)e.push([Boolean(t[0][3-i]),Boolean(t[1][3-i]),Boolean(t[2][3-i]),Boolean(t[3][3-i])]);return e},formaValida:function(t){return Array.isArray(t)&&4===t.length&&Array.isArray(t[0])&&4===t[0].length&&Array.isArray(t[1])&&4===t[1].length&&Array.isArray(t[2])&&4===t[2].length&&Array.isArray(t[3])&&4===t[3].length}}},192:function(t,e,r){"use strict";var n=r(4),o=r(193).start;n({target:"String",proto:!0,forced:r(194)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},193:function(t,e,r){var n=r(9),o=r(143),c=r(11),l=Math.ceil,f=function(t){return function(e,r,f){var d,h,m=String(c(e)),v=m.length,y=void 0===f?" ":String(f),x=n(r);return x<=v||""==y?m:(d=x-v,(h=o.call(y,l(d/y.length))).length>d&&(h=h.slice(0,d)),t?m+h:h+m)}};t.exports={start:f(!1),end:f(!0)}},194:function(t,e,r){var n=r(44);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},195:function(t,e,r){"use strict";var n=r(12),o=r(3),c=r(62),l=r(14),f=r(13),d=r(28),h=r(142),m=r(61),v=r(5),y=r(63),x=r(98).f,_=r(33).f,A=r(16).f,w=r(196).trim,C="Number",k=o.Number,I=k.prototype,O=d(y(I))==C,S=function(t){var e,r,n,o,c,l,f,code,d=m(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=w(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(C,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var N,E=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof E&&(O?v((function(){I.valueOf.call(r)})):d(r)!=C)?h(new k(S(e)),r,E):S(e)},j=n?x(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),z=0;j.length>z;z++)f(k,N=j[z])&&!f(E,N)&&A(E,N,_(k,N));E.prototype=I,I.constructor=E,l(o,C,E)}},196:function(t,e,r){var n=r(11),o="["+r(197)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},197:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},198:function(t,e,r){"use strict";r(190)},199:function(t,e,r){var n=r(42)(!1);n.push([t.i,".wrapper{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px;grid-auto-rows:minmax(100px,auto)}.tablero{background:#333;border-spacing:0}.tablero td{border:1px solid #111;background:#222;width:50px;max-width:50px;height:50px}.tablero td.activa{background:#e2aa00;width:50px;height:50px}.derecha button,.izquierda button{font-size:3rem;width:100%;height:200px}.derecha button small,.izquierda button small{display:block;font-size:1rem;color:#999}",""]),t.exports=n},200:function(t,e,r){var content=r(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("1b7833da",content,!0,{sourceMap:!1})},201:function(t,e,r){"use strict";r.r(e);r(195);var n=r(191),o={props:{type:{type:Number,default:0}},data:function(){return{fichas:n.a,forma:[]}},created:function(){this.forma=this.fichas.ficha(this.type).forma},methods:{bgFicha:function(t){var e=t?this.ficha.hexaCode:"#333";return"background: ".concat(e)},rotacionDerecha:function(){this.forma=this.fichas.rotacionDerecha(this.forma)},rotacionIzquierda:function(){this.forma=this.fichas.rotacionIzquierda(this.forma)}},computed:{ficha:function(){return this.fichas.ficha(this.type)}},watch:{type:function(t){this.forma=this.fichas.ficha(t).forma}}},c=(r(198),r(31)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"izquierda"},[r("button",{on:{click:t.rotacionIzquierda}},[t._v("\n      ↺\n      "),r("small",[t._v("Rotacion a la izquierda")])])]),t._v(" "),r("table",{staticClass:"tablero"},[r("tbody",t._l(t.forma,(function(e,i){return r("tr",{key:"line-"+i,class:"row-"+(i+1)},t._l(e,(function(e,n){return r("td",{key:n,style:t.bgFicha(e)})})),0)})),0)]),t._v(" "),r("div",{staticClass:"derecha"},[r("button",{on:{click:t.rotacionDerecha}},[t._v("\n      ↻\n      "),r("small",[t._v("Rotacion a la derecha")])])])])}),[],!1,null,null,null);e.default=component.exports},202:function(t,e,r){"use strict";r(200)},203:function(t,e,r){var n=r(42)(!1);n.push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.ficha-select{font-size:2rem}',""]),t.exports=n},204:function(t,e,r){"use strict";r.r(e);var n=r(191),o={data:function(){return{ficha:1,fichas:n.a,items:[{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"}]}},methods:{revisarTeclado:function(t){console.log(t.key),console.log(t.metaKey)}}},c=(r(202),r(31)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",on:{keyup:t.revisarTeclado}},[r("div",[r("h1",{staticClass:"title",attrs:{id:"titulo"}},[t._v("\n      Tetris-ECDQEMSD\n    ")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.ficha,expression:"ficha"}],staticClass:"ficha-select",domProps:{value:0},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.ficha=e.target.multiple?r:r[0]}}},t._l(t.fichas.tipos,(function(e,i){return r("option",{key:i,domProps:{value:i}},[t._v("\n            "+t._s(e.nombre)+"\n          ")])})),0)]),t._v(" "),r("div",{staticClass:"col"},[r("Ficha",{attrs:{type:t.ficha}})],1)]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"links"},[r("a",{staticClass:"boton-rojo",attrs:{href:"https://es.wikipedia.org/wiki/Tetris#Colores_de_los_tetriminos",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        Documentación (Teoría del Tetris)\n      ")]),t._v(" "),r("a",{staticClass:"boton-rojo",attrs:{href:"https://github.com/fitorec/ecdqemsd-tetris",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        Código fuente\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Ficha:r(201).default})}}]);