(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76cc7283"],{"01e3":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),c=r("9b76"),o=r("365c"),l=r("cf75");function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=Object(l["d"])({label:Object(l["c"])(i["t"]),role:Object(l["c"])(i["t"],"status"),small:Object(l["c"])(i["g"],!1),tag:Object(l["c"])(i["t"],"span"),type:Object(l["c"])(i["t"],"border"),variant:Object(l["c"])(i["t"])},s["pb"]),d=a["default"].extend({name:s["pb"],functional:!0,props:b,render:function(e,t){var r,a=t.props,s=t.data,i=t.slots,l=t.scopedSlots,b=i(),d=l||{},f=Object(o["b"])(c["s"],{},d,b)||a.label;return f&&(f=e("span",{staticClass:"sr-only"},f)),e(a.tag,Object(n["a"])(s,{attrs:{role:f?a.role||"status":null,"aria-hidden":f?null:"true"},class:(r={},u(r,"spinner-".concat(a.type),a.type),u(r,"spinner-".concat(a.type,"-sm"),a.small),u(r,"text-".concat(a.variant),a.variant),r)}),[f||e()])}})},"0753":function(e,t,r){"use strict";r.r(t),r.d(t,"attach",(function(){return s})),r.d(t,"detach",(function(){return i})),r.d(t,"shouldRetryRequest",(function(){return u})),r.d(t,"getConfig",(function(){return b}));var a=r("bc3a"),n=r.n(a);function s(e){return(e=e||n.a).interceptors.response.use(c,l)}function i(e,t){(t=t||n.a).interceptors.response.eject(e)}function c(e){return e}function o(e){var t=[];if(e)return Array.isArray(e)?e:("object"==typeof e&&Object.keys(e).forEach((function(r){"number"==typeof r&&(t[r]=e[r])})),t)}function l(e){if(n.a.isCancel(e))return Promise.reject(e);var t=b(e)||{};if(t.currentRetryAttempt=t.currentRetryAttempt||0,t.retry="number"==typeof t.retry?t.retry:3,t.retryDelay="number"==typeof t.retryDelay?t.retryDelay:100,t.instance=t.instance||n.a,t.backoffType=t.backoffType||"exponential",t.httpMethodsToRetry=o(t.httpMethodsToRetry)||["GET","HEAD","PUT","OPTIONS","DELETE"],t.noResponseRetries="number"==typeof t.noResponseRetries?t.noResponseRetries:2,t.checkRetryAfter="boolean"!=typeof t.checkRetryAfter||t.checkRetryAfter,t.maxRetryAfter="number"==typeof t.maxRetryAfter?t.maxRetryAfter:3e5,t.statusCodesToRetry=o(t.statusCodesToRetry)||[[100,199],[429,429],[500,599]],e.config=e.config||{},e.config.raxConfig=Object.assign({},t),!(t.shouldRetry||u)(e))return Promise.reject(e);var r=new Promise((function(r,a){var n=0;if(t.checkRetryAfter&&e.response&&e.response.headers["retry-after"]){var s=function(e){var t=Number(e);if(!Number.isNaN(t))return 1e3*t;var r=Date.parse(e);return Number.isNaN(r)?void 0:r-Date.now()}(e.response.headers["retry-after"]);if(!(s&&s>0&&s<=t.maxRetryAfter))return a(e);n=s}e.config.raxConfig.currentRetryAttempt+=1;var i=e.config.raxConfig.currentRetryAttempt;0===n&&(n="linear"===t.backoffType?1e3*i:"static"===t.backoffType?t.retryDelay:(Math.pow(2,i)-1)/2*1e3,"number"==typeof t.maxRetryDelay&&(n=Math.min(n,t.maxRetryDelay))),setTimeout(r,n)})),a=t.onRetryAttempt?Promise.resolve(t.onRetryAttempt(e)):Promise.resolve();return Promise.resolve().then((function(){return r})).then((function(){return a})).then((function(){return t.instance.request(e.config)}))}function u(e){var t=e.config.raxConfig;if(!t||0===t.retry)return!1;if(!e.response&&(t.currentRetryAttempt||0)>=t.noResponseRetries)return!1;if(!e.config.method||t.httpMethodsToRetry.indexOf(e.config.method.toUpperCase())<0)return!1;if(e.response&&e.response.status){for(var r=!1,a=0,n=t.statusCodesToRetry;a<n.length;a+=1){var s=n[a],i=e.response.status;if(i>=s[0]&&i<=s[1]){r=!0;break}}if(!r)return!1}return t.currentRetryAttempt=t.currentRetryAttempt||0,!(t.currentRetryAttempt>=t.retry)}function b(e){if(e&&e.config)return e.config.raxConfig}},"1d17":function(e,t,r){"use strict";var a=r("b4c0");t["a"]={listZelNodes:function(){return Object(a["a"])().get("/daemon/listzelnodes")},zelnodeCount:function(){return Object(a["a"])().get("/daemon/getzelnodecount")}}},"205f":function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),c=r("9b76"),o=r("8690"),l=r("365c"),u=r("d82f"),b=r("cf75"),d=r("d580"),f=r("6197"),m=r("b885");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=Object(b["d"])(Object(u["m"])(h(h({},Object(b["a"])(d["a"],b["f"].bind(null,"footer"))),{},{footer:Object(b["c"])(i["t"]),footerClass:Object(b["c"])(i["e"]),footerHtml:Object(b["c"])(i["t"])})),s["l"]),v=a["default"].extend({name:s["l"],functional:!0,props:y,render:function(e,t){var r,a=t.props,s=t.data,i=t.children,c=a.footerBgVariant,l=a.footerBorderVariant,u=a.footerTextVariant;return e(a.footerTag,Object(n["a"])(s,{staticClass:"card-footer",class:[a.footerClass,(r={},g(r,"bg-".concat(c),c),g(r,"border-".concat(l),l),g(r,"text-".concat(u),u),r)],domProps:i?{}:Object(o["a"])(a.footerHtml,a.footer)}),i)}}),O=r("4918");function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=Object(b["d"])(Object(u["m"])(w(w({},Object(u["k"])(O["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(b["c"])(i["g"],!1),end:Object(b["c"])(i["g"],!1),start:Object(b["c"])(i["g"],!1),top:Object(b["c"])(i["g"],!1)})),s["n"]),k=a["default"].extend({name:s["n"],functional:!0,props:x,render:function(e,t){var r=t.props,a=t.data,s=r.src,i=r.alt,c=r.width,o=r.height,l="card-img";return r.top?l+="-top":r.right||r.end?l+="-right":r.bottom?l+="-bottom":(r.left||r.start)&&(l+="-left"),e("img",Object(n["a"])(a,{class:l,attrs:{src:s,alt:i,width:c,height:o}}))}});function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=Object(b["a"])(x,b["f"].bind(null,"img"));R.imgSrc.required=!1;var U=Object(b["d"])(Object(u["m"])(D(D(D(D(D(D({},f["b"]),m["b"]),y),R),d["a"]),{},{align:Object(b["c"])(i["t"]),noBody:Object(b["c"])(i["g"],!1)})),s["j"]),P=a["default"].extend({name:s["j"],functional:!0,props:U,render:function(e,t){var r,a=t.props,s=t.data,i=t.slots,u=t.scopedSlots,d=a.imgSrc,p=a.imgLeft,h=a.imgRight,g=a.imgStart,O=a.imgEnd,j=a.imgBottom,w=a.header,C=a.headerHtml,x=a.footer,_=a.footerHtml,D=a.align,U=a.textVariant,P=a.bgVariant,V=a.borderVariant,W=u||{},T=i(),A={},$=e(),F=e();if(d){var I=e(k,{props:Object(b["e"])(R,a,b["h"].bind(null,"img"))});j?F=I:$=I}var M=e(),L=Object(l["a"])(c["p"],W,T);(L||w||C)&&(M=e(m["a"],{props:Object(b["e"])(m["b"],a),domProps:L?{}:Object(o["a"])(C,w)},Object(l["b"])(c["p"],A,W,T)));var E=Object(l["b"])(c["h"],A,W,T);a.noBody||(E=e(f["a"],{props:Object(b["e"])(f["b"],a)},E),a.overlay&&d&&(E=e("div",{staticClass:"position-relative"},[$,E,F]),$=e(),F=e()));var X=e(),B=Object(l["a"])(c["o"],W,T);return(B||x||_)&&(X=e(v,{props:Object(b["e"])(y,a),domProps:L?{}:Object(o["a"])(_,x)},Object(l["b"])(c["o"],A,W,T))),e(a.tag,Object(n["a"])(s,{staticClass:"card",class:(r={"flex-row":p||g,"flex-row-reverse":(h||O)&&!(p||g)},S(r,"text-".concat(D),D),S(r,"bg-".concat(P),P),S(r,"border-".concat(V),V),S(r,"text-".concat(U),U),r)}),[$,M,E,X,F])}})},"45a8":function(e,t,r){"use strict";r("c3fa")},"464d":function(e,t,r){"use strict";r("6e6c")},4918:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"a",(function(){return g}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),c=r("2326"),o=r("6c06"),l=r("7b1e"),u=r("3a58"),b=r("cf75"),d=r("fa73");function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',p=function(e,t,r){var a=encodeURIComponent(m.replace("%{w}",Object(d["g"])(e)).replace("%{h}",Object(d["g"])(t)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(a)},h=Object(b["d"])({alt:Object(b["c"])(i["t"]),blank:Object(b["c"])(i["g"],!1),blankColor:Object(b["c"])(i["t"],"transparent"),block:Object(b["c"])(i["g"],!1),center:Object(b["c"])(i["g"],!1),fluid:Object(b["c"])(i["g"],!1),fluidGrow:Object(b["c"])(i["g"],!1),height:Object(b["c"])(i["o"]),left:Object(b["c"])(i["g"],!1),right:Object(b["c"])(i["g"],!1),rounded:Object(b["c"])(i["j"],!1),sizes:Object(b["c"])(i["f"]),src:Object(b["c"])(i["t"]),srcset:Object(b["c"])(i["f"]),thumbnail:Object(b["c"])(i["g"],!1),width:Object(b["c"])(i["o"])},s["O"]),g=a["default"].extend({name:s["O"],functional:!0,props:h,render:function(e,t){var r,a=t.props,s=t.data,i=a.alt,b=a.src,m=a.block,h=a.fluidGrow,g=a.rounded,y=Object(u["c"])(a.width)||null,v=Object(u["c"])(a.height)||null,O=null,j=Object(c["b"])(a.srcset).filter(o["a"]).join(","),w=Object(c["b"])(a.sizes).filter(o["a"]).join(",");return a.blank&&(!v&&y?v=y:!y&&v&&(y=v),y||v||(y=1,v=1),b=p(y,v,a.blankColor||"transparent"),j=null,w=null),a.left?O="float-left":a.right?O="float-right":a.center&&(O="mx-auto",m=!0),e("img",Object(n["a"])(s,{attrs:{src:b,alt:i,width:y?Object(d["g"])(y):null,height:v?Object(d["g"])(v):null,srcset:j||null,sizes:w||null},class:(r={"img-thumbnail":a.thumbnail,"img-fluid":a.fluid||h,"w-100":h,rounded:""===g||!0===g},f(r,"rounded-".concat(g),Object(l["m"])(g)&&""!==g),f(r,O,O),f(r,"d-block",m),r)}))}})},4968:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return u}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),c=r("cf75"),o=r("fa73"),l=Object(c["d"])({title:Object(c["c"])(i["t"]),titleTag:Object(c["c"])(i["t"],"h4")},s["q"]),u=a["default"].extend({name:s["q"],functional:!0,props:l,render:function(e,t){var r=t.props,a=t.data,s=t.children;return e(r.titleTag,Object(n["a"])(a,{staticClass:"card-title"}),s||Object(o["g"])(r.title))}})},6197:function(e,t,r){"use strict";r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return h}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),c=r("d82f"),o=r("cf75"),l=r("d580"),u=r("4968"),b=r("ba06");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=Object(o["d"])(Object(c["m"])(f(f(f(f({},u["b"]),b["b"]),Object(o["a"])(l["a"],o["f"].bind(null,"body"))),{},{bodyClass:Object(o["c"])(i["e"]),overlay:Object(o["c"])(i["g"],!1)})),s["k"]),h=a["default"].extend({name:s["k"],functional:!0,props:p,render:function(e,t){var r,a=t.props,s=t.data,i=t.children,c=a.bodyBgVariant,l=a.bodyBorderVariant,d=a.bodyTextVariant,f=e();a.title&&(f=e(u["a"],{props:Object(o["e"])(u["b"],a)}));var p=e();return a.subTitle&&(p=e(b["a"],{props:Object(o["e"])(b["b"],a),class:["mb-2"]})),e(a.bodyTag,Object(n["a"])(s,{staticClass:"card-body",class:[(r={"card-img-overlay":a.overlay},m(r,"bg-".concat(c),c),m(r,"border-".concat(l),l),m(r,"text-".concat(d),d),r),a.bodyClass]}),[f,p,i])}})},"6e6c":function(e,t,r){},"7db0":function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").find,s=r("44d2"),i="find",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),s(i)},"9b03":function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var a=r("2b0e"),n=r("c637"),s=r("0056"),i=r("a723"),c=r("9b76"),o=r("3a58"),l=r("8c18"),u=r("cf75"),b=r("01e3"),d=r("ce2a");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h={top:0,left:0,bottom:0,right:0},g=Object(u["d"])({bgColor:Object(u["c"])(i["t"]),blur:Object(u["c"])(i["t"],"2px"),fixed:Object(u["c"])(i["g"],!1),noCenter:Object(u["c"])(i["g"],!1),noFade:Object(u["c"])(i["g"],!1),noWrap:Object(u["c"])(i["g"],!1),opacity:Object(u["c"])(i["o"],.85,(function(e){var t=Object(o["b"])(e,0);return t>=0&&t<=1})),overlayTag:Object(u["c"])(i["t"],"div"),rounded:Object(u["c"])(i["j"],!1),show:Object(u["c"])(i["g"],!1),spinnerSmall:Object(u["c"])(i["g"],!1),spinnerType:Object(u["c"])(i["t"],"border"),spinnerVariant:Object(u["c"])(i["t"]),variant:Object(u["c"])(i["t"],"light"),wrapTag:Object(u["c"])(i["t"],"div"),zIndex:Object(u["c"])(i["o"],10)},n["gb"]),y=a["default"].extend({name:n["gb"],mixins:[l["a"]],props:g,computed:{computedRounded:function(){var e=this.rounded;return!0===e||""===e?"rounded":e?"rounded-".concat(e):""},computedVariant:function(){var e=this.variant;return e&&!this.bgColor?"bg-".concat(e):""},slotScope:function(){return{spinnerType:this.spinnerType||null,spinnerVariant:this.spinnerVariant||null,spinnerSmall:this.spinnerSmall}}},methods:{defaultOverlayFn:function(e){var t=e.spinnerType,r=e.spinnerVariant,a=e.spinnerSmall;return this.$createElement(b["a"],{props:{type:t,variant:r,small:a}})}},render:function(e){var t=this,r=this.show,a=this.fixed,n=this.noFade,i=this.noWrap,o=this.slotScope,l=e();if(r){var u=e("div",{staticClass:"position-absolute",class:[this.computedVariant,this.computedRounded],style:m(m({},h),{},{opacity:this.opacity,backgroundColor:this.bgColor||null,backdropFilter:this.blur?"blur(".concat(this.blur,")"):null})}),b=e("div",{staticClass:"position-absolute",style:this.noCenter?m({},h):{top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},[this.normalizeSlot(c["C"],o)||this.defaultOverlayFn(o)]);l=e(this.overlayTag,{staticClass:"b-overlay",class:{"position-absolute":!i||i&&!a,"position-fixed":i&&a},style:m(m({},h),{},{zIndex:this.zIndex||10}),on:{click:function(e){return t.$emit(s["f"],e)}},key:"overlay"},[u,b])}return l=e(d["a"],{props:{noFade:n,appear:!0},on:{"after-enter":function(){return t.$emit(s["O"])},"after-leave":function(){return t.$emit(s["s"])}}},[l]),i?l:e(this.wrapTag,{staticClass:"b-overlay-wrap position-relative",attrs:{"aria-busy":r?"true":null}},i?[l]:[this.normalizeSlot(),l])}})},b885:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return p}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),c=r("8690"),o=r("d82f"),l=r("cf75"),u=r("d580");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=Object(l["d"])(Object(o["m"])(d(d({},Object(l["a"])(u["a"],l["f"].bind(null,"header"))),{},{header:Object(l["c"])(i["t"]),headerClass:Object(l["c"])(i["e"]),headerHtml:Object(l["c"])(i["t"])})),s["m"]),p=a["default"].extend({name:s["m"],functional:!0,props:m,render:function(e,t){var r,a=t.props,s=t.data,i=t.children,o=a.headerBgVariant,l=a.headerBorderVariant,u=a.headerTextVariant;return e(a.headerTag,Object(n["a"])(s,{staticClass:"card-header",class:[a.headerClass,(r={},f(r,"bg-".concat(o),o),f(r,"border-".concat(l),l),f(r,"text-".concat(u),u),r)],domProps:i?{}:Object(c["a"])(a.headerHtml,a.header)}),i)}})},ba06:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return u}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),c=r("cf75"),o=r("fa73"),l=Object(c["d"])({subTitle:Object(c["c"])(i["t"]),subTitleTag:Object(c["c"])(i["t"],"h6"),subTitleTextVariant:Object(c["c"])(i["t"],"muted")},s["o"]),u=a["default"].extend({name:s["o"],functional:!0,props:l,render:function(e,t){var r=t.props,a=t.data,s=t.children;return e(r.subTitleTag,Object(n["a"])(a,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),s||Object(o["g"])(r.subTitle))}})},c3fa:function(e,t,r){},c773:function(e,t,r){"use strict";var a=r("b4c0");t["a"]={getAddressBalance:function(e){return Object(a["a"])().get("/explorer/balance/".concat(e))},getAddressTransactions:function(e){return Object(a["a"])().get("/explorer/transactions/".concat(e))},getFluxTransactions:function(e){return Object(a["a"])().get("/explorer/fluxtxs/".concat(e))},getScannedHeight:function(){return Object(a["a"])().get("/explorer/scannedheight")},reindexExplorer:function(e){return Object(a["a"])().get("/explorer/reindex/false",{headers:{zelidauth:e}})},reindexFlux:function(e){return Object(a["a"])().get("/explorer/reindex/true",{headers:{zelidauth:e}})},rescanExplorer:function(e,t){return Object(a["a"])().get("/explorer/rescan/".concat(t,"/false"),{headers:{zelidauth:e}})},rescanFlux:function(e,t){return Object(a["a"])().get("/explorer/rescan/".concat(t,"/true"),{headers:{zelidauth:e}})},restartBlockProcessing:function(e){return Object(a["a"])().get("/explorer/restart",{headers:{zelidauth:e}})},stopBlockProcessing:function(e){return Object(a["a"])().get("/explorer/stop",{headers:{zelidauth:e}})}}},d580:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r("2b0e"),n=r("c637"),s=r("a723"),i=r("cf75"),c=Object(i["d"])({bgVariant:Object(i["c"])(s["t"]),borderVariant:Object(i["c"])(s["t"]),tag:Object(i["c"])(s["t"],"div"),textVariant:Object(i["c"])(s["t"])},n["j"]);a["default"].extend({props:c})},d6e4:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("2b0e"),n=r("b42e"),s=r("c637"),i=r("a723"),c=r("cf75"),o=Object(c["d"])({textTag:Object(c["c"])(i["t"],"p")},s["p"]),l=a["default"].extend({name:s["p"],functional:!0,props:o,render:function(e,t){var r=t.props,a=t.data,s=t.children;return e(r.textTag,Object(n["a"])(a,{staticClass:"card-text"}),s)}})},f03d:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-overlay",{attrs:{show:e.loadingPrice,variant:"transparent",blur:"5px"}},[r("b-card",{attrs:{"no-body":""}},[r("b-card-body",[r("h4",[e._v(" Price Information: $"+e._s(e.beautifyValue(e.latestPrice,2))+" USD ")])]),r("vue-apex-charts",{attrs:{type:"area",height:"250",width:"100%",options:e.lineChart.chartOptions,series:e.lineChart.series}})],1)],1),r("b-row",{staticClass:"text-center"},[r("b-col",{attrs:{sm:"12",md:"6",lg:"4"}},[r("b-card",{attrs:{title:"Cumulus Rewards"}},[r("b-card-text",[e._v(e._s(e.cumulusCollateral.toLocaleString())+" FLUX Collateral")]),r("app-timeline",{staticClass:"mt-2"},[r("app-timeline-item",[r("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[r("div",[r("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.cumulusWeek/7))+" FLUX ")]),r("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek/7))+" USD)")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.cumulusWeek*5/7))+" FLUX Tokens ")]),r("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.cumulusUSDRewardWeek*5/7))+" USD)")]),r("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.cumulusUSDRewardWeek*5/7+e.cumulusUSDRewardWeek/7))+" USD ")])]),r("small",{staticClass:"text-muted"},[e._v("Per Day")])])]),r("app-timeline-item",[r("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[r("div",[r("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.cumulusWeek))+" FLUX ")]),r("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek))+" USD)")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.cumulusWeek*5))+" FLUX Tokens ")]),r("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.cumulusUSDRewardWeek*5))+" USD)")]),r("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.cumulusUSDRewardWeek*5+e.cumulusUSDRewardWeek))+" USD ")])]),r("small",{staticClass:"text-muted"},[e._v("Per Week")])])]),r("app-timeline-item",[r("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[r("div",[r("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.cumulusWeek*e.weeksInAMonth))+" FLUX ")]),r("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek*e.weeksInAMonth))+" USD)")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.cumulusWeek*e.weeksInAMonth*.1*5))+" FLUX Tokens ")]),r("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek*e.weeksInAMonth*.1*5))+" USD)")]),r("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek*e.weeksInAMonth*.1*5+e.cumulusUSDRewardWeek*e.weeksInAMonth))+" USD ")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" VPS Cost ~ "+e._s(e.cumulusHostingCost)+" USD ")])]),r("small",{staticClass:"text-muted"},[e._v("Per Month")])])])],1),r("b-row",[r("b-col",{staticClass:"border-top mt-2"},[r("b-card-text",{staticClass:"text-muted mt-1"},[e._v(" Profitability per month ")]),r("h4",{staticClass:"font-weight-bolder mb-50"},[e._v(" $"+e._s(e.beautifyValue(e.cumulusUSDRewardWeek*e.weeksInAMonth*.1*5+e.cumulusUSDRewardWeek*e.weeksInAMonth-e.cumulusHostingCost))+" USD ")]),r("h4",{staticClass:"font-weight-bolder mb-50 invisible"},[e._v(" With KDA: 0 USD ")])],1)],1)],1)],1),r("b-col",{attrs:{sm:"12",md:"6",lg:"4"}},[r("b-card",{attrs:{title:"Nimbus Rewards"}},[r("b-card-text",[e._v(e._s(e.nimbusCollateral.toLocaleString())+" FLUX Collateral")]),r("app-timeline",{staticClass:"mt-2"},[r("app-timeline-item",{attrs:{variant:"warning"}},[r("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[r("div",[r("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.nimbusWeek/7))+" FLUX ")]),r("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek/7))+" USD)")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.nimbusWeek*5/7))+" FLUX Tokens ")]),r("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.nimbusUSDRewardWeek*5/7))+" USD)")]),r("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.nimbusUSDRewardWeek*5/7+e.nimbusUSDRewardWeek/7))+" USD ")])]),r("small",{staticClass:"text-muted"},[e._v("Per Day")])])]),r("app-timeline-item",{attrs:{variant:"warning"}},[r("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[r("div",[r("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.nimbusWeek))+" FLUX ")]),r("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek))+" USD)")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.nimbusWeek*5))+" FLUX Tokens ")]),r("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.nimbusUSDRewardWeek*5))+" USD)")]),r("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.nimbusUSDRewardWeek*5+e.nimbusUSDRewardWeek))+" USD ")])]),r("small",{staticClass:"text-muted"},[e._v("Per Week")])])]),r("app-timeline-item",{attrs:{variant:"warning"}},[r("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[r("div",[r("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.nimbusWeek*e.weeksInAMonth))+" FLUX ")]),r("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek*e.weeksInAMonth))+" USD)")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.nimbusWeek*e.weeksInAMonth*.1*5))+" FLUX Tokens ")]),r("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek*e.weeksInAMonth*.1*5))+" USD)")]),r("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek*e.weeksInAMonth*.1*5+e.nimbusUSDRewardWeek*e.weeksInAMonth))+" USD ")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" VPS Cost ~ "+e._s(e.nimbusHostingCost)+" USD ")])]),r("small",{staticClass:"text-muted"},[e._v("Per Month")])])])],1),r("b-row",[r("b-col",{staticClass:"border-top mt-2"},[r("b-card-text",{staticClass:"text-muted mt-1"},[e._v(" Profitability per month ")]),r("h4",{staticClass:"font-weight-bolder mb-50"},[e._v(" $"+e._s(e.beautifyValue(e.nimbusUSDRewardWeek*e.weeksInAMonth*.1*5+e.nimbusUSDRewardWeek*e.weeksInAMonth-e.nimbusHostingCost))+" USD ")]),r("b-card-text",{staticClass:"text-muted mt-1"},[e._v(" Plus KDA rewards ")])],1)],1)],1)],1),r("b-col",{attrs:{sm:"12",md:"12",lg:"4"}},[r("b-card",{attrs:{title:"Stratus Rewards"}},[r("b-card-text",[e._v(e._s(e.stratusCollateral.toLocaleString())+" FLUX Collateral")]),r("app-timeline",{staticClass:"mt-2"},[r("app-timeline-item",{attrs:{variant:"danger"}},[r("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[r("div",[r("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.stratusWeek/7))+" FLUX ")]),r("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDRewardWeek/7))+" USD)")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.stratusWeek*5/7))+" FLUX Tokens ")]),r("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.stratusUSDRewardWeek*5/7))+" USD)")]),r("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.stratusUSDRewardWeek*5/7+e.stratusUSDRewardWeek/7))+" USD ")])]),r("small",{staticClass:"text-muted"},[e._v("Per Day")])])]),r("app-timeline-item",{attrs:{variant:"danger"}},[r("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[r("div",[r("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.stratusWeek))+" FLUX ")]),r("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDRewardWeek))+" USD)")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(.1*e.stratusWeek*5))+" FLUX Tokens ")]),r("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(.1*e.stratusUSDRewardWeek*5))+" USD)")]),r("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(.1*e.stratusUSDRewardWeek*5+e.stratusUSDRewardWeek))+" USD ")])]),r("small",{staticClass:"text-muted"},[e._v("Per Week")])])]),r("app-timeline-item",{attrs:{variant:"danger"}},[r("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[r("div",[r("h6",{staticClass:"mb-0"},[e._v(" "+e._s(e.beautifyValue(e.stratusWeek*e.weeksInAMonth))+" FLUX ")]),r("small",{staticClass:"mt-0"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDRewardWeek*e.weeksInAMonth))+" USD)")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" "+e._s(e.beautifyValue(e.stratusWeek*e.weeksInAMonth*.1*5))+" FLUX Tokens ")]),r("small",{staticClass:"mt-0 mt-1"},[e._v("($"+e._s(e.beautifyValue(e.stratusUSDRewardWeek*e.weeksInAMonth*.1*5))+" USD)")]),r("h6",{staticClass:"mt-0 mt-1"},[e._v(" ~ $"+e._s(e.beautifyValue(e.stratusUSDRewardWeek*e.weeksInAMonth*.1*5+e.stratusUSDRewardWeek*e.weeksInAMonth))+" USD ")]),r("h6",{staticClass:"mb-0 mt-1"},[e._v(" VPS Cost ~ "+e._s(e.stratusHostingCost)+" USD ")])]),r("small",{staticClass:"text-muted"},[e._v("Per Month")])])])],1),r("b-row",[r("b-col",{staticClass:"border-top mt-2"},[r("b-card-text",{staticClass:"text-muted mt-1"},[e._v(" Profitability per month ")]),r("h4",{staticClass:"font-weight-bolder mb-50"},[e._v(" $"+e._s(e.beautifyValue(e.stratusUSDRewardWeek*e.weeksInAMonth*.1*5+e.stratusUSDRewardWeek*e.weeksInAMonth-e.stratusHostingCost))+" USD ")]),r("b-card-text",{staticClass:"text-muted mt-1"},[e._v(" Plus KDA Rewards ")])],1)],1)],1)],1)],1)],1)},n=[],s=r("1da1"),i=(r("4de4"),r("d3b7"),r("7db0"),r("b680"),r("ac1f"),r("5319"),r("96cf"),r("205f")),c=r("d6e4"),o=r("6197"),l=r("a15b"),u=r("b28b"),b=r("9b03"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",e._g(e._b({staticClass:"app-timeline"},"ul",e.$attrs,!1),e.$listeners),[e._t("default")],2)},f=[],m={},p=m,h=(r("45a8"),r("2877")),g=Object(h["a"])(p,d,f,!1,null,"1fc4912e",null),y=g.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",e._g(e._b({staticClass:"timeline-item",class:["timeline-variant-"+e.variant,e.fillBorder?"timeline-item-fill-border-"+e.variant:null]},"li",e.$attrs,!1),e.$listeners),[e.icon?r("div",{staticClass:"timeline-item-icon d-flex align-items-center justify-content-center rounded-circle"},[r("feather-icon",{attrs:{icon:e.icon}})],1):r("div",{staticClass:"timeline-item-point"}),e._t("default",(function(){return[r("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[r("h6",{domProps:{textContent:e._s(e.title)}}),r("small",{staticClass:"timeline-item-time text-nowrap text-muted",domProps:{textContent:e._s(e.time)}})]),r("p",{staticClass:"mb-0",domProps:{textContent:e._s(e.subtitle)}})]}))],2)},O=[],j={props:{variant:{type:String,default:"primary"},title:{type:String,default:null},subtitle:{type:String,default:null},time:{type:String,default:null},icon:{type:String,default:null},fillBorder:{type:Boolean,default:!1}}},w=j,C=(r("464d"),Object(h["a"])(w,v,O,!1,null,"384df2b1",null)),x=C.exports,k=r("b307"),_=r("e009"),D=r("1321"),S=r.n(D),R=r("94c8"),U=r("1d17"),P=r("c773"),V=r("0753"),W=r("bc3a"),T={components:{BCard:i["a"],BCardText:c["a"],BCardBody:o["a"],BRow:l["a"],BCol:u["a"],BOverlay:b["a"],AppTimeline:y,AppTimelineItem:x,VueApexCharts:S.a,ToastificationContent:k["a"]},directives:{Ripple:_["a"]},data:function(){var e=this;return{interceptorID:0,cumulusHostingCost:11,nimbusHostingCost:25,stratusHostingCost:52,weeksInAMonth:4.34812141,loadingPrice:!0,historicalPrices:[],cumulusWeek:0,nimbusWeek:0,stratusWeek:0,cumulusUSDRewardWeek:0,nimbusUSDRewardWeek:0,stratusUSDRewardWeek:0,cumulusCollateral:0,nimbusCollateral:0,stratusCollateral:0,latestPrice:0,lineChart:{series:[],chartOptions:{colors:[R["b"].primary],labels:["Price"],grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0},stacked:!0},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:0}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{formatter:function(t){return new Date(t).toLocaleString("en-GB",e.timeoptions)}},y:{formatter:function(t){return"$".concat(e.beautifyValue(t,2)," USD")}}}}},retryOptions:{raxConfig:{onRetryAttempt:function(e){var t=V.getConfig(e);console.log("Retry attempt #".concat(t.currentRetryAttempt))}}}}},mounted:function(){var e=this;this.interceptorID=V.attach(),this.getData(),setInterval((function(){e.getData()}),6e5)},unmounted:function(){V.detach(this.interceptorID)},methods:{getData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:P["a"].getScannedHeight().then((function(t){if("success"===t.data.status){var r=t.data.data.generalScannedHeight;e.cumulusCollateral=r<1076532?1e4:1e3,e.nimbusCollateral=r<1081572?25e3:12500,e.stratusCollateral=r<1087332?1e5:4e4}e.getRates()})),e.getPriceData();case 2:case"end":return t.stop()}}),t)})))()},getRates:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:W.get("https://vipdrates.zelcore.io/rates",e.retryOptions).then((function(t){e.rates=t.data,e.getZelNodeCount()}));case 1:case"end":return t.stop()}}),t)})))()},getPriceData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,e.loadingPrice=!0,W.get("https://api.coingecko.com/api/v3/coins/zelcash/market_chart?vs_currency=USD&days=30",e.retryOptions).then((function(t){r.historicalPrices=t.data.prices.filter((function(e){return e[0]>14832324e5}));for(var a=[],n=0;n<r.historicalPrices.length;n+=3){var s=r.historicalPrices[n];a.push(s),e.latestPrice=s[1]}r.lineChart.series=[{name:"Price",data:a}],e.loadingPrice=!1}));case 3:case"end":return t.stop()}}),t)})))()},getZelNodeCount:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U["a"].zelnodeCount();case 2:r=t.sent,"error"===r.data.status?e.$toast({component:k["a"],props:{title:r.data.data.message||r.data.data,icon:"InfoIcon",variant:"danger"}}):(a=r.data.data,n={},n["stratus-enabled"]=a["stratus-enabled"],n["bamf-enabled"]=a["stratus-enabled"],a["cumulus-enabled"]>a["nimbus-enabled"]?(n["nimbus-enabled"]=a["nimbus-enabled"],n["super-enabled"]=a["nimbus-enabled"],n["cumulus-enabled"]=a["cumulus-enabled"],n["basic-enabled"]=a["cumulus-enabled"]):(n["nimbus-enabled"]=a["cumulus-enabled"],n["super-enabled"]=a["cumulus-enabled"],n["cumulus-enabled"]=a["nimbus-enabled"],n["basic-enabled"]=a["nimbus-enabled"]),e.generateEconomics(n));case 4:case"end":return t.stop()}}),t)})))()},generateEconomics:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,c,o,l,u,b,d,f,m,p,h,g;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=e["stratus-enabled"],n=e["nimbus-enabled"],s=e["cumulus-enabled"],i=5.625,c=9.375,o=22.5,l=720*i*7/s,u=720*c*7/n,b=720*o*7/a,d=t.getFiatRate("FLUX")*i,f=t.getFiatRate("FLUX")*c,m=t.getFiatRate("FLUX")*o,p=5040*d/s,h=5040*f/n,g=5040*m/a,t.cumulusWeek=l,t.nimbusWeek=u,t.stratusWeek=b,t.cumulusUSDRewardWeek=p,t.nimbusUSDRewardWeek=h,t.stratusUSDRewardWeek=g;case 21:case"end":return r.stop()}}),r)})))()},getFiatRate:function(e){var t="USD",r=this.rates[0].find((function(e){return e.code===t}));void 0===r&&(r={rate:0});var a=this.rates[1][e];void 0===a&&(a=0);var n=r.rate*a;return n},beautifyValue:function(e){var t=e.toFixed(2);return t.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},A=T,$=Object(h["a"])(A,a,n,!1,null,null,null);t["default"]=$.exports}}]);