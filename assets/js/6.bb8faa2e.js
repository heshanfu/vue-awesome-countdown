(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{117:function(t,a,s){"use strict";var n=s(5);t.exports=function(){var t=n(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},118:function(t,a,s){var n=s(4),e=s(21),o=s(9),r=s(119),c="["+r+"]",p=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),v=function(t,a,s){var e={},c=o(function(){return!!r[t]()||"​"!="​"[t]()}),p=e[t]=c?a(l):r[t];s&&(e[s]=p),n(n.P+n.F*c,"String",e)},l=v.trim=function(t,a){return t=String(e(t)),1&a&&(t=t.replace(p,"")),2&a&&(t=t.replace(u,"")),t};t.exports=v},119:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},120:function(t,a,s){"use strict";var n=s(4),e=s(121),o=s(74);n(n.P+n.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padStart:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},121:function(t,a,s){var n=s(16),e=s(122),o=s(21);t.exports=function(t,a,s,r){var c=String(o(t)),p=c.length,u=void 0===s?" ":String(s),v=n(a);if(v<=p||""==u)return c;var l=v-p,i=e.call(u,Math.ceil(l/u.length));return i.length>l&&(i=i.slice(0,l)),r?i+c:c+i}},122:function(t,a,s){"use strict";var n=s(33),e=s(21);t.exports=function(t){var a=String(e(this)),s="",o=n(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(a+=a))1&o&&(s+=a);return s}},123:function(t,a,s){"use strict";s(124);var n=s(5),e=s(117),o=s(7),r=/./.toString,c=function(t){s(15)(RegExp.prototype,"toString",t,!0)};s(9)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?c(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?e.call(t):void 0)}):"toString"!=r.name&&c(function(){return r.call(this)})},124:function(t,a,s){s(7)&&"g"!=/./g.flags&&s(8).f(RegExp.prototype,"flags",{configurable:!0,get:s(117)})},125:function(t,a,s){var n=Date.prototype,e=n.toString,o=n.getTime;new Date(NaN)+""!="Invalid Date"&&s(15)(n,"toString",function(){var t=o.call(this);return t==t?e.call(this):"Invalid Date"})},126:function(t,a,s){"use strict";var n=s(1),e=s(13),o=s(12),r=s(73),c=s(47),p=s(9),u=s(72).f,v=s(49).f,l=s(8).f,i=s(118).trim,_=n.Number,k=_,d=_.prototype,f="Number"==o(s(48)(d)),m="trim"in String.prototype,g=function(t){var a=c(t,!1);if("string"==typeof a&&a.length>2){var s,n,e,o=(a=m?a.trim():i(a,3)).charCodeAt(0);if(43===o||45===o){if(88===(s=a.charCodeAt(2))||120===s)return NaN}else if(48===o){switch(a.charCodeAt(1)){case 66:case 98:n=2,e=49;break;case 79:case 111:n=8,e=55;break;default:return+a}for(var r,p=a.slice(2),u=0,v=p.length;u<v;u++)if((r=p.charCodeAt(u))<48||r>e)return NaN;return parseInt(p,n)}}return+a};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var a=arguments.length<1?0:t,s=this;return s instanceof _&&(f?p(function(){d.valueOf.call(s)}):"Number"!=o(s))?r(new k(g(a)),s,_):g(a)};for(var S,h=s(7)?u(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;h.length>b;b++)e(k,S=h[b])&&!e(_,S)&&l(_,S,v(k,S));_.prototype=d,d.constructor=_,s(15)(n,"Number",_)}},127:function(t,a,s){"use strict";s(46),s(120),s(123),s(125),s(126);var n={props:{startTime:{type:[String,Number,Date],default:null,validator:function(t){return"Invalid Date"!==new Date(t).toString()}},endTime:{type:[String,Number,Date],default:null,validator:function(t){return"Invalid Date"!==new Date(t).toString()}},leftTime:{type:Number,default:0},autoStart:{type:Boolean,default:!0},speed:{type:Number,default:1e3,validator:function(t){return t>=0}},tag:{type:String,default:"span"}},data:function(){return{state:"beforeStart",attrs:{},actualStartTime:null,actualEndTime:null,timeObj:{},countdownTimer:null,runTimes:0,usedTime:0}},watch:{speed:function(t,a){var s=this;if(t<0&&(t=0),t!==a){clearTimeout(s.countdownTimer);var n=(new Date).getTime(),e=Math.floor((n-s.actualStartTime)/t),o=n%t;s.runTimes=e,s.$nextTick(function(){s.countdownTimer=setTimeout(s.doCountdown,o)})}}},created:function(){var t=this,a=t.startTime&&new Date(t.startTime).getTime()||0,s=a&&a-(new Date).getTime()||0;t.autoStart&&setTimeout(function(){t.startCountdown(!0)},s)},methods:{startCountdown:function(t){var a=this;("beforeStart"===a.state||"stoped"===a.state||t)&&(t&&(a.runTimes=0,a.actualStartTime=null,a.actualEndTime=a.endTime||(new Date).getTime()+a.leftTime,a.$emit("onStart",a)),a.state="process",a.doCountdown())},stopCountdown:function(){var t=this;"process"===t.state&&(clearTimeout(t.countdownTimer),t.$emit("on-start",t),t.state="stoped")},switchCountdown:function(){var t=this;return"stoped"===t.state||"beforeStart"===t.state?t.startCountdown():"process"===t.state?t.stopCountdown():void 0},finishCountdown:function(){var t=this;t.state="finised",t.timeObj={},t.usedTime=(new Date).getTime()-t.actualStartTime,t.$emit("onFinish",t)},doCountdown:function(){var t=this;if("process"===t.state){t.actualStartTime||(t.actualStartTime=(new Date).getTime());var a=new Date(t.actualEndTime).getTime()-(new Date).getTime();if(a>0){var s={},n=a/1e3,e={d:n/60/60/24,h:n/60/60%24,m:n/60%60,s:n%60,ms:a%1e3},o={d:parseInt(e.d,10).toString(),h:parseInt(e.h,10).toString().padStart(2,0),m:parseInt(e.m,10).toString().padStart(2,0),s:parseInt(e.s,10).toString().padStart(2,0),ms:e.ms.toString().padStart(3,0)},r={d:parseInt(Math.ceil(n/60/60/24),10),h:parseInt(Math.ceil(n/60/60),10),m:parseInt(Math.ceil(n/60),10),s:parseInt(Math.ceil(n),10)};s.endTime=t.actualEndTime,s.speed=t.speed,t.usedTime=(new Date).getTime()-t.actualStartTime,s.leftTime=a,t.timeObj=Object.assign({},s,o,{org:e,ceil:r}),t.timeObj.org=e,t.timeObj.ceil=r,t.$emit("onProcess",t);var c=t.speed+(t.actualStartTime+t.runTimes++*t.speed-(new Date).getTime());c<0&&(c+=t.speed),t.countdownTimer=setTimeout(t.doCountdown,c)}else t.finishCountdown()}}}},e=s(6),o=Object(e.a)(n,function(){var t=this,a=t.$createElement;return(t._self._c||a)(t.tag,t._g(t._b({tag:"components"},"components",t.attrs,!1),t.$listeners),[t._t("prev",null,null,this._self),t._v(" "),"beforeStart"===t.state?t._t("before",null,null,this._self):t._e(),t._v(" "),"process"===t.state||"stoped"===t.state?t._t("process",null,null,this._self):t._e(),t._v(" "),"finised"===t.state?t._t("finish",null,null,this._self):t._e(),t._v(" "),t._t("default",null,null,this._self)],2)},[],!1,null,null,null);o.options.__file="vue-awesome-countdown.vue";a.a=o.exports},175:function(t,a,s){"use strict";s.r(a);var n={components:{vac:s(127).a},data:function(){return{buttonTxt:"Send SMS code"}},methods:{sendSMS:function(){var t=this;t.$refs.sendSMSCode.attrs.disabled=!0,t.buttonTxt="Sending";var a=1,s=setInterval(function(){a>6&&(a=1),t.buttonTxt="Sending"+Array.apply(null,{length:a}).join("."),a++},300);setTimeout(function(){clearInterval(s),t.$refs.sendSMSCode.startCountdown("restart")},3e3)},finish:function(t){this.buttonTxt="Resend",t.attrs.disabled=!1}}},e=s(6),o=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"send-sms-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-sms-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Send sms code")]),t._v(" "),[s("ClientOnly",[t._v("\n  Phone Number: "),s("input",{attrs:{type:"text",name:"phoneNumber"}}),t._v(" "),s("vac",{ref:"sendSMSCode",attrs:{tag:"button",type:"button",autoStart:!1,"left-time":6e3},on:{click:t.sendSMS,onFinish:function(a){return t.finish(a)}},scopedSlots:t._u([{key:"process",fn:function(a){var n=a.timeObj;return s("span",{},[t._v("\n        "+t._s(n.ceil.s+"s")+"\n      ")])}},{key:"default",fn:function(a){return"process"!==a.state?s("span",{},[t._v(t._s(t.buttonTxt))]):t._e()}}])})],1)],t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/reg"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Phone Number: "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("phoneNumber"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("formData.phoneNumber"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vac")]),t._v("\n      "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sendSMSCode"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{attrs:{class:"token attr-name"}},[t._v(":autoStart")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{attrs:{class:"token attr-name"}},[t._v(":left-time")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("60000"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sendSMS"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{attrs:{class:"token attr-name"}},[t._v("@onFinish")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(vac) => finish(vac)"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("process"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[t._v("slot-scope")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ timeObj }"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          {{ `${timeObj.ceil.s}s` }}\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("slot-scope")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ state }"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("state !== "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("process"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ buttonTxt }}"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vac")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'axios'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" vac "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("data")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      buttonTxt"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Send SMS code'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      formData"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        phoneNumber"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("sendSMS")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" voc "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sendSMSCode\n      voc"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attrs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("disabled "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      vm"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buttonTxt "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Sending'")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dots "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" txtLoading "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dots "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("6")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          dots "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        vm"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buttonTxt "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Sending'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" Array"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("apply")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dots"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        dots"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("300")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{attrs:{class:"token function"}},[t._v("axios")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/reg/sendSMS'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        method"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'post'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vm"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("formData\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txtLoading"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          voc"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("startCountdown")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'restart'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        voc"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attrs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("disabled "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        vm"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buttonTxt "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Send fail'")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txtLoading"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        voc"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attrs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("disabled "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        vm"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buttonTxt "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'System error'")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("finish")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vac"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n      vm"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buttonTxt "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Resend'")]),t._v("\n      vac"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attrs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("disabled "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])],2)},[],!1,null,null,null);o.options.__file="send-sms-code.md";a.default=o.exports}}]);