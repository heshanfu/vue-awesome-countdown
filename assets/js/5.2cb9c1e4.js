(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(t,a,e){"use strict";var n=e(3),s=e(161),r=e(88);n(n.P+n.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(r),"String",{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},161:function(t,a,e){var n=e(50),s=e(162),r=e(12);t.exports=function(t,a,e,i){var o=String(r(t)),u=o.length,c=void 0===e?" ":String(e),l=n(a);if(l<=u||""==c)return o;var p=l-u,v=s.call(c,Math.ceil(p/c.length));return v.length>p&&(v=v.slice(0,p)),i?v+o:o+v}},162:function(t,a,e){"use strict";var n=e(51),s=e(12);t.exports=function(t){var a=String(s(this)),e="",r=n(t);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(a+=a))1&r&&(e+=a);return e}},163:function(t,a,e){"use strict";e(164);var n=e(8),s=e(87),r=e(6),i=/./.toString,o=function(t){e(9)(RegExp.prototype,"toString",t,!0)};e(5)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?o(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?s.call(t):void 0)}):"toString"!=i.name&&o(function(){return i.call(this)})},164:function(t,a,e){e(6)&&"g"!=/./g.flags&&e(7).f(RegExp.prototype,"flags",{configurable:!0,get:e(87)})},165:function(t,a,e){var n=Date.prototype,s=n.toString,r=n.getTime;new Date(NaN)+""!="Invalid Date"&&e(9)(n,"toString",function(){var t=r.call(this);return t==t?s.call(this):"Invalid Date"})},166:function(t,a,e){"use strict";var n=e(2),s=e(14),r=e(13),i=e(69),o=e(67),u=e(5),c=e(91).f,l=e(90).f,p=e(7).f,v=e(89).trim,f=n.Number,_=f,m=f.prototype,d="Number"==r(e(68)(m)),g="trim"in String.prototype,h=function(t){var a=o(t,!1);if("string"==typeof a&&a.length>2){var e,n,s,r=(a=g?a.trim():v(a,3)).charCodeAt(0);if(43===r||45===r){if(88===(e=a.charCodeAt(2))||120===e)return NaN}else if(48===r){switch(a.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+a}for(var i,u=a.slice(2),c=0,l=u.length;c<l;c++)if((i=u.charCodeAt(c))<48||i>s)return NaN;return parseInt(u,n)}}return+a};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof f&&(d?u(function(){m.valueOf.call(e)}):"Number"!=r(e))?i(new _(h(a)),e,f):h(a)};for(var T,k=e(6)?c(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;k.length>S;S++)s(_,T=k[S])&&!s(f,T)&&p(f,T,l(_,T));f.prototype=m,m.constructor=f,e(9)(n,"Number",f)}},167:function(t,a,e){"use strict";e(21),e(160),e(163),e(165),e(166);var n={props:{startTime:{type:[String,Number,Date],default:null,validator:function(t){return"Invalid Date"!==new Date(t).toString()}},endTime:{type:[String,Number,Date],default:null,validator:function(t){return"Invalid Date"!==new Date(t).toString()}},leftTime:{type:Number,default:0},autoStart:{type:Boolean,default:!0},speed:{type:Number,default:1e3,validator:function(t){return t>=0}},tag:{type:String,default:"span"}},data:function(){return{state:"beforeStart",attrs:{},actualStartTime:null,actualEndTime:null,timeObj:{},countdownTimer:null,runTimes:0,usedTime:0}},watch:{speed:function(t,a){var e=this;if(t<0&&(t=0),t!==a){clearTimeout(e.countdownTimer);var n=(new Date).getTime(),s=Math.floor((n-e.actualStartTime)/t),r=n%t;e.runTimes=s,e.$nextTick(function(){e.countdownTimer=setTimeout(e.doCountdown,r)})}}},created:function(){var t=this,a=t.startTime&&new Date(t.startTime).getTime()||0,e=a&&a-(new Date).getTime()||0;t.autoStart&&setTimeout(function(){t.startCountdown(!0)},e)},methods:{startCountdown:function(t){var a=this;("beforeStart"===a.state||"stoped"===a.state||t)&&(t&&(a.runTimes=0,a.actualStartTime=null,a.actualEndTime=a.endTime||(new Date).getTime()+a.leftTime,a.$emit("onStart",a)),a.state="process",a.doCountdown())},stopCountdown:function(){var t=this;"process"===t.state&&(clearTimeout(t.countdownTimer),t.$emit("on-start",t),t.state="stoped")},switchCountdown:function(){var t=this;return"stoped"===t.state||"beforeStart"===t.state?t.startCountdown():"process"===t.state?t.stopCountdown():void 0},finishCountdown:function(){var t=this;t.state="finised",t.timeObj={},t.usedTime=(new Date).getTime()-t.actualStartTime,t.$emit("onFinish",t)},doCountdown:function(){var t=this;if("process"===t.state){t.actualStartTime||(t.actualStartTime=(new Date).getTime());var a=new Date(t.actualEndTime).getTime()-(new Date).getTime();if(a>0){var e={},n=a/1e3,s={d:n/60/60/24,h:n/60/60%24,m:n/60%60,s:n%60,ms:a%1e3},r={d:parseInt(s.d,10).toString(),h:parseInt(s.h,10).toString().padStart(2,0),m:parseInt(s.m,10).toString().padStart(2,0),s:parseInt(s.s,10).toString().padStart(2,0),ms:s.ms.toString().padStart(3,0)},i={d:parseInt(Math.ceil(n/60/60/24),10),h:parseInt(Math.ceil(n/60/60),10),m:parseInt(Math.ceil(n/60),10),s:parseInt(Math.ceil(n),10)};e.endTime=t.actualEndTime,e.speed=t.speed,t.usedTime=(new Date).getTime()-t.actualStartTime,e.leftTime=a,t.timeObj=Object.assign({},e,r,{org:s,ceil:i}),t.timeObj.org=s,t.timeObj.ceil=i,t.$emit("onProcess",t);var o=t.speed+(t.actualStartTime+t.runTimes++*t.speed-(new Date).getTime());o<0&&(o+=t.speed),t.countdownTimer=setTimeout(t.doCountdown,o)}else t.finishCountdown()}}}},s=e(0),r=Object(s.a)(n,function(){var t=this,a=t.$createElement;return(t._self._c||a)(t.tag,t._g(t._b({tag:"components"},"components",t.attrs,!1),t.$listeners),[t._t("prev",null,null,this._self),t._v(" "),"beforeStart"===t.state?t._t("before",null,null,this._self):t._e(),t._v(" "),"process"===t.state||"stoped"===t.state?t._t("process",null,null,this._self):t._e(),t._v(" "),"finised"===t.state?t._t("finish",null,null,this._self):t._e(),t._v(" "),t._t("default",null,null,this._self)],2)},[],!1,null,null,null);r.options.__file="vue-awesome-countdown.vue";a.a=r.exports},172:function(t,a,e){"use strict";e.r(a);var n={components:{vac:e(167).a}},s=e(0),r=Object(s.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),[e("ClientOnly",[e("vac",{attrs:{"end-time":(new Date).getTime()+1e4},scopedSlots:t._u([{key:"process",fn:function(a){var n=a.timeObj;return e("span",{},[t._v("\n        "+t._s(n.ceil.s)+"\n      ")])}}])},[e("span",{attrs:{slot:"finish"},slot:"finish"},[t._v("Done!")])])],1)],t._v(" "),t._m(2)],2)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础用法")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[t._v("  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vac")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v(":end-time")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("new Date().getTime() + 10000"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v("\n      "),e("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("process"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),e("span",{attrs:{class:"token attr-name"}},[t._v("slot-scope")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ timeObj }"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {{ timeObj.ceil.s }}\n      "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("finish"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Done!"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vac")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);r.options.__file="README.md";a.default=r.exports}}]);