(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(t,n,a){"use strict";var e=a(3),s=a(163),o=a(88);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},163:function(t,n,a){var e=a(50),s=a(164),o=a(12);t.exports=function(t,n,a,r){var i=String(o(t)),u=i.length,c=void 0===a?" ":String(a),l=e(n);if(l<=u||""==c)return i;var p=l-u,v=s.call(c,Math.ceil(p/c.length));return v.length>p&&(v=v.slice(0,p)),r?v+i:i+v}},164:function(t,n,a){"use strict";var e=a(51),s=a(12);t.exports=function(t){var n=String(s(this)),a="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(a+=n);return a}},165:function(t,n,a){"use strict";a(166);var e=a(8),s=a(87),o=a(6),r=/./.toString,i=function(t){a(9)(RegExp.prototype,"toString",t,!0)};a(5)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?i(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?s.call(t):void 0)}):"toString"!=r.name&&i(function(){return r.call(this)})},166:function(t,n,a){a(6)&&"g"!=/./g.flags&&a(7).f(RegExp.prototype,"flags",{configurable:!0,get:a(87)})},167:function(t,n,a){var e=Date.prototype,s=e.toString,o=e.getTime;new Date(NaN)+""!="Invalid Date"&&a(9)(e,"toString",function(){var t=o.call(this);return t==t?s.call(this):"Invalid Date"})},168:function(t,n,a){"use strict";var e=a(2),s=a(14),o=a(13),r=a(69),i=a(67),u=a(5),c=a(91).f,l=a(90).f,p=a(7).f,v=a(89).trim,f=e.Number,_=f,m=f.prototype,d="Number"==o(a(68)(m)),g="trim"in String.prototype,h=function(t){var n=i(t,!1);if("string"==typeof n&&n.length>2){var a,e,s,o=(n=g?n.trim():v(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(a=n.charCodeAt(2))||120===a)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,s=49;break;case 79:case 111:e=8,s=55;break;default:return+n}for(var r,u=n.slice(2),c=0,l=u.length;c<l;c++)if((r=u.charCodeAt(c))<48||r>s)return NaN;return parseInt(u,e)}}return+n};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var n=arguments.length<1?0:t,a=this;return a instanceof f&&(d?u(function(){m.valueOf.call(a)}):"Number"!=o(a))?r(new _(h(n)),a,f):h(n)};for(var k,T=a(6)?c(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;T.length>w;w++)s(_,k=T[w])&&!s(f,k)&&p(f,k,l(_,k));f.prototype=m,m.constructor=f,a(9)(e,"Number",f)}},169:function(t,n,a){"use strict";a(21),a(162),a(165),a(167),a(168);var e={props:{startTime:{type:[String,Number,Date],default:null,validator:function(t){return"Invalid Date"!==new Date(t).toString()}},endTime:{type:[String,Number,Date],default:null,validator:function(t){return"Invalid Date"!==new Date(t).toString()}},leftTime:{type:Number,default:0},autoStart:{type:Boolean,default:!0},speed:{type:Number,default:1e3,validator:function(t){return t>=0}},tag:{type:String,default:"span"}},data:function(){return{state:"beforeStart",attrs:{},actualStartTime:null,actualEndTime:null,timeObj:{},countdownTimer:null,runTimes:0,usedTime:0}},watch:{speed:function(t,n){var a=this;if(t<0&&(t=0),t!==n){clearTimeout(a.countdownTimer);var e=(new Date).getTime(),s=Math.floor((e-a.actualStartTime)/t),o=e%t;a.runTimes=s,a.$nextTick(function(){a.countdownTimer=setTimeout(a.doCountdown,o)})}}},created:function(){var t=this,n=t.startTime&&new Date(t.startTime).getTime()||0,a=n&&n-(new Date).getTime()||0;t.autoStart&&setTimeout(function(){t.startCountdown(!0)},a)},methods:{startCountdown:function(t){var n=this;("beforeStart"===n.state||"stoped"===n.state||t)&&(t&&(n.runTimes=0,n.actualStartTime=null,n.actualEndTime=n.endTime||(new Date).getTime()+n.leftTime,n.$emit("onStart",n)),n.state="process",n.doCountdown())},stopCountdown:function(){var t=this;"process"===t.state&&(clearTimeout(t.countdownTimer),t.$emit("on-start",t),t.state="stoped")},switchCountdown:function(){var t=this;return"stoped"===t.state||"beforeStart"===t.state?t.startCountdown():"process"===t.state?t.stopCountdown():void 0},finishCountdown:function(){var t=this;t.state="finised",t.timeObj={},t.usedTime=(new Date).getTime()-t.actualStartTime,t.$emit("onFinish",t)},doCountdown:function(){var t=this;if("process"===t.state){t.actualStartTime||(t.actualStartTime=(new Date).getTime());var n=new Date(t.actualEndTime).getTime()-(new Date).getTime();if(n>0){var a={},e=n/1e3,s={d:e/60/60/24,h:e/60/60%24,m:e/60%60,s:e%60,ms:n%1e3},o={d:parseInt(s.d,10).toString(),h:parseInt(s.h,10).toString().padStart(2,0),m:parseInt(s.m,10).toString().padStart(2,0),s:parseInt(s.s,10).toString().padStart(2,0),ms:s.ms.toString().padStart(3,0)},r={d:parseInt(Math.ceil(e/60/60/24),10),h:parseInt(Math.ceil(e/60/60),10),m:parseInt(Math.ceil(e/60),10),s:parseInt(Math.ceil(e),10)};a.endTime=t.actualEndTime,a.speed=t.speed,t.usedTime=(new Date).getTime()-t.actualStartTime,a.leftTime=n,t.timeObj=Object.assign({},a,o,{org:s,ceil:r}),t.timeObj.org=s,t.timeObj.ceil=r,t.$emit("onProcess",t);var i=t.speed+(t.actualStartTime+t.runTimes++*t.speed-(new Date).getTime());i<0&&(i+=t.speed),t.countdownTimer=setTimeout(t.doCountdown,i)}else t.finishCountdown()}}}},s=a(0),o=Object(s.a)(e,function(){var t=this,n=t.$createElement;return(t._self._c||n)(t.tag,t._g(t._b({tag:"components"},"components",t.attrs,!1),t.$listeners),[t._t("prev",null,null,this._self),t._v(" "),"beforeStart"===t.state?t._t("before",null,null,this._self):t._e(),t._v(" "),"process"===t.state||"stoped"===t.state?t._t("process",null,null,this._self):t._e(),t._v(" "),"finised"===t.state?t._t("finish",null,null,this._self):t._e(),t._v(" "),t._t("default",null,null,this._self)],2)},[],!1,null,null,null);o.options.__file="vue-awesome-countdown.vue";n.a=o.exports},171:function(t,n,a){},174:function(t,n,a){"use strict";var e=a(171);a.n(e).a},178:function(t,n,a){"use strict";a.r(n);var e={components:{countdown:a(169).a}},s=(a(174),a(0)),o=Object(s.a)(e,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[[a("ClientOnly",[a("h1",[t._v("Countdown: \n  "),a("countdown",{attrs:{"left-time":101e3},scopedSlots:t._u([{key:"process",fn:function(n){var e=n.timeObj;return a("span",{},[t._v("\n        "+t._s(e.ceil.s)+"\n      ")])}}])},[a("span",{attrs:{slot:"finish"},slot:"finish"},[t._v("Done!")])])],1)])],t._v(" "),t._m(0),t._m(1)],2)},[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Countdown: \n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("countdown")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":left-time")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("101000"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 101 seconds --\x3e")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v("\n      "),a("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("process"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{attrs:{class:"token attr-name"}},[t._v("slot-scope")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ timeObj }"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {{ timeObj.ceil.s }}\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("finish"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Done!"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("countdown")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("COMPATIBILITY NOTE")]),this._v(" "),n("p",[this._v("vue-awesome-countdown requires Node.js >= 8, "),n("br"),this._v("\nVue.js >= 2.5.0.")])])}],!1,null,null,null);o.options.__file="README.md";n.default=o.exports}}]);